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
    version: '0.28',
    group: 'release',
    tone: 'brand',
    status: NEXT,
    title: T('React: navegação e camadas', 'React: navigation and layers', 'React: navegación y capas'),
    text: T('Os 15 componentes que abrem, fecham e trocam de estado.', 'The 15 components that open, close, and change state.', 'Los 15 componentes que abren, cierran y cambian de estado.'),
    items: [
      { name: T('Navegação', 'Navigation', 'Navegación'), text: T('Menu, Abas, Controle segmentado, Paginação, Stepper, Acordeão, Árvore, Barra de rolagem e Voltar ao topo.', 'Menu, Tabs, Segmented control, Pagination, Stepper, Accordion, Tree, Scrollbar, and Back to top.', 'Menú, Pestañas, Control segmentado, Paginación, Stepper, Acordeón, Árbol, Barra de desplazamiento y Volver arriba.') },
      { name: T('Camadas', 'Layers', 'Capas'), text: T('Modal, Gaveta lateral, Popover, Menu de contexto, Tooltip e Toast, com abrir e fechar pelo estado.', 'Modal, Drawer, Popover, Context menu, Tooltip, and Toast, opened and closed through state.', 'Modal, Panel lateral, Popover, Menú contextual, Tooltip y Toast, que abren y cierran por estado.') },
    ],
  },
  {
    version: '0.29',
    group: 'release',
    tone: 'neutral',
    status: PLANNED,
    title: T('React: conteúdo, gráficos e app shell', 'React: content, charts, and app shell', 'React: contenido, gráficos y app shell'),
    text: T('Os componentes mais ricos, que fecham os 44.', 'The richest components, completing all 44.', 'Los componentes más ricos, que completan los 44.'),
    items: [
      { name: T('Conteúdo', 'Content', 'Contenido'), text: T('Tabela, Calendário e Bloco de código.', 'Table, Calendar, and Code block.', 'Tabla, Calendario y Bloque de código.') },
      { name: T('Gráficos e app shell', 'Charts and app shell', 'Gráficos y app shell'), text: T('Os gráficos e o app shell como componentes React, e a versão React no Storybook.', 'The charts and the app shell as React components, plus the React version in Storybook.', 'Los gráficos y el app shell como componentes React, y la versión React en Storybook.') },
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
