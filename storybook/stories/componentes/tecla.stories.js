// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/tecla. Não edite: rode npm run stories.
import * as page from '../../../site/pages/tecla.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/tecla", group: '', label: "Tecla" };

export default {
  title: "Componentes/Conteúdo/Tecla",
  id: "componentes-tecla",
  parameters: { docs: { description: { component: "Mostra uma tecla ou um atalho no meio do texto, em menus e em tooltips. Ajuda a pessoa a aprender o caminho mais rápido.\n\nDocumentação completa: https://lumeui.dev/#/componentes/tecla" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Só CSS, sobre o elemento nativo. É uma etiqueta, não um botão." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Uma tecla por etiqueta: um atalho de duas teclas são duas etiquetas." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
