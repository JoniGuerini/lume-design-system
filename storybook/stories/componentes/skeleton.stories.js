// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/skeleton. Não edite: rode npm run stories.
import * as page from '../../../site/pages/skeleton.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/skeleton", group: '', label: "Skeleton" };

export default {
  title: "Components/Feedback/Skeleton",
  id: "componentes-skeleton",
  parameters: { docs: { description: { component: "Shows the shape of the content before it arrives. The screen doesn’t jump when data loads, and the wait feels shorter.\n\nFull documentation: https://lumeui.dev/#/componentes/skeleton" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Flat shapes that pulse slowly, with no shine sweeping across the screen." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "Build the shape from three pieces: line, circle, and block." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
