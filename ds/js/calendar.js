/**
 * Calendário — visões de mês, semana e dia, com eventos.
 *
 *   const cal = createCalendar(document.querySelector('#agenda'), {
 *     view: 'month',                 // 'month' | 'week' | 'day'
 *     date: new Date(),              // dia em foco
 *     events: [
 *       { id: 'a', title: 'Revisão do roteiro', start: new Date(…), end: new Date(…), tone: 'brand' },
 *       { id: 'b', title: 'Feriado', start: new Date(…), end: new Date(…), allDay: true, tone: 'success' },
 *     ],
 *     onEventClick: (event) => abrir(event),
 *     onChange: ({ view, date }) => salvar(view, date),
 *   });
 *   cal.setView('week'); cal.setDate(d); cal.today(); cal.prev(); cal.next();
 *   cal.setEvents(lista); cal.destroy();
 *
 * Opções: weekStartsOn (0 domingo · 1 segunda; padrão: o do idioma), scrollToHour (8: a grade de horas
 * abre nessa hora), views (['month', 'week', 'day']: as que aparecem no seletor), onDateClick(date)
 * (padrão: abre a visão do dia).
 * Tons dos eventos: neutral (padrão) · brand · info · success · warning · danger.
 * Fim exclusivo: um evento de 9:00 às 10:00 termina em 10:00; um de dia todo, à meia-noite do dia seguinte.
 *
 * Agenda (tudo opcional; sem isto, o calendário é o de sempre):
 *   weekends: false             semana de 5 dias (no mês e na semana)
 *   maxEvents: 3                quantos cabem no dia do mês antes do "+N"
 *   categories: [{ id, label, tone }] e event.category: a cor vem da agenda
 *   event.meta, event.icon      uma linha de detalhe (local) e uma marca à direita (presença)
 *   eventDetails: true          clicar abre os detalhes num popover (título, horário, detalhe, descrição),
 *     com eventActions: [{ value, label, icon, tone }] no rodapé e onEventAction(value, event); eventHref(event)
 *     faz do título um link. event.readOnly: sem ações nem arrastar.
 *   onEventMove(event, start, end)   arrastar com o mouse para outro horário ou dia, com encaixe em snap (15 min)
 *   onSlotCreate({ start, end, allDay })   clicar num horário vazio da semana ou do dia (slotDuration: 60 min)
 *   actions: HTML ou Element     botões no cabeçalho, antes da troca de visão
 * Tons além dos de status: as 8 cores dos gráficos (peach, blue, pink, amber, teal, red, violet, green).
 * Eventos de dia todo viram faixas no mês, atravessando os dias que ocupam.
 *
 * Teclado (visão do mês, padrão de grade): setas andam um dia ou uma semana, Home/End vão ao começo
 * e ao fim da semana, PageUp/PageDown trocam de mês, Enter abre o dia. Nas grades de horas, cada evento
 * é um botão com nome, horário e dia. Textos e datas no idioma atual (Intl).
 */
import { icon } from '../icons/icons.js';
import { msg, locale, dateFormat } from './i18n.js';
import { createPopover } from './popover.js';

const VIEWS = ['month', 'week', 'day'];
const STATUS_TONES = ['neutral', 'brand', 'info', 'success', 'warning', 'danger'];
const CHART_TONES = ['peach', 'blue', 'pink', 'amber', 'teal', 'red', 'violet', 'green'];
const TONES = [...STATUS_TONES, ...CHART_TONES];
const HOUR = 60 * 60 * 1000;
const MAX_IN_CELL = 3;
const BAR_H = 20; // altura de uma faixa de dia todo no mês (px), com o respiro
const MIN_MINUTES = 24; // evento curto ganha altura para o texto caber (e conta assim nas sobreposições)
let uid = 0;

const escape = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const capitalize = (s) => s.charAt(0).toLocaleUpperCase(locale()) + s.slice(1);

/* ───────── Datas (sempre no horário local) ───────── */

const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const addMonths = (d, n) => {
  const target = new Date(d.getFullYear(), d.getMonth() + n, 1);
  const last = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate();
  return new Date(target.getFullYear(), target.getMonth(), Math.min(d.getDate(), last));
};
const sameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
const key = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const fromKey = (k) => {
  const [y, m, d] = k.split('-').map(Number);
  return new Date(y, m - 1, d);
};
const startOfWeek = (d, weekStartsOn) => addDays(startOfDay(d), -((d.getDay() - weekStartsOn + 7) % 7));
const minutesOf = (d) => d.getHours() * 60 + d.getMinutes();
const isWeekend = (d) => d.getDay() === 0 || d.getDay() === 6;

/** Primeiro dia da semana no idioma (Intl.Locale.weekInfo, onde houver). */
export function localeWeekStart(tag = locale()) {
  try {
    const loc = new Intl.Locale(tag);
    const info = loc.getWeekInfo?.() ?? loc.weekInfo;
    if (info?.firstDay) return info.firstDay % 7;
  } catch {}
  return tag.startsWith('es') ? 1 : 0;
}

/** O evento acontece neste dia? (fim exclusivo) */
const onDay = (event, day) => {
  const dayStart = startOfDay(day);
  const dayEnd = addDays(dayStart, 1);
  return event.start < dayEnd && (event.end > dayStart || +event.start === +event.end);
};

function normalize(list, categories = []) {
  return (list ?? [])
    .map((e, i) => {
      const start = new Date(e.start);
      const end = e.end ? new Date(e.end) : e.allDay ? addDays(startOfDay(start), 1) : new Date(+start + HOUR);
      const cat = e.category !== undefined ? categories.find((c) => c.id === e.category) : null;
      const tone = e.tone ?? cat?.tone;
      return { ...e, id: e.id ?? `evento-${i}`, start, end, allDay: Boolean(e.allDay), tone: TONES.includes(tone) ? tone : 'neutral' };
    })
    .sort((a, b) => b.allDay - a.allDay || a.start - b.start || b.end - b.start - (a.end - a.start));
}

/** Colunas para eventos que se sobrepõem num dia: grupos encadeados dividem a largura. */
function layoutDay(events) {
  const placed = [];
  let cluster = [];
  let clusterEnd = 0;
  let columns = [];
  const flush = () => {
    cluster.forEach((p) => (p.cols = columns.length));
    cluster = [];
    columns = [];
  };
  for (const event of events) {
    const end = Math.max(+event.end, +event.start + MIN_MINUTES * 60000);
    if (cluster.length && +event.start >= clusterEnd) flush();
    let col = columns.findIndex((e) => e <= +event.start);
    if (col === -1) {
      col = columns.length;
      columns.push(end);
    } else columns[col] = end;
    const p = { event, col, cols: 1 };
    cluster.push(p);
    placed.push(p);
    clusterEnd = Math.max(clusterEnd, end);
  }
  flush();
  return placed;
}

/* ───────── Componente ───────── */

export function createCalendar(root, options = {}) {
  const o = {
    view: 'month',
    date: new Date(),
    events: [],
    scrollToHour: 8,
    views: VIEWS,
    weekends: true,
    maxEvents: MAX_IN_CELL,
    categories: [],
    snap: 15,
    slotDuration: 60,
    ...options,
  };
  const id = `ds-calendar-${++uid}`;
  let view = VIEWS.includes(o.view) ? o.view : 'month';
  let date = startOfDay(new Date(o.date));
  let events = normalize(o.events, o.categories);
  let details = null; // popover dos detalhes aberto
  let focusKey = key(date);
  let nowTimer = null;
  let scrollTop = null;

  const weekStart = () => o.weekStartsOn ?? localeWeekStart();
  const fmt = {
    time: () => {
      const h12 = new Intl.DateTimeFormat(locale(), { hour: 'numeric' }).resolvedOptions().hour12;
      return dateFormat(h12 ? { hour: 'numeric', minute: '2-digit' } : { hour: '2-digit', minute: '2-digit' });
    },
    hour: () => {
      const h12 = new Intl.DateTimeFormat(locale(), { hour: 'numeric' }).resolvedOptions().hour12;
      return dateFormat(h12 ? { hour: 'numeric' } : { hour: '2-digit', minute: '2-digit' });
    },
  };

  root.classList.add('ds-calendar');
  const showDay = (d) => o.weekends || !isWeekend(d);
  const draggable = (e) => Boolean(o.onEventMove) && !e.readOnly;

  /* Detalhes do evento: um popover preso ao evento clicado */

  function closeDetails() {
    if (!details) return;
    const d = details;
    details = null;
    d.pop.destroy();
    o.onDetailsClose?.();
  }

  function detailsContent(e) {
    const panel = document.createElement('div');
    panel.className = 'ds-calendar__details';
    const time = fmt.time();
    const day = capitalize(dateFormat({ weekday: 'long', day: 'numeric', month: 'long' }).format(e.start));
    const when = e.allDay ? `${day} · ${msg('calendar.allDay')}` : `${day} · ${time.format(e.start)}–${time.format(e.end)}`;
    const href = o.eventHref?.(e);
    const cat = o.categories.find((c) => c.id === e.category);
    const actions = e.readOnly ? [] : o.eventActions ?? [];
    panel.innerHTML = `<div class="ds-calendar__details-body">
        <p class="ds-calendar__details-title ds-calendar__details-title--${e.tone}"><span class="ds-calendar__dot" aria-hidden="true"></span>${href ? `<a class="ds-link" href="${escape(href)}">${escape(e.title)}</a>` : `<span>${escape(e.title)}</span>`}</p>
        <p class="ds-calendar__details-row">${icon('clock', { size: 16 })}<span>${escape(when)}</span></p>
        ${e.meta ? `<p class="ds-calendar__details-row">${icon(e.metaIcon ?? 'map-pin', { size: 16 })}<span>${escape(e.meta)}</span></p>` : ''}
        ${cat ? `<p class="ds-calendar__details-row">${icon('tag', { size: 16 })}<span>${escape(cat.label)}</span></p>` : ''}
        ${e.description ? `<p class="ds-calendar__details-desc">${escape(e.description)}</p>` : ''}
      </div>
      ${actions.length || o.renderEventFooter ? `<div class="ds-calendar__details-foot" data-cal-foot>${actions
        .map((a, i) =>
          i === 0 && !a.icon
            ? `<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-cal-action="${escape(a.value)}">${escape(a.label)}</button>`
            : a.icon && i > 0
              ? `<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted${a.tone === 'danger' ? ' ds-calendar__details-danger' : ''}" data-cal-action="${escape(a.value)}" aria-label="${escape(a.label)}" data-ds-tooltip="${escape(a.label)}">${icon(a.icon, { size: 16 })}</button>`
              : `<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-cal-action="${escape(a.value)}">${a.icon ? icon(a.icon, { size: 16 }) : ''}${escape(a.label)}</button>`,
        )
        .join('')}</div>` : ''}`;
    panel.addEventListener('click', (event) => {
      const btn = event.target.closest('[data-cal-action]');
      if (!btn) return;
      const value = btn.dataset.calAction;
      closeDetails();
      o.onEventAction?.(value, { ...e });
    });
    return panel;
  }

  function openDetails(trigger, e) {
    closeDetails();
    const content = detailsContent(e);
    const pop = createPopover(trigger, { content, label: e.title, placement: 'right', align: 'start', className: 'ds-calendar__popover', onClose: () => details?.pop === pop && setTimeout(closeDetails) });
    details = { pop, event: e };
    pop.open();
    o.renderEventFooter?.({ ...e }, content.querySelector('[data-cal-foot]'));
  }

  /* Arrastar: mouse ou caneta; no toque, a página continua rolando */

  let drag = null;
  const snapMin = () => Math.max(1, o.snap);
  const hourPx = () => parseFloat(getComputedStyle(root).getPropertyValue('--ds-calendar-hour')) || 48;

  function onPointerDown(event) {
    if (event.button !== 0 || event.pointerType === 'touch') return;
    const el = event.target.closest('[data-draggable][data-event-id]');
    if (!el) return;
    const ev = findEvent(el);
    if (!ev) return;
    drag = { el, ev, x: event.clientX, y: event.clientY, moved: false, start: ev.start, end: ev.end, id: event.pointerId };
  }

  function onPointerMove(event) {
    if (!drag || event.pointerId !== drag.id) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (!drag.moved) {
      if (Math.hypot(dx, dy) < 4) return;
      drag.moved = true;
      root.dataset.dragging = '';
      drag.el.dataset.dragging = '';
      drag.el.setPointerCapture?.(event.pointerId);
    }
    const len = drag.ev.end - drag.ev.start;
    if (view === 'month') {
      const cell = document.elementsFromPoint(event.clientX, event.clientY).find((n) => n.matches?.('.ds-calendar__day'));
      if (!cell) return;
      const target = fromKey(cell.dataset.date);
      const delta = Math.round((startOfDay(target) - startOfDay(drag.ev.start)) / (24 * HOUR));
      drag.start = new Date(addDays(drag.ev.start, delta).setHours(drag.ev.start.getHours(), drag.ev.start.getMinutes()));
      drag.end = new Date(+drag.start + len);
      root.querySelectorAll('.ds-calendar__day[data-drop]').forEach((c) => c.removeAttribute('data-drop'));
      cell.dataset.drop = '';
      return;
    }
    const col = document.elementsFromPoint(event.clientX, event.clientY).find((n) => n.matches?.('.ds-calendar__col'));
    if (!col) return;
    const minutes = Math.round(((drag.ev.start - startOfDay(drag.ev.start)) / 60000 + (dy / hourPx()) * 60) / snapMin()) * snapMin();
    const clamped = Math.max(0, Math.min(24 * 60 - Math.round(len / 60000), minutes));
    const day = fromKey(col.dataset.colDate);
    drag.start = new Date(+day + clamped * 60000);
    drag.end = new Date(+drag.start + len);
    if (drag.el.parentElement !== col) col.append(drag.el);
    drag.el.style.setProperty('--_from', clamped);
    drag.el.style.setProperty('--_col', 0);
    drag.el.style.setProperty('--_cols', 1);
    const t = drag.el.querySelector('.ds-calendar__event-time');
    if (t) t.textContent = `${fmt.time().format(drag.start)}–${fmt.time().format(drag.end)}`;
  }

  function onPointerUp(event) {
    if (!drag || event.pointerId !== drag.id) return;
    const d = drag;
    drag = null;
    delete root.dataset.dragging;
    if (!d.moved) return;
    // o clique que vem depois de arrastar não abre nada
    const swallow = (e) => e.stopPropagation();
    root.addEventListener('click', swallow, { capture: true, once: true });
    setTimeout(() => root.removeEventListener('click', swallow, { capture: true }), 80);
    if (+d.start === +d.ev.start) return render();
    const found = events.find((x) => x.id === d.ev.id);
    if (found) {
      found.start = d.start;
      found.end = d.end;
    }
    render();
    o.onEventMove?.({ ...d.ev }, new Date(d.start), new Date(d.end));
  }

  /* Título e navegação */

  function range() {
    if (view === 'month') {
      const first = new Date(date.getFullYear(), date.getMonth(), 1);
      const start = startOfWeek(first, weekStart());
      const last = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      const weeks = Math.ceil(((last - start) / (24 * HOUR) + 1) / 7);
      return { start, days: weeks * 7 };
    }
    if (view === 'week') return { start: startOfWeek(date, weekStart()), days: 7 };
    return { start: date, days: 1 };
  }

  function title() {
    if (view === 'month') return capitalize(dateFormat({ month: 'long', year: 'numeric' }).format(date));
    if (view === 'week') {
      const { start: weekStartDay } = range();
      const shown = Array.from({ length: 7 }, (_, i) => addDays(weekStartDay, i)).filter(showDay);
      const start = shown[0] ?? weekStartDay;
      const end = shown.at(-1) ?? addDays(weekStartDay, 6);
      const f = dateFormat({ day: 'numeric', month: 'long', year: 'numeric' });
      return capitalize(f.formatRange ? f.formatRange(start, end) : `${f.format(start)} – ${f.format(end)}`);
    }
    return capitalize(dateFormat({ weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(date));
  }

  const header = () => `<header class="ds-calendar__header">
      <h2 class="ds-calendar__title" id="${id}-title" aria-live="polite">${escape(title())}</h2>
      <div class="ds-calendar__nav">
        <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-cal="today">${msg('calendar.today')}</button>
        <button type="button" class="ds-icon-btn ds-icon-btn--sm" data-cal="prev" aria-label="${msg(`calendar.prev.${view}`)}" data-ds-tooltip="${msg(`calendar.prev.${view}`)}">${icon('chevron-left', { size: 18 })}</button>
        <button type="button" class="ds-icon-btn ds-icon-btn--sm" data-cal="next" aria-label="${msg(`calendar.next.${view}`)}" data-ds-tooltip="${msg(`calendar.next.${view}`)}">${icon('chevron-right', { size: 18 })}</button>
      </div>
      ${o.actions ? '<div class="ds-calendar__actions" data-cal-actions></div>' : ''}
      ${
        o.views.length > 1
          ? `<div class="ds-segmented ds-calendar__views" role="radiogroup" aria-label="${msg('calendar.view')}">
          ${o.views
            .map((v) => `<button type="button" class="ds-segmented__item" role="radio" data-cal-view="${v}" aria-checked="${v === view}" tabindex="${v === view ? 0 : -1}">${msg(`calendar.${v}`)}</button>`)
            .join('')}
        </div>`
          : ''
      }
    </header>`;

  /* Visão do mês */

  const eventLabel = (e) => {
    const when = e.allDay ? msg('calendar.allDay') : dateFormat({ hour: 'numeric', minute: '2-digit' }).formatRange?.(e.start, e.end) ?? `${fmt.time().format(e.start)}–${fmt.time().format(e.end)}`;
    return [e.title, when, dateFormat({ weekday: 'long', day: 'numeric', month: 'long' }).format(e.start), e.meta].filter(Boolean).join(', ');
  };

  function monthView() {
    const { start, days } = range();
    const today = new Date();
    const weekdays = Array.from({ length: 7 }, (_, i) => addDays(start, i)).filter(showDay);
    const ncols = weekdays.length;
    const short = dateFormat({ weekday: 'short' });
    const long = dateFormat({ weekday: 'long' });
    const cellLabel = dateFormat({ weekday: 'long', day: 'numeric', month: 'long' });
    const time = fmt.time();
    const rows = [];
    for (let w = 0; w < days / 7; w++) {
      const cells = [];
      const weekDays = Array.from({ length: 7 }, (_, i) => addDays(start, w * 7 + i)).filter(showDay);
      // faixas de dia todo: cada evento ocupa uma raia, do primeiro ao último dia dele nesta semana
      const lanes = [];
      const bars = [];
      for (const e of events.filter((ev) => ev.allDay && weekDays.some((d) => onDay(ev, d)))) {
        const cols = weekDays.map((d, i) => (onDay(e, d) ? i : -1)).filter((i) => i >= 0);
        const [a, b] = [cols[0], cols.at(-1)];
        let lane = lanes.findIndex((end) => end < a);
        if (lane === -1) lane = lanes.push(b) - 1;
        else lanes[lane] = b;
        bars.push({ e, a, b, lane, cont: [e.start < startOfDay(weekDays[a]), e.end > addDays(startOfDay(weekDays[b]), 1)] });
      }
      const maxBars = Math.max(0, o.maxEvents - 1);
      const lanesShown = Math.min(lanes.length, maxBars);
      for (let i = 0; i < weekDays.length; i++) {
        const day = weekDays[i];
        const k = key(day);
        const list = events.filter((e) => onDay(e, day));
        const timed = list.filter((e) => !e.allDay);
        const hiddenBars = bars.filter((x) => x.lane >= lanesShown && x.a <= i && x.b >= i).length;
        const lanesHere = bars.filter((x) => x.lane < lanesShown && x.a <= i && x.b >= i).length;
        const room = Math.max(0, o.maxEvents - lanesShown);
        const shown = timed.length > room ? timed.slice(0, Math.max(0, room - 1)) : timed;
        const extra = timed.length - shown.length + hiddenBars;
        void lanesHere;
        const isToday = sameDay(day, today);
        const outside = day.getMonth() !== date.getMonth();
        const label = [cellLabel.format(day), isToday ? msg('calendar.isToday') : '', msg('calendar.events', list.length)].filter(Boolean).join(', ');
        cells.push(`<div class="ds-calendar__day" role="gridcell" data-date="${k}" tabindex="${k === focusKey ? 0 : -1}" aria-label="${escape(label)}"${isToday ? ' data-today aria-current="date"' : ''}${outside ? ' data-outside' : ''} style="--_lanes: ${lanesShown}">
          <span class="ds-calendar__date" aria-hidden="true">${day.getDate()}</span>
          ${
            shown.length || extra
              ? `<div class="ds-calendar__items" aria-hidden="true">
              ${shown
                .map(
                  (e) =>
                    `<span class="ds-calendar__item ds-calendar__item--${e.tone}" data-event-id="${escape(e.id)}" title="${escape(e.title)}"${draggable(e) ? ' data-draggable' : ''}><span class="ds-calendar__dot"></span><span class="ds-calendar__item-time">${time.format(e.start)}</span><span class="ds-calendar__item-title">${escape(e.title)}</span>${e.icon ? icon(e.icon, { size: 12, className: 'ds-calendar__mark' }) : ''}</span>`,
                )
                .join('')}
              ${extra ? `<span class="ds-calendar__more">${msg('calendar.more', extra)}</span>` : ''}
            </div>`
              : ''
          }
        </div>`);
      }
      const barsHtml = bars
        .filter((x) => x.lane < lanesShown)
        .map(
          ({ e, a, b, lane, cont }) =>
            `<span class="ds-calendar__bar ds-calendar__chip ds-calendar__chip--${e.tone}${cont[0] ? ' ds-calendar__bar--from' : ''}${cont[1] ? ' ds-calendar__bar--to' : ''}" data-event-id="${escape(e.id)}" title="${escape(e.title)}" style="grid-column: ${a + 1} / ${b + 2}; --_lane: ${lane}">${escape(e.title)}</span>`,
        )
        .join('');
      rows.push(`<div class="ds-calendar__week" role="row" style="--_cols: ${ncols}">${cells.join('')}${barsHtml ? `<div class="ds-calendar__bars" aria-hidden="true">${barsHtml}</div>` : ''}</div>`);
    }
    return `<div class="ds-calendar__month" role="grid" aria-labelledby="${id}-title" style="--_weeks: ${days / 7}">
      <div class="ds-calendar__weekdays" role="row" style="--_cols: ${ncols}">
        ${weekdays.map((d) => `<div class="ds-calendar__weekday" role="columnheader"><abbr title="${escape(long.format(d))}">${escape(short.format(d).replace('.', ''))}</abbr></div>`).join('')}
      </div>
      ${rows.join('')}
    </div>`;
  }

  /* Visões de semana e dia: grade de horas */

  function timeView() {
    const { start, days } = range();
    const list = Array.from({ length: days }, (_, i) => addDays(start, i)).filter((d) => view === 'day' || showDay(d));
    const today = new Date();
    const hour = fmt.hour();
    const time = fmt.time();
    const weekday = dateFormat({ weekday: 'short' });
    const allDay = list.map((d) => events.filter((e) => e.allDay && onDay(e, d)));
    const hasAllDay = allDay.some((l) => l.length);
    const cols = `--_days: ${list.length}`;

    const head = `<div class="ds-calendar__cols-head" style="${cols}">
        <span class="ds-calendar__gutter" aria-hidden="true"></span>
        ${list
          .map((d) => {
            const isToday = sameDay(d, today);
            const label = dateFormat({ weekday: 'long', day: 'numeric', month: 'long' }).format(d);
            const inner = `<span class="ds-calendar__col-weekday">${escape(weekday.format(d).replace('.', ''))}</span><span class="ds-calendar__col-date">${d.getDate()}</span>`;
            return view === 'week'
              ? `<button type="button" class="ds-calendar__col-head" data-cal-open="${key(d)}" aria-label="${escape(label)}"${isToday ? ' data-today aria-current="date"' : ''}>${inner}</button>`
              : `<div class="ds-calendar__col-head"${isToday ? ' data-today' : ''}>${inner}</div>`;
          })
          .join('')}
      </div>`;

    const allDayRow = hasAllDay
      ? `<div class="ds-calendar__allday" style="${cols}">
          <span class="ds-calendar__gutter ds-calendar__allday-label">${msg('calendar.allDay')}</span>
          ${allDay
            .map((l) => `<div class="ds-calendar__allday-cell">${l.map((e) => `<button type="button" class="ds-calendar__chip ds-calendar__chip--${e.tone}" data-event-id="${escape(e.id)}" aria-label="${escape(eventLabel(e))}">${escape(e.title)}</button>`).join('')}</div>`)
            .join('')}
        </div>`
      : '';

    const hours = Array.from({ length: 24 }, (_, h) => `<span class="ds-calendar__hour">${h ? escape(hour.format(new Date(2026, 0, 1, h))) : ''}</span>`).join('');

    const columns = list
      .map((d, i) => {
        const dayStart = startOfDay(d);
        const timed = events.filter((e) => !e.allDay && onDay(e, d));
        const blocks = layoutDay(timed).map(({ event: e, col, cols: n }) => {
          const from = Math.max(0, (e.start - dayStart) / 60000);
          const to = Math.min(24 * 60, (e.end - dayStart) / 60000);
          const short = to - from < 45;
          return `<button type="button" class="ds-calendar__event ds-calendar__event--${e.tone}${short ? ' ds-calendar__event--short' : ''}" data-event-id="${escape(e.id)}" aria-label="${escape(eventLabel(e))}"${draggable(e) ? ' data-draggable' : ''}
            style="--_from: ${from}; --_len: ${Math.max(to - from, MIN_MINUTES)}; --_col: ${col}; --_cols: ${n}">
            <span class="ds-calendar__event-title">${escape(e.title)}</span>
            <span class="ds-calendar__event-time">${time.format(e.start)}${short ? '' : `–${time.format(e.end)}`}${e.meta && !short ? `<span class="ds-calendar__event-meta"> · ${escape(e.meta)}</span>` : ''}</span>
            ${e.icon ? icon(e.icon, { size: 14, className: 'ds-calendar__mark' }) : ''}
          </button>`;
        });
        const isToday = sameDay(d, today);
        return `<div class="ds-calendar__col" style="grid-column: ${i + 2}" data-col-date="${key(d)}"${isToday ? ' data-today' : ''}${o.onSlotCreate ? ' data-slots' : ''}>
          ${isToday ? `<span class="ds-calendar__now" aria-hidden="true" style="--_from: ${minutesOf(today)}"></span>` : ''}
          ${blocks.join('')}
        </div>`;
      })
      .join('');

    return `<div class="ds-calendar__time" role="region" aria-labelledby="${id}-title">
      ${head}
      ${allDayRow}
      <div class="ds-calendar__scroll" data-cal-scroll tabindex="-1">
        <div class="ds-calendar__grid" style="${cols}">
          <div class="ds-calendar__hours" aria-hidden="true">${hours}</div>
          <div class="ds-calendar__lines" aria-hidden="true">${'<span></span>'.repeat(24)}</div>
          ${columns}
        </div>
      </div>
    </div>`;
  }

  /* Desenho */

  function render({ focus = false } = {}) {
    const scroller = root.querySelector('[data-cal-scroll]');
    if (scroller && view !== 'month') scrollTop = scroller.scrollTop;
    root.dataset.view = view;
    closeDetails();
    root.innerHTML = `${header()}<div class="ds-calendar__body">${view === 'month' ? monthView() : timeView()}</div>`;
    const slot = root.querySelector('[data-cal-actions]');
    if (slot && o.actions) {
      if (typeof o.actions === 'string') slot.innerHTML = o.actions;
      else slot.append(o.actions);
    }
    clearInterval(nowTimer);
    if (view !== 'month') {
      const next = root.querySelector('[data-cal-scroll]');
      const hourPx = parseFloat(getComputedStyle(root).getPropertyValue('--ds-calendar-hour')) || 48;
      next.scrollTop = scrollTop ?? Math.max(0, o.scrollToHour * hourPx - 8);
      nowTimer = setInterval(() => {
        const now = root.querySelector('.ds-calendar__now');
        if (now) now.style.setProperty('--_from', minutesOf(new Date()));
      }, 60 * 1000);
    }
    if (focus && view === 'month') root.querySelector(`.ds-calendar__day[data-date="${focusKey}"]`)?.focus();
  }

  const changed = () => o.onChange?.({ view, date: new Date(date) });

  function setView(next, { focus = false } = {}) {
    if (!VIEWS.includes(next)) return;
    if (next !== view) scrollTop = null;
    view = next;
    focusKey = key(date);
    render();
    if (focus) root.querySelector(`[data-cal-view="${view}"]`)?.focus();
    changed();
  }

  function setDate(next, { focus = false } = {}) {
    date = startOfDay(new Date(next));
    focusKey = key(date);
    render({ focus });
    changed();
  }

  const step = (dir) => {
    if (view === 'month') setDate(addMonths(date, dir));
    else setDate(addDays(date, view === 'week' ? 7 * dir : dir));
  };

  const openDay = (day) => {
    if (o.onDateClick) return o.onDateClick(new Date(day));
    date = startOfDay(day);
    setView('day');
  };

  /* Eventos do DOM */

  const findEvent = (el) => events.find((e) => String(e.id) === el.dataset.eventId);

  const onClick = (event) => {
    const act = event.target.closest('[data-cal]')?.dataset.cal;
    if (act === 'today') return setDate(new Date());
    if (act === 'prev') return step(-1);
    if (act === 'next') return step(1);
    const v = event.target.closest('[data-cal-view]')?.dataset.calView;
    if (v) return setView(v);
    const open = event.target.closest('[data-cal-open]');
    if (open) return openDay(fromKey(open.dataset.calOpen));
    const chip = event.target.closest('[data-event-id]');
    if (chip) {
      const found = findEvent(chip);
      if (found && o.eventDetails) {
        event.stopPropagation();
        return openDetails(chip, found);
      }
      if (found && o.onEventClick) return o.onEventClick({ ...found });
    }
    const slotCol = event.target.closest('.ds-calendar__col[data-slots]');
    if (slotCol && event.target === slotCol) {
      const r = slotCol.getBoundingClientRect();
      const minutes = Math.floor(((event.clientY - r.top) / hourPx()) * 60 / Math.max(15, snapMin())) * Math.max(15, snapMin());
      const startAt = new Date(+fromKey(slotCol.dataset.colDate) + minutes * 60000);
      return o.onSlotCreate({ start: startAt, end: new Date(+startAt + o.slotDuration * 60000), allDay: false });
    }
    const cell = event.target.closest('.ds-calendar__day');
    if (cell) {
      focusKey = cell.dataset.date;
      openDay(fromKey(cell.dataset.date));
    }
  };

  const onKeydown = (event) => {
    const views = event.target.closest('.ds-calendar__views');
    if (views) {
      const delta = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
      if (!delta) return;
      event.preventDefault();
      const i = o.views.indexOf(view);
      setView(o.views[(i + delta + o.views.length) % o.views.length], { focus: true });
      return;
    }
    const cell = event.target.closest('.ds-calendar__day');
    if (!cell) return;
    const day = fromKey(cell.dataset.date);
    const ws = weekStart();
    const moves = {
      ArrowRight: () => addDays(day, 1),
      ArrowLeft: () => addDays(day, -1),
      ArrowDown: () => addDays(day, 7),
      ArrowUp: () => addDays(day, -7),
      Home: () => startOfWeek(day, ws),
      End: () => addDays(startOfWeek(day, ws), 6),
      PageDown: () => addMonths(day, 1),
      PageUp: () => addMonths(day, -1),
    };
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openDay(day);
      return;
    }
    const move = moves[event.key];
    if (!move) return;
    event.preventDefault();
    const target = move();
    focusKey = key(target);
    if (target.getMonth() !== date.getMonth() || target.getFullYear() !== date.getFullYear()) {
      date = target;
      render({ focus: true });
      changed();
    } else {
      root.querySelectorAll('.ds-calendar__day[tabindex="0"]').forEach((c) => (c.tabIndex = -1));
      const next = root.querySelector(`.ds-calendar__day[data-date="${focusKey}"]`);
      next.tabIndex = 0;
      next.focus();
    }
  };

  // textos e datas acompanham a troca de idioma
  const onLocale = () => render();

  root.addEventListener('click', onClick);
  root.addEventListener('keydown', onKeydown);
  root.addEventListener('pointerdown', onPointerDown);
  root.addEventListener('pointermove', onPointerMove);
  root.addEventListener('pointerup', onPointerUp);
  root.addEventListener('pointercancel', onPointerUp);
  document.documentElement.addEventListener('ds:localechange', onLocale);
  render();

  return {
    get view() {
      return view;
    },
    get date() {
      return new Date(date);
    },
    setView: (v) => setView(v),
    setDate: (d) => setDate(d),
    today: () => setDate(new Date()),
    prev: () => step(-1),
    next: () => step(1),
    setEvents(list) {
      events = normalize(list, o.categories);
      render();
    },
    closeDetails: () => closeDetails(),
    destroy() {
      clearInterval(nowTimer);
      closeDetails();
      root.removeEventListener('click', onClick);
      root.removeEventListener('keydown', onKeydown);
      root.removeEventListener('pointerdown', onPointerDown);
      root.removeEventListener('pointermove', onPointerMove);
      root.removeEventListener('pointerup', onPointerUp);
      root.removeEventListener('pointercancel', onPointerUp);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
      root.innerHTML = '';
      root.classList.remove('ds-calendar');
      delete root.dataset.view;
    },
  };
}
