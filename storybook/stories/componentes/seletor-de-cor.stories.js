// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/seletor-de-cor. Não edite: rode npm run stories.
import * as page from '../../../site/pages/seletor-de-cor.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/seletor-de-cor", group: '', label: "Color picker" };

export default {
  title: "Components/Forms/Color picker",
  id: "componentes-seletor-de-cor",
  parameters: { docs: { description: { component: "For choosing a free color or one from the palette. Drag in the area, adjust the hue, type the hex, or click a swatch.\n\nFull documentation: https://lumeui.dev/#/componentes/seletor-de-cor" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Type 3b82f6 or #abc in the field: with or without #, in 3 or 6 digits." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "The field fits in a form and opens the picker in a panel. The standalone picker stays in view, for settings screens." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "The field has the Text field states. A hex that isn’t a color shows the error when leaving the field." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "The form receives the field’s hex; it works with createForm, like the other fields." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
