// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/chip. Não edite: rode npm run stories.
import * as page from '../../../site/pages/chip.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/chip", group: '', label: "Chip" };

export default {
  title: "Componentes/Ações/Chip",
  id: "componentes-chip",
  parameters: { docs: { description: { component: "Pílula com contorno para filtrar, escolher e mostrar seleções. Mais leve que um botão, pensada para aparecer em grupo.\n\nDocumentação completa: https://lumeui.dev/#/componentes/chip" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Escolha o tipo, o tamanho e o estado. O código acompanha." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Tipos = {
  name: "Tipos",
  parameters: { docs: { description: { story: "O mesmo visual, três trabalhos diferentes. Todos funcionam aqui." } } },
  render: () => liveStory(page, "tipos", INFO),
};

export const Grupo = {
  name: "Filtros em grupo",
  parameters: { docs: { description: { story: "Filtros combinam: ligue mais de um. Nenhum ligado é o mesmo que todos." } } },
  render: () => liveStory(page, "grupo", INFO),
};

export const Tamanhos = {
  name: "Tamanhos",
  parameters: { docs: { description: { story: "Médio acompanha botões e campos; pequeno vai em barras de filtro e dentro de cards." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Selecionado ganha fundo e contorno mais forte — e, no filtro, a marca de check, para não depender só da cor. Force um estado com data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Três regras para chips que ajudam em vez de enfeitar." } } },
  render: () => liveStory(page, "uso", INFO),
};
