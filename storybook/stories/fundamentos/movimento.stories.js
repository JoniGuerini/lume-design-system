// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/fundamentos/movimento. Não edite: rode npm run stories.
import * as page from '../../../site/pages/movimento.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/fundamentos/movimento", group: '', label: "Movimento" };

export default {
  title: "Fundamentos/Movimento",
  id: "fundamentos-movimento",
  parameters: { docs: { description: { component: "Movimento explica o que mudou e de onde veio. Poucas durações, poucas curvas e sempre o mesmo par para o mesmo tipo de mudança.\n\nDocumentação completa: https://lumeui.dev/#/fundamentos/movimento" } } },
};

export const Duracoes = {
  name: "Durações",
  parameters: { docs: { description: { story: "Quanto maior a superfície e a distância percorrida, maior a duração. Toque uma por vez ou todas juntas para comparar — todas com a curva standard." } } },
  render: () => liveStory(page, "duracoes", INFO),
};

export const Curvas = {
  name: "Curvas",
  parameters: { docs: { description: { story: "A curva define o ritmo. Os gráficos usam os quatro números reais de cada token; as demonstrações rodam em 480 ms (duration.slower) para dar tempo de perceber a diferença." } } },
  render: () => liveStory(page, "curvas", INFO),
};

export const Receitas = {
  name: "Receitas",
  parameters: { docs: { description: { story: "As combinações que os componentes usam de verdade. Cada demonstração abaixo roda com o mesmo CSS dos componentes." } } },
  render: () => liveStory(page, "receitas", INFO),
};

export const Reduzido = {
  name: "Movimento reduzido",
  parameters: { docs: { description: { story: "Quem pede menos movimento no sistema operacional recebe a mesma interface, com as mudanças de estado instantâneas. Nada depende de animação para funcionar." } } },
  render: () => liveStory(page, "reduzido", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Movimento bom passa despercebido. Três regras para manter assim." } } },
  render: () => liveStory(page, "uso", INFO),
};
