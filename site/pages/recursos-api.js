import { mountDocNav } from '../doc-nav.js';
import { mountCodeCopy, codeBlock } from '../component-doc.js';
import { L } from '../i18n.js';
import { apiGroups, apiCount } from '../api.js';
import { CURRENT_VERSION } from '../changelog.js';

const LINE = CURRENT_VERSION.split('.').slice(0, 2).join('.');

export const styles = ['site/component-doc.css', 'site/pages/recursos-api.css'];

const ic = (s) => `<code class="ds-inline-code">${s}</code>`;

/* ───────── Dados (textos no idioma atual: chame na renderização) ───────── */

const NAV = () => [
  ['api-importar', L('Importar', 'Import', 'Importar')],
  ['api-convencao', L('Convenção', 'Convention', 'Convención')],
  ['api-lista', L('Tudo o que é público', 'Everything public', 'Todo lo público')],
  ['api-regra', L('O que não muda', 'What won’t change', 'Lo que no cambia')],
];

const VERBS = () => [
  [ic('create…'), L('Liga um componente a um elemento, ou cria o elemento', 'Attaches a component to an element, or creates the element', 'Liga un componente a un elemento, o crea el elemento'), L(`Um controle com ${ic('destroy()')}`, `A controller with ${ic('destroy()')}`, `Un control con ${ic('destroy()')}`)],
  [ic('mount…'), L('Liga todos os componentes de um tipo numa área', 'Sets up every component of a kind in an area', 'Activa todos los componentes de un tipo en un área'), L('A função que desliga todos', 'The function that tears them all down', 'La función que los desactiva todos')],
  [ic('init…'), L('Comportamento global da página, uma vez', 'Page-wide behavior, called once', 'Comportamiento global de la página, una vez'), L('Nada', 'Nothing', 'Nada')],
  [`${ic('open…')} ${ic('confirm…')} ${ic('toast')}`, L('Ação imediata', 'Immediate action', 'Acción inmediata'), L('A resposta ou um controle com close()', 'The answer, or a controller with close()', 'La respuesta o un control con close()')],
  [ic('…Html'), L('Gera a marcação, sem ligar nada', 'Builds the markup without wiring anything', 'Genera el marcado, sin activar nada'), L('Uma string de HTML', 'An HTML string', 'Un string de HTML')],
];

function section(id, title, desc, body) {
  return `<section class="doc-section" id="${id}" aria-labelledby="${id}-title">
    <header class="doc-section__header"><div>
      <h2 class="doc-section__title" id="${id}-title">${title}</h2>
      ${desc ? `<p class="doc-section__desc">${desc}</p>` : ''}
    </div></header>
    ${body}
  </section>`;
}

export default function renderApi(page) {
  const groups = apiGroups();
  return `
  <div class="page doc ra-page">
    <header class="doc-header">
      <div>
        <p class="doc-header__eyebrow">${page.group}</p>
        <h1 class="doc-header__title">${page.label}</h1>
        <p class="doc-header__lead">${L('Tudo o que você pode chamar pelo JavaScript, num arquivo só. O que está aqui é público e estável; o resto é interno e pode mudar.', 'Everything you can call from JavaScript, in a single file. What’s here is public and stable; the rest is internal and may change.', 'Todo lo que puedes llamar desde JavaScript, en un solo archivo. Lo que está aquí es público y estable; el resto es interno y puede cambiar.')}</p>
      </div>
      <dl class="doc-stats">
        <div class="doc-stat"><dt class="doc-stat__label">${L('itens públicos', 'public items', 'ítems públicos')}</dt><dd class="doc-stat__value">${apiCount}</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('verbos', 'verbs', 'verbos')}</dt><dd class="doc-stat__value">5</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('dependências', 'dependencies', 'dependencias')}</dt><dd class="doc-stat__value">0</dd></div>
      </dl>
    </header>

    <nav class="doc-nav" aria-label="${L('Nesta página', 'On this page', 'En esta página')}">
      ${NAV().map(([id, label]) => `<button type="button" class="doc-nav__link" data-target="${id}">${label}</button>`).join('')}
    </nav>

    ${section(
      'api-importar',
      L('Importar', 'Import', 'Importar'),
      L(`Um arquivo, ${ic('ds/lume.js')}, reúne a API inteira. Os módulos de ${ic('ds/js/')} continuam podendo ser importados um a um, para carregar só o necessário.`, `One file, ${ic('ds/lume.js')}, gathers the whole API. The ${ic('ds/js/')} modules can still be imported one by one, to load only what you need.`, `Un archivo, ${ic('ds/lume.js')}, reúne toda la API. Los módulos de ${ic('ds/js/')} siguen pudiéndose importar uno a uno, para cargar solo lo necesario.`),
      codeBlock(`<link rel="stylesheet" href="https://lumeui.dev/v/${LINE}/lume.css">

<script type="module">
  import { initTheme, createModal, toast } from 'https://lumeui.dev/v/${LINE}/lume.js';

  initTheme();
  const modal = createModal({ title: '${L('Publicar alterações?', 'Publish changes?', '¿Publicar cambios?')}' });
</script>`),
    )}

    ${section(
      'api-convencao',
      L('Convenção', 'Convention', 'Convención'),
      L('Cada verbo promete uma coisa. Pelo nome, você já sabe o que volta.', 'Each verb promises one thing. From the name, you already know what comes back.', 'Cada verbo promete una cosa. Por el nombre, ya sabes qué vuelve.'),
      `<div class="doc-table ra-verbs">
        <div class="doc-table__head" aria-hidden="true"><span>${L('Verbo', 'Verb', 'Verbo')}</span><span>${L('Quando', 'When', 'Cuándo')}</span><span>${L('Devolve', 'Returns', 'Devuelve')}</span></div>
        ${VERBS().map(([verb, when, ret]) => `<div class="doc-table__row"><span>${verb}</span><span>${when}</span><span class="ra-muted">${ret}</span></div>`).join('')}
      </div>
      <p class="ra-note">${L(`Estado segue ${ic('get…')} e ${ic('set…')}; constantes ficam em maiúsculas, como ${ic('THEMES')}.`, `State follows ${ic('get…')} and ${ic('set…')}; constants are uppercase, like ${ic('THEMES')}.`, `El estado sigue ${ic('get…')} y ${ic('set…')}; las constantes van en mayúsculas, como ${ic('THEMES')}.`)}</p>`,
    )}

    ${section(
      'api-lista',
      L('Tudo o que é público', 'Everything public', 'Todo lo público'),
      L(`Os ${apiCount} itens de ${ic('ds/lume.js')}, com o módulo de onde cada um vem.`, `The ${apiCount} items in ${ic('ds/lume.js')}, with the module each one comes from.`, `Los ${apiCount} ítems de ${ic('ds/lume.js')}, con el módulo del que viene cada uno.`),
      groups.map((g) => `<h3 class="doc-subhead">${g.title}</h3>
      <div class="doc-table ra-items">
        <div class="doc-table__head" aria-hidden="true"><span>${L('Nome', 'Name', 'Nombre')}</span><span>${L('O que faz', 'What it does', 'Qué hace')}</span><span>${L('Módulo', 'Module', 'Módulo')}</span></div>
        ${g.items.map((i) => `<div class="doc-table__row"><span>${ic(i.name)}</span><span>${i.text}</span><span class="ra-muted">${i.module}</span></div>`).join('')}
      </div>`).join(''),
    )}

    ${section(
      'api-regra',
      L('O que não muda', 'What won’t change', 'Lo que no cambia'),
      L('A partir da 0.24, um nome desta página só muda numa versão maior, com aviso no console e guia de migração. Visual (cor, espaçamento, raio) pode evoluir a qualquer versão, porque não quebra quem usa.', 'From 0.24 on, a name on this page only changes in a major version, with a console warning and a migration guide. Visuals (color, spacing, radius) can evolve in any version, because they don’t break anyone.', 'A partir de la 0.24, un nombre de esta página solo cambia en una versión mayor, con aviso en la consola y guía de migración. Lo visual (color, espaciado, radio) puede evolucionar en cualquier versión, porque no rompe a nadie.'),
      '',
    )}
  </div>`;
}

export function mount(root) {
  const unmountNav = mountDocNav(root);
  const unmountCopy = mountCodeCopy(root);
  return () => {
    unmountNav();
    unmountCopy();
  };
}
