// Escrito à mão: o exemplo ao vivo de https://lumeui.dev/#/padroes/listagem, com o JavaScript da própria página.
import * as page from '../../../site/pages/padroes-listagem.js';
import { patternStory } from '../live.js';

export default {
  title: "Padrões/Listagem de dados",
  id: 'padroes-listagem',
  parameters: { docs: { description: { component: "Tabela com filtros, ordenação, seleção e ações em lote com desfazer.\\n\\nDocumentação completa, com anatomia, regras, mensagens e acessibilidade: https://lumeui.dev/#/padroes/listagem" } } },
};

export const Exemplo = {
  name: 'Exemplo ao vivo',
  render: () => patternStory(page, 'dl-exemplo'),
};
