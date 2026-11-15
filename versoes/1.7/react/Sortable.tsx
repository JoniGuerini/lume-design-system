import { useEffect, useLayoutEffect, useRef, type HTMLAttributes, type ReactNode, type RefObject } from 'react';
import { createSortable, type SortChange } from '../js/sortable.js';
import { msg } from '../js/i18n.js';
import { Icon } from './Icon';
import { useLatest } from './useController';
import { useLocale } from './useLocale';
import { cx } from './cx';

export interface SortableItem {
  id: string;
}

/* O módulo move o <li> no DOM; o React precisa ser o dono da ordem. Ao soltar, o item volta
   para onde o React o deixou e a nova ordem chega pelo estado: as chaves fazem o resto. */
function putBack(detail: SortChange) {
  const others = [...detail.from.children].filter((el) => el !== detail.item && el.classList.contains('ds-sortable__item'));
  detail.from.insertBefore(detail.item, others[detail.oldIndex] ?? null);
}

function move<T>(list: T[], from: number, to: number): T[] {
  const next = list.slice();
  const [it] = next.splice(from, 1);
  next.splice(to, 0, it);
  return next;
}

/* devolve o foco à alça (ou ao item) depois que o React redesenha a lista */
function useRefocus(root: RefObject<HTMLElement | null>) {
  const pending = useRef<{ id: string; handle: boolean } | null>(null);
  useLayoutEffect(() => {
    const p = pending.current;
    if (!p || !root.current) return;
    pending.current = null;
    const item = root.current.querySelector<HTMLElement>(`.ds-sortable__item[data-id="${CSS.escape(p.id)}"]`);
    (p.handle ? item?.querySelector<HTMLElement>('.ds-sortable__handle') : item)?.focus();
  });
  return (detail: SortChange) => {
    const active = document.activeElement;
    if (active && detail.item.contains(active)) pending.current = { id: detail.id ?? '', handle: active !== detail.item };
  };
}

export interface SortableListProps<T extends SortableItem> extends Omit<HTMLAttributes<HTMLUListElement>, 'onChange' | 'children'> {
  /** O nome da lista, dito pelo leitor de tela e nos anúncios. */
  label: string;
  items: T[];
  /** A nova ordem, depois de soltar. */
  onChange: (items: T[]) => void;
  /** O conteúdo de cada item, ao lado da alça. Use <span className="ds-sortable__label"> para o nome. */
  renderItem: (item: T) => ReactNode;
  /** Padrão: true. Sem alça, o item inteiro arrasta e recebe o foco. */
  handle?: boolean;
  orientation?: 'vertical' | 'horizontal';
  /** Linhas sem caixa, para dentro de um card. */
  plain?: boolean;
  itemClassName?: string;
}

/**
 * Lista arrastável: mudar a ordem com o mouse, o toque ou o teclado.
 *   <SortableList label="Ordem" items={itens} onChange={setItens} renderItem={(i) => <span className="ds-sortable__label">{i.nome}</span>} />
 * https://lumeui.dev/#/componentes/lista-arrastavel
 */
export function SortableList<T extends SortableItem>({ label, items, onChange, renderItem, handle = true, orientation = 'vertical', plain, itemClassName, className, ...rest }: SortableListProps<T>) {
  useLocale();
  const ref = useRef<HTMLUListElement>(null);
  const latest = useLatest({ items, onChange });
  const refocus = useRefocus(ref);
  const sortable = useRef<ReturnType<typeof createSortable> | null>(null);

  useEffect(() => {
    const el = ref.current!;
    sortable.current = createSortable(el, { orientation });
    const onSort = (event: Event) => {
      const detail = (event as CustomEvent<SortChange>).detail;
      refocus(detail);
      putBack(detail);
      const { items: now, onChange: change } = latest.current;
      change(move(now, detail.oldIndex, detail.newIndex));
    };
    el.addEventListener('ds:sortchange', onSort);
    return () => {
      el.removeEventListener('ds:sortchange', onSort);
      sortable.current?.destroy();
      sortable.current = null;
    };
  }, [orientation]);

  useEffect(() => sortable.current?.refresh());

  return (
    <ul ref={ref} role="list" aria-label={label} aria-orientation={orientation === 'horizontal' ? 'horizontal' : undefined} className={cx('ds-sortable', plain && 'ds-sortable--plain', className)} {...rest}>
      {items.map((item) => (
        <li key={item.id} className={cx('ds-sortable__item', itemClassName)} data-id={item.id} tabIndex={handle ? undefined : 0}>
          {handle && (
            <button type="button" className="ds-sortable__handle">
              <Icon name="grip-vertical" size={16} />
            </button>
          )}
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

export interface KanbanColumn<T extends SortableItem> {
  id: string;
  title: string;
  items: T[];
}

export interface KanbanProps<T extends SortableItem> extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'children'> {
  /** O nome do quadro. */
  label: string;
  columns: KanbanColumn<T>[];
  /** As colunas depois de soltar, com o cartão já no lugar novo. */
  onChange: (columns: KanbanColumn<T>[], change: { id: string; from: string; to: string; index: number }) => void;
  /** O conteúdo do cartão: use ds-kanban__card-title, __card-text e __card-meta. */
  renderCard: (item: T) => ReactNode;
  /** Padrão: false (o cartão inteiro arrasta). Com true, cada cartão ganha uma alça e o resto fica livre para links. */
  handle?: boolean;
}

/**
 * Kanban: colunas de cartões que passam de uma para outra.
 *   <Kanban label="Roadmap" columns={colunas} onChange={setColunas} renderCard={(c) => <p className="ds-kanban__card-title">{c.titulo}</p>} />
 * https://lumeui.dev/#/componentes/kanban
 */
export function Kanban<T extends SortableItem>({ label, columns, onChange, renderCard, handle = false, className, ...rest }: KanbanProps<T>) {
  useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const latest = useLatest({ columns, onChange });
  const refocus = useRefocus(ref);
  const sortables = useRef<ReturnType<typeof createSortable>[]>([]);
  const ids = columns.map((c) => c.id).join('\u0000');

  useEffect(() => {
    const board = ref.current!;
    const group = Symbol('kanban');
    sortables.current = [...board.querySelectorAll<HTMLElement>('.ds-kanban__list')].map((l) => createSortable(l, { group }));
    const onSort = (event: Event) => {
      const detail = (event as CustomEvent<SortChange>).detail;
      refocus(detail);
      putBack(detail);
      const from = detail.from.closest<HTMLElement>('.ds-kanban__column')!.dataset.id!;
      const to = detail.to.closest<HTMLElement>('.ds-kanban__column')!.dataset.id!;
      const { columns: now, onChange: change } = latest.current;
      const card = now.find((c) => c.id === from)!.items[detail.oldIndex];
      const next = now.map((c) => {
        let list = c.items;
        if (c.id === from) list = list.filter((_, i) => i !== detail.oldIndex);
        if (c.id === to) list = [...list.slice(0, detail.newIndex), card, ...list.slice(detail.newIndex)];
        return list === c.items ? c : { ...c, items: list };
      });
      change(next, { id: card.id, from, to, index: detail.newIndex });
    };
    board.addEventListener('ds:sortchange', onSort);
    return () => {
      board.removeEventListener('ds:sortchange', onSort);
      sortables.current.forEach((s) => s.destroy());
      sortables.current = [];
    };
  }, [ids]);

  useEffect(() => sortables.current.forEach((s) => s.refresh()));

  return (
    <div ref={ref} role="group" aria-label={label} className={cx('ds-kanban', className)} {...rest}>
      {columns.map((column) => (
        <section key={column.id} className="ds-kanban__column" data-id={column.id}>
          <header className="ds-kanban__header">
            <h3 className="ds-kanban__title">{column.title}</h3>
            <span className="ds-kanban__count">{column.items.length}</span>
          </header>
          <ul className="ds-kanban__list" role="list" aria-label={column.title} data-empty-text={msg('kanban.empty')}>
            {column.items.map((item) => (
              <li key={item.id} className={cx('ds-sortable__item ds-kanban__card', handle && 'ds-kanban__card--handle')} data-id={item.id} tabIndex={handle ? undefined : 0}>
                {handle ? (
                  <div className="ds-kanban__card-top">
                    <div className="ds-kanban__card-body">{renderCard(item)}</div>
                    <button type="button" className="ds-sortable__handle">
                      <Icon name="grip-vertical" size={16} />
                    </button>
                  </div>
                ) : (
                  renderCard(item)
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
