// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/tabela. Não edite: rode npm run stories.
import * as page from '../../../site/pages/tabela.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/tabela", group: '', label: "Tabela" };

export default {
  title: "Componentes/Conteúdo/Tabela",
  id: "componentes-tabela",
  parameters: { docs: { description: { component: "Para comparar dados em linhas e colunas. Números alinhados, cabeçalho que ordena e seleção que não depende só da cor.\n\nDocumentação completa: https://lumeui.dev/#/componentes/tabela" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Combine densidade, seleção, cabeçalho fixo e legenda. O código mostra duas linhas de exemplo." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Interacao = {
  name: "Ordenar e selecionar",
  parameters: { docs: { description: { story: "Clique num cabeçalho para ordenar (de novo inverte). Marque linhas para agir em lote — a contagem aparece em cima." } } },
  render: () => liveStory(page, "interacao", INFO),
};

export const Anatomia = {
  name: "Anatomia",
  parameters: { docs: { description: { story: "Uma tabela nativa com cinco peças. Nada de grid de divs: a semântica vem pronta." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Densidade = {
  name: "Densidade",
  parameters: { docs: { description: { story: "Confortável é o padrão. Compacta para telas de operação, com muitas linhas para varrer." } } },
  render: () => liveStory(page, "densidade", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Uma tabela sem dados ainda é uma tabela: mantenha o cabeçalho e diga o que fazer. Carregando, mostre a forma das linhas — sem brilho." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Três regras para tabelas fáceis de ler." } } },
  render: () => liveStory(page, "uso", INFO),
};
