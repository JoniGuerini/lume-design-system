// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/barra-de-ferramentas. Não edite: rode npm run stories.
import * as page from '../../../site/pages/barra-de-ferramentas.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/barra-de-ferramentas", group: '', label: "Barra de ferramentas" };

export default {
  title: "Componentes/Ações/Barra de ferramentas",
  id: "componentes-barra-de-ferramentas",
  parameters: { docs: { description: { component: "Agrupa botões de ícone de uma mesma área, como os de formatação de um editor. A barra inteira é uma parada só do Tab; as setas andam entre os botões.\n\nDocumentação completa: https://lumeui.dev/#/componentes/barra-de-ferramentas" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Os botões mudam o texto de verdade. No alinhamento, só um fica apertado." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Com contorno, para a barra que fica sobre o conteúdo; ds-toolbar--plain quando ela já está dentro de uma superfície, como o cabeçalho de um card." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "O botão apertado ganha o fundo de selecionado, que continua com o mouse em cima. Desativado fica de fora das setas." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "Os botões são seus; a barra cuida do Tab, das setas e do aria-pressed." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
