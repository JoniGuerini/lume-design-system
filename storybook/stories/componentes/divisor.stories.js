// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/divisor. Não edite: rode npm run stories.
import * as page from '../../../site/pages/divisor.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/divisor", group: '', label: "Divisor" };

export default {
  title: "Componentes/Conteúdo/Divisor",
  id: "componentes-divisor",
  parameters: { docs: { description: { component: "Uma linha fina que separa blocos sem chamar atenção. Na horizontal entre grupos de conteúdo, na vertical entre itens de uma linha e, quando ajuda, com um rótulo no meio.\n\nDocumentação completa: https://lumeui.dev/#/componentes/divisor" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Só CSS. Na horizontal, o hr nativo já é um separador para o leitor de tela." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "A linha é sempre a mesma; muda o que ela separa." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "Escolha o elemento pelo que ele significa: hr separa, o rótulo é texto." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Menos divisores, mais espaço." } } },
  render: () => liveStory(page, "uso", INFO),
};
