// Escrito à mão: o exemplo ao vivo de https://lumeui.dev/#/padroes/configuracoes, com o JavaScript da própria página.
import * as page from '../../../site/pages/padroes-configuracoes.js';
import { patternStory } from './live.js';

export default {
  title: "Padrões/Configurações",
  id: 'padroes-configuracoes',
  parameters: { docs: { description: { component: "Seções, salvar na hora ou no botão e a zona de perigo.\\n\\nDocumentação completa, com anatomia, regras, mensagens e acessibilidade: https://lumeui.dev/#/padroes/configuracoes" } } },
};

export const Exemplo = {
  name: 'Exemplo ao vivo',
  render: () => patternStory(page, 'cf-exemplo'),
};
