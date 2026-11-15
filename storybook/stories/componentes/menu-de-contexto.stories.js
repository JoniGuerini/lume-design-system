// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/menu-de-contexto. Não edite: rode npm run stories.
import * as page from '../../../site/pages/menu-de-contexto.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/menu-de-contexto", group: '', label: "Menu de contexto" };

export default {
  title: "Componentes/Camadas/Menu de contexto",
  id: "componentes-menu-de-contexto",
  parameters: { docs: { description: { component: "As ações de um item, ali onde a pessoa está: botão direito, tecla de menu ou toque longo. É um atalho, nunca o único caminho.\n\nDocumentação completa: https://lumeui.dev/#/componentes/menu-de-contexto" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Clique com o botão direito em uma linha. Pelo teclado, dê Tab até ela e use a tecla de menu ou Shift+F10." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "Com selector, um único menu atende a todas as linhas; options pode mudar conforme o item." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
