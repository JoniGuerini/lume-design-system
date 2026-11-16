/**
 * Histórico de versões do Lume — fonte da página Novidades e do indicador da sidebar.
 * Tipos: 'novo' | 'melhoria' | 'correcao'.
 * Textos em T(pt-BR, en, es): títulos, resumos, nomes dos grupos e itens. Em `releases`
 * e `TYPES` eles viram getters no idioma atual.
 */
import { tr } from '../ds/js/i18n.js';

const T = (pt, en, es) => ({ 'pt-BR': pt, en, es });

export const CURRENT_VERSION = '1.9.0';
export const SEEN_KEY = 'ds-novidades-vista';

const RELEASES = [
  {
    version: '1.9.0',
    date: '2026-11-16',
    title: T('Tom de voz', 'Voice and tone', 'Voz y tono'),
    summary: T(
      'Um fundamento novo sobre escrita: a voz do Lume, quatro tons prontos com as mesmas situações escritas em cada um, regras e como padronizar os textos do seu app.',
      'A new foundation about writing: Lume’s voice, four ready-made tones with the same situations written in each, rules, and how to standardize your app’s copy.',
      'Un fundamento nuevo sobre la escritura: la voz de Lume, cuatro tonos listos con las mismas situaciones escritas en cada uno, reglas y cómo estandarizar los textos de tu app.',
    ),
    groups: [
      {
        name: T('Fundamentos', 'Foundations', 'Fundamentos'),
        items: [
          ['novo', T('Tom de voz: Neutro, Acolhedor, Profissional e Leve lado a lado em sucesso, erro, vazio, exclusão e espera, com componentes de verdade', 'Voice and tone: Neutral, Warm, Professional, and Playful side by side in success, error, empty, deletion, and waiting, with real components', 'Voz y tono: Neutro, Cercano, Profesional y Desenfadado lado a lado en éxito, error, vacío, eliminación y espera, con componentes reales'), '/fundamentos/tom-de-voz'],
          ['novo', T('O que muda de idioma para idioma, um arquivo de mensagens por tom e um guia pronto para pedir textos a uma IA', 'What changes from language to language, one messages file per tone, and a ready-made guide for asking an AI for copy', 'Lo que cambia de un idioma a otro, un archivo de mensajes por tono y una guía lista para pedirle textos a una IA'), '/fundamentos/tom-de-voz'],
        ],
      },
    ],
  },
  {
    version: '1.8.0',
    date: '2026-11-15',
    title: T('Sidebar e Navbar', 'Sidebar and Navbar', 'Sidebar y Navbar'),
    summary: T(
      'As duas formas de navegar ganharam páginas próprias: como cada uma é montada, os estados, o que acontece quando falta espaço e quando usar uma ou outra.',
      'The two ways to navigate got their own pages: how each one is built, its states, what happens when space runs out, and when to use one or the other.',
      'Las dos formas de navegar ganaron páginas propias: cómo se arma cada una, los estados, qué pasa cuando falta espacio y cuándo usar una u otra.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T('Sidebar: anatomia sobre a sidebar do próprio site, estados do item, aberta e recolhida, gaveta no celular e o app ao vivo', 'Sidebar: anatomy over this site’s own sidebar, item states, open and collapsed, phone drawer, and the live app', 'Sidebar: anatomía sobre la sidebar del propio sitio, estados del elemento, abierta y contraída, cajón en el móvil y la app en vivo'), '/componentes/sidebar'],
          ['novo', T('Navbar: diminua a largura e veja a busca encolher e os itens irem para o Mais; menus dos grupos e quando usar navbar ou sidebar', 'Navbar: shrink the width and watch search shrink and items move into More; group menus and when to use navbar or sidebar', 'Navbar: reduce el ancho y mira cómo la búsqueda se encoge y los elementos pasan a Más; menús de los grupos y cuándo usar navbar o sidebar'), '/componentes/navbar'],
          ['correcao', T('Os estados do shell (recolhida, navbar, gaveta) valem só para a sidebar e a navbar dele, e não vazam para exemplos dentro do conteúdo', 'Shell states (collapsed, navbar, drawer) apply only to its own sidebar and navbar, and no longer leak into examples inside the content', 'Los estados del shell (contraída, navbar, cajón) valen solo para su propia sidebar y navbar, y ya no se filtran a ejemplos dentro del contenido'), '/padroes/app-shell'],
        ],
      },
      {
        name: T('React', 'React', 'React'),
        items: [
          ['novo', T('AppShell aceita layout="navbar": os mesmos grupos no topo, com menus e o Mais', 'AppShell accepts layout="navbar": the same groups across the top, with menus and More', 'AppShell acepta layout="navbar": los mismos grupos arriba, con menús y Más'), '/recursos/react'],
        ],
      },
    ],
  },
  {
    version: '1.7.1',
    date: '2026-11-15',
    title: T('Contraste revisado', 'Contrast review', 'Contraste revisado'),
    summary: T(
      'Todas as páginas, nos dois temas, passaram por um teste automático de acessibilidade. O texto apagado do tema claro escureceu um passo e as teclas ficaram mais legíveis.',
      'Every page, in both themes, went through an automated accessibility test. Muted text in the light theme went one step darker and keys got easier to read.',
      'Todas las páginas, en los dos temas, pasaron por una prueba automática de accesibilidad. El texto atenuado del tema claro se oscureció un paso y las teclas quedaron más legibles.',
    ),
    groups: [
      {
        name: T('Tokens', 'Tokens', 'Tokens'),
        items: [
          ['correcao', T('fg.subtle no claro passa a 4,5:1 também sobre bg.app, o fundo dos exemplos (refugio.550 → refugio.600)', 'fg.subtle in light mode now reaches 4.5:1 on bg.app too, the background behind examples (refugio.550 → refugio.600)', 'fg.subtle en el claro ahora llega a 4,5:1 también sobre bg.app, el fondo de los ejemplos (refugio.550 → refugio.600)'), '/recursos/acessibilidade'],
        ],
      },
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['correcao', T('Tecla: o texto usa fg.muted e passa de 4,5:1 em qualquer fundo', 'Key: the text uses fg.muted and passes 4.5:1 on any background', 'Tecla: el texto usa fg.muted y pasa de 4,5:1 en cualquier fondo'), '/componentes/tecla'],
        ],
      },
    ],
  },
  {
    version: '1.7.0',
    date: '2026-11-15',
    title: T('Carregamento e erros', 'Loading and errors', 'Carga y errores'),
    summary: T(
      'Padrão novo para o caminho de uma página até o conteúdo: esqueleto com a forma certa, aviso quando demora, erro só na parte que falhou e nada perdido ao salvar.',
      'A new pattern for a page’s path to its content: skeletons with the right shape, a notice when it’s slow, errors only in the part that failed, and nothing lost on save.',
      'Patrón nuevo para el camino de una página hasta el contenido: esqueleto con la forma correcta, aviso cuando tarda, error solo en la parte que falló y nada perdido al guardar.',
    ),
    groups: [
      {
        name: T('Padrões', 'Patterns', 'Patrones'),
        items: [
          ['novo', T('Carregamento e erros: simule carregando, lento, parte que falhou, erro ao salvar e página não encontrada', 'Loading and errors: simulate loading, slow, a failed part, a save error, and page not found', 'Carga y errores: simula cargando, lento, parte que falló, error al guardar y página no encontrada'), '/padroes/carregamento'],
          ['novo', T('Tabela de tempos: o que mostrar até 1 s, até 3 s, depois disso e quando falha', 'A timing table: what to show up to 1 s, up to 3 s, beyond that, and when it fails', 'Tabla de tiempos: qué mostrar hasta 1 s, hasta 3 s, después de eso y cuando falla'), '/padroes/carregamento'],
        ],
      },
    ],
  },
  {
    version: '1.6.0',
    date: '2026-11-15',
    title: T('Primeiro uso', 'First use', 'Primer uso'),
    summary: T(
      'Padrão novo para a primeira sessão de alguém: boas-vindas curtas, poucos passos que já são o trabalho de verdade e dados de exemplo marcados.',
      'A new pattern for someone’s first session: a short welcome, a few steps that are already the real work, and clearly marked sample data.',
      'Patrón nuevo para la primera sesión de alguien: bienvenida corta, pocos pasos que ya son el trabajo de verdad y datos de ejemplo marcados.',
    ),
    groups: [
      {
        name: T('Padrões', 'Patterns', 'Patrones'),
        items: [
          ['novo', T('Primeiro uso: primeiros passos com progresso, cada um com a ação de verdade, e um X para esconder', 'First use: first steps with progress, each with the real action, and an X to hide them', 'Primer uso: primeros pasos con progreso, cada uno con la acción de verdad, y una X para ocultarlos'), '/padroes/primeiro-uso'],
          ['novo', T('Vazio que ensina e projetos de exemplo, marcados e apagados de uma vez', 'An empty state that teaches and sample projects, marked and deleted all at once', 'Vacío que enseña y proyectos de ejemplo, marcados y borrados de una vez'), '/padroes/primeiro-uso'],
        ],
      },
    ],
  },
  {
    version: '1.5.0',
    date: '2026-11-15',
    title: T('Painel de indicadores', 'Metrics dashboard', 'Panel de indicadores'),
    summary: T(
      'Padrão novo para montar um painel: uma pergunta no título, até quatro números comparados, um gráfico principal e, escrito, o que pede atenção.',
      'A new pattern for putting a dashboard together: a question in the title, up to four compared numbers, one main chart, and, in words, what needs attention.',
      'Patrón nuevo para armar un panel: una pregunta en el título, hasta cuatro números comparados, un gráfico principal y, por escrito, lo que necesita atención.',
    ),
    groups: [
      {
        name: T('Padrões', 'Patterns', 'Patrones'),
        items: [
          ['novo', T('Painel de indicadores: o uso da documentação, com um período para todos os cartões e a hora do dado', 'Metrics dashboard: docs usage, with one period for every card and how fresh the data is', 'Panel de indicadores: el uso de la documentación, con un período para todas las tarjetas y la hora del dato'), '/padroes/painel'],
          ['novo', T('“Precisa de atenção”: o que pede ação vira frase com link, em vez de ficar escondido numa curva', '“Needs attention”: what calls for action becomes a sentence with a link instead of hiding in a curve', '“Necesita atención”: lo que pide acción se vuelve frase con enlace, en vez de quedar escondido en una curva'), '/padroes/painel'],
        ],
      },
    ],
  },
  {
    version: '1.4.0',
    date: '2026-11-15',
    title: T('Detalhe e edição', 'Detail and editing', 'Detalle y edición'),
    summary: T(
      'Padrão novo para a página de uma coisa só: cabeçalho, abas, propriedades que se editam no lugar e um histórico de quem mudou o quê.',
      'A new pattern for the page of a single thing: header, tabs, properties edited in place, and a history of who changed what.',
      'Patrón nuevo para la página de una sola cosa: encabezado, pestañas, propiedades que se editan en el lugar y un historial de quién cambió qué.',
    ),
    groups: [
      {
        name: T('Padrões', 'Patterns', 'Patrones'),
        items: [
          ['novo', T('Detalhe e edição: a página de uma pessoa com caminho, cabeçalho, abas e resumo', 'Detail and editing: a person’s page with path, header, tabs, and summary', 'Detalle y edición: la página de una persona con ruta, encabezado, pestañas y resumen'), '/padroes/detalhe'],
          ['novo', T('Edição no lugar, um campo por vez, com Enter, Esc e cada mudança no histórico', 'In-place editing, one field at a time, with Enter, Esc, and every change in the history', 'Edición en el lugar, un campo a la vez, con Enter, Esc y cada cambio en el historial'), '/padroes/detalhe'],
        ],
      },
    ],
  },
  {
    version: '1.3.0',
    date: '2026-11-15',
    title: T('Avisos e confirmações', 'Notices and confirmations', 'Avisos y confirmaciones'),
    summary: T(
      'Padrão novo para escolher entre toast, alerta, banner e modal, e para desfazer no lugar de perguntar “tem certeza?”.',
      'A new pattern for choosing between toast, alert, banner, and modal, and for undoing instead of asking “are you sure?”.',
      'Patrón nuevo para elegir entre toast, alerta, banner y modal, y para deshacer en lugar de preguntar “¿estás seguro?”.',
    ),
    groups: [
      {
        name: T('Padrões', 'Patterns', 'Patrones'),
        items: [
          ['novo', T('Avisos e confirmações: um relatório em edição em que cada ação responde com o aviso certo', 'Notices and confirmations: a report being edited where each action answers with the right notice', 'Avisos y confirmaciones: un informe en edición donde cada acción responde con el aviso correcto'), '/padroes/avisos'],
          ['novo', T('Tabela de qual usar: quando, quanto dura e um exemplo de cada meio', 'A which-to-use table: when, how long it lasts, and an example of each means', 'Tabla de cuál usar: cuándo, cuánto dura y un ejemplo de cada medio'), '/padroes/avisos'],
        ],
      },
    ],
  },
  {
    version: '1.2.0',
    date: '2026-11-15',
    title: T('Configurações', 'Settings', 'Configuración'),
    summary: T(
      'Padrão novo para a tela de configurações: o que é leve vale na hora, texto espera o Salvar e o que não volta pede confirmação.',
      'A new pattern for the settings screen: light things apply right away, text waits for Save, and what can’t be undone asks for confirmation.',
      'Patrón nuevo para la pantalla de configuración: lo ligero vale al instante, el texto espera a Guardar y lo que no vuelve pide confirmación.',
    ),
    groups: [
      {
        name: T('Padrões', 'Patterns', 'Patrones'),
        items: [
          ['novo', T('Configurações: seções agrupadas por quem é afetado, ajustes que salvam na hora e perfil com barra de salvar', 'Settings: sections grouped by who’s affected, settings that save right away, and a profile with a save bar', 'Configuración: secciones agrupadas por a quién afecta, ajustes que guardan al instante y perfil con barra de guardar'), '/padroes/configuracoes'],
          ['novo', T('Zona de perigo: excluir só depois de digitar o nome, e aviso ao sair com alterações não salvas', 'Danger zone: delete only after typing the name, and a prompt when leaving with unsaved changes', 'Zona de peligro: eliminar solo después de escribir el nombre, y aviso al salir con cambios sin guardar'), '/padroes/configuracoes'],
        ],
      },
    ],
  },
  {
    version: '1.1.0',
    date: '2026-11-15',
    title: T('Listagem de dados', 'Data list', 'Listado de datos'),
    summary: T(
      'Padrão novo para a tela que todo produto tem: uma tabela que se busca, filtra, ordena e trata em lote, com desfazer no lugar de “tem certeza?”.',
      'A new pattern for the screen every product has: a table you search, filter, sort, and handle in bulk, with undo instead of “are you sure?”.',
      'Patrón nuevo para la pantalla que todo producto tiene: una tabla que se busca, filtra, ordena y trata en lote, con deshacer en lugar de “¿estás seguro?”.',
    ),
    groups: [
      {
        name: T('Padrões', 'Patterns', 'Patrones'),
        items: [
          ['novo', T('Listagem de dados: filtros, ordenação no cabeçalho, seleção por página, barra de lote e ações da linha', 'Data list: filters, header sorting, per-page selection, bulk bar, and row actions', 'Listado de datos: filtros, orden en el encabezado, selección por página, barra de lote y acciones de la fila'), '/padroes/listagem'],
          ['novo', T('Regras, mensagens e acessibilidade de uma lista: o endereço guarda o estado e toda ação tem volta', 'Rules, messages, and accessibility for a list: the URL keeps the state and every action can be undone', 'Reglas, mensajes y accesibilidad de una lista: la dirección guarda el estado y toda acción tiene vuelta atrás'), '/padroes/listagem'],
        ],
      },
    ],
  },
  {
    version: '1.0.0',
    date: '2026-11-15',
    title: T('Lume 1.0', 'Lume 1.0', 'Lume 1.0'),
    summary: T(
      'A primeira versão estável. A API pública está fechada: um nome só muda numa versão maior. Componentes e padrões novos chegam nas versões 1.1, 1.2…, sem mexer no que já existe.',
      'The first stable release. The public API is settled: a name only changes in a major version. New components and patterns arrive in 1.1, 1.2…, without touching what already exists.',
      'La primera versión estable. La API pública está cerrada: un nombre solo cambia en una versión mayor. Los componentes y patrones nuevos llegan en las versiones 1.1, 1.2…, sin tocar lo que ya existe.',
    ),
    groups: [
      {
        name: T('API', 'API', 'API'),
        items: [
          ['melhoria', T('Saem os nomes antigos trocados na 0.39: getHTML() e setHTML(), getValue(), state e set(), go(), element, isCollapsed(), isMobile(), isMobileOpen() e formatter()', 'The old names replaced in 0.39 are gone: getHTML() and setHTML(), getValue(), state and set(), go(), element, isCollapsed(), isMobile(), isMobileOpen(), and formatter()', 'Salen los nombres antiguos cambiados en la 0.39: getHTML() y setHTML(), getValue(), state y set(), go(), element, isCollapsed(), isMobile(), isMobileOpen() y formatter()'), '/recursos/api'],
          ['melhoria', T('shell.layout e palette.isOpen viram propriedades, como collapsed e isOpen nos outros controles', 'shell.layout and palette.isOpen become properties, like collapsed and isOpen on the other controllers', 'shell.layout y palette.isOpen pasan a ser propiedades, como collapsed e isOpen en los otros controles'), '/recursos/api'],
          ['novo', T('A página API explica a regra de versões: correções em 1.0.x, novidades em 1.x e mudança de nome só na 2.0', 'The API page explains the versioning rule: fixes in 1.0.x, new things in 1.x, and renames only in 2.0', 'La página API explica la regla de versiones: correcciones en 1.0.x, novedades en 1.x y cambios de nombre solo en la 2.0'), '/recursos/api'],
        ],
      },
      {
        name: T('React', 'React', 'React'),
        items: [
          ['melhoria', T('ColorPicker sem o onInput antigo: onChange a cada mudança e onCommit ao soltar', 'ColorPicker without the old onInput: onChange on every change and onCommit on release', 'ColorPicker sin el onInput antiguo: onChange en cada cambio y onCommit al soltar'), '/recursos/react'],
        ],
      },
      {
        name: T('Pacote', 'Package', 'Paquete'),
        items: [
          ['novo', T('Endereço fixo da linha estável: lumeui.dev/v/1.0/lume.css e lume.js, com o zip lume-1.0.zip', 'Fixed address for the stable line: lumeui.dev/v/1.0/lume.css and lume.js, with the lume-1.0.zip zip', 'Dirección fija de la línea estable: lumeui.dev/v/1.0/lume.css y lume.js, con el zip lume-1.0.zip'), '/primeiros-passos'],
          ['melhoria', T('As linhas de teste 0.25 a 0.41 saíram do ar', 'The 0.25 to 0.41 test lines are no longer online', 'Las líneas de prueba 0.25 a 0.41 ya no están en línea'), '/primeiros-passos'],
        ],
      },
      {
        name: T('Site', 'Site', 'Sitio'),
        items: [
          ['melhoria', T('Roadmap com estado vazio: as próximas ideias aparecem lá primeiro', 'Roadmap with an empty state: the next ideas show up there first', 'Roadmap con estado vacío: las próximas ideas aparecen allí primero'), '/roadmap'],
        ],
      },
    ],
  },
  {
    version: '0.41.0',
    date: '2026-11-15',
    title: T('Introdução do Storybook', 'Storybook introduction', 'Introducción del Storybook'),
    summary: T(
      'A primeira página do Storybook virou uma capa feita com o próprio Lume: os números do design system, os controles em claro e escuro lado a lado, o índice dos 58 componentes, os princípios e como usar.',
      'The first page of the Storybook became a cover made with Lume itself: the design system’s numbers, the controls in light and dark side by side, an index of the 58 components, the principles, and how to use it.',
      'La primera página del Storybook se convirtió en una portada hecha con el propio Lume: los números del design system, los controles en claro y oscuro lado a lado, el índice de los 58 componentes, los principios y cómo usarlo.',
    ),
    groups: [
      {
        name: T('Storybook', 'Storybook', 'Storybook'),
        items: [
          ['novo', T('Introdução redesenhada com os componentes do Lume: capa, claro e escuro lado a lado, princípios e como usar', 'Introduction redesigned with Lume’s components: cover, light and dark side by side, principles, and how to use it', 'Introducción rediseñada con los componentes de Lume: portada, claro y oscuro lado a lado, principios y cómo usarlo'), '/'],
          ['novo', T('Índice dos componentes por seção, como no site, com um link para a documentação de cada um', 'Component index by section, as on the site, with a link to each one’s documentation', 'Índice de los componentes por sección, como en el sitio, con un enlace a la documentación de cada uno'), '/'],
          ['melhoria', T('A Introdução segue o tema e o idioma da barra de cima do Storybook', 'The Introduction follows the theme and language from the Storybook top bar', 'La Introducción sigue el tema y el idioma de la barra de arriba del Storybook'), '/'],
        ],
      },
    ],
  },
  {
    version: '0.39.0',
    date: '2026-11-14',
    title: T('Revisão da API', 'API review', 'Revisión de la API'),
    summary: T(
      'A API ficou igual em todo lugar antes da 1.0: valor em value e setValue(), estado como propriedade, goTo() para ir a um item e el para o elemento. Os nomes antigos continuam funcionando até a 1.0 e avisam no console qual usar.',
      'The API is now the same everywhere ahead of 1.0: the value in value and setValue(), state as a property, goTo() to go to an item, and el for the element. The old names keep working until 1.0 and say in the console which one to use.',
      'La API quedó igual en todas partes antes de la 1.0: el valor en value y setValue(), el estado como propiedad, goTo() para ir a un elemento y el para el elemento. Los nombres antiguos siguen funcionando hasta la 1.0 y avisan en la consola cuál usar.',
    ),
    groups: [
      {
        name: T('API', 'API', 'API'),
        items: [
          ['melhoria', T('Editor, composer e filtros passam a ler e trocar o valor por value e setValue()', 'Editor, composer, and filters now read and replace the value through value and setValue()', 'Editor, composer y filtros ahora leen y cambian el valor con value y setValue()'), '/recursos/api'],
          ['melhoria', T('Shell com collapsed, mobile e mobileOpen; visualizador com goTo(); voltar ao topo com el', 'Shell with collapsed, mobile, and mobileOpen; viewer with goTo(); back to top with el', 'Shell con collapsed, mobile y mobileOpen; visor con goTo(); volver arriba con el'), '/recursos/api'],
          ['melhoria', T('chartFormatter no lugar de formatter, um nome que diz de onde vem', 'chartFormatter instead of formatter, a name that says where it comes from', 'chartFormatter en lugar de formatter, un nombre que dice de dónde viene'), '/graficos/visao-geral'],
          ['melhoria', T('createMenu, createFilters e createCommandPalette funcionam sem opções; renderNavbarNav não pede mais o createMenu', 'createMenu, createFilters, and createCommandPalette work without options; renderNavbarNav no longer asks for createMenu', 'createMenu, createFilters y createCommandPalette funcionan sin opciones; renderNavbarNav ya no pide createMenu'), '/recursos/api'],
          ['novo', T('Página API com as regras dos controles, os eventos ds:* e o que sai na 1.0', 'API page with the controller rules, the ds:* events, and what is removed in 1.0', 'Página API con las reglas de los controles, los eventos ds:* y lo que sale en la 1.0'), '/recursos/api'],
        ],
      },
      {
        name: T('React', 'React', 'React'),
        items: [
          ['melhoria', T('ColorPicker com onChange a cada mudança e onCommit ao soltar, como o Slider', 'ColorPicker with onChange on every change and onCommit on release, like the Slider', 'ColorPicker con onChange en cada cambio y onCommit al soltar, como el Slider'), '/recursos/react'],
        ],
      },
      {
        name: T('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        items: [
          ['correcao', T('O ponto de novidade da navegação é lido no idioma da página', 'The navigation’s “new” dot is read in the page’s language', 'El punto de novedad de la navegación se lee en el idioma de la página'), '/padroes/app-shell'],
        ],
      },
    ],
  },
  {
    version: '0.38.0',
    date: '2026-11-14',
    title: T('Editor de texto rico', 'Rich text editor', 'Editor de texto enriquecido'),
    summary: T(
      'Escrever com formatação, sem dependências: negrito, itálico, títulos, listas, citação, alinhamento e links, com a barra de ferramentas do Lume e atalhos de Markdown. O que é colado sai limpo, e o HTML guardado só tem as tags que o editor conhece.',
      'Write with formatting, with no dependencies: bold, italic, headings, lists, quotes, alignment, and links, with Lume’s toolbar and Markdown shortcuts. Pasted content comes out clean, and the saved HTML only has the tags the editor knows.',
      'Escribir con formato, sin dependencias: negrita, cursiva, títulos, listas, cita, alineación y enlaces, con la barra de herramientas de Lume y atajos de Markdown. Lo que se pega sale limpio, y el HTML guardado solo tiene las etiquetas que el editor conoce.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T('Editor de texto rico: barra completa ou mínima, sem contorno, desativado, link com ⌘K e envio no formulário', 'Rich text editor: full or minimal toolbar, borderless, disabled, links with ⌘K, and form submission', 'Editor de texto enriquecido: barra completa o mínima, sin contorno, desactivado, enlace con ⌘K y envío en el formulario'), '/componentes/editor-de-texto-rico'],
          ['novo', T('createEditor e sanitizeHtml na API; RichTextEditor no React', 'createEditor and sanitizeHtml in the API; RichTextEditor in React', 'createEditor y sanitizeHtml en la API; RichTextEditor en React'), '/recursos/api'],
          ['melhoria', T('A busca ⌘K não abre quando um componente já usa o atalho', 'The ⌘K search doesn’t open when a component already uses the shortcut', 'La búsqueda ⌘K no se abre cuando un componente ya usa el atajo'), '/padroes/busca'],
        ],
      },
      {
        name: T('Ícones', 'Icons', 'Íconos'),
        items: [
          ['novo', T('2 ícones novos: heading e quote', '2 new icons: heading and quote', '2 íconos nuevos: heading y quote'), '/fundamentos/icones'],
        ],
      },
    ],
  },
  {
    version: '0.37.0',
    date: '2026-11-14',
    title: T('Lista arrastável e kanban', 'Sortable list and kanban', 'Lista ordenable y kanban'),
    summary: T(
      'Mudar a ordem e o lugar das coisas, com o mouse, o toque ou o teclado: o item deixa um encaixe onde vai cair, cada passo é anunciado e Esc desfaz. O kanban é a mesma lista em colunas que trocam cartões.',
      'Change the order and place of things, with the mouse, touch, or keyboard: the item leaves a slot where it will land, each step is announced, and Esc undoes it. The kanban is the same list in columns that exchange cards.',
      'Cambiar el orden y el lugar de las cosas, con el ratón, el toque o el teclado: el elemento deja un hueco donde va a caer, cada paso se anuncia y Esc lo deshace. El kanban es la misma lista en columnas que intercambian tarjetas.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T('Lista arrastável: com alça ou sem, em caixas ou em linhas, na vertical ou lado a lado, e rolagem automática perto da borda', 'Sortable list: with or without a handle, in boxes or rows, vertical or side by side, and auto-scroll near the edge', 'Lista ordenable: con o sin agarre, en cajas o en filas, vertical o lado a lado, y desplazamiento automático cerca del borde'), '/componentes/lista-arrastavel'],
          ['novo', T('Kanban: colunas que trocam cartões, número de cada coluna, coluna vazia e cartão com alça', 'Kanban: columns that exchange cards, each column’s count, empty column, and cards with a handle', 'Kanban: columnas que intercambian tarjetas, número de cada columna, columna vacía y tarjeta con agarre'), '/componentes/kanban'],
          ['novo', T('createSortable e createKanban na API; SortableList e Kanban no React', 'createSortable and createKanban in the API; SortableList and Kanban in React', 'createSortable y createKanban en la API; SortableList y Kanban en React'), '/recursos/api'],
        ],
      },
      {
        name: T('Ícones', 'Icons', 'Íconos'),
        items: [
          ['novo', T('2 ícones novos: grip-vertical e kanban', '2 new icons: grip-vertical and kanban', '2 íconos nuevos: grip-vertical y kanban'), '/fundamentos/icones'],
        ],
      },
    ],
  },
  {
    version: '0.36.0',
    date: '2026-11-14',
    title: T('Visualizador de imagem', 'Image viewer', 'Visor de imágenes'),
    summary: T(
      'A imagem grande por cima da página, com zoom no ponto do cursor, arrastar, pinça no celular e as outras da galeria. Os exemplos usam capturas do próprio Lume.',
      'The large image over the page, with zoom at the cursor, panning, pinch on phones, and the rest of the gallery. The examples use captures of Lume itself.',
      'La imagen grande sobre la página, con zoom en el punto del cursor, arrastre, pellizco en el celular y las demás de la galería. Los ejemplos usan capturas del propio Lume.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T('Visualizador de imagem: galeria por links com data-ds-viewer, zoom até 4×, arrastar, teclado, legenda, carregando e erro', 'Image viewer: galleries from links with data-ds-viewer, zoom up to 4×, panning, keyboard, caption, loading, and error', 'Visor de imágenes: galerías con enlaces data-ds-viewer, zoom hasta 4×, arrastre, teclado, leyenda, carga y error'), '/componentes/visualizador-de-imagem'],
          ['novo', T('openImageViewer e mountImageViewer na API; ImageGallery no React', 'openImageViewer and mountImageViewer in the API; ImageGallery in React', 'openImageViewer y mountImageViewer en la API; ImageGallery en React'), '/recursos/api'],
        ],
      },
      {
        name: T('Ícones', 'Icons', 'Íconos'),
        items: [
          ['novo', T('3 ícones novos: zoom-in, zoom-out e maximize', '3 new icons: zoom-in, zoom-out, and maximize', '3 íconos nuevos: zoom-in, zoom-out y maximize'), '/fundamentos/icones'],
        ],
      },
    ],
  },
  {
    version: '0.35.0',
    date: '2026-11-14',
    title: T('Banner de anúncio e central de notificações', 'Announcement banner and notification center', 'Banner de anuncio y centro de notificaciones'),
    summary: T(
      'Recados para todo mundo e para cada pessoa: uma faixa no topo do app que lembra quem a fechou, e o sino com a lista do que aconteceu, lidas e não lidas.',
      'Messages for everyone and for each person: a strip at the top of the app that remembers who closed it, and the bell with the list of what happened, read and unread.',
      'Mensajes para todos y para cada persona: una franja arriba de la app que recuerda quién la cerró, y la campana con la lista de lo que pasó, leídas y sin leer.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T('Banner de anúncio: cinco tons, link, fechar e lembrar no navegador, e colado no topo do app', 'Announcement banner: five tones, a link, close and remember in the browser, and flush at the top of the app', 'Banner de anuncio: cinco tonos, enlace, cerrar y recordar en el navegador, y pegado arriba de la app'), '/componentes/banner-de-anuncio'],
          ['novo', T('Central de notificações: o sino com o número, lidas e não lidas, marcar todas, tempo relativo e anúncio das que chegam', 'Notification center: the bell with the count, read and unread, mark all, relative time, and announcing new arrivals', 'Centro de notificaciones: la campana con el número, leídas y sin leer, marcar todas, tiempo relativo y aviso de las que llegan'), '/componentes/central-de-notificacoes'],
          ['novo', T('createBanner, createNotificationCenter e relativeTime na API; Banner e NotificationCenter no React', 'createBanner, createNotificationCenter, and relativeTime in the API; Banner and NotificationCenter in React', 'createBanner, createNotificationCenter y relativeTime en la API; Banner y NotificationCenter en React'), '/recursos/api'],
        ],
      },
      {
        name: T('Ícones', 'Icons', 'Íconos'),
        items: [
          ['novo', T('1 ícone novo: banner', '1 new icon: banner', '1 ícono nuevo: banner'), '/fundamentos/icones'],
        ],
      },
    ],
  },
  {
    version: '0.34.0',
    date: '2026-11-14',
    title: T('Divisor, link e progresso circular', 'Divider, link, and circular progress', 'Divisor, enlace y progreso circular'),
    summary: T(
      'Três peças pequenas que faltavam: o divisor ganhou vertical e rótulo, o link ganhou forma solta e aviso de link externo, e o progresso agora também vem num anel.',
      'Three small pieces that were missing: the divider gained vertical and labeled forms, the link gained a standalone form and an external-link cue, and progress now also comes as a ring.',
      'Tres piezas pequeñas que faltaban: el divisor ganó vertical y etiqueta, el enlace ganó forma suelta y aviso de enlace externo, y el progreso ahora también viene en un anillo.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T('Divisor: página própria, com vertical, rótulo no meio ou no começo e esmaecido', 'Divider: its own page, with vertical, label in the middle or at the start, and faded', 'Divisor: página propia, con vertical, etiqueta en el medio o al inicio y difuminado'), '/componentes/divisor'],
          ['novo', T('Link: no texto, solto com seta, apagado e externo, com ícone e aviso de nova aba para o leitor de tela', 'Link: inline, standalone with an arrow, muted, and external, with an icon and a new-tab notice for screen readers', 'Enlace: en el texto, suelto con flecha, apagado y externo, con ícono y aviso de pestaña nueva para el lector de pantalla'), '/componentes/link'],
          ['novo', T('Progresso circular: três tamanhos, os tons da barra e indeterminado', 'Circular progress: three sizes, the bar’s tones, and indeterminate', 'Progreso circular: tres tamaños, los tonos de la barra e indeterminado'), '/componentes/progresso-circular'],
          ['novo', T('progressRingHtml e setProgressRing na API; Link, Divider e ProgressRing no React', 'progressRingHtml and setProgressRing in the API; Link, Divider, and ProgressRing in React', 'progressRingHtml y setProgressRing en la API; Link, Divider y ProgressRing en React'), '/recursos/api'],
          ['melhoria', T('O divisor perdeu a margem padrão do navegador: o espaço vem do contêiner', 'The divider dropped the browser’s default margin: spacing comes from the container', 'El divisor perdió el margen predeterminado del navegador: el espacio viene del contenedor'), '/componentes/divisor'],
        ],
      },
      {
        name: T('Ícones', 'Icons', 'Íconos'),
        items: [
          ['novo', T('2 ícones novos: divisor e progresso circular', '2 new icons: divider and circular progress', '2 íconos nuevos: divisor y progreso circular'), '/fundamentos/icones'],
        ],
      },
    ],
  },
  {
    version: '0.33.0',
    date: '2026-11-14',
    title: T('Avaliação e barra de ferramentas', 'Rating and toolbar', 'Valoración y barra de herramientas'),
    summary: T(
      'Estrelas para dar nota ou mostrar a média, com meia estrela, e a barra de ferramentas: botões de ícone agrupados, com um Tab só e setas entre eles.',
      'Stars to give a score or show the average, with half stars, and the toolbar: grouped icon buttons, with a single Tab stop and arrow keys between them.',
      'Estrellas para calificar o mostrar el promedio, con media estrella, y la barra de herramientas: botones de ícono agrupados, con un solo Tab y flechas entre ellos.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T('Avaliação: dar nota com rádios nativos (o formulário envia o valor) e só mostrar, com meia estrela, o número e quantas notas', 'Rating: give a score with native radios (the form sends the value) and display only, with half stars, the number, and how many scores', 'Valoración: calificar con radios nativos (el formulario envía el valor) y solo mostrar, con media estrella, el número y cuántas notas'), '/componentes/avaliacao'],
          ['novo', T('Barra de ferramentas: grupos, separador, botões que ligam e desligam, grupo de um por vez e vertical', 'Toolbar: groups, separator, toggle buttons, one-at-a-time groups, and vertical', 'Barra de herramientas: grupos, separador, botones que se activan y desactivan, grupo de uno a la vez y vertical'), '/componentes/barra-de-ferramentas'],
          ['novo', T('createRating, ratingHtml e createToolbar na API; Rating, RatingDisplay e Toolbar no React', 'createRating, ratingHtml, and createToolbar in the API; Rating, RatingDisplay, and Toolbar in React', 'createRating, ratingHtml y createToolbar en la API; Rating, RatingDisplay y Toolbar en React'), '/recursos/api'],
        ],
      },
      {
        name: T('Ícones', 'Icons', 'Íconos'),
        items: [
          ['novo', T('11 ícones novos: negrito, itálico, sublinhado, tachado, os três alinhamentos, lista numerada, desfazer, refazer e barra de ferramentas', '11 new icons: bold, italic, underline, strikethrough, the three alignments, numbered list, undo, redo, and toolbar', '11 íconos nuevos: negrita, cursiva, subrayado, tachado, las tres alineaciones, lista numerada, deshacer, rehacer y barra de herramientas'), '/fundamentos/icones'],
        ],
      },
    ],
  },
  {
    version: '0.32.0',
    date: '2026-11-14',
    title: T('Painéis redimensionáveis', 'Resizable panels', 'Paneles redimensionables'),
    summary: T(
      'Divida uma área em partes que a pessoa ajusta arrastando a divisória: lado a lado ou uma sobre a outra, com limites, painel que fecha e tamanho guardado.',
      'Split an area into parts people adjust by dragging the divider: side by side or stacked, with limits, collapsible panels, and a saved size.',
      'Divide un área en partes que la persona ajusta arrastrando el divisor: lado a lado o una sobre otra, con límites, panel plegable y tamaño guardado.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T('Painéis redimensionáveis: arrastar, setas, Home, End e Enter, limites em % ou px, painéis dentro de painéis e alça à vista', 'Resizable panels: drag, arrow keys, Home, End, and Enter, limits in % or px, panels inside panels, and a visible grip', 'Paneles redimensionables: arrastrar, flechas, Home, End y Enter, límites en % o px, paneles dentro de paneles y asa a la vista'), '/componentes/paineis-redimensionaveis'],
          ['novo', T('createResizable na API; ResizablePanels e ResizablePanel no React', 'createResizable in the API; ResizablePanels and ResizablePanel in React', 'createResizable en la API; ResizablePanels y ResizablePanel en React'), '/recursos/api'],
        ],
      },
    ],
  },
  {
    version: '0.31.0',
    date: '2026-11-14',
    title: T('Seletor de cor', 'Color picker', 'Selector de color'),
    summary: T(
      'Escolha uma cor livre ou da paleta: área de saturação e brilho, matiz, hexadecimal e amostras. Vem solto ou num campo que abre o seletor.',
      'Pick a free color or one from the palette: saturation and brightness area, hue, hex, and swatches. It comes standalone or in a field that opens the picker.',
      'Elige un color libre o de la paleta: área de saturación y brillo, matiz, hexadecimal y muestras. Viene suelto o en un campo que abre el selector.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T('Seletor de cor: solto ou no campo, com teclado nas duas alças, hexadecimal de 3 ou 6 dígitos e amostras com nome', 'Color picker: standalone or in a field, with keyboard on both thumbs, 3- or 6-digit hex, and named swatches', 'Selector de color: suelto o en el campo, con teclado en los dos tiradores, hexadecimal de 3 o 6 dígitos y muestras con nombre'), '/componentes/seletor-de-cor'],
          ['novo', T('createColorPicker, createColorField e parseHex na API; ColorPicker e ColorField no React', 'createColorPicker, createColorField, and parseHex in the API; ColorPicker and ColorField in React', 'createColorPicker, createColorField y parseHex en la API; ColorPicker y ColorField en React'), '/recursos/api'],
        ],
      },
    ],
  },
  {
    version: '0.30.0',
    date: '2026-11-14',
    title: T('Carrossel', 'Carousel', 'Carrusel'),
    summary: T(
      'Destaques e galerias que passam um por vez, com setas, pontos, teclado e arrastar no toque. Passa sozinho só com botão de pausa.',
      'Highlights and galleries that go by one at a time, with arrows, dots, keyboard, and touch swipe. It only plays on its own with a pause button.',
      'Destacados y galerías que pasan de a uno, con flechas, puntos, teclado y deslizar en pantallas táctiles. Solo pasa solo con un botón de pausa.',
    ),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['novo', T('Carrossel: um ou vários por vista, ponta do próximo à vista, volta ao início e passagem automática com pausa', 'Carousel: one or several per view, the next one’s edge in view, loop, and autoplay with pause', 'Carrusel: uno o varios por vista, borde del siguiente a la vista, vuelta al inicio y paso automático con pausa'), '/componentes/carrossel'],
          ['novo', T('createCarousel na API e Carousel no React', 'createCarousel in the API and Carousel in React', 'createCarousel en la API y Carousel en React'), '/recursos/api'],
        ],
      },
      {
        name: T('Ícones', 'Icons', 'Íconos'),
        items: [
          ['novo', T('carousel e pause', 'carousel and pause', 'carousel y pause'), '/fundamentos/icones'],
        ],
      },
    ],
  },
  {
    version: '0.29.1',
    date: '2026-11-14',
    title: T('Roadmap dos novos componentes', 'Roadmap for new components', 'Roadmap de los nuevos componentes'),
    summary: T(
      'O roadmap ganhou nove etapas, da 0.30 à 0.38, com os componentes populares que ainda faltam: de carrossel e seletor de cor a kanban e editor de texto rico.',
      'The roadmap gained nine stages, from 0.30 to 0.38, with the popular components still missing: from carousel and color picker to kanban and a rich text editor.',
      'El roadmap ganó nueve etapas, de la 0.30 a la 0.38, con los componentes populares que aún faltan: de carrusel y selector de color a kanban y editor de texto enriquecido.',
    ),
    groups: [
      {
        name: T('Roadmap', 'Roadmap', 'Roadmap'),
        items: [
          ['novo', T('Etapas 0.30 a 0.38: um componente (ou dois pequenos) por versão', 'Stages 0.30 to 0.38: one component (or two small ones) per version', 'Etapas 0.30 a 0.38: un componente (o dos pequeños) por versión'), '/roadmap'],
          ['melhoria', T('Carrossel, avaliação, seletor de cor e editor de texto rico saíram de “Fora, por enquanto” e entraram nas etapas', 'Carousel, rating, color picker, and rich text editor moved from “Left out for now” into the stages', 'Carrusel, valoración, selector de color y editor de texto enriquecido salieron de “Fuera, por ahora” y entraron en las etapas'), '/roadmap'],
        ],
      },
    ],
  },
  {
    version: '0.29.0',
    date: '2026-11-13',
    title: T('React: conteúdo, gráficos e app shell', 'React: content, charts, and app shell', 'React: contenido, gráficos y app shell'),
    summary: T(
      'Os 44 componentes já têm versão React: chegam Tabela, Calendário, Bloco de código, os gráficos e o app shell. O Storybook ganhou a seção React.',
      'All 44 components now have a React version: Table, Calendar, Code block, the charts, and the app shell arrive. Storybook gained a React section.',
      'Los 44 componentes ya tienen versión React: llegan Tabla, Calendario, Bloque de código, los gráficos y el app shell. Storybook ganó la sección React.',
    ),
    groups: [
      {
        name: T('React', 'React', 'React'),
        items: [
          ['novo', T('Tabela com ordenação e seleção no estado, Calendário e Bloco de código', 'Table with sorting and selection in state, Calendar, and Code block', 'Tabla con orden y selección en el estado, Calendario y Bloque de código'), '/recursos/react'],
          ['novo', T('Gráficos: barras, linhas, rosca, heatmap, calendário, dispersão e os indicadores', 'Charts: bar, line, donut, heatmap, calendar, scatter, and the indicators', 'Gráficos: barras, líneas, dona, heatmap, calendario, dispersión y los indicadores'), '/recursos/react'],
          ['novo', T('AppShell, ThemeToggle e useTheme', 'AppShell, ThemeToggle, and useTheme', 'AppShell, ThemeToggle y useTheme'), '/recursos/react'],
          ['novo', T('Storybook: seção React, com as histórias em .tsx', 'Storybook: a React section, with stories in .tsx', 'Storybook: sección React, con las historias en .tsx'), '/recursos/react'],
        ],
      },
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['melhoria', T('App shell: createShell ganhou destroy(), para apps que montam e desmontam o shell', 'App shell: createShell gained destroy(), for apps that mount and unmount the shell', 'App shell: createShell ganó destroy(), para apps que montan y desmontan el shell'), '/padroes/app-shell'],
        ],
      },
    ],
  },
  {
    version: '0.28.0',
    date: '2026-11-13',
    title: T('React: navegação e camadas', 'React: navigation and layers', 'React: navegación y capas'),
    summary: T(
      'Os 15 componentes que abrem, fecham e trocam de estado, agora em React: de Abas e Paginação a Modal, Popover e Toast.',
      'The 15 components that open, close, and change state, now in React: from Tabs and Pagination to Modal, Popover, and Toast.',
      'Los 15 componentes que abren, cierran y cambian de estado, ahora en React: de Pestañas y Paginación a Modal, Popover y Toast.',
    ),
    groups: [
      {
        name: T('React', 'React', 'React'),
        items: [
          ['novo', T('Navegação: Menu, Abas, Controle segmentado, Paginação, Stepper, Acordeão, Árvore, Barra de rolagem e Voltar ao topo', 'Navigation: Menu, Tabs, Segmented control, Pagination, Stepper, Accordion, Tree, Scrollbar, and Back to top', 'Navegación: Menú, Pestañas, Control segmentado, Paginación, Stepper, Acordeón, Árbol, Barra de desplazamiento y Volver arriba'), '/recursos/react'],
          ['novo', T('Camadas: Modal, Gaveta lateral, Popover, Menu de contexto, Tooltip e Toast, abertos e fechados pelo estado', 'Layers: Modal, Drawer, Popover, Context menu, Tooltip, and Toast, opened and closed through state', 'Capas: Modal, Panel lateral, Popover, Menú contextual, Tooltip y Toast, abiertos y cerrados por el estado'), '/recursos/react'],
          ['novo', T('Menu, Popover e Menu de contexto se ligam a qualquer gatilho por triggerRef', 'Menu, Popover, and Context menu attach to any trigger through triggerRef', 'Menú, Popover y Menú contextual se conectan a cualquier disparador con triggerRef'), '/recursos/react'],
        ],
      },
    ],
  },
  {
    version: '0.27.0',
    date: '2026-11-13',
    title: T('React: formulários', 'React: forms', 'React: formularios'),
    summary: T(
      'Os 11 controles de formulário em React, com o valor no estado do React, e o Form com a validação do Lume.',
      'The 11 form controls in React, with the value in React state, and Form with Lume’s validation.',
      'Los 11 controles de formulario en React, con el valor en el estado de React, y Form con la validación de Lume.',
    ),
    groups: [
      {
        name: T('React', 'React', 'React'),
        items: [
          ['novo', T('Campo de texto, Seleção, Checkbox e radio, Switch, Seletor de data, Seletor de horário, Campo numérico, Slider, Campo de tags, Upload e Código de verificação', 'Text field, Select, Checkbox and radio, Switch, Date picker, Time picker, Number field, Slider, Tag field, Upload, and Verification code', 'Campo de texto, Selección, Checkbox y radio, Switch, Selector de fecha, Selector de hora, Campo numérico, Slider, Campo de etiquetas, Carga y Código de verificación'), '/recursos/react'],
          ['novo', T('Field liga rótulo, dica, erro e contador a qualquer controle', 'Field wires label, hint, error and counter to any control', 'Field conecta etiqueta, pista, error y contador a cualquier control'), '/recursos/react'],
          ['novo', T('Form: a validação do Lume, com regras próprias e o resumo de erros', 'Form: Lume’s validation, with custom rules and the error summary', 'Form: la validación de Lume, con reglas propias y el resumen de errores'), '/recursos/react'],
        ],
      },
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          ['correcao', T('Upload: destroy() tira a área e a lista que o componente criou', 'Upload: destroy() removes the area and list the component created', 'Carga: destroy() quita el área y la lista que creó el componente'), '/componentes/upload'],
        ],
      },
    ],
  },
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
          ['novo', T('size.control.compact, de 36 px: a escala agora é 28, 32, 36, 40 e 48', 'size.control.compact, 36 px: the scale is now 28, 32, 36, 40, and 48', 'size.control.compact, de 36 px: la escala ahora es 28, 32, 36, 40 y 48'), '/componentes/botao'],
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
            'Nome novo em todo lugar: site, componentes e tokens exportados',
            'The new name everywhere: site, components, and exported tokens',
            'El nombre nuevo en todas partes: sitio, componentes y tokens exportados',
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
    ],
  },
  {
    version: '0.7.0',
    date: '2026-11-01',
    title: T('Idiomas', 'Languages', 'Idiomas'),
    summary: T(
      'O Lume passou a falar português, inglês e espanhol: o site inteiro e os textos dos componentes. O idioma segue o do sistema, troca na topbar e fica salvo.',
      'Lume now speaks Portuguese, English, and Spanish: the whole site and the component text. The language follows the system, switches from the topbar, and is remembered.',
      'Lume ahora habla portugués, inglés y español: todo el sitio y los textos de los componentes. El idioma sigue al del sistema, se cambia en la topbar y queda guardado.',
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
            'Chip sem seta fica com as duas pontas iguais; o recuo menor vale só do lado do ícone, do ✓ ou da seta',
            'A chip without an arrow has equal ends; the tighter padding applies only on the icon, ✓, or arrow side',
            'Un chip sin flecha tiene los dos extremos iguales; el relleno menor vale solo del lado del ícono, el ✓ o la flecha',
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
      'O que o time precisa para adotar e evoluir o Lume: guia de acessibilidade com as pendências à vista e o caminho de uma contribuição.',
      'What the team needs to adopt and evolve Lume: an accessibility guide with open issues in plain sight and the path for a contribution.',
      'Lo que el equipo necesita para adoptar y hacer crecer Lume: una guía de accesibilidad con los pendientes a la vista y el camino de una contribución.',
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
