// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/stepper. Não edite: rode npm run stories.
import * as page from '../../../site/pages/stepper.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/stepper", group: '', label: "Stepper" };

export default {
  title: "Components/Navigation/Stepper",
  id: "componentes-stepper",
  parameters: { docs: { description: { component: "Shows the steps of a flow, how many are left, and where the person is. Good for sign-ups and multi-part setups.\n\nFull documentation: https://lumeui.dev/#/componentes/stepper" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Move forward and back. With clickable steps, you can return to finished ones." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "Horizontal fits a few steps with short names. With long descriptions or many steps, use vertical." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "Each step gets data-state: done, current, or upcoming. The difference also comes from the number and check, not just color." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "Each step’s content is yours; the stepper only shows the way." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
