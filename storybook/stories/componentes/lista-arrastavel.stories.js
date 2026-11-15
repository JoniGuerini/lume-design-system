// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/lista-arrastavel. Não edite: rode npm run stories.
import * as page from '../../../site/pages/lista-arrastavel.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/lista-arrastavel", group: '', label: "Lista arrastável" };

export default {
  title: "Componentes/Conteúdo/Lista arrastável",
  id: "componentes-lista-arrastavel",
  parameters: { docs: { description: { component: "Mudar a ordem de uma lista arrastando, com o mouse, o toque ou o teclado. O item deixa um encaixe vazio onde vai cair, e cada passo é anunciado para o leitor de tela.\n\nDocumentação completa: https://lumeui.dev/#/componentes/lista-arrastavel" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Arraste pela alça. No teclado: Tab até a alça, Espaço pega, as setas movem e Espaço solta." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Caixas soltas, linhas dentro de um card ou itens lado a lado." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Enquanto arrasta, o item vira um encaixe tracejado e uma cópia elevada segue o ponteiro. Pego pelo teclado, ele ganha o contorno da marca." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "O data-id de cada item é o que toArray() devolve e o que você salva." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando a ordem é da pessoa." } } },
  render: () => liveStory(page, "uso", INFO),
};
