// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/bloco-de-codigo. Não edite: rode npm run stories.
import * as page from '../../../site/pages/bloco-de-codigo.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/bloco-de-codigo", group: '', label: "Bloco de código" };

export default {
  title: "Componentes/Conteúdo/Bloco de código",
  id: "componentes-bloco-de-codigo",
  parameters: { docs: { description: { component: "Mostra código com a fonte certa, e um botão copia tudo de uma vez. É o que aparece em todos os playgrounds deste site.\n\nDocumentação completa: https://lumeui.dev/#/componentes/bloco-de-codigo" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "O botão copia só o código, e um aviso confirma." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Sem o botão, é só .ds-code. Para um termo no meio do texto, use .ds-inline-code." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
