// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/fundamentos/tipografia. Não edite: rode npm run stories.
import * as page from '../../../site/pages/tipografia.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/fundamentos/tipografia", group: '', label: "Typography" };

export default {
  title: "Foundations/Typography",
  id: "fundamentos-tipografia",
  parameters: { docs: { description: { component: "Geist Serif gives headings their voice, Geist Sans handles reading, and JetBrains Mono, code. 19 ready-made styles cover everything from the hero to the smallest label.\n\nFull documentation: https://lumeui.dev/#/fundamentos/tipografia" } } },
};

export const Familias = {
  name: "Families",
  parameters: { docs: { description: { story: "Three families, each with one job. Never mix two in the same role." } } },
  render: () => liveStory(page, "familias", INFO),
};

export const Escala = {
  name: "Scale",
  parameters: { docs: { description: { story: "Each style bundles family, size, line height, weight, and tracking into a single token. Type below to test your own text in all of them." } } },
  render: () => liveStory(page, "escala", INFO),
};

export const Hierarquia = {
  name: "Hierarchy in practice",
  parameters: { docs: { description: { story: "A typical screen uses few styles. Contrast comes from size and color — not from many different weights." } } },
  render: () => liveStory(page, "hierarquia", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Three rules to keep text consistent." } } },
  render: () => liveStory(page, "uso", INFO),
};
