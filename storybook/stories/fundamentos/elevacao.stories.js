// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/fundamentos/elevacao. Não edite: rode npm run stories.
import * as page from '../../../site/pages/elevacao.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/fundamentos/elevacao", group: '', label: "Elevation" };

export default {
  title: "Foundations/Elevation",
  id: "fundamentos-elevacao",
  parameters: { docs: { description: { component: "In Lume, depth comes first from the surface color and only then from the shadow. Clear layers, soft shadows, and a stacking order with no surprises.\n\nFull documentation: https://lumeui.dev/#/fundamentos/elevacao" } } },
};

export const Camadas = {
  name: "Surface layers",
  parameters: { docs: { description: { story: "Each step is a slightly higher surface. In the dark themes, going up means lighter; in the light ones, the highest layer is white." } } },
  render: () => liveStory(page, "camadas", INFO),
};

export const Sombras = {
  name: "Shadows",
  parameters: { docs: { description: { story: "Six two-layer shadows — one short and defined, one long and diffuse. In the dark theme they’re black and dense; in Lume light, a very soft slate. Click a shadow to copy it." } } },
  render: () => liveStory(page, "sombras", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Less shadow, more intent." } } },
  render: () => liveStory(page, "uso", INFO),
};
