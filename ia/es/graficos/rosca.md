# Dona

Sección de Lume: Gráficos. Página: https://lumeui.dev/#/graficos/rosca

La parte del todo de un vistazo. Hasta seis porciones, el total en el centro y una lista que es leyenda y etiqueta a la vez.

En números: porciones como máximo: 6 · grosor predeterminado: 24 px · respiro entre porciones: 2 px · contraste mínimo: 3,37:1.

## Ejemplo

```html
import { createDonutChart } from 'https://lumeui.dev/v/1.10/lume.js';

donutChart(document.querySelector('#pagos'), {
  title: 'Pagos por método',
  subtitle: 'Transacciones en octubre',
  items: [
    { name: 'Pix', value: 4210 },
    { name: 'Tarjeta de crédito', value: 2630 },
    { name: 'Tarjeta de débito', value: 1290 },
    { name: 'Boleto', value: 610 },
    { name: 'Saldo en cuenta', value: 320 },
  ],
  format: 'integer',
  centerLabel: 'transacciones',
});
```

## Variantes

Misma anatomía, cuatro ajustes. La dona nunca recibe 3D, sombra ni porción despegada.

Total en el centro `center: 'total'` — El predeterminado. El centro suma todo; con hover, muestra la porción. La lista al lado es la leyenda y la etiqueta de cada parte.

Cola en “Otros” `maxSegments: 6` — De la 6.ª porción en adelante, las menores se vuelven “Otros”, en gris y siempre al final. La tabla abre la cola.

Con textura `texture: true` — Rayado a 45° y 135° para daltonismo total, impresión y alto contraste. En la impresión, se activa sola.

Fina, con centro propio `thickness: 14` — Anillo fino cuando el número del centro es el mensaje. Di qué significa en la etiqueta.

### Lado a lado o apiladaautomático, por el ancho

Con espacio: lista al lado

En lo estrecho: lista debajo

Con espacio (diámetro + 260 px), la lista queda al lado de la dona. En lo estrecho, baja debajo de ella — sin que configures nada.

## ¿Dona o barras?

La dona muestra proporción; nadie compara ángulos con precisión. Cuando los valores son cercanos, usa barras.

- **Evita:** dona para valores cercanos. ¿Qué región es la mayor? Con 21,8 % contra 21 %, el ángulo no responde — la persona necesita leer la lista.
- **Haz:** barras ordenadas. Longitud sobre la misma base: el orden salta a la vista y el valor queda en el extremo.

## Estados

El primero empieza con una porción destacada — pasa el mouse o usa las flechas para cambiar.

Hover y teclado — La porción sale 4 px del anillo, las demás se atenúan y el centro muestra el porcentaje. La fila de la lista se ilumina a la vez.

Cargando — Recargar

Al buscar datos nuevos, la dona anterior queda a media opacidad — sin esqueleto, sin saltos.

Vacío — Sin valores, un aviso ocupa el lugar del anillo. Una dona vacía no es un círculo gris.

Marcado de los ejemplos de esta sección:

```html
<figure class="ds-chart" data-kind="donut">
<figcaption class="ds-chart__head">
<div class="ds-chart__titles">
<p class="ds-chart__title" id="ds-donut-44-title">Pagos por método</p>
</div>
<div class="ds-chart__actions">
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-chart__toggle" data-chart-toggle="" aria-pressed="false" aria-label="Ver como tabla" data-ds-tooltip="Ver como tabla"><ds-icon name="table"></ds-icon></button>
</div>
</figcaption>
<div class="ds-chart__legend" data-legend="" hidden=""></div>
<div class="ds-chart__body" data-body="">
<div class="ds-chart__plot" data-plot="" role="group" aria-roledescription="gráfico" aria-describedby="ds-donut-44-hint" aria-label="Pagos por método. Gráfico de dona con 0 porciones"><div class="ds-chart__empty"><ds-icon name="bar-chart"></ds-icon><span>Ningún pago en este período.</span></div></div>
<div class="ds-chart__tooltip" data-tooltip="" hidden=""></div>
</div>
<div class="ds-chart__table" data-table="" hidden=""></div>
<p class="ds-visually-hidden" id="ds-donut-44-hint">Usa las flechas para recorrer los valores. La tabla tiene todos los datos.</p>
<p class="ds-visually-hidden" aria-live="polite" data-live=""></p></figure>
```

## Anatomía

Cinco partes. La dona es solo el resumen visual; quien lleva los números es la lista.

- 1 — Anillo — Grosor de 24 px por defecto (14 a 36). Las porciones empiezan a las 12 y siguen en sentido horario, de mayor a menor.
- 2 — Respiro — 2 px entre porciones, abiertos en el propio dibujo — se ve la superficie. Nunca un contorno alrededor de la porción.
- 3 — Centro — El total en sans semibold, con cifras proporcionales, y la etiqueta con la unidad. Con hover, se vuelve el porcentaje de la porción.
- 4 — Lista — Leyenda y etiqueta directa a la vez: color, nombre, valor y porcentaje, con números alineados en columnas.
- 5 — Otros — La cola agrupada, en `chart.other`, siempre al final. Nunca un 7.º color.

## Accesibilidad

La dona ya sale accesible. Lo que sigue siendo tuyo: un título claro y la etiqueta de la unidad en el centro.

- Tabla siempre a mano — El botón del encabezado cambia la dona por una tabla con nombre, valor y porcentaje — incluso los elementos agrupados en “Otros”, uno por uno.
- Teclado — Tab ← → Home End Esc — Tab enfoca el gráfico; las flechas recorren las porciones; Home y End van a la primera y a la última; Esc vuelve al total.
- Lector de pantalla — El gráfico se anuncia con título y número de porciones. Con cada flecha, una región en vivo lee el nombre, el porcentaje y el valor.
- Nunca solo color — Cada porción tiene nombre y número en la lista, en el mismo orden del anillo. Para daltonismo total, impresión y alto contraste, activa `texture`.
- Contraste verificado — Los 6 primeros colores de serie superan 3:1 sobre la superficie en los dos temas — el menor queda en 3,37:1.
- Movimiento — Las porciones aparecen una vez, con fundido. Con movimiento reducido, nada se anima — ni el destacado de la porción.

## Tokens usados

Las porciones usan los colores de gráfico, en orden fijo; los textos usan siempre los tokens de texto.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.chart.series.1 (`--ds-color-chart-series-1`) | Primera porción | #D95C0A | #D95C0A |
| color.chart.series.2 (`--ds-color-chart-series-2`) | Segunda porción — y así hasta la 5.ª | #2A8ED6 | #2A8ED6 |
| color.chart.other (`--ds-color-chart-other`) | “Otros” | #93A0B0 | #605D59 |
| color.fg.default (`--ds-color-fg-default`) | Valor del centro y de la lista | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | Nombre en la lista | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Etiqueta del centro y porcentaje | #53657A | #9C9792 |
| color.bg.hover (`--ds-color-bg-hover`) | Fila de la lista destacada | #3E51660D | #FFFFFF0D |
| color.border.subtle (`--ds-color-border-subtle`) | Divisor de la lista | #3E516624 | #FFFFFF0F |
| color.border.focus (`--ds-color-border-focus`) | Anillo de foco del gráfico | #53657A | #C0CAD6 |
| duration.base (`--ds-duration-base`) | Porción saliendo del anillo | 200ms | 200ms |

## Uso

La dona es la forma más fácil de equivocarse. Úsala poco, y solo para parte del todo.

- **Haz:** partes de un todo. Las porciones suman el 100% de una sola cosa — transacciones, presupuesto, clientes. Nada de categorías que se superponen.
- **Haz:** hasta 6 porciones, en orden. De mayor a menor, empezando a las 12. A partir de la 6.ª, junta en “Otros” — el componente lo hace por ti.
- **Evita:** 3D, sombra y porción despegada. La perspectiva distorsiona los ángulos y la sombra se vuelve ruido. El destacado ya viene con el hover, y solo mientras dura.
- **Evita:** dona de dos porciones. “72% usado” es una razón contra un límite. Un medidor lo dice en una línea, sin pedir que nadie lea ángulos.
- **Consejo:** ¿Comparar? Usa barras. Si la pregunta es “quién es mayor”, “cuánto cambió” o “cómo fue a lo largo del tiempo”, la respuesta es barra o línea — nunca varias donas lado a lado.
- **Consejo:** Di la unidad en el centro. “9120” no dice nada solo. centerLabel: 'transacciones' sí.

## API

Una llamada monta la dona, la lista y la tabla; `update()` cambia los elementos.

| Opción | Valores | Predeterminado | Qué hace |
| --- | --- | --- | --- |
|  `items`  | [{ name, value, color? }] | — | Una entrada por porción, en el orden en que aparecen desde las 12. Ordena de mayor a menor. |
|  `format`  | preset \| Intl \| función | 'number' | Formato de los valores en el centro, la lista y la tabla. El porcentaje se calcula. |
|  `center`  | 'total' \| { value, label } \| false | 'total' | Lo que muestra el centro fuera del hover. |
|  `centerLabel`  | string | 'Total' | Etiqueta bajo el total. Di la unidad: “transacciones”, “clientes”. |
|  `maxSegments`  | número | 6 | Por encima de eso, las porciones menores se vuelven “Otros”. |
|  `otherLabel`  | string | 'Otros' | Nombre de la porción que agrupa la cola. |
|  `size · thickness`  | px | 200 · 24 | Diámetro y grosor del anillo. La lista baja cuando no cabe al lado. |
|  `texture`  | boolean | false | Rayado de reserva para cuando el color no basta. |
|  `title · subtitle`  | string | — | Encabezado. Sin título, pasa `label` para nombrar el gráfico. |
|  `categoryLabel · valueLabel`  | string | 'Categoría' · 'Valor' | Encabezados de las columnas de la vista en tabla. |

```html
const chart = createDonutChart(el, { title: 'Pagos', items, format: 'integer' });

chart.update({ items: nuevosItems });   // redibuja manteniendo el marco
chart.setLoading(true);                 // media opacidad mientras busca
chart.destroy();
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```
