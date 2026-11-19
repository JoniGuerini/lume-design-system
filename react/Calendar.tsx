import { useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { createCalendar } from '../js/calendar.js';
import { mountCodeBlocks } from '../js/code-block.js';
import { msg } from '../js/i18n.js';
import { Icon, type IconName } from './Icon';
import { useLocale } from './useLocale';
import { useLatest, stableKey, defined } from './useController';
import { cx } from './cx';

/* ───────── Calendário ───────── */

export type CalendarView = 'month' | 'week' | 'day';

/** Os tons de status e as 8 cores dos gráficos (para as agendas). */
export type CalendarTone =
  | 'neutral' | 'brand' | 'info' | 'success' | 'warning' | 'danger'
  | 'peach' | 'blue' | 'pink' | 'amber' | 'teal' | 'red' | 'violet' | 'green';

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  /** Fim exclusivo: 9:00 às 10:00 termina em 10:00; dia todo, à meia-noite do dia seguinte. */
  end: Date;
  allDay?: boolean;
  /** Sem tom, vale o da categoria. */
  tone?: CalendarTone;
  /** A agenda do evento (categories): dá a cor e o nome. */
  category?: string;
  /** Linha de detalhe, como o local. */
  meta?: string;
  /** Marca à direita do evento (presença). */
  icon?: IconName;
  /** Texto dos detalhes. */
  description?: string;
  /** Sem ações nos detalhes e sem arrastar (feriados, agendas assinadas). */
  readOnly?: boolean;
}

export interface CalendarCategory {
  id: string;
  label: string;
  tone: CalendarTone;
}

export interface CalendarAction {
  value: string;
  label: string;
  icon?: IconName;
  tone?: 'danger';
}

export interface CalendarProps {
  events: CalendarEvent[];
  view: CalendarView;
  /** O dia em foco. */
  date: Date;
  /** Visão ou dia mudaram por dentro (setas, Hoje, seletor de visão). */
  onChange: (state: { view: CalendarView; date: Date }) => void;
  onEventClick?: (event: CalendarEvent) => void;
  /** Clique num dia. Padrão: abre a visão do dia. */
  onDateClick?: (date: Date) => void;
  /** As visões do seletor. Padrão: as três. */
  views?: CalendarView[];
  /** 0 domingo, 1 segunda. Padrão: o do idioma. */
  weekStartsOn?: 0 | 1;
  /** A grade de horas abre nesta hora. Padrão: 8. */
  scrollToHour?: number;
  /** false: semana de 5 dias, no mês e na semana. */
  weekends?: boolean;
  /** Quantos cabem no dia do mês antes do "+N". Padrão: 3. */
  maxEvents?: number;
  /** As agendas: a cor e o nome de cada uma. */
  categories?: CalendarCategory[];
  /** Clicar no evento abre os detalhes num popover do Lume. */
  eventDetails?: boolean;
  /** Botões do rodapé dos detalhes: o primeiro sem ícone vira o botão principal; os outros com ícone viram botões de ícone. */
  eventActions?: CalendarAction[];
  onEventAction?: (value: string, event: CalendarEvent) => void;
  /** O título dos detalhes vira link. */
  eventHref?: (event: CalendarEvent) => string | undefined;
  /** Rodapé próprio nos detalhes, no lugar (ou além) de eventActions. */
  eventFooter?: (event: CalendarEvent) => ReactNode;
  /** Liga o arrastar (mouse): novo início e fim, a mesma duração. */
  onEventMove?: (event: CalendarEvent, start: Date, end: Date) => void;
  /** Encaixe do arrastar, em minutos. Padrão: 15. */
  snap?: number;
  /** Clicar num horário vazio da semana ou do dia. */
  onSlotCreate?: (slot: { start: Date; end: Date; allDay: boolean }) => void;
  /** Duração do horário criado, em minutos. Padrão: 60. */
  slotDuration?: number;
  /** Botões no cabeçalho, antes da troca de visão ("Novo atendimento"). */
  actions?: ReactNode;
  className?: string;
}

/**
 * Mês, semana e dia, com eventos, teclado e o idioma do Lume.
 * https://lumeui.dev/#/componentes/calendario
 */
export function Calendar({
  events, view, date, onChange, onEventClick, onDateClick, views, weekStartsOn, scrollToHour, weekends, maxEvents, categories,
  eventDetails, eventActions, onEventAction, eventHref, eventFooter, onEventMove, snap, onSlotCreate, slotDuration, actions, className,
}: CalendarProps) {
  const root = useRef<HTMLDivElement>(null);
  const api = useRef<{ view: CalendarView; date: Date; setView(v: CalendarView): void; setDate(d: Date): void; setEvents(e: CalendarEvent[]): void; destroy(): void } | null>(null);
  const change = useLatest(onChange);
  const clickEvent = useLatest(onEventClick);
  const clickDate = useLatest(onDateClick);
  const latest = useLatest({ events, view, date });
  const action = useLatest(onEventAction);
  const href = useLatest(eventHref);
  const move = useLatest(onEventMove);
  const slot = useLatest(onSlotCreate);
  const footer = useLatest(eventFooter);
  // as ações do cabeçalho e o rodapé dos detalhes são do React: entram por portal nos lugares que o módulo abre
  const [actionsHost] = useState(() => (typeof document === 'undefined' ? null : Object.assign(document.createElement('div'), { style: 'display:contents' })));
  const [foot, setFoot] = useState<{ el: HTMLElement; event: CalendarEvent } | null>(null);
  useEffect(() => {
    const c = createCalendar(root.current!, defined({
      ...latest.current,
      views,
      weekStartsOn,
      scrollToHour,
      onChange: (s: { view: CalendarView; date: Date }) => change.current(s),
      onEventClick: (e: CalendarEvent) => clickEvent.current?.(e),
      onDateClick: onDateClick ? (d: Date) => clickDate.current?.(d) : undefined,
      weekends,
      maxEvents,
      categories,
      eventDetails,
      eventActions,
      onEventAction: (v: string, e: CalendarEvent) => action.current?.(v, e),
      eventHref: eventHref ? (e: CalendarEvent) => href.current?.(e) : undefined,
      renderEventFooter: eventFooter ? (e: CalendarEvent, el: HTMLElement | null) => el && setFoot({ el, event: e }) : undefined,
      onDetailsClose: () => setFoot(null),
      onEventMove: onEventMove ? (e: CalendarEvent, a: Date, b: Date) => move.current?.(e, a, b) : undefined,
      snap,
      onSlotCreate: onSlotCreate ? (x: { start: Date; end: Date; allDay: boolean }) => slot.current?.(x) : undefined,
      slotDuration,
      actions: actions ? actionsHost : undefined,
    }));
    api.current = c;
    return () => {
      c.destroy();
      root.current?.replaceChildren();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    stableKey(views), weekStartsOn, scrollToHour, Boolean(onDateClick), weekends, maxEvents, stableKey(categories), eventDetails,
    stableKey(eventActions), Boolean(eventHref), Boolean(eventFooter), Boolean(onEventMove), snap, Boolean(onSlotCreate), slotDuration, Boolean(actions),
  ]);
  const eventsKey = stableKey(events);
  useEffect(() => {
    api.current?.setEvents(events);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventsKey]);
  useEffect(() => {
    if (api.current && api.current.view !== view) api.current.setView(view);
  }, [view]);
  const day = date.toDateString();
  useEffect(() => {
    if (api.current && api.current.date.toDateString() !== day) api.current.setDate(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day]);
  return (
    <>
      <div ref={root} className={className} />
      {actions && actionsHost && createPortal(actions, actionsHost)}
      {foot && footer.current && createPortal(footer.current(foot.event), foot.el)}
    </>
  );
}

/* ───────── Bloco de código ───────── */

export interface CodeBlockProps {
  /** O código, como texto. */
  code: string;
  /** Letra menor, para trechos curtos ao lado de texto. */
  small?: boolean;
  className?: string;
}

/**
 * Código com o botão de copiar (e o aviso de copiado).
 * https://lumeui.dev/#/componentes/bloco-de-codigo
 */
export function CodeBlock({ code, small, className }: CodeBlockProps) {
  useLocale();
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => mountCodeBlocks(root.current!), []);
  const label = msg('code.copy');
  return (
    <div ref={root} className={cx('ds-code-block', className)}>
      <pre className={cx('ds-code', small && 'ds-code--sm')}><code>{code}</code></pre>
      <button type="button" className="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-code-block__copy" data-code-copy aria-label={label} data-ds-tooltip={label}>
        <Icon name="copy" size={16} />
      </button>
    </div>
  );
}
