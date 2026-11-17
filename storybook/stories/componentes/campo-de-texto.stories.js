// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/campo-de-texto. Não edite: rode npm run stories.
import * as page from '../../../site/pages/campo-de-texto.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/campo-de-texto", group: '', label: "Text field" };

export default {
  title: "Components/Forms/Text field",
  id: "componentes-campo-de-texto",
  parameters: { docs: { description: { component: "For people to type in. An always-visible label, a hint before the error, and messages that say how to fix it.\n\nFull documentation: https://lumeui.dev/#/componentes/campo-de-texto" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Build the field, check it in each theme, and copy the code. The field on the stage works: type to see the counter." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Anatomia = {
  name: "Anatomy",
  parameters: { docs: { description: { story: "Six parts; only the label and the container are required." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Tamanhos = {
  name: "Sizes",
  parameters: { docs: { description: { story: "Inside a .ds-form-field the default is medium. Use the same size as the buttons next to it." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "Hover and focus can also be forced with data-state on .ds-field, to document and test." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Multilinha = {
  name: "Multiline",
  parameters: { docs: { description: { story: "For text longer than one sentence. The same container, with .ds-field--multiline and a <textarea> that grows vertically." } } },
  render: () => liveStory(page, "multilinha", INFO),
};

export const Validacao = {
  name: "Validation",
  parameters: { docs: { description: { story: "Validate when people leave the field or submit — never on every keystroke. The message replaces the hint and says what to do." } } },
  render: () => liveStory(page, "validacao", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Three rules for forms that don’t give people a hard time." } } },
  render: () => liveStory(page, "uso", INFO),
};
