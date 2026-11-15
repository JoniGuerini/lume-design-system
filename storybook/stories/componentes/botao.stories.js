// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/botao. Não edite: rode npm run stories.
import * as page from '../../../site/pages/botao.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/botao", group: '', label: "Botão" };

export default {
  title: "Componentes/Ações/Botão",
  id: "componentes-botao",
  parameters: { docs: { description: { component: "Dispara uma ação. Plano e direto: a cor fica para a ação principal, o resto se apoia em contorno e transparência.\n\nDocumentação completa: https://lumeui.dev/#/componentes/botao" } } },
};

export const Configuravel = {
  name: 'Configurável',
  args: { variante: 'primary', tamanho: 'md', rotulo: 'Salvar', icone: 'pencil', desativado: false },
  argTypes: {
    variante: { control: 'select', options: ['primary', 'secondary', 'ghost', 'subtle', 'danger'] },
    tamanho: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    icone: { control: 'select', options: ['', 'pencil', 'plus', 'check', 'download', 'trash', 'send'] },
  },
  render: ({ variante, tamanho, rotulo, icone, desativado }) =>
    `<button type="button" class="ds-btn ds-btn--${variante}${tamanho !== 'md' ? ` ds-btn--${tamanho}` : ''}"${desativado ? ' disabled' : ''}>${icone ? `<ds-icon name="${icone}"></ds-icon>` : ''}${rotulo}</button>`,
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Monte o botão, veja em cada tema e copie o código pronto." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "A variante diz o peso da ação. Quanto mais importante, mais cor — e só uma ação ganha a cor da marca." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Tamanhos = {
  name: "Tamanhos",
  parameters: { docs: { description: { story: "Médio é o padrão. Pequeno para barras densas e tabelas; grande para chamadas e telas de toque." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Todas as variantes reagem do mesmo jeito: hover clareia ou realça, pressionado escurece, foco ganha o anel. Para documentar e testar, force um estado com data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Anatomia = {
  name: "Anatomia",
  parameters: { docs: { description: { story: "Três partes. O ícone é opcional; o rótulo, nunca — exceto no botão de ícone." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Icone = {
  name: "Botão de ícone",
  parameters: { docs: { description: { story: "Para ações reconhecíveis sem texto — fechar, buscar, mais opções. Sem fundo por padrão; passe o mouse para ver a dica." } } },
  render: () => liveStory(page, "icone", INFO),
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Três regras que resolvem a maioria das telas." } } },
  render: () => liveStory(page, "uso", INFO),
};
