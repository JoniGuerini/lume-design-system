// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/badge. Não edite: rode npm run stories.
import * as page from '../../../site/pages/badge.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/badge", group: '', label: "Badge" };

export default {
  title: "Components/Feedback/Badge",
  id: "componentes-badge",
  parameters: { docs: { description: { component: "A short status or count label. Small, quiet, and always meaningful — never decoration.\n\nFull documentation: https://lumeui.dev/#/componentes/badge" } } },
};

export const Configuravel = {
  name: 'Configurable',
  args: { tone: 'success', label: 'Published', small: false },
  argTypes: { tone: { control: 'select', options: ['neutral', 'brand', 'info', 'success', 'warning', 'danger'] } },
  render: ({ tone, label, small }) => `<span class="ds-badge ds-badge--${tone}${small ? ' ds-badge--sm' : ''}">${label}</span>`,
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Pick the tone, size, and type. In count mode, the label becomes a number (above 99, “99+”)." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Tons = {
  name: "Tones",
  parameters: { docs: { description: { story: "The tone says the type of status. A soft background, strong text, and a thin outline — legible in both themes, without shouting." } } },
  render: () => liveStory(page, "tons", INFO),
};

export const Tamanhos = {
  name: "Sizes",
  parameters: { docs: { description: { story: "Medium next to regular text; small in tables, dense lists, and card headers." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const Contagem = {
  name: "Count",
  parameters: { docs: { description: { story: "ds-badge--count centers the number and keeps a circle’s minimum width. Zero doesn’t show; above 99, show “99+”." } } },
  render: () => liveStory(page, "contagem", INFO),
};

export const Onde = {
  name: "Where to use",
  parameters: { docs: { description: { story: "A badge goes with something — a row, a title, an item. It’s never alone on the screen." } } },
  render: () => liveStory(page, "onde", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "A badge is information. If it doesn’t inform, it isn’t a badge." } } },
  render: () => liveStory(page, "uso", INFO),
};
