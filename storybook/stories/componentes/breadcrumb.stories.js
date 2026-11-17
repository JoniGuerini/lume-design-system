// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/breadcrumb. Não edite: rode npm run stories.
import * as page from '../../../site/pages/breadcrumb.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/breadcrumb", group: '', label: "Breadcrumb" };

export default {
  title: "Components/Navigation/Breadcrumb",
  id: "componentes-breadcrumb",
  parameters: { docs: { description: { component: "Shows the path to the current page and lets you go back to any level. It’s what appears at the top of this site.\n\nFull documentation: https://lumeui.dev/#/componentes/breadcrumb" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Just HTML and CSS. The last item is the current page, with no link." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "On narrow screens, only the current page appears, and the page title already orients people." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
