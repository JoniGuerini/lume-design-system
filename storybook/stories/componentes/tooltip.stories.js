// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/tooltip. Não edite: rode npm run stories.
import * as page from '../../../site/pages/tooltip.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/tooltip", group: '', label: "Tooltip" };

export default {
  title: "Componentes/Camadas/Tooltip",
  id: "componentes-tooltip",
  parameters: { docs: { description: { component: "Uma dica curta que aparece no hover ou no foco. Nomeia ícones e mostra atalhos — nunca guarda informação que a pessoa precisa para seguir.\n\nDocumentação completa: https://lumeui.dev/#/componentes/tooltip" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "A dica fixa mostra o visual. Passe o mouse ou chegue com Tab no gatilho para ver a de verdade." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Posicoes = {
  name: "Posições",
  parameters: { docs: { description: { story: "Em cima é o padrão. Escolha outra quando a dica cobriria algo importante ou quando o gatilho está numa borda — perto do limite da tela, ela se ajusta sozinha." } } },
  render: () => liveStory(page, "posicoes", INFO),
};

export const Atalhos = {
  name: "Com atalho",
  parameters: { docs: { description: { story: "O melhor lugar para ensinar um atalho é a dica da ação. Use data-ds-tooltip-kbd." } } },
  render: () => liveStory(page, "atalhos", INFO),
};

export const Comportamento = {
  name: "Comportamento",
  parameters: { docs: { description: { story: "Uma espera curta evita dicas piscando quando o ponteiro só passa. Depois da primeira, as próximas aparecem na hora." } } },
  render: () => liveStory(page, "comportamento", INFO),
};

export const QuandoNao = {
  name: "Quando não usar",
  parameters: { docs: { description: { story: "Se a pessoa precisa da informação para continuar, ela não pode ficar escondida." } } },
  render: () => liveStory(page, "quando-nao", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Curta, útil e só quando o elemento não fala por si." } } },
  render: () => liveStory(page, "uso", INFO),
};
