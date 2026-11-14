/**
 * Seletor de cor — escolher uma cor livre ou de uma paleta.
 *
 * Seletor solto, desenhado num elemento:
 *   const picker = createColorPicker(document.querySelector('.ds-color-picker'), {
 *     value: '#c97b63',
 *     swatches: ['#c97b63', { value: '#3b82f6', label: 'Azul' }],   // amostras; sem label, o nome é o hexadecimal
 *     onInput: (hex) => …,     // enquanto arrasta
 *     onChange: (hex) => …,    // ao soltar, ao escolher uma amostra ou ao confirmar o hexadecimal
 *   });
 *   picker.value; picker.setValue('#000000'); picker.destroy();
 *
 * Campo de cor, que abre o seletor num painel:
 *   <div class="ds-field"><input class="ds-field__input" id="cor" name="cor" type="text"></div>
 *   const field = createColorField(document.querySelector('#cor'), { value: '#c97b63', swatches, onChange });
 *   field.value; field.setValue('#3b82f6'); field.open(); field.close(); field.destroy();
 *
 * O valor é sempre hexadecimal em minúsculas (#rrggbb), e é o que o formulário recebe. O campo aceita digitar
 * com ou sem #, em 3 ou 6 dígitos.
 *
 * Teclado: na área, ← → mudam a saturação e ↑ ↓ o brilho; no matiz, ← → (com Shift, de 10 em 10), Home e End.
 * No campo, ↓ ou Alt+↓ abrem o painel, Esc fecha e devolve o foco.
 */
import { icon } from '../icons/icons.js';
import { msg } from './i18n.js';
import { placePanel, panelHost, inheritTheme, setFieldError } from './field-support.js';

let uid = 0;
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const escape = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

/** “c97b63”, “#C97B63”, “#abc” → “#c97b63”; null se não for uma cor. */
export function parseHex(text) {
  const m = String(text ?? '').trim().replace(/^#/, '').toLowerCase();
  if (/^[0-9a-f]{3}$/.test(m)) return `#${m.split('').map((c) => c + c).join('')}`;
  if (/^[0-9a-f]{6}$/.test(m)) return `#${m}`;
  return null;
}

const hexToRgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const rgbToHex = (rgb) => `#${rgb.map((c) => Math.round(c).toString(16).padStart(2, '0')).join('')}`;

function rgbToHsv([r, g, b]) {
  const [R, G, B] = [r / 255, g / 255, b / 255];
  const max = Math.max(R, G, B);
  const d = max - Math.min(R, G, B);
  let h = 0;
  if (d) {
    if (max === R) h = ((G - B) / d) % 6;
    else if (max === G) h = (B - R) / d + 2;
    else h = (R - G) / d + 4;
  }
  return { h: (h * 60 + 360) % 360, s: max ? d / max : 0, v: max };
}

function hsvToRgb({ h, s, v }) {
  const f = (n) => {
    const k = (n + h / 60) % 6;
    return (v - v * s * Math.max(0, Math.min(k, 4 - k, 1))) * 255;
  };
  return [f(5), f(3), f(1)];
}

/** Preto ou branco, o que tiver mais contraste sobre a cor (para a marca da amostra). */
function onColor(hex) {
  const lin = hexToRgb(hex).map((c) => {
    const x = c / 255;
    return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
  });
  const L = 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
  return (L + 0.05) / 0.05 > 1.05 / (L + 0.05) ? '#000' : '#fff';
}

const normalizeSwatches = (list = []) => list.map((s) => (typeof s === 'string' ? { value: parseHex(s), label: '' } : { value: parseHex(s.value), label: s.label ?? '' })).filter((s) => s.value);

export function createColorPicker(root, options = {}) {
  const o = { value: '#000000', swatches: [], ...options };
  root.classList.add('ds-color-picker');
  let hsv = rgbToHsv(hexToRgb(parseHex(o.value) ?? '#000000'));
  let swatches = normalizeSwatches(o.swatches);
  let lastEmitted = '';

  root.innerHTML = `<div class="ds-color-picker__area" data-part="area"><div class="ds-color-picker__thumb" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"></div></div>
    <div class="ds-color-picker__hue" data-part="hue"><div class="ds-color-picker__thumb" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="360"></div></div>
    <div class="ds-color-picker__row">
      <span class="ds-color-picker__preview" aria-hidden="true"></span>
      <div class="ds-field ds-field--sm"><span class="ds-field__affix" aria-hidden="true">#</span><input class="ds-field__input" type="text" maxlength="7" spellcheck="false" autocomplete="off"></div>
    </div>
    <div class="ds-color-picker__swatches" role="group"></div>`;

  const area = root.querySelector('[data-part="area"]');
  const hue = root.querySelector('[data-part="hue"]');
  const areaThumb = area.firstElementChild;
  const hueThumb = hue.firstElementChild;
  const hexInput = root.querySelector('.ds-field__input');
  const swatchBox = root.querySelector('.ds-color-picker__swatches');

  const hex = () => rgbToHex(hsvToRgb(hsv));
  // cinza, preto e branco não têm matiz: mantém o da alça, para ela não pular para o vermelho
  const fromHex = (h) => {
    const next = rgbToHsv(hexToRgb(h));
    return next.s && next.v ? next : { ...next, h: hsv.h };
  };
  const pct = (n) => Math.round(n * 100);

  function renderSwatches() {
    swatchBox.hidden = !swatches.length;
    swatchBox.innerHTML = swatches
      .map((s) => `<button type="button" class="ds-color-picker__swatch" data-swatch="${s.value}" style="--_swatch: ${s.value}; --_on: ${onColor(s.value)}" aria-label="${escape(s.label || s.value.toUpperCase())}" aria-pressed="false">${icon('check', { size: 14 })}</button>`)
      .join('');
  }

  function syncTexts() {
    areaThumb.setAttribute('aria-label', msg('color.area'));
    hueThumb.setAttribute('aria-label', msg('color.hue'));
    hexInput.setAttribute('aria-label', msg('color.hex'));
    swatchBox.setAttribute('aria-label', msg('color.swatches'));
  }

  function sync({ input = true } = {}) {
    const value = hex();
    root.style.setProperty('--_hue', String(Math.round(hsv.h)));
    root.style.setProperty('--_color', value);
    area.style.setProperty('--_s', String(hsv.s));
    area.style.setProperty('--_v', String(hsv.v));
    areaThumb.setAttribute('aria-valuenow', String(pct(hsv.s)));
    areaThumb.setAttribute('aria-valuetext', msg('color.areaValue', pct(hsv.s), pct(hsv.v)));
    hueThumb.setAttribute('aria-valuenow', String(Math.round(hsv.h)));
    hueThumb.setAttribute('aria-valuetext', `${Math.round(hsv.h)}°`);
    if (input) hexInput.value = value.slice(1).toUpperCase();
    swatchBox.querySelectorAll('[data-swatch]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.swatch === value)));
  }

  const emitInput = () => o.onInput?.(hex());
  const emitChange = () => {
    const value = hex();
    if (value === lastEmitted) return;
    lastEmitted = value;
    o.onChange?.(value);
  };

  /* Arrastar na área e no matiz */
  function drag(el, update) {
    const move = (event) => {
      const r = el.getBoundingClientRect();
      update(clamp((event.clientX - r.left) / r.width, 0, 1), clamp((event.clientY - r.top) / r.height, 0, 1));
      sync();
      emitInput();
    };
    const onDown = (event) => {
      if (event.button !== 0) return;
      event.preventDefault();
      el.setPointerCapture(event.pointerId);
      el.setAttribute('data-dragging', '');
      el.firstElementChild.focus({ preventScroll: true });
      move(event);
      const up = () => {
        el.removeAttribute('data-dragging');
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerup', up);
        el.removeEventListener('pointercancel', up);
        emitChange();
      };
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerup', up);
      el.addEventListener('pointercancel', up);
    };
    el.addEventListener('pointerdown', onDown);
    return () => el.removeEventListener('pointerdown', onDown);
  }

  const undrag = [
    drag(area, (x, y) => {
      hsv = { ...hsv, s: x, v: 1 - y };
    }),
    drag(hue, (x) => {
      hsv = { ...hsv, h: x * 360 };
    }),
  ];

  const onAreaKey = (event) => {
    const step = event.shiftKey ? 0.1 : 0.01;
    const moves = { ArrowLeft: ['s', -step], ArrowRight: ['s', step], ArrowDown: ['v', -step], ArrowUp: ['v', step] };
    const m = moves[event.key];
    if (!m) return;
    event.preventDefault();
    hsv = { ...hsv, [m[0]]: clamp(hsv[m[0]] + m[1], 0, 1) };
    sync();
    emitInput();
    emitChange();
  };
  const onHueKey = (event) => {
    const step = event.shiftKey ? 10 : 1;
    const next = { ArrowLeft: hsv.h - step, ArrowDown: hsv.h - step, ArrowRight: hsv.h + step, ArrowUp: hsv.h + step, Home: 0, End: 359 }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    hsv = { ...hsv, h: clamp(next, 0, 359) };
    sync();
    emitInput();
    emitChange();
  };

  function commitHex() {
    const parsed = parseHex(hexInput.value);
    if (!parsed) {
      sync();
      return;
    }
    hsv = fromHex(parsed);
    sync();
    emitInput();
    emitChange();
  }
  const onHexInput = () => {
    const parsed = hexInput.value.replace(/^#/, '').length === 6 ? parseHex(hexInput.value) : null;
    if (!parsed) return;
    hsv = fromHex(parsed);
    sync({ input: false });
    emitInput();
  };
  const onHexKey = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      commitHex();
    }
  };
  const onSwatch = (event) => {
    const b = event.target.closest('[data-swatch]');
    if (!b) return;
    hsv = fromHex(b.dataset.swatch);
    sync();
    emitInput();
    emitChange();
  };
  const onLocale = () => {
    syncTexts();
    sync();
  };

  areaThumb.addEventListener('keydown', onAreaKey);
  hueThumb.addEventListener('keydown', onHueKey);
  hexInput.addEventListener('input', onHexInput);
  hexInput.addEventListener('keydown', onHexKey);
  hexInput.addEventListener('blur', commitHex);
  swatchBox.addEventListener('click', onSwatch);
  document.documentElement.addEventListener('ds:localechange', onLocale);

  renderSwatches();
  syncTexts();
  sync();
  lastEmitted = hex();

  return {
    get value() {
      return hex();
    },
    setValue(next) {
      const parsed = parseHex(next);
      if (!parsed) return;
      hsv = fromHex(parsed);
      lastEmitted = parsed;
      sync();
    },
    setSwatches(list) {
      swatches = normalizeSwatches(list);
      renderSwatches();
      sync();
    },
    focus: () => areaThumb.focus(),
    destroy() {
      undrag.forEach((fn) => fn());
      areaThumb.removeEventListener('keydown', onAreaKey);
      hueThumb.removeEventListener('keydown', onHueKey);
      hexInput.removeEventListener('blur', commitHex);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
      root.innerHTML = '';
      root.removeAttribute('style');
    },
  };
}

export function createColorField(input, options = {}) {
  const o = { swatches: [], ...options };
  const id = `ds-colorfield-${++uid}`;
  const field = input.closest('.ds-field');
  if (!input.id) input.id = id;
  input.autocomplete = 'off';
  input.spellcheck = false;
  input.maxLength = 7;

  let value = parseHex(o.value ?? input.value);
  let picker = null;

  const swatch = document.createElement('button');
  swatch.type = 'button';
  swatch.className = 'ds-color-field__swatch';
  swatch.setAttribute('aria-haspopup', 'dialog');
  swatch.setAttribute('aria-expanded', 'false');
  swatch.setAttribute('aria-controls', `${id}-panel`);
  swatch.disabled = input.disabled;
  input.before(swatch);

  const panel = document.createElement('div');
  panel.className = 'ds-picker ds-picker--color';
  panel.id = `${id}-panel`;
  panel.setAttribute('role', 'dialog');
  const body = document.createElement('div');
  panel.append(body);

  const isOpen = () => panel.isConnected;

  function syncField({ text = true } = {}) {
    if (text) input.value = value ? value.toUpperCase() : '';
    swatch.style.setProperty('--_color', value ?? 'transparent');
    setFieldError(input, null);
  }

  function syncTexts() {
    if (!o.placeholder) input.placeholder = '#000000';
    swatch.setAttribute('aria-label', value ? msg('color.openWith', value.toUpperCase()) : msg('color.open'));
    panel.setAttribute('aria-label', msg('color.picker'));
  }

  const emit = () => {
    o.onChange?.(value);
    input.dispatchEvent(new Event('change', { bubbles: true }));
  };

  function setValue(next, { notify = false, text = true } = {}) {
    const changed = next !== value;
    value = next;
    syncField({ text });
    syncTexts();
    if (notify && changed) emit();
  }

  function open() {
    if (isOpen() || input.disabled) return;
    inheritTheme(panel, field);
    panelHost(input).append(panel);
    picker = createColorPicker(body, {
      value: value ?? '#000000',
      swatches: o.swatches,
      onInput: (hex) => setValue(hex),
      onChange: (hex) => setValue(hex, { notify: true }),
    });
    placePanel(panel, field);
    swatch.setAttribute('aria-expanded', 'true');
    picker.focus();
    document.addEventListener('pointerdown', onOutside);
    panel.addEventListener('keydown', onPanelKey);
    addEventListener('resize', onReposition);
    document.addEventListener('scroll', onReposition, true);
  }

  function close(returnFocus = false) {
    if (!isOpen()) return;
    picker?.destroy();
    picker = null;
    panel.remove();
    swatch.setAttribute('aria-expanded', 'false');
    document.removeEventListener('pointerdown', onOutside);
    panel.removeEventListener('keydown', onPanelKey);
    removeEventListener('resize', onReposition);
    document.removeEventListener('scroll', onReposition, true);
    if (returnFocus) input.focus({ preventScroll: true });
  }

  const onOutside = (event) => {
    if (!panel.contains(event.target) && !field.contains(event.target)) close();
  };
  const onReposition = (event) => {
    if (event?.target && panel.contains(event.target)) return;
    if (field.isConnected) placePanel(panel, field);
    else close();
  };
  const onPanelKey = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      close(true);
    } else if (event.key === 'Tab') {
      // sair do painel com Tab fecha, sem prender o foco
      const focusables = [...panel.querySelectorAll('[tabindex="0"], input, button')];
      const edge = event.shiftKey ? focusables[0] : focusables.at(-1);
      if (document.activeElement === edge) {
        event.preventDefault();
        close(true);
      }
    }
  };

  function commitText() {
    const text = input.value.trim();
    if (!text) {
      if (value !== null) setValue(null, { notify: true });
      return;
    }
    const parsed = parseHex(text);
    if (!parsed) {
      setFieldError(input, msg('color.invalid'));
      return;
    }
    setValue(parsed, { notify: true });
  }

  const onKey = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      open();
    } else if (event.key === 'Enter') commitText();
  };
  const onInputText = () => {
    const parsed = input.value.replace(/^#/, '').length === 6 ? parseHex(input.value) : null;
    if (parsed) {
      swatch.style.setProperty('--_color', parsed);
      picker?.setValue(parsed);
    }
  };
  const onSwatchClick = () => (isOpen() ? close(true) : open());
  const onLocale = () => syncTexts();

  input.addEventListener('keydown', onKey);
  input.addEventListener('input', onInputText);
  input.addEventListener('blur', commitText);
  swatch.addEventListener('click', onSwatchClick);
  document.documentElement.addEventListener('ds:localechange', onLocale);

  syncField();
  syncTexts();

  return {
    get value() {
      return value;
    },
    setValue: (next) => setValue(parseHex(next)),
    open,
    close: () => close(),
    destroy() {
      close();
      swatch.remove();
      input.removeEventListener('keydown', onKey);
      input.removeEventListener('input', onInputText);
      input.removeEventListener('blur', commitText);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
    },
  };
}
