// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/painel. Não edite: rode npm run stories.
import * as page from '../../../site/pages/painel.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/painel", group: '', label: "Panel" };

export default {
  title: "Components/Content/Panel",
  id: "componentes-painel",
  parameters: { docs: { description: { component: "The surface of a product task: label, title, controls, and content in airy sections. All flat — emphasis comes from hierarchy, not effects.\n\nFull documentation: https://lumeui.dev/#/componentes/painel" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Turn the parts on and off. Only the header and the content are required." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Anatomia = {
  name: "Anatomy",
  parameters: { docs: { description: { story: "Seven parts, always in the same order. Anyone who has seen one panel can read any other." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Secoes = {
  name: "Sections",
  parameters: { docs: { description: { story: "The stamp gives the content order. Use numbers for steps, times for scripts, and just the label when order doesn’t matter." } } },
  render: () => liveStory(page, "secoes", INFO),
};

export const Variacoes = {
  name: "Variations",
  parameters: { docs: { description: { story: "One structure, three ways to fit on the screen." } } },
  render: () => liveStory(page, "variacoes", INFO),
};

export const PainelCard = {
  name: "Panel or card?",
  parameters: { docs: { description: { story: "Both are surfaces, but they solve different things." } } },
  render: () => liveStory(page, "painel-card", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "The panel is for product screens — not for whole pages." } } },
  render: () => liveStory(page, "uso", INFO),
};
