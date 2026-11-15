# Campo de texto

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/campo-de-texto

Para que la persona escriba. Etiqueta siempre visible, pista antes del error y mensajes que dicen cómo resolverlo.

En números: tamaños: 3 · estados: 6 · formatos: 2 · altura predeterminada: 40 px.

## Ejemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="nombre-proyecto">Nombre del proyecto</label>
  <div class="ds-field">
    <input class="ds-field__input" id="nombre-proyecto" type="text" placeholder="Ej.: Lume" aria-describedby="nombre-proyecto-pista">
  </div>
  <div class="ds-form-field__footer">
    <p class="ds-form-field__hint" id="nombre-proyecto-pista">Aparece en el menú y en la búsqueda.</p>
  </div>
</div>
```

## Anatomía

Seis partes; solo la etiqueta y el contenedor son obligatorios.

- 1 — Etiqueta — Siempre visible, encima del campo, en `text.label-md`. Marca lo que es opcional — no lo obligatorio.
- 2 — Contenedor — Altura `size.control.*`, contorno `border.control`, radio `radius.md`.
- 3 — Ícono — Opcional. Solo cuando ayuda a reconocer el tipo de dato — búsqueda, correo, fecha.
- 4 — Texto y placeholder — El placeholder da un ejemplo del formato; nunca reemplaza la etiqueta.
- 5 — Pista o error — Una línea justo debajo. El error ocupa el lugar de la pista y dice cómo resolverlo.
- 6 — Contador — Solo cuando hay un límite. Se pone rojo al pasar del máximo.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<span class="ds-form-field__label">Correo de trabajo</span>
<div class="ds-field">
<span><ds-icon name="mail"></ds-icon></span>
<span class="ds-field__placeholder">nombre@empresa.com</span>
</div>
<div class="ds-form-field__footer">
<span class="ds-form-field__hint">La usaremos para avisos de la cuenta.</span>
<span class="ds-form-field__counter">0/40</span>
</div>
</div>
```

## Tamaños

Dentro de un `.ds-form-field` el predeterminado es el mediano. Usa el mismo tamaño de los botones al lado.

Pequeño `ds-field--sm` — 32 px · Filtros y barras densas.

Mediano `predeterminado` — 40 px · Predeterminado de formulario.

Grande `ds-field--lg` — 48 px · Pantallas táctiles y formularios cortos destacados.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-size-sm">Pequeño</label>
<div class="ds-field ds-field--sm"><ds-icon name="search"></ds-icon><input class="ds-field__input" id="tf-size-sm" type="text" placeholder="Buscar"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-size-md">Mediano</label>
<div class="ds-field"><ds-icon name="search"></ds-icon><input class="ds-field__input" id="tf-size-md" type="text" placeholder="Buscar"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-size-lg">Grande</label>
<div class="ds-field ds-field--lg"><ds-icon name="search"></ds-icon><input class="ds-field__input" id="tf-size-lg" type="text" placeholder="Buscar"></div>
</div>
```

## Estados

Hover y foco también se pueden forzar con `data-state` en `.ds-field`, para documentar y probar.

Predeterminado — Contorno discreto; la etiqueta identifica el campo.

Hover — El contorno se vuelve más fuerte.

Foco — Contorno en el color de foco y un halo suave.

Solo lectura — Fondo hundido: se puede leer y copiar, no editar.

Desactivado — Opacidad reducida y fuera del orden de foco.

Inválido — Contorno y mensaje de peligro, vinculados por aria-describedby.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-default">Slug del proyecto</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-default" type="text" placeholder="lume-ds"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-hover">Slug del proyecto</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-hover" type="text" placeholder="lume-ds"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-focus">Slug del proyecto</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-focus" type="text" placeholder="lume-ds"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-readonly">Slug del proyecto</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-readonly" type="text" placeholder="lume-ds" value="lume-design-system" readonly=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-disabled">Slug del proyecto</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-disabled" type="text" placeholder="lume-ds" disabled=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-invalid">Slug del proyecto</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-invalid" type="text" placeholder="lume-ds" value="Lume DS!" aria-invalid="true" aria-describedby="tf-state-invalid-error"></div>
<div class="ds-form-field__footer">
<p class="ds-form-field__error" id="tf-state-invalid-error"><ds-icon name="alert-circle"></ds-icon><span>Usa solo letras, números y guion.</span></p>
</div>
</div>
```

## Multilínea

Para textos de más de una frase. El mismo contenedor, con `.ds-field--multiline` y un `<textarea>` que crece en vertical.

```html
<div class="ds-field ds-field--multiline">
  <textarea class="ds-field__input" id="descripcion" rows="4"></textarea>
</div>
```

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-bio">Descripción del proyecto<span class="ds-form-field__optional">opcional</span></label>
<div class="ds-field ds-field--multiline">
<textarea class="ds-field__input" id="tf-bio" rows="4" maxlength="200" aria-describedby="tf-bio-hint" placeholder="Cuenta en pocas líneas para qué sirve.">Un design system plano y tranquilo, con tokens en OKLCH.</textarea>
</div>
<div class="ds-form-field__footer">
<p class="ds-form-field__hint" id="tf-bio-hint">Aparece arriba en la página del proyecto.</p>
<span class="ds-form-field__counter" data-counter-for="tf-bio">56/200</span>
</div>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Validación

Valida cuando la persona sale del campo o envía — nunca en cada tecla. El mensaje reemplaza la pista y dice qué hacer.

Evita

“Correo inválido.”

Prefiere

“Usa un correo completo, como nombre@empresa.com.”

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-email">Correo de trabajo</label>
<div class="ds-field"><ds-icon name="mail"></ds-icon><input class="ds-field__input" id="tf-email" type="email" autocomplete="email" placeholder="nombre@empresa.com" aria-describedby="tf-email-msg"></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="tf-email-msg" data-msg="">La usaremos para avisos de la cuenta.</p></div>
</div>

<button type="submit" class="ds-btn ds-btn--primary">Continuar</button>

<button type="reset" class="ds-btn ds-btn--ghost">Borrar</button>
```

## Accesibilidad

Lo que garantiza que todo el mundo pueda completarlo.

- Una etiqueta de verdad — `<label for>` vinculado al `id` del campo. Hacer clic en la etiqueta enfoca el campo; el lector de pantalla anuncia el nombre.
- El placeholder no es una etiqueta — Desaparece al escribir y tiene menos contraste. Úsalo solo como ejemplo de formato.
- Pista y error anunciados — `aria-describedby` apunta a la pista o al error, y el campo inválido gana `aria-invalid="true"`.
- El error no depende solo del color — El mensaje tiene ícono y texto, además del contorno rojo.
- Teclado — Tab Shift + Tab — Tab entra, Shift + Tab vuelve; nada atrapa el foco dentro del campo.
- Autocompletar — Usa el `type` y el `autocomplete` correctos (email, name, tel) para que el navegador y los gestores ayuden.

## Tokens usados

Todo lo que consume el campo.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| size.control.md (`--ds-size-control-md`) | Altura (mediano) | 40 px | 40 px |
| radius.md (`--ds-radius-md`) | Radio | 12 px | 12 px |
| text.label-md (`--ds-text-label-md`) | Etiqueta | 14/20 · medium | 14/20 · medium |
| text.body-sm (`--ds-text-body-sm`) | Texto escrito, pista y error | 14/22 · regular | 14/22 · regular |
| space.075 (`--ds-space-075`) | Etiqueta → campo → pista | 6 px | 6 px |
| color.border.control (`--ds-color-border-control`) | Contorno | #3E516633 | #FFFFFF21 |
| color.border.strong (`--ds-color-border-strong`) | Contorno en hover | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Contorno y halo en el foco | #53657A | #C0CAD6 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Placeholder, ícono y pista | #53657A | #9C9792 |
| color.bg.sunken (`--ds-color-bg-sunken`) | Fondo de solo lectura | #E8EDF3 | #151412 |
| color.danger.solid (`--ds-color-danger-solid`) | Contorno inválido | #C13834 | #FF9087 |
| color.danger.fg (`--ds-color-danger-fg`) | Mensaje de error | #C13834 | #FFB2AA |
| duration.fast (`--ds-duration-fast`) | Transición del contorno | 120ms | 120ms |
| opacity.disabled (`--ds-opacity-disabled`) | Desactivado | 0.44 | 0.44 |

## Uso

Tres reglas para formularios que no dan trabajo.

- **Haz:** etiqueta arriba, pista abajo. La persona sabe qué escribir antes de empezar.
- **Evita:** placeholder en lugar de etiqueta. Al escribir, la “etiqueta” desaparece — y con ella, el contexto.
- **Consejo:** El tamaño dice lo que cabe. Un código postal corto en un campo corto ya explica el formato.
