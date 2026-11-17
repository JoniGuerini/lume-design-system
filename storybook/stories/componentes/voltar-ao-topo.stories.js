// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/voltar-ao-topo. Não edite: rode npm run stories.
import * as page from '../../../site/pages/voltar-ao-topo.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/voltar-ao-topo", group: '', label: "Back to top" };

export default {
  title: "Components/Navigation/Back to top",
  id: "componentes-voltar-ao-topo",
  parameters: { docs: { description: { component: "On long pages, it takes you back to the start in one click. It stays hidden until you’ve scrolled a good way.\n\nFull documentation: https://lumeui.dev/#/componentes/voltar-ao-topo" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Scroll the area until the button appears in the corner, then click it. This site uses the same button: scroll this page to see it." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "Hover and focus can be forced with data-state. The button appears only with data-visible." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "The button goes into parent, which needs a position." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
