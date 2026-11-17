// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/chip. Não edite: rode npm run stories.
import * as page from '../../../site/pages/chip.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/chip", group: '', label: "Chip" };

export default {
  title: "Components/Actions/Chip",
  id: "componentes-chip",
  parameters: { docs: { description: { component: "An outlined pill to filter, choose, and show selections. Lighter than a button, made to appear in groups.\n\nFull documentation: https://lumeui.dev/#/componentes/chip" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Pick the type, size, and state. The code follows along." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Tipos = {
  name: "Types",
  parameters: { docs: { description: { story: "The same look, three different jobs. They all work here." } } },
  render: () => liveStory(page, "tipos", INFO),
};

export const Grupo = {
  name: "Grouped filters",
  parameters: { docs: { description: { story: "Filters combine: turn on more than one. None on is the same as all." } } },
  render: () => liveStory(page, "grupo", INFO),
};

export const Tamanhos = {
  name: "Sizes",
  parameters: { docs: { description: { story: "Medium goes with buttons and fields; small goes in filter bars and inside cards." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "Selected gets a background and a stronger outline — and, in the filter, a check mark, so it doesn’t rely on color alone. Force a state with data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Three rules for chips that help instead of decorate." } } },
  render: () => liveStory(page, "uso", INFO),
};
