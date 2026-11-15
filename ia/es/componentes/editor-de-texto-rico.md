# Editor de texto enriquecido

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/editor-de-texto-rico

Un campo de texto que da formato: títulos, listas, citas, negrita, cursiva y enlaces, con la barra de herramientas de Lume. Sin dependencias, sobre el contenteditable del navegador, y el HTML que sale siempre está limpio.

En números: herramientas: 14 · atajos de Markdown: 5 · etiquetas en el HTML: 15 · dependencias: 0.

## Ejemplo

```html
<h2>Lume 0.37</h2><p>Cambiar el orden y el lugar de las cosas, con el <strong>ratón</strong>, el <strong>toque</strong> o el <strong>teclado</strong>.</p><ul><li>Lista ordenable, con o sin agarre</li><li>Kanban, con columnas que intercambian tarjetas</li></ul><blockquote>Cada paso se anuncia al lector de pantalla.</blockquote><p>Mira todo en <a href="#/novidades">Novedades</a>.</p>
```

## Variantes

La barra muestra los grupos que pidas en `tools`, en orden.

Mínimo `tools: ['marks', 'link']` — Para un comentario o una descripción corta: solo negrita, cursiva, subrayado, tachado y enlace.

Sin contorno `ds-editor--borderless` — Cuando el editor es la página misma, como una nota o un documento: sin caja alrededor.

## Estados

El contorno y el foco son los del Campo. En la barra, el botón presionado muestra el formato de donde está el cursor.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-editor"><div class="ds-toolbar ds-toolbar--plain ds-editor__toolbar"><div class="ds-toolbar__group"><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="true"><ds-icon name="bold"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="italic"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="link"></ds-icon></span></div></div><div class="ds-editor__content" data-placeholder="Escribe la nota de la versión…">La tarjeta de la <strong>última versión</strong> en Inicio lee el resumen del changelog.</div></div>

<div class="ds-editor"><div class="ds-toolbar ds-toolbar--plain ds-editor__toolbar"><div class="ds-toolbar__group"><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="true"><ds-icon name="bold"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="italic"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="link"></ds-icon></span></div></div><div class="ds-editor__content" data-placeholder="Escribe la nota de la versión…"><p><br></p></div></div>

<div class="ds-editor" data-disabled=""><div class="ds-toolbar ds-toolbar--plain ds-editor__toolbar"><div class="ds-toolbar__group"><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="true"><ds-icon name="bold"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="italic"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="link"></ds-icon></span></div></div><div class="ds-editor__content" data-placeholder="Escribe la nota de la versión…">La tarjeta de la <strong>última versión</strong> en Inicio lee el resumen del changelog.</div></div>
```

## Código

Con `name`, el editor crea un campo oculto con el HTML, y el formulario lo envía como cualquier otro campo.

```html
<form>
  <div class="ds-editor">
    <div class="ds-editor__content" aria-label="Nota de la versión"><p>…</p></div>
  </div>
</form>

<script type="module">
  import { createEditor } from 'https://lumeui.dev/v/1.1/lume.js';

  const editor = createEditor(document.querySelector('.ds-editor'), {
    tools: ['history', 'marks', 'blocks', 'align', 'link'],
    placeholder: 'Escribe la nota de la versión…',
    name: 'nota', // <input type="hidden" name="nota" value="<h2>…</h2>">
    onChange: (html) => console.log(html),
  });

  editor.value; // HTML limpio, o "" si está vacío
  editor.getText();
</script>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Un campo de texto con nombre y una barra de herramientas que dice el estado de cada botón.

- Campo con nombre — El texto es role="textbox" con aria-multiline. Dale un nombre con aria-label o una etiqueta vinculada con aria-labelledby.
- Barra — Tab ← → — Es la Barra de herramientas: un solo Tab, flechas entre los botones, y aria-pressed dice si la negrita, la lista o la alineación están activas donde está el cursor. Hacer clic en ella no le quita el foco al texto.
- Atajos — Ctrl B Ctrl I Ctrl U Ctrl K — Negrita, cursiva y subrayado como en cualquier editor; Ctrl/⌘ + K abre el enlace; los botones anuncian su atajo con aria-keyshortcuts.
- Markdown — Al comienzo de un párrafo, `#`, `##`, `-`, `1.` y `>` se vuelven título, subtítulo, lista, lista numerada y cita. Ctrl/⌘ + Z lo deshace.
- Enlace — Enter Esc — Abre una fila con el campo de la dirección justo debajo de la barra; Enter aplica y Esc vuelve al texto, con la selección en su lugar.
- Pegar limpio — Lo que viene de otro sitio, de Google Docs o de Word pierde fuentes, colores y scripts: quedan solo la estructura y las marcas que tiene el editor.

## Tokens usados

Los del Campo, más la tipografía de lectura.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.field (`--ds-color-bg-field`) | Fondo | #FFFFFF | #2C2A27 |
| color.border.default (`--ds-color-border-default`) | Contorno | #3E516633 | #FFFFFF1A |
| color.border.focus (`--ds-color-border-focus`) | Contorno con foco | #53657A | #C0CAD6 |
| color.border.subtle (`--ds-color-border-subtle`) | Línea bajo la barra | #3E516624 | #FFFFFF0F |
| color.bg.selected (`--ds-color-bg-selected`) | Botón presionado | #3E516612 | #C0CAD61A |
| color.border.strong (`--ds-color-border-strong`) | Trazo de la cita | #3E51664D | #FFFFFF29 |
| text.heading-md (`--ds-text-heading-md`) | Título | 21/28 · regular | 21/28 · regular |
| text.body-md (`--ds-text-body-md`) | Texto | 16/28 · regular | 16/28 · regular |

## Uso

Cuando el formato ayuda a quien va a leer.

- **Haz:** texto que otra persona lee. Notas de versión, descripciones, comentarios largos: títulos y listas agilizan la lectura.
- **Evita:** un campo que solo necesita texto. Nombre, asunto, una frase: usa el Campo o el área de texto. Ahí la barra solo estorba.
- **Consejo:** Pide solo lo que vas a usar. Un comentario no necesita alineación. Con tools, la barra queda con los grupos que tienen sentido.
