# Tabla de datos

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/tabela-de-dados

La Tabla con el estado adentro: búsqueda, filtros, orden, páginas, selección con acciones en lote, columnas, densidad, edición en la celda y CSV. Para solo mostrar datos, alcanza la Tabla.

En números: recursos: 10 · densidades: 2 · edición: 3 tipos · dependencias: 0.

## En vivo

Los componentes del propio Lume. Busca con /, filtra, ordena, marca algunas filas, edita el estado y el responsable y abre el menú … de una fila.

## Recursos

Cada uno se activa con una opción. Sin ella, esa parte no aparece.

- Búsqueda `search: { shortcut: '/' }` — Mira todas las columnas (o solo las que digas), sin tildes ni mayúsculas.
- Filtros `filters` — Un Chip por filtro, con casillas y cuántas filas traería cada opción.
- Orden `sortable` — Ascendente, descendente y de vuelta al orden original.
- Columnas `hideable · hidden · width` — Elegir las visibles; con ancho, no saltan al cambiar de página.
- Densidad `density: 'compact'` — Filas de 52 o de 40 px.
- Lote `bulkActions` — Al marcar, la barra de acciones en lote toma el lugar de la barra de herramientas. Shift marca un intervalo.
- Acciones de la fila `rowActions` — El botón … abre el Menú. Aparece con el ratón, el foco o la fila activa; en táctil, siempre.
- Fila activa `onRowClick · activeKey` — Clic o Enter abre la fila; la activa recibe el fondo seleccionado y la línea del indicador.
- Edición en la celda `edit: { type: 'text' | 'currency' | 'select' }` — El valor se vuelve campo o menú. Enter guarda, Esc deshace; una Promise muestra el “guardando”.
- CSV `exportCsv` — Exporta lo filtrado, o solo las marcadas. Separador ; cuando el idioma usa coma decimal.

## Código

En HTML, `render` devuelve HTML en texto; en React, `DataTable` recibe JSX. Las opciones son las mismas. Después de guardar una celda, quien es dueño de los datos manda la lista nueva.

```html
<div id="clientes"></div>

<script type="module">
  import { createDataTable } from 'https://lumeui.dev/v/1.13/lume.js';

  const tabela = createDataTable(document.querySelector('#clientes'), {
    caption: 'Clientes',
    rows: clientes,
    rowKey: (c) => c.id,
    rowLabel: (c) => c.nome,
    columns: [
      { key: 'nome', label: 'Nombre', sortable: true, strong: true },
      { key: 'valor', label: 'Valor', num: true, sortable: true, width: 140,
        render: (c) => brl(c.valor),
        edit: { type: 'currency', onSave: (c, valor) => salvar(c.id, { valor }) } },
    ],
    filters: [{ key: 'freq', label: 'Frecuencia', options, value: (c) => c.freq }],
    search: { shortcut: '/' },
    rowActions: [{ value: 'abrir', label: 'Abrir ficha' }],
    onRowAction: (value, cliente) => …,
    bulkActions: [{ value: 'presenca', label: 'Marcar asistencia' }],
    onBulkAction: (value, lista) => …,
    onRowClick: (cliente) => tabela.setActive(cliente.id),
    exportCsv: { fileName: 'clientes' },
  });
  // después de guardar: tabela.setRows(listaNova);
</script>

// React
<DataTable
  caption="Clientes"
  rows={clientes}
  rowKey={(c) => c.id}
  columns={colunas}
  filters={filtros}
  search={{ shortcut: '/' }}
  bulkActions={[{ value: 'presenca', label: 'Marcar asistencia' }]}
  onBulkAction={(value, lista) => …}
  onRowClick={(c) => setAberto(c.id)}
  activeKey={aberto}
/>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Una tabla de verdad, con cada control nombrado.

- Nombre de la tabla — El título nombra la tabla (`aria-labelledby`); orden en `aria-sort`.
- Filas con nombre — `rowLabel` nombra los controles de cada fila: “Seleccionar Botón”, “Acciones de Botón”, “Editar estado de Botón”.
- Fila clicable — Tab Enter — Recibe foco con Tab y se abre con Enter; la activa lleva aria-current.
- Cambios anunciados — El intervalo y las filas marcadas quedan en regiones de estado: el lector de pantalla oye “1–10 de 24” y “3 seleccionadas”.
- Edición por teclado — Enter Esc — Enter guarda, Esc deshace y devuelve el foco al valor.

## Tokens usados

Además de los de la Tabla, la Paginación y el Chip.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Tarjeta | #FFFFFF | #24221F |
| color.bg.inverse (`--ds-color-bg-inverse`) | Barra de lote | #2B3847 | #F3EDE5 |
| color.bg.selected (`--ds-color-bg-selected`) | Filas marcadas y la activa | #3E516612 | #C0CAD61A |
| color.brand.indicator (`--ds-color-brand-indicator`) | Línea de la fila activa | #C97B63 | #DE9680 |
| radius.xl (`--ds-radius-xl`) | Esquinas de la tarjeta | 20 px | 20 px |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** listas de trabajo. Clientes, sesiones, pedidos: datos que la persona busca, filtra y cambia.
- **Evita:** tabla solo para mostrar. Cinco filas fijas no piden búsqueda ni filtro. Usa la Tabla.
- **Consejo:** ¿Muchos datos?. Hasta algunos miles de filas, la cuenta va en el navegador. Más allá, busca en el servidor y usa onStateChange para pedir la página correcta.
