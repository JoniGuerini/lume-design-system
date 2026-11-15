// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/campo-de-texto. Não edite: rode npm run stories.
import * as page from '../../../site/pages/campo-de-texto.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/campo-de-texto", group: '', label: "Campo de texto" };

export default {
  title: "Componentes/Formulários/Campo de texto",
  id: "componentes-campo-de-texto",
  parameters: { docs: { description: { component: "Para a pessoa escrever. Rótulo sempre visível, dica antes do erro e mensagens que dizem como resolver.\n\nDocumentação completa: https://lumeui.dev/#/componentes/campo-de-texto" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Monte o campo, veja em cada tema e copie o código. O campo do palco funciona: digite para ver o contador." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Anatomia = {
  name: "Anatomia",
  parameters: { docs: { description: { story: "Seis partes; só rótulo e contêiner são obrigatórios." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Tamanhos = {
  name: "Tamanhos",
  parameters: { docs: { description: { story: "Dentro de um .ds-form-field o padrão é o médio. Use o mesmo tamanho dos botões ao lado." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Hover e foco também podem ser forçados com data-state no .ds-field, para documentar e testar." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Multilinha = {
  name: "Multilinha",
  parameters: { docs: { description: { story: "Para textos de mais de uma frase. Mesmo contêiner, com .ds-field--multiline e um <textarea> que cresce na vertical." } } },
  render: () => liveStory(page, "multilinha", INFO),
};

export const Validacao = {
  name: "Validação",
  parameters: { docs: { description: { story: "Valide quando a pessoa sai do campo ou envia — nunca a cada tecla. A mensagem troca a dica e diz o que fazer." } } },
  render: () => liveStory(page, "validacao", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Três regras para formulários que não dão trabalho." } } },
  render: () => liveStory(page, "uso", INFO),
};
