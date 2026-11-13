import { createSlider } from '../../ds/js/slider.js';
import { numberFormat } from '../../ds/js/i18n.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, stageWrap, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const label = () => L('Volume', 'Volume', 'Volumen');
const percent = (v) => numberFormat({ style: 'percent' }).format(v / 100);
const money = (v) => numberFormat({ style: 'currency', currency: 'BRL', currencyDisplay: 'narrowSymbol', maximumFractionDigits: 0 }).format(v);

const single = ({ id, text = label(), value = 40, min = 0, max = 100, step = 1, attrs = '', state = '' }) => `<div class="ds-form-field">
  <div class="ds-slider__head">
    <label class="ds-form-field__label" for="${id}">${text}</label>
    <output class="ds-slider__value" for="${id}"></output>
  </div>
  <div class="ds-slider"${state ? ` data-state="${state}"` : ''} data-demo><input class="ds-slider__input" id="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}"${attrs ? ` ${attrs}` : ''}></div>
</div>`;

const range = ({ id, text, low, high, min = 0, max = 100, step = 1, attrs = '' }) => `<div class="ds-form-field">
  <div class="ds-slider__head">
    <span class="ds-form-field__label" id="${id}-label">${text}</span>
    <output class="ds-slider__value"></output>
  </div>
  <div class="ds-slider" role="group" aria-labelledby="${id}-label" data-demo>
    <input class="ds-slider__input" type="range" min="${min}" max="${max}" step="${step}" value="${low}" aria-label="${L('Mínimo', 'Minimum', 'Mínimo')}"${attrs ? ` ${attrs}` : ''}>
    <input class="ds-slider__input" type="range" min="${min}" max="${max}" step="${step}" value="${high}" aria-label="${L('Máximo', 'Maximum', 'Máximo')}"${attrs ? ` ${attrs}` : ''}>
  </div>
</div>`;

export default function renderSlider(page) {
  return controlPage(page, {
    lead: L('Para escolher um valor ou uma faixa quando a posição importa mais que o número exato, como volume, brilho ou uma faixa de preço.', 'For choosing a value or a range when position matters more than the exact number, like volume, brightness, or a price range.', 'Para elegir un valor o un rango cuando la posición importa más que el número exacto, como volumen, brillo o un rango de precios.'),
    stats: [
      [L('modos', 'modes', 'modos'), 2],
      [L('base', 'base', 'base'), 'range'],
      [L('polegar', 'thumb', 'pulgar'), '18 px'],
      [L('dependências', 'dependencies', 'dependencias'), 0],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L(`Por baixo é um ${ic('input type="range"')} nativo, com teclado e leitor de tela prontos.`, `Underneath it’s a native ${ic('input type="range"')}, with keyboard and screen reader support built in.`, `Por debajo es un ${ic('input type="range"')} nativo, con teclado y lector de pantalla listos.`), html: playgroundMarkup('slider') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('O valor fica ao lado do rótulo, sempre visível. Marcas ajudam quando alguns pontos têm nome.', 'The value sits next to the label, always visible. Marks help when some points have names.', 'El valor queda junto a la etiqueta, siempre visible. Las marcas ayudan cuando algunos puntos tienen nombre.'),
        html: examples([
          example(L('Um valor', 'One value', 'Un valor'), 'ds-slider', L('A parte preenchida mostra quanto está escolhido.', 'The filled part shows how much is chosen.', 'La parte rellena muestra cuánto está elegido.'), single({ id: 'sl-one', text: L('Brilho', 'Brightness', 'Brillo'), value: 70 })),
          example(L('Faixa', 'Range', 'Rango'), 'data-range', L('Dois polegares que não se cruzam, cada um com seu nome para o leitor de tela.', 'Two thumbs that don’t cross, each with its own name for screen readers.', 'Dos pulgares que no se cruzan, cada uno con su nombre para el lector de pantalla.'), range({ id: 'sl-range', text: L('Faixa de preço', 'Price range', 'Rango de precios'), low: 200, high: 800, max: 1000, step: 50 })),
          example(L('Com marcas', 'With marks', 'Con marcas'), 'marks', L('Pontos com nome abaixo do trilho.', 'Named points below the track.', 'Puntos con nombre debajo del riel.'), single({ id: 'sl-marks', text: L('Qualidade', 'Quality', 'Calidad'), value: 50, step: 25 })),
          example(L('Com passo', 'With a step', 'Con paso'), 'step', L('O polegar anda de 10 em 10, e o teclado também.', 'The thumb moves by 10, and the keyboard does too.', 'El pulgar avanza de 10 en 10, y el teclado también.'), single({ id: 'sl-step', text: L('Opacidade', 'Opacity', 'Opacidad'), value: 60, step: 10 })),
        ]),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L(`Hover e foco podem ser forçados com ${ic('data-state')} no ${ic('.ds-slider')}.`, `Hover and focus can be forced with ${ic('data-state')} on ${ic('.ds-slider')}.`, `Hover y foco se pueden forzar con ${ic('data-state')} en ${ic('.ds-slider')}.`),
        html: stateGrid([
          [L('Normal', 'Default', 'Normal'), single({ id: 'sl-s-a' })],
          ['Hover', single({ id: 'sl-s-b', state: 'hover' })],
          [L('Foco', 'Focus', 'Foco'), single({ id: 'sl-s-c', state: 'focus' })],
          [L('Desativado', 'Disabled', 'Desactivado'), single({ id: 'sl-s-d', attrs: 'disabled' })],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`${ic('onInput')} acompanha o arraste; ${ic('onChange')} avisa quando a pessoa solta.`, `${ic('onInput')} follows the drag; ${ic('onChange')} fires when the person lets go.`, `${ic('onInput')} sigue el arrastre; ${ic('onChange')} avisa cuando la persona suelta.`),
        html: codeBlock(`import { createSlider } from 'https://lumeui.dev/v/0.28/lume.js';

const volume = createSlider(document.querySelector('.ds-slider'), {
  format: (value) => \`\${value}%\`,
  marks: [{ value: 0, label: '0%' }, { value: 100, label: '100%' }],
  onChange: (value) => salvar(value),
});`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('O input nativo já é anunciado como controle deslizante, com o valor atual.', 'The native input is already announced as a slider, with its current value.', 'El input nativo ya se anuncia como control deslizante, con el valor actual.'),
        html: a11yList([
          [L('Ajustar', 'Adjust', 'Ajustar'), L('As setas andam um passo; PageUp e PageDown, passos maiores.', 'Arrows move one step; PageUp and PageDown, bigger steps.', 'Las flechas avanzan un paso; PageUp y PageDown, pasos mayores.'), ['←', '→', 'PageUp', 'PageDown']],
          [L('Ir aos limites', 'Go to the limits', 'Ir a los límites'), L('Home vai ao mínimo e End, ao máximo.', 'Home goes to the minimum and End to the maximum.', 'Home va al mínimo y End, al máximo.'), ['Home', 'End']],
          [L('Valor com sentido', 'A meaningful value', 'Valor con sentido'), L('O aria-valuetext anuncia o texto de format, como “R$ 800”, e não só “800”.', 'aria-valuetext announces the format text, like “$800”, not just “800”.', 'aria-valuetext anuncia el texto de format, como “800 $”, y no solo “800”.')],
          [L('Faixa com dois nomes', 'A range with two names', 'Rango con dos nombres'), L('Cada polegar é um input com seu aria-label, dentro de um grupo com o rótulo da faixa.', 'Each thumb is an input with its own aria-label, inside a group with the range’s label.', 'Cada pulgar es un input con su aria-label, dentro de un grupo con la etiqueta del rango.')],
          [L('Alternativa exata', 'An exact alternative', 'Alternativa exacta'), L('Se o número exato importa, ofereça também o Campo numérico: arrastar com precisão é difícil para muita gente.', 'If the exact number matters, also offer the Number field: dragging precisely is hard for many people.', 'Si el número exacto importa, ofrece también el Campo numérico: arrastrar con precisión es difícil para mucha gente.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que o slider consome.', 'Everything the slider consumes.', 'Todo lo que consume el slider.'),
        html: tokenTable([
          ['color.border.field', L('Trilho', 'Track', 'Riel')],
          ['color.brand.solid', L('Parte preenchida e contorno do polegar', 'Filled part and thumb outline', 'Parte rellena y contorno del pulgar')],
          ['color.bg.raised', L('Miolo do polegar', 'Thumb center', 'Centro del pulgar')],
          ['color.border.focus', L('Anel de foco', 'Focus ring', 'Anillo de foco')],
          ['color.fg.muted', L('Valor', 'Value', 'Valor')],
          ['color.fg.subtle', L('Marcas', 'Marks', 'Marcas')],
          ['radius.full', L('Trilho e polegar', 'Track and thumb', 'Riel y pulgar')],
          ['opacity.disabled', L('Desativado', 'Disabled', 'Desactivado')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: ajustes visíveis', 'Do: visible adjustments', 'Haz: ajustes visibles'), L('Volume, brilho e zoom, em que o resultado aparece enquanto se arrasta.', 'Volume, brightness, and zoom, where the result shows while dragging.', 'Volumen, brillo y zoom, donde el resultado aparece mientras se arrastra.')],
          ['dont', L('Evite: número exato', 'Avoid: exact numbers', 'Evita: números exactos'), L('Para escolher 1.250 num intervalo de 0 a 10.000, o Campo numérico é melhor.', 'To choose 1,250 in a range from 0 to 10,000, the Number field is better.', 'Para elegir 1.250 en un intervalo de 0 a 10.000, el Campo numérico es mejor.')],
          ['tip', L('Sempre mostre o valor', 'Always show the value', 'Muestra siempre el valor'), L('Sem o número ao lado, a pessoa só adivinha o que escolheu.', 'Without the number beside it, the person is only guessing what they chose.', 'Sin el número al lado, la persona solo adivina lo que eligió.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'slider',
    controls: [
      { id: 'mode', label: L('Modo', 'Mode', 'Modo'), value: 'single', options: [{ value: 'single', label: L('Um valor', 'One value', 'Un valor') }, { value: 'range', label: L('Faixa', 'Range', 'Rango') }] },
      { id: 'step', label: L('Passo', 'Step', 'Paso'), value: '1', options: ['1', '5', '10', '25'].map((v) => ({ value: v, label: v })) },
      { id: 'marks', label: L('Marcas', 'Marks', 'Marcas'), value: 'off', options: [{ value: 'off', label: L('Sem marcas', 'No marks', 'Sin marcas') }, { value: 'on', label: L('Com marcas', 'With marks', 'Con marcas') }] },
      { id: 'state', label: L('Estado', 'State', 'Estado'), value: 'default', options: [{ value: 'default', label: L('Normal', 'Default', 'Normal') }, { value: 'disabled', label: L('Desativado', 'Disabled', 'Desactivado') }] },
    ],
    text: { id: 'label', label: L('Rótulo', 'Label', 'Etiqueta'), value: label() },
    render: (s) => {
      const attrs = s.state === 'disabled' ? 'disabled' : '';
      return stageWrap(s.mode === 'range' ? range({ id: 'sl-play', text: s.label || label(), low: 25, high: 75, step: s.step, attrs }) : single({ id: 'sl-play', text: s.label || label(), value: 50, step: s.step, attrs }));
    },
    mount: (preview, s) => {
      const slider = createSlider(preview.querySelector('.ds-slider'), { format: percent, marks: s.marks === 'on' ? [0, 50, 100].map((value) => ({ value, label: percent(value) })) : undefined });
      return () => slider.destroy();
    },
    code: (s) => {
      const name = s.label || label();
      const attrs = `min="0" max="100" step="${s.step}"${s.state === 'disabled' ? ' disabled' : ''}`;
      const inputs = s.mode === 'range'
        ? `    <input class="ds-slider__input" type="range" ${attrs} value="25" aria-label="${L('Mínimo', 'Minimum', 'Mínimo')}">\n    <input class="ds-slider__input" type="range" ${attrs} value="75" aria-label="${L('Máximo', 'Maximum', 'Máximo')}">`
        : `    <input class="ds-slider__input" id="volume" name="volume" type="range" ${attrs} value="50">`;
      return `<div class="ds-form-field">
  <div class="ds-slider__head">
    ${s.mode === 'range' ? `<span class="ds-form-field__label" id="volume-label">${name}</span>` : `<label class="ds-form-field__label" for="volume">${name}</label>`}
    <output class="ds-slider__value"></output>
  </div>
  <div class="ds-slider"${s.mode === 'range' ? ' role="group" aria-labelledby="volume-label"' : ''}>
${inputs}
  </div>
</div>

<script type="module">
  import { createSlider } from 'https://lumeui.dev/v/0.28/lume.js';
  createSlider(document.querySelector('.ds-slider'), {
    format: (value) => \`\${value}%\`,${s.marks === 'on' ? "\n    marks: [{ value: 0, label: '0%' }, { value: 50, label: '50%' }, { value: 100, label: '100%' }]," : ''}
  });
</script>`;
    },
  });

  const QUALITY = () => [{ value: 0, label: L('Baixa', 'Low', 'Baja') }, { value: 50, label: L('Média', 'Medium', 'Media') }, { value: 100, label: L('Alta', 'High', 'Alta') }];
  const qualityText = (v) => ({ 0: L('Baixa', 'Low', 'Baja'), 25: L('Baixa e média', 'Low to medium', 'Baja a media'), 50: L('Média', 'Medium', 'Media'), 75: L('Média e alta', 'Medium to high', 'Media a alta'), 100: L('Alta', 'High', 'Alta') })[v];
  const sliders = [...root.querySelectorAll('.doc-section:not(#playground) .ds-slider[data-demo]')].map((el) => {
    const input = el.querySelector('input');
    if (input.id === 'sl-marks') return createSlider(el, { format: qualityText, marks: QUALITY() });
    return createSlider(el, { format: el.hasAttribute('role') ? money : percent });
  });

  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    sliders.forEach((s) => s.destroy());
    unmountCopy();
    unmountNav();
  };
}
