/**
 * Progresso circular — o anel da barra de progresso, para quando a barra não cabe (card, botão, lista).
 *
 *   el.innerHTML = progressRingHtml(62, { label: 'Enviando', size: 'lg', tone: 'success' });
 *   setProgressRing(el.firstElementChild, 80);   // muda o valor (null = indeterminado)
 *
 * value: de 0 a max (padrão 100); sem valor (null ou undefined), o arco gira: indeterminado.
 * size: 'sm' (20 px, sem número, cabe numa linha de texto) · 'md' (56) · 'lg' (80).
 * tone: 'success' · 'warning' · 'danger' — para o resultado, como na barra.
 * label: o que está progredindo, para o leitor de tela. Padrão: “Progresso”, no idioma do Lume.
 *
 * É role="progressbar" com aria-valuenow; o número no meio é só visual (o leitor de tela lê o valor).
 */
import { msg, numberFormat } from './i18n.js';

const pct = (value, max) => numberFormat({ style: 'percent', maximumFractionDigits: 0 }).format(value / max);
const clamp = (value, max) => Math.max(0, Math.min(max, Number(value) || 0));
const escape = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

export function progressRingHtml(value, { max = 100, size = 'md', tone = '', label, text = true } = {}) {
  const on = value !== null && value !== undefined;
  const v = on ? clamp(value, max) : 0;
  const cls = ['ds-progress-ring', size !== 'md' && `ds-progress-ring--${size}`, tone && tone !== 'brand' && `ds-progress-ring--${tone}`].filter(Boolean).join(' ');
  const aria = on ? ` aria-valuemin="0" aria-valuemax="${max}" aria-valuenow="${v}" style="--ds-progress-value: ${(v / max) * 100}"` : '';
  const number = on && text && size !== 'sm' ? `<span class="ds-progress-ring__value" aria-hidden="true">${pct(v, max)}</span>` : '';
  return `<div class="${cls}" role="progressbar" aria-label="${escape(label ?? msg('progress.label'))}"${aria}><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"/><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"/></svg>${number}</div>`;
}

/** Muda o valor de um anel já desenhado. null ou undefined: indeterminado. */
export function setProgressRing(el, value) {
  const max = Number(el.getAttribute('aria-valuemax')) || 100;
  const out = el.querySelector('.ds-progress-ring__value');
  if (value === null || value === undefined) {
    ['aria-valuemin', 'aria-valuemax', 'aria-valuenow'].forEach((name) => el.removeAttribute(name));
    el.style.removeProperty('--ds-progress-value');
    if (out) out.hidden = true;
    return;
  }
  const v = clamp(value, max);
  el.setAttribute('aria-valuemin', '0');
  el.setAttribute('aria-valuemax', String(max));
  el.setAttribute('aria-valuenow', String(v));
  el.style.setProperty('--ds-progress-value', String((v / max) * 100));
  if (out) {
    out.hidden = false;
    out.textContent = pct(v, max);
  }
}
