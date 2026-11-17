// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/linha-do-tempo. Não edite: rode npm run stories.
import * as page from '../../../site/pages/linha-do-tempo.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/linha-do-tempo", group: '', label: "Timeline" };

export default {
  title: "Components/Content/Timeline",
  id: "componentes-linha-do-tempo",
  parameters: { docs: { description: { component: "Events in order, like an order’s history or a project’s activity. Shows what happened, when, and who did it.\n\nFull documentation: https://lumeui.dev/#/componentes/linha-do-tempo" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Just HTML and CSS, on top of an ordered list." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "The tone goes in data-tone, on the item. Save color for what deserves attention." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
