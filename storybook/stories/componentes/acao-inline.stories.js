// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/acao-inline. Não edite: rode npm run stories.
import * as page from '../../../site/pages/acao-inline.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/acao-inline", group: '', label: "Inline action" };

export default {
  title: "Components/Actions/Inline action",
  id: "componentes-acao-inline",
  parameters: { docs: { description: { component: "The quietest action in the system. It lives inside the content — “In the scene +”, “See history →” — and only stands out when the pointer arrives.\n\nFull documentation: https://lumeui.dev/#/componentes/acao-inline" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Pick the element, icon, and sign. The stage shows the action inside a section, where it usually lives." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Formas = {
  name: "Forms",
  parameters: { docs: { description: { story: "The sign at the end tells what happens: + adds or opens something here; → takes you elsewhere." } } },
  render: () => liveStory(page, "formas", INFO),
};

export const Disclosure = {
  name: "Show and hide",
  parameters: { docs: { description: { story: "With <details>, the inline action opens extra content in place. The + rotates into an × when open. Try it:" } } },
  render: () => liveStory(page, "disclosure", INFO),
};

export const InlineGhost = {
  name: "Inline or ghost?",
  parameters: { docs: { description: { story: "Both are quiet. The difference is where they live." } } },
  render: () => liveStory(page, "inline-ghost", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Three rules to keep it quiet." } } },
  render: () => liveStory(page, "uso", INFO),
};
