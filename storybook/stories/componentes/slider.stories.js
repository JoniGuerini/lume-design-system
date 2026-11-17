// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/slider. Não edite: rode npm run stories.
import * as page from '../../../site/pages/slider.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/slider", group: '', label: "Slider" };

export default {
  title: "Components/Forms/Slider",
  id: "componentes-slider",
  parameters: { docs: { description: { component: "For choosing a value or a range when position matters more than the exact number, like volume, brightness, or a price range.\n\nFull documentation: https://lumeui.dev/#/componentes/slider" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Underneath it’s a native input type=\"range\", with keyboard and screen reader support built in." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "The value sits next to the label, always visible. Marks help when some points have names." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "Hover and focus can be forced with data-state on .ds-slider." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "onInput follows the drag; onChange fires when the person lets go." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
