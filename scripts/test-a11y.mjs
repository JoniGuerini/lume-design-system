#!/usr/bin/env node
/**
 * Teste de acessibilidade do Lume, sem dependências.
 *
 * Abre cada página do site num Chrome ou Edge sem janela, nos dois temas, e confere o que dá para conferir sem
 * uma pessoa olhando:
 *   nome      botão, link, campo e controle com papel (switch, aba, slider…) sem nome acessível
 *   rótulo    campo de formulário sem <label>, aria-label ou aria-labelledby
 *   imagem    <img> sem alt; svg com papel de imagem sem nome
 *   ids       id repetido; aria-labelledby, aria-describedby ou aria-controls apontando para id que não existe
 *   foco      tabindex maior que 0; elemento focável dentro de aria-hidden
 *   contraste texto abaixo de 4,5:1 (3:1 para texto grande), medido sobre o fundo de verdade (as camadas de cima a baixo)
 *   título    página sem h1 ou com mais de um; nível de título pulado (h2 → h4)
 *
 * Fica de fora o que é desligado de propósito (disabled, aria-disabled, inert, escondido) e o que a regra do WCAG
 * isenta (logotipo, texto dentro de imagem ou gráfico desenhado). Exceções conscientes ficam em ALLOW, com o motivo.
 *
 *   npm run test:a11y                         todas as páginas, claro e escuro; sai com erro se achar algo
 *   npm run test:a11y -- --only botao,cores   só essas páginas (o fim do caminho)
 *
 * Relatório: dist/test-a11y/relatorio.html.
 */
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'dist', 'test-a11y');
const arg = (name) => { const i = process.argv.indexOf(`--${name}`); return i < 0 ? undefined : process.argv[i + 1]; };
const ONLY = arg('only')?.split(',');
const SERVE_PORT = 5197;
const BASE = `http://localhost:${SERVE_PORT}`;
const PORT = 9341;
const THEMES = ['light', 'dark'];

/**
 * Exceções conscientes: [regra, seletor CSS, motivo]. O seletor é testado com closest() no elemento acusado.
 */
const ALLOW = [
  ['contraste', '.swatch, .contrast-sample', 'Amostras da página Cores: mostram o par de cores que a tabela mede, inclusive os de 3:1 (contornos e gráficos).'],
  ['contraste', '.ds-chart svg, canvas', 'Gráficos: os valores também estão na tabela de dados.'],
  ['contraste', '.ds-brand, .ds-brand__name', 'Logotipo: isento pelo WCAG (1.4.3).'],
  ['contraste', '[aria-hidden="true"]', 'Decoração escondida dos leitores de tela (anatomias e miniaturas).'],
];

const BROWSERS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];
const browser = BROWSERS.find(existsSync);
if (!browser) throw new Error('Nenhum Chrome ou Edge encontrado.');

/* Roda na página: devolve [{ rule, msg, where, html }] */
function audit(allow) {
  const root = document.querySelector('.ds-main__content') ?? document.body;
  const out = [];
  const allowed = (rule, el) => allow.some(([r, sel]) => r === rule && el.closest(sel));
  const cssPath = (el) => {
    const parts = [];
    for (let n = el; n && n !== root && parts.length < 4; n = n.parentElement) {
      let p = n.tagName.toLowerCase();
      if (n.id) { parts.unshift(`${p}#${n.id}`); break; }
      const cls = [...n.classList].filter((c) => !c.startsWith('is-')).slice(0, 2);
      if (cls.length) p += `.${cls.join('.')}`;
      parts.unshift(p);
    }
    const sec = el.closest('section.doc-section');
    return (sec ? `#${sec.id} › ` : '') + parts.join(' > ');
  };
  const snippet = (el) => el.outerHTML.replace(/\s+/g, ' ').slice(0, 220);
  const report = (rule, el, msg) => { if (!allowed(rule, el)) out.push({ rule, msg, where: cssPath(el), html: snippet(el) }); };

  const hiddenByCss = (el) => {
    for (let n = el; n; n = n.parentElement) {
      if (n.hidden || n.inert) return true;
      const cs = getComputedStyle(n);
      if (cs.display === 'none' || cs.visibility === 'hidden' || cs.contentVisibility === 'hidden') return true;
    }
    return false;
  };
  const ariaHidden = (el) => !!el.closest('[aria-hidden="true"]');
  const visible = (el) => !hiddenByCss(el) && el.getClientRects().length > 0;

  const textOf = (n) => {
    if (n.nodeType === 3) return n.textContent;
    if (n.nodeType !== 1) return '';
    if (n.getAttribute('aria-hidden') === 'true') return '';
    if (n.matches('img')) return n.getAttribute('alt') ?? '';
    if (n.matches('svg')) return n.querySelector('title')?.textContent ?? n.getAttribute('aria-label') ?? '';
    if (n.getAttribute('aria-label')) return n.getAttribute('aria-label');
    const cs = getComputedStyle(n);
    if (cs.display === 'none' || cs.visibility === 'hidden') return n.matches('.ds-visually-hidden, .sr-only') ? n.textContent : '';
    return [...n.childNodes].map(textOf).join(' ');
  };
  const byIds = (ids) => ids.split(/\s+/).map((id) => document.getElementById(id)).filter(Boolean);
  const name = (el) => {
    const lb = el.getAttribute('aria-labelledby');
    if (lb) return byIds(lb).map((n) => textOf(n) || n.textContent).join(' ').trim();
    const al = el.getAttribute('aria-label');
    if (al?.trim()) return al.trim();
    if (el.matches('input, select, textarea, meter, progress, output')) {
      const labels = el.labels ? [...el.labels] : [];
      const t = labels.map((l) => l.textContent).join(' ').trim();
      if (t) return t;
      if (el.matches('input[type="button"], input[type="submit"], input[type="reset"]')) return el.value;
      if (el.matches('input[type="image"]')) return el.alt;
    }
    const t = el.matches('input, select, textarea') ? '' : textOf(el).replace(/\s+/g, ' ').trim();
    if (t) return t;
    return (el.getAttribute('title') ?? '').trim();
  };

  // ids repetidos e referências quebradas
  const seen = new Map();
  for (const el of document.querySelectorAll('[id]')) {
    if (!el.id) continue;
    if (seen.has(el.id)) { if (root.contains(el)) report('ids', el, `id repetido: “${el.id}”`); }
    else seen.set(el.id, el);
  }
  for (const attr of ['aria-labelledby', 'aria-describedby', 'aria-controls', 'aria-activedescendant', 'aria-owns', 'for']) {
    for (const el of root.querySelectorAll(`[${attr}]`)) {
      const v = el.getAttribute(attr).trim();
      if (!v) { report('ids', el, `${attr} vazio`); continue; }
      const miss = v.split(/\s+/).filter((id) => !document.getElementById(id));
      // aria-controls de algo que só existe aberto (menu, painel) é normal
      if (miss.length && attr !== 'aria-controls' && attr !== 'aria-activedescendant') report('ids', el, `${attr} aponta para id que não existe: ${miss.join(', ')}`);
    }
  }

  // nome acessível
  const NAMED = 'a[href], button, [role="button"], [role="link"], [role="tab"], [role="switch"], [role="checkbox"], [role="radio"], [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="option"], [role="slider"], [role="combobox"], [role="spinbutton"], [role="dialog"], [role="alertdialog"], [role="tabpanel"], [role="progressbar"], [role="meter"], [role="img"], [role="region"], [role="radiogroup"], [role="toolbar"], dialog, nav, iframe';
  for (const el of root.querySelectorAll(NAMED)) {
    if (!visible(el) || ariaHidden(el)) continue;
    if (el.matches('[role="tabpanel"], [role="region"], nav, dialog, [role="dialog"], [role="toolbar"]') && !el.hasAttribute('aria-label') && !el.hasAttribute('aria-labelledby')) {
      if (el.matches('[role="region"], [role="dialog"], dialog, [role="tabpanel"]')) report('nome', el, `${el.getAttribute('role') ?? el.tagName.toLowerCase()} sem nome (aria-label ou aria-labelledby)`);
      continue;
    }
    if (el.matches('[role="tabpanel"], [role="region"], nav, dialog, [role="dialog"], [role="toolbar"]')) {
      if (!name(el)) report('nome', el, 'rótulo aponta para um elemento vazio');
      continue;
    }
    if (el.matches('[role="progressbar"]') && el.closest('[role="status"], [aria-live]')) continue;
    if (!name(el)) report('nome', el, `${el.getAttribute('role') ?? el.tagName.toLowerCase()} sem nome acessível`);
  }

  // campos de formulário
  for (const el of root.querySelectorAll('input:not([type="hidden"]), select, textarea, [contenteditable="true"]')) {
    if (!visible(el) || ariaHidden(el)) continue;
    if (el.matches('[contenteditable="true"]')) {
      if (!el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby')) report('rótulo', el, 'área editável sem nome');
      continue;
    }
    if (!name(el)) report('rótulo', el, `${el.tagName.toLowerCase()}${el.type ? `[type=${el.type}]` : ''} sem rótulo`);
  }

  // imagens
  for (const el of root.querySelectorAll('img')) {
    if (!el.hasAttribute('alt') && !ariaHidden(el)) report('imagem', el, '<img> sem alt (use alt="" se for decoração)');
  }
  for (const el of root.querySelectorAll('svg[role="img"]')) {
    if (!ariaHidden(el) && !name(el)) report('imagem', el, 'svg com role="img" sem nome');
  }

  // foco
  for (const el of root.querySelectorAll('[tabindex]')) {
    if (Number(el.getAttribute('tabindex')) > 0) report('foco', el, `tabindex=${el.getAttribute('tabindex')} (maior que 0 bagunça a ordem)`);
  }
  const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]';
  for (const el of root.querySelectorAll('[aria-hidden="true"]')) {
    if (!visible(el) || el.inert || el.closest('[inert]')) continue;
    for (const f of el.querySelectorAll(FOCUSABLE)) {
      if (visible(f) && !f.closest('[inert]')) { report('foco', f, 'focável dentro de aria-hidden (o foco chega num lugar que o leitor de tela não anuncia)'); break; }
    }
  }

  // títulos (só na página: os exemplos dentro de palcos imitam telas e começam no nível delas)
  const headings = [...root.querySelectorAll('h1, h2, h3, h4, h5, h6')].filter((h) => visible(h) && !ariaHidden(h));
  const h1s = headings.filter((h) => h.tagName === 'H1');
  if (h1s.length !== 1) out.push({ rule: 'título', msg: `${h1s.length} h1 na página (deve haver 1)`, where: 'página', html: '' });
  let prev = 1;
  for (const h of headings) {
    const lvl = Number(h.tagName[1]);
    if (lvl > prev + 1) report('título', h, `nível pulado: h${prev} → h${lvl}`);
    prev = lvl;
  }

  // contraste
  const cv = document.createElement('canvas');
  cv.width = cv.height = 1;
  const ctx = cv.getContext('2d', { willReadFrequently: true });
  // qualquer cor do CSS (oklch, color-mix…) vira rgba pelo canvas; getImageData devolve sem pré-multiplicar
  ctx.globalCompositeOperation = 'copy';
  const rgba = (c) => {
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillStyle = c;
    ctx.fillRect(0, 0, 1, 1);
    const d = ctx.getImageData(0, 0, 1, 1).data;
    return [d[0], d[1], d[2], d[3] / 255];
  };
  const blend = (top, bottom) => {
    const a = top[3] + bottom[3] * (1 - top[3]);
    if (!a) return [0, 0, 0, 0];
    return [0, 1, 2].map((i) => (top[i] * top[3] + bottom[i] * bottom[3] * (1 - top[3])) / a).concat(a);
  };
  const lum = ([r, g, b]) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
  // o fundo de verdade: as camadas embaixo do centro do texto, de cima para baixo, até a primeira opaca
  const backdrop = (el, x, y) => {
    const stack = document.elementsFromPoint(x, y);
    const start = stack.indexOf(el);
    const layers = start >= 0 ? stack.slice(start) : [el, ...(() => { const a = []; for (let n = el.parentElement; n; n = n.parentElement) a.push(n); return a; })()];
    let color = [0, 0, 0, 0];
    const below = [];
    for (const n of layers) {
      const cs = getComputedStyle(n);
      if (cs.backgroundImage !== 'none' && !/^url/.test(cs.backgroundImage)) return null; // degradê: não dá para medir
      if (n.matches('img, video, canvas, svg, iframe')) return null;
      const bg = rgba(cs.backgroundColor);
      if (bg[3] > 0) below.push(bg);
      if (bg[3] >= 1) break;
    }
    below.push([255, 255, 255, 1]);
    for (let i = below.length - 1; i >= 0; i--) color = blend(below[i], color);
    return color;
  };
  const opacityOf = (el) => { let o = 1; for (let n = el; n; n = n.parentElement) o *= Number(getComputedStyle(n).opacity); return o; };
  const checked = new Set();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: (t) => (t.textContent.trim().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT) });
  for (let t = walker.nextNode(); t; t = walker.nextNode()) {
    const el = t.parentElement;
    if (!el || checked.has(el)) continue;
    checked.add(el);
    if (el.closest('svg, script, style, template, [aria-hidden="true"], :disabled, [aria-disabled="true"], .ds-visually-hidden')) continue;
    if (!visible(el)) continue;
    const range = document.createRange();
    range.selectNodeContents(t);
    const r = [...range.getClientRects()].find((b) => b.width > 1 && b.height > 1);
    if (!r) continue;
    if (r.bottom < 0 || r.top > innerHeight || r.right < 0 || r.left > innerWidth) continue; // fora da tela: a página rola até lá antes
    const cs = getComputedStyle(el);
    const op = opacityOf(el);
    if (op < 0.99) continue; // apagado de propósito (desativado, carregando)
    const fg = rgba(cs.color);
    const bg = backdrop(el, r.left + r.width / 2, r.top + r.height / 2);
    if (!bg) continue;
    const fgOn = blend(fg, bg);
    const size = parseFloat(cs.fontSize);
    const bold = Number(cs.fontWeight) >= 700;
    const large = size >= 24 || (bold && size >= 18.66);
    const need = large ? 3 : 4.5;
    const got = ratio(fgOn, bg);
    if (got + 0.005 < need) report('contraste', el, `${got.toFixed(2)}:1, precisa de ${need}:1 (texto ${Math.round(size)} px${bold ? ' negrito' : ''}, “${t.textContent.trim().slice(0, 40)}”)`);
  }
  return out;
}

async function main() {
  const server = spawn(process.execPath, [path.join(ROOT, 'scripts', 'serve.mjs')], { env: { ...process.env, PORT: String(SERVE_PORT) }, stdio: 'ignore' });
  for (let i = 0; i < 60; i++) { try { if ((await fetch(`${BASE}/index.html`)).ok) break; } catch {} await new Promise((r) => setTimeout(r, 250)); }
  const profile = await mkdtemp(path.join(os.tmpdir(), 'lume-a11y-'));
  const proc = spawn(browser, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, '--no-first-run', '--hide-scrollbars', '--force-device-scale-factor=1', 'about:blank'], { stdio: 'ignore' });
  const findings = [];
  let pageCount = 0;
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
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    await send('Runtime.enable');
    await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
    await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });

    for (const theme of THEMES) {
      await send('Page.navigate', { url: `${BASE}/index.html#/` });
      await sleep(1200);
      await evaluate(`localStorage.setItem('ds-theme', '${theme}'); localStorage.setItem('ds-theme-v', '1'); localStorage.setItem('ds-locale', 'pt-BR'); localStorage.setItem('ds-layout', '"sidebar"'); localStorage.setItem('ds-novidades-vista', '9.9.9'); true`);
      await send('Page.navigate', { url: `${BASE}/index.html?a11y=${theme}#/` });
      await sleep(2000);
      await evaluate(`(() => { const s = document.createElement('style'); s.textContent = '*, *::before, *::after { transition: none !important; animation: none !important; }'; document.head.append(s); return true; })()`);
      const routes = (await evaluate(`import('/site/nav.js').then((m) => m.pages.map((p) => p.path))`))
        .filter((r) => !ONLY || ONLY.includes(r.split('/').pop() || 'inicio'));
      for (const route of routes) {
        await evaluate(`location.hash = '#${route}'; new Promise((r) => setTimeout(r, 900))`);
        await evaluate('document.fonts.ready.then(() => true)');
        // a página inteira, uma tela por vez: o contraste só é medido no que está à vista
        const height = await evaluate(`(document.getElementById('main-scroll') ?? document.scrollingElement).scrollHeight`);
        const seen = new Set();
        for (let y = 0; y < height; y += 800) {
          await evaluate(`(() => { const s = document.getElementById('main-scroll') ?? document.scrollingElement; s.scrollTop = ${y}; return true; })()`);
          await sleep(60);
          const found = await evaluate(`(${audit.toString()})(${JSON.stringify(ALLOW)})`);
          for (const f of found) {
            const key = `${f.rule}|${f.where}|${f.msg}`;
            if (seen.has(key)) continue;
            seen.add(key);
            findings.push({ ...f, route, theme });
          }
        }
        pageCount++;
        process.stdout.write(`\r${theme} · ${route}${' '.repeat(30)}`);
      }
    }
    ws.close();
  } finally {
    proc.kill();
    server.kill();
    await new Promise((r) => setTimeout(r, 400));
    await rm(profile, { recursive: true, force: true }).catch(() => {});
  }

  await mkdir(OUT, { recursive: true });
  await writeFile(path.join(OUT, 'resultado.json'), JSON.stringify(findings, null, 2));
  await writeReport(findings, pageCount);
  const byRule = {};
  for (const f of findings) byRule[f.rule] = (byRule[f.rule] ?? 0) + 1;
  console.log(`\n${findings.length ? '✗' : '✓'} ${pageCount} páginas (${THEMES.length} temas): ${findings.length ? Object.entries(byRule).map(([r, n]) => `${n} de ${r}`).join(', ') : 'nada encontrado'}`);
  for (const f of findings.slice(0, 40)) console.log(`  ✗ ${f.theme} ${f.route} · ${f.rule}: ${f.msg}\n      ${f.where}`);
  if (findings.length > 40) console.log(`  … e mais ${findings.length - 40}`);
  if (findings.length) {
    console.log(`  Relatório: ${path.relative(ROOT, path.join(OUT, 'relatorio.html'))}`);
    process.exitCode = 1;
  }
}

async function writeReport(findings, pageCount) {
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const groups = {};
  for (const f of findings) (groups[f.route] ??= []).push(f);
  const html = `<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Acessibilidade do Lume</title>
<style>body{font:15px/1.5 system-ui,sans-serif;margin:32px;background:#f3f5f8;color:#1d2734}h1{font-weight:500}
section{background:#fff;border:1px solid #d4dae2;border-radius:16px;padding:16px 20px;margin:0 0 16px}li{margin:6px 0}code{font:12px ui-monospace,monospace;color:#55657a;word-break:break-all}.t{display:inline-block;font-size:12px;border:1px solid #d4dae2;border-radius:99px;padding:0 8px;margin-right:6px}</style>
<h1>Acessibilidade do Lume</h1>
<p>${pageCount} páginas abertas (claro e escuro): ${findings.length ? `<strong>${findings.length} problemas</strong>` : 'nada encontrado'}.</p>
${Object.entries(groups).map(([route, list]) => `<section><h2>${esc(route)}</h2><ul>${list.map((f) => `<li><span class="t">${esc(f.theme === 'light' ? 'claro' : 'escuro')}</span><span class="t">${esc(f.rule)}</span>${esc(f.msg)}<br><code>${esc(f.where)}</code><br><code>${esc(f.html)}</code></li>`).join('')}</ul></section>`).join('\n')}`;
  await writeFile(path.join(OUT, 'relatorio.html'), html);
}

await main();
