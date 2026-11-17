// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/fundamentos/cores. Não edite: rode npm run stories.
import * as page from '../../../site/pages/cores.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/fundamentos/cores", group: '', label: "Color" };

export default {
  title: "Foundations/Color",
  id: "fundamentos-cores",
  parameters: { docs: { description: { component: "A warm palette generated in OKLCH and semantic tokens that adapt to the theme. Components never use a loose color — always a token.\n\nFull documentation: https://lumeui.dev/#/fundamentos/cores" } } },
};

export const Paletas = {
  name: "Primitive palettes",
  parameters: { docs: { description: { story: "The raw material. Each palette starts from one hue and one chroma in OKLCH, with perceptually uniform lightness. Click a color to copy it." } } },
  render: () => liveStory(page, "paletas", INFO),
};

export const Semanticos = {
  name: "Semantic tokens",
  parameters: { docs: { description: { story: "This is what components consume. Each token points to a different primitive in each theme — the name describes the role, not the color." } } },
  render: () => liveStory(page, "semanticos", INFO),
};

export const Temas = {
  name: "Themes",
  parameters: { docs: { description: { story: "Lume comes in light and dark — the Lume app’s slate and terracotta — and by default follows the system: light by day, dark if the device is set to dark. Since themes live in attributes, you can even mix them: a dark block inside a light screen." } } },
  render: () => liveStory(page, "temas", INFO),
};

export const Contraste = {
  name: "Contrast",
  parameters: { docs: { description: { story: "Every text and background pair the components use is checked in the build, in both themes, against WCAG 2.2. Regular text needs 4.5:1; tertiary text, 3:1." } } },
  render: () => liveStory(page, "contraste", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Three rules that keep the interface consistent as the system grows." } } },
  render: () => liveStory(page, "uso", INFO),
};
