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
    version: '0.19',
    group: 'release',
    tone: 'brand',
    status: NEXT,
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
