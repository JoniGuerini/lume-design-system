// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/link. Não edite: rode npm run stories.
import * as page from '../../../site/pages/link.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/link", group: '', label: "Link" };

export default {
  title: "Components/Navigation/Link",
  id: "componentes-link",
  parameters: { docs: { description: { component: "Takes you to another page. Inside text, underlined; standalone, at the end of a card or list, with an arrow. When it leaves the site, the external-link icon says so before the click.\n\nFull documentation: https://lumeui.dev/#/componentes/link" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Just CSS, on top of native a. A link goes somewhere; to do something, use a button." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "The form comes from where the link sits, not from how important it is." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "On hover the color deepens and the underline turns solid; focus uses the ring used across Lume." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "The icon comes from Lume’s library. For external links, the hidden text too." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Link or button?" } } },
  render: () => liveStory(page, "uso", INFO),
};
