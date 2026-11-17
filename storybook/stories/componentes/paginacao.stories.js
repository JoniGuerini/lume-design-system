// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/paginacao. Não edite: rode npm run stories.
import * as page from '../../../site/pages/paginacao.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/paginacao", group: '', label: "Pagination" };

export default {
  title: "Components/Navigation/Pagination",
  id: "componentes-paginacao",
  parameters: { docs: { description: { component: "Splits a long list into pages and shows where the person is. Use it when people need to return to a spot or compare pages.\n\nFull documentation: https://lumeui.dev/#/componentes/paginacao" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Try changing the total and the items per page." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "Parts appear as needed: a few pages don’t need an ellipsis." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "Hover and focus can be forced with data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "onChange reports the page and size; you load the data." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
