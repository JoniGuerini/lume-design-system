// Escrito à mão: o exemplo ao vivo de https://lumeui.dev/#/padroes/detalhe, com o JavaScript da própria página.
import * as page from '../../../site/pages/padroes-detalhe.js';
import { patternStory } from '../live.js';

export default {
  title: "Patterns/Detail and editing",
  id: 'padroes-detalhe',
  parameters: { docs: { description: { component: "An item’s page: header, tabs, history and in-place editing.\\n\\nFull documentation, with anatomy, rules, messages and accessibility: https://lumeui.dev/#/padroes/detalhe" } } },
};

export const Exemplo = {
  name: 'Live example',
  render: () => patternStory(page, 'de-exemplo'),
};
