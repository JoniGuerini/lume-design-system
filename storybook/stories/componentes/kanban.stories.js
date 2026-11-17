// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/kanban. Não edite: rode npm run stories.
import * as page from '../../../site/pages/kanban.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/kanban", group: '', label: "Kanban" };

export default {
  title: "Components/Content/Kanban",
  id: "componentes-kanban",
  parameters: { docs: { description: { component: "Columns of cards that move from one to another: stages of work, from planned to done. It’s the sortable list with several lists in the same group, and each column’s count keeps up.\n\nFull documentation: https://lumeui.dev/#/componentes/kanban" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Drag a card to another column. On the keyboard: Space picks up, ← → change columns, ↑ ↓ change the order." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "The whole card drags, or only the handle when it has links and buttons." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "The same as the sortable list, on the card." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "The column’s data-id and each card’s make up what toObject() returns." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "For stages, not categories." } } },
  render: () => liveStory(page, "uso", INFO),
};
