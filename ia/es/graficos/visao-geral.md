# Gráficos

Sección de Lume: Gráficos. Página: https://lumeui.dev/#/graficos/visao-geral

Datos que se leen de un vistazo y aguantan una segunda mirada. Marcas finas, un color por función, etiquetas solo donde importan — y toda la información accesible por teclado y en tabla.

En números: formas: 6 · colores categóricos: 8 · peor ΔE entre vecinos: 11,7 · contraste de las marcas: ≥ 3,3:1.

## Ejemplo en vivo

Un panel con un solo filtro arriba: el período vale para todo lo que está debajo, así que los números siempre concuerdan. Al cambiar, los gráficos mantienen el dibujo anterior mientras se actualizan — sin esqueleto, sin saltos.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-segmented" role="radiogroup" aria-labelledby="vg-periodo-label">
<button type="button" class="ds-segmented__item" role="radio" data-range="7d" aria-checked="false">7 días</button><button type="button" class="ds-segmented__item" role="radio" data-range="30d" aria-checked="true">30 días</button><button type="button" class="ds-segmented__item" role="radio" data-range="90d" aria-checked="false">90 días</button><button type="button" class="ds-segmented__item" role="radio" data-range="12m" aria-checked="false">12 meses</button>
</div>
```

## Qué gráfico usar

Elige por la tarea de quien lee, antes de pensar en el color. A veces la respuesta correcta ni siquiera es un gráfico.

Comparar cantidades

Barras

De mayor a menor, entre categorías o a lo largo del tiempo. Siempre empieza en cero.

Mostrar tendencia

Líneas y áreas

Cómo cambia algo en el tiempo. Compara con el período anterior en gris.

Parte del todo

Dona

La proporción de un vistazo, con hasta 6 porciones. Valores cercanos piden barras.

Relación entre medidas

Dispersión

Dos magnitudes por elemento: correlación, grupos y valores atípicos.

Intensidad en una cuadrícula

Mapa de calor

Día × hora, semana × mes: dónde se concentra. Hasta 7 rangos de color.

Un número que importa

Indicadores

El valor actual, la variación y la tendencia. El número es el gráfico.

### Cuándo no es un gráfico

Un solo valor — Una columna sola o una torta de dos porciones se vuelven un indicador. El número es el gráfico.

Valores exactos o más de 7 clases — Por encima de 7 colores con significado, los vecinos se confunden. Usa una tabla — o tabla y gráfico juntos.

Una serie es la historia — Destaca esa serie en color y deja las demás en gris. El énfasis es más claro que ocho colores disputando la atención.

Marcado de los ejemplos de esta sección:

```html
<path class="ds-chart__grid" d="M8 63.5H112"></path>

<rect x="12" y="37" width="8" height="26" rx="2" class="ds-chart__bar"></rect>

<rect x="26" y="25" width="8" height="38" rx="2" class="ds-chart__bar"></rect>

<rect x="40" y="32" width="8" height="31" rx="2" class="ds-chart__bar"></rect>

<rect x="54" y="17" width="8" height="46" rx="2" class="ds-chart__bar"></rect>

<rect x="68" y="11" width="8" height="52" rx="2" class="ds-chart__bar"></rect>

<rect x="82" y="19" width="8" height="44" rx="2" class="ds-chart__bar"></rect>

<rect x="96" y="5" width="8" height="58" rx="2" class="ds-chart__bar"></rect>
```

## Colores

Cada color hace un solo trabajo: identidad (categórico), cantidad (secuencial), etapa (ordinal), lado de una referencia (divergente) o estado (status). Y ninguno se eligió a ojo — el orden salió de un validador.

### Categóricos identidad · orden fijo, nunca recicles

- 1 — Marca — `brand.600` — #D95C0A
- 2 — Azul — `blue.600` — #2A8ED6
- 3 — Rosa — `pink.600` — #CD5892
- 4 — Ámbar — `amber.700` — #A86600
- 5 — Verde azulado — `teal.600` — #019D90
- 6 — Rojo — `red.600` — #E44B46
- 7 — Violeta — `violet.600` — #9070DD
- 8 — Verde — `green.600` — #339F5C

Los mismos tonos pasaron en los dos temas — validados contra la superficie oscura y la clara. De la 9.ª serie en adelante no hay color nuevo: la cola se vuelve “Otros”.

11,7 — peor ΔE entre vecinos con protanopia y deuteranopia — objetivo ≥ 8 — 18,5 — peor ΔE entre vecinos con visión típica — mínimo 15 — 11,8 · 15,1 — los 3 primeros en todos los pares, para dispersión — daltonismo · visión típica — 3,4 · 3,5 — menor contraste de una marca con la superficie — Lume claro · Lume oscuro · mínimo 3:1

Visión típica — Protanopia — Deuteranopia — Simulación de Machado, Oliveira y Fernandes (2009). Los vecinos siguen siendo distintos aun sin distinguir rojo y verde.

### Escalas un tono por trabajo · cada tema con sus pasos

Lume claro

Secuencial `chart.seq.1–7` — poco — mucho

Ordinal `chart.ord.1–5` — 1.ª etapa — 5.ª etapa

Divergente `chart.div.1–7` — debajo — neutro — encima

Lume oscuro

Secuencial `chart.seq.1–7` — poco — mucho

Ordinal `chart.ord.1–5` — 1.ª etapa — 5.ª etapa

Divergente `chart.div.1–7` — debajo — neutro — encima

- Secuencial. Magnitud: un solo tono, de poco a mucho. En el oscuro el ancla se invierte — más es más claro.
- Ordinal. Etapas en orden (embudo, rangos). El extremo más débil aún supera 2:1 sobre la superficie.
- Divergente. Por debajo y por encima de una referencia: frío y cálido, con el medio neutro y gris.

### Status reservados

- Bueno — Meta cumplida, operación normal
- Atención — Cerca del límite
- Crítico — Por encima del límite, falla
- Información — Neutro, solo para avisar

Solo cuando el color significa bueno o malo — y siempre con ícono y texto. Nunca como “serie 4”.

### Contexto

- `chart.muted` — Énfasis: el resto en gris, para que una serie destaque
- `chart.other` — “Otros”: la cola agrupada
- `chart.grid` — Cuadrícula y celda sin dato
- `chart.axis` — Línea base, ejes y mira

### El color sigue a la entidad pruébalo

## Anatomía

Siete piezas, siempre en el mismo lugar. El título nombra lo que está graficado; con una sola serie, ni hace falta leyenda.

- 1 — Título y subtítulo — Qué está graficado y en qué unidad. Frase corta, sin dos puntos.
- 2 — Leyenda — Siempre que haya dos series o más. La clave refleja la marca: trazo para línea, cuadrado para barra.
- 3 — Eje y cuadrícula — Líneas de 1 px, recesivas. Marcas redondas, compactadas a partir de mil.
- 4 — Marca — Lo único con color fuerte. Línea de 2 px, punto final de 8 px con anillo.
- 5 — Etiqueta directa — Al final de la línea, solo si no choca. Texto en el color de texto — nunca en el color de la serie.
- 6 — Tooltip — Con hover y foco. El valor viene primero y fuerte; el nombre de la serie, después.
- 7 — Tabla — El gemelo accesible: todos los números, incluso los que el gráfico no etiqueta.

## Marcas y respiro

El aspecto tranquilo viene de pocas medidas fijas y de dos espacios negativos. Solo el dato puede ser ruidoso.

Barra — Hasta 24 px de grosor. El extremo de datos con radio de 4 px; la base, recta, nace de una sola línea.

Línea — 2 px, con extremos y uniones redondeados. Nada de líneas demasiado finas para leer ni tan gruesas que pesen.

Marcador — 8 px, con anillo de 2 px del color de la superficie — el punto sigue legible donde cruza una línea.

Respiro de 2 px — Un hueco del color de la superficie separa segmentos apilados y barras vecinas. Nunca un contorno alrededor.

Área — El color de la serie al 10% bajo la línea: un lavado, nunca un bloque saturado.

Cuadrícula y meta — Cuadrícula de 1 px, sólida y un paso fuera de la superficie. El trazo discontinuo se reserva para meta y límite.

Marcado de los ejemplos de esta sección:

```html
<path class="ds-chart__baseline" d="M20 84.5H140"></path>

<path class="ds-chart__bar" d="M68 84V28A4 4 0 0 1 72 24H88A4 4 0 0 1 92 28V84Z"></path>

<path class="ds-chart__grid" d="M16 76.5H144M16 44.5H144"></path>

<path class="ds-chart__line" d="M16 70 44 58 72 62 100 36 128 30 144 22"></path>

<path class="ds-chart__line" d="M16 70 80 40 144 30"></path>

<path class="ds-chart__line" d="M16 30 80 44 144 72"></path>

<circle class="ds-chart__dot" cx="80" cy="44" r="6"></circle>

<path class="ds-chart__bar" d="M52 84H76V60H52Z"></path>
```

## Interacción

Todo gráfico ya viene interactivo. El tooltip complementa, nunca es el único camino hasta un valor.

- Tooltip — Valor fuerte, nombre atenuado, clave en trazo. En líneas, muestra todas las series de ese punto.
- Mira — Una línea vertical encuentra la fecha más cercana. Nadie necesita acertar una línea de 2 px.
- Leyenda que oculta — Haz clic en una serie para sacarla del gráfico. Las demás no cambian de color.
- Tabla — El ícono de la esquina cambia el gráfico por los números.
- Teclado — Tab ← → Home End Esc — Tab enfoca el gráfico; las flechas recorren los puntos y el lector de pantalla anuncia cada uno.

## Accesibilidad

Decisiones que ya vienen listas en todos los gráficos — y las que siguen siendo tuyas.

- Nunca solo color — Dos series o más tienen leyenda; hasta cuatro, también etiqueta directa. El estado viene con ícono y texto.
- Paleta validada para daltonismo — Vecinos separados por ΔE ≥ 8 con protanopia y deuteranopia, y ≥ 15 con visión típica, en los dos temas.
- Tabla en todo gráfico — El botón “Ver como tabla” muestra todos los números. Es el equivalente accesible, no un extra.
- Teclado y lector de pantalla — Tab ← → Esc — El gráfico recibe foco, las flechas recorren los valores y una región en vivo anuncia cada uno.
- Contraste de las marcas — Todo color categórico supera 3:1 contra la superficie — 3,4:1 en Lume claro y 3,5:1 en Lume oscuro, en el peor caso.
- Textura de reserva — Con `texture: true`, barras y porciones reciben rayado a 45° y 135° — también en la impresión y en alto contraste.
- Movimiento reducido — La entrada se anima una vez, cuando aparece el gráfico. Con `prefers-reduced-motion`, no se anima.
- El texto de los datos es tuyo — Los nombres de serie y categoría entran como texto, nunca como HTML — vienen de planillas y APIs.

## Tokens

Las marcas consumen `color.chart.*`; los textos, siempre `color.fg.*`. Cambia la marca y el gráfico cambia con ella.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.chart.series.1 (`--ds-color-chart-series-1`) | Serie 1 · Marca | #D95C0A | #D95C0A |
| color.chart.series.2 (`--ds-color-chart-series-2`) | Serie 2 · Azul | #2A8ED6 | #2A8ED6 |
| color.chart.series.3 (`--ds-color-chart-series-3`) | Serie 3 · Rosa | #CD5892 | #CD5892 |
| color.chart.series.4 (`--ds-color-chart-series-4`) | Serie 4 · Ámbar | #A86600 | #A86600 |
| color.chart.series.5 (`--ds-color-chart-series-5`) | Serie 5 · Verde azulado | #019D90 | #019D90 |
| color.chart.series.6 (`--ds-color-chart-series-6`) | Serie 6 · Rojo | #E44B46 | #E44B46 |
| color.chart.series.7 (`--ds-color-chart-series-7`) | Serie 7 · Violeta | #9070DD | #9070DD |
| color.chart.series.8 (`--ds-color-chart-series-8`) | Serie 8 · Verde | #339F5C | #339F5C |
| color.chart.muted (`--ds-color-chart-muted`) | Contexto en gris (énfasis) | #C0CAD6 | #4A4744 |
| color.chart.other (`--ds-color-chart-other`) | “Otros” | #93A0B0 | #605D59 |
| color.chart.seq.1 (`--ds-color-chart-seq-1`) | Secuencial 1 · poco | #FFE7DB | #712800 |
| color.chart.seq.2 (`--ds-color-chart-seq-2`) | Secuencial 2 | #FFB590 | #923700 |
| color.chart.seq.3 (`--ds-color-chart-seq-3`) | Secuencial 3 | #FF945E | #B74900 |
| color.chart.seq.4 (`--ds-color-chart-seq-4`) | Secuencial 4 | #F57630 | #D95C0A |
| color.chart.seq.5 (`--ds-color-chart-seq-5`) | Secuencial 5 | #D95C0A | #F57630 |
| color.chart.seq.6 (`--ds-color-chart-seq-6`) | Secuencial 6 | #B74900 | #FF945E |
| color.chart.seq.7 (`--ds-color-chart-seq-7`) | Secuencial 7 · mucho | #923700 | #FFB590 |
| color.chart.ord.1 (`--ds-color-chart-ord-1`) | Ordinal 1 | #FF945E | #923700 |
| color.chart.ord.2 (`--ds-color-chart-ord-2`) | Ordinal 2 | #F57630 | #B74900 |
| color.chart.ord.3 (`--ds-color-chart-ord-3`) | Ordinal 3 | #D95C0A | #D95C0A |
| color.chart.ord.4 (`--ds-color-chart-ord-4`) | Ordinal 4 | #B74900 | #F57630 |
| color.chart.ord.5 (`--ds-color-chart-ord-5`) | Ordinal 5 | #923700 | #FF945E |
| color.chart.div.1 (`--ds-color-chart-div-1`) | Divergente 1 · debajo | #1776B5 | #6ABCFF |
| color.chart.div.2 (`--ds-color-chart-div-2`) | Divergente 2 · debajo | #48A7F1 | #2A8ED6 |
| color.chart.div.3 (`--ds-color-chart-div-3`) | Divergente 3 · debajo | #98D0FF | #095C92 |
| color.chart.div.4 (`--ds-color-chart-div-4`) | Divergente 4 · neutro | #DAE0E8 | #3D3B38 |
| color.chart.div.5 (`--ds-color-chart-div-5`) | Divergente 5 · encima | #FFB590 | #923700 |
| color.chart.div.6 (`--ds-color-chart-div-6`) | Divergente 6 · encima | #F57630 | #D95C0A |
| color.chart.div.7 (`--ds-color-chart-div-7`) | Divergente 7 · encima | #B74900 | #FF945E |
| color.chart.status.good (`--ds-color-chart-status-good`) | Status · bueno | #339F5C | #51B873 |
| color.chart.status.warning (`--ds-color-chart-status-warning`) | Status · atención | #F6A10C | #FFB851 |
| color.chart.status.critical (`--ds-color-chart-status-critical`) | Status · crítico | #E44B46 | #E44B46 |
| color.chart.grid (`--ds-color-chart-grid`) | Cuadrícula y celda vacía | #DAE0E8 | #33312E |
| color.chart.axis (`--ds-color-chart-axis`) | Línea base, eje y mira | #C0CAD6 | #4A4744 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Marcas del eje | #5C6C7F | #9C9792 |
| color.fg.muted (`--ds-color-fg-muted`) | Etiquetas y nombres | #46586E | #CEC8C1 |
| color.bg.raised (`--ds-color-bg-raised`) | Fondo del tooltip | #FFFFFF | #2C2A27 |

## Uso

Lo que más sale mal en un gráfico — y qué hacer en su lugar.

- **Evita:** dos ejes verticales. La alineación entre las escalas es arbitraria e inventa una correlación. Usa dos gráficos o un índice con base 100.
- **Evita:** arcoíris en la escala. La magnitud es un solo tono, del claro al oscuro. Varios tonos hacen que el ojo busque categorías que no existen.
- **Haz:** el color sigue a la entidad. ¿Filtraste u ocultaste una serie? Las que quedaron mantienen el color. Quien aprendió “App es azul” no puede ser engañado.
- **Consejo:** Dona solo para parte del todo. Hasta 6 porciones; de la 6.ª en adelante, “Otros”. Para comparar valores cercanos, las barras se leen mucho mejor.
- **Evita:** un número en cada punto. Etiqueta el final, el pico o la serie de la historia. El eje, el tooltip y la tabla llevan el resto.
- **Haz:** más de 8 series, agrupa. No existe 9.º color. La cola se vuelve “Otros”, o el gráfico se vuelve pequeños múltiplos.

## API

Una función por forma, la misma conversación en todas: se monta en un elemento, recibe opciones y devuelve controles.

```html
import { createBarChart } from 'https://lumeui.dev/v/0.27/lume.js';

const grafico = createBarChart(document.querySelector('#ventas'), {
  title: 'Ingresos por mes',
  subtitle: 'En reales · 2026',
  categories: ['Ene', 'Feb', 'Mar'],
  series: [{ name: 'Ingresos', values: [82000, 91000, 88000] }],
  format: 'currency',
});

grafico.setLoading(true);           // mantiene el dibujo mientras busca
grafico.update({ series: nuevas });  // redibuja con las nuevas opciones
grafico.setLoading(false);
grafico.destroy();                  // limpia todo al salir de la pantalla
```

### Opciones en común

|   |   |
| --- | --- |
|  `title · subtitle`  | Título y línea de apoyo en el marco. El título también nombra el gráfico para lectores de pantalla. |
|  `label`  | Nombre accesible cuando no hay título visible. |
|  `card`  | Superficie con contorno y radio — para paneles. |
|  `height`  | Altura total, contando la franja del eje x. Las barras horizontales crecen con el número de filas. |
|  `format · axisFormat`  | Formato de los valores (tooltip, etiquetas, tabla) y del eje. El eje se compacta solo a partir de mil. |
|  `table`  | Botón “Ver como tabla”. Activado por defecto — desactívalo solo si la tabla está en pantalla. |
|  `texture`  | Rayado a 45° y 135° como canal de reserva (daltonismo total, impresión). |
|  `empty`  | Texto del estado vacío. |

### Formatos es

|   |   |
| --- | --- |
|  `'number'`  | 1234,6 |
|  `'integer'`  | 1235 |
|  `'compact'`  | 1,3 M |
|  `'percent'`  | 12,4 % |
|  `'currency'`  | 1235 R$ |
|  `'currency-compact'`  | 1,3 M R$ |
|  `{ … } · (v) => …`  | Opciones de Intl.NumberFormat o una función |

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>

<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
```
