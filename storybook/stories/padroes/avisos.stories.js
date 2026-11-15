// Escrito à mão: o exemplo ao vivo de https://lumeui.dev/#/padroes/avisos, com o JavaScript da própria página.
import * as page from '../../../site/pages/padroes-avisos.js';
import { patternStory } from './live.js';

export default {
  title: "Padrões/Avisos e confirmações",
  id: 'padroes-avisos',
  parameters: { docs: { description: { component: "Toast, alerta, banner ou modal, e desfazer no lugar de “tem certeza?”.\\n\\nDocumentação completa, com anatomia, regras, mensagens e acessibilidade: https://lumeui.dev/#/padroes/avisos" } } },
};

export const Exemplo = {
  name: 'Exemplo ao vivo',
  render: () => patternStory(page, 'av-exemplo'),
};
