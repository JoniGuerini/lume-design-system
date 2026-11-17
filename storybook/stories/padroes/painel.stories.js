// Escrito à mão: o exemplo ao vivo de https://lumeui.dev/#/padroes/painel, com o JavaScript da própria página.
import * as page from '../../../site/pages/padroes-painel.js';
import { patternStory } from '../live.js';

export default {
  title: "Patterns/Metrics dashboard",
  id: 'padroes-painel',
  parameters: { docs: { description: { component: "One question, compared numbers, a main chart and what needs attention.\\n\\nFull documentation, with anatomy, rules, messages and accessibility: https://lumeui.dev/#/padroes/painel" } } },
};

export const Exemplo = {
  name: 'Live example',
  render: () => patternStory(page, 'pi-exemplo'),
};
