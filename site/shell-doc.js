/**
 * Peças das páginas Sidebar e Navbar (Componentes › Navegação): o app de verdade num iframe,
 * a anatomia com marcadores medidos no DOM e os dados dos exemplos, tirados do mapa do site.
 * O visual reaproveita o CSS da página App shell (prefixo pa-); o que é só destas duas páginas usa sh-.
 */
import { icon } from '../ds/icons/icons.js';
import { tokens } from '../ds/tokens.js';
import { resolvedTheme } from '../ds/js/theme.js';
import { locale } from '../ds/js/i18n.js';
import { themeSwitch, markThemeSwitch } from './themes.js';
import { navigation } from './nav.js';
import { L } from './i18n.js';

export const ic = (s) => `<code class="ds-inline-code">${s}</code>`;
const byName = new Map(tokens.map((t) => [t.name, t]));
export const px = (name) => byName.get(name)?.px ?? '—';
export const kbd = (keys) => keys.map((k) => `<kbd class="ds-kbd">${k}</kbd>`).join('');
/** Fora do site (Storybook mostra uma seção por história), os botões que levam a outra seção não têm para onde ir. */
export function dropJumps(root) {
  if (inSite()) return;
  root.querySelectorAll('[data-try], [data-try-width], [data-try-menu]').forEach((b) => b.remove());
}

export const embedded = () => document.documentElement.hasAttribute('data-embed');
// fora do site (Storybook), não há o app para pôr no iframe
function inSite() {
  return !!document.getElementById('main-scroll');
}

/* ───────── Dados dos exemplos: as páginas do próprio Lume ───────── */

const toItem = (group) => (item) => ({ label: item.label, icon: item.icon, href: `#${item.path}`, section: group.sectionLabel?.(item.section) ?? '' });

/** Grupos no formato de renderSidebarNav/renderNavbarNav. pick: { grupo: n } limita os itens de cada grupo. */
export function siteGroups({ pick, only } = {}) {
  return navigation
    .filter((g) => !only || only.includes(g.id))
    .map((g) => {
      let items = g.items.map(toItem(g));
      if (pick?.[g.id]) items = pick[g.id](items);
      return { id: g.id, label: g.id === 'main' ? undefined : g.label, items };
    });
}

/* ───────── Tabelas ───────── */

export function keyTable(rows) {
  return `<div class="doc-table pa-keys">
    <div class="doc-table__head" aria-hidden="true"><span>${L('Teclas', 'Keys', 'Teclas')}</span><span>${L('Ação', 'Action', 'Acción')}</span><span>${L('Detalhe', 'Detail', 'Detalle')}</span></div>
    ${rows
      .map(
        ([keys, action, detail]) => `<div class="doc-table__row">
          <span class="pa-keys__keys">${kbd(keys)}</span>
          <span class="pa-keys__action">${action}</span>
          <span class="pa-keys__detail">${detail}</span>
        </div>`,
      )
      .join('')}
  </div>`;
}

export function apiTable(rows) {
  return `<div class="doc-table pa-api">
    <div class="doc-table__head" aria-hidden="true"><span>API</span><span>${L('O que faz', 'What it does', 'Qué hace')}</span></div>
    ${rows.map(([api, text]) => `<div class="doc-table__row"><code class="pa-api__name">${api}</code><span class="pa-api__text">${text}</span></div>`).join('')}
  </div>`;
}

export function cards(items) {
  return `<div class="pa-cards">
    ${items
      .map(
        ([glyph, title, text]) => `<article class="pa-card">
          <span class="pa-card__icon">${icon(glyph, { size: 20 })}</span>
          <p class="pa-card__title">${title}</p>
          <p class="pa-card__text">${text}</p>
        </article>`,
      )
      .join('')}
  </div>`;
}

export function steps(items) {
  return `<ol class="pa-steps" role="list">
    ${items.map(([title, text], i) => `<li><span class="pa-steps__num">${i + 1}</span><div><p class="pa-steps__title">${title}</p><p class="pa-steps__text">${text}</p></div></li>`).join('')}
  </ol>`;
}

/* ───────── Anatomia: marcadores sobre um exemplo de verdade ───────── */

// parts: [seletor, [x, y] em fração da caixa + deslocamento em px, nome, descrição, seletor do destaque?]
export function anatomyHtml(stage, parts) {
  return `<div class="pa-anatomy sh-anatomy">
    <div class="sh-anatomy__stage" data-anatomy-stage>
      ${stage}
      <div class="pa-anatomy__marks" data-marks aria-hidden="true"></div>
    </div>
    <ol class="pa-anatomy__list" role="list">
      ${parts
        .map(
          ([, , name, text], i) => `<li><button type="button" class="pa-anatomy__item" data-part="${i}">
            <span class="pa-anatomy__num">${i + 1}</span>
            <span><span class="pa-anatomy__name">${name}</span><span class="pa-anatomy__text">${text}</span></span>
          </button></li>`,
        )
        .join('')}
    </ol>
  </div>`;
}

export function mountAnatomy(root, parts) {
  const stage = root.querySelector('[data-anatomy-stage]');
  if (!stage) return () => {};
  const marks = stage.querySelector('[data-marks]');
  const list = root.querySelector('.sh-anatomy .pa-anatomy__list');

  function place() {
    const s = stage.getBoundingClientRect();
    const measure = (sel) => {
      const el = sel && [...stage.querySelectorAll(sel)].find((n) => n.getClientRects().length && !n.closest('[data-marks]'));
      const b = el?.getBoundingClientRect();
      return b && b.width ? { left: b.left - s.left, top: b.top - s.top, width: b.width, height: b.height } : null;
    };
    marks.innerHTML = parts
      .map(([sel, [ax, ay, dx, dy], , , boxSel], i) => {
        const r = measure(sel);
        if (!r) return '';
        const b = measure(boxSel) ?? r;
        return `<span class="pa-anatomy__box" data-box="${i}" style="left:${b.left}px;top:${b.top}px;width:${b.width}px;height:${b.height}px"></span><span class="pa-anatomy__pin" data-pin="${i}" style="left:${r.left + r.width * ax + dx}px;top:${r.top + r.height * ay + dy}px">${i + 1}</span>`;
      })
      .join('');
    root.querySelectorAll('.sh-anatomy [data-part]').forEach((b, i) => b.toggleAttribute('data-missing', !marks.querySelector(`[data-pin="${i}"]`)));
  }

  const highlight = (i) => {
    marks.querySelectorAll('[data-box]').forEach((b) => b.toggleAttribute('data-on', b.dataset.box === String(i)));
    marks.querySelectorAll('[data-pin]').forEach((p) => p.toggleAttribute('data-on', p.dataset.pin === String(i)));
    list.querySelectorAll('[data-part]').forEach((b) => b.toggleAttribute('data-on', b.dataset.part === String(i)));
  };
  const onOver = (e) => highlight(e.target.closest('[data-part]')?.dataset.part ?? null);
  const onOut = () => highlight(null);
  list.addEventListener('pointerover', onOver);
  list.addEventListener('focusin', onOver);
  list.addEventListener('pointerleave', onOut);
  list.addEventListener('focusout', onOut);

  let raf = 0;
  const later = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(place);
  };
  const ro = new ResizeObserver(later);
  ro.observe(stage);
  // a navbar esconde itens e compacta a busca depois de medir: os marcadores acompanham
  const mo = new MutationObserver(later);
  mo.observe(stage, { subtree: true, attributes: true, attributeFilter: ['hidden', 'data-compact', 'data-open'] });
  place();
  document.fonts?.ready.then(later);

  return () => {
    ro.disconnect();
    mo.disconnect();
    cancelAnimationFrame(raf);
    list.removeEventListener('pointerover', onOver);
    list.removeEventListener('focusin', onOver);
    list.removeEventListener('pointerleave', onOut);
    list.removeEventListener('focusout', onOut);
  };
}

/** Exemplo sem navegar de verdade: o clique num link só marca a página atual. */
export function keepInPlace(el, onPick) {
  const onClick = (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || !el.contains(a)) return;
    e.preventDefault();
    onPick?.(a.getAttribute('href'), a);
  };
  el.addEventListener('click', onClick);
  return () => el.removeEventListener('click', onClick);
}

/* ───────── O app de verdade num iframe ───────── */

const DEVICES = () => [
  { value: 'desktop', label: L('Desktop', 'Desktop', 'Escritorio'), w: 1280, h: 800 },
  { value: 'tablet', label: 'Tablet', w: 820, h: 1000 },
  { value: 'phone', label: L('Celular', 'Phone', 'Móvil'), w: 390, h: 780 },
];

const segmented = (name, label, options, value) => `
  <div class="ds-segmented pa-segmented" role="radiogroup" aria-label="${label}" data-segmented="${name}">
    ${options.map((o) => `<button type="button" class="ds-segmented__item" role="radio" data-value="${o.value}" aria-checked="${o.value === value}" tabindex="${o.value === value ? 0 : -1}">${o.label}</button>`).join('')}
  </div>`;

/** O app inteiro, no layout pedido. */
export function liveAppHtml(layout) {
  if (embedded() || !inSite())
    return `<div class="pa-device pa-device--off"><p>${icon('app-shell', { size: 20 })}${
      embedded()
        ? L('O exemplo fica desligado aqui dentro — senão seria um app dentro do app, dentro do app…', 'The example is off in here — otherwise it would be an app inside the app, inside the app…', 'El ejemplo queda apagado aquí dentro — si no, sería una app dentro de la app, dentro de la app…')
        : L('O exemplo com o app inteiro só roda no site do Lume.', 'The full-app example only runs on the Lume site.', 'El ejemplo con la app entera solo funciona en el sitio de Lume.')
    }</p></div>`;
  return `<div class="pa-demo">
    <div class="pa-demo__toolbar">
      ${segmented('device', L('Tamanho da tela', 'Screen size', 'Tamaño de pantalla'), DEVICES(), 'desktop')}
      <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-demo-toggle disabled>${icon(layout === 'navbar' ? 'menu' : 'panel-left', { size: 16 })}<span data-demo-toggle-label>${layout === 'navbar' ? L('Abrir gaveta', 'Open drawer', 'Abrir cajón') : L('Recolher menu', 'Collapse menu', 'Contraer menú')}</span></button>
      <span class="pa-demo__spacer"></span>
      ${themeSwitch('demo-theme', resolvedTheme())}
      <button type="button" class="ds-icon-btn ds-icon-btn--muted" data-demo-reload aria-label="${L('Recarregar o exemplo', 'Reload the example', 'Recargar el ejemplo')}" data-ds-tooltip="${L('Recarregar o exemplo', 'Reload the example', 'Recargar el ejemplo')}">${icon('refresh', { size: 18 })}</button>
    </div>
    <div class="pa-device" data-device-frame="live">
      <div class="pa-device__viewport" data-viewport>
        <iframe class="pa-device__iframe" data-iframe="live" title="${L('Exemplo ao vivo do Lume', 'Live Lume example', 'Ejemplo en vivo de Lume')}"></iframe>
      </div>
      <p class="pa-device__loading" data-loading>${icon('loader', { size: 18 })}${L('Carregando o app…', 'Loading the app…', 'Cargando la app…')}</p>
    </div>
    <p class="pa-demo__status" data-demo-status aria-live="polite"></p>
  </div>`;
}

function fitDevice(frameEl, size, maxHeight) {
  const viewport = frameEl.querySelector('[data-viewport]');
  const avail = frameEl.clientWidth;
  const scale = Math.min(1, avail / size.w, maxHeight / size.h);
  viewport.style.width = `${size.w}px`;
  viewport.style.height = `${size.h}px`;
  viewport.style.transform = `scale(${scale})`;
  viewport.style.left = `${Math.max(0, (avail - size.w * scale) / 2)}px`;
  frameEl.style.height = `${Math.round(size.h * scale)}px`;
}

function whenReady(iframe, cb) {
  let tries = 0;
  let timer;
  const check = () => {
    const api = iframe.contentWindow?.lumeEmbed;
    if (api) return cb(api);
    if (++tries < 80) timer = setTimeout(check, 100);
  };
  const onLoad = () => {
    clearTimeout(timer);
    tries = 0;
    check();
  };
  iframe.addEventListener('load', onLoad);
  return () => {
    clearTimeout(timer);
    iframe.removeEventListener('load', onLoad);
  };
}

/**
 * Liga o exemplo do app: tamanho da tela, recolher (ou abrir a gaveta), tema e recarregar.
 * Devolve { off, api(), setDevice(value) }.
 */
export function mountLiveApp(root, { layout, route = '#/' }) {
  const live = root.querySelector('[data-device-frame="live"]');
  if (!live) return { off: () => {}, api: () => null, setDevice: () => {} };
  const devices = DEVICES();
  const iframe = live.querySelector('iframe');
  const toggleBtn = root.querySelector('[data-demo-toggle]');
  const toggleLabel = root.querySelector('[data-demo-toggle-label]');
  const status = root.querySelector('[data-demo-status]');
  const toolbar = root.querySelector('.pa-demo__toolbar');
  const group = toolbar.querySelector('[data-segmented="device"]');
  let theme = resolvedTheme();
  let device = devices[0];
  let api = null;
  const src = () => `index.html?embed&theme=${theme}&layout=${layout}${route}`;
  const maxHeight = () => Math.min(620, Math.max(360, innerHeight * 0.68));
  const fit = () => fitDevice(live, device, maxHeight());

  function describe() {
    if (!api) return;
    const { mobile, mobileOpen, collapsed } = api.shell;
    // na navbar, o botão só vale no celular (gaveta)
    toggleBtn.disabled = !mobile && layout === 'navbar';
    const mode = mobile
      ? mobileOpen
        ? L('Gaveta aberta', 'Drawer open', 'Cajón abierto')
        : L('Gaveta fechada', 'Drawer closed', 'Cajón cerrado')
      : layout === 'navbar'
        ? 'Navbar'
        : collapsed
          ? L('Sidebar recolhida', 'Sidebar collapsed', 'Sidebar contraída')
          : L('Sidebar expandida', 'Sidebar expanded', 'Sidebar expandida');
    toggleLabel.textContent = mobile || layout === 'navbar'
      ? mobileOpen
        ? L('Fechar gaveta', 'Close drawer', 'Cerrar cajón')
        : L('Abrir gaveta', 'Open drawer', 'Abrir cajón')
      : collapsed
        ? L('Expandir menu', 'Expand menu', 'Expandir menú')
        : L('Recolher menu', 'Collapse menu', 'Contraer menú');
    toggleBtn.querySelector('.ds-icon')?.replaceWith(document.createRange().createContextualFragment(icon(mobile || layout === 'navbar' ? 'menu' : 'panel-left', { size: 16 })));
    status.textContent = `${mode} · ${device.label} ${device.w} × ${device.h}`;
  }

  const offReady = whenReady(iframe, (a) => {
    api = a;
    live.querySelector('[data-loading]').hidden = true;
    a.root.addEventListener('ds:shellchange', describe);
    a.setTheme(theme);
    a.setLocale?.(locale());
    a.setLayout?.(layout);
    describe();
  });
  iframe.src = src();

  const items = [...group.querySelectorAll('[role="radio"]')];
  const setDevice = (value, focus) => {
    const btn = items.find((b) => b.dataset.value === value);
    if (!btn) return;
    items.forEach((b) => {
      b.setAttribute('aria-checked', String(b === btn));
      b.tabIndex = b === btn ? 0 : -1;
    });
    if (focus) btn.focus();
    live.setAttribute('data-fitted', '');
    device = devices.find((d) => d.value === value);
    live.dataset.device = value;
    fit();
    // a largura do iframe muda → o app troca sozinho para a gaveta (mesmo media query)
    setTimeout(describe, 80);
  };
  const onGroupClick = (e) => {
    const btn = e.target.closest('[role="radio"]');
    if (btn) setDevice(btn.dataset.value);
  };
  const onGroupKey = (e) => {
    const delta = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!delta) return;
    e.preventDefault();
    const i = items.findIndex((b) => b.getAttribute('aria-checked') === 'true');
    setDevice(items[(i + delta + items.length) % items.length].dataset.value, true);
  };
  group.addEventListener('click', onGroupClick);
  group.addEventListener('keydown', onGroupKey);

  const onToolbar = (e) => {
    const themeBtn = e.target.closest('[data-demo-theme]');
    if (themeBtn) {
      theme = themeBtn.dataset.demoTheme;
      markThemeSwitch(toolbar, 'demo-theme', theme);
      api?.setTheme(theme);
    }
    if (e.target.closest('[data-demo-toggle]')) api?.shell.toggle();
    if (e.target.closest('[data-demo-reload]')) {
      api = null;
      toggleBtn.disabled = true;
      live.querySelector('[data-loading]').hidden = false;
      iframe.src = `${src().replace('#', `&t=${Date.now()}#`)}`;
    }
  };
  toolbar.addEventListener('click', onToolbar);

  const onSiteTheme = (e) => {
    theme = e.detail.resolved;
    markThemeSwitch(toolbar, 'demo-theme', theme);
    api?.setTheme(theme);
  };
  document.documentElement.addEventListener('ds:themechange', onSiteTheme);

  let raf = 0;
  const ro = new ResizeObserver(() => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(fit);
  });
  ro.observe(live);
  live.dataset.device = device.value;
  fit();
  if (matchMedia('(max-width: 767.98px)').matches) setDevice('phone');

  return {
    api: () => api,
    setDevice,
    scrollIntoView: () => live.closest('.doc-section')?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }),
    off() {
      offReady();
      api?.root.removeEventListener('ds:shellchange', describe);
      group.removeEventListener('click', onGroupClick);
      group.removeEventListener('keydown', onGroupKey);
      toolbar.removeEventListener('click', onToolbar);
      document.documentElement.removeEventListener('ds:themechange', onSiteTheme);
      ro.disconnect();
      cancelAnimationFrame(raf);
    },
  };
}
