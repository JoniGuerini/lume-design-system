/**
 * Seletor de data e período — um campo de texto que também abre um calendário.
 *
 *   <div class="ds-form-field">
 *     <label class="ds-form-field__label" for="entrega">Entrega</label>
 *     <div class="ds-field"><input class="ds-field__input" id="entrega" name="entrega" type="text"></div>
 *   </div>
 *
 *   const picker = createDatePicker(document.querySelector('#entrega'), {
 *     mode: 'single',            // 'single' | 'range'
 *     value: new Date(),         // Date; no período, { start, end }
 *     min: new Date(), max: …,   // limites (inclusive)
 *     months: 2,                 // meses lado a lado no painel (padrão: 1; no período, 2 quando couber)
 *     onChange: (value) => …,
 *   });
 *   picker.value; picker.setValue(d); picker.open(); picker.close(); picker.destroy();
 *
 * O formulário recebe a data em ISO num input oculto com o name do campo: 2026-11-08 ou
 * 2026-11-08/2026-11-15. O campo mostra a data no formato do idioma, e dá para digitar.
 *
 * Teclado no campo: ↓ abre. No calendário: setas andam um dia ou uma semana, Home/End vão ao começo e ao
 * fim da semana, PageUp/PageDown trocam de mês (com Shift, de ano), Enter escolhe, Esc fecha.
 */
import { icon } from '../icons/icons.js';
import { msg, locale, dateFormat } from './i18n.js';
import { localeWeekStart } from './calendar.js';
import { placePanel, panelHost, inheritTheme, hiddenValue, setFieldError } from './field-support.js';

let uid = 0;

const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const addMonths = (d, n) => {
  const target = new Date(d.getFullYear(), d.getMonth() + n, 1);
  const last = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate();
  return new Date(target.getFullYear(), target.getMonth(), Math.min(d.getDate(), last));
};
const sameDay = (a, b) => Boolean(a && b) && +startOfDay(a) === +startOfDay(b);
const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const fromIso = (k) => {
  const [y, m, d] = k.split('-').map(Number);
  return new Date(y, m - 1, d);
};
const capitalize = (s) => s.charAt(0).toLocaleUpperCase(locale()) + s.slice(1);

/** Ordem de dia, mês e ano no idioma atual, para ler o que a pessoa digita. */
const order = () =>
  dateFormat({ day: '2-digit', month: '2-digit', year: 'numeric' })
    .formatToParts(new Date(2026, 10, 8))
    .filter((p) => ['day', 'month', 'year'].includes(p.type))
    .map((p) => p.type);

const short = (d) => dateFormat({ day: '2-digit', month: '2-digit', year: 'numeric' }).format(d);

/** “08/11/2026” → Date, na ordem do idioma; aceita ano com 2 dígitos. null se a data não existe. */
function parseOne(text) {
  const nums = text.match(/\d+/g);
  if (nums?.length !== 3) return null;
  const parts = {};
  order().forEach((type, i) => (parts[type] = Number(nums[i])));
  const year = parts.year < 100 ? 2000 + parts.year : parts.year;
  const d = new Date(year, parts.month - 1, parts.day);
  return d.getMonth() === parts.month - 1 && d.getDate() === parts.day ? d : null;
}

const SEPARATOR = /\s+[-–—]\s+|\s+(?:a|to|até|hasta)\s+/i;

export function createDatePicker(input, options = {}) {
  const o = { mode: 'single', ...options };
  const range = o.mode === 'range';
  const id = `ds-datepicker-${++uid}`;
  const min = o.min ? startOfDay(new Date(o.min)) : null;
  const max = o.max ? startOfDay(new Date(o.max)) : null;
  const inRange = (d) => (!min || d >= min) && (!max || d <= max);
  const field = input.closest('.ds-field');
  const hidden = input.name ? hiddenValue(input) : null;
  if (!input.id) input.id = id;
  input.autocomplete = 'off';

  let value = o.value ? (range ? { start: startOfDay(new Date(o.value.start)), end: o.value.end ? startOfDay(new Date(o.value.end)) : null } : startOfDay(new Date(o.value))) : null;
  let draft = null; // início do período enquanto falta escolher o fim
  let hover = null;
  let view = null; // primeiro mês visível
  let focusDay = null;

  /* ───────── Campo ───────── */

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'ds-icon-btn ds-icon-btn--sm ds-field__action';
  button.innerHTML = icon('calendar', { size: 18 });
  button.setAttribute('aria-haspopup', 'dialog');
  button.setAttribute('aria-expanded', 'false');
  button.disabled = input.disabled;
  input.after(button);

  const example = () => short(new Date(2026, 10, 28));
  const placeholder = () => {
    const [d, m, y] = msg('date.letters');
    const one = order().map((t) => ({ day: d + d, month: m + m, year: y + y + y + y })[t]).join(short(new Date(2026, 10, 8)).match(/\D/)?.[0] ?? '/');
    return range ? `${one} – ${one}` : one;
  };

  const display = () => {
    if (!value) return '';
    if (!range) return short(value);
    return value.end ? `${short(value.start)} – ${short(value.end)}` : short(value.start);
  };
  const serialize = () => (!value ? '' : range ? (value.end ? `${iso(value.start)}/${iso(value.end)}` : '') : iso(value));

  function syncField() {
    input.value = display();
    if (hidden) hidden.value = serialize();
    setFieldError(input, null);
  }

  function syncTexts() {
    if (!o.placeholder) input.placeholder = placeholder();
    button.setAttribute('aria-label', msg('date.open'));
  }

  function emit() {
    o.onChange?.(value);
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }

  /** Lê o que foi digitado. Devolve false e mostra o erro se não der para entender. */
  function commitText() {
    const text = input.value.trim();
    if (!text) {
      if (value) {
        value = null;
        syncField();
        emit();
      } else setFieldError(input, null);
      return true;
    }
    const pieces = range ? text.split(SEPARATOR) : [text];
    const dates = pieces.map(parseOne);
    const fail = (message) => {
      if (hidden) hidden.value = '';
      setFieldError(input, message);
      return false;
    };
    if (dates.some((d) => !d) || (range && dates.length !== 2)) return fail(msg(range ? 'date.invalidRange' : 'date.invalid', example()));
    if (dates.some((d) => min && d < min)) return fail(msg('date.min', short(min)));
    if (dates.some((d) => max && d > max)) return fail(msg('date.max', short(max)));
    const next = range ? { start: dates[0] <= dates[1] ? dates[0] : dates[1], end: dates[0] <= dates[1] ? dates[1] : dates[0] } : dates[0];
    const changed = serialize() !== (range ? `${iso(next.start)}/${iso(next.end)}` : iso(next));
    value = next;
    syncField();
    if (changed) emit();
    return true;
  }

  /* ───────── Painel ───────── */

  const panel = document.createElement('div');
  panel.className = 'ds-picker';
  panel.id = id;
  panel.setAttribute('role', 'dialog');
  button.setAttribute('aria-controls', id);

  const isOpen = () => panel.hasAttribute('data-open');
  const monthCount = () => o.months ?? (range && innerWidth >= 680 ? 2 : 1);
  const selectionStart = () => draft ?? (range ? value?.start : value) ?? null;

  function monthTable(first) {
    const start = localeWeekStart();
    const offset = (first.getDay() - start + 7) % 7;
    const days = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
    const weekdays = Array.from({ length: 7 }, (_, i) => addDays(new Date(2026, 10, 1 + start), i));
    const narrow = dateFormat({ weekday: 'narrow' });
    const long = dateFormat({ weekday: 'long' });
    const full = dateFormat({ weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    const today = new Date();
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
        const key = iso(d);
        const selected = range ? (draft ? sameDay(d, draft) : sameDay(d, value?.start) || sameDay(d, value?.end)) : sameDay(d, value);
        const disabled = !inRange(d);
        cells.push(`<td role="gridcell" data-cell="${key}" aria-selected="${selected}">
          <button type="button" class="ds-picker__day" data-day="${key}" tabindex="${sameDay(d, focusDay) ? 0 : -1}" aria-label="${capitalize(full.format(d))}"${sameDay(d, today) ? ' aria-current="date"' : ''}${disabled ? ' aria-disabled="true"' : ''}>${n}</button>
        </td>`);
      }
      rows.push(`<tr role="row">${cells.join('')}</tr>`);
    }
    const title = capitalize(dateFormat({ month: 'long', year: 'numeric' }).format(first));
    return `<div class="ds-picker__month">
      <p class="ds-picker__title" aria-live="polite">${title}</p>
      <table class="ds-picker__grid" role="grid" aria-label="${title}">
        <thead><tr role="row">${weekdays.map((w) => `<th scope="col" role="columnheader" abbr="${long.format(w)}"><span aria-hidden="true">${narrow.format(w).toLocaleUpperCase(locale())}</span><span class="ds-visually-hidden">${long.format(w)}</span></th>`).join('')}</tr></thead>
        <tbody>${rows.join('')}</tbody>
      </table>
    </div>`;
  }

  function render() {
    const canPrev = !min || view > new Date(min.getFullYear(), min.getMonth(), 1);
    const last = addMonths(view, monthCount() - 1);
    const canNext = !max || new Date(last.getFullYear(), last.getMonth() + 1, 1) <= max;
    const today = startOfDay(new Date());
    panel.setAttribute('aria-label', msg(range ? 'date.labelRange' : 'date.label'));
    panel.innerHTML = `
      <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-picker__nav ds-picker__nav--prev" data-nav="-1" aria-label="${msg('calendar.prev.month')}"${canPrev ? '' : ' disabled'}>${icon('chevron-left', { size: 18 })}</button>
      <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-picker__nav ds-picker__nav--next" data-nav="1" aria-label="${msg('calendar.next.month')}"${canNext ? '' : ' disabled'}>${icon('chevron-right', { size: 18 })}</button>
      <div class="ds-picker__months">${Array.from({ length: monthCount() }, (_, i) => monthTable(addMonths(view, i))).join('')}</div>
      <div class="ds-picker__footer">
        ${inRange(today) && !range ? `<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-today>${msg('calendar.today')}</button>` : ''}
        ${range ? `<p class="ds-picker__hint" data-hint>${draft ? msg('date.rangeEnd') : msg('date.rangeStart')}</p>` : ''}
        <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm ds-picker__clear" data-clear${value || draft ? '' : ' disabled'}>${msg('date.clear')}</button>
      </div>`;
    paintRange();
  }

  /** Pinta o intervalo sem redesenhar: início, meio e fim, incluindo a prévia do mouse. */
  function paintRange() {
    if (!range) return;
    const a = draft ?? value?.start ?? null;
    const b = draft ? hover : value?.end ?? null;
    const [from, to] = a && b ? (a <= b ? [a, b] : [b, a]) : [a, a];
    panel.querySelectorAll('[data-cell]').forEach((cell) => {
      const d = fromIso(cell.dataset.cell);
      if (from && to && d >= from && d <= to) {
        cell.dataset.range = sameDay(from, to) ? 'single' : sameDay(d, from) ? 'start' : sameDay(d, to) ? 'end' : 'middle';
      } else delete cell.dataset.range;
    });
  }

  function open() {
    if (isOpen() || input.disabled) return;
    commitText();
    const seed = selectionStart() ?? (min && new Date() < min ? min : max && new Date() > max ? max : startOfDay(new Date()));
    focusDay = seed;
    view = new Date(seed.getFullYear(), seed.getMonth(), 1);
    if (max && monthCount() > 1 && addMonths(view, monthCount() - 1) > max) view = addMonths(view, -(monthCount() - 1));
    draft = null;
    hover = null;
    inheritTheme(panel, input);
    panelHost(input).append(panel);
    render();
    placePanel(panel, field);
    panel.setAttribute('data-open', '');
    button.setAttribute('aria-expanded', 'true');
    panel.querySelector(`[data-day="${iso(focusDay)}"]`)?.focus({ preventScroll: true });
    document.addEventListener('pointerdown', onOutside);
    addEventListener('resize', onReposition);
    document.addEventListener('scroll', onReposition, true);
  }

  function close(returnFocus = true) {
    if (!isOpen()) return;
    panel.removeAttribute('data-open');
    panel.remove();
    button.setAttribute('aria-expanded', 'false');
    draft = null;
    document.removeEventListener('pointerdown', onOutside);
    removeEventListener('resize', onReposition);
    document.removeEventListener('scroll', onReposition, true);
    if (returnFocus) button.focus({ preventScroll: true });
  }

  const onOutside = (event) => {
    if (!panel.contains(event.target) && !field.contains(event.target)) close(false);
  };
  const onReposition = (event) => {
    if (event?.target && panel.contains(event.target)) return;
    if (field.isConnected) placePanel(panel, field);
    else close(false);
  };

  function moveFocus(next) {
    if (!inRange(next)) next = min && next < min ? min : max;
    focusDay = next;
    const count = monthCount();
    const lastVisible = addMonths(view, count);
    if (next < view) view = new Date(next.getFullYear(), next.getMonth(), 1);
    else if (next >= lastVisible) view = new Date(next.getFullYear(), next.getMonth() - count + 1, 1);
    render();
    placePanel(panel, field);
    panel.querySelector(`[data-day="${iso(next)}"]`)?.focus({ preventScroll: true });
  }

  function choose(d) {
    if (!inRange(d)) return;
    if (!range) {
      value = d;
      syncField();
      close(false);
      input.focus({ preventScroll: true });
      emit();
      return;
    }
    if (!draft) {
      draft = d;
      hover = d;
      focusDay = d;
      render();
      panel.querySelector(`[data-day="${iso(d)}"]`)?.focus({ preventScroll: true });
      return;
    }
    value = d >= draft ? { start: draft, end: d } : { start: d, end: draft };
    syncField();
    close(false);
    input.focus({ preventScroll: true });
    emit();
  }

  panel.addEventListener('click', (event) => {
    const day = event.target.closest('[data-day]');
    if (day) {
      if (day.getAttribute('aria-disabled') !== 'true') choose(fromIso(day.dataset.day));
      return;
    }
    const nav = event.target.closest('[data-nav]');
    if (nav) {
      const step = Number(nav.dataset.nav);
      view = addMonths(view, step);
      focusDay = new Date(view.getFullYear(), view.getMonth(), Math.min(focusDay.getDate(), 28));
      if (!inRange(focusDay)) focusDay = min && focusDay < min ? min : max;
      render();
      placePanel(panel, field);
      panel.querySelector(`[data-nav="${step}"]:not(:disabled)`)?.focus({ preventScroll: true });
      return;
    }
    if (event.target.closest('[data-today]')) choose(startOfDay(new Date()));
    if (event.target.closest('[data-clear]')) {
      value = null;
      draft = null;
      syncField();
      close(false);
      input.focus({ preventScroll: true });
      emit();
    }
  });

  panel.addEventListener('pointerover', (event) => {
    const day = event.target.closest('[data-day]');
    if (!range || !draft || !day || day.getAttribute('aria-disabled') === 'true') return;
    hover = fromIso(day.dataset.day);
    paintRange();
  });

  panel.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      close();
      return;
    }
    const day = event.target.closest('[data-day]');
    if (!day) return;
    const d = fromIso(day.dataset.day);
    const weekStart = localeWeekStart();
    const moves = {
      ArrowRight: () => addDays(d, 1),
      ArrowLeft: () => addDays(d, -1),
      ArrowDown: () => addDays(d, 7),
      ArrowUp: () => addDays(d, -7),
      Home: () => addDays(d, -((d.getDay() - weekStart + 7) % 7)),
      End: () => addDays(d, 6 - ((d.getDay() - weekStart + 7) % 7)),
      PageUp: () => addMonths(d, event.shiftKey ? -12 : -1),
      PageDown: () => addMonths(d, event.shiftKey ? 12 : 1),
    };
    if (moves[event.key]) {
      event.preventDefault();
      const next = moves[event.key]();
      if (draft) hover = next;
      moveFocus(next);
    }
  });

  // o foco saiu do painel e do campo (Tab): fecha sem puxar o foco de volta
  panel.addEventListener('focusout', (event) => {
    const to = event.relatedTarget;
    if (to && !panel.contains(to) && !field.contains(to)) close(false);
  });

  const onButton = () => (isOpen() ? close() : open());
  const onInputKey = (event) => {
    if (event.key === 'ArrowDown' && !event.altKey) {
      event.preventDefault();
      open();
    } else if (event.key === 'Enter') commitText();
  };
  const onBlur = () => {
    if (!isOpen()) commitText();
  };
  const onLocale = () => {
    syncTexts();
    if (!input.dataset.dsInvalid) input.value = display();
    if (isOpen()) render();
  };

  button.addEventListener('click', onButton);
  input.addEventListener('keydown', onInputKey);
  input.addEventListener('blur', onBlur);
  document.documentElement.addEventListener('ds:localechange', onLocale);

  syncTexts();
  syncField();

  return {
    get value() {
      return value;
    },
    setValue(next) {
      value = next ? (range ? { start: startOfDay(new Date(next.start)), end: next.end ? startOfDay(new Date(next.end)) : null } : startOfDay(new Date(next))) : null;
      syncField();
    },
    open,
    close,
    destroy() {
      close(false);
      button.remove();
      button.removeEventListener('click', onButton);
      input.removeEventListener('keydown', onInputKey);
      input.removeEventListener('blur', onBlur);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
    },
  };
}
