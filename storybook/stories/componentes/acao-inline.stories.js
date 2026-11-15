// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/acao-inline. Não edite: rode npm run stories.
import * as page from '../../../site/pages/acao-inline.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/acao-inline", group: '', label: "Ação inline" };

export default {
  title: "Componentes/Ações/Ação inline",
  id: "componentes-acao-inline",
  parameters: { docs: { description: { component: "A ação mais discreta do sistema. Vive dentro do conteúdo — “Na cena +”, “Ver histórico →” — e só se destaca quando o ponteiro chega.\n\nDocumentação completa: https://lumeui.dev/#/componentes/acao-inline" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Escolha o elemento, o ícone e o sinal. O palco mostra a ação dentro de uma seção, onde ela costuma morar." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Formas = {
  name: "Formas",
  parameters: { docs: { description: { story: "O sinal no fim conta o que acontece: + adiciona ou abre algo aqui; → leva para outro lugar." } } },
  render: () => liveStory(page, "formas", INFO),
};

export const Disclosure = {
  name: "Mostrar e esconder",
  parameters: { docs: { description: { story: "Com <details>, a ação inline abre conteúdo extra no lugar. O + gira e vira × quando está aberto. Experimente:" } } },
  render: () => liveStory(page, "disclosure", INFO),
};

export const InlineGhost = {
  name: "Inline ou ghost?",
  parameters: { docs: { description: { story: "Os dois são discretos. A diferença é onde estão." } } },
  render: () => liveStory(page, "inline-ghost", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Três regras para ela continuar discreta." } } },
  render: () => liveStory(page, "uso", INFO),
};
