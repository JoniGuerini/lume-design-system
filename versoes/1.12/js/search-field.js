/**
 * Campo de busca — a lupa, o × para limpar quando há texto, Esc que limpa e, se quiser, uma tecla que
 * leva o foco ao campo de qualquer lugar da página (a tecla aparece no campo enquanto ele está vazio).
 *
 *   <div class="ds-field ds-search">
 *     <ds-icon name="search" size="18"></ds-icon>
 *     <input class="ds-field__input" id="busca" type="search" aria-label="Buscar clientes" placeholder="Buscar">
 *   </div>
 *
 *   const busca = createSearchField(document.querySelector('#busca'), {
 *     shortcut: '/',              // opcional: uma tecla sem modificador
 *     onChange: (value) => …,     // a cada letra e ao limpar
 *   });
 *   busca.value; busca.setValue('ana'); busca.clear(); busca.focus(); busca.destroy();
 *
 * A tecla não dispara enquanto a pessoa digita em outro campo. Esc limpa só quando há texto; com o campo
 * vazio, o Esc segue adiante (fecha o painel em volta, por exemplo).
 */
import { icon } from '../icons/icons.js';
import { msg } from './i18n.js';

const typing = (target) =>
  target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));

export function createSearchField(input, { shortcut, onChange } = {}) {
  const field = input.closest('.ds-field');
  field?.classList.add('ds-search');

  const clearBtn = document.createElement('button');
  clearBtn.type = 'button';
  clearBtn.className = 'ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action';
  clearBtn.innerHTML = icon('x', { size: 16 });
  input.after(clearBtn);

  let kbd = null;
  if (shortcut) {
    kbd = document.createElement('kbd');
    kbd.className = 'ds-kbd ds-search__kbd';
    kbd.textContent = shortcut;
    kbd.setAttribute('aria-hidden', 'true');
    clearBtn.after(kbd);
    input.setAttribute('aria-keyshortcuts', shortcut);
  }

  function sync() {
    const empty = !input.value;
    clearBtn.hidden = empty || input.disabled;
    if (kbd) kbd.hidden = !empty;
    clearBtn.setAttribute('aria-label', msg('search.clear'));
  }

  function emit() {
    sync();
    onChange?.(input.value);
  }

  // limpar avisa como se a pessoa tivesse apagado: o evento input chega a quem escuta o campo (e ao onChange)
  function clear() {
    if (!input.value) return;
    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  const onInput = () => emit();
  const onKey = (event) => {
    if (event.key === 'Escape' && input.value) {
      event.preventDefault();
      event.stopPropagation();
      clear();
    }
  };
  const onClear = () => {
    clear();
    input.focus();
  };
  const onDocKey = (event) => {
    if (event.key !== shortcut || event.metaKey || event.ctrlKey || event.altKey || event.defaultPrevented || typing(event.target)) return;
    if (input.disabled || !input.isConnected || input.getClientRects().length === 0) return;
    event.preventDefault();
    input.focus();
    input.select();
  };
  const onLocale = () => sync();

  input.addEventListener('input', onInput);
  input.addEventListener('keydown', onKey);
  clearBtn.addEventListener('click', onClear);
  if (shortcut) document.addEventListener('keydown', onDocKey);
  document.documentElement.addEventListener('ds:localechange', onLocale);
  sync();

  return {
    el: input,
    get value() {
      return input.value;
    },
    setValue(next) {
      input.value = next ?? '';
      sync();
    },
    clear,
    focus: () => input.focus(),
    destroy() {
      input.removeEventListener('input', onInput);
      input.removeEventListener('keydown', onKey);
      clearBtn.removeEventListener('click', onClear);
      document.removeEventListener('keydown', onDocKey);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
      input.removeAttribute('aria-keyshortcuts');
      clearBtn.remove();
      kbd?.remove();
      field?.classList.remove('ds-search');
    },
  };
}
