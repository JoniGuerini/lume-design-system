// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/avaliacao. Não edite: rode npm run stories.
import * as page from '../../../site/pages/avaliacao.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/avaliacao", group: '', label: "Avaliação" };

export default {
  title: "Componentes/Formulários/Avaliação",
  id: "componentes-avaliacao",
  parameters: { docs: { description: { component: "Estrelas para dar uma nota ou mostrar a média. Para dar nota, cada estrela é um rádio: o formulário envia o valor sem código.\n\nDocumentação completa: https://lumeui.dev/#/componentes/avaliacao" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Passe o mouse para ver a nota antes de clicar; clique de novo na mesma estrela para tirar a nota." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Dar nota usa createRating. Só mostrar usa ratingHtml, que aceita qualquer decimal e corta a estrela no ponto certo." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "A estrela acesa usa a cor do indicador. Com o mouse, as estrelas até a do mouse acendem antes do clique." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "Para dar nota, um elemento vazio; o JavaScript põe as estrelas. Para mostrar, a marcação vem pronta." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
