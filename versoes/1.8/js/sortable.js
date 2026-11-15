/**
 * Lista arrastável — mudar a ordem com o mouse, o toque ou o teclado.
 *
 *   <ul class="ds-sortable" role="list" aria-label="Ordem da sidebar">
 *     <li class="ds-sortable__item" data-id="cores">
 *       <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical"></ds-icon></button>
 *       <span class="ds-sortable__label">Cores</span>
 *     </li>
 *   </ul>
 *
 *   const sortable = createSortable(document.querySelector('.ds-sortable'), {
 *     group: 'tarefas',          // listas com o mesmo grupo trocam itens entre si (é o que o kanban usa)
 *     orientation: 'vertical',   // ou 'horizontal'
 *     onChange: ({ item, id, from, to, oldIndex, newIndex }) => {},
 *   });
 *   sortable.toArray(); // ['cores', 'tipografia', …] — os data-id na ordem atual
 *   sortable.refresh(); sortable.destroy();
 *
 * A alça (.ds-sortable__handle) é o que arrasta; item sem alça arrasta inteiro e vira focável.
 * Teclado: Espaço ou Enter pega, as setas movem (num grupo, as laterais trocam de lista),
 * Home e End vão às pontas, Espaço ou Enter solta, Esc desfaz. Cada passo é anunciado.
 * No toque, item sem alça só começa a arrastar depois de segurar um instante, para a página continuar rolando.
 * Toda mudança dispara 'ds:sortchange' (borbulha) na lista de destino, com os mesmos dados do onChange.
 */
import { msg, numberFormat } from './i18n.js';

const GROUPS = new Map();
const THRESHOLD = 4;
const HOLD = 220;
const EDGE = 48;
let helpEl = null;

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

function help() {
  if (!helpEl || !helpEl.isConnected) {
    helpEl = document.createElement('span');
    helpEl.id = 'ds-sortable-help';
    helpEl.className = 'ds-visually-hidden';
    document.body.append(helpEl);
  }
  helpEl.textContent = msg('sortable.help');
  return helpEl.id;
}

const nameOf = (item) =>
  item.dataset.label || (item.querySelector('.ds-sortable__label, .ds-kanban__card-title')?.textContent || item.textContent).trim().replace(/\s+/g, ' ');

function scrollParent(el) {
  for (let node = el; node && node !== document.body; node = node.parentElement) {
    const s = getComputedStyle(node);
    if (/(auto|scroll)/.test(s.overflowY + s.overflowX) && (node.scrollHeight > node.clientHeight || node.scrollWidth > node.clientWidth)) return node;
  }
  return document.scrollingElement;
}

export function createSortable(list, options = {}) {
  const o = {
    group: null,
    orientation: list.getAttribute('aria-orientation') || list.dataset.orientation || 'vertical',
    handle: '.ds-sortable__handle',
    onChange: null,
    ...options,
  };
  const horizontal = o.orientation === 'horizontal';
  const group = o.group ?? Symbol('sortable');
  if (!GROUPS.has(group)) GROUPS.set(group, { members: new Set(), kb: null });
  const state = GROUPS.get(group);
  const api = {};
  state.members.add(api);

  const live = document.createElement('span');
  live.className = 'ds-visually-hidden';
  live.setAttribute('aria-live', 'assertive');
  list.after(live);

  const items = (l = list) => [...l.children].filter((el) => el.classList.contains('ds-sortable__item'));
  const handleOf = (item) => item.querySelector(o.handle) || item;
  const peers = () => [...state.members].map((p) => p.el).filter((l) => l.isConnected).sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
  const instanceOf = (l) => [...state.members].find((p) => p.el === l);
  const listName = (l) => l.getAttribute('aria-label') || l.closest('[data-label]')?.dataset.label || '';
  const say = (text) => {
    live.textContent = '';
    requestAnimationFrame(() => (live.textContent = text));
  };

  function refresh() {
    const describedby = help();
    items().forEach((item) => {
      const handle = handleOf(item);
      if (handle === item && !item.hasAttribute('tabindex')) item.tabIndex = 0;
      // alça: ganha o nome “Mover …”; item que arrasta inteiro é lido pelo próprio conteúdo
      if (handle !== item && !handle.hasAttribute('aria-label')) handle.dataset.autoLabel = '';
      if (handle !== item && handle.dataset.autoLabel !== undefined) handle.setAttribute('aria-label', msg('sortable.handle', nameOf(item)));
      handle.setAttribute('aria-describedby', describedby);
      if (handle !== item) handle.setAttribute('aria-pressed', 'false');
    });
  }

  /* põe o item na posição index da lista l, contando só os outros itens */
  function insertAt(l, item, index) {
    const others = items(l).filter((el) => el !== item);
    if (others[index]) l.insertBefore(item, others[index]);
    else if (others.length) others.at(-1).after(item);
    else l.prepend(item);
  }

  /* anima os vizinhos do lugar antigo para o novo (FLIP) */
  function flip(lists, change) {
    const before = new Map();
    lists.forEach((l) => items(l).forEach((el) => before.set(el, el.getBoundingClientRect())));
    change();
    if (reduced()) return;
    before.forEach((r, el) => {
      const now = el.getBoundingClientRect();
      const dx = r.left - now.left;
      const dy = r.top - now.top;
      if (dx || dy) el.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], { duration: 160, easing: 'cubic-bezier(.2, 0, 0, 1)' });
    });
  }

  function emit(item, from, oldIndex) {
    const to = item.parentElement;
    const newIndex = items(to).indexOf(item);
    if (to === from && newIndex === oldIndex) return false;
    const detail = { item, id: item.dataset.id, from, to, oldIndex, newIndex };
    const targets = new Set([instanceOf(to), instanceOf(from)]);
    targets.forEach((inst) => inst?.onChange?.(detail));
    to.dispatchEvent(new CustomEvent('ds:sortchange', { bubbles: true, detail }));
    return true;
  }

  const position = (item) => {
    const l = item.parentElement;
    const all = items(l);
    return { pos: all.indexOf(item) + 1, total: all.length, list: listName(l) };
  };

  /* ── teclado (o estado é do grupo: o item pode terminar em outra lista) ── */
  function moveTo(item, l, index) {
    const kb = state.kb;
    const lists = l === item.parentElement ? [l] : [l, item.parentElement];
    kb.moving = true;
    flip(lists, () => insertAt(l, item, index));
    kb.handle.focus();
    kb.handle.scrollIntoView?.({ block: 'nearest', inline: 'nearest' });
    kb.moving = false;
  }

  function grab(item) {
    const handle = handleOf(item);
    state.kb = { item, handle, from: item.parentElement, oldIndex: items(item.parentElement).indexOf(item), moving: false };
    item.dataset.grabbed = '';
    if (handle !== item) handle.setAttribute('aria-pressed', 'true');
    const p = position(item);
    say(msg('sortable.grabbed', nameOf(item), p.pos, p.total));
  }

  function drop(cancel = false) {
    const kb = state.kb;
    if (!kb) return;
    const { item, handle, from, oldIndex } = kb;
    if (cancel && (item.parentElement !== from || items(from).indexOf(item) !== oldIndex)) {
      kb.moving = true;
      flip([from, item.parentElement], () => insertAt(from, item, oldIndex));
      handle.focus();
    }
    delete item.dataset.grabbed;
    if (handle !== item) handle.setAttribute('aria-pressed', 'false');
    state.kb = null;
    if (cancel) return say(msg('sortable.canceled', nameOf(item)));
    const p = position(item);
    const changed = emit(item, from, oldIndex);
    say(changed ? msg('sortable.dropped', nameOf(item), p.pos, p.total) : msg('sortable.droppedSame', nameOf(item)));
  }

  const onKeyDown = (event) => {
    const item = event.target.closest('.ds-sortable__item');
    if (!item || item.parentElement !== list || event.target !== handleOf(item)) return;
    const key = event.key;
    const kb = state.kb;
    if (!kb) {
      if (key === ' ' || key === 'Enter') {
        event.preventDefault();
        grab(item);
      }
      return;
    }
    if (kb.item !== item) return;
    const back = horizontal ? 'ArrowLeft' : 'ArrowUp';
    const forward = horizontal ? 'ArrowRight' : 'ArrowDown';
    const side = horizontal ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight'];
    const index = items().indexOf(item);
    const last = items().length - 1;
    let handled = true;
    if (key === ' ' || key === 'Enter') drop();
    else if (key === 'Escape') drop(true);
    else if (key === back && index > 0) moveTo(item, list, index - 1);
    else if (key === forward && index < last) moveTo(item, list, index + 1);
    else if (key === 'Home' && index > 0) moveTo(item, list, 0);
    else if (key === 'End' && index < last) moveTo(item, list, last);
    else if (side.includes(key)) {
      const ls = peers();
      const target = ls[ls.indexOf(list) + (key === side[0] ? -1 : 1)];
      if (target) {
        moveTo(item, target, Math.min(index, items(target).length));
        const p = position(item);
        say(msg('sortable.movedTo', nameOf(item), p.list, p.pos, p.total));
        event.preventDefault();
        return;
      }
    } else handled = key.startsWith('Arrow') || key === 'Home' || key === 'End';
    if (handled) event.preventDefault();
    if (state.kb && /^(Arrow|Home|End)/.test(key) && !side.includes(key)) {
      const p = position(item);
      say(msg('sortable.moved', nameOf(item), p.pos, p.total));
    }
  };

  const onFocusOut = (event) => {
    const kb = state.kb;
    if (kb && !kb.moving && event.target === kb.handle) drop();
  };

  /* ── mouse e toque ── */
  let drag = null;
  let suppressClick = false;

  function startDrag() {
    const { item, x, y } = drag;
    const r = item.getBoundingClientRect();
    const clone = item.cloneNode(true);
    clone.removeAttribute('id');
    clone.querySelectorAll('[id]').forEach((el) => el.removeAttribute('id'));
    clone.setAttribute('aria-hidden', 'true');
    clone.classList.add('ds-sortable__item--drag');
    Object.assign(clone.style, { position: 'fixed', left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px`, margin: '0' });
    document.body.append(clone);
    item.dataset.ghost = '';
    document.documentElement.dataset.dsSorting = '';
    drag.started = true;
    drag.clone = clone;
    drag.dx = x - r.left;
    drag.dy = y - r.top;
    drag.from = item.parentElement;
    drag.oldIndex = items(drag.from).indexOf(item);
    drag.scroller = scrollParent(list);
    autoScroll();
  }

  function place(x, y) {
    const { item } = drag;
    const under = document.elementFromPoint(x, y)?.closest('.ds-sortable');
    const target = under && peers().includes(under) ? under : null;
    if (!target) return;
    drag.scroller = scrollParent(target);
    const h = instanceOf(target)?.horizontal ?? horizontal;
    const others = items(target).filter((el) => el !== item);
    let index = others.findIndex((el) => {
      // posição de layout: sem o deslocamento da animação de troca, que ainda pode estar no meio
      const r = el.getBoundingClientRect();
      const t = new DOMMatrixReadOnly(getComputedStyle(el).transform);
      return h ? x < r.left - t.m41 + r.width / 2 : y < r.top - t.m42 + r.height / 2;
    });
    if (index < 0) index = others.length;
    if (item.parentElement === target && items(target).indexOf(item) === index) return;
    flip(item.parentElement === target ? [target] : [target, item.parentElement], () => insertAt(target, item, index));
  }

  function autoScroll() {
    if (!drag?.started) return;
    const s = drag.scroller;
    const r = s === document.scrollingElement ? { top: 0, left: 0, bottom: innerHeight, right: innerWidth } : s.getBoundingClientRect();
    const speed = (d) => (d < EDGE ? Math.ceil((EDGE - d) / 4) : 0);
    const vy = speed(drag.y - r.top) ? -speed(drag.y - r.top) : speed(r.bottom - drag.y);
    const vx = speed(drag.x - r.left) ? -speed(drag.x - r.left) : speed(r.right - drag.x);
    if (vx || vy) {
      s.scrollBy(vx, vy);
      place(drag.x, drag.y);
    }
    drag.frame = requestAnimationFrame(autoScroll);
  }

  const onPointerDown = (event) => {
    if (event.button || state.kb) return;
    const item = event.target.closest('.ds-sortable__item');
    if (!item || item.parentElement !== list) return;
    const handle = handleOf(item);
    if (!handle.contains(event.target)) return;
    if (handle === item && event.target.closest('a, button, input, select, textarea, [contenteditable]')) return;
    const touchHold = event.pointerType === 'touch' && handle === item;
    drag = { item, x: event.clientX, y: event.clientY, startX: event.clientX, startY: event.clientY, started: false, id: event.pointerId };
    if (touchHold) drag.timer = setTimeout(() => drag && !drag.started && startDrag(), HOLD);
    else if (event.pointerType === 'mouse') event.preventDefault();
    addEventListener('pointermove', onPointerMove);
    addEventListener('pointerup', onPointerUp);
    addEventListener('pointercancel', onPointerCancel);
    addEventListener('keydown', onDragKey, true);
    addEventListener('touchmove', onTouchMove, { passive: false });
  };

  const onTouchMove = (event) => {
    if (drag?.started) event.preventDefault();
  };

  const onPointerMove = (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    drag.x = event.clientX;
    drag.y = event.clientY;
    if (!drag.started) {
      const far = Math.hypot(drag.x - drag.startX, drag.y - drag.startY) > THRESHOLD;
      if (!far) return;
      if (drag.timer) return cleanup(); // toque sem segurar: era rolagem
      startDrag();
    }
    drag.clone.style.translate = `${drag.x - drag.dx - parseFloat(drag.clone.style.left)}px ${drag.y - drag.dy - parseFloat(drag.clone.style.top)}px`;
    place(drag.x, drag.y);
  };

  function finish(cancel) {
    const { item, clone, from, oldIndex } = drag;
    if (cancel && (item.parentElement !== from || items(from).indexOf(item) !== oldIndex)) {
      flip([from, item.parentElement], () => insertAt(from, item, oldIndex));
    }
    const end = () => {
      clone.remove();
      delete item.dataset.ghost;
    };
    const r = item.getBoundingClientRect();
    const c = clone.getBoundingClientRect();
    if (reduced()) end();
    else clone.animate([{ transform: 'none' }, { transform: `translate(${r.left - c.left}px, ${r.top - c.top}px)` }], { duration: 140, easing: 'cubic-bezier(.2, 0, 0, 1)', fill: 'forwards' }).finished.then(end, end);
    if (cancel) return say(msg('sortable.canceled', nameOf(item)));
    if (emit(item, from, oldIndex)) {
      const p = position(item);
      say(item.parentElement === from ? msg('sortable.dropped', nameOf(item), p.pos, p.total) : msg('sortable.movedTo', nameOf(item), p.list, p.pos, p.total));
    }
  }

  function cleanup(cancel = false) {
    if (!drag) return;
    clearTimeout(drag.timer);
    cancelAnimationFrame(drag.frame);
    if (drag.started) {
      suppressClick = true;
      setTimeout(() => (suppressClick = false), 0);
      delete document.documentElement.dataset.dsSorting;
      finish(cancel);
    }
    drag = null;
    removeEventListener('pointermove', onPointerMove);
    removeEventListener('pointerup', onPointerUp);
    removeEventListener('pointercancel', onPointerCancel);
    removeEventListener('keydown', onDragKey, true);
    removeEventListener('touchmove', onTouchMove);
  }

  const onPointerUp = (event) => drag && event.pointerId === drag.id && cleanup();
  const onPointerCancel = (event) => drag && event.pointerId === drag.id && cleanup(drag.started);
  const onDragKey = (event) => {
    if (event.key === 'Escape' && drag?.started) {
      event.preventDefault();
      event.stopPropagation();
      cleanup(true);
    }
  };
  const onClick = (event) => {
    if (suppressClick) {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  const onLocale = () => refresh();

  list.classList.add('ds-sortable');
  if (horizontal) list.setAttribute('aria-orientation', 'horizontal');
  list.addEventListener('keydown', onKeyDown);
  list.addEventListener('focusout', onFocusOut);
  list.addEventListener('pointerdown', onPointerDown);
  list.addEventListener('click', onClick, true);
  document.addEventListener('ds:localechange', onLocale);
  refresh();

  return Object.assign(api, {
    el: list,
    horizontal,
    onChange: o.onChange,
    toArray: () => items().map((el) => el.dataset.id),
    refresh,
    destroy() {
      cleanup(true);
      if (state.kb && items().includes(state.kb.item)) drop(true);
      list.removeEventListener('keydown', onKeyDown);
      list.removeEventListener('focusout', onFocusOut);
      list.removeEventListener('pointerdown', onPointerDown);
      list.removeEventListener('click', onClick, true);
      document.removeEventListener('ds:localechange', onLocale);
      live.remove();
      state.members.delete(api);
      if (!state.members.size) GROUPS.delete(group);
    },
  });
}

/**
 * Kanban — colunas de cartões que passam de uma para outra. Cada .ds-kanban__list vira uma lista
 * arrastável do mesmo grupo; o número de cada coluna se atualiza sozinho.
 *
 *   <div class="ds-kanban" aria-label="Roadmap">
 *     <section class="ds-kanban__column" data-id="feito" data-label="Feito">
 *       <header class="ds-kanban__header"><h3 class="ds-kanban__title">Feito</h3><span class="ds-kanban__count"></span></header>
 *       <ul class="ds-kanban__list" role="list" aria-label="Feito">
 *         <li class="ds-sortable__item ds-kanban__card" data-id="carrossel"><p class="ds-kanban__card-title">Carrossel</p></li>
 *       </ul>
 *     </section>
 *   </div>
 *
 *   const kanban = createKanban(document.querySelector('.ds-kanban'), { onChange: (detail, columns) => {} });
 *   kanban.toObject(); // { feito: ['carrossel', …], … }
 */
export function createKanban(board, options = {}) {
  const o = { onChange: null, ...options };
  const group = Symbol('kanban');
  const lists = [...board.querySelectorAll('.ds-kanban__list')];
  const sortables = lists.map((l) => {
    l.classList.add('ds-sortable');
    return createSortable(l, { group, handle: l.dataset.handle || '.ds-sortable__handle' });
  });
  board.setAttribute('role', 'group');

  const columnOf = (l) => l.closest('.ds-kanban__column');
  const toObject = () => Object.fromEntries(sortables.map((s) => [columnOf(s.el)?.dataset.id ?? '', s.toArray()]));
  function counts() {
    sortables.forEach((s) => {
      const n = s.toArray().length;
      const count = columnOf(s.el)?.querySelector('.ds-kanban__count');
      if (count) count.textContent = numberFormat().format(n);
      s.el.toggleAttribute('data-empty', n === 0);
      s.el.dataset.emptyText = msg('kanban.empty');
    });
  }
  const onSort = (event) => {
    counts();
    o.onChange?.(event.detail, toObject());
  };
  board.addEventListener('ds:sortchange', onSort);
  document.addEventListener('ds:localechange', counts);
  counts();

  return {
    el: board,
    toObject,
    refresh() {
      sortables.forEach((s) => s.refresh());
      counts();
    },
    destroy() {
      board.removeEventListener('ds:sortchange', onSort);
      document.removeEventListener('ds:localechange', counts);
      sortables.forEach((s) => s.destroy());
    },
  };
}
