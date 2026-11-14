# Valoración

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/avaliacao

Estrellas para dar una nota o mostrar el promedio. Para calificar, cada estrella es un radio: el formulario envía el valor sin código.

En números: formas: 2 · tamaños: 3 · media estrella: al mostrar · rol ARIA: radiogroup.

## Ejemplo

```html
<div class="ds-rating" aria-label="¿Cómo calificas esta página?"></div>

<script type="module">
  import { createRating } from 'https://lumeui.dev/v/0.36/lume.js';
  createRating(document.querySelector('.ds-rating'), { name: 'nota', value: 4 });
</script>
```

## Variantes

Calificar usa `createRating`. Solo mostrar usa `ratingHtml`, que acepta cualquier decimal y corta la estrella en el punto justo.

¿Cómo calificas esta página?

Calificar `createRating` — En un formulario, con el nombre del campo. La pregunta es la etiqueta del grupo.

Solo mostrar `ratingHtml` — Promedio con media estrella, el número al lado y cuántas notas.

Tamaños `ds-rating--sm · ds-rating--lg` — 16 px en listas y tarjetas, 20 px por defecto, 28 px cuando la nota es el tema de la pantalla.

## Estados

La estrella encendida usa el color del indicador. Con el ratón, las estrellas hasta la del puntero se encienden antes del clic.

## Código

Para calificar, un elemento vacío; el JavaScript pone las estrellas. Para mostrar, el marcado viene listo.

```html
<div class="ds-rating" aria-label="¿Cómo calificas esta página?"></div>
<span data-media></span>

<script type="module">
  import { createRating, ratingHtml } from 'https://lumeui.dev/v/0.36/lume.js';

  createRating(document.querySelector('.ds-rating'), {
    name: 'nota',
    onChange: (value) => console.log(value),
  });
  document.querySelector('[data-media]').innerHTML = ratingHtml(4.5, { text: true, count: 128 });
</script>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Calificar es un grupo de radios; mostrar es una imagen con el texto de la nota.

- Nombre — El grupo lleva la pregunta (aria-label o aria-labelledby) y cada estrella dice “3 estrellas”.
- Teclado — Tab ← → — Tab entra en el grupo y las flechas cambian la nota, como en cualquier radio. Desde el teclado, la nota nunca se borra sin querer.
- Solo mostrar — Se vuelve role="img" con “Calificación 4,5 de 5”: el lector de pantalla lee la nota una vez, no cinco estrellas.
- No solo el color — Al mostrar, usa el número al lado (text: true) cuando media estrella importe.

## Tokens usados

Todo lo que consume la valoración.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.brand.indicator (`--ds-color-brand-indicator`) | Estrella encendida | #C97B63 | #DE9680 |
| color.border.default (`--ds-color-border-default`) | Estrella apagada | #3E516633 | #FFFFFF1A |
| color.border.strong (`--ds-color-border-strong`) | Estrella apagada con el ratón | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Foco del teclado | #53657A | #C0CAD6 |
| color.fg.default (`--ds-color-fg-default`) | Número de la nota | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | Cuántas notas | #46586E | #CEC8C1 |
| size.icon.sm (`--ds-size-icon-sm`) | Estrella pequeña | 16 px | 16 px |
| size.icon.md (`--ds-size-icon-md`) | Estrella predeterminada | 20 px | 20 px |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** muestra cuántas notas. Un promedio de 5 con dos notas dice menos que 4,5 con cien. El número entre paréntesis lo cuenta.
- **Evita:** estrellas para elegir una opción. Las estrellas son una nota de satisfacción. Para elegir entre cosas distintas, usa radios o control segmentado.
- **Consejo:** Cinco estrellas bastan. Las escalas más grandes piden una precisión que la persona no tiene. Mantén el estándar de 5.
