/**
 * Tabela de dados — a Tabela do Lume com o estado dentro: busca, filtros, ordem, páginas, seleção,
 * colunas visíveis, densidade, ações por linha e em lote, edição na célula e exportar CSV.
 *
 *   <div id="clientes"></div>
 *
 *   const tabela = createDataTable(document.querySelector('#clientes'), {
 *     caption: 'Clientes', description: '248 clientes',
 *     actions: '<button class="ds-btn ds-btn--primary">Novo cliente</button>',   // HTML no cabeçalho
 *     rows: clientes,
 *     rowKey: (c) => c.id,
 *     rowLabel: (c) => c.nome,                         // nome da linha para o leitor de tela
 *     columns: [
 *       { key: 'nome', label: 'Nome', sortable: true, strong: true },
 *       { key: 'frequencia', label: 'Frequência', render: (c) => badge(c.frequencia), width: 140 },
 *       { key: 'valor', label: 'Valor', num: true, sortable: true, width: 140,
 *         render: (c) => brl(c.valor),
 *         edit: { type: 'currency', onSave: (c, valor) => salvar(c.id, { valor }) } },
 *     ],
 *     filters: [{ key: 'frequencia', label: 'Frequência', options: [{ value: 'semanal', label: 'Semanal' }, …], value: (c) => c.frequencia }],
 *     search: { placeholder: 'Buscar clientes', shortcut: '/' },
 *     rowActions: [{ value: 'abrir', label: 'Abrir ficha', icon: 'id-card' }, { type: 'separator' }, { value: 'excluir', label: 'Excluir', tone: 'danger' }],
 *     onRowAction: (value, cliente) => …,
 *     bulkActions: [{ value: 'presenca', label: 'Marcar presença', icon: 'calendar-check' }],
 *     onBulkAction: (value, clientes) => …,
 *     onRowClick: (cliente) => abrirFicha(cliente), activeKey: 'c-12',
 *     exportCsv: { fileName: 'clientes' },
 *     empty: { title: 'Nenhum cliente ainda', description: '…', actions: '<button …>Cadastrar</button>' },
 *     onStateChange: (state) => …,                     // { query, filters, sort, page, pageSize, selected, hidden, density }
 *   });
 *   tabela.setRows(lista); tabela.setLoading(true); tabela.setActive(key); tabela.setState({ page: 1 }); tabela.destroy();
 *
 * Colunas: key, label, value(row) (padrão: row[key]), render(row) → HTML (padrão: o valor, escapado),
 * sortable, sortValue(row), searchValue(row) (search: false tira a coluna da busca), exportValue(row), num, strong,
 * width e minWidth (px), hideable (padrão: true), hidden, edit: { type: 'text' | 'currency' | 'select', options,
 * currency, validate(value, row) → mensagem ou null, onSave(row, value) → nada ou uma Promise }.
 * Depois de salvar, quem é dono dos dados chama setRows com a lista nova.
 *
 * Teclado: a linha clicável recebe foco (Tab) e abre com Enter; Shift ao marcar uma linha marca o intervalo
 * desde a última; na célula em edição, Enter salva e Esc desfaz.
 */
import { icon } from '../icons/icons.js';
import { msg, numberFormat } from './i18n.js';
import { createMenu } from './menu.js';
import { createPopover } from './popover.js';
import { createPagination } from './pagination.js';
import { createSegmented } from './segmented.js';
import { createSearchField } from './search-field.js';
import { createCurrencyField } from './currency-field.js';

let uid = 0;
const escape = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const normalize = (s) =>
  String(s ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

export const DATA_TABLE_STATE = { query: '', filters: {}, sort: null, page: 1, pageSize: 20, selected: [], hidden: [], density: 'comfortable' };

const cellValue = (col, row) => (col.value ? col.value(row) : row?.[col.key]);
const compare = (a, b) => {
  if (a === b) return 0;
  if (a === null || a === undefined || a === '') return 1;
  if (b === null || b === undefined || b === '') return -1;
  if (a instanceof Date && b instanceof Date) return a - b;
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: 'base' });
};

/**
 * O que a tabela mostra para um estado: as linhas filtradas e ordenadas, a página e quantas linhas cada opção
 * de filtro teria. Sem DOM: o React e o HTML usam a mesma conta.
 */
export function dataTableView(rows = [], { columns = [], filters = [] } = {}, state = DATA_TABLE_STATE) {
  const query = normalize(state.query).trim();
  const searchable = columns.filter((c) => c.search !== false);
  const matchesQuery = (row) =>
    !query || searchable.some((c) => normalize(c.searchValue ? c.searchValue(row) : cellValue(c, row)).includes(query));
  const active = filters.filter((f) => state.filters?.[f.key]?.length);
  const matchesFilters = (row, except) => active.every((f) => f.key === except || state.filters[f.key].includes(String(f.value(row))));

  const base = rows.filter(matchesQuery);
  const counts = {};
  for (const f of filters) {
    counts[f.key] = {};
    for (const row of base) {
      if (!matchesFilters(row, f.key)) continue;
      const v = String(f.value(row));
      counts[f.key][v] = (counts[f.key][v] ?? 0) + 1;
    }
  }
  let filtered = base.filter((row) => matchesFilters(row));
  const sortCol = state.sort && columns.find((c) => c.key === state.sort.key);
  if (sortCol) {
    const dir = state.sort.direction === 'descending' ? -1 : 1;
    const get = sortCol.sortValue ?? ((row) => cellValue(sortCol, row));
    filtered = filtered.map((row, i) => ({ row, i, v: get(row) })).sort((a, b) => compare(a.v, b.v) * dir || a.i - b.i).map((x) => x.row);
  }
  const pageSize = state.pageSize || filtered.length || 1;
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const page = Math.min(Math.max(1, state.page || 1), pages);
  return { filtered, pageRows: filtered.slice((page - 1) * pageSize, page * pageSize), page, pages, total: rows.length, counts };
}

/** Largura mínima da tabela: as fixas somadas e 160 px (ou minWidth) para cada coluna sem largura. Abaixo disso, ela rola. */
export function dataTableMinWidth(columns, { selectable = false, actions = false } = {}) {
  return columns.reduce((sum, c) => sum + (c.width ?? c.minWidth ?? 160), 0) + (selectable ? 48 : 0) + (actions ? 56 : 0);
}

/** CSV das linhas (separador ; quando o idioma usa vírgula decimal, como o Excel espera). */
export function dataTableCsv(rows, columns, { textOf } = {}) {
  const decimalComma = numberFormat().format(1.5).includes(',');
  const sep = decimalComma ? ';' : ',';
  const quote = (v) => {
    const s = v instanceof Date ? v.toISOString() : String(v ?? '');
    return /[";,\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const head = columns.map((c) => quote(typeof c.label === 'string' ? c.label : c.key)).join(sep);
  const body = rows.map((row) =>
    columns.map((c) => quote(c.exportValue ? c.exportValue(row) : textOf ? textOf(c, row) : cellValue(c, row))).join(sep),
  );
  return [head, ...body].join('\r\n');
}

/** Baixa um texto como arquivo .csv (com BOM, para o Excel ler os acentos). */
export function downloadCsv(fileName, text) {
  const blob = new Blob(['﻿', text], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = fileName.endsWith('.csv') ? fileName : `${fileName}.csv`;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

export function createDataTable(root, options = {}) {
  const o = { columns: [], filters: [], rows: [], pageSizes: [10, 20, 50], ...options };
  const id = `ds-dt-${++uid}`;
  let rows = o.rows;
  let loading = Boolean(o.loading);
  let activeKey = o.activeKey ?? null;
  let state = {
    ...DATA_TABLE_STATE,
    pageSize: o.pageSize ?? o.pageSizes[1] ?? o.pageSizes[0] ?? 20,
    density: o.density ?? 'comfortable',
    hidden: o.columns.filter((c) => c.hidden).map((c) => c.key),
    ...o.state,
  };
  let anchor = null; // última linha marcada, para o Shift
  let editing = null; // { key, colKey }
  const selectable = o.selectable ?? Boolean(o.bulkActions?.length);
  const keyOf = (row) => String(o.rowKey(row));
  const labelOf = (row) => (o.rowLabel ? o.rowLabel(row) : String(cellValue(o.columns[0], row) ?? ''));
  const visibleColumns = () => o.columns.filter((c) => !state.hidden.includes(c.key));
  const hideable = () => o.columns.filter((c) => c.hideable !== false);
  const n = (v) => numberFormat().format(v);

  root.classList.add('ds-data-table');
  root.innerHTML = `
    ${o.caption || o.actions ? `<header class="ds-data-table__head">
      <div>${o.caption ? `<h2 class="ds-data-table__title" id="${id}-title">${escape(o.caption)}</h2>` : ''}${o.description ? `<p class="ds-data-table__desc">${escape(o.description)}</p>` : ''}</div>
      ${o.actions ? `<div class="ds-data-table__head-actions">${o.actions}</div>` : ''}
    </header>` : ''}
    <div class="ds-data-table__toolbar" data-toolbar></div>
    <div class="ds-data-table__bulk" data-bulk hidden></div>
    <div class="ds-data-table__scroll"><table class="ds-table ds-table--hover"${o.caption ? ` aria-labelledby="${id}-title"` : ''}><colgroup></colgroup><thead></thead><tbody></tbody></table></div>
    <footer class="ds-data-table__foot"><nav class="ds-pagination"></nav></footer>`;
  const toolbar = root.querySelector('[data-toolbar]');
  const bulk = root.querySelector('[data-bulk]');
  const table = root.querySelector('table');
  const tbody = table.querySelector('tbody');
  const thead = table.querySelector('thead');
  const colgroup = table.querySelector('colgroup');

  let view = dataTableView(rows, o, state);
  const emit = () => o.onStateChange?.({ ...state });
  function set(partial, { resetPage = false } = {}) {
    state = { ...state, ...partial, ...(resetPage ? { page: 1 } : {}) };
    render();
    emit();
  }

  /* ───────── Barra de ferramentas (montada uma vez; a busca não perde o foco) ───────── */

  const searchOpts = o.search === true ? {} : o.search;
  const parts = [];
  if (searchOpts) {
    parts.push(`<div class="ds-field ds-field--sm ds-data-table__search">${icon('search', { size: 16 })}<input class="ds-field__input" type="search" data-search aria-label="${escape(searchOpts.label ?? o.caption ?? msg('dataTable.search'))}" placeholder="${escape(searchOpts.placeholder ?? msg('dataTable.search'))}" autocomplete="off"></div>`);
  }
  o.filters.forEach((f) => parts.push(`<button type="button" class="ds-chip ds-chip--sm" data-filter="${escape(f.key)}"><span data-label></span><span class="ds-chip__chevron">${icon('chevron-down', { size: 14 })}</span></button>`));
  parts.push('<span class="ds-data-table__spacer"></span>');
  if (hideable().length > 1) parts.push(`<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-columns>${icon('columns', { size: 16 })}<span data-label></span></button>`);
  if (o.density !== false) {
    parts.push(`<div class="ds-segmented ds-segmented--sm" role="radiogroup" data-density>
      <button type="button" class="ds-segmented__item" role="radio" data-value="comfortable" data-ds-tooltip="">${icon('rows', { size: 16 })}</button>
      <button type="button" class="ds-segmented__item" role="radio" data-value="compact" data-ds-tooltip="">${icon('list', { size: 16 })}</button>
    </div>`);
  }
  if (o.exportCsv) parts.push(`<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-export>${icon('download', { size: 16 })}<span data-label></span></button>`);
  toolbar.innerHTML = parts.join('');

  const search = toolbar.querySelector('[data-search]');
  const searchApi = search ? createSearchField(search, { shortcut: searchOpts?.shortcut, onChange: (q) => set({ query: q, selected: [] }, { resetPage: true }) }) : null;
  if (search) search.value = state.query;

  const density = toolbar.querySelector('[data-density]');
  density?.querySelector(`[data-value="${state.density}"]`)?.setAttribute('aria-checked', 'true');
  density?.querySelectorAll('[role="radio"]').forEach((b) => b.getAttribute('aria-checked') || b.setAttribute('aria-checked', 'false'));
  const densityApi = density ? createSegmented(density, { onChange: (v) => set({ density: v }) }) : null;

  // filtros: um popover com caixas de marcar e a contagem de cada opção
  const filterPops = o.filters.map((f) => {
    const chip = toolbar.querySelector(`[data-filter="${CSS.escape(f.key)}"]`);
    const panel = document.createElement('div');
    panel.className = 'ds-data-table__filter';
    const pop = createPopover(chip, { content: panel, label: f.label, align: 'start', className: 'ds-data-table__pop' });
    panel.addEventListener('change', (event) => {
      const box = event.target.closest('input[type="checkbox"]');
      if (!box) return;
      const now = new Set(state.filters[f.key] ?? []);
      if (box.checked) now.add(box.value);
      else now.delete(box.value);
      set({ filters: { ...state.filters, [f.key]: [...now] }, selected: [] }, { resetPage: true });
    });
    panel.addEventListener('click', (event) => {
      if (!event.target.closest('[data-clear-filter]')) return;
      set({ filters: { ...state.filters, [f.key]: [] }, selected: [] }, { resetPage: true });
    });
    return { f, chip, panel, pop };
  });

  // colunas visíveis
  const columnsBtn = toolbar.querySelector('[data-columns]');
  const columnsPanel = document.createElement('div');
  columnsPanel.className = 'ds-data-table__filter';
  const columnsPop = columnsBtn ? createPopover(columnsBtn, { content: columnsPanel, label: msg('dataTable.columnsTitle'), align: 'end', className: 'ds-data-table__pop' }) : null;
  columnsPanel.addEventListener('change', (event) => {
    const box = event.target.closest('input[type="checkbox"]');
    if (!box) return;
    const hidden = new Set(state.hidden);
    if (box.checked) hidden.delete(box.value);
    else hidden.add(box.value);
    if (o.columns.length - hidden.size < 1) return void (box.checked = true);
    set({ hidden: [...hidden] });
  });

  const exportBtn = toolbar.querySelector('[data-export]');
  const textOf = (c, row) => {
    const v = cellValue(c, row);
    if (v !== undefined && v !== null && typeof v !== 'object') return v;
    if (!c.render) return v;
    const tmp = document.createElement('div');
    tmp.innerHTML = c.render(row);
    return tmp.textContent.trim();
  };
  const exportRows = (list) => {
    downloadCsv(o.exportCsv.fileName ?? 'tabela', dataTableCsv(list, visibleColumns(), { textOf }));
    o.onExport?.(list.length);
  };
  exportBtn?.addEventListener('click', () => exportRows(view.filtered));

  function checkList(items) {
    return `<ul class="ds-data-table__checks" role="list">${items
      .map(
        (it) => `<li><label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" value="${escape(it.value)}"${it.checked ? ' checked' : ''}${it.disabled ? ' disabled' : ''}><span class="ds-choice__label">${it.swatch ? `<span class="ds-data-table__swatch" style="background:${escape(it.swatch)}"></span>` : ''}${escape(it.label)}</span></label>${it.count !== undefined ? `<span class="ds-data-table__count">${n(it.count)}</span>` : ''}</li>`,
      )
      .join('')}</ul>`;
  }

  function renderToolbar() {
    for (const { f, chip, panel } of filterPops) {
      const chosen = state.filters[f.key] ?? [];
      const labels = f.options.filter((op) => chosen.includes(String(op.value))).map((op) => op.label);
      chip.querySelector('[data-label]').textContent = labels.length === 1 ? `${f.label} · ${labels[0]}` : labels.length ? `${f.label} · ${n(labels.length)}` : f.label;
      chip.setAttribute('aria-pressed', String(labels.length > 0));
      const focused = panel.contains(document.activeElement) ? document.activeElement.value : null;
      panel.innerHTML =
        checkList(f.options.map((op) => ({ value: String(op.value), label: op.label, swatch: op.swatch, checked: chosen.includes(String(op.value)), count: view.counts[f.key]?.[String(op.value)] ?? 0 }))) +
        (chosen.length ? `<button type="button" class="ds-inline-action" data-clear-filter>${icon('x', { size: 16 })}${escape(msg('dataTable.clearFilter'))}</button>` : '');
      if (focused !== null) panel.querySelector(`input[value="${CSS.escape(focused)}"]`)?.focus();
    }
    if (columnsBtn) {
      const visible = hideable().filter((c) => !state.hidden.includes(c.key));
      columnsBtn.querySelector('[data-label]').textContent = msg('dataTable.columns', visible.length, hideable().length);
      const focused = columnsPanel.contains(document.activeElement) ? document.activeElement.value : null;
      columnsPanel.innerHTML = checkList(hideable().map((c) => ({ value: c.key, label: typeof c.label === 'string' ? c.label : c.key, checked: !state.hidden.includes(c.key) })));
      if (focused !== null) columnsPanel.querySelector(`input[value="${CSS.escape(focused)}"]`)?.focus();
    }
    if (density) {
      density.setAttribute('aria-label', msg('dataTable.density'));
      const [comfortable, compact] = density.querySelectorAll('[role="radio"]');
      comfortable.setAttribute('aria-label', msg('dataTable.comfortable'));
      comfortable.dataset.dsTooltip = msg('dataTable.comfortable');
      compact.setAttribute('aria-label', msg('dataTable.compact'));
      compact.dataset.dsTooltip = msg('dataTable.compact');
    }
    if (exportBtn) exportBtn.querySelector('[data-label]').textContent = msg('dataTable.export');
  }

  /* ───────── Ações em lote ───────── */

  function renderBulk() {
    const count = state.selected.length;
    toolbar.hidden = count > 0 && selectable;
    bulk.hidden = !(count > 0 && selectable);
    if (bulk.hidden) return void (bulk.innerHTML = '');
    bulk.innerHTML = `<span class="ds-data-table__bulk-count" role="status">${escape(msg('dataTable.selected', count))}</span>
      <span class="ds-data-table__spacer"></span>
      ${(o.bulkActions ?? []).map((a) => `<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm${a.tone === 'danger' ? ' ds-data-table__bulk-danger' : ''}" data-bulk-action="${escape(a.value)}">${a.icon ? icon(a.icon, { size: 16 }) : ''}${escape(a.label)}</button>`).join('')}
      ${o.exportCsv ? `<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-bulk-export>${icon('download', { size: 16 })}${escape(msg('dataTable.export'))}</button>` : ''}
      <button type="button" class="ds-icon-btn ds-icon-btn--sm" data-clear-selection aria-label="${escape(msg('dataTable.clearSelection'))}" data-ds-tooltip="${escape(msg('dataTable.clearSelection'))}">${icon('x', { size: 16 })}</button>`;
  }
  const selectedRows = () => rows.filter((r) => state.selected.includes(keyOf(r)));
  bulk.addEventListener('click', (event) => {
    const action = event.target.closest('[data-bulk-action]');
    if (action) o.onBulkAction?.(action.dataset.bulkAction, selectedRows());
    if (event.target.closest('[data-bulk-export]')) exportRows(selectedRows());
    if (event.target.closest('[data-clear-selection]')) {
      set({ selected: [] });
      (search ?? toolbar.querySelector('button'))?.focus();
    }
  });

  /* ───────── Tabela ───────── */

  const sortIcon = (dir) => icon(dir === 'ascending' ? 'chevron-up' : dir === 'descending' ? 'chevron-down' : 'chevrons-up-down', { size: 14 });

  function renderHead(cols) {
    table.style.minWidth = `${dataTableMinWidth(cols, { selectable, actions: Boolean(o.rowActions?.length) })}px`;
    colgroup.innerHTML =
      (selectable ? '<col style="width:48px">' : '') +
      cols.map((c) => `<col${c.width ? ` style="width:${c.width}px"` : c.minWidth ? ` style="min-width:${c.minWidth}px"` : ''}>`).join('') +
      (o.rowActions?.length ? '<col style="width:56px">' : '');
    const pageKeys = view.pageRows.map(keyOf);
    const marked = pageKeys.filter((k) => state.selected.includes(k)).length;
    thead.innerHTML = `<tr>
      ${selectable ? `<th scope="col" class="ds-table__check"><input type="checkbox" data-select-all aria-label="${escape(msg('table.selectAll'))}"${pageKeys.length && marked === pageKeys.length ? ' checked' : ''}${pageKeys.length ? '' : ' disabled'}></th>` : ''}
      ${cols
        .map((c) => {
          const dir = state.sort?.key === c.key ? state.sort.direction : null;
          const label = escape(c.label);
          const inner = c.sortable ? `<button type="button" class="ds-table__sort" data-sort="${escape(c.key)}">${label}${sortIcon(dir)}</button>` : label;
          return `<th scope="col"${c.num ? ' class="ds-table__num"' : ''}${dir ? ` aria-sort="${dir}"` : ''}>${inner}</th>`;
        })
        .join('')}
      ${o.rowActions?.length ? `<th scope="col" class="ds-data-table__actions"><span class="ds-visually-hidden">${escape(msg('dataTable.actions'))}</span></th>` : ''}
    </tr>`;
    const all = thead.querySelector('[data-select-all]');
    if (all) all.indeterminate = marked > 0 && marked < pageKeys.length;
  }

  function cellHtml(c, row) {
    const content = c.render ? c.render(row) : escape(cellValue(c, row));
    if (!c.edit) return content;
    return `<button type="button" class="ds-data-table__edit" data-edit="${escape(c.key)}" aria-label="${escape(msg('dataTable.edit', typeof c.label === 'string' ? c.label.toLowerCase() : c.key, labelOf(row)))}"><span>${content}</span>${icon('pencil', { size: 14 })}</button>`;
  }

  function renderBody(cols) {
    const span = cols.length + (selectable ? 1 : 0) + (o.rowActions?.length ? 1 : 0);
    if (loading) {
      tbody.innerHTML = Array.from({ length: Math.min(state.pageSize, 8) }, (_, r) => `<tr>${selectable ? '<td class="ds-table__check"></td>' : ''}${cols.map((c, i) => `<td${c.num ? ' class="ds-table__num"' : ''}><span class="ds-table__skeleton" style="--w:${[70, 45, 60, 35][(i + r) % 4]}%"></span></td>`).join('')}${o.rowActions?.length ? '<td></td>' : ''}</tr>`).join('');
      table.setAttribute('aria-busy', 'true');
      return;
    }
    table.removeAttribute('aria-busy');
    if (!view.pageRows.length) {
      const filtered = rows.length > 0;
      const e = o.empty ?? {};
      const q = state.query.trim();
      tbody.innerHTML = `<tr class="ds-table__empty"><td colspan="${span}"><div class="ds-empty ds-empty--compact ds-empty--plain" role="status">
        <span class="ds-empty__icon">${icon(filtered ? 'search-x' : e.icon ?? 'inbox')}</span>
        <p class="ds-empty__title">${escape(filtered ? (q ? msg('dataTable.noResultsFor', q) : msg('dataTable.noResults')) : e.title ?? msg('dataTable.empty'))}</p>
        ${filtered ? `<p class="ds-empty__description">${escape(msg('dataTable.noResultsText'))}</p><div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-clear-all>${icon('x', { size: 16 })}${escape(msg('dataTable.clearAll'))}</button></div>` : `${e.description ? `<p class="ds-empty__description">${escape(e.description)}</p>` : ''}${e.actions ? `<div class="ds-empty__actions">${e.actions}</div>` : ''}`}
      </div></td></tr>`;
      return;
    }
    tbody.innerHTML = view.pageRows
      .map((row) => {
        const key = keyOf(row);
        const on = state.selected.includes(key);
        const active = activeKey !== null && key === String(activeKey);
        const clickable = Boolean(o.onRowClick);
        return `<tr data-key="${escape(key)}"${on ? ' data-selected' : ''}${active ? ' data-active aria-current="true"' : ''}${clickable ? ' data-clickable tabindex="0"' : ''}>
          ${selectable ? `<td class="ds-table__check"><input type="checkbox" data-select="${escape(key)}" aria-label="${escape(msg('table.selectRow', labelOf(row)))}"${on ? ' checked' : ''}></td>` : ''}
          ${cols.map((c) => `<td class="${[c.num && 'ds-table__num', c.strong && 'ds-table__strong'].filter(Boolean).join(' ')}" data-col="${escape(c.key)}">${cellHtml(c, row)}</td>`).join('')}
          ${o.rowActions?.length ? `<td class="ds-data-table__actions"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-row-actions aria-label="${escape(msg('dataTable.rowActions', labelOf(row)))}">${icon('more-horizontal', { size: 16 })}</button></td>` : ''}
        </tr>`;
      })
      .join('');
  }

  /* ───────── Paginação ───────── */

  const pagination = createPagination(root.querySelector('.ds-pagination'), {
    total: 0,
    page: state.page,
    pageSize: state.pageSize,
    pageSizes: o.pageSizes,
    summary: ({ first, last, total }) => {
      const range = msg('pagination.range', first, last, total);
      return view.filtered.length < rows.length ? `${range} · ${msg('dataTable.filteredFrom', rows.length)}` : range;
    },
    onChange: ({ page, pageSize }) => set({ page, pageSize }),
  });

  /* ───────── Desenho ───────── */

  let rowMenus = [];
  let lastPag = '';
  function render() {
    view = dataTableView(rows, o, state);
    if (view.page !== state.page) state.page = view.page;
    rowMenus.forEach((m) => m.destroy());
    rowMenus = [];
    editing = null;
    const cols = visibleColumns();
    root.dataset.density = state.density;
    table.classList.toggle('ds-table--compact', state.density === 'compact');
    renderToolbar();
    renderBulk();
    renderHead(cols);
    renderBody(cols);
    // só redesenha a paginação quando o que ela mostra mudou (redesenhar tira o foco do botão clicado)
    const pagKey = `${view.filtered.length}|${rows.length}|${msg('pagination.range', 1, 2, 3)}`;
    if (pagKey !== lastPag) {
      lastPag = pagKey;
      pagination.setTotal(view.filtered.length);
    }
    if (pagination.page !== state.page) pagination.setPage(state.page);
  }

  /* ───────── Eventos da tabela ───────── */

  const rowOf = (el) => {
    const key = el.closest('tr[data-key]')?.dataset.key;
    return key === undefined ? null : rows.find((r) => keyOf(r) === key);
  };

  function toggleSelect(key, checked, shift) {
    const keys = view.pageRows.map(keyOf);
    let next = new Set(state.selected);
    if (shift && anchor !== null && keys.includes(anchor)) {
      const [a, b] = [keys.indexOf(anchor), keys.indexOf(key)].sort((x, y) => x - y);
      keys.slice(a, b + 1).forEach((k) => (checked ? next.add(k) : next.delete(k)));
    } else if (checked) next.add(key);
    else next.delete(key);
    anchor = key;
    set({ selected: [...next] });
    tbody.querySelector(`[data-select="${CSS.escape(key)}"]`)?.focus();
  }

  let shiftDown = false;
  const onPointer = (event) => (shiftDown = event.shiftKey);
  table.addEventListener('pointerdown', onPointer);
  table.addEventListener('keydown', (event) => (shiftDown = event.shiftKey));

  table.addEventListener('change', (event) => {
    const box = event.target;
    if (box.matches('[data-select-all]')) {
      const keys = view.pageRows.map(keyOf);
      const next = new Set(state.selected);
      keys.forEach((k) => (box.checked ? next.add(k) : next.delete(k)));
      set({ selected: [...next] });
      thead.querySelector('[data-select-all]')?.focus();
    } else if (box.matches('[data-select]')) toggleSelect(box.dataset.select, box.checked, shiftDown);
  });

  table.addEventListener('click', (event) => {
    const sortBtn = event.target.closest('[data-sort]');
    if (sortBtn) {
      const key = sortBtn.dataset.sort;
      const dir = state.sort?.key === key ? (state.sort.direction === 'ascending' ? 'descending' : null) : 'ascending';
      set({ sort: dir ? { key, direction: dir } : null });
      thead.querySelector(`[data-sort="${CSS.escape(key)}"]`)?.focus();
      return;
    }
    if (event.target.closest('[data-clear-all]')) {
      if (searchApi) searchApi.setValue('');
      set({ query: '', filters: {} }, { resetPage: true });
      return;
    }
    const actions = event.target.closest('[data-row-actions]');
    if (actions) return openRowMenu(actions);
    const edit = event.target.closest('[data-edit]');
    if (edit) return startEdit(edit);
    if (!o.onRowClick || editing) return;
    if (event.target.closest('button, a, input, select, textarea, label, .ds-field')) return;
    const row = rowOf(event.target);
    if (row) o.onRowClick(row);
  });

  table.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || !o.onRowClick) return;
    if (!event.target.matches('tr[data-clickable]')) return;
    const row = rowOf(event.target);
    if (row) o.onRowClick(row);
  });

  function openRowMenu(button) {
    const row = rowOf(button);
    if (!row) return;
    let menu = rowMenus.find((m) => m.trigger === button);
    if (!menu) {
      const api = createMenu(button, {
        mode: 'action',
        label: msg('dataTable.rowActions', labelOf(row)),
        hideLabel: true,
        options: o.rowActions,
        onChange: (value) => o.onRowAction?.(value, row),
      });
      menu = { trigger: button, destroy: () => api.destroy(), api };
      rowMenus.push(menu);
      menu.api.open('first');
    }
  }

  /* ───────── Edição na célula ───────── */

  function startEdit(button) {
    const td = button.closest('td');
    const row = rowOf(td);
    const col = o.columns.find((c) => c.key === button.dataset.edit);
    if (!row || !col?.edit) return;
    const ed = col.edit;
    const initial = ed.value ? ed.value(row) : cellValue(col, row);

    if (ed.type === 'select') {
      const m = createMenu(button, {
        label: typeof col.label === 'string' ? col.label : col.key,
        options: ed.options,
        value: String(initial ?? ''),
        onChange: (value) => {
          if (value !== String(initial ?? '')) save(td, row, col, value);
        },
      });
      rowMenus.push({ trigger: button, destroy: () => m.destroy() });
      m.open();
      return;
    }

    editing = { key: keyOf(row), col: col.key };
    td.dataset.editing = '';
    td.innerHTML = `<div class="ds-field ds-field--sm ds-data-table__cell-field"><input class="ds-field__input" type="text" aria-label="${escape(button.getAttribute('aria-label'))}"></div>`;
    const input = td.querySelector('input');
    let money = null;
    if (ed.type === 'currency') money = createCurrencyField(input, { currency: ed.currency ?? 'BRL', value: initial ?? null });
    else input.value = initial ?? '';
    input.focus();
    input.select();
    let done = false;
    const cancel = () => {
      if (done) return;
      done = true;
      money?.destroy();
      editing = null;
      render();
      tbody.querySelector(`tr[data-key="${CSS.escape(keyOf(row))}"] [data-edit="${CSS.escape(col.key)}"]`)?.focus();
    };
    const commit = () => {
      if (done) return;
      // o campo de dinheiro já firmou o valor no próprio Enter ou blur (os ouvintes dele vêm antes)
      const value = money ? money.value : input.value;
      const err = ed.validate?.(value, row) ?? null;
      if (err) {
        input.setAttribute('aria-invalid', 'true');
        td.querySelector('.ds-field').dataset.dsTooltip = err;
        input.title = err;
        return;
      }
      if (value === initial || (money && value === initial)) return cancel();
      done = true;
      money?.destroy();
      save(td, row, col, value);
    };
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        commit();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        cancel();
      }
    });
    input.addEventListener('blur', () => setTimeout(commit, 0));
  }

  function save(td, row, col, value) {
    const result = col.edit.onSave?.(row, value);
    if (result && typeof result.then === 'function') {
      td.innerHTML = `<span class="ds-data-table__saving"><span class="ds-spinner ds-spinner--sm" aria-hidden="true"></span><span class="ds-visually-hidden">${escape(msg('dataTable.saving'))}</span></span>`;
      result.finally(() => {
        editing = null;
        render();
      });
    } else {
      editing = null;
      render();
    }
  }

  const onLocale = () => render();
  document.documentElement.addEventListener('ds:localechange', onLocale);
  render();

  return {
    el: root,
    get state() {
      return { ...state };
    },
    setState(partial) {
      state = { ...state, ...partial };
      if (search && partial.query !== undefined) searchApi.setValue(partial.query);
      if (partial.density) densityApi?.setValue(partial.density);
      render();
    },
    setRows(next) {
      rows = next;
      const keys = new Set(rows.map(keyOf));
      state.selected = state.selected.filter((k) => keys.has(k));
      render();
    },
    setLoading(next) {
      loading = Boolean(next);
      render();
    },
    setActive(key) {
      activeKey = key ?? null;
      render();
    },
    exportCsv: () => exportRows(view.filtered),
    destroy() {
      rowMenus.forEach((m) => m.destroy());
      filterPops.forEach((p) => p.pop.destroy());
      columnsPop?.destroy();
      searchApi?.destroy();
      densityApi?.destroy();
      pagination.destroy();
      document.documentElement.removeEventListener('ds:localechange', onLocale);
      root.classList.remove('ds-data-table');
      root.innerHTML = '';
    },
  };
}
