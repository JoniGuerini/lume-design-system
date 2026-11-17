// Escrito à mão: o exemplo ao vivo de https://lumeui.dev/#/padroes/configuracoes, com o JavaScript da própria página.
import * as page from '../../../site/pages/padroes-configuracoes.js';
import { patternStory } from '../live.js';

export default {
  title: "Patterns/Settings",
  id: 'padroes-configuracoes',
  parameters: { docs: { description: { component: "Sections, saving instantly or with a button, and the danger zone.\\n\\nFull documentation, with anatomy, rules, messages and accessibility: https://lumeui.dev/#/padroes/configuracoes" } } },
};

export const Exemplo = {
  name: 'Live example',
  render: () => patternStory(page, 'cf-exemplo'),
};
