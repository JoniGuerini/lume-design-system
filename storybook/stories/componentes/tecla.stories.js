// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/tecla. Não edite: rode npm run stories.
import * as page from '../../../site/pages/tecla.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/tecla", group: '', label: "Keyboard key" };

export default {
  title: "Components/Content/Keyboard key",
  id: "componentes-tecla",
  parameters: { docs: { description: { component: "Shows a key or shortcut within text, in menus, and in tooltips. It helps people learn the faster way.\n\nFull documentation: https://lumeui.dev/#/componentes/tecla" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Just CSS, on top of the native element. It’s a label, not a button." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "One key per label: a two-key shortcut is two labels." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
