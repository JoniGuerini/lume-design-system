/**
 * Peças comuns dos campos que abrem um painel ou guardam um valor diferente do que mostram
 * (data, horário, número, tags). Quem usa são os componentes; não é preciso chamar direto.
 *
 *   placePanel(panel, trigger)        posiciona um painel fixo abaixo do gatilho, sem sair da tela
 *   panelHost(trigger)                onde o painel entra: no <dialog> aberto, se houver, ou no body
 *   hiddenValue(input)                move o name do campo para um input oculto, que leva o valor ao formulário
 *   setFieldError(input, message)     mostra ou limpa o erro de formato, igual ao de ds/js/form.js
 */
import { icon } from '../icons/icons.js';

const escape = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

export function placePanel(panel, trigger, { gap = 6 } = {}) {
  const r = trigger.getBoundingClientRect();
  const p = panel.getBoundingClientRect();
  let x = r.left;
  let y = r.bottom + gap;
  if (x + p.width > innerWidth - 8) x = Math.max(8, innerWidth - 8 - p.width);
  if (y + p.height > innerHeight - 8 && r.top - p.height - gap >= 8) y = r.top - p.height - gap;
  panel.style.translate = `${Math.round(Math.max(8, x))}px ${Math.round(Math.max(8, y))}px`;
}

export const panelHost = (trigger) => trigger.closest('dialog') ?? document.body;

/** O painel usa o tema de quem abriu (os palcos da documentação têm tema próprio). */
export function inheritTheme(panel, trigger) {
  const theme = trigger.closest('[data-theme]')?.dataset.theme;
  if (theme) panel.dataset.theme = theme;
}

export function hiddenValue(input) {
  const hidden = document.createElement('input');
  hidden.type = 'hidden';
  hidden.name = input.name;
  hidden.disabled = input.disabled;
  input.removeAttribute('name');
  if (!input.id) input.id = `ds-field-${Math.random().toString(36).slice(2, 9)}`;
  input.after(hidden);
  return hidden;
}

export function setFieldError(input, message) {
  const id = `${input.id}-error`;
  let error = document.getElementById(id);
  const described = (input.getAttribute('aria-describedby') ?? '').split(' ').filter((x) => x && x !== id);
  if (!message) {
    delete input.dataset.dsInvalid;
    if (!error) return;
    error.remove();
    input.removeAttribute('aria-invalid');
    if (described.length) input.setAttribute('aria-describedby', described.join(' '));
    else input.removeAttribute('aria-describedby');
    input.closest('.ds-form-field')?.querySelectorAll('.ds-form-field__hint').forEach((h) => (h.hidden = false));
    return;
  }
  input.dataset.dsInvalid = message;
  input.setAttribute('aria-invalid', 'true');
  input.setAttribute('aria-describedby', [id, ...described].join(' '));
  const container = input.closest('.ds-form-field');
  if (!error) {
    error = document.createElement('p');
    error.id = id;
    error.className = 'ds-form-field__error';
    if (container) {
      let footer = container.querySelector('.ds-form-field__footer');
      if (!footer) {
        footer = document.createElement('div');
        footer.className = 'ds-form-field__footer';
        container.append(footer);
      }
      footer.prepend(error);
    } else input.closest('.ds-field')?.after(error);
  }
  error.innerHTML = `${icon('alert-circle', { size: 16 })}<span>${escape(message)}</span>`;
  container?.querySelectorAll('.ds-form-field__hint').forEach((h) => (h.hidden = true));
}
