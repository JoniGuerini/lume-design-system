/**
 * Peças das páginas dos controles de formulário (seletores, campo numérico, slider, tags, upload, código).
 * Montam o esqueleto comum: cabeçalho, navegação da página e seções.
 */
import { icon } from '../ds/icons/icons.js';
import { L } from './i18n.js';

export const ic = (s) => `<code class="ds-inline-code">${s}</code>`;

/**
 * page: o item do mapa do site · lead: frase de abertura · stats: [[rótulo, valor]]
 * sections: [{ id, nav?, title, desc, html }] (nav: nome na navegação da página; padrão: o título)
 */
export function controlPage(page, { lead, stats, sections }) {
  return `
  <div class="page doc">
    <header class="doc-header">
      <div>
        <p class="doc-header__eyebrow">${page.group}</p>
        <h1 class="doc-header__title">${page.label}</h1>
        <p class="doc-header__lead">${lead}</p>
      </div>
      <dl class="doc-stats">
        ${stats.map(([label, value]) => `<div class="doc-stat"><dt class="doc-stat__label">${label}</dt><dd class="doc-stat__value">${value}</dd></div>`).join('')}
      </dl>
    </header>

    <nav class="doc-nav" aria-label="${L('Nesta página', 'On this page', 'En esta página')}">
      ${sections.map((s) => `<button type="button" class="doc-nav__link" data-target="${s.id}">${s.nav ?? s.title}</button>`).join('')}
    </nav>

    ${sections
      .map(
        (s) => `<section class="doc-section" id="${s.id}" aria-labelledby="${s.id}-title">
          <header class="doc-section__header">
            <div><h2 class="doc-section__title" id="${s.id}-title">${s.title}</h2><p class="doc-section__desc">${s.desc}</p></div>
          </header>
          ${s.html}
        </section>`,
      )
      .join('')}
  </div>`;
}

/** Campo completo: rótulo, .ds-field com um input e dica. */
export function formField({ id, label, name = id, fieldClass = '', value = '', attrs = '', hint = '', extra = '', state = '' }) {
  return `<div class="ds-form-field">
    <label class="ds-form-field__label" for="${id}">${label}</label>
    <div class="ds-field${fieldClass ? ` ${fieldClass}` : ''}"${state ? ` data-state="${state}"` : ''}><input class="ds-field__input" id="${id}"${name ? ` name="${name}"` : ''} type="text"${value ? ` value="${value}"` : ''}${attrs ? ` ${attrs}` : ''}>${extra}</div>
    ${hint ? `<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="${id}-hint">${hint}</p></div>` : ''}
  </div>`;
}

/** Um exemplo: prévia + nome, classe e explicação. */
export function example(name, code, text, preview, { inert = false } = {}) {
  return `<article class="cd-example">
    <div class="cd-example__preview"${inert ? ' inert' : ''}><div class="fc-preview">${preview}</div></div>
    <div class="cd-example__body"><p class="cd-example__name">${name}${code ? `<code>${code}</code>` : ''}</p><p class="cd-example__text">${text}</p></div>
  </article>`;
}

export const examples = (items, columns = 2) => `<div class="fc-grid fc-grid--${columns}">${items.join('')}</div>`;

/** Grade de estados, cada um com uma legenda. items: [[legenda, html]] */
export const stateGrid = (items) =>
  `<div class="fc-states" inert>${items.map(([label, html]) => `<div class="fc-states__item"><div class="fc-states__sample">${html}</div><span class="fc-states__label">${label}</span></div>`).join('')}</div>`;

/** Faça / Evite / Dica. items: [['do'|'dont'|'tip', título, texto]] */
export function usageCards(items) {
  const icons = { do: 'check-circle', dont: 'x-circle', tip: 'zap' };
  return `<div class="usage-grid">
    ${items.map(([kind, title, text]) => `<article class="usage-card usage-card--${kind}"><p class="usage-card__head">${icon(icons[kind], { size: 20 })}${title}</p><p class="usage-card__text">${text}</p></article>`).join('')}
  </div>`;
}

export const stageWrap = (html) => `<div class="fc-stage">${html}</div>`;
