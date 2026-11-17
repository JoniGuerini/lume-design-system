// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/card. Não edite: rode npm run stories.
import * as page from '../../../site/pages/card.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/card", group: '', label: "Card" };

export default {
  title: "Components/Content/Card",
  id: "componentes-card",
  parameters: { docs: { description: { component: "The basic surface for grouping content. It sets things apart with a background and thin outline, no shadow.\n\nFull documentation: https://lumeui.dev/#/componentes/card" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Just CSS. For a task with a label, title, and controls, use the Panel." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "A card is just a container; the clickable one is a whole link." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "Only the clickable one changes. Hover and focus can be forced with data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
