# Slider

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/slider

Para elegir un valor o un rango cuando la posición importa más que el número exacto, como volumen, brillo o un rango de precios.

En números: modos: 2 · base: range · pulgar: 18 px · dependencias: 0.

## Ejemplo

```html
<div class="ds-form-field">
  <div class="ds-slider__head">
    <label class="ds-form-field__label" for="volume">Volumen</label>
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

El valor queda junto a la etiqueta, siempre visible. Las marcas ayudan cuando algunos puntos tienen nombre.

Un valor `ds-slider` — La parte rellena muestra cuánto está elegido.

Rango `data-range` — Dos pulgares que no se cruzan, cada uno con su nombre para el lector de pantalla.

Con marcas `marks` — Puntos con nombre debajo del riel.

Con paso `step` — El pulgar avanza de 10 en 10, y el teclado también.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-one">Brillo</label>
<output class="ds-slider__value" for="sl-one">70&nbsp;%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-one" type="range" min="0" max="100" step="1" value="70" aria-valuetext="70&nbsp;%"></div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<span class="ds-form-field__label" id="sl-range-label">Rango de precios</span>
<output class="ds-slider__value">200&nbsp;R$ – 800&nbsp;R$</output>
</div>
<div class="ds-slider" role="group" aria-labelledby="sl-range-label" data-demo="" data-range="">
<input class="ds-slider__input" type="range" min="0" max="1000" step="50" value="200" aria-label="Mínimo" aria-valuetext="200&nbsp;R$">
<input class="ds-slider__input" type="range" min="0" max="1000" step="50" value="800" aria-label="Máximo" aria-valuetext="800&nbsp;R$">
</div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-marks">Calidad</label>
<output class="ds-slider__value" for="sl-marks">Media</output>
</div>
<div class="ds-slider" data-demo="" data-marks=""><input class="ds-slider__input" id="sl-marks" type="range" min="0" max="100" step="25" value="50" aria-valuetext="Media"><div class="ds-slider__marks" aria-hidden="true"><span class="ds-slider__mark">Baja</span><span class="ds-slider__mark">Media</span><span class="ds-slider__mark">Alta</span></div></div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-step">Opacidad</label>
<output class="ds-slider__value" for="sl-step">60&nbsp;%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-step" type="range" min="0" max="100" step="10" value="60" aria-valuetext="60&nbsp;%"></div>
</div>
```

## Estados

Hover y foco se pueden forzar con `data-state` en `.ds-slider`.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-s-a">Volumen</label>
<output class="ds-slider__value" for="sl-s-a">40&nbsp;%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-s-a" type="range" min="0" max="100" step="1" value="40" aria-valuetext="40&nbsp;%"></div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-s-b">Volumen</label>
<output class="ds-slider__value" for="sl-s-b">40&nbsp;%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-s-b" type="range" min="0" max="100" step="1" value="40" aria-valuetext="40&nbsp;%"></div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-s-c">Volumen</label>
<output class="ds-slider__value" for="sl-s-c">40&nbsp;%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-s-c" type="range" min="0" max="100" step="1" value="40" aria-valuetext="40&nbsp;%"></div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-s-d">Volumen</label>
<output class="ds-slider__value" for="sl-s-d">40&nbsp;%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-s-d" type="range" min="0" max="100" step="1" value="40" disabled="" aria-valuetext="40&nbsp;%"></div>
</div>
```

## Código

`onInput` sigue el arrastre; `onChange` avisa cuando la persona suelta.

```html
import { createSlider } from 'https://lumeui.dev/v/1.4/lume.js';

const volume = createSlider(document.querySelector('.ds-slider'), {
  format: (value) => `${value}%`,
  marks: [{ value: 0, label: '0%' }, { value: 100, label: '100%' }],
  onChange: (value) => salvar(value),
});
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

El input nativo ya se anuncia como control deslizante, con el valor actual.

- Ajustar — ← → PageUp PageDown — Las flechas avanzan un paso; PageUp y PageDown, pasos mayores.
- Ir a los límites — Home End — Home va al mínimo y End, al máximo.
- Valor con sentido — aria-valuetext anuncia el texto de format, como “800 $”, y no solo “800”.
- Rango con dos nombres — Cada pulgar es un input con su aria-label, dentro de un grupo con la etiqueta del rango.
- Alternativa exacta — Si el número exacto importa, ofrece también el Campo numérico: arrastrar con precisión es difícil para mucha gente.

## Tokens usados

Todo lo que consume el slider.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.border.field (`--ds-color-border-field`) | Riel | #3E5166AD | #FFFFFF61 |
| color.brand.solid (`--ds-color-brand-solid`) | Parte rellena y contorno del pulgar | #3E5166 | #C0CAD6 |
| color.bg.raised (`--ds-color-bg-raised`) | Centro del pulgar | #FFFFFF | #2C2A27 |
| color.border.focus (`--ds-color-border-focus`) | Anillo de foco | #53657A | #C0CAD6 |
| color.fg.muted (`--ds-color-fg-muted`) | Valor | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Marcas | #5C6C7F | #9C9792 |
| radius.full (`--ds-radius-full`) | Riel y pulgar | 9999 px | 9999 px |
| opacity.disabled (`--ds-opacity-disabled`) | Desactivado | 0.44 | 0.44 |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** ajustes visibles. Volumen, brillo y zoom, donde el resultado aparece mientras se arrastra.
- **Evita:** números exactos. Para elegir 1.250 en un intervalo de 0 a 10.000, el Campo numérico es mejor.
- **Consejo:** Muestra siempre el valor. Sin el número al lado, la persona solo adivina lo que eligió.
