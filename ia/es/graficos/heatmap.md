# Mapa de calor

Sección de Lume: Gráficos. Página: https://lumeui.dev/#/graficos/heatmap

Intensidad en una cuadrícula — día × hora, o día a día en el año. Un solo tono que se vuelve más fuerte con el valor; dos tonos con el medio neutro cuando la pregunta es por encima o por debajo de una referencia.

En números: formatos: 2 · escalas: 2 · rangos: hasta 7 · respiro: 2 px.

## Ejemplo

```html
import { createHeatmap } from 'https://lumeui.dev/v/0.27/lume.js';

const chart = createHeatmap(document.querySelector('#pedidos'), {
  title: 'Pedidos por hora',
  subtitle: 'Última semana',
  rows: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
  columns: ['0 h', '1 h', '2 h', /* … */ '23 h'],
  values: pedidos, // 7 filas × 24 columnas; null = sin dato
  valueLabel: 'pedidos',
  format: 'integer',
});
```

## Variantes

Matriz para patrones que se repiten (día de la semana × hora); calendario para el año entero de una vez.

Matriz `createHeatmap()` — Filas y columnas con significado. El pico del mediodía y el valle de la madrugada saltan a la vista — sin leer un número.

Divergente `scale: 'diverging'` — Frío por debajo de la media, cálido por encima, gris en el medio. El medio tiene que leerse como “nada”.

Calendario `createCalendarHeatmap()` — Un cuadrado por día, una columna por semana. Abre en la semana más reciente; en pantallas estrechas, desplázate hacia el pasado. La tabla resume por mes.

## Escala y rangos

El valor se vuelve un rango de color, no un tono continuo — los rangos el ojo los puede comparar. En el oscuro, el ancla se invierte: más es más claro.

Lume claro

Secuencial · 7 rangos — vacío — 1 — 2 — 3 — 4 — 5 — 6 — 7

Secuencial · 5 rangos — vacío — 1 — 2 — 3 — 4 — 5 — 6 — 7

Divergente · 7 rangos — −3 — −2 — −1 — medio — +1 — +2 — +3

Lume oscuro

Secuencial · 7 rangos — vacío — 1 — 2 — 3 — 4 — 5 — 6 — 7

Secuencial · 5 rangos — vacío — 1 — 2 — 3 — 4 — 5 — 6 — 7

Divergente · 7 rangos — −3 — −2 — −1 — medio — +1 — +2 — +3

- Rangos iguales — El intervalo entre el mínimo y el máximo se divide en partes iguales. Con 5 rangos, usamos los pasos 1, 2, 4, 6 y 7, para cubrir toda la rampa.
- Vacío no es cero — Una celda sin dato (y el cero, en la secuencial) usa el color de la cuadrícula — queda claro que ahí no hay nada, y no “poco”.
- El medio es una decisión — En la divergente, `center` define qué es neutro: cero en una variación, la media en un conteo, la meta en un resultado.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-chart__scale"><span>Menos</span><span class="ds-chart__scale-bins"><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span></span><span>Más</span></div>

<div class="ds-chart__scale"><span>−8</span><span class="ds-chart__scale-bins"><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span></span><span>+8</span></div>
```

## Accesibilidad

El color solo no lleva un número. Por eso el mapa siempre tiene otro camino hasta el valor.

- Tabla siempre a mano — El botón de tabla cambia el mapa por los números: filas × columnas en la matriz y un resumen por mes en el calendario — 365 filas no ayudan a nadie.
- Teclado en dos direcciones — ← ↑ ↓ → Home End — Tab enfoca el mapa; las flechas se mueven entre las celdas, Home y End van al principio y al final de la fila, Esc cierra el tooltip. En el calendario, ← y → saltan semanas y ↑ y ↓ avanzan días.
- Lector de pantalla — El mapa se anuncia con el tamaño de la cuadrícula; cada celda visitada con el teclado se lee con fila, columna y valor.
- Contorno con hover — La celda activa recibe un anillo de 1,5 px del color del texto, visible sobre cualquier rango, en los dos temas.
- Rangos contables — Como máximo 7 colores con significado. Por encima de eso, los vecinos se confunden — usa una tabla.
- Extremo claro permitido — En la secuencial, el paso más débil puede casi desaparecer en la superficie: quiere decir “cerca de cero”. El valor exacto sigue en el tooltip y en la tabla.

## Tokens usados

Dos rampas y el color de la cuadrícula. Ningún color de serie categórico entra aquí.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.chart.seq.1 (`--ds-color-chart-seq-1`) | Secuencial: el mínimo | #FFE7DB | #712800 |
| color.chart.seq.4 (`--ds-color-chart-seq-4`) | Secuencial: el medio | #F57630 | #D95C0A |
| color.chart.seq.7 (`--ds-color-chart-seq-7`) | Secuencial: el máximo | #923700 | #FFB590 |
| color.chart.div.1 (`--ds-color-chart-div-1`) | Divergente: extremo inferior (frío) | #1776B5 | #6ABCFF |
| color.chart.div.4 (`--ds-color-chart-div-4`) | Divergente: medio neutro | #DAE0E8 | #3D3B38 |
| color.chart.div.7 (`--ds-color-chart-div-7`) | Divergente: extremo superior (cálido) | #B74900 | #FF945E |
| color.chart.grid (`--ds-color-chart-grid`) | Celda vacía | #DAE0E8 | #33312E |
| color.fg.default (`--ds-color-fg-default`) | Anillo de la celda activa | #2B3847 | #F3EDE5 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Etiquetas y leyenda de escala | #5C6C7F | #9C9792 |
| color.bg.raised (`--ds-color-bg-raised`) | Fondo del tooltip | #FFFFFF | #2C2A27 |

## Uso

El heatmap muestra un patrón, no un valor exacto. Úsalo cuando la pregunta es “¿dónde se concentra?”.

- **Haz:** un solo tono. La magnitud es una rampa de un tono, de claro a fuerte. El ojo lee “más” sin necesitar leyenda.
- **Evita:** arcoíris. Rojo, amarillo, verde y azul no tienen orden. Nadie sabe si el verde es más o menos que el amarillo.
- **Consejo:** Divergente con medio neutro. Dos tonos opuestos — frío y cálido — y gris en el medio. Dos tonos fríos no se leen como “lados”.
- **Haz:** hasta 7 rangos. Cinco resuelven casi siempre. Siete es el techo: por encima de eso, los rangos vecinos se mezclan.
- **Evita:** valor exacto por el color. Si la persona necesita el número para decidir, muestra el número — en una tabla o en barras.
- **Consejo:** Misma escala para comparar. ¿Dos mapas lado a lado? Fija el mismo domain en los dos, o el mismo color significará valores distintos.

## API

Dos funciones con las mismas reglas de todos los gráficos de Lume: update, setLoading y destroy.

```html
import { createHeatmap, createCalendarHeatmap } from 'https://lumeui.dev/v/0.27/lume.js';

createHeatmap(document.querySelector('#pedidos'), {
  title: 'Pedidos por hora',
  rows: ['Lun', 'Mar', 'Mié'],
  columns: ['8 h', '9 h', '10 h'],
  values: [[12, 30, 41], [9, 28, 44], [14, 26, 39]],
  valueLabel: 'pedidos',
});

createCalendarHeatmap(document.querySelector('#actividad'), {
  title: 'Actividad en el año',
  start: '2025-11-02',
  values: actividadPorDia, // un número por día
  valueLabel: 'entregas',
});
```

### createHeatmap()

| Opción | Tipo | Predeterminado | Para qué |
| --- | --- | --- | --- |
| `rows · columns` | string[] | — | Etiquetas de las filas (a la izquierda) y de las columnas (abajo). |
| `values` | (number \| null)[][] | — | `values[fila][columna]`. `null` se vuelve celda vacía, con “Sin dato” en el tooltip. |
| `scale` | 'sequential' \| 'diverging' | 'sequential' | Un tono de poco a mucho, o dos tonos con el medio neutro. |
| `steps` | 3 – 7 | 5 | Cuántos rangos de color. Más de 7 vuelve indistinguibles a los vecinos. |
| `domain` | [min, max] | de los datos | Fíjalo para comparar mapas distintos en la misma escala. |
| `center` | number | 0 | El valor del medio neutro en la escala divergente (p. ej., la media). |
| `zeroEmpty` | boolean | true | El cero aparece como celda vacía en la secuencial. |
| `format · valueLabel` | preset \| Intl \| función · string | 'number' · — | Valor en el tooltip, en la tabla y en la leyenda; unidad después del número. |
| `cellHeight` | number | cuadrada | Altura de la celda; por defecto sigue al ancho, entre 14 y 32 px. |
| `scaleLegend · scaleLabels` | boolean · [string, string] | true · mín./máx. | Leyenda de escala abajo, con los extremos o “Menos/Más”. |
| `title · subtitle · label · card · table` | — | — | Iguales a los de todos los gráficos. |

### createCalendarHeatmap()

| Opción | Tipo | Predeterminado | Para qué |
| --- | --- | --- | --- |
| `start` | 'AAAA-MM-DD' \| Date | hoy | Primer día. Las columnas son semanas, de domingo a sábado. |
| `values` | (number \| null)[] | — | Un valor por día, a partir de start. |
| `steps · format · valueLabel` | — | 5 · 'integer' · — | Como en el heatmap; la escala es siempre secuencial. |
| `scaleLabels` | [string, string] | ['Menos', 'Más'] | Extremos de la leyenda de escala. |

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```
