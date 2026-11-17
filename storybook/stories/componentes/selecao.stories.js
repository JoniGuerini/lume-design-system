// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/selecao. Não edite: rode npm run stories.
import * as page from '../../../site/pages/selecao.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/selecao", group: '', label: "Select" };

export default {
  title: "Components/Forms/Select",
  id: "componentes-selecao",
  parameters: { docs: { description: { component: "For choosing one or several options from a list. The list is Lume’s own — the same look as menus, with search when it grows — but the value lives in a real <select> that goes along with the form.\n\nFull documentation: https://lumeui.dev/#/componentes/selecao" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Combine search, multiple choice, display, and limit. The list on the stage really works — keyboard included." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Qual = {
  name: "Which to use",
  parameters: { docs: { description: { story: "Three kinds of select for forms, and the chip with a menu for filters. The lists look the same; what changes is what happens on choosing." } } },
  render: () => liveStory(page, "qual", INFO),
};

export const ComBusca = {
  name: "Searchable",
  parameters: { docs: { description: { story: "With data-search, the list gets a field at the top and focus goes straight to it. It filters ignoring accents and case — group names included." } } },
  render: () => liveStory(page, "com-busca", INFO),
};

export const Multipla = {
  name: "Multiple choice",
  parameters: { docs: { description: { story: "With multiple, each option gets a checkbox and the list doesn’t close on choosing. The chosen ones become chips in the field — up to two lines, then “+N”." } } },
  render: () => liveStory(page, "multipla", INFO),
};

export const Tamanhos = {
  name: "Sizes",
  parameters: { docs: { description: { story: "The same three as the text field — they line up side by side in a form. Use data-size on the select; in multiple, the chips follow." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "The same as the text field’s, in single and multiple. To document and test, force hover or focus with data-ds-state on the select." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Grupos = {
  name: "Groups and disabled",
  parameters: { docs: { description: { story: "<optgroup> becomes a group label in the list; <option disabled> shows, but the keyboard and clicks skip it." } } },
  render: () => liveStory(page, "grupos", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Pick the type by the size of the list and the number of choices." } } },
  render: () => liveStory(page, "uso", INFO),
};
