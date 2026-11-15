// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/card. Não edite: rode npm run stories.
import * as page from '../../../site/pages/card.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/card", group: '', label: "Card" };

export default {
  title: "Componentes/Conteúdo/Card",
  id: "componentes-card",
  parameters: { docs: { description: { component: "A superfície básica para agrupar conteúdo. Separa uma coisa da outra com fundo e contorno finos, sem sombra.\n\nDocumentação completa: https://lumeui.dev/#/componentes/card" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Só CSS. Para uma tarefa com rótulo, título e controles, use o Painel." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Um card é só um contêiner; o clicável é um link inteiro." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Só o clicável muda. Hover e foco podem ser forçados com data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
