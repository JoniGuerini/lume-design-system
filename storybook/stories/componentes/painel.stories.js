// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/painel. Não edite: rode npm run stories.
import * as page from '../../../site/pages/painel.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/painel", group: '', label: "Painel" };

export default {
  title: "Componentes/Conteúdo/Painel",
  id: "componentes-painel",
  parameters: { docs: { description: { component: "A superfície de uma tarefa do produto: rótulo, título, controles e conteúdo em seções com respiro. Tudo plano — o destaque vem da hierarquia, não de efeito.\n\nDocumentação completa: https://lumeui.dev/#/componentes/painel" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Ligue e desligue as partes. Só o cabeçalho e o conteúdo são obrigatórios." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Anatomia = {
  name: "Anatomia",
  parameters: { docs: { description: { story: "Sete partes, sempre na mesma ordem. Quem já viu um painel sabe ler qualquer outro." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Secoes = {
  name: "Seções",
  parameters: { docs: { description: { story: "O carimbo dá ordem ao conteúdo. Use números para etapas, tempos para roteiros e só o rótulo quando a ordem não importa." } } },
  render: () => liveStory(page, "secoes", INFO),
};

export const Variacoes = {
  name: "Variações",
  parameters: { docs: { description: { story: "Uma estrutura, três jeitos de encaixar na tela." } } },
  render: () => liveStory(page, "variacoes", INFO),
};

export const PainelCard = {
  name: "Painel ou card?",
  parameters: { docs: { description: { story: "Os dois são superfícies, mas resolvem coisas diferentes." } } },
  render: () => liveStory(page, "painel-card", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "O painel é para telas do produto — não para páginas inteiras." } } },
  render: () => liveStory(page, "uso", INFO),
};
