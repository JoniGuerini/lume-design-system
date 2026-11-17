// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/navbar. Não edite: rode npm run stories.
import * as page from '../../../site/pages/navbar.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/navbar", group: '', label: "Navbar" };

export default {
  title: "Components/Navigation/Navbar",
  id: "componentes-navbar",
  parameters: { docs: { description: { component: "The same navigation as the sidebar, lying across the top: direct links, a menu per group, and search. When space runs out, search shrinks and the last items move into More.\n\nFull documentation: https://lumeui.dev/#/componentes/navbar" } } },
};

export const AoVivo = {
  name: "Live",
  parameters: { docs: { description: { story: "This site’s navbar, with the real pages. Shrink the window and watch search shrink and items move into More. The menus open, and choosing a page only marks its group." } } },
  render: () => liveStory(page, "ao-vivo", INFO),
};

export const Anatomia = {
  name: "Anatomy",
  parameters: { docs: { description: { story: "At a width where space is already short, so More shows up. Hover or focus a part in the list to highlight it." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Espaco = {
  name: "When space runs out",
  parameters: { docs: { description: { story: "The navbar never wraps onto two lines or cuts an item in half. It gives things up in this order." } } },
  render: () => liveStory(page, "espaco", INFO),
};

export const Menus = {
  name: "Group menus",
  parameters: { docs: { description: { story: "Each group button opens a menu with that group’s pages. A long list becomes a grid, with no scrolling." } } },
  render: () => liveStory(page, "menus", INFO),
};

export const Escolha = {
  name: "Sidebar or navbar",
  parameters: { docs: { description: { story: "Both lead to the same places. The difference is how many places there are and how much room the content needs." } } },
  render: () => liveStory(page, "escolha", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "The navbar lives in .ds-shell, next to the sidebar, and shows with data-layout=\"navbar\". The groups are the same." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When the navbar is the better choice." } } },
  render: () => liveStory(page, "uso", INFO),
};
