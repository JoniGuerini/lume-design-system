// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/campo-numerico. Não edite: rode npm run stories.
import * as page from '../../../site/pages/campo-numerico.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/campo-numerico", group: '', label: "Number field" };

export default {
  title: "Components/Forms/Number field",
  id: "componentes-campo-numerico",
  parameters: { docs: { description: { component: "For an exact number, when typing is as useful as adjusting little by little. It respects limits, a step, and the language’s format.\n\nFull documentation: https://lumeui.dev/#/componentes/campo-numerico" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Type, use the arrow keys, or hold the buttons to repeat the step." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "The format uses Intl.NumberFormat options: currency, percent, or unit, always in the current language." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "The same as the Text field, plus disabled buttons at the limits." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "The form receives the plain number, in a hidden input with the field’s name." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
