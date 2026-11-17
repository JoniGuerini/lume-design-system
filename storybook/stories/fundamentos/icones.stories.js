// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/fundamentos/icones. Não edite: rode npm run stories.
import * as page from '../../../site/pages/icones.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/fundamentos/icones", group: '', label: "Icons" };

export default {
  title: "Foundations/Icons",
  id: "fundamentos-icones",
  parameters: { docs: { description: { component: "A custom library, drawn on the same grid with the same stroke. Thin outlines, round caps, and color inherited from the text.\n\nFull documentation: https://lumeui.dev/#/fundamentos/icones" } } },
};

export const Biblioteca = {
  name: "Library",
  parameters: { docs: { description: { story: "Search by name or by words in English, Portuguese, or Spanish. Click an icon to copy its code." } } },
  render: () => liveStory(page, "biblioteca", INFO),
};

export const Anatomia = {
  name: "Anatomy",
  parameters: { docs: { description: { story: "The same rules for every icon. That’s what makes the library feel like one family." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Tamanhos = {
  name: "Sizes",
  parameters: { docs: { description: { story: "Five sizes, all tokens. Below 16 px the stroke thickens on its own to stay legible." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const Codigo = {
  name: "In code",
  parameters: { docs: { description: { story: "Two ways to use them: the icon() function in JavaScript or the <ds-icon> element right in the HTML." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "An icon helps recognition; it doesn’t replace the word." } } },
  render: () => liveStory(page, "uso", INFO),
};
