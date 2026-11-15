// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/kanban. Não edite: rode npm run stories.
import * as page from '../../../site/pages/kanban.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/kanban", group: '', label: "Kanban" };

export default {
  title: "Componentes/Conteúdo/Kanban",
  id: "componentes-kanban",
  parameters: { docs: { description: { component: "Colunas de cartões que passam de uma para outra: etapas de um trabalho, do planejado ao feito. É a lista arrastável com várias listas do mesmo grupo, e o número de cada coluna acompanha.\n\nDocumentação completa: https://lumeui.dev/#/componentes/kanban" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Arraste um cartão para outra coluna. No teclado: Espaço pega, ← → trocam de coluna, ↑ ↓ mudam a ordem." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "O cartão inteiro arrasta, ou só a alça quando ele tem links e botões." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Os mesmos da lista arrastável, no cartão." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "O data-id da coluna e o de cada cartão formam o que toObject() devolve." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Para etapas, não para categorias." } } },
  render: () => liveStory(page, "uso", INFO),
};
