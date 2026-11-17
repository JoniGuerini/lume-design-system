// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/seletor-de-horario. Não edite: rode npm run stories.
import * as page from '../../../site/pages/seletor-de-horario.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/seletor-de-horario", group: '', label: "Time picker" };

export default {
  title: "Components/Forms/Time picker",
  id: "componentes-seletor-de-horario",
  parameters: { docs: { description: { component: "For choosing hours and minutes. Type it however you like or pick from the list, shown in the language’s format.\n\nFull documentation: https://lumeui.dev/#/componentes/seletor-de-horario" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Try typing 1430, 14h30, or 2:30 pm. All three become the same time." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "The step sets the list options, but any minute can be typed." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "The same as the Text field." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Code",
  parameters: { docs: { description: { story: "It works with createForm, like the other fields." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
