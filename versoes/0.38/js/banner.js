/**
 * Banner de anúncio — fechar e lembrar que a pessoa fechou.
 *
 *   const banner = createBanner(document.querySelector('.ds-banner'), {
 *     id: 'lume-0.35',          // muda o id a cada anúncio novo: quem fechou o anterior vê o novo
 *     remember: true,           // guarda no navegador que este id foi fechado (padrão: sim, quando há id)
 *     onClose: () => {},
 *   });
 *   banner.close(); banner.show(); banner.reset(); banner.destroy();
 *
 * O botão de fechar é o .ds-banner__close que já está na marcação; o nome dele (“Fechar anúncio”)
 * vem no idioma do Lume se a marcação não trouxer um. Ao fechar com o foco dentro do banner,
 * o foco vai para focusAfterClose (um elemento) ou para o começo do conteúdo seguinte.
 */
import { msg } from './i18n.js';

const KEY = 'ds-banner:';
const read = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
const write = (key, value) => {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    /* sem armazenamento: o banner só fica fechado até recarregar */
  }
};

export function createBanner(root, options = {}) {
  const o = { id: root.dataset.bannerId || '', remember: true, focusAfterClose: null, onClose: null, ...options };
  const key = o.id && o.remember ? KEY + o.id : '';
  const button = root.querySelector('.ds-banner__close');
  const named = button?.hasAttribute('aria-label');
  if (button && !named) button.setAttribute('aria-label', msg('banner.close'));
  if (!root.hasAttribute('role')) root.setAttribute('role', 'region');
  if (!root.hasAttribute('aria-label') && !root.hasAttribute('aria-labelledby')) root.setAttribute('aria-label', msg('banner.label'));

  if (key && read(key)) root.hidden = true;

  function close() {
    if (root.hidden) return;
    const hadFocus = root.contains(document.activeElement);
    root.hidden = true;
    if (key) write(key, '1');
    if (hadFocus) {
      const next = o.focusAfterClose ?? root.nextElementSibling;
      if (next) {
        if (!next.matches('a[href], button, input, select, textarea, [tabindex]')) next.setAttribute('tabindex', '-1');
        next.focus({ preventScroll: true });
      }
    }
    o.onClose?.();
  }

  const onClick = (event) => {
    if (event.target.closest('.ds-banner__close')) close();
  };
  const onLocale = () => {
    if (button && !named) button.setAttribute('aria-label', msg('banner.close'));
  };

  root.addEventListener('click', onClick);
  document.documentElement.addEventListener('ds:localechange', onLocale);

  return {
    get isOpen() {
      return !root.hidden;
    },
    close,
    /** Mostra de novo, sem esquecer que foi fechado (no próximo carregamento, continua fechado). */
    show: () => (root.hidden = false),
    /** Esquece que foi fechado e mostra. */
    reset() {
      if (key) write(key, null);
      root.hidden = false;
    },
    destroy() {
      root.removeEventListener('click', onClick);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
    },
  };
}
