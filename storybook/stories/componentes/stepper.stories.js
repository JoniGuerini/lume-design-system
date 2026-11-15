// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/stepper. Não edite: rode npm run stories.
import * as page from '../../../site/pages/stepper.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/stepper", group: '', label: "Stepper" };

export default {
  title: "Componentes/Navegação/Stepper",
  id: "componentes-stepper",
  parameters: { docs: { description: { component: "Mostra as etapas de um fluxo, quantas faltam e onde a pessoa está. Bom para cadastros e configurações em partes.\n\nDocumentação completa: https://lumeui.dev/#/componentes/stepper" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Avance e volte. Com etapas clicáveis, dá para retornar às já feitas." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Na horizontal cabem poucas etapas com nomes curtos. Com descrições longas ou muitas etapas, use a vertical." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Cada etapa recebe data-state: feita, atual ou próxima. A diferença vem também do número e da marca, não só da cor." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "O conteúdo de cada etapa é seu; o stepper só mostra o caminho." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
