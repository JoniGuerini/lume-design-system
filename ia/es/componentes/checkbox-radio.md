# Checkbox y radio

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/checkbox-radio

Checkbox para marcar elementos independientes; radio para elegir uno solo entre pocas opciones. Los dos con etiqueta clicable.

En números: controles: 2 · estados: 7 · tamaño: 18 px · área de clic: etiqueta.

## Ejemplo

```html
<label class="ds-checkbox">
  <input type="checkbox" class="ds-checkbox__input" checked>
  <span class="ds-choice__text">
    <span class="ds-choice__label">Recibir novedades</span>
    <span class="ds-choice__description">Una vez al mes, sin spam.</span>
  </span>
</label>
```

## ¿Checkbox o radio?

La pregunta es una sola: ¿se puede marcar más de una opción?

Checkbox `ds-checkbox` — Varias, ninguna o todas. Cada una vale sola.

Radio `ds-radio` — Exactamente una. Elegir otra desmarca la anterior.

Marcado de los ejemplos de esta sección:

```html
<fieldset class="ds-choice-group">
<legend class="ds-choice-group__legend">Avisar por</legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-q-email" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Correo</span></span>
</label>
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-q-push" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Notificación en el móvil</span></span>
</label>
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-q-sms">
<span class="ds-choice__text"><span class="ds-choice__label">SMS</span></span>
</label>
</div>
</fieldset>

<fieldset class="ds-choice-group">
<legend class="ds-choice-group__legend">Plan</legend>
<div class="ds-choice-group__items">
<label class="ds-radio">
<input type="radio" class="ds-radio__input" id="cr-q-mensal" name="cr-plano" value="mensal">
<span class="ds-choice__text"><span class="ds-choice__label">Mensual</span><span class="ds-choice__description">49&nbsp;R$ al mes</span></span>
</label>
<label class="ds-radio">
<input type="radio" class="ds-radio__input" id="cr-q-anual" name="cr-plano" value="anual" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Anual</span><span class="ds-choice__description">490&nbsp;R$ al año — dos meses gratis</span></span>
</label>
</div>
</fieldset>
```

## Estados

Marcado usa el color de la marca; el contorno desmarcado tiene contraste de 3:1 para verse sin depender de la etiqueta. Hover y foco se pueden forzar con `data-state`.

Marcado de los ejemplos de esta sección:

```html
<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-1"></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-2" checked=""></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-3" data-indeterminate=""></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-4"></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-5"></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-6" disabled=""></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-7" aria-invalid="true"></span>

<span class="ds-radio"><input type="radio" class="ds-radio__input" id="cr-8"></span>
```

## Grupos

Las opciones relacionadas van en un `<fieldset>` con `<legend>`: el lector de pantalla anuncia la pregunta antes de las respuestas.

Vertical `predeterminado` — Una opción por línea — más fácil de leer y de hacer clic.

En línea `ds-choice-group--inline` — Para dos o tres opciones cortas.

Con error

Mensaje debajo del grupo, vinculado por `aria-describedby`.

Marcado de los ejemplos de esta sección:

```html
<fieldset class="ds-choice-group" aria-describedby="cr-g1-hint">
<legend class="ds-choice-group__legend">Mostrar en el panel</legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-14" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Visitas</span></span>
</label>
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-15" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Conversiones</span></span>
</label>
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-16">
<span class="ds-choice__text"><span class="ds-choice__label">Ingresos</span></span>
</label>
</div>
<p class="ds-choice-group__hint" id="cr-g1-hint">Elige hasta tres métricas.</p>
</fieldset>

<fieldset class="ds-choice-group ds-choice-group--inline">
<legend class="ds-choice-group__legend">Tema</legend>
<div class="ds-choice-group__items">
<label class="ds-radio">
<input type="radio" class="ds-radio__input" id="cr-17" name="cr-g2" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Oscuro</span></span>
</label>
<label class="ds-radio">
<input type="radio" class="ds-radio__input" id="cr-18" name="cr-g2">
<span class="ds-choice__text"><span class="ds-choice__label">Claro</span></span>
</label>
<label class="ds-radio">
<input type="radio" class="ds-radio__input" id="cr-19" name="cr-g2">
<span class="ds-choice__text"><span class="ds-choice__label">Sistema</span></span>
</label>
</div>
</fieldset>

<fieldset class="ds-choice-group" aria-describedby="cr-g3-error">
<legend class="ds-choice-group__legend">Términos</legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-20" aria-invalid="true" aria-describedby="cr-g3-error">
<span class="ds-choice__text"><span class="ds-choice__label">Leí y acepto los términos de uso</span></span>
</label>
</div>
<p class="ds-choice-group__error" id="cr-g3-error"><ds-icon name="alert-circle"></ds-icon><span>Acepta los términos para crear la cuenta.</span></p>
</fieldset>
```

## Seleccionar todos

El estado indeterminado solo tiene sentido en un checkbox que resume otros: algunos marcados, otros no.

```html
const marcados = hijos.filter((c) => c.checked).length;
padre.checked = marcados === hijos.length;
padre.indeterminate = marcados > 0 && marcados < hijos.length;
```

Marcado de los ejemplos de esta sección:

```html
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-all" data-parent="" aria-controls="cr-all-list">
<span class="ds-choice__text"><span class="ds-choice__label">Todo el equipo</span><span class="ds-choice__description">3 personas</span></span>
</label>

<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-all-0" checked="" data-child="">
<span class="ds-choice__text"><span class="ds-choice__label">Ana Souza</span></span>
</label>

<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-all-1" data-child="">
<span class="ds-choice__text"><span class="ds-choice__label">Bruno Lima</span></span>
</label>

<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-all-2" data-child="">
<span class="ds-choice__text"><span class="ds-choice__label">Carla Dias</span></span>
</label>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Por debajo son inputs nativos — teclado y lector de pantalla ya funcionan.

- La etiqueta envuelve el input — Toda la `<label>` es área de clic, y el nombre del control viene del texto.
- Checkbox: Espacio marca — Tab Espacio — Tab va de un checkbox al siguiente; Espacio marca y desmarca.
- Radio: las flechas eligen — Tab ↑ ↓ — El grupo es una sola parada de Tab; las flechas cambian la opción elegida.
- Pregunta anunciada — Con `<fieldset>` y `<legend>`, el lector dice “Plan, grupo” antes de las opciones.
- Indeterminado = “mixto” — La propiedad `indeterminate` se anuncia como parcialmente marcada.
- Contraste del contorno — El contorno desmarcado usa `fg.subtle`: al menos 3:1 contra el fondo en los dos temas.

## Tokens usados

Todo lo que consumen checkbox y radio.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.fg.subtle (`--ds-color-fg-subtle`) | Contorno desmarcado | #5C6C7F | #9C9792 |
| color.fg.muted (`--ds-color-fg-muted`) | Contorno en hover | #46586E | #CEC8C1 |
| color.brand.solid (`--ds-color-brand-solid`) | Fondo marcado (checkbox) y punto (radio) | #3E5166 | #C0CAD6 |
| color.brand.solid-hover (`--ds-color-brand-solid-hover`) | Marcado en hover | #2B3847 | #DAE0E8 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Marca de selección | #F8FAFD | #1D2734 |
| color.border.focus (`--ds-color-border-focus`) | Anillo de foco | #53657A | #C0CAD6 |
| color.danger.solid (`--ds-color-danger-solid`) | Contorno inválido | #C13834 | #FF9087 |
| color.danger.fg (`--ds-color-danger-fg`) | Mensaje de error | #C13834 | #FFB2AA |
| radius.xs (`--ds-radius-xs`) | Radio del checkbox | 6 px | 6 px |
| radius.full (`--ds-radius-full`) | Radio | 9999 px | 9999 px |
| text.label-md (`--ds-text-label-md`) | Etiqueta | 14/20 · medium | 14/20 · medium |
| text.body-sm (`--ds-text-body-sm`) | Descripción | 14/22 · regular | 14/22 · regular |
| space.150 (`--ds-space-150`) | Control → texto y entre opciones | 12 px | 12 px |
| duration.fast (`--ds-duration-fast`) | Marca apareciendo | 120ms | 120ms |

## Uso

Tres reglas para elecciones claras.

- **Haz:** una etiqueta que se lee sola. Marcada o no, la frase sigue teniendo sentido.
- **Evita:** negación en la etiqueta. Marcar un “no” obliga a parar y pensar dos veces.
- **Consejo:** ¿Efecto inmediato? Usa un switch. El checkbox vale al enviar el formulario. Si el cambio pasa al instante (activar notificaciones), el switch comunica mejor.
