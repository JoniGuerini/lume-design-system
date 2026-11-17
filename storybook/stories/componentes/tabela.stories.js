// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/tabela. Não edite: rode npm run stories.
import * as page from '../../../site/pages/tabela.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/tabela", group: '', label: "Table" };

export default {
  title: "Components/Content/Table",
  id: "componentes-tabela",
  parameters: { docs: { description: { component: "For comparing data in rows and columns. Aligned numbers, a header that sorts, and selection that doesn’t rely on color alone.\n\nFull documentation: https://lumeui.dev/#/componentes/tabela" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Combine density, selection, sticky header, and caption. The code shows two sample rows." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Interacao = {
  name: "Sort and select",
  parameters: { docs: { description: { story: "Click a header to sort (again to reverse). Check rows to act in bulk — the count shows on top." } } },
  render: () => liveStory(page, "interacao", INFO),
};

export const Anatomia = {
  name: "Anatomy",
  parameters: { docs: { description: { story: "A native table with five pieces. No grid of divs: the semantics come built in." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Densidade = {
  name: "Density",
  parameters: { docs: { description: { story: "Comfortable is the default. Compact for operational screens, with many rows to scan." } } },
  render: () => liveStory(page, "densidade", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "A table without data is still a table: keep the header and say what to do. While loading, show the shape of the rows — no shimmer." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Three rules for easy-to-read tables." } } },
  render: () => liveStory(page, "uso", INFO),
};
