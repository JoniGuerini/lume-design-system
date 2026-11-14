import { icon } from '../../ds/icons/icons.js';
import { createTree } from '../../ds/js/tree.js';
import { toast } from '../../ds/js/toast.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const FILES = (icons = true) => {
  const f = icons ? 'folder' : undefined;
  const d = icons ? 'file-text' : undefined;
  return [
    { id: 'docs', label: L('Documentos', 'Documents', 'Documentos'), icon: f, children: [
      { id: 'contratos', label: L('Contratos', 'Contracts', 'Contratos'), icon: f, children: [
        { id: 'c1', label: 'lume-2026.pdf', icon: d, meta: '2 MB' },
        { id: 'c2', label: 'aditivo.pdf', icon: d, meta: '340 KB' },
      ] },
      { id: 'notas', label: L('Notas.txt', 'Notes.txt', 'Notas.txt'), icon: d, meta: '12 KB' },
    ] },
    { id: 'fotos', label: L('Fotos', 'Photos', 'Fotos'), icon: f, children: [
      { id: 'f1', label: 'capa.png', icon: icons ? 'image' : undefined, meta: '1 MB' },
    ] },
    { id: 'arquivo', label: L('Arquivo morto', 'Archive', 'Archivo'), icon: f, disabled: true },
  ];
};

const ROW = (attrs, selected = false) => `<div class="ds-tree"><ul class="ds-tree__group"><li class="ds-tree__item" aria-selected="${selected}"><div class="ds-tree__row" style="--_level:0" ${attrs}><span class="ds-tree__toggle"></span><span class="ds-tree__icon">${icon('file-text', { size: 18 })}</span><span class="ds-tree__label">${L('Notas.txt', 'Notes.txt', 'Notas.txt')}</span></div></li></ul></div>`;

export default function renderArvore(page) {
  return controlPage(page, {
    lead: L('Mostra níveis aninhados, como pastas ou categorias, sem ocupar a tela toda. Só as partes abertas aparecem.', 'Shows nested levels, like folders or categories, without taking over the screen. Only the open parts appear.', 'Muestra niveles anidados, como carpetas o categorías, sin ocupar toda la pantalla. Solo aparecen las partes abiertas.'),
    stats: [
      [L('níveis', 'levels', 'niveles'), L('sem limite', 'unlimited', 'sin límite')],
      [L('atalhos', 'shortcuts', 'atajos'), 8],
      [L('recuo', 'indent', 'sangría'), '20 px'],
      [L('papel ARIA', 'ARIA role', 'rol ARIA'), 'tree'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Experimente pelo teclado: setas para andar, abrir e fechar, e letras para pular.', 'Try it from the keyboard: arrows to move, open, and close, and letters to jump.', 'Pruébalo con el teclado: flechas para moverse, abrir y cerrar, y letras para saltar.'), html: playgroundMarkup('tree', { wide: true }) },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('Ícones e informações laterais são opcionais.', 'Icons and side information are optional.', 'Los íconos y la información lateral son opcionales.'),
        html: examples([
          example(L('Com ícones', 'With icons', 'Con íconos'), 'icon · meta', L('Para arquivos, com o tamanho ao lado.', 'For files, with the size beside them.', 'Para archivos, con el tamaño al lado.'), `<div class="ds-tree" data-demo="icons" aria-label="${L('Arquivos', 'Files', 'Archivos')}"></div>`),
          example(L('Só texto', 'Text only', 'Solo texto'), 'label', L('Para categorias, com menos ruído.', 'For categories, with less noise.', 'Para categorías, con menos ruido.'), `<div class="ds-tree" data-demo="text" aria-label="${L('Categorias', 'Categories', 'Categorías')}"></div>`),
        ]),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L(`Hover e foco podem ser forçados com ${ic('data-state')} na linha.`, `Hover and focus can be forced with ${ic('data-state')} on the row.`, `Hover y foco se pueden forzar con ${ic('data-state')} en la fila.`),
        html: stateGrid([
          [L('Normal', 'Default', 'Normal'), ROW('')],
          ['Hover', ROW('data-state="hover"')],
          [L('Foco', 'Focus', 'Foco'), ROW('data-state="focus"')],
          [L('Selecionado', 'Selected', 'Seleccionado'), ROW('', true)],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`O ${ic('aria-label')} do ${ic('.ds-tree')} dá nome à árvore para o leitor de tela.`, `The ${ic('aria-label')} on ${ic('.ds-tree')} names the tree for screen readers.`, `El ${ic('aria-label')} de ${ic('.ds-tree')} da nombre al árbol para el lector de pantalla.`),
        html: codeBlock(`import { createTree } from 'https://lumeui.dev/v/0.31/lume.js';

const tree = createTree(document.querySelector('.ds-tree'), {
  items: [
    { id: 'docs', label: '${L('Documentos', 'Documents', 'Documentos')}', icon: 'folder', children: [
      { id: 'notas', label: '${L('Notas.txt', 'Notes.txt', 'Notas.txt')}', icon: 'file-text' },
    ] },
  ],
  expanded: ['docs'],
  onSelect: (item) => abrir(item.id),
});`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Segue o padrão ARIA de árvore: um único ponto no Tab, e as setas fazem o resto.', 'It follows the ARIA tree pattern: one Tab stop, and the arrows do the rest.', 'Sigue el patrón ARIA de árbol: un solo punto en el Tab, y las flechas hacen el resto.'),
        html: a11yList([
          [L('Andar', 'Move', 'Moverse'), L('↑ e ↓ passam pelas linhas visíveis; Home e End vão à primeira e à última.', '↑ and ↓ move through visible rows; Home and End go to the first and last.', '↑ y ↓ pasan por las filas visibles; Home y End van a la primera y a la última.'), ['↑', '↓', 'Home', 'End']],
          [L('Abrir e fechar', 'Open and close', 'Abrir y cerrar'), L('→ abre ou entra na pasta; ← fecha ou volta ao nível de cima.', '→ opens or enters the folder; ← closes or returns to the level above.', '→ abre o entra en la carpeta; ← cierra o vuelve al nivel de arriba.'), ['→', '←']],
          [L('Escolher', 'Choose', 'Elegir'), L('Enter ou Espaço escolhem a linha. Letras pulam para o próximo nome que começa com ela.', 'Enter or Space choose the row. Letters jump to the next name starting with them.', 'Enter o Espacio eligen la fila. Las letras saltan al siguiente nombre que empiece con ellas.'), ['Enter', L('Espaço', 'Space', 'Espacio')]],
          [L('Estado anunciado', 'Announced state', 'Estado anunciado'), L('aria-expanded, aria-selected e aria-level dizem o estado e o nível de cada linha.', 'aria-expanded, aria-selected, and aria-level state each row’s status and level.', 'aria-expanded, aria-selected y aria-level dicen el estado y el nivel de cada fila.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que a árvore consome.', 'Everything the tree consumes.', 'Todo lo que consume el árbol.'),
        html: tokenTable([
          ['color.fg.muted', L('Nome', 'Name', 'Nombre')],
          ['color.fg.subtle', L('Seta, ícone e informação', 'Chevron, icon, and info', 'Flecha, ícono e información')],
          ['color.bg.hover', L('Linha no hover', 'Row on hover', 'Fila en hover')],
          ['color.bg.selected', L('Linha escolhida', 'Chosen row', 'Fila elegida')],
          ['color.border.focus', L('Anel de foco', 'Focus ring', 'Anillo de foco')],
          ['color.fg.disabled', L('Linha desativada', 'Disabled row', 'Fila desactivada')],
          ['radius.sm', L('Cantos da linha', 'Row corners', 'Esquinas de la fila')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: hierarquias reais', 'Do: real hierarchies', 'Haz: jerarquías reales'), L('Pastas, categorias e organogramas, em que o nível tem significado.', 'Folders, categories, and org charts, where the level has meaning.', 'Carpetas, categorías y organigramas, donde el nivel tiene significado.')],
          ['dont', L('Evite: a navegação do site', 'Avoid: site navigation', 'Evita: la navegación del sitio'), L('Para páginas, a sidebar é mais simples. Árvore pede um teclado que nem todos conhecem.', 'For pages, the sidebar is simpler. A tree asks for keyboard use not everyone knows.', 'Para páginas, la sidebar es más simple. El árbol pide un teclado que no todos conocen.')],
          ['tip', L('Abra o caminho', 'Open the path', 'Abre el camino'), L('Comece com o item atual visível, com as pastas dele já abertas.', 'Start with the current item visible, with its folders already open.', 'Empieza con el elemento actual visible, con sus carpetas ya abiertas.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'tree',
    controls: [
      { id: 'icons', label: L('Ícones', 'Icons', 'Íconos'), value: 'on', options: [{ value: 'on', label: L('Com ícones', 'With icons', 'Con íconos') }, { value: 'off', label: L('Só texto', 'Text only', 'Solo texto') }] },
      { id: 'open', label: L('Início', 'Start', 'Inicio'), value: 'open', options: [{ value: 'open', label: L('Primeira pasta aberta', 'First folder open', 'Primera carpeta abierta') }, { value: 'closed', label: L('Tudo fechado', 'All closed', 'Todo cerrado') }] },
    ],
    render: () => `<div class="fc-tree"><div class="ds-tree" data-play aria-label="${L('Arquivos', 'Files', 'Archivos')}"></div></div>`,
    mount: (preview, s) => {
      const tree = createTree(preview.querySelector('[data-play]'), { items: FILES(s.icons === 'on'), expanded: s.open === 'open' ? ['docs', 'contratos'] : [], selected: s.open === 'open' ? 'c1' : null, onSelect: (item) => !item.children && toast(item.label) });
      return () => tree.destroy();
    },
    code: (s) => `<div class="ds-tree" aria-label="${L('Arquivos', 'Files', 'Archivos')}"></div>

<script type="module">
  import { createTree } from 'https://lumeui.dev/v/0.31/lume.js';
  createTree(document.querySelector('.ds-tree'), {
    items: arquivos,${s.open === 'open' ? "\n    expanded: ['docs', 'contratos']," : ''}
    onSelect: (item) => abrir(item.id),
  });
</script>`,
  });
  const CATEGORIES = () => [
    { id: 'roupas', label: L('Roupas', 'Clothing', 'Ropa'), children: [{ id: 'camisas', label: L('Camisas', 'Shirts', 'Camisas') }, { id: 'calcas', label: L('Calças', 'Pants', 'Pantalones') }] },
    { id: 'casa', label: L('Casa', 'Home', 'Hogar'), children: [{ id: 'cozinha', label: L('Cozinha', 'Kitchen', 'Cocina') }] },
    { id: 'livros', label: L('Livros', 'Books', 'Libros') },
  ];
  const trees = [
    createTree(root.querySelector('[data-demo="icons"]'), { items: FILES(), expanded: ['docs'], selected: 'notas' }),
    createTree(root.querySelector('[data-demo="text"]'), { items: CATEGORIES(), expanded: ['roupas'], selected: 'camisas' }),
  ];
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    trees.forEach((t) => t.destroy());
    unmountCopy();
    unmountNav();
  };
}
