import { mountDocNav } from '../doc-nav.js';
import { mountCodeCopy, codeBlock } from '../component-doc.js';
import { L } from '../i18n.js';
import { REACT_GROUPS, reactCount } from '../react.js';
import { stages } from '../roadmap.js';
import { CURRENT_VERSION } from '../changelog.js';

const LINE = CURRENT_VERSION.split('.').slice(0, 2).join('.');

export const styles = ['site/component-doc.css', 'site/pages/recursos-api.css'];

const ic = (s) => `<code class="ds-inline-code">${s}</code>`;

const NAV = () => [
  ['react-instalar', L('Instalar', 'Install', 'Instalar')],
  ['react-usar', L('Usar', 'Use', 'Usar')],
  ['react-componentes', L('Componentes', 'Components', 'Componentes')],
  ['react-funciona', L('Como funciona', 'How it works', 'Cómo funciona')],
  ['react-proximos', L('O que vem', 'What’s next', 'Lo que viene')],
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

const TREE = () => `src/
  lume/                 ← ${L('a pasta do zip, inteira', 'the whole folder from the zip', 'la carpeta del zip, entera')}
    lume.css
    lume.js
    js/  icons/  fonts/
    react/              ← ${L('os componentes .tsx', 'the .tsx components', 'los componentes .tsx')}
  main.tsx`;

const MAIN = () => `import { createRoot } from 'react-dom/client';
import './lume/lume.css';
import { initTheme } from './lume/lume.js';
import { App } from './App';

initTheme();
createRoot(document.getElementById('root')!).render(<App />);`;

const APP = () => `import { useState } from 'react';
import { Alert, Badge, Button, Panel } from './lume/react';

export function App() {
  const [saving, setSaving] = useState(false);
  return (
    <Panel eyebrow="${L('Pedido', 'Order', 'Pedido')}" title="${L('Pedido #1042', 'Order #1042', 'Pedido #1042')}" actions={<Badge tone="success" dot>${L('Pago', 'Paid', 'Pagado')}</Badge>}>
      <Alert tone="info" title="${L('Entrega prevista para sexta', 'Delivery expected on Friday', 'Entrega prevista para el viernes')}" />
      <Button variant="primary" icon="check" busy={saving} onClick={() => setSaving(true)}>
        {saving ? '${L('Salvando', 'Saving', 'Guardando')}' : '${L('Confirmar', 'Confirm', 'Confirmar')}'}
      </Button>
    </Panel>
  );
}`;

const HOW = () => [
  [L('Uma camada fina', 'A thin layer', 'Una capa fina'), L(`Cada componente só monta a marcação do Lume, com as mesmas classes. O visual vem do ${ic('lume.css')}; corrigiu lá, corrigiu no React.`, `Each component only builds Lume’s markup, with the same classes. The look comes from ${ic('lume.css')}; fix it there, it’s fixed in React.`, `Cada componente solo arma el marcado de Lume, con las mismas clases. El aspecto viene de ${ic('lume.css')}; se corrige allí, queda corregido en React.`)],
  [L('Seus arquivos', 'Your files', 'Tus archivos'), L('Os .tsx ficam no seu projeto, como no shadcn: dá para ler, mudar e apagar o que não usar. Nada de npm.', 'The .tsx files live in your project, as with shadcn: you can read, change, and delete what you don’t use. No npm.', 'Los .tsx quedan en tu proyecto, como en shadcn: puedes leer, cambiar y borrar lo que no uses. Nada de npm.')],
  ['TypeScript', L(`Props tipadas e comentadas, com o link da página de cada componente. ${ic('IconName')} lista os 150 ícones: nome errado não compila.`, `Typed, commented props, with a link to each component’s page. ${ic('IconName')} lists the 150 icons: a wrong name won’t compile.`, `Props tipadas y comentadas, con el enlace a la página de cada componente. ${ic('IconName')} lista los 150 íconos: un nombre equivocado no compila.`)],
  [L('Idioma', 'Language', 'Idioma'), L(`Os textos que o componente escreve sozinho ("Fechar", "Carregando") seguem o idioma do Lume e mudam com ${ic('setLocale')}. ${ic('useLocale()')} faz o mesmo nos seus.`, `The text a component writes on its own ("Close", "Loading") follows Lume’s language and changes with ${ic('setLocale')}. ${ic('useLocale()')} does the same for yours.`, `Los textos que el componente escribe solo ("Cerrar", "Cargando") siguen el idioma de Lume y cambian con ${ic('setLocale')}. ${ic('useLocale()')} hace lo mismo en los tuyos.`)],
  [L('Versões', 'Versions', 'Versiones'), L(`A pasta ${ic('react/')} vai em cada linha: ${ic(`/v/${LINE}/react/`)}. Atualizar é trocar a pasta do Lume pela da linha nova.`, `The ${ic('react/')} folder ships with every line: ${ic(`/v/${LINE}/react/`)}. Updating means swapping the Lume folder for the new line’s.`, `La carpeta ${ic('react/')} va en cada línea: ${ic(`/v/${LINE}/react/`)}. Actualizar es cambiar la carpeta de Lume por la de la línea nueva.`)],
];

export default function renderReact(page) {
  const groups = REACT_GROUPS();
  const next = stages().filter((s) => s.title.startsWith('React'));
  return `
  <div class="page doc ra-page">
    <header class="doc-header">
      <div>
        <p class="doc-header__eyebrow">${page.group}</p>
        <h1 class="doc-header__title">${page.label}</h1>
        <p class="doc-header__lead">${L('Componentes .tsx para copiar no projeto, por cima do mesmo CSS e JavaScript do Lume. Sem pacote para instalar: a pasta vem no zip de cada versão.', '.tsx components to copy into your project, on top of Lume’s same CSS and JavaScript. No package to install: the folder comes in each version’s zip.', 'Componentes .tsx para copiar al proyecto, sobre el mismo CSS y JavaScript de Lume. Sin paquete que instalar: la carpeta viene en el zip de cada versión.')}</p>
      </div>
      <dl class="doc-stats">
        <div class="doc-stat"><dt class="doc-stat__label">${L('dos 55 componentes', 'of the 55 components', 'de los 55 componentes')}</dt><dd class="doc-stat__value">${reactCount()}</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">React</dt><dd class="doc-stat__value">18+</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('dependências', 'dependencies', 'dependencias')}</dt><dd class="doc-stat__value">0</dd></div>
      </dl>
    </header>

    <nav class="doc-nav" aria-label="${L('Nesta página', 'On this page', 'En esta página')}">
      ${NAV().map(([id, label]) => `<button type="button" class="doc-nav__link" data-target="${id}">${label}</button>`).join('')}
    </nav>

    ${section(
      'react-instalar',
      L('Instalar', 'Install', 'Instalar'),
      L(`<a href="https://lumeui.dev/v/${LINE}/lume-${LINE}.zip">Baixe o zip da versão ${LINE}</a>, descompacte e leve a pasta para dentro de ${ic('src/')} com o nome ${ic('lume')}. Os componentes estão em ${ic('lume/react/')} e importam o JavaScript e os ícones da própria pasta. Funciona com Vite, Next.js e qualquer projeto React 18 ou mais novo.`, `<a href="https://lumeui.dev/v/${LINE}/lume-${LINE}.zip">Download the ${LINE} zip</a>, unzip it, and move the folder into ${ic('src/')} named ${ic('lume')}. The components are in ${ic('lume/react/')} and import the JavaScript and icons from that same folder. It works with Vite, Next.js, and any React 18 or newer project.`, `<a href="https://lumeui.dev/v/${LINE}/lume-${LINE}.zip">Descarga el zip de la versión ${LINE}</a>, descomprímelo y lleva la carpeta dentro de ${ic('src/')} con el nombre ${ic('lume')}. Los componentes están en ${ic('lume/react/')} e importan el JavaScript y los íconos de la misma carpeta. Funciona con Vite, Next.js y cualquier proyecto React 18 o más nuevo.`),
      codeBlock(TREE()),
    )}

    ${section(
      'react-usar',
      L('Usar', 'Use', 'Usar'),
      L(`Importe o ${ic('lume.css')} uma vez, na entrada do app, e os componentes de ${ic('./lume/react')}.`, `Import ${ic('lume.css')} once, at the app’s entry, and the components from ${ic('./lume/react')}.`, `Importa ${ic('lume.css')} una vez, en la entrada de la app, y los componentes de ${ic('./lume/react')}.`),
      `${codeBlock(MAIN())}${codeBlock(APP())}
      <p class="ra-note">${L(`Com uma IA: aponte para ${ic('https://lumeui.dev/llms.txt')} e diga que o projeto usa os componentes de ${ic('lume/react')}.`, `With an AI: point it to ${ic('https://lumeui.dev/llms.txt')} and say the project uses the components in ${ic('lume/react')}.`, `Con una IA: apúntala a ${ic('https://lumeui.dev/llms.txt')} y dile que el proyecto usa los componentes de ${ic('lume/react')}.`)}</p>`,
    )}

    ${section(
      'react-componentes',
      L('Componentes', 'Components', 'Componentes'),
      L('O que já está em React. Cada nome leva à página do componente, onde estão os usos, as variantes e a acessibilidade, que valem igual aqui.', 'What’s already in React. Each name leads to the component’s page, with the uses, variants, and accessibility, which apply here just the same.', 'Lo que ya está en React. Cada nombre lleva a la página del componente, con los usos, las variantes y la accesibilidad, que valen igual aquí.'),
      groups.map((g) => `<h3 class="doc-subhead">${g.title}</h3>
      <div class="doc-table ra-items">
        <div class="doc-table__head" aria-hidden="true"><span>${L('Componente', 'Component', 'Componente')}</span><span>${L('O que faz', 'What it does', 'Qué hace')}</span><span>${L('Arquivo', 'File', 'Archivo')}</span></div>
        ${g.items.map(([name, file, route, , text]) => `<div class="doc-table__row"><span>${route ? `<a href="#${route}">${ic(name)}</a>` : ic(name)}</span><span>${text}</span><span class="ra-muted">${file}</span></div>`).join('')}
      </div>`).join(''),
    )}

    ${section(
      'react-funciona',
      L('Como funciona', 'How it works', 'Cómo funciona'),
      '',
      `<div class="doc-table ra-verbs" style="--doc-table-cols: minmax(0, 1fr) minmax(0, 3.4fr)">
        ${HOW().map(([title, text]) => `<div class="doc-table__row"><span>${title}</span><span>${text}</span></div>`).join('')}
      </div>`,
    )}

    ${section(
      'react-proximos',
      L('O que vem', 'What’s next', 'Lo que viene'),
      next.length
        ? L('Uma etapa por versão, até os 55 componentes. Enquanto um componente não chega, use a marcação HTML da página dele com className: o CSS é o mesmo.', 'One stage per version, up to all 55 components. Until a component arrives, use the HTML markup from its page with className: the CSS is the same.', 'Una etapa por versión, hasta los 55 componentes. Mientras un componente no llega, usa el marcado HTML de su página con className: el CSS es el mismo.')
        : L('Os 55 componentes já estão em React.', 'All 55 components are already in React.', 'Los 55 componentes ya están en React.'),
      next.length
        ? `<div class="doc-table ra-items">
        ${next.map((s) => `<div class="doc-table__row"><span>${ic(s.version)}</span><span>${s.title}: ${s.text}</span><span class="ra-muted">${s.status}</span></div>`).join('')}
      </div>`
        : '',
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
