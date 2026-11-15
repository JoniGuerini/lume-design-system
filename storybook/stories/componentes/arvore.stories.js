// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/arvore. Não edite: rode npm run stories.
import * as page from '../../../site/pages/arvore.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/arvore", group: '', label: "Árvore" };

export default {
  title: "Componentes/Navegação/Árvore",
  id: "componentes-arvore",
  parameters: { docs: { description: { component: "Mostra níveis aninhados, como pastas ou categorias, sem ocupar a tela toda. Só as partes abertas aparecem.\n\nDocumentação completa: https://lumeui.dev/#/componentes/arvore" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Experimente pelo teclado: setas para andar, abrir e fechar, e letras para pular." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Ícones e informações laterais são opcionais." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Hover e foco podem ser forçados com data-state na linha." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "O aria-label do .ds-tree dá nome à árvore para o leitor de tela." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
