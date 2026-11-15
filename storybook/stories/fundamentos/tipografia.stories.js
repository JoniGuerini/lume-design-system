// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/fundamentos/tipografia. Não edite: rode npm run stories.
import * as page from '../../../site/pages/tipografia.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/fundamentos/tipografia", group: '', label: "Tipografia" };

export default {
  title: "Fundamentos/Tipografia",
  id: "fundamentos-tipografia",
  parameters: { docs: { description: { component: "Geist Serif dá voz aos títulos, Geist Sans cuida da leitura e JetBrains Mono, do código. 19 estilos prontos cobrem do herói ao menor rótulo.\n\nDocumentação completa: https://lumeui.dev/#/fundamentos/tipografia" } } },
};

export const Familias = {
  name: "Famílias",
  parameters: { docs: { description: { story: "Três famílias, cada uma com um trabalho. Nunca misture duas no mesmo papel." } } },
  render: () => liveStory(page, "familias", INFO),
};

export const Escala = {
  name: "Escala",
  parameters: { docs: { description: { story: "Cada estilo junta família, tamanho, altura de linha, peso e tracking num token só. Escreva abaixo para testar o seu texto em todos eles." } } },
  render: () => liveStory(page, "escala", INFO),
};

export const Hierarquia = {
  name: "Hierarquia na prática",
  parameters: { docs: { description: { story: "Uma tela típica usa poucos estilos. O contraste vem do tamanho e da cor — não de muitos pesos diferentes." } } },
  render: () => liveStory(page, "hierarquia", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Três regras para manter o texto consistente." } } },
  render: () => liveStory(page, "uso", INFO),
};
