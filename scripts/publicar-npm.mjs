#!/usr/bin/env node
/**
 * Publica a versão atual do Lume no npm, à mão, num comando só: npm run publicar.
 *
 * Faz o mesmo que a automação do GitHub (.github/workflows/publicar-npm.yml), mas no seu computador:
 * monta o pacote, confere se a versão do changelog já está no npm (se estiver, para sem publicar nada)
 * e chama o npm publish, que pede a sua chave de segurança. Rode depois do npm run build da versão nova.
 */
import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WIN = process.platform === 'win32';
const run = (cmd, args, opts = {}) => execFileSync(cmd, args, { cwd: ROOT, stdio: 'inherit', shell: WIN && cmd === 'npm', ...opts });

run('node', [path.join('scripts', 'build-npm.mjs')]);
const pkg = JSON.parse(await readFile(path.join(ROOT, 'dist', 'npm', 'pacote', 'package.json'), 'utf8'));
const id = `${pkg.name}@${pkg.version}`;

let published = false;
try {
  execFileSync('npm', ['view', id, 'version'], { cwd: ROOT, stdio: 'pipe', shell: WIN });
  published = true;
} catch {
  // 404: a versão ainda não existe no npm
}
if (published) {
  console.log(`\n${id} já está no npm: nada a publicar. Para uma versão nova, suba o número no site/changelog.js e rode npm run build.`);
  process.exit(0);
}

console.log(`\nPublicando ${id}. O npm vai pedir a sua chave de segurança.\n`);
run('npm', ['publish', path.join('dist', 'npm', 'pacote'), '--access', 'public']);
console.log(`\n✓ ${id} publicado. Pode levar alguns minutos para aparecer em https://www.npmjs.com/package/${pkg.name}.`);
