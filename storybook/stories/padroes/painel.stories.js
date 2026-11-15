// Escrito à mão: o exemplo ao vivo de https://lumeui.dev/#/padroes/painel, com o JavaScript da própria página.
import * as page from '../../../site/pages/padroes-painel.js';
import { patternStory } from '../live.js';

export default {
  title: "Padrões/Painel de indicadores",
  id: 'padroes-painel',
  parameters: { docs: { description: { component: "Uma pergunta, números comparados, um gráfico principal e o que pede atenção.\\n\\nDocumentação completa, com anatomia, regras, mensagens e acessibilidade: https://lumeui.dev/#/padroes/painel" } } },
};

export const Exemplo = {
  name: 'Exemplo ao vivo',
  render: () => patternStory(page, 'pi-exemplo'),
};
