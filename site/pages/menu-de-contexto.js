import { icon } from '../../ds/icons/icons.js';
import { createContextMenu } from '../../ds/js/context-menu.js';
import { toast } from '../../ds/js/toast.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const FILES = () => [
  [L('Proposta.pdf', 'Proposal.pdf', 'Propuesta.pdf'), '2 MB'],
  [L('Contrato.pdf', 'Contract.pdf', 'Contrato.pdf'), '340 KB'],
  [L('Notas.txt', 'Notes.txt', 'Notas.txt'), '12 KB'],
];

const OPTIONS = (danger = true) => [
  { value: 'open', label: L('Abrir', 'Open', 'Abrir'), icon: 'external-link', shortcut: 'Enter' },
  { value: 'copy', label: L('Copiar link', 'Copy link', 'Copiar enlace'), icon: 'link' },
  { value: 'rename', label: L('Renomear', 'Rename', 'Renombrar'), icon: 'pencil' },
  ...(danger ? [{ type: 'separator' }, { value: 'delete', label: L('Excluir', 'Delete', 'Eliminar'), icon: 'trash', tone: 'danger' }] : []),
];

const list = () => `<ul class="fc-files" role="list">
  ${FILES().map(([name, size]) => `<li class="fc-files__row" tabindex="0" data-file="${name}">${icon('file-text', { size: 18 })}<span class="fc-files__name">${name}</span><span class="fc-files__size">${size}</span></li>`).join('')}
</ul>`;

export default function renderMenuDeContexto(page) {
  return controlPage(page, {
    lead: L('As ações de um item, ali onde a pessoa está: botão direito, tecla de menu ou toque longo. É um atalho, nunca o único caminho.', 'An item’s actions, right where the person is: right-click, menu key, or long press. It’s a shortcut, never the only way.', 'Las acciones de un elemento, justo donde está la persona: clic derecho, tecla de menú o toque largo. Es un atajo, nunca el único camino.'),
    stats: [
      [L('formas de abrir', 'ways to open', 'formas de abrir'), 3],
      [L('papel ARIA', 'ARIA role', 'rol ARIA'), 'menu'],
      [L('toque longo', 'long press', 'toque largo'), '500 ms'],
      [L('superfície', 'surface', 'superficie'), L('a do Menu', 'the Menu’s', 'la del Menú')],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Clique com o botão direito em uma linha. Pelo teclado, dê Tab até ela e use a tecla de menu ou Shift+F10.', 'Right-click a row. By keyboard, tab to it and use the menu key or Shift+F10.', 'Haz clic derecho en una fila. Con el teclado, ve con Tab hasta ella y usa la tecla de menú o Shift+F10.'), html: playgroundMarkup('context-menu') },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`Com ${ic('selector')}, um único menu atende a todas as linhas; ${ic('options')} pode mudar conforme o item.`, `With ${ic('selector')}, one menu serves every row; ${ic('options')} can change by item.`, `Con ${ic('selector')}, un solo menú atiende a todas las filas; ${ic('options')} puede cambiar según el elemento.`),
        html: codeBlock(`import { createContextMenu } from 'https://lumeui.dev/v/0.34/lume.js';

createContextMenu(document.querySelector('#arquivos'), {
  selector: '[data-arquivo]',
  label: '${L('Ações do arquivo', 'File actions', 'Acciones del archivo')}',
  options: [
    { value: 'open', label: '${L('Abrir', 'Open', 'Abrir')}', icon: 'external-link' },
    { type: 'separator' },
    { value: 'delete', label: '${L('Excluir', 'Delete', 'Eliminar')}', icon: 'trash', tone: 'danger' },
  ],
  onSelect: (value, alvo) => agir(value, alvo),
});`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Funciona como o Menu quando está aberto, mas ninguém descobre sozinho: por isso é sempre um atalho.', 'It works like the Menu once open, but nobody discovers it alone: that’s why it’s always a shortcut.', 'Funciona como el Menú cuando está abierto, pero nadie lo descubre solo: por eso siempre es un atajo.'),
        html: a11yList([
          [L('Abrir pelo teclado', 'Open by keyboard', 'Abrir con el teclado'), L('O item precisa receber foco. A tecla de menu ou Shift+F10 abrem junto dele.', 'The item must take focus. The menu key or Shift+F10 open it beside the item.', 'El elemento debe recibir foco. La tecla de menú o Shift+F10 lo abren junto a él.'), ['Shift', 'F10']],
          [L('Andar e escolher', 'Move and choose', 'Moverse y elegir'), L('↑/↓, Home/End e letras andam; Enter escolhe.', '↑/↓, Home/End, and letters move; Enter chooses.', '↑/↓, Home/End y letras se mueven; Enter elige.'), ['↑', '↓', 'Enter']],
          [L('Fechar', 'Close', 'Cerrar'), L('Esc fecha e devolve o foco ao item.', 'Esc closes and returns focus to the item.', 'Esc cierra y devuelve el foco al elemento.'), ['Esc']],
          [L('Outro caminho', 'Another way', 'Otro camino'), L('Ofereça as mesmas ações num botão visível: o botão direito não é óbvio nem existe em toda parte.', 'Offer the same actions in a visible button: right-click isn’t obvious and doesn’t exist everywhere.', 'Ofrece las mismas acciones en un botón visible: el clic derecho no es obvio ni existe en todas partes.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Os mesmos do Menu.', 'The same as the Menu.', 'Los mismos del Menú.'),
        html: tokenTable([
          ['color.bg.raised', L('Fundo', 'Background', 'Fondo')],
          ['color.border.strong', L('Contorno', 'Outline', 'Contorno')],
          ['shadow.xl', L('Sombra', 'Shadow', 'Sombra')],
          ['color.bg.hover', L('Item ativo', 'Active item', 'Elemento activo')],
          ['color.danger.fg', L('Ação de perigo', 'Danger action', 'Acción de peligro')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: atalho em listas', 'Do: a shortcut in lists', 'Haz: atajo en listas'), L('Arquivos, linhas de tabela e cartões, em que a pessoa repete ações.', 'Files, table rows, and cards, where people repeat actions.', 'Archivos, filas de tabla y tarjetas, donde la persona repite acciones.')],
          ['dont', L('Evite: ação escondida', 'Avoid: hidden actions', 'Evita: acciones ocultas'), L('Se a ação só existe no botão direito, boa parte das pessoas nunca vai achá-la.', 'If the action only exists on right-click, many people will never find it.', 'Si la acción solo existe en el clic derecho, buena parte de las personas nunca la encontrará.')],
          ['tip', L('Curto e na ordem de uso', 'Short and in order of use', 'Corto y en orden de uso'), L('As mais comuns em cima; as destrutivas no fim, depois de um separador.', 'The most common on top; destructive ones at the end, after a separator.', 'Las más comunes arriba; las destructivas al final, tras un separador.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'context-menu',
    controls: [{ id: 'danger', label: L('Ação de perigo', 'Danger action', 'Acción de peligro'), value: 'on', options: [{ value: 'on', label: L('Com', 'With', 'Con') }, { value: 'off', label: L('Sem', 'Without', 'Sin') }] }],
    render: () => `<div class="fc-tree">${list()}</div>`,
    mount: (preview, s) => {
      const menu = createContextMenu(preview.querySelector('.fc-files'), {
        selector: '[data-file]',
        label: L('Ações do arquivo', 'File actions', 'Acciones del archivo'),
        options: () => OPTIONS(s.danger === 'on'),
        onSelect: (value, el) => toast(`${OPTIONS().find((o) => o.value === value).label}: ${el.dataset.file}`),
      });
      return () => menu.destroy();
    },
    code: (s) => `<ul id="arquivos" role="list">
  <li data-arquivo tabindex="0">${FILES()[0][0]}</li>
</ul>

<script type="module">
  import { createContextMenu } from 'https://lumeui.dev/v/0.34/lume.js';
  createContextMenu(document.querySelector('#arquivos'), {
    selector: '[data-arquivo]',
    options: [
      { value: 'open', label: '${L('Abrir', 'Open', 'Abrir')}', icon: 'external-link' },${s.danger === 'on' ? `\n      { type: 'separator' },\n      { value: 'delete', label: '${L('Excluir', 'Delete', 'Eliminar')}', icon: 'trash', tone: 'danger' },` : ''}
    ],
    onSelect: (value, alvo) => agir(value, alvo),
  });
</script>`,
  });
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    unmountCopy();
    unmountNav();
  };
}
