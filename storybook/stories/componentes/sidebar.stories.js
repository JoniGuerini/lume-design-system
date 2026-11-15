// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/sidebar. Não edite: rode npm run stories.
import * as page from '../../../site/pages/sidebar.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/sidebar", group: '', label: "Sidebar" };

export default {
  title: "Componentes/Navegação/Sidebar",
  id: "componentes-sidebar",
  parameters: { docs: { description: { component: "A navegação na lateral: marca, busca, os lugares de todo dia e grupos que recolhem. No desktop, ela encolhe até ficar só com os ícones; no celular, vira gaveta.\n\nDocumentação completa: https://lumeui.dev/#/componentes/sidebar" } } },
};

export const Anatomia = {
  name: "Anatomia",
  parameters: { docs: { description: { story: "A sidebar do próprio site, com menos páginas. Os grupos abrem e fecham, e clicar num item marca a página atual. Passe o mouse ou foque uma parte da lista para destacá-la." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Item = {
  name: "Item",
  parameters: { docs: { description: { story: "Ícone de 20 px, rótulo e, se for o caso, a bolinha. Os estados podem ser forçados com data-state." } } },
  render: () => liveStory(page, "item", INFO),
};

export const Recolhida = {
  name: "Aberta e recolhida",
  parameters: { docs: { description: { story: "No desktop, a sidebar recolhe para 76 px e deixa o conteúdo respirar. Os ícones ficam na mesma coluna nos dois estados, por isso nada pula na animação." } } },
  render: () => liveStory(page, "recolhida", INFO),
};

export const Gaveta = {
  name: "No celular",
  parameters: { docs: { description: { story: "Abaixo de 1024 px a sidebar sai da tela e vira gaveta, aberta pelo botão de menu da topbar. A navbar usa a mesma gaveta." } } },
  render: () => liveStory(page, "gaveta", INFO),
};

export const Comportamento = {
  name: "Comportamento",
  parameters: { docs: { description: { story: "Os detalhes que fazem a sidebar parecer quieta: nada muda sem motivo e tudo volta como estava." } } },
  render: () => liveStory(page, "comportamento", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "O HTML é fixo; a navegação é desenhada a partir de uma lista. A sidebar vive dentro do .ds-shell: veja o App shell para a moldura inteira." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "A sidebar some quando está bem feita." } } },
  render: () => liveStory(page, "uso", INFO),
};
