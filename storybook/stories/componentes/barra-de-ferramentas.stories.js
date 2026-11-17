// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/barra-de-ferramentas. Não edite: rode npm run stories.
import * as page from '../../../site/pages/barra-de-ferramentas.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/barra-de-ferramentas", group: '', label: "Toolbar" };

export default {
  title: "Components/Actions/Toolbar",
  id: "componentes-barra-de-ferramentas",
  parameters: { docs: { description: { component: "Groups icon buttons for the same area, like an editor’s formatting buttons. The whole bar is a single Tab stop; the arrow keys move between buttons.\n\nFull documentation: https://lumeui.dev/#/componentes/barra-de-ferramentas" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "The buttons really change the text. In alignment, only one stays pressed." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "With an outline, for a bar that sits over content; ds-toolbar--plain when it is already inside a surface, like a card header." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "A pressed button gets the selected background, which stays on hover. Disabled buttons are skipped by the arrow keys." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "The buttons are yours; the bar handles Tab, the arrow keys, and aria-pressed." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
