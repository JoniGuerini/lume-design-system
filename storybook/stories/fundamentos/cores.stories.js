// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/fundamentos/cores. Não edite: rode npm run stories.
import * as page from '../../../site/pages/cores.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/fundamentos/cores", group: '', label: "Cores" };

export default {
  title: "Fundamentos/Cores",
  id: "fundamentos-cores",
  parameters: { docs: { description: { component: "Uma paleta quente gerada em OKLCH e tokens semânticos que se adaptam ao tema. Os componentes nunca usam cor solta — sempre um token.\n\nDocumentação completa: https://lumeui.dev/#/fundamentos/cores" } } },
};

export const Paletas = {
  name: "Paletas primitivas",
  parameters: { docs: { description: { story: "A matéria-prima. Cada paleta nasce de um matiz e um croma em OKLCH, com luminosidade perceptualmente uniforme. Clique numa cor para copiar." } } },
  render: () => liveStory(page, "paletas", INFO),
};

export const Semanticos = {
  name: "Tokens semânticos",
  parameters: { docs: { description: { story: "É isso que os componentes consomem. Cada token aponta para uma primitiva diferente em cada tema — o nome descreve a função, não a cor." } } },
  render: () => liveStory(page, "semanticos", INFO),
};

export const Temas = {
  name: "Temas",
  parameters: { docs: { description: { story: "O Lume vem em claro e escuro — a ardósia e a terracota do app Lume — e, por padrão, segue o sistema: claro de dia, escuro se o aparelho estiver no escuro. Como os temas vivem em atributos, dá até para misturar: um bloco escuro dentro de uma tela clara." } } },
  render: () => liveStory(page, "temas", INFO),
};

export const Contraste = {
  name: "Contraste",
  parameters: { docs: { description: { story: "Toda combinação de texto e fundo usada pelos componentes é verificada no build, nos dois temas, contra o WCAG 2.2. Texto comum pede 4,5:1; texto terciário, 3:1." } } },
  render: () => liveStory(page, "contraste", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Três regras que mantêm a interface consistente quando o sistema cresce." } } },
  render: () => liveStory(page, "uso", INFO),
};
