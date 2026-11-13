# Barras

Sección de Lume: Gráficos. Página: https://lumeui.dev/#/graficos/barras

Compara magnitudes lado a lado. Una base en cero, barras finas, el extremo redondeado llevando el dato — y el número solo donde cuenta la historia.

En números: layouts: 3 · orientaciones: 2 · grosor máximo: 24 px · contraste mínimo: 3,36:1.

## Ejemplo

```html
import { createBarChart } from 'https://lumeui.dev/v/0.27/lume.js';

createBarChart(document.querySelector('#ventas'), {
  title: 'Ventas por canal',
  subtitle: 'Miles de unidades · 1.er semestre',
  categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
  series: [
    { name: 'App', values: [30, 35, 41, 44, 52, 60] },
    { name: 'Tienda', values: [40, 42, 38, 50, 55, 52] },
    { name: 'Sitio web', values: [20, 18, 22, 25, 24, 28] },
  ],
  labels: 'none',
});
```

## Variantes

Cada forma responde a una pregunta. Elige por la pregunta, no por la apariencia.

Columnas `orientation: 'vertical'` — Una serie, un color. Solo el mayor valor recibe etiqueta; el eje lleva el resto.

Agrupadas `layout: 'grouped'` — Compara series dentro de cada categoría. Hasta 4 series, con 2 px entre barras vecinas.

Apiladas `layout: 'stacked'` — El total y la composición juntos. Solo el extremo superior es redondeado; el total va arriba.

100% `layout: 'percent'` — Solo la composición: cada columna suma 100%. El tooltip muestra la parte y el valor real.

Horizontales `orientation: 'horizontal'` — Para rankings y nombres largos. El valor va en el extremo, así que el eje desaparece.

Divergentes `diverging: true` — Por encima y por debajo de una referencia, en los dos extremos de la escala divergente. El cero es la meta.

Énfasis `highlight: 11` — Cuando la historia es una sola barra: queda en color, el resto se vuelve contexto en gris.

Embudo `ordinal: true` — Etapas en secuencia en una rampa de un tono. El tooltip muestra cuánto pasó de la etapa anterior.

## Estados

El gráfico responde al puntero, al teclado y a los datos. Los dos primeros empiezan con el estado aplicado — interactúa para verlo de nuevo.

Hover y foco — La franja de la categoría se ilumina y el tooltip lista todas las series. Con Tab y flechas, lo mismo — y un lector de pantalla oye los valores.

Serie oculta — Haz clic en la leyenda para ocultar una serie. Las demás mantienen el color: el color sigue a la serie, no a la posición.

Cargando — Recargar

Al buscar datos nuevos, el dibujo anterior queda a media opacidad. Sin esqueleto, sin saltos de layout.

Vacío — Sin datos, el área del gráfico se vuelve un aviso con la misma altura. Di qué hacer, si hay algo.

Marcado de los ejemplos de esta sección:

```html
<figure class="ds-chart" data-kind="bar">
<figcaption class="ds-chart__head">
<div class="ds-chart__titles">
<p class="ds-chart__title" id="ds-bar-19-title">Ventas de la semana</p>
</div>
<div class="ds-chart__actions">
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-chart__toggle" data-chart-toggle="" aria-pressed="false" aria-label="Ver como tabla" data-ds-tooltip="Ver como tabla"><ds-icon name="table"></ds-icon></button>
</div>
</figcaption>
<div class="ds-chart__legend" data-legend="" hidden=""></div>
<div class="ds-chart__body" data-body="">
<div class="ds-chart__plot" data-plot="" role="group" aria-roledescription="gráfico" aria-describedby="ds-bar-19-hint" aria-label="Ventas de la semana. Gráfico de columnas, 0 categorías"><div class="ds-chart__empty"><ds-icon name="bar-chart"></ds-icon><span>Ninguna venta en este período.</span></div></div>
<div class="ds-chart__tooltip" data-tooltip="" hidden=""></div>
</div>
<div class="ds-chart__table" data-table="" hidden=""></div>
<p class="ds-visually-hidden" id="ds-bar-19-hint">Usa las flechas para recorrer los valores. La tabla tiene todos los datos.</p>
<p class="ds-visually-hidden" aria-live="polite" data-live=""></p></figure>
```

## Anatomía

Seis medidas fijas hacen el aspecto tranquilo. El dato es lo único que puede llamar la atención.

- 1 — Línea base — Toda barra nace del cero, en una línea de 1 px en `chart.axis`. La barra no corta el eje.
- 2 — Barra — Como máximo 24 px de grosor. Lo que sobra de la franja es respiro, no una barra más gruesa.
- 3 — Extremo de datos — Radio de 4 px solo en el extremo que lleva el valor. La base queda recta, pegada al cero.
- 4 — Respiro — 2 px entre barras vecinas y entre segmentos apilados, dejando ver la superficie. Nunca un contorno.
- 5 — Etiqueta de valor — En el extremo, en `fg.default` — el texto nunca usa el color de la serie. Solo donde cuenta la historia.
- 6 — Cuadrícula y eje — Líneas de 1 px, sólidas, en `chart.grid`. Marcas redondas, compactas a partir de mil.

## Accesibilidad

Todo gráfico de barras ya sale así. Lo que sigue siendo tuyo: un título claro y un formato de número que tenga sentido.

- Tabla siempre a mano — El botón del encabezado cambia el gráfico por una `<table>` con todos los valores — incluso los que el gráfico no etiqueta. El tooltip nunca es el único camino hasta un número.
- Teclado — Tab ← → Home End Esc — Tab enfoca el gráfico; las flechas recorren las categorías; Home y End van a los extremos; Esc cierra el tooltip.
- Lector de pantalla — El gráfico se anuncia con título, tipo y número de categorías. Con cada flecha, una región en vivo lee la categoría y el valor de cada serie.
- Nunca solo color — Con dos series o más hay leyenda; posición y etiquetas ayudan. Para daltonismo total, impresión y alto contraste, activa `texture`.
- Contraste verificado — Los 8 colores de serie superan 3:1 sobre la superficie en los dos temas — el menor queda en 3,36:1. El orden de los colores se validó para protanopia y deuteranopia.
- Movimiento — Las barras crecen una vez, cuando aparecen. Con movimiento reducido, nada se anima.

## Tokens usados

Las marcas usan los colores de gráfico; los textos usan siempre los tokens de texto.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.chart.series.1 (`--ds-color-chart-series-1`) | Serie 1 (y la única, cuando hay una) | #D95C0A | #D95C0A |
| color.chart.series.2 (`--ds-color-chart-series-2`) | Serie 2 — y así hasta la 8 | #2A8ED6 | #2A8ED6 |
| color.chart.muted (`--ds-color-chart-muted`) | Contexto en gris (énfasis) | #C0CAD6 | #4A4744 |
| color.chart.div.2 (`--ds-color-chart-div-2`) | Por debajo de la referencia | #48A7F1 | #2A8ED6 |
| color.chart.div.6 (`--ds-color-chart-div-6`) | Por encima de la referencia | #F57630 | #D95C0A |
| color.chart.ord.5 (`--ds-color-chart-ord-5`) | Primera etapa del embudo | #923700 | #FF945E |
| color.chart.ord.1 (`--ds-color-chart-ord-1`) | Última etapa del embudo | #FF945E | #923700 |
| color.chart.grid (`--ds-color-chart-grid`) | Líneas de cuadrícula | #DAE0E8 | #33312E |
| color.chart.axis (`--ds-color-chart-axis`) | Línea base | #C0CAD6 | #4A4744 |
| color.fg.default (`--ds-color-fg-default`) | Etiquetas de valor | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | Etiquetas de categoría | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Marcas del eje | #5C6C7F | #9C9792 |
| color.bg.hover (`--ds-color-bg-hover`) | Franja de la categoría con hover | #3E51660D | #FFFFFF0D |
| color.bg.raised (`--ds-color-bg-raised`) | Fondo del tooltip | #FFFFFF | #2C2A27 |
| shadow.md (`--ds-shadow-md`) | Sombra del tooltip | 0 2px 4px -1px rgb(45 58 74 / 0.06), 0 8px 20px -4px rgb(45 58 74 / 0.1) | 0 2px 4px -1px rgb(0 0 0 / 0.28), 0 8px 20px -4px rgb(0 0 0 / 0.36) |
| color.border.focus (`--ds-color-border-focus`) | Anillo de foco del gráfico | #53657A | #C0CAD6 |

## Uso

Las barras comparan longitud. Casi todo error viene de olvidarlo.

- **Haz:** empieza en cero. La longitud de la barra es el valor. Con la base en cero, 66 parece un poco mayor que 62 — porque lo es.
- **Evita:** eje cortado. Empezar en 60 hace que un 6% de diferencia parezca el triple. Si la variación pequeña es la historia, usa una línea.
- **Consejo:** ¿Nombres largos? Acuesta las barras. En horizontal la etiqueta cabe entera, sin girar texto, y el ranking se lee de arriba abajo.
- **Haz:** una serie, un color. Equipos, productos y regiones no tienen orden. Todas las barras en el color del slot 1; la longitud ya dice quién es mayor.
- **Evita:** pintar cada barra. Colores distintos prometen series distintas. Para categorías nominales, eso es ruido — y gasta los colores que vas a necesitar.
- **Consejo:** Más de 4 series. Agrupadas con 5 series o más se vuelven un peine ilegible. Apila, junta la cola en “Otros” o divide en varios gráficos pequeños.

## API

Una llamada monta el gráfico; `update()` cambia los datos sin recrear el marco.

| Opción | Valores | Predeterminado | Qué hace |
| --- | --- | --- | --- |
|  `categories`  | string[] | — | Etiquetas de las categorías, en el orden del eje. |
|  `series`  | [{ name, values, color? }] | — | Una entrada por serie. Sin `color`, la serie usa el slot de su posición (1–8). |
|  `orientation`  | 'vertical' \| 'horizontal' | 'vertical' | Horizontal para rankings y nombres largos. |
|  `layout`  | 'grouped' \| 'stacked' \| 'percent' | 'grouped' | Lado a lado, apilado o apilado al 100%. |
|  `labels`  | 'auto' \| 'none' \| 'max' \| 'last' \| 'all' | 'auto' | Etiquetas de valor. `auto` muestra todas solo en barras horizontales de una serie o apiladas. |
|  `highlight`  | número | — | Índice de la categoría destacada; las demás quedan en `chart.muted`. |
|  `diverging`  | boolean | false | Positivo y negativo en los extremos de la escala divergente. Leyenda con `positiveLabel` y `negativeLabel`. |
|  `ordinal`  | boolean | false | Categorías en secuencia (embudo, rangos) en una rampa de un tono. |
|  `format`  | preset \| Intl \| función | 'number' | `'integer'`, `'compact'`, `'percent'`, `'currency'` … El eje se compacta solo; cámbialo con `axisFormat`. |
|  `height`  | px | 280 | Altura total de las columnas, incluido el eje. Las barras horizontales calculan la altura por las filas. |
|  `title · subtitle`  | string | — | Encabezado del gráfico. Sin título, pasa `label` para nombrarlo. |
|  `card · table · texture`  | boolean | false · true · false | Superficie con contorno, botón de tabla y rayado de reserva. |

```html
const chart = createBarChart(el, { title: 'Ventas', categories, series });

chart.update({ series: nuevasSeries });   // redibuja manteniendo leyenda y tabla
chart.setLoading(true);                   // media opacidad mientras busca
chart.destroy();                          // quita todo y los observadores
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```
