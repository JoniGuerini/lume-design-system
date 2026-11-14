/**
 * Carrossel — destaques e galerias que passam um por vez.
 *
 *   <section class="ds-carousel" aria-label="Destaques">
 *     <div class="ds-carousel__viewport">
 *       <div class="ds-carousel__slide">…</div> …
 *     </div>
 *   </section>
 *
 *   const carousel = createCarousel(document.querySelector('.ds-carousel'), {
 *     loop: false,          // depois do último volta ao primeiro
 *     autoplay: 0,          // ms entre um slide e outro; 0 desliga. Com autoplay sempre há o botão de pausa
 *     dots: true,           // pontos para ir direto a um slide
 *     count: true,          // “2 / 5”
 *     onChange: (index) => {},
 *   });
 *   carousel.next(); carousel.prev(); carousel.goTo(2); carousel.pause(); carousel.play(); carousel.destroy();
 *
 * Quantos aparecem de uma vez vem do CSS (--ds-carousel-per-view), então muda com media query sem mexer aqui.
 * Arrastar é a rolagem nativa (scroll-snap): toque, trackpad e Shift + roda funcionam sem código.
 *
 * Acessibilidade (padrão ARIA de carrossel): aria-roledescription “carrossel” e “slide”, cada slide com “2 de 5”,
 * os que estão fora da vista ficam inert (o Tab não cai neles), setas ← → Home End na área dos slides.
 * Com autoplay: para com o mouse em cima ou o foco dentro, não começa com prefers-reduced-motion e o anúncio
 * do leitor de tela só liga quando está parado (aria-live off enquanto passa sozinho).
 */
import { icon } from '../icons/icons.js';
import { msg } from './i18n.js';

const reduceMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export function createCarousel(root, options = {}) {
  const o = { loop: false, autoplay: 0, dots: true, count: true, ...options };
  const viewport = root.querySelector('.ds-carousel__viewport');
  if (!viewport) throw new Error('createCarousel: falta .ds-carousel__viewport');
  const slides = () => [...viewport.children].filter((el) => el.classList.contains('ds-carousel__slide'));
  // rótulo próprio do slide (aria-label ou aria-labelledby) fica; os outros ganham “2 de 5”
  const own = new WeakSet(slides().filter((s) => s.hasAttribute('aria-label') || s.hasAttribute('aria-labelledby')));

  let index = 0;
  let stops = 1; // posições possíveis: slides − por vista + 1
  let userPaused = reduceMotion();
  let hovered = false;
  let focused = false;
  let timer = null;
  let frame = 0;
  let target = null; // durante a rolagem pedida por código, a rolagem não mexe no índice
  let settle = 0;

  const bar = document.createElement('div');
  bar.className = 'ds-carousel__bar';
  root.append(bar);

  const perView = () => Math.max(1, Math.round(Number(getComputedStyle(root).getPropertyValue('--ds-carousel-per-view')) || 1));
  const step = () => {
    const [a, b] = slides();
    if (!a) return 1;
    return b ? b.offsetLeft - a.offsetLeft : a.offsetWidth;
  };
  const rolling = () => Boolean(o.autoplay) && !userPaused && !hovered && !focused;

  function renderBar() {
    const parts = [];
    if (o.autoplay) {
      const label = userPaused ? msg('carousel.play') : msg('carousel.pause');
      parts.push(`<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-carousel="toggle" aria-label="${label}">${icon(userPaused ? 'play' : 'pause', { size: 16 })}</button>`);
    }
    parts.push(
      `<div class="ds-carousel__dots"${o.dots && stops > 1 ? '' : ' hidden'}>${Array.from(
        { length: stops },
        (_, i) => `<button type="button" class="ds-carousel__dot" data-carousel-dot="${i}" aria-label="${msg('carousel.goTo', i + 1)}"${i === index ? ' aria-current="true"' : ''}></button>`,
      ).join('')}</div>`,
    );
    if (o.count && stops > 1) parts.push(`<span class="ds-carousel__count" aria-hidden="true">${index + 1} / ${stops}</span>`);
    parts.push(`<div class="ds-carousel__nav"${stops > 1 ? '' : ' hidden'}>
      <button type="button" class="ds-icon-btn ds-icon-btn--muted" data-carousel="prev" aria-label="${msg('carousel.prev')}">${icon('chevron-left', { size: 20 })}</button>
      <button type="button" class="ds-icon-btn ds-icon-btn--muted" data-carousel="next" aria-label="${msg('carousel.next')}">${icon('chevron-right', { size: 20 })}</button>
    </div>`);
    bar.innerHTML = parts.join('');
    syncBar();
  }

  function syncBar() {
    bar.querySelectorAll('[data-carousel-dot]').forEach((dot) => {
      if (Number(dot.dataset.carouselDot) === index) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
    const count = bar.querySelector('.ds-carousel__count');
    if (count) count.textContent = `${index + 1} / ${stops}`;
    const prev = bar.querySelector('[data-carousel="prev"]');
    const next = bar.querySelector('[data-carousel="next"]');
    const focusedArrow = [prev, next].find((b) => b && b === document.activeElement);
    if (prev) prev.disabled = !o.loop && index === 0;
    if (next) next.disabled = !o.loop && index === stops - 1;
    // a seta com foco chegou à ponta: o foco passa para a outra, em vez de cair no body
    if (focusedArrow?.disabled) (focusedArrow === prev ? next : prev)?.focus();
  }

  function syncSlides() {
    const list = slides();
    const view = perView();
    list.forEach((slide, i) => {
      const visible = i >= index && i < index + view;
      slide.setAttribute('role', 'group');
      slide.setAttribute('aria-roledescription', msg('carousel.slide'));
      if (!own.has(slide)) slide.setAttribute('aria-label', msg('carousel.position', i + 1, list.length));
      slide.inert = !visible;
      if (visible) slide.removeAttribute('aria-hidden');
      else slide.setAttribute('aria-hidden', 'true');
    });
  }

  function measure() {
    stops = Math.max(1, slides().length - perView() + 1);
    index = Math.min(index, stops - 1);
  }

  function setIndex(next, { notify = true } = {}) {
    if (next === index) return;
    index = next;
    syncBar();
    syncSlides();
    if (notify) o.onChange?.(index);
  }

  function goTo(target, { smooth = true } = {}) {
    let next = target;
    if (o.loop) next = ((target % stops) + stops) % stops;
    next = Math.min(Math.max(next, 0), stops - 1);
    const animate = smooth && !reduceMotion();
    target = animate ? next : null;
    clearTimeout(settle);
    if (animate) settle = setTimeout(() => (target = null), 900);
    viewport.scrollTo({ left: next * step(), behavior: animate ? 'smooth' : 'auto' });
    setIndex(next);
  }

  const onScrollEnd = () => {
    target = null;
  };

  const onScroll = () => {
    if (target !== null) return;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => setIndex(Math.min(stops - 1, Math.max(0, Math.round(viewport.scrollLeft / step())))));
  };

  function schedule() {
    clearInterval(timer);
    timer = null;
    viewport.setAttribute('aria-live', rolling() ? 'off' : 'polite');
    if (rolling()) timer = setInterval(() => goTo(index === stops - 1 ? 0 : index + 1), o.autoplay);
  }

  function setPaused(value) {
    userPaused = value;
    renderBar();
    schedule();
  }

  const onBarClick = (event) => {
    const dot = event.target.closest('[data-carousel-dot]');
    if (dot) return goTo(Number(dot.dataset.carouselDot));
    const action = event.target.closest('[data-carousel]')?.dataset.carousel;
    if (action === 'prev') goTo(index - 1);
    if (action === 'next') goTo(index + 1);
    if (action === 'toggle') {
      setPaused(!userPaused);
      bar.querySelector('[data-carousel="toggle"]')?.focus();
    }
  };

  const onKey = (event) => {
    if (event.target !== viewport) return;
    const keys = { ArrowLeft: index - 1, ArrowRight: index + 1, Home: 0, End: stops - 1 };
    if (!(event.key in keys)) return;
    event.preventDefault();
    goTo(keys[event.key]);
  };

  const onEnter = () => { hovered = true; schedule(); };
  const onLeave = () => { hovered = false; schedule(); };
  const onFocusIn = () => { focused = true; schedule(); };
  const onFocusOut = (event) => {
    if (root.contains(event.relatedTarget)) return;
    focused = false;
    schedule();
  };
  const onLocale = () => {
    root.setAttribute('aria-roledescription', msg('carousel.label'));
    renderBar();
    syncSlides();
  };

  const resize = typeof ResizeObserver === 'function'
    ? new ResizeObserver(() => {
        const before = stops;
        measure();
        if (before !== stops) renderBar();
        syncSlides();
        viewport.scrollTo({ left: index * step(), behavior: 'auto' });
      })
    : null;

  root.setAttribute('aria-roledescription', msg('carousel.label'));
  if (!viewport.hasAttribute('tabindex')) viewport.tabIndex = 0;
  measure();
  renderBar();
  syncSlides();
  schedule();

  bar.addEventListener('click', onBarClick);
  viewport.addEventListener('scroll', onScroll, { passive: true });
  viewport.addEventListener('scrollend', onScrollEnd);
  viewport.addEventListener('keydown', onKey);
  root.addEventListener('pointerenter', onEnter);
  root.addEventListener('pointerleave', onLeave);
  root.addEventListener('focusin', onFocusIn);
  root.addEventListener('focusout', onFocusOut);
  document.documentElement.addEventListener('ds:localechange', onLocale);
  resize?.observe(viewport);

  return {
    get index() {
      return index;
    },
    get paused() {
      return userPaused;
    },
    goTo: (i) => goTo(i),
    next: () => goTo(index + 1),
    prev: () => goTo(index - 1),
    pause: () => setPaused(true),
    play: () => setPaused(false),
    destroy() {
      clearInterval(timer);
      cancelAnimationFrame(frame);
      resize?.disconnect();
      bar.removeEventListener('click', onBarClick);
      viewport.removeEventListener('scroll', onScroll);
      viewport.removeEventListener('scrollend', onScrollEnd);
      clearTimeout(settle);
      viewport.removeEventListener('keydown', onKey);
      root.removeEventListener('pointerenter', onEnter);
      root.removeEventListener('pointerleave', onLeave);
      root.removeEventListener('focusin', onFocusIn);
      root.removeEventListener('focusout', onFocusOut);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
      bar.remove();
      root.removeAttribute('aria-roledescription');
      viewport.removeAttribute('aria-live');
      slides().forEach((slide) => {
        slide.inert = false;
        ['role', 'aria-roledescription', 'aria-hidden', ...(own.has(slide) ? [] : ['aria-label'])].forEach((a) => slide.removeAttribute(a));
      });
    },
  };
}
