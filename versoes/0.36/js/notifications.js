/**
 * Central de notificações — o sino abre a lista, com o número das não lidas.
 *
 *   <button type="button" class="ds-icon-btn ds-notify-trigger"><ds-icon name="bell"></ds-icon></button>
 *
 *   const center = createNotificationCenter(document.querySelector('.ds-notify-trigger'), {
 *     items: [
 *       { id: 'v035', title: 'Lume 0.35', text: 'Banner e central de notificações.', time: new Date(),
 *         icon: 'megaphone', tone: 'brand', href: '#/novidades', read: false },
 *     ],
 *     onSelect: (item) => {},        // clicou num item (ele já fica lido)
 *     onChange: (items, unread) => {},// mudou o que está lido
 *     badge: true,                   // desenha o número no sino (o React desenha o seu)
 *   });
 *   center.add({ … });               // chega uma nova: vai para o topo e é anunciada ao leitor de tela
 *   center.setItems([…], { announce: true }); center.markRead('v035'); center.markAllRead();
 *   center.unread; center.items; center.open(); center.close(); center.destroy();
 *
 * Por cima do Popover: o sino tem aria-haspopup="dialog" e aria-expanded, Esc fecha e devolve o foco.
 * O nome do sino traz quantas faltam ler (“Notificações, 2 não lidas”); cada item não lido diz “Não lida”.
 * O tempo é relativo e no idioma do Lume (“há 5 minutos”); depois de uma semana, vira data.
 */
import { icon } from '../icons/icons.js';
import { msg, locale } from './i18n.js';
import { createPopover } from './popover.js';

const escape = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** “há 5 minutos”, “ontem”, “3 de nov.” — no idioma do Lume. */
export function relativeTime(date, now = new Date()) {
  const d = date instanceof Date ? date : new Date(date);
  const s = Math.round((d - now) / 1000);
  const abs = Math.abs(s);
  if (abs < 45) return msg('notifications.now');
  const rtf = new Intl.RelativeTimeFormat(locale(), { numeric: 'auto' });
  if (abs < 3600) return rtf.format(Math.round(s / 60), 'minute');
  if (abs < 86400) return rtf.format(Math.round(s / 3600), 'hour');
  if (abs < 7 * 86400) return rtf.format(Math.round(s / 86400), 'day');
  return new Intl.DateTimeFormat(locale(), { day: 'numeric', month: 'short', ...(d.getFullYear() !== now.getFullYear() ? { year: 'numeric' } : {}) }).format(d);
}

export function createNotificationCenter(trigger, options = {}) {
  const o = { items: [], onSelect: null, onChange: null, badge: true, placement: 'bottom', align: 'end', ...options };
  let items = o.items.map((item) => ({ ...item }));

  const ownLabel = trigger.getAttribute('aria-label');
  trigger.classList.add('ds-notify-trigger');
  let count = null;
  if (o.badge) {
    count = document.createElement('span');
    count.className = 'ds-notify-trigger__count';
    count.setAttribute('aria-hidden', 'true');
    trigger.append(count);
  }
  // anuncia o que chega com add(), sem roubar o foco
  const live = document.createElement('span');
  live.className = 'ds-visually-hidden';
  live.setAttribute('role', 'status');
  trigger.after(live);

  const content = document.createElement('div');
  content.className = 'ds-notify';
  const popover = createPopover(trigger, {
    content,
    className: 'ds-notify-panel',
    label: msg('notifications.title'),
    placement: o.placement,
    align: o.align,
    // o tempo relativo anda: redesenha a cada abertura
    onOpen: () => {
      render();
      popover.reposition();
    },
  });

  const unread = () => items.filter((item) => !item.read).length;
  const say = (title) => {
    live.textContent = '';
    requestAnimationFrame(() => (live.textContent = msg('notifications.new', title)));
  };

  function itemHtml(item) {
    const tag = item.href ? 'a' : 'button';
    const attrs = item.href ? `href="${escape(item.href)}"` : 'type="button"';
    const time = item.time ? `<time class="ds-notify__time" datetime="${new Date(item.time).toISOString()}">${escape(relativeTime(item.time))}</time>` : '';
    return `<li class="ds-notify__item"${item.read ? '' : ' data-unread'} data-id="${escape(item.id)}">
      <${tag} class="ds-notify__link" ${attrs}>
        ${item.icon ? `<span class="ds-notify__icon${item.tone && item.tone !== 'neutral' ? ` ds-notify__icon--${item.tone}` : ''}">${icon(item.icon, { size: 16 })}</span>` : ''}
        <span class="ds-notify__body">
          <span class="ds-notify__item-title">${escape(item.title)}</span>
          ${item.text ? `<span class="ds-notify__text">${escape(item.text)}</span>` : ''}
          ${time}
        </span>
        ${item.read ? '' : `<span class="ds-dot ds-notify__dot"></span><span class="ds-visually-hidden">${escape(msg('notifications.unreadItem'))}</span>`}
      </${tag}>
    </li>`;
  }

  function render() {
    const n = unread();
    const active = document.activeElement;
    const had = content.contains(active);
    const focusedId = had ? active.closest('.ds-notify__item')?.dataset.id : null;
    const focusedAll = had && active.matches('[data-notify-all]');
    content.innerHTML = body(n);
    if (had) {
      const back = focusedId ? content.querySelector(`.ds-notify__item[data-id="${CSS.escape(focusedId)}"] .ds-notify__link`) : focusedAll ? content.querySelector('[data-notify-all]') : null;
      (back ?? content.querySelector('.ds-notify__link') ?? popover.el).focus({ preventScroll: true });
    }
    trigger.setAttribute('aria-label', msg('notifications.trigger', n));
    if (count) {
      count.textContent = n > 99 ? '99+' : String(n);
      count.hidden = n === 0;
    }
  }

  const body = (n) => `<div class="ds-notify__header">
      <h2 class="ds-notify__title">${escape(msg('notifications.title'))}</h2>
      ${n ? `<button type="button" class="ds-inline-action" data-notify-all>${escape(msg('notifications.markAll'))}</button>` : ''}
    </div>
    ${items.length ? `<ul class="ds-notify__list" role="list">${items.map(itemHtml).join('')}</ul>` : `<div class="ds-notify__empty">${icon('bell', { size: 24 })}<span>${escape(msg('notifications.empty'))}</span></div>`}`;

  const changed = () => {
    render();
    o.onChange?.(items.map((item) => ({ ...item })), unread());
  };

  function markRead(id, read = true) {
    const item = items.find((i) => i.id === id);
    if (!item || !!item.read === read) return;
    item.read = read;
    changed();
  }

  function markAllRead() {
    if (!unread()) return;
    items.forEach((item) => (item.read = true));
    changed();
  }

  const onClick = (event) => {
    if (event.target.closest('[data-notify-all]')) {
      markAllRead();
      return;
    }
    const link = event.target.closest('.ds-notify__link');
    if (!link) return;
    const item = items.find((i) => i.id === link.closest('.ds-notify__item').dataset.id);
    if (!item) return;
    if (!item.read) {
      item.read = true;
      changed();
    }
    o.onSelect?.({ ...item });
    if (item.href) popover.close(false);
  };
  const onLocale = () => {
    popover.el.setAttribute('aria-label', msg('notifications.title'));
    render();
  };

  content.addEventListener('click', onClick);
  document.documentElement.addEventListener('ds:localechange', onLocale);
  render();

  return {
    get items() {
      return items.map((item) => ({ ...item }));
    },
    get unread() {
      return unread();
    },
    get isOpen() {
      return popover.isOpen;
    },
    open: () => popover.open(),
    close: () => popover.close(),
    /** Troca a lista. Com { announce: true }, as que não estavam antes são anunciadas como novas. */
    setItems(next, { announce = false } = {}) {
      const before = new Set(items.map((i) => i.id));
      items = next.map((item) => ({ ...item }));
      if (announce) items.filter((i) => !before.has(i.id) && !i.read).forEach((i) => say(i.title));
      render();
    },
    add(item) {
      items = [{ ...item }, ...items.filter((i) => i.id !== item.id)];
      say(item.title);
      changed();
    },
    markRead,
    markUnread: (id) => markRead(id, false),
    markAllRead,
    destroy() {
      popover.destroy();
      content.removeEventListener('click', onClick);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
      count?.remove();
      live.remove();
      if (ownLabel === null) trigger.removeAttribute('aria-label');
      else trigger.setAttribute('aria-label', ownLabel);
      trigger.classList.remove('ds-notify-trigger');
    },
  };
}
