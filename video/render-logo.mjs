#!/usr/bin/env node
/**
 * Grava a chama do Lume (video/logo.html) em 1080×1920, sem dependências: Chrome sem janela pelo protocolo
 * de depuração (como o test-visual) e o ffmpeg. Cada quadro é um seek(t) e uma captura.
 *
 *   node video/render-logo.mjs                         → dist/video/lume-chama.mp4 (30 fps, 9 s)
 *   node video/render-logo.mjs --stills 0.5,1.2,2,4.5,6.5 --out dist/video/chama   → só os quadros, em PNG
 *   opções: --fps 60 · --video caminho.mp4 · --ffmpeg caminho
 */
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (n, fb) => { const i = process.argv.indexOf(`--${n}`); return i < 0 ? fb : process.argv[i + 1]; };
const OUT = path.resolve(ROOT, arg('out', 'dist/video'));
const STILLS = arg('stills', '').split(',').filter(Boolean).map(Number);
const FPS = Number(arg('fps', 30));
const VIDEO = path.resolve(ROOT, arg('video', 'dist/video/lume-chama.mp4'));
const SERVE = 5196;
const CDP = 9336;
const BROWSERS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
];
const browser = BROWSERS.find(existsSync);
if (!browser) throw new Error('Nenhum Chrome ou Edge encontrado.');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

await mkdir(OUT, { recursive: true });
const server = spawn(process.execPath, [path.join(ROOT, 'scripts', 'serve.mjs')], { env: { ...process.env, PORT: String(SERVE) }, stdio: 'ignore' });
const profile = await mkdtemp(path.join(os.tmpdir(), 'lume-chama-'));
const chrome = spawn(browser, ['--headless=new', `--remote-debugging-port=${CDP}`, `--user-data-dir=${profile}`, '--no-first-run', '--hide-scrollbars', '--force-device-scale-factor=1', '--font-render-hinting=none', 'about:blank'], { stdio: 'ignore' });

try {
  for (let i = 0; i < 60; i++) { try { if ((await fetch(`http://127.0.0.1:${SERVE}/video/logo.html`)).ok) break; } catch {} await sleep(250); }
  let wsUrl;
  for (let i = 0; i < 80 && !wsUrl; i++) {
    try { wsUrl = (await (await fetch(`http://127.0.0.1:${CDP}/json`)).json()).find((x) => x.type === 'page')?.webSocketDebuggerUrl; } catch {}
    if (!wsUrl) await sleep(250);
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
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1080, height: 1920, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: `http://127.0.0.1:${SERVE}/video/logo.html` });
  for (let i = 0; i < 80; i++) { if (await evaluate('window.ready === true').catch(() => false)) break; await sleep(150); }
  const DUR = await evaluate('window.DUR');
  const frame = async (t) => {
    await evaluate(`window.seek(${t}); new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))`);
    const { data } = await send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: 1080, height: 1920, scale: 1 } });
    return Buffer.from(data, 'base64');
  };

  for (const t of STILLS) {
    const file = path.join(OUT, `quadro-${t.toFixed(2).padStart(5, '0')}.png`);
    await writeFile(file, await frame(t));
    console.log(`✓ ${path.relative(ROOT, file)}`);
  }

  if (!STILLS.length) {
    const frames = Math.round(DUR * FPS);
    await mkdir(path.dirname(VIDEO), { recursive: true });
    const ff = spawn(arg('ffmpeg', 'ffmpeg'), ['-y', '-v', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'png', '-i', '-', '-c:v', 'libx264', '-preset', 'slow', '-crf', '14', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', VIDEO], { stdio: ['pipe', 'inherit', 'inherit'] });
    const started = Date.now();
    for (let i = 0; i < frames; i++) {
      const buf = await frame(i / FPS);
      if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
      if (i % 60 === 0) console.log(`quadro ${i}/${frames}`);
    }
    ff.stdin.end();
    await new Promise((r) => ff.on('close', r));
    console.log(`✓ ${path.relative(ROOT, VIDEO)}: ${frames} quadros, ${FPS} fps, em ${((Date.now() - started) / 1000).toFixed(0)} s`);
  }
  ws.close();
} finally {
  chrome.kill();
  server.kill();
}
