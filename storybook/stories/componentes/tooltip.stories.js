// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/tooltip. Não edite: rode npm run stories.
import * as page from '../../../site/pages/tooltip.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/tooltip", group: '', label: "Tooltip" };

export default {
  title: "Components/Overlays/Tooltip",
  id: "componentes-tooltip",
  parameters: { docs: { description: { component: "A short hint that appears on hover or focus. It names icons and shows shortcuts — it never holds information people need to move on.\n\nFull documentation: https://lumeui.dev/#/componentes/tooltip" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "The pinned tooltip shows the look. Hover or Tab to the trigger to see the real one." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Posicoes = {
  name: "Placements",
  parameters: { docs: { description: { story: "Top is the default. Pick another when the tooltip would cover something important or the trigger sits on an edge — near the screen limit, it adjusts on its own." } } },
  render: () => liveStory(page, "posicoes", INFO),
};

export const Atalhos = {
  name: "With a shortcut",
  parameters: { docs: { description: { story: "The best place to teach a shortcut is the action’s tooltip. Use data-ds-tooltip-kbd." } } },
  render: () => liveStory(page, "atalhos", INFO),
};

export const Comportamento = {
  name: "Behavior",
  parameters: { docs: { description: { story: "A short delay keeps tooltips from flickering when the pointer just passes by. After the first one, the next ones show right away." } } },
  render: () => liveStory(page, "comportamento", INFO),
};

export const QuandoNao = {
  name: "When not to use",
  parameters: { docs: { description: { story: "If people need the information to continue, it can’t be hidden." } } },
  render: () => liveStory(page, "quando-nao", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Short, useful, and only when the element doesn’t speak for itself." } } },
  render: () => liveStory(page, "uso", INFO),
};
