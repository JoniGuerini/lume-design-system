// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/paginacao. Não edite: rode npm run stories.
import * as page from '../../../site/pages/paginacao.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/paginacao", group: '', label: "Paginação" };

export default {
  title: "Componentes/Navegação/Paginação",
  id: "componentes-paginacao",
  parameters: { docs: { description: { component: "Divide uma lista longa em páginas e diz onde a pessoa está. Use quando ela precisa voltar a um ponto ou comparar páginas.\n\nDocumentação completa: https://lumeui.dev/#/componentes/paginacao" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Experimente trocar o total e os itens por página." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "As partes aparecem conforme a necessidade: poucas páginas não precisam de reticências." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Hover e foco podem ser forçados com data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "onChange avisa a página e o tamanho; quem carrega os dados é você." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
