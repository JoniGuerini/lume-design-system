// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/graficos/rosca. Não edite: rode npm run stories.
import * as page from '../../../site/pages/graficos-rosca.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/graficos/rosca", group: '', label: "Rosca" };

export default {
  title: "Gráficos/Rosca",
  id: "graficos-rosca",
  parameters: { docs: { description: { component: "A parte do todo de relance. Até seis fatias, o total no miolo e uma lista que é legenda e rótulo ao mesmo tempo.\n\nDocumentação completa: https://lumeui.dev/#/graficos/rosca" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Mude o número de fatias, a espessura e o miolo. Com 7 fatias, veja a cauda virar “Outros”. Passe o mouse no anel ou na lista." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Mesma anatomia, quatro ajustes. A rosca nunca ganha 3D, sombra ou fatia descolada." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const RoscaOuBarras = {
  name: "Rosca ou barras?",
  parameters: { docs: { description: { story: "A rosca mostra proporção; ninguém compara ângulos com precisão. Quando os valores são próximos, use barras." } } },
  render: () => liveStory(page, "rosca-ou-barras", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "O primeiro começa com uma fatia em destaque — passe o mouse ou use as setas para trocar." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "A rosca é a forma mais fácil de errar. Use pouco, e só para parte do todo." } } },
  render: () => liveStory(page, "uso", INFO),
};
