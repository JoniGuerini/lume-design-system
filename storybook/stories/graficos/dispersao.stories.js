// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/graficos/dispersao. Não edite: rode npm run stories.
import * as page from '../../../site/pages/graficos-dispersao.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/graficos/dispersao", group: '', label: "Scatter" };

export default {
  title: "Charts/Scatter",
  id: "graficos-dispersao",
  parameters: { docs: { description: { component: "The relationship between two measures: each point is an item. 8 px dots with a ring, up to three series, names only where they’re earned — and a generous target so hover finds the closest point.\n\nFull documentation: https://lumeui.dev/#/graficos/dispersao" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Turn on series, bubbles, references, and labels. Hover near a point — you don’t need to hit the center." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "From a simple cloud to bubbles. In all of them, hover finds the closest point and the table lists each one." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Alvo = {
  name: "24 px target",
  parameters: { docs: { description: { story: "An 8 px dot is too small to aim at. Hover looks for the point closest to the pointer, up to 24 px away." } } },
  render: () => liveStory(page, "alvo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "A scatter answers “does one thing move with the other?”. For everything else, there are better charts." } } },
  render: () => liveStory(page, "uso", INFO),
};
