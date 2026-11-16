# Paneles redimensionables

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/paineis-redimensionaveis

Divide un área en partes que la persona ajusta arrastrando el divisor. Úsalo cuando cada uno lee a su manera: una lista junto al contenido, la vista previa sobre el código.

En números: direcciones: 2 · línea: 1 px · área para agarrar: 9 px · teclas: 5.

## Ejemplo

```html
<div class="ds-resizable" aria-label="Editor">
  <div class="ds-resizable__panel" data-size="30" data-min="20">…</div>
  <div class="ds-resizable__panel" data-min="30">…</div>
</div>

<script type="module">
  import { createResizable } from 'https://lumeui.dev/v/1.9/lume.js';
  createResizable(document.querySelector('.ds-resizable'), {
    storageKey: 'editor', // guarda el tamaño en el navegador
  });
</script>
```

## Variantes

Lado a lado o uno sobre otro, con `data-direction`. Un panel puede tener otros dentro.

Lado a lado `ds-resizable` — La lista con tamaño mínimo; el contenido se queda con el resto.

Uno sobre otro `data-direction="vertical"` — La vista previa arriba y el código abajo.

Anidado, con asa y plegable `ds-resizable--grip · data-collapsible` — La lista se cierra al arrastrarla hasta el final o con Enter en el divisor. El asa a la vista ayuda cuando arrastrar no es obvio.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-resizable" data-demo="horizontal" aria-label="Componentes y vista previa" data-direction="horizontal"><div class="ds-resizable__panel" data-size="32" data-min="22" data-max="50" id="ds-resizable-panel-2"><div>
<p>00 · Componentes</p>
<ul role="list"><li>Botón</li><li>Campo</li><li>Selección</li><li>Carrusel</li><li>Selector de color</li><li>Paneles</li></ul>
</div></div><div class="ds-resizable__handle" role="separator" aria-orientation="vertical" aria-controls="ds-resizable-panel-2" data-index="0" aria-valuenow="32" aria-valuemin="22" aria-valuemax="50" aria-label="Redimensionar paneles"><span class="ds-resizable__grip" aria-hidden="true"></span></div><div class="ds-resizable__panel" data-min="35"><div>
<p>01 · Vista previa</p>
<div>
<button type="button" class="ds-btn ds-btn--primary">Guardar</button>
<button type="button" class="ds-btn ds-btn--secondary">Cancelar</button>
</div>
</div></div></div>

<div class="ds-resizable" data-direction="vertical" data-demo="vertical" aria-label="Vista previa y código"><div class="ds-resizable__panel" data-min="30" id="ds-resizable-panel-3"><div>
<p>01 · Vista previa</p>
<div>
<button type="button" class="ds-btn ds-btn--primary">Guardar</button>
<button type="button" class="ds-btn ds-btn--secondary">Cancelar</button>
</div>
</div></div><div class="ds-resizable__handle" role="separator" aria-orientation="horizontal" aria-controls="ds-resizable-panel-3" data-index="0" aria-valuenow="55" aria-valuemin="30" aria-valuemax="75" aria-label="Redimensionar paneles"><span class="ds-resizable__grip" aria-hidden="true"></span></div><div class="ds-resizable__panel" data-size="45" data-min="25"><div>
<p>02 · Código</p>
<pre>&lt;button class="ds-btn ds-btn--primary"&gt; Guardar &lt;/button&gt;</pre>
</div></div></div>
```

## Estados

La línea se engrosa con el ratón y toma el color del indicador mientras se arrastra. El foco del teclado contornea toda el área para agarrar.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-resizable" data-direction="horizontal">
<div class="ds-resizable__panel"></div>
<div class="ds-resizable__handle" role="separator" aria-orientation="vertical" aria-valuenow="40"><span class="ds-resizable__grip" aria-hidden="true"></span></div>
<div class="ds-resizable__panel"></div>
</div>
```

## Código

Los paneles son tuyos; el JavaScript pone los divisores entre ellos. Límites en % (`data-min="20"`) o en px (`data-min="240px"`).

```html
<div class="ds-resizable" aria-label="Editor">
  <div class="ds-resizable__panel" data-size="30" data-min="20" data-collapsible>…</div>
  <div class="ds-resizable__panel" data-min="30">…</div>
</div>

<script type="module">
  import { createResizable } from 'https://lumeui.dev/v/1.9/lume.js';
  createResizable(document.querySelector('.ds-resizable'), {
    storageKey: 'editor', // guarda el tamaño en el navegador
  });
</script>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Sigue el patrón de divisor móvil de ARIA (window splitter).

- Nombre y rol — Cada divisor es un separator con foco, que dice el tamaño del panel anterior en porcentaje.
- Teclado — ← → Home End Enter — Las flechas cambian el tamaño (con Shift, más rápido), Home y End van a los límites y Enter cierra y abre el panel plegable.
- Panel cerrado — Queda inert: el Tab no cae en lo que no está a la vista.
- Área para agarrar — La línea tiene 1 px, pero el área para agarrar tiene 9 px, para que el ratón y el dedo acierten.

## Tokens usados

Todo lo que consumen los paneles.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.border.default (`--ds-color-border-default`) | Línea del divisor y contorno del asa | #3E516633 | #FFFFFF1A |
| color.border.strong (`--ds-color-border-strong`) | Línea con el ratón | #3E51664D | #FFFFFF29 |
| color.brand.indicator (`--ds-color-brand-indicator`) | Línea mientras se arrastra | #C97B63 | #DE9680 |
| color.border.focus (`--ds-color-border-focus`) | Foco del teclado | #53657A | #C0CAD6 |
| color.bg.raised (`--ds-color-bg-raised`) | Fondo del asa | #FFFFFF | #2C2A27 |
| radius.sm (`--ds-radius-sm`) | Esquinas del foco | 8 px | 8 px |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** tamaño mínimo siempre. Sin mínimo, un panel se vuelve una rendija que nadie puede usar.
- **Evita:** en el móvil. En pantallas estrechas, apila las partes o usa pestañas: arrastrar una línea fina con el dedo es difícil.
- **Consejo:** Guarda el tamaño. Con storageKey, la persona lo ajusta una vez y lo encuentra igual en la próxima visita.
