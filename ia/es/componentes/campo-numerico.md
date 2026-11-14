# Campo numérico

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/campo-numerico

Para un número exacto, cuando escribir es tan útil como ajustar poco a poco. Respeta límites, paso y el formato del idioma.

En números: tamaños: 3 · formatos: Intl · atajos: 6 · rol ARIA: spinbutton.

## Ejemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="quantidade">Cantidad</label>
  <div class="ds-field ds-number"><input class="ds-field__input" id="quantidade" name="quantidade" type="text"></div>
</div>

<script type="module">
  import { createNumberField } from 'https://lumeui.dev/v/0.40/lume.js';
  createNumberField(document.querySelector('#quantidade'), {
    value: 10,
    step: 1,
    min: 0,
    max: 100,
  });
</script>
```

## Variantes

El formato usa las opciones de `Intl.NumberFormat`: moneda, porcentaje o unidad, siempre en el idioma actual.

Entero con límites `min · max` — El botón en el límite queda desactivado, y el valor escrito vuelve dentro de él al salir del campo.

Moneda `style: 'currency'` — Paso de 10 centavos, siempre con dos decimales.

Porcentaje `style: 'percent'` — El valor es la fracción (0,15), y la pantalla muestra 15%.

Unidad `style: 'unit'` — La unidad también viene del idioma, sin texto fijo.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="nf-int">Invitados</label>
<div class="ds-field ds-number"><button type="button" class="ds-number__btn" data-delta="-1" aria-label="Disminuir"><ds-icon name="minus"></ds-icon></button><input class="ds-field__input" id="nf-int" type="text" role="spinbutton" inputmode="numeric" autocomplete="off" aria-valuenow="2" aria-valuemin="0" aria-valuemax="20"><button type="button" class="ds-number__btn" data-delta="1" aria-label="Aumentar"><ds-icon name="plus"></ds-icon></button><input type="hidden" name="nf-int" value="2"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="nf-money">Precio</label>
<div class="ds-field ds-number"><button type="button" class="ds-number__btn" data-delta="-1" aria-label="Disminuir"><ds-icon name="minus"></ds-icon></button><input class="ds-field__input" id="nf-money" type="text" role="spinbutton" inputmode="decimal" autocomplete="off" aria-valuenow="49.9" aria-valuetext="49,90&nbsp;R$" aria-valuemin="0"><button type="button" class="ds-number__btn" data-delta="1" aria-label="Aumentar"><ds-icon name="plus"></ds-icon></button><input type="hidden" name="nf-money" value="49.9"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="nf-percent">Descuento</label>
<div class="ds-field ds-number"><button type="button" class="ds-number__btn" data-delta="-1" aria-label="Disminuir"><ds-icon name="minus"></ds-icon></button><input class="ds-field__input" id="nf-percent" type="text" role="spinbutton" inputmode="decimal" autocomplete="off" aria-valuenow="0.15" aria-valuetext="15&nbsp;%" aria-valuemin="0" aria-valuemax="1"><button type="button" class="ds-number__btn" data-delta="1" aria-label="Aumentar"><ds-icon name="plus"></ds-icon></button><input type="hidden" name="nf-percent" value="0.15"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="nf-unit">Duración</label>
<div class="ds-field ds-number"><button type="button" class="ds-number__btn" data-delta="-1" aria-label="Disminuir"><ds-icon name="minus"></ds-icon></button><input class="ds-field__input" id="nf-unit" type="text" role="spinbutton" inputmode="decimal" autocomplete="off" aria-valuenow="45" aria-valuetext="45 min" aria-valuemin="5"><button type="button" class="ds-number__btn" data-delta="1" aria-label="Aumentar"><ds-icon name="plus"></ds-icon></button><input type="hidden" name="nf-unit" value="45"></div>
</div>
```

## Estados

Los mismos del Campo de texto, más los botones desactivados en los límites.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<span class="ds-form-field__label">Cantidad</span>
<div class="ds-field ds-number"><span class="ds-number__btn"><ds-icon name="minus"></ds-icon></span><input class="ds-field__input" type="text" value="" aria-label="Cantidad"><span class="ds-number__btn"><ds-icon name="plus"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Cantidad</span>
<div class="ds-field ds-number"><span class="ds-number__btn"><ds-icon name="minus"></ds-icon></span><input class="ds-field__input" type="text" value="4" aria-label="Cantidad"><span class="ds-number__btn"><ds-icon name="plus"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Cantidad</span>
<div class="ds-field ds-number"><span class="ds-number__btn"><ds-icon name="minus"></ds-icon></span><input class="ds-field__input" type="text" value="0" aria-label="Cantidad"><span class="ds-number__btn"><ds-icon name="plus"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Cantidad</span>
<div class="ds-field ds-number"><span class="ds-number__btn"><ds-icon name="minus"></ds-icon></span><input class="ds-field__input" type="text" value="4" aria-label="Cantidad" disabled=""><span class="ds-number__btn"><ds-icon name="plus"></ds-icon></span></div>
</div>
```

## Código

El formulario recibe el número puro, en un input oculto con el `name` del campo.

```html
import { createNumberField } from 'https://lumeui.dev/v/0.40/lume.js';

const preco = createNumberField(document.querySelector('#preco'), {
  value: 49.9,
  min: 0,
  step: 0.1,
  format: { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 },
  onChange: (value) => console.log(value), // 50
});

// al enviar: preco=49.9
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

El campo es un spinbutton: anuncia el valor y los límites.

- Un paso — ↑ ↓ — ↑ y ↓ suman o quitan un paso.
- Diez pasos — PageUp PageDown — PageUp y PageDown avanzan diez pasos.
- Límites — Home End — Home va al mínimo y End, al máximo.
- Botones fuera del Tab — − y + son para el ratón y el toque, con un área de 30 px. Tienen nombre para el lector de pantalla.
- Valor con formato — Con moneda o unidad, aria-valuetext anuncia “49,90 $” en vez del número puro.

## Tokens usados

Además de los tokens del Campo de texto.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.fg.muted (`--ds-color-fg-muted`) | Íconos − y + | #46586E | #CEC8C1 |
| color.bg.hover (`--ds-color-bg-hover`) | Botón en hover | #3E51660D | #FFFFFF0D |
| color.fg.disabled (`--ds-color-fg-disabled`) | Botón en el límite | #93A0B0 | #605D59 |
| radius.sm (`--ds-radius-sm`) | Esquinas de los botones | 8 px | 8 px |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** cantidades. Artículos en el carrito, invitados, precio, porcentaje: números que se suman o comparan.
- **Evita:** códigos. Código postal, teléfono y tarjeta son texto con dígitos. Nadie suma 1 a un código postal. Usa el Campo de texto.
- **Consejo:** ¿Sin precisión? Slider. Si la posición importa más que el número exacto, como el volumen, usa el Slider.
