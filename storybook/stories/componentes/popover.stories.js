// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/popover. Não edite: rode npm run stories.
import * as page from '../../../site/pages/popover.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/popover", group: '', label: "Popover" };

export default {
  title: "Components/Overlays/Popover",
  id: "componentes-popover",
  parameters: { docs: { description: { component: "Content that opens on click, attached to its trigger, without blocking the screen. It sits between the Tooltip, which only gives a hint, and the Modal, which interrupts.\n\nFull documentation: https://lumeui.dev/#/componentes/popover" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "If it doesn’t fit on the chosen side, it opens on the opposite one." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "It can be just text, have a title and close button, or hold controls." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "With data-popover-close, a button inside also closes the panel." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Which layer to choose." } } },
  render: () => liveStory(page, "uso", INFO),
};
