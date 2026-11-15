// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/codigo-de-verificacao. Não edite: rode npm run stories.
import * as page from '../../../site/pages/codigo-de-verificacao.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/codigo-de-verificacao", group: '', label: "Código de verificação" };

export default {
  title: "Componentes/Formulários/Código de verificação",
  id: "componentes-codigo-de-verificacao",
  parameters: { docs: { description: { component: "Para o código de login em duas etapas. Parece seis casas, mas é um campo só, e por isso colar e o preenchimento automático do celular funcionam sem esforço.\n\nDocumentação completa: https://lumeui.dev/#/componentes/codigo-de-verificacao" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Digite ou cole um código. Ao completar, o componente avisa." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "O número de casas segue o seu serviço de verificação." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Foco e erro podem ser forçados com data-state e data-error." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Exemplo = {
  name: "Numa tela de verificação",
  parameters: { docs: { description: { story: "Experimente: o código certo aqui é 123456. Errar mostra a mensagem, limpa o campo e devolve o foco, para tentar de novo sem usar o mouse." } } },
  render: () => liveStory(page, "exemplo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e o que oferecer junto." } } },
  render: () => liveStory(page, "uso", INFO),
};
