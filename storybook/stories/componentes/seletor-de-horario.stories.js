// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/seletor-de-horario. Não edite: rode npm run stories.
import * as page from '../../../site/pages/seletor-de-horario.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/seletor-de-horario", group: '', label: "Seletor de horário" };

export default {
  title: "Componentes/Formulários/Seletor de horário",
  id: "componentes-seletor-de-horario",
  parameters: { docs: { description: { component: "Para escolher horas e minutos. Digite do jeito que preferir ou escolha na lista, que aparece no formato do idioma.\n\nDocumentação completa: https://lumeui.dev/#/componentes/seletor-de-horario" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Experimente digitar 1430, 14h30 ou 2:30 pm. Os três viram o mesmo horário." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "O passo define as opções da lista, mas qualquer minuto pode ser digitado." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Os mesmos do Campo de texto." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "Funciona com createForm, como os outros campos." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
