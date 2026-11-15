/**
 * Seletor de horário — um campo de texto com uma lista de horários.
 *
 *   <div class="ds-field"><input class="ds-field__input" id="inicio" name="inicio" type="text"></div>
 *
 *   const picker = createTimePicker(document.querySelector('#inicio'), {
 *     value: '14:30',   // HH:MM (24 h)
 *     step: 15,         // minutos entre as opções da lista
 *     min: '08:00', max: '18:00',
 *     onChange: (value) => …,
 *   });
 *   picker.value; picker.setValue('09:00'); picker.destroy();
 *
 * O formulário recebe sempre HH:MM, num input oculto com o name do campo; a tela mostra o formato do idioma
 * (14:30 ou 2:30 PM). Aceita digitar 1430, 14h30, 2:30 pm.
 * Padrão ARIA: combobox com listbox. Teclado: ↓/↑ abrem e movem, Home/End (lista aberta), Enter escolhe, Esc fecha.
 */
import { icon } from '../icons/icons.js';
import { msg, locale } from './i18n.js';
import { placePanel, panelHost, inheritTheme, hiddenValue, setFieldError } from './field-support.js';

let uid = 0;

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};
const toValue = (minutes) => `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;

const format = (minutes) => new Intl.DateTimeFormat(locale(), { hour: '2-digit', minute: '2-digit' }).format(new Date(2026, 0, 1, Math.floor(minutes / 60), minutes % 60));

/** “1430”, “14h30”, “2:30 pm”, “9” → minutos do dia. null se não for um horário. */
function parse(text) {
  const m = text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .match(/^(\d{1,2})(?:[:h.]?(\d{2}))?h?([ap])?\.?(?:m\.?)?$/);
  if (!m) return null;
  let h = Number(m[1]);
  const min = Number(m[2] ?? 0);
  if (min > 59) return null;
  if (m[3]) {
    if (h < 1 || h > 12) return null;
    h = (h % 12) + (m[3] === 'p' ? 12 : 0);
  }
  return h > 23 ? null : h * 60 + min;
}

export function createTimePicker(input, options = {}) {
  const o = { step: 15, ...options };
  const id = `ds-timepicker-${++uid}`;
  const min = o.min ? toMinutes(o.min) : 0;
  const max = o.max ? toMinutes(o.max) : 24 * 60 - 1;
  const field = input.closest('.ds-field');
  const hidden = input.name ? hiddenValue(input) : null;
  if (!input.id) input.id = id;
  input.autocomplete = 'off';
  input.setAttribute('role', 'combobox');
  input.setAttribute('aria-autocomplete', 'none');
  input.setAttribute('aria-expanded', 'false');
  input.setAttribute('aria-controls', id);

  let value = o.value ? toMinutes(o.value) : null;
  let active = -1;

  const times = [];
  for (let t = min; t <= max; t += o.step) times.push(t);

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'ds-icon-btn ds-icon-btn--sm ds-field__action';
  button.tabIndex = -1;
  button.innerHTML = icon('clock', { size: 18 });
  button.disabled = input.disabled;
  input.after(button);

  const list = document.createElement('div');
  list.className = 'ds-picker ds-picker--list';
  list.id = id;
  list.setAttribute('role', 'listbox');

  const isOpen = () => list.hasAttribute('data-open');
  const emit = () => {
    o.onChange?.(value === null ? null : toValue(value));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  };

  function syncField() {
    input.value = value === null ? '' : format(value);
    if (hidden) hidden.value = value === null ? '' : toValue(value);
    setFieldError(input, null);
  }

  function syncTexts() {
    if (!o.placeholder) input.placeholder = '--:--';
    button.setAttribute('aria-label', msg('time.open'));
    list.setAttribute('aria-label', msg('time.list'));
  }

  function commitText() {
    const text = input.value.trim();
    if (!text) {
      if (value !== null) {
        value = null;
        syncField();
        emit();
      } else setFieldError(input, null);
      return;
    }
    const minutes = parse(text);
    const fail = (message) => {
      if (hidden) hidden.value = '';
      setFieldError(input, message);
    };
    if (minutes === null) return fail(msg('time.invalid', format(14 * 60 + 30)));
    if (minutes < min) return fail(msg('time.min', format(min)));
    if (minutes > max) return fail(msg('time.max', format(max)));
    const changed = minutes !== value;
    value = minutes;
    syncField();
    if (changed) emit();
  }

  function setActive(index) {
    active = Math.max(0, Math.min(index, times.length - 1));
    list.querySelectorAll('[role="option"]').forEach((el, i) => el.toggleAttribute('data-active', i === active));
    const el = list.children[active];
    if (!el) return;
    input.setAttribute('aria-activedescendant', el.id);
    // rola só a lista, nunca a página
    if (el.offsetTop < list.scrollTop) list.scrollTop = el.offsetTop - 6;
    else if (el.offsetTop + el.offsetHeight > list.scrollTop + list.clientHeight) list.scrollTop = el.offsetTop + el.offsetHeight - list.clientHeight + 6;
  }

  function open() {
    if (isOpen() || input.disabled) return;
    inheritTheme(list, input);
    list.innerHTML = times
      .map((t, i) => `<div class="ds-picker__option" role="option" id="${id}-${i}" data-index="${i}" aria-selected="${t === value}">${format(t)}${icon('check', { size: 16, className: 'ds-picker__check' })}</div>`)
      .join('');
    panelHost(input).append(list);
    list.style.minWidth = `${Math.min(field.offsetWidth, 240)}px`;
    placePanel(list, field);
    list.setAttribute('data-open', '');
    input.setAttribute('aria-expanded', 'true');
    // abre no horário escolhido; sem ele, no primeiro horário depois do que foi digitado ou de agora
    const typed = parse(input.value);
    const now = new Date();
    const seed = value ?? typed ?? now.getHours() * 60 + now.getMinutes();
    const index = times.findIndex((t) => t >= seed);
    setActive(index === -1 ? times.length - 1 : index);
    const el = list.children[active];
    if (el) list.scrollTop = el.offsetTop - (list.clientHeight - el.offsetHeight) / 2;
    document.addEventListener('pointerdown', onOutside);
    addEventListener('resize', onReposition);
    document.addEventListener('scroll', onReposition, true);
  }

  function close() {
    if (!isOpen()) return;
    list.removeAttribute('data-open');
    list.remove();
    input.setAttribute('aria-expanded', 'false');
    input.removeAttribute('aria-activedescendant');
    active = -1;
    document.removeEventListener('pointerdown', onOutside);
    removeEventListener('resize', onReposition);
    document.removeEventListener('scroll', onReposition, true);
  }

  const onOutside = (event) => {
    if (!list.contains(event.target) && !field.contains(event.target)) close();
  };
  const onReposition = (event) => {
    if (event?.target && list.contains(event.target)) return;
    if (field.isConnected) placePanel(list, field);
    else close();
  };

  function choose(index) {
    const changed = times[index] !== value;
    value = times[index];
    syncField();
    close();
    if (changed) emit();
  }

  list.addEventListener('pointerdown', (event) => event.preventDefault()); // o foco fica no campo
  list.addEventListener('click', (event) => {
    const option = event.target.closest('[role="option"]');
    if (option) choose(Number(option.dataset.index));
  });
  list.addEventListener('pointermove', (event) => {
    const option = event.target.closest('[role="option"]');
    if (option && Number(option.dataset.index) !== active) {
      active = Number(option.dataset.index);
      list.querySelectorAll('[data-active]').forEach((el) => el.removeAttribute('data-active'));
      option.setAttribute('data-active', '');
      input.setAttribute('aria-activedescendant', option.id);
    }
  });

  const onKey = (event) => {
    const page = Math.max(1, Math.round(60 / o.step));
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!isOpen()) open();
      else setActive(active + (event.key === 'ArrowDown' ? 1 : -1));
    } else if (!isOpen()) {
      if (event.key === 'Enter') commitText();
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (active >= 0) choose(active);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      close();
    } else if (event.key === 'PageDown' || event.key === 'PageUp') {
      event.preventDefault();
      setActive(active + (event.key === 'PageDown' ? page : -page));
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      setActive(event.key === 'Home' ? 0 : times.length - 1);
    } else if (event.key === 'Tab') close();
  };
  const onInput = () => {
    if (!isOpen()) return;
    const typed = parse(input.value);
    if (typed === null) return;
    const index = times.findIndex((t) => t >= typed);
    if (index !== -1) setActive(index);
  };
  const onBlur = () => {
    close();
    commitText();
  };
  const onButton = () => {
    if (isOpen()) close();
    else {
      input.focus({ preventScroll: true });
      open();
    }
  };
  const onLocale = () => {
    syncTexts();
    if (!input.dataset.dsInvalid) input.value = value === null ? '' : format(value);
  };

  input.addEventListener('keydown', onKey);
  input.addEventListener('input', onInput);
  input.addEventListener('blur', onBlur);
  button.addEventListener('pointerdown', (event) => event.preventDefault());
  button.addEventListener('click', onButton);
  document.documentElement.addEventListener('ds:localechange', onLocale);

  syncTexts();
  syncField();

  return {
    get value() {
      return value === null ? null : toValue(value);
    },
    setValue(next) {
      value = next ? toMinutes(next) : null;
      syncField();
    },
    open,
    close,
    destroy() {
      close();
      button.remove();
      input.removeEventListener('keydown', onKey);
      input.removeEventListener('input', onInput);
      input.removeEventListener('blur', onBlur);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
    },
  };
}
