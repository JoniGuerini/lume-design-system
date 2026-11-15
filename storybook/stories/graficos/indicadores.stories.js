// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/graficos/indicadores. Não edite: rode npm run stories.
import * as page from '../../../site/pages/graficos-indicadores.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/graficos/indicadores", group: '', label: "Indicadores" };

export default {
  title: "Gráficos/Indicadores",
  id: "graficos-indicadores",
  parameters: { docs: { description: { component: "Quando o gráfico é um número. O valor de agora, quanto mudou e para onde vai — sem eixo, sem legenda, sem esforço para ler.\n\nDocumentação completa: https://lumeui.dev/#/graficos/indicadores" } } },
};

export const InPlayground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Monte o indicador, veja em cada tema e copie o código. Troque “Bom quando” para ver a mesma alta virar piora." } } },
  render: () => liveStory(page, "in-playground", INFO),
};

export const InAnatomia = {
  name: "Anatomia",
  parameters: { docs: { description: { story: "Cinco partes, sempre nesta ordem. Só o rótulo e o valor são obrigatórios." } } },
  render: () => liveStory(page, "in-anatomia", INFO),
};

export const InKpis = {
  name: "Linha de indicadores",
  parameters: { docs: { description: { story: "Os números que abrem um painel. Mesma estrutura, mesmo período de comparação, do mais importante para o menos." } } },
  render: () => liveStory(page, "in-kpis", INFO),
};

export const InDestaque = {
  name: "Número de destaque",
  parameters: { docs: { description: { story: "O número que a tela inteira existe para mostrar. Um só por vista, na mesma sans do resto — fonte de display ou serifada parece enfeite." } } },
  render: () => liveStory(page, "in-destaque", INFO),
};

export const InSparkline = {
  name: "Sparkline",
  parameters: { docs: { description: { story: "A tendência sem eixos, em linha com o texto. Estica na largura de quem a contém e o traço não deforma." } } },
  render: () => liveStory(page, "in-sparkline", INFO),
};

export const InMedidor = {
  name: "Medidor",
  parameters: { docs: { description: { story: "Uma razão contra um limite. O preenchimento carrega a gravidade — marca, atenção, crítico — e a trilha é um tom mais claro da mesma cor. A partir da atenção, ganha ícone." } } },
  render: () => liveStory(page, "in-medidor", INFO),
};

export const InVariacao = {
  name: "Variação",
  parameters: { docs: { description: { story: "A cor sai de dois fatos: para onde o número foi e se isso é bom. A mesma alta pode ser melhora ou piora — por isso o sinal, o ícone e o texto vêm sempre juntos." } } },
  render: () => liveStory(page, "in-variacao", INFO),
};

export const InAcessibilidade = {
  name: "Acessibilidade",
  parameters: { docs: { description: { story: "O indicador é texto, então já começa acessível. Estes detalhes completam." } } },
  render: () => liveStory(page, "in-acessibilidade", INFO),
};

export const InUso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando um número basta — e como não estragá-lo." } } },
  render: () => liveStory(page, "in-uso", INFO),
};

export const InApi = {
  name: "API",
  parameters: { docs: { description: { story: "Três funções que devolvem HTML, sem estado — use em qualquer lugar, inclusive dentro de tabelas e cards." } } },
  render: () => liveStory(page, "in-api", INFO),
};
