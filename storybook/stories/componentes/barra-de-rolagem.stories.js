// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/barra-de-rolagem. Não edite: rode npm run stories.
import * as page from '../../../site/pages/barra-de-rolagem.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/barra-de-rolagem", group: '', label: "Barra de rolagem" };

export default {
  title: "Componentes/Navegação/Barra de rolagem",
  id: "componentes-barra-de-rolagem",
  parameters: { docs: { description: { component: "Uma barra só, sem trilho nem setas, igual em qualquer sistema. Aparece enquanto a pessoa rola e não ocupa espaço no layout.\n\nDocumentação completa: https://lumeui.dev/#/componentes/barra-de-rolagem" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Role a área com a roda, o toque ou o teclado, e tente arrastar a barra. Na horizontal, use Shift + roda." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Hover pode ser forçado com data-state; arrastando, com data-active." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "Basta ligar uma vez. Áreas que entram depois também recebem a barra." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
