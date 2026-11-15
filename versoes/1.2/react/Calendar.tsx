import { useEffect, useRef } from 'react';
import { createCalendar } from '../js/calendar.js';
import { mountCodeBlocks } from '../js/code-block.js';
import { msg } from '../js/i18n.js';
import { Icon } from './Icon';
import { useLocale } from './useLocale';
import { useLatest, stableKey, defined } from './useController';
import { cx } from './cx';

/* ───────── Calendário ───────── */

export type CalendarView = 'month' | 'week' | 'day';

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  /** Fim exclusivo: 9:00 às 10:00 termina em 10:00; dia todo, à meia-noite do dia seguinte. */
  end: Date;
  allDay?: boolean;
  tone?: 'neutral' | 'brand' | 'info' | 'success' | 'warning' | 'danger';
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
  className?: string;
}

/**
 * Mês, semana e dia, com eventos, teclado e o idioma do Lume.
 * https://lumeui.dev/#/componentes/calendario
 */
export function Calendar({ events, view, date, onChange, onEventClick, onDateClick, views, weekStartsOn, scrollToHour, className }: CalendarProps) {
  const root = useRef<HTMLDivElement>(null);
  const api = useRef<{ view: CalendarView; date: Date; setView(v: CalendarView): void; setDate(d: Date): void; setEvents(e: CalendarEvent[]): void; destroy(): void } | null>(null);
  const change = useLatest(onChange);
  const clickEvent = useLatest(onEventClick);
  const clickDate = useLatest(onDateClick);
  const latest = useLatest({ events, view, date });
  useEffect(() => {
    const c = createCalendar(root.current!, defined({
      ...latest.current,
      views,
      weekStartsOn,
      scrollToHour,
      onChange: (s: { view: CalendarView; date: Date }) => change.current(s),
      onEventClick: (e: CalendarEvent) => clickEvent.current?.(e),
      onDateClick: onDateClick ? (d: Date) => clickDate.current?.(d) : undefined,
    }));
    api.current = c;
    return () => {
      c.destroy();
      root.current?.replaceChildren();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stableKey(views), weekStartsOn, scrollToHour, Boolean(onDateClick)]);
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
  return <div ref={root} className={className} />;
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
