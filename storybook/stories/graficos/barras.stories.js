// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/graficos/barras. Não edite: rode npm run stories.
import * as page from '../../../site/pages/graficos-barras.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/graficos/barras", group: '', label: "Barras" };

export default {
  title: "Gráficos/Barras",
  id: "graficos-barras",
  parameters: { docs: { description: { component: "Compara grandezas lado a lado. Uma base no zero, barras finas, a ponta arredondada carregando o dado — e o número só onde ele conta a história.\n\nDocumentação completa: https://lumeui.dev/#/graficos/barras" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Troque orientação, layout, séries e rótulos. O gráfico é o de verdade: passe o mouse, use as setas, esconda séries na legenda ou abra a tabela." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Cada forma responde a uma pergunta. Escolha pela pergunta, não pela aparência." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "O gráfico responde ao ponteiro, ao teclado e aos dados. Os dois primeiros começam com o estado aplicado — interaja para ver de novo." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Barras comparam comprimento. Quase todo erro vem de esquecer isso." } } },
  render: () => liveStory(page, "uso", INFO),
};
