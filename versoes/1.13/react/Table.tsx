import { useEffect, useRef, type ReactNode } from 'react';
import { msg } from '../js/i18n.js';
import { Icon } from './Icon';
import { useLocale } from './useLocale';
import { cx } from './cx';

export type SortDirection = 'ascending' | 'descending';

export interface TableColumn<Row> {
  key: string;
  /** O título da coluna. */
  label: ReactNode;
  /** Número: à direita, com algarismos tabulares. */
  num?: boolean;
  /** Texto mais forte, para a coluna que nomeia a linha. */
  strong?: boolean;
  /** Mostra o botão de ordenar no cabeçalho. */
  sortable?: boolean;
  /** Como desenhar a célula. Padrão: row[key]. */
  render?: (row: Row) => ReactNode;
  /** Largura fixa (px): as colunas não pulam ao trocar de página. */
  width?: number;
  minWidth?: number;
}

export interface TableProps<Row> {
  columns: TableColumn<Row>[];
  rows: Row[];
  /** A chave única de cada linha. */
  rowKey: (row: Row) => string;
  /** Nomeia a tabela para leitores de tela. */
  caption: ReactNode;
  /** Descrição curta ao lado da legenda. */
  description?: ReactNode;
  /** Esconde a legenda da tela (continua para leitores de tela). */
  hideCaption?: boolean;
  /** Ordenação atual. A ordem das linhas é sua: ordene rows antes de passar. */
  sort?: { key: string; direction: SortDirection } | null;
  onSortChange?: (sort: { key: string; direction: SortDirection }) => void;
  /** Linhas marcadas (as chaves). Com onSelectionChange, aparece a coluna de checkbox. */
  selected?: string[];
  onSelectionChange?: (keys: string[]) => void;
  /** Nome de cada linha para o checkbox ("Selecionar Botão"). Padrão: a primeira coluna. */
  rowLabel?: (row: Row) => string;
  /** Linhas de 40 px. */
  compact?: boolean;
  /** Destaca a linha sob o mouse. */
  hover?: boolean;
  /** Altura máxima com cabeçalho fixo ("420px"). */
  maxHeight?: string;
  /** Linhas apagadas enquanto carrega. */
  loading?: boolean;
  /** O que mostrar quando não há linhas. */
  empty?: { title: ReactNode; text?: ReactNode };
  className?: string;
}

/**
 * Tabela nativa (<table>): números alinhados, cabeçalho que ordena e seleção com checkbox.
 * https://lumeui.dev/#/componentes/tabela
 */
export function Table<Row>({
  columns, rows, rowKey, caption, description, hideCaption, sort, onSortChange, selected = [], onSelectionChange, rowLabel,
  compact, hover, maxHeight, loading, empty, className,
}: TableProps<Row>) {
  useLocale();
  const all = useRef<HTMLInputElement>(null);
  const selectable = Boolean(onSelectionChange);
  const keys = rows.map(rowKey);
  const marked = keys.filter((k) => selected.includes(k)).length;
  useEffect(() => {
    if (all.current) all.current.indeterminate = marked > 0 && marked < keys.length;
  }, [marked, keys.length]);
  const span = columns.length + (selectable ? 1 : 0);
  const nameOf = (row: Row) => rowLabel?.(row) ?? String((row as Record<string, unknown>)[columns[0].key] ?? '');
  const cell = (row: Row, col: TableColumn<Row>) => (col.render ? col.render(row) : ((row as Record<string, unknown>)[col.key] as ReactNode));
  const sortIcon = (dir?: SortDirection) => <Icon name={dir === 'ascending' ? 'chevron-up' : dir === 'descending' ? 'chevron-down' : 'chevrons-up-down'} size={14} />;

  return (
    <div
      className={cx('ds-table-wrap', maxHeight && 'ds-table-wrap--scroll', className)}
      style={maxHeight ? { maxHeight } : undefined}
      role={maxHeight ? 'region' : undefined}
      aria-label={maxHeight && typeof caption === 'string' ? caption : undefined}
      tabIndex={maxHeight ? 0 : undefined}
    >
      <table className={cx('ds-table', compact && 'ds-table--compact', hover && 'ds-table--hover')} aria-busy={loading || undefined}>
        <caption className={hideCaption ? 'ds-visually-hidden' : undefined}>
          {caption}
          {description && <span className="ds-table__caption-desc"> {description}</span>}
        </caption>
        {columns.some((c) => c.width || c.minWidth) && (
          <colgroup>
            {selectable && <col style={{ width: 48 }} />}
            {columns.map((c) => (
              <col key={c.key} style={c.width ? { width: c.width } : c.minWidth ? { minWidth: c.minWidth } : undefined} />
            ))}
          </colgroup>
        )}
        <thead>
          <tr>
            {selectable && (
              <th scope="col" className="ds-table__check">
                <input
                  ref={all}
                  type="checkbox"
                  aria-label={msg('table.selectAll')}
                  checked={keys.length > 0 && marked === keys.length}
                  onChange={(e) => onSelectionChange!(e.target.checked ? [...new Set([...selected, ...keys])] : selected.filter((k) => !keys.includes(k)))}
                />
              </th>
            )}
            {columns.map((col) => {
              const dir = sort?.key === col.key ? sort.direction : undefined;
              return (
                <th key={col.key} scope="col" className={col.num ? 'ds-table__num' : undefined} aria-sort={dir}>
                  {col.sortable && onSortChange ? (
                    <button
                      type="button"
                      className="ds-table__sort"
                      onClick={() => onSortChange({ key: col.key, direction: dir === 'ascending' ? 'descending' : 'ascending' })}
                    >
                      {col.label}
                      {sortIcon(dir)}
                    </button>
                  ) : (
                    col.label
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            Array.from({ length: Math.max(3, Math.min(rows.length, 6)) }, (_, i) => (
              <tr key={i}>
                {selectable && <td className="ds-table__check" />}
                {columns.map((col) => (
                  <td key={col.key} className={col.num ? 'ds-table__num' : undefined}>
                    <span className="ds-skeleton ds-skeleton--text ds-table__skeleton" style={{ ['--w' as string]: col.num ? '40%' : '70%' }} />
                  </td>
                ))}
              </tr>
            ))
          ) : rows.length === 0 && empty ? (
            <tr className="ds-table__empty">
              <td colSpan={span}>
                <span className="ds-table__empty-inner">
                  <Icon name="inbox" size={24} />
                  <span className="ds-table__empty-title">{empty.title}</span>
                  {empty.text && <span>{empty.text}</span>}
                </span>
              </td>
            </tr>
          ) : (
            rows.map((row) => {
              const key = rowKey(row);
              const on = selected.includes(key);
              return (
                <tr key={key} data-selected={on ? '' : undefined}>
                  {selectable && (
                    <td className="ds-table__check">
                      <input
                        type="checkbox"
                        aria-label={msg('table.selectRow', nameOf(row))}
                        checked={on}
                        onChange={(e) => onSelectionChange!(e.target.checked ? [...selected, key] : selected.filter((k) => k !== key))}
                      />
                    </td>
                  )}
                  {columns.map((col) => (
                    <td key={col.key} className={cx(col.num && 'ds-table__num', col.strong && 'ds-table__strong') || undefined}>
                      {cell(row, col)}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
