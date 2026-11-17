// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/checkbox-radio. Não edite: rode npm run stories.
import * as page from '../../../site/pages/checkbox-radio.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/checkbox-radio", group: '', label: "Checkbox and radio" };

export default {
  title: "Components/Forms/Checkbox and radio",
  id: "componentes-checkbox-radio",
  parameters: { docs: { description: { component: "A checkbox to check independent items; a radio to pick just one among a few options. Both with a clickable label.\n\nFull documentation: https://lumeui.dev/#/componentes/checkbox-radio" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Native inputs with their own look. The one on the stage works — click the label." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Qual = {
  name: "Checkbox or radio?",
  parameters: { docs: { description: { story: "There’s only one question: can people pick more than one option?" } } },
  render: () => liveStory(page, "qual", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "Checked uses the brand color; the unchecked outline has 3:1 contrast so it can be seen without relying on the label. Hover and focus can be forced with data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Grupos = {
  name: "Groups",
  parameters: { docs: { description: { story: "Related options sit in a <fieldset> with a <legend>: the screen reader announces the question before the answers." } } },
  render: () => liveStory(page, "grupos", INFO),
};

export const Todos = {
  name: "Select all",
  parameters: { docs: { description: { story: "The indeterminate state only makes sense in a checkbox that summarizes others: some checked, some not." } } },
  render: () => liveStory(page, "todos", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Three rules for clear choices." } } },
  render: () => liveStory(page, "uso", INFO),
};
