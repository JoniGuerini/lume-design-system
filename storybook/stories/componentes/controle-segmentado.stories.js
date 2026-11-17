// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/controle-segmentado. Não edite: rode npm run stories.
import * as page from '../../../site/pages/controle-segmentado.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/controle-segmentado", group: '', label: "Segmented control" };

export default {
  title: "Components/Navigation/Segmented control",
  id: "componentes-controle-segmentado",
  parameters: { docs: { description: { component: "A few options side by side, always visible, with one selected. The change applies right away, as in the layout and calendar view selectors.\n\nFull documentation: https://lumeui.dev/#/componentes/controle-segmentado" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Click or use the arrow keys: the choice applies right away." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "With text, or icons only when the meaning is familiar. An icon alone needs a name and a tooltip." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "The chosen option rises with the field background; the others stay muted." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
