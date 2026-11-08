/**
 * Próximos passos do Lume — fonte da página Roadmap e do card de roadmap do Início.
 * Textos em T(pt-BR, en, es); stages() e leftOut() devolvem tudo no idioma atual.
 * Item com doc: true já existe no DS e só ganha página própria. Os números de versão são a ordem de hoje e podem andar.
 */
import { tr } from '../ds/js/i18n.js';

const T = (pt, en, es) => ({ 'pt-BR': pt, en, es });

const NEXT = T('Próximo', 'Next', 'Próximo');
const PLANNED = T('Planejado', 'Planned', 'Planificado');
const GOAL = T('Meta', 'Goal', 'Meta');

const STAGES = [
  {
    version: '0.14',
    group: 'components',
    tone: 'brand',
    status: NEXT,
    title: T('Formulários completos', 'Complete forms', 'Formularios completos'),
    text: T(
      'O que um formulário costuma pedir além de texto e seleção.',
      'What forms usually need beyond text and select.',
      'Lo que un formulario suele pedir además de texto y selector.',
    ),
    items: [
      { name: T('Seletor de data e período', 'Date and range picker', 'Selector de fecha y período'), text: T('Um campo que abre o calendário, para um dia ou um intervalo.', 'A field that opens the calendar, for one day or a range.', 'Un campo que abre el calendario, para un día o un intervalo.') },
      { name: T('Seletor de horário', 'Time picker', 'Selector de hora'), text: T('Horas e minutos, no formato do idioma.', 'Hours and minutes, in the locale’s format.', 'Horas y minutos, en el formato del idioma.') },
      { name: T('Slider', 'Slider', 'Slider'), text: T('Um valor ou uma faixa dentro de um intervalo.', 'A value or a range within limits.', 'Un valor o un rango dentro de un intervalo.') },
      { name: T('Campo numérico', 'Number field', 'Campo numérico'), text: T('Número com botões de − e +, limites e passo.', 'A number with − and + buttons, limits, and a step.', 'Número con botones − y +, límites y paso.') },
      { name: T('Upload de arquivo', 'File upload', 'Carga de archivos'), text: T('Arrastar ou escolher, com progresso e erro por arquivo.', 'Drag or browse, with progress and errors per file.', 'Arrastrar o elegir, con progreso y error por archivo.') },
      { name: T('Campo de tags', 'Tag field', 'Campo de etiquetas'), text: T('Vários valores livres dentro de um campo só.', 'Several free values inside one field.', 'Varios valores libres dentro de un solo campo.') },
      { name: T('Código de verificação', 'Verification code', 'Código de verificación'), text: T('Um dígito por casa, para login em duas etapas.', 'One digit per box, for two-step sign-in.', 'Un dígito por casilla, para el inicio de sesión en dos pasos.') },
    ],
  },
  {
    version: '0.15',
    group: 'components',
    tone: 'neutral',
    status: PLANNED,
    title: T('Navegação e estrutura', 'Navigation and structure', 'Navegación y estructura'),
    text: T(
      'Para percorrer listas longas, etapas e hierarquias.',
      'For moving through long lists, steps, and hierarchies.',
      'Para recorrer listas largas, etapas y jerarquías.',
    ),
    items: [
      { name: T('Paginação', 'Pagination', 'Paginación'), text: T('Páginas de uma lista ou tabela, com total e itens por página.', 'Pages of a list or table, with a total and items per page.', 'Páginas de una lista o tabla, con total y elementos por página.') },
      { name: T('Acordeão', 'Accordion', 'Acordeón'), text: T('Seções que abrem e fecham no lugar.', 'Sections that open and close in place.', 'Secciones que se abren y se cierran en su lugar.') },
      { name: T('Stepper', 'Stepper', 'Stepper'), text: T('As etapas de um fluxo e onde a pessoa está.', 'The steps of a flow and where the person is.', 'Las etapas de un flujo y dónde está la persona.') },
      { name: T('Árvore', 'Tree', 'Árbol'), text: T('Pastas e níveis aninhados, com teclado.', 'Folders and nested levels, with keyboard support.', 'Carpetas y niveles anidados, con teclado.') },
      { name: T('Breadcrumb', 'Breadcrumb', 'Breadcrumb'), text: T('O caminho até a página atual.', 'The path to the current page.', 'El camino hasta la página actual.'), doc: true },
      { name: T('Controle segmentado', 'Segmented control', 'Control segmentado'), text: T('Poucas opções lado a lado, uma escolhida.', 'A few options side by side, one selected.', 'Pocas opciones lado a lado, una elegida.'), doc: true },
    ],
  },
  {
    version: '0.16',
    group: 'components',
    tone: 'neutral',
    status: PLANNED,
    title: T('Camadas', 'Overlays', 'Capas'),
    text: T(
      'Conteúdo por cima da tela, entre o Tooltip e o Modal.',
      'Content above the screen, between Tooltip and Modal.',
      'Contenido sobre la pantalla, entre el Tooltip y el Modal.',
    ),
    items: [
      { name: T('Popover', 'Popover', 'Popover'), text: T('Conteúdo livre que abre ao clicar, preso ao gatilho.', 'Free content that opens on click, attached to its trigger.', 'Contenido libre que se abre al hacer clic, unido a su disparador.') },
      { name: T('Gaveta lateral', 'Drawer', 'Panel lateral'), text: T('Detalhes ou uma tarefa sem sair da página.', 'Details or a task without leaving the page.', 'Detalles o una tarea sin salir de la página.') },
      { name: T('Menu de contexto', 'Context menu', 'Menú contextual'), text: T('Ações do item, com o botão direito ou o teclado.', 'Item actions, with a right-click or the keyboard.', 'Acciones del elemento, con clic derecho o teclado.') },
    ],
  },
  {
    version: '0.17',
    group: 'components',
    tone: 'neutral',
    status: PLANNED,
    title: T('Feedback e carregamento', 'Feedback and loading', 'Feedback y carga'),
    text: T(
      'O que dizer enquanto algo acontece ou precisa de atenção.',
      'What to say while something happens or needs attention.',
      'Qué decir mientras algo sucede o necesita atención.',
    ),
    items: [
      { name: T('Barra de progresso', 'Progress bar', 'Barra de progreso'), text: T('Quanto de uma tarefa já foi feito.', 'How much of a task is done.', 'Cuánto de una tarea ya está hecho.') },
      { name: T('Spinner', 'Spinner', 'Spinner'), text: T('Espera curta, também dentro de botões.', 'A short wait, inside buttons too.', 'Espera corta, también dentro de botones.') },
      { name: T('Skeleton', 'Skeleton', 'Skeleton'), text: T('A forma do conteúdo antes de ele chegar.', 'The shape of the content before it arrives.', 'La forma del contenido antes de que llegue.') },
      { name: T('Alerta', 'Alert', 'Alerta'), text: T('Uma mensagem na própria página, nos tons de status.', 'A message on the page itself, in the status tones.', 'Un mensaje en la propia página, en los tonos de estado.'), doc: true },
    ],
  },
  {
    version: '0.18',
    group: 'components',
    tone: 'neutral',
    status: PLANNED,
    title: T('Conteúdo', 'Content', 'Contenido'),
    text: T(
      'Peças para apresentar informação.',
      'Pieces for presenting information.',
      'Piezas para presentar información.',
    ),
    items: [
      { name: T('Linha do tempo', 'Timeline', 'Línea de tiempo'), text: T('Eventos em ordem, como um histórico de atividade.', 'Events in order, like an activity history.', 'Eventos en orden, como un historial de actividad.') },
      { name: T('Lista de definições', 'Description list', 'Lista de definiciones'), text: T('Pares de rótulo e valor, como numa ficha de detalhes.', 'Label and value pairs, as on a details sheet.', 'Pares de etiqueta y valor, como en una ficha de detalles.') },
      { name: T('Card', 'Card', 'Tarjeta'), text: T('A superfície básica para agrupar conteúdo.', 'The basic surface for grouping content.', 'La superficie básica para agrupar contenido.'), doc: true },
      { name: T('Bloco de código', 'Code block', 'Bloque de código'), text: T('Código com botão de copiar.', 'Code with a copy button.', 'Código con botón de copiar.'), doc: true },
      { name: T('Tecla', 'Keyboard key', 'Tecla'), text: T('Atalhos de teclado no meio do texto.', 'Keyboard shortcuts within text.', 'Atajos de teclado en medio del texto.'), doc: true },
    ],
  },
  {
    version: '0.19',
    group: 'release',
    tone: 'neutral',
    status: PLANNED,
    title: T('Refino', 'Refinement', 'Refinamiento'),
    text: T('Uma revisão de tudo o que já existe.', 'A review of everything that already exists.', 'Una revisión de todo lo que ya existe.'),
    items: [
      { name: T('Revisão visual', 'Visual review', 'Revisión visual'), text: T('Componente por componente, em todos os temas.', 'Component by component, in every theme.', 'Componente por componente, en todos los temas.') },
      { name: T('Estados', 'States', 'Estados'), text: T('Todos os estados acessíveis com data-state.', 'Every state reachable with data-state.', 'Todos los estados accesibles con data-state.') },
    ],
  },
  {
    version: '0.20',
    group: 'release',
    tone: 'neutral',
    status: PLANNED,
    title: T('Plugin do Figma', 'Figma plugin', 'Plugin de Figma'),
    text: T('Gerado de novo quando a plataforma estiver definida.', 'Regenerated once the platform is settled.', 'Generado de nuevo cuando la plataforma esté definida.'),
    items: [
      { name: T('Atualização', 'Update', 'Actualización'), text: T('Temas, navbar, fontes e logotipo atuais.', 'Current themes, navbar, fonts, and logo.', 'Temas, navbar, fuentes y logotipo actuales.') },
      { name: T('Componentes novos', 'New components', 'Componentes nuevos'), text: T('Tudo o que entrar até aqui.', 'Everything added up to this point.', 'Todo lo que se agregue hasta aquí.') },
    ],
  },
  {
    version: '0.21',
    group: 'release',
    tone: 'neutral',
    status: PLANNED,
    title: T('Testes e API', 'Tests and API', 'Pruebas y API'),
    text: T('Definir o que é público e proteger isso.', 'Define what’s public and protect it.', 'Definir qué es público y protegerlo.'),
    items: [
      { name: T('Testes visuais', 'Visual tests', 'Pruebas visuales'), text: T('Sem dependências, usando os estados.', 'With no dependencies, using the states.', 'Sin dependencias, usando los estados.') },
      { name: T('API pública', 'Public API', 'API pública'), text: T('O que é público e uma convenção única no JavaScript.', 'What’s public and a single JavaScript convention.', 'Qué es público y una convención única en JavaScript.') },
    ],
  },
  {
    version: '0.22',
    group: 'release',
    tone: 'neutral',
    status: PLANNED,
    title: T('Pacote', 'Package', 'Paquete'),
    text: T('Usar o Lume em outros projetos sem copiar arquivos.', 'Use Lume in other projects without copying files.', 'Usar Lume en otros proyectos sin copiar archivos.'),
    items: [
      { name: T('Build', 'Build', 'Build'), text: T('CSS único e uma versão só para tudo.', 'A single CSS file and one version for everything.', 'Un único CSS y una sola versión para todo.') },
      { name: T('Instalação', 'Installation', 'Instalación'), text: T('Pelo GitHub, com licença definida.', 'From GitHub, with a defined license.', 'Desde GitHub, con licencia definida.') },
    ],
  },
  {
    version: '1.0',
    group: 'release',
    tone: 'success',
    status: GOAL,
    title: T('Estável', 'Stable', 'Estable'),
    text: T('API congelada e pronta para escalar.', 'A frozen API, ready to scale.', 'API congelada y lista para escalar.'),
    items: [
      { name: T('Compatibilidade', 'Compatibility', 'Compatibilidad'), text: T('Mudança que quebra só em versão maior, com guia de migração.', 'Breaking changes only in major versions, with a migration guide.', 'Cambios que rompen solo en versiones mayores, con guía de migración.') },
    ],
  },
];

const LEFT_OUT = [
  { name: T('Carrossel', 'Carousel', 'Carrusel'), text: T('Popular, mas esconde conteúdo; uma grade costuma resolver melhor.', 'Popular, but it hides content; a grid usually works better.', 'Popular, pero esconde contenido; una cuadrícula suele funcionar mejor.') },
  { name: T('Avaliação com estrelas', 'Star rating', 'Valoración con estrellas'), text: T('Serve a poucos produtos. Entra se algum pedir.', 'Useful to few products. It comes in if one asks for it.', 'Sirve a pocos productos. Entra si alguno lo pide.') },
  { name: T('Seletor de cor', 'Color picker', 'Selector de color'), text: T('Coisa de ferramenta de criação. Entra se algum produto pedir.', 'Meant for creative tools. It comes in if a product asks for it.', 'Es cosa de herramientas de creación. Entra si algún producto lo pide.') },
  { name: T('Editor de texto rico', 'Rich text editor', 'Editor de texto enriquecido'), text: T('Exigiria dependência ou um projeto só dele; hoje o Lume não tem dependências.', 'It would need a dependency or a project of its own; Lume has no dependencies today.', 'Exigiría una dependencia o un proyecto propio; hoy Lume no tiene dependencias.') },
];

const item = (i) => ({ name: tr(i.name), text: tr(i.text), doc: Boolean(i.doc) });

/** As etapas, em ordem, no idioma atual. */
export const stages = () =>
  STAGES.map((s) => ({ version: s.version, group: s.group, tone: s.tone, status: tr(s.status), title: tr(s.title), text: tr(s.text), items: s.items.map(item) }));

/** Populares que ficaram de fora de propósito. */
export const leftOut = () => LEFT_OUT.map(item);
