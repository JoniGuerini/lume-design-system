// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/lista-arrastavel. Não edite: rode npm run stories.
import * as page from '../../../site/pages/lista-arrastavel.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/lista-arrastavel", group: '', label: "Sortable list" };

export default {
  title: "Components/Content/Sortable list",
  id: "componentes-lista-arrastavel",
  parameters: { docs: { description: { component: "Change the order of a list by dragging, with the mouse, touch, or keyboard. The item leaves an empty slot where it will land, and each step is announced to screen readers.\n\nFull documentation: https://lumeui.dev/#/componentes/lista-arrastavel" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Drag by the handle. On the keyboard: Tab to the handle, Space picks up, the arrows move it, and Space drops." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "Separate boxes, rows inside a card, or items side by side." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "While dragging, the item becomes a dashed slot and a raised copy follows the pointer. Picked up with the keyboard, it gets the brand outline." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "Each item’s data-id is what toArray() returns and what you save." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When the order belongs to the person." } } },
  render: () => liveStory(page, "uso", INFO),
};
