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

const R = (version, status, tone, title, text, items) => ({ version, group: 'release', tone, status, title, text, items });

/* Lume no npm (pedido dele em 17/11/2026: “montar um roadmap e ir uma por uma”). Etapa entregue sai daqui. */
const STAGES = [
  R('1.8.2', NEXT, 'brand', T('Suporte ao React 18', 'React 18 support', 'Soporte para React 18'), T('Os componentes React testados também no React 18, além do 19.', 'The React components tested on React 18 too, not just 19.', 'Los componentes React probados también en React 18, además del 19.'), []),
  R('1.9', PLANNED, 'neutral', T('Lume no npm', 'Lume on npm', 'Lume en npm'), T('Um npm install e um import, em HTML ou React, já compilado e com tipos. O comando npx copia o Lume ou um componente para o projeto. A instalação no site e nos guias para IAs passa a começar por aqui.', 'One npm install and one import, in HTML or React, already compiled and typed. The npx command copies Lume or a single component into your project. Installation on the site and in the AI guides starts here.', 'Un npm install y un import, en HTML o React, ya compilado y con tipos. El comando npx copia Lume o un componente al proyecto. La instalación en el sitio y en las guías para IA empieza aquí.'), []),
  R('1.9.1', PLANNED, 'neutral', T('Publicação automática', 'Automatic publishing', 'Publicación automática'), T('Cada versão nova do Lume chega ao npm sozinha, pelo GitHub.', 'Every new Lume release reaches npm on its own, through GitHub.', 'Cada versión nueva de Lume llega a npm sola, por GitHub.'), []),
];

const LEFT_OUT = [];

const item = (i) => ({ name: tr(i.name), text: tr(i.text), doc: Boolean(i.doc) });

/** As etapas, em ordem, no idioma atual. */
export const stages = () =>
  STAGES.map((s) => ({ version: s.version, group: s.group, tone: s.tone, status: tr(s.status), title: tr(s.title), text: tr(s.text), items: s.items.map(item) }));

/** Populares que ficaram de fora de propósito. */
export const leftOut = () => LEFT_OUT.map(item);
