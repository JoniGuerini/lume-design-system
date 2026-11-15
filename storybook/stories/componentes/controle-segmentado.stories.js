// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/controle-segmentado. Não edite: rode npm run stories.
import * as page from '../../../site/pages/controle-segmentado.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/controle-segmentado", group: '', label: "Controle segmentado" };

export default {
  title: "Componentes/Navegação/Controle segmentado",
  id: "componentes-controle-segmentado",
  parameters: { docs: { description: { component: "Poucas opções lado a lado, sempre visíveis, com uma escolhida. A troca vale na hora, como nos seletores de layout e de visão do calendário.\n\nDocumentação completa: https://lumeui.dev/#/componentes/controle-segmentado" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Clique ou use as setas do teclado: a escolha vale na hora." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Com texto, ou só com ícones quando o sentido é conhecido. Ícone sozinho precisa de nome e tooltip." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "A opção escolhida sobe com o fundo dos campos; as outras ficam apagadas." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
