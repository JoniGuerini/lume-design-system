// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/codigo-de-verificacao. Não edite: rode npm run stories.
import * as page from '../../../site/pages/codigo-de-verificacao.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/codigo-de-verificacao", group: '', label: "Verification code" };

export default {
  title: "Components/Forms/Verification code",
  id: "componentes-codigo-de-verificacao",
  parameters: { docs: { description: { component: "For the two-step sign-in code. It looks like six boxes, but it’s a single field, which is why pasting and the phone’s autofill just work.\n\nFull documentation: https://lumeui.dev/#/componentes/codigo-de-verificacao" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Type or paste a code. When it’s complete, the component lets you know." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "The number of boxes follows your verification service." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "Focus and error can be forced with data-state and data-error." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Exemplo = {
  name: "On a verification screen",
  parameters: { docs: { description: { story: "Try it: the right code here is 123456. A wrong one shows the message, clears the field, and returns focus, so you can try again without the mouse." } } },
  render: () => liveStory(page, "exemplo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and what to offer with it." } } },
  render: () => liveStory(page, "uso", INFO),
};
