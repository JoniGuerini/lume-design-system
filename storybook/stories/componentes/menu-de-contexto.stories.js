// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/menu-de-contexto. Não edite: rode npm run stories.
import * as page from '../../../site/pages/menu-de-contexto.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/menu-de-contexto", group: '', label: "Context menu" };

export default {
  title: "Components/Overlays/Context menu",
  id: "componentes-menu-de-contexto",
  parameters: { docs: { description: { component: "An item’s actions, right where the person is: right-click, menu key, or long press. It’s a shortcut, never the only way.\n\nFull documentation: https://lumeui.dev/#/componentes/menu-de-contexto" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Right-click a row. By keyboard, tab to it and use the menu key or Shift+F10." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "With selector, one menu serves every row; options can change by item." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
