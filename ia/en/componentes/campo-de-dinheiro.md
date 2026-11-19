# Money field

Lume section: Components. Page: https://lumeui.dev/#/componentes/campo-de-dinheiro

For money amounts. People type however they like (“1290”, “1,290.5”) and, on leaving the field, the value comes back formatted in the language, with the currency symbol fixed in the field.

In numbers: currencies: ISO 4217 · format: Intl · submits: 1290.5 · sizes: 3.

## Example

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="valor">Session fee</label>
  <div class="ds-field"><input class="ds-field__input" id="valor" name="valor" type="text"></div>
</div>

<script type="module">
  import { createCurrencyField } from 'https://lumeui.dev/v/1.13/lume.js';
  createCurrencyField(document.querySelector('#valor'), { currency: 'BRL', value: 180 });
</script>
```

## Currencies

The symbol, its side, and the decimal places come from `Intl`: two places for the real, none for the yen; in Spanish, the euro goes after the amount.

Real `currency: 'BRL'` — The default. Session fee, monthly fee, receipt.

Euro `currency: 'EUR'` — Switch the site to Spanish and the symbol moves to the end.

Yen `currency: 'JPY'` — No cents: the amount rounds to a whole number.

With limits `min · max` — On leaving the field, the value goes back within them: here, 0 to 1,000.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-brl">Amount paid</label>
<div class="ds-field ds-currency"><span class="ds-field__affix" aria-hidden="true">R$</span><input class="ds-field__input" id="cf-brl" type="text" inputmode="decimal" autocomplete="off"><input type="hidden" name="cf-brl" value="1290.5"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-eur">Price</label>
<div class="ds-field ds-currency"><span class="ds-field__affix" aria-hidden="true">€</span><input class="ds-field__input" id="cf-eur" type="text" inputmode="decimal" autocomplete="off"><input type="hidden" name="cf-eur" value="49.9"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-jpy">Total</label>
<div class="ds-field ds-currency"><span class="ds-field__affix" aria-hidden="true">¥</span><input class="ds-field__input" id="cf-jpy" type="text" inputmode="decimal" autocomplete="off"><input type="hidden" name="cf-jpy" value="3200"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-limit">Discount</label>
<div class="ds-field ds-currency"><span class="ds-field__affix" aria-hidden="true">R$</span><input class="ds-field__input" id="cf-limit" type="text" inputmode="decimal" autocomplete="off"><input type="hidden" name="cf-limit" value="150"></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="cf-limit-hint">Up to R$1,000.00</p></div>
</div>
```

## Code

The form receives the plain number (1290.5), in a hidden input with the field’s `name`. Text that isn’t a number goes back to the last valid value.

```html
import { createCurrencyField } from 'https://lumeui.dev/v/1.13/lume.js';

const valor = createCurrencyField(document.querySelector('#valor'), {
  currency: 'BRL',
  value: 180,
  min: 0,
  onChange: (value) => console.log(value), // 1290.5
});

// React
<Field label="Session fee">
  <CurrencyField value={valor} onChange={setValor} currency="BRL" name="valor" />
</Field>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

It’s a regular text field, with a decimal keypad on phones.

- The right keypad — `inputmode="decimal"` opens the numbers with the language’s comma or period.
- The value is read whole — The symbol stays out of the value and hidden from screen readers. If the currency isn’t obvious from the screen, say it in the label: “Amount in dollars”.
- Enter commits — Enter Tab — Enter formats the value without leaving the field; Tab formats and moves on.

## Tokens used

On top of the Text field tokens.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.fg.subtle (`--ds-color-fg-subtle`) | Currency symbol | #53657A | #9C9792 |
| text.body-sm (`--ds-text-body-sm`) | Currency symbol | 14/22 · regular | 14/22 · regular |

## Usage

When to use it and when to prefer something else.

- **Do:** amounts people type. Price, amount paid, monthly fee: exact numbers that are rarely nudged up or down.
- **Avoid:** forcing a mask. Don’t fill in the cents while people type: they type freely and the format comes on leaving.
- **Tip:** Adjust with − and +?. If the amount goes up little by little (tip, bid), use the Number field with a currency format.
