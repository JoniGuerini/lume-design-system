// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/upload. Não edite: rode npm run stories.
import * as page from '../../../site/pages/upload.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/upload", group: '', label: "File upload" };

export default {
  title: "Components/Forms/File upload",
  id: "componentes-upload",
  parameters: { docs: { description: { component: "For sending files, by dragging or browsing. Each file has its own progress and its own error, so one failure doesn’t get in the way of the others.\n\nFull documentation: https://lumeui.dev/#/componentes/upload" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Files don’t leave your computer: the upload is simulated." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "Without the upload option, files stay in the input and go with the form. With it, each one is sent as soon as it joins the list." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "The area can be forced with data-state and data-dragging." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "The upload function receives the file, reports progress (0 to 1), and returns a promise. Any error it throws shows on the file’s row." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and what to pair it with." } } },
  render: () => liveStory(page, "uso", INFO),
};
