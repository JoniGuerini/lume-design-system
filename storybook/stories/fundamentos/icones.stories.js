// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/fundamentos/icones. Não edite: rode npm run stories.
import * as page from '../../../site/pages/icones.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/fundamentos/icones", group: '', label: "Ícones" };

export default {
  title: "Fundamentos/Ícones",
  id: "fundamentos-icones",
  parameters: { docs: { description: { component: "Uma biblioteca própria, desenhada no mesmo grid e com o mesmo traço. Contorno fino, pontas redondas e cor herdada do texto.\n\nDocumentação completa: https://lumeui.dev/#/fundamentos/icones" } } },
};

export const Biblioteca = {
  name: "Biblioteca",
  parameters: { docs: { description: { story: "Busque pelo nome ou por palavras em português, inglês ou espanhol. Clique num ícone para copiar o código." } } },
  render: () => liveStory(page, "biblioteca", INFO),
};

export const Anatomia = {
  name: "Anatomia",
  parameters: { docs: { description: { story: "As mesmas regras para todos os ícones. É isso que faz a biblioteca parecer uma família." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Tamanhos = {
  name: "Tamanhos",
  parameters: { docs: { description: { story: "Cinco tamanhos, todos em tokens. Abaixo de 16 px o traço engrossa sozinho para manter a leitura." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const Codigo = {
  name: "Em código",
  parameters: { docs: { description: { story: "Dois jeitos de usar: a função icon() em JavaScript ou o elemento <ds-icon> direto no HTML." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Ícone ajuda a reconhecer, não substitui a palavra." } } },
  render: () => liveStory(page, "uso", INFO),
};
