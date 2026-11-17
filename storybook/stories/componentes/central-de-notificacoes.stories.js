// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/central-de-notificacoes. Não edite: rode npm run stories.
import * as page from '../../../site/pages/central-de-notificacoes.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/central-de-notificacoes", group: '', label: "Notification center" };

export default {
  title: "Components/Feedback/Notification center",
  id: "componentes-central-de-notificacoes",
  parameters: { docs: { description: { component: "The bell that opens the list of what happened, for each person. The number shows how many are left to read; opening a notification marks it as read.\n\nFull documentation: https://lumeui.dev/#/componentes/central-de-notificacoes" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Open the bell and click a notification. “A new one arrived” shows what happens when one arrives with the list closed." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "The panel is always the same; what changes is what’s in it." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "The number on the bell uses the indicator color; above 99, it becomes “99+”." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "You provide the bell and the list; JavaScript draws the panel and the number and handles what’s read." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Notification, toast, or banner?" } } },
  render: () => liveStory(page, "uso", INFO),
};
