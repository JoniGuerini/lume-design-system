// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/fundamentos/raios. Não edite: rode npm run stories.
import * as page from '../../../site/pages/raios.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/fundamentos/raios", group: '', label: "Raios" };

export default {
  title: "Fundamentos/Raios",
  id: "fundamentos-raios",
  parameters: { docs: { description: { component: "Cantos generosos dão o tom calmo do Lume. Uma escala curta — do detalhe à pílula — e uma regra simples para cantos dentro de cantos.\n\nDocumentação completa: https://lumeui.dev/#/fundamentos/raios" } } },
};

export const Escala = {
  name: "Escala",
  parameters: { docs: { description: { story: "Nove passos. Quanto maior a superfície, maior o raio. Clique num raio para copiar a variável." } } },
  render: () => liveStory(page, "escala", INFO),
};

export const Aninhados = {
  name: "Raios aninhados",
  parameters: { docs: { description: { story: "Quando uma superfície arredondada fica dentro de outra, o raio de dentro é o de fora menos o espaçamento. Assim as curvas ficam paralelas." } } },
  render: () => liveStory(page, "aninhados", INFO),
};

export const OndeUsar = {
  name: "Onde usar",
  parameters: { docs: { description: { story: "Cada componente já vem com o raio certo. Os exemplos abaixo são os componentes reais." } } },
  render: () => liveStory(page, "onde-usar", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "O raio também é hierarquia: cantos menores para o que é pequeno, maiores para o que contém." } } },
  render: () => liveStory(page, "uso", INFO),
};
