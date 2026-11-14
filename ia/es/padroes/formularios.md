# Formularios

Sección de Lume: Patrones. Página: https://lumeui.dev/#/padroes/formularios

Pedir información sin hacer adivinar a la persona: una etiqueta clara por campo, la pista antes del error y errores que dicen cómo resolverlos — en el momento justo.

En números: reglas nativas: 9 · momentos de validar: 3 · acción principal: 1 · contraste del error: 7,9:1.

## Ejemplo en vivo

Un formulario de verdad, con `createForm`. Envíalo vacío, escribe “ab” en el nombre, prueba la dirección “pagos” — y mira cómo el error desaparece mientras corriges.

- Envíalo vacío: el resumen recibe el foco y cada enlace lleva al campo.
- Error solo al salir del campo — y desaparece con la primera tecla correcta.
- Con todo bien, el toast confirma y el formulario vuelve al principio.

## Layout

Una columna, de arriba abajo, en el orden en que piensa la persona. El layout responde a una pregunta: ¿qué es lo siguiente que hay que completar?

Una columna, etiqueta arriba — El ojo baja en una sola línea. La etiqueta al lado del campo obliga a leer en zigzag — y no cabe en el móvil.

Lado a lado, solo lo que va junto

Ciudad y estado, inicio y fin, nombre y apellido. Usa `.ds-form__row`; en el móvil se vuelve una columna.

El ancho cuenta el tamaño de la respuesta — Código postal corto, calle larga. Un campo ancho para cuatro dígitos parece pedir más de lo que pide.

Marca lo opcional, no lo obligatorio — La mayoría de los campos son obligatorios: avísalo una vez arriba y marca solo la excepción con “opcional”. Nada de asteriscos.

Secciones con sello

Un formulario con más de seis campos recibe secciones numeradas, como en el panel: `01 · Dirección`.

La pista queda debajo, siempre visible — El placeholder desaparece con la primera letra. Lo que la persona necesita saber para acertar va en la pista, que sigue ahí.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l1">Nombre completo</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l1" name="pf-ex-l1" type="text" required="" spellcheck="false"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l2">Correo</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l2" name="pf-ex-l2" type="text" required="" spellcheck="false"></div>
</div>

<div class="ds-form__row"><div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l3">Ciudad</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l3" name="pf-ex-l3" type="text" required="" spellcheck="false"></div>
</div><div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l4">Estado</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l4" name="pf-ex-l4" type="text" required="" spellcheck="false"></div>
</div></div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l5">Código postal</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l5" name="pf-ex-l5" type="text" required="" spellcheck="false"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l6">Calle</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l6" name="pf-ex-l6" type="text" required="" spellcheck="false"></div>
</div>

<p class="ds-form__note">Todos los campos son obligatorios, excepto los marcados como opcionales.</p>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l7">Teléfono<span class="ds-form-field__optional">opcional</span></label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l7" name="pf-ex-l7" type="text" spellcheck="false"></div>
</div>

<fieldset class="ds-form__section"><legend class="ds-form__legend"><span class="ds-section__stamp">02</span>Dirección</legend><div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l8">Calle</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l8" name="pf-ex-l8" type="text" required="" spellcheck="false"></div>
</div></fieldset>
```

## Validación

Valida cuando la persona termina, no mientras escribe. Y, con el error en pantalla, revalida con cada tecla — nadie debería corregir y seguir viendo el error.

01 — Al salir del campo

Si la persona escribió algo. Pasar por el campo con Tab no marca nada.

02 — Al enviar

Valida todo, muestra el resumen arriba y lleva el foco hasta él.

03 — Mientras corrige

Un campo con error revalida con cada tecla — el error desaparece en el momento justo.

### Compara el mismo campo, tres momentos

Predeterminado. El error aparece cuando la persona termina — nunca en medio de la escritura.

### Reglas listas vienen de los atributos del HTML

| Atributo | Mensaje predeterminado |
| --- | --- |
|  `required`  | Completa este campo. · Elige una opción. · Marca esta opción para continuar. |
|  `type="email"`  | Usa un correo con el formato nombre@empresa.com. |
|  `type="url"`  | Usa una dirección completa que empiece con https://. |
|  `minlength`  | Usa al menos 3 caracteres (faltan 1). |
|  `data-max`  | Usa como máximo 40 caracteres (sobran 2). — el contador acompaña |
|  `min · max`  | Usa un valor desde 1. · Usa un valor hasta 99. |
|  `pattern`  | El texto del atributo title — escríbelo como instrucción. |
|  `data-min (fieldset)`  | Marca al menos 2. |
|  `rules (JS)`  | Cualquier regla tuya: devuelve el mensaje, o null cuando todo esté bien. |

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M9.5 20.5H6a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h3.5M15.5 16.5 20 12l-4.5-4.5M20 12H9.5"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M20 5v7a3 3 0 0 1-3 3H5M9 11l-4 4 4 4"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m8.5 12 2.5 2.5 4.5-5"></path></svg>

<div class="ds-segmented" role="radiogroup" aria-labelledby="pf-modes-label">
<button type="button" class="ds-segmented__item" role="radio" data-mode="blur" aria-checked="true">Al salir del campo</button><button type="button" class="ds-segmented__item" role="radio" data-mode="submit" aria-checked="false">Al enviar</button><button type="button" class="ds-segmented__item" role="radio" data-mode="input" aria-checked="false">Con cada tecla</button>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-val-email">Correo de trabajo</label>
<div class="ds-field"><input class="ds-field__input" id="pf-val-email" name="email" type="email" required="" autocomplete="email" aria-describedby="pf-val-email-hint" spellcheck="false"></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="pf-val-email-hint">Escribe “ana” y sal del campo — o envía.</p></div>
</div>

<button type="submit" class="ds-btn ds-btn--secondary">Enviar</button>
```

## Mensajes de error

El error es una instrucción, no un regaño: dice qué hacer para seguir. Ícono y texto siempre juntos — el color solo no le dice nada a quien no lo ve.

- Resumen arriba. Recibe el foco al enviar y dice cuántos campos faltan. Cada línea es un enlace que lleva al campo.
- Error debajo del campo. Ícono y texto en `danger.fg`, en lugar de la pista. Dice cómo resolverlo.
- Campo marcado. Contorno de peligro y `aria-invalid="true"`. Desaparece en cuanto la persona corrige.

### Cómo escribir evita → prefiere

| Situación | Evita | Prefiere |
| --- | --- | --- |
| Campo vacío | Obligatorio | Completa el nombre del proyecto. |
| Formato | Correo inválido | Usa un correo con el formato nombre@empresa.com. |
| Longitud | Mínimo 8 | Usa al menos 8 caracteres — faltan 3. |
| Conflicto | Error 409 | Esa dirección ya está en uso. ¿Qué tal pagos-2? |
| Fecha | Fecha inválida | Usa día, mes y año, como 31/10/2026. |
| Servidor | ¡Ocurrió un error inesperado! | No pudimos guardar ahora. Tus datos siguen aquí — inténtalo de nuevo. |

### Cuando el error no es de un campo .ds-alert

Fallo al guardar, conflicto, aviso antes de un cambio: una alerta arriba del formulario, con el tono justo y una salida.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-alert ds-alert--danger">
<span class="ds-alert__icon"><ds-icon name="alert-circle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Revisa 2 campos para continuar</p>
<ul class="ds-alert__list" role="list"><li><a href="#pf-ex-nome">Nombre del proyecto: ponle un nombre al proyecto</a></li><li><a href="#pf-ex-mail">Correo para avisos: usa un correo con el formato nombre@empresa.com</a></li></ul>
</div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-nome">Nombre del proyecto</label>
<div class="ds-field"><span></span><input class="ds-field__input" id="pf-ex-nome" aria-invalid="true"></div>
<div class="ds-form-field__footer"><p class="ds-form-field__error"><span></span><ds-icon name="alert-circle"></ds-icon><span>Ponle un nombre al proyecto.</span></p></div>
</div>

<div class="ds-alert ds-alert--danger">
<span class="ds-alert__icon"><ds-icon name="alert-circle"></ds-icon></span>
<div class="ds-alert__body"><p class="ds-alert__title">No pudimos crear el proyecto</p><p class="ds-alert__text">Tus datos siguen aquí. Inténtalo de nuevo en unos segundos.</p><div class="ds-alert__actions"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm"><ds-icon name="refresh"></ds-icon>Intentar de nuevo</button><span class="ds-alert__meta">Error 503 · 14:32</span></div></div>
</div>

<div class="ds-alert ds-alert--warning">
<span class="ds-alert__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<div class="ds-alert__body"><p class="ds-alert__title">La dirección cambia los enlaces antiguos</p><p class="ds-alert__text">Quien tenga el enlace anterior caerá en una página de aviso durante 30 días.</p></div>
</div>

<div class="ds-alert ds-alert--success">
<span class="ds-alert__icon"><ds-icon name="check-circle"></ds-icon></span>
<div class="ds-alert__body"><p class="ds-alert__title">Borrador guardado</p><p class="ds-alert__text">Puedes cerrar y continuar después, desde cualquier dispositivo.</p></div>
</div>

<div class="ds-alert ds-alert--info">
<span class="ds-alert__icon"><ds-icon name="info"></ds-icon></span>
<div class="ds-alert__body"><p class="ds-alert__title">Las invitaciones van por correo</p><p class="ds-alert__text">Quien aún no tiene cuenta recibe un enlace para crearla.</p></div>
</div>

<div class="ds-alert ds-alert--compact">
<span class="ds-alert__icon"><ds-icon name="info"></ds-icon></span>
<div class="ds-alert__body"><p class="ds-alert__title">Compacto</p><p class="ds-alert__text">una línea, dentro de paneles.</p></div>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-alert__close" aria-label="Cerrar aviso"><ds-icon name="x"></ds-icon></button>
</div>
```

## Acciones

Una acción principal, con un verbo que dice qué pasa: “Crear proyecto”, no “OK”. Y el botón de enviar nunca queda desactivado — deja enviar y explica qué falta.

Principal a la derecha — El ojo termina la lectura a la derecha, donde está la acción que concluye. Cancelar queda al lado, más discreto.

Destructiva lejos de la principal — Eliminar va al otro extremo, con el tono de peligro — y siempre pide confirmación.

Enviando — El botón dice qué está pasando y no acepta un segundo clic. El resto del formulario sigue legible.

En el móvil — Las acciones ocupan el ancho y la principal sube arriba, cerca del pulgar y del final de la lectura.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form__actions"><button type="button" class="ds-btn ds-btn--secondary">Cancelar</button><button type="button" class="ds-btn ds-btn--primary">Guardar cambios</button></div>

<div class="ds-form__actions"><button type="button" class="ds-btn ds-btn--ghost ds-form__actions-start"><ds-icon name="trash"></ds-icon>Eliminar proyecto</button><button type="button" class="ds-btn ds-btn--secondary">Cancelar</button><button type="button" class="ds-btn ds-btn--primary">Guardar</button></div>

<div class="ds-form__actions"><button type="button" class="ds-btn ds-btn--secondary">Cancelar</button><button type="button" class="ds-btn ds-btn--primary" aria-disabled="true" data-busy=""><ds-icon name="loader"></ds-icon>Creando…</button></div>

<div class="ds-form__actions"><button type="button" class="ds-btn ds-btn--primary">Guardar cambios</button><button type="button" class="ds-btn ds-btn--secondary">Cancelar</button></div>
```

## Formulario largo

Secciones numeradas, acciones fijas en el pie y un estado de lo que aún no se guardó. Edita un campo abajo y mira cómo el pie acompaña.

## Accesibilidad

Lo que `createForm` y los estilos garantizan — y lo que queda contigo.

- Etiqueta visible y vinculada al campo — Todo campo tiene `<label for>`. El placeholder no es etiqueta: desaparece al escribir y tiene contraste bajo.
- Error vinculado al campo — El texto del error entra en el `aria-describedby` y el campo recibe `aria-invalid="true"`. La pista sigue vinculada.
- El resumen recibe el foco — Tab Enter — Al enviar con error, el foco va al resumen; cada enlace lleva al campo (en el selector, al disparador; en el grupo, a la opción).
- Nunca solo color — El error tiene ícono y texto; el contorno de peligro es refuerzo. El contraste del texto de error supera 4,5:1 en los dos temas.
- Grupos con fieldset — Radios y checkboxes relacionados van en `<fieldset>` con `<legend>`; el error del grupo queda vinculado al fieldset.
- Autocompletado — Usa `autocomplete` (email, name, postal-code…) y el `type` correcto, que abre el teclado correcto en el móvil.
- Botón siempre activo — Desactivar el envío esconde el motivo. Deja enviar y muestra qué falta; durante el envío, usa `aria-disabled` y di “Creando…”.

## Código

Estructura en HTML con las clases del formulario; el comportamiento viene de una línea de JS.

### HTML

```html
<form class="ds-form" id="proyecto" novalidate>
  <div data-form-summary></div>

  <fieldset class="ds-form__section">
    <legend class="ds-form__legend"><span class="ds-section__stamp">01</span>Sobre el proyecto</legend>
    <div class="ds-form__row">
      <div class="ds-form-field">
        <label class="ds-form-field__label" for="nombre">Nombre del proyecto</label>
        <div class="ds-field"><input class="ds-field__input" id="nombre" name="nombre"
          required minlength="3" data-max="40" aria-describedby="nombre-pista"></div>
        <div class="ds-form-field__footer">
          <p class="ds-form-field__hint" id="nombre-pista">Aparece en el menú y en la búsqueda.</p>
          <span class="ds-form-field__counter" aria-hidden="true">0/40</span>
        </div>
      </div>
      <!-- otro campo… -->
    </div>
  </fieldset>

  <div class="ds-form__actions">
    <button type="reset" class="ds-btn ds-btn--secondary">Cancelar</button>
    <button type="submit" class="ds-btn ds-btn--primary">Crear proyecto</button>
  </div>
</form>
```

### JavaScript

```html
import { createForm } from 'https://lumeui.dev/v/0.37/lume.js';

const form = createForm(document.querySelector('#proyecto'), {
  rules: {
    // regla tuya: devuelve el mensaje, o null cuando todo esté bien
    direccion: (valor) => (ocupadas.has(valor) ? 'Esa dirección ya está en uso.' : null),
  },
  messages: { nombre: { required: 'Ponle un nombre al proyecto.' } },
  onSubmit: async (datos) => {
    await guardar(datos);
    toast('Proyecto creado', { tone: 'success' });
  },
});
```

### createForm(form, opciones) ds/js/form.js

| Opción o método | Valor | Qué hace |
| --- | --- | --- |
|  `validateOn`  |  `'blur' (predeterminado) · 'submit' · 'input'`  | Cuándo mostrar el error. Con error en pantalla, el campo siempre revalida mientras la persona corrige. |
|  `rules`  |  `{ nombre: (valor, el, form) => string \| null }`  | Reglas propias, después de las nativas. Puede ser una lista. |
|  `messages`  |  `{ nombre: { required: '…' } }`  | Cambia el mensaje de una regla. En el HTML: data-error-required, data-error-email… |
|  `summary`  |  `true · Element · false`  | Resumen de errores arriba (en [data-form-summary] o al principio del form). |
|  `onSubmit`  |  `(datos, form) => void`  | Solo se ejecuta con todo válido. datos viene del FormData; los nombres repetidos se vuelven lista. |
|  `onInvalid`  |  `(errores) => void`  | Se ejecuta cuando el envío se detiene por error: [{ name, label, message }]. |
|  `validate()`  |  `boolean`  | Valida todo y muestra los errores, sin mover el foco. |
|  `reset() · destroy()`  |  ``  | Limpia valores, errores y el resumen · desconecta todo. |

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Seis reglas que evitan la mayoría de los formularios malos.

- **Haz:** pide solo lo necesario. Cada campo de más es una razón para abandonar. Lo que se puede averiguar después, pregúntalo después.
- **Evita:** placeholder como etiqueta. Desaparece con la primera letra, y la persona olvida qué estaba completando en medio de la frase.
- **Consejo:** Elige un valor predeterminado seguro. La visibilidad empieza en “Privado”. El valor correcto evita una pregunta — y un error.
- **Haz:** error que enseña. “Usa al menos 8 caracteres — faltan 3” dice qué hacer. “Contraseña inválida” solo dice que te equivocaste.
- **Evita:** borrar lo que la persona escribió. Con error, nunca borres los campos. Mantén todo y marca solo lo que tiene que cambiar.
- **Consejo:** Confirma con toast. ¿Salió bien? Un toast corto (“Proyecto creado”) y la pantalla sigue. Un modal de éxito interrumpe sin motivo.
