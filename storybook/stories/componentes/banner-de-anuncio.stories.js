// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/banner-de-anuncio. Não edite: rode npm run stories.
import * as page from '../../../site/pages/banner-de-anuncio.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/banner-de-anuncio", group: '', label: "Announcement banner" };

export default {
  title: "Components/Feedback/Announcement banner",
  id: "componentes-banner-de-anuncio",
  parameters: { docs: { description: { component: "A strip at the top of the app for a message that applies to everyone: a new version, a change on the way. People close it and the banner remembers they saw it.\n\nFull documentation: https://lumeui.dev/#/componentes/banner-de-anuncio" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Close the banner: with an id, createBanner stores it in the browser and it doesn’t come back on reload." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "The tone says what kind of message it is; the icon and text say the same as the color." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "The markup is the whole banner; JavaScript only closes it and remembers." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Banner, alert, or toast?" } } },
  render: () => liveStory(page, "uso", INFO),
};
