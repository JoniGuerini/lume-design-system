/**
 * Tema: claro (light) ou escuro (dark). Até a pessoa escolher, segue o sistema (preferência 'system');
 * a escolha fica salva em ds-theme. O <html data-theme> recebe sempre o tema resolvido: light ou dark.
 *
 *   toggleTheme();        // troca entre claro e escuro e salva
 *   setTheme('system');   // volta a seguir o sistema
 */

const KEY = 'ds-theme';
// versão dos valores salvos: sem versão, 'light' era o tema pêssego e 'refugio' era o claro de hoje; o tema orange saiu na 0.14.4
const VERSION_KEY = 'ds-theme-v';
const VERSION = '3';
export const THEMES = ['light', 'dark'];
const PREFERENCES = ['system', ...THEMES];
const DEFAULT = 'system';
const root = document.documentElement;
const darkQuery = matchMedia('(prefers-color-scheme: dark)');

const read = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
const write = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {}
};

export function getThemePreference() {
  let saved = read(KEY);
  const version = read(VERSION_KEY);
  if (version !== VERSION) {
    if (!version) saved = { refugio: 'light', light: null }[saved] ?? saved;
    // quem usava um tema que não existe mais volta a seguir o sistema
    write(KEY, PREFERENCES.includes(saved) ? saved : DEFAULT);
    write(VERSION_KEY, VERSION);
  }
  return PREFERENCES.includes(saved) ? saved : DEFAULT;
}

/** Tema resolvido de uma preferência: "system" vira claro ou escuro, como o aparelho. */
export function themeFor(preference) {
  if (preference === 'system') return darkQuery.matches ? 'dark' : 'light';
  return THEMES.includes(preference) ? preference : 'light';
}

export function resolvedTheme() {
  return themeFor(getThemePreference());
}

// tema pedido que ainda não foi aplicado (a transição aplica de forma assíncrona)
let pending = null;

function apply(next) {
  if (next === (pending ?? root.dataset.theme)) return;
  pending = next;
  const run = () => {
    root.dataset.theme = next;
    if (pending === next) pending = null;
  };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (document.startViewTransition && !reduced) {
    // trocas rápidas cancelam a transição anterior — isso é esperado, não é erro
    const transition = document.startViewTransition(run);
    [transition.ready, transition.finished, transition.updateCallbackDone].forEach((p) => p?.catch(() => {}));
  } else run();
}

function announce() {
  root.dispatchEvent(new CustomEvent('ds:themechange', { detail: { preference: getThemePreference(), resolved: resolvedTheme() } }));
}

/** Troca entre claro e escuro; a escolha fica salva e o tema deixa de seguir o sistema. */
export const toggleTheme = () => setTheme(resolvedTheme() === 'dark' ? 'light' : 'dark');

export function setTheme(preference) {
  if (!PREFERENCES.includes(preference)) return;
  write(KEY, preference);
  write(VERSION_KEY, VERSION);
  apply(resolvedTheme());
  syncControls();
  announce();
}

function syncControls() {
  const dark = resolvedTheme() === 'dark';
  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => btn.setAttribute('aria-pressed', String(dark)));
}

/** Liga os botões [data-theme-toggle]: cada clique troca o tema (aria-pressed: o escuro está ligado). */
export function mountThemeControls(scope = document) {
  const buttons = [...scope.querySelectorAll('[data-theme-toggle]')];
  buttons.forEach((btn) => btn.addEventListener('click', toggleTheme));
  syncControls();
  return () => buttons.forEach((btn) => btn.removeEventListener('click', toggleTheme));
}

export function initTheme() {
  root.dataset.theme = resolvedTheme();
  // enquanto a pessoa não escolher, acompanha a troca de claro/escuro do sistema
  darkQuery.addEventListener('change', () => {
    if (getThemePreference() !== 'system') return;
    apply(resolvedTheme());
    syncControls();
    announce();
  });
}
