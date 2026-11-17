// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/alerta. Não edite: rode npm run stories.
import * as page from '../../../site/pages/alerta.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/alerta", group: '', label: "Alert" };

export default {
  title: "Components/Feedback/Alert",
  id: "componentes-alerta",
  parameters: { docs: { description: { component: "A message on the page itself, which stays visible until it no longer applies. To confirm something that just happened and then disappear, use the Toast.\n\nFull documentation: https://lumeui.dev/#/componentes/alerta" } } },
};

export const Configuravel = {
  name: 'Configurable',
  args: { tone: 'info', title: 'Update available', text: 'The new version goes live tonight.', compact: false },
  argTypes: { tone: { control: 'select', options: ['info', 'success', 'warning', 'danger'] } },
  render: ({ tone, title, text, compact }) =>
    `<div class="ds-alert ds-alert--${tone}${compact ? ' ds-alert--compact' : ''}" role="status"><div class="ds-alert__body">${title && !compact ? `<p class="ds-alert__title">${title}</p>` : ''}<p class="ds-alert__text">${text}</p></div></div>`,
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Just HTML and CSS. You wire up the close button, if there is one." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Tons = {
  name: "Tones",
  parameters: { docs: { description: { story: "The tone never comes alone: the icon and text say the same as the color." } } },
  render: () => liveStory(page, "tons", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "With an action to resolve it, or compact to fit inside a panel." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Alert, Toast, or Modal?" } } },
  render: () => liveStory(page, "uso", INFO),
};
