// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/voltar-ao-topo. Não edite: rode npm run stories.
import * as page from '../../../site/pages/voltar-ao-topo.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/voltar-ao-topo", group: '', label: "Voltar ao topo" };

export default {
  title: "Componentes/Navegação/Voltar ao topo",
  id: "componentes-voltar-ao-topo",
  parameters: { docs: { description: { component: "Em páginas longas, leva de volta ao começo com um clique. Fica escondido até a pessoa ter rolado bastante.\n\nDocumentação completa: https://lumeui.dev/#/componentes/voltar-ao-topo" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Role a área até o botão aparecer no canto e clique nele. Este site usa o mesmo botão: role esta página para ver." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Hover e foco podem ser forçados com data-state. O botão só aparece com data-visible." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "O botão entra em parent, que precisa ter position." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
