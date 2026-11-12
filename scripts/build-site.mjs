#!/usr/bin/env node
/**
 * Monta o site para publicar (Vercel) em dist/site/, só com o que o navegador usa:
 *   index.html, ds/, site/, assets/favicon.svg, a documentação para IAs (ia/, llms.txt) e o resumo do teste do plugin do Figma
 *
 * O resto do repositório (CLAUDE.md, README, scripts/, figma/, tokens/) fica de fora.
 * Arquivo novo que o site carregue fora dessas pastas entra na lista PUBLIC.
 *
 * Pacote: ds/lume.css (o CSS num arquivo só) e, em v/<linha>/ (0.25, 0.26…), o design system com endereço fixo,
 * o lume.css, a licença e um zip. A linha atual sai do ds/ de agora; as anteriores vêm de versoes/, no git.
 *
 * Também grava dist/site/version.json com a impressão digital do que vai para o ar (hash do
 * conteúdo): uma aba aberta compara com a dela e mostra o aviso de versão nova (site/update.js).
 *
 * Uso: npm run build (gera os tokens e roda o teste do plugin antes)
 */
import { createHash } from 'node:crypto';
import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { zip } from './zip.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'dist', 'site');
const PUBLIC = ['index.html', 'ds', 'site', 'assets/favicon.svg', 'ia', 'llms.txt'];

await rm(OUT, { recursive: true, force: true });
for (const item of PUBLIC) {
  await stat(path.join(ROOT, item)); // falha se o caminho sumiu, em vez de publicar sem ele
  await cp(path.join(ROOT, item), path.join(OUT, item), { recursive: true });
}

const changelog = await readFile(path.join(ROOT, 'site', 'changelog.js'), 'utf8');
const version = changelog.match(/CURRENT_VERSION = '([^']+)'/)?.[1] ?? null;
const minor = version.split('.').slice(0, 2).join('.');

/* ───── Pacote (0.25): CSS único, versões com endereço fixo e zip ───── */

// lume.css: o ds.css com todos os @import embutidos. Fica na raiz do ds/, então o caminho das fontes continua valendo.
async function bundleCss(file) {
  const css = await readFile(file, 'utf8');
  const parts = [];
  let last = 0;
  for (const m of css.matchAll(/@import url\("\.\/([^"]+)"\);\n?/g)) {
    parts.push(css.slice(last, m.index), await bundleCss(path.join(path.dirname(file), m[1])));
    last = m.index + m[0].length;
  }
  parts.push(css.slice(last));
  return parts.join('');
}
const lumeCss = `/* Lume Design System ${version} · MIT · https://lumeui.dev */\n${await bundleCss(path.join(ROOT, 'ds', 'ds.css'))}`;
await writeFile(path.join(OUT, 'ds', 'lume.css'), lumeCss);
await cp(path.join(ROOT, 'LICENSE'), path.join(OUT, 'ds', 'LICENSE'));

// uma versão por linha (0.25, 0.26…): a da linha atual sai do ds/ de agora e recebe as correções (0.25.1, 0.25.2…);
// as anteriores ficam congeladas em versoes/, no git. Mudança que quebra só em versão maior (página API).
async function snapshot(dir) {
  await rm(dir, { recursive: true, force: true });
  await cp(path.join(ROOT, 'ds'), dir, { recursive: true });
  await writeFile(path.join(dir, 'lume.css'), lumeCss);
  await cp(path.join(ROOT, 'LICENSE'), path.join(dir, 'LICENSE'));
}
const VERSIONS = path.join(ROOT, 'versoes');
// fora da Vercel (no computador), a linha atual também é gravada em versoes/, para congelar quando a próxima começar
if (!process.env.VERCEL) await snapshot(path.join(VERSIONS, minor));
const lines = (await readdir(VERSIONS).catch(() => [])).filter((d) => /^\d+\.\d+$/.test(d));
for (const line of lines) await cp(path.join(VERSIONS, line), path.join(OUT, 'v', line), { recursive: true });
await snapshot(path.join(OUT, 'v', minor));
const allLines = [...new Set([...lines, minor])].sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
for (const line of allLines) {
  const dir = path.join(OUT, 'v', line);
  const entries = [];
  for (const d of await readdir(dir, { recursive: true, withFileTypes: true })) {
    if (!d.isFile()) continue;
    const full = path.join(d.parentPath ?? d.path, d.name);
    entries.push({ name: `lume-${line}/${path.relative(dir, full).split(path.sep).join('/')}`, data: await readFile(full) });
  }
  entries.sort((a, b) => a.name.localeCompare(b.name));
  await writeFile(path.join(dir, `lume-${line}.zip`), zip(entries));
}
await writeFile(path.join(OUT, 'v', 'index.json'), `${JSON.stringify({ latest: minor, version, lines: allLines })}\n`);

// uma versão só para tudo: o package.json acompanha o changelog
if (!process.env.VERCEL) {
  const pkgFile = path.join(ROOT, 'package.json');
  const pkg = JSON.parse(await readFile(pkgFile, 'utf8'));
  if (pkg.version !== version) { pkg.version = version; await writeFile(pkgFile, `${JSON.stringify(pkg, null, 2)}\n`); }
}

// números do plugin para a página Recursos › Plugin do Figma. Só o resumo vai para o ar, não o plugin.
// Sem generatedAt: a data mudaria a impressão digital a cada build e dispararia o aviso de versão nova.
const { generatedAt, ...figmaSummary } = JSON.parse(await readFile(path.join(ROOT, 'dist', 'figma-plugin', 'summary.json'), 'utf8'));
const figmaOut = path.join(OUT, 'dist', 'figma-plugin');
await mkdir(figmaOut, { recursive: true });
await writeFile(path.join(figmaOut, 'summary.json'), `${JSON.stringify(figmaSummary)}\n`);

// impressão digital: muda quando qualquer arquivo publicado muda, e só nesse caso
const files = (await readdir(OUT, { recursive: true, withFileTypes: true }))
  .filter((d) => d.isFile())
  .map((d) => path.join(d.parentPath ?? d.path, d.name))
  .sort();
const hash = createHash('sha256');
for (const file of files) hash.update(path.relative(OUT, file)).update(await readFile(file));
const build = hash.digest('hex').slice(0, 12);
await writeFile(path.join(OUT, 'version.json'), `${JSON.stringify({ build, version, builtAt: new Date().toISOString() })}\n`);

console.log(`✓ site: ${PUBLIC.join(', ')} → dist/site/ (versão ${version}, build ${build})`);
