// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/central-de-notificacoes. Não edite: rode npm run stories.
import * as page from '../../../site/pages/central-de-notificacoes.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/central-de-notificacoes", group: '', label: "Central de notificações" };

export default {
  title: "Componentes/Feedback/Central de notificações",
  id: "componentes-central-de-notificacoes",
  parameters: { docs: { description: { component: "O sino que abre a lista do que aconteceu, para cada pessoa. O número mostra quantas faltam ler; abrir uma notificação a marca como lida.\n\nDocumentação completa: https://lumeui.dev/#/componentes/central-de-notificacoes" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Abra o sino e clique numa notificação. “Chegou uma nova” mostra o que acontece quando uma notificação chega com a lista fechada." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "O painel é sempre o mesmo; muda o que há nele." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "O número no sino segue a cor do indicador; acima de 99, vira “99+”." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "Você dá o sino e a lista; o JavaScript desenha o painel, o número e cuida do lido." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Notificação, toast ou banner?" } } },
  render: () => liveStory(page, "uso", INFO),
};
