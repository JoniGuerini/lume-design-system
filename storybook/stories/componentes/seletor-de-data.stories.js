// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/seletor-de-data. Não edite: rode npm run stories.
import * as page from '../../../site/pages/seletor-de-data.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/seletor-de-data", group: '', label: "Date picker" };

export default {
  title: "Components/Forms/Date picker",
  id: "componentes-seletor-de-data",
  parameters: { docs: { description: { component: "For choosing a day or a range. You can type the date or open the calendar, and both lead to the same value.\n\nFull documentation: https://lumeui.dev/#/componentes/seletor-de-data" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Type a date or open the calendar. The panel uses the stage’s theme." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "One day is the default. With mode: 'range', the first click sets the start and the second, the end." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "The field follows the Text field states. Hover and focus can be forced with data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Formulario = {
  name: "In forms",
  parameters: { docs: { description: { story: "It works with createForm: required and format errors show up as in the other fields. The ISO value goes in a hidden input, with the field’s name." } } },
  render: () => liveStory(page, "formulario", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When to use it and when to prefer something else." } } },
  render: () => liveStory(page, "uso", INFO),
};
