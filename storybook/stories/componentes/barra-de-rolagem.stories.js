// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/barra-de-rolagem. Não edite: rode npm run stories.
import * as page from '../../../site/pages/barra-de-rolagem.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/barra-de-rolagem", group: '', label: "Scrollbar" };

export default {
  title: "Components/Navigation/Scrollbar",
  id: "componentes-barra-de-rolagem",
  parameters: { docs: { description: { component: "A single bar, with no track or arrows, the same on every system. It appears while people scroll and takes up no layout space.\n\nFull documentation: https://lumeui.dev/#/componentes/barra-de-rolagem" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Scroll the area with the wheel, touch, or keyboard, and try dragging the bar. For horizontal, use Shift + wheel." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "Hover can be forced with data-state; dragging, with data-active." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "Just turn it on once. Areas added later get the bar too." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
