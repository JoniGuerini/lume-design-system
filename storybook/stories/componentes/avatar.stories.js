// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/avatar. Não edite: rode npm run stories.
import * as page from '../../../site/pages/avatar.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/avatar", group: '', label: "Avatar" };

export default {
  title: "Componentes/Conteúdo/Avatar",
  id: "componentes-avatar",
  parameters: { docs: { description: { component: "Representa uma pessoa ou conta. Foto quando existe, iniciais num tom estável quando não — e sempre com um nome por trás.\n\nDocumentação completa: https://lumeui.dev/#/componentes/avatar" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Troque o nome para ver as iniciais e o tom mudarem. “Imagem que falhou” mostra o fallback em ação." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Tamanhos = {
  name: "Tamanhos",
  parameters: { docs: { description: { story: "Cinco tamanhos. As iniciais e o status acompanham a proporção sozinhos." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const TiposDeConteudo = {
  name: "Conteúdo",
  parameters: { docs: { description: { story: "A ordem de preferência é sempre a mesma: imagem, iniciais, ícone." } } },
  render: () => liveStory(page, "tipos-de-conteudo", INFO),
};

export const Tons = {
  name: "Tons",
  parameters: { docs: { description: { story: "Nove tons das paletas de apoio, levemente tingidos sobre a superfície. O tom vem do nome: a mesma pessoa tem sempre a mesma cor, em qualquer tela." } } },
  render: () => liveStory(page, "tons", INFO),
};

export const Status = {
  name: "Status",
  parameters: { docs: { description: { story: "Um ponto no canto, com um anel na cor do fundo para separar. Status não é só cor: diga também no nome acessível ou no texto ao lado." } } },
  render: () => liveStory(page, "status", INFO),
};

export const Grupo = {
  name: "Grupo",
  parameters: { docs: { description: { story: "Avatares sobrepostos para mostrar quem participa. Até quatro rostos e um “+N” para o resto. Passe o mouse para ver os nomes." } } },
  render: () => liveStory(page, "grupo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Três cuidados para o avatar ajudar a reconhecer pessoas." } } },
  render: () => liveStory(page, "uso", INFO),
};
