# Data table

Lume section: Components. Page: https://lumeui.dev/#/componentes/tabela-de-dados

The Table with state inside: search, filters, sort, pages, selection with bulk actions, columns, density, cell editing, and CSV. To just show data, the Table is enough.

In numbers: features: 10 · densities: 2 · editing: 3 types · dependencies: 0.

## Live

Lume’s own components. Search with /, filter, sort, mark some rows, edit the status and the owner, and open a row’s … menu.

## Features

Each one turns on with an option. Without it, that part doesn’t show.

- Search `search: { shortcut: '/' }` — Looks at every column (or only the ones you choose), ignoring accents and case.
- Filters `filters` — One Chip per filter, with checkboxes and how many rows each option would bring.
- Sort `sortable` — Ascending, descending, and back to the original order.
- Columns `hideable · hidden · width` — Pick the visible ones; with a width, they don’t jump when changing pages.
- Density `density: 'compact'` — Rows of 52 or 40 px.
- Bulk `bulkActions` — Once marked, the bulk bar takes the toolbar’s place. Shift marks a range.
- Row actions `rowActions` — The … button opens the Menu. It shows with the mouse, focus, or the active row; on touch, always.
- Active row `onRowClick · activeKey` — Click or Enter opens the row; the active one gets the selected background and the indicator line.
- Cell editing `edit: { type: 'text' | 'currency' | 'select' }` — The value turns into a field or menu. Enter saves, Esc undoes; a Promise shows “saving”.
- CSV `exportCsv` — Exports what’s filtered, or just the marked rows. Separator ; when the language uses a decimal comma.

## Code

In HTML, `render` returns HTML as text; in React, `DataTable` takes JSX. The options are the same. After a cell is saved, whoever owns the data sends the new list.

```html
<div id="clientes"></div>

<script type="module">
  import { createDataTable } from 'https://lumeui.dev/v/1.13/lume.js';

  const tabela = createDataTable(document.querySelector('#clientes'), {
    caption: 'Clients',
    rows: clientes,
    rowKey: (c) => c.id,
    rowLabel: (c) => c.nome,
    columns: [
      { key: 'nome', label: 'Name', sortable: true, strong: true },
      { key: 'valor', label: 'Amount', num: true, sortable: true, width: 140,
        render: (c) => brl(c.valor),
        edit: { type: 'currency', onSave: (c, valor) => salvar(c.id, { valor }) } },
    ],
    filters: [{ key: 'freq', label: 'Frequency', options, value: (c) => c.freq }],
    search: { shortcut: '/' },
    rowActions: [{ value: 'abrir', label: 'Open record' }],
    onRowAction: (value, cliente) => …,
    bulkActions: [{ value: 'presenca', label: 'Mark attendance' }],
    onBulkAction: (value, lista) => …,
    onRowClick: (cliente) => tabela.setActive(cliente.id),
    exportCsv: { fileName: 'clientes' },
  });
  // after saving: tabela.setRows(listaNova);
</script>

// React
<DataTable
  caption="Clients"
  rows={clientes}
  rowKey={(c) => c.id}
  columns={colunas}
  filters={filtros}
  search={{ shortcut: '/' }}
  bulkActions={[{ value: 'presenca', label: 'Mark attendance' }]}
  onBulkAction={(value, lista) => …}
  onRowClick={(c) => setAberto(c.id)}
  activeKey={aberto}
/>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

A real table, with every control named.

- Table name — The title names the table (`aria-labelledby`); sort in `aria-sort`.
- Named rows — `rowLabel` names each row’s controls: “Select Button”, “Actions for Button”, “Edit status for Button”.
- Clickable row — Tab Enter — Gets focus with Tab and opens with Enter; the active one has aria-current.
- Changes announced — The range and the marked rows live in status regions: screen readers hear “1–10 of 24” and “3 selected”.
- Editing by keyboard — Enter Esc — Enter saves, Esc undoes and returns focus to the value.

## Tokens used

On top of the Table, Pagination, and Chip tokens.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Card | #FFFFFF | #24221F |
| color.bg.inverse (`--ds-color-bg-inverse`) | Bulk bar | #2B3847 | #F3EDE5 |
| color.bg.selected (`--ds-color-bg-selected`) | Marked rows and the active one | #3E516612 | #C0CAD61A |
| color.brand.indicator (`--ds-color-brand-indicator`) | Active row line | #C97B63 | #DE9680 |
| radius.xl (`--ds-radius-xl`) | Card corners | 20 px | 20 px |

## Usage

When to use it and when to prefer something else.

- **Do:** working lists. Clients, sessions, orders: data people look for, filter, and change.
- **Avoid:** a table just to show. Five fixed rows don’t call for search or filters. Use the Table.
- **Tip:** Lots of data?. Up to a few thousand rows, the math runs in the browser. Beyond that, search on the server and use onStateChange to request the right page.
