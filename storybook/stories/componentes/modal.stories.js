// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/modal. Não edite: rode npm run stories.
import * as page from '../../../site/pages/modal.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/modal", group: '', label: "Modal" };

export default {
  title: "Componentes/Camadas/Modal",
  id: "componentes-modal",
  parameters: { docs: { description: { component: "Interrompe o fluxo para uma decisão ou uma tarefa curta. Use pouco: tudo o que pode ficar na página, fica na página.\n\nDocumentação completa: https://lumeui.dev/#/componentes/modal" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "A prévia acompanha as escolhas. “Abrir de verdade” mostra o modal sobre a página, com foco, Esc e clique fora funcionando." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Anatomia = {
  name: "Anatomia",
  parameters: { docs: { description: { story: "Cinco partes. Título e ao menos uma saída são obrigatórios; o resto depende da decisão." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Tamanhos = {
  name: "Tamanhos",
  parameters: { docs: { description: { story: "A largura acompanha o conteúdo, nunca a tela. No celular todos ocupam a largura disponível." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const Confirmacao = {
  name: "Confirmação destrutiva",
  parameters: { docs: { description: { story: "Para o que não tem volta. O tom de perigo muda o ícone e a ação — e o foco começa em “Cancelar”." } } },
  render: () => liveStory(page, "confirmacao", INFO),
};

export const Comportamento = {
  name: "Comportamento",
  parameters: { docs: { description: { story: "O <dialog> nativo resolve foco e camadas. O componente cuida do resto." } } },
  render: () => liveStory(page, "comportamento", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Antes de abrir um modal, pergunte se a página não resolve." } } },
  render: () => liveStory(page, "uso", INFO),
};
