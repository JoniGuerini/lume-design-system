// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/menu. Não edite: rode npm run stories.
import * as page from '../../../site/pages/menu.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/menu", group: '', label: "Menu" };

export default {
  title: "Components/Actions/Menu",
  id: "componentes-menu",
  parameters: { docs: { description: { component: "A list of options that opens from a trigger. It’s for picking a value — like in chips — or for running actions.\n\nFull documentation: https://lumeui.dev/#/componentes/menu" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Open the menu from the trigger — with a click or ↓ on the keyboard. Next to it, a preview of what will open." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Modos = {
  name: "Modes",
  parameters: { docs: { description: { story: "The same function, two jobs. Choose by what happens after the click." } } },
  render: () => liveStory(page, "modos", INFO),
};

export const Colunas = {
  name: "Columns",
  parameters: { docs: { description: { story: "A long list doesn’t scroll or turn into a giant menu: with maxRows, each column holds at most that many items and the rest moves to the next column, split evenly. It’s what the navbar uses for its groups." } } },
  render: () => liveStory(page, "colunas", INFO),
};

export const Itens = {
  name: "Items",
  parameters: { docs: { description: { story: "Each item is an object in options. The special ones organize the list without becoming options." } } },
  render: () => liveStory(page, "itens", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "Hover and focus share a background and can be forced with data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "A menu hides options. It’s worth it when there are too many to show and too few to search." } } },
  render: () => liveStory(page, "uso", INFO),
};
