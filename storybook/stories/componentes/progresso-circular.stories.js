// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/progresso-circular. Não edite: rode npm run stories.
import * as page from '../../../site/pages/progresso-circular.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/progresso-circular", group: '', label: "Circular progress" };

export default {
  title: "Components/Feedback/Circular progress",
  id: "componentes-progresso-circular",
  parameters: { docs: { description: { component: "The same progress as the bar, in a ring. It fits in a card, a header, or next to a list item, where a bar wouldn’t have the width.\n\nFull documentation: https://lumeui.dev/#/componentes/progresso-circular" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "progressRingHtml builds the ring and setProgressRing changes the value. With no value, the arc spins." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "The tones are the bar’s: for the result, not along the way." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "The markup comes ready; to change the value, call setProgressRing." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Ring, bar, or spinner?" } } },
  render: () => liveStory(page, "uso", INFO),
};
