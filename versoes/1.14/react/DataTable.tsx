import { useEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode, type RefObject } from 'react';
import { dataTableView, dataTableCsv, dataTableMinWidth, downloadCsv, DATA_TABLE_STATE } from '../js/data-table.js';
import { createMenu } from '../js/menu.js';
import { msg } from '../js/i18n.js';
import { Icon, type IconName } from './Icon';
import { SearchField, CurrencyField } from './Field';
import { Popover } from './Layers';
import { Pagination, SegmentedControl, type MenuOption } from './Navigation';
import { useLocale } from './useLocale';
import { useSafeId, useLatest } from './useController';
import { cx } from './cx';

export type DataTableDensity = 'comfortable' | 'compact';

export interface DataTableState {
  query: string;
  /** Valores marcados em cada filtro, pela key do filtro. */
  filters: Record<string, string[]>;
  sort: { key: string; direction: 'ascending' | 'descending' } | null;
  page: number;
  pageSize: number;
  /** As keys das linhas marcadas. */
  selected: string[];
  /** As keys das colunas escondidas. */
  hidden: string[];
  density: DataTableDensity;
}

export type DataTableEdit<Row> =
  | { type: 'text'; value?: (row: Row) => string; validate?: (value: string, row: Row) => string | null; onSave: (row: Row, value: string) => void | Promise<unknown> }
  | { type: 'currency'; currency?: string; value?: (row: Row) => number | null; validate?: (value: number | null, row: Row) => string | null; onSave: (row: Row, value: number | null) => void | Promise<unknown> }
  | { type: 'select'; options: { value: string; label: string; icon?: IconName }[]; value?: (row: Row) => string; onSave: (row: Row, value: string) => void | Promise<unknown> };

export interface DataTableColumn<Row> {
  key: string;
  label: string;
  /** O valor bruto (busca, ordem, CSV). Padrão: row[key]. */
  value?: (row: Row) => unknown;
  /** Como desenhar a célula. Padrão: o valor. */
  render?: (row: Row) => ReactNode;
  sortable?: boolean;
  sortValue?: (row: Row) => string | number | Date | null | undefined;
  /** false tira a coluna da busca. */
  search?: boolean;
  searchValue?: (row: Row) => string;
  exportValue?: (row: Row) => string | number;
  /** Número: à direita, com algarismos tabulares. */
  num?: boolean;
  strong?: boolean;
  /** Largura fixa (px). Sem ela, a coluna divide o que sobra. */
  width?: number;
  minWidth?: number;
  /** Padrão: true. */
  hideable?: boolean;
  /** Começa escondida. */
  hidden?: boolean;
  /** Edita no lugar: o valor vira campo (texto, dinheiro) ou abre um menu (seleção). */
  edit?: DataTableEdit<Row>;
}

export interface DataTableFilter<Row> {
  key: string;
  label: string;
  options: { value: string; label: string; swatch?: string }[];
  value: (row: Row) => string;
}

export interface DataTableAction {
  value: string;
  label: string;
  icon?: IconName;
  tone?: 'danger';
}

export interface DataTableProps<Row> {
  rows: Row[];
  rowKey: (row: Row) => string;
  /** O nome da linha para o leitor de tela ("Selecionar Ana Souza"). Padrão: a primeira coluna. */
  rowLabel?: (row: Row) => string;
  columns: DataTableColumn<Row>[];
  /** O título da tabela (também o nome dela para o leitor de tela). */
  caption?: string;
  description?: ReactNode;
  /** Botões no cabeçalho ("Novo cliente"). */
  actions?: ReactNode;
  filters?: DataTableFilter<Row>[];
  /** Mostra a busca. Com shortcut, a tecla leva o foco a ela. */
  search?: boolean | { placeholder?: string; label?: string; shortcut?: string };
  /** O menu (…) de cada linha. */
  rowActions?: MenuOption[];
  onRowAction?: (value: string, row: Row) => void;
  /** Ações para as linhas marcadas; ligam a coluna de seleção. */
  bulkActions?: DataTableAction[];
  onBulkAction?: (value: string, rows: Row[]) => void;
  /** Mostra a coluna de seleção mesmo sem bulkActions. */
  selectable?: boolean;
  onRowClick?: (row: Row) => void;
  /** A linha ativa (a ficha aberta ao lado). */
  activeKey?: string | null;
  /** Padrão: [10, 20, 50]. */
  pageSizes?: number[];
  /** Mostra Exportar (CSV do que está filtrado, ou das marcadas). */
  exportCsv?: { fileName: string };
  onExport?: (count: number) => void;
  /** A lista vazia de verdade (sem dados). "Nada encontrado" com Limpar é automático. */
  empty?: { title: ReactNode; description?: ReactNode; icon?: IconName; actions?: ReactNode };
  loading?: boolean;
  /** Estado inicial (não controlado). */
  defaultState?: Partial<DataTableState>;
  /** Controlado: o estado inteiro é seu (para guardar na URL, por exemplo). */
  state?: DataTableState;
  onStateChange?: (state: DataTableState) => void;
  /** Sem o seletor de densidade. */
  hideDensity?: boolean;
  className?: string;
}

const cellValue = <Row,>(c: DataTableColumn<Row>, row: Row) => (c.value ? c.value(row) : (row as Record<string, unknown>)[c.key]);

/**
 * Tabela com o estado dentro: busca, filtros, ordem, páginas, seleção e ações em lote, colunas, densidade,
 * edição na célula e CSV. Para só mostrar dados, use a Tabela.
 * https://lumeui.dev/#/componentes/tabela-de-dados
 */
export function DataTable<Row>(props: DataTableProps<Row>) {
  const {
    rows, rowKey, rowLabel, columns, caption, description, actions, filters = [], search, rowActions, onRowAction,
    bulkActions, onBulkAction, onRowClick, activeKey = null, pageSizes = [10, 20, 50], exportCsv, onExport, empty,
    loading, defaultState, hideDensity, className,
  } = props;
  useLocale();
  const id = useSafeId('dt');
  const [inner, setInner] = useState<DataTableState>(() => ({
    ...DATA_TABLE_STATE,
    pageSize: pageSizes[1] ?? pageSizes[0] ?? 20,
    hidden: columns.filter((c) => c.hidden).map((c) => c.key),
    ...defaultState,
  }) as DataTableState);
  const state = props.state ?? inner;
  const onState = useLatest(props.onStateChange);
  const update = (partial: Partial<DataTableState>) => {
    const next = { ...state, ...partial };
    if (!props.state) setInner(next);
    onState.current?.(next);
  };

  const selectable = props.selectable ?? Boolean(bulkActions?.length);
  const visible = columns.filter((c) => !state.hidden.includes(c.key));
  const hideable = columns.filter((c) => c.hideable !== false);
  const view = useMemo(() => dataTableView(rows, { columns, filters }, state), [rows, columns, filters, state]);
  const labelOf = (row: Row) => (rowLabel ? rowLabel(row) : String(cellValue(columns[0], row) ?? ''));
  const pageKeys = view.pageRows.map((r: Row) => rowKey(r));
  const marked = pageKeys.filter((k: string) => state.selected.includes(k)).length;
  const selectedRows = () => rows.filter((r) => state.selected.includes(rowKey(r)));

  const anchor = useRef<string | null>(null);
  const shift = useRef(false);
  const toggle = (key: string, on: boolean) => {
    const next = new Set(state.selected);
    if (shift.current && anchor.current !== null && pageKeys.includes(anchor.current)) {
      const [a, b] = [pageKeys.indexOf(anchor.current), pageKeys.indexOf(key)].sort((x, y) => x - y);
      pageKeys.slice(a, b + 1).forEach((k: string) => (on ? next.add(k) : next.delete(k)));
    } else if (on) next.add(key);
    else next.delete(key);
    anchor.current = key;
    update({ selected: [...next] });
  };

  const allRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (allRef.current) allRef.current.indeterminate = marked > 0 && marked < pageKeys.length;
  });

  const textOf = (c: DataTableColumn<Row>, row: Row) => {
    const v = cellValue(c, row);
    return typeof v === 'string' || typeof v === 'number' ? v : v instanceof Date ? v.toISOString() : '';
  };
  const doExport = (list: Row[]) => {
    if (!exportCsv) return;
    downloadCsv(exportCsv.fileName, dataTableCsv(list, visible, { textOf }));
    onExport?.(list.length);
  };

  // edição na célula
  const [editing, setEditing] = useState<{ key: string; col: string } | null>(null);
  const [saving, setSaving] = useState<string | null>(null);
  const save = (row: Row, col: DataTableColumn<Row>, value: unknown) => {
    setEditing(null);
    const result = (col.edit!.onSave as (row: Row, value: unknown) => void | Promise<unknown>)(row, value);
    if (result && typeof (result as Promise<unknown>).then === 'function') {
      const cell = `${rowKey(row)}:${col.key}`;
      setSaving(cell);
      (result as Promise<unknown>).finally(() => setSaving((s) => (s === cell ? null : s)));
    }
  };

  // menus abertos na hora (ações da linha e edição de seleção): um por vez, sem um menu por linha
  const menu = useRef<{ destroy(): void } | null>(null);
  useEffect(() => () => menu.current?.destroy(), []);
  const openMenu = (trigger: HTMLElement, config: Record<string, unknown>) => {
    menu.current?.destroy();
    const m = createMenu(trigger, config);
    menu.current = m;
    m.open();
  };

  const toolbarHidden = selectable && state.selected.length > 0;
  const q = state.query.trim();
  const span = visible.length + (selectable ? 1 : 0) + (rowActions?.length ? 1 : 0);
  const searchOpts = search === true ? {} : search || null;

  return (
    <section className={cx('ds-data-table', className)} data-density={state.density}>
      {(caption || actions) && (
        <header className="ds-data-table__head">
          <div>
            {caption && <h2 className="ds-data-table__title" id={`${id}-title`}>{caption}</h2>}
            {description && <p className="ds-data-table__desc">{description}</p>}
          </div>
          {actions && <div className="ds-data-table__head-actions">{actions}</div>}
        </header>
      )}

      <div className="ds-data-table__toolbar" hidden={toolbarHidden}>
        {searchOpts && (
          <SearchField
            size="sm"
            className="ds-data-table__search"
            aria-label={searchOpts.label ?? caption ?? msg('dataTable.search')}
            placeholder={searchOpts.placeholder ?? msg('dataTable.search')}
            shortcut={searchOpts.shortcut}
            value={state.query}
            onChange={(query) => update({ query, page: 1, selected: [] })}
          />
        )}
        {filters.map((f) => (
          <FilterChip
            key={f.key}
            label={f.label}
            options={f.options}
            chosen={state.filters[f.key] ?? []}
            counts={view.counts[f.key] ?? {}}
            onChange={(values) => update({ filters: { ...state.filters, [f.key]: values }, page: 1, selected: [] })}
          />
        ))}
        <span className="ds-data-table__spacer" />
        {hideable.length > 1 && (
          <ColumnsButton
            columns={hideable}
            hidden={state.hidden}
            onChange={(hidden) => update({ hidden })}
          />
        )}
        {!hideDensity && (
          <SegmentedControl
            size="sm"
            label={msg('dataTable.density')}
            value={state.density}
            onChange={(density) => update({ density: density as DataTableDensity })}
            options={[
              { value: 'comfortable', label: <span className="ds-visually-hidden">{msg('dataTable.comfortable')}</span>, icon: 'rows' },
              { value: 'compact', label: <span className="ds-visually-hidden">{msg('dataTable.compact')}</span>, icon: 'list' },
            ]}
          />
        )}
        {exportCsv && (
          <button type="button" className="ds-btn ds-btn--ghost ds-btn--sm" onClick={() => doExport(view.filtered)}>
            <Icon name="download" size={16} />
            {msg('dataTable.export')}
          </button>
        )}
      </div>

      {toolbarHidden && (
        <div className="ds-data-table__bulk">
          <span className="ds-data-table__bulk-count" role="status">{msg('dataTable.selected', state.selected.length)}</span>
          <span className="ds-data-table__spacer" />
          {bulkActions?.map((a) => (
            <button key={a.value} type="button" className={cx('ds-btn ds-btn--ghost ds-btn--sm', a.tone === 'danger' && 'ds-data-table__bulk-danger')} onClick={() => onBulkAction?.(a.value, selectedRows())}>
              {a.icon && <Icon name={a.icon} size={16} />}
              {a.label}
            </button>
          ))}
          {exportCsv && (
            <button type="button" className="ds-btn ds-btn--ghost ds-btn--sm" onClick={() => doExport(selectedRows())}>
              <Icon name="download" size={16} />
              {msg('dataTable.export')}
            </button>
          )}
          <button type="button" className="ds-icon-btn ds-icon-btn--sm" aria-label={msg('dataTable.clearSelection')} data-ds-tooltip={msg('dataTable.clearSelection')} onClick={() => update({ selected: [] })}>
            <Icon name="x" size={16} />
          </button>
        </div>
      )}

      <div className="ds-data-table__scroll">
        <table
          className={cx('ds-table ds-table--hover', state.density === 'compact' && 'ds-table--compact')}
          style={{ minWidth: dataTableMinWidth(visible, { selectable, actions: Boolean(rowActions?.length) }) }}
          aria-labelledby={caption ? `${id}-title` : undefined}
          aria-busy={loading || undefined}
          onPointerDown={(e) => (shift.current = e.shiftKey)}
          onKeyDown={(e) => (shift.current = e.shiftKey)}
        >
          <colgroup>
            {selectable && <col style={{ width: 48 }} />}
            {visible.map((c) => (
              <col key={c.key} style={c.width ? { width: c.width } : c.minWidth ? { minWidth: c.minWidth } : undefined} />
            ))}
            {rowActions?.length ? <col style={{ width: 56 }} /> : null}
          </colgroup>
          <thead>
            <tr>
              {selectable && (
                <th scope="col" className="ds-table__check">
                  <input
                    ref={allRef}
                    type="checkbox"
                    aria-label={msg('table.selectAll')}
                    disabled={!pageKeys.length}
                    checked={pageKeys.length > 0 && marked === pageKeys.length}
                    onChange={(e) => {
                      const next = new Set(state.selected);
                      pageKeys.forEach((k: string) => (e.target.checked ? next.add(k) : next.delete(k)));
                      update({ selected: [...next] });
                    }}
                  />
                </th>
              )}
              {visible.map((c) => {
                const dir = state.sort?.key === c.key ? state.sort.direction : undefined;
                return (
                  <th key={c.key} scope="col" className={c.num ? 'ds-table__num' : undefined} aria-sort={dir}>
                    {c.sortable ? (
                      <button
                        type="button"
                        className="ds-table__sort"
                        onClick={() => {
                          const next = state.sort?.key === c.key ? (state.sort.direction === 'ascending' ? 'descending' : null) : 'ascending';
                          update({ sort: next ? { key: c.key, direction: next } : null });
                        }}
                      >
                        {c.label}
                        <Icon name={dir === 'ascending' ? 'chevron-up' : dir === 'descending' ? 'chevron-down' : 'chevrons-up-down'} size={14} />
                      </button>
                    ) : (
                      c.label
                    )}
                  </th>
                );
              })}
              {rowActions?.length ? (
                <th scope="col" className="ds-data-table__actions">
                  <span className="ds-visually-hidden">{msg('dataTable.actions')}</span>
                </th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: Math.min(state.pageSize, 8) }, (_, r) => (
                <tr key={r}>
                  {selectable && <td className="ds-table__check" />}
                  {visible.map((c, i) => (
                    <td key={c.key} className={c.num ? 'ds-table__num' : undefined}>
                      <span className="ds-table__skeleton" style={{ '--w': `${[70, 45, 60, 35][(i + r) % 4]}%` } as CSSProperties} />
                    </td>
                  ))}
                  {rowActions?.length ? <td /> : null}
                </tr>
              ))
            ) : view.pageRows.length === 0 ? (
              <tr className="ds-table__empty">
                <td colSpan={span}>
                  <div className="ds-empty ds-empty--compact ds-empty--plain" role="status">
                    <span className="ds-empty__icon"><Icon name={rows.length ? 'search-x' : empty?.icon ?? 'inbox'} /></span>
                    <p className="ds-empty__title">{rows.length ? (q ? msg('dataTable.noResultsFor', q) : msg('dataTable.noResults')) : empty?.title ?? msg('dataTable.empty')}</p>
                    {rows.length ? (
                      <>
                        <p className="ds-empty__description">{msg('dataTable.noResultsText')}</p>
                        <div className="ds-empty__actions">
                          <button type="button" className="ds-btn ds-btn--secondary ds-btn--sm" onClick={() => update({ query: '', filters: {}, page: 1 })}>
                            <Icon name="x" size={16} />
                            {msg('dataTable.clearAll')}
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        {empty?.description && <p className="ds-empty__description">{empty.description}</p>}
                        {empty?.actions && <div className="ds-empty__actions">{empty.actions}</div>}
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ) : (
              view.pageRows.map((row: Row) => {
                const key = rowKey(row);
                const on = state.selected.includes(key);
                const active = activeKey !== null && key === activeKey;
                return (
                  <tr
                    key={key}
                    data-selected={on ? '' : undefined}
                    data-active={active ? '' : undefined}
                    aria-current={active ? 'true' : undefined}
                    data-clickable={onRowClick ? '' : undefined}
                    tabIndex={onRowClick ? 0 : undefined}
                    onClick={(e) => {
                      if (!onRowClick || editing) return;
                      if ((e.target as HTMLElement).closest('button, a, input, select, textarea, label, .ds-field')) return;
                      onRowClick(row);
                    }}
                    onKeyDown={(e) => {
                      if (onRowClick && e.key === 'Enter' && e.target === e.currentTarget) onRowClick(row);
                    }}
                  >
                    {selectable && (
                      <td className="ds-table__check">
                        <input type="checkbox" aria-label={msg('table.selectRow', labelOf(row))} checked={on} onChange={(e) => toggle(key, e.target.checked)} />
                      </td>
                    )}
                    {visible.map((c) => (
                      <td key={c.key} className={cx(c.num && 'ds-table__num', c.strong && 'ds-table__strong') || undefined}>
                        <Cell
                          row={row}
                          column={c}
                          label={msg('dataTable.edit', c.label.toLowerCase(), labelOf(row))}
                          editing={editing?.key === key && editing.col === c.key}
                          saving={saving === `${key}:${c.key}`}
                          onStart={(button) => {
                            if (c.edit?.type === 'select') {
                              const ed = c.edit;
                              const current = String(ed.value ? ed.value(row) : cellValue(c, row) ?? '');
                              openMenu(button, {
                                label: c.label,
                                options: ed.options,
                                value: current,
                                onChange: (v: string) => v !== current && save(row, c, v),
                              });
                            } else setEditing({ key, col: c.key });
                          }}
                          onCancel={() => setEditing(null)}
                          onSave={(value) => save(row, c, value)}
                        />
                      </td>
                    ))}
                    {rowActions?.length ? (
                      <td className="ds-data-table__actions">
                        <button
                          type="button"
                          className="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted"
                          aria-label={msg('dataTable.rowActions', labelOf(row))}
                          aria-haspopup="menu"
                          onClick={(e) =>
                            openMenu(e.currentTarget, { mode: 'action', label: msg('dataTable.rowActions', labelOf(row)), hideLabel: true, options: rowActions, onChange: (v: string) => onRowAction?.(v, row) })
                          }
                        >
                          <Icon name="more-horizontal" size={16} />
                        </button>
                      </td>
                    ) : null}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <footer className="ds-data-table__foot">
        <Pagination
          total={view.filtered.length}
          page={view.page}
          pageSize={state.pageSize}
          pageSizes={pageSizes}
          summary={({ first, last, total }) => {
            const range = msg('pagination.range', first, last, total);
            return view.filtered.length < rows.length ? `${range} · ${msg('dataTable.filteredFrom', rows.length)}` : range;
          }}
          onChange={({ page, pageSize }) => update({ page, pageSize })}
        />
      </footer>
    </section>
  );
}

/* ───────── Célula (editável ou não) ───────── */

function Cell<Row>({
  row, column: c, label, editing, saving, onStart, onCancel, onSave,
}: {
  row: Row;
  column: DataTableColumn<Row>;
  label: string;
  editing: boolean;
  saving: boolean;
  onStart: (button: HTMLElement) => void;
  onCancel: () => void;
  onSave: (value: unknown) => void;
}) {
  const content = c.render ? c.render(row) : String(cellValue(c, row) ?? '');
  if (saving) {
    return (
      <span className="ds-data-table__saving">
        <span className="ds-spinner ds-spinner--sm" aria-hidden="true" />
        <span className="ds-visually-hidden">{msg('dataTable.saving')}</span>
      </span>
    );
  }
  if (!c.edit) return <>{content}</>;
  if (editing && c.edit.type !== 'select') return <CellEditor row={row} column={c} label={label} onCancel={onCancel} onSave={onSave} />;
  return (
    <button type="button" className="ds-data-table__edit" aria-label={label} onClick={(e) => onStart(e.currentTarget)}>
      <span>{content}</span>
      <Icon name="pencil" size={14} />
    </button>
  );
}

function CellEditor<Row>({ row, column: c, label, onCancel, onSave }: { row: Row; column: DataTableColumn<Row>; label: string; onCancel: () => void; onSave: (value: unknown) => void }) {
  const ed = c.edit as Exclude<DataTableEdit<Row>, { type: 'select' }>;
  const initial = ed.value ? ed.value(row as never) : cellValue(c, row);
  const [text, setText] = useState(String(initial ?? ''));
  const [money, setMoney] = useState<number | null>((initial as number | null) ?? null);
  const [error, setError] = useState<string | null>(null);
  const done = useRef(false);
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    input.current?.focus();
    input.current?.select();
  }, []);
  const latestMoney = useRef(money);
  latestMoney.current = money;
  const commit = () => {
    if (done.current) return;
    const value = ed.type === 'currency' ? latestMoney.current : text;
    const err = (ed.validate as ((v: unknown, r: Row) => string | null) | undefined)?.(value, row) ?? null;
    if (err) return setError(err);
    done.current = true;
    if (value === initial) return onCancel();
    onSave(value);
  };
  const keys = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // o campo de dinheiro firma no próprio Enter; o valor chega pelo onChange antes do próximo quadro
      setTimeout(commit, 0);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      done.current = true;
      onCancel();
    }
  };
  const common = {
    ref: input,
    size: 'sm' as const,
    className: 'ds-data-table__cell-field',
    'aria-label': label,
    'aria-invalid': error ? true : undefined,
    title: error ?? undefined,
    onKeyDown: keys,
    onBlur: () => setTimeout(commit, 0),
  };
  return ed.type === 'currency' ? (
    <CurrencyField {...common} currency={ed.currency} value={money} onChange={setMoney} />
  ) : (
    <TextCell {...common} value={text} onChange={setText} />
  );
}

/** Campo de texto simples da edição (o Input sem rótulo, dentro da célula). */
function TextCell({ value, onChange, ...rest }: { value: string; onChange: (v: string) => void } & Record<string, unknown>) {
  const { ref, size, className, ...attrs } = rest as { ref: RefObject<HTMLInputElement>; size: string; className: string };
  return (
    <div className={cx('ds-field', size === 'sm' && 'ds-field--sm', className)}>
      <input ref={ref} className="ds-field__input" type="text" value={value} onChange={(e) => onChange(e.target.value)} {...(attrs as Record<string, unknown>)} />
    </div>
  );
}

/* ───────── Filtro e colunas ───────── */

function CheckList({ items, onToggle }: { items: { value: string; label: string; swatch?: string; checked: boolean; count?: number }[]; onToggle: (value: string, on: boolean) => void }) {
  return (
    <ul className="ds-data-table__checks" role="list">
      {items.map((it) => (
        <li key={it.value}>
          <label className="ds-checkbox">
            <input type="checkbox" className="ds-checkbox__input" checked={it.checked} onChange={(e) => onToggle(it.value, e.target.checked)} />
            <span className="ds-choice__label">
              {it.swatch && <span className="ds-data-table__swatch" style={{ background: it.swatch }} />}
              {it.label}
            </span>
          </label>
          {it.count !== undefined && <span className="ds-data-table__count">{it.count}</span>}
        </li>
      ))}
    </ul>
  );
}

function FilterChip({ label, options, chosen, counts, onChange }: { label: string; options: { value: string; label: string; swatch?: string }[]; chosen: string[]; counts: Record<string, number>; onChange: (values: string[]) => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const names = options.filter((o) => chosen.includes(o.value)).map((o) => o.label);
  return (
    <>
      <button ref={ref} type="button" className="ds-chip ds-chip--sm" aria-pressed={names.length > 0}>
        <span>{names.length === 1 ? `${label} · ${names[0]}` : names.length ? `${label} · ${names.length}` : label}</span>
        <span className="ds-chip__chevron"><Icon name="chevron-down" size={14} /></span>
      </button>
      <Popover triggerRef={ref} label={label} align="start" className="ds-data-table__pop">
        <div className="ds-data-table__filter">
          <CheckList
            items={options.map((o) => ({ value: o.value, label: o.label, swatch: o.swatch, checked: chosen.includes(o.value), count: counts[o.value] ?? 0 }))}
            onToggle={(value, on) => onChange(on ? [...chosen, value] : chosen.filter((v) => v !== value))}
          />
          {chosen.length > 0 && (
            <button type="button" className="ds-inline-action" onClick={() => onChange([])}>
              <Icon name="x" size={16} />
              {msg('dataTable.clearFilter')}
            </button>
          )}
        </div>
      </Popover>
    </>
  );
}

function ColumnsButton<Row>({ columns, hidden, onChange }: { columns: DataTableColumn<Row>[]; hidden: string[]; onChange: (hidden: string[]) => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const shown = columns.filter((c) => !hidden.includes(c.key)).length;
  return (
    <>
      <button ref={ref} type="button" className="ds-btn ds-btn--ghost ds-btn--sm">
        <Icon name="columns" size={16} />
        {msg('dataTable.columns', shown, columns.length)}
      </button>
      <Popover triggerRef={ref} label={msg('dataTable.columnsTitle')} align="end" className="ds-data-table__pop">
        <div className="ds-data-table__filter">
          <CheckList
            items={columns.map((c) => ({ value: c.key, label: c.label, checked: !hidden.includes(c.key) }))}
            onToggle={(key, on) => {
              const next = on ? hidden.filter((k) => k !== key) : [...hidden, key];
              if (shown - (on ? 0 : 1) >= 1) onChange(next);
            }}
          />
        </div>
      </Popover>
    </>
  );
}
