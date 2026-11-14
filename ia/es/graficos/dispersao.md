# Dispersión

Sección de Lume: Gráficos. Página: https://lumeui.dev/#/graficos/dispersao

La relación entre dos medidas: cada punto es un elemento. Puntos de 8 px con anillo, hasta tres series, nombre solo en quien lo merece — y un objetivo generoso para que el hover encuentre el punto más cercano.

En números: series: hasta 3 · punto: 8 px · anillo: 2 px · objetivo del hover: 24 px.

## Ejemplo

```html
import { createScatterChart } from 'https://lumeui.dev/v/0.33/lume.js';

// cada punto: { x, y, label }
const chart = createScatterChart(document.querySelector('#cuentas'), {
  title: 'Costo × satisfacción por segmento',
  subtitle: 'Cada punto es una cuenta',
  series: [
    { name: 'Minorista', points: minorista },
    { name: 'Empresas', points: empresas },
    { name: 'Autónomos', points: autonomos },
  ],
  x: { label: 'Costo de adquisición', format: 'currency' },
  y: { label: 'NPS', format: 'integer' },
});
```

## Variantes

De la nube simple a las burbujas. En todas, el hover encuentra el punto más cercano y la tabla lista cada uno.

Simple `1 serie` — Una serie, un tono. Sin leyenda: el título dice qué es cada punto.

Por segmento `series: 3` — Hasta tres series. En una dispersión, cualquier punto puede tocar a cualquier otro — por eso el techo es menor que en las líneas.

Burbujas `size` — Una tercera medida se vuelve el área de la burbuja. Sirve para comparar órdenes de magnitud, no para leer el valor.

Con referencias `reference` — Las medianas dividen el plano en cuadrantes: arriba y a la izquierda está lo mejor — satisfecho y barato.

Etiquetas selectivas `showLabel` — Nombre solo en los extremos — el mayor NPS, el menor y el costo más alto. El resto queda en el tooltip y en la tabla.

## Objetivo de 24 px

Un punto de 8 px es demasiado pequeño para apuntar. El hover busca el punto más cercano al puntero, hasta 24 px de distancia.

- Punto de 8 px — Radio 4, en el color de la serie. Lo bastante pequeño para que la nube respire.
- Anillo de 2 px — Del color de la superficie, separa puntos superpuestos sin dibujar un contorno de tinta.
- Objetivo de 24 px — El más cercano dentro del radio se ilumina, con un anillo de su color. En burbujas, la distancia cuenta desde el borde.

Pruébalo en la nube `44 puntos` — Pasa el mouse entre los puntos: siempre hay uno encendido, el más cercano al puntero.

## Accesibilidad

Cada punto se puede alcanzar sin mouse y sin color.

- Tabla con todos los puntos — El botón de tabla lista cada punto con nombre, serie, x, y y tamaño — el camino para quien no ve la nube.
- Teclado — Tab ← → Home End Esc — Tab enfoca el gráfico; las flechas recorren los puntos de izquierda a derecha, Home y End van a los extremos y Esc cierra el tooltip.
- Lector de pantalla — El gráfico anuncia cuántos puntos tiene; cada punto visitado se lee con nombre y los dos valores.
- Colores validados en todos los pares — En la dispersión cualquier color toca a cualquier otro. Las tres primeras series de Lume se validaron par a par para daltonismo — por eso el límite de tres.
- Nunca solo color — Con dos series o más hay leyenda, y el tooltip repite el nombre de la serie.
- Objetivo generoso — El hover toma el punto más cercano hasta 24 px, el mínimo cómodo para mouse y toque.

## Tokens usados

Los tres primeros colores de serie, las líneas del plano y el color de la superficie para el anillo.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.chart.series.1 (`--ds-color-chart-series-1`) | Primera serie | #D95C0A | #D95C0A |
| color.chart.series.2 (`--ds-color-chart-series-2`) | Segunda serie | #2A8ED6 | #2A8ED6 |
| color.chart.series.3 (`--ds-color-chart-series-3`) | Tercera serie | #CD5892 | #CD5892 |
| color.bg.surface (`--ds-color-bg-surface`) | Anillo de los puntos (color de la superficie) | #FFFFFF | #24221F |
| color.chart.grid (`--ds-color-chart-grid`) | Líneas de cuadrícula | #DAE0E8 | #33312E |
| color.chart.axis (`--ds-color-chart-axis`) | Ejes | #C0CAD6 | #4A4744 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Valores y títulos de los ejes, referencia | #5C6C7F | #9C9792 |
| color.fg.muted (`--ds-color-fg-muted`) | Etiquetas directas | #46586E | #CEC8C1 |
| color.bg.raised (`--ds-color-bg-raised`) | Fondo del tooltip | #FFFFFF | #2C2A27 |

## Uso

La dispersión responde “¿una cosa va con la otra?”. Para el resto, hay gráficos mejores.

- **Haz:** hasta 3 series. Más que eso, los colores empiezan a confundirse. Agrupa en “Otros” o separa en pequeños múltiplos.
- **Evita:** burbuja para valor exacto. El ojo se equivoca con el área de los círculos. La burbuja dice “mucho mayor” o “mucho menor”; el número queda en el tooltip.
- **Consejo:** El cero es opcional. A diferencia de las barras, los ejes pueden empezar cerca de los datos — la posición es el mensaje, no la longitud. Activa zero cuando la distancia hasta cero importa.
- **Haz:** una referencia. Mediana, media o meta dan sentido a los cuadrantes. Sin ellas, la persona no sabe qué es “alto”.
- **Evita:** tiempo en el eje x. Si los puntos son una secuencia en el tiempo, únelos: usa un gráfico de línea.
- **Consejo:** Etiqueta solo en los extremos. Nombre en todos los puntos se vuelve ruido. Etiqueta lo que pide la historia y deja el resto en el tooltip.

## API

Una función, con update, setLoading y destroy como en todos los gráficos.

```html
import { createScatterChart } from 'https://lumeui.dev/v/0.33/lume.js';

const chart = createScatterChart(document.querySelector('#cuentas'), {
  title: 'Costo × satisfacción',
  series: [{ name: 'Minorista', points: [{ x: 42, y: 61, label: 'Cuenta 01' }, { x: 58, y: 47, label: 'Cuenta 02' }] }],
  x: { label: 'Costo de adquisición', format: 'currency' },
  y: { label: 'NPS', format: 'integer', reference: 50, referenceLabel: 'Meta' },
});
```

| Opción | Tipo | Predeterminado | Para qué |
| --- | --- | --- | --- |
| `series` | { name, color?, points }[] | — | Hasta 3 series. Por encima de eso, Lume avisa en la consola: agrupa o usa pequeños múltiplos. |
| `points` | { x, y, size?, label?, showLabel? }[] | — | `label` nombra el punto en el tooltip y en la tabla; `showLabel: false` quita solo la etiqueta directa. |
| `x · y` | { label, format, zero, reference, referenceLabel } | zero: false | Título del eje, formato, si empieza en cero y una línea de referencia discontinua. |
| `size` | { label, format, range } | range: [4, 18] | Con `size` en los puntos, el radio sigue la raíz del valor (área proporcional). |
| `height` | number | 320 | Altura total, con los ejes. |
| `title · subtitle · label · card · table · pointLabel` | — | — | Iguales a los de todos los gráficos; pointLabel nombra la columna de la tabla. |

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```
