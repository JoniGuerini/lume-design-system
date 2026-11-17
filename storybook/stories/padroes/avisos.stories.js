// Escrito à mão: o exemplo ao vivo de https://lumeui.dev/#/padroes/avisos, com o JavaScript da própria página.
import * as page from '../../../site/pages/padroes-avisos.js';
import { patternStory } from '../live.js';

export default {
  title: "Patterns/Notices and confirmations",
  id: 'padroes-avisos',
  parameters: { docs: { description: { component: "Toast, alert, banner or modal, and undo instead of “are you sure?”.\\n\\nFull documentation, with anatomy, rules, messages and accessibility: https://lumeui.dev/#/padroes/avisos" } } },
};

export const Exemplo = {
  name: 'Live example',
  render: () => patternStory(page, 'av-exemplo'),
};
