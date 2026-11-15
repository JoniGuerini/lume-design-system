// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/spinner. Não edite: rode npm run stories.
import * as page from '../../../site/pages/spinner.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/spinner", group: '', label: "Spinner" };

export default {
  title: "Componentes/Feedback/Spinner",
  id: "componentes-spinner",
  parameters: { docs: { description: { component: "Diz que algo está acontecendo numa espera curta. Herda a cor do texto, então funciona em qualquer lugar, inclusive dentro de botões.\n\nDocumentação completa: https://lumeui.dev/#/componentes/spinner" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Só CSS, e a cor vem do texto em volta." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Sempre que couber, diga o que está acontecendo." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
