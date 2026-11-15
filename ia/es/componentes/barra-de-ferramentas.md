# Barra de herramientas

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/barra-de-ferramentas

Agrupa botones de ícono de una misma área, como los de formato de un editor. Toda la barra es una sola parada del Tab; las flechas se mueven entre los botones.

En números: paradas del Tab: 1 · teclas: 4 · altura: 36 px · rol ARIA: toolbar.

## Ejemplo

```html
<div class="ds-toolbar" aria-label="Formato">
  <div class="ds-toolbar__group">
    <button type="button" class="ds-icon-btn" aria-label="Negrita" aria-pressed="false">…</button>
    <button type="button" class="ds-icon-btn" aria-label="Cursiva" aria-pressed="false">…</button>
  </div>
  <div class="ds-toolbar__separator"></div>
  <div class="ds-toolbar__group" data-exclusive>
    <button type="button" class="ds-icon-btn" aria-label="Alinear a la izquierda" aria-pressed="true">…</button>
    <button type="button" class="ds-icon-btn" aria-label="Centrar" aria-pressed="false">…</button>
  </div>
</div>

<script type="module">
  import { createToolbar } from 'https://lumeui.dev/v/1.0/lume.js';
  createToolbar(document.querySelector('.ds-toolbar'), {
    onToggle: (button, pressed) => console.log(button.ariaLabel, pressed),
  });
</script>
```

## Variantes

Con contorno, para la barra que queda sobre el contenido; `ds-toolbar--plain` cuando ya está dentro de una superficie, como el encabezado de una tarjeta.

Formato `ds-toolbar` — Grupos separados por una línea: estilo, alineación (uno a la vez), listas y deshacer.

Vertical `aria-orientation="vertical"` — Al costado de un área; las flechas arriba y abajo se mueven.

Sin contorno `ds-toolbar--plain` — Acciones de un bloque de código, en su esquina.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-toolbar ds-toolbar--plain" aria-label="Acciones del código" data-demo="plain" role="toolbar"><button type="button" class="ds-icon-btn" aria-label="Copiar" data-ds-tooltip="Copiar" data-value="copy"><ds-icon name="copy"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Descargar" data-ds-tooltip="Descargar" data-value="download"><ds-icon name="download"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Copiar enlace" data-ds-tooltip="Copiar enlace" data-value="link"><ds-icon name="link"></ds-icon></button><div class="ds-toolbar__separator" role="separator" aria-orientation="vertical"></div><button type="button" class="ds-icon-btn" aria-label="Más acciones" data-ds-tooltip="Más acciones" data-value="more-horizontal"><ds-icon name="more-horizontal"></ds-icon></button></div>
```

## Estados

El botón presionado recibe el fondo de seleccionado, que se mantiene con el ratón encima. Los desactivados quedan fuera de las flechas.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-toolbar" aria-label="Ejemplo"><div class="ds-toolbar__group"><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Negrita" data-value="bold"><ds-icon name="bold"></ds-icon></button><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Cursiva" data-value="italic"><ds-icon name="italic"></ds-icon></button><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Subrayado" data-value="underline"><ds-icon name="underline"></ds-icon></button></div></div>

<div class="ds-toolbar" aria-label="Ejemplo"><div class="ds-toolbar__group"><button type="button" class="ds-icon-btn" aria-pressed="true" aria-label="Negrita" data-value="bold"><ds-icon name="bold"></ds-icon></button><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Cursiva" data-value="italic"><ds-icon name="italic"></ds-icon></button><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Subrayado" data-value="underline"><ds-icon name="underline"></ds-icon></button></div></div>

<div class="ds-toolbar" aria-label="Ejemplo"><div class="ds-toolbar__group"><button type="button" class="ds-icon-btn" aria-label="Deshacer" data-value="undo"><ds-icon name="undo"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Rehacer" data-value="redo" disabled=""><ds-icon name="redo"></ds-icon></button></div></div>
```

## Código

Los botones son tuyos; la barra se encarga del Tab, las flechas y el `aria-pressed`.

```html
<div class="ds-toolbar" aria-label="Formato">
  <div class="ds-toolbar__group">
    <button type="button" class="ds-icon-btn" aria-label="Negrita" aria-pressed="false">…</button>
    <button type="button" class="ds-icon-btn" aria-label="Cursiva" aria-pressed="false">…</button>
  </div>
  <div class="ds-toolbar__separator"></div>
  <div class="ds-toolbar__group" data-exclusive>
    <button type="button" class="ds-icon-btn" aria-label="Alinear a la izquierda" aria-pressed="true">…</button>
    <button type="button" class="ds-icon-btn" aria-label="Centrar" aria-pressed="false">…</button>
  </div>
</div>

<script type="module">
  import { createToolbar } from 'https://lumeui.dev/v/1.0/lume.js';
  createToolbar(document.querySelector('.ds-toolbar'), {
    onToggle: (button, pressed) => console.log(button.ariaLabel, pressed),
  });
</script>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Sigue el patrón de toolbar de ARIA. Dale un nombre a la barra con aria-label.

- Una parada del Tab — Tab entra en la barra en el último botón usado y sale con el siguiente Tab: quien navega con teclado no pasa por diez botones.
- Teclado — ← → Home End — Las flechas se mueven y dan la vuelta; Home y End van a los extremos. En vertical, las flechas arriba y abajo.
- Activar y desactivar — Un botón con aria-pressed dice “presionado” o no; en un grupo con data-exclusive, solo uno queda presionado.
- Nombre de cada botón — Un botón solo de ícono necesita aria-label; la pista (data-ds-tooltip) muestra el mismo nombre a quien usa el ratón.

## Tokens usados

Todo lo que consume la barra, además del botón de ícono.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Fondo de la barra | #FFFFFF | #24221F |
| color.border.control (`--ds-color-border-control`) | Contorno de la barra | #3E516633 | #FFFFFF21 |
| color.border.default (`--ds-color-border-default`) | Separador | #3E516633 | #FFFFFF1A |
| color.bg.selected (`--ds-color-bg-selected`) | Botón presionado | #3E516612 | #C0CAD61A |
| space.050 (`--ds-space-050`) | Respiro de la barra y del separador | 4 px | 4 px |
| radius.md (`--ds-radius-md`) | Esquinas de la barra | 12 px | 12 px |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** agrupa por lo que hacen. Estilo con estilo, alineación con alineación. El separador muestra dónde termina un grupo.
- **Evita:** dos o tres botones sueltos. Sin grupo ni teclado propio, botones de ícono lado a lado bastan.
- **Consejo:** Pista en cada ícono. Los íconos de formato parecen obvios hasta que alguien no reconoce uno. La pista cuesta poco.
