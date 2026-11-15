// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/badge. Não edite: rode npm run stories.
import * as page from '../../../site/pages/badge.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/badge", group: '', label: "Badge" };

export default {
  title: "Componentes/Feedback/Badge",
  id: "componentes-badge",
  parameters: { docs: { description: { component: "Rótulo curto de status ou de contagem. Pequeno, discreto e sempre com significado — nunca enfeite.\n\nDocumentação completa: https://lumeui.dev/#/componentes/badge" } } },
};

export const Configuravel = {
  name: 'Configurável',
  args: { tom: 'success', rotulo: 'Publicado', pequeno: false },
  argTypes: { tom: { control: 'select', options: ['neutral', 'brand', 'info', 'success', 'warning', 'danger'] } },
  render: ({ tom, rotulo, pequeno }) => `<span class="ds-badge ds-badge--${tom}${pequeno ? ' ds-badge--sm' : ''}">${rotulo}</span>`,
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Escolha o tom, o tamanho e o tipo. Na contagem, o rótulo vira número (acima de 99, “99+”)." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Tons = {
  name: "Tons",
  parameters: { docs: { description: { story: "O tom diz o tipo de status. Fundo suave, texto forte e contorno fino — legível nos dois temas, sem gritar." } } },
  render: () => liveStory(page, "tons", INFO),
};

export const Tamanhos = {
  name: "Tamanhos",
  parameters: { docs: { description: { story: "Médio ao lado de texto comum; pequeno em tabelas, listas densas e cabeçalhos de card." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const Contagem = {
  name: "Contagem",
  parameters: { docs: { description: { story: "ds-badge--count centraliza o número e mantém a largura mínima de um círculo. Zero não aparece; acima de 99, mostre “99+”." } } },
  render: () => liveStory(page, "contagem", INFO),
};

export const Onde = {
  name: "Onde usar",
  parameters: { docs: { description: { story: "Badge acompanha algo — uma linha, um título, um item. Ele nunca está sozinho na tela." } } },
  render: () => liveStory(page, "onde", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Badge é informação. Se não informa nada, não é badge." } } },
  render: () => liveStory(page, "uso", INFO),
};
