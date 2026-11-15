// Escrito à mão: o exemplo ao vivo de https://lumeui.dev/#/padroes/carregamento, com o JavaScript da própria página.
import * as page from '../../../site/pages/padroes-carregamento.js';
import { patternStory } from './live.js';

export default {
  title: "Padrões/Carregamento e erros",
  id: 'padroes-carregamento',
  parameters: { docs: { description: { component: "Esqueleto, demora, erro por parte, falha ao salvar e página não encontrada.\\n\\nDocumentação completa, com anatomia, regras, mensagens e acessibilidade: https://lumeui.dev/#/padroes/carregamento" } } },
};

export const Exemplo = {
  name: 'Exemplo ao vivo',
  render: () => patternStory(page, 'lo-exemplo'),
};
