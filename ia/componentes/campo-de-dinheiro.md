# Campo de dinheiro

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/campo-de-dinheiro

Para valores em dinheiro. A pessoa digita do jeito que quiser (“1290”, “1.290,5”) e, ao sair do campo, o valor volta formatado no idioma, com o símbolo da moeda fixo no campo.

Em números: moedas: ISO 4217 · formato: Intl · envia: 1290.5 · tamanhos: 3.

## Exemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="valor">Valor da sessão</label>
  <div class="ds-field"><input class="ds-field__input" id="valor" name="valor" type="text"></div>
</div>

<script type="module">
  import { createCurrencyField } from 'https://lumeui.dev/v/1.11/lume.js';
  createCurrencyField(document.querySelector('#valor'), { currency: 'BRL', value: 180 });
</script>
```

## Moedas

O símbolo, o lado dele e as casas decimais vêm do `Intl`: duas casas no real, nenhuma no iene; em espanhol, o euro vai depois do valor.

Real `currency: 'BRL'` — O padrão. Valor de sessão, mensalidade, recibo.

Euro `currency: 'EUR'` — Mude o idioma do site para espanhol e o símbolo passa para o fim.

Iene `currency: 'JPY'` — Sem centavos: o valor arredonda para o inteiro.

Com limites `min · max` — Ao sair do campo, o valor volta para dentro deles: aqui, de 0 a 1.000.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-brl">Valor pago</label>
<div class="ds-field ds-currency"><span class="ds-field__affix" aria-hidden="true">R$</span><input class="ds-field__input" id="cf-brl" type="text" inputmode="decimal" autocomplete="off"><input type="hidden" name="cf-brl" value="1290.5"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-eur">Preço</label>
<div class="ds-field ds-currency"><span class="ds-field__affix" aria-hidden="true">€</span><input class="ds-field__input" id="cf-eur" type="text" inputmode="decimal" autocomplete="off"><input type="hidden" name="cf-eur" value="49.9"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-jpy">Total</label>
<div class="ds-field ds-currency"><span class="ds-field__affix" aria-hidden="true">¥</span><input class="ds-field__input" id="cf-jpy" type="text" inputmode="decimal" autocomplete="off"><input type="hidden" name="cf-jpy" value="3200"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-limit">Desconto</label>
<div class="ds-field ds-currency"><span class="ds-field__affix" aria-hidden="true">R$</span><input class="ds-field__input" id="cf-limit" type="text" inputmode="decimal" autocomplete="off"><input type="hidden" name="cf-limit" value="150"></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="cf-limit-hint">Até R$ 1.000,00</p></div>
</div>
```

## Código

O formulário recebe o número puro (1290.5), num input oculto com o `name` do campo. Texto que não é número volta ao último valor válido.

```html
import { createCurrencyField } from 'https://lumeui.dev/v/1.11/lume.js';

const valor = createCurrencyField(document.querySelector('#valor'), {
  currency: 'BRL',
  value: 180,
  min: 0,
  onChange: (value) => console.log(value), // 1290.5
});

// React
<Field label="Valor da sessão">
  <CurrencyField value={valor} onChange={setValor} currency="BRL" name="valor" />
</Field>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

É um campo de texto comum, com teclado decimal no celular.

- Teclado certo — `inputmode="decimal"` abre os números com a vírgula ou o ponto do idioma.
- O valor é lido inteiro — O símbolo fica fora do valor e escondido do leitor de tela. Se a moeda não for óbvia pela tela, diga no rótulo: “Valor em dólares”.
- Enter firma — Enter Tab — Enter formata o valor sem sair do campo; Tab formata e segue.

## Tokens usados

Além dos tokens do Campo de texto.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.fg.subtle (`--ds-color-fg-subtle`) | Símbolo da moeda | #53657A | #9C9792 |
| text.body-sm (`--ds-text-body-sm`) | Símbolo da moeda | 14/22 · regular | 14/22 · regular |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** valores que a pessoa digita. Preço, valor pago, mensalidade: números exatos que raramente se ajustam aos poucos.
- **Evite:** forçar a máscara. Nada de preencher os centavos enquanto a pessoa digita: ela digita livre e o formato vem ao sair.
- **Dica:** Ajustar com − e +?. Se o valor sobe de pouco em pouco (gorjeta, lance), use o Campo numérico com formato de moeda.
