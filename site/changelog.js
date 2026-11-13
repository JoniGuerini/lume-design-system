/**
 * Histórico de versões do Lume — fonte da página Novidades e do indicador da sidebar.
 * Tipos: 'novo' | 'melhoria' | 'correcao'.
 * Textos em T(pt-BR, en, es): títulos, resumos, nomes dos grupos e itens. Em `releases`
 * e `TYPES` eles viram getters no idioma atual.
 */
import { tr } from '../ds/js/i18n.js';

const T = (pt, en, es) => ({ 'pt-BR': pt, en, es });

export const CURRENT_VERSION = '0.26.0';
export const SEEN_KEY = 'ds-novidades-vista';

const RELEASES = [
  {
    version: '0.26.0',
    date: '2026-11-13',
    title: T('React: base e componentes visuais', 'React: foundation and visual components', 'React: base y componentes visuales'),
    summary: T(
      'O Lume chega ao React: componentes .tsx para copiar no projeto, por cima do mesmo CSS. Os primeiros 15 são os visuais, de Botão a Breadcrumb.',
      'Lume comes to React: .tsx components to copy into your project, on top of the same CSS. The first 15 are the visual ones, from Button to Breadcrumb.',
      'Lume llega a React: componentes .tsx para copiar al proyecto, sobre el mismo CSS. Los primeros 15 son los visuales, de Botón a Breadcrumb.',
    ),
    groups: [
      {
        name: T('React', 'React', 'React'),
        items: [
          ['novo', T('Página Recursos › Usar com React: instalação, exemplo e a lista dos componentes', 'Resources › Use with React page: installation, an example, and the list of components', 'Página Recursos › Usar con React: instalación, ejemplo y la lista de componentes'), '/recursos/react'],
          ['novo', T('15 componentes em .tsx: Botão, Ação inline, Chip, Badge, Alerta, Barra de progresso, Spinner, Skeleton, Card, Painel, Avatar, Tecla, Lista de definições, Linha do tempo e Breadcrumb', '15 components in .tsx: Button, Inline action, Chip, Badge, Alert, Progress bar, Spinner, Skeleton, Card, Panel, Avatar, Key, Description list, Timeline, and Breadcrumb', '15 componentes en .tsx: Botón, Acción inline, Chip, Badge, Alerta, Barra de progreso, Spinner, Skeleton, Card, Panel, Avatar, Tecla, Lista de definiciones, Línea de tiempo y Breadcrumb'), '/recursos/react'],
          ['novo', T('Ícones tipados: o TypeScript recusa um nome que não existe', 'Typed icons: TypeScript rejects a name that doesn’t exist', 'Íconos tipados: TypeScript rechaza un nombre que no existe'), '/recursos/react'],
          ['novo', T('A pasta react/ vai no zip e no endereço de cada versão, como /v/0.26/react/', 'The react/ folder ships in each version’s zip and address, like /v/0.26/react/', 'La carpeta react/ va en el zip y en la dirección de cada versión, como /v/0.26/react/'), '/recursos/react'],
        ],
      },
      {
        name: T('Para IAs', 'For AI', 'Para IA'),
        items: [
          ['melhoria', T('Guias e skills com a seção React: o que usar e o que fazer quando o componente ainda não existe', 'Guides and skills with a React section: what to use and what to do when a component doesn’t exist yet', 'Guías y skills con la sección React: qué usar y qué hacer cuando el componente aún no existe'), '/recursos/ia'],
        ],
      },
    ],
  },
  {
    version: '0.25.4',
    date: '2026-11-13',
    title: T('Roadmap do React', 'React roadmap', 'Roadmap de React'),
    summary: T(
      'O roadmap ganhou quatro etapas para levar os 44 componentes ao React, no formato de copiar para o projeto, antes da 1.0.',
      'The roadmap gained four stages to bring all 44 components to React, in a copy-into-your-project format, before 1.0.',
      'El roadmap ganó cuatro etapas para llevar los 44 componentes a React, en formato de copiar al proyecto, antes de la 1.0.',
    ),
    groups: [
      {
        name: T('Roadmap', 'Roadmap', 'Roadmap'),
        items: [
          ['novo', T('Etapas 0.26 a 0.29: componentes React em .tsx, por grupo', 'Stages 0.26 to 0.29: React components in .tsx, by group', 'Etapas 0.26 a 0.29: componentes React en .tsx, por grupo'), '/roadmap'],
        ],
      },
    ],
  },
  {
    version: '0.25.3',
    date: '2026-11-13',
    title: T('Storybook', 'Storybook', 'Storybook'),
    summary: T(
      'Os 44 componentes no Storybook, com o CSS real, tema claro e escuro e os três idiomas. O link fica no topo do site.',
      'All 44 components in Storybook, with the real CSS, light and dark themes, and the three languages. The link is at the top of the site.',
      'Los 44 componentes en Storybook, con el CSS real, tema claro y oscuro y los tres idiomas. El enlace está arriba en el sitio.',
    ),
    groups: [
      {
        name: T('Recursos', 'Resources', 'Recursos'),
        items: [
          ['novo', T('Storybook em lumeui.dev/storybook: uma história por seção de cada página de componente', 'Storybook at lumeui.dev/storybook: one story per section of each component page', 'Storybook en lumeui.dev/storybook: una historia por sección de cada página de componente'), '/'],
          ['novo', T('Botão, Badge, Alerta e Switch com controles para montar ao vivo', 'Button, Badge, Alert, and Switch with controls to build live', 'Botón, Badge, Alerta y Switch con controles para armar en vivo'), '/'],
          ['melhoria', T('Ícone do Storybook no topo do site', 'Storybook icon at the top of the site', 'Ícono de Storybook arriba en el sitio'), '/'],
        ],
      },
    ],
  },
  {
    version: '0.25.2',
    date: '2026-11-12',
    title: T('Arrumação', 'Tidy-up', 'Orden'),
    summary: T(
      'Os exemplos de código importam de lume.js, como a instalação ensina; a página Como contribuir saiu; e as visitas agora são contadas por página.',
      'Code examples import from lume.js, as the installation teaches; the How to contribute page is gone; and visits are now counted per page.',
      'Los ejemplos de código importan de lume.js, como enseña la instalación; la página Cómo contribuir salió; y las visitas ahora se cuentan por página.',
    ),
    groups: [
      {
        name: T('Site', 'Site', 'Sitio'),
        items: [
          ['correcao', T('Exemplos de código importam de lume.js, no endereço da versão', 'Code examples import from lume.js, at the versioned address', 'Los ejemplos de código importan de lume.js, en la dirección de la versión'), '/componentes/modal'],
          ['melhoria', T('Sai a página Como contribuir: o processo era de um time que o Lume não tem', 'The How to contribute page is gone: it described a team process Lume doesn’t have', 'Sale la página Cómo contribuir: describía un proceso de equipo que Lume no tiene'), '/novidades'],
          ['melhoria', T('Contagem de visitas por página', 'Visit counts per page', 'Conteo de visitas por página'), '/'],
        ],
      },
    ],
  },
  {
    version: '0.25.1',
    date: '2026-11-12',
    title: T('Instalação mais clara', 'Clearer installation', 'Instalación más clara'),
    summary: T(
      'A instalação ficou em três passos: o endereço com versão aparece direto na linha do CSS, que é o que você cola no projeto.',
      'Installation is now three steps: the versioned address shows up right in the CSS line, which is what you paste into your project.',
      'La instalación quedó en tres pasos: la dirección con versión aparece directo en la línea del CSS, que es lo que pegas en el proyecto.',
    ),
    groups: [
      {
        name: T('Site', 'Site', 'Sitio'),
        items: [
          ['correcao', T('Primeiros passos: sai o passo que só mostrava o endereço da versão', 'Getting started: the step that only showed the version address is gone', 'Primeros pasos: sale el paso que solo mostraba la dirección de la versión'), '/primeiros-passos'],
        ],
      },
    ],
  },
  {
    version: '0.25.0',
    date: '2026-11-12',
    title: T('Pacote', 'Package', 'Paquete'),
    summary: T(
      'Cada versão ganha um endereço fixo, lumeui.dev/v/0.25/, com o CSS num arquivo só, a API em lume.js e um zip. Licença MIT.',
      'Each version gets a fixed address, lumeui.dev/v/0.25/, with the CSS in a single file, the API in lume.js, and a zip. MIT license.',
      'Cada versión tiene una dirección fija, lumeui.dev/v/0.25/, con el CSS en un solo archivo, la API en lume.js y un zip. Licencia MIT.',
    ),
    groups: [
      {
        name: T('Pacote', 'Package', 'Paquete'),
        items: [
          ['novo', T('Endereços com versão: o projeto só muda quando você trocar o número', 'Versioned addresses: your project only changes when you change the number', 'Direcciones con versión: el proyecto solo cambia cuando cambias el número'), '/primeiros-passos'],
          ['novo', T('lume.css: fontes, tokens, base e todos os componentes num arquivo só', 'lume.css: fonts, tokens, base, and every component in a single file', 'lume.css: fuentes, tokens, base y todos los componentes en un solo archivo'), '/primeiros-passos'],
          ['novo', T('Zip de cada versão, para quem prefere os arquivos no projeto', 'A zip of every version, for those who prefer the files in their project', 'Zip de cada versión, para quien prefiere los archivos en el proyecto'), '/primeiros-passos'],
          ['novo', T('Licença MIT; as fontes seguem na OFL', 'MIT license; the fonts stay under the OFL', 'Licencia MIT; las fuentes siguen bajo la OFL'), '/primeiros-passos'],
          ['melhoria', T('Primeiros passos e os guias para IAs ensinam a instalar pela versão', 'Getting started and the AI guides teach installing by version', 'Primeros pasos y las guías para IA enseñan a instalar por versión'), '/primeiros-passos'],
        ],
      },
    ],
  },
  {
    version: '0.24.0',
    date: '2026-11-12',
    title: T('Testes e API', 'Tests and API', 'Pruebas y API'),
    summary: T(
      'A API pública num arquivo só, ds/lume.js, com uma convenção de nomes, e testes visuais que mostram o que mudou antes de publicar.',
      'The public API in a single file, ds/lume.js, with a naming convention, plus visual tests that show what changed before publishing.',
      'La API pública en un solo archivo, ds/lume.js, con una convención de nombres, y pruebas visuales que muestran qué cambió antes de publicar.',
    ),
    groups: [
      {
        name: T('API', 'API', 'API'),
        items: [
          ['novo', T('ds/lume.js reúne os 83 itens públicos', 'ds/lume.js gathers the 83 public items', 'ds/lume.js reúne los 83 ítems públicos'), '/recursos/api'],
          ['novo', T('Página Recursos › API, com a convenção e tudo o que é público', 'Resources › API page, with the convention and everything public', 'Página Recursos › API, con la convención y todo lo público'), '/recursos/api'],
          ['melhoria', T('Nomes na convenção: createMenu, createSelect, createForm, createContextMenu, mountThemeControls e modalHtml', 'Names follow the convention: createMenu, createSelect, createForm, createContextMenu, mountThemeControls, and modalHtml', 'Nombres en la convención: createMenu, createSelect, createForm, createContextMenu, mountThemeControls y modalHtml'), '/recursos/api'],
          ['melhoria', T('Gráficos também: createBarChart, createLineChart e os demais; statTileHtml, sparklineHtml e meterHtml', 'Charts too: createBarChart, createLineChart, and the rest; statTileHtml, sparklineHtml, and meterHtml', 'Gráficos también: createBarChart, createLineChart y los demás; statTileHtml, sparklineHtml y meterHtml'), '/graficos/visao-geral'],
        ],
      },
      {
        name: T('Testes', 'Tests', 'Pruebas'),
        items: [
          ['novo', T('Testes visuais: 422 fotos dos componentes nos dois temas, comparadas pixel a pixel', 'Visual tests: 422 shots of the components in both themes, compared pixel by pixel', 'Pruebas visuales: 422 fotos de los componentes en los dos temas, comparadas píxel a píxel'), '/recursos/api'],
        ],
      },
    ],
  },
  {
    version: '0.23.1',
    date: '2026-11-12',
    title: T('IAs em três idiomas', 'AI docs in three languages', 'IA en tres idiomas'),
    summary: T(
      'A documentação para IAs agora também existe em inglês e espanhol, com guia, AGENTS.md, skill e índice próprios em cada idioma.',
      'The AI documentation now also exists in English and Spanish, with its own guide, AGENTS.md, skill, and index in each language.',
      'La documentación para IA ahora también existe en inglés y español, con guía, AGENTS.md, skill e índice propios en cada idioma.',
    ),
    groups: [
      {
        name: T('Recursos', 'Resources', 'Recursos'),
        items: [
          ['melhoria', T('Arquivos para IAs em inglês (ia/en/) e espanhol (ia/es/)', 'AI files in English (ia/en/) and Spanish (ia/es/)', 'Archivos para IA en inglés (ia/en/) y español (ia/es/)'), '/recursos/ia'],
          ['melhoria', T('A página Para IAs aponta para os arquivos do idioma escolhido', 'The For AI page points to the files in the chosen language', 'La página Para IA apunta a los archivos del idioma elegido'), '/recursos/ia'],
        ],
      },
    ],
  },
  {
    version: '0.23.0',
    date: '2026-11-12',
    title: T('Lume para IAs', 'Lume for AI', 'Lume para IA'),
    summary: T(
      'A documentação inteira em Markdown, no formato que as IAs leem, com regras para não inventarem classes, ícones nem cores. Tem índice llms.txt, AGENTS.md e uma skill para o Claude.',
      'The whole documentation in Markdown, in the format AIs read, with rules so they don’t invent classes, icons, or colors. It comes with an llms.txt index, AGENTS.md, and a Claude skill.',
      'Toda la documentación en Markdown, en el formato que leen las IAs, con reglas para que no inventen clases, íconos ni colores. Incluye el índice llms.txt, AGENTS.md y una skill para Claude.',
    ),
    groups: [
      {
        name: T('Recursos', 'Resources', 'Recursos'),
        items: [
          ['novo', T('Página Para IAs, com os três jeitos de usar o Lume numa IA', 'For AI page, with three ways to use Lume with an AI', 'Página Para IA, con las tres formas de usar Lume en una IA'), '/recursos/ia'],
          ['novo', T('Um arquivo Markdown por página do site, gerado a partir dela', 'One Markdown file per site page, generated from it', 'Un archivo Markdown por página del sitio, generado a partir de ella'), '/recursos/ia'],
          ['novo', T('Índice llms.txt, regras em AGENTS.md e skill para o Claude', 'llms.txt index, AGENTS.md rules, and a Claude skill', 'Índice llms.txt, reglas en AGENTS.md y skill para Claude'), '/recursos/ia'],
          ['melhoria', T('O CSS e os módulos podem ser carregados direto de lumeui.dev em outros sites', 'The CSS and modules can be loaded straight from lumeui.dev on other sites', 'El CSS y los módulos se pueden cargar directamente desde lumeui.dev en otros sitios'), '/primeiros-passos'],
        ],
      },
    ],
  },
  {
    version: '0.22.2',
    date: '2026-11-09',
    title: T('Contagem de visitas', 'Visit counts', 'Conteo de visitas'),
    summary: T(
      'O site agora conta visitas de forma anônima, para sabermos quantas pessoas chegam até o Lume.',
      'The site now counts visits anonymously, so we know how many people reach Lume.',
      'El sitio ahora cuenta las visitas de forma anónima, para saber cuántas personas llegan a Lume.',
    ),
    groups: [
      {
        name: T('Site', 'Site', 'Sitio'),
        items: [
          ['melhoria', T('Contagem anônima de visitas no site publicado', 'Anonymous visit counts on the published site', 'Conteo anónimo de visitas en el sitio publicado'), '/'],
        ],
      },
    ],
  },
  {
    version: '0.22.1',
    date: '2026-11-09',
    title: T('Números do plugin no site', 'Plugin numbers on the site', 'Números del plugin en el sitio'),
    summary: T(
      'A página do plugin do Figma agora mostra blocos, variantes e ícones também no site publicado, sempre atualizados a cada publicação.',
      'The Figma plugin page now shows blocks, variants, and icons on the published site too, updated with every release.',
      'La página del plugin de Figma ahora muestra bloques, variantes e íconos también en el sitio publicado, siempre actualizados en cada publicación.',
    ),
    groups: [
      {
        name: T('Recursos', 'Resources', 'Recursos'),
        items: [
          ['correcao', T('Plugin do Figma: números e lista de blocos no site publicado', 'Figma plugin: numbers and block list on the published site', 'Plugin de Figma: números y lista de bloques en el sitio publicado'), '/recursos/figma'],
          ['correcao', T('Plugin do Figma: o caminho da prévia não é mais um link quebrado no site publicado', 'Figma plugin: the preview path is no longer a broken link on the published site', 'Plugin de Figma: la ruta de la vista previa ya no es un enlace roto en el sitio publicado'), '/recursos/figma'],
        ],
      },
    ],
  },
  {
    version: '0.22.0',
    date: '2026-11-09',
    title: T('Plugin do Figma', 'Figma plugin', 'Plugin de Figma'),
    summary: T(
      'O plugin alcançou o site: temas, fontes, logotipo, navbar, a escala de alturas e os componentes novos. São 67 blocos e 622 variantes.',
      'The plugin caught up with the site: themes, fonts, logo, navbar, the height scale, and the new components. That’s 67 blocks and 622 variants.',
      'El plugin alcanzó al sitio: temas, fuentes, logotipo, navbar, la escala de alturas y los componentes nuevos. Son 67 bloques y 622 variantes.',
    ),
    groups: [
      {
        name: T('Plugin', 'Plugin', 'Plugin'),
        items: [
          ['novo', T('25 blocos novos: formulários, navegação, camadas, carregamento, conteúdo e login', '25 new blocks: forms, navigation, layers, loading, content, and login', '25 bloques nuevos: formularios, navegación, capas, carga, contenido e inicio de sesión'), '/recursos/figma'],
          ['melhoria', T('App shell com a navbar, a topbar atual e o logotipo em Geist Serif', 'App shell with the navbar, the current topbar, and the Geist Serif logo', 'App shell con la navbar, la topbar actual y el logotipo en Geist Serif'), '/recursos/figma'],
          ['melhoria', T('Chip, abas e botão de ícone na escala de alturas', 'Chip, tabs, and icon button on the height scale', 'Chip, pestañas y botón de ícono en la escala de alturas'), '/recursos/figma'],
          ['melhoria', T('Nova linha Camadas, com Modal e Tooltip, como no site', 'New Layers row, with Modal and Tooltip, as on the site', 'Nueva fila Capas, con Modal y Tooltip, como en el sitio'), '/recursos/figma'],
        ],
      },
    ],
  },
  {
    version: '0.21.1',
    date: '2026-11-08',
    title: T('Navbar em janelas menores', 'Navbar in smaller windows', 'Navbar en ventanas más pequeñas'),
    summary: T(
      'Os itens da navbar não passam mais por cima da busca. Sem espaço, a busca vira só o ícone e o que não couber vai para o menu Mais.',
      'Navbar items no longer run over the search. Without room, the search becomes just its icon and what doesn’t fit goes into the More menu.',
      'Los elementos de la navbar ya no pasan por encima de la búsqueda. Sin espacio, la búsqueda queda solo con el ícono y lo que no cabe va al menú Más.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['correcao', T('Navbar: busca só com o ícone e menu Mais quando falta espaço', 'Navbar: icon-only search and a More menu when space runs out', 'Navbar: búsqueda solo con ícono y menú Más cuando falta espacio'), '/padroes/app-shell'],
        ],
      },
    ],
  },
  {
    version: '0.21.0',
    date: '2026-11-08',
    title: T('Voltar ao topo', 'Back to top', 'Volver arriba'),
    summary: T(
      'Em páginas longas, um botão no canto leva de volta ao começo. O site inteiro já usa.',
      'On long pages, a button in the corner takes you back to the start. The whole site already uses it.',
      'En páginas largas, un botón en la esquina lleva de vuelta al inicio. Todo el sitio ya lo usa.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T('Voltar ao topo: aparece depois de uma tela de rolagem', 'Back to top: appears after one screen of scrolling', 'Volver arriba: aparece después de una pantalla de desplazamiento'), '/componentes/voltar-ao-topo'],
        ],
      },
    ],
  },
  {
    version: '0.20.0',
    date: '2026-11-08',
    title: T('Barra de rolagem', 'Scrollbar', 'Barra de desplazamiento'),
    summary: T(
      'A barra que o site já usava agora é um componente documentado, com exemplos para rolar, estados e os ajustes por área.',
      'The bar the site already used is now a documented component, with examples to scroll, states, and per-area settings.',
      'La barra que el sitio ya usaba ahora es un componente documentado, con ejemplos para desplazar, estados y ajustes por área.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T('Barra de rolagem com página própria', 'Scrollbar with its own page', 'Barra de desplazamiento con página propia'), '/componentes/barra-de-rolagem'],
          ['novo', T('Ícone de barra de rolagem', 'Scrollbar icon', 'Ícono de barra de desplazamiento'), '/fundamentos/icones'],
          ['melhoria', T('Hover da barra pode ser forçado com data-state', 'The bar’s hover can be forced with data-state', 'El hover de la barra se puede forzar con data-state'), '/componentes/barra-de-rolagem'],
          ['correcao', T('A barra acompanha a área quando a página rola ou a sidebar recolhe, em vez de ficar parada na tela', 'The bar follows its area when the page scrolls or the sidebar collapses, instead of staying put on screen', 'La barra sigue a su área cuando la página se desplaza o la sidebar se recoge, en vez de quedarse quieta en la pantalla'), '/componentes/barra-de-rolagem'],
        ],
      },
    ],
  },
  {
    version: '0.19.2',
    date: '2026-11-08',
    title: T('Revisão dos ícones', 'Icon review', 'Revisión de íconos'),
    summary: T(
      'Medimos as pontas de traço de todos os ícones e olhamos cada um ampliado. Quatro precisavam de ajuste.',
      'We measured the stroke ends of every icon and looked at each one enlarged. Four needed adjusting.',
      'Medimos las puntas de trazo de todos los íconos y miramos cada uno ampliado. Cuatro necesitaban ajuste.',
    ),
    groups: [
      {
        name: T('Ícones', 'Icons', 'Íconos'),
        items: [
          ['correcao', T('Wifi desligado: os arcos ficam à mesma distância dos dois lados da barra', 'Wifi off: the arcs sit at the same distance on both sides of the bar', 'Wifi apagado: los arcos quedan a la misma distancia a ambos lados de la barra'), '/fundamentos/icones'],
          ['correcao', T('Olho riscado: a borda do olho termina na barra, sem passar dela', 'Eye off: the edge of the eye ends at the bar, without passing it', 'Ojo tachado: el borde del ojo termina en la barra, sin pasarla'), '/fundamentos/icones'],
          ['correcao', T('Bandeira: o mastro não passa mais do topo', 'Flag: the pole no longer sticks out at the top', 'Bandera: el mástil ya no sobresale arriba'), '/fundamentos/icones'],
          ['correcao', T('Imagem: a linha da montanha termina na borda, sem engrossar o canto', 'Image: the mountain line ends at the edge, without thickening the corner', 'Imagen: la línea de la montaña termina en el borde, sin engrosar la esquina'), '/fundamentos/icones'],
        ],
      },
    ],
  },
  {
    version: '0.19.1',
    date: '2026-11-08',
    title: T('Ícone de megafone', 'Megaphone icon', 'Ícono de megáfono'),
    summary: T(
      'O traço do pegador não atravessa mais o corpo do megafone.',
      'The handle stroke no longer cuts through the body of the megaphone.',
      'El trazo del mango ya no atraviesa el cuerpo del megáfono.',
    ),
    groups: [
      {
        name: T('Ícones', 'Icons', 'Íconos'),
        items: [
          ['correcao', T('Megafone: o pegador agora termina na borda do corpo', 'Megaphone: the handle now ends at the edge of the body', 'Megáfono: el mango ahora termina en el borde del cuerpo'), '/fundamentos/icones'],
        ],
      },
    ],
  },
  {
    version: '0.19.0',
    date: '2026-11-08',
    title: T('Refino', 'Refinement', 'Refinamiento'),
    summary: T(
      'Uma revisão do que já existe: os controles passam a seguir uma escala única de alturas, e os estados podem ser forçados em todos eles.',
      'A review of what already exists: controls now follow a single height scale, and states can be forced on all of them.',
      'Una revisión de lo que ya existe: los controles siguen ahora una escala única de alturas, y los estados se pueden forzar en todos.',
    ),
    groups: [
      {
        name: T('Tokens', 'Tokens', 'Tokens'),
        items: [
          ['novo', T('size.control.compact, de 36 px: a escala agora é 28, 32, 36, 40 e 48', 'size.control.compact, 36 px: the scale is now 28, 32, 36, 40, and 48', 'size.control.compact, de 36 px: la escala ahora es 28, 32, 36, 40 y 48'), '/recursos/tokens'],
        ],
      },
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['melhoria', T('Chip pequeno e aba pequena passam de 30 para 32 px', 'Small chip and small tab go from 30 to 32 px', 'Chip pequeño y pestaña pequeña pasan de 30 a 32 px'), '/componentes/chip'],
          ['melhoria', T('Campo de texto fora de um formulário passa de 44 para 40 px, a altura do botão e da seleção', 'Text field outside a form goes from 44 to 40 px, the height of the button and the select', 'Campo de texto fuera de un formulario pasa de 44 a 40 px, la altura del botón y de la selección'), '/componentes/campo-de-texto'],
          ['melhoria', T('Botão de ícone grande passa de 44 para 40 px; Código de verificação, de 52 para 48 px', 'Large icon button goes from 44 to 40 px; Verification code, from 52 to 48 px', 'Botón de ícono grande pasa de 44 a 40 px; Código de verificación, de 52 a 48 px'), '/componentes/botao'],
          ['melhoria', T('Estados com data-state em todos os componentes interativos', 'States with data-state on every interactive component', 'Estados con data-state en todos los componentes interactivos'), '/novidades'],
          ['melhoria', T('Seção de estados em Abas, Menu, Paginação, Acordeão, Árvore e Card', 'States section in Tabs, Menu, Pagination, Accordion, Tree, and Card', 'Sección de estados en Pestañas, Menú, Paginación, Acordeón, Árbol y Tarjeta'), '/componentes/abas'],
          ['correcao', T('O anel de foco do Acordeão não encosta mais no texto', 'The Accordion focus ring no longer touches the text', 'El anillo de foco del Acordeón ya no toca el texto'), '/componentes/acordeao'],
        ],
      },
      {
        name: T('Site', 'Site', 'Sitio'),
        items: [
          ['melhoria', T('Nos exemplos, as legendas da mesma linha ficam alinhadas', 'In examples, captions on the same row now line up', 'En los ejemplos, las leyendas de la misma fila quedan alineadas'), '/componentes/lista-de-definicoes'],
        ],
      },
    ],
  },
  {
    version: '0.18.0',
    date: '2026-11-08',
    title: T('Conteúdo', 'Content', 'Contenido'),
    summary: T(
      'Peças para apresentar informação: dois componentes novos e três que ganharam página. Com eles, os componentes planejados estão completos.',
      'Pieces for presenting information: two new components and three that got a page. With them, the planned components are complete.',
      'Piezas para presentar información: dos componentes nuevos y tres que tienen ahora página. Con ellos, los componentes planificados están completos.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T('Linha do tempo: eventos em ordem, com ícones ou pontos', 'Timeline: events in order, with icons or dots', 'Línea de tiempo: eventos en orden, con íconos o puntos'), '/componentes/linha-do-tempo'],
          ['novo', T('Lista de definições: pares de rótulo e valor, em três disposições', 'Description list: label and value pairs, in three layouts', 'Lista de definiciones: pares de etiqueta y valor, en tres disposiciones'), '/componentes/lista-de-definicoes'],
          ['melhoria', T('Card com página própria e versão clicável', 'Card with its own page and a clickable version', 'Tarjeta con página propia y versión clicable'), '/componentes/card'],
          ['melhoria', T('Bloco de código com página própria e botão de copiar no DS', 'Code block with its own page and a copy button in the DS', 'Bloque de código con página propia y botón de copiar en el DS'), '/componentes/bloco-de-codigo'],
          ['melhoria', T('Tecla com página própria', 'Keyboard key with its own page', 'Tecla con página propia'), '/componentes/tecla'],
        ],
      },
      {
        name: T('Site', 'Site', 'Sitio'),
        items: [
          ['correcao', T('Copiar um bloco de código não repete mais o código inteiro no aviso', 'Copying a code block no longer repeats all the code in the notice', 'Copiar un bloque de código ya no repite todo el código en el aviso'), '/componentes/bloco-de-codigo'],
        ],
      },
    ],
  },
  {
    version: '0.17.0',
    date: '2026-11-08',
    title: T('Feedback e carregamento', 'Feedback and loading', 'Feedback y carga'),
    summary: T(
      'Três componentes novos para as esperas, só com CSS, e o Alerta com página própria.',
      'Three new components for waiting, CSS only, and the Alert with its own page.',
      'Tres componentes nuevos para las esperas, solo con CSS, y la Alerta con página propia.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T('Barra de progresso: determinada ou indeterminada, sobre o elemento nativo', 'Progress bar: determinate or indeterminate, on the native element', 'Barra de progreso: determinada o indeterminada, sobre el elemento nativo'), '/componentes/barra-de-progresso'],
          ['novo', T('Spinner: três tamanhos, com a cor do texto, também dentro de botões', 'Spinner: three sizes, in the text color, inside buttons too', 'Spinner: tres tamaños, con el color del texto, también dentro de botones'), '/componentes/spinner'],
          ['novo', T('Skeleton: a forma do conteúdo antes de ele chegar, sem brilho', 'Skeleton: the shape of the content before it arrives, with no shine', 'Skeleton: la forma del contenido antes de que llegue, sin brillo'), '/componentes/skeleton'],
          ['melhoria', T('Alerta com página própria', 'Alert with its own page', 'Alerta con página propia'), '/componentes/alerta'],
        ],
      },
    ],
  },
  {
    version: '0.16.0',
    date: '2026-11-08',
    title: T('Camadas', 'Overlays', 'Capas'),
    summary: T(
      'Três componentes novos para mostrar conteúdo por cima da tela: popover, gaveta lateral e menu de contexto.',
      'Three new components for showing content above the screen: popover, drawer, and context menu.',
      'Tres componentes nuevos para mostrar contenido sobre la pantalla: popover, panel lateral y menú contextual.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T('Popover: conteúdo livre preso ao gatilho, que troca de lado se não couber', 'Popover: free content attached to its trigger, switching sides if it doesn’t fit', 'Popover: contenido libre unido a su disparador, que cambia de lado si no cabe'), '/componentes/popover'],
          ['novo', T('Gaveta lateral: detalhes ou uma tarefa pela direita, esquerda ou embaixo', 'Drawer: details or a task from the right, left, or bottom', 'Panel lateral: detalles o una tarea por la derecha, izquierda o abajo'), '/componentes/gaveta-lateral'],
          ['novo', T('Menu de contexto: botão direito, teclado ou toque longo', 'Context menu: right-click, keyboard, or long press', 'Menú contextual: clic derecho, teclado o toque largo'), '/componentes/menu-de-contexto'],
        ],
      },
    ],
  },
  {
    version: '0.15.0',
    date: '2026-11-08',
    title: T('Navegação e estrutura', 'Navigation and structure', 'Navegación y estructura'),
    summary: T(
      'Quatro componentes novos para percorrer listas, etapas e hierarquias, e duas peças que ganharam página própria.',
      'Four new components for moving through lists, steps, and hierarchies, and two pieces that got their own page.',
      'Cuatro componentes nuevos para recorrer listas, etapas y jerarquías, y dos piezas que tienen ahora su propia página.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T('Paginação: total, itens por página e versão compacta no celular', 'Pagination: a total, items per page, and a compact version on phones', 'Paginación: total, elementos por página y versión compacta en el móvil'), '/componentes/paginacao'],
          ['novo', T('Stepper: etapas na horizontal ou na vertical, com volta às já feitas', 'Stepper: horizontal or vertical steps, with a way back to finished ones', 'Stepper: etapas en horizontal o vertical, con vuelta a las ya hechas'), '/componentes/stepper'],
          ['novo', T('Acordeão: seções que abrem no lugar, sem JavaScript', 'Accordion: sections that open in place, with no JavaScript', 'Acordeón: secciones que se abren en su lugar, sin JavaScript'), '/componentes/acordeao'],
          ['novo', T('Árvore: pastas e níveis aninhados, com teclado completo', 'Tree: folders and nested levels, with full keyboard support', 'Árbol: carpetas y niveles anidados, con teclado completo'), '/componentes/arvore'],
          ['melhoria', T('Controle segmentado com página própria e createSegmented', 'Segmented control with its own page and createSegmented', 'Control segmentado con página propia y createSegmented'), '/componentes/controle-segmentado'],
          ['melhoria', T('Breadcrumb com página própria', 'Breadcrumb with its own page', 'Breadcrumb con página propia'), '/componentes/breadcrumb'],
        ],
      },
    ],
  },
  {
    version: '0.14.6',
    date: '2026-11-08',
    title: T('Cartão com altura fixa', 'Fixed-height card', 'Tarjeta con altura fija'),
    summary: T(
      'O cartão da última versão no Início agora tem sempre o mesmo tamanho, e não muda a altura do topo da página.',
      'The latest version card on Home now always has the same size, and no longer changes the height of the top of the page.',
      'La tarjeta de la última versión en el Inicio ahora siempre tiene el mismo tamaño, y ya no cambia la altura de la parte superior de la página.',
    ),
    groups: [
      {
        name: T('Site', 'Site', 'Sitio'),
        items: [
          ['correcao', T('O cartão do Início mostra o título e um resumo em duas linhas, em altura fixa', 'The Home card shows the title and a two-line summary, at a fixed height', 'La tarjeta del Inicio muestra el título y un resumen en dos líneas, con altura fija'), '/'],
        ],
      },
    ],
  },
  {
    version: '0.14.5',
    date: '2026-11-08',
    title: T('Botão de tema', 'Theme button', 'Botón de tema'),
    summary: T(
      'A troca de tema virou um botão redondo só, e os controles da topbar agora têm a mesma altura.',
      'Switching themes is now a single round button, and the top bar controls now share the same height.',
      'El cambio de tema ahora es un solo botón redondo, y los controles de la barra superior ahora tienen la misma altura.',
    ),
    groups: [
      {
        name: T('Temas', 'Themes', 'Temas'),
        items: [
          ['melhoria', T('Botão redondo único no lugar dos dois lados, com sol ou lua conforme o tema', 'A single round button instead of two sides, with a sun or moon to match the theme', 'Un solo botón redondo en lugar de dos lados, con sol o luna según el tema'), '/padroes/app-shell'],
          ['melhoria', T('Idioma, layout e tema com 36 px na topbar; o controle segmentado passa de 38 para 36 px', 'Language, layout, and theme at 36 px in the top bar; the segmented control goes from 38 to 36 px', 'Idioma, diseño y tema con 36 px en la barra superior; el control segmentado pasa de 38 a 36 px'), '/padroes/app-shell'],
          ['melhoria', T('Os palcos de exemplo usam o mesmo botão de tema da topbar', 'Example stages use the same theme button as the top bar', 'Los escenarios de ejemplo usan el mismo botón de tema de la barra superior'), '/componentes/botao'],
        ],
      },
    ],
  },
  {
    version: '0.14.4',
    date: '2026-11-08',
    title: T('Claro e escuro', 'Light and dark', 'Claro y oscuro'),
    summary: T(
      'Um toggle só na topbar. O site começa como o seu sistema, e a escolha fica salva. O tema Laranja saiu.',
      'A single toggle in the top bar. The site starts like your system, and the choice is saved. The Orange theme is gone.',
      'Un solo toggle en la barra superior. El sitio empieza como tu sistema, y la elección queda guardada. El tema Naranja salió.',
    ),
    groups: [
      {
        name: T('Temas', 'Themes', 'Temas'),
        items: [
          ['melhoria', T('Toggle de claro e escuro no lugar do seletor de quatro opções', 'A light and dark toggle replaces the four-option selector', 'Un toggle de claro y oscuro en lugar del selector de cuatro opciones'), '/fundamentos/cores'],
          ['melhoria', T('O tema Laranja saiu dos tokens, do site e das comparações', 'The Orange theme is gone from the tokens, the site, and the comparisons', 'El tema Naranja salió de los tokens, del sitio y de las comparaciones'), '/fundamentos/cores'],
        ],
      },
    ],
  },
  {
    version: '0.14.3',
    date: '2026-11-08',
    title: T('Última versão no Início', 'Latest version on Home', 'Última versión en el Inicio'),
    summary: T(
      'A colagem do Início deu lugar a um cartão com a última versão e o que ela trouxe.',
      'The Home collage gave way to a card with the latest version and what it brought.',
      'El collage del Inicio dio lugar a una tarjeta con la última versión y lo que trajo.',
    ),
    groups: [
      {
        name: T('Site', 'Site', 'Sitio'),
        items: [
          ['melhoria', T(
            'Cartão da última versão no Início, atualizado sozinho a partir do changelog',
            'Latest version card on Home, updated on its own from the changelog',
            'Tarjeta de la última versión en el Inicio, actualizada sola desde el changelog',
          ), '/'],
        ],
      },
    ],
  },
  {
    version: '0.14.2',
    date: '2026-11-08',
    title: T('Novidades só para quem volta', 'News only for returning visitors', 'Novedades solo para quien vuelve'),
    summary: T(
      'Na primeira visita, a sidebar não destaca a última versão, porque tudo é novidade. O aviso aparece quando a pessoa volta e há algo novo.',
      'On a first visit, the sidebar doesn’t highlight the latest version, since everything is new. The notice shows up when the person returns and there’s something new.',
      'En la primera visita, la sidebar no destaca la última versión, porque todo es novedad. El aviso aparece cuando la persona vuelve y hay algo nuevo.',
    ),
    groups: [
      {
        name: T('Site', 'Site', 'Sitio'),
        items: [
          ['correcao', T(
            'A bolinha e o cartão de Novidades não aparecem mais na primeira visita',
            'The What’s new dot and card no longer show on a first visit',
            'El puntito y la tarjeta de Novedades ya no aparecen en la primera visita',
          ), '/novidades'],
        ],
      },
    ],
  },
  {
    version: '0.14.1',
    date: '2026-11-08',
    title: T('Topbar no celular', 'Top bar on phones', 'Barra superior en el móvil'),
    summary: T(
      'Os controles da topbar agora cabem em telas estreitas, sem cortar o seletor de tema nem rolar a página para o lado.',
      'The top bar controls now fit on narrow screens, without cutting off the theme switcher or scrolling the page sideways.',
      'Los controles de la barra superior ahora caben en pantallas estrechas, sin cortar el selector de tema ni desplazar la página hacia el lado.',
    ),
    groups: [
      {
        name: T('Site', 'Site', 'Sitio'),
        items: [
          ['correcao', T(
            'Topbar sem transbordar em telas de até 320 px; abaixo de 480 px, o breadcrumb sai',
            'Top bar no longer overflows on screens down to 320 px; below 480 px, the breadcrumb is hidden',
            'La barra superior ya no se desborda en pantallas de hasta 320 px; por debajo de 480 px, el breadcrumb se oculta',
          ), '/padroes/app-shell'],
        ],
      },
    ],
  },
  {
    version: '0.14.0',
    date: '2026-11-08',
    title: T('Formulários completos', 'Complete forms', 'Formularios completos'),
    summary: T(
      'Sete componentes novos para o que um formulário costuma pedir além de texto e seleção, e o menu de Componentes dividido por assunto.',
      'Seven new components for what forms usually need beyond text and select, and the Components menu divided by subject.',
      'Siete componentes nuevos para lo que un formulario suele pedir además de texto y selector, y el menú de Componentes dividido por tema.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T('Seletor de data: um dia ou um período, digitando ou no calendário', 'Date picker: a day or a range, typed or on the calendar', 'Selector de fecha: un día o un período, escribiendo o en el calendario'), '/componentes/seletor-de-data'],
          ['novo', T('Seletor de horário: horas e minutos no formato do idioma', 'Time picker: hours and minutes in the language’s format', 'Selector de hora: horas y minutos en el formato del idioma'), '/componentes/seletor-de-horario'],
          ['novo', T('Campo numérico: − e +, limites, passo, moeda, porcentagem e unidade', 'Number field: − and +, limits, a step, currency, percent, and unit', 'Campo numérico: − y +, límites, paso, moneda, porcentaje y unidad'), '/componentes/campo-numerico'],
          ['novo', T('Slider: um valor ou uma faixa, sobre o controle nativo', 'Slider: a value or a range, on top of the native control', 'Slider: un valor o un rango, sobre el control nativo'), '/componentes/slider'],
          ['novo', T('Campo de tags: vários valores livres em um campo só', 'Tag field: several free values in one field', 'Campo de etiquetas: varios valores libres en un solo campo'), '/componentes/campo-de-tags'],
          ['novo', T('Upload de arquivo: arrastar ou escolher, com progresso e erro por arquivo', 'File upload: drag or browse, with progress and errors per file', 'Carga de archivos: arrastrar o elegir, con progreso y error por archivo'), '/componentes/upload'],
          ['novo', T('Código de verificação: um dígito por casa, com preenchimento automático', 'Verification code: one digit per box, with autofill', 'Código de verificación: un dígito por casilla, con autocompletado'), '/componentes/codigo-de-verificacao'],
        ],
      },
      {
        name: T('Site', 'Site', 'Sitio'),
        items: [
          ['melhoria', T(
            'Componentes dividido em Ações, Formulários, Navegação, Camadas, Feedback e Conteúdo, na sidebar e na navbar',
            'Components divided into Actions, Forms, Navigation, Overlays, Feedback, and Content, in the sidebar and the navbar',
            'Componentes dividido en Acciones, Formularios, Navegación, Capas, Feedback y Contenido, en la sidebar y la navbar',
          ), '/componentes/botao'],
        ],
      },
    ],
  },
  {
    version: '0.13.1',
    date: '2026-11-08',
    title: T('Fontes atualizadas', 'Updated fonts', 'Fuentes actualizadas'),
    summary: T(
      'Correções pequenas: as últimas menções à Inter saíram, e os gráficos medem os textos na fonte certa.',
      'Small fixes: the last mentions of Inter are gone, and charts measure text in the right font.',
      'Correcciones pequeñas: salieron las últimas menciones a Inter, y los gráficos miden los textos en la fuente correcta.',
    ),
    groups: [
      {
        name: T('Gráficos', 'Charts', 'Gráficos'),
        items: [
          ['correcao', T(
            'Os gráficos medem os rótulos na Geist, a fonte em que eles aparecem',
            'Charts measure labels in Geist, the font they’re displayed in',
            'Los gráficos miden las etiquetas en Geist, la fuente en la que aparecen',
          ), '/graficos/visao-geral'],
        ],
      },
      {
        name: T('Site', 'Site', 'Sitio'),
        items: [
          ['correcao', T(
            'A descrição de Tipografia cita Geist Serif e Geist Sans',
            'The Typography description mentions Geist Serif and Geist Sans',
            'La descripción de Tipografía menciona Geist Serif y Geist Sans',
          ), '/fundamentos/tipografia'],
          ['correcao', T(
            'A página do Plugin do Figma pede as fontes atuais',
            'The Figma plugin page asks for the current fonts',
            'La página del Plugin de Figma pide las fuentes actuales',
          ), '/recursos/figma'],
          ['correcao', T(
            'O exemplo de estilo de texto em Tokens para Figma usa a Geist',
            'The text style example in Tokens for Figma uses Geist',
            'El ejemplo de estilo de texto en Tokens para Figma usa Geist',
          ), '/recursos/tokens'],
        ],
      },
    ],
  },
  {
    version: '0.13.0',
    date: '2026-11-08',
    title: T('Roadmap', 'Roadmap', 'Roadmap'),
    summary: T(
      'Uma página nova com os próximos passos: os componentes que faltam e o caminho até a 1.0.',
      'A new page with what’s next: the components still missing and the road to 1.0.',
      'Una página nueva con los próximos pasos: los componentes que faltan y el camino a la 1.0.',
    ),
    groups: [
      {
        name: T('Site', 'Site', 'Sitio'),
        items: [
          ['novo', T(
            'Página Roadmap, logo abaixo de Novidades, com os componentes planejados por assunto',
            'Roadmap page, right below What’s new, with the planned components by subject',
            'Página Roadmap, justo debajo de Novedades, con los componentes planificados por tema',
          ), '/roadmap'],
          ['melhoria', T(
            'O card de roadmap do Início mostra as duas próximas etapas e leva à página nova',
            'The Home roadmap card shows the next two stages and links to the new page',
            'La tarjeta de roadmap del Inicio muestra las dos próximas etapas y lleva a la página nueva',
          ), '/'],
          ['melhoria', T(
            'O “Experimente ao vivo” saiu do Início: a topbar já troca o tema',
            '“Try it live” is gone from Home: the top bar already switches the theme',
            '“Pruébalo en vivo” salió del Inicio: la barra superior ya cambia el tema',
          ), '/'],
        ],
      },
    ],
  },
  {
    version: '0.12.0',
    date: '2026-11-04',
    title: T('Calendário', 'Calendar', 'Calendario'),
    summary: T(
      'Um componente novo: o calendário, com visões de mês, semana e dia, eventos e teclado.',
      'A new component: the calendar, with month, week, and day views, events, and keyboard support.',
      'Un componente nuevo: el calendario, con vistas de mes, semana y día, eventos y teclado.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T(
            'Calendário (createCalendar): mês, semana e dia, com “Hoje”, ‹ › e o seletor de visão',
            'Calendar (createCalendar): month, week, and day, with “Today”, ‹ ›, and the view switch',
            'Calendario (createCalendar): mes, semana y día, con “Hoy”, ‹ › y el selector de vista',
          ), '/componentes/calendario'],
          ['novo', T(
            'Eventos com horário, de dia todo e sobrepostos, em seis tons; linha de agora na grade de horas',
            'Timed, all-day, and overlapping events in six tones; a now line in the time grid',
            'Eventos con horario, de todo el día y superpuestos, en seis tonos; línea de ahora en la cuadrícula de horas',
          ), '/componentes/calendario'],
          ['novo', T(
            'Datas, nomes e o primeiro dia da semana no idioma atual; o mês é uma grade navegável pelo teclado',
            'Dates, names, and the first day of the week in the current locale; the month is a keyboard-navigable grid',
            'Fechas, nombres y el primer día de la semana en el idioma actual; el mes es una cuadrícula navegable con el teclado',
          ), '/componentes/calendario'],
        ],
      },
    ],
  },
  {
    version: '0.11.1',
    date: '2026-11-04',
    title: T('Aviso de versão nova', 'New version notice', 'Aviso de versión nueva'),
    summary: T(
      'Quando sai uma versão nova com o site aberto, um cartão na sidebar avisa — e um clique atualiza a página.',
      'When a new version ships while the site is open, a card in the sidebar lets you know — and one click reloads the page.',
      'Cuando sale una versión nueva con el sitio abierto, una tarjeta en la sidebar avisa — y un clic recarga la página.',
    ),
    groups: [
      {
        name: T('Site', 'Site', 'Sitio'),
        items: [
          ['novo', T(
            'Cartão “Nova versão disponível” acima do de novidades; clicar recarrega. Com a navbar ou no celular, o aviso vem num toast com “Atualizar”',
            '“New version available” card above the what’s-new one; clicking reloads. With the navbar or on phones, the notice comes as a toast with “Reload”',
            'Tarjeta “Nueva versión disponible” sobre la de novedades; al hacer clic recarga. Con la navbar o en el móvil, el aviso llega en un toast con “Recargar”',
          ), '/'],
          ['novo', T(
            'O build publica version.json com a impressão digital do deploy; a aba confere a cada 5 minutos e quando você volta para ela',
            'The build publishes version.json with the deploy’s fingerprint; the tab checks every 5 minutes and when you come back to it',
            'El build publica version.json con la huella del deploy; la pestaña verifica cada 5 minutos y cuando vuelves a ella',
          ), '/novidades'],
        ],
      },
    ],
  },
  {
    version: '0.11.0',
    date: '2026-11-04',
    title: T('Login e cadastro', 'Sign-in and sign-up', 'Inicio de sesión y registro'),
    summary: T(
      'Um padrão novo para as telas de acesso: entrar, criar conta e recuperar a senha, com exemplo ao vivo.',
      'A new pattern for access screens: sign in, create an account, and reset the password, with a live example.',
      'Un patrón nuevo para las pantallas de acceso: entrar, crear cuenta y recuperar la contraseña, con ejemplo en vivo.',
    ),
    groups: [
      {
        name: T('Padrões', 'Patterns', 'Patrones'),
        items: [
          ['novo', T(
            'Login e cadastro: as três telas ligadas, com mostrar senha, requisitos que marcam enquanto você digita e erro que não entrega quem tem conta',
            'Sign-in and sign-up: the three connected screens, with show password, requirements that check off as you type, and errors that don’t reveal who has an account',
            'Inicio de sesión y registro: las tres pantallas conectadas, con mostrar contraseña, requisitos que se marcan mientras escribes y errores que no revelan quién tiene cuenta',
          ), '/padroes/login'],
          ['novo', T(
            'Regras, mensagens (evite → prefira), acessibilidade com a WCAG 3.3.8 e o código do login',
            'Rules, messages (avoid → prefer), accessibility with WCAG 3.3.8, and the sign-in code',
            'Reglas, mensajes (evita → prefiere), accesibilidad con la WCAG 3.3.8 y el código del inicio de sesión',
          ), '/padroes/login'],
        ],
      },
    ],
  },
  {
    version: '0.10.0',
    date: '2026-11-03',
    title: T('Tema Lume', 'Lume theme', 'Tema Lume'),
    summary: T(
      'O Refúgio virou o tema do Lume, em claro e escuro, e por padrão o site segue o sistema. O antigo Claro, o pêssego, ficou como tema Laranja.',
      'Refúgio became the Lume theme, in light and dark, and by default the site follows the system. The old Light, the peach, stays as the Orange theme.',
      'Refúgio se volvió el tema de Lume, en claro y oscuro, y por defecto el sitio sigue al sistema. El antiguo Claro, el melocotón, quedó como tema Naranja.',
    ),
    groups: [
      {
        name: T('Temas', 'Themes', 'Temas'),
        items: [
          ['novo', T(
            'Lume escuro: o Escuro de antes, quase preto e quente, com a ardósia do Lume como acento no lugar do pêssego — botão primário, links, foco e seleção — e terracota no indicador',
            'Lume dark: the previous Dark, near-black and warm, with Lume’s slate as the accent instead of the peach — primary button, links, focus, and selection — and terracotta on the indicator',
            'Lume oscuro: el Oscuro de antes, casi negro y cálido, con la pizarra de Lume como acento en lugar del melocotón — botón primario, enlaces, foco y selección — y terracota en el indicador',
          ), '/fundamentos/cores'],
          ['melhoria', T(
            'Sistema é o padrão: Lume claro ou Lume escuro, conforme o aparelho. O seletor da topbar fica Sistema · Lume claro · Lume escuro · Laranja',
            'System is the default: Lume light or Lume dark, depending on the device. The topbar switcher is System · Lume light · Lume dark · Orange',
            'Sistema es lo predeterminado: Lume claro o Lume oscuro, según el dispositivo. El selector de la topbar queda Sistema · Lume claro · Lume oscuro · Naranja',
          ), '/fundamentos/cores'],
          ['melhoria', T(
            'O antigo Claro vira Laranja (data-theme="orange"); o Refúgio vira light e o Escuro, dark. Quem já tinha escolhido um tema continua nele',
            'The old Light becomes Orange (data-theme="orange"); Refúgio becomes light and Dark, dark. Anyone who had picked a theme keeps it',
            'El antiguo Claro pasa a Naranja (data-theme="orange"); Refúgio pasa a light y Oscuro, dark. Quien ya había elegido un tema sigue en él',
          ), '/primeiros-passos'],
        ],
      },
    ],
  },
  {
    version: '0.9.0',
    date: '2026-11-03',
    title: T('Refúgio', 'Refúgio', 'Refúgio'),
    summary: T(
      'Um terceiro tema, o Refúgio: as cores do tema de mesmo nome do app Lume — claro, de ardósia fria e terracota —, ao lado do Escuro e do Claro.',
      'A third theme, Refúgio: the colors of the Lume app’s theme of the same name — light, cool slate and terracotta — next to Dark and Light.',
      'Un tercer tema, Refúgio: los colores del tema del mismo nombre de la app Lume — claro, de pizarra fría y terracota —, junto al Oscuro y el Claro.',
    ),
    groups: [
      {
        name: T('Temas', 'Themes', 'Temas'),
        items: [
          ['novo', T(
            'Tema Refúgio no seletor da topbar, na busca e no “Experimente ao vivo”: fundos e textos em ardósia, botão primário ardósia e terracota no indicador',
            'Refúgio theme in the topbar switcher, in search, and in “Try it live”: slate backgrounds and text, a slate primary button, and terracotta on the indicator',
            'Tema Refúgio en el selector de la topbar, en la búsqueda y en “Pruébalo en vivo”: fondos y textos en pizarra, botón primario pizarra y terracota en el indicador',
          ), '/fundamentos/cores'],
          ['novo', T(
            'Paletas Refúgio · Ardósia fria e Terracota, geradas em OKLCH a partir das cores do app Lume',
            'Refúgio · Cool slate and Terracotta palettes, generated in OKLCH from the Lume app’s colors',
            'Paletas Refúgio · Pizarra fría y Terracota, generadas en OKLCH a partir de los colores de la app Lume',
          ), '/fundamentos/cores'],
          ['melhoria', T(
            'O contraste é medido nos três temas: 105 combinações, todas aprovadas. A página Cores ganhou a coluna Refúgio',
            'Contrast is measured in all three themes: 105 pairs, all passing. The Colors page gained a Refúgio column',
            'El contraste se mide en los tres temas: 105 combinaciones, todas aprobadas. La página Colores ganó la columna Refúgio',
          ), '/fundamentos/cores'],
          ['novo', T(
            'No Refúgio, a sidebar é escura, em ardósia, como a barra do app Lume',
            'In Refúgio, the sidebar is dark slate, like the Lume app’s bar',
            'En Refúgio, la sidebar es oscura, en pizarra, como la barra de la app Lume',
          ), '/padroes/app-shell'],
          ['melhoria', T(
            'Os palcos dos playgrounds também mostram o Refúgio',
            'Playground stages also show Refúgio',
            'Los escenarios de los playgrounds también muestran Refúgio',
          ), '/componentes/botao'],
          ['melhoria', T(
            'O Refúgio aparece em toda página que compara temas — Elevação, Cores, Gráficos, Heatmap, Acessibilidade, Estados vazios, App shell — e na coluna das tabelas “Tokens usados”. Dois temas lado a lado; o terceiro na linha de baixo, na mesma largura',
            'Refúgio shows up on every page that compares themes — Elevation, Colors, Charts, Heatmap, Accessibility, Empty states, App shell — and as a column in the “Tokens used” tables. Two themes side by side; the third on the row below, at the same width',
            'Refúgio aparece en toda página que compara temas — Elevación, Colores, Gráficos, Heatmap, Accesibilidad, Estados vacíos, App shell — y como columna en las tablas “Tokens usados”. Dos temas lado a lado; el tercero en la fila de abajo, con el mismo ancho',
          ), '/fundamentos/elevacao'],
          ['melhoria', T(
            'Cards e áreas de exemplo bem separados no Refúgio: fundo da página no tom do Lume, área rebaixada e moldura mais escuras e contornos mais firmes',
            'Cards and example areas clearly separated in Refúgio: the page background in Lume’s tone, darker sunken areas and frame, and firmer outlines',
            'Tarjetas y áreas de ejemplo bien separadas en Refúgio: el fondo de la página en el tono de Lume, áreas hundidas y marco más oscuros y contornos más firmes',
          ), '/graficos/visao-geral'],
          ['novo', T(
            'Ícones cabin (o do Refúgio) e mountain, desenhados do zero',
            'Cabin (Refúgio’s) and mountain icons, drawn from scratch',
            'Íconos cabin (el de Refúgio) y mountain, dibujados desde cero',
          ), '/fundamentos/icones'],
        ],
      },
      {
        name: T('Tipografia', 'Typography', 'Tipografía'),
        items: [
          ['novo', T(
            'Geist Serif nos títulos e Geist Sans no texto, no lugar de Inter Tight e Inter. A serifa só tem o peso Regular, então os títulos ficaram em peso normal',
            'Geist Serif for headings and Geist Sans for text, replacing Inter Tight and Inter. The serif only comes in Regular, so headings are now normal weight',
            'Geist Serif en los títulos y Geist Sans en el texto, en lugar de Inter Tight e Inter. La serifa solo tiene el peso Regular, así que los títulos quedaron en peso normal',
          ), '/fundamentos/tipografia'],
        ],
      },
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['melhoria', T(
            'Campo, seleção e chip que abre menu com o fundo do menu que abrem (bg.field): o select e a lista aberta conversam — no Refúgio, os dois brancos. Contorno fino e placeholder mais forte',
            'Field, select, and menu chip with the background of the menu they open (bg.field): the select and its open list match — in Refúgio, both white. Thin outline and a stronger placeholder',
            'Campo, selector y chip que abre menú con el fondo del menú que abren (bg.field): el selector y la lista abierta combinan — en Refúgio, ambos blancos. Contorno fino y placeholder más fuerte',
          ), '/componentes/selecao'],
          ['melhoria', T(
            'Controle segmentado (tema, layout) com mais contraste: trilho rebaixado com contorno fino e o item escolhido elevado, no fundo dos campos',
            'Segmented control (theme, layout) with more contrast: a sunken track with a thin outline and the chosen item raised, on the field background',
            'Control segmentado (tema, diseño) con más contraste: riel hundido con contorno fino y el elemento elegido elevado, con el fondo de los campos',
          ), '/padroes/app-shell'],
          ['correcao', T(
            'Listas e links estilizados por classe não perdem mais o padding nem a cor para o reset (que passou a ter peso zero)',
            'Class-styled lists and links no longer lose their padding or color to the reset (now zero-specificity)',
            'Las listas y enlaces con estilo por clase ya no pierden el padding ni el color por el reset (ahora con peso cero)',
          ), '/componentes/selecao'],
        ],
      },
      {
        name: T('App shell', 'App shell', 'App shell'),
        items: [
          ['novo', T(
            'Menu em colunas (maxRows): lista longa vira grade, com no máximo 5 itens por coluna e as colunas equilibradas. A navbar usa nos grupos — Componentes abre em 4 × 4, sem rolagem',
            'Menu in columns (maxRows): a long list becomes a grid, at most 5 items per column, with balanced columns. The navbar uses it for its groups — Components opens as 4 × 4, no scrolling',
            'Menú en columnas (maxRows): una lista larga se vuelve una cuadrícula, con como máximo 5 elementos por columna y columnas equilibradas. La navbar lo usa en sus grupos — Componentes abre en 4 × 4, sin desplazamiento',
          ), '/componentes/menu'],
          ['novo', T(
            'O nome Lume no logotipo passou a ser escrito em Geist Serif, a fonte dos títulos',
            'The Lume name in the logo is now set in Geist Serif, the heading font',
            'El nombre Lume del logotipo pasó a escribirse en Geist Serif, la fuente de los títulos',
          ), '/'],
          ['novo', T(
            'Navbar como alternativa à sidebar: o mesmo painel flutuante no topo, com um menu por grupo. Escolha Sidebar ou Navbar na topbar ou na busca ⌘K; a escolha fica salva. No celular, as duas viram a gaveta',
            'Navbar as an alternative to the sidebar: the same floating panel at the top, with one menu per group. Pick Sidebar or Navbar in the topbar or in ⌘K search; the choice is saved. On phones, both become the drawer',
            'Navbar como alternativa a la sidebar: el mismo panel flotante arriba, con un menú por grupo. Elige Sidebar o Navbar en la topbar o en la búsqueda ⌘K; la elección queda guardada. En el móvil, las dos se vuelven el cajón',
          ), '/padroes/app-shell'],
          ['novo', T('Ícone panel-top', 'panel-top icon', 'Ícono panel-top'), '/fundamentos/icones'],
          ['melhoria', T(
            'Sidebar recolhida: a chama do Lume fica no topo, maior, e vira o botão de expandir ao receber o mouse ou o foco',
            'Collapsed sidebar: the Lume flame stays at the top, larger, and becomes the expand button on hover or focus',
            'Sidebar contraída: la llama de Lume queda arriba, más grande, y se vuelve el botón de expandir con el puntero o el foco',
          ), '/padroes/app-shell'],
          ['melhoria', T(
            'O botão de recolher virou uma aba na borda da sidebar, na altura da marca, que aparece com o mouse ou o foco',
            'The collapse button became a tab on the sidebar’s edge, level with the brand, shown on hover or focus',
            'El botón de contraer pasó a ser una pestaña en el borde de la sidebar, a la altura de la marca, que aparece con el puntero o el foco',
          ), '/padroes/app-shell'],
          ['melhoria', T(
            'Painéis mais firmes: sidebar e painel principal com raio de 20 px (era 28) e 10 px de espaço entre eles e nas bordas (era 12)',
            'Firmer panels: sidebar and main panel with a 20 px radius (was 28) and 10 px of space between them and at the edges (was 12)',
            'Paneles más firmes: sidebar y panel principal con radio de 20 px (era 28) y 10 px de espacio entre ellos y en los bordes (era 12)',
          ), '/padroes/app-shell'],
          ['melhoria', T(
            'A chama fica na coluna dos ícones e o nome alinha com os rótulos do menu',
            'The flame sits in the icon column and the name lines up with the menu labels',
            'La llama queda en la columna de los íconos y el nombre se alinea con las etiquetas del menú',
          ), '/padroes/app-shell'],
        ],
      },
      {
        name: T('Início', 'Home', 'Inicio'),
        items: [
          ['melhoria', T(
            'O roadmap mostra as versões recentes que cabem ao lado dos padrões, e os dois cards terminam alinhados',
            'The roadmap shows the recent versions that fit next to the patterns, and both cards end aligned',
            'El roadmap muestra las versiones recientes que caben junto a los patrones, y las dos tarjetas terminan alineadas',
          ), '/'],
        ],
      },
    ],
  },
  {
    version: '0.8.0',
    date: '2026-11-03',
    title: T('Lume', 'Lume', 'Lume'),
    summary: T(
      'O Órbita agora é Lume, o design system do app Lume. Mudam o nome, o ícone e o que falava de órbita; o visual continua o mesmo.',
      'Órbita is now Lume, the design system of the Lume app. The name, the icon, and anything that talked about orbits change; the look stays the same.',
      'Órbita ahora es Lume, el design system de la app Lume. Cambian el nombre, el ícono y lo que hablaba de órbitas; el aspecto sigue igual.',
    ),
    groups: [
      {
        name: T('Lume', 'Lume', 'Lume'),
        items: [
          ['novo', T(
            'Nome novo em todo lugar: site, componentes, tokens exportados e plugin do Figma',
            'The new name everywhere: site, components, exported tokens, and the Figma plugin',
            'El nombre nuevo en todas partes: sitio, componentes, tokens exportados y plugin de Figma',
          ), '/'],
          ['novo', T(
            'A chama do Lume, nas cores do tema Refúgio, ao lado do nome na sidebar e na aba do navegador',
            'The Lume flame, in the Refúgio theme colors, next to the name in the sidebar and in the browser tab',
            'La llama de Lume, con los colores del tema Refúgio, junto al nombre en la sidebar y en la pestaña del navegador',
          ), '/padroes/app-shell'],
          ['melhoria', T(
            'O que falava de órbita agora fala de luz: a página que não existe “ficou no escuro”',
            'What talked about orbits now talks about light: a missing page is “lost in the dark”',
            'Lo que hablaba de órbitas ahora habla de luz: la página que no existe “se quedó a oscuras”',
          ), '/'],
        ],
      },
      {
        name: T('Figma', 'Figma', 'Figma'),
        items: [
          ['melhoria', T(
            'O plugin agora é “Lume para Figma”. Rodar de novo num arquivo gerado pelo Órbita renomeia páginas, capas e blocos no lugar, sem duplicar',
            'The plugin is now “Lume para Figma”. Running it again on a file generated by Órbita renames pages, covers, and blocks in place, without duplicating',
            'El plugin ahora es “Lume para Figma”. Ejecutarlo de nuevo en un archivo generado por Órbita renombra páginas, portadas y bloques en su lugar, sin duplicar',
          ), '/recursos/figma'],
        ],
      },
    ],
  },
  {
    version: '0.7.0',
    date: '2026-11-01',
    title: T('Idiomas', 'Languages', 'Idiomas'),
    summary: T(
      'O Lume passou a falar português, inglês e espanhol: o site inteiro, os textos dos componentes e o plugin do Figma. O idioma segue o do sistema, troca na topbar e fica salvo.',
      'Lume now speaks Portuguese, English, and Spanish: the whole site, the component text, and the Figma plugin. The language follows the system, switches from the topbar, and is remembered.',
      'Lume ahora habla portugués, inglés y español: todo el sitio, los textos de los componentes y el plugin de Figma. El idioma sigue al del sistema, se cambia en la topbar y queda guardado.',
    ),
    groups: [
      {
        name: T('Idiomas', 'Languages', 'Idiomas'),
        items: [
          ['novo', T(
            'Seletor de idioma na topbar, ao lado do tema: Sistema, Português, English e Español. Sem um dos três no sistema, o site abre em inglês',
            'Language switcher in the topbar, next to the theme: System, Português, English, and Español. If the system uses none of the three, the site opens in English',
            'Selector de idioma en la topbar, junto al tema: Sistema, Português, English y Español. Si el sistema no usa ninguno de los tres, el sitio abre en inglés',
          ), '/'],
          ['novo', T(
            'As 43 páginas nos três idiomas, com playgrounds, exemplos ao vivo, tabelas e comentários dos códigos',
            'All 43 pages in the three languages, including playgrounds, live examples, tables, and code comments',
            'Las 43 páginas en los tres idiomas, con playgrounds, ejemplos en vivo, tablas y comentarios del código',
          ), '/primeiros-passos'],
          ['novo', T(
            'Os textos dos componentes — formulário, seleção, toast, modal, busca, shell, composer, filtros e gráficos — também falam os três idiomas e acompanham a troca',
            'Component text — form, select, toast, modal, search, shell, composer, filters, and charts — also speaks the three languages and follows the switch',
            'Los textos de los componentes — formulario, selector, toast, modal, búsqueda, shell, composer, filtros y gráficos — también hablan los tres idiomas y siguen el cambio',
          ), '/padroes/formularios'],
          ['melhoria', T(
            'Números, datas e moeda no formato de cada idioma (4,5:1 · 4.5:1); meses e dias da semana dos gráficos vêm do próprio navegador',
            'Numbers, dates, and currency in each language’s format (4,5:1 · 4.5:1); chart months and weekdays come from the browser itself',
            'Números, fechas y moneda en el formato de cada idioma (4,5:1 · 4.5:1); los meses y días de la semana de los gráficos vienen del propio navegador',
          ), '/graficos/visao-geral'],
          ['melhoria', T(
            'Os gráficos descrevem os dados para leitor de tela em frases inteiras, no idioma atual',
            'Charts describe their data to screen readers in full sentences, in the current language',
            'Los gráficos describen los datos para lectores de pantalla con frases completas, en el idioma actual',
          ), '/graficos/visao-geral'],
          ['melhoria', T(
            'A busca de ícones acha o ícone pelas palavras de qualquer um dos três idiomas',
            'Icon search finds an icon by words in any of the three languages',
            'La búsqueda de íconos encuentra el ícono por palabras en cualquiera de los tres idiomas',
          ), '/fundamentos/icones'],
          ['melhoria', T(
            'Como contribuir mostra como escrever um texto novo nos três idiomas',
            'How to contribute shows how to write new text in the three languages',
            'Cómo contribuir muestra cómo escribir un texto nuevo en los tres idiomas',
          ), '/novidades'],
        ],
      },
      {
        name: T('Figma', 'Figma', 'Figma'),
        items: [
          ['novo', T(
            'Idioma na janela do plugin: páginas, coleções, modos, componentes, propriedades e textos saem em português, inglês ou espanhol',
            'Language in the plugin window: pages, collections, modes, components, properties, and text come out in Portuguese, English, or Spanish',
            'Idioma en la ventana del plugin: páginas, colecciones, modos, componentes, propiedades y textos salen en portugués, inglés o español',
          ), '/recursos/figma'],
          ['melhoria', T(
            'Rodar de novo em outro idioma renomeia tudo no lugar, sem duplicar: os ids e as instâncias continuam',
            'Running again in another language renames everything in place, without duplicating: ids and instances stay',
            'Ejecutarlo de nuevo en otro idioma renombra todo en el lugar, sin duplicar: los ids y las instancias se mantienen',
          ), '/recursos/figma'],
          ['melhoria', T(
            'O plugin de tokens acha as coleções em qualquer um dos três idiomas',
            'The tokens plugin finds the collections in any of the three languages',
            'El plugin de tokens encuentra las colecciones en cualquiera de los tres idiomas',
          ), '/recursos/tokens'],
          ['melhoria', T(
            'O teste do plugin roda o mesmo arquivo nos três idiomas e falha se algum texto ficar sem tradução',
            'The plugin test runs the same file in the three languages and fails if any text is left untranslated',
            'La prueba del plugin ejecuta el mismo archivo en los tres idiomas y falla si algún texto queda sin traducir',
          ), '/recursos/figma'],
        ],
      },
      {
        name: T('App shell', 'App shell', 'App shell'),
        items: [
          ['novo', T(
            'Barra de rolagem sobreposta em todo o app: sem trilho nem setas, aparece enquanto você rola, some logo depois e dá para arrastar',
            'Overlay scrollbar across the app: no track or arrows, it shows while you scroll, fades right after, and can be dragged',
            'Barra de desplazamiento superpuesta en toda la app: sin riel ni flechas, aparece mientras te desplazas, desaparece enseguida y se puede arrastrar',
          ), '/padroes/app-shell'],
          ['melhoria', T(
            'O cartão “Ver o que há de novo” no pé da sidebar só aparece enquanto há novidade para ver: abriu Novidades, ele sai',
            'The “See what’s new” card at the foot of the sidebar only shows while there is something new: open What’s new and it goes away',
            'La tarjeta “Ver las novedades” al pie de la sidebar solo aparece mientras hay algo nuevo: abres Novedades y desaparece',
          ), '/novidades'],
          ['correcao', T(
            'Em Elevação, a frase que cita o elemento dialog volta a aparecer inteira',
            'In Elevation, the sentence that mentions the dialog element shows in full again',
            'En Elevación, la frase que menciona el elemento dialog vuelve a aparecer completa',
          ), '/fundamentos/elevacao'],
        ],
      },
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['correcao', T(
            'Chip sem seta fica com as duas pontas iguais; o recuo menor vale só do lado do ícone, do ✓ ou da seta — no site e no Figma',
            'A chip without an arrow has equal ends; the tighter padding applies only on the icon, ✓, or arrow side — on the site and in Figma',
            'Un chip sin flecha tiene los dos extremos iguales; el relleno menor vale solo del lado del ícono, el ✓ o la flecha — en el sitio y en Figma',
          ), '/componentes/chip'],
          ['correcao', T(
            'O seletor de idioma da topbar virou um chip seletor completo, com a seta',
            'The topbar language picker is now a complete picker chip, with the arrow',
            'El selector de idioma de la topbar ahora es un chip selector completo, con la flecha',
          ), '/componentes/chip'],
        ],
      },
    ],
  },
  {
    version: '0.6.1',
    date: '2026-10-31',
    title: T('Plugin no plano gratuito', 'Plugin on the free plan', 'Plugin en el plan gratuito'),
    summary: T(
      'O plugin do Figma passou a funcionar no plano gratuito, que aceita um modo por coleção de variáveis e 3 páginas por arquivo: você escolhe os modos na janela e completa depois, sem duplicar nada.',
      'The Figma plugin now works on the free plan, which allows one mode per variable collection and 3 pages per file: you pick the modes in the window and add the rest later, without duplicating anything.',
      'El plugin de Figma ahora funciona en el plan gratuito, que admite un modo por colección de variables y 3 páginas por archivo: eliges los modos en la ventana y completas después, sin duplicar nada.',
    ),
    groups: [
      {
        name: T('Figma', 'Figma', 'Figma'),
        items: [
          ['novo', T(
            'Modos na janela do plugin: Claro e Escuro, Só Escuro ou Só Claro. A escolha fica guardada no computador',
            'Modes in the plugin window: Light and Dark, Dark only, or Light only. The choice is saved on your computer',
            'Modos en la ventana del plugin: Claro y Oscuro, Solo Oscuro o Solo Claro. La elección queda guardada en tu computadora',
          ), '/recursos/figma'],
          ['melhoria', T(
            'A “Page 1” vazia do arquivo novo vira uma página do Lume: as 3 páginas cabem no plano gratuito',
            'The empty “Page 1” of a new file becomes a Lume page: all 3 pages fit in the free plan',
            'La “Page 1” vacía del archivo nuevo se convierte en una página de Lume: las 3 páginas caben en el plan gratuito',
          ), '/recursos/figma'],
          ['melhoria', T(
            'Num arquivo gerado com um modo só, rodar de novo com Claro e Escuro acrescenta o outro modo e mantém os componentes e as instâncias',
            'In a file generated with a single mode, running again with Light and Dark adds the other mode and keeps the components and instances',
            'En un archivo generado con un solo modo, ejecutarlo de nuevo con Claro y Oscuro agrega el otro modo y mantiene los componentes y las instancias',
          ), '/recursos/figma'],
          ['correcao', T(
            'As recusas do plano gratuito (modos e páginas) viraram explicações em português, com o que fazer',
            'Free-plan refusals (modes and pages) now come with a clear explanation and what to do',
            'Los rechazos del plan gratuito (modos y páginas) ahora vienen con una explicación clara y qué hacer',
          ), '/recursos/figma'],
          ['melhoria', T(
            'O teste do plugin simula o plano gratuito e a passagem para um plano pago',
            'The plugin test simulates the free plan and the move to a paid plan',
            'La prueba del plugin simula el plan gratuito y el paso a un plan de pago',
          ), '/recursos/figma'],
        ],
      },
      {
        name: T('Site', 'Site', 'Sitio'),
        items: [
          ['novo', T(
            'Dourado na troca da cor da marca, ao lado de Pêssego, Violeta, Azul, Verde e Rosa',
            'Gold in the brand color switcher, alongside Peach, Violet, Blue, Green, and Pink',
            'Dorado en el selector de color de marca, junto a Melocotón, Violeta, Azul, Verde y Rosa',
          ), '/'],
          ['correcao', T(
            'Com Dourado e Verde, os links do tema claro descem um tom e passam de 4,5:1',
            'With Gold and Green, light-theme links go one shade darker and pass 4.5:1',
            'Con Dorado y Verde, los enlaces del tema claro bajan un tono y superan 4,5:1',
          ), '/recursos/acessibilidade'],
          ['correcao', T(
            'Com Dourado e Azul, a série de gráfico da mesma cor troca de lugar com a 1ª: nada se repete, e a ordem segue validada para daltonismo',
            'With Gold and Blue, the chart series of the same color swaps places with the 1st: nothing repeats, and the order stays validated for color blindness',
            'Con Dorado y Azul, la serie de gráfico del mismo color cambia de lugar con la 1.ª: nada se repite y el orden sigue validado para daltonismo',
          ), '/graficos/visao-geral'],
          ['correcao', T(
            'Na troca da cor da marca, a bolinha do Pêssego não imita mais a cor escolhida',
            'In the brand color switcher, the Peach swatch no longer mimics the chosen color',
            'En el selector de color de marca, el círculo de Melocotón ya no imita el color elegido',
          ), '/'],
          ['correcao', T(
            'Subir o servidor não regrava mais a data dos tokens quando nada mudou',
            'Starting the server no longer rewrites the token date when nothing changed',
            'Iniciar el servidor ya no reescribe la fecha de los tokens cuando nada cambió',
          ), '/recursos/tokens'],
        ],
      },
    ],
  },
  {
    version: '0.6.0',
    date: '2026-10-31',
    title: T('Plugin completo', 'Complete plugin', 'Plugin completo'),
    summary: T(
      'O plugin do Figma passou a cobrir o design system inteiro: 7 blocos novos, as variações que faltavam e as correções que só apareceram rodando no Figma de verdade.',
      'The Figma plugin now covers the whole design system: 7 new blocks, the missing variants, and the fixes that only showed up when running in the real Figma.',
      'El plugin de Figma ahora cubre todo el design system: 7 bloques nuevos, las variantes que faltaban y las correcciones que solo aparecieron al ejecutarlo en Figma de verdad.',
    ),
    groups: [
      {
        name: T('Figma', 'Figma', 'Figma'),
        items: [
          ['novo', T(
            'Blocos novos: Movimento, Layout, Código, Dispersão, Paleta de comandos, Barra de filtros e Formulário — 42 no total',
            'New blocks: Motion, Layout, Code, Scatter, Command palette, Filter bar, and Form — 42 in total',
            'Bloques nuevos: Movimiento, Layout, Código, Dispersión, Paleta de comandos, Barra de filtros y Formulario — 42 en total',
          ), '/recursos/figma'],
          ['novo', T(
            'Gráficos: barras 100%, divergentes e funil, áreas empilhadas, heatmap em calendário e o número de destaque',
            'Charts: 100% bars, diverging bars and funnel, stacked areas, calendar heatmap, and the hero number',
            'Gráficos: barras al 100 %, divergentes y embudo, áreas apiladas, heatmap de calendario y el número destacado',
          ), '/graficos/barras'],
          ['novo', T(
            'Estado vazio sem permissão, offline e carregando; anexo, sugestões e composer com anexo; seleção com busca; avatar quadrado e divisor',
            'Empty state for no permission, offline, and loading; attachment, suggestions, and composer with an attachment; select with search; square avatar and divider',
            'Estado vacío sin permiso, sin conexión y cargando; adjunto, sugerencias y composer con adjunto; selector con búsqueda; avatar cuadrado y divisor',
          ), '/padroes/estados-vazios'],
          ['novo', T(
            'O bloco de Cores mostra também as escalas sequencial, ordinal e divergente e as cores de apoio dos gráficos',
            'The Colors block also shows the sequential, ordinal, and diverging scales and the chart support colors',
            'El bloque de Colores también muestra las escalas secuencial, ordinal y divergente y los colores de apoyo de los gráficos',
          ), '/fundamentos/cores'],
          ['correcao', T(
            'Opacidade própria em cor de variável (véu do avatar, hover sutil, lavagens dos gráficos): o Figma a trocava pela da variável',
            'Custom opacity on a variable color (avatar veil, subtle hover, chart washes): Figma replaced it with the variable’s own',
            'Opacidad propia en un color de variable (velo del avatar, hover sutil, lavados de los gráficos): Figma la cambiaba por la de la variable',
          ), '/recursos/figma'],
          ['correcao', T(
            'Ícones numa camada só, com o traço em contorno: trocar o ícone mantém a cor e nunca deixa um ícone preenchido',
            'Icons in a single layer, with the stroke outlined: swapping the icon keeps the color and never leaves a filled icon',
            'Íconos en una sola capa, con el trazo contorneado: cambiar el ícono mantiene el color y nunca deja un ícono relleno',
          ), '/fundamentos/icones'],
          ['correcao', T(
            'Etiquetas do cabeçalho dentro da borda, anel de foco no tamanho real de cada campo e status do avatar aplicado',
            'Header tags inside the border, a focus ring at each field’s real size, and the avatar status applied',
            'Etiquetas del encabezado dentro del borde, anillo de foco del tamaño real de cada campo y estado del avatar aplicado',
          ), '/recursos/figma'],
          ['melhoria', T(
            'O teste do plugin acusa conteúdo vazando da borda, opacidade perdida e ícone fora do formato',
            'The plugin test flags content overflowing the border, lost opacity, and off-format icons',
            'La prueba del plugin detecta contenido que se sale del borde, opacidad perdida e íconos fuera de formato',
          ), '/recursos/figma'],
        ],
      },
      {
        name: T('Tokens', 'Tokens', 'Tokens'),
        items: [
          ['novo', T(
            'As durações (duration.*) viram variáveis de Dimensões no Figma, em milissegundos — 59 dimensões',
            'Durations (duration.*) become dimension variables in Figma, in milliseconds — 59 dimensions',
            'Las duraciones (duration.*) se convierten en variables de dimensión en Figma, en milisegundos — 59 dimensiones',
          ), '/fundamentos/movimento'],
        ],
      },
    ],
  },
  {
    version: '0.5.0',
    date: '2026-10-31',
    title: T('Plugin do Figma', 'Figma plugin', 'Plugin de Figma'),
    summary: T(
      'Os componentes do Lume dentro do Figma, sem redesenhar: um plugin que você importa pelo manifesto e que gera variáveis, estilos, ícones e 35 blocos de documentação nos modos Claro e Escuro.',
      'Lume’s components inside Figma, without redrawing: a plugin you import from its manifest that generates variables, styles, icons, and 35 documentation blocks in Light and Dark modes.',
      'Los componentes de Lume dentro de Figma, sin redibujar: un plugin que importas desde el manifiesto y que genera variables, estilos, íconos y 35 bloques de documentación en los modos Claro y Oscuro.',
    ),
    groups: [
      {
        name: T('Figma', 'Figma', 'Figma'),
        items: [
          ['novo', T(
            'Plugin “Lume para Figma”: Plugins → Desenvolvimento → Importar plugin do manifesto',
            'The “Lume para Figma” plugin: Plugins → Development → Import plugin from manifest',
            'Plugin “Lume para Figma”: Plugins → Development → Import plugin from manifest',
          ), '/recursos/figma'],
          ['novo', T(
            '35 blocos com cabeçalho, matriz de variantes rotulada, exemplos e prévias Claro e Escuro — 42 conjuntos e 474 variantes',
            '35 blocks with a header, a labeled variant matrix, examples, and Light and Dark previews — 42 sets and 474 variants',
            '35 bloques con encabezado, matriz de variantes rotulada, ejemplos y vistas previas Claro y Oscuro — 42 conjuntos y 474 variantes',
          ), '/recursos/figma'],
          ['novo', T(
            'Páginas de Fundamentos (cores nos dois modos, tipografia, espaço, raio, sombra) e de Ícones (126 componentes)',
            'Foundations pages (colors in both modes, typography, spacing, radius, shadow) and Icons (126 components)',
            'Páginas de Fundamentos (colores en los dos modos, tipografía, espaciado, radio, sombra) y de Íconos (126 componentes)',
          ), '/recursos/figma'],
          ['novo', T(
            'Propriedades de componente: rótulo, ícone opcional e troca de ícone',
            'Component properties: label, optional icon, and icon swap',
            'Propiedades de componente: etiqueta, ícono opcional y cambio de ícono',
          ), '/recursos/figma'],
          ['melhoria', T(
            'Rodar de novo atualiza sem duplicar: componentes mantêm o id e as instâncias continuam ligadas',
            'Running again updates without duplicating: components keep their id and instances stay linked',
            'Ejecutarlo de nuevo actualiza sin duplicar: los componentes mantienen el id y las instancias siguen vinculadas',
          ), '/recursos/figma'],
          ['novo', T(
            'npm run figma e npm run figma:test — o teste roda o plugin numa imitação da API do Figma e gera uma prévia',
            'npm run figma and npm run figma:test — the test runs the plugin against a mock of the Figma API and generates a preview',
            'npm run figma y npm run figma:test — la prueba ejecuta el plugin en una imitación de la API de Figma y genera una vista previa',
          ), '/recursos/figma'],
        ],
      },
    ],
  },
  {
    version: '0.4.1',
    date: '2026-10-31',
    title: T('Contraste em dia', 'Contrast sorted', 'Contraste al día'),
    summary: T(
      'As três pendências de acessibilidade foram resolvidas: contorno de campos, switch desligado e texto apagado no tema claro. O build agora mede 70 combinações.',
      'The three open accessibility issues are fixed: field borders, the off switch, and faded text in the light theme. The build now measures 70 pairs.',
      'Se resolvieron los tres pendientes de accesibilidad: el borde de los campos, el switch apagado y el texto atenuado en el tema claro. El build ahora mide 70 combinaciones.',
    ),
    groups: [
      {
        name: T('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        items: [
          ['correcao', T(
            'Campos, seleção, composer e switch ganharam o contorno border.field, que passa de 3:1 em todas as superfícies',
            'Fields, select, composer, and switch got the border.field outline, which passes 3:1 on every surface',
            'Campos, selector, composer y switch recibieron el contorno border.field, que supera 3:1 en todas las superficies',
          ), '/componentes/campo-de-texto'],
          ['correcao', T(
            'O switch desligado agora tem contorno visível em qualquer fundo',
            'The off switch now has a visible outline on any background',
            'El switch apagado ahora tiene un contorno visible sobre cualquier fondo',
          ), '/componentes/switch'],
          ['correcao', T(
            'fg.subtle no tema claro passa de 4,5:1 (novo tom neutral.550); fg.muted desceu para neutral.650 para manter a hierarquia',
            'fg.subtle in the light theme passes 4.5:1 (new neutral.550 shade); fg.muted moved down to neutral.650 to keep the hierarchy',
            'fg.subtle en el tema claro supera 4,5:1 (nuevo tono neutral.550); fg.muted bajó a neutral.650 para mantener la jerarquía',
          ), '/fundamentos/cores'],
          ['melhoria', T(
            'O build mede fg.subtle a 4,5:1 e border.field a 3:1 contra canvas, surface, raised e sunken',
            'The build checks fg.subtle at 4.5:1 and border.field at 3:1 against canvas, surface, raised, and sunken',
            'El build mide fg.subtle a 4,5:1 y border.field a 3:1 contra canvas, surface, raised y sunken',
          ), '/recursos/acessibilidade'],
          ['melhoria', T(
            'Chips, botões e a busca da sidebar mantêm o contorno fino: o rótulo já identifica o controle',
            'Chips, buttons, and the sidebar search keep the thin outline: the label already identifies the control',
            'Chips, botones y la búsqueda de la sidebar mantienen el contorno fino: la etiqueta ya identifica el control',
          ), '/recursos/acessibilidade'],
        ],
      },
    ],
  },
  {
    version: '0.4.0',
    date: '2026-10-31',
    title: T('Recursos', 'Resources', 'Recursos'),
    summary: T(
      'O que o time precisa para adotar e evoluir o Lume: guia de acessibilidade com as pendências à vista, tokens exportados para o Figma e o caminho de uma contribuição.',
      'What the team needs to adopt and evolve Lume: an accessibility guide with open issues in plain sight, tokens exported to Figma, and the path for a contribution.',
      'Lo que el equipo necesita para adoptar y hacer crecer Lume: una guía de accesibilidad con los pendientes a la vista, tokens exportados a Figma y el camino de una contribución.',
    ),
    groups: [
      {
        name: T('Recursos', 'Resources', 'Recursos'),
        items: [
          ['novo', T(
            'Acessibilidade: verificador de contraste com qualquer par de tokens, nos dois temas, e o mapa de teclado de cada componente',
            'Accessibility: a contrast checker for any pair of tokens, in both themes, and the keyboard map for each component',
            'Accesibilidad: verificador de contraste con cualquier par de tokens, en los dos temas, y el mapa de teclado de cada componente',
          ), '/recursos/acessibilidade'],
          ['novo', T(
            'Pendências de acessibilidade calculadas ao vivo: contorno de campos e chips, switch desligado e texto apagado no tema claro',
            'Accessibility issues calculated live: field and chip outlines, the off switch, and faded text in the light theme',
            'Pendientes de accesibilidad calculados en vivo: contorno de campos y chips, switch apagado y texto atenuado en el tema claro',
          ), '/recursos/acessibilidade'],
          ['novo', T(
            'Tokens para Figma: variáveis com modos Escuro e Claro, aliases, estilos de texto e sombra, no formato da API REST e num plugin local',
            'Tokens for Figma: variables with Dark and Light modes, aliases, text and shadow styles, in the REST API format and as a local plugin',
            'Tokens para Figma: variables con modos Oscuro y Claro, alias, estilos de texto y sombra, en el formato de la API REST y en un plugin local',
          ), '/recursos/tokens'],
          ['novo', T(
            'Exportação em DTCG, JSON plano e CSS com npm run tokens:export',
            'Export to DTCG, flat JSON, and CSS with npm run tokens:export',
            'Exportación en DTCG, JSON plano y CSS con npm run tokens:export',
          ), '/recursos/tokens'],
          ['novo', T(
            'Como contribuir: do pedido à publicação, com modelo de proposta, “Isso é do design system?” e checklist de revisão',
            'How to contribute: from request to release, with a proposal template, “Does this belong in the design system?”, and a review checklist',
            'Cómo contribuir: del pedido a la publicación, con plantilla de propuesta, “¿Esto es del design system?” y checklist de revisión',
          ), '/novidades'],
        ],
      },
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['melhoria', T(
            'Tooltip segue a WCAG 1.4.13: dá para passar o mouse por cima, fecha com Esc e não some enquanto você lê',
            'Tooltip follows WCAG 1.4.13: you can hover over it, it closes with Esc, and it doesn’t vanish while you read',
            'El tooltip sigue la WCAG 1.4.13: puedes pasar el mouse por encima, se cierra con Esc y no desaparece mientras lees',
          ), '/recursos/acessibilidade'],
          ['melhoria', T(
            'O Início lista os Recursos junto dos Padrões',
            'Home lists Resources alongside Patterns',
            'El Inicio lista los Recursos junto a los Patrones',
          ), '/'],
        ],
      },
    ],
  },
  {
    version: '0.3.0',
    date: '2026-10-31',
    title: T('Padrões', 'Patterns', 'Patrones'),
    summary: T(
      'Como as peças se encaixam em telas reais: app shell, conversa, formulários, estados vazios e busca — cada padrão com um exemplo que funciona de verdade.',
      'How the pieces fit together in real screens: app shell, chat, forms, empty states, and search — each pattern with an example that actually works.',
      'Cómo encajan las piezas en pantallas reales: app shell, conversación, formularios, estados vacíos y búsqueda — cada patrón con un ejemplo que funciona de verdad.',
    ),
    groups: [
      {
        name: T('Padrões', 'Patterns', 'Patrones'),
        items: [
          ['novo', T(
            'App shell com o app real embutido, em tamanho de desktop e de celular, sem mexer nas suas preferências',
            'App shell with the real app embedded, at desktop and mobile sizes, without touching your preferences',
            'App shell con la app real incrustada, en tamaño de escritorio y de móvil, sin tocar tus preferencias',
          ), '/padroes/app-shell'],
          ['novo', T(
            'Conversa e composer: mensagens, cartão de resultado, anexos e comandos com “/”',
            'Chat and composer: messages, result card, attachments, and “/” commands',
            'Conversación y composer: mensajes, tarjeta de resultado, adjuntos y comandos con “/”',
          ), '/padroes/conversa'],
          ['novo', T(
            'Formulários com validação na saída do campo, resumo de erros que leva a cada campo e ações fixas',
            'Forms with validation when leaving a field, an error summary that takes you to each field, and sticky actions',
            'Formularios con validación al salir del campo, resumen de errores que lleva a cada campo y acciones fijas',
          ), '/padroes/formularios'],
          ['novo', T(
            'Estados vazios para primeiro uso, sem resultados, erro, sem permissão, offline e carregando',
            'Empty states for first use, no results, error, no permission, offline, and loading',
            'Estados vacíos para primer uso, sin resultados, error, sin permiso, sin conexión y cargando',
          ), '/padroes/estados-vazios'],
          ['novo', T(
            'Busca e comandos: paleta ⌘K, barra de filtros com estado na URL e mapa de atalhos',
            'Search and commands: ⌘K palette, filter bar with state in the URL, and a shortcut map',
            'Búsqueda y comandos: paleta ⌘K, barra de filtros con estado en la URL y mapa de atajos',
          ), '/padroes/busca'],
        ],
      },
      {
        name: T('Componentes e JavaScript', 'Components and JavaScript', 'Componentes y JavaScript'),
        items: [
          ['novo', T(
            'Alerta inline com tons, título, lista, ações e versão compacta (.ds-alert)',
            'Inline alert with tones, title, list, actions, and a compact version (.ds-alert)',
            'Alerta inline con tonos, título, lista, acciones y versión compacta (.ds-alert)',
          ), '/padroes/formularios'],
          ['novo', T(
            'Composer e mensagens (.ds-composer, .ds-message, createComposer)',
            'Composer and messages (.ds-composer, .ds-message, createComposer)',
            'Composer y mensajes (.ds-composer, .ds-message, createComposer)',
          ), '/padroes/conversa'],
          ['novo', T(
            'Validação de formulários a partir dos atributos nativos, em português (enhanceForm)',
            'Form validation built on native attributes, with its own messages (enhanceForm)',
            'Validación de formularios a partir de los atributos nativos, con mensajes propios (enhanceForm)',
          ), '/padroes/formularios'],
          ['novo', T(
            'Barra de filtros com pílulas removíveis e contagem anunciada (createFilters)',
            'Filter bar with removable pills and an announced count (createFilters)',
            'Barra de filtros con píldoras removibles y conteo anunciado (createFilters)',
          ), '/padroes/busca'],
          ['melhoria', T(
            'Estado vazio ganhou versões compacta, inline, sem borda, de erro e carregando',
            'Empty state got compact, inline, borderless, error, and loading versions',
            'El estado vacío ganó versiones compacta, inline, sin borde, de error y cargando',
          ), '/padroes/estados-vazios'],
          ['melhoria', T(
            'App shell aceita modo de demonstração (persist: false) e avisa mudanças com ds:shellchange',
            'App shell accepts a demo mode (persist: false) and announces changes with ds:shellchange',
            'El app shell acepta un modo de demostración (persist: false) y avisa los cambios con ds:shellchange',
          ), '/padroes/app-shell'],
          ['melhoria', T(
            'Paleta de comandos aceita várias instâncias e pode ser destruída',
            'Command palette accepts multiple instances and can be destroyed',
            'La paleta de comandos acepta varias instancias y puede destruirse',
          ), '/padroes/busca'],
          ['novo', T(
            '12 ícones novos: enviar, anexar, parar, gostei, teclado, comando, sem conexão e outros',
            '12 new icons: send, attach, stop, like, keyboard, command, offline, and more',
            '12 íconos nuevos: enviar, adjuntar, detener, me gusta, teclado, comando, sin conexión y otros',
          ), '/fundamentos/icones'],
        ],
      },
      {
        name: T('Correções', 'Fixes', 'Correcciones'),
        items: [
          ['correcao', T(
            'Marcar o item ativo da sidebar não rola mais a página inteira junto',
            'Marking the active sidebar item no longer scrolls the whole page along with it',
            'Marcar el ítem activo de la sidebar ya no desplaza toda la página',
          ), '/padroes/app-shell'],
        ],
      },
    ],
  },
  {
    version: '0.2.0',
    date: '2026-10-31',
    title: T('Gráficos', 'Charts', 'Gráficos'),
    summary: T(
      'Uma seção inteira de gráficos: seis formas, indicadores e uma paleta validada para daltonismo nos dois temas. Tudo em SVG, sem dependências.',
      'A whole section of charts: six shapes, indicators, and a palette validated for color blindness in both themes. All in SVG, with no dependencies.',
      'Una sección entera de gráficos: seis formas, indicadores y una paleta validada para daltonismo en los dos temas. Todo en SVG, sin dependencias.',
    ),
    groups: [
      {
        name: T('Gráficos', 'Charts', 'Gráficos'),
        items: [
          ['novo', T(
            'Sete páginas: visão geral, barras, linhas e áreas, rosca, heatmap, dispersão e indicadores',
            'Seven pages: overview, bars, lines and areas, donut, heatmap, scatter, and indicators',
            'Siete páginas: visión general, barras, líneas y áreas, dona, heatmap, dispersión e indicadores',
          ), '/graficos/visao-geral'],
          ['novo', T(
            'Paleta categórica de 8 cores em ordem fixa, validada para daltonismo e visão normal nos dois temas',
            'An 8-color categorical palette in a fixed order, validated for color blindness and normal vision in both themes',
            'Paleta categórica de 8 colores en orden fijo, validada para daltonismo y visión normal en los dos temas',
          ), '/graficos/visao-geral'],
          ['novo', T(
            'Escalas sequencial, ordinal e divergente, grade e eixo como tokens color.chart.*',
            'Sequential, ordinal, and diverging scales, grid, and axis as color.chart.* tokens',
            'Escalas secuencial, ordinal y divergente, cuadrícula y eje como tokens color.chart.*',
          ), '/fundamentos/cores'],
          ['novo', T(
            'Biblioteca em SVG puro: barChart, lineChart, donutChart, heatmap, calendarHeatmap e scatterChart',
            'A pure-SVG library: barChart, lineChart, donutChart, heatmap, calendarHeatmap, and scatterChart',
            'Biblioteca en SVG puro: barChart, lineChart, donutChart, heatmap, calendarHeatmap y scatterChart',
          ), '/graficos/barras'],
          ['novo', T(
            'Indicador, número de destaque, sparkline e medidor para quando o gráfico é um número',
            'Indicator, hero number, sparkline, and meter for when the chart is a number',
            'Indicador, número destacado, sparkline y medidor para cuando el gráfico es un número',
          ), '/graficos/indicadores'],
          ['melhoria', T(
            'Tooltip no hover e no teclado, legenda que esconde séries sem repintar as outras e vista em tabela',
            'Tooltip on hover and keyboard, a legend that hides series without repainting the others, and a table view',
            'Tooltip al pasar el cursor y con teclado, leyenda que oculta series sin repintar las demás y vista de tabla',
          ), '/graficos/visao-geral'],
          ['melhoria', T(
            'Textura opcional em 45° e 135° para daltonismo total, impressão e alto contraste',
            'Optional 45° and 135° texture for total color blindness, printing, and high contrast',
            'Textura opcional a 45° y 135° para daltonismo total, impresión y alto contraste',
          ), '/graficos/rosca'],
        ],
      },
      {
        name: T('Fundamentos e documentação', 'Foundations and docs', 'Fundamentos y documentación'),
        items: [
          ['novo', T(
            '10 ícones de gráfico, numa categoria própria',
            '10 chart icons, in their own category',
            '10 íconos de gráfico, en una categoría propia',
          ), '/fundamentos/icones'],
          ['melhoria', T(
            'Cores ganhou o grupo de tokens Gráficos',
            'Colors got the Charts token group',
            'Colores ganó el grupo de tokens Gráficos',
          ), '/fundamentos/cores'],
          ['melhoria', T(
            'O Início mostra os gráficos e o roadmap traz todas as versões',
            'Home shows the charts, and the roadmap lists every version',
            'El Inicio muestra los gráficos y el roadmap trae todas las versiones',
          ), '/'],
        ],
      },
      {
        name: T('Correções', 'Fixes', 'Correcciones'),
        items: [
          ['correcao', T(
            'O Início não diz mais que os componentes estão “a caminho”',
            'Home no longer says the components are “on the way”',
            'El Inicio ya no dice que los componentes están “en camino”',
          ), '/'],
        ],
      },
    ],
  },
  {
    version: '0.1.0',
    date: '2026-10-31',
    title: T('Primeira versão', 'First version', 'Primera versión'),
    summary: T(
      'Fundamentos completos, 16 componentes documentados e o app shell. A base para começar a construir.',
      'Complete foundations, 16 documented components, and the app shell. The base to start building on.',
      'Fundamentos completos, 16 componentes documentados y el app shell. La base para empezar a construir.',
    ),
    groups: [
      {
        name: T('Fundamentos', 'Foundations', 'Fundamentos'),
        items: [
          ['novo', T(
            'Tokens gerados em OKLCH, com 13 paletas e temas escuro e claro',
            'Tokens generated in OKLCH, with 13 palettes and dark and light themes',
            'Tokens generados en OKLCH, con 13 paletas y temas oscuro y claro',
          ), '/fundamentos/cores'],
          ['novo', T(
            'Contraste WCAG verificado a cada build, nos dois temas',
            'WCAG contrast checked on every build, in both themes',
            'Contraste WCAG verificado en cada build, en los dos temas',
          ), '/fundamentos/cores'],
          ['novo', T(
            'Tipografia com Inter Tight, Inter e JetBrains Mono em 19 estilos',
            'Typography with Inter Tight, Inter, and JetBrains Mono in 19 styles',
            'Tipografía con Inter Tight, Inter y JetBrains Mono en 19 estilos',
          ), '/fundamentos/tipografia'],
          ['novo', T(
            'Biblioteca própria de ícones em grid de 24 px, traço 1,5',
            'Our own icon library on a 24 px grid, 1.5 stroke',
            'Biblioteca propia de íconos en una grilla de 24 px, trazo 1,5',
          ), '/fundamentos/icones'],
          ['novo', T(
            'Escalas de espaçamento, raio, elevação, movimento e layout',
            'Spacing, radius, elevation, motion, and layout scales',
            'Escalas de espaciado, radio, elevación, movimiento y layout',
          ), '/fundamentos/espacamento'],
        ],
      },
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T(
            '16 componentes, cada um com playground, código, acessibilidade e tokens',
            '16 components, each with a playground, code, accessibility, and tokens',
            '16 componentes, cada uno con playground, código, accesibilidad y tokens',
          ), '/componentes/botao'],
          ['novo', T(
            'Modal, Abas, Tabela, Checkbox e radio e Switch',
            'Modal, Tabs, Table, Checkbox and radio, and Switch',
            'Modal, Pestañas, Tabla, Checkbox y radio, y Switch',
          ), '/componentes/modal'],
          ['novo', T(
            'Seleção com lista própria, busca e múltipla escolha',
            'Select with its own list, search, and multiple choice',
            'Selector con lista propia, búsqueda y selección múltiple',
          ), '/componentes/selecao'],
          ['melhoria', T(
            'Toast com tons, ação de desfazer e seis posições',
            'Toast with tones, an undo action, and six positions',
            'Toast con tonos, acción de deshacer y seis posiciones',
          ), '/componentes/toast'],
          ['melhoria', T(
            'Menu com grupos, separadores, atalhos e modo de ação',
            'Menu with groups, separators, shortcuts, and action mode',
            'Menú con grupos, separadores, atajos y modo de acción',
          ), '/componentes/menu'],
          ['melhoria', T(
            'Estados forçados com data-state para documentar e testar',
            'Forced states with data-state for documenting and testing',
            'Estados forzados con data-state para documentar y probar',
          ), '/componentes/botao'],
        ],
      },
      {
        name: T('App shell e documentação', 'App shell and docs', 'App shell y documentación'),
        items: [
          ['novo', T(
            'Sidebar recolhível (⌘B), gaveta no celular e busca ⌘K',
            'Collapsible sidebar (⌘B), mobile drawer, and ⌘K search',
            'Sidebar plegable (⌘B), panel deslizante en el móvil y búsqueda ⌘K',
          ), '/padroes/app-shell'],
          ['novo', T(
            'Páginas de documentação com navegação “nesta página”',
            'Documentation pages with “on this page” navigation',
            'Páginas de documentación con navegación “en esta página”',
          ), '/fundamentos/cores'],
          ['melhoria', T(
            'Visual plano: superfícies opacas, sem vidro, brilho ou blur',
            'Flat look: opaque surfaces, no glass, glow, or blur',
            'Estética plana: superficies opacas, sin vidrio, brillo ni blur',
          ), '/fundamentos/elevacao'],
          ['melhoria', T(
            'Logotipo só tipográfico',
            'Type-only logo',
            'Logotipo solo tipográfico',
          ), '/'],
        ],
      },
      {
        name: T('Correções', 'Fixes', 'Correcciones'),
        items: [
          ['correcao', T(
            'Trocar o tema duas vezes seguidas não ignora mais a segunda troca',
            'Switching the theme twice in a row no longer ignores the second switch',
            'Cambiar el tema dos veces seguidas ya no ignora el segundo cambio',
          ), '/fundamentos/cores'],
          ['correcao', T(
            'A busca de ícones encontra “calendário”',
            'Icon search finds “calendar”',
            'La búsqueda de íconos encuentra “calendario”',
          ), '/fundamentos/icones'],
          ['correcao', T(
            'Seções das páginas não repetem ids do app',
            'Page sections no longer repeat app ids',
            'Las secciones de las páginas ya no repiten ids de la app',
          ), '/fundamentos/layout'],
          ['correcao', T(
            'No celular, a trilha da topbar não cobre mais a busca',
            'On mobile, the topbar breadcrumb no longer covers the search',
            'En el móvil, la ruta de la topbar ya no cubre la búsqueda',
          ), '/'],
        ],
      },
    ],
  },
];

/** Os grupos no idioma atual: nome e texto de cada item. */
const localGroups = (groups) => groups.map((g) => ({ name: tr(g.name), items: g.items.map(([type, text, href]) => [type, tr(text), href]) }));

/** Cada campo traduzido vira um getter no idioma atual. */
function live(source) {
  const out = {};
  for (const [key, value] of Object.entries(source)) {
    const get = key === 'groups' ? () => localGroups(value) : () => tr(value);
    Object.defineProperty(out, key, { enumerable: true, get });
  }
  return out;
}

export const releases = RELEASES.map(live);

/** Tipos de mudança: o tom do badge e o rótulo (getter no idioma atual). */
export const TYPES = {
  novo: live({ tone: 'brand', label: T('Novo', 'New', 'Nuevo') }),
  melhoria: live({ tone: 'info', label: T('Melhoria', 'Improvement', 'Mejora') }),
  correcao: live({ tone: 'success', label: T('Correção', 'Fix', 'Corrección') }),
};
