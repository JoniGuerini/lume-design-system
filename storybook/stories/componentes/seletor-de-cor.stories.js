// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/seletor-de-cor. Não edite: rode npm run stories.
import * as page from '../../../site/pages/seletor-de-cor.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/seletor-de-cor", group: '', label: "Seletor de cor" };

export default {
  title: "Componentes/Formulários/Seletor de cor",
  id: "componentes-seletor-de-cor",
  parameters: { docs: { description: { component: "Para escolher uma cor livre ou uma da paleta. Arraste na área, ajuste o matiz, digite o hexadecimal ou clique numa amostra.\n\nDocumentação completa: https://lumeui.dev/#/componentes/seletor-de-cor" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Digite 3b82f6 ou #abc no campo: com ou sem #, em 3 ou 6 dígitos." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "O campo cabe num formulário e abre o seletor num painel. O seletor solto fica sempre à vista, para telas de configuração." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "O campo tem os estados do Campo de texto. Hexadecimal que não é cor mostra o erro ao sair do campo." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "O formulário recebe o hexadecimal do campo; funciona com createForm, como os outros campos." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
