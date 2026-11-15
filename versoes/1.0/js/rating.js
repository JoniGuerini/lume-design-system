/**
 * Avaliação — estrelas para dar nota ou só mostrar a média.
 *
 *   Para dar nota:
 *   <div class="ds-rating" aria-label="Sua nota"></div>
 *   const rating = createRating(document.querySelector('.ds-rating'), {
 *     name: 'nota',       // o formulário envia o valor (1 a max) com este nome
 *     value: 0,           // 0 = sem nota
 *     max: 5,
 *     clearable: true,    // clicar de novo na estrela marcada tira a nota
 *     onChange: (value) => {},
 *   });
 *   rating.value; rating.setValue(4); rating.destroy();
 *
 *   Só para mostrar (aceita meia estrela e qualquer decimal):
 *   el.innerHTML = ratingHtml(4.5, { max: 5, size: 'sm', text: true, count: 128 });
 *
 * Cada estrela é um rádio nativo dentro de um radiogroup: Tab entra, as setas trocam a nota, o formulário
 * envia o valor e required funciona sem código. O nome de cada uma é “3 estrelas”.
 */
import { msg, formatNumber } from './i18n.js';

const STAR = 'M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z';
const svg = () => `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="${STAR}"/></svg>`;
const starIcon = (fill) => `<span class="ds-rating__icon" aria-hidden="true">${svg()}<span class="ds-rating__fill"${fill === undefined ? '' : ` style="--_fill: ${fill}%"`}>${svg()}</span></span>`;

let uid = 0;

/** Marcação só de leitura: ratingHtml(4.5, { max, size: 'sm' | 'lg', label, text, count }). */
export function ratingHtml(value, { max = 5, size = '', label, text = false, count } = {}) {
  const v = Math.max(0, Math.min(max, Number(value) || 0));
  const name = label ?? msg('rating.value', formatNumber(v, { maximumFractionDigits: 1 }), max);
  const stars = Array.from({ length: max }, (_, i) => `<span class="ds-rating__star">${starIcon(Math.round(Math.max(0, Math.min(1, v - i)) * 100))}</span>`).join('');
  const number = text ? `<span class="ds-rating__text" aria-hidden="true">${formatNumber(v, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}${count != null ? ` <span class="ds-rating__count">(${formatNumber(count)})</span>` : ''}</span>` : '';
  return `<span class="ds-rating ds-rating--readonly${size ? ` ds-rating--${size}` : ''}" role="img" aria-label="${name}">${stars}${number}</span>`;
}

export function createRating(root, options = {}) {
  const o = { name: root.dataset.name || `ds-rating-${++uid}`, value: Number(root.dataset.value) || 0, max: Number(root.dataset.max) || 5, clearable: true, disabled: false, required: false, onChange: null, ...options };
  let value = Math.max(0, Math.min(o.max, Math.round(o.value)));
  let before = value;

  root.classList.add('ds-rating');
  root.setAttribute('role', 'radiogroup');
  if (o.disabled) root.setAttribute('aria-disabled', 'true');

  function render() {
    root.innerHTML = Array.from(
      { length: o.max },
      (_, i) => `<label class="ds-rating__star"${i < value ? ' data-on' : ''}>
        <input class="ds-rating__input" type="radio" name="${o.name}" value="${i + 1}"${i + 1 === value ? ' checked' : ''}${o.disabled ? ' disabled' : ''}${o.required && i === 0 ? ' required' : ''}>
        ${starIcon()}
        <span class="ds-visually-hidden">${msg('rating.star', i + 1)}</span>
      </label>`,
    ).join('');
  }

  const stars = () => [...root.querySelectorAll('.ds-rating__star')];
  function paint() {
    stars().forEach((star, i) => star.toggleAttribute('data-on', i < value));
  }

  function set(next, notify) {
    value = Math.max(0, Math.min(o.max, Math.round(next)));
    root.querySelectorAll('.ds-rating__input').forEach((input) => (input.checked = Number(input.value) === value));
    paint();
    if (notify) o.onChange?.(value);
  }

  // antes do clique: guarda a nota, para saber se a pessoa clicou de novo na mesma (e tirar a nota).
  // Pelo teclado (setas e espaço também disparam clique no rádio) nunca tira.
  let keyboard = false;
  const onPointerDown = () => {
    keyboard = false;
    before = value;
  };
  const onKeyDown = () => (keyboard = true);
  const onChange = (event) => {
    if (!event.target.classList.contains('ds-rating__input')) return;
    set(Number(event.target.value), true);
  };
  const onClick = (event) => {
    const input = event.target.closest('.ds-rating__input');
    if (!input || !o.clearable || keyboard) return;
    if (Number(input.value) === before && before === value) set(0, true);
    before = value;
  };
  const onOver = (event) => {
    const star = event.target.closest('.ds-rating__star');
    if (!star) return;
    const n = stars().indexOf(star);
    root.setAttribute('data-preview', '');
    stars().forEach((s, i) => s.toggleAttribute('data-preview-on', i <= n));
  };
  const onLeave = () => {
    root.removeAttribute('data-preview');
    stars().forEach((s) => s.removeAttribute('data-preview-on'));
  };
  const onLocale = () => {
    root.querySelectorAll('.ds-rating__star .ds-visually-hidden').forEach((el, i) => (el.textContent = msg('rating.star', i + 1)));
  };

  render();
  root.addEventListener('pointerdown', onPointerDown);
  root.addEventListener('keydown', onKeyDown);
  root.addEventListener('change', onChange);
  root.addEventListener('click', onClick);
  root.addEventListener('pointerover', onOver);
  root.addEventListener('pointerleave', onLeave);
  document.documentElement.addEventListener('ds:localechange', onLocale);

  return {
    get value() {
      return value;
    },
    setValue: (next) => set(Number(next) || 0, false),
    destroy() {
      root.removeEventListener('pointerdown', onPointerDown);
      root.removeEventListener('keydown', onKeyDown);
      root.removeEventListener('change', onChange);
      root.removeEventListener('click', onClick);
      root.removeEventListener('pointerover', onOver);
      root.removeEventListener('pointerleave', onLeave);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
      root.innerHTML = '';
      root.removeAttribute('role');
      root.removeAttribute('data-preview');
    },
  };
}
