/**
 * Rodapé das páginas internas: a página anterior e a próxima, na ordem do menu, e uma linha com a versão,
 * a mesma página em Markdown (para IAs), nos fundamentos, componentes e gráficos a documentação no Storybook e, quando a página tem bloco, o Figma.
 * O Início tem o rodapé próprio (site/pages/home.js).
 */
import { icon } from '../ds/icons/icons.js';
import { locale, tr } from '../ds/js/i18n.js';
import { pages } from './nav.js';
import { CURRENT_VERSION } from './changelog.js';
import { T } from './i18n.js';
import { figmaUrl } from './figma-links.js';

const COPY = T(
  { label: 'Navegação entre páginas', prev: 'Anterior', next: 'Próxima', markdown: 'Esta página em Markdown', storybook: 'Ver no Storybook', figma: 'Ver no Figma', external: 'abre em outra aba' },
  { label: 'Page navigation', prev: 'Previous', next: 'Next', markdown: 'This page in Markdown', storybook: 'View in Storybook', figma: 'View in Figma', external: 'opens in a new tab' },
  { label: 'Navegación entre páginas', prev: 'Anterior', next: 'Siguiente', markdown: 'Esta página en Markdown', storybook: 'Ver en Storybook', figma: 'Ver en Figma', external: 'se abre en otra pestaña' },
);

// páginas que o npm run ia converte em Markdown (Novidades, Roadmap e a própria página para IAs ficam de fora)
const hasMarkdown = (path) => path === '/primeiros-passos' || (/^\/(fundamentos|componentes|graficos|padroes|recursos)\//.test(path) && path !== '/recursos/ia');

export function pageFooterHtml(page) {
  if (!page || page.path === '/') return '';
  const c = tr(COPY);
  const list = pages.filter((p) => p.path !== '/');
  const i = list.findIndex((p) => p.path === page.path);
  if (i < 0) return '';
  const prev = list[i - 1];
  const next = list[i + 1];
  const card = (p, dir) => `<a class="site-pager__card site-pager__card--${dir}" href="#${p.path}" rel="${dir}">
      <span class="site-pager__meta">${dir === 'prev' ? icon('arrow-left', { size: 14 }) : ''}<span>${dir === 'prev' ? c.prev : c.next}</span>${p.group ? `<span aria-hidden="true">·</span><span>${p.group}</span>` : ''}${dir === 'next' ? icon('arrow-right', { size: 14 }) : ''}</span>
      <span class="site-pager__title">${p.label}</span>
      ${p.description ? `<span class="site-pager__desc">${p.description}</span>` : ''}
    </a>`;
  const lang = locale() === 'pt-BR' ? '' : `${locale()}/`;
  const links = [];
  if (hasMarkdown(page.path)) links.push(`<a href="ia/${lang}${page.path.slice(1)}.md" target="_blank" rel="noopener">${icon('file-text', { size: 14 })}${c.markdown}<span class="ds-visually-hidden">, ${c.external}</span></a>`);
  if (/^\/(fundamentos|componentes|graficos)\//.test(page.path)) links.push(`<a href="storybook/?path=/docs/${page.path.split('/')[1]}-${page.path.split('/').pop()}--documenta%C3%A7%C3%A3o" target="_blank" rel="noopener">${icon('external-link', { size: 14 })}${c.storybook}<span class="ds-visually-hidden">, ${c.external}</span></a>`);
  const figma = figmaUrl(page.path);
  if (figma) links.push(`<a href="${figma}" target="_blank" rel="noopener">${icon('external-link', { size: 14 })}${c.figma}<span class="ds-visually-hidden">, ${c.external}</span></a>`);
  return `<footer class="site-page-footer">
    <nav class="site-pager" aria-label="${c.label}">
      ${prev ? card(prev, 'prev') : '<span></span>'}
      ${next ? card(next, 'next') : '<span></span>'}
    </nav>
    <div class="site-page-footer__bottom">
      <a class="site-page-footer__brand" href="#/"><img src="assets/favicon.svg" alt="" width="16" height="16" />Lume <span>v${CURRENT_VERSION}</span></a>
      ${links.length ? `<p class="site-page-footer__links">${links.join('')}</p>` : ''}
    </div>
  </footer>`;
}
