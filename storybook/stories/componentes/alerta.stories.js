// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/alerta. Não edite: rode npm run stories.
import * as page from '../../../site/pages/alerta.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/alerta", group: '', label: "Alerta" };

export default {
  title: "Componentes/Feedback/Alerta",
  id: "componentes-alerta",
  parameters: { docs: { description: { component: "Uma mensagem na própria página, que fica à vista até deixar de valer. Para confirmar algo que acabou de acontecer e sumir, use o Toast.\n\nDocumentação completa: https://lumeui.dev/#/componentes/alerta" } } },
};

export const Configuravel = {
  name: 'Configurável',
  args: { tom: 'info', titulo: 'Atualização disponível', texto: 'A versão nova entra no ar hoje à noite.', compacto: false },
  argTypes: { tom: { control: 'select', options: ['info', 'success', 'warning', 'danger'] } },
  render: ({ tom, titulo, texto, compacto }) =>
    `<div class="ds-alert ds-alert--${tom}${compacto ? ' ds-alert--compact' : ''}" role="status"><div class="ds-alert__body">${titulo && !compacto ? `<p class="ds-alert__title">${titulo}</p>` : ''}<p class="ds-alert__text">${texto}</p></div></div>`,
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Só HTML e CSS. O botão de fechar, quando houver, é você quem liga." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Tons = {
  name: "Tons",
  parameters: { docs: { description: { story: "O tom nunca vem sozinho: ícone e texto dizem o mesmo que a cor." } } },
  render: () => liveStory(page, "tons", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Com ação para resolver, ou compacto para caber dentro de um painel." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Alerta, Toast ou Modal?" } } },
  render: () => liveStory(page, "uso", INFO),
};
