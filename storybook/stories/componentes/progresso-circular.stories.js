// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/progresso-circular. Não edite: rode npm run stories.
import * as page from '../../../site/pages/progresso-circular.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/progresso-circular", group: '', label: "Progresso circular" };

export default {
  title: "Componentes/Feedback/Progresso circular",
  id: "componentes-progresso-circular",
  parameters: { docs: { description: { component: "O mesmo progresso da barra, num anel. Cabe num card, num cabeçalho ou ao lado de um item de lista, onde a barra não teria largura.\n\nDocumentação completa: https://lumeui.dev/#/componentes/progresso-circular" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "progressRingHtml monta o anel e setProgressRing muda o valor. Sem valor, o arco gira." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Os tons são os da barra: para o resultado, não para o meio do caminho." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "A marcação vem pronta; para mudar o valor, chame setProgressRing." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Anel, barra ou spinner?" } } },
  render: () => liveStory(page, "uso", INFO),
};
