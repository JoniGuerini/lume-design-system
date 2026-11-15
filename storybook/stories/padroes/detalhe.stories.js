// Escrito à mão: o exemplo ao vivo de https://lumeui.dev/#/padroes/detalhe, com o JavaScript da própria página.
import * as page from '../../../site/pages/padroes-detalhe.js';
import { patternStory } from './live.js';

export default {
  title: "Padrões/Detalhe e edição",
  id: 'padroes-detalhe',
  parameters: { docs: { description: { component: "A página de um item: cabeçalho, abas, histórico e edição no lugar.\\n\\nDocumentação completa, com anatomia, regras, mensagens e acessibilidade: https://lumeui.dev/#/padroes/detalhe" } } },
};

export const Exemplo = {
  name: 'Exemplo ao vivo',
  render: () => patternStory(page, 'de-exemplo'),
};
