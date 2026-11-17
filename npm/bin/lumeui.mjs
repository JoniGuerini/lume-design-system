#!/usr/bin/env node
/**
 * lumeui: leva o Lume Design System para dentro do seu projeto, sem dependências.
 *
 *   npx <pacote> init [pasta]        copia o Lume inteiro (padrão: ./lume) e mostra as linhas para colar
 *   npx <pacote> add <nome…> [pasta] copia só o CSS e o JavaScript de um componente, com o que ele precisa
 *   npx <pacote> list                lista os nomes que o add aceita
 *
 * Opções: --force (sobrescreve arquivos que já existem), --help, --version.
 */
import { existsSync } from 'node:fs';
import { cp, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PKG = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// o nome vem do package.json: trocar o nome do pacote não exige mexer aqui
const { version, name: NAME } = JSON.parse(await readFile(path.join(PKG, 'package.json'), 'utf8'));
const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith('--')));
const [command, ...rest] = args.filter((a) => !a.startsWith('--'));
const FORCE = flags.has('--force');

// a base que todo componente usa; botão e campo entram junto porque quase todo componente tem um dentro
const BASE_CSS = ['fonts.css', 'tokens.css', 'base.css', 'components/surfaces.css', 'components/button.css', 'components/form.css'];
// o CSS que cada módulo JavaScript precisa, quando o nome não bate com o do arquivo
const CSS_OF = {
  'back-to-top': ['navigation'], 'code-block': ['content', 'code'], 'command-palette': ['command', 'menu'], composer: ['chat'],
  'context-menu': ['layers', 'menu'], 'progress-ring': ['loading'], 'date-picker': ['picker'], drawer: ['modal', 'layers'], 'file-upload': ['upload'],
  filters: ['filters', 'menu'], menu: ['menu'], modal: ['modal'], 'number-field': ['number-field'], 'otp-field': ['otp'],
  pagination: ['navigation', 'menu'], popover: ['layers'], segmented: [], select: ['select', 'menu'], stepper: ['navigation'],
  'tag-field': ['tags'], 'time-picker': ['picker'], toast: ['toast'], tooltip: ['feedback'], tree: ['navigation'],
  charts: ['chart'], calendar: ['calendar'], shell: ['shell'], slider: ['slider'], tabs: ['tabs'], scrollbar: ['scrollbar'],
};
const c = (s, code) => (process.stdout.isTTY ? `\x1b[${code}m${s}\x1b[0m` : s);
const bold = (s) => c(s, 1);
const dim = (s) => c(s, 2);

function help() {
  console.log(`
${bold(`Lume Design System ${version}`)} ${dim('· https://lumeui.dev · MIT')}

  ${bold(`npx ${NAME} init`)} [pasta]          copia o Lume inteiro (padrão: ./lume)
  ${bold(`npx ${NAME} add`)} <nome…> [--dir pasta]  copia só um componente e o que ele precisa
  ${bold(`npx ${NAME} list`)}                  lista os nomes que o add aceita

  Opções: --force sobrescreve arquivos que já existem.
  Prefere importar do pacote? npm install ${NAME}, depois import '${NAME}/lume.css'.
`);
}

async function components() {
  const css = (await readdir(path.join(PKG, 'components'))).filter((f) => f.endsWith('.css')).map((f) => f.slice(0, -4));
  const js = (await readdir(path.join(PKG, 'js'))).filter((f) => f.endsWith('.js')).map((f) => f.slice(0, -3));
  const internal = new Set(['i18n', 'messages', 'field-support', 'token-export', 'charts']);
  return { css, js: js.filter((n) => !internal.has(n)), names: [...new Set([...css, ...js.filter((n) => !internal.has(n)), 'charts'])].sort() };
}

// copia um arquivo, sem sobrescrever o que a pessoa já tem (a não ser com --force)
async function copyFile(rel, dest, done) {
  const to = path.join(dest, rel);
  if (done.has(rel)) return;
  done.add(rel);
  if (existsSync(to) && !FORCE) return;
  await mkdir(path.dirname(to), { recursive: true });
  await cp(path.join(PKG, rel), to);
}

// um módulo JavaScript e tudo o que ele importa, de forma recursiva
async function copyModule(rel, dest, done) {
  if (done.has(rel)) return;
  await copyFile(rel, dest, done);
  const src = await readFile(path.join(PKG, rel), 'utf8');
  for (const m of src.matchAll(/(?:from|import)\s*['"](\.{1,2}\/[^'"]+)['"]/g)) {
    const next = path.posix.join(path.posix.dirname(rel), m[1]);
    if (existsSync(path.join(PKG, next))) await copyModule(next, dest, done);
  }
}

async function init(dir = 'lume') {
  const dest = path.resolve(dir);
  if (existsSync(path.join(dest, 'lume.css')) && !FORCE) {
    console.log(`${bold(dir)} já tem o Lume. Use --force para substituir.`);
    process.exitCode = 1;
    return;
  }
  await mkdir(dest, { recursive: true });
  for (const item of await readdir(PKG)) {
    if (['package.json', 'bin', 'README.md', 'node_modules'].includes(item)) continue;
    await cp(path.join(PKG, item), path.join(dest, item), { recursive: true, force: FORCE });
  }
  const rel = path.relative(process.cwd(), dest).split(path.sep).join('/') || '.';
  console.log(`
${bold(`✓ Lume ${version} copiado para ${rel}/`)}

  No ${bold('<head>')}:
    <link rel="stylesheet" href="/${rel}/lume.css">

  No JavaScript, só o que a tela usa:
    import { initTheme, createModal, toast } from '/${rel}/lume.js';

  ${dim('Ajuste o caminho ao jeito que o seu projeto serve arquivos. Documentação: https://lumeui.dev')}
`);
}

async function add(names) {
  const dirFlag = args.indexOf('--dir');
  const dir = dirFlag >= 0 ? args[dirFlag + 1] : 'lume';
  const wanted = names.filter((n) => n !== dir);
  const all = await components();
  const unknown = wanted.filter((n) => !all.names.includes(n));
  if (!wanted.length || unknown.length) {
    console.log(unknown.length ? `Não conheço: ${unknown.join(', ')}. Veja os nomes com ${bold(`npx ${NAME} list`)}.` : `Diga o componente: ${bold(`npx ${NAME} add modal`)}`);
    process.exitCode = 1;
    return;
  }
  const dest = path.resolve(dir);
  const done = new Set();
  // a base que todo componente usa: fontes, tokens, reset e superfícies
  for (const f of BASE_CSS) await copyFile(f, dest, done);
  for (const f of await readdir(path.join(PKG, 'fonts'))) await copyFile(`fonts/${f}`, dest, done);
  await copyFile('LICENSE', dest, done);
  const cssAdded = [];
  for (const n of wanted) {
    for (const css of new Set([...(all.css.includes(n) ? [n] : []), ...(CSS_OF[n] ?? [])])) {
      const f = `components/${css}.css`;
      if (BASE_CSS.includes(f) || cssAdded.includes(f)) continue;
      await copyFile(f, dest, done);
      cssAdded.push(f);
    }
    if (all.js.includes(n) || n === 'charts') await copyModule(`js/${n}.js`, dest, done);
  }
  if (done.has('icons/icons.js') || wanted.length) await copyModule('icons/icons.js', dest, done);
  // lume.css do projeto: a base e os componentes trazidos até agora
  const entry = path.join(dest, 'lume.css');
  const current = existsSync(entry) ? await readFile(entry, 'utf8') : `/* Lume Design System ${version} · só os componentes trazidos com npx ${NAME} add */\n`;
  const lines = [...BASE_CSS, ...cssAdded].map((f) => `@import url("./${f}");`).filter((l) => !current.includes(l));
  await writeFile(entry, `${current.trimEnd()}\n${lines.join('\n')}\n`);
  const rel = path.relative(process.cwd(), dest).split(path.sep).join('/') || '.';
  console.log(`
${bold(`✓ ${wanted.join(', ')} em ${rel}/`)}
${dim([...done].sort().map((f) => `  ${f}`).join('\n'))}

  CSS: ${bold(`${rel}/lume.css`)} já importa o que foi trazido.${[...done].some((f) => f.startsWith('js/')) ? `\n  JavaScript: importe de ${bold(`${rel}/js/`)}, por exemplo ${bold(`import { createModal } from '/${rel}/js/modal.js'`)}.` : ''}
`);
}

async function list() {
  const all = await components();
  console.log(`\n${bold('Componentes que o add aceita')} ${dim('(CSS, JavaScript ou os dois)')}\n`);
  for (const n of all.names) {
    const kinds = [all.css.includes(n) && 'CSS', (all.js.includes(n) || n === 'charts') && 'JS'].filter(Boolean).join(' + ');
    console.log(`  ${n.padEnd(18)} ${dim(kinds)}`);
  }
  console.log('');
}

if (flags.has('--version')) console.log(version);
else if (!command || flags.has('--help') || command === 'help') help();
else if (command === 'init') await init(rest[0]);
else if (command === 'add') await add(rest);
else if (command === 'list') await list();
else { console.log(`Comando desconhecido: ${command}`); help(); process.exitCode = 1; }
