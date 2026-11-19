# Selector de fecha

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/seletor-de-data

Para elegir un día o un período. Se puede escribir la fecha o abrir el calendario, y las dos formas llevan al mismo valor.

En números: modos: 2 · idiomas: 3 · valor enviado: ISO · rol ARIA: dialog.

## Ejemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="entrega">Fecha de entrega</label>
  <div class="ds-field"><input class="ds-field__input" id="entrega" name="entrega" type="text"></div>
</div>

<script type="module">
  import { createDatePicker } from 'https://lumeui.dev/v/1.14/lume.js';
  createDatePicker(document.querySelector('#entrega'), {
  });
</script>
```

## Variantes

Un día es lo predeterminado. Con `mode: 'range'`, el primer clic marca el inicio y el segundo, el fin.

Un día `mode: 'single'` — Elegir un día cierra el panel.

Período `mode: 'range'` — Dos meses lado a lado cuando hay espacio, con vista previa al pasar el cursor.

Con límites `min · max` — Solo los próximos 30 días. Los demás quedan desactivados, y escribir fuera del límite muestra el error.

Ya completado `value` — Aparece en el formato del idioma actual y el panel se abre en ese mes.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-one">Fecha de entrega</label>
<div class="ds-field"><input class="ds-field__input" id="dp-one" type="text" autocomplete="off" placeholder="dd/mm/aaaa"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-datepicker-4" aria-label="Abrir calendario"><ds-icon name="calendar"></ds-icon></button><input type="hidden" name="dp-one" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-range">Período</label>
<div class="ds-field"><input class="ds-field__input" id="dp-range" type="text" autocomplete="off" placeholder="dd/mm/aaaa – dd/mm/aaaa"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-datepicker-5" aria-label="Abrir calendario"><ds-icon name="calendar"></ds-icon></button><input type="hidden" name="dp-range" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-limits">Programar para</label>
<div class="ds-field"><input class="ds-field__input" id="dp-limits" type="text" autocomplete="off" placeholder="dd/mm/aaaa"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-datepicker-6" aria-label="Abrir calendario"><ds-icon name="calendar"></ds-icon></button><input type="hidden" name="dp-limits" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-filled">Fecha de entrega</label>
<div class="ds-field"><input class="ds-field__input" id="dp-filled" type="text" autocomplete="off" placeholder="dd/mm/aaaa"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-datepicker-7" aria-label="Abrir calendario"><ds-icon name="calendar"></ds-icon></button><input type="hidden" name="dp-filled" value="2026-11-22"></div>
</div>
```

## Formato

El campo muestra la fecha como la escribe cada idioma, pero el formulario siempre recibe el mismo formato, para que el servidor no tenga que adivinar.

Idioma — En pantalla — En el formulario — Português — 08/11/2026 — 2026-11-08 — English — 11/08/2026 — 2026-11-08 — Español — 08/11/2026 — 2026-11-08

## Estados

El campo sigue los estados del Campo de texto. Hover y foco se pueden forzar con `data-state`.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-a">Fecha de entrega</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-a" type="text" placeholder="dd/mm/aaaa"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-b">Fecha de entrega</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-b" type="text" value="28/11/2026"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-c">Fecha de entrega</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-c" type="text" value="28/11/2026"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-d">Fecha de entrega</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-d" type="text" value="28/11/2026"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-e">Fecha de entrega</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-e" type="text" value="31/02/2026" aria-invalid="true"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>

<p class="ds-form-field__error"><ds-icon name="alert-circle"></ds-icon><span>Usa una fecha como 28/11/2026.</span></p>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-f">Fecha de entrega</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-f" type="text" value="28/11/2026" disabled=""><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>
```

## En formularios

Funciona con `createForm`: `required` y los errores de formato aparecen como en los otros campos. El valor en ISO va en un input oculto, con el `name` del campo.

```html
import { createDatePicker } from 'https://lumeui.dev/v/1.14/lume.js';

const picker = createDatePicker(document.querySelector('#entrega'), {
  min: new Date(),
  onChange: (value) => console.log(value), // Date
});

// al enviar: entrega=2026-11-08
// período: viagem=2026-11-08/2026-11-15
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Escribir siempre es posible, y el calendario funciona entero con el teclado.

- Abrir — ↓ — ↓ en el campo abre el calendario, con el foco en el día elegido o en hoy.
- Moverse por los días — ← → ↑ ↓ Home End — Las flechas se mueven un día o una semana; Home y End van al inicio y al fin de la semana.
- Cambiar de mes y de año — PageUp PageDown Shift — PageUp y PageDown cambian de mes; con Shift, de año. Para una fecha lejana, escribir es más rápido.
- Cerrar — Esc — Esc cierra y devuelve el foco al botón del calendario.
- Días con nombre completo — Cada día se anuncia con día de la semana, número, mes y año. Hoy se marca con aria-current.
- Error que explica — Una fecha que no existe muestra un ejemplo del formato correcto, vinculado al campo por aria-describedby.

## Tokens usados

Además de los tokens del Campo de texto.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fondo del panel | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | Contorno del panel | #3E51664D | #FFFFFF29 |
| shadow.xl (`--ds-shadow-xl`) | Sombra del panel | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| color.brand.solid (`--ds-color-brand-solid`) | Día elegido | #3E5166 | #C0CAD6 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Número en el día elegido | #F8FAFD | #1D2734 |
| color.brand.subtle (`--ds-color-brand-subtle`) | Medio del período | #EEF2F6 | #C0CAD624 |
| color.bg.hover (`--ds-color-bg-hover`) | Día en hover | #3E51660D | #FFFFFF0D |
| color.fg.disabled (`--ds-color-fg-disabled`) | Día fuera del límite | #93A0B0 | #605D59 |
| radius.lg (`--ds-radius-lg`) | Esquinas del panel | 16 px | 16 px |
| radius.sm (`--ds-radius-sm`) | Esquinas de los días | 8 px | 8 px |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** fechas cercanas. Citas, plazos y reservas, donde ver el mes ayuda a elegir.
- **Evita:** fecha de nacimiento. Nadie quiere retroceder décadas en el calendario. Usa un campo de texto con el formato en la pista.
- **Consejo:** Límites visibles. Si hay un límite, dilo en la pista. Los días desactivados, por sí solos, no explican el motivo.
