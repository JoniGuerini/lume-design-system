# Tabla

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/tabela

Para comparar datos en filas y columnas. Números alineados, encabezado que ordena y selección que no depende solo del color.

En números: densidades: 2 · estados: 3 · altura de fila: 52 px · elemento: <table>.

## Ejemplo

```html
<div class="ds-table-wrap">
  <table class="ds-table ds-table--hover">
    <caption>Componentes <span class="ds-table__caption-desc">Uso en las pantallas del producto</span></caption>
    <thead>
      <tr>
        <th scope="col">Componente</th>
        <th scope="col">Estado</th>
        <th scope="col" class="ds-table__num">Pantallas</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="ds-table__strong">Botón</td>
        <td><span class="ds-badge ds-badge--sm ds-badge--success">Listo</span></td>
        <td class="ds-table__num">248</td>
      </tr>
      <tr>
        <td class="ds-table__strong">Tooltip</td>
        <td><span class="ds-badge ds-badge--sm ds-badge--success">Listo</span></td>
        <td class="ds-table__num">201</td>
      </tr>
      …
    </tbody>
  </table>
</div>
```

## Ordenar y seleccionar

Haz clic en un encabezado para ordenar (otra vez invierte). Marca filas para actuar en lote — el conteo aparece arriba.

Ninguno seleccionado

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-clear="" hidden=""><ds-icon name="x"></ds-icon>Limpiar selección</button>

<p class="ds-visually-hidden" aria-live="polite" data-live=""></p>
```

## Anatomía

Una tabla nativa con cinco piezas. Nada de grid de divs: la semántica viene lista.

- 1 — Leyenda — `<caption>` nombra la tabla para lectores de pantalla. Puede tener una descripción corta.
- 2 — Encabezado — `<th scope="col">` en `label-sm`, atenuado. Ordenable con un botón dentro y `aria-sort`.
- 3 — Fila — 52 px (40 px en la compacta), divisor fino. Hover opcional; la seleccionada recibe `bg.selected`.
- 4 — Celda numérica — `ds-table__num`: a la derecha y con cifras tabulares, para que los dígitos se alineen.
- 5 — Selección opcional — Checkbox nativo con etiqueta por fila y “seleccionar todos” en el encabezado.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-table-wrap">
<table class="ds-table">
<caption>Componentes <span>1</span></caption>
<thead><tr>
<th class="ds-table__check"><input type="checkbox"><span>5</span></th>
<th aria-sort="descending"><span class="ds-table__sort">Componente<ds-icon name="chevron-down"></ds-icon></span><span>2</span></th>
<th class="ds-table__num">Pantallas</th>
</tr></thead>
<tbody>
<tr data-selected=""><td class="ds-table__check"><input type="checkbox" checked=""></td><td class="ds-table__strong">Botón <span>3</span></td><td class="ds-table__num">248 <span>4</span></td></tr>
<tr><td class="ds-table__check"><input type="checkbox"></td><td class="ds-table__strong">Chip</td><td class="ds-table__num">132</td></tr>
</tbody>
</table>
</div>
```

## Densidad

Cómoda es el predeterminado. Compacta para pantallas de operación, con muchas filas para recorrer.

Cómoda `predeterminado · 52 px`

Compacta `ds-table--compact · 40 px`

Marcado de los ejemplos de esta sección:

```html
<div class="ds-table-wrap">
<table class="ds-table">
<thead><tr>
<th scope="col">Componente</th><th scope="col">Estado</th><th scope="col" class="ds-table__num">Pantallas</th>
</tr></thead>
<tbody><tr>
<td class="ds-table__strong">Botón</td><td><span class="ds-badge ds-badge--sm ds-badge--success">Listo</span></td><td class="ds-table__num">248</td>
</tr><tr>
<td class="ds-table__strong">Tooltip</td><td><span class="ds-badge ds-badge--sm ds-badge--success">Listo</span></td><td class="ds-table__num">201</td>
</tr><tr>
<td class="ds-table__strong">Campo de texto</td><td><span class="ds-badge ds-badge--sm ds-badge--warning">En revisión</span></td><td class="ds-table__num">164</td>
</tr></tbody>
</table>
</div>

<div class="ds-table-wrap">
<table class="ds-table ds-table--compact">
<thead><tr>
<th scope="col">Componente</th><th scope="col">Estado</th><th scope="col" class="ds-table__num">Pantallas</th>
</tr></thead>
<tbody><tr>
<td class="ds-table__strong">Botón</td><td><span class="ds-badge ds-badge--sm ds-badge--success">Listo</span></td><td class="ds-table__num">248</td>
</tr><tr>
<td class="ds-table__strong">Tooltip</td><td><span class="ds-badge ds-badge--sm ds-badge--success">Listo</span></td><td class="ds-table__num">201</td>
</tr><tr>
<td class="ds-table__strong">Campo de texto</td><td><span class="ds-badge ds-badge--sm ds-badge--warning">En revisión</span></td><td class="ds-table__num">164</td>
</tr></tbody>
</table>
</div>
```

## Estados

Una tabla sin datos sigue siendo una tabla: mantén el encabezado y di qué hacer. Al cargar, muestra la forma de las filas — sin brillo.

Vacío `ds-table__empty` — Ícono, frase corta y una salida.

Cargando `ds-table__skeleton` — Barras planas que pulsan despacio; se detienen con movimiento reducido.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-table-wrap">
<table class="ds-table ds-table--hover">
<thead><tr>
<th scope="col">Componente</th><th scope="col">Estado</th><th scope="col" class="ds-table__num">Pantallas</th>
</tr></thead>
<tbody><tr class="ds-table__empty"><td colspan="3">
<span class="ds-table__empty-inner">
<ds-icon name="inbox"></ds-icon>
<span class="ds-table__empty-title">Ningún componente con ese filtro</span>
<span>Prueba otro estado o limpia la búsqueda.</span>
<span class="ds-btn ds-btn--secondary ds-btn--sm">Limpiar filtros</span>
</span>
</td></tr></tbody>
</table>
</div>

<div class="ds-table-wrap">
<table class="ds-table ds-table--hover">
<thead><tr>
<th scope="col">Componente</th><th scope="col">Estado</th><th scope="col" class="ds-table__num">Pantallas</th>
</tr></thead>
<tbody><tr><td><span class="ds-table__skeleton"></span></td><td><span class="ds-table__skeleton"></span></td><td class="ds-table__num"><span class="ds-table__skeleton"></span></td></tr><tr><td><span class="ds-table__skeleton"></span></td><td><span class="ds-table__skeleton"></span></td><td class="ds-table__num"><span class="ds-table__skeleton"></span></td></tr><tr><td><span class="ds-table__skeleton"></span></td><td><span class="ds-table__skeleton"></span></td><td class="ds-table__num"><span class="ds-table__skeleton"></span></td></tr></tbody>
</table>
</div>
```

## Accesibilidad

Usa la tabla nativa y casi todo viene gratis.

- Tabla de verdad — `<table>`, `<caption>` y `<th scope="col">`: el lector de pantalla anuncia la columna de cada celda.
- Ordenación anunciada — El encabezado ordenable es un botón; el `th` recibe `aria-sort` y una región viva confirma el cambio.
- Selección con checkbox — Cada fila tiene un checkbox con nombre (“Seleccionar Botón”). El “seleccionar todos” muestra el estado mixto cuando solo una parte está marcada.
- Desplazamiento con teclado — Tab ↑ ↓ — Con encabezado fijo, el contenedor se vuelve `role="region"` con nombre y `tabindex="0"` para desplazarse con las flechas.
- Nunca solo color — El estado va como texto en el badge; la fila seleccionada también queda con el checkbox marcado.
- No la uses para layout — La tabla es para datos tabulares. Para alinear elementos de la interfaz, usa grid.

## Tokens usados

Todo lo que consume la tabla.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Fondo y encabezado fijo | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno y divisores | #3E516624 | #FFFFFF0F |
| color.fg.subtle (`--ds-color-fg-subtle`) | Encabezado y texto atenuado | #53657A | #9C9792 |
| color.fg.default (`--ds-color-fg-default`) | Celdas | #2B3847 | #F3EDE5 |
| color.bg.hover (`--ds-color-bg-hover`) | Hover de la fila | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Fila seleccionada | #3E516612 | #C0CAD61A |
| color.fg.brand (`--ds-color-fg-brand`) | Ícono de la columna ordenada | #3E5166 | #DAE0E8 |
| color.brand.solid (`--ds-color-brand-solid`) | Checkbox marcado | #3E5166 | #C0CAD6 |
| color.bg.muted (`--ds-color-bg-muted`) | Barras de carga | #DAE0E8 | #3D3B38 |
| text.body-sm (`--ds-text-body-sm`) | Celdas | 14/22 · regular | 14/22 · regular |
| text.label-sm (`--ds-text-label-sm`) | Encabezado | 13/18 · medium | 13/18 · medium |
| radius.xl (`--ds-radius-xl`) | Contenedor | 20 px | 20 px |
| space.200 (`--ds-space-200`) | Espacio lateral de las celdas | 16 px | 16 px |

## Uso

Tres reglas para tablas fáciles de leer.

- **Haz:** números a la derecha. Alineados a la derecha y con cifras tabulares, los valores se comparan de un vistazo.
- **Evita:** tabla para poca cosa. Dos columnas de “etiqueta y valor” quedan mejor en una lista de detalles.
- **Consejo:** Pocas columnas. Muestra solo lo que ayuda a decidir. El resto va al detalle de la fila.
