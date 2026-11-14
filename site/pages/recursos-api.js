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
  ['api-controles', L('Controles', 'Controllers', 'Controles')],
  ['api-eventos', L('Eventos', 'Events', 'Eventos')],
  ['api-lista', L('Tudo o que é público', 'Everything public', 'Todo lo público')],
  ['api-saem', L('Saem na 1.0', 'Removed in 1.0', 'Salen en la 1.0')],
  ['api-regra', L('O que não muda', 'What won’t change', 'Lo que no cambia')],
];

const VERBS = () => [
  [ic('create…'), L('Liga um componente a um elemento, ou cria o elemento', 'Attaches a component to an element, or creates the element', 'Liga un componente a un elemento, o crea el elemento'), L(`Um controle com ${ic('destroy()')}`, `A controller with ${ic('destroy()')}`, `Un control con ${ic('destroy()')}`)],
  [ic('mount…'), L('Liga todos os componentes de um tipo numa área', 'Sets up every component of a kind in an area', 'Activa todos los componentes de un tipo en un área'), L('A função que desliga todos', 'The function that tears them all down', 'La función que los desactiva todos')],
  [ic('init…'), L('Comportamento global da página, uma vez', 'Page-wide behavior, called once', 'Comportamiento global de la página, una vez'), L('Nada', 'Nothing', 'Nada')],
  [`${ic('open…')} ${ic('confirm…')} ${ic('toast')}`, L('Ação imediata', 'Immediate action', 'Acción inmediata'), L('A resposta ou um controle com close()', 'The answer, or a controller with close()', 'La respuesta o un control con close()')],
  [ic('…Html'), L('Gera a marcação, sem ligar nada', 'Builds the markup without wiring anything', 'Genera el marcado, sin activar nada'), L('Uma string de HTML', 'An HTML string', 'Un string de HTML')],
];

const CONTROLS = () => [
  [ic('el'), L('O elemento principal do componente.', 'The component’s main element.', 'El elemento principal del componente.')],
  [`${ic('value')} · ${ic('setValue()')}`, L(`Lê e troca o valor, sem chamar ${ic('onChange')}. Paginação (${ic('page')}), etapas (${ic('current')}) e carrossel (${ic('index')}) usam o nome do que guardam.`, `Read and replace the value, without calling ${ic('onChange')}. Pagination (${ic('page')}), stepper (${ic('current')}), and carousel (${ic('index')}) use the name of what they hold.`, `Leen y cambian el valor, sin llamar a ${ic('onChange')}. Paginación (${ic('page')}), pasos (${ic('current')}) y carrusel (${ic('index')}) usan el nombre de lo que guardan.`)],
  [`${ic('isOpen')} · ${ic('collapsed')}`, L('Estado é propriedade, sem parênteses.', 'State is a property, without parentheses.', 'El estado es una propiedad, sin paréntesis.')],
  [`${ic('open()')} · ${ic('close()')} · ${ic('goTo()')} · ${ic('focus()')}`, L('Ações são funções, com o mesmo nome em todos os componentes.', 'Actions are functions, with the same name in every component.', 'Las acciones son funciones, con el mismo nombre en todos los componentes.')],
  [ic('destroy()'), L('Desliga tudo o que o componente ligou. Todo create… tem.', 'Removes everything the component set up. Every create… has it.', 'Desactiva todo lo que el componente activó. Todo create… lo tiene.')],
  [`${ic('onChange')} · ${ic('onInput')}`, L(`No JavaScript, como no campo nativo: ${ic('onChange')} quando o valor se firma (ao soltar, ao escolher) e ${ic('onInput')} enquanto arrasta.`, `In JavaScript, like the native field: ${ic('onChange')} when the value settles (on release, on pick) and ${ic('onInput')} while dragging.`, `En JavaScript, como en el campo nativo: ${ic('onChange')} cuando el valor se fija (al soltar, al elegir) y ${ic('onInput')} mientras se arrastra.`)],
  [`${ic('onChange')} · ${ic('onCommit')}`, L(`No React, como todo campo controlado: ${ic('onChange')} a cada mudança e ${ic('onCommit')} ao soltar, para salvar ou buscar.`, `In React, like any controlled field: ${ic('onChange')} on every change and ${ic('onCommit')} on release, to save or fetch.`, `En React, como todo campo controlado: ${ic('onChange')} en cada cambio y ${ic('onCommit')} al soltar, para guardar o buscar.`)],
];

const EVENTS = () => [
  ['ds:localechange', ic('&lt;html&gt;'), '{ preference, locale }', L('O idioma mudou.', 'The language changed.', 'El idioma cambió.')],
  ['ds:themechange', ic('&lt;html&gt;'), '{ preference, resolved }', L('O tema mudou.', 'The theme changed.', 'El tema cambió.')],
  ['ds:shellchange', ic('.ds-shell'), '{ sidebar, layout, mobile, mobileOpen }', L('A sidebar recolheu, abriu ou trocou de layout.', 'The sidebar collapsed, opened, or switched layout.', 'La sidebar se contrajo, se abrió o cambió de layout.')],
  ['ds:tabchange', L('as abas (borbulha)', 'the tabs (bubbles)', 'las pestañas (burbujea)'), '{ tab, id }', L('Outra aba foi escolhida.', 'Another tab was chosen.', 'Se eligió otra pestaña.')],
  ['ds:sortchange', L('a lista de destino (borbulha)', 'the target list (bubbles)', 'la lista de destino (burbujea)'), '{ item, id, from, to, oldIndex, newIndex }', L('Um item mudou de lugar.', 'An item moved.', 'Un elemento cambió de lugar.')],
];

const SOON = () => L('na 1.0', 'in 1.0', 'en la 1.0');
const RENAMED = () => [
  [ic('editor.getHTML() · setHTML()'), ic('editor.value · setValue()')],
  [ic('composer.getValue()'), ic('composer.value · attachments · command')],
  [ic('filters.state · set()'), ic('filters.value · setValue()')],
  [ic('viewer.go()'), ic('viewer.goTo()')],
  [ic('backToTop.element'), ic('backToTop.el')],
  [ic('shell.isCollapsed() · isMobile() · isMobileOpen()'), ic('shell.collapsed · mobile · mobileOpen')],
  [ic('formatter()'), ic('chartFormatter()')],
  [ic('shell.layout()'), `${ic('shell.layout')} ${SOON()}`],
  [ic('palette.isOpen()'), `${ic('palette.isOpen')} ${SOON()}`],
  [`${ic('onInput')} ${L('no ColorPicker do React', 'in the React ColorPicker', 'en el ColorPicker de React')}`, L(`${ic('onChange')}, que já chega enquanto arrasta, e ${ic('onCommit')} ao soltar`, `${ic('onChange')}, which now fires while dragging, and ${ic('onCommit')} on release`, `${ic('onChange')}, que ya llega mientras se arrastra, y ${ic('onCommit')} al soltar`)],
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
      <p class="ra-note">${L(`Estado global segue ${ic('get…')} e ${ic('set…')}; constantes ficam em maiúsculas, como ${ic('THEMES')}.`, `Global state follows ${ic('get…')} and ${ic('set…')}; constants are uppercase, like ${ic('THEMES')}.`, `El estado global sigue ${ic('get…')} y ${ic('set…')}; las constantes van en mayúsculas, como ${ic('THEMES')}.`)}</p>`,
    )}

    ${section(
      'api-controles',
      L('Controles', 'Controllers', 'Controles'),
      L('O que um create… devolve segue as mesmas regras em todos os componentes.', 'What a create… returns follows the same rules in every component.', 'Lo que devuelve un create… sigue las mismas reglas en todos los componentes.'),
      `<div class="doc-table ra-rules">
        <div class="doc-table__head" aria-hidden="true"><span>${L('Nome', 'Name', 'Nombre')}</span><span>${L('Regra', 'Rule', 'Regla')}</span></div>
        ${CONTROLS().map(([name, text]) => `<div class="doc-table__row"><span>${name}</span><span>${text}</span></div>`).join('')}
      </div>`,
    )}

    ${section(
      'api-eventos',
      L('Eventos', 'Events', 'Eventos'),
      L(`Poucos e todos com o prefixo ${ic('ds:')}. O resto chega pelas opções ${ic('on…')} de cada componente.`, `Few, all prefixed with ${ic('ds:')}. Everything else arrives through each component’s ${ic('on…')} options.`, `Pocos y todos con el prefijo ${ic('ds:')}. El resto llega por las opciones ${ic('on…')} de cada componente.`),
      `<div class="doc-table ra-events">
        <div class="doc-table__head" aria-hidden="true"><span>${L('Evento', 'Event', 'Evento')}</span><span>${L('Onde', 'Where', 'Dónde')}</span><span>detail</span><span>${L('Quando', 'When', 'Cuándo')}</span></div>
        ${EVENTS().map(([name, where, detail, when]) => `<div class="doc-table__row"><span>${ic(name)}</span><span class="ra-muted">${where}</span><span>${ic(detail)}</span><span>${when}</span></div>`).join('')}
      </div>`,
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
      'api-saem',
      L('Saem na 1.0', 'Removed in 1.0', 'Salen en la 1.0'),
      L('Nomes acertados na 0.39 para a API ficar igual em todo lugar. Os antigos continuam funcionando até a 1.0 e avisam no console qual usar. Os dois que viram propriedade só mudam na 1.0, porque um nome não pode ser função e propriedade ao mesmo tempo.', 'Names fixed in 0.39 so the API is the same everywhere. The old ones keep working until 1.0 and say in the console which one to use. The two that become properties only change in 1.0, because a name can’t be both a function and a property at once.', 'Nombres corregidos en la 0.39 para que la API sea igual en todas partes. Los antiguos siguen funcionando hasta la 1.0 y avisan en la consola cuál usar. Los dos que pasan a ser propiedad solo cambian en la 1.0, porque un nombre no puede ser función y propiedad a la vez.'),
      `<div class="doc-table ra-renamed">
        <div class="doc-table__head" aria-hidden="true"><span>${L('Antes', 'Before', 'Antes')}</span><span>${L('Use', 'Use', 'Usa')}</span></div>
        ${RENAMED().map(([old, next]) => `<div class="doc-table__row"><span class="ra-muted">${old}</span><span>${next}</span></div>`).join('')}
      </div>`,
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
