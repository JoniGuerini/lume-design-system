// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/graficos/heatmap. Não edite: rode npm run stories.
import * as page from '../../../site/pages/graficos-heatmap.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/graficos/heatmap", group: '', label: "Heatmap" };

export default {
  title: "Charts/Heatmap",
  id: "graficos-heatmap",
  parameters: { docs: { description: { component: "Intensity on a grid — day × hour, or day by day across the year. A single hue that gets stronger with the value; two hues with a neutral middle when the question is above or below a reference.\n\nFull documentation: https://lumeui.dev/#/graficos/heatmap" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Change the scale, the bands, and the data. Hover the cells or focus the map and use the arrows." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "A matrix for repeating patterns (weekday × hour); a calendar for the whole year at once." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Escalas = {
  name: "Scale and bands",
  parameters: { docs: { description: { story: "The value becomes a color band, not a continuous tone — bands are something the eye can compare. In dark mode, the anchor flips: more is lighter." } } },
  render: () => liveStory(page, "escalas", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "A heatmap shows a pattern, not an exact value. Use it when the question is “where does it concentrate?”." } } },
  render: () => liveStory(page, "uso", INFO),
};
