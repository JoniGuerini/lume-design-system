# Líneas y áreas

Sección de Lume: Gráficos. Página: https://lumeui.dev/#/graficos/linhas

Para mostrar cómo cambia algo en el tiempo. Trazo de 2 px, un solo eje, la mira encuentra el mes y el nombre queda al final de la línea — sin caja de leyenda que descifrar.

En números: variantes: 8 · trazo: 2 px · nombres al final: hasta 4 · eje y: 1.

## Ejemplo

```html
import { createLineChart } from 'https://lumeui.dev/v/1.7/lume.js';

const chart = createLineChart(document.querySelector('#usuarios'), {
  title: 'Usuarios activos',
  subtitle: 'Por mes · 2026',
  categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic'],
  series: [
    { name: 'Usuarios activos', values: [12100, 13800, 13200, 17900, 20600, 23800, 23100, 26900, 29800, 29200, 33600, 38200] },
  ],
  format: 'integer',
});
```

## Variantes

El mismo componente cubre las preguntas más comunes sobre el tiempo. Pasa el mouse por cualquiera.

Línea única `1 serie` — Una serie no necesita leyenda: el título dice qué es, y el último valor queda escrito al final de la línea.

Varias series `endLabels` — Hasta cuatro líneas reciben el nombre al final — cuando caben sin chocar. Si las líneas se encuentran ahí, quedan la leyenda y el tooltip.

Contra el período anterior `muted: true` — El año pasado entra en gris, por debajo: es contexto, no protagonista. Sigue nombrado en la leyenda y en el tooltip.

Énfasis `highlight: 0` — Cuando la historia es una serie, queda en color y las demás se vuelven gris. Más claro que cuatro colores disputando la mirada.

Área `area: true` — Para una sola serie, cuando el volumen importa. El área es un lavado del 10% del color — la línea sigue mandando.

Áreas apiladas `stacked: true` — Partes que suman un total en el tiempo. El borde de cada franja es la línea; el total aparece en el tooltip.

Con meta `target` — La meta es la única línea discontinua del sistema — discontinua quiere decir referencia, nunca cuadrícula.

Con huecos `null` — Sin dato en abril y mayo: la línea se corta en vez de inventar un puente. En el tooltip y en la tabla, aparece “—”.

## Mira y tooltip

Nadie apunta a una línea de 2 px. La mira vertical encuentra el mes más cercano y un único tooltip muestra todas las series ahí.

- Encuentra la x, no la línea — La mira se engancha al punto de datos más cercano al puntero, a cualquier altura del área.
- Un tooltip, todas las series — La lectura lista cada serie visible en ese mes, en el orden de la leyenda.
- Valor primero, nombre después — Quien mira ya conoce la serie; quiere el número. Viene fuerte, el nombre viene atenuado, con un trazo del color como clave.
- Lo mismo con el teclado — Tab enfoca el gráfico, las flechas recorren los meses y los lectores de pantalla leen el valor.

## Un solo eje

Nada de dos ejes y. Dos magnitudes de escalas distintas se vuelven un índice común o dos gráficos alineados.

Con dos ejes, la escala de cada lado se elige a mano. El punto donde se cruzan las líneas — y la impresión de que van juntas — pasa a ser decisión de quien armó el gráfico, no de los datos.

Índice con base 100 `zero: false` — Las dos medidas parten de 100 en enero. Ahora se puede comparar el ritmo: los usuarios crecieron más que los ingresos.

Dos gráficos, mismo eje x `pequeños múltiplos` — Cada medida en su escala, un gráfico debajo del otro, con los meses alineados.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10.3 4.2 2.9 17.5A2 2 0 0 0 4.6 20.5h14.8a2 2 0 0 0 1.7-3L13.7 4.2a2 2 0 0 0-3.4 0z"></path><path d="M12 9.5v4"></path><path d="M12 17h.01"></path></svg>
```

## Accesibilidad

El gráfico ya nace con teclado, tabla y nombres. Estas son las decisiones que siguen siendo tuyas.

- Tabla siempre a mano — El botón de tabla del encabezado cambia el dibujo por los números — todos, incluso los que el gráfico no etiqueta. El tooltip nunca es el único camino hasta un valor.
- Teclado — Tab ← → Home End Esc — Tab enfoca el gráfico; las flechas recorren los puntos, Home y End van a los extremos y Esc cierra el tooltip.
- Lector de pantalla — El gráfico tiene nombre y resumen (tipo, puntos y series). Cada punto visitado con el teclado se anuncia en una región en vivo.
- Nunca solo color — Con dos series o más, siempre hay leyenda — y nombres al final de la línea cuando caben. La serie de contexto es gris y sigue nombrada.
- Contraste verificado — Todo color de serie supera 3:1 contra la superficie — el menor es 3,36:1 en Lume claro y 3,45:1 en Lume oscuro. Los textos usan tokens de texto, nunca el color de la serie.
- Movimiento con moderación — La línea se dibuja una vez, cuando aparece en pantalla, y no se anima con `prefers-reduced-motion`.

## Tokens usados

Las marcas consumen los colores de gráfico; todo lo que es texto consume tokens de texto.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.chart.series.1 (`--ds-color-chart-series-1`) | Primera serie | #D95C0A | #D95C0A |
| color.chart.series.2 (`--ds-color-chart-series-2`) | Segunda serie | #2A8ED6 | #2A8ED6 |
| color.chart.series.3 (`--ds-color-chart-series-3`) | Tercera serie | #CD5892 | #CD5892 |
| color.chart.series.4 (`--ds-color-chart-series-4`) | Cuarta serie | #A86600 | #A86600 |
| color.chart.muted (`--ds-color-chart-muted`) | Contexto y series fuera del énfasis | #C0CAD6 | #4A4744 |
| color.chart.grid (`--ds-color-chart-grid`) | Líneas de cuadrícula | #DAE0E8 | #33312E |
| color.chart.axis (`--ds-color-chart-axis`) | Línea base y mira | #C0CAD6 | #4A4744 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Etiquetas de los ejes y línea de meta | #53657A | #9C9792 |
| color.fg.muted (`--ds-color-fg-muted`) | Nombre al final de la línea | #46586E | #CEC8C1 |
| color.fg.default (`--ds-color-fg-default`) | Valor al final de la línea | #2B3847 | #F3EDE5 |
| color.bg.raised (`--ds-color-bg-raised`) | Fondo del tooltip | #FFFFFF | #2C2A27 |
| color.border.focus (`--ds-color-border-focus`) | Foco del gráfico | #53657A | #C0CAD6 |

## Uso

Elige la línea cuando la pregunta tiene “cuándo” o “desde”. Cuatro cuidados resuelven casi todo.

- **Haz:** tiempo en el eje x. Las líneas unen puntos en secuencia. Si el orden no es tiempo (u otra secuencia real), usa barras.
- **Evita:** dos ejes y. Crea una correlación que no existe. Indexa las dos medidas en la misma base o haz dos gráficos.
- **Consejo:** ¿Más de 4 series?. Destaca la que importa y deja el resto en gris, agrupa la cola en “Otros” o separa en pequeños múltiplos. Nunca inventes un 9.º color.
- **Haz:** etiqueta selectiva. El valor final, el pico o la serie de la historia. Un número en cada punto nadie lo lee.
- **Evita:** áreas superpuestas. Áreas de varias series unas sobre otras ocultan datos. Para partes de un total, apila; para comparar, usa líneas.
- **Consejo:** Cero en el eje. Las áreas siempre empiezan en cero. En líneas, desactívalo con zero: false solo cuando la variación es la historia — y dilo en el subtítulo.

## API

Una función, las mismas reglas de todos los gráficos de Lume.

```html
import { createLineChart } from 'https://lumeui.dev/v/1.7/lume.js';

const chart = createLineChart(document.querySelector('#ingresos'), {
  title: 'Ingresos',
  categories: ['Ene', 'Feb', 'Mar'],
  series: [{ name: 'Ingresos', values: [82000, 91000, 88000] }],
  format: 'currency-compact',
});

chart.update({ target: { value: 90000, label: 'Meta' } });
```

| Opción | Tipo | Predeterminado | Para qué |
| --- | --- | --- | --- |
| `categories` | string[] | — | Etiquetas del eje x, en orden. |
| `series` | { name, values, color?, muted? }[] | — | Una entrada por línea. `null` en values corta la línea. Sin `color`, la serie usa el slot de su posición. |
| `area` | boolean | false | Lavado del 10% bajo la línea. |
| `stacked` | boolean | false | Franjas sumadas; el tooltip muestra el total. |
| `curve` | 'linear' \| 'smooth' | 'linear' | Suave es monótona: no crea picos que no existen. |
| `markers` | 'end' \| 'all' \| 'none' | 'end' | Puntos de 8 px con anillo de 2 px. `all` solo hasta 40 puntos. |
| `endLabels` | boolean | true | Nombre (o valor, con una serie) al final de la línea, si cabe sin chocar. |
| `highlight` | number | — | Índice de la serie destacada; las demás quedan en gris. |
| `target` | { value, label } | — | Línea de referencia discontinua. |
| `zero` | boolean | true | El eje empieza en cero. Las áreas siempre empiezan. |
| `format · axisFormat` | preset \| Intl \| función | 'number' | Valores en el tooltip y en la tabla; el eje se compacta a partir de mil. |
| `height` | number | 280 | Altura total, ya con la franja del eje x. |
| `title · subtitle · label` | string | — | Título visible o, sin él, el nombre accesible del gráfico. |
| `card · table · tooltipLabels` | boolean · boolean · string[] | false · true · — | Superficie con contorno, botón de tabla y etiquetas largas para el tooltip. |

| Método | Qué hace |
| --- | --- |
| `update(options)` | Combina las opciones y redibuja. Las series ocultas en la leyenda siguen ocultas. |
| `setLoading(bool)` | Mantiene el dibujo anterior al 45% mientras llegan los datos — sin esqueleto, sin saltos. |
| `destroy()` | Desconecta observadores y eventos y limpia el contenedor. |

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```
