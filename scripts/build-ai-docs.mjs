#!/usr/bin/env node
/**
 * Gera a documentação do Lume para IAs (ia/*.md) a partir das páginas reais do site.
 * Abre cada página num Chrome ou Edge sem janela, lê o conteúdo já desenhado e converte para Markdown:
 * texto, regras de uso (faça / evite), acessibilidade, anatomia, tabelas de tokens e a marcação dos exemplos.
 *
 * Gera nos três idiomas do site: português em ia/ (índice em /llms.txt), inglês em ia/en/ e espanhol em ia/es/.
 * Também gera, em cada idioma, o índice llms.txt, a lista de ícones e o zip da skill.
 * Os textos escritos à mão (LEIA-ME/README/LEEME, AGENTS.md e skill/ de cada idioma) não são tocados.
 * Sobe o próprio servidor de desenvolvimento numa porta livre. Uso:
 *   npm run ia            (ou: node scripts/build-ai-docs.mjs [--lang en] [--only componentes/botao])
 */
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import zlib from 'node:zlib';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (name, fb) => { const i = process.argv.indexOf(`--${name}`); return i < 0 ? fb : process.argv[i + 1]; };
const SERVE_PORT = 5199;
const BASE = arg('url', `http://localhost:${SERVE_PORT}`);
const ONLY = arg('only');
const PORT = 9338;

const BROWSERS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];
const browser = BROWSERS.find(existsSync);
if (!browser) throw new Error('Nenhum Chrome ou Edge encontrado.');

/* Roda dentro da página: converte o conteúdo aberto em Markdown. */
async function pageToMarkdown(S) {
  const { icons } = await import('/ds/icons/icons.js');
  const norm = (s) => { const t = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); t.innerHTML = s; return t.innerHTML.replace(/\s+/g, ' '); };
  const iconByBody = new Map(Object.values(icons).map((i) => [norm(i.body), i.name]));
  const main = document.querySelector('.ds-main__content');
  const clean = (s) => s.replace(/\s+/g, ' ').trim();
  // texto com estrutura: código entre crases e blocos separados, para nada sair grudado ("Primáriods-btn--primary")
  const txt = (el) => {
    if (el.nodeType === 3) return el.textContent;
    if (el.nodeType !== 1 || el.matches('svg, ds-icon, [aria-hidden="true"]:not(code)')) return '';
    if (el.matches('code')) return ` \`${el.textContent.trim()}\` `;
    if (el.matches('kbd')) return ` ${el.textContent.trim()} `;
    const parts = [];
    let inline = '';
    for (const c of el.childNodes) {
      const block = c.nodeType === 1 && !['inline', 'inline-block', 'inline-flex', 'contents'].includes(getComputedStyle(c).display) && !c.matches('code, kbd, a, strong, em, b, i');
      if (block) { if (clean(inline)) parts.push(clean(inline)); inline = ''; const t = clean(txt(c)); if (t) parts.push(t); }
      else inline += txt(c);
    }
    if (clean(inline)) parts.push(clean(inline));
    return parts.join(' — ');
  };
  const out = [];
  const title = clean(main.querySelector('h1')?.textContent ?? document.title);
  const eyebrow = clean(main.querySelector('.doc-header__eyebrow')?.textContent ?? '');
  out.push(`# ${title}`, '');
  if (eyebrow) out.push(`${S.section}: ${eyebrow}. ${S.page}: ${location.origin.replace(/localhost:\d+/, 'lumeui.dev').replace('http:', 'https:')}/${location.hash}`, '');
  const lead = main.querySelector('.doc-header__lead');
  if (lead) out.push(txt(lead), '');
  const stats = [...main.querySelectorAll('.doc-header .doc-stat')].map((s) => `${clean(s.querySelector('dt').textContent)}: ${clean(s.querySelector('dd').textContent)}`);
  if (stats.length) out.push(`${S.numbers}: ${stats.join(' · ')}.`, '');

  // marcação de exemplo: o componente como ele é usado, sem o SVG dos ícones nem estado de demonstração
  const markup = (el) => {
    const c = el.cloneNode(true);
    c.querySelectorAll('ds-icon').forEach((i) => { i.innerHTML = ''; i.removeAttribute('style'); });
    c.querySelectorAll('svg.ds-icon').forEach((s) => { const n = document.createElement('ds-icon'); n.setAttribute('name', iconByBody.get(s.innerHTML.replace(/\s+/g, ' ')) ?? '…'); s.replaceWith(n); });
    [c, ...c.querySelectorAll('*')].forEach((n) => { n.removeAttribute('style'); n.removeAttribute('data-state'); n.removeAttribute('inert'); n.removeAttribute('tabindex'); n.removeAttribute('data-num'); if (n.classList?.length) { [...n.classList].filter((k) => !k.startsWith('ds-')).forEach((k) => n.classList.remove(k)); if (!n.classList.length) n.removeAttribute('class'); } });
    // ids sorteados a cada carga viram fixos, para o arquivo só mudar quando a página muda
    return c.outerHTML.replace(/ds-field-[a-z0-9]{4,}/g, 'ds-field-1').replace(/md-prev-[a-z0-9]{4,}/g, 'md-prev').replace(/<ds-icon><\/ds-icon>/g, '<ds-icon name="…"></ds-icon>').replace(/\s+/g, ' ').replace(/> </g, '>\n<').trim();
  };
  const isDs = (el) => [...el.classList].some((k) => k.startsWith('ds-') && !k.startsWith('ds-section') && k !== 'ds-inline-code');

  for (const sec of main.querySelectorAll('section.doc-section')) {
    const h2 = sec.querySelector('h2');
    if (!h2) continue;
    const name = clean(h2.textContent);
    if (/^playground$/i.test(name)) {
      const code = sec.querySelector('pre');
      out.push(`## ${S.example}`, '', '```html', code ? code.textContent.trim() : '', '```', '');
      continue;
    }
    out.push(`## ${name}`, '');
    const seen = new Set();
    const examples = [];
    const walk = (node) => {
      for (const el of node.children) {
        if (el.matches('.doc-section__header, header')) { const d = el.querySelector('.doc-section__desc'); if (d) out.push(txt(d), ''); continue; }
        if (el.matches('h2, .cd-playground__theme, [data-stage-theme], button.cd-copy, .doc-section__head > :not(.doc-section__desc)')) continue;
        if (el.matches('.doc-section__desc')) { out.push(txt(el), ''); continue; }
        if (el.matches('.doc-table')) {
          const head = [...el.querySelectorAll('.doc-table__head > *')].map((c) => clean(c.textContent));
          const rows = [...el.querySelectorAll('.doc-table__row')].map((r) => [...r.children].map((c) => {
            const name = c.querySelector(':scope > span');
            const code = c.querySelector(':scope > code');
            return (name && code ? `${clean(name.textContent)} (\`${clean(code.textContent)}\`)` : txt(c)).replace(/\|/g, '\\|');
          }));
          if (rows.length) {
            const cols = head.length || rows[0].length;
            out.push(`| ${(head.length ? head : rows[0].map(() => ' ')).join(' | ')} |`, `| ${Array(cols).fill('---').join(' | ')} |`, ...rows.map((r) => `| ${r.join(' | ')} |`), '');
          }
          continue;
        }
        if (el.matches('h3, h4')) { out.push(`### ${clean(el.textContent)}`, ''); continue; }
        if (el.matches('pre')) { out.push('```html', el.textContent.trim(), '```', ''); continue; }
        if (el.matches('table')) {
          const rows = [...el.rows].map((r) => [...r.cells].map((c) => clean(c.textContent).replace(/\|/g, '\\|')));
          if (rows.length) {
            out.push(`| ${rows[0].join(' | ')} |`, `| ${rows[0].map(() => '---').join(' | ')} |`, ...rows.slice(1).map((r) => `| ${r.join(' | ')} |`), '');
          }
          continue;
        }
        if (el.matches('.usage-card')) {
          const kind = el.classList.contains('usage-card--do') ? S.do : el.classList.contains('usage-card--dont') ? S.dont : S.tip;
          const head = clean(el.querySelector('.usage-card__head')?.textContent ?? '').replace(/^(Faça|Evite|Do|Avoid|Haz|Evita)\s*:\s*/i, '');
          const text = clean(el.querySelector('.usage-card__text')?.textContent ?? '');
          out.push(`- **${kind}:** ${head}. ${text}`.replace(/\.\./g, '.'));
          continue;
        }
        if (el.matches('ul, ol, dl') && !isDs(el)) {
          const items = el.matches('dl') ? [...el.querySelectorAll('dt')].map((dt) => `${clean(dt.textContent)}: ${clean(dt.nextElementSibling?.textContent ?? '')}`) : [...el.children].map((li) => txt(li));
          out.push(...items.filter(Boolean).map((t) => `- ${t}`), "");
          continue;
        }
        if (isDs(el) && !el.closest('pre')) {
          const m = markup(el);
          if (!seen.has(m) && m.length < 1600) { seen.add(m); examples.push(m); }
          continue;
        }
        if (el.matches('p') && clean(el.textContent)) { out.push(txt(el), ''); continue; }
        if (el.matches('div, article') && !el.querySelector('section, table, pre, ul, ol, .doc-table, .usage-card') && !isDs(el) && !el.querySelector('[class*="ds-"]') && clean(el.textContent)) { out.push(txt(el), ''); continue; }
        walk(el);
      }
    };
    walk(sec);
    if (out.at(-1) !== '' ) out.push('');
    if (examples.length) out.push(`${S.markup}:`, '', '```html', examples.slice(0, 8).join('\n\n'), '```', '');
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n').replace(/` ([.,;:)])/g, '`$1').replace(/\( `/g, '(`').trim() + '\n';
}

const SITE = 'https://lumeui.dev';

/* Cada idioma: pasta, nomes dos arquivos e os textos fixos */
const LANGS = {
  'pt-BR': {
    dir: 'ia', url: `${SITE}/ia`, llms: 'llms.txt', readme: 'LEIA-ME.md', icons: 'icones.md', kw: null,
    S: { section: 'Seção do Lume', page: 'Página', numbers: 'Em números', example: 'Exemplo', do: 'Faça', dont: 'Evite', tip: 'Dica', markup: 'Marcação dos exemplos desta seção' },
    T: {
      summary: 'Design system em HTML, CSS e JavaScript nativos, sem dependências: tokens, tipografia, 130 ícones próprios, componentes, gráficos e padrões de tela, nos temas claro e escuro. Versão',
      start: 'Comece por [LEIA-ME]({readme}): instalação, regras gerais e o que nunca inventar. Cada página do site tem um arquivo Markdown abaixo, gerado a partir dela.',
      first: 'Para começar', readmeDesc: 'regras para IAs, instalação e direção visual', agents: 'regras curtas para copiar para a raiz de um projeto',
      iconsLabel: 'Ícones', iconsDesc: 'a lista exata dos nomes que `<ds-icon>` aceita', skill: 'Skill para o Claude', skillDesc: 'a mesma orientação em formato de skill',
      others: 'Outros idiomas', main: 'Lume',
      iconsTitle: 'Ícones do Lume',
      iconsIntro: (n) => `São ${n} ícones desenhados para o Lume: grade de 24, traço de 1,5, pontas arredondadas. Use só estes nomes, em \`<ds-icon name="…">\` (com https://lumeui.dev/ds/icons/icons.js importado) ou na função \`icon(name)\` do mesmo módulo. Não existe nenhum outro nome.`,
      iconsSize: 'O tamanho padrão é 20 px; o traço fica em 1,75 abaixo de 16 px. O ícone herda a cor do texto. Em botões só com ícone, dê um nome ao botão com aria-label.',
      name: 'Nome', keywords: 'Palavras-chave',
    },
  },
  en: {
    dir: 'ia/en', url: `${SITE}/ia/en`, llms: 'ia/en/llms.txt', readme: 'README.md', icons: 'icons.md', kw: 0,
    S: { section: 'Lume section', page: 'Page', numbers: 'In numbers', example: 'Example', do: 'Do', dont: 'Avoid', tip: 'Tip', markup: 'Markup of the examples in this section' },
    T: {
      summary: 'A design system in native HTML, CSS, and JavaScript, with no dependencies: tokens, typography, 130 custom icons, components, charts, and screen patterns, in light and dark themes. Version',
      start: 'Start with [README]({readme}): installation, general rules, and what never to invent. Every page of the site has a Markdown file below, generated from it.',
      first: 'Getting started', readmeDesc: 'rules for AIs, installation, and visual direction', agents: 'short rules to copy into a project root',
      iconsLabel: 'Icons', iconsDesc: 'the exact list of names `<ds-icon>` accepts', skill: 'Claude skill', skillDesc: 'the same guidance as a skill',
      others: 'Other languages', main: 'Lume',
      iconsTitle: 'Lume icons',
      iconsIntro: (n) => `There are ${n} icons drawn for Lume: a 24 grid, a 1.5 stroke, round caps. Use only these names, in \`<ds-icon name="…">\` (with https://lumeui.dev/ds/icons/icons.js imported) or in the \`icon(name)\` function from the same module. No other name exists.`,
      iconsSize: 'The default size is 20 px; the stroke becomes 1.75 below 16 px. The icon inherits the text color. In icon-only buttons, name the button with aria-label.',
      name: 'Name', keywords: 'Keywords',
    },
  },
  es: {
    dir: 'ia/es', url: `${SITE}/ia/es`, llms: 'ia/es/llms.txt', readme: 'LEEME.md', icons: 'iconos.md', kw: 1,
    S: { section: 'Sección de Lume', page: 'Página', numbers: 'En números', example: 'Ejemplo', do: 'Haz', dont: 'Evita', tip: 'Consejo', markup: 'Marcado de los ejemplos de esta sección' },
    T: {
      summary: 'Design system en HTML, CSS y JavaScript nativos, sin dependencias: tokens, tipografía, 130 íconos propios, componentes, gráficos y patrones de pantalla, en los temas claro y oscuro. Versión',
      start: 'Empieza por [LEEME]({readme}): instalación, reglas generales y lo que nunca inventar. Cada página del sitio tiene un archivo Markdown abajo, generado a partir de ella.',
      first: 'Para empezar', readmeDesc: 'reglas para IAs, instalación y dirección visual', agents: 'reglas cortas para copiar a la raíz de un proyecto',
      iconsLabel: 'Íconos', iconsDesc: 'la lista exacta de nombres que acepta `<ds-icon>`', skill: 'Skill para Claude', skillDesc: 'la misma orientación en formato de skill',
      others: 'Otros idiomas', main: 'Lume',
      iconsTitle: 'Íconos de Lume',
      iconsIntro: (n) => `Son ${n} íconos dibujados para Lume: cuadrícula de 24, trazo de 1,5, puntas redondeadas. Usa solo estos nombres, en \`<ds-icon name="…">\` (con https://lumeui.dev/ds/icons/icons.js importado) o en la función \`icon(name)\` del mismo módulo. No existe ningún otro nombre.`,
      iconsSize: 'El tamaño predeterminado es 20 px; el trazo pasa a 1,75 por debajo de 16 px. El ícono hereda el color del texto. En botones solo con ícono, nombra el botón con aria-label.',
      name: 'Nombre', keywords: 'Palabras clave',
    },
  },
};
const OTHER_LINKS = [
  ['Português', `${SITE}/llms.txt`, 'pt-BR'],
  ['English', `${SITE}/ia/en/llms.txt`, 'en'],
  ['Español', `${SITE}/ia/es/llms.txt`, 'es'],
];
const CATEGORIES = {
  navegacao: ['Navigation', 'Navegación'], acoes: ['Actions', 'Acciones'], status: ['Status and feedback', 'Estado y feedback'], interface: ['Interface', 'Interfaz'],
  objetos: ['Objects', 'Objetos'], design: ['Design', 'Diseño'], graficos: ['Charts', 'Gráficos'], pessoas: ['People', 'Personas'],
};

/** llms.txt: o índice que as IAs procuram, no formato de llmstxt.org. */
async function writeIndex(lang, L, info, routes) {
  const T = L.T;
  const readme = `${L.url}/${L.readme}`;
  const lines = [
    '# Lume Design System',
    '',
    `> ${T.summary} ${info.version}.`,
    '',
    T.start.replace('{readme}', readme),
    '',
    `## ${T.first}`,
    '',
    `- [${L.readme.replace('.md', '')}](${readme}): ${T.readmeDesc}`,
    `- [AGENTS.md](${L.url}/AGENTS.md): ${T.agents}`,
    `- [${T.iconsLabel}](${L.url}/${L.icons}): ${T.iconsDesc}`,
    `- [${T.skill}](${L.url}/lume-design-system.zip): ${T.skillDesc}`,
  ];
  for (const g of info.groups) {
    const items = g.items.filter((p) => routes.includes(p.path));
    if (!items.length) continue;
    lines.push('', `## ${g.label ?? T.main}`, '');
    for (const p of items) lines.push(`- [${p.label}](${L.url}/${p.path}.md): ${p.description}`);
  }
  lines.push('', `## ${T.others}`, '', ...OTHER_LINKS.filter((o) => o[2] !== lang).map(([n, u]) => `- [${n}](${u})`));
  await writeFile(path.join(ROOT, L.llms), `${lines.join('\n')}\n`);
  console.log(`✓ ${L.llms}`);
}

async function writeIcons(L, info, keywords) {
  const T = L.T;
  const byCat = new Map();
  for (const i of info.icons) {
    const cat = L.kw === null ? i.categoryLabel : CATEGORIES[i.category]?.[L.kw] ?? i.categoryLabel;
    const kw = L.kw === null ? i.keywords : (keywords[i.name]?.[L.kw] ?? '').split(' ').filter(Boolean).join(', ');
    byCat.set(cat, [...(byCat.get(cat) ?? []), { name: i.name, kw }]);
  }
  const lines = [`# ${T.iconsTitle}`, '', T.iconsIntro(info.icons.length), '', '```html', '<ds-icon name="search" size="20"></ds-icon>', '```', '', T.iconsSize];
  for (const [cat, list] of byCat) {
    lines.push('', `## ${cat}`, '', `| ${T.name} | ${T.keywords} |`, '| --- | --- |', ...list.map((i) => `| \`${i.name}\` | ${i.kw} |`));
  }
  await writeFile(path.join(ROOT, L.dir, L.icons), `${lines.join('\n')}\n`);
  console.log(`✓ ${L.dir}/${L.icons}`);
}

/** Zip mínimo (deflate), para a skill subir direto no Claude. */
async function writeSkillZip(L) {
  const name = 'lume-design-system/SKILL.md';
  const data = await readFile(path.join(ROOT, L.dir, 'skill', name));
  const comp = zlib.deflateRawSync(data);
  const crc = zlib.crc32(data);
  const n = Buffer.from(name);
  const local = Buffer.alloc(30); local.writeUInt32LE(0x04034b50, 0); local.writeUInt16LE(20, 4); local.writeUInt16LE(0x0800, 6); local.writeUInt16LE(8, 8); local.writeUInt32LE(0x00210000, 10); local.writeUInt32LE(crc, 14); local.writeUInt32LE(comp.length, 18); local.writeUInt32LE(data.length, 22); local.writeUInt16LE(n.length, 26);
  const central = Buffer.alloc(46); central.writeUInt32LE(0x02014b50, 0); central.writeUInt16LE(20, 4); central.writeUInt16LE(20, 6); central.writeUInt16LE(0x0800, 8); central.writeUInt16LE(8, 10); central.writeUInt32LE(0x00210000, 12); central.writeUInt32LE(crc, 16); central.writeUInt32LE(comp.length, 20); central.writeUInt32LE(data.length, 24); central.writeUInt16LE(n.length, 28);
  const centralStart = local.length + n.length + comp.length;
  const end = Buffer.alloc(22); end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(1, 8); end.writeUInt16LE(1, 10); end.writeUInt32LE(central.length + n.length, 12); end.writeUInt32LE(centralStart, 16);
  await writeFile(path.join(ROOT, L.dir, 'lume-design-system.zip'), Buffer.concat([local, n, comp, central, n, end]));
  console.log(`✓ ${L.dir}/lume-design-system.zip`);
}

async function main() {
  const server = arg('url') ? null : spawn(process.execPath, [path.join(ROOT, 'scripts', 'serve.mjs')], { env: { ...process.env, PORT: String(SERVE_PORT) }, stdio: 'ignore' });
  for (let i = 0; i < 60; i++) { try { if ((await fetch(`${BASE}/index.html`)).ok) break; } catch {} await new Promise((r) => setTimeout(r, 250)); }
  const profile = await mkdtemp(path.join(os.tmpdir(), 'lume-ia-'));
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
    const SKIP = ['', 'novidades', 'roadmap', 'recursos/ia'];
    const only = arg('lang');
    for (const [lang, L] of Object.entries(LANGS)) {
      if (only && only !== lang) continue;
      // o idioma é lido ao carregar a página: grava e recarrega
      await send('Page.navigate', { url: `${BASE}/index.html#/` });
      await new Promise((r) => setTimeout(r, 1500));
      await evaluate(`localStorage.setItem('ds-locale', '${lang}'); localStorage.setItem('ds-theme', 'light'); true`);
      await send('Page.navigate', { url: `${BASE}/index.html?l=${lang}#/` });
      await new Promise((r) => setTimeout(r, 2500));
      const routes = ONLY ? [ONLY] : (await evaluate(`import('/site/nav.js').then((m) => m.pages.map((p) => p.path.slice(1)))`)).filter((r) => !SKIP.includes(r));
      for (const route of routes) {
        await evaluate(`location.hash = '#/${route}'; new Promise((r) => setTimeout(r, 1200))`);
        const md = await evaluate(`(${pageToMarkdown.toString()})(${JSON.stringify(L.S)})`);
        if (!md || md.length < 80) throw new Error(`página vazia: ${lang} ${route}`);
        const file = path.join(ROOT, L.dir, `${route}.md`);
        await mkdir(path.dirname(file), { recursive: true });
        await writeFile(file, md);
        console.log(`✓ ${L.dir}/${route}.md`);
      }
      if (!ONLY) {
        const info = await evaluate(`Promise.all([import('/site/nav.js'), import('/ds/icons/icons.js'), import('/site/changelog.js')]).then(([nav, ic, ch]) => ({
          groups: nav.navigation.map((g) => ({ label: g.label, items: g.items.map((p) => ({ path: p.path.slice(1), label: p.label, description: p.description })) })),
          icons: ic.iconList.map((i) => ({ name: i.name, category: i.category, categoryLabel: ic.iconCategories[i.category], keywords: i.keywords.join(', ') })),
          version: ch.CURRENT_VERSION,
        }))`);
        const { ICON_KEYWORDS } = await import(new URL('../site/icon-keywords.js', import.meta.url));
        await writeIndex(lang, L, info, routes);
        await writeIcons(L, info, ICON_KEYWORDS);
        await writeSkillZip(L);
      }
    }
    ws.close();
  } finally {
    proc.kill();
    server?.kill();
    await new Promise((r) => setTimeout(r, 400));
    await rm(profile, { recursive: true, force: true }).catch(() => {});
  }
}

await main();
