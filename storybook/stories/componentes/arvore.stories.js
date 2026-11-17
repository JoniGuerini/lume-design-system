// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/arvore. Não edite: rode npm run stories.
import * as page from '../../../site/pages/arvore.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/arvore", group: '', label: "Tree" };

export default {
  title: "Components/Navigation/Tree",
  id: "componentes-arvore",
  parameters: { docs: { description: { component: "Shows nested levels, like folders or categories, without taking over the screen. Only the open parts appear.\n\nFull documentation: https://lumeui.dev/#/componentes/arvore" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Try it from the keyboard: arrows to move, open, and close, and letters to jump." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "Icons and side information are optional." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "Hover and focus can be forced with data-state on the row." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "The aria-label on .ds-tree names the tree for screen readers." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
