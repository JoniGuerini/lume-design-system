// Escrito à mão: o exemplo ao vivo de https://lumeui.dev/#/padroes/carregamento, com o JavaScript da própria página.
import * as page from '../../../site/pages/padroes-carregamento.js';
import { patternStory } from '../live.js';

export default {
  title: "Patterns/Loading and errors",
  id: 'padroes-carregamento',
  parameters: { docs: { description: { component: "Skeletons, slow loads, partial errors, failed saves and page not found.\\n\\nFull documentation, with anatomy, rules, messages and accessibility: https://lumeui.dev/#/padroes/carregamento" } } },
};

export const Exemplo = {
  name: 'Live example',
  render: () => patternStory(page, 'lo-exemplo'),
};
