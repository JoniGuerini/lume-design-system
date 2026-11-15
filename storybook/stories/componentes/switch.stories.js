// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/switch. Não edite: rode npm run stories.
import * as page from '../../../site/pages/switch.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/switch", group: '', label: "Switch" };

export default {
  title: "Componentes/Formulários/Switch",
  id: "componentes-switch",
  parameters: { docs: { description: { component: "Liga ou desliga algo na hora, sem botão de salvar. Se a mudança só vale ao enviar, use checkbox.\n\nDocumentação completa: https://lumeui.dev/#/componentes/switch" } } },
};

export const Configuravel = {
  name: 'Configurável',
  args: { rotulo: 'Receber novidades', ligado: true, pequeno: false, aDireita: false, desativado: false },
  render: ({ rotulo, ligado, pequeno, aDireita, desativado }) =>
    `<label class="ds-switch${pequeno ? ' ds-switch--sm' : ''}${aDireita ? ' ds-switch--end' : ''}" style="max-width:360px"><input type="checkbox" role="switch" class="ds-switch__input"${ligado ? ' checked' : ''}${desativado ? ' disabled' : ''}><span class="ds-choice__text"><span class="ds-choice__label">${rotulo}</span></span></label>`,
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Um checkbox nativo com role=\"switch\". O do palco funciona." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Quando = {
  name: "Switch ou checkbox?",
  parameters: { docs: { description: { story: "Os dois guardam um sim/não. A diferença é quando a escolha passa a valer." } } },
  render: () => liveStory(page, "quando", INFO),
};

export const Tamanhos = {
  name: "Tamanhos",
  parameters: { docs: { description: { story: "Médio é o padrão. O pequeno cabe em linhas de tabela e barras densas." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Ligado ganha a cor da marca e o polegar vai para a direita — a posição também comunica, não só a cor." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Ajustes = {
  name: "Lista de ajustes",
  parameters: { docs: { description: { story: "O uso mais comum: rótulo e descrição à esquerda, switch à direita com .ds-switch--end. Cada mudança vale na hora." } } },
  render: () => liveStory(page, "ajustes", INFO),
};

export const Movimento = {
  name: "Movimento",
  parameters: { docs: { description: { story: "O polegar anda em duration.base (200 ms) com easing.emphasized: sai rápido e assenta suave. Com movimento reduzido, a troca é instantânea." } } },
  render: () => liveStory(page, "movimento", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Três regras para não confundir." } } },
  render: () => liveStory(page, "uso", INFO),
};
