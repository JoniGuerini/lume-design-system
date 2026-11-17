// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/toast. Não edite: rode npm run stories.
import * as page from '../../../site/pages/toast.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/toast", group: '', label: "Toast" };

export default {
  title: "Components/Feedback/Toast",
  id: "componentes-toast",
  parameters: { docs: { description: { component: "Confirms that something happened, without interrupting. It shows at the bottom, goes away on its own, and can carry a short action, like undo.\n\nFull documentation: https://lumeui.dev/#/componentes/toast" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "The preview shows the look. “Show toast” — or one of the six dots in the thumbnail — fires the real one, in the chosen position." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Tons = {
  name: "Tones",
  parameters: { docs: { description: { story: "The background is always inverse — the toast stands out on any screen. The tone shows only in the icon, so the color doesn’t shout." } } },
  render: () => liveStory(page, "tons", INFO),
};

export const Acao = {
  name: "With an action",
  parameters: { docs: { description: { story: "A single action, short and reversible — “Undo”, “View”, “Try again”. With an action, the toast stays 5 s." } } },
  render: () => liveStory(page, "acao", INFO),
};

export const Comportamento = {
  name: "Behavior",
  parameters: { docs: { description: { story: "Predictable: always in the same place, always leaving on its own." } } },
  render: () => liveStory(page, "comportamento", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "To confirm, not to chat." } } },
  render: () => liveStory(page, "uso", INFO),
};
