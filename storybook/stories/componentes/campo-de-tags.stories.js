// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/campo-de-tags. Não edite: rode npm run stories.
import * as page from '../../../site/pages/campo-de-tags.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/campo-de-tags", group: '', label: "Tag field" };

export default {
  title: "Components/Forms/Tag field",
  id: "componentes-campo-de-tags",
  parameters: { docs: { description: { component: "For several free values inside one field, like topics, recipients, or keywords. If the options are a closed list, use the multiple Select.\n\nFull documentation: https://lumeui.dev/#/componentes/campo-de-tags" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Type and press Enter or comma. Paste a comma-separated list. With the field empty, Backspace marks the last tag and, pressed again, deletes it." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "The field grows in lines as tags come in. Custom rules explain why a tag didn’t get in." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "Hover and focus follow the Text field and can be forced with data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "It works with createForm: with required, having at least one tag is enough." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
