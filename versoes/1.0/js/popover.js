/**
 * Popover — conteúdo livre que abre ao clicar, preso ao gatilho, sem bloquear a tela.
 *
 *   const popover = createPopover(botao, {
 *     title: 'Compartilhar',           // opcional: dá nome e mostra o botão de fechar
 *     content: 'Texto ou HTML',        // ou um Element
 *     placement: 'bottom',             // 'bottom' | 'top' | 'right' | 'left'; troca de lado se não couber
 *     align: 'start',                  // 'start' | 'center' | 'end'
 *     label: 'Compartilhar',           // nome para o leitor de tela, quando não há título
 *     onOpen: (panel) => …, onClose: () => …,
 *   });
 *   popover.open(); popover.close(); popover.toggle(); popover.reposition(); popover.destroy();
 *
 * Padrão ARIA: gatilho com aria-haspopup="dialog" e aria-expanded; painel com role="dialog", não modal.
 * Abrir leva o foco para dentro. Esc fecha e devolve o foco; clicar fora ou sair com Tab fecha sem puxar o foco.
 * Use o Tooltip para uma dica curta, o Menu para uma lista de ações e o Modal quando for preciso interromper.
 */
import { icon } from '../icons/icons.js';
import { msg } from './i18n.js';
import { panelHost, inheritTheme } from './field-support.js';

let uid = 0;
const GAP = 8;
const MARGIN = 8;
const FOCUSABLE = 'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';
const escape = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

/** Calcula a posição: troca de lado se não couber e nunca sai da tela. */
function place(panel, trigger, placement, align) {
  const t = trigger.getBoundingClientRect();
  const p = panel.getBoundingClientRect();
  const room = { bottom: innerHeight - t.bottom, top: t.top, right: innerWidth - t.right, left: t.left };
  const opposite = { bottom: 'top', top: 'bottom', right: 'left', left: 'right' };
  const vertical = (s) => s === 'bottom' || s === 'top';
  const need = (s) => (vertical(s) ? p.height : p.width) + GAP + MARGIN;
  const side = room[placement] >= need(placement) || room[placement] >= room[opposite[placement]] ? placement : opposite[placement];
  let x;
  let y;
  if (vertical(side)) {
    y = side === 'bottom' ? t.bottom + GAP : t.top - p.height - GAP;
    x = align === 'center' ? t.left + (t.width - p.width) / 2 : align === 'end' ? t.right - p.width : t.left;
  } else {
    x = side === 'right' ? t.right + GAP : t.left - p.width - GAP;
    y = align === 'center' ? t.top + (t.height - p.height) / 2 : align === 'end' ? t.bottom - p.height : t.top;
  }
  x = Math.min(Math.max(MARGIN, x), innerWidth - p.width - MARGIN);
  y = Math.min(Math.max(MARGIN, y), innerHeight - p.height - MARGIN);
  panel.style.translate = `${Math.round(x)}px ${Math.round(y)}px`;
  panel.dataset.side = side;
}

export function createPopover(trigger, options = {}) {
  const o = { placement: 'bottom', align: 'start', ...options };
  const id = `ds-popover-${++uid}`;

  const panel = document.createElement('div');
  panel.className = `ds-popover${o.className ? ` ${o.className}` : ''}`;
  panel.id = id;
  panel.tabIndex = -1;
  panel.setAttribute('role', 'dialog');
  if (o.title) panel.setAttribute('aria-labelledby', `${id}-title`);
  else if (o.label) panel.setAttribute('aria-label', o.label);

  const fill = () => {
    panel.innerHTML = `${o.title ? `<header class="ds-popover__header"><h2 class="ds-popover__title" id="${id}-title">${escape(o.title)}</h2><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-popover-close aria-label="${escape(msg('common.close'))}">${icon('x', { size: 16 })}</button></header>` : ''}<div class="ds-popover__body"></div>`;
    const body = panel.querySelector('.ds-popover__body');
    if (o.content instanceof Element) body.append(o.content);
    else body.innerHTML = o.content ?? '';
  };
  fill();

  trigger.setAttribute('aria-haspopup', 'dialog');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-controls', id);

  const isOpen = () => panel.hasAttribute('data-open');
  const reposition = () => isOpen() && place(panel, trigger, o.placement, o.align);

  function open() {
    if (isOpen() || trigger.disabled) return;
    inheritTheme(panel, trigger);
    panelHost(trigger).append(panel);
    place(panel, trigger, o.placement, o.align);
    panel.setAttribute('data-open', '');
    trigger.setAttribute('aria-expanded', 'true');
    (panel.querySelector(`.ds-popover__body :is(${FOCUSABLE})`) ?? panel).focus({ preventScroll: true });
    document.addEventListener('pointerdown', onOutside);
    document.addEventListener('scroll', onScroll, true);
    addEventListener('resize', reposition);
    o.onOpen?.(panel);
  }

  function close(returnFocus = true) {
    if (!isOpen()) return;
    panel.removeAttribute('data-open');
    panel.remove();
    trigger.setAttribute('aria-expanded', 'false');
    document.removeEventListener('pointerdown', onOutside);
    document.removeEventListener('scroll', onScroll, true);
    removeEventListener('resize', reposition);
    if (returnFocus) trigger.focus({ preventScroll: true });
    o.onClose?.();
  }

  const toggle = () => (isOpen() ? close() : open());
  const onOutside = (event) => {
    if (!panel.contains(event.target) && !trigger.contains(event.target)) close(false);
  };
  const onScroll = (event) => {
    if (panel.contains(event.target)) return;
    if (trigger.isConnected) reposition();
    else close(false);
  };
  const onKey = (event) => {
    if (event.key !== 'Escape') return;
    event.preventDefault();
    event.stopPropagation();
    close();
  };
  const onFocusOut = (event) => {
    const to = event.relatedTarget;
    if (to && !panel.contains(to) && !trigger.contains(to)) close(false);
  };
  const onPanelClick = (event) => {
    if (event.target.closest('[data-popover-close]')) close();
  };
  const onLocale = () => {
    if (o.title) panel.querySelector('[data-popover-close]')?.setAttribute('aria-label', msg('common.close'));
  };

  trigger.addEventListener('click', toggle);
  panel.addEventListener('keydown', onKey);
  panel.addEventListener('focusout', onFocusOut);
  panel.addEventListener('click', onPanelClick);
  document.documentElement.addEventListener('ds:localechange', onLocale);

  return {
    el: panel,
    get isOpen() {
      return isOpen();
    },
    open,
    close,
    toggle,
    reposition,
    destroy() {
      close(false);
      trigger.removeEventListener('click', toggle);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
      trigger.removeAttribute('aria-haspopup');
      trigger.removeAttribute('aria-expanded');
      trigger.removeAttribute('aria-controls');
    },
  };
}
