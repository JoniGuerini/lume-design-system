/**
 * Painéis redimensionáveis — dividir uma área em partes que a pessoa ajusta arrastando a divisória.
 *
 *   <div class="ds-resizable" aria-label="Editor">
 *     <div class="ds-resizable__panel" data-size="30" data-min="20" data-collapsible>…</div>
 *     <div class="ds-resizable__panel" data-min="240px">…</div>
 *   </div>
 *
 *   const panels = createResizable(document.querySelector('.ds-resizable'), {
 *     direction: 'horizontal', // ou 'vertical' (também pelo data-direction)
 *     sizes: [30, 70],         // em %; sem isso vale o data-size de cada painel, e o resto divide igual
 *     storageKey: 'editor',    // guarda o tamanho no navegador e devolve na próxima visita
 *     step: 2,                 // quanto cada seta anda, em %; com Shift, cinco vezes isso
 *     onChange: (sizes) => {}, // no fim de cada arrasto ou tecla
 *   });
 *   panels.sizes; panels.setSizes([40, 60]); panels.collapse(0); panels.expand(0); panels.reset(); panels.destroy();
 *
 * Limites por painel: data-min e data-max, em % (20) ou em px (240px). data-collapsible deixa o painel fechar
 * até zero: arrastar para menos da metade do mínimo fecha, e Enter na divisória abre e fecha.
 * Cada divisória mexe só nos dois painéis vizinhos. Duplo clique na divisória volta ao tamanho inicial.
 *
 * Acessibilidade (padrão ARIA de divisória que se move): role="separator" com foco, aria-valuenow em %,
 * aria-controls no painel de antes; setas mudam o tamanho, Home e End vão aos limites, Enter fecha e abre.
 */
import { msg } from './i18n.js';

const STORAGE = 'ds-resizable:';
let uid = 0;

const store = {
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(STORAGE + key));
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(STORAGE + key, JSON.stringify(value));
    } catch {}
  },
};

const round = (n) => Math.round(n * 100) / 100;

export function createResizable(root, options = {}) {
  const o = { direction: root.dataset.direction || 'horizontal', sizes: null, storageKey: null, step: 2, onChange: null, ...options };
  const vertical = o.direction === 'vertical';
  root.dataset.direction = vertical ? 'vertical' : 'horizontal';

  const panels = [...root.children].filter((el) => el.classList.contains('ds-resizable__panel'));
  if (panels.length < 2) throw new Error('createResizable: são precisos pelo menos dois .ds-resizable__panel');

  /* ── divisórias: usa as que estão na marcação e cria as que faltam ── */
  const created = [];
  const labeled = new Set();
  const handles = panels.slice(0, -1).map((panel, i) => {
    let handle = panel.nextElementSibling;
    if (!handle?.classList.contains('ds-resizable__handle')) {
      handle = document.createElement('div');
      handle.className = 'ds-resizable__handle';
      panel.after(handle);
      created.push(handle);
    }
    if (!handle.querySelector('.ds-resizable__grip')) {
      const grip = document.createElement('span');
      grip.className = 'ds-resizable__grip';
      grip.setAttribute('aria-hidden', 'true');
      handle.append(grip);
      created.push(grip);
    }
    if (!panel.id) panel.id = `ds-resizable-panel-${++uid}`;
    handle.setAttribute('role', 'separator');
    handle.setAttribute('aria-orientation', vertical ? 'horizontal' : 'vertical');
    handle.setAttribute('aria-controls', panel.id);
    if (!handle.hasAttribute('tabindex')) handle.tabIndex = 0;
    if (!handle.hasAttribute('aria-label') && !handle.hasAttribute('aria-labelledby')) labeled.add(handle);
    handle.dataset.index = i;
    return handle;
  });

  /* ── medidas ── */
  const panelSize = (el) => (vertical ? el.getBoundingClientRect().height : el.getBoundingClientRect().width);
  const total = () => panels.reduce((sum, p) => sum + panelSize(p), 0) || 1;
  const parse = (value, fallback) => {
    if (value == null || value === '') return fallback;
    const text = String(value).trim();
    if (text.endsWith('px')) return (parseFloat(text) / total()) * 100;
    const n = parseFloat(text);
    return Number.isFinite(n) ? n : fallback;
  };
  const min = (i) => Math.max(0, parse(panels[i].dataset.min, 0));
  const max = (i) => Math.min(100, parse(panels[i].dataset.max, 100));
  const collapsible = (i) => panels[i].hasAttribute('data-collapsible');

  function normalize(list) {
    const given = panels.map((p, i) => {
      const v = list?.[i];
      return Number.isFinite(v) ? v : null;
    });
    const used = given.reduce((s, v) => s + (v ?? 0), 0);
    const empty = given.filter((v) => v == null).length;
    const share = empty ? Math.max(0, 100 - used) / empty : 0;
    const filled = given.map((v) => v ?? share);
    const sum = filled.reduce((s, v) => s + v, 0) || 1;
    return filled.map((v) => (v / sum) * 100);
  }

  const initial = () => normalize(o.sizes ?? panels.map((p) => (p.dataset.size ? parse(p.dataset.size, null) : null)));
  const saved = o.storageKey ? store.get(o.storageKey) : null;
  let sizes = Array.isArray(saved) && saved.length === panels.length && saved.every(Number.isFinite) ? normalize(saved) : initial();
  const lastOpen = sizes.map((s, i) => (s > 0 ? s : Math.max(min(i), 100 / panels.length)));

  function apply() {
    panels.forEach((panel, i) => {
      panel.style.flex = `${round(sizes[i])} 1 0px`;
      const closed = sizes[i] === 0;
      panel.toggleAttribute('data-collapsed', closed);
      panel.inert = closed;
    });
    handles.forEach((handle, i) => {
      const pair = sizes[i] + sizes[i + 1];
      handle.setAttribute('aria-valuenow', String(Math.round(sizes[i])));
      handle.setAttribute('aria-valuemin', String(Math.round(collapsible(i) ? 0 : Math.max(min(i), pair - max(i + 1)))));
      handle.setAttribute('aria-valuemax', String(Math.round(Math.min(max(i), pair - (collapsible(i + 1) ? 0 : min(i + 1))))));
      if (labeled.has(handle)) handle.setAttribute('aria-label', msg('resizable.handle'));
    });
  }

  /**
   * Novo tamanho do painel i, tirando ou dando ao painel i + 1 (a soma dos dois não muda).
   * Respeita mínimo e máximo dos dois; painel que pode fechar fecha abaixo da metade do mínimo.
   */
  function resolve(i, want, pair) {
    const minA = min(i);
    const minB = min(i + 1);
    const maxA = max(i);
    const maxB = max(i + 1);
    if (collapsible(i) && want < minA / 2 && pair <= maxB) return 0;
    if (collapsible(i + 1) && pair - want < minB / 2 && pair <= maxA) return pair;
    const lo = Math.max(minA, pair - maxB);
    const hi = Math.min(maxA, pair - minB);
    if (lo > hi) return sizes[i]; // não cabe: fica como está
    return Math.min(hi, Math.max(lo, want));
  }

  function setPair(i, a, pair) {
    if (sizes[i] > 0) lastOpen[i] = sizes[i];
    if (sizes[i + 1] > 0) lastOpen[i + 1] = sizes[i + 1];
    sizes[i] = a;
    sizes[i + 1] = pair - a;
    apply();
  }

  function commit() {
    if (o.storageKey) store.set(o.storageKey, sizes.map(round));
    o.onChange?.(sizes.map(round));
  }

  /* ── arrastar ── */
  let drag = null;
  const rtl = () => !vertical && getComputedStyle(root).direction === 'rtl';
  const point = (event) => (vertical ? event.clientY : event.clientX);

  function onPointerDown(event) {
    const handle = event.target.closest('.ds-resizable__handle');
    if (!handle || handle.parentElement !== root || event.button !== 0) return;
    event.preventDefault();
    const i = Number(handle.dataset.index);
    drag = { i, handle, start: point(event), from: sizes.slice(), total: total(), flip: rtl() ? -1 : 1 };
    handle.setPointerCapture(event.pointerId);
    handle.setAttribute('data-dragging', '');
    document.documentElement.dataset.dsResizing = vertical ? 'vertical' : 'horizontal';
    handle.focus({ preventScroll: true });
  }

  function onPointerMove(event) {
    if (!drag) return;
    const { i, from } = drag;
    const delta = ((point(event) - drag.start) / drag.total) * 100 * drag.flip;
    const pair = from[i] + from[i + 1];
    setPair(i, resolve(i, from[i] + delta, pair), pair);
  }

  function onPointerUp(event) {
    if (!drag) return;
    const { handle, from } = drag;
    if (handle.hasPointerCapture?.(event.pointerId)) handle.releasePointerCapture(event.pointerId);
    handle.removeAttribute('data-dragging');
    delete document.documentElement.dataset.dsResizing;
    drag = null;
    if (sizes.some((s, n) => s !== from[n])) commit();
  }

  /* ── teclado ── */
  function onKeyDown(event) {
    const handle = event.target.closest('.ds-resizable__handle');
    if (!handle || handle.parentElement !== root) return;
    const i = Number(handle.dataset.index);
    const pair = sizes[i] + sizes[i + 1];
    const step = o.step * (event.shiftKey ? 5 : 1) * (rtl() ? -1 : 1);
    const less = vertical ? 'ArrowUp' : 'ArrowLeft';
    const more = vertical ? 'ArrowDown' : 'ArrowRight';
    let next = null;
    if (event.key === less) next = sizes[i] === pair ? pair - Math.max(min(i + 1), o.step) : resolve(i, sizes[i] - step, pair);
    else if (event.key === more) next = sizes[i] === 0 ? Math.max(min(i), o.step) : resolve(i, sizes[i] + step, pair);
    else if (event.key === 'Home') next = collapsible(i) ? 0 : resolve(i, 0, pair);
    else if (event.key === 'End') next = collapsible(i + 1) ? pair : resolve(i, pair, pair);
    else if (event.key === 'Enter') {
      const target = collapsible(i) ? i : collapsible(i + 1) ? i + 1 : null;
      if (target === null) return;
      event.preventDefault();
      if (sizes[target] === 0) expand(target);
      else collapse(target);
      return;
    } else return;
    event.preventDefault();
    if (next === sizes[i]) return;
    setPair(i, Math.min(pair, Math.max(0, next)), pair);
    commit();
  }

  function onDoubleClick(event) {
    const handle = event.target.closest('.ds-resizable__handle');
    if (!handle || handle.parentElement !== root) return;
    reset();
  }

  /* ── fechar e abrir pelo código ── */
  const neighbor = (i) => (i < panels.length - 1 ? i + 1 : i - 1);

  function collapse(i) {
    if (!collapsible(i) || sizes[i] === 0) return;
    const j = neighbor(i);
    lastOpen[i] = sizes[i];
    sizes[j] += sizes[i];
    sizes[i] = 0;
    apply();
    commit();
  }

  function expand(i) {
    if (sizes[i] > 0) return;
    const j = neighbor(i);
    const want = Math.max(min(i), Math.min(max(i), lastOpen[i] || min(i)));
    const give = Math.min(want, Math.max(0, sizes[j] - min(j)));
    if (give <= 0) return;
    sizes[i] = give;
    sizes[j] -= give;
    apply();
    commit();
  }

  function reset() {
    sizes = initial();
    apply();
    commit();
  }

  function setSizes(list) {
    sizes = normalize(list);
    apply();
    commit();
  }

  const onLocale = () => apply();
  // limites em px mudam de % quando a área muda de tamanho
  const resize = typeof ResizeObserver === 'function' ? new ResizeObserver(() => apply()) : null;

  apply();
  root.addEventListener('pointerdown', onPointerDown);
  root.addEventListener('pointermove', onPointerMove);
  root.addEventListener('pointerup', onPointerUp);
  root.addEventListener('pointercancel', onPointerUp);
  root.addEventListener('keydown', onKeyDown);
  root.addEventListener('dblclick', onDoubleClick);
  document.documentElement.addEventListener('ds:localechange', onLocale);
  resize?.observe(root);

  return {
    get sizes() {
      return sizes.map(round);
    },
    setSizes,
    collapse,
    expand,
    reset,
    destroy() {
      resize?.disconnect();
      root.removeEventListener('pointerdown', onPointerDown);
      root.removeEventListener('pointermove', onPointerMove);
      root.removeEventListener('pointerup', onPointerUp);
      root.removeEventListener('pointercancel', onPointerUp);
      root.removeEventListener('keydown', onKeyDown);
      root.removeEventListener('dblclick', onDoubleClick);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
      if (drag) delete document.documentElement.dataset.dsResizing;
      created.forEach((el) => el.remove());
      handles.forEach((handle) => {
        ['role', 'aria-orientation', 'aria-controls', 'aria-valuenow', 'aria-valuemin', 'aria-valuemax', 'data-index', 'data-dragging'].forEach((a) => handle.removeAttribute(a));
        if (labeled.has(handle)) handle.removeAttribute('aria-label');
      });
      panels.forEach((panel) => {
        panel.style.flex = '';
        panel.inert = false;
        panel.removeAttribute('data-collapsed');
      });
    },
  };
}
