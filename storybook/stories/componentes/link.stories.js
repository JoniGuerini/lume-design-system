// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/link. Não edite: rode npm run stories.
import * as page from '../../../site/pages/link.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/link", group: '', label: "Link" };

export default {
  title: "Componentes/Navegação/Link",
  id: "componentes-link",
  parameters: { docs: { description: { component: "Leva a outra página. No meio do texto, sublinhado; solto, no fim de um card ou de uma lista, com uma seta. Quando sai do site, o ícone de link externo avisa antes do clique.\n\nDocumentação completa: https://lumeui.dev/#/componentes/link" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Só CSS, sobre o a nativo. Link é para ir a algum lugar; para fazer algo, use um botão." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "A forma vem de onde o link está, não da importância dele." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "No hover a cor escurece e o sublinhado fica inteiro; o foco usa o anel de todo o Lume." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "O ícone vem da biblioteca do Lume. Para o externo, o texto escondido também." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Link ou botão?" } } },
  render: () => liveStory(page, "uso", INFO),
};
