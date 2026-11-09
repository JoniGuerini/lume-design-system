/**
 * Menu de contexto — ações de um item, com o botão direito, o teclado ou um toque longo.
 *
 *   const menu = attachContextMenu(document.querySelector('#arquivos'), {
 *     selector: '[data-arquivo]',      // só nessas linhas (delegação); sem ele, vale o elemento inteiro
 *     label: 'Ações do arquivo',
 *     options: (alvo) => [             // lista fixa, ou função que recebe o item clicado
 *       { value: 'open', label: 'Abrir', icon: 'external-link', shortcut: 'Enter' },
 *       { type: 'separator' },
 *       { value: 'delete', label: 'Excluir', icon: 'trash', tone: 'danger' },
 *     ],
 *     onSelect: (value, alvo) => agir(value, alvo),
 *   });
 *   menu.close(); menu.destroy();
 *
 * Pelo teclado: com o item em foco, a tecla de menu ou Shift+F10 abrem. ↑/↓, Home/End, letras, Enter e Esc funcionam
 * como no Menu. Como o botão direito não é óbvio nem existe em toda parte, ofereça as mesmas ações em outro lugar.
 */
import { menuContent } from './menu.js';
import { inheritTheme } from './field-support.js';

const LONG_PRESS = 500;
let current = null;
let uid = 0;
const normalize = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export function attachContextMenu(root, config = {}) {
  const menu = document.createElement('div');
  menu.className = 'ds-menu ds-context-menu';
  menu.id = `ds-context-menu-${++uid}`;
  menu.dataset.mode = 'action';
  menu.setAttribute('role', 'menu');
  let target = null;
  let pressTimer = null;

  const items = () => [...menu.querySelectorAll('.ds-menu__item:not([aria-disabled="true"])')];
  const isOpen = () => menu.hasAttribute('data-open');

  function close(returnFocus = true) {
    if (!isOpen()) return;
    menu.removeAttribute('data-open');
    menu.remove();
    if (current === api) current = null;
    document.removeEventListener('pointerdown', onOutside);
    document.removeEventListener('scroll', onScroll, true);
    removeEventListener('resize', onResize);
    if (returnFocus) target?.focus?.({ preventScroll: true });
  }

  function open(el, x, y) {
    if (current && current !== api) current.close(false);
    target = el;
    const options = typeof config.options === 'function' ? config.options(el) : config.options;
    if (!options?.length) return;
    if (config.label) menu.setAttribute('aria-label', config.label);
    menu.innerHTML = menuContent({ options, mode: 'action' });
    inheritTheme(menu, el);
    (el.closest('dialog') ?? document.body).append(menu);
    const m = menu.getBoundingClientRect();
    // perto da borda, abre para o outro lado
    const left = x + m.width > innerWidth - 8 ? Math.max(8, x - m.width) : x;
    const top = y + m.height > innerHeight - 8 ? Math.max(8, y - m.height) : y;
    menu.style.translate = `${Math.round(left)}px ${Math.round(top)}px`;
    menu.setAttribute('data-open', '');
    current = api;
    items()[0]?.focus({ preventScroll: true });
    document.addEventListener('pointerdown', onOutside);
    document.addEventListener('scroll', onScroll, true);
    addEventListener('resize', onResize);
  }

  const targetOf = (event) => (config.selector ? event.target.closest(config.selector) : root);

  const onContextMenu = (event) => {
    const el = targetOf(event);
    if (!el || !root.contains(el)) return;
    event.preventDefault();
    // pelo teclado o navegador não informa a posição do ponteiro: abre junto do item
    const r = el.getBoundingClientRect();
    const byKeyboard = event.button !== 2 && event.clientX === 0 && event.clientY === 0;
    open(el, byKeyboard ? r.left + 16 : event.clientX, byKeyboard ? r.top + Math.min(r.height, 24) : event.clientY);
  };

  // toque longo, onde o navegador não dispara contextmenu sozinho
  const cancelPress = () => clearTimeout(pressTimer);
  const onPointerDown = (event) => {
    if (event.pointerType !== 'touch') return;
    const el = targetOf(event);
    if (!el) return;
    const { clientX: x, clientY: y } = event;
    pressTimer = setTimeout(() => open(el, x, y), LONG_PRESS);
  };

  const onOutside = (event) => {
    if (!menu.contains(event.target)) close(false);
  };
  const onScroll = (event) => {
    if (!menu.contains(event.target)) close(false);
  };
  const onResize = () => close(false);

  menu.addEventListener('click', (event) => {
    const item = event.target.closest('.ds-menu__item');
    if (!item || item.getAttribute('aria-disabled') === 'true') return;
    const el = target;
    close();
    config.onSelect?.(item.dataset.value, el);
  });

  menu.addEventListener('keydown', (event) => {
    const list = items();
    if (!list.length) return;
    const i = list.indexOf(document.activeElement);
    const move = { ArrowDown: i + 1, ArrowUp: i - 1, Home: 0, End: list.length - 1 }[event.key];
    if (move !== undefined) {
      event.preventDefault();
      list[(move + list.length) % list.length].focus();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      close();
    } else if (event.key === 'Tab') {
      event.preventDefault();
      close();
    } else if (event.key.length === 1 && /\S/.test(event.key) && !event.metaKey && !event.ctrlKey && !event.altKey) {
      const ch = normalize(event.key);
      [...list.slice(i + 1), ...list.slice(0, i + 1)].find((n) => normalize(n.textContent.trim()).startsWith(ch))?.focus();
    }
  });

  root.addEventListener('contextmenu', onContextMenu);
  root.addEventListener('pointerdown', onPointerDown);
  root.addEventListener('pointerup', cancelPress);
  root.addEventListener('pointermove', cancelPress);
  root.addEventListener('pointercancel', cancelPress);

  const api = {
    open,
    close,
    get isOpen() {
      return isOpen();
    },
    destroy() {
      close(false);
      cancelPress();
      root.removeEventListener('contextmenu', onContextMenu);
      root.removeEventListener('pointerdown', onPointerDown);
      root.removeEventListener('pointerup', cancelPress);
      root.removeEventListener('pointermove', cancelPress);
      root.removeEventListener('pointercancel', cancelPress);
    },
  };
  return api;
}
