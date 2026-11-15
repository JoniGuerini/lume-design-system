# Panel

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/painel

La superficie de una tarea del producto: etiqueta, título, controles y contenido en secciones con respiro. Todo plano — el destaque viene de la jerarquía, no de efectos.

En números: partes: 7 · variaciones: 3 · radio: 28 px · acción primaria: 1.

## Ejemplo

```html
<article class="ds-panel" aria-labelledby="guion-titulo">
  <header class="ds-panel__header">
    <div>
      <p class="ds-panel__eyebrow">Guion</p>
      <h2 class="ds-panel__title" id="guion-titulo">Guion de lanzamiento</h2>
    </div>
    <div class="ds-panel__actions">
      <button class="ds-icon-btn" aria-label="Cerrar"><ds-icon name="x"></ds-icon></button>
    </div>
    <div class="ds-panel__aside">
      <button class="ds-btn ds-btn--ghost ds-btn--sm"><ds-icon name="star"></ds-icon>Ejemplos</button>
    </div>
  </header>
  <div class="ds-panel__toolbar">
    <button class="ds-chip">Tono directo …</button>
    <span class="ds-panel__spacer"></span>
    <span class="ds-panel__meta">~3 min</span>
  </div>
  <div class="ds-panel__body">
    <section class="ds-section">
      <p class="ds-section__head"><span class="ds-section__stamp">00</span><span>Apertura</span></p>
      <p class="ds-section__text">…</p>
    </section>
  </div>
  <footer class="ds-panel__footer">
    <button class="ds-btn ds-btn--primary">Elegir formato</button>
  </footer>
</article>
```

## Anatomía

Siete partes, siempre en el mismo orden. Quien ya vio un panel sabe leer cualquier otro.

- 1 — Etiqueta — El tipo de contenido, atenuado: “Guion”, “Pedido”, “Revisión”. — `text.eyebrow · fg.subtle`
- 2 — Título — El tema, con tracking justo. Uno por panel. — `text.heading-lg`
- 3 — Acciones de ícono — Cerrar, duplicar, expandir — sin fondo, siempre con nombre. — `ds-icon-btn`
- 4 — Aside — Una acción secundaria en ghost, como “Ejemplos”. — `ds-btn--ghost`
- 5 — Barra de controles — Chips que ajustan el contenido; la meta queda a la derecha. — `ds-chip · ds-panel__meta`
- 6 — Sección — Sello + etiqueta, texto con respiro y acciones en línea. — `ds-section`
- 7 — Pie — La acción principal del panel. Solo una. — `ds-btn--primary`

Marcado de los ejemplos de esta sección:

```html
<article class="ds-panel ds-panel--compact">
<header class="ds-panel__header">
<div>
<p class="ds-panel__eyebrow"><span>Guion</span></p>
<p class="ds-panel__title"><span>Guion de lanzamiento</span></p>
</div>
<div class="ds-panel__actions"><span class="ds-icon-btn"><ds-icon name="stack"></ds-icon></span><span class="ds-icon-btn"><ds-icon name="x"></ds-icon></span></div>
<div class="ds-panel__aside"><span class="ds-btn ds-btn--ghost ds-btn--sm"><ds-icon name="star"></ds-icon>Ejemplos</span></div>
</header>
<div class="ds-panel__toolbar">
<span class="ds-chip ds-chip--sm"><span class="ds-chip__icon"><ds-icon name="pencil"></ds-icon></span>Tono directo<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></span>
<span class="ds-panel__spacer"></span>
<span class="ds-panel__meta">~3 min</span>
</div>
<div class="ds-panel__body">
<section class="ds-section">
<p class="ds-section__head"><span class="ds-section__stamp">00</span><span>Apertura</span></p>
<p class="ds-section__text">Empieza por el problema de quien va a leer.</p>
<div class="ds-section__actions"><span class="ds-inline-action"><ds-icon name="video"></ds-icon>En la escena<ds-icon name="plus"></ds-icon></span></div>
</section>
</div>
<footer class="ds-panel__footer"><span class="ds-btn ds-btn--primary"><ds-icon name="video"></ds-icon>Elegir formato</span></footer>
</article>
```

## Secciones

El sello da orden al contenido. Usa números para etapas, tiempos para guiones y solo la etiqueta cuando el orden no importa.

01 — Contexto

02 — Propuesta

Numerada — Etapas y listas de decisión.

00s — Abre con la situación

14s — Presenta el producto

Temporal — Guiones, videos y cronogramas.

Observaciones

Adjuntos

Solo etiqueta — Bloques sin orden: notas, detalles.

## Variaciones

Una estructura, tres formas de encajar en la pantalla.

Predeterminado `ds-panel`

La tarea principal de la pantalla, con sombra y fondo elevado.

Compacto `ds-panel--compact`

Cajones, paneles laterales y espacios más pequeños.

Plano `ds-panel--flat`

Dentro de otra superficie — sin sombra propia.

Marcado de los ejemplos de esta sección:

```html
<article class="ds-panel " aria-label="Guion de lanzamiento">
<header class="ds-panel__header">
<div>
<p class="ds-panel__eyebrow">Guion</p>
<h3 class="ds-panel__title">Guion de lanzamiento</h3>
</div>
<div class="ds-panel__actions"><button type="button" class="ds-icon-btn" aria-label="Duplicar"><ds-icon name="stack"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Cerrar"><ds-icon name="x"></ds-icon></button></div>
</header>
<div class="ds-panel__body">
<section class="ds-section">
<p class="ds-section__head"><span class="ds-section__stamp">00</span><span>Apertura</span></p>
<p class="ds-section__text">Empieza por el problema de quien va a leer: qué está trabado hoy y por qué importa ahora.</p>
<div class="ds-section__actions"><button type="button" class="ds-inline-action"><ds-icon name="video"></ds-icon>En la escena<ds-icon name="plus"></ds-icon></button></div>
</section><section class="ds-section">
<p class="ds-section__head"><span class="ds-section__stamp">01</span><span>Propuesta</span></p>
<p class="ds-section__text">Muestra el camino en una frase. Los detalles llegan después, cuando la persona ya sabe adónde va.</p>
<div class="ds-section__actions"><button type="button" class="ds-inline-action"><ds-icon name="file-text"></ds-icon>Referencias<ds-icon name="plus"></ds-icon></button></div>
</section>
</div>
</article>

<article class="ds-panel ds-panel--compact" aria-label="Guion de lanzamiento">
<header class="ds-panel__header">
<div>
<p class="ds-panel__eyebrow">Guion</p>
<h3 class="ds-panel__title">Guion de lanzamiento</h3>
</div>
<div class="ds-panel__actions"><button type="button" class="ds-icon-btn" aria-label="Duplicar"><ds-icon name="stack"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Cerrar"><ds-icon name="x"></ds-icon></button></div>
</header>
<div class="ds-panel__body">
<section class="ds-section">
<p class="ds-section__head"><span class="ds-section__stamp">00</span><span>Apertura</span></p>
<p class="ds-section__text">Empieza por el problema de quien va a leer: qué está trabado hoy y por qué importa ahora.</p>
<div class="ds-section__actions"><button type="button" class="ds-inline-action"><ds-icon name="video"></ds-icon>En la escena<ds-icon name="plus"></ds-icon></button></div>
</section>
</div>
</article>

<article class="ds-panel ds-panel--compact ds-panel--flat" aria-label="Guion de lanzamiento">
<header class="ds-panel__header">
<div>
<p class="ds-panel__eyebrow">Guion</p>
<h3 class="ds-panel__title">Guion de lanzamiento</h3>
</div>
<div class="ds-panel__actions"><button type="button" class="ds-icon-btn" aria-label="Duplicar"><ds-icon name="stack"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Cerrar"><ds-icon name="x"></ds-icon></button></div>
</header>
<div class="ds-panel__body">
<section class="ds-section">
<p class="ds-section__head"><span class="ds-section__stamp">00</span><span>Apertura</span></p>
<p class="ds-section__text">Empieza por el problema de quien va a leer: qué está trabado hoy y por qué importa ahora.</p>
<div class="ds-section__actions"><button type="button" class="ds-inline-action"><ds-icon name="video"></ds-icon>En la escena<ds-icon name="plus"></ds-icon></button></div>
</section>
</div>
</article>
```

## ¿Panel o tarjeta?

Los dos son superficies, pero resuelven cosas distintas.

### Panel

- Una tarea entera: leer, ajustar y decidir.
- Tiene controles, secciones y una acción principal.
- Normalmente uno por pantalla o por cajón.

### Tarjeta

- Un elemento de una colección: un resumen para abrir.
- Clicable entera, sin controles propios.
- Aparece en cuadrícula o lista, varias por pantalla.

## Accesibilidad

El orden visual del panel ya es el orden de lectura. Mantenlo así.

- Región con nombre — Usa `<article aria-labelledby>` apuntando al título.
- Título en el nivel correcto — El título es un heading de verdad (h2 en una página, h1 en un modal). La etiqueta atenuada es solo texto.
- Acciones de ícono con nombre — Cerrar, duplicar y expandir llevan `aria-label` y una pista con el mismo texto.
- Orden de lectura — Encabezado → controles → secciones → acción. No reordenes con CSS.
- Controles por teclado — ↑ ↓ Esc — Los chips abren menús navegables con flechas; Esc cierra y devuelve el foco.
- Los sellos son contenido — “00 · Apertura” se lee en orden. No uses el sello como única pista de secuencia en listas largas — numera el texto también.

## Tokens usados

El panel no tiene color propio: todo viene de superficie, texto y espacio.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fondo | #FFFFFF | #2C2A27 |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno | #3E516624 | #FFFFFF0F |
| radius.2xl (`--ds-radius-2xl`) | Radio | 28 px | 28 px |
| shadow.lg (`--ds-shadow-lg`) | Sombra | 0 4px 8px -2px rgb(45 58 74 / 0.07), 0 16px 36px -8px rgb(45 58 74 / 0.14) | 0 4px 8px -2px rgb(0 0 0 / 0.3), 0 16px 36px -8px rgb(0 0 0 / 0.5) |
| space.600 (`--ds-space-600`) | Padding lateral e inferior | 48 px | 48 px |
| space.400 (`--ds-space-400`) | Entre encabezado, controles y contenido | 32 px | 32 px |
| space.500 (`--ds-space-500`) | Entre secciones | 40 px | 40 px |
| text.eyebrow (`--ds-text-eyebrow`) | Etiqueta | 13/18 · medium | 13/18 · medium |
| text.heading-lg (`--ds-text-heading-lg`) | Título | 26/32 · regular | 26/32 · regular |
| text.display-sm (`--ds-text-display-sm`) | Título destacado | 40/44 · regular | 40/44 · regular |
| text.caption (`--ds-text-caption`) | Sello | 12/16 · regular | 12/16 · regular |
| text.body-md (`--ds-text-body-md`) | Texto de las secciones | 16/28 · regular | 16/28 · regular |
| color.fg.subtle (`--ds-color-fg-subtle`) | Etiqueta, sello y meta | #53657A | #9C9792 |

## Uso

El panel es para pantallas del producto — no para páginas enteras.

- **Haz:** una tarea por panel. Un guion, un pedido, una revisión. Si la pantalla tiene dos tareas, son dos paneles — o un panel y un cajón.
- **Evita:** panel como página. El inicio, la landing y la documentación tienen layouts propios. Meter todo en un panel lo vuelve un bloque de texto sin jerarquía de página.
- **Consejo:** Una acción en el pie. El primario cierra la tarea. Las acciones de apoyo van al aside o a las acciones en línea de las secciones.
