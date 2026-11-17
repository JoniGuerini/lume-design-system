// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/spinner. Não edite: rode npm run stories.
import * as page from '../../../site/pages/spinner.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/spinner", group: '', label: "Spinner" };

export default {
  title: "Components/Feedback/Spinner",
  id: "componentes-spinner",
  parameters: { docs: { description: { component: "Says something is happening during a short wait. It inherits the text color, so it works anywhere, including inside buttons.\n\nFull documentation: https://lumeui.dev/#/componentes/spinner" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Just CSS, with the color coming from the surrounding text." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "Whenever it fits, say what’s happening." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
