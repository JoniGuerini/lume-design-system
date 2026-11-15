#!/usr/bin/env node
/**
 * Gera as histórias do Storybook (storybook/stories/componentes/*.stories.js) a partir das páginas reais do site:
 * abre cada página de componente num Chrome sem janela e leva cada seção de exemplos para uma história
 * ao vivo (importa a página e liga o JavaScript dela, por storybook/stories/live.js), com o mesmo arranjo da página (o CSS das páginas entra no Storybook pelo preview-head.html, também gerado aqui).
 *
 * Uso: npm run stories   (depois: cd storybook && npm run storybook)
 */
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'storybook', 'stories', 'componentes');
const SERVE_PORT = 5196;
const BASE = `http://localhost:${SERVE_PORT}`;
const PORT = 9340;
// seções só de texto e tabela
const SKIP_SECTIONS = ['acessibilidade', 'tokens', 'api', 'teclado'];

const BROWSERS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];
const browser = BROWSERS.find(existsSync);
if (!browser) throw new Error('Nenhum Chrome ou Edge encontrado.');

/* Roda na página: cada seção com exemplos vira { name, html } */
function harvest(skip) {
  const main = document.querySelector('.ds-main__content');
  const clean = (s) => s.replace(/\s+/g, ' ').trim();
  const lead = clean(main.querySelector('.doc-header__lead')?.textContent ?? '');
  const sections = [];
  for (const sec of main.querySelectorAll('section.doc-section')) {
    if (!sec.id || skip.includes(sec.id)) continue;
    const name = clean(sec.querySelector('h2')?.textContent ?? sec.id);
    const desc = clean(sec.querySelector('.doc-section__desc')?.textContent ?? '');
    let html;
    if (sec.id === 'playground') {
      const preview = sec.querySelector('[data-preview]');
      if (!preview) continue;
      html = `<div class="cd-playground__preview" style="min-height:0">${preview.innerHTML}</div>`;
    } else {
      const parts = [...sec.children].filter((c) => !c.matches('header, .doc-section__header'));
      if (!parts.some((p) => p.querySelector('[class*="ds-"]:not(.ds-inline-code)'))) continue;
      html = parts.map((p) => p.outerHTML).join('\n');
    }
    // estados de demonstração e travas do site não fazem sentido no Storybook
    html = html.replace(/\sinert(="")?/g, '');
    sections.push({ id: sec.id, name, desc, html });
  }
  return { lead, sections };
}

async function main() {
  const server = spawn(process.execPath, [path.join(ROOT, 'scripts', 'serve.mjs')], { env: { ...process.env, PORT: String(SERVE_PORT) }, stdio: 'ignore' });
  for (let i = 0; i < 60; i++) { try { if ((await fetch(`${BASE}/index.html`)).ok) break; } catch {} await new Promise((r) => setTimeout(r, 250)); }
  const profile = await mkdtemp(path.join(os.tmpdir(), 'lume-stories-'));
  const proc = spawn(browser, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, '--no-first-run', '--window-size=1440,900', 'about:blank'], { stdio: 'ignore' });
  try {
    let wsUrl;
    for (let i = 0; i < 80 && !wsUrl; i++) {
      try { wsUrl = (await (await fetch(`http://127.0.0.1:${PORT}/json`)).json()).find((x) => x.type === 'page')?.webSocketDebuggerUrl; } catch {}
      if (!wsUrl) await new Promise((r) => setTimeout(r, 250));
    }
    const ws = new WebSocket(wsUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
    let id = 0;
    const waiting = new Map();
    ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && waiting.has(m.id)) { const w = waiting.get(m.id); waiting.delete(m.id); m.error ? w.rej(new Error(m.error.message)) : w.res(m.result); } };
    const send = (method, params = {}) => new Promise((res, rej) => { const n = ++id; waiting.set(n, { res, rej }); ws.send(JSON.stringify({ id: n, method, params })); });
    const evaluate = async (expression) => {
      const r = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
      if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description ?? r.exceptionDetails.text);
      return r.result.value;
    };
    await send('Runtime.enable');
    await send('Page.navigate', { url: `${BASE}/index.html#/` });
    await new Promise((r) => setTimeout(r, 1500));
    await evaluate(`localStorage.setItem('ds-locale', 'pt-BR'); localStorage.setItem('ds-theme', 'light'); true`);
    await send('Page.navigate', { url: `${BASE}/index.html?stories=1#/` });
    await new Promise((r) => setTimeout(r, 2500));
    const pages = await evaluate(`import('/site/nav.js').then((m) => { return ['componentes', 'graficos'].flatMap((gid) => { const g = m.navigation.find((x) => x.id === gid); return g.items.map((p) => ({ group: gid, groupLabel: g.label, path: p.path, label: p.label, section: g.sectionLabel(p.section), file: String(p.load).match(/pages.([a-z0-9-]+).js/)?.[1] })); }); })`);

    // índice da Introdução: seções do menu Componentes e cada componente, nos três idiomas
    const indice = await evaluate(`Promise.all([import('/site/nav.js'), import('/ds/js/i18n.js')]).then(([nav, i18n]) => {
      const out = { sections: [] };
      for (const lang of ['pt-BR', 'en', 'es']) {
        i18n.setLocale(lang, { persist: false });
        const g = nav.navigation.find((x) => x.id === 'componentes');
        g.items.forEach((p) => {
          let sec = out.sections.find((s) => s.id === p.section);
          if (!sec) out.sections.push((sec = { id: p.section, label: {}, items: [] }));
          sec.label[lang] = g.sectionLabel(p.section);
          const slug = p.path.split('/').pop();
          let item = sec.items.find((i) => i.slug === slug);
          if (!item) sec.items.push((item = { slug, icon: p.icon, label: {}, description: {} }));
          item.label[lang] = p.label;
          item.description[lang] = p.description;
        });
      }
      i18n.setLocale('pt-BR', { persist: false });
      return out;
    })`);
    await writeFile(path.join(ROOT, 'storybook', 'stories', 'indice.js'), `// Gerado por scripts/build-stories.mjs a partir de site/nav.js. Não edite: rode npm run stories.\nexport const SECTIONS = ${JSON.stringify(indice.sections, null, 2)};\n`);
    console.log(`✓ storybook/stories/indice.js: ${indice.sections.length} seções`);

    // gráficos ficam numa pasta e num grupo próprios do Storybook, como no menu do site
    const GRAFICOS = path.join(ROOT, 'storybook', 'stories', 'graficos');
    for (const dir of [OUT, GRAFICOS]) {
      await rm(dir, { recursive: true, force: true });
      await mkdir(dir, { recursive: true });
    }
    for (const p of pages) {
      await evaluate(`location.hash = '#${p.path}'; new Promise((r) => setTimeout(r, 1000))`);
      const { lead, sections } = await evaluate(`(${harvest.toString()})(${JSON.stringify(SKIP_SECTIONS)})`);
      const slug = p.path.split('/').pop();
      // o nome exportado vira o endereço da história: Variantes → componentes-botao--variantes
      const ident = (id) => { const n = id.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(''); return /^\d/.test(n) ? `S${n}` : n; };
      const stories = sections.map((s) => `export const ${ident(s.id)} = {
  name: ${JSON.stringify(s.name)},
  parameters: { docs: { description: { story: ${JSON.stringify(s.desc)} } } },
  render: () => liveStory(page, ${JSON.stringify(s.id)}, INFO),
};`).join('\n\n');
      // histórias com controles, escritas à mão em storybook/stories/extras/<slug>.js, entram primeiro
      const extraFile = path.join(ROOT, 'storybook', 'stories', 'extras', `${slug}.js`);
      const extras = existsSync(extraFile) ? `${(await readFile(extraFile, 'utf8')).trim()}\n\n` : '';
      const file = `// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#${p.path}. Não edite: rode npm run stories.
import * as page from '../../../site/pages/${p.file}.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: ${JSON.stringify(p.path)}, group: '', label: ${JSON.stringify(p.label)} };

export default {
  title: ${JSON.stringify(p.group === 'graficos' ? `${p.groupLabel}/${p.label}` : `Componentes/${p.section}/${p.label}`)},
  id: ${JSON.stringify(`${p.group}-${slug}`)},
  parameters: { docs: { description: { component: ${JSON.stringify(`${lead}\n\nDocumentação completa: https://lumeui.dev/#${p.path}`)} } } },
};

${extras}${stories}
`;
      await writeFile(path.join(p.group === 'graficos' ? GRAFICOS : OUT, `${slug}.stories.js`), file);
      console.log(`✓ ${slug}: ${sections.length} histórias`);
    }
    ws.close();
  } finally {
    proc.kill();
    server.kill();
    await new Promise((r) => setTimeout(r, 400));
    await rm(profile, { recursive: true, force: true }).catch(() => {});
  }

  // o CSS de cada página do site, para os exemplos terem o mesmo arranjo
  const css = (await readdir(path.join(ROOT, 'site', 'pages'))).filter((f) => f.endsWith('.css')).sort();
  await writeFile(path.join(ROOT, 'storybook', '.storybook', 'preview-head.html'), `<!-- Gerado por scripts/build-stories.mjs -->
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml" />
<link rel="stylesheet" href="ds/ds.css" />
<link rel="stylesheet" href="site/docs.css" />
<link rel="stylesheet" href="site/component-doc.css" />
<link rel="stylesheet" href="site/pages/form-controls.css" />
${css.filter((f) => f !== 'form-controls.css').map((f) => `<link rel="stylesheet" href="site/pages/${f}" />`).join('\n')}
<style>
  body { background: var(--ds-color-bg-app); color: var(--ds-color-fg-default); font: var(--ds-text-body-md); }
  .lume-story { display: block; }
</style>
`);
  console.log('✓ storybook/.storybook/preview-head.html');
}

await main();
