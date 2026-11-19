import { icon } from '../../ds/icons/icons.js';
import { createSegmented } from '../../ds/js/segmented.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const VIEWS = () => [['mes', L('Mês', 'Month', 'Mes')], ['semana', L('Semana', 'Week', 'Semana')], ['dia', L('Dia', 'Day', 'Día')]];
const LAYOUTS = () => [['lista', 'list', L('Lista', 'List', 'Lista')], ['grade', 'grid', L('Grade', 'Grid', 'Cuadrícula')]];

const textGroup = (label, checked = 'mes', disabled = false, extra = '', mods = '') => `<div class="ds-segmented fc-segmented${mods}" role="radiogroup" aria-label="${label}" data-demo${extra}>
  ${VIEWS().map(([v, t]) => `<button type="button" class="ds-segmented__item" role="radio" data-value="${v}" aria-checked="${v === checked}"${disabled ? ' disabled' : ''}>${t}</button>`).join('')}
</div>`;
const iconGroup = (label) => `<div class="ds-segmented" role="radiogroup" aria-label="${label}" data-demo>
  ${LAYOUTS().map(([v, ic, t], i) => `<button type="button" class="ds-segmented__item" role="radio" data-value="${v}" aria-checked="${i === 0}" aria-label="${t}" data-ds-tooltip="${t}">${icon(ic, { size: 16 })}</button>`).join('')}
</div>`;

const withSize = (html, size) => (size === 'md' ? html : html.replace('class="ds-segmented', `class="ds-segmented ds-segmented--${size}`));

export default function renderControleSegmentado(page) {
  const label = L('Visão', 'View', 'Vista');
  return controlPage(page, {
    lead: L('Poucas opções lado a lado, sempre visíveis, com uma escolhida. A troca vale na hora, como nos seletores de layout e de visão do calendário.', 'A few options side by side, always visible, with one selected. The change applies right away, as in the layout and calendar view selectors.', 'Pocas opciones lado a lado, siempre visibles, con una elegida. El cambio vale al instante, como en los selectores de diseño y de vista del calendario.'),
    stats: [
      [L('altura', 'height', 'altura'), '36 px'],
      [L('opções', 'options', 'opciones'), '2 – 4'],
      [L('tamanhos', 'sizes', 'tamaños'), 3],
      [L('papel ARIA', 'ARIA role', 'rol ARIA'), 'radiogroup'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Clique ou use as setas do teclado: a escolha vale na hora.', 'Click or use the arrow keys: the choice applies right away.', 'Haz clic o usa las flechas del teclado: la elección vale al instante.'), html: playgroundMarkup('segmented') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('Com texto, ou só com ícones quando o sentido é conhecido. Ícone sozinho precisa de nome e tooltip.', 'With text, or icons only when the meaning is familiar. An icon alone needs a name and a tooltip.', 'Con texto, o solo con íconos cuando el sentido es conocido. Un ícono solo necesita nombre y tooltip.'),
        html: examples([
          example(L('Com texto', 'With text', 'Con texto'), 'ds-segmented', L('O mais claro, para até quatro opções curtas.', 'The clearest, for up to four short options.', 'Lo más claro, para hasta cuatro opciones cortas.'), textGroup(label)),
          example(L('Com ícones', 'With icons', 'Con íconos'), 'aria-label', L('Compacto, com o nome no tooltip e para o leitor de tela.', 'Compact, with the name in the tooltip and for screen readers.', 'Compacto, con el nombre en el tooltip y para el lector de pantalla.'), iconGroup(L('Exibição', 'Display', 'Vista'))),
        ]),
      },
      {
        id: 'tamanhos',
        title: L('Tamanhos e largura', 'Sizes and width', 'Tamaños y ancho'),
        desc: L('Médio é o padrão, na altura do Chip e das abas. O pequeno serve a barras densas; o grande alinha com campos e botões médios num formulário. Em painéis estreitos, a largura toda divide o espaço por igual.', 'Medium is the default, at the height of Chips and tabs. Small fits dense bars; large lines up with medium fields and buttons in a form. In narrow panels, full width splits the space evenly.', 'Mediano es el predeterminado, a la altura del Chip y las pestañas. El pequeño sirve a barras densas; el grande se alinea con campos y botones medianos en un formulario. En paneles estrechos, el ancho completo divide el espacio por igual.'),
        html: examples([
          example(L('Pequeno', 'Small', 'Pequeño'), 'ds-segmented--sm', '32 px', textGroup(label, 'mes', false, '', ' ds-segmented--sm')),
          example(L('Médio', 'Medium', 'Mediano'), 'ds-segmented', L('36 px, o padrão', '36 px, the default', '36 px, el predeterminado'), textGroup(label)),
          example(L('Grande', 'Large', 'Grande'), 'ds-segmented--lg', L('40 px, ao lado de campos', '40 px, next to fields', '40 px, junto a campos'), textGroup(label, 'mes', false, '', ' ds-segmented--lg')),
          example(L('Largura toda', 'Full width', 'Ancho completo'), 'ds-segmented--fill', L('As opções dividem a largura do contêiner.', 'The options split the container’s width.', 'Las opciones dividen el ancho del contenedor.'), `<div style="width:100%;max-width:320px">${textGroup(label, 'semana', false, '', ' ds-segmented--fill')}</div>`),
        ]),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L('A opção escolhida sobe com o fundo dos campos; as outras ficam apagadas.', 'The chosen option rises with the field background; the others stay muted.', 'La opción elegida sube con el fondo de los campos; las otras quedan atenuadas.'),
        html: stateGrid([
          [L('Normal', 'Default', 'Normal'), textGroup(label)],
          [L('Outra opção', 'Another option', 'Otra opción'), textGroup(label, 'semana')],
          [L('Desativado', 'Disabled', 'Desactivado'), `<div style="opacity:var(--ds-opacity-disabled)">${textGroup(label, 'mes', true)}</div>`],
        ]),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Funciona como um grupo de botões de rádio.', 'It works like a radio button group.', 'Funciona como un grupo de botones de radio.'),
        html: a11yList([
          [L('Um ponto no Tab', 'One Tab stop', 'Un punto en el Tab'), L('O Tab entra na opção escolhida e sai do grupo.', 'Tab enters the chosen option and leaves the group.', 'El Tab entra en la opción elegida y sale del grupo.'), ['Tab']],
          [L('Setas trocam', 'Arrows change', 'Las flechas cambian'), L('As setas passam de uma opção a outra, dando a volta, e a escolha vale na hora.', 'Arrows move between options, wrapping around, and the choice applies right away.', 'Las flechas pasan de una opción a otra, dando la vuelta, y la elección vale al instante.'), ['←', '→']],
          [L('Nome do grupo', 'Group name', 'Nombre del grupo'), L('O aria-label do grupo diz o que está sendo escolhido.', 'The group’s aria-label says what’s being chosen.', 'El aria-label del grupo dice qué se está eligiendo.')],
          [L('Ícone com nome', 'Icon with a name', 'Ícono con nombre'), L('Sem texto, cada opção precisa de aria-label.', 'With no text, each option needs an aria-label.', 'Sin texto, cada opción necesita aria-label.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que o controle consome.', 'Everything the control consumes.', 'Todo lo que consume el control.'),
        html: tokenTable([
          ['color.bg.sunken', L('Trilho', 'Track', 'Riel')],
          ['color.bg.field', L('Opção escolhida', 'Chosen option', 'Opción elegida')],
          ['color.border.default', L('Contornos', 'Outlines', 'Contornos')],
          ['color.fg.default', L('Texto escolhido', 'Chosen text', 'Texto elegido')],
          ['color.fg.muted', L('Outras opções', 'Other options', 'Otras opciones')],
          ['radius.full', L('Cantos', 'Corners', 'Esquinas')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: de 2 a 4 opções', 'Do: 2 to 4 options', 'Haz: de 2 a 4 opciones'), L('Trocar a visão do mesmo conteúdo: mês ou semana, lista ou grade.', 'Switching the view of the same content: month or week, list or grid.', 'Cambiar la vista del mismo contenido: mes o semana, lista o cuadrícula.')],
          ['dont', L('Evite: muitas opções', 'Avoid: many options', 'Evita: muchas opciones'), L('Com cinco ou mais, ou textos longos, use a Seleção.', 'With five or more, or long text, use the Select.', 'Con cinco o más, o textos largos, usa el Selector.')],
          ['tip', L('Abas ou segmentado?', 'Tabs or segmented?', '¿Pestañas o segmentado?'), L('Abas trocam de conteúdo; o segmentado troca a forma de ver o mesmo conteúdo.', 'Tabs change the content; the segmented control changes how you see the same content.', 'Las pestañas cambian el contenido; el segmentado cambia la forma de ver el mismo contenido.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const label = L('Visão', 'View', 'Vista');
  const unmountPlayground = mountPlayground(root, {
    id: 'segmented',
    controls: [
      { id: 'kind', label: L('Tipo', 'Type', 'Tipo'), value: 'text', options: [{ value: 'text', label: L('Com texto', 'With text', 'Con texto') }, { value: 'icons', label: L('Com ícones', 'With icons', 'Con íconos') }] },
      { id: 'size', label: L('Tamanho', 'Size', 'Tamaño'), value: 'md', options: [{ value: 'sm', label: L('Pequeno', 'Small', 'Pequeño') }, { value: 'md', label: L('Médio', 'Medium', 'Mediano') }, { value: 'lg', label: L('Grande', 'Large', 'Grande') }] },
    ],
    render: (s) => withSize(s.kind === 'text' ? textGroup(label) : iconGroup(label), s.size),
    mount: (preview) => {
      const g = createSegmented(preview.querySelector('.ds-segmented'));
      return () => g.destroy();
    },
    code: (s) => `<div class="ds-segmented${s.size === 'md' ? '' : ` ds-segmented--${s.size}`}" role="radiogroup" aria-label="${label}">
${(s.kind === 'text' ? VIEWS().map(([v, t], i) => `  <button type="button" class="ds-segmented__item" role="radio" data-value="${v}" aria-checked="${i === 0}">${t}</button>`) : LAYOUTS().map(([v, ic, t], i) => `  <button type="button" class="ds-segmented__item" role="radio" data-value="${v}" aria-checked="${i === 0}" aria-label="${t}"><ds-icon name="${ic}" size="16"></ds-icon></button>`)).join('\n')}
</div>

<script type="module">
  import { createSegmented } from 'https://lumeui.dev/v/1.14/lume.js';
  createSegmented(document.querySelector('.ds-segmented'), {
    onChange: (value) => trocar(value),
  });
</script>`,
  });
  const groups = [...root.querySelectorAll('#variantes [data-demo], #tamanhos [data-demo]')].map((el) => createSegmented(el));
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    groups.forEach((g) => g.destroy());
    unmountCopy();
    unmountNav();
  };
}
