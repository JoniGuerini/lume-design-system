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

const C = (version, status, tone, title, text, items) => ({ version, group: 'components', tone, status, title, text, items });
const I = (name, text, doc) => ({ name, text, doc });

const STAGES = [
  {
    version: '0.40',
    group: 'release',
    tone: 'brand',
    status: NEXT,
    title: T('Plugin do Figma', 'Figma plugin', 'Plugin de Figma'),
    text: T('O Figma igual ao site, de novo.', 'Figma matching the site again.', 'Figma igual al sitio, de nuevo.'),
    items: [
      I(T('Componentes novos', 'New components', 'Componentes nuevos'), T('Os da 0.30 à 0.38 viram blocos, com variantes e prévias claro e escuro.', 'The ones from 0.30 to 0.38 become blocks, with variants and light and dark previews.', 'Los de la 0.30 a la 0.38 se vuelven bloques, con variantes y vistas previas clara y oscura.')),
      I(T('Ícones', 'Icons', 'Íconos'), T('Os 154 ícones do site.', 'All 154 icons from the site.', 'Los 154 íconos del sitio.')),
      I(T('Revisão geral', 'Full review', 'Revisión general'), T('Tokens, temas e os três idiomas conferidos de novo contra o site.', 'Tokens, themes, and the three languages checked against the site again.', 'Tokens, temas y los tres idiomas revisados de nuevo contra el sitio.')),
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

const LEFT_OUT = [];

const item = (i) => ({ name: tr(i.name), text: tr(i.text), doc: Boolean(i.doc) });

/** As etapas, em ordem, no idioma atual. */
export const stages = () =>
  STAGES.map((s) => ({ version: s.version, group: s.group, tone: s.tone, status: tr(s.status), title: tr(s.title), text: tr(s.text), items: s.items.map(item) }));

/** Populares que ficaram de fora de propósito. */
export const leftOut = () => LEFT_OUT.map(item);
