// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/paineis-redimensionaveis. Não edite: rode npm run stories.
import * as page from '../../../site/pages/paineis-redimensionaveis.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/paineis-redimensionaveis", group: '', label: "Resizable panels" };

export default {
  title: "Components/Content/Resizable panels",
  id: "componentes-paineis-redimensionaveis",
  parameters: { docs: { description: { component: "Splits an area into parts people adjust by dragging the divider. Use it when everyone reads differently: a list next to the content, the preview above the code.\n\nFull documentation: https://lumeui.dev/#/componentes/paineis-redimensionaveis" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Drag the divider or use the arrow keys while it has focus. Double-click goes back to the initial size." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "Side by side or one above the other, with data-direction. A panel can hold others inside." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "The line thickens on hover and takes the indicator color while dragging. Keyboard focus outlines the whole grab area." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "The panels are yours; JavaScript puts the dividers between them. Limits in % (data-min=\"20\") or px (data-min=\"240px\")." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
