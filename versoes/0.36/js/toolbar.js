/**
 * Barra de ferramentas — botões de ícone agrupados, com setas para andar entre eles.
 *
 *   <div class="ds-toolbar" aria-label="Formatação">
 *     <div class="ds-toolbar__group">
 *       <button type="button" class="ds-icon-btn" aria-label="Negrito" aria-pressed="false" data-value="bold">…</button>
 *     </div>
 *     <div class="ds-toolbar__separator"></div>
 *     <div class="ds-toolbar__group" data-exclusive>…</div>
 *   </div>
 *
 *   const toolbar = createToolbar(document.querySelector('.ds-toolbar'), {
 *     orientation: 'horizontal', // ou 'vertical'
 *     onToggle: (button, pressed) => {}, // botão com aria-pressed: troca sozinho e avisa
 *   });
 *   toolbar.focus(); toolbar.destroy();
 *
 * Padrão ARIA de toolbar: a barra toda é uma parada só do Tab (o último botão usado fica com ela);
 * as setas andam entre os botões, Home e End vão às pontas, os desativados são pulados.
 * Botão com aria-pressed vira liga e desliga; num grupo com data-exclusive, só um fica apertado
 * (e clicar no apertado não solta, como o alinhamento de um editor).
 */
const FOCUSABLE = 'button, [role="button"], a[href], input, select, [tabindex]';

export function createToolbar(root, options = {}) {
  const o = { orientation: root.getAttribute('aria-orientation') || 'horizontal', onToggle: null, ...options };
  const vertical = o.orientation === 'vertical';
  root.setAttribute('role', 'toolbar');
  if (vertical) root.setAttribute('aria-orientation', 'vertical');
  else root.removeAttribute('aria-orientation');
  root.querySelectorAll('.ds-toolbar__separator').forEach((sep) => {
    sep.setAttribute('role', 'separator');
    sep.setAttribute('aria-orientation', vertical ? 'horizontal' : 'vertical');
  });

  const items = () => [...root.querySelectorAll(FOCUSABLE)].filter((el) => !el.disabled && el.getAttribute('aria-disabled') !== 'true' && !el.closest('[hidden]') && el.closest('.ds-toolbar') === root);
  let current = null;

  // um só com tabindex 0: o que tinha antes, se ainda vale; senão, o primeiro
  function roving(next) {
    const list = items();
    current = next && list.includes(next) ? next : list.includes(current) ? current : list[0] ?? null;
    list.forEach((el) => (el.tabIndex = el === current ? 0 : -1));
  }

  function move(step, to) {
    const list = items();
    if (!list.length) return;
    const i = list.indexOf(document.activeElement);
    const next = to === 'first' ? list[0] : to === 'last' ? list.at(-1) : list[(i + step + list.length) % list.length];
    roving(next);
    next.focus();
  }

  const onKeyDown = (event) => {
    if (!items().includes(event.target)) return;
    // campo de texto dentro da barra: as setas laterais andam no texto, não na barra
    if (event.target.matches('input, select') && !vertical) return;
    const back = vertical ? 'ArrowUp' : 'ArrowLeft';
    const forward = vertical ? 'ArrowDown' : 'ArrowRight';
    const rtl = !vertical && getComputedStyle(root).direction === 'rtl' ? -1 : 1;
    if (event.key === back) move(-1 * rtl);
    else if (event.key === forward) move(1 * rtl);
    else if (event.key === 'Home') move(0, 'first');
    else if (event.key === 'End') move(0, 'last');
    else return;
    event.preventDefault();
  };

  const onFocusIn = (event) => {
    if (items().includes(event.target)) roving(event.target);
  };

  const onClick = (event) => {
    const button = event.target.closest('[aria-pressed]');
    if (!button || !root.contains(button) || button.disabled) return;
    const group = button.closest('[data-exclusive]');
    const pressed = button.getAttribute('aria-pressed') === 'true';
    if (group && root.contains(group)) {
      if (pressed) return;
      group.querySelectorAll('[aria-pressed="true"]').forEach((other) => {
        other.setAttribute('aria-pressed', 'false');
        o.onToggle?.(other, false);
      });
    }
    button.setAttribute('aria-pressed', String(!pressed));
    o.onToggle?.(button, !pressed);
  };

  roving();
  root.addEventListener('keydown', onKeyDown);
  root.addEventListener('focusin', onFocusIn);
  root.addEventListener('click', onClick);

  return {
    /** Põe o foco no botão que está com a vez (depois de mudar a barra, chame refresh). */
    focus: () => current?.focus(),
    refresh: () => roving(),
    destroy() {
      root.removeEventListener('keydown', onKeyDown);
      root.removeEventListener('focusin', onFocusIn);
      root.removeEventListener('click', onClick);
      items().forEach((el) => el.removeAttribute('tabindex'));
      root.removeAttribute('role');
    },
  };
}
