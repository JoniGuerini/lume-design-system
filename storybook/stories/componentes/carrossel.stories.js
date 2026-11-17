// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/carrossel. Não edite: rode npm run stories.
import * as page from '../../../site/pages/carrossel.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/carrossel", group: '', label: "Carousel" };

export default {
  title: "Components/Content/Carousel",
  id: "componentes-carrossel",
  parameters: { docs: { description: { component: "Shows highlights or a gallery one at a time, in a single space. Use it when space matters more than order; if everything matters, prefer a grid.\n\nFull documentation: https://lumeui.dev/#/componentes/carrossel" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Use the arrows, the dots, or swipe. With autoplay, hovering or focusing inside stops the carousel." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "How many show at once comes from CSS, in --ds-carousel-per-view: you can change it per screen width without touching JavaScript." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "The current dot stretches and darkens: it changes shape, not just color. Without loop, the arrow at the end is disabled." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "The slides are yours; the carousel adds the bottom bar, the keyboard, and the labels." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
