# Campo numérico

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/campo-numerico

Para um número exato, quando digitar é tão útil quanto ajustar aos poucos. Respeita limites, passo e o formato do idioma.

Em números: tamanhos: 3 · formatos: Intl · atalhos: 6 · papel ARIA: spinbutton.

## Exemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="quantidade">Quantidade</label>
  <div class="ds-field ds-number"><input class="ds-field__input" id="quantidade" name="quantidade" type="text"></div>
</div>

<script type="module">
  import { createNumberField } from 'https://lumeui.dev/v/0.29/lume.js';
  createNumberField(document.querySelector('#quantidade'), {
    value: 10,
    step: 1,
    min: 0,
    max: 100,
  });
</script>
```

## Variantes

O formato usa as opções de `Intl.NumberFormat`: moeda, porcentagem ou unidade, sempre no idioma atual.

Inteiro com limites `min · max` — O botão no limite fica desativado, e o valor digitado volta para dentro dele ao sair do campo.

Moeda `style: 'currency'` — Passo de 10 centavos, sempre com duas casas.

Porcentagem `style: 'percent'` — O valor é a fração (0,15), e a tela mostra 15%.

Unidade `style: 'unit'` — A unidade também vem do idioma, sem texto fixo.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="nf-int">Convidados</label>
<div class="ds-field ds-number"><button type="button" class="ds-number__btn" data-delta="-1" aria-label="Diminuir"><ds-icon name="minus"></ds-icon></button><input class="ds-field__input" id="nf-int" type="text" role="spinbutton" inputmode="numeric" autocomplete="off" aria-valuenow="2" aria-valuemin="0" aria-valuemax="20"><button type="button" class="ds-number__btn" data-delta="1" aria-label="Aumentar"><ds-icon name="plus"></ds-icon></button><input type="hidden" name="nf-int" value="2"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="nf-money">Preço</label>
<div class="ds-field ds-number"><button type="button" class="ds-number__btn" data-delta="-1" aria-label="Diminuir"><ds-icon name="minus"></ds-icon></button><input class="ds-field__input" id="nf-money" type="text" role="spinbutton" inputmode="decimal" autocomplete="off" aria-valuenow="49.9" aria-valuetext="R$&nbsp;49,90" aria-valuemin="0"><button type="button" class="ds-number__btn" data-delta="1" aria-label="Aumentar"><ds-icon name="plus"></ds-icon></button><input type="hidden" name="nf-money" value="49.9"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="nf-percent">Desconto</label>
<div class="ds-field ds-number"><button type="button" class="ds-number__btn" data-delta="-1" aria-label="Diminuir"><ds-icon name="minus"></ds-icon></button><input class="ds-field__input" id="nf-percent" type="text" role="spinbutton" inputmode="decimal" autocomplete="off" aria-valuenow="0.15" aria-valuetext="15%" aria-valuemin="0" aria-valuemax="1"><button type="button" class="ds-number__btn" data-delta="1" aria-label="Aumentar"><ds-icon name="plus"></ds-icon></button><input type="hidden" name="nf-percent" value="0.15"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="nf-unit">Duração</label>
<div class="ds-field ds-number"><button type="button" class="ds-number__btn" data-delta="-1" aria-label="Diminuir"><ds-icon name="minus"></ds-icon></button><input class="ds-field__input" id="nf-unit" type="text" role="spinbutton" inputmode="decimal" autocomplete="off" aria-valuenow="45" aria-valuetext="45 min" aria-valuemin="5"><button type="button" class="ds-number__btn" data-delta="1" aria-label="Aumentar"><ds-icon name="plus"></ds-icon></button><input type="hidden" name="nf-unit" value="45"></div>
</div>
```

## Estados

Os mesmos do Campo de texto, mais os botões desativados nos limites.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<span class="ds-form-field__label">Quantidade</span>
<div class="ds-field ds-number"><span class="ds-number__btn"><ds-icon name="minus"></ds-icon></span><input class="ds-field__input" type="text" value="" aria-label="Quantidade"><span class="ds-number__btn"><ds-icon name="plus"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Quantidade</span>
<div class="ds-field ds-number"><span class="ds-number__btn"><ds-icon name="minus"></ds-icon></span><input class="ds-field__input" type="text" value="4" aria-label="Quantidade"><span class="ds-number__btn"><ds-icon name="plus"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Quantidade</span>
<div class="ds-field ds-number"><span class="ds-number__btn"><ds-icon name="minus"></ds-icon></span><input class="ds-field__input" type="text" value="0" aria-label="Quantidade"><span class="ds-number__btn"><ds-icon name="plus"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Quantidade</span>
<div class="ds-field ds-number"><span class="ds-number__btn"><ds-icon name="minus"></ds-icon></span><input class="ds-field__input" type="text" value="4" aria-label="Quantidade" disabled=""><span class="ds-number__btn"><ds-icon name="plus"></ds-icon></span></div>
</div>
```

## Código

O formulário recebe o número puro, num input oculto com o `name` do campo.

```html
import { createNumberField } from 'https://lumeui.dev/v/0.29/lume.js';

const preco = createNumberField(document.querySelector('#preco'), {
  value: 49.9,
  min: 0,
  step: 0.1,
  format: { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 },
  onChange: (value) => console.log(value), // 50
});

// no envio: preco=49.9
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

O campo é um spinbutton: anuncia o valor e os limites.

- Um passo — ↑ ↓ — ↑ e ↓ somam ou tiram um passo.
- Dez passos — PageUp PageDown — PageUp e PageDown andam dez passos.
- Limites — Home End — Home vai ao mínimo e End, ao máximo.
- Botões fora do Tab — − e + são para o mouse e o toque, com área de 30 px. Têm nome para o leitor de tela.
- Valor com formato — Com moeda ou unidade, aria-valuetext anuncia “R$ 49,90” em vez do número puro.

## Tokens usados

Além dos tokens do Campo de texto.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.fg.muted (`--ds-color-fg-muted`) | Ícones − e + | #46586E | #CEC8C1 |
| color.bg.hover (`--ds-color-bg-hover`) | Botão no hover | #3E51660D | #FFFFFF0D |
| color.fg.disabled (`--ds-color-fg-disabled`) | Botão no limite | #93A0B0 | #605D59 |
| radius.sm (`--ds-radius-sm`) | Cantos dos botões | 8 px | 8 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** quantidades. Itens no carrinho, convidados, preço, porcentagem: números que se somam ou comparam.
- **Evite:** códigos. CEP, telefone e cartão são texto com dígitos. Ninguém soma 1 a um CEP. Use o Campo de texto.
- **Dica:** Sem precisão? Slider. Se a posição importa mais que o número exato, como o volume, use o Slider.
