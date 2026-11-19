import { icon } from '../../ds/icons/icons.js';
import { createMenu } from '../../ds/js/menu.js';
import { toast } from '../../ds/js/toast.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const main = () => L('Nova sessão', 'New session', 'Nueva sesión');
const more = () => L('Mais opções', 'More options', 'Más opciones');
const OPTIONS = () => [
  { value: 'recorrente', label: L('Sessão recorrente', 'Recurring session', 'Sesión recurrente'), icon: 'refresh' },
  { value: 'bloqueio', label: L('Bloquear horário', 'Block time', 'Bloquear horario'), icon: 'lock' },
  { type: 'separator' },
  { value: 'importar', label: L('Importar agenda', 'Import calendar', 'Importar agenda'), icon: 'upload' },
];

const split = ({ variant = 'primary', size = 'md', state = '', disabled = false, glyph = 'plus', label = main() } = {}) => {
  const mods = `ds-btn--${variant}${size !== 'md' ? ` ds-btn--${size}` : ''}`;
  const iconSize = size === 'sm' ? 16 : 18;
  return `<div class="ds-split-button">
    <button type="button" class="ds-btn ${mods}"${state ? ` data-state="${state}"` : ''}${disabled ? ' disabled' : ''}>${glyph ? icon(glyph, { size: iconSize }) : ''}${label}</button>
    <button type="button" class="ds-btn ${mods} ds-split-button__menu" aria-label="${more()}" data-split-menu${disabled ? ' disabled' : ''}>${icon('chevron-down', { size: iconSize })}</button>
  </div>`;
};

const codeFor = (variant = 'primary', size = 'md') => {
  const mods = `ds-btn--${variant}${size !== 'md' ? ` ds-btn--${size}` : ''}`;
  return `<div class="ds-split-button">
  <button type="button" class="ds-btn ${mods}" id="nova">
    <ds-icon name="plus"></ds-icon>
    ${main()}
  </button>
  <button type="button" class="ds-btn ${mods} ds-split-button__menu" id="nova-mais" aria-label="${more()}">
    <ds-icon name="chevron-down"></ds-icon>
  </button>
</div>

<script type="module">
  import { createMenu } from 'https://lumeui.dev/v/1.12/lume.js';
  createMenu(document.querySelector('#nova-mais'), {
    mode: 'action',
    label: '${more()}',
    hideLabel: true,
    options: [
${OPTIONS().map((o) => (o.type ? "      { type: 'separator' }," : `      { value: '${o.value}', label: '${o.label}', icon: '${o.icon}' },`)).join('\n')}
    ],
    onChange: (value) => …,
  });
</script>`;
};

export default function renderBotaoDividido(page) {
  return controlPage(page, {
    lead: L('A ação mais comum e, colada nela, a seta com as alternativas. Um clique resolve o caso de sempre; a seta guarda os outros sem ocupar a barra.', 'The most common action and, attached to it, the arrow with the alternatives. One click covers the usual case; the arrow keeps the others without filling the bar.', 'La acción más común y, pegada a ella, la flecha con las alternativas. Un clic resuelve el caso de siempre; la flecha guarda los demás sin ocupar la barra.'),
    stats: [
      [L('partes', 'parts', 'partes'), 2],
      [L('variantes', 'variants', 'variantes'), 4],
      [L('tamanhos', 'sizes', 'tamaños'), 3],
      [L('menu', 'menu', 'menú'), 'createMenu'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('O botão faz a ação principal; a seta abre o menu com ↓ ou clique.', 'The button runs the main action; the arrow opens the menu with ↓ or a click.', 'El botón hace la acción principal; la flecha abre el menú con ↓ o clic.'), html: playgroundMarkup('split-button') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('As duas metades levam a mesma variante e o mesmo tamanho. Nas preenchidas, um fio da cor do fundo separa as duas; nas de contorno, o próprio contorno. Ghost não entra: sem contorno, as duas metades não se leem como uma peça.', 'Both halves take the same variant and size. On filled ones, a thin line in the background color separates them; on outlined ones, the outline itself. Ghost is out: without an outline, the halves don’t read as one piece.', 'Las dos mitades llevan la misma variante y el mismo tamaño. En las rellenas, una línea del color del fondo separa las dos; en las de contorno, el propio contorno. Ghost no entra: sin contorno, las dos mitades no se leen como una pieza.'),
        html: examples([
          example(L('Primário', 'Primary', 'Primario'), 'ds-btn--primary', L('A ação principal da tela, com as variações dela.', 'The screen’s main action, with its variations.', 'La acción principal de la pantalla, con sus variaciones.'), split()),
          example(L('Secundário', 'Secondary', 'Secundario'), 'ds-btn--secondary', L('Numa barra, ao lado de uma primária.', 'In a bar, next to a primary.', 'En una barra, junto a una primaria.'), split({ variant: 'secondary', glyph: 'download', label: L('Exportar', 'Export', 'Exportar') })),
          example(L('Sutil', 'Subtle', 'Sutil'), 'ds-btn--subtle', L('Apoio com um pouco de presença.', 'Support with a bit of presence.', 'Apoyo con un poco de presencia.'), split({ variant: 'subtle', glyph: 'copy', label: L('Duplicar', 'Duplicate', 'Duplicar') })),
          example(L('Perigo', 'Danger', 'Peligro'), 'ds-btn--danger', L('Excluir e as formas de excluir. Sempre com confirmação.', 'Delete and the ways to delete. Always with confirmation.', 'Eliminar y las formas de eliminar. Siempre con confirmación.'), split({ variant: 'danger', glyph: 'trash', label: L('Excluir', 'Delete', 'Eliminar') })),
        ]),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L('Cada metade reage sozinha. Com o menu aberto, a seta gira.', 'Each half reacts on its own. With the menu open, the arrow turns.', 'Cada mitad reacciona sola. Con el menú abierto, la flecha gira.'),
        html: stateGrid([
          [L('Normal', 'Default', 'Normal'), split()],
          ['Hover', split({ state: 'hover' })],
          [L('Foco', 'Focus', 'Foco'), split({ state: 'focus' })],
          [L('Desativado', 'Disabled', 'Desactivado'), split({ disabled: true })],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`Só CSS mais o Menu: a seta é um ${ic('createMenu')} no modo ação, com o nome só para o leitor de tela.`, `Just CSS plus the Menu: the arrow is a ${ic('createMenu')} in action mode, with the name for screen readers only.`, `Solo CSS más el Menú: la flecha es un ${ic('createMenu')} en modo acción, con el nombre solo para el lector de pantalla.`),
        html: codeBlock(`${codeFor()}

// React
<SplitButton
  label="${main()}"
  icon="plus"
  onClick={novaSessao}
  options={opcoes}
  onSelect={(value) => …}
/>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Dois botões de verdade, cada um no Tab.', 'Two real buttons, each in the Tab order.', 'Dos botones de verdad, cada uno en el Tab.'),
        html: a11yList([
          [L('Dois pontos no Tab', 'Two Tab stops', 'Dos puntos en el Tab'), L('O primeiro faz a ação; o segundo abre o menu. Nada fica escondido do teclado.', 'The first runs the action; the second opens the menu. Nothing is hidden from the keyboard.', 'El primero hace la acción; el segundo abre el menú. Nada queda oculto al teclado.'), ['Tab']],
          [L('A seta tem nome', 'The arrow has a name', 'La flecha tiene nombre'), L(`“Mais opções”, com ${ic('aria-haspopup="menu"')} e ${ic('aria-expanded')} que o Menu liga.`, `“More options”, with ${ic('aria-haspopup="menu"')} and ${ic('aria-expanded')} set by the Menu.`, `“Más opciones”, con ${ic('aria-haspopup="menu"')} y ${ic('aria-expanded')} que pone el Menú.`), ['↓', 'Enter']],
          [L('A principal fica fora do menu', 'The main one stays out of the menu', 'La principal queda fuera del menú'), L('Repetir a ação principal no menu faz o leitor de tela ouvir a mesma coisa duas vezes.', 'Repeating the main action in the menu makes screen readers hear the same thing twice.', 'Repetir la acción principal en el menú hace que el lector de pantalla oiga lo mismo dos veces.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Os mesmos do Botão.', 'The same as the Button.', 'Los mismos del Botón.'),
        html: tokenTable([
          ['size.control.md', L('Altura e largura da seta', 'Arrow height and width', 'Alto y ancho de la flecha')],
          ['duration.base', L('Giro da seta', 'Arrow turn', 'Giro de la flecha')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: uma ação e suas variações', 'Do: one action and its variations', 'Haz: una acción y sus variaciones'), L('“Nova sessão” e “Sessão recorrente”: o mesmo verbo, jeitos diferentes.', '“New session” and “Recurring session”: the same verb, different ways.', '“Nueva sesión” y “Sesión recurrente”: el mismo verbo, formas distintas.')],
          ['dont', L('Evite: ações sem relação', 'Avoid: unrelated actions', 'Evita: acciones sin relación'), L('Se o menu junta coisas que não têm a ver com a principal, use um botão de ícone com Menu.', 'If the menu gathers things unrelated to the main one, use an icon button with a Menu.', 'Si el menú junta cosas que no tienen que ver con la principal, usa un botón de ícono con Menú.')],
          ['tip', L('Uma por tela', 'One per screen', 'Uno por pantalla'), L('Como o primário, o botão dividido chama atenção. Mais de um vira ruído.', 'Like the primary, the split button draws attention. More than one becomes noise.', 'Como el primario, el botón dividido llama la atención. Más de uno se vuelve ruido.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const menus = [];
  const wire = (scope) =>
    [...scope.querySelectorAll('[data-split-menu]:not(:disabled)')].map((btn) =>
      createMenu(btn, { mode: 'action', label: more(), hideLabel: true, options: OPTIONS(), onChange: (v) => toast(OPTIONS().find((o) => o.value === v)?.label ?? v, { icon: 'check' }) }),
    );
  const unmountPlayground = mountPlayground(root, {
    id: 'split-button',
    controls: [
      { id: 'variant', label: L('Variante', 'Variant', 'Variante'), value: 'primary', options: [['primary', L('Primário', 'Primary', 'Primario')], ['secondary', L('Secundário', 'Secondary', 'Secundario')], ['subtle', L('Sutil', 'Subtle', 'Sutil')], ['danger', L('Perigo', 'Danger', 'Peligro')]].map(([value, label]) => ({ value, label })) },
      { id: 'size', label: L('Tamanho', 'Size', 'Tamaño'), value: 'md', options: [{ value: 'sm', label: L('Pequeno', 'Small', 'Pequeño') }, { value: 'md', label: L('Médio', 'Medium', 'Mediano') }, { value: 'lg', label: L('Grande', 'Large', 'Grande') }] },
    ],
    render: (s) => `<div class="fc-stage">${split({ variant: s.variant, size: s.size })}</div>`,
    mount: (preview) => {
      const list = wire(preview);
      preview.querySelector('.ds-split-button > .ds-btn:first-child').addEventListener('click', () => toast(main(), { icon: 'check' }));
      return () => list.forEach((m) => m.destroy());
    },
    code: (s) => codeFor(s.variant, s.size),
  });
  menus.push(...wire(root.querySelector('#variantes')));
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    menus.forEach((m) => m.destroy());
    unmountCopy();
    unmountNav();
  };
}
