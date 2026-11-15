// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/graficos/heatmap. Não edite: rode npm run stories.
import * as page from '../../../site/pages/graficos-heatmap.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/graficos/heatmap", group: '', label: "Heatmap" };

export default {
  title: "Gráficos/Heatmap",
  id: "graficos-heatmap",
  parameters: { docs: { description: { component: "Intensidade numa grade — dia × hora, ou dia a dia no ano. Um tom só que fica mais forte com o valor; dois tons com o meio neutro quando a pergunta é acima ou abaixo de uma referência.\n\nDocumentação completa: https://lumeui.dev/#/graficos/heatmap" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Troque a escala, as faixas e os dados. Passe o mouse nas células ou foque o mapa e use as setas." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Matriz para padrões que se repetem (dia da semana × hora); calendário para o ano inteiro de uma vez." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Escalas = {
  name: "Escala e faixas",
  parameters: { docs: { description: { story: "O valor vira uma faixa de cor, não um tom contínuo — faixas o olho consegue comparar. No escuro, a âncora inverte: mais é mais claro." } } },
  render: () => liveStory(page, "escalas", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "O heatmap mostra padrão, não valor exato. Use quando a pergunta é “onde concentra?”." } } },
  render: () => liveStory(page, "uso", INFO),
};
