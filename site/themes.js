/**
 * Os dois temas da documentação: Lume claro e Lume escuro.
 * As páginas que comparam temas percorrem THEME_IDS.
 */
import { icon } from '../ds/icons/icons.js';
import { locale } from '../ds/js/i18n.js';
import { L } from './i18n.js';

export const THEME_IDS = ['light', 'dark'];
export const isDarkTheme = (id) => id === 'dark';

const LABELS = () => ({
  light: L('Lume claro', 'Lume light', 'Lume claro'),
  dark: L('Lume escuro', 'Lume dark', 'Lume oscuro'),
});
const ICONS = { light: 'sun', dark: 'moon' };

export const themeLabel = (id) => LABELS()[id];
export const themeIcon = (id) => ICONS[id];

/**
 * Botão de tema de um palco de exemplo, igual ao da topbar: cada clique troca entre claro e escuro.
 * O data-<attr> guarda o tema que o próximo clique vai aplicar; depois de aplicar, chame markThemeSwitch.
 */
export function themeSwitch(attr, current, { label = L('Tema do exemplo', 'Example theme', 'Tema del ejemplo'), className = '' } = {}) {
  return `<button type="button" class="ds-theme-toggle ${className}" data-${attr}="${current === 'dark' ? 'light' : 'dark'}" aria-pressed="${current === 'dark'}" aria-label="${label}" data-ds-tooltip="${L('Alternar claro e escuro', 'Switch between light and dark', 'Alternar claro y oscuro')}">
    <ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
    <ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
  </button>`;
}

/** Atualiza os botões [data-<attr>] de um palco depois que o tema dele mudou. */
export function markThemeSwitch(scope, attr, theme) {
  scope.querySelectorAll(`[data-${attr}]`).forEach((btn) => {
    btn.setAttribute(`data-${attr}`, theme === 'dark' ? 'light' : 'dark');
    btn.setAttribute('aria-pressed', String(theme === 'dark'));
  });
}

/** “4,5:1 no Lume claro e 5:1 no Lume escuro” — fn(id) dá o valor de cada tema. */
export function perTheme(fn) {
  const at = L('no', 'in', 'en');
  return new Intl.ListFormat(locale(), { type: 'conjunction' }).format(THEME_IDS.map((id) => `${fn(id)} ${at} ${themeLabel(id)}`));
}
