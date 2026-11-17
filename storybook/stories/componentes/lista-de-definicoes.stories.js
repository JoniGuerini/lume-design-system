// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/lista-de-definicoes. Não edite: rode npm run stories.
import * as page from '../../../site/pages/lista-de-definicoes.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/lista-de-definicoes", group: '', label: "Description list" };

export default {
  title: "Components/Content/Description list",
  id: "componentes-lista-de-definicoes",
  parameters: { docs: { description: { component: "Label and value pairs, as on a details sheet. Lighter than a table when there’s only one record to show.\n\nFull documentation: https://lumeui.dev/#/componentes/lista-de-definicoes" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Just HTML and CSS, on top of dl, dt, and dd." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "Label beside the value, with or without lines, or above it, to fit in columns." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
