// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/navbar. Não edite: rode npm run stories.
import * as page from '../../../site/pages/navbar.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/navbar", group: '', label: "Navbar" };

export default {
  title: "Componentes/Navegação/Navbar",
  id: "componentes-navbar",
  parameters: { docs: { description: { component: "A mesma navegação da sidebar, deitada no topo: links diretos, um menu por grupo e a busca. Quando falta espaço, a busca encolhe e os últimos itens vão para o Mais.\n\nDocumentação completa: https://lumeui.dev/#/componentes/navbar" } } },
};

export const AoVivo = {
  name: "Ao vivo",
  parameters: { docs: { description: { story: "A navbar deste site, com as páginas de verdade. Diminua a janela e veja a busca encolher e os itens irem para o Mais. Os menus abrem, e escolher uma página só marca o grupo dela." } } },
  render: () => liveStory(page, "ao-vivo", INFO),
};

export const Anatomia = {
  name: "Anatomia",
  parameters: { docs: { description: { story: "Numa largura em que já falta espaço, para o Mais aparecer. Passe o mouse ou foque uma parte da lista para destacá-la." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Espaco = {
  name: "Quando falta espaço",
  parameters: { docs: { description: { story: "A navbar nunca quebra em duas linhas nem corta um item no meio. Ela abre mão das coisas nesta ordem." } } },
  render: () => liveStory(page, "espaco", INFO),
};

export const Menus = {
  name: "Menus dos grupos",
  parameters: { docs: { description: { story: "Cada botão de grupo abre um menu com as páginas daquele grupo. Lista longa vira grade, sem rolagem." } } },
  render: () => liveStory(page, "menus", INFO),
};

export const Escolha = {
  name: "Sidebar ou navbar",
  parameters: { docs: { description: { story: "Os dois levam aos mesmos lugares. A diferença está em quantos lugares são e em quanto espaço o conteúdo pede." } } },
  render: () => liveStory(page, "escolha", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "A navbar mora no .ds-shell, ao lado da sidebar, e aparece com data-layout=\"navbar\". Os grupos são os mesmos." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando a navbar é a melhor escolha." } } },
  render: () => liveStory(page, "uso", INFO),
};
