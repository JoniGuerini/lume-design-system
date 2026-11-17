// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/fundamentos/espacamento. Não edite: rode npm run stories.
import * as page from '../../../site/pages/espacamento.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/fundamentos/espacamento", group: '', label: "Spacing" };

export default {
  title: "Foundations/Spacing",
  id: "fundamentos-espacamento",
  parameters: { docs: { description: { component: "A 4 px scale that gives the interface its rhythm. Small space groups, large space separates — always with a token.\n\nFull documentation: https://lumeui.dev/#/fundamentos/espacamento" } } },
};

export const Escala = {
  name: "Scale",
  parameters: { docs: { description: { story: "Each step is a multiple of 4 px, in rem — it follows the browser zoom. Click a step to copy the variable." } } },
  render: () => liveStory(page, "escala", INFO),
};

export const Pratica = {
  name: "In practice",
  parameters: { docs: { description: { story: "A component uses few tokens, each with one role. Change the density to see the scale working together." } } },
  render: () => liveStory(page, "pratica", INFO),
};

export const Ritmo = {
  name: "Rhythm",
  parameters: { docs: { description: { story: "Proximity groups. Use small space inside a group and a clear jump between groups — the eye understands the structure before reading." } } },
  render: () => liveStory(page, "ritmo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Few rules, always applied." } } },
  render: () => liveStory(page, "uso", INFO),
};
