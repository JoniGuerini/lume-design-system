// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/abas. Não edite: rode npm run stories.
import * as page from '../../../site/pages/abas.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/abas", group: '', label: "Abas" };

export default {
  title: "Componentes/Navegação/Abas",
  id: "componentes-abas",
  parameters: { docs: { description: { component: "Alternam entre vistas do mesmo assunto sem sair da página. Uma aba ativa por vez, sempre com o painel logo abaixo.\n\nDocumentação completa: https://lumeui.dev/#/componentes/abas" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Monte as abas e use de verdade: clique ou navegue com as setas. O código acompanha." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Aparencias = {
  name: "Aparências",
  parameters: { docs: { description: { story: "A sublinhada organiza seções de conteúdo; a segmentada troca a vista de uma mesma coisa. As duas vêm em médio e pequeno." } } },
  render: () => liveStory(page, "aparencias", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Hover e foco podem ser forçados com data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Anatomia = {
  name: "Anatomia",
  parameters: { docs: { description: { story: "Quatro partes. Cada aba aponta para o seu painel, e o painel aponta de volta." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Comportamento = {
  name: "Comportamento",
  parameters: { docs: { description: { story: "Na ativação automática, as setas já trocam o painel. Na manual, as setas só movem o foco — use quando abrir um painel custa caro (busca, carregamento)." } } },
  render: () => liveStory(page, "comportamento", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Três regras para abas que não confundem." } } },
  render: () => liveStory(page, "uso", INFO),
};
