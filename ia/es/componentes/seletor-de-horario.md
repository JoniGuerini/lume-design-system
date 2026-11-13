# Selector de hora

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/seletor-de-horario

Para elegir horas y minutos. Escribe como prefieras o elige de la lista, que aparece en el formato del idioma.

En números: paso predeterminado: 15 min · formatos: 12 · 24 h · valor enviado: HH:MM · rol ARIA: combobox.

## Ejemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="inicio">Hora</label>
  <div class="ds-field"><input class="ds-field__input" id="inicio" name="inicio" type="text"></div>
</div>

<script type="module">
  import { createTimePicker } from 'https://lumeui.dev/v/0.26/lume.js';
  createTimePicker(document.querySelector('#inicio'), {
    step: 15,
  });
</script>
```

## Variantes

El paso define las opciones de la lista, pero se puede escribir cualquier minuto.

Cada 15 minutos `step: 15` — Lo predeterminado, bueno para compromisos.

Cada 30 minutos `step: 30` — Menos opciones, cuando la precisión importa menos.

Con límites `min · max` — Solo el horario comercial. Escribir fuera de él muestra el error.

Ya completado `value` — Siempre HH:MM en el código; la pantalla muestra el formato del idioma.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-15">Inicio</label>
<div class="ds-field"><input class="ds-field__input" id="tp-15" type="text" autocomplete="off" role="combobox" aria-autocomplete="none" aria-expanded="false" aria-controls="ds-timepicker-2" placeholder="--:--"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-label="Abrir lista de horas"><ds-icon name="clock"></ds-icon></button><input type="hidden" name="tp-15" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-30">Reunión</label>
<div class="ds-field"><input class="ds-field__input" id="tp-30" type="text" autocomplete="off" role="combobox" aria-autocomplete="none" aria-expanded="false" aria-controls="ds-timepicker-3" placeholder="--:--"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-label="Abrir lista de horas"><ds-icon name="clock"></ds-icon></button><input type="hidden" name="tp-30" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-limits">Atención</label>
<div class="ds-field"><input class="ds-field__input" id="tp-limits" type="text" autocomplete="off" role="combobox" aria-autocomplete="none" aria-expanded="false" aria-controls="ds-timepicker-4" placeholder="--:--"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-label="Abrir lista de horas"><ds-icon name="clock"></ds-icon></button><input type="hidden" name="tp-limits" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-filled">Recordatorio</label>
<div class="ds-field"><input class="ds-field__input" id="tp-filled" type="text" autocomplete="off" role="combobox" aria-autocomplete="none" aria-expanded="false" aria-controls="ds-timepicker-5" placeholder="--:--"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-label="Abrir lista de horas"><ds-icon name="clock"></ds-icon></button><input type="hidden" name="tp-filled" value="09:30"></div>
</div>
```

## Formato

Cada idioma lee la hora a su manera, y el formulario siempre recibe 24 horas.

Idioma — En pantalla — En el formulario — Português — 14:30 — 14:30 — English — 02:30 PM — 14:30 — Español — 14:30 — 14:30

## Estados

Los mismos del Campo de texto.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-a">Hora</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-a" type="text" placeholder="--:--"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-b">Hora</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-b" type="text" value="14:30"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-c">Hora</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-c" type="text" value="14:30"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-d">Hora</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-d" type="text" value="14:30"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-e">Hora</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-e" type="text" value="25:00" aria-invalid="true"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>

<p class="ds-form-field__error"><ds-icon name="alert-circle"></ds-icon><span>Usa una hora como 14:30.</span></p>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-f">Hora</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-f" type="text" value="14:30" disabled=""><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>
```

## Código

Funciona con `createForm`, como los otros campos.

```html
import { createTimePicker } from 'https://lumeui.dev/v/0.26/lume.js';

const picker = createTimePicker(document.querySelector('#inicio'), {
  value: '09:00',
  step: 30,
  min: '08:00',
  max: '18:00',
  onChange: (value) => console.log(value), // '09:30'
});
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

El foco siempre queda en el campo. Las flechas solo indican la opción de la lista, siguiendo el patrón ARIA de combobox.

- Abrir y moverse — ↓ ↑ — ↓ y ↑ abren la lista y se mueven entre las opciones; la opción se anuncia con aria-activedescendant.
- Moverse una hora — PageUp PageDown Home End — PageUp y PageDown saltan una hora; Home y End van al inicio y al fin de la lista.
- Elegir y cerrar — Enter Esc — Enter elige; Esc cierra sin cambiar nada.
- Botón fuera del Tab — El botón del reloj es un atajo para el ratón y el toque. Con el teclado, las flechas hacen lo mismo.

## Tokens usados

Además de los tokens del Campo de texto.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fondo de la lista | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | Contorno de la lista | #3E51664D | #FFFFFF29 |
| shadow.xl (`--ds-shadow-xl`) | Sombra de la lista | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| color.bg.hover (`--ds-color-bg-hover`) | Opción activa | #3E51660D | #FFFFFF0D |
| color.fg.brand (`--ds-color-fg-brand`) | Marca de la opción elegida | #3E5166 | #DAE0E8 |
| text.body-sm (`--ds-text-body-sm`) | Texto de las opciones | 14/22 · regular | 14/22 · regular |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** hora del día. Inicio de reunión, recordatorios y ventanas de atención.
- **Evita:** duración. “45 minutos” no es una hora. Usa el Campo numérico con la unidad al lado.
- **Consejo:** Zona horaria. Si la persona puede estar en otra zona horaria, di en la pista cuál vale.
