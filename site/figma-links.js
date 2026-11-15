/**
 * Links do rodapé para o arquivo do Figma, abertos direto no bloco de cada página.
 * NODES vem do botão “Copiar links” do plugin (rodar o plugin, copiar e colar o JSON aqui):
 * id do bloco → id do nó no arquivo. Os ids não mudam quando o plugin roda de novo.
 */
export const FIGMA_FILE = 'https://www.figma.com/design/1yTJ881xoXjRmdi6NeTnYD/Lume-Design-System';

export const NODES = {};

// caminho do site → bloco do plugin, quando o nome não é o último pedaço do caminho
const BLOCK_OF = {
  '/fundamentos/espacamento': 'espacos',
  '/fundamentos/raios': 'espacos',
  '/fundamentos/elevacao': 'espacos',
  '/componentes/seletor-de-data': 'seletor-data',
  '/componentes/seletor-de-horario': 'seletor-horario',
  '/componentes/campo-de-tags': 'campo-tags',
  '/componentes/codigo-de-verificacao': 'codigo-verificacao',
  '/componentes/controle-segmentado': 'segmentado',
  '/componentes/breadcrumb': 'trilha',
  '/componentes/barra-de-rolagem': 'barra-rolagem',
  '/componentes/voltar-ao-topo': 'voltar-topo',
  '/componentes/gaveta-lateral': 'gaveta',
  '/componentes/menu-de-contexto': 'menu-contexto',
  '/componentes/barra-de-progresso': 'progresso',
  '/componentes/lista-de-definicoes': 'lista-definicoes',
  '/componentes/bloco-de-codigo': 'codigo',
  '/graficos/barras': 'grafico-barras',
  '/graficos/linhas': 'grafico-linhas',
  '/graficos/rosca': 'grafico-rosca',
  '/graficos/heatmap': 'grafico-heatmap',
  '/graficos/dispersao': 'grafico-dispersao',
  '/padroes/conversa': 'mensagens',
  '/padroes/formularios': 'formulario',
  '/padroes/estados-vazios': 'estado-vazio',
  '/padroes/busca': 'paleta-comandos',
  '/padroes/listagem': 'padrao-listagem',
  '/padroes/configuracoes': 'padrao-configuracoes',
  '/padroes/avisos': 'padrao-avisos',
  '/padroes/detalhe': 'padrao-detalhe',
  '/padroes/painel': 'padrao-painel',
  '/padroes/carregamento': 'padrao-carregamento',
};

/** Endereço do bloco da página no Figma, ou null se ela não tem bloco (ou os links ainda não foram colados). */
export function figmaUrl(path) {
  const node = NODES[BLOCK_OF[path] ?? path.split('/').pop()];
  return node ? `${FIGMA_FILE}?node-id=${node.replace(/:/g, '-')}` : null;
}
