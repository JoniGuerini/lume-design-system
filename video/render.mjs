#!/usr/bin/env node
/**
 * Captura quadros do filme (video/filme.html) com o Chrome ou o Edge instalado, sem dependências:
 * abre o navegador sem janela e conversa com ele pelo protocolo de depuração.
 *
 * Uso: node video/render.mjs --url http://localhost:5197/video/filme.html --stills 1.6,8.5 --out pasta
 */
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const arg = (name) => {
  const i = process.argv.indexOf(`--${name}`);
  return i < 0 ? undefined : process.argv[i + 1];
};
const URL_FILME = arg('url') ?? 'http://localhost:5197/video/filme.html';
const OUT = arg('out') ?? 'dist/video';
const STILLS = (arg('stills') ?? '').split(',').filter(Boolean).map(Number);
const PORT = 9337;

const BROWSERS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/opt/pw-browsers/chromium',
  '/usr/bin/chromium',
];
const browser = BROWSERS.find(existsSync);
if (!browser) throw new Error('Nenhum Chrome ou Edge encontrado.');

await mkdir(OUT, { recursive: true });
const profile = await mkdtemp(path.join(os.tmpdir(), 'lume-filme-'));
const proc = spawn(browser, [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${profile}`,
  '--no-first-run',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--window-size=1920,1080',
  'about:blank',
], { stdio: 'ignore' });

async function target() {
  for (let i = 0; i < 80; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json();
      const page = list.find((x) => x.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error('O navegador não respondeu.');
}

try {
  const ws = new WebSocket(await target());
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  let id = 0;
  const waiting = new Map();
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data);
    if (m.id && waiting.has(m.id)) {
      const { res, rej } = waiting.get(m.id);
      waiting.delete(m.id);
      m.error ? rej(new Error(m.error.message)) : res(m.result);
    } else if (m.method === 'Runtime.exceptionThrown') {
      console.error('erro na página:', m.params.exceptionDetails.exception?.description ?? m.params.exceptionDetails.text);
    }
  };
  const send = (method, params = {}) => new Promise((res, rej) => { const n = ++id; waiting.set(n, { res, rej }); ws.send(JSON.stringify({ id: n, method, params })); });
  const evaluate = async (expression) => {
    const r = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description ?? r.exceptionDetails.text);
    return r.result.value;
  };

  await send('Runtime.enable');
  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1920, height: 1080, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: URL_FILME });
  for (let i = 0; i < 80; i++) {
    if (await evaluate('typeof window.ready !== "undefined"').catch(() => false)) break;
    await new Promise((r) => setTimeout(r, 250));
  }
  await evaluate('window.ready');

  for (const t of STILLS) {
    await evaluate(`window.seek(${t})`);
    await evaluate('new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))');
    const { data } = await send('Page.captureScreenshot', { format: 'png' });
    const file = path.join(OUT, `quadro-${t.toFixed(2).padStart(5, '0')}.png`);
    await writeFile(file, Buffer.from(data, 'base64'));
    console.log(`✓ ${file}`);
  }

  // O filme: cada quadro é um seek e uma captura, entregues ao ffmpeg. O tempo do filme é medido a 120 BPM.
  const videoOut = arg('video');
  if (videoOut) {
    const bpm = Number(arg('bpm') ?? 120);
    const fps = Number(arg('fps') ?? 60);
    const dur = Number(arg('dur') ?? 30);
    const factor = bpm / 120;
    const frames = Math.round((dur / factor) * fps);
    await writeFile(path.join(OUT, 'cues.json'), JSON.stringify(await evaluate('window.CUES')));
    const ff = spawn(arg('ffmpeg') ?? 'ffmpeg', ['-y', '-v', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'png', '-i', '-', '-c:v', 'libx264', '-preset', 'medium', '-crf', '16', '-pix_fmt', 'yuv420p', videoOut], { stdio: ['pipe', 'inherit', 'inherit'] });
    const started = Date.now();
    for (let i = 0; i < frames; i++) {
      await evaluate(`window.seek(${(i / fps) * factor})`);
      const { data } = await send('Page.captureScreenshot', { format: 'png', optimizeForSpeed: true });
      if (!ff.stdin.write(Buffer.from(data, 'base64'))) await new Promise((r) => ff.stdin.once('drain', r));
      if (i % 120 === 0) console.log(`quadro ${i}/${frames} (${((Date.now() - started) / 1000).toFixed(0)} s)`);
    }
    ff.stdin.end();
    await new Promise((r) => ff.on('close', r));
    console.log(`✓ ${videoOut}: ${frames} quadros em ${((Date.now() - started) / 1000).toFixed(0)} s`);
  }
  ws.close();
} finally {
  proc.kill();
  await new Promise((r) => setTimeout(r, 400));
  await rm(profile, { recursive: true, force: true }).catch(() => {});
}
