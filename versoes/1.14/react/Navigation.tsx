import { useEffect, useRef, type KeyboardEvent, type ReactNode, type RefObject } from 'react';
import { createMenu } from '../js/menu.js';
import { createPagination } from '../js/pagination.js';
import { createStepper } from '../js/stepper.js';
import { createTree } from '../js/tree.js';
import { createBackToTop } from '../js/back-to-top.js';
import { initScrollbars } from '../js/scrollbar.js';
import { Icon, type IconName } from './Icon';
import { useLatest, stableKey, defined, useSafeId } from './useController';
import { cx } from './cx';

/* ───────── Menu ───────── */

export type MenuOption =
  | {
      value: string;
      label: string;
      icon?: IconName;
      swatch?: string;
      shortcut?: string;
      /** Texto curto à direita, como uma contagem. */
      meta?: string | number;
      tone?: 'danger';
      disabled?: boolean;
    }
  | { type: 'separator' }
  | { type: 'group'; label: string };

export interface MenuProps {
  /** O botão, chip ou botão de ícone que abre o menu (useRef no gatilho). */
  triggerRef: RefObject<HTMLElement | null>;
  options: MenuOption[];
  /** radio (padrão): escolhe um valor, que ganha a marca; action: dispara comandos. */
  mode?: 'radio' | 'action';
  /** O valor escolhido, no modo radio. */
  value?: string;
  onChange: (value: string) => void;
  /** Título pequeno no topo da lista e nome do menu. */
  label?: string;
  /** Esconde o título: label fica só para o leitor de tela (menus de ações de uma linha). */
  hideLabel?: boolean;
  /** Lista longa vira grade: no máximo N itens por coluna. */
  maxRows?: number;
  /** Cada grupo abre uma coluna. */
  sectionColumns?: boolean;
}

/**
 * Menu ligado a um gatilho. Não desenha nada: o gatilho é seu, e a lista abre no lugar certo.
 *   const ref = useRef(null);
 *   <Chip ref={ref} chevron>Recentes</Chip>
 *   <Menu triggerRef={ref} options={…} value={ordem} onChange={setOrdem} />
 * https://lumeui.dev/#/componentes/menu
 */
export function Menu({ triggerRef, options, mode, value, onChange, label, hideLabel, maxRows, sectionColumns }: MenuProps) {
  const change = useLatest(onChange);
  const api = useRef<{ value: string; setValue(v: string): void; destroy(): void } | null>(null);
  useEffect(() => {
    if (!triggerRef.current) return;
    const c = createMenu(triggerRef.current, defined({ options, mode, value, label, hideLabel, maxRows, sectionColumns, onChange: (v: string) => change.current(v) }));
    api.current = c;
    return () => {
      c.destroy();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerRef, stableKey(options), mode, label, hideLabel, maxRows, sectionColumns]);
  useEffect(() => {
    if (api.current && value !== undefined && api.current.value !== value) api.current.setValue(value);
  }, [value]);
  return null;
}

/* ───────── Abas ───────── */

export interface TabItem {
  id: string;
  label: ReactNode;
  icon?: IconName;
  /** Contagem ao lado do rótulo ("Prontuário 8"). */
  count?: number | string;
  disabled?: boolean;
  /** O conteúdo do painel. */
  content: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (id: string) => void;
  /** Nome do conjunto para leitores de tela. */
  label: string;
  /** underline (padrão) ou segmented. */
  look?: 'underline' | 'segmented';
  size?: 'sm' | 'md';
  /** As abas dividem a largura toda. */
  fill?: boolean;
  className?: string;
}

/**
 * Abas no padrão ARIA (tablist, tab, tabpanel), com setas, Home e End.
 * https://lumeui.dev/#/componentes/abas
 */
export function Tabs({ items, value, onChange, label, look = 'underline', size = 'md', fill, className }: TabsProps) {
  const id = useSafeId('tabs');
  const list = useRef<HTMLDivElement>(null);
  const enabled = items.filter((t) => !t.disabled);
  const onKey = (event: KeyboardEvent) => {
    const at = enabled.findIndex((t) => t.id === value);
    const next = { ArrowRight: at + 1, ArrowLeft: at - 1, Home: 0, End: enabled.length - 1 }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    const tab = enabled[(next + enabled.length) % enabled.length];
    onChange(tab.id);
    list.current?.querySelector<HTMLElement>(`#${id}-tab-${tab.id}`)?.focus();
  };
  return (
    <div className={cx('ds-tabs', look === 'segmented' && 'ds-tabs--segmented', size === 'sm' && 'ds-tabs--sm', fill && 'ds-tabs--fill', className)}>
      <div ref={list} className="ds-tabs__list" role="tablist" aria-label={label} onKeyDown={onKey}>
        {items.map((t) => (
          <button
            key={t.id}
            type="button"
            className="ds-tabs__tab"
            role="tab"
            id={`${id}-tab-${t.id}`}
            aria-controls={`${id}-panel-${t.id}`}
            aria-selected={t.id === value}
            tabIndex={t.id === value ? 0 : -1}
            disabled={t.disabled}
            onClick={() => onChange(t.id)}
          >
            {t.icon && <Icon name={t.icon} size={16} />}
            {t.label}
            {t.count !== undefined && t.count !== null && <span className="ds-tabs__count">{t.count}</span>}
          </button>
        ))}
      </div>
      {items.map((t) => (
        <div key={t.id} className="ds-tabs__panel" role="tabpanel" id={`${id}-panel-${t.id}`} aria-labelledby={`${id}-tab-${t.id}`} tabIndex={0} hidden={t.id !== value}>
          {t.id === value && t.content}
        </div>
      ))}
    </div>
  );
}

/* ───────── Controle segmentado ───────── */

export interface SegmentedOption {
  value: string;
  label: ReactNode;
  icon?: IconName;
  disabled?: boolean;
}

export interface SegmentedControlProps {
  options: SegmentedOption[];
  value: string;
  onChange: (value: string) => void;
  /** Nome do grupo para leitores de tela ("Visão"). */
  label: string;
  /** sm (32 px) para barras densas; md (36 px, padrão); lg (40 px) alinha com campos e botões médios. */
  size?: 'sm' | 'md' | 'lg';
  /** Ocupa a largura toda, com as opções dividindo o espaço por igual (como fill nas Abas). */
  fill?: boolean;
  className?: string;
}

/**
 * Poucas opções lado a lado, uma escolhida, com efeito na hora. As setas trocam a opção.
 * https://lumeui.dev/#/componentes/controle-segmentado
 */
export function SegmentedControl({ options, value, onChange, label, size = 'md', fill, className }: SegmentedControlProps) {
  const root = useRef<HTMLDivElement>(null);
  const onKey = (event: KeyboardEvent) => {
    const delta = ({ ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 } as Record<string, number>)[event.key];
    if (!delta) return;
    event.preventDefault();
    const list = options.filter((o) => !o.disabled);
    const at = list.findIndex((o) => o.value === value);
    const next = list[(at + delta + list.length) % list.length];
    onChange(next.value);
    root.current?.querySelector<HTMLElement>(`[data-value="${CSS.escape(next.value)}"]`)?.focus();
  };
  return (
    <div
      ref={root}
      className={cx('ds-segmented', size !== 'md' && `ds-segmented--${size}`, fill && 'ds-segmented--fill', className)}
      role="radiogroup"
      aria-label={label}
      onKeyDown={onKey}
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          className="ds-segmented__item"
          role="radio"
          data-value={o.value}
          aria-checked={o.value === value}
          tabIndex={o.value === value ? 0 : -1}
          disabled={o.disabled}
          onClick={() => onChange(o.value)}
        >
          {o.icon && <Icon name={o.icon} size={16} />}
          {o.label}
        </button>
      ))}
    </div>
  );
}

/* ───────── Paginação ───────── */

export interface PaginationProps {
  /** Total de itens. */
  total: number;
  page: number;
  pageSize: number;
  onChange: (state: { page: number; pageSize: number }) => void;
  /** Mostra o seletor de itens por página. */
  pageSizes?: number[];
  /** Páginas de cada lado da atual. Padrão: 1. */
  siblings?: number;
  /** Vira links de verdade: (page) => `?pagina=${page}`. */
  hrefFor?: (page: number) => string;
  /** Nome para leitores de tela. */
  label?: string;
  /** Troca o texto do intervalo (os números já vêm formatados). */
  summary?: (range: { first: string; last: string; total: string }) => string;
  className?: string;
}

/**
 * Páginas de uma lista, com total e itens por página. Em telas estreitas, vira "3 de 25".
 * https://lumeui.dev/#/componentes/paginacao
 */
export function Pagination({ total, page, pageSize, onChange, pageSizes, siblings, hrefFor, label, summary, className }: PaginationProps) {
  const root = useRef<HTMLElement>(null);
  const api = useRef<{ page: number; setPage(p: number): void; setTotal(t: number): void; destroy(): void } | null>(null);
  const change = useLatest(onChange);
  const href = useLatest(hrefFor);
  const sum = useLatest(summary);
  useEffect(() => {
    const c = createPagination(root.current!, defined({
      total, page, pageSize, pageSizes, siblings,
      hrefFor: hrefFor ? (p: number) => href.current!(p) : undefined,
      summary: summary ? (r: { first: string; last: string; total: string }) => sum.current!(r) : undefined,
      onChange: (s: { page: number; pageSize: number }) => change.current(s),
    }));
    api.current = c;
    return () => {
      c.destroy();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize, stableKey(pageSizes), siblings, Boolean(hrefFor), Boolean(summary)]);
  useEffect(() => {
    if (api.current && api.current.page !== page) api.current.setPage(page);
  }, [page]);
  useEffect(() => {
    api.current?.setTotal(total);
  }, [total]);
  return <nav ref={root} className={cx('ds-pagination', className)} aria-label={label} />;
}

/* ───────── Stepper ───────── */

export interface StepperProps {
  steps: Array<{ label: string; description?: string }>;
  /** A etapa atual, a partir de 0. */
  current: number;
  /** Com onChange, as etapas feitas viram botões para voltar. */
  onChange?: (index: number) => void;
  vertical?: boolean;
  className?: string;
}

/**
 * As etapas de um fluxo e onde a pessoa está.
 * https://lumeui.dev/#/componentes/stepper
 */
export function Stepper({ steps, current, onChange, vertical, className }: StepperProps) {
  const root = useRef<HTMLOListElement>(null);
  const api = useRef<{ current: number; setCurrent(i: number): void; destroy(): void } | null>(null);
  const change = useLatest(onChange);
  const latest = useLatest(current);
  useEffect(() => {
    const c = createStepper(root.current!, { steps, current: latest.current, clickable: Boolean(change.current), onChange: (i: number) => change.current?.(i) });
    api.current = c;
    return () => {
      c.destroy();
      root.current?.replaceChildren();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stableKey(steps), Boolean(onChange)]);
  useEffect(() => {
    if (api.current && api.current.current !== current) api.current.setCurrent(current);
  }, [current]);
  return <ol ref={root} className={cx('ds-stepper', vertical && 'ds-stepper--vertical', className)} />;
}

/* ───────── Acordeão ───────── */

export interface AccordionItem {
  id: string;
  title: ReactNode;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Os abertos no começo. */
  defaultOpen?: string[];
  /** Abrir um fecha os outros. */
  single?: boolean;
  /** Cada item é um cartão. */
  card?: boolean;
  className?: string;
}

/**
 * Perguntas e seções que abrem e fecham, sobre <details> nativo.
 * https://lumeui.dev/#/componentes/acordeao
 */
export function Accordion({ items, defaultOpen = [], single, card, className }: AccordionProps) {
  const name = useSafeId('acc');
  return (
    <div className={cx('ds-accordion', card && 'ds-accordion--card', className)}>
      {items.map((item) => (
        <details key={item.id} className="ds-accordion__item" name={single ? name : undefined} open={defaultOpen.includes(item.id) || undefined}>
          <summary className="ds-accordion__head">
            <span>{item.title}</span>
            <Icon name="chevron-down" size={18} />
          </summary>
          <div className="ds-accordion__body">{item.content}</div>
        </details>
      ))}
    </div>
  );
}

/* ───────── Árvore ───────── */

export interface TreeItem {
  id: string;
  label: string;
  icon?: IconName;
  children?: TreeItem[];
}

export interface TreeProps {
  items: TreeItem[];
  /** Nome para leitores de tela ("Arquivos"). */
  label: string;
  /** Os ids abertos no começo. */
  defaultExpanded?: string[];
  selected?: string | null;
  onSelect?: (item: TreeItem) => void;
  onToggle?: (item: TreeItem, open: boolean) => void;
  className?: string;
}

/**
 * Pastas e níveis aninhados, com teclado (setas, Home/End, letras).
 * https://lumeui.dev/#/componentes/arvore
 */
export function Tree({ items, label, defaultExpanded, selected, onSelect, onToggle, className }: TreeProps) {
  const root = useRef<HTMLDivElement>(null);
  const api = useRef<{ selected: string | null; select(id: string): void; setItems(items: TreeItem[]): void; destroy(): void } | null>(null);
  const pick = useLatest(onSelect);
  const toggle = useLatest(onToggle);
  const latest = useLatest({ items, selected });
  useEffect(() => {
    const c = createTree(root.current!, defined({
      items: latest.current.items,
      expanded: defaultExpanded,
      selected: latest.current.selected ?? undefined,
      onSelect: (item: TreeItem) => pick.current?.(item),
      onToggle: (item: TreeItem, open: boolean) => toggle.current?.(item, open),
    }));
    api.current = c;
    return () => {
      c.destroy();
      root.current?.replaceChildren();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const key = stableKey(items);
  useEffect(() => {
    api.current?.setItems(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  useEffect(() => {
    if (api.current && selected && api.current.selected !== selected) api.current.select(selected);
  }, [selected]);
  return <div ref={root} className={cx('ds-tree', className)} aria-label={label} />;
}

/* ───────── Barra de rolagem e voltar ao topo ───────── */

/** Liga a barra de rolagem sobreposta do Lume no app inteiro. Chame uma vez, no componente de cima. */
export function useScrollbars() {
  useEffect(() => initScrollbars(), []);
}

export interface BackToTopProps {
  /** A área que rola. */
  scrollerRef: RefObject<HTMLElement | null>;
  /** Px rolados para o botão aparecer. Padrão: uma tela da própria área. */
  threshold?: number;
}

/**
 * Botão que aparece depois de uma tela de rolagem e volta ao começo, preso ao canto da área.
 * https://lumeui.dev/#/componentes/voltar-ao-topo
 */
export function BackToTop({ scrollerRef, threshold }: BackToTopProps) {
  useEffect(() => {
    if (!scrollerRef.current) return;
    const c = createBackToTop(scrollerRef.current, defined({ threshold }));
    return () => c.destroy();
  }, [scrollerRef, threshold]);
  return null;
}
