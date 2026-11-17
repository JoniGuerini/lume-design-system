// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/graficos/rosca. Não edite: rode npm run stories.
import * as page from '../../../site/pages/graficos-rosca.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/graficos/rosca", group: '', label: "Donut" };

export default {
  title: "Charts/Donut",
  id: "graficos-rosca",
  parameters: { docs: { description: { component: "Part of a whole at a glance. Up to six slices, the total in the center, and a list that’s legend and label at once.\n\nFull documentation: https://lumeui.dev/#/graficos/rosca" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Change the number of slices, the thickness, and the center. With 7 slices, watch the tail become “Others”. Hover the ring or the list." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "Same anatomy, four tweaks. The donut never gets 3D, shadows, or an exploded slice." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const RoscaOuBarras = {
  name: "Donut or bars?",
  parameters: { docs: { description: { story: "A donut shows proportion; no one compares angles precisely. When values are close, use bars." } } },
  render: () => liveStory(page, "rosca-ou-barras", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "The first starts with a slice highlighted — hover or use the arrows to switch." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "The donut is the easiest form to get wrong. Use it sparingly, and only for part of a whole." } } },
  render: () => liveStory(page, "uso", INFO),
};
