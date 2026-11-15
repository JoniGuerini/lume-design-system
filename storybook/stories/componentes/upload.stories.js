// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/upload. Não edite: rode npm run stories.
import * as page from '../../../site/pages/upload.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/upload", group: '', label: "Upload de arquivo" };

export default {
  title: "Componentes/Formulários/Upload de arquivo",
  id: "componentes-upload",
  parameters: { docs: { description: { component: "Para enviar arquivos, arrastando ou escolhendo. Cada arquivo tem o próprio progresso e o próprio erro, então uma falha não atrapalha os outros.\n\nDocumentação completa: https://lumeui.dev/#/componentes/upload" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Os arquivos não saem do seu computador: o envio é simulado." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Sem a opção upload, os arquivos ficam no input e seguem com o formulário. Com ela, cada um é enviado assim que entra na lista." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "A área pode ser forçada com data-state e data-dragging." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "A função upload recebe o arquivo, avisa o progresso (de 0 a 1) e devolve uma promessa. O erro que ela lançar aparece na linha do arquivo." } } },
  render: () => liveStory(page, "codigo", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e o que combinar." } } },
  render: () => liveStory(page, "uso", INFO),
};
