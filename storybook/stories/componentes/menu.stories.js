// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/menu. Não edite: rode npm run stories.
import * as page from '../../../site/pages/menu.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/menu", group: '', label: "Menu" };

export default {
  title: "Componentes/Ações/Menu",
  id: "componentes-menu",
  parameters: { docs: { description: { component: "Uma lista de opções que abre a partir de um gatilho. Serve para escolher um valor — como nos chips — ou para disparar ações.\n\nDocumentação completa: https://lumeui.dev/#/componentes/menu" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Abra o menu pelo gatilho — com clique ou com ↓ no teclado. Ao lado, a prévia do que vai abrir." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Modos = {
  name: "Modos",
  parameters: { docs: { description: { story: "A mesma função, dois trabalhos. Escolha pelo que acontece depois do clique." } } },
  render: () => liveStory(page, "modos", INFO),
};

export const Colunas = {
  name: "Colunas",
  parameters: { docs: { description: { story: "Lista longa não rola nem vira um menu gigante: com maxRows, cada coluna leva no máximo esse número de itens e o resto segue para a coluna do lado, dividido por igual. É o que a navbar usa nos grupos." } } },
  render: () => liveStory(page, "colunas", INFO),
};

export const Itens = {
  name: "Itens",
  parameters: { docs: { description: { story: "Cada item é um objeto em options. Os especiais organizam a lista sem virar opção." } } },
  render: () => liveStory(page, "itens", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Hover e foco têm o mesmo fundo e podem ser forçados com data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Menu esconde opções. Vale a pena quando são muitas para mostrar e poucas para buscar." } } },
  render: () => liveStory(page, "uso", INFO),
};
