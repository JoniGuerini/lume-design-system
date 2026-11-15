// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/campo-numerico. Não edite: rode npm run stories.
import * as page from '../../../site/pages/campo-numerico.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/campo-numerico", group: '', label: "Campo numérico" };

export default {
  title: "Componentes/Formulários/Campo numérico",
  id: "componentes-campo-numerico",
  parameters: { docs: { description: { component: "Para um número exato, quando digitar é tão útil quanto ajustar aos poucos. Respeita limites, passo e o formato do idioma.\n\nDocumentação completa: https://lumeui.dev/#/componentes/campo-numerico" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Digite, use as setas do teclado ou segure os botões para repetir o passo." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "O formato usa as opções de Intl.NumberFormat: moeda, porcentagem ou unidade, sempre no idioma atual." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Os mesmos do Campo de texto, mais os botões desativados nos limites." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "O formulário recebe o número puro, num input oculto com o name do campo." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => liveStory(page, "uso", INFO),
};
