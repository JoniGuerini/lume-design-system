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

const P = (version, status, tone, title, text, items) => ({ version, group: 'patterns', tone, status, title, text, items });

/* Padrões de tela pedidos depois da 1.0, um por versão; ele avalia no fim quais ficam. Etapa entregue sai daqui. */
const STAGES = [
  P('1.5', NEXT, 'brand', T('Painel de indicadores', 'Metrics dashboard', 'Panel de indicadores'), T('Números, gráficos e período numa tela só.', 'Numbers, charts, and a period on a single screen.', 'Números, gráficos y período en una sola pantalla.'), []),
  P('1.6', PLANNED, 'neutral', T('Primeiro uso', 'First use', 'Primer uso'), T('Boas-vindas, primeiros passos e o vazio que ensina.', 'Welcome, first steps, and the empty state that teaches.', 'Bienvenida, primeros pasos y el vacío que enseña.'), []),
  P('1.7', PLANNED, 'neutral', T('Carregamento e erros', 'Loading and errors', 'Carga y errores'), T('Esqueleto ou spinner, erro de rede, sem conexão e página não encontrada.', 'Skeleton or spinner, network error, offline, and page not found.', 'Esqueleto o spinner, error de red, sin conexión y página no encontrada.'), []),
];

const LEFT_OUT = [];

const item = (i) => ({ name: tr(i.name), text: tr(i.text), doc: Boolean(i.doc) });

/** As etapas, em ordem, no idioma atual. */
export const stages = () =>
  STAGES.map((s) => ({ version: s.version, group: s.group, tone: s.tone, status: tr(s.status), title: tr(s.title), text: tr(s.text), items: s.items.map(item) }));

/** Populares que ficaram de fora de propósito. */
export const leftOut = () => LEFT_OUT.map(item);
