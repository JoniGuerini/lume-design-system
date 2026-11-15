// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/carrossel. Não edite: rode npm run stories.
import * as page from '../../../site/pages/carrossel.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/carrossel", group: '', label: "Carrossel" };

export default {
  title: "Componentes/Conteúdo/Carrossel",
  id: "componentes-carrossel",
  parameters: { docs: { description: { component: "Mostra destaques ou uma galeria um por vez, num espaço só. Use quando a ordem importa menos que o espaço; se tudo é importante, prefira uma grade.\n\nDocumentação completa: https://lumeui.dev/#/componentes/carrossel" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Use as setas, os pontos ou arraste. Com a passagem automática, o mouse em cima ou o foco dentro param o carrossel." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Quantos aparecem de uma vez vem do CSS, em --ds-carousel-per-view: dá para mudar por largura de tela sem mexer no JavaScript." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "O ponto atual estica e escurece: muda de forma, não só de cor. Sem loop, a seta da ponta fica desativada." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "Os slides são seus; o carrossel põe a barra de baixo, o teclado e os rótulos." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
