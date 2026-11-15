// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/visualizador-de-imagem. Não edite: rode npm run stories.
import * as page from '../../../site/pages/visualizador-de-imagem.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/visualizador-de-imagem", group: '', label: "Visualizador de imagem" };

export default {
  title: "Componentes/Conteúdo/Visualizador de imagem",
  id: "componentes-visualizador-de-imagem",
  parameters: { docs: { description: { component: "Abre uma imagem grande por cima da página, com zoom, arrastar e as outras da mesma galeria. A miniatura fica na página; a imagem inteira, só quando a pessoa pede.\n\nDocumentação completa: https://lumeui.dev/#/componentes/visualizador-de-imagem" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Clique numa captura. Dentro, use a roda do mouse ou + e −, arraste para andar e ← → para trocar." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "O mesmo visualizador, aberto por miniaturas ou por código." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "A miniatura aproxima de leve com o mouse e mostra o anel com o foco. O cursor de lupa avisa que abre." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "A miniatura é um link para a imagem grande: sem JavaScript, ela ainda abre. mountImageViewer liga todos os links de uma área." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Visualizador, carrossel ou modal?" } } },
  render: () => liveStory(page, "uso", INFO),
};
