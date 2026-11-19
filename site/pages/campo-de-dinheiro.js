import { createCurrencyField } from '../../ds/js/currency-field.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, formField, example, examples, usageCards, stageWrap, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const label = () => L('Valor da sessão', 'Session fee', 'Valor de la sesión');
const CURRENCIES = () => [
  ['BRL', L('Real', 'Real', 'Real')],
  ['USD', L('Dólar', 'Dollar', 'Dólar')],
  ['EUR', 'Euro'],
  ['JPY', L('Iene', 'Yen', 'Yen')],
];

export default function renderCampoDeDinheiro(page) {
  return controlPage(page, {
    lead: L('Para valores em dinheiro. A pessoa digita do jeito que quiser (“1290”, “1.290,5”) e, ao sair do campo, o valor volta formatado no idioma, com o símbolo da moeda fixo no campo.', 'For money amounts. People type however they like (“1290”, “1,290.5”) and, on leaving the field, the value comes back formatted in the language, with the currency symbol fixed in the field.', 'Para valores en dinero. La persona escribe como quiera (“1290”, “1.290,5”) y, al salir del campo, el valor vuelve formateado en el idioma, con el símbolo de la moneda fijo en el campo.'),
    stats: [
      [L('moedas', 'currencies', 'monedas'), 'ISO 4217'],
      [L('formato', 'format', 'formato'), 'Intl'],
      [L('envia', 'submits', 'envía'), '1290.5'],
      [L('tamanhos', 'sizes', 'tamaños'), 3],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Digite um valor e saia do campo (Tab ou Enter) para ver o formato. Troque a moeda e o idioma do site.', 'Type an amount and leave the field (Tab or Enter) to see the format. Change the currency and the site language.', 'Escribe un valor y sal del campo (Tab o Enter) para ver el formato. Cambia la moneda y el idioma del sitio.'), html: playgroundMarkup('currency-field') },
      {
        id: 'variantes',
        title: L('Moedas', 'Currencies', 'Monedas'),
        desc: L(`O símbolo, o lado dele e as casas decimais vêm do ${ic('Intl')}: duas casas no real, nenhuma no iene; em espanhol, o euro vai depois do valor.`, `The symbol, its side, and the decimal places come from ${ic('Intl')}: two places for the real, none for the yen; in Spanish, the euro goes after the amount.`, `El símbolo, su lado y los decimales vienen de ${ic('Intl')}: dos decimales en el real, ninguno en el yen; en español, el euro va después del valor.`),
        html: examples([
          example('Real', "currency: 'BRL'", L('O padrão. Valor de sessão, mensalidade, recibo.', 'The default. Session fee, monthly fee, receipt.', 'El predeterminado. Valor de sesión, mensualidad, recibo.'), formField({ id: 'cf-brl', label: L('Valor pago', 'Amount paid', 'Valor pagado') })),
          example('Euro', "currency: 'EUR'", L('Mude o idioma do site para espanhol e o símbolo passa para o fim.', 'Switch the site to Spanish and the symbol moves to the end.', 'Con el sitio en español, el símbolo va al final.'), formField({ id: 'cf-eur', label: L('Preço', 'Price', 'Precio') })),
          example(L('Iene', 'Yen', 'Yen'), "currency: 'JPY'", L('Sem centavos: o valor arredonda para o inteiro.', 'No cents: the amount rounds to a whole number.', 'Sin centavos: el valor se redondea al entero.'), formField({ id: 'cf-jpy', label: L('Total', 'Total', 'Total') })),
          example(L('Com limites', 'With limits', 'Con límites'), 'min · max', L('Ao sair do campo, o valor volta para dentro deles: aqui, de 0 a 1.000.', 'On leaving the field, the value goes back within them: here, 0 to 1,000.', 'Al salir del campo, el valor vuelve dentro de ellos: aquí, de 0 a 1.000.'), formField({ id: 'cf-limit', label: L('Desconto', 'Discount', 'Descuento'), hint: L('Até R$ 1.000,00', 'Up to R$1,000.00', 'Hasta R$ 1.000,00') })),
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`O formulário recebe o número puro (1290.5), num input oculto com o ${ic('name')} do campo. Texto que não é número volta ao último valor válido.`, `The form receives the plain number (1290.5), in a hidden input with the field’s ${ic('name')}. Text that isn’t a number goes back to the last valid value.`, `El formulario recibe el número puro (1290.5), en un input oculto con el ${ic('name')} del campo. El texto que no es número vuelve al último valor válido.`),
        html: codeBlock(`import { createCurrencyField } from 'https://lumeui.dev/v/1.11/lume.js';

const valor = createCurrencyField(document.querySelector('#valor'), {
  currency: 'BRL',
  value: 180,
  min: 0,
  onChange: (value) => console.log(value), // 1290.5
});

// React
<Field label="${label()}">
  <CurrencyField value={valor} onChange={setValor} currency="BRL" name="valor" />
</Field>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('É um campo de texto comum, com teclado decimal no celular.', 'It’s a regular text field, with a decimal keypad on phones.', 'Es un campo de texto común, con teclado decimal en el celular.'),
        html: a11yList([
          [L('Teclado certo', 'The right keypad', 'El teclado correcto'), L(`${ic('inputmode="decimal"')} abre os números com a vírgula ou o ponto do idioma.`, `${ic('inputmode="decimal"')} opens the numbers with the language’s comma or period.`, `${ic('inputmode="decimal"')} abre los números con la coma o el punto del idioma.`)],
          [L('O valor é lido inteiro', 'The value is read whole', 'El valor se lee entero'), L('O símbolo fica fora do valor e escondido do leitor de tela. Se a moeda não for óbvia pela tela, diga no rótulo: “Valor em dólares”.', 'The symbol stays out of the value and hidden from screen readers. If the currency isn’t obvious from the screen, say it in the label: “Amount in dollars”.', 'El símbolo queda fuera del valor y oculto para el lector de pantalla. Si la moneda no es obvia por la pantalla, dilo en la etiqueta: “Valor en dólares”.')],
          [L('Enter firma', 'Enter commits', 'Enter confirma'), L('Enter formata o valor sem sair do campo; Tab formata e segue.', 'Enter formats the value without leaving the field; Tab formats and moves on.', 'Enter formatea el valor sin salir del campo; Tab formatea y sigue.'), ['Enter', 'Tab']],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Além dos tokens do Campo de texto.', 'On top of the Text field tokens.', 'Además de los tokens del Campo de texto.'),
        html: tokenTable([
          ['color.fg.subtle', L('Símbolo da moeda', 'Currency symbol', 'Símbolo de la moneda')],
          ['text.body-sm', L('Símbolo da moeda', 'Currency symbol', 'Símbolo de la moneda')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: valores que a pessoa digita', 'Do: amounts people type', 'Haz: valores que la persona escribe'), L('Preço, valor pago, mensalidade: números exatos que raramente se ajustam aos poucos.', 'Price, amount paid, monthly fee: exact numbers that are rarely nudged up or down.', 'Precio, valor pagado, mensualidad: números exactos que rara vez se ajustan poco a poco.')],
          ['dont', L('Evite: forçar a máscara', 'Avoid: forcing a mask', 'Evita: forzar la máscara'), L('Nada de preencher os centavos enquanto a pessoa digita: ela digita livre e o formato vem ao sair.', 'Don’t fill in the cents while people type: they type freely and the format comes on leaving.', 'Nada de completar los centavos mientras la persona escribe: escribe libre y el formato llega al salir.')],
          ['tip', L('Ajustar com − e +?', 'Adjust with − and +?', '¿Ajustar con − y +?'), L('Se o valor sobe de pouco em pouco (gorjeta, lance), use o Campo numérico com formato de moeda.', 'If the amount goes up little by little (tip, bid), use the Number field with a currency format.', 'Si el valor sube de a poco (propina, puja), usa el Campo numérico con formato de moneda.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'currency-field',
    controls: [
      { id: 'currency', label: L('Moeda', 'Currency', 'Moneda'), value: 'BRL', options: CURRENCIES().map(([value, name]) => ({ value, label: `${name} · ${value}` })) },
      { id: 'size', label: L('Tamanho', 'Size', 'Tamaño'), value: 'md', options: [{ value: 'sm', label: L('Pequeno', 'Small', 'Pequeño') }, { value: 'md', label: L('Médio', 'Medium', 'Mediano') }, { value: 'lg', label: L('Grande', 'Large', 'Grande') }] },
    ],
    text: { id: 'label', label: L('Rótulo', 'Label', 'Etiqueta'), value: label() },
    render: (s) => stageWrap(formField({ id: 'cf-play', fieldClass: s.size !== 'md' ? `ds-field--${s.size}` : '', label: s.label || label() })),
    mount: (preview, s) => {
      const field = createCurrencyField(preview.querySelector('#cf-play'), { currency: s.currency, value: 180 });
      return () => field.destroy();
    },
    code: (s) => `<div class="ds-form-field">
  <label class="ds-form-field__label" for="valor">${s.label || label()}</label>
  <div class="ds-field${s.size !== 'md' ? ` ds-field--${s.size}` : ''}"><input class="ds-field__input" id="valor" name="valor" type="text"></div>
</div>

<script type="module">
  import { createCurrencyField } from 'https://lumeui.dev/v/1.11/lume.js';
  createCurrencyField(document.querySelector('#valor'), { currency: '${s.currency}', value: 180 });
</script>`,
  });

  const fields = [
    createCurrencyField(root.querySelector('#cf-brl'), { value: 1290.5 }),
    createCurrencyField(root.querySelector('#cf-eur'), { currency: 'EUR', value: 49.9 }),
    createCurrencyField(root.querySelector('#cf-jpy'), { currency: 'JPY', value: 3200 }),
    createCurrencyField(root.querySelector('#cf-limit'), { value: 150, min: 0, max: 1000 }),
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
