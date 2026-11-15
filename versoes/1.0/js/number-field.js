/**
 * Campo numérico — digitar ou usar − e +, com limites, passo e o formato do idioma.
 *
 *   <div class="ds-field ds-number"><input class="ds-field__input" id="qtd" name="qtd" type="text"></div>
 *
 *   const field = createNumberField(document.querySelector('#qtd'), {
 *     value: 1, min: 0, max: 99, step: 1,
 *     format: { style: 'currency', currency: 'BRL' },   // opções de Intl.NumberFormat (padrão: número simples)
 *     onChange: (value) => …,
 *   });
 *   field.value; field.setValue(10); field.destroy();
 *
 * O formulário recebe o número puro (1234.5), num input oculto com o name do campo. Ao sair do campo, o valor
 * volta para dentro dos limites. Padrão ARIA: spinbutton. Teclado: ↑/↓ um passo, PageUp/PageDown dez passos,
 * Home/End vão aos limites. Os botões ficam fora da ordem do Tab, porque as setas já fazem o mesmo.
 */
import { icon } from '../icons/icons.js';
import { msg, numberFormat } from './i18n.js';
import { hiddenValue } from './field-support.js';

const REPEAT_DELAY = 400;
const REPEAT_EVERY = 80;

export function createNumberField(input, options = {}) {
  const o = { step: 1, ...options };
  const field = input.closest('.ds-field');
  const hidden = input.name ? hiddenValue(input) : null;
  input.setAttribute('role', 'spinbutton');
  input.inputMode = Number.isInteger(o.step) && !o.format ? 'numeric' : 'decimal';
  input.autocomplete = 'off';

  let value = o.value ?? null;
  const decimals = () => Math.max(String(o.step).split('.')[1]?.length ?? 0, o.format?.maximumFractionDigits ?? 0);
  const round = (n) => Number(n.toFixed(Math.max(decimals(), 0)));
  const clamp = (n) => Math.min(o.max ?? Infinity, Math.max(o.min ?? -Infinity, n));
  const format = (n) => numberFormat({ maximumFractionDigits: decimals(), ...o.format }).format(n);

  const makeButton = (delta, name) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'ds-number__btn';
    b.tabIndex = -1;
    b.dataset.delta = delta;
    b.innerHTML = icon(name, { size: 16 });
    return b;
  };
  const minus = makeButton(-1, 'minus');
  const plus = makeButton(1, 'plus');
  input.before(minus);
  input.after(plus);

  function sync() {
    input.value = value === null ? '' : format(value);
    if (hidden) hidden.value = value === null ? '' : String(value);
    if (value === null) input.removeAttribute('aria-valuenow');
    else input.setAttribute('aria-valuenow', value);
    if (value !== null && o.format) input.setAttribute('aria-valuetext', format(value));
    else input.removeAttribute('aria-valuetext');
    if (o.min !== undefined) input.setAttribute('aria-valuemin', o.min);
    if (o.max !== undefined) input.setAttribute('aria-valuemax', o.max);
    minus.disabled = input.disabled || (o.min !== undefined && value !== null && value <= o.min);
    plus.disabled = input.disabled || (o.max !== undefined && value !== null && value >= o.max);
  }

  function syncTexts() {
    minus.setAttribute('aria-label', msg('number.decrease'));
    plus.setAttribute('aria-label', msg('number.increase'));
  }

  function set(next) {
    const changed = next !== value;
    value = next;
    sync();
    if (changed) {
      o.onChange?.(value);
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  const stepBy = (steps) => set(clamp(round((value ?? o.min ?? 0) + (value === null ? 0 : steps * o.step))));

  /** “1.234,5”, “1,234.5” ou “R$ 12,50” → número, conforme os separadores do idioma. */
  function parse(text) {
    const parts = numberFormat({ minimumFractionDigits: 1 }).formatToParts(1234.5);
    const group = parts.find((p) => p.type === 'group')?.value ?? '';
    const decimal = parts.find((p) => p.type === 'decimal')?.value ?? '.';
    const clean = text.split(group).join('').replace(decimal, '.').replace(/[^\d.-]/g, '');
    const n = Number(clean);
    return clean && !Number.isNaN(n) ? n : null;
  }

  const commit = () => {
    const text = input.value.trim();
    const n = text ? parse(text) : null;
    if (text && n === null) return sync(); // não é número: volta ao último valor
    set(n === null ? null : clamp(round(n)));
  };

  const onKey = (event) => {
    const moves = {
      ArrowUp: () => stepBy(1),
      ArrowDown: () => stepBy(-1),
      PageUp: () => stepBy(10),
      PageDown: () => stepBy(-10),
      Home: () => o.min !== undefined && set(o.min),
      End: () => o.max !== undefined && set(o.max),
    };
    if (moves[event.key]) {
      event.preventDefault();
      commitIfTyped();
      moves[event.key]();
    } else if (event.key === 'Enter') commit();
  };
  const commitIfTyped = () => {
    if (input.value !== (value === null ? '' : format(value))) commit();
  };

  // segurar o botão repete o passo
  let timer = null;
  const stop = () => {
    clearTimeout(timer);
    clearInterval(timer);
    timer = null;
    document.removeEventListener('pointerup', stop);
    document.removeEventListener('pointercancel', stop);
  };
  const onPress = (event) => {
    const b = event.target.closest('[data-delta]');
    if (!b || b.disabled || event.button !== 0) return;
    event.preventDefault();
    input.focus({ preventScroll: true });
    commitIfTyped();
    const delta = Number(b.dataset.delta);
    stepBy(delta);
    timer = setTimeout(() => {
      timer = setInterval(() => {
        stepBy(delta);
        if (b.disabled) stop();
      }, REPEAT_EVERY);
    }, REPEAT_DELAY);
    document.addEventListener('pointerup', stop);
    document.addEventListener('pointercancel', stop);
  };
  const onLocale = () => {
    syncTexts();
    sync();
  };

  input.addEventListener('keydown', onKey);
  input.addEventListener('blur', commit);
  field.addEventListener('pointerdown', onPress);
  document.documentElement.addEventListener('ds:localechange', onLocale);

  syncTexts();
  sync();

  return {
    get value() {
      return value;
    },
    setValue(next) {
      value = next === null ? null : clamp(round(next));
      sync();
    },
    destroy() {
      stop();
      minus.remove();
      plus.remove();
      input.removeEventListener('keydown', onKey);
      input.removeEventListener('blur', commit);
      field.removeEventListener('pointerdown', onPress);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
    },
  };
}
