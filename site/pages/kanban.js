import { icon } from '../../ds/icons/icons.js';
import { msg } from '../../ds/js/i18n.js';
import { createKanban } from '../../ds/js/sortable.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/kanban.css'];

/* O conteúdo é o roadmap do próprio Lume */
const CARDS = () => ({
  editor: { title: L('Editor de texto rico', 'Rich text editor', 'Editor de texto enriquecido'), text: L('Negrito, listas, links e títulos, sem dependências.', 'Bold, lists, links, and headings, with no dependencies.', 'Negrita, listas, enlaces y títulos, sin dependencias.'), version: '0.38' },
  estavel: { title: L('Versão estável', 'Stable release', 'Versión estable'), text: L('Nomes públicos congelados, com aviso antes de mudar.', 'Public names frozen, with a warning before changes.', 'Nombres públicos congelados, con aviso antes de cambiar.'), version: '1.0' },
  kanban: { title: L('Lista arrastável e kanban', 'Sortable list and kanban', 'Lista ordenable y kanban'), text: L('Mudar a ordem e o lugar das coisas.', 'Change the order and place of things.', 'Cambiar el orden y el lugar de las cosas.'), version: '0.37', tone: 'brand' },
  visualizador: { title: L('Visualizador de imagem', 'Image viewer', 'Visor de imágenes'), text: L('Zoom, arrastar e galeria.', 'Zoom, panning, and gallery.', 'Zoom, arrastre y galería.'), version: '0.36', tone: 'success' },
  banner: { title: L('Banner e notificações', 'Banner and notifications', 'Banner y notificaciones'), text: L('Recados para todo mundo e para cada pessoa.', 'Messages for everyone and for each person.', 'Mensajes para todos y para cada persona.'), version: '0.35', tone: 'success' },
  divisor: { title: L('Divisor, link e progresso', 'Divider, link, and progress', 'Divisor, enlace y progreso'), version: '0.34', tone: 'success' },
});

const COLUMNS = () => [
  { id: 'planejado', title: L('Planejado', 'Planned', 'Planificado'), cards: ['editor', 'estavel'] },
  { id: 'andamento', title: L('Em andamento', 'In progress', 'En curso'), cards: ['kanban'] },
  { id: 'feito', title: L('Feito', 'Done', 'Hecho'), cards: ['visualizador', 'banner', 'divisor'] },
];

const boardLabel = () => L('Roadmap do Lume', 'Lume roadmap', 'Roadmap de Lume');

const card = (id, { full = true, withHandle = false, attrs = '' } = {}) => {
  const c = CARDS()[id];
  return `<li class="ds-sortable__item ds-kanban__card${withHandle ? ' ds-kanban__card--handle' : ''}" data-id="${id}"${attrs}>
    ${withHandle ? `<div class="ds-kanban__card-top"><p class="ds-kanban__card-title">${c.title}</p><button type="button" class="ds-sortable__handle">${icon('grip-vertical', { size: 16 })}</button></div>` : `<p class="ds-kanban__card-title">${c.title}</p>`}
    ${full && c.text ? `<p class="ds-kanban__card-text">${c.text}</p>` : ''}
    ${full ? `<div class="ds-kanban__card-meta"><span class="ds-badge ds-badge--sm${c.tone ? ` ds-badge--${c.tone}` : ''}">${c.version}</span></div>` : ''}
  </li>`;
};

const column = ({ id, title, cards }, opts = {}) => `<section class="ds-kanban__column" data-id="${id}">
  <header class="ds-kanban__header"><h3 class="ds-kanban__title" id="kb-${opts.prefix ?? ''}${id}">${title}</h3><span class="ds-kanban__count"></span></header>
  <ul class="ds-kanban__list" role="list" aria-label="${title}">${cards.map((c) => card(c, opts)).join('')}</ul>
</section>`;

const board = (columns, opts = {}) => `<div class="ds-kanban" aria-label="${boardLabel()}"${opts.attrs ?? ''}>${columns.map((c) => column(c, opts)).join('')}</div>`;

export default function renderKanban(page) {
  const cols = COLUMNS();
  return controlPage(page, {
    lead: L('Colunas de cartões que passam de uma para outra: etapas de um trabalho, do planejado ao feito. É a lista arrastável com várias listas do mesmo grupo, e o número de cada coluna acompanha.', 'Columns of cards that move from one to another: stages of work, from planned to done. It’s the sortable list with several lists in the same group, and each column’s count keeps up.', 'Columnas de tarjetas que pasan de una a otra: etapas de un trabajo, de lo planificado a lo hecho. Es la lista ordenable con varias listas del mismo grupo, y el número de cada columna se actualiza.'),
    stats: [
      [L('colunas', 'columns', 'columnas'), '3–5'],
      [L('largura mínima', 'min width', 'ancho mínimo'), '240 px'],
      [L('atalhos', 'shortcuts', 'atajos'), 9],
      [L('dependências', 'dependencies', 'dependencias'), 0],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L(`Arraste um cartão para outra coluna. No teclado: ${ic('Espaço')} pega, ${ic('←')} ${ic('→')} trocam de coluna, ${ic('↑')} ${ic('↓')} mudam a ordem.`, `Drag a card to another column. On the keyboard: ${ic('Space')} picks up, ${ic('←')} ${ic('→')} change columns, ${ic('↑')} ${ic('↓')} change the order.`, `Arrastra una tarjeta a otra columna. Con el teclado: ${ic('Espacio')} la toma, ${ic('←')} ${ic('→')} cambian de columna, ${ic('↑')} ${ic('↓')} cambian el orden.`), html: playgroundMarkup('kanban', { wide: true }) },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('O cartão inteiro arrasta, ou só a alça quando ele tem links e botões.', 'The whole card drags, or only the handle when it has links and buttons.', 'La tarjeta entera arrastra, o solo el agarre cuando tiene enlaces y botones.'),
        html: examples(
          [
            example(L('Coluna vazia', 'Empty column', 'Columna vacía'), 'data-empty', L('Sem cartões, a coluna mostra onde soltar. O texto vem do Lume, no idioma da página.', 'With no cards, the column shows where to drop. The text comes from Lume, in the page’s language.', 'Sin tarjetas, la columna muestra dónde soltar. El texto viene de Lume, en el idioma de la página.'), board([{ ...cols[1], cards: [] }, { ...cols[2], cards: ['visualizador', 'banner'] }], { full: false, prefix: 'v1-', attrs: ' data-kanban' })),
            example(L('Com alça', 'With handle', 'Con agarre'), 'ds-kanban__card--handle', L(`Com ${ic('handle')}, só a alça arrasta: o resto do cartão fica livre para links e botões.`, `With ${ic('handle')}, only the handle drags: the rest of the card stays free for links and buttons.`, `Con ${ic('handle')}, solo el agarre arrastra: el resto de la tarjeta queda libre para enlaces y botones.`), board([{ ...cols[0] }, { ...cols[1] }], { withHandle: true, full: false, prefix: 'v2-', attrs: ' data-kanban' })),
          ],
          1,
        ),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L('Os mesmos da lista arrastável, no cartão.', 'The same as the sortable list, on the card.', 'Los mismos de la lista ordenable, en la tarjeta.'),
        html: stateGrid([
          [L('Padrão', 'Default', 'Por defecto'), `<ul class="ds-kanban__list kb-state" role="list">${card('visualizador')}</ul>`],
          [L('Com o mouse', 'Hover', 'Con el ratón'), `<ul class="ds-kanban__list kb-state" role="list">${card('visualizador', { attrs: ' data-state="hover"' })}</ul>`],
          [L('Com foco', 'Focus', 'Con foco'), `<ul class="ds-kanban__list kb-state" role="list">${card('visualizador', { attrs: ' data-state="focus" tabindex="0"' })}</ul>`],
          [L('Pego pelo teclado', 'Picked up by keyboard', 'Tomado con el teclado'), `<ul class="ds-kanban__list kb-state" role="list">${card('visualizador', { attrs: ' data-grabbed' })}</ul>`],
          [L('Encaixe', 'Slot', 'Hueco'), `<ul class="ds-kanban__list kb-state" role="list">${card('visualizador', { attrs: ' data-ghost' })}</ul>`],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`O ${ic('data-id')} da coluna e o de cada cartão formam o que ${ic('toObject()')} devolve.`, `The column’s ${ic('data-id')} and each card’s make up what ${ic('toObject()')} returns.`, `El ${ic('data-id')} de la columna y el de cada tarjeta forman lo que ${ic('toObject()')} devuelve.`),
        html: codeBlock(`<div class="ds-kanban" aria-label="${boardLabel()}">
  <section class="ds-kanban__column" data-id="andamento">
    <header class="ds-kanban__header">
      <h3 class="ds-kanban__title">${cols[1].title}</h3>
      <span class="ds-kanban__count"></span>
    </header>
    <ul class="ds-kanban__list" role="list" aria-label="${cols[1].title}">
      <li class="ds-sortable__item ds-kanban__card" data-id="kanban">
        <p class="ds-kanban__card-title">${CARDS().kanban.title}</p>
        <p class="ds-kanban__card-text">${CARDS().kanban.text}</p>
      </li>
    </ul>
  </section>
  <section class="ds-kanban__column" data-id="feito">…</section>
</div>

<script type="module">
  import { createKanban } from 'https://lumeui.dev/v/1.7/lume.js';

  createKanban(document.querySelector('.ds-kanban'), {
    // { andamento: [], feito: ['kanban', …] }
    onChange: (mudanca, colunas) => salvar(colunas),
  });
</script>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Cada coluna é uma lista com nome; o cartão é lido pelo próprio texto.', 'Each column is a named list; the card is read by its own text.', 'Cada columna es una lista con nombre; la tarjeta se lee por su propio texto.'),
        html: a11yList([
          [L('Cartão focável', 'Focusable card', 'Tarjeta enfocable'), L('Sem alça, o cartão recebe o foco e Espaço ou Enter o pega. Com alça, a alça é o botão “Mover …”.', 'Without a handle, the card takes focus and Space or Enter picks it up. With a handle, the handle is the “Move …” button.', 'Sin agarre, la tarjeta recibe el foco y Espacio o Enter la toma. Con agarre, el agarre es el botón “Mover …”.'), [L('Espaço', 'Space', 'Espacio'), 'Enter']],
          [L('Trocar de coluna', 'Change column', 'Cambiar de columna'), L(`As laterais levam o cartão para a coluna vizinha, e o anúncio diz qual: “${msg('sortable.movedTo', CARDS().kanban.title, cols[2].title, 1, 4)}”`, `The side arrows take the card to the next column, and the announcement says which: “${msg('sortable.movedTo', CARDS().kanban.title, cols[2].title, 1, 4)}”`, `Las laterales llevan la tarjeta a la columna vecina, y el anuncio dice cuál: “${msg('sortable.movedTo', CARDS().kanban.title, cols[2].title, 1, 4)}”`), ['←', '→']],
          [L('Mudar a ordem', 'Change the order', 'Cambiar el orden'), L('As setas de cima e de baixo andam dentro da coluna; Home e End vão às pontas.', 'Up and down arrows move within the column; Home and End go to the ends.', 'Las flechas de arriba y abajo se mueven dentro de la columna; Home y End van a los extremos.'), ['↑', '↓', 'Home', 'End']],
          [L('Desfazer', 'Undo', 'Deshacer'), L('Esc devolve o cartão para a coluna e a posição de onde saiu.', 'Esc returns the card to the column and position it came from.', 'Esc devuelve la tarjeta a la columna y la posición de donde salió.'), ['Esc']],
          [L('Rolagem', 'Scrolling', 'Desplazamiento'), L('Com mais colunas que a largura, o quadro rola de lado; arrastando perto da borda, ele rola sozinho.', 'With more columns than fit, the board scrolls sideways; dragging near the edge scrolls it automatically.', 'Con más columnas que el ancho, el tablero se desplaza de lado; arrastrando cerca del borde, se desplaza solo.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('A coluna é afundada; o cartão, a superfície por cima.', 'The column is sunken; the card is the surface on top.', 'La columna está hundida; la tarjeta, la superficie encima.'),
        html: tokenTable([
          ['color.bg.sunken', L('Fundo da coluna', 'Column background', 'Fondo de la columna')],
          ['color.bg.surface', L('Fundo do cartão', 'Card background', 'Fondo de la tarjeta')],
          ['color.border.subtle', L('Contorno do cartão', 'Card border', 'Contorno de la tarjeta')],
          ['color.border.default', L('Cartão com o mouse e coluna vazia', 'Card hover and empty column', 'Tarjeta con el ratón y columna vacía')],
          ['color.fg.muted', L('Texto do cartão e número da coluna', 'Card text and column count', 'Texto de la tarjeta y número de la columna')],
          ['radius.xl', L('Cantos da coluna', 'Column corners', 'Esquinas de la columna')],
          ['radius.lg', L('Cantos do cartão', 'Card corners', 'Esquinas de la tarjeta')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Para etapas, não para categorias.', 'For stages, not categories.', 'Para etapas, no para categorías.'),
        html: usageCards([
          ['do', L('Faça: trabalho que avança', 'Do: work that moves forward', 'Haz: trabajo que avanza'), L('Do planejado ao feito, da triagem à resposta: o cartão muda de coluna quando muda de etapa.', 'From planned to done, from triage to reply: the card changes column when it changes stage.', 'De lo planificado a lo hecho, de la clasificación a la respuesta: la tarjeta cambia de columna cuando cambia de etapa.')],
          ['dont', L('Evite: muitas colunas', 'Avoid: too many columns', 'Evita: demasiadas columnas'), L('De três a cinco cabem na tela. Mais que isso, a pessoa perde o quadro de vista.', 'Three to five fit on screen. More than that, people lose sight of the board.', 'De tres a cinco caben en la pantalla. Más que eso, la persona pierde de vista el tablero.')],
          ['tip', L('Cartão curto', 'Short cards', 'Tarjetas cortas'), L('Título, uma linha e um selo. O detalhe abre ao clicar, num Modal ou numa Gaveta lateral.', 'Title, one line, and a badge. Details open on click, in a Modal or a Drawer.', 'Título, una línea y una insignia. El detalle se abre al hacer clic, en un Modal o un Panel lateral.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'kanban',
    controls: [
      { id: 'cards', label: L('Cartões', 'Cards', 'Tarjetas'), value: 'full', options: [{ value: 'full', label: L('Completos', 'Full', 'Completas') }, { value: 'title', label: L('Só título', 'Title only', 'Solo título') }] },
    ],
    render: (s) => `<div class="kb-play">${board(COLUMNS(), { full: s.cards === 'full', attrs: ' data-play' })}<p class="kb-out" data-out></p></div>`,
    mount: (preview) => {
      const out = preview.querySelector('[data-out]');
      const show = (columns) => (out.innerHTML = `<code>toObject()</code> ${Object.entries(columns).map(([k, v]) => `${k}: [${v.join(', ')}]`).join(' · ')}`);
      const kanban = createKanban(preview.querySelector('[data-play]'), { onChange: (_, columns) => show(columns) });
      show(kanban.toObject());
      return () => kanban.destroy();
    },
    code: () => `<script type="module">
  import { createKanban } from 'https://lumeui.dev/v/1.7/lume.js';
  createKanban(document.querySelector('.ds-kanban'), { onChange: (_, colunas) => console.log(colunas) });
</script>`,
  });
  const boards = [...root.querySelectorAll('[data-kanban]')].map((el) => createKanban(el));
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    boards.forEach((b) => b.destroy());
    unmountCopy();
    unmountNav();
  };
}
