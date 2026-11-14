import { L } from '../i18n.js';
import { mountDocNav } from '../doc-nav.js';
import { CURRENT_VERSION } from '../changelog.js';
import { navigation } from '../nav.js';
import { stages, leftOut } from '../roadmap.js';

export const styles = 'site/pages/roadmap.css';

const itemRow = ({ name, text, doc }) => `<li class="rm-item">
    <span class="rm-item__name">${name}</span>
    <span class="rm-item__text">${text}</span>
    ${doc ? `<span class="ds-badge ds-badge--sm rm-item__tag">${L('Ganha página', 'Gets a page', 'Tendrá página')}</span>` : ''}
  </li>`;

const stageRow = (s) => `<div class="rm-stage">
    <div class="rm-stage__meta">
      <p class="rm-stage__version"><span class="ds-visually-hidden">${L('Versão', 'Version', 'Versión')} </span>${s.version}</p>
      <span class="ds-badge ds-badge--sm${s.tone === 'neutral' ? '' : ` ds-badge--${s.tone}`}">${s.status}</span>
    </div>
    <div class="rm-stage__body">
      <h3 class="rm-stage__title">${s.title}</h3>
      <p class="rm-stage__text">${s.text}</p>
      <ul class="rm-list" role="list">${s.items.map(itemRow).join('')}</ul>
    </div>
  </div>`;

const SECTIONS = (all) => [
  ['rm-componentes', L('Componentes', 'Components', 'Componentes'), L('Os que faltam, agrupados por assunto. A ordem pode mudar, e os números de versão andam com ela.', 'The ones still missing, grouped by subject. The order may change, and the version numbers move with it.', 'Los que faltan, agrupados por tema. El orden puede cambiar, y los números de versión cambian con él.'), 'components'],
  ['rm-estavel', L('A caminho da 1.0', 'On the way to 1.0', 'Camino a la 1.0'), L('Com os componentes no lugar, o trabalho passa a ser deixar tudo pronto para uso.', 'With the components in place, the work turns to getting everything ready for use.', 'Con los componentes en su lugar, el trabajo pasa a ser dejar todo listo para usar.'), 'release'],
].filter(([, , , group]) => all.some((s) => s.group === group));

export default function renderRoadmap(page) {
  const all = stages();
  const out = leftOut();
  const list = (group) => all.filter((s) => s.group === group);
  const current = navigation.find((g) => g.id === 'componentes').items.length;
  return `
  <div class="page doc">
    <header class="doc-header">
      <div>
        <p class="doc-header__eyebrow">Lume</p>
        <h1 class="doc-header__title">${page.label}</h1>
        <p class="doc-header__lead">${L('O que vem a seguir: os componentes populares que ainda faltam, um por versão, e depois a 1.0 estável.', 'What comes next: the popular components still missing, one per version, and then a stable 1.0.', 'Lo que viene: los componentes populares que aún faltan, uno por versión, y después la 1.0 estable.')}</p>
      </div>
      <dl class="doc-stats">
        <div class="doc-stat"><dt class="doc-stat__label">${L('versão atual', 'current version', 'versión actual')}</dt><dd class="doc-stat__value">${CURRENT_VERSION}</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('componentes hoje', 'components today', 'componentes hoy')}</dt><dd class="doc-stat__value">${current}</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('etapas até a 1.0', 'steps to 1.0', 'etapas hasta la 1.0')}</dt><dd class="doc-stat__value">${all.length}</dd></div>
      </dl>
    </header>

    <nav class="doc-nav" aria-label="${L('Nesta página', 'On this page', 'En esta página')}">
      ${SECTIONS(all).map(([id, title]) => `<button type="button" class="doc-nav__link" data-target="${id}">${title}</button>`).join('')}
      ${out.length ? `<button type="button" class="doc-nav__link" data-target="rm-fora">${L('Fora, por enquanto', 'Left out for now', 'Fuera, por ahora')}</button>` : ''}
    </nav>

    ${SECTIONS(all)
      .map(
        ([id, title, desc, group]) => `<section class="doc-section" id="${id}" aria-labelledby="${id}-title">
          <header class="doc-section__header">
            <div>
              <h2 class="doc-section__title" id="${id}-title">${title}</h2>
              <p class="doc-section__desc">${desc}</p>
            </div>
          </header>
          <div class="rm-stages">${list(group).map(stageRow).join('')}</div>
        </section>`,
      )
      .join('')}

    ${out.length ? `<section class="doc-section" id="rm-fora" aria-labelledby="rm-fora-title">
      <header class="doc-section__header">
        <div>
          <h2 class="doc-section__title" id="rm-fora-title">${L('Fora, por enquanto', 'Left out for now', 'Fuera, por ahora')}</h2>
          <p class="doc-section__desc">${L('Componentes conhecidos que decidimos não fazer agora, e o motivo.', 'Well-known components we decided not to build for now, and why.', 'Componentes conocidos que decidimos no hacer por ahora, y el motivo.')}</p>
        </div>
      </header>
      <ul class="rm-list" role="list">${out.map(itemRow).join('')}</ul>
    </section>` : ''}
  </div>`;
}

export function mount(root) {
  return mountDocNav(root);
}
