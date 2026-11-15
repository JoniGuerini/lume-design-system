// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/acordeao. Não edite: rode npm run stories.
import * as page from '../../../site/pages/acordeao.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/acordeao", group: '', label: "Acordeão" };

export default {
  title: "Componentes/Navegação/Acordeão",
  id: "componentes-acordeao",
  parameters: { docs: { description: { component: "Seções que abrem e fecham no lugar. Boa para perguntas frequentes e detalhes que só parte das pessoas quer ler.\n\nDocumentação completa: https://lumeui.dev/#/componentes/acordeao" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Só HTML e CSS, sobre o details nativo: sem JavaScript, a busca do navegador também encontra o texto fechado." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Com o mesmo name nos itens, abrir um fecha os outros. Sem ele, vários ficam abertos." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Hover e foco podem ser forçados com data-state no cabeçalho." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
