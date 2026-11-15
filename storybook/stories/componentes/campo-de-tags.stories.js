// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/campo-de-tags. Não edite: rode npm run stories.
import * as page from '../../../site/pages/campo-de-tags.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/campo-de-tags", group: '', label: "Campo de tags" };

export default {
  title: "Componentes/Formulários/Campo de tags",
  id: "componentes-campo-de-tags",
  parameters: { docs: { description: { component: "Para vários valores livres dentro de um campo só, como assuntos, destinatários ou palavras-chave. Se as opções são uma lista fechada, use a Seleção múltipla.\n\nDocumentação completa: https://lumeui.dev/#/componentes/campo-de-tags" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Digite e tecle Enter ou vírgula. Cole uma lista separada por vírgulas. Com o campo vazio, Backspace marca a última tag e, de novo, apaga." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "O campo cresce em linhas conforme as tags entram. Regras próprias explicam por que uma tag não entrou." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Hover e foco seguem o Campo de texto e podem ser forçados com data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "Funciona com createForm: com required, ter pelo menos uma tag já basta." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
