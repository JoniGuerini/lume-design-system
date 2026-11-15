# Selector de color

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/seletor-de-cor

Para elegir un color libre o uno de la paleta. Arrastra en el área, ajusta el matiz, escribe el hexadecimal o haz clic en una muestra.

En números: formas: 2 · valor enviado: #rrggbb · muestras: opcionales · rol ARIA: slider.

## Ejemplo

```html
<div class="ds-field"><input class="ds-field__input" id="marca" name="marca" type="text"></div>

<script type="module">
  import { createColorField } from 'https://lumeui.dev/v/1.6/lume.js';
  createColorField(document.querySelector('#marca'), {
    value: '#c97b63',
    swatches: [{ value: '#d95c0a', label: 'Melocotón' }, { value: '#2a8ed6', label: 'Azul' }, { value: '#cd5892', label: 'Rosa' }, …],
  });
</script>
```

## Variantes

El campo cabe en un formulario y abre el selector en un panel. El selector suelto queda siempre a la vista, para pantallas de configuración.

Campo de color `createColorField` — La muestra al inicio abre el selector; el texto se puede escribir.

Selector suelto `createColorPicker` — Con las muestras de la paleta abajo.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-field">Color de la marca</label>
<div class="ds-field"><button type="button" class="ds-color-field__swatch" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-colorfield-2-panel" aria-label="Elegir color, actual #C97B63"></button><input class="ds-field__input" id="cp-field" name="cp-field" type="text" value="#c97b63" autocomplete="off" spellcheck="false" maxlength="7" placeholder="#000000"></div>
</div>
```

## Estados

El campo tiene los estados del Campo de texto. Un hexadecimal que no es color muestra el error al salir del campo.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-a">Color de la marca</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-a" type="text" placeholder="#000000"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-b">Color de la marca</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-b" type="text" value="#C97B63"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-c">Color de la marca</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-c" type="text" value="#C97B63"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-d">Color de la marca</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-d" type="text" value="#C97B63"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-e">Color de la marca</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-e" type="text" value="#C97B6" aria-invalid="true"></div>
</div>

<p class="ds-form-field__error"><ds-icon name="alert-circle"></ds-icon><span>Usa un color en hexadecimal, como #C97B63.</span></p>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-f">Color de la marca</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-f" type="text" value="#C97B63" disabled=""></div>
</div>
```

## Código

El formulario recibe el hexadecimal del campo; funciona con `createForm`, como los otros campos.

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="marca">Color de la marca</label>
  <div class="ds-field"><input class="ds-field__input" id="marca" name="marca" type="text"></div>
</div>

<script type="module">
  import { createColorField } from 'https://lumeui.dev/v/1.6/lume.js';

  createColorField(document.querySelector('#marca'), {
    value: '#c97b63',
    swatches: [{ value: '#d95c0a', label: 'Melocotón' }, { value: '#2a8ed6', label: 'Azul' }, { value: '#cd5892', label: 'Rosa' }, …],
    onChange: (hex) => console.log(hex),
  });
</script>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Todo lo que se puede hacer con el ratón funciona con el teclado, y el hexadecimal es la salida para quien prefiere escribir.

- Área — ← → ↑ ↓ — Es un slider: lee “Saturación 60%, brillo 80%” en cada paso.
- Matiz — ← → Home End — Slider de 0° a 360°. Con Shift, avanza de 10 en 10.
- Muestras — Botones con el nombre del color y aria-pressed en el elegido; la marca cambia entre negro y blanco para tener contraste.
- Panel del campo — ↓ Esc — La muestra dice el color actual (“Elegir color, actual #C97B63”). ↓ abre, Esc cierra y devuelve el foco al campo.
- No dependas solo del color — Si el color elegido comunica algo, muestra también el nombre o el valor.

## Tokens usados

Los degradados del área y del matiz son los propios colores elegibles; el resto viene de los tokens.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Panel y anillo del tirador | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | Contorno del tirador y del panel | #3E51664D | #FFFFFF29 |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno del área, del matiz y de las muestras | #3E516624 | #FFFFFF0F |
| color.border.focus (`--ds-color-border-focus`) | Foco del tirador | #53657A | #C0CAD6 |
| radius.md (`--ds-radius-md`) | Área | 12 px | 12 px |
| radius.full (`--ds-radius-full`) | Tiradores, matiz y muestras | 9999 px | 9999 px |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** ofrece la paleta. Muestras con los colores de la marca evitan un tono casi igual al correcto.
- **Evita:** color para datos. Para etiquetar o clasificar, pocas opciones fijas (un Control segmentado o un Selector) funcionan mejor que un color libre.
- **Consejo:** Revisa el contraste. Si el color va en texto o fondo, avisa cuando no alcance 4,5:1.
