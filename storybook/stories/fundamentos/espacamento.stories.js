// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/fundamentos/espacamento. Não edite: rode npm run stories.
import * as page from '../../../site/pages/espacamento.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/fundamentos/espacamento", group: '', label: "Espaçamento" };

export default {
  title: "Fundamentos/Espaçamento",
  id: "fundamentos-espacamento",
  parameters: { docs: { description: { component: "Uma escala de 4 em 4 px que dá ritmo à interface. Espaço pequeno junta, espaço grande separa — sempre com um token.\n\nDocumentação completa: https://lumeui.dev/#/fundamentos/espacamento" } } },
};

export const Escala = {
  name: "Escala",
  parameters: { docs: { description: { story: "Cada passo é um múltiplo de 4 px, em rem — acompanha o zoom do navegador. Clique num passo para copiar a variável." } } },
  render: () => liveStory(page, "escala", INFO),
};

export const Pratica = {
  name: "Na prática",
  parameters: { docs: { description: { story: "Um componente usa poucos tokens, cada um com um papel. Troque a densidade para ver a escala trabalhando junta." } } },
  render: () => liveStory(page, "pratica", INFO),
};

export const Ritmo = {
  name: "Ritmo",
  parameters: { docs: { description: { story: "Proximidade agrupa. Use espaço pequeno dentro de um grupo e um salto claro entre grupos — o olho entende a estrutura antes de ler." } } },
  render: () => liveStory(page, "ritmo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Poucas regras, aplicadas sempre." } } },
  render: () => liveStory(page, "uso", INFO),
};
