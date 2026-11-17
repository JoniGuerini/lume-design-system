// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/divisor. Não edite: rode npm run stories.
import * as page from '../../../site/pages/divisor.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/divisor", group: '', label: "Divider" };

export default {
  title: "Components/Content/Divider",
  id: "componentes-divisor",
  parameters: { docs: { description: { component: "A thin line that separates blocks without drawing attention. Horizontal between groups of content, vertical between items in a row and, when it helps, with a label in the middle.\n\nFull documentation: https://lumeui.dev/#/componentes/divisor" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Just CSS. Horizontally, the native hr is already a separator for screen readers." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "The line is always the same; what changes is what it separates." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "Pick the element by what it means: hr separates, the label is text." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Fewer dividers, more space." } } },
  render: () => liveStory(page, "uso", INFO),
};
