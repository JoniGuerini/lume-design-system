// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/fundamentos/elevacao. Não edite: rode npm run stories.
import * as page from '../../../site/pages/elevacao.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/fundamentos/elevacao", group: '', label: "Elevação" };

export default {
  title: "Fundamentos/Elevação",
  id: "fundamentos-elevacao",
  parameters: { docs: { description: { component: "No Lume, profundidade vem primeiro da cor da superfície e só depois da sombra. Camadas claras, sombras macias e uma ordem de empilhamento sem surpresas.\n\nDocumentação completa: https://lumeui.dev/#/fundamentos/elevacao" } } },
};

export const Camadas = {
  name: "Camadas de superfície",
  parameters: { docs: { description: { story: "Cada degrau é uma superfície um pouco mais alta. Nos temas escuros, subir é clarear; nos claros, a camada mais alta é o branco." } } },
  render: () => liveStory(page, "camadas", INFO),
};

export const Sombras = {
  name: "Sombras",
  parameters: { docs: { description: { story: "Seis sombras em duas camadas — uma curta e definida, outra longa e difusa. No escuro são pretas e densas; no Lume claro, uma ardósia bem suave. Clique numa sombra para copiar." } } },
  render: () => liveStory(page, "sombras", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Menos sombra, mais intenção." } } },
  render: () => liveStory(page, "uso", INFO),
};
