/**
 * Visualizador de imagem — a imagem grande, com zoom, arrastar e as outras da galeria.
 *
 *   const viewer = openImageViewer(
 *     [{ src: 'grande.png', alt: 'Botões do Lume no tema claro', caption: 'Botão' }, 'outra.png'],
 *     { index: 0, onChange: (i) => {}, onClose: () => {} },
 *   );
 *   viewer.next(); viewer.prev(); viewer.go(2); viewer.zoomIn(); viewer.zoomOut(); viewer.fit(); viewer.close();
 *
 *   Ou, sem código por imagem: links com data-ds-viewer (o mesmo valor = mesma galeria).
 *   <a class="ds-viewer-thumb" href="grande.png" data-ds-viewer="botoes" data-caption="Botão"><img src="pequena.png" alt="…"></a>
 *   const unmount = mountImageViewer(document);
 *
 * Teclado: ← → trocam de imagem (com zoom, andam pela imagem), + e − aproximam e afastam, 0 ajusta à tela, Esc fecha.
 * Mouse: roda aproxima no ponto do cursor, duplo clique alterna 1× e 2×, arrastar move a imagem com zoom.
 * Toque: pinça aproxima, arrastar move. É um <dialog> modal: o foco fica dentro e volta para quem abriu.
 */
import { icon } from '../icons/icons.js';
import { msg, numberFormat } from './i18n.js';

const MIN = 1;
const MAX = 4;
const STEP = 1.5;
const escape = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const btn = (cls, name, label, extra = '') => `<button type="button" class="ds-icon-btn ds-icon-btn--sm ${cls}" aria-label="${escape(label)}"${extra}>${icon(name, { size: 18 })}</button>`;

const normalize = (images) => images.map((img) => (typeof img === 'string' ? { src: img, alt: '' } : { alt: '', ...img }));

export function openImageViewer(images, options = {}) {
  const list = normalize(images);
  const o = { index: 0, onChange: null, onClose: null, ...options };
  const opener = document.activeElement;
  let index = Math.max(0, Math.min(list.length - 1, o.index));
  let scale = 1;
  let x = 0;
  let y = 0;

  const dialog = document.createElement('dialog');
  dialog.className = 'ds-viewer';
  dialog.setAttribute('aria-label', msg('viewer.label'));
  const many = list.length > 1;
  dialog.innerHTML = `
    <div class="ds-viewer__bar">
      <div class="ds-viewer__info">
        ${many ? '<span class="ds-viewer__count" aria-live="polite"></span>' : ''}
        <p class="ds-viewer__caption"></p>
      </div>
      <div class="ds-viewer__tools">
        ${btn('', 'zoom-out', msg('viewer.zoomOut'), ' data-viewer="out"')}
        <span class="ds-viewer__zoom" aria-hidden="true"></span>
        ${btn('', 'zoom-in', msg('viewer.zoomIn'), ' data-viewer="in"')}
        ${btn('', 'maximize', msg('viewer.fit'), ' data-viewer="fit"')}
        <span class="ds-viewer__sep" aria-hidden="true"></span>
        ${btn('', 'x', msg('common.close'), ' data-viewer="close"')}
      </div>
    </div>
    <div class="ds-viewer__stage" tabindex="0" role="group" aria-roledescription="${escape(msg('viewer.stage'))}">
      <img class="ds-viewer__img" alt="" draggable="false">
      <div class="ds-viewer__status" role="status"></div>
    </div>
    ${many ? `<button type="button" class="ds-icon-btn ds-viewer__nav ds-viewer__nav--prev" data-viewer="prev" aria-label="${escape(msg('viewer.prev'))}">${icon('chevron-left', { size: 20 })}</button>
    <button type="button" class="ds-icon-btn ds-viewer__nav ds-viewer__nav--next" data-viewer="next" aria-label="${escape(msg('viewer.next'))}">${icon('chevron-right', { size: 20 })}</button>` : ''}`;

  const $ = (sel) => dialog.querySelector(sel);
  const stage = $('.ds-viewer__stage');
  const img = $('.ds-viewer__img');
  const status = $('.ds-viewer__status');
  const zoomOut = $('[data-viewer="out"]');
  const zoomIn = $('[data-viewer="in"]');
  const fitBtn = $('[data-viewer="fit"]');

  /* ── zoom e posição ── */
  function clamp() {
    const w = img.offsetWidth * scale;
    const h = img.offsetHeight * scale;
    const r = stage.getBoundingClientRect();
    const mx = Math.max(0, (w - r.width) / 2);
    const my = Math.max(0, (h - r.height) / 2);
    x = Math.max(-mx, Math.min(mx, x));
    y = Math.max(-my, Math.min(my, y));
  }
  function apply() {
    if (scale <= MIN) {
      scale = MIN;
      x = 0;
      y = 0;
    }
    clamp();
    img.style.transform = scale === 1 ? '' : `translate(${x}px, ${y}px) scale(${scale})`;
    dialog.toggleAttribute('data-zoomed', scale > 1);
    $('.ds-viewer__zoom').textContent = numberFormat({ style: 'percent' }).format(scale);
    zoomOut.disabled = scale <= MIN;
    zoomIn.disabled = scale >= MAX;
    fitBtn.disabled = scale === 1;
  }
  /** Zoom num ponto (px a partir do centro do palco): o ponto fica sob o cursor. */
  function zoomTo(next, px = 0, py = 0) {
    const s = Math.max(MIN, Math.min(MAX, next));
    x = px - ((px - x) * s) / scale;
    y = py - ((py - y) * s) / scale;
    scale = s;
    apply();
  }
  const fromCenter = (event) => {
    const r = stage.getBoundingClientRect();
    return [event.clientX - r.left - r.width / 2, event.clientY - r.top - r.height / 2];
  };

  /* ── imagem atual ── */
  function show(i) {
    index = (i + list.length) % list.length;
    const item = list[index];
    scale = 1;
    x = 0;
    y = 0;
    img.hidden = true;
    status.hidden = false;
    status.innerHTML = `<span class="ds-spinner" aria-hidden="true"></span><span class="ds-visually-hidden">${escape(msg('common.loading'))}</span>`;
    img.onload = () => {
      img.hidden = false;
      status.hidden = true;
      status.textContent = '';
      apply();
    };
    img.onerror = () => {
      status.innerHTML = `${icon('image', { size: 24 })}<span>${escape(msg('viewer.error'))}</span>`;
    };
    img.alt = item.alt ?? '';
    img.src = item.src;
    $('.ds-viewer__caption').textContent = item.caption ?? item.alt ?? '';
    const count = $('.ds-viewer__count');
    if (count) count.textContent = msg('viewer.count', index + 1, list.length);
    apply();
    o.onChange?.(index);
  }

  /* ── eventos ── */
  const pointers = new Map();
  let drag = null;
  let pinch = null;
  const onDown = (event) => {
    if (event.button !== 0 && event.pointerType === 'mouse') return;
    pointers.set(event.pointerId, [event.clientX, event.clientY]);
    stage.setPointerCapture(event.pointerId);
    if (pointers.size === 2) {
      const [[ax, ay], [bx, by]] = [...pointers.values()];
      pinch = { dist: Math.hypot(ax - bx, ay - by), scale };
      drag = null;
    } else if (scale > 1) {
      drag = { sx: event.clientX, sy: event.clientY, x, y };
      dialog.setAttribute('data-dragging', '');
    }
  };
  const onMove = (event) => {
    if (!pointers.has(event.pointerId)) return;
    pointers.set(event.pointerId, [event.clientX, event.clientY]);
    if (pinch && pointers.size === 2) {
      const [[ax, ay], [bx, by]] = [...pointers.values()];
      const r = stage.getBoundingClientRect();
      zoomTo((pinch.scale * Math.hypot(ax - bx, ay - by)) / pinch.dist, (ax + bx) / 2 - r.left - r.width / 2, (ay + by) / 2 - r.top - r.height / 2);
    } else if (drag) {
      x = drag.x + event.clientX - drag.sx;
      y = drag.y + event.clientY - drag.sy;
      apply();
    }
  };
  const onUp = (event) => {
    pointers.delete(event.pointerId);
    if (pointers.size < 2) pinch = null;
    if (!pointers.size) {
      drag = null;
      dialog.removeAttribute('data-dragging');
    }
  };
  const onWheel = (event) => {
    event.preventDefault();
    zoomTo(scale * Math.exp(-event.deltaY * 0.002), ...fromCenter(event));
  };
  const onDouble = (event) => (scale > 1 ? zoomTo(1) : zoomTo(2, ...fromCenter(event)));
  const PAN = 64;
  const onKey = (event) => {
    if (event.target.closest('button') && (event.key === 'Enter' || event.key === ' ')) return;
    const k = event.key;
    if (k === '+' || k === '=') zoomTo(scale * STEP);
    else if (k === '-' || k === '_') zoomTo(scale / STEP);
    else if (k === '0') zoomTo(1);
    else if (scale > 1 && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(k)) {
      x += k === 'ArrowLeft' ? PAN : k === 'ArrowRight' ? -PAN : 0;
      y += k === 'ArrowUp' ? PAN : k === 'ArrowDown' ? -PAN : 0;
      apply();
    } else if (many && k === 'ArrowLeft') show(index - 1);
    else if (many && k === 'ArrowRight') show(index + 1);
    else if (many && k === 'Home') show(0);
    else if (many && k === 'End') show(list.length - 1);
    else return;
    event.preventDefault();
  };
  const onClick = (event) => {
    const action = event.target.closest('[data-viewer]')?.dataset.viewer;
    if (action === 'close') close();
    else if (action === 'prev') show(index - 1);
    else if (action === 'next') show(index + 1);
    else if (action === 'in') zoomTo(scale * STEP);
    else if (action === 'out') zoomTo(scale / STEP);
    else if (action === 'fit') zoomTo(1);
    // clique no fundo vazio fecha, como num modal
    else if (event.target === stage && scale === 1 && !drag) close();
  };
  const onResize = () => apply();

  stage.addEventListener('pointerdown', onDown);
  stage.addEventListener('pointermove', onMove);
  stage.addEventListener('pointerup', onUp);
  stage.addEventListener('pointercancel', onUp);
  stage.addEventListener('wheel', onWheel, { passive: false });
  stage.addEventListener('dblclick', onDouble);
  dialog.addEventListener('keydown', onKey);
  dialog.addEventListener('click', onClick);
  addEventListener('resize', onResize);

  let closed = false;
  function close() {
    if (closed) return;
    closed = true;
    removeEventListener('resize', onResize);
    if (dialog.open) dialog.close();
  }
  dialog.addEventListener('close', () => {
    closed = true;
    removeEventListener('resize', onResize);
    dialog.remove();
    if (opener?.isConnected) opener.focus({ preventScroll: true });
    o.onClose?.();
  });

  document.body.append(dialog);
  dialog.showModal();
  stage.focus({ preventScroll: true });
  show(index);

  return {
    el: dialog,
    get index() {
      return index;
    },
    get zoom() {
      return scale;
    },
    go: (i) => show(i),
    next: () => show(index + 1),
    prev: () => show(index - 1),
    zoomIn: () => zoomTo(scale * STEP),
    zoomOut: () => zoomTo(scale / STEP),
    fit: () => zoomTo(1),
    close,
  };
}

/** Liga os links com data-ds-viewer de uma área: clicar abre a galeria do mesmo grupo. Devolve a função que desliga. */
export function mountImageViewer(area = document, { selector = '[data-ds-viewer]', ...options } = {}) {
  const onClick = (event) => {
    const link = event.target.closest(selector);
    if (!link || !area.contains(link) || event.ctrlKey || event.metaKey || event.shiftKey || event.button) return;
    event.preventDefault();
    const group = link.getAttribute('data-ds-viewer');
    const links = group ? [...area.querySelectorAll(selector)].filter((l) => l.getAttribute('data-ds-viewer') === group) : [link];
    const images = links.map((l) => {
      const thumb = l.querySelector('img');
      return { src: l.getAttribute('href') || thumb?.currentSrc || thumb?.src, alt: l.dataset.alt ?? thumb?.alt ?? '', caption: l.dataset.caption };
    });
    openImageViewer(images, { ...options, index: links.indexOf(link) });
  };
  area.addEventListener('click', onClick);
  return () => area.removeEventListener('click', onClick);
}
