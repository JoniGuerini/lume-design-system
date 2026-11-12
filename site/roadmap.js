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
    version: '1.0',
    group: 'release',
    tone: 'success',
    status: NEXT,
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
