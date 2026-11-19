import { icon } from '../../ds/icons/icons.js';
import { renderSidebarNav } from '../../ds/js/shell.js';
import { mountDocNav } from '../doc-nav.js';
import { mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, usageCards } from '../form-control-doc.js';
import { ic, px, kbd, siteGroups, keyTable, apiTable, cards, steps, anatomyHtml, mountAnatomy, keepInPlace, liveAppHtml, mountLiveApp, dropJumps } from '../shell-doc.js';
import { CURRENT_VERSION } from '../changelog.js';
import { L } from '../i18n.js';
import { MOD } from '../keys.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/padroes-app-shell.css', 'site/pages/shell-docs.css'];

const ACTIVE = '#/componentes/sidebar';
const line = CURRENT_VERSION.split('.').slice(0, 2).join('.');

/* ───────── O exemplo: a sidebar do próprio Lume, com menos páginas ───────── */

const GROUPS = () =>
  siteGroups({
    only: ['main', 'fundamentos', 'componentes'],
    pick: {
      main: (items) => items.filter((i) => ['#/', '#/novidades', '#/roadmap'].includes(i.href)).map((i) => ({ ...i, dot: i.href === '#/novidades' })),
      fundamentos: (items) => items.slice(0, 3),
      componentes: (items) => items.filter((i) => ['#/componentes/botao', '#/componentes/chip', '#/componentes/sidebar', '#/componentes/navbar', '#/componentes/abas'].includes(i.href)),
    },
  });

/** A marcação que renderSidebarNav gera, com ids próprios (a sidebar do site já usa os dela) e tudo aberto. */
function navHtml() {
  const box = document.createElement('div');
  renderSidebarNav(box, GROUPS());
  box.querySelectorAll('.ds-nav-group').forEach((g) => {
    g.dataset.group = `exemplo-${g.dataset.group}`;
    g.dataset.open = 'true';
  });
  box.querySelectorAll('[aria-controls^="nav-group-"]').forEach((b) => {
    b.setAttribute('aria-controls', `sh-${b.getAttribute('aria-controls')}`);
    b.setAttribute('aria-expanded', 'true');
  });
  box.querySelectorAll('[id^="nav-group-"]').forEach((el) => (el.id = `sh-${el.id}`));
  box.querySelectorAll('.ds-nav-item').forEach((a) => a.getAttribute('href') === ACTIVE && a.setAttribute('aria-current', 'page'));
  return box.innerHTML;
}

const specimen = () => `<aside class="ds-sidebar sh-sidebar" aria-label="${L('Exemplo de sidebar', 'Sidebar example', 'Ejemplo de sidebar')}" data-ds-tooltips="off" data-sh-sidebar>
  <div class="ds-sidebar__header">
    <a class="ds-brand" href="#/" aria-label="Lume"><img class="ds-brand__mark" src="assets/favicon.svg" alt="" width="24" height="24">Lume</a>
  </div>
  <div class="ds-sidebar__search">
    <button type="button" class="ds-field ds-sidebar-search" data-command-open aria-keyshortcuts="Meta+K Control+K">
      ${icon('search', { size: 20 })}
      <span class="ds-field__placeholder">${L('Buscar no Lume', 'Search Lume', 'Buscar en Lume')}</span>
      <span class="ds-sidebar-search__kbd" aria-hidden="true">${kbd([MOD, 'K'])}</span>
    </button>
  </div>
  <nav class="ds-sidebar__nav" aria-label="${L('Navegação de exemplo', 'Example navigation', 'Navegación de ejemplo')}">${navHtml()}</nav>
  <div class="ds-sidebar__footer">
    <a class="ds-account" href="#/novidades">
      <span class="ds-avatar">${icon('package', { size: 20 })}</span>
      <span class="ds-account__text"><span class="ds-account__title">Lume ${line}</span><span class="ds-account__subtitle">${L('Ver o que há de novo', 'See what’s new', 'Ver las novedades')}</span></span>
      ${icon('chevron-right', { className: 'ds-account__chevron' })}
    </a>
  </div>
</aside>`;

// [seletor do marcador, [x, y] em fração da caixa + deslocamento em px, nome, descrição, seletor do destaque]
const PARTS = () => [
  ['.sh-sidebar', [0, 0.5, 0, 0], L('Painel', 'Panel', 'Panel'), L(`${px('layout.sidebar')} px de largura, raio xl e contorno fino. Flutua sobre o fundo do app, a ${px('layout.frame-gap')} px da borda.`, `${px('layout.sidebar')} px wide, xl radius and a thin outline. It floats over the app background, ${px('layout.frame-gap')} px from the edge.`, `${px('layout.sidebar')} px de ancho, radio xl y contorno fino. Flota sobre el fondo de la app, a ${px('layout.frame-gap')} px del borde.`)],
  ['.sh-sidebar .ds-brand', [1, 0.5, 16, 0], L('Marca', 'Brand', 'Marca'), L('A chama na coluna dos ícones e o nome alinhado com os rótulos. Leva ao início.', 'The flame in the icon column and the name lined up with the labels. It goes home.', 'La llama en la columna de los íconos y el nombre alineado con las etiquetas. Lleva al inicio.')],
  ['.sh-sidebar .ds-sidebar-search', [1, 0.5, 0, 0], L('Busca', 'Search', 'Búsqueda'), L(`Um botão com cara de campo: abre a paleta de comandos, como ${MOD} K.`, `A button that looks like a field: it opens the command palette, like ${MOD} K.`, `Un botón con aspecto de campo: abre la paleta de comandos, como ${MOD} K.`)],
  ['.sh-sidebar .ds-nav-item--lg', [1, 0.5, 0, 0], L('Navegação principal', 'Main navigation', 'Navegación principal'), L('O grupo sem título: itens maiores, sempre à vista, para os lugares de todo dia.', 'The untitled group: larger items, always in view, for everyday places.', 'El grupo sin título: elementos más grandes, siempre a la vista, para los lugares de todos los días.'), '.sh-sidebar .ds-nav-list'],
  ['.sh-sidebar .ds-dot', [1, 0.5, 16, 0], L('Bolinha de novidade', 'New dot', 'Punto de novedad'), L('Marca o que mudou desde a última visita. O leitor de tela ouve “Novo”.', 'Marks what changed since the last visit. Screen readers hear “New”.', 'Marca lo que cambió desde la última visita. El lector de pantalla oye “Nuevo”.')],
  ['.sh-sidebar .ds-nav-group__header', [0.55, 0.5, 0, 0], L('Título do grupo', 'Group title', 'Título del grupo'), L('Recolhe e abre o grupo. O estado fica salvo para a próxima visita.', 'Collapses and opens the group. The state is saved for the next visit.', 'Contrae y abre el grupo. El estado queda guardado para la próxima visita.')],
  ['.sh-sidebar .ds-nav-section', [0.5, 0.5, 0, 0], L('Rótulo de seção', 'Section label', 'Etiqueta de sección'), L(`Divide um grupo longo. Vem do campo ${ic('section')} de cada item.`, `Splits a long group. It comes from each item’s ${ic('section')} field.`, `Divide un grupo largo. Viene del campo ${ic('section')} de cada elemento.`)],
  ['.sh-sidebar [aria-current="page"]', [1, 0.5, 0, 0], L('Item atual', 'Current item', 'Elemento actual'), L(`Fundo selecionado, contorno fino e ${ic('aria-current="page"')}.`, `Selected background, a thin outline, and ${ic('aria-current="page"')}.`, `Fondo seleccionado, contorno fino y ${ic('aria-current="page"')}.`)],
  ['.sh-sidebar .ds-account', [1, 0.5, 0, 0], L('Rodapé', 'Footer', 'Pie'), L('Preso no pé do painel: conta, workspace ou, aqui, a versão.', 'Pinned to the foot of the panel: account, workspace, or, here, the version.', 'Fijo al pie del panel: cuenta, workspace o, aquí, la versión.')],
];

/* ───────── Estados de um item ───────── */

const item = (glyph, label, attrs = '', { lg = false, dot = false, count } = {}) =>
  `<a class="ds-nav-item${lg ? ' ds-nav-item--lg' : ''}" href="#/" ${attrs}>${icon(glyph, { size: 20 })}<span class="ds-nav-item__label">${label}</span>${count !== undefined ? `<span class="ds-nav-item__count">${count}</span>` : ''}${dot ? `<span class="ds-dot" aria-label="${L('Novo', 'New', 'Nuevo')}"></span>` : ''}</a>`;

const STATES = () => [
  [item('home', L('Início', 'Home', 'Inicio'), '', { lg: true }), L('Principal', 'Main', 'Principal'), L(`${px('size.control.lg')} px, rótulo maior e mais escuro`, `${px('size.control.lg')} px, larger and darker label`, `${px('size.control.lg')} px, etiqueta más grande y más oscura`)],
  [item('palette', L('Cores', 'Color', 'Colores')), L('Padrão', 'Default', 'Normal'), L(`Item de grupo, ${px('size.control.md')} px`, `Group item, ${px('size.control.md')} px`, `Elemento de grupo, ${px('size.control.md')} px`)],
  [item('palette', L('Cores', 'Color', 'Colores'), 'data-state="hover"'), 'Hover', 'bg.hover'],
  [item('palette', L('Cores', 'Color', 'Colores'), 'data-state="focus"'), L('Foco', 'Focus', 'Foco'), L('Anel por dentro do item', 'Ring inside the item', 'Anillo por dentro del elemento')],
  [item('palette', L('Cores', 'Color', 'Colores'), 'aria-current="page"'), L('Atual', 'Current', 'Actual'), 'bg.selected · border.subtle'],
  [item('megaphone', L('Novidades', 'What’s new', 'Novedades'), '', { dot: true }), L('Com novidade', 'With news', 'Con novedad'), 'brand.indicator'],
  [item('component', L('Componentes', 'Components', 'Componentes'), '', { count: 60 }), L('Com contagem', 'With a count', 'Con conteo'), 'count · fg.subtle'],
];

const statesHtml = () => `<div class="ds-sidebar sh-sidebar sh-states" data-ds-tooltips="off" inert>
  <ul class="sh-states__list" role="list">
    ${STATES()
      .map(([sample, name, note]) => `<li class="sh-states__row"><div class="sh-states__sample">${sample}</div><p class="sh-states__name">${name}<span>${note}</span></p></li>`)
      .join('')}
    <li class="sh-states__row"><div class="sh-states__sample"><button type="button" class="ds-nav-group__header" aria-expanded="true"><span class="ds-nav-group__label">${L('Fundamentos', 'Foundations', 'Fundamentos')}</span><span class="ds-nav-group__toggle" aria-hidden="true">${icon('chevron-down', { size: 16 })}</span></button></div><p class="sh-states__name">${L('Título do grupo', 'Group title', 'Título del grupo')}<span>heading-xs</span></p></li>
    <li class="sh-states__row"><div class="sh-states__sample"><button type="button" class="ds-nav-group__header" aria-expanded="false"><span class="ds-nav-group__label">${L('Fundamentos', 'Foundations', 'Fundamentos')}</span><span class="ds-nav-group__toggle" aria-hidden="true">${icon('chevron-down', { size: 16 })}</span></button></div><p class="sh-states__name">${L('Grupo fechado', 'Closed group', 'Grupo cerrado')}<span>${L('a seta gira para o lado', 'the chevron turns sideways', 'la flecha gira hacia el lado')}</span></p></li>
  </ul>
</div>`;

/* ───────── Recolhida ───────── */

const collapsedHtml = () => `<div class="pa-states">
  <article class="pa-state">
    <div class="pa-state__art" aria-hidden="true">
      <div class="pa-mini" data-mode="expanded">
        <span class="pa-mini__brand"><img src="assets/favicon.svg" alt="">Lume</span><span class="pa-mini__search"><i></i><b></b></span>
        ${[64, 52, 70].map((w) => `<span class="pa-mini__item"><i></i><b style="width:${w}%"></b></span>`).join('')}
        <span class="pa-mini__group"><b></b></span>
        ${[58, 44].map((w) => `<span class="pa-mini__item"><i></i><b style="width:${w}%"></b></span>`).join('')}
      </div>
    </div>
    <div class="pa-state__body">
      <p class="pa-state__name">${L('Aberta', 'Open', 'Abierta')} <span>${px('layout.sidebar')} px</span></p>
      <ul class="pa-state__list" role="list">
        <li>${L('Não há botão no cabeçalho: quem recolhe é a aba redonda presa na borda direita, na altura da marca.', 'There’s no button in the header: the round tab on the right edge, level with the brand, collapses it.', 'No hay botón en la cabecera: la pestaña redonda en el borde derecho, a la altura de la marca, la contrae.')}</li>
        <li>${L('A aba aparece com o mouse sobre a sidebar ou com o foco, e some no resto do tempo.', 'The tab shows with the pointer over the sidebar or with focus, and stays out of the way otherwise.', 'La pestaña aparece con el puntero sobre la sidebar o con el foco, y el resto del tiempo desaparece.')}</li>
        <li>${L('Sem tooltips: o nome já está escrito.', 'No tooltips: the name is already written.', 'Sin tooltips: el nombre ya está escrito.')}</li>
      </ul>
    </div>
  </article>
  <article class="pa-state">
    <div class="pa-state__art" aria-hidden="true">
      <div class="pa-mini" data-mode="collapsed">
        <span class="pa-mini__brand"><img src="assets/favicon.svg" alt=""></span><span class="pa-mini__search"><i></i></span>
        ${[1, 2, 3].map(() => '<span class="pa-mini__item"><i></i></span>').join('')}
        <span class="pa-mini__group"></span>
        ${[1, 2].map(() => '<span class="pa-mini__item"><i></i></span>').join('')}
      </div>
    </div>
    <div class="pa-state__body">
      <p class="pa-state__name">${L('Recolhida', 'Collapsed', 'Contraída')} <span>${px('layout.sidebar-collapsed')} px</span></p>
      <ul class="pa-state__list" role="list">
        <li>${L('A chama ocupa o lugar do botão, maior (28 px). Com o mouse ou o foco, vira o ícone de expandir.', 'The flame takes the button’s place, larger (28 px). With the pointer or focus, it turns into the expand icon.', 'La llama ocupa el lugar del botón, más grande (28 px). Con el puntero o el foco, se vuelve el ícono de expandir.')}</li>
        <li>${L('Os ícones não saem da coluna; os rótulos somem por opacidade.', 'The icons stay in their column; the labels fade out.', 'Los íconos no salen de su columna; las etiquetas desaparecen por opacidad.')}</li>
        <li>${L('Cada item ganha tooltip com o nome. Títulos de grupo viram um fio, e a bolinha sobe para o canto do ícone.', 'Each item gets a tooltip with its name. Group titles become a thin line, and the dot moves to the icon’s corner.', 'Cada elemento recibe un tooltip con el nombre. Los títulos de grupo se vuelven una línea, y el punto sube a la esquina del ícono.')}</li>
      </ul>
    </div>
  </article>
</div>
<div class="pa-notes">
  <p>${icon('history', { size: 18 })}<span>${L(`A escolha fica salva (${ic('ds-sidebar')}) e é aplicada antes do primeiro desenho: a página não pisca ao abrir.`, `The choice is saved (${ic('ds-sidebar')}) and applied before the first paint: the page doesn’t flash on open.`, `La elección queda guardada (${ic('ds-sidebar')}) y se aplica antes del primer dibujo: la página no parpadea al abrir.`)}</span></p>
  <p>${icon('motion', { size: 18 })}<span>${L(`A largura anima em ${ic('duration.slow')} com ${ic('easing.emphasized')}; com movimento reduzido, a troca é imediata.`, `The width animates with ${ic('duration.slow')} and ${ic('easing.emphasized')}; with reduced motion, the change is immediate.`, `El ancho se anima con ${ic('duration.slow')} y ${ic('easing.emphasized')}; con movimiento reducido, el cambio es inmediato.`)}</span></p>
  <button type="button" class="ds-inline-action" data-try="collapse">${icon('panel-left', { size: 16 })}${L('Recolher no exemplo ao vivo', 'Collapse in the live example', 'Contraer en el ejemplo en vivo')}${icon('arrow-up', { size: 14 })}</button>
</div>`;

/* ───────── Código ───────── */

const htmlCode = () => `<aside class="ds-sidebar" id="sidebar" aria-label="${L('Barra lateral', 'Sidebar', 'Barra lateral')}">
  <div class="ds-sidebar__header">
    <a class="ds-brand" href="#/" aria-label="${L('Início', 'Home', 'Inicio')}"><img class="ds-brand__mark" src="logo.svg" alt="">${L('Seu app', 'Your app', 'Tu app')}</a>
    <button class="ds-icon-btn ds-icon-btn--outline ds-icon-btn--lg ds-sidebar__toggle" data-shell-toggle aria-controls="sidebar">
      <img class="ds-sidebar__toggle-mark" src="logo.svg" alt="">
      <ds-icon name="panel-left" class="ds-sidebar__toggle-collapse"></ds-icon>
      <ds-icon name="x" class="ds-sidebar__toggle-close"></ds-icon>
    </button>
  </div>
  <div class="ds-sidebar__search">
    <button class="ds-field ds-sidebar-search" data-command-open>…</button>
  </div>
  <nav class="ds-sidebar__nav" id="sidebar-nav" aria-label="${L('Principal', 'Main', 'Principal')}"></nav>
  <div class="ds-sidebar__footer"><a class="ds-account" href="…">…</a></div>
</aside>
<!-- ${L('a aba de recolher fica fora da sidebar, presa na borda dela', 'the collapse tab lives outside the sidebar, pinned to its edge', 'la pestaña de contraer queda fuera de la sidebar, fija en su borde')} -->
<button class="ds-shell__edge" data-shell-toggle aria-controls="sidebar"><ds-icon name="chevron-left" size="16"></ds-icon></button>`;

const jsCode = () => `import { createShell, renderSidebarNav, setActiveNavItem } from 'https://lumeui.dev/v/1.11/lume.js';

const nav = document.getElementById('sidebar-nav');
renderSidebarNav(nav, [
  // ${L('o grupo sem label é a navegação principal (itens maiores, sempre abertos)', 'the group without a label is the main navigation (larger items, always open)', 'el grupo sin label es la navegación principal (elementos más grandes, siempre abiertos)')}
  { id: 'main', items: [
    { label: '${L('Início', 'Home', 'Inicio')}', icon: 'home', href: '#/' },
    { label: '${L('Novidades', 'What’s new', 'Novedades')}', icon: 'megaphone', href: '#/${L('novidades', 'news', 'novedades')}', dot: true },
  ] },
  { id: '${L('vendas', 'sales', 'ventas')}', label: '${L('Vendas', 'Sales', 'Ventas')}', items: [
    { label: '${L('Pedidos', 'Orders', 'Pedidos')}', icon: 'inbox', href: '#/${L('pedidos', 'orders', 'pedidos')}', section: '${L('Hoje', 'Today', 'Hoy')}' },
    { label: '${L('Clientes', 'Customers', 'Clientes')}', icon: 'users', href: '#/${L('clientes', 'customers', 'clientes')}', section: '${L('Cadastro', 'Records', 'Registro')}' },
  ] },
]);

const shell = createShell(document.getElementById('shell'));
setActiveNavItem(nav, location.hash);   // ${L('marca aria-current, abre o grupo e rola até o item', 'sets aria-current, opens the group, and scrolls to the item', 'marca aria-current, abre el grupo y se desplaza hasta el elemento')}
addEventListener('hashchange', () => setActiveNavItem(nav, location.hash));

shell.setCollapsed(true);               // ${L('recolhe (desktop)', 'collapses (desktop)', 'contrae (escritorio)')}
shell.collapsed;                        // → true`;

/* ───────── Página ───────── */

export default function renderSidebar(page) {
  return controlPage(page, {
    lead: L('A navegação na lateral: marca, busca, os lugares de todo dia e grupos que recolhem. No desktop, ela encolhe até ficar só com os ícones; no celular, vira gaveta.', 'Navigation on the side: brand, search, everyday places, and groups that collapse. On desktop it shrinks down to just the icons; on phones it becomes a drawer.', 'La navegación en el lateral: marca, búsqueda, los lugares de todos los días y grupos que se contraen. En escritorio se encoge hasta quedarse solo con los íconos; en el móvil, se vuelve cajón.'),
    stats: [
      [L('aberta', 'open', 'abierta'), `${px('layout.sidebar')} px`],
      [L('recolhida', 'collapsed', 'contraída'), `${px('layout.sidebar-collapsed')} px`],
      [L('gaveta abaixo de', 'drawer below', 'cajón por debajo de'), `${px('breakpoint.lg')} px`],
      [L('atalho', 'shortcut', 'atajo'), `${MOD} B`],
    ],
    sections: [
      {
        id: 'no-app',
        title: L('Ao vivo', 'Live', 'En vivo'),
        desc: L('É o próprio Lume, rodando aqui dentro. Recolha, troque o tamanho da tela e veja a sidebar virar gaveta. Nada do que você fizer aqui muda as suas preferências.', 'It’s Lume itself, running in here. Collapse it, change the screen size, and watch the sidebar become a drawer. Nothing you do here changes your preferences.', 'Es el propio Lume, funcionando aquí dentro. Contráela, cambia el tamaño de pantalla y mira cómo la sidebar se vuelve cajón. Nada de lo que hagas aquí cambia tus preferencias.'),
        html: liveAppHtml('sidebar'),
      },
      {
        id: 'anatomia',
        title: L('Anatomia', 'Anatomy', 'Anatomía'),
        desc: L('A sidebar do próprio site, com menos páginas. Os grupos abrem e fecham, e clicar num item marca a página atual. Passe o mouse ou foque uma parte da lista para destacá-la.', 'This site’s own sidebar, with fewer pages. Groups open and close, and clicking an item marks the current page. Hover or focus a part in the list to highlight it.', 'La sidebar del propio sitio, con menos páginas. Los grupos se abren y se cierran, y hacer clic en un elemento marca la página actual. Pasa el puntero o enfoca una parte de la lista para destacarla.'),
        html: anatomyHtml(specimen(), PARTS()),
      },
      {
        id: 'item',
        title: L('Item', 'Item', 'Elemento'),
        desc: L(`Ícone de 20 px, rótulo e, se for o caso, a contagem ou a bolinha. Os estados podem ser forçados com ${ic('data-state')}.`, `A 20 px icon, a label, and, when it applies, the count or the dot. States can be forced with ${ic('data-state')}.`, `Ícono de 20 px, etiqueta y, si corresponde, el conteo o el punto. Los estados se pueden forzar con ${ic('data-state')}.`),
        html: statesHtml(),
      },
      {
        id: 'recolhida',
        title: L('Aberta e recolhida', 'Open and collapsed', 'Abierta y contraída'),
        desc: L(`No desktop, a sidebar recolhe para ${px('layout.sidebar-collapsed')} px e deixa o conteúdo respirar. Os ícones ficam na mesma coluna nos dois estados, por isso nada pula na animação.`, `On desktop, the sidebar collapses to ${px('layout.sidebar-collapsed')} px and lets the content breathe. The icons stay in the same column in both states, so nothing jumps during the animation.`, `En escritorio, la sidebar se contrae a ${px('layout.sidebar-collapsed')} px y deja respirar el contenido. Los íconos quedan en la misma columna en los dos estados, por eso nada salta en la animación.`),
        html: collapsedHtml(),
      },
      {
        id: 'gaveta',
        title: L('No celular', 'On phones', 'En el móvil'),
        desc: L(`Abaixo de ${px('breakpoint.lg')} px a sidebar sai da tela e vira gaveta, aberta pelo botão de menu da topbar. A navbar usa a mesma gaveta.`, `Below ${px('breakpoint.lg')} px the sidebar leaves the screen and becomes a drawer, opened by the top bar’s menu button. The navbar uses the same drawer.`, `Por debajo de ${px('breakpoint.lg')} px la sidebar sale de la pantalla y se vuelve cajón, abierto con el botón de menú de la barra superior. La navbar usa el mismo cajón.`),
        html: `<div class="pa-mobile">
          ${steps([
            [L('Abrir', 'Open', 'Abrir'), L(`O botão de menu (ou ${MOD} B) desliza a gaveta e escurece o fundo. O foco vai para o item atual.`, `The menu button (or ${MOD} B) slides the drawer in and dims the background. Focus moves to the current item.`, `El botón de menú (o ${MOD} B) desliza el cajón y oscurece el fondo. El foco va al elemento actual.`)],
            [L('Navegar', 'Navigate', 'Navegar'), L(`Escolher uma página fecha a gaveta. A largura é ${px('layout.sidebar')} px, mas nunca encosta na borda: sobram 48 px para tocar fora.`, `Choosing a page closes the drawer. The width is ${px('layout.sidebar')} px, but it never touches the edge: 48 px remain to tap outside.`, `Elegir una página cierra el cajón. El ancho es ${px('layout.sidebar')} px, pero nunca toca el borde: quedan 48 px para tocar fuera.`)],
            [L('Fechar', 'Close', 'Cerrar'), L('Toque no fundo, no X ou aperte Esc. O foco volta para o botão de menu.', 'Tap the background, the X, or press Esc. Focus returns to the menu button.', 'Toca el fondo, la X o pulsa Esc. El foco vuelve al botón de menú.')],
          ])}
          <div class="pa-mobile__aside">
            <p class="pa-mobile__note">${icon('info', { size: 18 })}<span>${L('Na gaveta não existe modo recolhido: ela abre sempre inteira, com os rótulos.', 'The drawer has no collapsed mode: it always opens in full, with the labels.', 'El cajón no tiene modo contraído: siempre se abre entero, con las etiquetas.')}</span></p>
            <button type="button" class="ds-btn ds-btn--secondary" data-try="phone">${icon('arrow-up', { size: 16 })}${L('Ver no celular, ao vivo', 'See it on a phone, live', 'Verlo en el móvil, en vivo')}</button>
          </div>
        </div>`,
      },
      {
        id: 'comportamento',
        title: L('Comportamento', 'Behavior', 'Comportamiento'),
        desc: L('Os detalhes que fazem a sidebar parecer quieta: nada muda sem motivo e tudo volta como estava.', 'The details that make the sidebar feel quiet: nothing changes without a reason and everything comes back as it was.', 'Los detalles que hacen que la sidebar parezca tranquila: nada cambia sin motivo y todo vuelve como estaba.'),
        html: cards([
          ['chevron-down', L('Grupos que lembram', 'Groups that remember', 'Grupos que recuerdan'), L(`Cada grupo recolhe pelo título e o estado fica salvo (${ic('ds-nav-groups')}). Recolhida, a sidebar mostra os ícones de todos.`, `Each group collapses by its title and the state is saved (${ic('ds-nav-groups')}). When collapsed, the sidebar shows every group’s icons.`, `Cada grupo se contrae por el título y el estado queda guardado (${ic('ds-nav-groups')}). Contraída, la sidebar muestra los íconos de todos.`)],
          ['target', L('Item atual à vista', 'The current item in view', 'Elemento actual a la vista'), L('Se a página atual está num grupo fechado, o grupo abre e a lista rola até ela.', 'If the current page is in a closed group, the group opens and the list scrolls to it.', 'Si la página actual está en un grupo cerrado, el grupo se abre y la lista se desplaza hasta ella.')],
          ['megaphone', L('Bolinhas que somem', 'Dots that go away', 'Puntos que desaparecen'), L('A bolinha fica até a pessoa abrir a página. Com o grupo fechado, ela aparece no título do grupo.', 'The dot stays until the person opens the page. With the group closed, it shows on the group title.', 'El punto queda hasta que la persona abre la página. Con el grupo cerrado, aparece en el título del grupo.')],
          ['scrollbar', L('Rolagem só na lista', 'Only the list scrolls', 'Solo la lista se desplaza'), L('Marca, busca e rodapé ficam parados. A lista rola sozinha, com a barra sobreposta e a ponta esmaecida.', 'Brand, search, and footer stay put. The list scrolls on its own, with the overlay scrollbar and a faded end.', 'Marca, búsqueda y pie quedan fijos. La lista se desplaza sola, con la barra superpuesta y el final atenuado.')],
        ]),
      },
      {
        id: 'teclado',
        title: L('Teclado', 'Keyboard', 'Teclado'),
        desc: L('Atalhos de uma tecla só valem fora de campos de texto: ninguém perde o que está digitando.', 'Single-key shortcuts only work outside text fields: no one loses what they’re typing.', 'Los atajos de una sola tecla solo valen fuera de campos de texto: nadie pierde lo que está escribiendo.'),
        html: keyTable([
          [[MOD, 'B'], L('Recolher ou expandir', 'Collapse or expand', 'Contraer o expandir'), L('No celular, abre e fecha a gaveta.', 'On phones, opens and closes the drawer.', 'En el móvil, abre y cierra el cajón.')],
          [['Tab'], L('Andar pelos itens', 'Move through the items', 'Recorrer los elementos'), L('Na ordem da tela: marca, busca, itens e títulos de grupo, rodapé.', 'In screen order: brand, search, items and group titles, footer.', 'En el orden de la pantalla: marca, búsqueda, elementos y títulos de grupo, pie.')],
          [['Enter'], L('Abrir ou fechar o grupo', 'Open or close the group', 'Abrir o cerrar el grupo'), L('No título do grupo. Espaço faz o mesmo.', 'On the group title. Space does the same.', 'En el título del grupo. Espacio hace lo mismo.')],
          [[MOD, 'K'], L('Abrir a busca', 'Open search', 'Abrir la búsqueda'), L('O mesmo que clicar no campo da sidebar. / também abre.', 'The same as clicking the sidebar field. / opens it too.', 'Lo mismo que hacer clic en el campo de la sidebar. / también la abre.')],
          [['Esc'], L('Fechar a gaveta', 'Close the drawer', 'Cerrar el cajón'), L('E devolve o foco ao botão de menu.', 'And returns focus to the menu button.', 'Y devuelve el foco al botón de menú.')],
        ]),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('O que o teclado e o leitor de tela encontram.', 'What the keyboard and screen readers find.', 'Lo que encuentran el teclado y el lector de pantalla.'),
        html: a11yList([
          [L('Regiões com nome', 'Named regions', 'Regiones con nombre'), L(`A sidebar é um ${ic('aside')} “Barra lateral” e a lista, um ${ic('nav')} “Principal”. Dá para pular até elas pelo leitor de tela.`, `The sidebar is an ${ic('aside')} “Sidebar” and the list a ${ic('nav')} “Main”. Screen reader users can jump straight to them.`, `La sidebar es un ${ic('aside')} “Barra lateral” y la lista, un ${ic('nav')} “Principal”. Se puede saltar a ellas con el lector de pantalla.`)],
          [L('Página atual', 'Current page', 'Página actual'), L(`O item atual tem ${ic('aria-current="page"')}: não depende só do destaque visual.`, `The current item has ${ic('aria-current="page"')}: it doesn’t rely on the visual highlight alone.`, `El elemento actual tiene ${ic('aria-current="page"')}: no depende solo del destacado visual.`)],
          [L('Grupos que dizem o estado', 'Groups that state their state', 'Grupos que dicen su estado'), L(`O título é um botão com ${ic('aria-expanded')} e ${ic('aria-controls')}. Os rótulos de seção ficam fora do leitor: o nome do item já basta.`, `The title is a button with ${ic('aria-expanded')} and ${ic('aria-controls')}. Section labels are hidden from screen readers: the item name is enough.`, `El título es un botón con ${ic('aria-expanded')} y ${ic('aria-controls')}. Las etiquetas de sección quedan fuera del lector: el nombre del elemento basta.`), ['Enter']],
          [L('Nomes quando recolhida', 'Names when collapsed', 'Nombres cuando está contraída'), L('Só ícones na tela, mas cada item mantém o rótulo para o leitor e ganha tooltip no hover e no foco.', 'Only icons on screen, but each item keeps its label for screen readers and gets a tooltip on hover and focus.', 'Solo íconos en pantalla, pero cada elemento mantiene la etiqueta para el lector y recibe tooltip con hover y foco.')],
          [L('Recolher com rótulo', 'Collapse with a label', 'Contraer con etiqueta'), L(`A aba e a chama dizem o que fazem (“Recolher menu” ↔ “Expandir menu”) e mostram ${MOD} B no tooltip.`, `The tab and the flame say what they do (“Collapse menu” ↔ “Expand menu”) and show ${MOD} B in the tooltip.`, `La pestaña y la llama dicen lo que hacen (“Contraer menú” ↔ “Expandir menú”) y muestran ${MOD} B en el tooltip.`), [MOD, 'B']],
          [L('Foco na gaveta', 'Focus in the drawer', 'Foco en el cajón'), L('Ao abrir, o foco vai para o item atual; Esc fecha e devolve o foco ao botão de menu.', 'On open, focus goes to the current item; Esc closes and returns focus to the menu button.', 'Al abrir, el foco va al elemento actual; Esc cierra y devuelve el foco al botón de menú.'), ['Esc']],
          [L('Movimento reduzido', 'Reduced motion', 'Movimiento reducido'), L('Com a preferência do sistema ligada, recolher e abrir a gaveta acontecem sem animação.', 'With the system preference on, collapsing and opening the drawer happen without animation.', 'Con la preferencia del sistema activada, contraer y abrir el cajón ocurren sin animación.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Mude um número e a sidebar inteira acompanha.', 'Change one number and the whole sidebar follows.', 'Cambia un número y toda la sidebar lo sigue.'),
        html: tokenTable([
          ['layout.sidebar', L('Largura aberta (e máxima da gaveta)', 'Open width (and drawer max)', 'Ancho abierto (y máximo del cajón)')],
          ['layout.sidebar-collapsed', L('Largura recolhida', 'Collapsed width', 'Ancho contraído')],
          ['layout.frame-gap', L('Distância da borda da janela e do painel principal', 'Distance from the window edge and the main panel', 'Distancia del borde de la ventana y del panel principal')],
          ['radius.xl', L('Cantos do painel', 'Panel corners', 'Esquinas del panel')],
          ['color.bg.sidebar', L('Fundo do painel', 'Panel background', 'Fondo del panel')],
          ['color.border.subtle', L('Contorno do painel e do item atual', 'Outline of the panel and the current item', 'Contorno del panel y del elemento actual')],
          ['size.control.lg', L('Altura dos itens principais', 'Height of main items', 'Altura de los elementos principales')],
          ['size.control.md', L('Altura dos itens e títulos de grupo', 'Height of items and group titles', 'Altura de los elementos y títulos de grupo')],
          ['color.bg.hover', 'Hover'],
          ['color.bg.selected', L('Item atual', 'Current item', 'Elemento actual')],
          ['color.brand.indicator', L('Bolinha de novidade', 'New dot', 'Punto de novedad')],
          ['duration.slow', L('Recolher, expandir e gaveta', 'Collapse, expand, and drawer', 'Contraer, expandir y cajón')],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`O HTML é fixo; a navegação é desenhada a partir de uma lista. A sidebar vive dentro do ${ic('.ds-shell')}: veja o App shell para a moldura inteira.`, `The HTML is fixed; the navigation is drawn from a list. The sidebar lives inside ${ic('.ds-shell')}: see App shell for the whole frame.`, `El HTML es fijo; la navegación se dibuja a partir de una lista. La sidebar vive dentro de ${ic('.ds-shell')}: mira App shell para el marco entero.`),
        html: `<h3 class="doc-subhead">HTML</h3>
          ${codeBlock(htmlCode())}
          <h3 class="doc-subhead">JavaScript</h3>
          ${codeBlock(jsCode())}
          ${apiTable([
            ['renderSidebarNav(el, groups)', L(`Desenha a navegação. Cada item: ${ic('label')}, ${ic('icon')}, ${ic('href')} e, se quiser, ${ic('count')}, ${ic('dot')} e ${ic('section')}.`, `Draws the navigation. Each item: ${ic('label')}, ${ic('icon')}, ${ic('href')} and, optionally, ${ic('count')}, ${ic('dot')} and ${ic('section')}.`, `Dibuja la navegación. Cada elemento: ${ic('label')}, ${ic('icon')}, ${ic('href')} y, si quieres, ${ic('count')}, ${ic('dot')} y ${ic('section')}.`)],
            ['setActiveNavItem(el, href)', L('Marca a página atual, abre o grupo dela e rola até ela.', 'Marks the current page, opens its group, and scrolls to it.', 'Marca la página actual, abre su grupo y se desplaza hasta ella.')],
            ['createShell(el, { persist, initial })', L(`Liga recolher, gaveta e grupos. ${ic('persist: false')} não grava nada; ${ic('initial')} força “expanded” ou “collapsed”.`, `Wires collapse, drawer, and groups. ${ic('persist: false')} saves nothing; ${ic('initial')} forces “expanded” or “collapsed”.`, `Conecta contraer, cajón y grupos. ${ic('persist: false')} no guarda nada; ${ic('initial')} fuerza “expanded” o “collapsed”.`)],
            ['shell.toggle() · setCollapsed() · setMobileOpen()', L('Mudam o estado como os botões e o atalho fazem.', 'Change the state the way the buttons and the shortcut do.', 'Cambian el estado como lo hacen los botones y el atajo.')],
            ['shell.collapsed · mobile · mobileOpen', L('Leem o estado atual.', 'Read the current state.', 'Leen el estado actual.')],
            [L('evento ds:shellchange', 'ds:shellchange event', 'evento ds:shellchange'), L('Disparado no shell a cada mudança, com { sidebar, mobile, mobileOpen }.', 'Fired on the shell at every change, with { sidebar, mobile, mobileOpen }.', 'Disparado en el shell con cada cambio, con { sidebar, mobile, mobileOpen }.')],
          ])}`,
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('A sidebar some quando está bem feita.', 'The sidebar disappears when it’s done well.', 'La sidebar desaparece cuando está bien hecha.'),
        html: usageCards([
          ['do', L('Faça: muitas páginas, uso diário', 'Do: many pages, daily use', 'Haz: muchas páginas, uso diario')],
          ['dont', L('Evite: ações e níveis demais', 'Avoid: too many actions and levels', 'Evita: demasiadas acciones y niveles')],
          ['tip', L('Poucas áreas? Navbar', 'Only a few areas? Navbar', '¿Pocas áreas? Navbar')],
        ].map(([kind, title], i) => [
          kind,
          title,
          [
            L('Apps que a pessoa abre todo dia e em que pula entre dezenas de páginas. Até seis grupos, com nomes de uma ou duas palavras.', 'Apps people open every day and where they jump between dozens of pages. Up to six groups, with one- or two-word names.', 'Apps que la persona abre todos los días y en las que salta entre decenas de páginas. Hasta seis grupos, con nombres de una o dos palabras.'),
            L('A sidebar leva a lugares. Botões de criar ou excluir e um terceiro nível de navegação vão para o conteúdo da página.', 'The sidebar takes you places. Create and delete buttons, or a third navigation level, go in the page content.', 'La sidebar lleva a lugares. Los botones de crear o eliminar y un tercer nivel de navegación van al contenido de la página.'),
            L('Com poucas áreas e conteúdo largo (tabelas, quadros), a navbar devolve a largura toda. Os mesmos grupos servem às duas.', 'With few areas and wide content (tables, boards), the navbar gives back the full width. The same groups work for both.', 'Con pocas áreas y contenido ancho (tablas, tableros), la navbar devuelve todo el ancho. Los mismos grupos sirven a las dos.'),
          ][i],
        ])),
      },
    ],
  });
}

/* ───────── Comportamento ───────── */

export function mount(root) {
  dropJumps(root);
  const cleanups = [mountCodeCopy(root), mountDocNav(root)];

  // o exemplo estático: grupos abrem e fecham (sem gravar nada), e o clique só marca a página atual
  const sidebar = root.querySelector('[data-sh-sidebar]');
  if (sidebar) {
    const onGroup = (e) => {
      const header = e.target.closest('.ds-nav-group__header');
      if (!header) return;
      // não deixa o shell do site gravar o estado deste exemplo como se fosse o da sidebar de verdade
      e.stopPropagation();
      const group = header.closest('.ds-nav-group');
      const open = group.dataset.open !== 'true';
      group.dataset.open = String(open);
      header.setAttribute('aria-expanded', String(open));
    };
    sidebar.addEventListener('click', onGroup);
    cleanups.push(
      () => sidebar.removeEventListener('click', onGroup),
      keepInPlace(sidebar, (href, a) => {
        if (!a.classList.contains('ds-nav-item')) return;
        sidebar.querySelectorAll('.ds-nav-item').forEach((n) => (n === a ? n.setAttribute('aria-current', 'page') : n.removeAttribute('aria-current')));
      }),
      mountAnatomy(root, PARTS()),
    );
  }

  const live = mountLiveApp(root, { layout: 'sidebar', route: ACTIVE });
  cleanups.push(live.off);
  const onTry = (e) => {
    const btn = e.target.closest('[data-try]');
    if (!btn) return;
    const api = live.api();
    if (btn.dataset.try === 'phone') {
      live.setDevice('phone');
      setTimeout(() => live.api()?.shell.setMobileOpen(true), 260);
    } else {
      live.setDevice('desktop');
      setTimeout(() => api?.shell.setCollapsed(true), 120);
    }
    live.scrollIntoView();
  };
  root.addEventListener('click', onTry);
  cleanups.push(() => root.removeEventListener('click', onTry));

  return () => cleanups.forEach((fn) => fn());
}
