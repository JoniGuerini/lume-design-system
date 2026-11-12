#!/usr/bin/env node
/**
 * Som do filme: a música cortada na barra certa e um efeito em cada evento, alinhado pelo pico medido do efeito.
 * Música: "Cat Walk", de Arulo. Efeitos: Mixkit. Baixados em dist/video/audio/ (fora do git).
 *
 * A música tem 130 BPM e o drop na barra 16 (29,56 s). Começando na barra 8 (14,79 s), o drop cai na batida 32
 * do filme, e a pausa da barra 32 abre a cena dos ícones.
 *
 * Uso: node video/audio.mjs --ffmpeg caminho --video dist/video/silencioso.mp4 --out dist/video/lume-filme.mp4
 */
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const arg = (name, fb) => { const i = process.argv.indexOf(`--${name}`); return i < 0 ? fb : process.argv[i + 1]; };
const FF = arg('ffmpeg', 'ffmpeg');
const DIR = arg('dir', 'dist/video');
const VIDEO = arg('video', `${DIR}/silencioso.mp4`);
const OUT = arg('out', `${DIR}/lume-filme.mp4`);
const BPM = 130;
const START = 14.79;
const DUR = (64 * 120) / BPM;

const SFX = {
  click: ['s1113', 0.7], pop: ['s3005', 0.4], whoosh: ['s1491', 0.28], type: ['s1125', 0.35],
  switch: ['s2585', 0.6], tap: ['s2577', 0.5], chime: ['s2574', 0.45],
};

function peakOf(file) {
  const r = spawnSync(FF, ['-v', 'error', '-i', file, '-ac', '1', '-ar', '44100', '-f', 's16le', '-'], { maxBuffer: 1 << 28 });
  const pcm = new Int16Array(r.stdout.buffer, r.stdout.byteOffset, r.stdout.length >> 1);
  let at = 0, max = 0;
  for (let i = 0; i < pcm.length; i++) if (Math.abs(pcm[i]) > max) { max = Math.abs(pcm[i]); at = i; }
  return at / 44100;
}
const peaks = Object.fromEntries(Object.entries(SFX).map(([k, [f]]) => [k, peakOf(path.join(DIR, 'audio', `${f}.mp3`))]));

const cues = JSON.parse(readFileSync(path.join(DIR, 'cues.json'), 'utf8'));
const inputs = ['-i', VIDEO, '-i', path.join(DIR, 'audio', 'm371.mp3')];
const filters = [`[1:a]atrim=start=${START}:end=${START + DUR},asetpts=PTS-STARTPTS,afade=t=in:d=0.06,afade=t=out:st=${DUR - 0.35}:d=0.35,volume=0.9[m]`];
const labels = ['[m]'];
cues.forEach(([t, kind], i) => {
  const [file, vol] = SFX[kind];
  inputs.push('-i', path.join(DIR, 'audio', `${file}.mp3`));
  const delay = Math.max(0, Math.round(((t * 120) / BPM - peaks[kind]) * 1000));
  filters.push(`[${i + 2}:a]aresample=44100,aformat=channel_layouts=stereo,volume=${vol},adelay=${delay}|${delay}[s${i}]`);
  labels.push(`[s${i}]`);
});
filters.push(`${labels.join('')}amix=inputs=${labels.length}:normalize=0:dropout_transition=0,atrim=end=${DUR},loudnorm=I=-14:TP=-1:LRA=11,aresample=48000[a]`);
const r = spawnSync(FF, ['-y', '-v', 'error', ...inputs, '-filter_complex', filters.join(';'), '-map', '0:v', '-map', '[a]', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '256k', '-movflags', '+faststart', '-shortest', OUT], { stdio: 'inherit' });
if (r.status !== 0) process.exit(r.status ?? 1);
console.log(`✓ ${OUT}`);
