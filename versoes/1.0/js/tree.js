/**
 * Árvore — pastas e níveis aninhados, com teclado.
 *
 *   <div class="ds-tree" id="arquivos" aria-label="Arquivos"></div>
 *
 *   const tree = createTree(document.querySelector('#arquivos'), {
 *     items: [
 *       { id: 'src', label: 'src', icon: 'folder', children: [
 *         { id: 'app', label: 'app.js', icon: 'file-text' },
 *       ] },
 *     ],
 *     expanded: ['src'],
 *     selected: 'app',
 *     onSelect: (item) => abrir(item),
 *     onToggle: (item, open) => …,
 *   });
 *   tree.select('app'); tree.expand('src'); tree.collapse('src'); tree.setItems(lista); tree.destroy();
 *
 * Padrão ARIA: tree com treeitem. Teclado: ↑/↓ andam pelas linhas visíveis; → abre ou entra; ← fecha ou volta
 * para o nível de cima; Home/End vão à primeira e à última; Enter ou Espaço escolhem; letras pulam para o item.
 */
import { icon } from '../icons/icons.js';

const escape = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const normalize = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export function createTree(root, options = {}) {
  const o = { items: [], ...options };
  let items = o.items;
  const expanded = new Set(o.expanded ?? []);
  let selected = o.selected ?? null;
  let active = null; // a linha que recebe o Tab

  const byId = new Map();
  const index = (list) => list.forEach((i) => {
    byId.set(i.id, i);
    if (i.children) index(i.children);
  });

  const node = (item, level) => {
    const branch = Boolean(item.children?.length);
    const open = expanded.has(item.id);
    return `<li class="ds-tree__item" role="treeitem" data-id="${escape(item.id)}" aria-level="${level}" aria-selected="${item.id === selected}"${branch ? ` aria-expanded="${open}"` : ''}${item.disabled ? ' aria-disabled="true"' : ''} tabindex="-1">
      <div class="ds-tree__row" style="--_level:${level - 1}">
        <span class="ds-tree__toggle" aria-hidden="true">${branch ? icon('chevron-right', { size: 16 }) : ''}</span>
        ${item.icon ? `<span class="ds-tree__icon" aria-hidden="true">${icon(item.icon, { size: 18 })}</span>` : ''}
        <span class="ds-tree__label">${escape(item.label)}</span>
        ${item.meta ? `<span class="ds-tree__meta">${escape(item.meta)}</span>` : ''}
      </div>
      ${branch ? `<ul class="ds-tree__group" role="group" ${open ? '' : 'hidden'}>${item.children.map((c) => node(c, level + 1)).join('')}</ul>` : ''}
    </li>`;
  };

  function render() {
    byId.clear();
    index(items);
    root.setAttribute('role', 'tree');
    root.innerHTML = `<ul class="ds-tree__group" role="presentation">${items.map((i) => node(i, 1)).join('')}</ul>`;
    setActive(selected && visibleEl(selected) ? selected : (items[0]?.id ?? null));
  }

  const elOf = (id) => root.querySelector(`[data-id="${CSS.escape(String(id))}"]`);
  const visibleEl = (id) => {
    const el = elOf(id);
    return el && !el.parentElement.closest('ul[hidden]') ? el : null;
  };
  const visible = () => [...root.querySelectorAll('[role="treeitem"]')].filter((el) => !el.parentElement.closest('ul[hidden]'));

  function setActive(id, focus = false) {
    active = id;
    root.querySelectorAll('[role="treeitem"]').forEach((el) => (el.tabIndex = el.dataset.id === String(id) ? 0 : -1));
    if (focus) elOf(id)?.focus({ preventScroll: false });
  }

  function setOpen(id, open, { notify = true } = {}) {
    const el = elOf(id);
    if (!el || !el.hasAttribute('aria-expanded')) return;
    if (open) expanded.add(id);
    else expanded.delete(id);
    el.setAttribute('aria-expanded', String(open));
    el.querySelector(':scope > .ds-tree__group').hidden = !open;
    // ao fechar uma pasta com o foco lá dentro, o foco volta para ela
    if (!open && active !== id && el.querySelector(`[data-id="${CSS.escape(String(active))}"]`)) setActive(id, true);
    if (notify) o.onToggle?.(byId.get(id), open);
  }

  function select(id, { notify = true } = {}) {
    const item = byId.get(id);
    if (!item || item.disabled) return;
    selected = id;
    root.querySelectorAll('[role="treeitem"]').forEach((el) => el.setAttribute('aria-selected', String(el.dataset.id === String(id))));
    if (notify) o.onSelect?.(item);
  }

  const onClick = (event) => {
    const el = event.target.closest('[role="treeitem"]');
    if (!el) return;
    const id = el.dataset.id;
    setActive(id, true);
    const onChevron = event.target.closest('.ds-tree__toggle');
    if (el.hasAttribute('aria-expanded')) setOpen(id, el.getAttribute('aria-expanded') !== 'true');
    if (!onChevron) select(id);
  };

  const onKey = (event) => {
    const el = event.target.closest('[role="treeitem"]');
    if (!el) return;
    const list = visible();
    const i = list.indexOf(el);
    const id = el.dataset.id;
    const go = (target) => {
      event.preventDefault();
      if (target) setActive(target.dataset.id, true);
    };
    switch (event.key) {
      case 'ArrowDown': return go(list[i + 1]);
      case 'ArrowUp': return go(list[i - 1]);
      case 'Home': return go(list[0]);
      case 'End': return go(list.at(-1));
      case 'ArrowRight':
        if (el.getAttribute('aria-expanded') === 'false') {
          event.preventDefault();
          setOpen(id, true);
        } else if (el.getAttribute('aria-expanded') === 'true') go(list[i + 1]);
        return;
      case 'ArrowLeft':
        if (el.getAttribute('aria-expanded') === 'true') {
          event.preventDefault();
          setOpen(id, false);
        } else go(el.parentElement.closest('[role="treeitem"]'));
        return;
      case 'Enter':
      case ' ':
        event.preventDefault();
        select(id);
        return;
      default:
        if (event.key.length === 1 && /\S/.test(event.key) && !event.metaKey && !event.ctrlKey && !event.altKey) {
          const ch = normalize(event.key);
          const order = [...list.slice(i + 1), ...list.slice(0, i + 1)];
          const match = order.find((n) => normalize(n.querySelector('.ds-tree__label').textContent).startsWith(ch));
          if (match) go(match);
        }
    }
  };

  root.addEventListener('click', onClick);
  root.addEventListener('keydown', onKey);
  render();

  return {
    get selected() {
      return selected;
    },
    select,
    expand: (id) => setOpen(id, true),
    collapse: (id) => setOpen(id, false),
    setItems(next) {
      items = next;
      render();
    },
    destroy() {
      root.removeEventListener('click', onClick);
      root.removeEventListener('keydown', onKey);
      root.innerHTML = '';
    },
  };
}
