// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/lista-de-definicoes. Não edite: rode npm run stories.
import * as page from '../../../site/pages/lista-de-definicoes.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/lista-de-definicoes", group: '', label: "Lista de definições" };

export default {
  title: "Componentes/Conteúdo/Lista de definições",
  id: "componentes-lista-de-definicoes",
  parameters: { docs: { description: { component: "Pares de rótulo e valor, como numa ficha de detalhes. Mais leve que uma tabela quando só há um registro para mostrar.\n\nDocumentação completa: https://lumeui.dev/#/componentes/lista-de-definicoes" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Só HTML e CSS, sobre dl, dt e dd." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Rótulo ao lado do valor, com ou sem linhas, ou em cima, para caber em colunas." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
