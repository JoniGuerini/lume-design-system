// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/graficos/linhas. Não edite: rode npm run stories.
import * as page from '../../../site/pages/graficos-linhas.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/graficos/linhas", group: '', label: "Lines and areas" };

export default {
  title: "Charts/Lines and areas",
  id: "graficos-linhas",
  parameters: { docs: { description: { component: "To show how something changes over time. A 2 px stroke, a single axis, the crosshair finds the month, and the name sits at the end of the line — no legend box to decipher.\n\nFull documentation: https://lumeui.dev/#/graficos/linhas" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Change the type, the series, and the details. The chart follows the stage theme and the code follows along." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "The same component covers the most common questions about time. Hover any of them." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Mira = {
  name: "Crosshair and tooltip",
  parameters: { docs: { description: { story: "No one aims at a 2 px line. The vertical crosshair finds the closest month and a single tooltip shows every series there." } } },
  render: () => liveStory(page, "mira", INFO),
};

export const UmEixo = {
  name: "A single axis",
  parameters: { docs: { description: { story: "No dual y-axes. Two quantities on different scales become a common index or two aligned charts." } } },
  render: () => liveStory(page, "um-eixo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Choose a line when the question has “when” or “since”. Four precautions solve almost everything." } } },
  render: () => liveStory(page, "uso", INFO),
};
