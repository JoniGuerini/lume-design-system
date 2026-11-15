// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/graficos/linhas. Não edite: rode npm run stories.
import * as page from '../../../site/pages/graficos-linhas.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/graficos/linhas", group: '', label: "Linhas e áreas" };

export default {
  title: "Gráficos/Linhas e áreas",
  id: "graficos-linhas",
  parameters: { docs: { description: { component: "Para mostrar como algo muda no tempo. Traço de 2 px, um eixo só, a mira encontra o mês e o nome fica no fim da linha — sem caixa de legenda para decifrar.\n\nDocumentação completa: https://lumeui.dev/#/graficos/linhas" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Troque o tipo, as séries e os detalhes. O gráfico segue o tema do palco e o código acompanha." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "O mesmo componente cobre as perguntas mais comuns sobre o tempo. Passe o mouse em qualquer uma." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Mira = {
  name: "Mira e tooltip",
  parameters: { docs: { description: { story: "Ninguém mira numa linha de 2 px. A mira vertical acha o mês mais próximo e um único tooltip mostra todas as séries ali." } } },
  render: () => liveStory(page, "mira", INFO),
};

export const UmEixo = {
  name: "Um eixo só",
  parameters: { docs: { description: { story: "Nada de dois eixos y. Duas grandezas de escalas diferentes viram um índice comum ou dois gráficos alinhados." } } },
  render: () => liveStory(page, "um-eixo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Escolha a linha quando a pergunta tem “quando” ou “desde”. Quatro cuidados resolvem quase tudo." } } },
  render: () => liveStory(page, "uso", INFO),
};
