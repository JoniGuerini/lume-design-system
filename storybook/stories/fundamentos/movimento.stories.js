// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/fundamentos/movimento. Não edite: rode npm run stories.
import * as page from '../../../site/pages/movimento.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/fundamentos/movimento", group: '', label: "Motion" };

export default {
  title: "Foundations/Motion",
  id: "fundamentos-movimento",
  parameters: { docs: { description: { component: "Motion explains what changed and where it came from. Few durations, few curves, and always the same pair for the same kind of change.\n\nFull documentation: https://lumeui.dev/#/fundamentos/movimento" } } },
};

export const Duracoes = {
  name: "Durations",
  parameters: { docs: { description: { story: "The bigger the surface and the distance traveled, the longer the duration. Play one at a time or all together to compare — all with the standard curve." } } },
  render: () => liveStory(page, "duracoes", INFO),
};

export const Curvas = {
  name: "Curves",
  parameters: { docs: { description: { story: "The curve sets the rhythm. The graphs use each token’s four real numbers; the demos run at 480 ms (duration.slower) so there’s time to notice the difference." } } },
  render: () => liveStory(page, "curvas", INFO),
};

export const Receitas = {
  name: "Recipes",
  parameters: { docs: { description: { story: "The combinations the components actually use. Each demo below runs on the same CSS as the components." } } },
  render: () => liveStory(page, "receitas", INFO),
};

export const Reduzido = {
  name: "Reduced motion",
  parameters: { docs: { description: { story: "People who ask the operating system for less motion get the same interface, with instant state changes. Nothing depends on animation to work." } } },
  render: () => liveStory(page, "reduzido", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Good motion goes unnoticed. Three rules to keep it that way." } } },
  render: () => liveStory(page, "uso", INFO),
};
