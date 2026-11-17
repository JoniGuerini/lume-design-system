// Escrito à mão: o exemplo ao vivo de https://lumeui.dev/#/padroes/listagem, com o JavaScript da própria página.
import * as page from '../../../site/pages/padroes-listagem.js';
import { patternStory } from '../live.js';

export default {
  title: "Patterns/Data listing",
  id: 'padroes-listagem',
  parameters: { docs: { description: { component: "A table with filters, sorting, selection and bulk actions with undo.\\n\\nFull documentation, with anatomy, rules, messages and accessibility: https://lumeui.dev/#/padroes/listagem" } } },
};

export const Exemplo = {
  name: 'Live example',
  render: () => patternStory(page, 'dl-exemplo'),
};
