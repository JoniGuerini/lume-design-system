// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/selecao. Não edite: rode npm run stories.
import * as page from '../../../site/pages/selecao.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/selecao", group: '', label: "Seleção" };

export default {
  title: "Componentes/Formulários/Seleção",
  id: "componentes-selecao",
  parameters: { docs: { description: { component: "Para escolher uma ou várias opções numa lista. A lista é do Lume — mesmo visual dos menus, com busca quando cresce —, mas o valor mora num <select> real, que vai junto no formulário.\n\nDocumentação completa: https://lumeui.dev/#/componentes/selecao" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Combine busca, múltipla escolha, exibição e limite. A lista do palco funciona de verdade — teclado incluído." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Qual = {
  name: "Qual usar",
  parameters: { docs: { description: { story: "Três tipos de seleção para formulários e o chip com menu para filtros. As listas têm o mesmo visual; muda o que acontece ao escolher." } } },
  render: () => liveStory(page, "qual", INFO),
};

export const ComBusca = {
  name: "Com busca",
  parameters: { docs: { description: { story: "Com data-search, a lista ganha um campo no topo e o foco vai direto para ele. Filtra sem acento e sem diferenciar maiúsculas — inclusive pelo nome do grupo." } } },
  render: () => liveStory(page, "com-busca", INFO),
};

export const Multipla = {
  name: "Múltipla escolha",
  parameters: { docs: { description: { story: "Com multiple, cada opção ganha uma caixa de marcação e a lista não fecha ao escolher. Os escolhidos viram chips no campo — até duas linhas, depois “+N”." } } },
  render: () => liveStory(page, "multipla", INFO),
};

export const Tamanhos = {
  name: "Tamanhos",
  parameters: { docs: { description: { story: "Os mesmos três do campo de texto — alinham lado a lado num formulário. Use data-size no select; na múltipla, os chips acompanham." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Iguais aos do campo de texto, na única e na múltipla. Para documentar e testar, force hover ou foco com data-ds-state no select." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Grupos = {
  name: "Grupos e desativados",
  parameters: { docs: { description: { story: "<optgroup> vira um rótulo de grupo na lista; <option disabled> aparece, mas o teclado e o clique pulam a opção." } } },
  render: () => liveStory(page, "grupos", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Escolha o tipo pelo tamanho da lista e pelo número de escolhas." } } },
  render: () => liveStory(page, "uso", INFO),
};
