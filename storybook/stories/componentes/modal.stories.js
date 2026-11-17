// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/modal. Não edite: rode npm run stories.
import * as page from '../../../site/pages/modal.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/modal", group: '', label: "Modal" };

export default {
  title: "Components/Overlays/Modal",
  id: "componentes-modal",
  parameters: { docs: { description: { component: "Interrupts the flow for a decision or a short task. Use it sparingly: whatever can stay on the page, stays on the page.\n\nFull documentation: https://lumeui.dev/#/componentes/modal" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "The preview follows your choices. “Open for real” shows the modal over the page, with focus, Esc, and outside click working." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Anatomia = {
  name: "Anatomy",
  parameters: { docs: { description: { story: "Five parts. A title and at least one way out are required; the rest depends on the decision." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Tamanhos = {
  name: "Sizes",
  parameters: { docs: { description: { story: "The width follows the content, never the screen. On phones they all take the available width." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const Confirmacao = {
  name: "Destructive confirmation",
  parameters: { docs: { description: { story: "For what can’t be undone. The danger tone changes the icon and the action — and focus starts on “Cancel”." } } },
  render: () => liveStory(page, "confirmacao", INFO),
};

export const Comportamento = {
  name: "Behavior",
  parameters: { docs: { description: { story: "The native <dialog> handles focus and layering. The component takes care of the rest." } } },
  render: () => liveStory(page, "comportamento", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Before opening a modal, ask whether the page can handle it." } } },
  render: () => liveStory(page, "uso", INFO),
};
