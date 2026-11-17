// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/visualizador-de-imagem. Não edite: rode npm run stories.
import * as page from '../../../site/pages/visualizador-de-imagem.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/visualizador-de-imagem", group: '', label: "Image viewer" };

export default {
  title: "Components/Content/Image viewer",
  id: "componentes-visualizador-de-imagem",
  parameters: { docs: { description: { component: "Opens a large image over the page, with zoom, panning, and the others in the same gallery. The thumbnail stays on the page; the full image only when people ask for it.\n\nFull documentation: https://lumeui.dev/#/componentes/visualizador-de-imagem" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Click a capture. Inside, use the mouse wheel or + and −, drag to move around, and ← → to switch." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "The same viewer, opened from thumbnails or from code." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "The thumbnail zooms in slightly on hover and shows the ring on focus. The magnifier cursor says it opens." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "The thumbnail is a link to the large image: without JavaScript, it still opens. mountImageViewer wires every link in an area." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Viewer, carousel, or modal?" } } },
  render: () => liveStory(page, "uso", INFO),
};
