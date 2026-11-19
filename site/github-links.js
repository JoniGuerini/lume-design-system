/**
 * Código de cada componente no GitHub (repositório público desde 17/11/2026), para o "Ver no GitHub" do rodapé das páginas.
 * Aponta para o arquivo principal: o CSS do componente ou, quando quem desenha é o JavaScript (seletores de data e horário), o módulo.
 * Componente novo = linha nova aqui.
 */
export const GITHUB_REPO = 'https://github.com/JoniGuerini/lume-design-system';

const C = (f) => `ds/components/${f}.css`;
const J = (f) => `ds/js/${f}.js`;

const FILES = {
  botao: C('button'),
  'botao-dividido': C('button'),
  'acao-inline': C('button'),
  chip: C('chip'),
  menu: C('menu'),
  'barra-de-ferramentas': C('toolbar'),
  'campo-de-texto': C('form'),
  'campo-de-senha': J('password-field'),
  'campo-de-busca': J('search-field'),
  'campo-de-dinheiro': J('currency-field'),
  'grupo-de-campos': C('form'),
  selecao: C('select'),
  'checkbox-radio': C('checkbox'),
  switch: C('switch'),
  'seletor-de-data': J('date-picker'),
  'seletor-de-horario': J('time-picker'),
  'campo-numerico': C('number-field'),
  slider: C('slider'),
  'campo-de-tags': C('tags'),
  'seletor-de-cor': C('color-picker'),
  avaliacao: C('rating'),
  upload: C('upload'),
  'codigo-de-verificacao': C('otp'),
  'editor-de-texto-rico': C('editor'),
  sidebar: C('shell'),
  navbar: C('shell'),
  abas: C('tabs'),
  'controle-segmentado': C('form'),
  breadcrumb: C('feedback'),
  link: C('link'),
  paginacao: C('navigation'),
  stepper: C('navigation'),
  acordeao: C('navigation'),
  arvore: C('navigation'),
  'barra-de-rolagem': C('scrollbar'),
  'voltar-ao-topo': C('navigation'),
  modal: C('modal'),
  'gaveta-lateral': C('layers'),
  popover: C('layers'),
  'menu-de-contexto': C('layers'),
  tooltip: C('feedback'),
  alerta: C('alert'),
  'banner-de-anuncio': C('banner'),
  toast: C('toast'),
  'central-de-notificacoes': C('notifications'),
  badge: C('chip'),
  'barra-de-progresso': C('loading'),
  'progresso-circular': C('loading'),
  spinner: C('loading'),
  skeleton: C('loading'),
  'estado-vazio': C('feedback'),
  card: C('surfaces'),
  carrossel: C('carousel'),
  'visualizador-de-imagem': C('image-viewer'),
  'lista-arrastavel': C('sortable'),
  kanban: C('sortable'),
  painel: C('panel'),
  'paineis-redimensionaveis': C('resizable'),
  divisor: C('surfaces'),
  avatar: C('surfaces'),
  tabela: C('table'),
  'tabela-de-dados': J('data-table'),
  calendario: C('calendar'),
  'linha-do-tempo': C('content'),
  'lista-de-definicoes': C('content'),
  'bloco-de-codigo': C('code'),
  tecla: C('chip'),
};

// gráficos: cada tipo tem o próprio módulo em ds/js/charts/; a visão geral abre a entrada, e os indicadores, o CSS deles
const CHARTS = {
  'visao-geral': J('charts'),
  barras: J('charts/bar'),
  linhas: J('charts/line'),
  rosca: J('charts/donut'),
  heatmap: J('charts/heatmap'),
  dispersao: J('charts/scatter'),
  indicadores: C('chart'),
};

/** Endereço do arquivo do componente ou do gráfico no GitHub, ou null para páginas sem arquivo próprio. */
export function githubUrl(path) {
  const m = /^\/(componentes|graficos)\/([a-z-]+)$/.exec(path);
  const file = m && (m[1] === 'graficos' ? CHARTS : FILES)[m[2]];
  return file ? `${GITHUB_REPO}/blob/main/${file}` : null;
}
