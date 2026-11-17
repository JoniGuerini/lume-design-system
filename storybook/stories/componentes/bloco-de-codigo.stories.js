// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/bloco-de-codigo. Não edite: rode npm run stories.
import * as page from '../../../site/pages/bloco-de-codigo.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/bloco-de-codigo", group: '', label: "Code block" };

export default {
  title: "Components/Content/Code block",
  id: "componentes-bloco-de-codigo",
  parameters: { docs: { description: { component: "Shows code in the right font, and a button copies it all at once. It’s what appears in every playground on this site.\n\nFull documentation: https://lumeui.dev/#/componentes/bloco-de-codigo" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "The button copies only the code, and a notice confirms it." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "Without the button, it’s just .ds-code. For a term within text, use .ds-inline-code." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
