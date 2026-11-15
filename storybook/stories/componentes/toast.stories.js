// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/toast. Não edite: rode npm run stories.
import * as page from '../../../site/pages/toast.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/toast", group: '', label: "Toast" };

export default {
  title: "Componentes/Feedback/Toast",
  id: "componentes-toast",
  parameters: { docs: { description: { component: "Confirma que algo aconteceu, sem interromper. Aparece embaixo, some sozinho e pode trazer uma ação curta, como desfazer.\n\nDocumentação completa: https://lumeui.dev/#/componentes/toast" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "A prévia mostra o visual. “Mostrar toast” — ou um dos seis pontos da miniatura — dispara o de verdade, na posição escolhida." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Tons = {
  name: "Tons",
  parameters: { docs: { description: { story: "O fundo é sempre o invertido — o toast se destaca de qualquer tela. O tom aparece só no ícone, para a cor não gritar." } } },
  render: () => liveStory(page, "tons", INFO),
};

export const Acao = {
  name: "Com ação",
  parameters: { docs: { description: { story: "Uma ação só, curta e reversível — “Desfazer”, “Ver”, “Tentar de novo”. Com ação, o toast fica 5 s." } } },
  render: () => liveStory(page, "acao", INFO),
};

export const Comportamento = {
  name: "Comportamento",
  parameters: { docs: { description: { story: "Previsível: sempre no mesmo lugar, sempre saindo sozinho." } } },
  render: () => liveStory(page, "comportamento", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Para confirmar, não para conversar." } } },
  render: () => liveStory(page, "uso", INFO),
};
