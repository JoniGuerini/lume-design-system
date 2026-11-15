/**
 * Stepper — as etapas de um fluxo e onde a pessoa está.
 *
 *   <ol class="ds-stepper" id="cadastro"></ol>             (.ds-stepper--vertical: uma etapa embaixo da outra)
 *
 *   const stepper = createStepper(document.querySelector('#cadastro'), {
 *     steps: [{ label: 'Conta', description: 'E-mail e senha' }, { label: 'Perfil' }, { label: 'Pronto' }],
 *     current: 1,
 *     clickable: true,                       // volta às etapas já feitas com um clique
 *     onChange: (index) => mostrar(index),
 *   });
 *   stepper.next(); stepper.prev(); stepper.setCurrent(2); stepper.destroy();
 *
 * Acessibilidade: lista ordenada, aria-current="step" na atual e “concluída” anunciado nas feitas.
 * Número e marca, nunca só cor.
 */
import { icon } from '../icons/icons.js';
import { msg } from './i18n.js';

const escape = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

export function createStepper(root, options = {}) {
  const o = { steps: [], current: 0, clickable: false, ...options };
  let current = o.current;

  function render() {
    root.innerHTML = o.steps
      .map((s, i) => {
        const state = i < current ? 'done' : i === current ? 'current' : 'upcoming';
        const inner = `<span class="ds-stepper__marker" aria-hidden="true">${state === 'done' ? icon('check', { size: 16 }) : i + 1}</span>
          <span class="ds-stepper__text">
            <span class="ds-stepper__label">${escape(s.label)}${state === 'done' ? `<span class="ds-visually-hidden"> (${escape(msg('stepper.done'))})</span>` : ''}</span>
            ${s.description ? `<span class="ds-stepper__description">${escape(s.description)}</span>` : ''}
          </span>`;
        return `<li class="ds-stepper__step" data-state="${state}"${state === 'current' ? ' aria-current="step"' : ''}>${
          o.clickable && state === 'done' ? `<button type="button" class="ds-stepper__content" data-step="${i}">${inner}</button>` : `<div class="ds-stepper__content">${inner}</div>`
        }</li>`;
      })
      .join('');
  }

  function setCurrent(index) {
    const next = Math.min(Math.max(index, 0), o.steps.length - 1);
    if (next === current) return;
    current = next;
    render();
    o.onChange?.(current);
  }

  const onClick = (event) => {
    const btn = event.target.closest('[data-step]');
    if (btn) setCurrent(Number(btn.dataset.step));
  };
  const onLocale = () => render();
  root.addEventListener('click', onClick);
  document.documentElement.addEventListener('ds:localechange', onLocale);
  render();

  return {
    get current() {
      return current;
    },
    setCurrent,
    next: () => setCurrent(current + 1),
    prev: () => setCurrent(current - 1),
    destroy() {
      root.removeEventListener('click', onClick);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
      root.innerHTML = '';
    },
  };
}
