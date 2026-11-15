// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/checkbox-radio. Não edite: rode npm run stories.
import * as page from '../../../site/pages/checkbox-radio.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/checkbox-radio", group: '', label: "Checkbox e radio" };

export default {
  title: "Componentes/Formulários/Checkbox e radio",
  id: "componentes-checkbox-radio",
  parameters: { docs: { description: { component: "Checkbox para marcar itens independentes; radio para escolher um só entre poucas opções. Os dois com rótulo clicável.\n\nDocumentação completa: https://lumeui.dev/#/componentes/checkbox-radio" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Inputs nativos com aparência própria. O do palco funciona — clique no rótulo." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Qual = {
  name: "Checkbox ou radio?",
  parameters: { docs: { description: { story: "A pergunta é uma só: dá para marcar mais de uma opção?" } } },
  render: () => liveStory(page, "qual", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Marcado usa a cor da marca; o contorno desmarcado tem contraste de 3:1 para ser visto sem depender do rótulo. Hover e foco podem ser forçados com data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Grupos = {
  name: "Grupos",
  parameters: { docs: { description: { story: "Opções relacionadas ficam num <fieldset> com <legend>: o leitor de tela anuncia a pergunta antes das respostas." } } },
  render: () => liveStory(page, "grupos", INFO),
};

export const Todos = {
  name: "Selecionar todos",
  parameters: { docs: { description: { story: "O estado indeterminado só faz sentido num checkbox que resume outros: alguns marcados, outros não." } } },
  render: () => liveStory(page, "todos", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Três regras para escolhas claras." } } },
  render: () => liveStory(page, "uso", INFO),
};
