// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/avaliacao. Não edite: rode npm run stories.
import * as page from '../../../site/pages/avaliacao.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/avaliacao", group: '', label: "Rating" };

export default {
  title: "Components/Forms/Rating",
  id: "componentes-avaliacao",
  parameters: { docs: { description: { component: "Stars to give a score or show the average. To give a score, each star is a radio: the form sends the value with no extra code.\n\nFull documentation: https://lumeui.dev/#/componentes/avaliacao" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Hover to preview the score before clicking; click the same star again to clear it." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "Giving a score uses createRating. Just showing uses ratingHtml, which takes any decimal and cuts the star at the right point." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "A lit star uses the indicator color. On hover, the stars up to the pointer light up before the click." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "To give a score, an empty element; JavaScript adds the stars. To show one, the markup comes ready." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
