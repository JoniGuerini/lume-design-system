# Slider

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/slider

Para escolher um valor ou uma faixa quando a posição importa mais que o número exato, como volume, brilho ou uma faixa de preço.

Em números: modos: 2 · base: range · polegar: 18 px · dependências: 0.

## Exemplo

```html
<div class="ds-form-field">
  <div class="ds-slider__head">
    <label class="ds-form-field__label" for="volume">Volume</label>
    <output class="ds-slider__value"></output>
  </div>
  <div class="ds-slider">
    <input class="ds-slider__input" id="volume" name="volume" type="range" min="0" max="100" step="1" value="50">
  </div>
</div>

<script type="module">
  import { createSlider } from 'https://lumeui.dev/v/1.4/lume.js';
  createSlider(document.querySelector('.ds-slider'), {
    format: (value) => `${value}%`,
  });
</script>
```

## Variantes

O valor fica ao lado do rótulo, sempre visível. Marcas ajudam quando alguns pontos têm nome.

Um valor `ds-slider` — A parte preenchida mostra quanto está escolhido.

Faixa `data-range` — Dois polegares que não se cruzam, cada um com seu nome para o leitor de tela.

Com marcas `marks` — Pontos com nome abaixo do trilho.

Com passo `step` — O polegar anda de 10 em 10, e o teclado também.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-one">Brilho</label>
<output class="ds-slider__value" for="sl-one">70%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-one" type="range" min="0" max="100" step="1" value="70" aria-valuetext="70%"></div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<span class="ds-form-field__label" id="sl-range-label">Faixa de preço</span>
<output class="ds-slider__value">R$&nbsp;200 – R$&nbsp;800</output>
</div>
<div class="ds-slider" role="group" aria-labelledby="sl-range-label" data-demo="" data-range="">
<input class="ds-slider__input" type="range" min="0" max="1000" step="50" value="200" aria-label="Mínimo" aria-valuetext="R$&nbsp;200">
<input class="ds-slider__input" type="range" min="0" max="1000" step="50" value="800" aria-label="Máximo" aria-valuetext="R$&nbsp;800">
</div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-marks">Qualidade</label>
<output class="ds-slider__value" for="sl-marks">Média</output>
</div>
<div class="ds-slider" data-demo="" data-marks=""><input class="ds-slider__input" id="sl-marks" type="range" min="0" max="100" step="25" value="50" aria-valuetext="Média"><div class="ds-slider__marks" aria-hidden="true"><span class="ds-slider__mark">Baixa</span><span class="ds-slider__mark">Média</span><span class="ds-slider__mark">Alta</span></div></div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-step">Opacidade</label>
<output class="ds-slider__value" for="sl-step">60%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-step" type="range" min="0" max="100" step="10" value="60" aria-valuetext="60%"></div>
</div>
```

## Estados

Hover e foco podem ser forçados com `data-state` no `.ds-slider`.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-s-a">Volume</label>
<output class="ds-slider__value" for="sl-s-a">40%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-s-a" type="range" min="0" max="100" step="1" value="40" aria-valuetext="40%"></div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-s-b">Volume</label>
<output class="ds-slider__value" for="sl-s-b">40%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-s-b" type="range" min="0" max="100" step="1" value="40" aria-valuetext="40%"></div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-s-c">Volume</label>
<output class="ds-slider__value" for="sl-s-c">40%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-s-c" type="range" min="0" max="100" step="1" value="40" aria-valuetext="40%"></div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-s-d">Volume</label>
<output class="ds-slider__value" for="sl-s-d">40%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-s-d" type="range" min="0" max="100" step="1" value="40" disabled="" aria-valuetext="40%"></div>
</div>
```

## Código

`onInput` acompanha o arraste; `onChange` avisa quando a pessoa solta.

```html
import { createSlider } from 'https://lumeui.dev/v/1.4/lume.js';

const volume = createSlider(document.querySelector('.ds-slider'), {
  format: (value) => `${value}%`,
  marks: [{ value: 0, label: '0%' }, { value: 100, label: '100%' }],
  onChange: (value) => salvar(value),
});
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

O input nativo já é anunciado como controle deslizante, com o valor atual.

- Ajustar — ← → PageUp PageDown — As setas andam um passo; PageUp e PageDown, passos maiores.
- Ir aos limites — Home End — Home vai ao mínimo e End, ao máximo.
- Valor com sentido — O aria-valuetext anuncia o texto de format, como “R$ 800”, e não só “800”.
- Faixa com dois nomes — Cada polegar é um input com seu aria-label, dentro de um grupo com o rótulo da faixa.
- Alternativa exata — Se o número exato importa, ofereça também o Campo numérico: arrastar com precisão é difícil para muita gente.

## Tokens usados

Tudo o que o slider consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.border.field (`--ds-color-border-field`) | Trilho | #3E5166AD | #FFFFFF61 |
| color.brand.solid (`--ds-color-brand-solid`) | Parte preenchida e contorno do polegar | #3E5166 | #C0CAD6 |
| color.bg.raised (`--ds-color-bg-raised`) | Miolo do polegar | #FFFFFF | #2C2A27 |
| color.border.focus (`--ds-color-border-focus`) | Anel de foco | #53657A | #C0CAD6 |
| color.fg.muted (`--ds-color-fg-muted`) | Valor | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Marcas | #5C6C7F | #9C9792 |
| radius.full (`--ds-radius-full`) | Trilho e polegar | 9999 px | 9999 px |
| opacity.disabled (`--ds-opacity-disabled`) | Desativado | 0.44 | 0.44 |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** ajustes visíveis. Volume, brilho e zoom, em que o resultado aparece enquanto se arrasta.
- **Evite:** número exato. Para escolher 1.250 num intervalo de 0 a 10.000, o Campo numérico é melhor.
- **Dica:** Sempre mostre o valor. Sem o número ao lado, a pessoa só adivinha o que escolheu.
