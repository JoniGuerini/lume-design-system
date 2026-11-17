// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/fundamentos/raios. Não edite: rode npm run stories.
import * as page from '../../../site/pages/raios.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/fundamentos/raios", group: '', label: "Radius" };

export default {
  title: "Foundations/Radius",
  id: "fundamentos-raios",
  parameters: { docs: { description: { component: "Generous corners set Lume’s calm tone. A short scale — from detail to pill — and one simple rule for corners inside corners.\n\nFull documentation: https://lumeui.dev/#/fundamentos/raios" } } },
};

export const Escala = {
  name: "Scale",
  parameters: { docs: { description: { story: "Nine steps. The bigger the surface, the bigger the radius. Click a radius to copy the variable." } } },
  render: () => liveStory(page, "escala", INFO),
};

export const Aninhados = {
  name: "Nested radii",
  parameters: { docs: { description: { story: "When a rounded surface sits inside another, the inner radius is the outer one minus the padding. That keeps the curves parallel." } } },
  render: () => liveStory(page, "aninhados", INFO),
};

export const OndeUsar = {
  name: "Where to use",
  parameters: { docs: { description: { story: "Each component already comes with the right radius. The examples below are the real components." } } },
  render: () => liveStory(page, "onde-usar", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Radius is hierarchy too: smaller corners for small things, larger ones for what contains them." } } },
  render: () => liveStory(page, "uso", INFO),
};
