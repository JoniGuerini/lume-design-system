/**
 * Mostra o exemplo ao vivo de uma página de padrão do site (site/pages/padroes-*.js) numa história:
 * desenha a página inteira, esconde o que não é o exemplo e liga o JavaScript da página depois que
 * o elemento entra na tela (os gráficos medem a largura). Escrito à mão; o site continua a fonte.
 */
const live = new Set();

export function patternStory(page, sectionId) {
  // desliga o que já saiu da tela (troca de história ou de idioma), para não deixar ouvintes para trás
  for (const item of live) {
    if (!item.el.isConnected) {
      try { item.cleanup?.(); } catch {}
      live.delete(item);
    }
  }
  const el = document.createElement('div');
  el.className = 'lume-story lume-pattern';
  el.innerHTML = page.default({ group: '', label: '' });
  // sem a navegação da página: ela acompanha a rolagem do painel principal do site, que aqui não existe
  el.querySelector('.doc-nav')?.remove();
  for (const node of el.querySelectorAll('.doc-header, section.doc-section')) {
    if (node.id !== sectionId) node.hidden = true;
  }
  el.querySelector(`#${sectionId} > .doc-section__header`)?.setAttribute('hidden', '');
  const item = { el, cleanup: null };
  live.add(item);
  let tries = 0;
  const start = () => {
    if (!el.isConnected) { if (++tries < 120) requestAnimationFrame(start); return; }
    const out = page.mount?.(el);
    item.cleanup = typeof out === 'function' ? out : null;
  };
  requestAnimationFrame(start);
  return el;
}
