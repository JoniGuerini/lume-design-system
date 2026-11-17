// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/editor-de-texto-rico. Não edite: rode npm run stories.
import * as page from '../../../site/pages/editor-de-texto-rico.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/editor-de-texto-rico", group: '', label: "Rich text editor" };

export default {
  title: "Components/Forms/Rich text editor",
  id: "componentes-editor-de-texto-rico",
  parameters: { docs: { description: { component: "A text field that formats: headings, lists, quotes, bold, italic, and links, with Lume’s toolbar. No dependencies, built on the browser’s contenteditable, and the HTML it produces is always clean.\n\nFull documentation: https://lumeui.dev/#/componentes/editor-de-texto-rico" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Write, select, and format. At the start of a line, # becomes a heading and - a list; Ctrl + K adds a link." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "The toolbar shows the groups you ask for in tools, in order." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "The border and focus are the Field’s. In the toolbar, the pressed button shows the formatting where the cursor is." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "With name, the editor creates a hidden field with the HTML, and the form sends it like any other field." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When formatting helps whoever will read it." } } },
  render: () => liveStory(page, "uso", INFO),
};
