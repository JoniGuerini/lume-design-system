// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/slider. Não edite: rode npm run stories.
import * as page from '../../../site/pages/slider.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/slider", group: '', label: "Slider" };

export default {
  title: "Componentes/Formulários/Slider",
  id: "componentes-slider",
  parameters: { docs: { description: { component: "Para escolher um valor ou uma faixa quando a posição importa mais que o número exato, como volume, brilho ou uma faixa de preço.\n\nDocumentação completa: https://lumeui.dev/#/componentes/slider" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Por baixo é um input type=\"range\" nativo, com teclado e leitor de tela prontos." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "O valor fica ao lado do rótulo, sempre visível. Marcas ajudam quando alguns pontos têm nome." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Hover e foco podem ser forçados com data-state no .ds-slider." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "onInput acompanha o arraste; onChange avisa quando a pessoa solta." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
