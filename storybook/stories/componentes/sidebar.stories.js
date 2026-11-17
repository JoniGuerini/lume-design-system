// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/sidebar. Não edite: rode npm run stories.
import * as page from '../../../site/pages/sidebar.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/sidebar", group: '', label: "Sidebar" };

export default {
  title: "Components/Navigation/Sidebar",
  id: "componentes-sidebar",
  parameters: { docs: { description: { component: "Navigation on the side: brand, search, everyday places, and groups that collapse. On desktop it shrinks down to just the icons; on phones it becomes a drawer.\n\nFull documentation: https://lumeui.dev/#/componentes/sidebar" } } },
};

export const Anatomia = {
  name: "Anatomy",
  parameters: { docs: { description: { story: "This site’s own sidebar, with fewer pages. Groups open and close, and clicking an item marks the current page. Hover or focus a part in the list to highlight it." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Item = {
  name: "Item",
  parameters: { docs: { description: { story: "A 20 px icon, a label, and, when it applies, the dot. States can be forced with data-state." } } },
  render: () => liveStory(page, "item", INFO),
};

export const Recolhida = {
  name: "Open and collapsed",
  parameters: { docs: { description: { story: "On desktop, the sidebar collapses to 76 px and lets the content breathe. The icons stay in the same column in both states, so nothing jumps during the animation." } } },
  render: () => liveStory(page, "recolhida", INFO),
};

export const Gaveta = {
  name: "On phones",
  parameters: { docs: { description: { story: "Below 1024 px the sidebar leaves the screen and becomes a drawer, opened by the top bar’s menu button. The navbar uses the same drawer." } } },
  render: () => liveStory(page, "gaveta", INFO),
};

export const Comportamento = {
  name: "Behavior",
  parameters: { docs: { description: { story: "The details that make the sidebar feel quiet: nothing changes without a reason and everything comes back as it was." } } },
  render: () => liveStory(page, "comportamento", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "The HTML is fixed; the navigation is drawn from a list. The sidebar lives inside .ds-shell: see App shell for the whole frame." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "The sidebar disappears when it’s done well." } } },
  render: () => liveStory(page, "uso", INFO),
};
