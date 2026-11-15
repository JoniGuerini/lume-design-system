// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/linha-do-tempo. Não edite: rode npm run stories.
import * as page from '../../../site/pages/linha-do-tempo.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/linha-do-tempo", group: '', label: "Linha do tempo" };

export default {
  title: "Componentes/Conteúdo/Linha do tempo",
  id: "componentes-linha-do-tempo",
  parameters: { docs: { description: { component: "Eventos em ordem, como o histórico de um pedido ou a atividade de um projeto. Mostra o que aconteceu, quando e quem fez.\n\nDocumentação completa: https://lumeui.dev/#/componentes/linha-do-tempo" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Só HTML e CSS, sobre uma lista ordenada." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "O tom vai em data-tone, no item. Reserve a cor para o que merece destaque." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
