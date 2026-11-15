// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/gaveta-lateral. Não edite: rode npm run stories.
import * as page from '../../../site/pages/gaveta-lateral.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/gaveta-lateral", group: '', label: "Gaveta lateral" };

export default {
  title: "Componentes/Camadas/Gaveta lateral",
  id: "componentes-gaveta-lateral",
  parameters: { docs: { description: { component: "Mostra detalhes ou uma tarefa sem tirar a pessoa da página. Entra pela borda e deixa ver o que está por trás.\n\nDocumentação completa: https://lumeui.dev/#/componentes/gaveta-lateral" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Abra e feche com o Esc, clicando fora ou pelos botões." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "A direita é o padrão. A de baixo funciona bem para escolhas rápidas." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "openDrawer devolve uma promessa com o valor da ação escolhida, como o Modal." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Gaveta ou Modal?" } } },
  render: () => liveStory(page, "uso", INFO),
};
