// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/breadcrumb. Não edite: rode npm run stories.
import * as page from '../../../site/pages/breadcrumb.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/breadcrumb", group: '', label: "Breadcrumb" };

export default {
  title: "Componentes/Navegação/Breadcrumb",
  id: "componentes-breadcrumb",
  parameters: { docs: { description: { component: "Mostra o caminho até a página atual e deixa voltar a qualquer nível. É o que aparece no topo deste site.\n\nDocumentação completa: https://lumeui.dev/#/componentes/breadcrumb" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Só HTML e CSS. O último item é a página atual, sem link." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Em telas estreitas, só a página atual aparece, e o título da página já situa a pessoa." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
