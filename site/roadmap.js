/**
 * Próximos passos do Lume — fonte da página Roadmap e do card de roadmap do Início.
 * Textos em T(pt-BR, en, es); stages() e leftOut() devolvem tudo no idioma atual.
 * Item com doc: true já existe no DS e só ganha página própria. Os números de versão são a ordem de hoje e podem andar.
 */
import { tr } from '../ds/js/i18n.js';

const T = (pt, en, es) => ({ 'pt-BR': pt, en, es });

const NEXT = T('Próximo', 'Next', 'Próximo');
const PLANNED = T('Planejado', 'Planned', 'Planificado');
const GOAL = T('Meta', 'Goal', 'Meta');

const C = (version, status, tone, title, text, items) => ({ version, group: 'components', tone, status, title, text, items });
const I = (name, text, doc) => ({ name, text, doc });

const STAGES = [
  C('0.31', NEXT, 'brand', T('Seletor de cor', 'Color picker', 'Selector de color'), T('Escolher uma cor livre ou da paleta dos tokens.', 'Pick a free color or one from the token palette.', 'Elegir un color libre o de la paleta de tokens.'), [
    I(T('Seletor de cor', 'Color picker', 'Selector de color'), T('Área de saturação, matiz, campo hexadecimal e amostras da paleta.', 'Saturation area, hue, hex field, and palette swatches.', 'Área de saturación, matiz, campo hexadecimal y muestras de la paleta.')),
  ]),
  C('0.32', PLANNED, 'neutral', T('Painéis redimensionáveis', 'Resizable panels', 'Paneles redimensionables'), T('Dividir a tela em partes que a pessoa ajusta.', 'Split the screen into parts people can adjust.', 'Dividir la pantalla en partes que la persona ajusta.'), [
    I(T('Painéis redimensionáveis', 'Resizable panels', 'Paneles redimensionables'), T('Divisória que arrasta, com teclado, tamanho mínimo e tamanho salvo.', 'A draggable divider, with keyboard, minimum size, and saved size.', 'Divisor que se arrastra, con teclado, tamaño mínimo y tamaño guardado.')),
  ]),
  C('0.33', PLANNED, 'neutral', T('Avaliação e barra de ferramentas', 'Rating and toolbar', 'Valoración y barra de herramientas'), T('Dar nota e agrupar ações de um editor.', 'Give a score and group an editor’s actions.', 'Dar una nota y agrupar las acciones de un editor.'), [
    I(T('Avaliação', 'Rating', 'Valoración'), T('Estrelas para dar nota ou só mostrar a média, com meia estrela.', 'Stars to give a score or just show the average, with half stars.', 'Estrellas para calificar o solo mostrar el promedio, con media estrella.')),
    I(T('Barra de ferramentas', 'Toolbar', 'Barra de herramientas'), T('Botões de ícone agrupados, com setas para andar entre eles.', 'Grouped icon buttons, with arrow keys to move between them.', 'Botones de ícono agrupados, con flechas para moverse entre ellos.')),
  ]),
  C('0.34', PLANNED, 'neutral', T('Peças pequenas', 'Small pieces', 'Piezas pequeñas'), T('Três peças simples que fazem falta.', 'Three simple pieces that are missing.', 'Tres piezas simples que hacen falta.'), [
    I(T('Divisor', 'Divider', 'Divisor'), T('Linha entre blocos, na horizontal e na vertical, com rótulo opcional.', 'A line between blocks, horizontal and vertical, with an optional label.', 'Línea entre bloques, horizontal y vertical, con etiqueta opcional.'), true),
    I(T('Link', 'Link', 'Enlace'), T('Link no texto e solto, com ícone de link externo.', 'Inline and standalone links, with an external-link icon.', 'Enlace en el texto y suelto, con ícono de enlace externo.'), true),
    I(T('Progresso circular', 'Circular progress', 'Progreso circular'), T('Anel com a porcentagem, para quando a barra não cabe.', 'A ring with the percentage, for when the bar doesn’t fit.', 'Anillo con el porcentaje, para cuando la barra no cabe.')),
  ]),
  C('0.35', PLANNED, 'neutral', T('Avisos', 'Notices', 'Avisos'), T('Recados para todo mundo e para cada pessoa.', 'Messages for everyone and for each person.', 'Mensajes para todos y para cada persona.'), [
    I(T('Banner de anúncio', 'Announcement banner', 'Banner de anuncio'), T('Faixa fixa no topo do app, que a pessoa pode fechar.', 'A strip fixed at the top of the app that people can close.', 'Franja fija arriba de la app, que la persona puede cerrar.')),
    I(T('Central de notificações', 'Notification center', 'Centro de notificaciones'), T('Lista de notificações com lidas e não lidas, aberta pelo sino.', 'A list of notifications, read and unread, opened from the bell.', 'Lista de notificaciones leídas y no leídas, abierta desde la campana.')),
  ]),
  C('0.36', PLANNED, 'neutral', T('Visualizador de imagem', 'Image viewer', 'Visor de imágenes'), T('Ver uma imagem grande, com zoom.', 'View an image large, with zoom.', 'Ver una imagen en grande, con zoom.'), [
    I(T('Visualizador de imagem', 'Image viewer', 'Visor de imágenes'), T('Abre por cima da página, com zoom, arrastar e anterior e próxima.', 'Opens over the page, with zoom, panning, and previous and next.', 'Se abre sobre la página, con zoom, arrastre y anterior y siguiente.')),
  ]),
  C('0.37', PLANNED, 'neutral', T('Arrastar e soltar', 'Drag and drop', 'Arrastrar y soltar'), T('Mudar a ordem e o lugar das coisas.', 'Change the order and place of things.', 'Cambiar el orden y el lugar de las cosas.'), [
    I(T('Lista arrastável', 'Sortable list', 'Lista ordenable'), T('Reordenar itens com o mouse, o toque ou o teclado.', 'Reorder items with the mouse, touch, or keyboard.', 'Reordenar elementos con el ratón, el toque o el teclado.')),
    I(T('Kanban', 'Kanban', 'Kanban'), T('Colunas de cartões que passam de uma para outra.', 'Columns of cards that move from one to another.', 'Columnas de tarjetas que pasan de una a otra.')),
  ]),
  C('0.38', PLANNED, 'neutral', T('Editor de texto rico', 'Rich text editor', 'Editor de texto enriquecido'), T('Escrever com formatação, sem dependências.', 'Write with formatting, with no dependencies.', 'Escribir con formato, sin dependencias.'), [
    I(T('Editor de texto rico', 'Rich text editor', 'Editor de texto enriquecido'), T('Negrito, itálico, listas, links e títulos, com a barra de ferramentas do Lume.', 'Bold, italic, lists, links, and headings, with Lume’s toolbar.', 'Negrita, cursiva, listas, enlaces y títulos, con la barra de herramientas de Lume.')),
  ]),
  {
    version: '1.0',
    group: 'release',
    tone: 'success',
    status: GOAL,
    title: T('Estável', 'Stable', 'Estable'),
    text: T('API congelada e pronta para escalar.', 'A frozen API, ready to scale.', 'API congelada y lista para escalar.'),
    items: [
      { name: T('Compatibilidade', 'Compatibility', 'Compatibilidad'), text: T('Mudança que quebra só em versão maior, com guia de migração.', 'Breaking changes only in major versions, with a migration guide.', 'Cambios que rompen solo en versiones mayores, con guía de migración.') },
    ],
  },
];

const LEFT_OUT = [];

const item = (i) => ({ name: tr(i.name), text: tr(i.text), doc: Boolean(i.doc) });

/** As etapas, em ordem, no idioma atual. */
export const stages = () =>
  STAGES.map((s) => ({ version: s.version, group: s.group, tone: s.tone, status: tr(s.status), title: tr(s.title), text: tr(s.text), items: s.items.map(item) }));

/** Populares que ficaram de fora de propósito. */
export const leftOut = () => LEFT_OUT.map(item);
