// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/gaveta-lateral. Não edite: rode npm run stories.
import * as page from '../../../site/pages/gaveta-lateral.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/gaveta-lateral", group: '', label: "Drawer" };

export default {
  title: "Components/Overlays/Drawer",
  id: "componentes-gaveta-lateral",
  parameters: { docs: { description: { component: "Shows details or a task without taking people off the page. It enters from the edge and lets you see what’s behind it.\n\nFull documentation: https://lumeui.dev/#/componentes/gaveta-lateral" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Open it and close with Esc, by clicking outside, or with the buttons." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "Right is the default. Bottom works well for quick choices." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "openDrawer returns a promise with the chosen action’s value, like the Modal." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Drawer or Modal?" } } },
  render: () => liveStory(page, "uso", INFO),
};
