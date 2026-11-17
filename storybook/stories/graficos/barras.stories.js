// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/graficos/barras. Não edite: rode npm run stories.
import * as page from '../../../site/pages/graficos-barras.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/graficos/barras", group: '', label: "Bars" };

export default {
  title: "Charts/Bars",
  id: "graficos-barras",
  parameters: { docs: { description: { component: "Compares quantities side by side. A baseline at zero, thin bars, the rounded end carrying the data — and the number only where it tells the story.\n\nFull documentation: https://lumeui.dev/#/graficos/barras" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Change orientation, layout, series, and labels. The chart is the real one: hover, use the arrows, hide series in the legend, or open the table." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "Each form answers a question. Choose by the question, not by the look." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "The chart responds to the pointer, the keyboard, and the data. The first two start with the state applied — interact to see it again." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Bars compare length. Almost every mistake comes from forgetting that." } } },
  render: () => liveStory(page, "uso", INFO),
};
