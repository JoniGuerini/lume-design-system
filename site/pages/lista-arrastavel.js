import { icon } from '../../ds/icons/icons.js';
import { msg } from '../../ds/js/i18n.js';
import { createSortable } from '../../ds/js/sortable.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/lista-arrastavel.css'];

/* Conteúdo dos exemplos: o próprio Lume */
const FOUNDATIONS = () => [
  ['cores', L('Cores', 'Colors', 'Colores'), L('15 paletas', '15 palettes', '15 paletas')],
  ['tipografia', L('Tipografia', 'Typography', 'Tipografía'), 'Geist'],
  ['icones', L('Ícones', 'Icons', 'Íconos'), L('154 ícones', '154 icons', '154 íconos')],
  ['espacamento', L('Espaçamento', 'Spacing', 'Espaciado'), L('base 8', 'base 8', 'base 8')],
  ['raios', L('Raios', 'Radii', 'Radios'), 'xs–full'],
];

const SERIES = () => [
  ['1', L('Pêssego', 'Peach', 'Durazno')],
  ['2', L('Azul', 'Blue', 'Azul')],
  ['3', L('Rosa', 'Pink', 'Rosa')],
  ['4', L('Âmbar', 'Amber', 'Ámbar')],
  ['5', L('Verde-água', 'Teal', 'Verde agua')],
];

const grip = () => icon('grip-vertical', { size: 16 });
const handle = (state = '') => `<button type="button" class="ds-sortable__handle"${state ? ` data-state="${state}"` : ''}>${grip()}</button>`;

const item = ([id, label, meta], { withHandle = true, attrs = '' } = {}) =>
  `<li class="ds-sortable__item" data-id="${id}"${attrs}>${withHandle ? handle() : ''}<span class="ds-sortable__label">${label}</span>${meta ? `<span class="ds-sortable__meta">${meta}</span>` : ''}</li>`;

const list = (rows, { label, plain = false, withHandle = true, attrs = '' } = {}) =>
  `<ul class="ds-sortable${plain ? ' ds-sortable--plain' : ''}" role="list" aria-label="${label}"${attrs}>${rows.map((r) => item(r, { withHandle })).join('')}</ul>`;

const seriesList = () =>
  `<ul class="ds-sortable sl-series" role="list" aria-orientation="horizontal" aria-label="${L('Ordem das séries do gráfico', 'Chart series order', 'Orden de las series del gráfico')}" data-sortable>
    ${SERIES()
      .map(([n, label]) => `<li class="ds-sortable__item sl-chip" data-id="serie-${n}" data-label="${label}"><span class="sl-dot" style="background: var(--ds-color-chart-series-${n})"></span>${label}</li>`)
      .join('')}
  </ul>`;

const sidebarLabel = () => L('Ordem dos fundamentos na sidebar', 'Order of the foundations in the sidebar', 'Orden de los fundamentos en la sidebar');

export default function renderSortable(page) {
  const rows = FOUNDATIONS();
  return controlPage(page, {
    lead: L('Mudar a ordem de uma lista arrastando, com o mouse, o toque ou o teclado. O item deixa um encaixe vazio onde vai cair, e cada passo é anunciado para o leitor de tela.', 'Change the order of a list by dragging, with the mouse, touch, or keyboard. The item leaves an empty slot where it will land, and each step is announced to screen readers.', 'Cambiar el orden de una lista arrastrando, con el ratón, el toque o el teclado. El elemento deja un hueco vacío donde va a caer, y cada paso se anuncia al lector de pantalla.'),
    stats: [
      [L('formas de arrastar', 'ways to drag', 'formas de arrastrar'), 3],
      [L('direções', 'directions', 'direcciones'), 2],
      [L('atalhos', 'shortcuts', 'atajos'), 7],
      [L('dependências', 'dependencies', 'dependencias'), 0],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L(`Arraste pela alça. No teclado: ${ic('Tab')} até a alça, ${ic('Espaço')} pega, as setas movem e ${ic('Espaço')} solta.`, `Drag by the handle. On the keyboard: ${ic('Tab')} to the handle, ${ic('Space')} picks up, the arrows move it, and ${ic('Space')} drops.`, `Arrastra por el agarre. Con el teclado: ${ic('Tab')} hasta el agarre, ${ic('Espacio')} lo toma, las flechas lo mueven y ${ic('Espacio')} lo suelta.`), html: playgroundMarkup('sortable', { wide: true }) },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('Caixas soltas, linhas dentro de um card ou itens lado a lado.', 'Separate boxes, rows inside a card, or items side by side.', 'Cajas sueltas, filas dentro de una tarjeta o elementos lado a lado.'),
        html: examples(
          [
            example(L('Com alça', 'With handle', 'Con agarre'), 'ds-sortable__handle', L('O padrão. Só a alça arrasta: o resto do item continua clicável e a página rola normalmente no toque.', 'The default. Only the handle drags: the rest of the item stays clickable and the page scrolls normally on touch.', 'El estándar. Solo el agarre arrastra: el resto del elemento sigue clicable y la página se desplaza normalmente con el toque.'), list(rows.slice(0, 4), { label: sidebarLabel(), attrs: ' data-sortable' })),
            example(L('Em linhas', 'As rows', 'En filas'), 'ds-sortable--plain', L('Dentro de um card, sem caixa em cada item: um traço separa as linhas.', 'Inside a card, with no box around each item: a line separates the rows.', 'Dentro de una tarjeta, sin caja en cada elemento: una línea separa las filas.'), `<div class="ds-card sl-card">${list(rows.slice(0, 4), { label: sidebarLabel(), plain: true, attrs: ' data-sortable' })}</div>`),
            example(L('Lado a lado', 'Side by side', 'Lado a lado'), 'aria-orientation="horizontal"', L(`Sem alça, o item inteiro arrasta e recebe o foco. As setas ${ic('←')} ${ic('→')} movem. No toque, segure um instante antes de arrastar.`, `Without a handle, the whole item drags and takes focus. The ${ic('←')} ${ic('→')} arrows move it. On touch, hold for a moment before dragging.`, `Sin agarre, el elemento entero arrastra y recibe el foco. Las flechas ${ic('←')} ${ic('→')} lo mueven. Con el toque, mantén un instante antes de arrastrar.`), seriesList()),
          ],
          2,
        ),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L('Enquanto arrasta, o item vira um encaixe tracejado e uma cópia elevada segue o ponteiro. Pego pelo teclado, ele ganha o contorno da marca.', 'While dragging, the item becomes a dashed slot and a raised copy follows the pointer. Picked up with the keyboard, it gets the brand outline.', 'Mientras se arrastra, el elemento se vuelve un hueco punteado y una copia elevada sigue al puntero. Tomado con el teclado, recibe el contorno de la marca.'),
        html: stateGrid([
          [L('Padrão', 'Default', 'Por defecto'), `<ul class="ds-sortable sl-state" role="list">${item(rows[0])}</ul>`],
          [L('Alça com o mouse', 'Handle hover', 'Agarre con el ratón'), `<ul class="ds-sortable sl-state" role="list"><li class="ds-sortable__item">${handle('hover')}<span class="ds-sortable__label">${rows[0][1]}</span><span class="ds-sortable__meta">${rows[0][2]}</span></li></ul>`],
          [L('Alça com foco', 'Handle focus', 'Agarre con foco'), `<ul class="ds-sortable sl-state" role="list"><li class="ds-sortable__item">${handle('focus')}<span class="ds-sortable__label">${rows[0][1]}</span><span class="ds-sortable__meta">${rows[0][2]}</span></li></ul>`],
          [L('Pego pelo teclado', 'Picked up by keyboard', 'Tomado con el teclado'), `<ul class="ds-sortable sl-state" role="list">${item(rows[0], { attrs: ' data-grabbed' })}</ul>`],
          [L('Encaixe', 'Slot', 'Hueco'), `<ul class="ds-sortable sl-state" role="list">${item(rows[0], { attrs: ' data-ghost' })}</ul>`],
          [L('Arrastando', 'Dragging', 'Arrastrando'), `<ul class="ds-sortable sl-state" role="list"><li class="ds-sortable__item ds-sortable__item--drag sl-drag">${handle()}<span class="ds-sortable__label">${rows[0][1]}</span><span class="ds-sortable__meta">${rows[0][2]}</span></li></ul>`],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`O ${ic('data-id')} de cada item é o que ${ic('toArray()')} devolve e o que você salva.`, `Each item’s ${ic('data-id')} is what ${ic('toArray()')} returns and what you save.`, `El ${ic('data-id')} de cada elemento es lo que ${ic('toArray()')} devuelve y lo que guardas.`),
        html: codeBlock(`<ul class="ds-sortable" role="list" aria-label="${sidebarLabel()}">
  <li class="ds-sortable__item" data-id="cores">
    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>
    <span class="ds-sortable__label">${rows[0][1]}</span>
  </li>
  <li class="ds-sortable__item" data-id="tipografia">
    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>
    <span class="ds-sortable__label">${rows[1][1]}</span>
  </li>
</ul>

<script type="module">
  import { createSortable } from 'https://lumeui.dev/v/1.7/lume.js';

  const sortable = createSortable(document.querySelector('.ds-sortable'), {
    onChange: () => salvar(sortable.toArray()), // ['tipografia', 'cores']
  });
</script>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Arrastar não pode ser o único jeito: tudo o que o mouse faz, o teclado também faz.', 'Dragging can’t be the only way: everything the mouse does, the keyboard does too.', 'Arrastrar no puede ser la única forma: todo lo que hace el ratón, también lo hace el teclado.'),
        html: a11yList([
          [L('Pegar e soltar', 'Pick up and drop', 'Tomar y soltar'), L('A alça é um botão com o nome “Mover …”. Espaço ou Enter pega; de novo, solta. Sair com Tab também solta.', 'The handle is a button named “Move …”. Space or Enter picks up; again, drops. Leaving with Tab also drops.', 'El agarre es un botón con el nombre “Mover …”. Espacio o Enter lo toma; otra vez, lo suelta. Salir con Tab también lo suelta.'), [L('Espaço', 'Space', 'Espacio'), 'Enter']],
          [L('Mover', 'Move', 'Mover'), L('As setas andam uma posição; Home e End vão às pontas. Numa lista lado a lado, as setas são as laterais.', 'Arrow keys move one position; Home and End go to the ends. In a side-by-side list, use the left and right arrows.', 'Las flechas avanzan una posición; Home y End van a los extremos. En una lista lado a lado, son las flechas laterales.'), ['↑', '↓', 'Home', 'End']],
          [L('Desfazer', 'Undo', 'Deshacer'), L('Esc devolve o item para onde estava, também no meio de um arrasto com o mouse.', 'Esc puts the item back where it was, also in the middle of a mouse drag.', 'Esc devuelve el elemento a donde estaba, también en medio de un arrastre con el ratón.'), ['Esc']],
          [L('Anúncios', 'Announcements', 'Anuncios'), L(`Cada passo é dito numa região viva: “${msg('sortable.grabbed', rows[0][1], 1, 5)}”, depois a nova posição, e onde caiu.`, `Each step is spoken in a live region: “${msg('sortable.grabbed', rows[0][1], 1, 5)}”, then the new position, and where it landed.`, `Cada paso se dice en una región viva: “${msg('sortable.grabbed', rows[0][1], 1, 5)}”, luego la nueva posición, y dónde cayó.`)],
          [L('Instruções', 'Instructions', 'Instrucciones'), L(`A alça descreve como usar: “${msg('sortable.help')}”`, `The handle describes how to use it: “${msg('sortable.help')}”`, `El agarre describe cómo usarlo: “${msg('sortable.help')}”`)],
          [L('Movimento reduzido', 'Reduced motion', 'Movimiento reducido'), L('Os vizinhos trocam de lugar sem deslizar e a cópia não inclina.', 'Neighbors swap places without sliding and the copy doesn’t tilt.', 'Los vecinos cambian de lugar sin deslizarse y la copia no se inclina.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Superfície, encaixe e a cópia elevada.', 'Surface, slot, and the raised copy.', 'Superficie, hueco y la copia elevada.'),
        html: tokenTable([
          ['color.bg.surface', L('Fundo do item', 'Item background', 'Fondo del elemento')],
          ['color.border.subtle', L('Contorno do item', 'Item border', 'Contorno del elemento')],
          ['color.bg.muted', L('Fundo do encaixe', 'Slot background', 'Fondo del hueco')],
          ['color.border.strong', L('Contorno tracejado do encaixe', 'Slot dashed border', 'Contorno punteado del hueco')],
          ['color.bg.raised', L('Cópia que segue o ponteiro', 'Copy that follows the pointer', 'Copia que sigue al puntero')],
          ['shadow.lg', L('Elevação da cópia', 'Copy elevation', 'Elevación de la copia')],
          ['color.brand.indicator', L('Item pego pelo teclado', 'Item picked up by keyboard', 'Elemento tomado con el teclado')],
          ['color.fg.subtle', L('Alça', 'Handle', 'Agarre')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando a ordem é da pessoa.', 'When the order belongs to the person.', 'Cuando el orden es de la persona.'),
        html: usageCards([
          ['do', L('Faça: ordem que a pessoa escolhe', 'Do: an order people choose', 'Haz: un orden que la persona elige'), L('Prioridades, a ordem de um menu, as séries de um gráfico. A ordem salva é a que ela deixou.', 'Priorities, the order of a menu, the series of a chart. The saved order is the one they left.', 'Prioridades, el orden de un menú, las series de un gráfico. El orden guardado es el que dejó.')],
          ['dont', L('Evite: ordem que tem regra', 'Avoid: an order with a rule', 'Evita: un orden con regla'), L('Data, nome, valor: isso é ordenar a Tabela. Arrastar não deve brigar com uma ordem automática.', 'Date, name, value: that’s sorting the Table. Dragging shouldn’t fight an automatic order.', 'Fecha, nombre, valor: eso es ordenar la Tabla. Arrastrar no debe pelear con un orden automático.')],
          ['tip', L('Coisas que mudam de grupo', 'Things that change group', 'Cosas que cambian de grupo'), L(`Listas com o mesmo ${ic('group')} trocam itens. Para colunas de cartões, use o Kanban.`, `Lists with the same ${ic('group')} exchange items. For columns of cards, use the Kanban.`, `Listas con el mismo ${ic('group')} intercambian elementos. Para columnas de tarjetas, usa el Kanban.`)],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'sortable',
    controls: [
      { id: 'handle', label: L('Alça', 'Handle', 'Agarre'), value: 'yes', options: [{ value: 'yes', label: L('Sim', 'Yes', 'Sí') }, { value: 'no', label: L('Não', 'No', 'No') }] },
      { id: 'style', label: L('Forma', 'Style', 'Forma'), value: 'boxes', options: [{ value: 'boxes', label: L('Caixas', 'Boxes', 'Cajas') }, { value: 'plain', label: L('Linhas', 'Rows', 'Filas') }] },
    ],
    render: (s) => {
      const ul = list(FOUNDATIONS(), { label: sidebarLabel(), plain: s.style === 'plain', withHandle: s.handle === 'yes', attrs: ' data-play' });
      return `<div class="sl-play">${s.style === 'plain' ? `<div class="ds-card sl-card">${ul}</div>` : ul}<p class="sl-order" data-order></p></div>`;
    },
    mount: (preview) => {
      const out = preview.querySelector('[data-order]');
      const sortable = createSortable(preview.querySelector('[data-play]'), { onChange: () => show() });
      const show = () => (out.innerHTML = `<code>toArray()</code> ${sortable.toArray().join(' · ')}`);
      show();
      return () => sortable.destroy();
    },
    code: (s) => {
      const rows = FOUNDATIONS().slice(0, 3);
      return `<ul class="ds-sortable${s.style === 'plain' ? ' ds-sortable--plain' : ''}" role="list" aria-label="${sidebarLabel()}">
${rows.map(([id, label]) => `  <li class="ds-sortable__item" data-id="${id}">${s.handle === 'yes' ? '\n    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>\n    ' : ''}<span class="ds-sortable__label">${label}</span>${s.handle === 'yes' ? '\n  ' : ''}</li>`).join('\n')}
</ul>

<script type="module">
  import { createSortable } from 'https://lumeui.dev/v/1.7/lume.js';
  createSortable(document.querySelector('.ds-sortable'), { onChange: (e) => console.log(e.id, e.newIndex) });
</script>`;
    },
  });
  const sortables = [...root.querySelectorAll('[data-sortable]')].map((el) => createSortable(el));
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    sortables.forEach((s) => s.destroy());
    unmountCopy();
    unmountNav();
  };
}
