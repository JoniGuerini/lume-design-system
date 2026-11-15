// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/graficos/dispersao. Não edite: rode npm run stories.
import * as page from '../../../site/pages/graficos-dispersao.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/graficos/dispersao", group: '', label: "Dispersão" };

export default {
  title: "Gráficos/Dispersão",
  id: "graficos-dispersao",
  parameters: { docs: { description: { component: "A relação entre duas medidas: cada ponto é um item. Pontos de 8 px com anel, até três séries, nome só em quem merece — e um alvo generoso para o hover achar o ponto mais próximo.\n\nDocumentação completa: https://lumeui.dev/#/graficos/dispersao" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Ligue séries, bolhas, referências e rótulos. Passe o mouse perto de um ponto — não precisa acertar o centro." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Da nuvem simples às bolhas. Em todas, o hover acha o ponto mais próximo e a tabela lista cada um." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Alvo = {
  name: "Alvo de 24 px",
  parameters: { docs: { description: { story: "Um ponto de 8 px é pequeno demais para mirar. O hover procura o ponto mais perto do ponteiro, até 24 px de distância." } } },
  render: () => liveStory(page, "alvo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Dispersão responde “uma coisa anda com a outra?”. Para o resto, há gráficos melhores." } } },
  render: () => liveStory(page, "uso", INFO),
};
