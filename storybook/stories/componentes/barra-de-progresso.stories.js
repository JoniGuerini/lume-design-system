// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/barra-de-progresso. Não edite: rode npm run stories.
import * as page from '../../../site/pages/barra-de-progresso.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/barra-de-progresso", group: '', label: "Progress bar" };

export default {
  title: "Components/Feedback/Progress bar",
  id: "componentes-barra-de-progresso",
  parameters: { docs: { description: { component: "Shows how much of a task is done. When there’s no way to know how much is left, the indeterminate version says something is happening.\n\nFull documentation: https://lumeui.dev/#/componentes/barra-de-progresso" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Just CSS, on top of native progress. Without value, the bar is indeterminate." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "Use a tone for the result, not along the way." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Bar, spinner, or meter?" } } },
  render: () => liveStory(page, "uso", INFO),
};
