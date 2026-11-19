import { mountDocNav } from '../doc-nav.js';
import { mountCodeCopy, codeBlock } from '../component-doc.js';
import { L } from '../i18n.js';
import { REACT_GROUPS, reactCount } from '../react.js';
import { stages } from '../roadmap.js';
import { CURRENT_VERSION } from '../changelog.js';

const LINE = CURRENT_VERSION.split('.').slice(0, 2).join('.');
// o pacote no npm (desde a 1.9): HTML, CSS, JavaScript e o React compilado, com tipos
const NPM = '@joniguerini/lume';

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

const INSTALL = () => `npm install ${NPM}`;

const TREE = () => `src/
  lume/                 ← ${L('a pasta do zip, inteira', 'the whole folder from the zip', 'la carpeta del zip, entera')}
    lume.css
    lume.js
    js/  icons/  fonts/
    react/              ← ${L('os componentes .tsx', 'the .tsx components', 'los componentes .tsx')}
  main.tsx`;

const MAIN = () => `import { createRoot } from 'react-dom/client';
import '${NPM}/lume.css';
import { initTheme } from '${NPM}';
import { App } from './App';

initTheme();
createRoot(document.getElementById('root')!).render(<App />);`;

const APP = () => `import { useState } from 'react';
import { Alert, Badge, Button, Panel } from '${NPM}/react';

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
  [L('Seus arquivos', 'Your files', 'Tus archivos'), L('Pelo npm, vêm compilados e com tipos. Copiados, os .tsx ficam no seu projeto, como no shadcn: dá para ler, mudar e apagar o que não usar.', 'From npm, they come compiled and typed. Copied, the .tsx files live in your project, as with shadcn: you can read, change, and delete what you don’t use.', 'Desde npm, vienen compilados y con tipos. Copiados, los .tsx quedan en tu proyecto, como en shadcn: puedes leer, cambiar y borrar lo que no uses.')],
  ['TypeScript', L(`Props tipadas e comentadas, com o link da página de cada componente. ${ic('IconName')} lista os 175 ícones: nome errado não compila.`, `Typed, commented props, with a link to each component’s page. ${ic('IconName')} lists the 175 icons: a wrong name won’t compile.`, `Props tipadas y comentadas, con el enlace a la página de cada componente. ${ic('IconName')} lista los 175 íconos: un nombre equivocado no compila.`)],
  [L('Idioma', 'Language', 'Idioma'), L(`Os textos que o componente escreve sozinho ("Fechar", "Carregando") seguem o idioma do Lume e mudam com ${ic('setLocale')}. ${ic('useLocale()')} faz o mesmo nos seus.`, `The text a component writes on its own ("Close", "Loading") follows Lume’s language and changes with ${ic('setLocale')}. ${ic('useLocale()')} does the same for yours.`, `Los textos que el componente escribe solo ("Cerrar", "Cargando") siguen el idioma de Lume y cambian con ${ic('setLocale')}. ${ic('useLocale()')} hace lo mismo en los tuyos.`)],
  [L('Versões', 'Versions', 'Versiones'), L(`Pelo npm, atualizar é ${ic(`npm update ${NPM}`)}; a versão do pacote é a do Lume. Copiado, a pasta ${ic('react/')} vai em cada linha (${ic(`/v/${LINE}/react/`)}) e atualizar é trocar a pasta.`, `From npm, updating is ${ic(`npm update ${NPM}`)}; the package version is Lume’s. Copied, the ${ic('react/')} folder ships with every line (${ic(`/v/${LINE}/react/`)}) and updating means swapping the folder.`, `Desde npm, actualizar es ${ic(`npm update ${NPM}`)}; la versión del paquete es la de Lume. Copiado, la carpeta ${ic('react/')} va en cada línea (${ic(`/v/${LINE}/react/`)}) y actualizar es cambiar la carpeta.`)],
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
        <p class="doc-header__lead">${L('Componentes React por cima do mesmo CSS e JavaScript do Lume, já compilados e com tipos. Instale pelo npm ou, se preferir os arquivos no projeto, copie os .tsx.', 'React components on top of Lume’s same CSS and JavaScript, already compiled and typed. Install from npm or, if you’d rather have the files in your project, copy the .tsx files.', 'Componentes React sobre el mismo CSS y JavaScript de Lume, ya compilados y con tipos. Instálalos desde npm o, si prefieres los archivos en el proyecto, copia los .tsx.')}</p>
      </div>
      <dl class="doc-stats">
        <div class="doc-stat"><dt class="doc-stat__label">${L('dos 67 componentes', 'of the 67 components', 'de los 67 componentes')}</dt><dd class="doc-stat__value">${reactCount()}</dd></div>
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
      L('Um pacote só traz o CSS, o JavaScript e os componentes React, já compilados e com tipos. Funciona com Vite, Next.js e qualquer projeto React 18 ou mais novo.', 'One package brings the CSS, the JavaScript, and the React components, already compiled and typed. It works with Vite, Next.js, and any React 18 or newer project.', 'Un solo paquete trae el CSS, el JavaScript y los componentes React, ya compilados y con tipos. Funciona con Vite, Next.js y cualquier proyecto React 18 o más nuevo.'),
      `${codeBlock(INSTALL())}
      <h3 class="doc-subhead">${L('Prefere os arquivos no projeto?', 'Prefer the files in your project?', '¿Prefieres los archivos en el proyecto?')}</h3>
      <p class="doc-section__desc">${L(`Como no shadcn: <a href="https://lumeui.dev/v/${LINE}/lume-${LINE}.zip">baixe o zip da versão ${LINE}</a> e leve a pasta para ${ic('src/')} com o nome ${ic('lume')}, ou rode ${ic(`npx ${NPM} init`)}. Os componentes ficam em ${ic('lume/react/')}, em .tsx, para ler e mudar à vontade; aí os imports passam a ser ${ic('./lume/react')}.`, `As with shadcn: <a href="https://lumeui.dev/v/${LINE}/lume-${LINE}.zip">download the ${LINE} zip</a> and move the folder into ${ic('src/')} named ${ic('lume')}, or run ${ic(`npx ${NPM} init`)}. The components live in ${ic('lume/react/')}, as .tsx, to read and change freely; your imports then become ${ic('./lume/react')}.`, `Como en shadcn: <a href="https://lumeui.dev/v/${LINE}/lume-${LINE}.zip">descarga el zip de la versión ${LINE}</a> y lleva la carpeta a ${ic('src/')} con el nombre ${ic('lume')}, o ejecuta ${ic(`npx ${NPM} init`)}. Los componentes quedan en ${ic('lume/react/')}, en .tsx, para leer y cambiar a gusto; entonces los imports pasan a ser ${ic('./lume/react')}.`)}</p>
      ${codeBlock(TREE())}`,
    )}

    ${section(
      'react-usar',
      L('Usar', 'Use', 'Usar'),
      L(`Importe o ${ic('lume.css')} uma vez, na entrada do app, e os componentes de ${ic(`${NPM}/react`)}. No Next.js, o CSS vai no layout raiz; os componentes já chegam marcados para o cliente.`, `Import ${ic('lume.css')} once, at the app’s entry, and the components from ${ic(`${NPM}/react`)}. In Next.js, the CSS goes in the root layout; the components already arrive marked for the client.`, `Importa ${ic('lume.css')} una vez, en la entrada de la app, y los componentes de ${ic(`${NPM}/react`)}. En Next.js, el CSS va en el layout raíz; los componentes ya llegan marcados para el cliente.`),
      `${codeBlock(MAIN())}${codeBlock(APP())}
      <p class="ra-note">${L(`Com uma IA: aponte para ${ic('https://lumeui.dev/llms.txt')} e diga que o projeto usa os componentes de ${ic(`${NPM}/react`)}.`, `With an AI: point it to ${ic('https://lumeui.dev/llms.txt')} and say the project uses the components in ${ic(`${NPM}/react`)}.`, `Con una IA: apúntala a ${ic('https://lumeui.dev/llms.txt')} y dile que el proyecto usa los componentes de ${ic(`${NPM}/react`)}.`)}</p>`,
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
        ? L('Uma etapa por versão, até os 67 componentes. Enquanto um componente não chega, use a marcação HTML da página dele com className: o CSS é o mesmo.', 'One stage per version, up to all 67 components. Until a component arrives, use the HTML markup from its page with className: the CSS is the same.', 'Una etapa por versión, hasta los 67 componentes. Mientras un componente no llega, usa el marcado HTML de su página con className: el CSS es el mismo.')
        : L('Os 67 componentes já estão em React.', 'All 67 components are already in React.', 'Los 67 componentes ya están en React.'),
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
