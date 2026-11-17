// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/abas. Não edite: rode npm run stories.
import * as page from '../../../site/pages/abas.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/abas", group: '', label: "Tabs" };

export default {
  title: "Components/Navigation/Tabs",
  id: "componentes-abas",
  parameters: { docs: { description: { component: "Switch between views of the same subject without leaving the page. One active tab at a time, always with its panel right below.\n\nFull documentation: https://lumeui.dev/#/componentes/abas" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Build the tabs and use them for real: click or navigate with the arrows. The code follows along." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Aparencias = {
  name: "Appearances",
  parameters: { docs: { description: { story: "Underline organizes content sections; segmented switches the view of the same thing. Both come in medium and small." } } },
  render: () => liveStory(page, "aparencias", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "Hover and focus can be forced with data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Anatomia = {
  name: "Anatomy",
  parameters: { docs: { description: { story: "Four parts. Each tab points to its panel, and the panel points back." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Comportamento = {
  name: "Behavior",
  parameters: { docs: { description: { story: "With automatic activation, the arrows switch the panel right away. With manual, the arrows only move focus — use it when opening a panel is expensive (search, loading)." } } },
  render: () => liveStory(page, "comportamento", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Three rules for tabs that don’t confuse." } } },
  render: () => liveStory(page, "uso", INFO),
};
