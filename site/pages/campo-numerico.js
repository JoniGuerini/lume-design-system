import { icon } from '../../ds/icons/icons.js';
import { createNumberField } from '../../ds/js/number-field.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, formField, example, examples, stateGrid, usageCards, stageWrap, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const label = () => L('Quantidade', 'Quantity', 'Cantidad');

const sampleButtons = (minusDisabled = false, plusDisabled = false) => ({
  before: `<span class="ds-number__btn"${minusDisabled ? ' style="color:var(--ds-color-fg-disabled)"' : ''}>${icon('minus', { size: 16 })}</span>`,
  after: `<span class="ds-number__btn"${plusDisabled ? ' style="color:var(--ds-color-fg-disabled)"' : ''}>${icon('plus', { size: 16 })}</span>`,
});

const staticField = (o) => {
  const b = sampleButtons(o.atMin, o.atMax);
  return `<div class="ds-form-field">
    <span class="ds-form-field__label">${label()}</span>
    <div class="ds-field ds-number"${o.state ? ` data-state="${o.state}"` : ''}>${b.before}<input class="ds-field__input" type="text" tabindex="-1" value="${o.value ?? ''}" aria-label="${label()}"${o.disabled ? ' disabled' : ''}>${b.after}</div>
  </div>`;
};

export default function renderCampoNumerico(page) {
  return controlPage(page, {
    lead: L('Para um número exato, quando digitar é tão útil quanto ajustar aos poucos. Respeita limites, passo e o formato do idioma.', 'For an exact number, when typing is as useful as adjusting little by little. It respects limits, a step, and the language’s format.', 'Para un número exacto, cuando escribir es tan útil como ajustar poco a poco. Respeta límites, paso y el formato del idioma.'),
    stats: [
      [L('tamanhos', 'sizes', 'tamaños'), 3],
      [L('formatos', 'formats', 'formatos'), 'Intl'],
      [L('atalhos', 'shortcuts', 'atajos'), 6],
      [L('papel ARIA', 'ARIA role', 'rol ARIA'), 'spinbutton'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Digite, use as setas do teclado ou segure os botões para repetir o passo.', 'Type, use the arrow keys, or hold the buttons to repeat the step.', 'Escribe, usa las flechas del teclado o mantén pulsados los botones para repetir el paso.'), html: playgroundMarkup('number-field') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L(`O formato usa as opções de ${ic('Intl.NumberFormat')}: moeda, porcentagem ou unidade, sempre no idioma atual.`, `The format uses ${ic('Intl.NumberFormat')} options: currency, percent, or unit, always in the current language.`, `El formato usa las opciones de ${ic('Intl.NumberFormat')}: moneda, porcentaje o unidad, siempre en el idioma actual.`),
        html: examples([
          example(L('Inteiro com limites', 'Integer with limits', 'Entero con límites'), 'min · max', L('O botão no limite fica desativado, e o valor digitado volta para dentro dele ao sair do campo.', 'The button at the limit is disabled, and a typed value returns to within it when you leave the field.', 'El botón en el límite queda desactivado, y el valor escrito vuelve dentro de él al salir del campo.'), formField({ id: 'nf-int', fieldClass: 'ds-number', label: L('Convidados', 'Guests', 'Invitados') })),
          example(L('Moeda', 'Currency', 'Moneda'), "style: 'currency'", L('Passo de 10 centavos, sempre com duas casas.', 'A 10-cent step, always with two decimals.', 'Paso de 10 centavos, siempre con dos decimales.'), formField({ id: 'nf-money', fieldClass: 'ds-number', label: L('Preço', 'Price', 'Precio') })),
          example(L('Porcentagem', 'Percent', 'Porcentaje'), "style: 'percent'", L('O valor é a fração (0,15), e a tela mostra 15%.', 'The value is the fraction (0.15), and the screen shows 15%.', 'El valor es la fracción (0,15), y la pantalla muestra 15%.'), formField({ id: 'nf-percent', fieldClass: 'ds-number', label: L('Desconto', 'Discount', 'Descuento') })),
          example(L('Unidade', 'Unit', 'Unidad'), "style: 'unit'", L('A unidade também vem do idioma, sem texto fixo.', 'The unit also comes from the language, with no fixed text.', 'La unidad también viene del idioma, sin texto fijo.'), formField({ id: 'nf-unit', fieldClass: 'ds-number', label: L('Duração', 'Duration', 'Duración') })),
        ]),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L('Os mesmos do Campo de texto, mais os botões desativados nos limites.', 'The same as the Text field, plus disabled buttons at the limits.', 'Los mismos del Campo de texto, más los botones desactivados en los límites.'),
        html: stateGrid([
          [L('Vazio', 'Empty', 'Vacío'), staticField({})],
          [L('Preenchido', 'Filled', 'Completado'), staticField({ value: 4 })],
          ['Hover', staticField({ value: 4, state: 'hover' })],
          [L('Foco', 'Focus', 'Foco'), staticField({ value: 4, state: 'focus' })],
          [L('No limite', 'At the limit', 'En el límite'), staticField({ value: 0, atMin: true })],
          [L('Desativado', 'Disabled', 'Desactivado'), staticField({ value: 4, disabled: true })],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`O formulário recebe o número puro, num input oculto com o ${ic('name')} do campo.`, `The form receives the plain number, in a hidden input with the field’s ${ic('name')}.`, `El formulario recibe el número puro, en un input oculto con el ${ic('name')} del campo.`),
        html: codeBlock(`import { createNumberField } from 'https://lumeui.dev/v/1.0/lume.js';

const preco = createNumberField(document.querySelector('#preco'), {
  value: 49.9,
  min: 0,
  step: 0.1,
  format: { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 },
  onChange: (value) => console.log(value), // 50
});

// ${L('no envio', 'on submit', 'al enviar')}: preco=49.9`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('O campo é um spinbutton: anuncia o valor e os limites.', 'The field is a spinbutton: it announces the value and the limits.', 'El campo es un spinbutton: anuncia el valor y los límites.'),
        html: a11yList([
          [L('Um passo', 'One step', 'Un paso'), L('↑ e ↓ somam ou tiram um passo.', '↑ and ↓ add or remove one step.', '↑ y ↓ suman o quitan un paso.'), ['↑', '↓']],
          [L('Dez passos', 'Ten steps', 'Diez pasos'), L('PageUp e PageDown andam dez passos.', 'PageUp and PageDown move ten steps.', 'PageUp y PageDown avanzan diez pasos.'), ['PageUp', 'PageDown']],
          [L('Limites', 'Limits', 'Límites'), L('Home vai ao mínimo e End, ao máximo.', 'Home goes to the minimum and End to the maximum.', 'Home va al mínimo y End, al máximo.'), ['Home', 'End']],
          [L('Botões fora do Tab', 'Buttons out of Tab order', 'Botones fuera del Tab'), L('− e + são para o mouse e o toque, com área de 30 px. Têm nome para o leitor de tela.', '− and + are for mouse and touch, with a 30 px area. They have names for screen readers.', '− y + son para el ratón y el toque, con un área de 30 px. Tienen nombre para el lector de pantalla.')],
          [L('Valor com formato', 'Formatted value', 'Valor con formato'), L('Com moeda ou unidade, aria-valuetext anuncia “R$ 49,90” em vez do número puro.', 'With a currency or unit, aria-valuetext announces “$49.90” instead of the plain number.', 'Con moneda o unidad, aria-valuetext anuncia “49,90 $” en vez del número puro.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Além dos tokens do Campo de texto.', 'On top of the Text field tokens.', 'Además de los tokens del Campo de texto.'),
        html: tokenTable([
          ['color.fg.muted', L('Ícones − e +', '− and + icons', 'Íconos − y +')],
          ['color.bg.hover', L('Botão no hover', 'Button on hover', 'Botón en hover')],
          ['color.fg.disabled', L('Botão no limite', 'Button at the limit', 'Botón en el límite')],
          ['radius.sm', L('Cantos dos botões', 'Button corners', 'Esquinas de los botones')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: quantidades', 'Do: quantities', 'Haz: cantidades'), L('Itens no carrinho, convidados, preço, porcentagem: números que se somam ou comparam.', 'Items in a cart, guests, price, percent: numbers you add up or compare.', 'Artículos en el carrito, invitados, precio, porcentaje: números que se suman o comparan.')],
          ['dont', L('Evite: códigos', 'Avoid: codes', 'Evita: códigos'), L('CEP, telefone e cartão são texto com dígitos. Ninguém soma 1 a um CEP. Use o Campo de texto.', 'ZIP codes, phone numbers, and cards are text with digits. Nobody adds 1 to a ZIP code. Use the Text field.', 'Código postal, teléfono y tarjeta son texto con dígitos. Nadie suma 1 a un código postal. Usa el Campo de texto.')],
          ['tip', L('Sem precisão? Slider', 'No precision needed? Slider', '¿Sin precisión? Slider'), L('Se a posição importa mais que o número exato, como o volume, use o Slider.', 'If position matters more than the exact number, like volume, use the Slider.', 'Si la posición importa más que el número exacto, como el volumen, usa el Slider.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'number-field',
    controls: [
      { id: 'size', label: L('Tamanho', 'Size', 'Tamaño'), value: 'md', options: [{ value: 'sm', label: L('Pequeno', 'Small', 'Pequeño') }, { value: 'md', label: L('Médio', 'Medium', 'Mediano') }, { value: 'lg', label: L('Grande', 'Large', 'Grande') }] },
      { id: 'step', label: L('Passo', 'Step', 'Paso'), value: '1', options: ['1', '5', '10', '0.5'].map((v) => ({ value: v, label: v })) },
      { id: 'limit', label: L('Limite', 'Limit', 'Límite'), value: 'on', options: [{ value: 'on', label: '0 – 100' }, { value: 'off', label: L('Sem limite', 'No limit', 'Sin límite') }] },
      { id: 'state', label: L('Estado', 'State', 'Estado'), value: 'default', options: [{ value: 'default', label: L('Normal', 'Default', 'Normal') }, { value: 'disabled', label: L('Desativado', 'Disabled', 'Desactivado') }] },
    ],
    text: { id: 'label', label: L('Rótulo', 'Label', 'Etiqueta'), value: label() },
    render: (s) => stageWrap(formField({ id: 'nf-play', fieldClass: `ds-number${s.size !== 'md' ? ` ds-field--${s.size}` : ''}`, label: s.label || label(), attrs: s.state === 'disabled' ? 'disabled' : '' })),
    mount: (preview, s) => {
      const field = createNumberField(preview.querySelector('#nf-play'), { value: 10, step: Number(s.step), ...(s.limit === 'on' ? { min: 0, max: 100 } : {}) });
      return () => field.destroy();
    },
    code: (s) => `<div class="ds-form-field">
  <label class="ds-form-field__label" for="quantidade">${s.label || label()}</label>
  <div class="ds-field ds-number${s.size !== 'md' ? ` ds-field--${s.size}` : ''}"><input class="ds-field__input" id="quantidade" name="quantidade" type="text"${s.state === 'disabled' ? ' disabled' : ''}></div>
</div>

<script type="module">
  import { createNumberField } from 'https://lumeui.dev/v/1.0/lume.js';
  createNumberField(document.querySelector('#quantidade'), {
    value: 10,
    step: ${s.step},${s.limit === 'on' ? '\n    min: 0,\n    max: 100,' : ''}
  });
</script>`,
  });

  const fields = [
    createNumberField(root.querySelector('#nf-int'), { value: 2, min: 0, max: 20 }),
    createNumberField(root.querySelector('#nf-money'), { value: 49.9, min: 0, step: 0.1, format: { style: 'currency', currency: 'BRL', currencyDisplay: 'narrowSymbol', minimumFractionDigits: 2, maximumFractionDigits: 2 } }),
    createNumberField(root.querySelector('#nf-percent'), { value: 0.15, min: 0, max: 1, step: 0.05, format: { style: 'percent', maximumFractionDigits: 0 } }),
    createNumberField(root.querySelector('#nf-unit'), { value: 45, min: 5, step: 5, format: { style: 'unit', unit: 'minute', unitDisplay: 'short' } }),
  ];

  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    fields.forEach((f) => f.destroy());
    unmountCopy();
    unmountNav();
  };
}
