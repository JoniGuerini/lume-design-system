// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/acordeao. Não edite: rode npm run stories.
import * as page from '../../../site/pages/acordeao.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/acordeao", group: '', label: "Accordion" };

export default {
  title: "Components/Navigation/Accordion",
  id: "componentes-acordeao",
  parameters: { docs: { description: { component: "Sections that open and close in place. Good for FAQs and details only some people want to read.\n\nFull documentation: https://lumeui.dev/#/componentes/acordeao" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Just HTML and CSS, on top of native details: no JavaScript, and the browser’s find also reaches closed text." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "With the same name on items, opening one closes the others. Without it, several stay open." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "Hover and focus can be forced with data-state on the header." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
