// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/barra-de-progresso. Não edite: rode npm run stories.
import * as page from '../../../site/pages/barra-de-progresso.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/barra-de-progresso", group: '', label: "Barra de progresso" };

export default {
  title: "Componentes/Feedback/Barra de progresso",
  id: "componentes-barra-de-progresso",
  parameters: { docs: { description: { component: "Mostra quanto de uma tarefa já foi feito. Quando não dá para saber quanto falta, a versão indeterminada diz que algo está acontecendo.\n\nDocumentação completa: https://lumeui.dev/#/componentes/barra-de-progresso" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Só CSS, sobre o progress nativo. Sem value, a barra fica indeterminada." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Use o tom para o resultado, não para o meio do caminho." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Barra, spinner ou medidor?" } } },
  render: () => liveStory(page, "uso", INFO),
};
