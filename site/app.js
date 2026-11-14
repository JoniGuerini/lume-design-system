/**
 * Site de documentação do Lume — monta o shell, a navegação, a busca e o roteador (hash).
 */
import '../ds/icons/icons.js';
import { icon } from '../ds/icons/icons.js';
import { initTheme, mountThemeControls, setTheme, themeFor, THEMES } from '../ds/js/theme.js';
import { initLocale, setLocale, getLocalePreference, locale, LOCALES, LOCALE_NAMES } from '../ds/js/i18n.js';
import { createMenu } from '../ds/js/menu.js';
import { initTooltips } from '../ds/js/tooltip.js';
import { initScrollbars } from '../ds/js/scrollbar.js';
import { createBackToTop } from '../ds/js/back-to-top.js';
import { createShell, renderSidebarNav, renderNavbarNav, setActiveNavItem } from '../ds/js/shell.js';
import { createCommandPalette } from '../ds/js/command-palette.js';
import { navigation, pages, findPage } from './nav.js';
import { CURRENT_VERSION, SEEN_KEY, releases } from './changelog.js';
import { t, applyStrings } from './i18n.js';
import { watchForUpdates } from './update.js';
import { toast } from '../ds/js/toast.js';

/*
 * Modo demonstração (?embed): o app roda dentro de um iframe nas páginas de documentação
 * (ex.: Padrões › App shell). Nada é gravado — tema, sidebar e grupos ficam só na memória —
 * e a página que embute controla tudo por window.lumeEmbed.
 */
const params = new URLSearchParams(location.search);
const EMBED = params.has('embed');
if (EMBED) {
  document.documentElement.dataset.embed = '';
  // rede de segurança: nenhuma escrita no armazenamento compartilhado com o app de verdade
  try {
    Storage.prototype.setItem = function setItem() {};
    Storage.prototype.removeItem = function removeItem() {};
  } catch {}
}

/** Tema só na memória, para o modo demonstração: recebe o tema resolvido (quem embute manda o do site). */
function embedTheme(theme) {
  if (!THEMES.includes(theme)) return;
  document.documentElement.dataset.theme = theme;
  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => btn.setAttribute('aria-pressed', String(theme === 'dark')));
  document.documentElement.dispatchEvent(new CustomEvent('ds:themechange', { detail: { preference: theme, resolved: theme } }));
}
/** Preferência (inclusive "Sistema") no exemplo, sem gravar nada. */
const embedPreference = (preference) => embedTheme(themeFor(preference));

function bindEmbedThemeControls() {
  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => btn.addEventListener('click', () => embedTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark')));
  embedTheme(THEMES.includes(params.get('theme')) ? params.get('theme') : document.documentElement.dataset.theme);
}

const applyTheme = EMBED ? embedPreference : setTheme;

initTheme();
initLocale();
applyStrings();
if (EMBED) bindEmbedThemeControls();
else mountThemeControls();
initTooltips();
initScrollbars();

/**
 * Na primeira visita tudo é novidade, então nada é destacado: a versão atual e todas as páginas já contam como vistas.
 * Quem volta depois de uma versão nova vê a bolinha em Novidades, até abrir a página; e cada página que chegou
 * depois da última visita ganha a sua bolinha, até a pessoa abrir aquela página.
 */
const PAGES_KEY = 'ds-paginas-vistas';
const navPaths = () => navigation.flatMap((group) => group.items.map((item) => item.path));
const versionParts = (v) => String(v).split('.').map(Number);
const newerThan = (a, b) => {
  const [x, y] = [versionParts(a), versionParts(b)];
  for (let i = 0; i < 3; i++) if ((x[i] ?? 0) !== (y[i] ?? 0)) return (x[i] ?? 0) > (y[i] ?? 0);
  return false;
};
let seenPages = null; // null: sem memória, nada é destacado
if (!EMBED) {
  try {
    const firstVisit = localStorage.getItem(SEEN_KEY) === null;
    const lastVersion = localStorage.getItem(SEEN_KEY);
    if (firstVisit) localStorage.setItem(SEEN_KEY, CURRENT_VERSION);
    const stored = localStorage.getItem(PAGES_KEY);
    if (stored) seenPages = new Set(JSON.parse(stored));
    else {
      // quem já visitava antes desta memória existir: só as páginas que apareceram no changelog pela primeira vez
      // depois da versão que a pessoa viu (ícones e API novos não fazem da página Ícones uma página nova)
      const firstSeen = new Map();
      [...releases].reverse().forEach((r) => r.groups.forEach((g) => g.items.forEach(([, , href]) => href && !firstSeen.has(href) && firstSeen.set(href, r.version))));
      const added = firstVisit ? new Set() : new Set([...firstSeen].filter(([, version]) => newerThan(version, lastVersion)).map(([href]) => href));
      seenPages = new Set(navPaths().filter((path) => !added.has(path)));
      localStorage.setItem(PAGES_KEY, JSON.stringify([...seenPages]));
    }
  } catch {
    seenPages = null;
  }
}
const pageIsNew = (path) => Boolean(seenPages) && path !== '/' && path !== '/novidades' && !seenPages.has(path);
function markPageSeen(path) {
  if (!pageIsNew(path)) return;
  seenPages.add(path);
  try {
    localStorage.setItem(PAGES_KEY, JSON.stringify([...seenPages]));
  } catch {}
  document.querySelectorAll(`.ds-sidebar .ds-nav-item[href="#${CSS.escape(path)}"] .ds-dot`).forEach((d) => d.remove());
  markGroups();
}

const newsSeen = () => {
  try {
    return localStorage.getItem(SEEN_KEY) === CURRENT_VERSION;
  } catch {
    return true; // sem memória não dá para saber o que é novo: melhor não insistir em todas as visitas
  }
};

// o cartão da conta (Lume 0.31 · Ver o que há de novo) só aparece nos exemplos embutidos do App shell, porque a
// anatomia aponta para ele; no site, a novidade é a bolinha em Novidades
const shortVersion = CURRENT_VERSION.replace(/\.0$/, '');
function renderAccount() {
  document.querySelectorAll('.ds-account:not([data-update])').forEach((card) => {
    card.dataset.dsTooltip = t('accountTooltip', shortVersion);
    const title = card.querySelector('.ds-account__title');
    if (title) title.textContent = `Lume ${shortVersion}`;
    card.hidden = !EMBED;
  });
  // o rodapé some quando não sobra cartão nenhum (novidades vistas e sem versão nova)
  document.querySelectorAll('.ds-sidebar__footer').forEach((footer) => {
    footer.hidden = ![...footer.querySelectorAll('.ds-account')].some((card) => !card.hidden);
  });
}
renderAccount();

// a página Novidades avisa quando a versão foi vista: some a bolinha e o cartão
document.addEventListener('ds:newsseen', () => {
  document.querySelectorAll('.ds-sidebar .ds-nav-item[href="#/novidades"] .ds-dot, .ds-navbar__item[href="#/novidades"] .ds-dot').forEach((d) => d.remove());
  renderAccount();
});

const navEl = document.getElementById('sidebar-nav');
const content = document.getElementById('conteudo');
const breadcrumb = document.getElementById('breadcrumb');

// os mesmos grupos alimentam a sidebar e a navbar
const navGroups = () =>
  navigation.map((group) => ({
    id: group.id,
    label: group.label,
    items: group.items.map((item) => ({ label: item.label, icon: item.icon, href: `#${item.path}`, dot: item.path === '/novidades' ? !newsSeen() : pageIsNew(item.path), section: group.sectionLabel(item.section) })),
  }));

function renderSidebar() {
  renderSidebarNav(navEl, navGroups());
  markGroups();
}

// grupo com página nova: a bolinha também no cabeçalho do grupo (só aparece com ele fechado) e no botão da navbar
function markGroups() {
  const fresh = new Set(navGroups().filter((g) => g.items.some((i) => i.dot)).map((g) => g.id));
  document.querySelectorAll('.ds-sidebar .ds-nav-group').forEach((group) => {
    const label = group.querySelector('.ds-nav-group__label');
    const dot = label?.querySelector('.ds-dot');
    if (fresh.has(group.dataset.group) && !dot) label?.insertAdjacentHTML('beforeend', '<span class="ds-dot site-group-dot" aria-hidden="true"></span>');
    if (!fresh.has(group.dataset.group)) dot?.remove();
  });
  document.querySelectorAll('[data-navbar-group]').forEach((button) => {
    const dot = button.querySelector('.ds-dot');
    if (fresh.has(button.dataset.navbarGroup) && !dot) button.querySelector('span')?.insertAdjacentHTML('afterend', '<span class="ds-dot" aria-hidden="true"></span>');
    if (!fresh.has(button.dataset.navbarGroup)) dot?.remove();
  });
}
renderSidebar();

const shell = createShell(
  document.getElementById('shell'),
  EMBED ? { persist: false, initial: params.get('sidebar') === 'collapsed' ? 'collapsed' : 'expanded', layout: params.get('layout') ?? 'sidebar' } : undefined,
);
const go = (path) => (location.hash = path);

if (!EMBED) createBackToTop(document.getElementById('main-scroll'), { parent: document.querySelector('.ds-main'), focusTarget: document.getElementById('conteudo') });

/* ───────── Navbar ───────── */

const navbarEl = document.getElementById('navbar-nav');
let navbar = null;
let activeHref = null;
function renderNavbar() {
  navbar?.destroy();
  navbar = renderNavbarNav(navbarEl, navGroups(), { go });
  if (activeHref) navbar.setActive(activeHref);
  markGroups();
}
renderNavbar();

const applyLocale = (preference) => setLocale(preference, { persist: !EMBED });

const palette = createCommandPalette({
  placeholder: () => t('palettePlaceholder'),
  items: () => [
    ...pages.map((page) => ({
      id: page.path,
      label: page.label,
      group: page.group ?? t('general'),
      icon: page.icon,
      description: page.description,
      keywords: page.topics,
      hint: page.load ? undefined : t('soon'),
      perform: () => go(page.path),
    })),
    { id: 'theme-light', label: t('useLight'), group: t('actions'), icon: 'sun', keywords: ['light', 'claro', 'lume', 'tema', 'theme'], perform: () => applyTheme('light') },
    { id: 'theme-dark', label: t('useDark'), group: t('actions'), icon: 'moon', keywords: ['dark', 'escuro', 'oscuro', 'lume', 'tema', 'theme'], perform: () => applyTheme('dark') },
    { id: 'theme-system', label: t('useSystem'), group: t('actions'), icon: 'monitor', keywords: ['system', 'sistema', 'automático'], perform: () => applyTheme('system') },
    ...LOCALES.map((l) => ({ id: `locale-${l}`, label: `${t('language')}: ${LOCALE_NAMES[l]}`, group: t('actions'), icon: 'globe', keywords: ['idioma', 'language', 'lenguaje'], perform: () => applyLocale(l) })),
    { id: 'layout-sidebar', label: t('layoutSidebarTip'), group: t('actions'), icon: 'panel-left', keywords: ['layout', 'sidebar', 'lateral'], perform: () => shell.setLayout('sidebar') },
    { id: 'layout-navbar', label: t('layoutNavbarTip'), group: t('actions'), icon: 'panel-top', keywords: ['layout', 'navbar', 'topo', 'top', 'superior'], perform: () => shell.setLayout('navbar') },
    { id: 'sidebar', label: t('toggleMenu'), group: t('actions'), icon: 'panel-left', hint: `${palette.modifierLabel} B`, keywords: ['sidebar', 'barra lateral'], perform: () => shell.toggle() },
  ],
});

/* ───────── Idioma ───────── */

const localeChip = document.querySelector('[data-locale-menu]');
const SHORT = { 'pt-BR': 'PT', en: 'EN', es: 'ES' };
let localeMenu = null;

function renderLocaleMenu() {
  localeMenu?.destroy();
  localeChip.querySelector('[data-label]').textContent = SHORT[locale()];
  localeChip.setAttribute('aria-label', `${t('language')}: ${LOCALE_NAMES[locale()]}`);
  localeMenu = createMenu(localeChip, {
    label: t('language'),
    value: EMBED ? locale() : getLocalePreference(),
    options: [
      { value: 'system', label: t('languageSystem', LOCALE_NAMES[locale()]), icon: 'monitor' },
      { type: 'separator' },
      ...LOCALES.map((l) => ({ value: l, label: LOCALE_NAMES[l] })),
    ],
    onChange: applyLocale,
  });
}
renderLocaleMenu();

// trocar o idioma refaz tudo que tem texto: shell, sidebar, seletor e a página aberta
document.documentElement.addEventListener('ds:localechange', () => {
  applyStrings();
  renderAccount();
  renderSidebar();
  renderNavbar();
  renderLocaleMenu();
  route();
});

document.querySelectorAll('[data-kbd-mod]').forEach((el) => (el.textContent = palette.modifierLabel));

document.addEventListener('click', (event) => {
  if (event.target.closest('[data-command-open]')) {
    shell.closeMobile();
    palette.open();
  }
  if (event.target.closest('[data-skip-link]')) {
    event.preventDefault();
    content.focus();
  }
});

/* ───────── Roteador ───────── */

const escape = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

function renderBreadcrumb(page) {
  const crumbs = [];
  if (page?.path !== '/') crumbs.push({ label: t('home'), href: '#/' });
  if (page?.group) crumbs.push({ label: page.group });
  crumbs.push({ label: page ? page.label : t('notFound'), current: true });
  breadcrumb.innerHTML = `<ol>${crumbs
    .map((c, i) => {
      const sep = i ? icon('chevron-right', { size: 14 }) : '';
      if (c.current) return `<li>${sep}<span aria-current="page">${escape(c.label)}</span></li>`;
      if (c.href) return `<li>${sep}<a href="${c.href}">${escape(c.label)}</a></li>`;
      return `<li>${sep}<span>${escape(c.label)}</span></li>`;
    })
    .join('')}</ol>`;
}

function currentPath() {
  const raw = decodeURIComponent(location.hash.replace(/^#/, ''));
  if (!raw || raw === '/') return '/';
  return `/${raw.replace(/^\/+|\/+$/g, '')}`;
}

let renderId = 0;
let firstRender = true;
let cleanup = null;

/** CSS próprio de uma página (export const styles = 'site/pages/x.css'), carregado uma vez. */
const loadedStyles = new Map();
function loadStyles(href) {
  if (!href) return Promise.resolve();
  if (!loadedStyles.has(href)) {
    loadedStyles.set(
      href,
      new Promise((resolve) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = link.onerror = resolve;
        document.head.append(link);
      }),
    );
  }
  return loadedStyles.get(href);
}

async function route() {
  const id = ++renderId;
  const path = currentPath();
  const page = findPage(path);

  activeHref = page ? `#${page.path}` : null;
  setActiveNavItem(navEl, activeHref);
  navbar?.setActive(activeHref);
  renderBreadcrumb(page);
  document.title = !page ? `${t('notFound')} · Lume` : page.path === '/' ? 'Lume Design System' : `${page.label} · Lume`;

  const mod = await (page?.load?.() ?? import(page ? './pages/placeholder.js' : './pages/not-found.js'));
  await Promise.all([].concat(mod.styles ?? []).map(loadStyles));
  if (id !== renderId) return;

  cleanup?.();
  content.innerHTML = mod.default(page ?? { path });
  cleanup = mod.mount?.(content, { shell, palette, go }) ?? null;
  shell.scrollToTop();
  shell.closeMobile();
  if (!firstRender) content.focus({ preventScroll: true });
  firstRender = false;
  trackPage(path);
  if (page) markPageSeen(page.path);
}

// visitas por página (Vercel Web Analytics): o site navega por #, que o script não conta sozinho.
// Só conta quando a página muda, não quando o idioma redesenha a mesma página.
let trackedPath = null;
function trackPage(path) {
  if (path === trackedPath || typeof window.va !== 'function') return;
  trackedPath = path;
  window.va('pageview', { route: path, path });
}

addEventListener('hashchange', route);
route();

/* ───────── Versão nova no ar ───────── */

// quando um deploy novo entra no ar com a aba aberta, o cartão “Nova versão disponível” aparece na
// sidebar; clicar recarrega. Sem a sidebar à vista (navbar ou celular), o aviso vem num toast.
if (!EMBED) {
  watchForUpdates({
    onUpdate() {
      document.querySelectorAll('[data-update]').forEach((card) => (card.hidden = false));
      renderAccount();
      const sidebarInView = matchMedia('(min-width: 1024px)').matches && document.getElementById('shell').dataset.layout !== 'navbar';
      if (!sidebarInView) toast(t('updateToast'), { icon: 'refresh', duration: Infinity, action: { label: t('updateButton'), onClick: () => location.reload() } });
    },
  });
  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-update]')) location.reload();
  });
}

// a página que embute o app (mesma origem) controla a demonstração por aqui
if (EMBED) window.lumeEmbed = { shell, palette, go, setTheme: embedTheme, setLocale: applyLocale, setLayout: shell.setLayout, root: document.getElementById('shell') };
