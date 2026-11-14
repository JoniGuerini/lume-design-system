# Campo de etiquetas

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/campo-de-tags

Para varios valores libres dentro de un solo campo, como temas, destinatarios o palabras clave. Si las opciones son una lista cerrada, usa el Selector múltiple.

En números: crear etiqueta: Enter · , · pegar lista: sí · repetidas: rechazadas · valor enviado: a,b,c.

## Ejemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="assuntos">Temas</label>
  <div class="ds-field ds-tags"><input class="ds-field__input" id="assuntos" name="assuntos" type="text" placeholder="Escribe y pulsa Enter"></div>
</div>

<script type="module">
  import { createTagField } from 'https://lumeui.dev/v/0.32/lume.js';
  createTagField(document.querySelector('#assuntos'), {
    value: ['diseño', 'tokens'],
  });
</script>
```

## Variantes

El campo crece en líneas a medida que entran etiquetas. Las reglas propias explican por qué una etiqueta no entró.

Libre `createTagField` — Cualquier texto se vuelve etiqueta, sin repetir.

Con límite `max` — Pasados 3, el campo avisa y la etiqueta no entra.

Con regla `validate` — Solo acepta correos, y el mensaje dice qué faltó.

Muchas etiquetas `varias líneas` — El campo crece en vez de esconder valores.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-free">Temas</label>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag">
<span class="ds-tags__text">diseño</span>
<button type="button" class="ds-tags__remove" data-remove="0" aria-label="Quitar diseño"><ds-icon name="x"></ds-icon></button>
</li><li class="ds-tags__tag">
<span class="ds-tags__text">tokens</span>
<button type="button" class="ds-tags__remove" data-remove="1" aria-label="Quitar tokens"><ds-icon name="x"></ds-icon></button>
</li></ul><input class="ds-field__input" id="tf-free" type="text" autocomplete="off" data-ds-filled="diseño,tokens"><input type="hidden" name="tf-free" value="diseño,tokens"></div><span class="ds-visually-hidden" role="status"></span>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-max">Palabras clave</label>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag">
<span class="ds-tags__text">diseño</span>
<button type="button" class="ds-tags__remove" data-remove="0" aria-label="Quitar diseño"><ds-icon name="x"></ds-icon></button>
</li><li class="ds-tags__tag">
<span class="ds-tags__text">tokens</span>
<button type="button" class="ds-tags__remove" data-remove="1" aria-label="Quitar tokens"><ds-icon name="x"></ds-icon></button>
</li></ul><input class="ds-field__input" id="tf-max" type="text" autocomplete="off" data-ds-filled="diseño,tokens"><input type="hidden" name="tf-max" value="diseño,tokens"></div><span class="ds-visually-hidden" role="status"></span>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="tf-max-hint">Hasta 3 palabras clave.</p></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-email">Invitar</label>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag">
<span class="ds-tags__text">ana@lume.dev</span>
<button type="button" class="ds-tags__remove" data-remove="0" aria-label="Quitar ana@lume.dev"><ds-icon name="x"></ds-icon></button>
</li></ul><input class="ds-field__input" id="tf-email" type="text" autocomplete="off" data-ds-filled="ana@lume.dev"><input type="hidden" name="tf-email" value="ana@lume.dev"></div><span class="ds-visually-hidden" role="status"></span>
</div>
```

## Estados

Hover y foco siguen el Campo de texto y se pueden forzar con `data-state`.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<span class="ds-form-field__label">Temas</span>
<div class="ds-field ds-tags"><input class="ds-field__input" type="text" aria-label="Temas" placeholder="Escribe y pulsa Enter"></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Temas</span>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag"><span class="ds-tags__text">diseño</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li><li class="ds-tags__tag"><span class="ds-tags__text">tokens</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li></ul><input class="ds-field__input" type="text" aria-label="Temas"></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Temas</span>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag"><span class="ds-tags__text">diseño</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li><li class="ds-tags__tag" data-armed=""><span class="ds-tags__text">tokens</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li></ul><input class="ds-field__input" type="text" aria-label="Temas"></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Temas</span>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag"><span class="ds-tags__text">diseño</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li><li class="ds-tags__tag"><span class="ds-tags__text">tokens</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li></ul><input class="ds-field__input" type="text" aria-label="Temas" aria-invalid="true"></div>
<p class="ds-form-field__error"><ds-icon name="alert-circle"></ds-icon><span>“tokens” ya está en la lista.</span></p>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Temas</span>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag"><span class="ds-tags__text">diseño</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li><li class="ds-tags__tag"><span class="ds-tags__text">tokens</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li></ul><input class="ds-field__input" type="text" aria-label="Temas" disabled=""></div>
</div>
```

## Código

Funciona con `createForm`: con `required`, tener al menos una etiqueta ya basta.

```html
import { createTagField } from 'https://lumeui.dev/v/0.32/lume.js';

const tags = createTagField(document.querySelector('#assuntos'), {
  value: ['design', 'tokens'],
  max: 5,
  validate: (text) => (text.length > 20 ? 'Usa hasta 20 caracteres.' : null),
  onChange: (values) => console.log(values),
});

// al enviar: assuntos=design,tokens
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Se puede hacer todo con el teclado, y cada cambio se anuncia.

- Crear — Enter , — Enter o coma crean la etiqueta. Salir del campo también crea la que se estaba escribiendo, para que nada se pierda.
- Borrar sin sustos — Backspace — Backspace con el campo vacío primero marca la última etiqueta; solo el segundo la borra.
- Botones con nombre — Tab — Cada × es un botón en el Tab, con el nombre de la etiqueta: “Quitar diseño”.
- Cambios anunciados — Una región role="status" avisa qué entró y qué salió.

## Tokens usados

Además de los tokens del Campo de texto.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.border.control (`--ds-color-border-control`) | Contorno de la etiqueta | #3E516633 | #FFFFFF21 |
| color.border.strong (`--ds-color-border-strong`) | Etiqueta marcada | #3E51664D | #FFFFFF29 |
| color.bg.selected (`--ds-color-bg-selected`) | Fondo de la etiqueta marcada | #3E516612 | #C0CAD61A |
| color.fg.subtle (`--ds-color-fg-subtle`) | Ícono × | #5C6C7F | #9C9792 |
| color.bg.hover (`--ds-color-bg-hover`) | × en hover | #3E51660D | #FFFFFF0D |
| radius.full (`--ds-radius-full`) | Etiqueta | 9999 px | 9999 px |
| text.label-sm (`--ds-text-label-sm`) | Texto de la etiqueta | 13/18 · medium | 13/18 · medium |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** valores abiertos. Temas, correos para invitar, palabras clave: lo que la persona escribe, no lo que elige.
- **Evita:** una lista cerrada. Si las opciones ya se conocen, el Selector múltiple evita errores de escritura.
- **Consejo:** Enseña a crear. Un placeholder como “Escribe y pulsa Enter” lo resuelve la primera vez.
