# Campo de dinero

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/campo-de-dinheiro

Para valores en dinero. La persona escribe como quiera (“1290”, “1.290,5”) y, al salir del campo, el valor vuelve formateado en el idioma, con el símbolo de la moneda fijo en el campo.

En números: monedas: ISO 4217 · formato: Intl · envía: 1290.5 · tamaños: 3.

## Ejemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="valor">Valor de la sesión</label>
  <div class="ds-field"><input class="ds-field__input" id="valor" name="valor" type="text"></div>
</div>

<script type="module">
  import { createCurrencyField } from 'https://lumeui.dev/v/1.14/lume.js';
  createCurrencyField(document.querySelector('#valor'), { currency: 'BRL', value: 180 });
</script>
```

## Monedas

El símbolo, su lado y los decimales vienen de `Intl`: dos decimales en el real, ninguno en el yen; en español, el euro va después del valor.

Real `currency: 'BRL'` — El predeterminado. Valor de sesión, mensualidad, recibo.

Euro `currency: 'EUR'` — Con el sitio en español, el símbolo va al final.

Yen `currency: 'JPY'` — Sin centavos: el valor se redondea al entero.

Con límites `min · max` — Al salir del campo, el valor vuelve dentro de ellos: aquí, de 0 a 1.000.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-brl">Valor pagado</label>
<div class="ds-field ds-currency ds-currency--after"><input class="ds-field__input" id="cf-brl" type="text" inputmode="decimal" autocomplete="off"><span class="ds-field__affix" aria-hidden="true">R$</span><input type="hidden" name="cf-brl" value="1290.5"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-eur">Precio</label>
<div class="ds-field ds-currency ds-currency--after"><input class="ds-field__input" id="cf-eur" type="text" inputmode="decimal" autocomplete="off"><span class="ds-field__affix" aria-hidden="true">€</span><input type="hidden" name="cf-eur" value="49.9"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-jpy">Total</label>
<div class="ds-field ds-currency ds-currency--after"><input class="ds-field__input" id="cf-jpy" type="text" inputmode="decimal" autocomplete="off"><span class="ds-field__affix" aria-hidden="true">¥</span><input type="hidden" name="cf-jpy" value="3200"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-limit">Descuento</label>
<div class="ds-field ds-currency ds-currency--after"><input class="ds-field__input" id="cf-limit" type="text" inputmode="decimal" autocomplete="off"><span class="ds-field__affix" aria-hidden="true">R$</span><input type="hidden" name="cf-limit" value="150"></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="cf-limit-hint">Hasta R$ 1.000,00</p></div>
</div>
```

## Código

El formulario recibe el número puro (1290.5), en un input oculto con el `name` del campo. El texto que no es número vuelve al último valor válido.

```html
import { createCurrencyField } from 'https://lumeui.dev/v/1.14/lume.js';

const valor = createCurrencyField(document.querySelector('#valor'), {
  currency: 'BRL',
  value: 180,
  min: 0,
  onChange: (value) => console.log(value), // 1290.5
});

// React
<Field label="Valor de la sesión">
  <CurrencyField value={valor} onChange={setValor} currency="BRL" name="valor" />
</Field>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Es un campo de texto común, con teclado decimal en el celular.

- El teclado correcto — `inputmode="decimal"` abre los números con la coma o el punto del idioma.
- El valor se lee entero — El símbolo queda fuera del valor y oculto para el lector de pantalla. Si la moneda no es obvia por la pantalla, dilo en la etiqueta: “Valor en dólares”.
- Enter confirma — Enter Tab — Enter formatea el valor sin salir del campo; Tab formatea y sigue.

## Tokens usados

Además de los tokens del Campo de texto.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.fg.subtle (`--ds-color-fg-subtle`) | Símbolo de la moneda | #53657A | #9C9792 |
| text.body-sm (`--ds-text-body-sm`) | Símbolo de la moneda | 14/22 · regular | 14/22 · regular |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** valores que la persona escribe. Precio, valor pagado, mensualidad: números exactos que rara vez se ajustan poco a poco.
- **Evita:** forzar la máscara. Nada de completar los centavos mientras la persona escribe: escribe libre y el formato llega al salir.
- **Consejo:** ¿Ajustar con − y +?. Si el valor sube de a poco (propina, puja), usa el Campo numérico con formato de moneda.
