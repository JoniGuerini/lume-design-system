#!/usr/bin/env node
/**
 * Testes visuais do Lume, sem dependências.
 *
 * Abre cada página de componente num Chrome ou Edge sem janela, nos dois temas, e fotografa cada seção que mostra
 * o componente (playground, variantes, tamanhos, estados, uso…). Os estados aparecem forçados com data-state, então
 * hover, foco e pressionado entram na foto sem mouse. Cada foto é comparada pixel a pixel com a de referência
 * (test/visual/referencia/); o que mudou vai para um relatório com antes, depois e as diferenças marcadas.
 *
 * Para as fotos serem sempre iguais: data fixa (9/11/2026), sorteios com semente, sem animação e sem cursor de texto.
 *
 *   npm run test:visual                       compara tudo; sai com erro se algo mudou
 *   npm run test:visual -- --only botao       só um componente (ou vários: botao,chip)
 *   npm run test:visual -- --atualizar        aceita o estado atual como nova referência (tudo ou o --only)
 *
 * Relatório: dist/test-visual/relatorio.html. As referências valem para o computador em que foram geradas
 * (fontes e antisserrilhado mudam entre sistemas): em outra máquina, gere de novo com --atualizar antes de mexer.
 */
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REF = path.join(ROOT, 'test', 'visual', 'referencia');
const OUT = path.join(ROOT, 'dist', 'test-visual');
const has = (name) => process.argv.includes(`--${name}`);
const arg = (name) => { const i = process.argv.indexOf(`--${name}`); return i < 0 ? undefined : process.argv[i + 1]; };
const UPDATE = has('atualizar');
const ONLY = arg('only')?.split(',');
const SERVE_PORT = 5198;
const BASE = `http://localhost:${SERVE_PORT}`;
const PORT = 9339;
const WIDTH = 1440;
const THEMES = ['light', 'dark'];
// seções só de texto e tabela: não mostram o componente
const SKIP_SECTIONS = ['acessibilidade', 'tokens', 'api', 'teclado'];
// seções que se mexem sozinhas, por timer, e não dão a mesma foto duas vezes
const SKIP_SHOTS = ['barra-de-progresso/playground'];
// diferença tolerada por canal (0–255) e quantos pixels podem diferir antes de contar como mudança
const CHANNEL_TOLERANCE = 2;
const PIXEL_TOLERANCE = 0;

const BROWSERS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];
const browser = BROWSERS.find(existsSync);
if (!browser) throw new Error('Nenhum Chrome ou Edge encontrado.');

/* Roda antes de qualquer script da página: data fixa e sorteios repetíveis */
const FREEZE = `(() => {
  const fixed = new Date('2026-11-09T12:00:00').getTime();
  const RealDate = Date;
  class FixedDate extends RealDate {
    constructor(...a) { super(...(a.length ? a : [fixed])); }
    static now() { return fixed; }
  }
  window.Date = FixedDate;
  let seed = 20261109;
  Math.random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
})();`;

const FREEZE_CSS = `*, *::before, *::after { transition: none !important; animation: none !important; caret-color: transparent !important; }
  .ds-scrollbar, [data-update], .ds-toast-region, .ds-back-to-top { visibility: hidden !important; }`;

/* Roda na página: compara duas imagens (base64) e devolve quantos pixels mudaram e uma imagem das diferenças */
async function comparePng(aB64, bB64, tolerance) {
  const load = async (b64) => createImageBitmap(await (await fetch(`data:image/png;base64,${b64}`)).blob());
  const [a, b] = await Promise.all([load(aB64), load(bB64)]);
  const w = Math.max(a.width, b.width), h = Math.max(a.height, b.height);
  const ctx = (img) => { const c = new OffscreenCanvas(w, h).getContext('2d'); c.drawImage(img, 0, 0); return c; };
  const ca = ctx(a), cb = ctx(b);
  const da = ca.getImageData(0, 0, w, h).data, db = cb.getImageData(0, 0, w, h).data;
  const out = new OffscreenCanvas(w, h).getContext('2d');
  out.globalAlpha = 0.25; out.drawImage(b, 0, 0); out.globalAlpha = 1;
  const diff = out.getImageData(0, 0, w, h);
  let changed = 0;
  for (let i = 0; i < da.length; i += 4) {
    if (Math.abs(da[i] - db[i]) > tolerance || Math.abs(da[i + 1] - db[i + 1]) > tolerance || Math.abs(da[i + 2] - db[i + 2]) > tolerance || Math.abs(da[i + 3] - db[i + 3]) > tolerance) {
      changed++;
      diff.data[i] = 230; diff.data[i + 1] = 40; diff.data[i + 2] = 40; diff.data[i + 3] = 255;
    }
  }
  out.putImageData(diff, 0, 0);
  const blob = await out.canvas.convertToBlob({ type: 'image/png' });
  const bytes = new Uint8Array(await blob.arrayBuffer());
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return { changed, sizeChanged: a.width !== b.width || a.height !== b.height, sizeA: [a.width, a.height], sizeB: [b.width, b.height], diff: btoa(bin) };
}

async function main() {
  const server = spawn(process.execPath, [path.join(ROOT, 'scripts', 'serve.mjs')], { env: { ...process.env, PORT: String(SERVE_PORT) }, stdio: 'ignore' });
  for (let i = 0; i < 60; i++) { try { if ((await fetch(`${BASE}/index.html`)).ok) break; } catch {} await new Promise((r) => setTimeout(r, 250)); }
  const profile = await mkdtemp(path.join(os.tmpdir(), 'lume-visual-'));
  const proc = spawn(browser, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, '--no-first-run', '--hide-scrollbars', '--force-device-scale-factor=1', '--font-render-hinting=none', '--disable-gpu', '--disable-gpu-rasterization', '--disable-partial-raster', '--disable-lcd-text', 'about:blank'], { stdio: 'ignore' });
  const results = [];
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
    await send('Page.addScriptToEvaluateOnNewDocument', { source: FREEZE });
    await send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: 900, deviceScaleFactor: 1, mobile: false });

    await mkdir(REF, { recursive: true });
    await rm(OUT, { recursive: true, force: true });
    await mkdir(path.join(OUT, 'img'), { recursive: true });

    for (const theme of THEMES) {
      await send('Page.navigate', { url: `${BASE}/index.html#/` });
      await sleep(1200);
      await evaluate(`localStorage.setItem('ds-theme', '${theme}'); localStorage.setItem('ds-theme-v', '1'); localStorage.setItem('ds-locale', 'pt-BR'); localStorage.setItem('ds-layout', '"sidebar"'); localStorage.setItem('ds-novidades-vista', '9.9.9'); true`);
      await send('Page.navigate', { url: `${BASE}/index.html?visual=${theme}#/` });
      await sleep(2000);
      await evaluate(`(() => { const s = document.createElement('style'); s.textContent = ${JSON.stringify(FREEZE_CSS)}; document.head.append(s); return true; })()`);
      const routes = (await evaluate(`import('/site/nav.js').then((m) => m.pages.map((p) => p.path).filter((p) => p.startsWith('/componentes/')).map((p) => p.slice(13)))`))
        .filter((r) => !ONLY || ONLY.includes(r));

      for (const route of routes) {
        await evaluate(`location.hash = '#/componentes/${route}'; new Promise((r) => setTimeout(r, 900))`);
        await evaluate('document.fonts.ready.then(() => true)');
        const sections = await evaluate(`[...document.querySelectorAll('.ds-main__content section.doc-section')]
          .filter((s) => s.id && !${JSON.stringify(SKIP_SECTIONS)}.includes(s.id) && s.querySelector('[class*="ds-"]:not(.ds-inline-code)'))
          .map((s) => s.id)`).then((ids) => ids.filter((sec) => !SKIP_SHOTS.includes(`${route}/${sec}`)));
        for (const sec of sections) {
          // rola até a seção e aumenta a janela se ela for mais alta que a tela, para caber inteira
          const box = await evaluate(`(() => { const el = document.getElementById(${JSON.stringify(sec)}); el.scrollIntoView({ block: 'start' }); const r = el.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; })()`);
          const needed = Math.ceil(box.y + box.h + 40);
          if (needed > 900) await send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: needed, deviceScaleFactor: 1, mobile: false });
          await sleep(120);
          const r = await evaluate(`(() => { const el = document.getElementById(${JSON.stringify(sec)}); el.scrollIntoView({ block: 'start' }); const b = el.getBoundingClientRect(); return { x: Math.floor(b.left), y: Math.floor(b.top), w: Math.ceil(b.width), h: Math.ceil(b.height) }; })()`);
          const { data } = await send('Page.captureScreenshot', { format: 'png', clip: { x: r.x, y: r.y, width: r.w, height: r.h, scale: 1 } });
          if (needed > 900) await send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: 900, deviceScaleFactor: 1, mobile: false });
          const name = `${route}__${sec}__${theme === 'light' ? 'claro' : 'escuro'}.png`;
          const refFile = path.join(REF, name);
          if (UPDATE || !existsSync(refFile)) {
            await writeFile(refFile, Buffer.from(data, 'base64'));
            results.push({ name, status: UPDATE ? 'atualizada' : 'nova' });
            continue;
          }
          const ref = (await readFile(refFile)).toString('base64');
          if (ref === data) { results.push({ name, status: 'igual' }); continue; }
          const cmp = await evaluate(`(${comparePng.toString()})(${JSON.stringify(ref)}, ${JSON.stringify(data)}, ${CHANNEL_TOLERANCE})`);
          if (!cmp.sizeChanged && cmp.changed <= PIXEL_TOLERANCE) { results.push({ name, status: 'igual' }); continue; }
          await writeFile(path.join(OUT, 'img', `antes-${name}`), Buffer.from(ref, 'base64'));
          await writeFile(path.join(OUT, 'img', `depois-${name}`), Buffer.from(data, 'base64'));
          await writeFile(path.join(OUT, 'img', `diff-${name}`), Buffer.from(cmp.diff, 'base64'));
          results.push({ name, status: 'mudou', changed: cmp.changed, sizeChanged: cmp.sizeChanged, sizeA: cmp.sizeA, sizeB: cmp.sizeB });
        }
        process.stdout.write(`\r${theme} · ${route}${' '.repeat(30)}`);
      }
    }
    ws.close();
  } finally {
    proc.kill();
    server.kill();
    await sleep400();
    await rm(profile, { recursive: true, force: true }).catch(() => {});
  }

  // referências sem página correspondente (componente ou seção que sumiu)
  if (!ONLY && !UPDATE) {
    const seen = new Set(results.map((r) => r.name));
    for (const f of await readdir(REF)) if (f.endsWith('.png') && !seen.has(f)) results.push({ name: f, status: 'sumiu' });
  }
  await writeReport(results);
  const count = (s) => results.filter((r) => r.status === s).length;
  console.log(`\n✓ ${results.length} fotos: ${count('igual')} iguais, ${count('mudou')} mudaram, ${count('nova')} novas, ${count('atualizada')} atualizadas, ${count('sumiu')} sumiram`);
  for (const r of results.filter((x) => x.status === 'mudou')) console.log(`  ✗ ${r.name}: ${r.sizeChanged ? `tamanho ${r.sizeA.join('×')} → ${r.sizeB.join('×')}` : `${r.changed} pixels`}`);
  for (const r of results.filter((x) => x.status === 'sumiu')) console.log(`  ? ${r.name}: referência sem seção`);
  if (count('mudou') || count('sumiu')) {
    console.log(`  Relatório: ${path.relative(ROOT, path.join(OUT, 'relatorio.html'))}. Se a mudança foi de propósito: npm run test:visual -- --atualizar --only <componente>`);
    process.exitCode = 1;
  }
}

const sleep400 = () => new Promise((r) => setTimeout(r, 400));

async function writeReport(results) {
  const changed = results.filter((r) => r.status === 'mudou');
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const html = `<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Testes visuais do Lume</title>
<style>body{font:15px/1.5 system-ui,sans-serif;margin:32px;background:#f3f5f8;color:#1d2734}h1{font-weight:500}figure{margin:0}
.case{background:#fff;border:1px solid #d4dae2;border-radius:16px;padding:20px;margin:0 0 24px}.row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
img{max-width:100%;border:1px solid #e3e7ec;border-radius:8px;background:#fff}figcaption{color:#55657a;font-size:13px;margin-bottom:4px}code{font:13px ui-monospace,monospace}</style>
<h1>Testes visuais do Lume</h1>
<p>${results.length} fotos: ${changed.length ? `<strong>${changed.length} mudaram</strong>` : 'nenhuma mudou'}. Em vermelho, os pixels diferentes sobre a foto nova esmaecida.</p>
${changed.map((r) => `<section class="case"><h2><code>${esc(r.name)}</code></h2><p>${r.sizeChanged ? `Tamanho mudou: ${r.sizeA.join('×')} → ${r.sizeB.join('×')}` : `${r.changed} pixels diferentes`}</p>
<div class="row"><figure><figcaption>Antes (referência)</figcaption><img src="img/antes-${esc(r.name)}"></figure><figure><figcaption>Depois</figcaption><img src="img/depois-${esc(r.name)}"></figure><figure><figcaption>Diferenças</figcaption><img src="img/diff-${esc(r.name)}"></figure></div></section>`).join('\n')}
${results.filter((r) => r.status === 'sumiu').map((r) => `<p>Referência sem seção correspondente: <code>${esc(r.name)}</code></p>`).join('\n')}`;
  await writeFile(path.join(OUT, 'relatorio.html'), html);
}

await main();
