// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/graficos/visao-geral. Não edite: rode npm run stories.
import * as page from '../../../site/pages/graficos-visao-geral.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/graficos/visao-geral", group: '', label: "Visão geral" };

export default {
  title: "Gráficos/Visão geral",
  id: "graficos-visao-geral",
  parameters: { docs: { description: { component: "Dados que se leem de relance e aguentam um segundo olhar. Marcas finas, uma cor por papel, rótulos só onde importam — e toda informação acessível por teclado e em tabela.\n\nDocumentação completa: https://lumeui.dev/#/graficos/visao-geral" } } },
};

export const VgExemplo = {
  name: "Exemplo ao vivo",
  parameters: { docs: { description: { story: "Um painel com filtro único no topo: o período vale para tudo abaixo dele, então os números sempre concordam. Ao trocar, os gráficos seguram o desenho anterior enquanto atualizam — sem esqueleto, sem pulo." } } },
  render: () => liveStory(page, "vg-exemplo", INFO),
};

export const VgForma = {
  name: "Qual gráfico usar",
  parameters: { docs: { description: { story: "Escolha pela tarefa de quem lê, antes de pensar em cor. Às vezes a resposta certa nem é um gráfico." } } },
  render: () => liveStory(page, "vg-forma", INFO),
};

export const VgCores = {
  name: "Cores",
  parameters: { docs: { description: { story: "Cada cor faz um trabalho só: identidade (categórica), quantidade (sequencial), etapa (ordinal), lado de uma referência (divergente) ou estado (status). E nenhuma foi escolhida no olho — a ordem saiu de um validador." } } },
  render: () => liveStory(page, "vg-cores", INFO),
};

export const VgAnatomia = {
  name: "Anatomia",
  parameters: { docs: { description: { story: "Sete peças, sempre no mesmo lugar. O título nomeia o que está plotado; com uma série só, nem precisa de legenda." } } },
  render: () => liveStory(page, "vg-anatomia", INFO),
};

export const VgMarcas = {
  name: "Marcas e respiro",
  parameters: { docs: { description: { story: "O visual calmo vem de poucas medidas fixas e de dois espaços negativos. Só o dado pode ser barulhento." } } },
  render: () => liveStory(page, "vg-marcas", INFO),
};

export const VgInteracao = {
  name: "Interação",
  parameters: { docs: { description: { story: "Todo gráfico já vem interativo. O tooltip complementa, nunca é o único caminho até um valor." } } },
  render: () => liveStory(page, "vg-interacao", INFO),
};

export const VgAcessibilidade = {
  name: "Acessibilidade",
  parameters: { docs: { description: { story: "Decisões que já vêm prontas em todos os gráficos — e as que continuam sendo suas." } } },
  render: () => liveStory(page, "vg-acessibilidade", INFO),
};

export const VgUso = {
  name: "Uso",
  parameters: { docs: { description: { story: "O que mais dá errado em gráfico — e o que fazer no lugar." } } },
  render: () => liveStory(page, "vg-uso", INFO),
};

export const VgApi = {
  name: "API",
  parameters: { docs: { description: { story: "Uma função por forma, a mesma conversa em todas: monta num elemento, recebe opções e devolve controles." } } },
  render: () => liveStory(page, "vg-api", INFO),
};
