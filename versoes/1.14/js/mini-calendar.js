/**
 * Mini calendário — o mês do Seletor de data sempre aberto, para a lateral de uma agenda.
 *
 *   <div id="mini"></div>
 *
 *   const mini = createMiniCalendar(document.querySelector('#mini'), {
 *     value: new Date(),                          // o dia escolhido
 *     highlight: { start: segunda, end: sexta },  // opcional: um trecho em destaque (a semana vista na agenda)
 *     min, max,                                   // limites (inclusive)
 *     onChange: (date) => agenda.setDate(date),
 *   });
 *   mini.value; mini.setValue(d); mini.setHighlight({ start, end }); mini.destroy();
 *
 * Mesma grade, mesmo teclado e mesmo visual do painel do Seletor de data: setas andam um dia ou uma semana,
 * Home/End vão ao começo e ao fim da semana, PageUp/PageDown trocam de mês e Enter escolhe.
 */
import { icon } from '../icons/icons.js';
import { msg, locale, dateFormat } from './i18n.js';
import { localeWeekStart } from './calendar.js';

const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const addMonths = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, 1);
const sameDay = (a, b) => Boolean(a && b) && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const fromIso = (k) => {
  const [y, m, d] = k.split('-').map(Number);
  return new Date(y, m - 1, d);
};
const capitalize = (s) => s.charAt(0).toLocaleUpperCase(locale()) + s.slice(1);

export function createMiniCalendar(root, options = {}) {
  const o = { ...options };
  let value = o.value ? startOfDay(new Date(o.value)) : null;
  let highlight = o.highlight ?? null;
  let focusDay = value ?? startOfDay(new Date());
  let view = new Date(focusDay.getFullYear(), focusDay.getMonth(), 1);
  const min = o.min ? startOfDay(new Date(o.min)) : null;
  const max = o.max ? startOfDay(new Date(o.max)) : null;
  const inRange = (d) => (!min || d >= min) && (!max || d <= max);

  root.classList.add('ds-picker', 'ds-picker--inline');

  function render({ focus = false } = {}) {
    const start = localeWeekStart();
    const first = view;
    const offset = (first.getDay() - start + 7) % 7;
    const days = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
    const weekdays = Array.from({ length: 7 }, (_, i) => addDays(new Date(2026, 10, 1 + start), i));
    const narrow = dateFormat({ weekday: 'narrow' });
    const long = dateFormat({ weekday: 'long' });
    const full = dateFormat({ weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    const today = new Date();
    const hs = highlight?.start ? startOfDay(new Date(highlight.start)) : null;
    const he = highlight?.end ? startOfDay(new Date(highlight.end)) : null;
    const rows = [];
    for (let i = 0; i < offset + days; i += 7) {
      const cells = [];
      for (let c = 0; c < 7; c++) {
        const n = i + c - offset + 1;
        if (n < 1 || n > days) {
          cells.push('<td role="presentation"></td>');
          continue;
        }
        const d = new Date(first.getFullYear(), first.getMonth(), n);
        const lit = hs && he && d >= hs && d <= he ? (sameDay(hs, he) ? 'single' : sameDay(d, hs) || c === 0 ? 'start' : sameDay(d, he) || c === 6 ? 'end' : 'middle') : '';
        cells.push(`<td role="gridcell" data-cell="${iso(d)}" aria-selected="${sameDay(d, value)}"${lit ? ` data-highlight="${lit}"` : ''}>
          <button type="button" class="ds-picker__day" data-day="${iso(d)}" tabindex="${sameDay(d, focusDay) ? 0 : -1}" aria-label="${capitalize(full.format(d))}"${sameDay(d, today) ? ' aria-current="date"' : ''}${inRange(d) ? '' : ' aria-disabled="true"'}>${n}</button>
        </td>`);
      }
      rows.push(`<tr role="row">${cells.join('')}</tr>`);
    }
    const title = capitalize(dateFormat({ month: 'long', year: 'numeric' }).format(first));
    const canPrev = !min || first > new Date(min.getFullYear(), min.getMonth(), 1);
    const canNext = !max || addMonths(first, 1) <= max;
    root.innerHTML = `
      <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-picker__nav ds-picker__nav--prev" data-nav="-1" aria-label="${msg('calendar.prev.month')}"${canPrev ? '' : ' disabled'}>${icon('chevron-left', { size: 18 })}</button>
      <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-picker__nav ds-picker__nav--next" data-nav="1" aria-label="${msg('calendar.next.month')}"${canNext ? '' : ' disabled'}>${icon('chevron-right', { size: 18 })}</button>
      <div class="ds-picker__months"><div class="ds-picker__month">
        <p class="ds-picker__title" aria-live="polite">${title}</p>
        <table class="ds-picker__grid" role="grid" aria-label="${title}">
          <thead><tr role="row">${weekdays.map((w) => `<th scope="col" role="columnheader" abbr="${long.format(w)}"><span aria-hidden="true">${narrow.format(w).toLocaleUpperCase(locale())}</span><span class="ds-visually-hidden">${long.format(w)}</span></th>`).join('')}</tr></thead>
          <tbody>${rows.join('')}</tbody>
        </table>
      </div></div>`;
    if (focus) root.querySelector(`[data-day="${iso(focusDay)}"]`)?.focus({ preventScroll: true });
  }

  function choose(d) {
    if (!inRange(d)) return;
    value = d;
    focusDay = d;
    render({ focus: true });
    o.onChange?.(new Date(d));
  }

  function moveFocus(d) {
    if (min && d < min) d = min;
    if (max && d > max) d = max;
    focusDay = d;
    if (d.getMonth() !== view.getMonth() || d.getFullYear() !== view.getFullYear()) view = new Date(d.getFullYear(), d.getMonth(), 1);
    render({ focus: true });
  }

  const onClick = (event) => {
    const nav = event.target.closest('[data-nav]');
    if (nav && !nav.disabled) {
      view = addMonths(view, Number(nav.dataset.nav));
      focusDay = new Date(view);
      render();
      root.querySelector(`[data-nav="${nav.dataset.nav}"]:not(:disabled)`)?.focus({ preventScroll: true });
      return;
    }
    const day = event.target.closest('[data-day]');
    if (day && day.getAttribute('aria-disabled') !== 'true') choose(fromIso(day.dataset.day));
  };

  const onKey = (event) => {
    const day = event.target.closest('[data-day]');
    if (!day) return;
    const d = fromIso(day.dataset.day);
    const ws = localeWeekStart();
    const weekStart = addDays(d, -((d.getDay() - ws + 7) % 7));
    const moves = {
      ArrowRight: () => addDays(d, 1),
      ArrowLeft: () => addDays(d, -1),
      ArrowDown: () => addDays(d, 7),
      ArrowUp: () => addDays(d, -7),
      Home: () => weekStart,
      End: () => addDays(weekStart, 6),
      PageDown: () => new Date(d.getFullYear(), d.getMonth() + 1, Math.min(d.getDate(), 28)),
      PageUp: () => new Date(d.getFullYear(), d.getMonth() - 1, Math.min(d.getDate(), 28)),
    };
    if (moves[event.key]) {
      event.preventDefault();
      moveFocus(moves[event.key]());
    }
  };
  const onLocale = () => render();

  root.addEventListener('click', onClick);
  root.addEventListener('keydown', onKey);
  document.documentElement.addEventListener('ds:localechange', onLocale);
  render();

  return {
    el: root,
    get value() {
      return value ? new Date(value) : null;
    },
    setValue(next) {
      value = next ? startOfDay(new Date(next)) : null;
      if (value) {
        focusDay = value;
        view = new Date(value.getFullYear(), value.getMonth(), 1);
      }
      render();
    },
    setHighlight(next) {
      highlight = next ?? null;
      render();
    },
    destroy() {
      root.removeEventListener('click', onClick);
      root.removeEventListener('keydown', onKey);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
      root.classList.remove('ds-picker', 'ds-picker--inline');
      root.innerHTML = '';
    },
  };
}
