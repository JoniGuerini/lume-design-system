// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/popover. Não edite: rode npm run stories.
import * as page from '../../../site/pages/popover.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/popover", group: '', label: "Popover" };

export default {
  title: "Componentes/Camadas/Popover",
  id: "componentes-popover",
  parameters: { docs: { description: { component: "Conteúdo que abre ao clicar, preso ao gatilho, sem bloquear a tela. Fica entre o Tooltip, que só dá uma dica, e o Modal, que interrompe.\n\nDocumentação completa: https://lumeui.dev/#/componentes/popover" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Se não couber no lado escolhido, ele abre no oposto." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Pode ser só um texto, ter título e botão de fechar, ou levar controles." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "Com data-popover-close, um botão de dentro também fecha o painel." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Qual camada escolher." } } },
  render: () => liveStory(page, "uso", INFO),
};
