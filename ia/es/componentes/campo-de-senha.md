# Campo de contraseña

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/campo-de-senha

El campo de texto para contraseñas, con el botón de mostrar y ocultar. Mostrarla evita errores de escritura sin pedir la contraseña dos veces.

En números: botón: aria-pressed · foco: en el campo · autocompletado: autocomplete · tamaños: 3.

## Ejemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="senha">Contraseña</label>
  <div class="ds-field"><input class="ds-field__input" id="senha" name="senha" type="password" autocomplete="current-password"></div>
</div>

<script type="module">
  import { createPasswordField } from 'https://lumeui.dev/v/1.14/lume.js';
  createPasswordField(document.querySelector('#senha'));
</script>
```

## Entrar y crear

La diferencia está en `autocomplete`: le dice al navegador y al gestor de contraseñas si debe completar la contraseña guardada o sugerir una nueva.

Entrar `current-password` — Completa la contraseña guardada.

Crear cuenta `new-password` — El gestor sugiere una contraseña fuerte. Di los requisitos en la pista, a la vista.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="pw-current">Contraseña</label>
<div class="ds-field"><input class="ds-field__input" id="pw-current" type="password" autocomplete="current-password" value="lume2026"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action" aria-pressed="false" aria-label="Mostrar contraseña"><ds-icon name="eye"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pw-new">Nueva contraseña</label>
<div class="ds-field"><input class="ds-field__input" id="pw-new" type="password" autocomplete="new-password" value="lume2026" aria-describedby="pw-new-hint"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action" aria-pressed="false" aria-label="Mostrar contraseña"><ds-icon name="eye"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="pw-new-hint">Al menos 8 caracteres.</p></div>
</div>
```

## Estados

Los mismos del Campo de texto. El ojo tachado dice que la contraseña está a la vista.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<span class="ds-form-field__label">Contraseña</span>
<div class="ds-field"><input class="ds-field__input" type="password" value="lume2026" aria-label="Contraseña"><span class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action"><ds-icon name="eye"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Contraseña</span>
<div class="ds-field"><input class="ds-field__input" type="text" value="lume2026" aria-label="Contraseña"><span class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action"><ds-icon name="eye-off"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Contraseña</span>
<div class="ds-field"><input class="ds-field__input" type="password" value="lume2026" aria-label="Contraseña" disabled=""><span class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action"><ds-icon name="eye"></ds-icon></span></div>
</div>
```

## Código

Al enviar el formulario, la contraseña vuelve a ocultarse, para que el navegador ofrezca guardarla.

```html
<div class="ds-field">
  <input class="ds-field__input" id="senha" name="senha" type="password" autocomplete="current-password">
</div>

<script type="module">
  import { createPasswordField } from 'https://lumeui.dev/v/1.14/lume.js';
  const senha = createPasswordField(document.querySelector('#senha'));
  // senha.visible · senha.show() · senha.hide() · senha.toggle()
</script>

// React
<Field label="Contraseña">
  <PasswordField name="senha" autoComplete="new-password" />
</Field>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

El botón es un interruptor: el nombre no cambia, el estado sí.

- Nombre fijo, estado en aria-pressed — El lector de pantalla oye “Mostrar contraseña, botón, presionado” cuando la contraseña está a la vista.
- El cursor no sale — Hacer clic en el ojo no saca el foco del campo: se puede mostrar, revisar y seguir escribiendo.
- Por teclado — Tab Espacio — Tab llega al botón después del campo; Espacio o Enter lo alternan.

## Tokens usados

Además de los tokens del Campo de texto.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.fg.muted (`--ds-color-fg-muted`) | Ícono del ojo | #46586E | #CEC8C1 |
| color.bg.hover (`--ds-color-bg-hover`) | Botón en hover | #3E51660D | #FFFFFF0D |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** un solo campo. Con el ojo, “confirmar contraseña” sobra: la persona revisa viendo.
- **Evita:** bloquear pegar. Quien usa gestor de contraseñas la pega. Bloquear pegar solo estorba.
- **Consejo:** Requisitos a la vista. Di las reglas antes del error, en la pista. El patrón Login y registro marca cada una mientras la persona escribe.
