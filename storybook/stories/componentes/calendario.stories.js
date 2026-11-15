// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/calendario. Não edite: rode npm run stories.
import * as page from '../../../site/pages/calendario.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/calendario", group: '', label: "Calendário" };

export default {
  title: "Componentes/Conteúdo/Calendário",
  id: "componentes-calendario",
  parameters: { docs: { description: { component: "Mês, semana e dia na mesma peça, com eventos. Datas, nomes e o primeiro dia da semana vêm do idioma — e dá para usar inteiro pelo teclado.\n\nDocumentação completa: https://lumeui.dev/#/componentes/calendario" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "O calendário de verdade, com eventos em volta de hoje. Troque a visão no próprio calendário, clique num evento ou num dia, use as setas no mês." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Eventos = {
  name: "Eventos",
  parameters: { docs: { description: { story: "Três formas, conforme a duração, e seis tons. O tom nunca é a única pista: o título diz o que é." } } },
  render: () => liveStory(page, "eventos", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "O calendário mostra o tempo. Para escolher uma data num formulário, um campo de data basta." } } },
  render: () => liveStory(page, "uso", INFO),
};
