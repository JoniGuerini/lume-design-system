// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/editor-de-texto-rico. Não edite: rode npm run stories.
import * as page from '../../../site/pages/editor-de-texto-rico.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/editor-de-texto-rico", group: '', label: "Editor de texto rico" };

export default {
  title: "Componentes/Formulários/Editor de texto rico",
  id: "componentes-editor-de-texto-rico",
  parameters: { docs: { description: { component: "Um campo de texto que formata: títulos, listas, citações, negrito, itálico e links, com a barra de ferramentas do Lume. Sem dependências, sobre o contenteditable do navegador, e o HTML que sai é sempre limpo.\n\nDocumentação completa: https://lumeui.dev/#/componentes/editor-de-texto-rico" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Escreva, selecione e formate. No começo de uma linha, # vira título e - vira lista; Ctrl + K põe um link." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "A barra mostra os grupos que você pedir em tools, na ordem." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "O contorno e o foco são os do Campo. Na barra, o botão apertado mostra a formatação de onde está o cursor." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "Com name, o editor cria um campo oculto com o HTML, e o formulário envia como qualquer outro campo." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando a formatação ajuda quem vai ler." } } },
  render: () => liveStory(page, "uso", INFO),
};
