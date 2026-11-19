/**
 * Paginação — páginas de uma lista ou tabela, com total e itens por página.
 *
 *   <nav class="ds-pagination" id="pedidos-paginas"></nav>
 *
 *   const pagination = createPagination(document.querySelector('#pedidos-paginas'), {
 *     total: 248,
 *     page: 1,
 *     pageSize: 10,
 *     pageSizes: [10, 25, 50],              // mostra o seletor de itens por página (opcional)
 *     siblings: 1,                          // páginas de cada lado da atual
 *     hrefFor: (page) => `?pagina=${page}`, // vira links de verdade (opcional)
 *     summary: ({ first, last, total }) => …, // troca o texto do intervalo (opcional; os números já vêm formatados)
 *     onChange: ({ page, pageSize }) => carregar(page, pageSize),
 *   });
 *   pagination.setPage(3); pagination.setTotal(100); pagination.destroy();
 *
 * Em telas estreitas, os números dão lugar a “3 de 25”, entre as setas.
 * Acessibilidade: <nav> com nome, aria-current="page" na página atual e o intervalo anunciado em role="status".
 */
import { icon } from '../icons/icons.js';
import { msg, numberFormat } from './i18n.js';
import { createMenu } from './menu.js';

const escape = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

/**
 * Lista de páginas com reticências: [1, '…', 4, 5, 6, '…', 25]. O número de posições é sempre o mesmo,
 * para os botões não mudarem de lugar; quando todas as páginas cabem nessas posições, não há reticências.
 */
export function pageRange(page, pages, siblings = 1) {
  const slots = siblings * 2 + 5;
  const seq = (from, to) => Array.from({ length: to - from + 1 }, (_, i) => from + i);
  if (pages <= slots) return seq(1, pages);
  if (page <= siblings + 3) return [...seq(1, slots - 2), '…', pages];
  if (page >= pages - siblings - 2) return [1, '…', ...seq(pages - slots + 3, pages)];
  return [1, '…', ...seq(page - siblings, page + siblings), '…', pages];
}

export function createPagination(root, options = {}) {
  const o = { total: 0, page: 1, pageSize: 10, siblings: 1, ...options };
  let total = o.total;
  let page = o.page;
  let pageSize = o.pageSize;
  let sizeMenu = null;

  const n = (v) => numberFormat().format(v);
  const pages = () => Math.max(1, Math.ceil(total / pageSize));

  const emit = () => o.onChange?.({ page, pageSize });

  function control(target, inner, { label, disabled, current, cls = 'ds-pagination__page' }) {
    const attrs = `class="${cls}" aria-label="${escape(label)}"${current ? ' aria-current="page"' : ''}`;
    if (o.hrefFor && !disabled) return `<a ${attrs} href="${escape(o.hrefFor(target))}" data-page="${target}">${inner}</a>`;
    return `<button type="button" ${attrs} data-page="${target}"${disabled ? ' disabled' : ''}>${inner}</button>`;
  }

  function render({ focus } = {}) {
    page = Math.min(Math.max(1, page), pages());
    const first = total ? (page - 1) * pageSize + 1 : 0;
    const last = Math.min(page * pageSize, total);
    root.setAttribute('aria-label', o.label ?? msg('pagination.label'));
    const sizes = o.pageSizes?.length
      ? `<button type="button" class="ds-chip ds-chip--sm ds-pagination__size" data-size><span data-label>${escape(msg('pagination.perPage', pageSize))}</span><span class="ds-chip__chevron">${icon('chevron-down', { size: 14 })}</span></button>`
      : '';
    root.innerHTML = `
      <p class="ds-pagination__summary" role="status">${escape(o.summary ? o.summary({ first: n(first), last: n(last), total: n(total) }) : msg('pagination.range', n(first), n(last), n(total)))}</p>
      ${sizes}
      <ul class="ds-pagination__list" role="list">
        <li>${control(page - 1, icon('chevron-left', { size: 18 }), { label: msg('pagination.prev'), disabled: page <= 1, cls: 'ds-pagination__page ds-pagination__arrow' })}</li>
        ${pageRange(page, pages(), o.siblings)
          .map((p) => (p === '…' ? '<li class="ds-pagination__gap" aria-hidden="true">…</li>' : `<li class="ds-pagination__number">${control(p, n(p), { label: msg('pagination.page', n(p)), current: p === page })}</li>`))
          .join('')}
        <li class="ds-pagination__compact" aria-hidden="true">${escape(msg('pagination.compact', n(page), n(pages())))}</li>
        <li>${control(page + 1, icon('chevron-right', { size: 18 }), { label: msg('pagination.next'), disabled: page >= pages(), cls: 'ds-pagination__page ds-pagination__arrow' })}</li>
      </ul>`;
    bindSize();
    if (focus) (root.querySelector(`.ds-pagination__arrow[data-page="${focus}"]:not(:disabled)`) ?? root.querySelector('[aria-current="page"]'))?.focus({ preventScroll: true });
  }

  function bindSize() {
    sizeMenu?.destroy();
    sizeMenu = null;
    const chip = root.querySelector('[data-size]');
    if (!chip) return;
    sizeMenu = createMenu(chip, {
      label: msg('pagination.pageSize'),
      value: String(pageSize),
      options: o.pageSizes.map((v) => ({ value: String(v), label: msg('pagination.perPage', v) })),
      onChange: (value) => {
        // mantém à vista o primeiro item que a pessoa estava vendo
        const firstItem = (page - 1) * pageSize;
        pageSize = Number(value);
        page = Math.floor(firstItem / pageSize) + 1;
        render();
        root.querySelector('[data-size]')?.focus({ preventScroll: true });
        emit();
      },
    });
  }

  const onClick = (event) => {
    const target = event.target.closest('[data-page]');
    if (!target || target.disabled) return;
    const next = Number(target.dataset.page);
    if (next === page) return;
    if (!o.hrefFor) event.preventDefault();
    const arrow = target.classList.contains('ds-pagination__arrow') ? target.dataset.page > page ? 'next' : 'prev' : null;
    page = next;
    render();
    // setas seguem na seta (para avançar várias vezes); sem seta disponível, o foco vai para a página atual
    const focusEl = arrow ? root.querySelectorAll('.ds-pagination__arrow')[arrow === 'next' ? 1 : 0] : null;
    (focusEl && !focusEl.disabled ? focusEl : root.querySelector('[aria-current="page"]'))?.focus({ preventScroll: true });
    emit();
  };
  const onLocale = () => render();

  root.addEventListener('click', onClick);
  document.documentElement.addEventListener('ds:localechange', onLocale);
  render();

  return {
    get page() {
      return page;
    },
    get pageSize() {
      return pageSize;
    },
    setPage(next) {
      page = next;
      render();
    },
    setTotal(next) {
      total = next;
      render();
    },
    destroy() {
      sizeMenu?.destroy();
      root.removeEventListener('click', onClick);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
      root.innerHTML = '';
    },
  };
}
