// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/fundamentos/layout. Não edite: rode npm run stories.
import * as page from '../../../site/pages/layout.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/fundamentos/layout", group: '', label: "Layout" };

export default {
  title: "Fundamentos/Layout",
  id: "fundamentos-layout",
  parameters: { docs: { description: { component: "Onde as coisas ficam e como se reorganizam. Cinco breakpoints, um shell com medidas fixas e larguras máximas que protegem a leitura.\n\nDocumentação completa: https://lumeui.dev/#/fundamentos/layout" } } },
};

export const Breakpoints = {
  name: "Breakpoints",
  parameters: { docs: { description: { story: "Mobile primeiro: o layout base vale para telas pequenas e cada breakpoint acrescenta regras a partir da sua largura. Redimensione a janela para ver o marcador andar." } } },
  render: () => liveStory(page, "breakpoints", INFO),
};

export const AnatomiaShell = {
  name: "App shell",
  parameters: { docs: { description: { story: "Dois painéis sobre o fundo do app: sidebar e conteúdo, com a topbar dentro do conteúdo. O diagrama está em escala de uma janela de 1440 × 900." } } },
  render: () => liveStory(page, "anatomia-shell", INFO),
};

export const Larguras = {
  name: "Larguras",
  parameters: { docs: { description: { story: "Telas largas não devem esticar o conteúdo até a borda. As páginas param em 1160 px e o texto corrido em 720 px." } } },
  render: () => liveStory(page, "larguras", INFO),
};

export const Grade = {
  name: "Grade",
  parameters: { docs: { description: { story: "Dois padrões de grade cobrem o site. Arraste para mudar a largura do contêiner e veja como cada um se reorganiza. O espaço entre itens é sempre space.150 (12 px)." } } },
  render: () => liveStory(page, "grade", INFO),
};

export const Camadas = {
  name: "Camadas",
  parameters: { docs: { description: { story: "A ordem de empilhamento é uma escala fixa: nada de z-index 9999. Quanto mais alto na lista, mais na frente." } } },
  render: () => liveStory(page, "camadas", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Regras para o layout continuar previsível em qualquer tela." } } },
  render: () => liveStory(page, "uso", INFO),
};
