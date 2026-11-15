import { icon } from '../../ds/icons/icons.js';
import { createColorPicker, createColorField } from '../../ds/js/color-picker.js';
import { tokens } from '../../ds/tokens.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, formField, example, examples, stateGrid, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/seletor-de-cor.css'];

/* As amostras dos exemplos são as 8 cores dos gráficos do Lume, no tema claro. */
const SERIES = () => [
  L('Pêssego', 'Peach', 'Melocotón'), L('Azul', 'Blue', 'Azul'), L('Rosa', 'Pink', 'Rosa'), L('Âmbar', 'Amber', 'Ámbar'),
  L('Verde-azulado', 'Teal', 'Verde azulado'), L('Vermelho', 'Red', 'Rojo'), L('Violeta', 'Violet', 'Violeta'), L('Verde', 'Green', 'Verde'),
];
const palette = () =>
  SERIES().map((label, i) => ({ value: tokens.find((t) => t.name === `color.chart.series.${i + 1}`).modes.light.value.slice(0, 7).toLowerCase(), label }));

const START = '#c97b63'; // a terracota do indicador

const label = () => L('Cor da marca', 'Brand color', 'Color de la marca');
const swatchMark = (color) => `<span class="ds-color-field__swatch" style="--_color: ${color}"></span>`;

const staticField = (o) =>
  formField({
    id: `cp-state-${o.id}`,
    name: '',
    label: label(),
    value: o.value ?? '',
    state: o.state,
    attrs: ['tabindex="-1"', o.placeholder ? `placeholder="${o.placeholder}"` : '', o.invalid ? 'aria-invalid="true"' : '', o.disabled ? 'disabled' : ''].filter(Boolean).join(' '),
  })
    .replace('<input', `${swatchMark(o.color ?? 'transparent')}<input`) +
  (o.error ? `<p class="ds-form-field__error" style="margin-top:var(--ds-space-075)">${icon('alert-circle', { size: 16 })}<span>${o.error}</span></p>` : '');

const swatchesCode = () => `swatches: [${palette().slice(0, 3).map((s) => `{ value: '${s.value}', label: '${s.label}' }`).join(', ')}, …]`;

export default function renderColorPicker(page) {
  return controlPage(page, {
    lead: L('Para escolher uma cor livre ou uma da paleta. Arraste na área, ajuste o matiz, digite o hexadecimal ou clique numa amostra.', 'For choosing a free color or one from the palette. Drag in the area, adjust the hue, type the hex, or click a swatch.', 'Para elegir un color libre o uno de la paleta. Arrastra en el área, ajusta el matiz, escribe el hexadecimal o haz clic en una muestra.'),
    stats: [
      [L('formas', 'forms', 'formas'), 2],
      [L('valor enviado', 'value sent', 'valor enviado'), '#rrggbb'],
      [L('amostras', 'swatches', 'muestras'), L('opcionais', 'optional', 'opcionales')],
      [L('papel ARIA', 'ARIA role', 'rol ARIA'), 'slider'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L(`Digite ${ic('3b82f6')} ou ${ic('#abc')} no campo: com ou sem #, em 3 ou 6 dígitos.`, `Type ${ic('3b82f6')} or ${ic('#abc')} in the field: with or without #, in 3 or 6 digits.`, `Escribe ${ic('3b82f6')} o ${ic('#abc')} en el campo: con o sin #, en 3 o 6 dígitos.`), html: playgroundMarkup('color-picker') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('O campo cabe num formulário e abre o seletor num painel. O seletor solto fica sempre à vista, para telas de configuração.', 'The field fits in a form and opens the picker in a panel. The standalone picker stays in view, for settings screens.', 'El campo cabe en un formulario y abre el selector en un panel. El selector suelto queda siempre a la vista, para pantallas de configuración.'),
        html: examples([
          example(L('Campo de cor', 'Color field', 'Campo de color'), 'createColorField', L('A amostra no começo abre o seletor; o texto dá para digitar.', 'The swatch at the start opens the picker; the text can be typed.', 'La muestra al inicio abre el selector; el texto se puede escribir.'), formField({ id: 'cp-field', label: label(), value: START })),
          example(L('Seletor solto', 'Standalone picker', 'Selector suelto'), 'createColorPicker', L('Com as amostras da paleta embaixo.', 'With the palette swatches below.', 'Con las muestras de la paleta abajo.'), '<div data-demo="inline"></div>'),
        ]),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L('O campo tem os estados do Campo de texto. Hexadecimal que não é cor mostra o erro ao sair do campo.', 'The field has the Text field states. A hex that isn’t a color shows the error when leaving the field.', 'El campo tiene los estados del Campo de texto. Un hexadecimal que no es color muestra el error al salir del campo.'),
        html: stateGrid([
          [L('Vazio', 'Empty', 'Vacío'), staticField({ id: 'a', placeholder: '#000000' })],
          [L('Preenchido', 'Filled', 'Completado'), staticField({ id: 'b', value: '#C97B63', color: START })],
          ['Hover', staticField({ id: 'c', value: '#C97B63', color: START, state: 'hover' })],
          [L('Foco', 'Focus', 'Foco'), staticField({ id: 'd', value: '#C97B63', color: START, state: 'focus' })],
          [L('Erro', 'Error', 'Error'), staticField({ id: 'e', value: '#C97B6', invalid: true, error: L('Use uma cor em hexadecimal, como #C97B63.', 'Use a hex color, like #C97B63.', 'Usa un color en hexadecimal, como #C97B63.') })],
          [L('Desativado', 'Disabled', 'Desactivado'), staticField({ id: 'f', value: '#C97B63', color: START, disabled: true })],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`O formulário recebe o hexadecimal do campo; funciona com ${ic('createForm')}, como os outros campos.`, `The form receives the field’s hex; it works with ${ic('createForm')}, like the other fields.`, `El formulario recibe el hexadecimal del campo; funciona con ${ic('createForm')}, como los otros campos.`),
        html: codeBlock(`<div class="ds-form-field">
  <label class="ds-form-field__label" for="marca">${label()}</label>
  <div class="ds-field"><input class="ds-field__input" id="marca" name="marca" type="text"></div>
</div>

<script type="module">
  import { createColorField } from 'https://lumeui.dev/v/1.1/lume.js';

  createColorField(document.querySelector('#marca'), {
    value: '${START}',
    ${swatchesCode()},
    onChange: (hex) => console.log(hex),
  });
</script>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Tudo o que dá para fazer com o mouse dá para fazer com o teclado, e o hexadecimal é a saída para quem prefere digitar.', 'Everything you can do with the mouse works with the keyboard, and the hex is the way out for those who prefer typing.', 'Todo lo que se puede hacer con el ratón funciona con el teclado, y el hexadecimal es la salida para quien prefiere escribir.'),
        html: a11yList([
          [L('Área', 'Area', 'Área'), L('É um slider: lê “Saturação 60%, brilho 80%” a cada passo.', 'It’s a slider: it reads “Saturation 60%, brightness 80%” at each step.', 'Es un slider: lee “Saturación 60%, brillo 80%” en cada paso.'), ['←', '→', '↑', '↓']],
          [L('Matiz', 'Hue', 'Matiz'), L('Slider de 0° a 360°. Com Shift, anda de 10 em 10.', 'A slider from 0° to 360°. With Shift, it moves 10 at a time.', 'Slider de 0° a 360°. Con Shift, avanza de 10 en 10.'), ['←', '→', 'Home', 'End']],
          [L('Amostras', 'Swatches', 'Muestras'), L('Botões com o nome da cor e aria-pressed na escolhida; a marca troca entre preto e branco para ter contraste.', 'Buttons with the color name and aria-pressed on the chosen one; the check switches between black and white for contrast.', 'Botones con el nombre del color y aria-pressed en el elegido; la marca cambia entre negro y blanco para tener contraste.')],
          [L('Painel do campo', 'Field panel', 'Panel del campo'), L('A amostra diz a cor atual (“Escolher cor, atual #C97B63”). ↓ abre, Esc fecha e devolve o foco ao campo.', 'The swatch says the current color (“Choose color, current #C97B63”). ↓ opens, Esc closes and returns focus to the field.', 'La muestra dice el color actual (“Elegir color, actual #C97B63”). ↓ abre, Esc cierra y devuelve el foco al campo.'), ['↓', 'Esc']],
          [L('Não dependa só da cor', 'Don’t rely on color alone', 'No dependas solo del color'), L('Se a cor escolhida comunica algo, mostre também o nome ou o valor.', 'If the chosen color means something, show the name or value too.', 'Si el color elegido comunica algo, muestra también el nombre o el valor.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Os degradês da área e do matiz são as próprias cores escolhíveis; o resto vem dos tokens.', 'The area and hue gradients are the choosable colors themselves; the rest comes from tokens.', 'Los degradados del área y del matiz son los propios colores elegibles; el resto viene de los tokens.'),
        html: tokenTable([
          ['color.bg.raised', L('Painel e anel da alça', 'Panel and thumb ring', 'Panel y anillo del tirador')],
          ['color.border.strong', L('Contorno da alça e do painel', 'Thumb and panel outline', 'Contorno del tirador y del panel')],
          ['color.border.subtle', L('Contorno da área, do matiz e das amostras', 'Area, hue, and swatch outline', 'Contorno del área, del matiz y de las muestras')],
          ['color.border.focus', L('Foco da alça', 'Thumb focus', 'Foco del tirador')],
          ['radius.md', L('Área', 'Area', 'Área')],
          ['radius.full', L('Alças, matiz e amostras', 'Thumbs, hue, and swatches', 'Tiradores, matiz y muestras')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: ofereça a paleta', 'Do: offer the palette', 'Haz: ofrece la paleta'), L('Amostras com as cores da marca evitam um tom quase igual ao certo.', 'Swatches with the brand colors avoid a shade that’s almost right.', 'Muestras con los colores de la marca evitan un tono casi igual al correcto.')],
          ['dont', L('Evite: cor para dado', 'Avoid: color for data', 'Evita: color para datos'), L('Para etiquetar ou classificar, poucas opções fixas (um Controle segmentado ou Seleção) funcionam melhor que uma cor livre.', 'To tag or classify, a few fixed options (a Segmented control or Select) work better than a free color.', 'Para etiquetar o clasificar, pocas opciones fijas (un Control segmentado o un Selector) funcionan mejor que un color libre.')],
          ['tip', L('Confira o contraste', 'Check the contrast', 'Revisa el contraste'), L('Se a cor vai para texto ou fundo, avise quando ela não alcançar 4,5:1.', 'If the color goes on text or a background, warn when it doesn’t reach 4.5:1.', 'Si el color va en texto o fondo, avisa cuando no alcance 4,5:1.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'color-picker',
    controls: [
      { id: 'form', label: L('Forma', 'Form', 'Forma'), value: 'field', options: [{ value: 'field', label: L('Campo', 'Field', 'Campo') }, { value: 'inline', label: L('Solto', 'Standalone', 'Suelto') }] },
      { id: 'swatches', label: L('Amostras', 'Swatches', 'Muestras'), value: 'on', options: [{ value: 'on', label: L('Paleta do Lume', 'Lume palette', 'Paleta de Lume') }, { value: 'off', label: L('Sem amostras', 'No swatches', 'Sin muestras') }] },
    ],
    render: (s) => (s.form === 'field' ? `<div class="fc-stage">${formField({ id: 'cp-play', label: label() })}</div>` : '<div data-play></div>'),
    mount: (preview, s) => {
      const swatches = s.swatches === 'on' ? palette() : [];
      const c = s.form === 'field' ? createColorField(preview.querySelector('#cp-play'), { value: START, swatches }) : createColorPicker(preview.querySelector('[data-play]'), { value: START, swatches });
      return () => c.destroy();
    },
    code: (s) =>
      s.form === 'field'
        ? `<div class="ds-field"><input class="ds-field__input" id="marca" name="marca" type="text"></div>

<script type="module">
  import { createColorField } from 'https://lumeui.dev/v/1.1/lume.js';
  createColorField(document.querySelector('#marca'), {
    value: '${START}',${s.swatches === 'on' ? `\n    ${swatchesCode()},` : ''}
  });
</script>`
        : `<div class="ds-color-picker"></div>

<script type="module">
  import { createColorPicker } from 'https://lumeui.dev/v/1.1/lume.js';
  createColorPicker(document.querySelector('.ds-color-picker'), {
    value: '${START}',${s.swatches === 'on' ? `\n    ${swatchesCode()},` : ''}
    onChange: (hex) => console.log(hex),
  });
</script>`,
  });
  const demos = [createColorField(root.querySelector('#cp-field'), { value: START, swatches: palette() }), createColorPicker(root.querySelector('[data-demo="inline"]'), { value: START, swatches: palette() })];
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    demos.forEach((c) => c.destroy());
    unmountCopy();
    unmountNav();
  };
}
