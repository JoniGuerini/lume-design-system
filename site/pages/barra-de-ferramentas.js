import { icon } from '../../ds/icons/icons.js';
import { createToolbar } from '../../ds/js/toolbar.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList, escapeHtml } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/barra-de-ferramentas.css'];

const B = {
  bold: () => L('Negrito', 'Bold', 'Negrita'),
  italic: () => L('Itálico', 'Italic', 'Cursiva'),
  underline: () => L('Sublinhado', 'Underline', 'Subrayado'),
  strikethrough: () => L('Tachado', 'Strikethrough', 'Tachado'),
  'align-left': () => L('Alinhar à esquerda', 'Align left', 'Alinear a la izquierda'),
  'align-center': () => L('Centralizar', 'Center', 'Centrar'),
  'align-right': () => L('Alinhar à direita', 'Align right', 'Alinear a la derecha'),
  list: () => L('Lista', 'List', 'Lista'),
  'list-ordered': () => L('Lista numerada', 'Numbered list', 'Lista numerada'),
  undo: () => L('Desfazer', 'Undo', 'Deshacer'),
  redo: () => L('Refazer', 'Redo', 'Rehacer'),
  copy: () => L('Copiar', 'Copy', 'Copiar'),
  download: () => L('Baixar', 'Download', 'Descargar'),
  link: () => L('Copiar link', 'Copy link', 'Copiar enlace'),
  'more-horizontal': () => L('Mais ações', 'More actions', 'Más acciones'),
};

/** Um botão da barra. pressed: undefined (ação), false ou true (liga e desliga). */
const btn = (name, { pressed, state = '', disabled = false, tip = true } = {}) =>
  `<button type="button" class="ds-icon-btn"${pressed === undefined ? '' : ` aria-pressed="${pressed}"`} aria-label="${B[name]()}"${tip ? ` data-ds-tooltip="${B[name]()}"` : ''} data-value="${name}"${state ? ` data-state="${state}"` : ''}${disabled ? ' disabled' : ''}>${icon(name, { size: 20 })}</button>`;

const group = (items, exclusive = false) => `<div class="ds-toolbar__group"${exclusive ? ' data-exclusive' : ''}>${items.join('')}</div>`;
const sep = '<div class="ds-toolbar__separator"></div>';

const formatting = ({ cls = '', attrs = '', vertical = false } = {}) =>
  `<div class="ds-toolbar${cls}"${vertical ? ' aria-orientation="vertical"' : ''} aria-label="${L('Formatação', 'Formatting', 'Formato')}" ${attrs}>
  ${group([btn('bold', { pressed: false }), btn('italic', { pressed: false }), btn('underline', { pressed: false }), btn('strikethrough', { pressed: false })])}
  ${sep}
  ${group([btn('align-left', { pressed: true }), btn('align-center', { pressed: false }), btn('align-right', { pressed: false })], true)}
  ${vertical ? '' : `${sep}${group([btn('list', { pressed: false }), btn('list-ordered', { pressed: false })])}${sep}${group([btn('undo'), btn('redo', { disabled: true })])}`}
</div>`;

const actions = (attrs = '') =>
  `<div class="ds-toolbar ds-toolbar--plain" aria-label="${L('Ações do código', 'Code actions', 'Acciones del código')}" ${attrs}>${btn('copy')}${btn('download')}${btn('link')}${sep}${btn('more-horizontal')}</div>`;

const SAMPLE = () => L('O Lume é um design system em HTML, CSS e JavaScript nativos, sem dependências.', 'Lume is a design system in native HTML, CSS, and JavaScript, with no dependencies.', 'Lume es un design system en HTML, CSS y JavaScript nativos, sin dependencias.');

const stateBar = (state, pressed) => `<div class="ds-toolbar" aria-label="${L('Exemplo', 'Example', 'Ejemplo')}">${group([btn('bold', { pressed: pressed ?? false, state, tip: false }), btn('italic', { pressed: false, tip: false }), btn('underline', { pressed: false, tip: false })])}</div>`;

const codeFor = ({ plain = false, vertical = false } = {}) => `<div class="ds-toolbar${plain ? ' ds-toolbar--plain' : ''}"${vertical ? ' aria-orientation="vertical"' : ''} aria-label="${L('Formatação', 'Formatting', 'Formato')}">
  <div class="ds-toolbar__group">
    <button type="button" class="ds-icon-btn" aria-label="${B.bold()}" aria-pressed="false">…</button>
    <button type="button" class="ds-icon-btn" aria-label="${B.italic()}" aria-pressed="false">…</button>
  </div>
  <div class="ds-toolbar__separator"></div>
  <div class="ds-toolbar__group" data-exclusive>
    <button type="button" class="ds-icon-btn" aria-label="${B['align-left']()}" aria-pressed="true">…</button>
    <button type="button" class="ds-icon-btn" aria-label="${B['align-center']()}" aria-pressed="false">…</button>
  </div>
</div>

<script type="module">
  import { createToolbar } from 'https://lumeui.dev/v/1.0/lume.js';
  createToolbar(document.querySelector('.ds-toolbar'), {
    onToggle: (button, pressed) => console.log(button.ariaLabel, pressed),
  });
</script>`;

export default function renderToolbar(page) {
  return controlPage(page, {
    lead: L('Agrupa botões de ícone de uma mesma área, como os de formatação de um editor. A barra inteira é uma parada só do Tab; as setas andam entre os botões.', 'Groups icon buttons for the same area, like an editor’s formatting buttons. The whole bar is a single Tab stop; the arrow keys move between buttons.', 'Agrupa botones de ícono de una misma área, como los de formato de un editor. Toda la barra es una sola parada del Tab; las flechas se mueven entre los botones.'),
    stats: [
      [L('paradas do Tab', 'Tab stops', 'paradas del Tab'), 1],
      [L('teclas', 'keys', 'teclas'), 4],
      [L('altura', 'height', 'altura'), '36 px'],
      [L('papel ARIA', 'ARIA role', 'rol ARIA'), 'toolbar'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Os botões mudam o texto de verdade. No alinhamento, só um fica apertado.', 'The buttons really change the text. In alignment, only one stays pressed.', 'Los botones cambian el texto de verdad. En la alineación, solo uno queda presionado.'), html: playgroundMarkup('toolbar', { wide: true }) },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L(`Com contorno, para a barra que fica sobre o conteúdo; ${ic('ds-toolbar--plain')} quando ela já está dentro de uma superfície, como o cabeçalho de um card.`, `With an outline, for a bar that sits over content; ${ic('ds-toolbar--plain')} when it is already inside a surface, like a card header.`, `Con contorno, para la barra que queda sobre el contenido; ${ic('ds-toolbar--plain')} cuando ya está dentro de una superficie, como el encabezado de una tarjeta.`),
        html: `<div class="tb-variants">${examples(
          [
            example(L('Formatação', 'Formatting', 'Formato'), 'ds-toolbar', L('Grupos separados por linha: estilo, alinhamento (um por vez), listas e desfazer.', 'Groups separated by a line: style, alignment (one at a time), lists, and undo.', 'Grupos separados por una línea: estilo, alineación (uno a la vez), listas y deshacer.'), formatting({ attrs: 'data-demo="formatting"' })),
            example(L('Vertical', 'Vertical', 'Vertical'), 'aria-orientation="vertical"', L('Na lateral de uma área; as setas para cima e para baixo andam.', 'On the side of an area; the up and down arrows move.', 'Al costado de un área; las flechas arriba y abajo se mueven.'), formatting({ vertical: true, attrs: 'data-demo="vertical"' })),
            example(L('Sem contorno', 'Plain', 'Sin contorno'), 'ds-toolbar--plain', L('Ações de um bloco de código, no canto dele.', 'Actions of a code block, in its corner.', 'Acciones de un bloque de código, en su esquina.'), `<div class="tb-card"><span class="tb-card__title">lume.css</span>${actions('data-demo="plain"')}</div>`),
          ],
          1,
        )}</div>`,
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L('O botão apertado ganha o fundo de selecionado, que continua com o mouse em cima. Desativado fica de fora das setas.', 'A pressed button gets the selected background, which stays on hover. Disabled buttons are skipped by the arrow keys.', 'El botón presionado recibe el fondo de seleccionado, que se mantiene con el ratón encima. Los desactivados quedan fuera de las flechas.'),
        html: stateGrid([
          [L('Padrão', 'Default', 'Predeterminado'), stateBar('')],
          [L('Com o mouse', 'Hover', 'Con el ratón'), stateBar('hover')],
          [L('Com foco', 'Focus', 'Con foco'), stateBar('focus')],
          [L('Apertado', 'Pressed', 'Presionado'), stateBar('', true)],
          [L('Desativado', 'Disabled', 'Desactivado'), `<div class="ds-toolbar" aria-label="${L('Exemplo', 'Example', 'Ejemplo')}">${group([btn('undo', { tip: false }), btn('redo', { disabled: true, tip: false })])}</div>`],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`Os botões são seus; a barra cuida do Tab, das setas e do ${ic('aria-pressed')}.`, `The buttons are yours; the bar handles Tab, the arrow keys, and ${ic('aria-pressed')}.`, `Los botones son tuyos; la barra se encarga del Tab, las flechas y el ${ic('aria-pressed')}.`),
        html: codeBlock(codeFor()),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Segue o padrão de toolbar da ARIA. Dê um nome à barra com aria-label.', 'It follows the ARIA toolbar pattern. Give the bar a name with aria-label.', 'Sigue el patrón de toolbar de ARIA. Dale un nombre a la barra con aria-label.'),
        html: a11yList([
          [L('Uma parada do Tab', 'One Tab stop', 'Una parada del Tab'), L('Tab entra na barra no último botão usado e sai dela no próximo Tab: quem navega pelo teclado não passa por dez botões.', 'Tab enters the bar on the last button used and leaves on the next Tab: keyboard users don’t go through ten buttons.', 'Tab entra en la barra en el último botón usado y sale con el siguiente Tab: quien navega con teclado no pasa por diez botones.')],
          [L('Teclado', 'Keyboard', 'Teclado'), L('As setas andam e dão a volta; Home e End vão às pontas. Na vertical, as setas para cima e para baixo.', 'The arrow keys move and wrap around; Home and End go to the ends. Vertically, the up and down arrows.', 'Las flechas se mueven y dan la vuelta; Home y End van a los extremos. En vertical, las flechas arriba y abajo.'), ['←', '→', 'Home', 'End']],
          [L('Liga e desliga', 'Toggle', 'Activar y desactivar'), L('Botão com aria-pressed diz “apertado” ou não; num grupo com data-exclusive, só um fica apertado.', 'A button with aria-pressed says “pressed” or not; in a group with data-exclusive, only one stays pressed.', 'Un botón con aria-pressed dice “presionado” o no; en un grupo con data-exclusive, solo uno queda presionado.')],
          [L('Nome de cada botão', 'Each button’s name', 'Nombre de cada botón'), L('Botão só de ícone precisa de aria-label; a dica (data-ds-tooltip) mostra o mesmo nome para quem usa o mouse.', 'An icon-only button needs aria-label; the tooltip (data-ds-tooltip) shows the same name to mouse users.', 'Un botón solo de ícono necesita aria-label; la pista (data-ds-tooltip) muestra el mismo nombre a quien usa el ratón.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que a barra consome, além do botão de ícone.', 'Everything the bar consumes, besides the icon button.', 'Todo lo que consume la barra, además del botón de ícono.'),
        html: tokenTable([
          ['color.bg.surface', L('Fundo da barra', 'Bar background', 'Fondo de la barra')],
          ['color.border.control', L('Contorno da barra', 'Bar outline', 'Contorno de la barra')],
          ['color.border.default', L('Separador', 'Separator', 'Separador')],
          ['color.bg.selected', L('Botão apertado', 'Pressed button', 'Botón presionado')],
          ['space.050', L('Respiro da barra e do separador', 'Bar and separator padding', 'Respiro de la barra y del separador')],
          ['radius.md', L('Cantos da barra', 'Bar corners', 'Esquinas de la barra')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: agrupe pelo que fazem', 'Do: group by what they do', 'Haz: agrupa por lo que hacen'), L('Estilo com estilo, alinhamento com alinhamento. O separador mostra onde um grupo acaba.', 'Style with style, alignment with alignment. The separator shows where a group ends.', 'Estilo con estilo, alineación con alineación. El separador muestra dónde termina un grupo.')],
          ['dont', L('Evite: dois ou três botões soltos', 'Avoid: two or three loose buttons', 'Evita: dos o tres botones sueltos'), L('Sem grupo nem teclado próprio, botões de ícone lado a lado bastam.', 'With no group or keyboard of its own, icon buttons side by side are enough.', 'Sin grupo ni teclado propio, botones de ícono lado a lado bastan.')],
          ['tip', L('Dica em todo ícone', 'A tooltip on every icon', 'Pista en cada ícono'), L('Ícone de formatação parece óbvio até alguém não reconhecer. A dica custa pouco.', 'Formatting icons seem obvious until someone doesn’t recognize one. A tooltip costs little.', 'Los íconos de formato parecen obvios hasta que alguien no reconoce uno. La pista cuesta poco.')],
        ]),
      },
    ],
  });
}

const ALIGN = { 'align-left': 'start', 'align-center': 'center', 'align-right': 'end' };

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'toolbar',
    controls: [
      { id: 'look', label: L('Contorno', 'Outline', 'Contorno'), value: 'on', options: [{ value: 'on', label: L('Sim', 'Yes', 'Sí') }, { value: 'off', label: L('Não', 'No', 'No') }] },
      { id: 'orientation', label: L('Direção', 'Direction', 'Dirección'), value: 'horizontal', options: [{ value: 'horizontal', label: L('Horizontal', 'Horizontal', 'Horizontal') }, { value: 'vertical', label: L('Vertical', 'Vertical', 'Vertical') }] },
    ],
    render: (s) => `<div class="tb-play${s.orientation === 'vertical' ? ' tb-play--vertical' : ''}">${formatting({ cls: s.look === 'off' ? ' ds-toolbar--plain' : '', vertical: s.orientation === 'vertical', attrs: 'data-play' })}<p class="tb-sample" data-sample>${escapeHtml(SAMPLE())}</p></div>`,
    mount: (preview) => {
      const sample = preview.querySelector('[data-sample]');
      const t = createToolbar(preview.querySelector('[data-play]'), {
        onToggle: (button, pressed) => {
          const v = button.dataset.value;
          if (v in ALIGN) {
            if (pressed) sample.style.textAlign = ALIGN[v];
            return;
          }
          sample.classList.toggle(`tb-sample--${v}`, pressed);
        },
      });
      return () => t.destroy();
    },
    code: (s) => codeFor({ plain: s.look === 'off', vertical: s.orientation === 'vertical' }),
  });
  const demos = ['formatting', 'vertical', 'plain'].map((d) => createToolbar(root.querySelector(`[data-demo="${d}"]`)));
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    demos.forEach((t) => t.destroy());
    unmountCopy();
    unmountNav();
  };
}
