// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/seletor-de-data. Não edite: rode npm run stories.
import * as page from '../../../site/pages/seletor-de-data.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/seletor-de-data", group: '', label: "Seletor de data" };

export default {
  title: "Componentes/Formulários/Seletor de data",
  id: "componentes-seletor-de-data",
  parameters: { docs: { description: { component: "Para escolher um dia ou um período. Dá para digitar a data ou abrir o calendário, e as duas formas levam ao mesmo valor.\n\nDocumentação completa: https://lumeui.dev/#/componentes/seletor-de-data" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Digite uma data ou abra o calendário. O painel usa o tema do palco." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Um dia é o padrão. Com mode: 'range', o primeiro clique marca o início e o segundo, o fim." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "O campo segue os estados do Campo de texto. Hover e foco podem ser forçados com data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Formulario = {
  name: "Em formulários",
  parameters: { docs: { description: { story: "Funciona com createForm: required e os erros de formato aparecem como nos outros campos. O valor em ISO vai num input oculto, com o name do campo." } } },
  render: () => liveStory(page, "formulario", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
