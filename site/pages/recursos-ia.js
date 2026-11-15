import { icon } from '../../ds/icons/icons.js';
import { mountDocNav } from '../doc-nav.js';
import { mountCodeCopy, codeBlock } from '../component-doc.js';
import { L } from '../i18n.js';
import { locale } from '../../ds/js/i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/recursos-ia.css'];

const SITE = 'https://lumeui.dev';
const ic = (s) => `<code class="ds-inline-code">${s}</code>`;
// os arquivos existem nos três idiomas; a página aponta para os do idioma escolhido
const FILES_BY_LOCALE = {
  'pt-BR': { dir: 'ia', llms: 'llms.txt', readme: 'LEIA-ME.md', icons: 'icones.md' },
  en: { dir: 'ia/en', llms: 'ia/en/llms.txt', readme: 'README.md', icons: 'icons.md' },
  es: { dir: 'ia/es', llms: 'ia/es/llms.txt', readme: 'LEEME.md', icons: 'iconos.md' },
};
const P = () => FILES_BY_LOCALE[locale()] ?? FILES_BY_LOCALE.en;
const link = (href, text) => `<a class="ri-link" href="${href}" target="_blank" rel="noopener">${text}</a>`;

/* ───────── Dados (textos no idioma atual: chame na renderização) ───────── */

const NAV = () => [
  ['ia-usar', L('Como usar', 'How to use', 'Cómo usar')],
  ['ia-arquivos', L('Arquivos', 'Files', 'Archivos')],
  ['ia-regras', L('Regras', 'Rules', 'Reglas')],
  ['ia-manter', L('Para quem mantém', 'For maintainers', 'Para quien mantiene')],
];

const WAYS = () => [
  [
    L('Num chat', 'In a chat', 'En un chat'),
    L('Mande o índice para a IA e peça a tela. Ela lê o LEIA-ME e o arquivo de cada componente antes de escrever o código.', 'Send the index to the AI and ask for the screen. It reads the LEIA-ME and each component’s file before writing code.', 'Envía el índice a la IA y pide la pantalla. Lee el LEIA-ME y el archivo de cada componente antes de escribir el código.'),
    L(`Leia ${SITE}/${P().llms} e crie uma tela de login com o Lume Design System.`, `Read ${SITE}/${P().llms} and build a login screen with the Lume Design System.`, `Lee ${SITE}/${P().llms} y crea una pantalla de inicio de sesión con Lume Design System.`),
  ],
  [
    L('Num projeto', 'In a project', 'En un proyecto'),
    L(`Copie o ${ic('AGENTS.md')} para a raiz do projeto, com o nome que a sua ferramenta lê (${ic('AGENTS.md')}, ${ic('CLAUDE.md')} ou o arquivo de regras do editor).`, `Copy ${ic('AGENTS.md')} to the project root, under the name your tool reads (${ic('AGENTS.md')}, ${ic('CLAUDE.md')}, or your editor’s rules file).`, `Copia ${ic('AGENTS.md')} a la raíz del proyecto, con el nombre que lee tu herramienta (${ic('AGENTS.md')}, ${ic('CLAUDE.md')} o el archivo de reglas del editor).`),
    `curl -o AGENTS.md ${SITE}/${P().dir}/AGENTS.md`,
  ],
  [
    L('Como skill do Claude', 'As a Claude skill', 'Como skill de Claude'),
    L(`Baixe ${link(`${P().dir}/lume-design-system.zip`, 'lume-design-system.zip')} e envie na área de skills das configurações do Claude. No Claude Code, extraia em ${ic('~/.claude/skills/')}.`, `Download ${link(`${P().dir}/lume-design-system.zip`, 'lume-design-system.zip')} and upload it in the skills area of Claude’s settings. In Claude Code, extract it into ${ic('~/.claude/skills/')}.`, `Descarga ${link(`${P().dir}/lume-design-system.zip`, 'lume-design-system.zip')} y súbelo en el área de skills de la configuración de Claude. En Claude Code, extráelo en ${ic('~/.claude/skills/')}.`),
    null,
  ],
];

const FILES = () => [
  [P().llms, 'llms.txt', L('O índice que as IAs procuram: um link para cada arquivo, com uma linha de descrição.', 'The index AIs look for: one link per file, with a one-line description.', 'El índice que buscan las IAs: un enlace por archivo, con una línea de descripción.')],
  [`${P().dir}/${P().readme}`, P().readme, L('A porta de entrada: instalação, regras gerais, direção visual e uma escolha rápida de componentes.', 'The entry point: installation, general rules, visual direction, and a quick component chooser.', 'La puerta de entrada: instalación, reglas generales, dirección visual y una elección rápida de componentes.')],
  [`${P().dir}/AGENTS.md`, 'AGENTS.md', L('As regras em poucas linhas, para copiar para um projeto.', 'The rules in a few lines, to copy into a project.', 'Las reglas en pocas líneas, para copiar a un proyecto.')],
  [`${P().dir}/${P().icons}`, P().icons, L('A lista exata dos 154 nomes de ícone. Nenhum outro existe.', 'The exact list of the 154 icon names. No other exists.', 'La lista exacta de los 154 nombres de ícono. No existe ningún otro.')],
  [`${P().dir}/componentes/botao.md`, 'componentes/*.md', L('Um arquivo por componente: exemplo, variantes com classes, estados, anatomia, acessibilidade, tokens e regras de uso.', 'One file per component: example, variants with classes, states, anatomy, accessibility, tokens, and usage rules.', 'Un archivo por componente: ejemplo, variantes con clases, estados, anatomía, accesibilidad, tokens y reglas de uso.')],
  [`${P().dir}/padroes/login.md`, 'fundamentos · graficos · padroes', L('As demais páginas do site, no mesmo formato.', 'The rest of the site’s pages, in the same format.', 'Las demás páginas del sitio, en el mismo formato.')],
];

const RULES = () => [
  L('Usar só classes, atributos e funções que estão na documentação.', 'Use only classes, attributes, and functions found in the docs.', 'Usar solo clases, atributos y funciones que están en la documentación.'),
  L('Ícones só da lista; nada de SVG próprio no lugar.', 'Icons only from the list; no custom SVG instead.', 'Íconos solo de la lista; nada de SVG propio en su lugar.'),
  L(`Cor, espaço, raio e texto só por token: ${ic('var(--ds-…)')}.`, `Color, spacing, radius, and text only through tokens: ${ic('var(--ds-…)')}.`, `Color, espacio, radio y texto solo por token: ${ic('var(--ds-…)')}.`),
  L('Componente do Lume antes de código próprio.', 'A Lume component before custom code.', 'Componente de Lume antes que código propio.'),
  L('Quando a documentação não cobre o caso, avisar em vez de inventar.', 'When the docs don’t cover a case, say so instead of inventing.', 'Cuando la documentación no cubre el caso, avisar en lugar de inventar.'),
];

function section(id, title, desc, body) {
  return `<section class="doc-section" id="${id}" aria-labelledby="${id}-title">
    <header class="doc-section__header"><div>
      <h2 class="doc-section__title" id="${id}-title">${title}</h2>
      ${desc ? `<p class="doc-section__desc">${desc}</p>` : ''}
    </div></header>
    ${body}
  </section>`;
}

export default function renderIa(page) {
  return `
  <div class="page doc ri-page">
    <header class="doc-header">
      <div>
        <p class="doc-header__eyebrow">${page.group}</p>
        <h1 class="doc-header__title">${page.label}</h1>
        <p class="doc-header__lead">${L('A documentação do Lume em Markdown, no formato que as IAs leem: cada página do site vira um arquivo, com as regras que impedem a IA de inventar classes, ícones e cores.', 'Lume’s documentation in Markdown, in the format AIs read: every page of the site becomes a file, with rules that keep the AI from inventing classes, icons, and colors.', 'La documentación de Lume en Markdown, en el formato que leen las IAs: cada página del sitio se vuelve un archivo, con reglas que impiden que la IA invente clases, íconos y colores.')}</p>
      </div>
      <dl class="doc-stats">
        <div class="doc-stat"><dt class="doc-stat__label">${L('arquivos por idioma', 'files per language', 'archivos por idioma')}</dt><dd class="doc-stat__value">73</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('idiomas', 'languages', 'idiomas')}</dt><dd class="doc-stat__value">3</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('componentes', 'components', 'componentes')}</dt><dd class="doc-stat__value">58</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('ícones listados', 'icons listed', 'íconos listados')}</dt><dd class="doc-stat__value">154</dd></div>
      </dl>
    </header>

    <nav class="doc-nav" aria-label="${L('Nesta página', 'On this page', 'En esta página')}">
      ${NAV().map(([id, label]) => `<button type="button" class="doc-nav__link" data-target="${id}">${label}</button>`).join('')}
    </nav>

    ${section(
      'ia-usar',
      L('Como usar', 'How to use', 'Cómo usar'),
      L('Três jeitos, do mais rápido ao mais permanente. Os arquivos existem em português, inglês e espanhol, e os links abaixo seguem o idioma do site.', 'Three ways, from quickest to most permanent. The files exist in Portuguese, English, and Spanish, and the links below follow the site’s language.', 'Tres formas, de la más rápida a la más permanente. Los archivos existen en portugués, inglés y español, y los enlaces de abajo siguen el idioma del sitio.'),
      `<ol class="ri-steps" role="list">
        ${WAYS().map(
          ([title, text, code], i) => `<li class="ri-step">
            <p class="ds-section__head"><span class="ds-section__stamp">${String(i + 1).padStart(2, '0')}</span><span>${title}</span></p>
            <p class="ri-step__text">${text}</p>
            ${code ? codeBlock(code) : ''}
          </li>`,
        ).join('')}
      </ol>`,
    )}

    ${section(
      'ia-arquivos',
      L('Arquivos', 'Files', 'Archivos'),
      L(`Tudo publicado em ${ic(`${SITE}/${P().dir}/`)}, sem login. Os caminhos ficam em português, como os endereços do site.`, `Everything is published at ${ic(`${SITE}/${P().dir}/`)}, no login needed. Paths stay in Portuguese, like the site’s addresses.`, `Todo publicado en ${ic(`${SITE}/${P().dir}/`)}, sin iniciar sesión. Las rutas quedan en portugués, como las direcciones del sitio.`),
      `<ul class="ri-files" role="list">
        ${FILES().map(([href, name, text]) => `<li class="ri-file">
          <a class="ri-file__name" href="${href}" target="_blank" rel="noopener">${icon('file-text', { size: 18 })}<span>${name}</span></a>
          <p class="ri-file__text">${text}</p>
        </li>`).join('')}
      </ul>`,
    )}

    ${section(
      'ia-regras',
      L('Regras', 'Rules', 'Reglas'),
      L('O que a IA lê antes de qualquer tela. Também valem para quem escreve o código à mão.', 'What the AI reads before any screen. They also apply to anyone writing the code by hand.', 'Lo que la IA lee antes de cualquier pantalla. También valen para quien escribe el código a mano.'),
      `<ul class="ri-rules" role="list">${RULES().map((r) => `<li>${icon('check', { size: 18 })}<span>${r}</span></li>`).join('')}</ul>
      <p class="ri-note">${icon('info', { size: 16 })}<span>${L(`A IA carrega o Lume pelo endereço com versão, como ${ic(`${SITE}/v/1.1/`)}: o projeto só muda quando alguém trocar o número.`, `The AI loads Lume from the versioned address, like ${ic(`${SITE}/v/1.1/`)}: the project only changes when someone changes the number.`, `La IA carga Lume desde la dirección con versión, como ${ic(`${SITE}/v/1.1/`)}: el proyecto solo cambia cuando alguien cambie el número.`)}</span></p>`,
    )}

    ${section(
      'ia-manter',
      L('Para quem mantém', 'For maintainers', 'Para quien mantiene'),
      L('Os arquivos de páginas saem do próprio site: um script abre cada página e converte o conteúdo. Mudou uma página, gere de novo.', 'The page files come from the site itself: a script opens each page and converts its content. Changed a page? Generate again.', 'Los archivos de páginas salen del propio sitio: un script abre cada página y convierte el contenido. ¿Cambió una página? Genera de nuevo.'),
      `${codeBlock('npm run ia')}
      <p class="ri-note">${icon('pencil', { size: 16 })}<span>${L(`O guia (${ic('LEIA-ME.md')}, ${ic('README.md')}, ${ic('LEEME.md')}), o ${ic('AGENTS.md')} e a skill de cada idioma são escritos à mão e o script não mexe neles.`, `The guide (${ic('LEIA-ME.md')}, ${ic('README.md')}, ${ic('LEEME.md')}), ${ic('AGENTS.md')}, and each language’s skill are written by hand, and the script leaves them alone.`, `La guía (${ic('LEIA-ME.md')}, ${ic('README.md')}, ${ic('LEEME.md')}), el ${ic('AGENTS.md')} y la skill de cada idioma se escriben a mano y el script no los toca.`)}</span></p>`,
    )}
  </div>`;
}

export function mount(root) {
  const unmountNav = mountDocNav(root);
  const unmountCopy = mountCodeCopy(root);
  return () => {
    unmountNav();
    unmountCopy();
  };
}
