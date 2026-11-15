// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/paineis-redimensionaveis. Não edite: rode npm run stories.
import * as page from '../../../site/pages/paineis-redimensionaveis.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/paineis-redimensionaveis", group: '', label: "Painéis redimensionáveis" };

export default {
  title: "Componentes/Conteúdo/Painéis redimensionáveis",
  id: "componentes-paineis-redimensionaveis",
  parameters: { docs: { description: { component: "Divide uma área em partes que a pessoa ajusta arrastando a divisória. Use quando cada um lê de um jeito: uma lista ao lado do conteúdo, a prévia sobre o código.\n\nDocumentação completa: https://lumeui.dev/#/componentes/paineis-redimensionaveis" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Arraste a divisória ou use as setas com ela em foco. Duplo clique volta ao tamanho inicial." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Lado a lado ou um sobre o outro, com data-direction. Um painel pode ter outros dentro." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "A linha engrossa com o mouse e fica na cor do indicador enquanto arrasta. O foco do teclado contorna a área de pegar inteira." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "Os painéis são seus; o JavaScript põe as divisórias entre eles. Limites em % (data-min=\"20\") ou em px (data-min=\"240px\")." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
