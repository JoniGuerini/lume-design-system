#!/usr/bin/env node
/**
 * Monta o pacote do npm em dist/npm/pacote/, a partir da linha atual congelada em versoes/<linha>/ (a mesma de lumeui.dev/v/<linha>/).
 * Nada é publicado: o script só prepara a pasta. Para publicar, depois de escolher o nome (NAME, abaixo):
 *
 *   npm run npm:build
 *   npm publish dist/npm/pacote --access public      (pede a chave de segurança do npm de quem publica)
 *
 * O pacote leva:
 *   - o design system (CSS, JavaScript com tipos, ícones, fontes, LICENSE), igual ao /v/<linha>/;
 *   - o React compilado para JavaScript, com os .d.ts (react/*.js), para importar sem configurar nada no projeto;
 *   - o comando npx (npm/bin/lumeui.mjs: init, add, list) e o README de npm/README.md.
 * Nada do site, do Figma, do Storybook nem do repositório vai junto.
 *
 * Para compilar o React, o script baixa uma vez o TypeScript e os tipos do React para dist/npm/.ferramentas/
 * (o Lume continua sem dependências: elas só existem na hora de montar o pacote).
 */
import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** O nome do pacote. Ainda não decidido: troque aqui (e só aqui) antes de publicar. */
const NAME = process.env.LUME_NPM_NAME || '@joniguerini/lume';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const changelog = await readFile(path.join(ROOT, 'site', 'changelog.js'), 'utf8');
const version = changelog.match(/CURRENT_VERSION = '([^']+)'/)[1];
const line = version.split('.').slice(0, 2).join('.');
const SRC = path.join(ROOT, 'versoes', line);
const OUT = path.join(ROOT, 'dist', 'npm', 'pacote');
const TOOLS = path.join(ROOT, 'dist', 'npm', '.ferramentas');
if (!existsSync(path.join(SRC, 'lume.css'))) throw new Error(`Falta ${path.relative(ROOT, SRC)}: rode npm run build antes.`);
// no Windows o npm é um .cmd e só roda pelo shell; o node roda direto
const run = (cmd, args, cwd) => execFileSync(cmd, args, { cwd, stdio: 'inherit', shell: cmd === 'npm' && process.platform === 'win32' });

// esvazia a pasta em vez de apagá-la: no Windows, um terminal aberto nela trava o rmdir
await mkdir(OUT, { recursive: true });
for (const item of await readdir(OUT)) await rm(path.join(OUT, item), { recursive: true, force: true });
await cp(SRC, OUT, { recursive: true, filter: (f) => !f.endsWith('.zip') });

/* ───────── React: .tsx → .js + .d.ts ───────── */

// ferramentas só para montar o pacote, nas versões do projeto de teste do React (ver CLAUDE.md)
if (!existsSync(path.join(TOOLS, 'node_modules', 'typescript'))) {
  await mkdir(TOOLS, { recursive: true });
  await writeFile(path.join(TOOLS, 'package.json'), `${JSON.stringify({ private: true, devDependencies: { typescript: '5.9.3', '@types/react': '19.3.0', '@types/react-dom': '19.3.0' } }, null, 2)}\n`);
  run('npm', ['install', '--no-audit', '--no-fund', '--loglevel=error'], TOOLS);
}
const tsconfig = path.join(OUT, 'tsconfig.npm.json');
await writeFile(tsconfig, JSON.stringify({
  compilerOptions: {
    target: 'ES2020',
    module: 'ESNext',
    moduleResolution: 'Bundler',
    jsx: 'react-jsx',
    lib: ['ES2022', 'DOM', 'DOM.Iterable'],
    strict: true,
    skipLibCheck: true,
    declaration: true,
    rootDir: '.',
    outDir: '.',
    typeRoots: [path.join(TOOLS, 'node_modules', '@types')],
    paths: { react: [path.join(TOOLS, 'node_modules', '@types', 'react')], 'react/*': [path.join(TOOLS, 'node_modules', '@types', 'react', '*')], 'react-dom': [path.join(TOOLS, 'node_modules', '@types', 'react-dom')], 'react-dom/*': [path.join(TOOLS, 'node_modules', '@types', 'react-dom', '*')] },
  },
  include: ['react/**/*.ts', 'react/**/*.tsx'],
  exclude: ['react/**/*.d.ts'],
}, null, 2));
run('node', [path.join(TOOLS, 'node_modules', 'typescript', 'bin', 'tsc'), '-p', tsconfig], OUT);
await rm(tsconfig);
// fica só o compilado: o .tsx dentro do node_modules exigiria configuração no projeto de quem instala
for (const f of await readdir(path.join(OUT, 'react'))) {
  if (/\.tsx?$/.test(f) && !f.endsWith('.d.ts')) await rm(path.join(OUT, 'react', f));
}
// import relativo sem extensão ('./Icon') funciona no Vite, mas o Node e o webpack em ESM pedem o caminho completo ('./Icon.js')
for (const f of await readdir(path.join(OUT, 'react'))) {
  if (!f.endsWith('.js') && !f.endsWith('.d.ts')) continue;
  const file = path.join(OUT, 'react', f);
  let src = (await readFile(file, 'utf8')).replace(/((?:from|import)\s*['"])(\.{1,2}\/[^'"]+?)(['"])/g, (m, a, spec, b) => (/\.(m?js|css|json)$/.test(spec) ? m : `${a}${spec}.js${b}`));
  // Next.js (App Router): componentes com hooks e eventos só rodam no cliente; sem a marca, o import de um Server Component falha
  if (f.endsWith('.js') && !src.startsWith('"use client"')) src = `"use client";\n${src}`;
  await writeFile(file, src);
}

/* ───────── Comando npx, README e package.json ───────── */

await cp(path.join(ROOT, 'npm', 'bin'), path.join(OUT, 'bin'), { recursive: true });
const icons = (await readFile(path.join(OUT, 'icons', 'icons.js'), 'utf8')).match(/^\s*\['[a-z0-9-]+', '/gm)?.length ?? 0;
const nav = await readFile(path.join(ROOT, 'site', 'nav.js'), 'utf8');
const components = (nav.match(/path: '\/componentes\//g) ?? []).length;
const fill = (s) => s.replaceAll('{{NAME}}', NAME).replaceAll('{{LINE}}', line).replaceAll('{{ICONS}}', String(icons)).replaceAll('{{COMPONENTS}}', String(components));
await writeFile(path.join(OUT, 'README.md'), fill(await readFile(path.join(ROOT, 'npm', 'README.md'), 'utf8')));

const pkg = {
  name: NAME,
  version,
  description: fill('Lume Design System: tokens, {{ICONS}} icons, {{COMPONENTS}} components, charts and screen patterns in native HTML, CSS and JavaScript, with no dependencies. React components included.'),
  type: 'module',
  main: './lume.js',
  types: './lume.d.ts',
  exports: {
    '.': { types: './lume.d.ts', default: './lume.js' },
    './lume.css': './lume.css',
    './ds.css': './ds.css',
    './tokens.css': './tokens.css',
    './tokens.js': './tokens.js',
    './icons': './icons/icons.js',
    './react': { types: './react/index.d.ts', default: './react/index.js' },
    './js/*': './js/*',
    './components/*': './components/*',
    './fonts/*': './fonts/*',
    './package.json': './package.json',
  },
  bin: { lume: 'bin/lumeui.mjs' },
  sideEffects: ['*.css', './icons/icons.js', './lume.js'],
  peerDependencies: { react: '>=18', 'react-dom': '>=18' },
  peerDependenciesMeta: { react: { optional: true }, 'react-dom': { optional: true } },
  homepage: 'https://lumeui.dev',
  repository: { type: 'git', url: 'git+https://github.com/JoniGuerini/lume-design-system.git' },
  license: 'MIT',
  author: 'Jonathan Navarro',
  keywords: ['design-system', 'ui', 'components', 'css', 'tokens', 'icons', 'react', 'no-dependencies', 'lume'],
  engines: { node: '>=18' },
};
await writeFile(path.join(OUT, 'package.json'), `${JSON.stringify(pkg, null, 2)}\n`);
console.log(`✓ dist/npm/pacote: ${NAME}@${version} (linha ${line}, ${icons} ícones, ${components} componentes, React compilado). Nada foi publicado.`);
