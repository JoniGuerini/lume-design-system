// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/fundamentos/layout. Não edite: rode npm run stories.
import * as page from '../../../site/pages/layout.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/fundamentos/layout", group: '', label: "Layout" };

export default {
  title: "Foundations/Layout",
  id: "fundamentos-layout",
  parameters: { docs: { description: { component: "Where things go and how they rearrange. Five breakpoints, a shell with fixed measures, and maximum widths that protect reading.\n\nFull documentation: https://lumeui.dev/#/fundamentos/layout" } } },
};

export const Breakpoints = {
  name: "Breakpoints",
  parameters: { docs: { description: { story: "Mobile first: the base layout covers small screens and each breakpoint adds rules from its width up. Resize the window to watch the marker move." } } },
  render: () => liveStory(page, "breakpoints", INFO),
};

export const AnatomiaShell = {
  name: "App shell",
  parameters: { docs: { description: { story: "Two panels over the app background: sidebar and content, with the top bar inside the content. The diagram is scaled to a 1440 × 900 window." } } },
  render: () => liveStory(page, "anatomia-shell", INFO),
};

export const Larguras = {
  name: "Widths",
  parameters: { docs: { description: { story: "Wide screens shouldn’t stretch content to the edge. Pages stop at 1160 px and running text at 720 px." } } },
  render: () => liveStory(page, "larguras", INFO),
};

export const Grade = {
  name: "Grid",
  parameters: { docs: { description: { story: "Two grid patterns cover the site. Drag to change the container width and watch how each one rearranges. The space between items is always space.150 (12 px)." } } },
  render: () => liveStory(page, "grade", INFO),
};

export const Camadas = {
  name: "Layers",
  parameters: { docs: { description: { story: "Stacking order is a fixed scale: no z-index 9999. The higher on the list, the further in front." } } },
  render: () => liveStory(page, "camadas", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Rules to keep the layout predictable on any screen." } } },
  render: () => liveStory(page, "uso", INFO),
};
