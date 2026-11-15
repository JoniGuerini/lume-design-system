// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/banner-de-anuncio. Não edite: rode npm run stories.
import * as page from '../../../site/pages/banner-de-anuncio.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/banner-de-anuncio", group: '', label: "Banner de anúncio" };

export default {
  title: "Componentes/Feedback/Banner de anúncio",
  id: "componentes-banner-de-anuncio",
  parameters: { docs: { description: { component: "Uma faixa no topo do app para um recado que vale para todo mundo: uma versão nova, uma mudança que vem aí. A pessoa fecha e o banner lembra que ela já viu.\n\nDocumentação completa: https://lumeui.dev/#/componentes/banner-de-anuncio" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Feche o banner: com id, createBanner guarda no navegador e ele não volta ao recarregar." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "O tom diz o tipo de recado; o ícone e o texto dizem o mesmo que a cor." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "A marcação é do banner inteiro; o JavaScript só fecha e lembra." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Banner, alerta ou toast?" } } },
  render: () => liveStory(page, "uso", INFO),
};
