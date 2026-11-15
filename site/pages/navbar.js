import { icon } from '../../ds/icons/icons.js';
import { renderNavbarNav } from '../../ds/js/shell.js';
import { createSlider } from '../../ds/js/slider.js';
import { mountDocNav } from '../doc-nav.js';
import { mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, usageCards } from '../form-control-doc.js';
import { ic, px, kbd, siteGroups, keyTable, apiTable, cards, anatomyHtml, mountAnatomy, keepInPlace, liveAppHtml, mountLiveApp } from '../shell-doc.js';
import { L } from '../i18n.js';
import { MOD } from '../keys.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/padroes-app-shell.css', 'site/pages/shell-docs.css'];

const ACTIVE = '#/componentes/navbar';
const MIN = 560;
const MAX = 1600;
const START = 1440;

/* ───────── O exemplo: a navbar do próprio site ───────── */

const bar = (kind) => `<div class="ds-navbar sh-navbar" data-sh-navbar="${kind}">
  <a class="ds-brand" href="#/" aria-label="Lume"><img class="ds-brand__mark" src="assets/favicon.svg" alt="" width="24" height="24">Lume</a>
  <nav class="ds-navbar__nav" aria-label="${kind === 'live' ? L('Navegação de exemplo', 'Example navigation', 'Navegación de ejemplo') : L('Anatomia da navbar', 'Navbar anatomy', 'Anatomía de la navbar')}"></nav>
  <button type="button" class="ds-field ds-sidebar-search ds-navbar__search" data-command-open aria-keyshortcuts="Meta+K Control+K">
    ${icon('search', { size: 20 })}
    <span class="ds-field__placeholder">${L('Buscar no Lume', 'Search Lume', 'Buscar en Lume')}</span>
    <span class="ds-sidebar-search__kbd" aria-hidden="true">${kbd([MOD, 'K'])}</span>
  </button>
</div>`;

const liveHtml = () => `<div class="sh-navdemo">
  <div class="ds-form-field sh-navdemo__width">
    <div class="ds-slider__head">
      <label class="ds-form-field__label" for="sh-navbar-width">${L('Largura da janela', 'Window width', 'Ancho de la ventana')}</label>
      <output class="ds-slider__value" for="sh-navbar-width"></output>
    </div>
    <div class="ds-slider"><input class="ds-slider__input" id="sh-navbar-width" type="range" min="${MIN}" max="${MAX}" step="10" value="${START}"></div>
  </div>
  <div class="sh-navstage" data-sh-stage>
    <div class="sh-navscale" data-sh-scale>${bar('live')}</div>
  </div>
  <p class="pa-demo__status" data-sh-status aria-live="polite"></p>
</div>`;

const PARTS = () => [
  ['[data-sh-navbar="anatomy"]', [1, 0, -28, -16], L('Painel', 'Panel', 'Panel'), L(`O mesmo painel da sidebar, deitado no topo: ${px('layout.topbar')} px de altura, raio xl e contorno fino.`, `The same panel as the sidebar, lying across the top: ${px('layout.topbar')} px tall, xl radius, and a thin outline.`, `El mismo panel de la sidebar, acostado arriba: ${px('layout.topbar')} px de alto, radio xl y contorno fino.`)],
  ['[data-sh-navbar="anatomy"] .ds-brand', [0.5, 0, 0, -16], L('Marca', 'Brand', 'Marca'), L('A chama e o nome, como na sidebar. Leva ao início.', 'The flame and the name, as in the sidebar. It goes home.', 'La llama y el nombre, como en la sidebar. Lleva al inicio.')],
  ['[data-sh-navbar="anatomy"] a.ds-navbar__item', [0.5, 1, 0, 16], L('Links principais', 'Main links', 'Enlaces principales'), L('Os itens do grupo sem título viram links diretos. O início fica na marca.', 'The items of the untitled group become direct links. Home lives on the brand.', 'Los elementos del grupo sin título se vuelven enlaces directos. El inicio queda en la marca.')],
  ['[data-sh-navbar="anatomy"] [data-navbar-group]:not([data-current])', [0.5, 0, 0, -16], L('Botão de grupo', 'Group button', 'Botón de grupo'), L('Cada grupo vira um botão com seta. Ele abre um menu com as páginas, em colunas.', 'Each group becomes a button with a chevron. It opens a menu with the pages, in columns.', 'Cada grupo se vuelve un botón con flecha. Abre un menú con las páginas, en columnas.')],
  ['[data-sh-navbar="anatomy"] [data-navbar-group][data-current]', [0.5, 1, 0, 16], L('Grupo atual', 'Current group', 'Grupo actual'), L('O grupo da página aberta fica selecionado, como o item atual da sidebar.', 'The group of the open page stays selected, like the sidebar’s current item.', 'El grupo de la página abierta queda seleccionado, como el elemento actual de la sidebar.')],
  ['[data-sh-navbar="anatomy"] [data-navbar-more]', [0.5, 0, 0, -16], L('Mais', 'More', 'Más'), L('Só aparece quando falta espaço: guarda os últimos itens, separados pelo nome do grupo.', 'Only shows up when space runs out: it holds the last items, split by group name.', 'Solo aparece cuando falta espacio: guarda los últimos elementos, separados por el nombre del grupo.')],
  ['[data-sh-navbar="anatomy"] .ds-navbar__search', [0.5, 1, 0, 16], L('Busca', 'Search', 'Búsqueda'), L(`Abre a paleta de comandos. Com espaço, tem 240 px e o atalho; sem espaço, só a lupa.`, `Opens the command palette. With room, it’s 240 px with the shortcut; without, just the magnifier.`, `Abre la paleta de comandos. Con espacio, tiene 240 px y el atajo; sin espacio, solo la lupa.`)],
];

/* ───────── Quando falta espaço ───────── */

const mini = (step) => `<div class="sh-mini" data-step="${step}" aria-hidden="true">
  <img src="assets/favicon.svg" alt="">
  ${[54, 40, 62, 48, 58].map((w, i) => `<b style="width:${w}px"${step === 3 && i > 2 ? ' hidden' : ''}></b>`).join('')}
  ${step === 3 ? '<b class="sh-mini__more"></b>' : ''}
  <span class="sh-mini__search">${icon('search', { size: 12 })}${step === 1 ? '<i></i>' : ''}</span>
</div>`;

const SPACE = () => [
  [1, L('Tudo cabe', 'Everything fits', 'Todo cabe'), L('Links, grupos e a busca inteira, com o atalho.', 'Links, groups, and the full search, with the shortcut.', 'Enlaces, grupos y la búsqueda entera, con el atajo.'), 'full'],
  [2, L('A busca encolhe', 'Search shrinks', 'La búsqueda se encoge'), L('Primeiro sai o texto da busca: fica só a lupa, do tamanho de um botão. O nome continua lá para o leitor de tela.', 'First the search text goes: only the magnifier stays, the size of a button. The name is still there for screen readers.', 'Primero sale el texto de la búsqueda: queda solo la lupa, del tamaño de un botón. El nombre sigue ahí para el lector de pantalla.'), 'compact'],
  [3, L('Os últimos vão para o Mais', 'The last ones move to More', 'Los últimos pasan a Más'), L('Se ainda faltar, os itens saem do fim para o começo e entram no botão Mais, um por vez, até caber. Nada fica cortado nem por cima da busca.', 'If it still doesn’t fit, items leave from the end toward the start and go into the More button, one at a time, until it fits. Nothing gets cut off or covers the search.', 'Si aún falta, los elementos salen del final hacia el principio y entran en el botón Más, uno por vez, hasta que cabe. Nada queda cortado ni encima de la búsqueda.'), 'more'],
];

const spaceHtml = () => `<div class="sh-space">
  ${SPACE()
    .map(
      ([n, title, text, target]) => `<article class="sh-space__step">
        ${mini(n)}
        <p class="sh-space__title"><span class="pa-steps__num">${n}</span>${title}</p>
        <p class="sh-space__text">${text}</p>
        <button type="button" class="ds-inline-action" data-try-width="${target}">${L('Ver no exemplo', 'See it in the example', 'Verlo en el ejemplo')}${icon('arrow-up', { size: 14 })}</button>
      </article>`,
    )
    .join('')}
</div>
<div class="pa-notes">
  <p>${icon('info', { size: 18 })}<span>${L(`A conta é feita com ${ic('ResizeObserver')} na própria barra, não na janela: vale também para uma navbar dentro de um painel menor.`, `The math runs with ${ic('ResizeObserver')} on the bar itself, not the window: it also works for a navbar inside a smaller panel.`, `La cuenta se hace con ${ic('ResizeObserver')} en la propia barra, no en la ventana: también vale para una navbar dentro de un panel más pequeño.`)}</span></p>
  <p>${icon('target', { size: 18 })}<span>${L('Se a página atual foi para o Mais, é o Mais que fica selecionado.', 'If the current page moved into More, More is the one that stays selected.', 'Si la página actual pasó a Más, es Más el que queda seleccionado.')}</span></p>
</div>`;

/* ───────── Sidebar ou navbar ───────── */

const COMPARE = () => [
  [L('Quantas áreas', 'How many areas', 'Cuántas áreas'), L('Muitas: grupos longos, dezenas de páginas', 'Many: long groups, dozens of pages', 'Muchas: grupos largos, decenas de páginas'), L('Poucas: o que cabe numa linha', 'Few: what fits on one row', 'Pocas: lo que cabe en una línea')],
  [L('Largura do conteúdo', 'Content width', 'Ancho del contenido'), L(`Perde ${px('layout.sidebar')} px (${px('layout.sidebar-collapsed')} px recolhida)`, `Loses ${px('layout.sidebar')} px (${px('layout.sidebar-collapsed')} px collapsed)`, `Pierde ${px('layout.sidebar')} px (${px('layout.sidebar-collapsed')} px contraída)`), L('A largura toda, só perde a altura da barra', 'The full width, only the bar’s height is lost', 'Todo el ancho, solo pierde la altura de la barra')],
  [L('Achar uma página', 'Finding a page', 'Encontrar una página'), L('Tudo à vista, rolando a lista', 'Everything in view, scrolling the list', 'Todo a la vista, desplazando la lista'), L('Um clique a mais: abrir o menu do grupo', 'One more click: opening the group’s menu', 'Un clic más: abrir el menú del grupo')],
  [L('Novidades', 'News', 'Novedades'), L('Bolinha em cada item', 'A dot on each item', 'Punto en cada elemento'), L('Bolinha no botão do grupo', 'A dot on the group button', 'Punto en el botón del grupo')],
  [L('No celular', 'On phones', 'En el móvil'), L('Gaveta', 'Drawer', 'Cajón'), L('A mesma gaveta', 'The same drawer', 'El mismo cajón')],
];

const compareHtml = () => `<div class="doc-table sh-compare">
  <div class="doc-table__head" aria-hidden="true"><span></span><span>Sidebar</span><span>Navbar</span></div>
  ${COMPARE().map(([what, side, top]) => `<div class="doc-table__row"><span class="sh-compare__what">${what}</span><span>${side}</span><span>${top}</span></div>`).join('')}
</div>
<div class="pa-notes">
  <p>${icon('layout', { size: 18 })}<span>${L(`Os dois leem os mesmos grupos. Neste site, a pessoa escolhe na topbar (só no desktop) ou pela busca; a escolha fica salva em ${ic('ds-layout')}. Quem chega pela primeira vez vê a sidebar.`, `Both read the same groups. On this site, people choose in the top bar (desktop only) or via search; the choice is saved in ${ic('ds-layout')}. First-time visitors see the sidebar.`, `Los dos leen los mismos grupos. En este sitio, la persona elige en la barra superior (solo en escritorio) o con la búsqueda; la elección queda guardada en ${ic('ds-layout')}. Quien llega por primera vez ve la sidebar.`)}</span></p>
</div>`;

/* ───────── Código ───────── */

const htmlCode = () => `<div class="ds-shell" id="shell" data-layout="navbar">
  <div class="ds-navbar">
    <a class="ds-brand" href="#/" aria-label="${L('Início', 'Home', 'Inicio')}"><img class="ds-brand__mark" src="logo.svg" alt="">${L('Seu app', 'Your app', 'Tu app')}</a>
    <nav class="ds-navbar__nav" id="navbar-nav" aria-label="${L('Principal', 'Main', 'Principal')}"></nav>
    <button class="ds-field ds-sidebar-search ds-navbar__search" data-command-open>…</button>
  </div>
  <!-- ${L('a sidebar continua na página: no celular, é ela que vira a gaveta', 'the sidebar stays on the page: on phones, it becomes the drawer', 'la sidebar sigue en la página: en el móvil, es ella la que se vuelve cajón')} -->
  <aside class="ds-sidebar" id="sidebar">…</aside>
  <div class="ds-main">…</div>
</div>`;

const jsCode = () => `import { createShell, renderSidebarNav, renderNavbarNav } from 'https://lumeui.dev/v/1.8/lume.js';

const groups = [
  { id: 'main', items: [
    { label: '${L('Início', 'Home', 'Inicio')}', icon: 'home', href: '#/' },          // ${L('na navbar, o início fica na marca', 'in the navbar, home lives on the brand', 'en la navbar, el inicio queda en la marca')}
    { label: '${L('Relatórios', 'Reports', 'Informes')}', icon: 'bar-chart', href: '#/${L('relatorios', 'reports', 'informes')}' },
  ] },
  { id: '${L('vendas', 'sales', 'ventas')}', label: '${L('Vendas', 'Sales', 'Ventas')}', items: [
    { label: '${L('Pedidos', 'Orders', 'Pedidos')}', icon: 'inbox', href: '#/${L('pedidos', 'orders', 'pedidos')}' },
    { label: '${L('Clientes', 'Customers', 'Clientes')}', icon: 'users', href: '#/${L('clientes', 'customers', 'clientes')}' },
  ] },
];

renderSidebarNav(document.getElementById('sidebar-nav'), groups);   // ${L('a gaveta do celular', 'the phone drawer', 'el cajón del móvil')}
const navbar = renderNavbarNav(document.getElementById('navbar-nav'), groups, {
  go: (href) => (location.hash = href),                              // ${L('o que fazer ao escolher no menu', 'what to do when picking from a menu', 'qué hacer al elegir en el menú')}
});
navbar.setActive(location.hash);

const shell = createShell(document.getElementById('shell'));
shell.setLayout('navbar');                                          // ${L('ou “sidebar”; fica salvo', 'or “sidebar”; it’s saved', 'o “sidebar”; queda guardado')}`;

/* ───────── Página ───────── */

export default function renderNavbar(page) {
  return controlPage(page, {
    lead: L('A mesma navegação da sidebar, deitada no topo: links diretos, um menu por grupo e a busca. Quando falta espaço, a busca encolhe e os últimos itens vão para o Mais.', 'The same navigation as the sidebar, lying across the top: direct links, a menu per group, and search. When space runs out, search shrinks and the last items move into More.', 'La misma navegación de la sidebar, acostada arriba: enlaces directos, un menú por grupo y la búsqueda. Cuando falta espacio, la búsqueda se encoge y los últimos elementos pasan a Más.'),
    stats: [
      [L('altura', 'height', 'altura'), `${px('layout.topbar')} px`],
      [L('a partir de', 'from', 'a partir de'), `${px('breakpoint.lg')} px`],
      [L('menu', 'menu', 'menú'), L('colunas', 'columns', 'columnas')],
      [L('sem espaço', 'no room', 'sin espacio'), L('Mais', 'More', 'Más')],
    ],
    sections: [
      {
        id: 'ao-vivo',
        title: L('Ao vivo', 'Live', 'En vivo'),
        desc: L('A navbar deste site, com as páginas de verdade. Diminua a janela e veja a busca encolher e os itens irem para o Mais. Os menus abrem, e escolher uma página só marca o grupo dela.', 'This site’s navbar, with the real pages. Shrink the window and watch search shrink and items move into More. The menus open, and choosing a page only marks its group.', 'La navbar de este sitio, con las páginas de verdad. Achica la ventana y mira cómo la búsqueda se encoge y los elementos pasan a Más. Los menús se abren, y elegir una página solo marca su grupo.'),
        html: liveHtml(),
      },
      {
        id: 'anatomia',
        title: L('Anatomia', 'Anatomy', 'Anatomía'),
        desc: L('Numa largura em que já falta espaço, para o Mais aparecer. Passe o mouse ou foque uma parte da lista para destacá-la.', 'At a width where space is already short, so More shows up. Hover or focus a part in the list to highlight it.', 'En un ancho en el que ya falta espacio, para que aparezca Más. Pasa el puntero o enfoca una parte de la lista para destacarla.'),
        html: anatomyHtml(`<div class="sh-navstage sh-navstage--anatomy">${bar('anatomy')}</div>`, PARTS()),
      },
      {
        id: 'espaco',
        title: L('Quando falta espaço', 'When space runs out', 'Cuando falta espacio'),
        desc: L('A navbar nunca quebra em duas linhas nem corta um item no meio. Ela abre mão das coisas nesta ordem.', 'The navbar never wraps onto two lines or cuts an item in half. It gives things up in this order.', 'La navbar nunca se parte en dos líneas ni corta un elemento por la mitad. Renuncia a las cosas en este orden.'),
        html: spaceHtml(),
      },
      {
        id: 'menus',
        title: L('Menus dos grupos', 'Group menus', 'Menús de los grupos'),
        desc: L('Cada botão de grupo abre um menu com as páginas daquele grupo. Lista longa vira grade, sem rolagem.', 'Each group button opens a menu with that group’s pages. A long list becomes a grid, with no scrolling.', 'Cada botón de grupo abre un menú con las páginas de ese grupo. Una lista larga se vuelve cuadrícula, sin desplazamiento.'),
        html: `${cards([
          ['layers', L('Uma coluna por seção', 'One column per section', 'Una columna por sección'), L(`Se os itens têm ${ic('section')}, cada seção vira uma coluna com o nome em cima (${ic('sectionColumns')}).`, `If the items have a ${ic('section')}, each section becomes a column with its name on top (${ic('sectionColumns')}).`, `Si los elementos tienen ${ic('section')}, cada sección se vuelve una columna con el nombre arriba (${ic('sectionColumns')}).`)],
          ['grid', L('Cinco por coluna', 'Five per column', 'Cinco por columna'), L(`Sem seções, o menu quebra em colunas equilibradas de até cinco itens (${ic('maxRows: 5')}). ← e → pulam de coluna.`, `Without sections, the menu breaks into balanced columns of up to five items (${ic('maxRows: 5')}). ← and → jump between columns.`, `Sin secciones, el menú se parte en columnas equilibradas de hasta cinco elementos (${ic('maxRows: 5')}). ← y → saltan de columna.`)],
          ['more-horizontal', L('Mais, agrupado', 'More, grouped', 'Más, agrupado'), L('O Mais junta os itens que saíram, com o nome de cada grupo como título da coluna.', 'More gathers the items that left, with each group’s name as the column title.', 'Más reúne los elementos que salieron, con el nombre de cada grupo como título de la columna.')],
          ['maximize', L('Sempre na tela', 'Always on screen', 'Siempre en pantalla'), L('Perto da borda, o menu desliza para caber. A seta do botão gira enquanto ele está aberto.', 'Near the edge, the menu slides to fit. The button’s chevron turns while it’s open.', 'Cerca del borde, el menú se desliza para caber. La flecha del botón gira mientras está abierto.')],
        ])}
        <div class="pa-notes"><button type="button" class="ds-inline-action" data-try-menu>${icon('chevron-down', { size: 16 })}${L('Abrir Componentes no exemplo', 'Open Components in the example', 'Abrir Componentes en el ejemplo')}${icon('arrow-up', { size: 14 })}</button></div>`,
      },
      {
        id: 'no-app',
        title: L('No app', 'In the app', 'En la app'),
        desc: L(`O Lume inteiro, no layout navbar. Troque para o celular: abaixo de ${px('breakpoint.lg')} px a navbar sai e o botão de menu da topbar abre a mesma gaveta da sidebar.`, `All of Lume, in the navbar layout. Switch to the phone: below ${px('breakpoint.lg')} px the navbar goes away and the top bar’s menu button opens the same drawer as the sidebar.`, `Todo Lume, en el diseño navbar. Cambia al móvil: por debajo de ${px('breakpoint.lg')} px la navbar se va y el botón de menú de la barra superior abre el mismo cajón de la sidebar.`),
        html: liveAppHtml('navbar'),
      },
      {
        id: 'escolha',
        title: L('Sidebar ou navbar', 'Sidebar or navbar', 'Sidebar o navbar'),
        desc: L('Os dois levam aos mesmos lugares. A diferença está em quantos lugares são e em quanto espaço o conteúdo pede.', 'Both lead to the same places. The difference is how many places there are and how much room the content needs.', 'Los dos llevan a los mismos lugares. La diferencia está en cuántos lugares son y en cuánto espacio pide el contenido.'),
        html: compareHtml(),
      },
      {
        id: 'teclado',
        title: L('Teclado', 'Keyboard', 'Teclado'),
        desc: L('Os menus seguem o mesmo teclado do componente Menu.', 'The menus follow the same keyboard as the Menu component.', 'Los menús siguen el mismo teclado del componente Menú.'),
        html: keyTable([
          [['Tab'], L('Andar pela barra', 'Move along the bar', 'Recorrer la barra'), L('Marca, links, botões de grupo, Mais e busca, na ordem da tela.', 'Brand, links, group buttons, More, and search, in screen order.', 'Marca, enlaces, botones de grupo, Más y búsqueda, en el orden de la pantalla.')],
          [['Enter'], L('Abrir o menu do grupo', 'Open the group’s menu', 'Abrir el menú del grupo'), L('Espaço e ↓ também abrem; o foco vai para a página atual ou para a primeira.', 'Space and ↓ open it too; focus goes to the current page or the first one.', 'Espacio y ↓ también lo abren; el foco va a la página actual o a la primera.')],
          [['↑', '↓'], L('Andar no menu', 'Move in the menu', 'Moverse en el menú'), L('Home e End vão para a primeira e a última. Uma letra pula para o item que começa com ela.', 'Home and End go to the first and last. A letter jumps to the item that starts with it.', 'Home y End van al primero y al último. Una letra salta al elemento que empieza con ella.')],
          [['←', '→'], L('Pular de coluna', 'Jump between columns', 'Saltar de columna'), L('Nos menus em grade ou com seções.', 'In grid or sectioned menus.', 'En los menús en cuadrícula o con secciones.')],
          [['Esc'], L('Fechar o menu', 'Close the menu', 'Cerrar el menú'), L('E devolve o foco ao botão do grupo.', 'And returns focus to the group button.', 'Y devuelve el foco al botón del grupo.')],
          [[MOD, 'K'], L('Abrir a busca', 'Open search', 'Abrir la búsqueda'), L('Mesmo com a busca só no ícone.', 'Even when search is just the icon.', 'Incluso con la búsqueda solo en el ícono.')],
        ]),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('O que o teclado e o leitor de tela encontram.', 'What the keyboard and screen readers find.', 'Lo que encuentran el teclado y el lector de pantalla.'),
        html: a11yList([
          [L('Navegação com nome', 'Named navigation', 'Navegación con nombre'), L(`Os links e botões ficam num ${ic('nav')} “Principal”, o mesmo nome da sidebar: só um dos dois aparece por vez.`, `Links and buttons sit in a ${ic('nav')} “Main”, the same name as the sidebar’s: only one of them shows at a time.`, `Los enlaces y botones quedan en un ${ic('nav')} “Principal”, el mismo nombre de la sidebar: solo uno de los dos aparece a la vez.`)],
          [L('Botões que abrem menu', 'Buttons that open a menu', 'Botones que abren menú'), L(`Cada grupo é um botão com ${ic('aria-haspopup')} e ${ic('aria-expanded')}; o menu é uma lista com ${ic('role="menu"')}.`, `Each group is a button with ${ic('aria-haspopup')} and ${ic('aria-expanded')}; the menu is a list with ${ic('role="menu"')}.`, `Cada grupo es un botón con ${ic('aria-haspopup')} y ${ic('aria-expanded')}; el menú es una lista con ${ic('role="menu"')}.`), ['Enter']],
          [L('Página atual', 'Current page', 'Página actual'), L(`O link atual tem ${ic('aria-current="page"')}; no menu, a página atual vem marcada.`, `The current link has ${ic('aria-current="page"')}; in a menu, the current page is checked.`, `El enlace actual tiene ${ic('aria-current="page"')}; en el menú, la página actual aparece marcada.`)],
          [L('Nada some de verdade', 'Nothing really disappears', 'Nada desaparece de verdad'), L('O que vai para o Mais sai do Tab e entra no menu dele. A busca compacta mantém o texto escondido, para o leitor de tela.', 'What moves into More leaves the Tab order and joins its menu. The compact search keeps its text hidden, for screen readers.', 'Lo que pasa a Más sale del Tab y entra en su menú. La búsqueda compacta mantiene el texto oculto, para el lector de pantalla.')],
          [L('Foco de volta', 'Focus comes back', 'El foco vuelve'), L('Esc ou escolher uma página fecha o menu e devolve o foco ao botão que o abriu.', 'Esc or choosing a page closes the menu and returns focus to the button that opened it.', 'Esc o elegir una página cierra el menú y devuelve el foco al botón que lo abrió.'), ['Esc']],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Os mesmos da sidebar, mais a altura da barra.', 'The same as the sidebar’s, plus the bar’s height.', 'Los mismos de la sidebar, más la altura de la barra.'),
        html: tokenTable([
          ['layout.topbar', L('Altura da barra', 'Bar height', 'Altura de la barra')],
          ['layout.frame-gap', L('Distância da borda da janela e do painel principal', 'Distance from the window edge and the main panel', 'Distancia del borde de la ventana y del panel principal')],
          ['radius.xl', L('Cantos do painel', 'Panel corners', 'Esquinas del panel')],
          ['color.bg.sidebar', L('Fundo do painel', 'Panel background', 'Fondo del panel')],
          ['color.border.subtle', L('Contorno do painel', 'Panel outline', 'Contorno del panel')],
          ['size.control.compact', L('Altura dos links e botões de grupo', 'Height of links and group buttons', 'Altura de los enlaces y botones de grupo')],
          ['size.control.md', L('Busca compacta', 'Compact search', 'Búsqueda compacta')],
          ['color.bg.hover', L('Hover e menu aberto', 'Hover and open menu', 'Hover y menú abierto')],
          ['color.bg.selected', L('Link e grupo atuais', 'Current link and group', 'Enlace y grupo actuales')],
          ['color.brand.indicator', L('Bolinha de novidade', 'New dot', 'Punto de novedad')],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`A navbar mora no ${ic('.ds-shell')}, ao lado da sidebar, e aparece com ${ic('data-layout="navbar"')}. Os grupos são os mesmos.`, `The navbar lives in ${ic('.ds-shell')}, next to the sidebar, and shows with ${ic('data-layout="navbar"')}. The groups are the same.`, `La navbar vive en ${ic('.ds-shell')}, junto a la sidebar, y aparece con ${ic('data-layout="navbar"')}. Los grupos son los mismos.`),
        html: `<h3 class="doc-subhead">HTML</h3>
          ${codeBlock(htmlCode())}
          <h3 class="doc-subhead">JavaScript</h3>
          ${codeBlock(jsCode())}
          ${apiTable([
            ['renderNavbarNav(el, groups, { go })', L(`Desenha links e botões de grupo e liga os menus. ${ic('go(href)')} roda ao escolher uma página; o padrão é ${ic('location.assign')}.`, `Draws links and group buttons and wires the menus. ${ic('go(href)')} runs when a page is picked; the default is ${ic('location.assign')}.`, `Dibuja enlaces y botones de grupo y conecta los menús. ${ic('go(href)')} se ejecuta al elegir una página; el predeterminado es ${ic('location.assign')}.`)],
            ['navbar.setActive(href)', L('Marca o link ou o grupo da página atual (ou o Mais, se ela foi para lá).', 'Marks the link or group of the current page (or More, if it moved there).', 'Marca el enlace o el grupo de la página actual (o Más, si pasó allí).')],
            ['navbar.destroy()', L('Desliga os menus e a medida de espaço.', 'Turns off the menus and the space measurement.', 'Apaga los menús y la medida de espacio.')],
            ['shell.setLayout(\'navbar\' | \'sidebar\')', L(`Troca o layout e grava em ${ic('ds-layout')}. ${ic('shell.layout')} lê o atual.`, `Switches the layout and saves it in ${ic('ds-layout')}. ${ic('shell.layout')} reads the current one.`, `Cambia el diseño y lo guarda en ${ic('ds-layout')}. ${ic('shell.layout')} lee el actual.`)],
            [L('botões [data-layout-option]', '[data-layout-option] buttons', 'botones [data-layout-option]'), L('Dentro do shell, num radiogroup, viram o seletor de layout sem código.', 'Inside the shell, in a radiogroup, they become the layout picker with no code.', 'Dentro del shell, en un radiogroup, se vuelven el selector de diseño sin código.')],
          ])}`,
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando a navbar é a melhor escolha.', 'When the navbar is the better choice.', 'Cuándo la navbar es la mejor opción.'),
        html: usageCards([
          ['do', L('Faça: poucas áreas, conteúdo largo', 'Do: few areas, wide content', 'Haz: pocas áreas, contenido ancho'), L('Tabelas, quadros e painéis que precisam da largura toda. Nomes curtos nos grupos, para caber mais antes do Mais.', 'Tables, boards, and dashboards that need the full width. Short group names, so more fits before More.', 'Tablas, tableros y paneles que necesitan todo el ancho. Nombres cortos en los grupos, para que quepa más antes de Más.')],
          ['dont', L('Evite: dezenas de links soltos', 'Avoid: dozens of loose links', 'Evita: decenas de enlaces sueltos'), L('Se a linha de cima já não cabe numa tela comum, os grupos estão grandes demais ou são muitos: é caso de sidebar.', 'If the top row doesn’t fit on a regular screen, the groups are too big or too many: that’s a case for the sidebar.', 'Si la fila de arriba ya no cabe en una pantalla común, los grupos son demasiado grandes o demasiados: es caso de sidebar.')],
          ['tip', L('O mais usado primeiro', 'Most used first', 'Lo más usado primero'), L('O Mais tira do fim. Ponha à esquerda o que a pessoa mais usa, e ele vai ser o último a sair.', 'More takes from the end. Put what people use most on the left, and it will be the last to go.', 'Más toma del final. Pon a la izquierda lo que la persona más usa, y será lo último en salir.')],
        ]),
      },
    ],
  });
}

/* ───────── Comportamento ───────── */

const state = (el) => {
  const hidden = el.querySelectorAll('.ds-navbar__nav > .ds-navbar__item[hidden]:not([data-navbar-more])').length;
  return { compact: el.hasAttribute('data-compact'), hidden };
};

export function mount(root) {
  const cleanups = [mountCodeCopy(root), mountDocNav(root)];
  const groups = siteGroups();

  /* ── anatomia ── */
  const anatomyBar = root.querySelector('[data-sh-navbar="anatomy"]');
  if (anatomyBar) {
    const nav = renderNavbarNav(anatomyBar.querySelector('nav'), groups, { go: () => {} });
    nav.setActive(ACTIVE);
    anatomyBar.querySelector('nav').querySelectorAll('a, button').forEach((el) => (el.tabIndex = -1));
    cleanups.push(nav.destroy, keepInPlace(anatomyBar), mountAnatomy(root, PARTS()));
  }

  /* ── ao vivo ── */
  const liveBar = root.querySelector('[data-sh-navbar="live"]');
  if (liveBar) {
    const stage = root.querySelector('[data-sh-stage]');
    const scaleBox = root.querySelector('[data-sh-scale]');
    const status = root.querySelector('[data-sh-status]');
    let width = START;
    let current = ACTIVE;
    let picked = '';

    const describe = () => {
      const { compact, hidden } = state(liveBar);
      const parts = [
        !compact
          ? L('Tudo cabe', 'Everything fits', 'Todo cabe')
          : hidden
            ? L(`Busca só com o ícone · ${hidden} ${hidden === 1 ? 'item no Mais' : 'itens no Mais'}`, `Search as an icon · ${hidden} ${hidden === 1 ? 'item in More' : 'items in More'}`, `Búsqueda solo con el ícono · ${hidden} ${hidden === 1 ? 'elemento en Más' : 'elementos en Más'}`)
            : L('Busca só com o ícone', 'Search as an icon', 'Búsqueda solo con el ícono'),
      ];
      if (picked) parts.push(picked);
      const text = parts.join(' · ');
      if (status.textContent !== text) status.textContent = text;
    };

    const nav = renderNavbarNav(liveBar.querySelector('nav'), groups, {
      go: (href) => {
        current = href;
        nav.setActive(href);
        const page = groups.flatMap((g) => g.items).find((i) => i.href === href);
        picked = page ? L(`Escolhida: ${page.label}`, `Picked: ${page.label}`, `Elegida: ${page.label}`) : '';
        describe();
      },
    });
    nav.setActive(current);

    const apply = () => {
      const cs = getComputedStyle(stage);
      const avail = stage.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const scale = Math.min(1, avail / width);
      scaleBox.style.width = `${width}px`;
      scaleBox.style.transform = scale < 1 ? `scale(${scale})` : '';
      stage.style.height = `${Math.ceil(liveBar.offsetHeight * scale)}px`;
    };
    const slider = createSlider(root.querySelector('.sh-navdemo .ds-slider'), {
      format: (v) => `${v} px`,
      onInput: (v) => {
        width = v;
        apply();
      },
      onChange: (v) => {
        width = v;
        apply();
      },
    });

    const mo = new MutationObserver(describe);
    mo.observe(liveBar, { subtree: true, attributes: true, attributeFilter: ['hidden', 'data-compact'] });
    const ro = new ResizeObserver(apply);
    ro.observe(stage);
    apply();
    describe();

    // “Ver no exemplo”: anda a largura até chegar no estado pedido, um passo por quadro
    let anim = 0;
    const goal = {
      full: (s) => !s.compact,
      compact: (s) => s.compact && !s.hidden,
      more: (s) => s.hidden >= 2,
    };
    const walk = (target) => {
      cancelAnimationFrame(anim);
      const want = goal[target];
      const dir = target === 'full' || (target === 'compact' && state(liveBar).hidden) ? 1 : -1;
      const step = () => {
        if (want(state(liveBar)) || (dir < 0 ? width <= MIN : width >= MAX)) return;
        width = Math.min(MAX, Math.max(MIN, width + dir * 10));
        slider.setValue(width);
        apply();
        anim = requestAnimationFrame(step);
      };
      // a barra mede no ResizeObserver: confere o estado no quadro seguinte
      anim = requestAnimationFrame(step);
    };
    const onTry = (e) => {
      const w = e.target.closest('[data-try-width]');
      const m = e.target.closest('[data-try-menu]');
      if (!w && !m) return;
      root.querySelector('#ao-vivo').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      if (w) {
        if (w.dataset.tryWidth === 'full') {
          width = MAX;
          slider.setValue(width);
          apply();
        } else walk(w.dataset.tryWidth);
      } else {
        const btn = liveBar.querySelector('[data-navbar-group="componentes"]:not([hidden])') ?? liveBar.querySelector('[data-navbar-more]:not([hidden])');
        // espera a rolagem até o exemplo terminar: rolar fecha o menu
        setTimeout(() => btn?.click(), 800);
      }
    };
    root.addEventListener('click', onTry);

    cleanups.push(
      nav.destroy,
      keepInPlace(liveBar, (href) => {
        if (href === '#/') return;
        nav.setActive(href);
      }),
      () => {
        mo.disconnect();
        ro.disconnect();
        cancelAnimationFrame(anim);
        slider.destroy?.();
        root.removeEventListener('click', onTry);
      },
    );
  }

  const live = mountLiveApp(root, { layout: 'navbar', route: ACTIVE });
  cleanups.push(live.off);

  return () => cleanups.forEach((fn) => fn());
}
