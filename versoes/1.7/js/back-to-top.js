/**
 * Voltar ao topo — botão que aparece quando a área já rolou bastante e leva de volta ao começo.
 *
 *   const back = createBackToTop(document.querySelector('.painel__rolagem'), {
 *     parent: document.querySelector('.painel'),   // onde o botão entra (padrão: o pai da área); precisa ter position
 *     threshold: 600,                              // px rolados para aparecer (padrão: uma tela da própria área)
 *     focusTarget: document.querySelector('main'), // recebe o foco ao voltar (padrão: a própria área)
 *   });
 *   back.el; back.update(); back.destroy();
 *
 * O botão fica ancorado no canto inferior do contêiner, não da janela: funciona igual em qualquer layout.
 * Quem pede menos movimento no sistema volta ao topo sem animação.
 */
import { icon } from '../icons/icons.js';
import { msg } from './i18n.js';

export function createBackToTop(scroller, options = {}) {
  const parent = options.parent ?? scroller.parentElement;
  const focusTarget = options.focusTarget ?? scroller;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'ds-back-to-top';
  button.innerHTML = icon('arrow-up', { size: 20 });
  button.dataset.dsTooltipPlacement = 'left';

  const applyLabel = () => {
    const label = options.label ?? msg('backToTop.label');
    button.setAttribute('aria-label', label);
    button.dataset.dsTooltip = label;
  };

  const update = () => {
    const limit = options.threshold ?? scroller.clientHeight;
    button.toggleAttribute('data-visible', scroller.scrollTop > limit);
  };

  const onClick = () => {
    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    // o botão some ao chegar no topo: o foco vai para o conteúdo, para não se perder
    if (!focusTarget.hasAttribute('tabindex')) focusTarget.setAttribute('tabindex', '-1');
    focusTarget.focus({ preventScroll: true });
    scroller.scrollTo({ top: 0, behavior: calm ? 'auto' : 'smooth' });
  };

  applyLabel();
  update();
  parent.append(button);
  button.addEventListener('click', onClick);
  scroller.addEventListener('scroll', update, { passive: true });
  document.documentElement.addEventListener('ds:localechange', applyLabel);

  return {
    el: button,
    update,
    destroy() {
      scroller.removeEventListener('scroll', update);
      document.documentElement.removeEventListener('ds:localechange', applyLabel);
      button.remove();
    },
  };
}
