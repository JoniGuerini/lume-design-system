# Indicadores

Sección de Lume: Gráficos. Página: https://lumeui.dev/#/graficos/indicadores

Cuando el gráfico es un número. El valor actual, cuánto cambió y hacia dónde va — sin eje, sin leyenda, sin esfuerzo para leer.

En números: piezas: 3 · destacado por pantalla: 1 · sentidos de la variación: 3 · tonos del medidor: 4.

## Ejemplo

```html
import { statTileHtml } from 'https://lumeui.dev/v/0.35/lume.js';

el.innerHTML = statTileHtml({
  label: 'Ingresos',
  value: 1284000,
  format: 'currency-compact',
  delta: 0.124,
  deltaLabel: 'vs. mes anterior',
  trend: [8, 9, 9, 11, …],
});
```

## Anatomía

Cinco partes, siempre en este orden. Solo la etiqueta y el valor son obligatorios.

- 1 — Etiqueta — Lo que se mide, en mayúscula inicial y sin dos puntos.
- 2 — Valor — Sans semibold, compactado (38,2 mil; 1,3 M R$). Cifras proporcionales.
- 3 — Variación opcional — Signo, ícono y texto juntos. El color dice si mejoró o empeoró — nunca solo.
- 4 — Período opcional — Contra qué se midió la variación. Sin él, el número no dice nada.
- 5 — Tendencia opcional — Sparkline en el tono de contexto; el punto actual en el color de destaque.

Marcado de los ejemplos de esta sección:

```html
<article class="ds-stat">
<p class="ds-stat__label">Clientes activos</p>
<p class="ds-stat__value">38.210</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+13,7&nbsp;%</span><span class="ds-visually-hidden"> (mejora)</span></span>
<span class="ds-stat__period">vs. mes anterior</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Tendencia de Clientes activos"><svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 28C5.85 27.48 8.7 26.44 11.55 26.44C14.39 26.44 17.24 26.99 20.09 26.99C22.94 26.99 25.79 23.72 28.64 22.67C31.48 21.62 34.33 21.08 37.18 20.18C40.03 19.29 42.88 17.24 45.73 17.24C48.58 17.24 51.42 17.89 54.27 17.89C57.12 17.89 59.97 15.4 62.82 14.39C65.67 13.38 68.52 11.72 71.36 11.72C74.21 11.72 77.06 12.28 79.91 12.28C82.76 12.28 85.61 9.61 88.45 8.23C91.3 6.85 94.15 5.41 97 4L97 32L3 32Z"></path><path class="ds-sparkline__line" d="M3 28C5.85 27.48 8.7 26.44 11.55 26.44C14.39 26.44 17.24 26.99 20.09 26.99C22.94 26.99 25.79 23.72 28.64 22.67C31.48 21.62 34.33 21.08 37.18 20.18C40.03 19.29 42.88 17.24 45.73 17.24C48.58 17.24 51.42 17.89 54.27 17.89C57.12 17.89 59.97 15.4 62.82 14.39C65.67 13.38 68.52 11.72 71.36 11.72C74.21 11.72 77.06 12.28 79.91 12.28C82.76 12.28 85.61 9.61 88.45 8.23C91.3 6.85 94.15 5.41 97 4" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>
```

## Fila de indicadores

Los números que abren un panel. Misma estructura, mismo período de comparación, del más importante al menos.

- De 2 a 5 por fila. Más que eso se vuelve tabla.
- Todos comparados con el mismo período — o cada uno dice el suyo.
- Clicable cuando lleva a un detalle (`href`).

Marcado de los ejemplos de esta sección:

```html
<article class="ds-stat">
<p class="ds-stat__label">Ingresos</p>
<p class="ds-stat__value">149&nbsp;mil&nbsp;R$</p>
<p class="ds-stat__delta" data-tone="bad">
<span class="ds-stat__change"><ds-icon name="trending-down"></ds-icon><span>−2&nbsp;%</span><span class="ds-visually-hidden"> (empeora)</span></span>
<span class="ds-stat__period">vs. noviembre</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Tendencia de Ingresos"><svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 28C5.85 26.97 8.7 24.91 11.55 24.91C14.39 24.91 17.24 25.94 20.09 25.94C22.94 25.94 25.79 21.68 28.64 20.46C31.48 19.24 34.33 17.71 37.18 17.71C40.03 17.71 42.88 22.51 45.73 22.51C48.58 22.51 51.42 16.65 54.27 14.97C57.12 13.3 59.97 11.2 62.82 11.2C65.67 11.2 68.52 12.91 71.36 12.91C74.21 12.91 77.06 9.59 79.91 8.11C82.76 6.64 85.61 4 88.45 4C91.3 4 94.15 4.69 97 5.03L97 32L3 32Z"></path><path class="ds-sparkline__line" d="M3 28C5.85 26.97 8.7 24.91 11.55 24.91C14.39 24.91 17.24 25.94 20.09 25.94C22.94 25.94 25.79 21.68 28.64 20.46C31.48 19.24 34.33 17.71 37.18 17.71C40.03 17.71 42.88 22.51 45.73 22.51C48.58 22.51 51.42 16.65 54.27 14.97C57.12 13.3 59.97 11.2 62.82 11.2C65.67 11.2 68.52 12.91 71.36 12.91C74.21 12.91 77.06 9.59 79.91 8.11C82.76 6.64 85.61 4 88.45 4C91.3 4 94.15 4.69 97 5.03" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Clientes activos</p>
<p class="ds-stat__value">38.200</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+13,7&nbsp;%</span><span class="ds-visually-hidden"> (mejora)</span></span>
<span class="ds-stat__period">vs. noviembre</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Tendencia de Clientes activos"><svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 28C5.85 27.48 8.7 26.44 11.55 26.44C14.39 26.44 17.24 26.99 20.09 26.99C22.94 26.99 25.79 23.72 28.64 22.67C31.48 21.62 34.33 21.08 37.18 20.18C40.03 19.29 42.88 17.24 45.73 17.24C48.58 17.24 51.42 17.89 54.27 17.89C57.12 17.89 59.97 15.4 62.82 14.39C65.67 13.38 68.52 11.72 71.36 11.72C74.21 11.72 77.06 12.28 79.91 12.28C82.76 12.28 85.61 9.61 88.45 8.23C91.3 6.85 94.15 5.41 97 4L97 32L3 32Z"></path><path class="ds-sparkline__line" d="M3 28C5.85 27.48 8.7 26.44 11.55 26.44C14.39 26.44 17.24 26.99 20.09 26.99C22.94 26.99 25.79 23.72 28.64 22.67C31.48 21.62 34.33 21.08 37.18 20.18C40.03 19.29 42.88 17.24 45.73 17.24C48.58 17.24 51.42 17.89 54.27 17.89C57.12 17.89 59.97 15.4 62.82 14.39C65.67 13.38 68.52 11.72 71.36 11.72C74.21 11.72 77.06 12.28 79.91 12.28C82.76 12.28 85.61 9.61 88.45 8.23C91.3 6.85 94.15 5.41 97 4" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Tiempo de respuesta</p>
<p class="ds-stat__value">182 ms</p>
<p class="ds-stat__delta" data-tone="bad">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+8&nbsp;%</span><span class="ds-visually-hidden"> (empeora)</span></span>
<span class="ds-stat__period">vs. semana anterior</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Tendencia de Tiempo de respuesta"><svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 28C5.85 25.71 8.7 21.14 11.55 21.14C14.39 21.14 17.24 24.57 20.09 24.57C22.94 24.57 25.79 14.29 28.64 14.29C31.48 14.29 34.33 17.71 37.18 17.71C40.03 17.71 42.88 12.38 45.73 10.86C48.58 9.33 51.42 7.43 54.27 7.43C57.12 7.43 59.97 14.29 62.82 14.29C65.67 14.29 68.52 10.51 71.36 8.8C74.21 7.09 77.06 4 79.91 4C82.76 4 85.61 7.43 88.45 7.43C91.3 7.43 94.15 6.51 97 6.06L97 32L3 32Z"></path><path class="ds-sparkline__line" d="M3 28C5.85 25.71 8.7 21.14 11.55 21.14C14.39 21.14 17.24 24.57 20.09 24.57C22.94 24.57 25.79 14.29 28.64 14.29C31.48 14.29 34.33 17.71 37.18 17.71C40.03 17.71 42.88 12.38 45.73 10.86C48.58 9.33 51.42 7.43 54.27 7.43C57.12 7.43 59.97 14.29 62.82 14.29C65.67 14.29 68.52 10.51 71.36 8.8C74.21 7.09 77.06 4 79.91 4C82.76 4 85.61 7.43 88.45 7.43C91.3 7.43 94.15 6.51 97 6.06" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Tickets abiertos</p>
<p class="ds-stat__value">46</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-down"></ds-icon><span>−21&nbsp;%</span><span class="ds-visually-hidden"> (mejora)</span></span>
<span class="ds-stat__period">vs. semana anterior</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Tendencia de Tickets abiertos"><svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 4C5.85 5.33 8.7 8 11.55 8C14.39 8 17.24 6 20.09 6C22.94 6 25.79 13 28.64 13C31.48 13 34.33 11 37.18 11C40.03 11 42.88 15.44 45.73 16C48.58 16.56 51.42 16.56 54.27 17C57.12 17.44 59.97 18.2 62.82 19C65.67 19.8 68.52 21.2 71.36 22C74.21 22.8 77.06 23.56 79.91 24C82.76 24.44 85.61 24.5 88.45 25C91.3 25.5 94.15 27 97 28L97 32L3 32Z"></path><path class="ds-sparkline__line" d="M3 4C5.85 5.33 8.7 8 11.55 8C14.39 8 17.24 6 20.09 6C22.94 6 25.79 13 28.64 13C31.48 13 34.33 11 37.18 11C40.03 11 42.88 15.44 45.73 16C48.58 16.56 51.42 16.56 54.27 17C57.12 17.44 59.97 18.2 62.82 19C65.67 19.8 68.52 21.2 71.36 22C74.21 22.8 77.06 23.56 79.91 24C82.76 24.44 85.61 24.5 88.45 25C91.3 25.5 94.15 27 97 28" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>
```

## Número destacado

El número que toda la pantalla existe para mostrar. Uno solo por vista, en la misma sans del resto — una fuente display o serif parece adorno.

Cifras proporcionales en el número grande

En tamaño grande, las cifras tabulares dan a cada dígito el ancho de un cero y el “1” queda suelto. Guarda `tabular-nums` para columnas que necesitan alinearse.

Marcado de los ejemplos de esta sección:

```html
<article class="ds-stat ds-stat--hero">
<p class="ds-stat__label">Ingresos en 2026</p>
<p class="ds-stat__value">1,4&nbsp;M&nbsp;R$</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+27,9&nbsp;%</span><span class="ds-visually-hidden"> (mejora)</span></span>
<span class="ds-stat__period">vs. 2025</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Tendencia de Ingresos en 2026"><svg viewBox="0 0 100 44" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 40C5.85 38.46 8.7 35.37 11.55 35.37C14.39 35.37 17.24 36.91 20.09 36.91C22.94 36.91 25.79 30.51 28.64 28.69C31.48 26.86 34.33 24.57 37.18 24.57C40.03 24.57 42.88 31.77 45.73 31.77C48.58 31.77 51.42 22.97 54.27 20.46C57.12 17.94 59.97 14.8 62.82 14.8C65.67 14.8 68.52 17.37 71.36 17.37C74.21 17.37 77.06 12.39 79.91 10.17C82.76 7.96 85.61 4 88.45 4C91.3 4 94.15 5.03 97 5.54L97 44L3 44Z"></path><path class="ds-sparkline__line" d="M3 40C5.85 38.46 8.7 35.37 11.55 35.37C14.39 35.37 17.24 36.91 20.09 36.91C22.94 36.91 25.79 30.51 28.64 28.69C31.48 26.86 34.33 24.57 37.18 24.57C40.03 24.57 42.88 31.77 45.73 31.77C48.58 31.77 51.42 22.97 54.27 20.46C57.12 17.94 59.97 14.8 62.82 14.8C65.67 14.8 68.52 17.37 71.36 17.37C74.21 17.37 77.06 12.39 79.91 10.17C82.76 7.96 85.61 4 88.45 4C91.3 4 94.15 5.03 97 5.54" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>

<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m8.5 12 2.5 2.5 4.5-5"></path></svg>

<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m9 9 6 6M15 9l-6 6"></path></svg>
```

## Sparkline

La tendencia sin ejes, en línea con el texto. Se estira al ancho de quien la contiene y el trazo no se deforma.

Con área — El predeterminado: línea en el tono de contexto, lavado leve y el punto actual en el color de destaque.

Solo la línea — Para filas de tabla y lugares estrechos, donde el área pesaría.

Sin punto — Cuando “ahora” no importa — solo la forma de la curva.

Recta — Puntos unidos por segmentos, para series cortas o escalonadas.

### Dentro de una tabla

Marcado de los ejemplos de esta sección:

```html
<span class="ds-sparkline" aria-hidden="true"><svg viewBox="0 0 100 48" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 44C5.85 43.13 8.7 41.39 11.55 41.39C14.39 41.39 17.24 42.31 20.09 42.31C22.94 42.31 25.79 36.86 28.64 35.11C31.48 33.36 34.33 32.47 37.18 30.97C40.03 29.48 42.88 26.07 45.73 26.07C48.58 26.07 51.42 27.14 54.27 27.14C57.12 27.14 59.97 23 62.82 21.32C65.67 19.64 68.52 16.87 71.36 16.87C74.21 16.87 77.06 17.79 79.91 17.79C82.76 17.79 85.61 13.35 88.45 11.05C91.3 8.75 94.15 6.35 97 4L97 48L3 48Z"></path><path class="ds-sparkline__line" d="M3 44C5.85 43.13 8.7 41.39 11.55 41.39C14.39 41.39 17.24 42.31 20.09 42.31C22.94 42.31 25.79 36.86 28.64 35.11C31.48 33.36 34.33 32.47 37.18 30.97C40.03 29.48 42.88 26.07 45.73 26.07C48.58 26.07 51.42 27.14 54.27 27.14C57.12 27.14 59.97 23 62.82 21.32C65.67 19.64 68.52 16.87 71.36 16.87C74.21 16.87 77.06 17.79 79.91 17.79C82.76 17.79 85.61 13.35 88.45 11.05C91.3 8.75 94.15 6.35 97 4" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span>

<span class="ds-sparkline" aria-hidden="true"><svg viewBox="0 0 100 48" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__line" d="M3 44C5.85 43.13 8.7 41.39 11.55 41.39C14.39 41.39 17.24 42.31 20.09 42.31C22.94 42.31 25.79 36.86 28.64 35.11C31.48 33.36 34.33 32.47 37.18 30.97C40.03 29.48 42.88 26.07 45.73 26.07C48.58 26.07 51.42 27.14 54.27 27.14C57.12 27.14 59.97 23 62.82 21.32C65.67 19.64 68.52 16.87 71.36 16.87C74.21 16.87 77.06 17.79 79.91 17.79C82.76 17.79 85.61 13.35 88.45 11.05C91.3 8.75 94.15 6.35 97 4" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span>

<span class="ds-sparkline" aria-hidden="true"><svg viewBox="0 0 100 48" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__line" d="M3 44C5.85 43.13 8.7 41.39 11.55 41.39C14.39 41.39 17.24 42.31 20.09 42.31C22.94 42.31 25.79 36.86 28.64 35.11C31.48 33.36 34.33 32.47 37.18 30.97C40.03 29.48 42.88 26.07 45.73 26.07C48.58 26.07 51.42 27.14 54.27 27.14C57.12 27.14 59.97 23 62.82 21.32C65.67 19.64 68.52 16.87 71.36 16.87C74.21 16.87 77.06 17.79 79.91 17.79C82.76 17.79 85.61 13.35 88.45 11.05C91.3 8.75 94.15 6.35 97 4" vector-effect="non-scaling-stroke"></path></svg></span>

<span class="ds-sparkline" aria-hidden="true"><svg viewBox="0 0 100 48" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 44L11.55 41.39L20.09 42.31L28.64 35.11L37.18 30.97L45.73 26.07L54.27 27.14L62.82 21.32L71.36 16.87L79.91 17.79L88.45 11.05L97 4L97 48L3 48Z"></path><path class="ds-sparkline__line" d="M3 44L11.55 41.39L20.09 42.31L28.64 35.11L37.18 30.97L45.73 26.07L54.27 27.14L62.82 21.32L71.36 16.87L79.91 17.79L88.45 11.05L97 4" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span>
```

## Medidor

Una razón contra un límite. El relleno lleva la gravedad — marca, atención, crítico — y el riel es un tono más claro del mismo color. A partir de la atención, recibe ícono.

Dos porciones de torta son un medidor. Para varias partes de un todo, usa la dona o barras apiladas.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-meter ds-meter--brand" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="42" aria-valuetext="42 GB de 100 GB" aria-label="Almacenamiento">
<div class="ds-meter__head">
<span class="ds-meter__label">Almacenamiento</span>
<span class="ds-meter__value"><strong>42 GB</strong><span> de 100 GB</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
<p class="ds-meter__caption">Límite del plan: 100 GB</p>
</div>

<div class="ds-meter ds-meter--warning" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="78" aria-valuetext="78 de 100, atención" aria-label="Cuota de API">
<div class="ds-meter__head">
<span class="ds-meter__label">Cuota de API</span>
<span class="ds-meter__value"><ds-icon name="alert-triangle"></ds-icon><strong>78</strong><span> de 100</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
<p class="ds-meter__caption">Atención a partir del 75% — se renueva en 3 días</p>
</div>

<div class="ds-meter ds-meter--danger" role="meter" aria-valuemin="0" aria-valuemax="5000" aria-valuenow="4700" aria-valuetext="4,7&nbsp;mil&nbsp;R$ de 5&nbsp;mil&nbsp;R$, crítico" aria-label="Límite usado">
<div class="ds-meter__head">
<span class="ds-meter__label">Límite usado</span>
<span class="ds-meter__value"><ds-icon name="alert-circle"></ds-icon><strong>4,7&nbsp;mil&nbsp;R$</strong><span> de 5&nbsp;mil&nbsp;R$</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
<p class="ds-meter__caption">Crítico a partir del 90%</p>
</div>

<div class="ds-meter ds-meter--success" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="112" aria-valuetext="112 de 100, ok" aria-label="Meta de ventas">
<div class="ds-meter__head">
<span class="ds-meter__label">Meta de ventas</span>
<span class="ds-meter__value"><strong>112</strong><span> de 100</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
<p class="ds-meter__caption">Meta cumplida — tono de éxito forzado con tone</p>
</div>

<div class="ds-meter ds-meter--brand ds-meter--sm" role="meter" aria-valuemin="0" aria-valuemax="5" aria-valuenow="3" aria-valuetext="3 etapas de 5 etapas" aria-label="Onboarding">
<div class="ds-meter__head">
<span class="ds-meter__label">Onboarding</span>
<span class="ds-meter__value"><strong>3 etapas</strong><span> de 5 etapas</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
</div>

<div class="ds-meter ds-meter--danger ds-meter--sm" role="meter" aria-valuemin="0" aria-valuemax="1" aria-valuenow="0.86" aria-valuetext="86&nbsp;%, crítico" aria-label="Espacio del equipo">
<div class="ds-meter__head">
<span class="ds-meter__label">Espacio del equipo</span>
<span class="ds-meter__value"><ds-icon name="alert-circle"></ds-icon><strong>86&nbsp;%</strong></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
<p class="ds-meter__caption">Límites propios: atención en 60%, crítico en 85%</p>
</div>
```

## Variación

El color sale de dos hechos: hacia dónde fue el número y si eso es bueno. La misma alza puede ser mejora o empeora — por eso el signo, el ícono y el texto vienen siempre juntos.

Subió y subir es bueno: mejora.

Subió, pero lo bueno es bajar: empeora.

Bajó y bajar es bueno: mejora.

Bajó y lo bueno es subir: empeora.

No cambió: estable, sin color.

Sin lado bueno: solo informa.

Marcado de los ejemplos de esta sección:

```html
<article class="ds-stat">
<p class="ds-stat__label">Ingresos</p>
<p class="ds-stat__value">1,3&nbsp;M&nbsp;R$</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+12,4&nbsp;%</span><span class="ds-visually-hidden"> (mejora)</span></span>
<span class="ds-stat__period">vs. mes anterior</span>
</p>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Costo de adquisición</p>
<p class="ds-stat__value">84&nbsp;R$</p>
<p class="ds-stat__delta" data-tone="bad">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+8&nbsp;%</span><span class="ds-visually-hidden"> (empeora)</span></span>
<span class="ds-stat__period">vs. mes anterior</span>
</p>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Tiempo de respuesta</p>
<p class="ds-stat__value">182 ms</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-down"></ds-icon><span>−14&nbsp;%</span><span class="ds-visually-hidden"> (mejora)</span></span>
<span class="ds-stat__period">vs. mes anterior</span>
</p>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Clientes activos</p>
<p class="ds-stat__value">38.210</p>
<p class="ds-stat__delta" data-tone="bad">
<span class="ds-stat__change"><ds-icon name="trending-down"></ds-icon><span>−3,1&nbsp;%</span><span class="ds-visually-hidden"> (empeora)</span></span>
<span class="ds-stat__period">vs. mes anterior</span>
</p>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Visitas</p>
<p class="ds-stat__value">12.400</p>
<p class="ds-stat__delta" data-tone="neutral">
<span class="ds-stat__change"><ds-icon name="minus"></ds-icon><span>0&nbsp;%</span><span class="ds-visually-hidden"> (estable)</span></span>
<span class="ds-stat__period">vs. mes anterior</span>
</p>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Temperatura del servidor</p>
<p class="ds-stat__value">41 °C</p>
<p class="ds-stat__delta" data-tone="neutral">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+2&nbsp;%</span><span class="ds-visually-hidden"> (estable)</span></span>
<span class="ds-stat__period">vs. ayer</span>
</p>
</article>
```

## Accesibilidad

El indicador es texto, así que ya empieza accesible. Estos detalles lo completan.

- El número es texto — Valor, variación y período son texto de verdad — los lectores de pantalla lo leen, los buscadores lo encuentran, se puede copiar.
- Mejora o empeora, por escrito — La variación lleva un texto oculto — “(mejora)”, “(empeora)” o “(estable)” — porque el color no llega al lector de pantalla.
- Nunca solo color — El signo (+ o −) y el ícono de alza o baja acompañan al color. Funciona en escala de grises y para daltónicos.
- Sparkline con nombre — Con `trendLabel` o `label`, se vuelve una imagen con descripción; sin ellos, queda oculta — el número ya lo dijo todo.
- Medidor semántico — `role="meter"` con valor, mínimo, máximo y un texto que incluye el estado: “92 de 100, crítico”.
- Contraste de la variación — El verde y el rojo de texto (`success.fg`, `danger.fg`) superan 4,5:1 en los dos temas.

## Tokens

Lo que consumen el indicador, la sparkline y el medidor.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Fondo del indicador | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno | #3E516624 | #FFFFFF0F |
| radius.xl (`--ds-radius-xl`) | Radio del indicador | 20 px | 20 px |
| color.fg.muted (`--ds-color-fg-muted`) | Etiqueta | #46586E | #CEC8C1 |
| color.fg.default (`--ds-color-fg-default`) | Valor | #2B3847 | #F3EDE5 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Período | #5C6C7F | #9C9792 |
| color.success.fg (`--ds-color-success-fg`) | Variación que mejora | #0F6939 | #97DCA8 |
| color.danger.fg (`--ds-color-danger-fg`) | Variación que empeora | #C13834 | #FFB2AA |
| color.chart.other (`--ds-color-chart-other`) | Línea de la sparkline | #93A0B0 | #605D59 |
| color.chart.series.1 (`--ds-color-chart-series-1`) | Punto actual de la sparkline | #D95C0A | #D95C0A |
| color.brand.solid (`--ds-color-brand-solid`) | Medidor normal | #3E5166 | #C0CAD6 |
| color.brand.subtle (`--ds-color-brand-subtle`) | Riel del medidor normal | #EEF2F6 | #C0CAD624 |
| color.chart.status.warning (`--ds-color-chart-status-warning`) | Medidor en atención | #F6A10C | #FFB851 |
| color.chart.status.critical (`--ds-color-chart-status-critical`) | Medidor crítico | #E44B46 | #E44B46 |
| color.chart.status.good (`--ds-color-chart-status-good`) | Medidor con meta cumplida | #339F5C | #51B873 |
| radius.full (`--ds-radius-full`) | Riel del medidor | 9999 px | 9999 px |

## Uso

Cuando un número basta — y cómo no estropearlo.

- **Haz:** un número en lugar de una barra. Un solo valor no necesita gráfico. Una columna sola o una torta de dos porciones se vuelven indicador.
- **Evita:** variación sin período. “+12%” solo no dice si es sobre ayer o sobre el año pasado. Nombra el período.
- **Consejo:** Un destacado por pantalla. Si dos números disputan la cima, ninguno gana. Elige el que la pantalla existe para mostrar.

## API

Tres funciones que devuelven HTML, sin estado — úsalas en cualquier lugar, incluso dentro de tablas y tarjetas.

```html
import { statTileHtml, sparklineHtml, meterHtml } from 'https://lumeui.dev/v/0.35/lume.js';

kpis.innerHTML = [
  statTileHtml({ label: 'Ingresos', value: 1284000, format: 'currency-compact',
             delta: 0.124, deltaLabel: 'vs. mes anterior', trend: ingresos }),
  statTileHtml({ label: 'Tiempo de respuesta', value: '182 ms',
             delta: 0.08, deltaLabel: 'vs. semana anterior', good: 'down' }),
].join('');

celda.innerHTML = sparklineHtml(ingresos, { width: 96, height: 24, area: false });
uso.innerHTML = meterHtml({ label: 'Almacenamiento', value: 72, max: 100, format: (v) => `${v} GB` });
```

`statTileHtml(options)`

Indicador completo. Devuelve HTML.

|   |   |
| --- | --- |
|  `label`  | Etiqueta, en mayúscula inicial y sin dos puntos. |
|  `value · format`  | Número y formato ('currency-compact', 'integer'…) — o un texto listo, como '182 ms'. |
|  `delta · deltaFormat`  | Variación (razón: 0,124 = +12,4 %) y cómo mostrarla. Predeterminado: porcentaje. |
|  `deltaLabel`  | Contra qué: “vs. mes anterior”. Sin período, la variación no dice nada. |
|  `good`  | 'up' (subir es bueno), 'down' (bajar es bueno) o 'none' (sin lado bueno). |
|  `trend · trendLabel`  | Serie de la sparkline y su nombre accesible. |
|  `hero · href`  | Versión destacada; con href, el indicador se vuelve enlace. |

`sparklineHtml(values, options)`

Línea de tendencia sin ejes. Devuelve HTML que se estira al ancho del contenedor.

|   |   |
| --- | --- |
|  `width · height`  | Tamaño predeterminado cuando nada lo define (112 × 32). |
|  `area · curve`  | Lavado bajo la línea (predeterminado) y 'smooth' o 'linear'. |
|  `highlight`  | 'last' marca el punto actual; 'none' quita el punto. |
|  `color · label`  | Color de la línea (predeterminado: chart.other) y el nombre accesible. |
|  `domain`  | Escala fija [mín, máx]. Sin ella, la escala cubre al menos el 10% del valor — una serie estable no se vuelve sierra. |

`meterHtml(options)`

Una razón contra un límite. Devuelve HTML con role="meter".

|   |   |
| --- | --- |
|  `label · value · max · min`  | Qué mide y en qué rango. |
|  `format`  | Formato del valor; sin él, muestra el porcentaje. |
|  `thresholds`  | Dónde pasa a atención y crítico. Predeterminado: { warning: 0.75, danger: 0.9 }. |
|  `tone · size · caption`  | Fuerza un tono ('success'…), versión 'sm' y una línea de apoyo. |

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```
