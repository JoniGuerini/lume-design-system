/**
 * Controle segmentado — poucas opções lado a lado, uma escolhida.
 *
 *   <div class="ds-segmented" role="radiogroup" aria-label="Visão">
 *     <button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="true">Mês</button>
 *     <button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="false">Semana</button>
 *   </div>
 *
 *   const group = createSegmented(document.querySelector('.ds-segmented'), {
 *     onChange: (value) => trocarVisao(value),
 *   });
 *   group.value; group.setValue('semana'); group.destroy();
 *
 * Padrão ARIA: radiogroup. Teclado: Tab entra na opção escolhida; as setas trocam de opção, e a escolha vale na hora.
 */
export function createSegmented(root, options = {}) {
  const items = () => [...root.querySelectorAll('[role="radio"]:not(:disabled)')];
  const current = () => root.querySelector('[role="radio"][aria-checked="true"]');

  function mark(btn) {
    root.querySelectorAll('[role="radio"]').forEach((b) => {
      b.setAttribute('aria-checked', String(b === btn));
      b.tabIndex = b === btn ? 0 : -1;
    });
  }

  const choose = (btn, focus) => {
    if (!btn || btn === current()) return;
    mark(btn);
    if (focus) btn.focus();
    options.onChange?.(btn.dataset.value);
  };

  const onClick = (event) => choose(event.target.closest('[role="radio"]:not(:disabled)'));
  const onKey = (event) => {
    const delta = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    if (!delta) return;
    event.preventDefault();
    const list = items();
    choose(list[(list.indexOf(current()) + delta + list.length) % list.length], true);
  };

  root.addEventListener('click', onClick);
  root.addEventListener('keydown', onKey);
  mark(current() ?? items()[0]);

  return {
    get value() {
      return current()?.dataset.value;
    },
    setValue(value) {
      const btn = [...root.querySelectorAll('[role="radio"]')].find((b) => b.dataset.value === value);
      if (btn) mark(btn);
    },
    destroy() {
      root.removeEventListener('click', onClick);
      root.removeEventListener('keydown', onKey);
    },
  };
}
