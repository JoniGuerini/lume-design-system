# Grupo de campos

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/grupo-de-campos

Una etiqueta, una pista y un error para varios controles que forman un solo dato: fecha y horarios, nombre y apellido, valor y unidad. El grupo tiene el nombre; cada control tiene el suyo.

En números: rol ARIA: group · etiquetas: 1 + 1 por control · arreglos: 2 · React: FieldGroup.

## En vivo

Fecha y dos horarios con una sola etiqueta: “Cuándo”. La fecha y los horarios abren los selectores de Lume.

## Arreglos

Por defecto, el primer control ocupa el doble que los otros. Con `ds-field-group--even`, todos dividen la línea por igual. En pantalla estrecha, saltan de línea.

El primero destacado `ds-field-group` — Valor y unidad: el número lleva el doble del espacio de la unidad.

Por igual `ds-field-group--even` — Nombre y apellido tienen el mismo peso.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field ds-field-1" role="group" aria-labelledby="fg-amount-label">
<span class="ds-form-field__label" id="fg-amount-label">Duración</span>
<div class="ds-field-1__controls"><div class="ds-field"><input class="ds-field__input" id="fg-amount-n" type="text" aria-label="Cantidad" value="50"></div><div class="ds-field"><input class="ds-field__input" id="fg-amount-u" type="text" aria-label="Unidad" value="minutos"></div></div>
</div>

<div class="ds-form-field ds-field-1 ds-field-1--even" role="group" aria-labelledby="fg-name-label">
<span class="ds-form-field__label" id="fg-name-label">Nombre completo</span>
<div class="ds-field-1__controls"><div class="ds-field"><input class="ds-field__input" id="fg-first" type="text" aria-label="Nombre" value="Ana"></div><div class="ds-field"><input class="ds-field__input" id="fg-last" type="text" aria-label="Apellido" value="Souza"></div></div>
</div>
```

## Error del grupo

Cuando el problema es la combinación (el fin antes del inicio), el error es del grupo, no de un control. Los controles involucrados reciben aria-invalid y apuntan al mismo mensaje.

## Código

`Field` une una etiqueta a un control. El grupo usa `role="group"` con `aria-labelledby`, y cada control lleva su propio `aria-label`.

```html
<div class="ds-form-field ds-field-group" role="group" aria-labelledby="quando-label" aria-describedby="quando-hint">
  <span class="ds-form-field__label" id="quando-label">Cuándo</span>
  <div class="ds-field-group__controls">
    <div class="ds-field"><input class="ds-field__input" id="data" aria-label="Fecha" aria-describedby="quando-hint"></div>
    <div class="ds-field"><input class="ds-field__input" id="inicio" aria-label="Inicio" aria-describedby="quando-hint"></div>
    <span class="ds-field-group__sep" aria-hidden="true">a</span>
    <div class="ds-field"><input class="ds-field__input" id="fim" aria-label="Fin" aria-describedby="quando-hint"></div>
  </div>
  <div class="ds-form-field__footer"><p class="ds-form-field__hint" id="quando-hint">La sesión dura 50 minutos.</p></div>
</div>

// React: cada control lee la pista y el error del grupo solo
<FieldGroup label="Cuándo" hint="La sesión dura 50 minutos." error={erro}>
  <DatePicker aria-label="Fecha" value={data} onChange={setData} />
  <TimePicker aria-label="Inicio" value={inicio} onChange={setInicio} />
  <TimePicker aria-label="Fin" value={fim} onChange={setFim} />
</FieldGroup>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

El lector de pantalla oye el grupo y después cada parte.

- Nombre del grupo — Al entrar en el primer control, se oye “Cuándo, grupo”, y después “Fecha”.
- Cada control con nombre — La etiqueta del grupo no nombra los controles. Sin el aria-label de cada uno, la persona oye tres campos iguales.
- Ids propios — En React, FieldGroup no pasa id a los controles: cada uno mantiene el suyo, y el foco del error va al control correcto.

## Tokens usados

Los mismos del Campo de texto, más el espacio entre los controles.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| space.100 (`--ds-space-100`) | Espacio entre los controles | 8 px | 8 px |
| color.fg.subtle (`--ds-color-fg-subtle`) | Separador (“a”) | #53657A | #9C9792 |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** un dato en partes. Cuándo, duración, nombre completo, dirección con número.
- **Evita:** campos que no se conectan. Correo y teléfono son dos datos. Cada uno en su propio Field, lado a lado con ds-form__row.
- **Consejo:** Elecciones también. Un grupo de radios o un control segmentado con etiqueta también es un grupo: usa el mismo arreglo.
