// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/skeleton. Não edite: rode npm run stories.
import * as page from '../../../site/pages/skeleton.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/skeleton", group: '', label: "Skeleton" };

export default {
  title: "Componentes/Feedback/Skeleton",
  id: "componentes-skeleton",
  parameters: { docs: { description: { component: "Mostra a forma do conteúdo antes de ele chegar. A tela não pula quando os dados carregam, e a espera parece menor.\n\nDocumentação completa: https://lumeui.dev/#/componentes/skeleton" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Formas lisas que pulsam devagar, sem o brilho que atravessa a tela." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Monte a forma com três peças: linha, círculo e bloco." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
