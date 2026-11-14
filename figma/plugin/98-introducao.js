/**
 * Introdução: a primeira coisa do arquivo. O que é o Lume, o que tem em cada página e como usar.
 * No plano pago vira a página “Lume · Introdução”, antes de Fundamentos; no gratuito (3 páginas) fica
 * no topo de Fundamentos. Rodar de novo refaz no lugar (chave 'intro'): ao passar para o plano pago,
 * ela sai de Fundamentos e vai para a página própria.
 */
var INTRO_W = 1440;

/** A chama do Lume (assets/favicon.svg), cores fixas de logotipo. */
function introFlame(size) {
  var f = figma.createNodeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 24 24">' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248z" fill="#c97b63"/>' +
    '<path d="M15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1.001a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.717z" fill="#ffffff" fill-opacity="0.28"/></svg>');
  f.name = L('Chama');
  return f;
}

/** Página própria quando o plano deixa; null no plano gratuito (a recusa do Figma não é erro aqui). */
async function introPage() {
  var page = LUME.pages['Introdução'];
  if (!page) {
    try {
      page = figma.createPage();
    } catch (err) {
      if (/Starter plan|\d+ pages/.test(String(err && err.message))) return null;
      throw err;
    }
  }
  page.name = L(PAGES['Introdução']);
  page.setPluginData(PAGE, 'Introdução');
  await page.loadAsync();
  if (figma.root.children.indexOf(page) !== 0) figma.root.insertChild(0, page);
  LUME.pages['Introdução'] = page;
  pageBackground(page);
  return page;
}

/** Números contados nas próprias páginas: valem também quando o arquivo foi gerado em partes. */
function introCounts() {
  var blocks = function (id) {
    var p = LUME.pages[id];
    return p ? p.children.filter(function (n) { return (n.getPluginData(KEY) || '').indexOf('block/') === 0; }).length : 0;
  };
  var comp = LUME.pages.Componentes;
  var sets = comp ? comp.findAll(function (n) { return n.type === 'COMPONENT_SET'; }) : [];
  return {
    fundamentos: blocks('Fundamentos'),
    componentes: blocks('Componentes'),
    sets: sets.length,
    variants: sets.reduce(function (a, s) { return a + s.children.length; }, 0),
    icons: META.iconCount || ICONS.length,
  };
}

async function introCard(o, w) {
  var card = box(o.name, { dir: 'V', gap: 10, pad: 32, w: w, fill: 'color/bg/surface', stroke: 'color/border/subtle', radius: 24 });
  add(card, await text(o.kicker, { style: 'overline', color: 'color/fg/subtle', raw: true }));
  add(card, await text(o.title, { style: 'heading-sm', color: 'color/fg/default', raw: true }));
  add(card, await text(o.body, { style: 'body-sm', color: 'color/fg/muted', w: w - 64, raw: true }));
  if (o.foot) {
    var foot = box('Rodapé', { dir: 'H', pad: [8, 0, 0, 0] });
    add(foot, await text(o.foot, { style: 'caption', color: 'color/fg/subtle', raw: true }));
    add(card, foot);
  }
  return card;
}

async function introSection(title, lead, cards, cols, inner) {
  var sec = box('Seção', { dir: 'V', gap: 24, w: inner });
  var label = box('Título da seção', { dir: 'V', gap: 4 });
  add(label, await text(title, { style: 'heading-md', color: 'color/fg/default', raw: true }));
  if (lead) add(label, await text(lead, { style: 'body-md', color: 'color/fg/subtle', w: 760, raw: true }));
  add(sec, label);
  var gap = 24;
  var cw = Math.floor((inner - gap * (cols - 1)) / cols);
  var grid = box('Cartões', { dir: 'H', wrap: true, gap: gap, rowGap: gap, w: inner });
  var made = [];
  for (var c of cards) made.push(add(grid, await introCard(c, cw)));
  // cartões da mesma seção com a mesma altura: em linha, a diferença de uma linha de texto aparece
  var tallest = Math.max.apply(null, made.map(function (m) { return m.height; }));
  made.forEach(function (m) { m.resize(cw, tallest); m.primaryAxisSizingMode = 'FIXED'; });
  add(sec, grid);
  return sec;
}

async function introduction() {
  var old = live('intro');
  if (old) old.remove();
  var page = await introPage();
  var own = !!page;
  if (!page) page = LUME.pages.Fundamentos;
  if (!page) return null;
  await figma.setCurrentPageAsync(page);

  var n = introCounts();
  var frame = box('Lume · Introdução', { dir: 'V', gap: 0, pad: 14, w: INTRO_W, fill: 'color/bg/app', radius: 36 });
  frame.setPluginData(KEY, 'intro');
  LUME.registry.intro = frame;
  setMode(frame, 'Claro');

  // capa: as mesmas primitivas da sidebar do Lume claro que os cabeçalhos dos blocos usam
  var hero = box('Capa', { dir: 'V', gap: 20, pad: [72, 72, 64, 72], fill: 'color/refugio/800', radius: 24 });
  add(frame, hero, { fillW: true });
  add(hero, await text('DESIGN SYSTEM · ' + META.version, { style: 'overline', color: 'color/terracotta/400', raw: true }));
  var brand = box('Marca', { dir: 'H', gap: 16, cross: 'center' });
  add(brand, introFlame(56));
  add(brand, await text('Lume', { style: 'display-lg', color: 'color/refugio/25', raw: true, name: 'Nome' }));
  add(hero, brand);
  add(hero, await text(L3(
    'O design system do Lume, do token ao padrão de tela. Tudo o que está neste arquivo existe igual no site e no código: os mesmos nomes, as mesmas medidas e as mesmas cores.',
    'Lume’s design system, from token to screen pattern. Everything in this file exists the same way on the site and in code: the same names, the same sizes, and the same colors.',
    'El design system de Lume, del token al patrón de pantalla. Todo lo que está en este archivo existe igual en el sitio y en el código: los mismos nombres, las mismas medidas y los mismos colores.',
  ), { style: 'body-lg', color: 'color/refugio/200', w: 820, raw: true, name: 'Resumo' }));
  var facts = box('Fatos', { dir: 'H', gap: 48, pad: [16, 0, 0, 0] });
  var stats = [
    [String(n.fundamentos + n.componentes), L3('blocos', 'blocks', 'bloques')],
    [String(n.sets), L3('conjuntos de variantes', 'variant sets', 'conjuntos de variantes')],
    [String(n.variants), L3('variantes', 'variants', 'variantes')],
    [String(n.icons), L3('ícones', 'icons', 'íconos')],
    [LUME.active.map(function (m) { return L(m); }).join(' · '), L3('modos', 'modes', 'modos')],
  ];
  for (var s of stats) {
    var f = box('Fato', { dir: 'V', gap: 2 });
    add(f, await text(s[0], { style: 'heading-lg', color: 'color/refugio/25', raw: true }));
    add(f, await text(s[1], { style: 'caption', color: 'color/refugio/300', raw: true }));
    add(facts, f);
  }
  add(hero, facts);

  var inner = INTRO_W - 14 * 2 - 56 * 2;
  var body = box('Seções', { dir: 'V', gap: 64, pad: [56, 56, 64, 56] });
  add(frame, body, { fillW: true });

  var both = LUME.active.length > 1;
  add(body, await introSection(
    L3('O que tem neste arquivo', 'What’s in this file', 'Qué hay en este archivo'),
    own
      ? L3('Além desta, três páginas, para ler na ordem: das decisões de base aos componentes prontos. Em cada uma, uma linha por categoria, com os blocos lado a lado.', 'Besides this one, three pages, meant to be read in order: from the base decisions to the finished components. On each, one row per category, with the blocks side by side.', 'Además de esta, tres páginas, para leer en orden: de las decisiones de base a los componentes listos. En cada una, una fila por categoría, con los bloques lado a lado.')
      : L3('Três páginas, para ler na ordem: das decisões de base aos componentes prontos. Esta introdução fica no topo de Fundamentos.', 'Three pages, meant to be read in order: from the base decisions to the finished components. This introduction sits at the top of Foundations.', 'Tres páginas, para leer en orden: de las decisiones de base a los componentes listos. Esta introducción queda arriba de Fundamentos.'),
    [
      {
        name: 'Fundamentos', kicker: '01', title: L('Lume · Fundamentos'),
        body: L3('Comece por aqui. Cores, tipografia, espaçamento, raios, sombras, movimento e layout: as decisões de que todo o resto é feito, com o nome de cada token.', 'Start here. Color, typography, spacing, radii, shadows, motion, and layout: the decisions everything else is made of, with each token’s name.', 'Empieza aquí. Color, tipografía, espaciado, radios, sombras, movimiento y layout: las decisiones de las que está hecho todo lo demás, con el nombre de cada token.'),
        foot: n.fundamentos + L3(' blocos', ' blocks', ' bloques'),
      },
      {
        name: 'Ícones', kicker: '02', title: L('Lume · Ícones'),
        body: L3('A biblioteca inteira, desenhada na mesma grade de 24 px e com o mesmo traço, para conviver com a Geist sem chamar mais atenção que o texto.', 'The whole library, drawn on the same 24 px grid with the same stroke, to sit alongside Geist without drawing more attention than the text.', 'La biblioteca completa, dibujada en la misma cuadrícula de 24 px y con el mismo trazo, para convivir con Geist sin llamar más la atención que el texto.'),
        foot: n.icons + L3(' ícones', ' icons', ' íconos'),
      },
      {
        name: 'Componentes', kicker: '03', title: L('Lume · Componentes'),
        body: both
          ? L3('Das ações aos padrões de tela, um bloco por componente, com todas as variantes e estados e o mesmo exemplo em claro e escuro, lado a lado.', 'From actions to screen patterns, one block per component, with every variant and state and the same example in light and dark, side by side.', 'De las acciones a los patrones de pantalla, un bloque por componente, con todas las variantes y estados y el mismo ejemplo en claro y oscuro, lado a lado.')
          : L3('Das ações aos padrões de tela, um bloco por componente, com todas as variantes e estados.', 'From actions to screen patterns, one block per component, with every variant and state.', 'De las acciones a los patrones de pantalla, un bloque por componente, con todas las variantes y estados.'),
        foot: n.componentes + L3(' blocos · ', ' blocks · ', ' bloques · ') + n.variants + L3(' variantes', ' variants', ' variantes'),
      },
    ], 3, inner));

  add(body, await introSection(
    L3('Princípios', 'Principles', 'Principios'),
    L3('O que se repete em cada peça e dá ao Lume a cara que ele tem.', 'What repeats in every piece and gives Lume its look.', 'Lo que se repite en cada pieza y le da a Lume la cara que tiene.'),
    [
      {
        name: 'Superfícies', kicker: '01', title: L3('Tudo plano', 'Everything flat', 'Todo plano'),
        body: L3('Superfícies opacas e lisas, contornos finos. Sem vidro, brilho, desfoque ou degradê de fundo: a personalidade vem da forma, não do efeito.', 'Opaque, smooth surfaces and thin borders. No glass, glow, blur, or background gradient: personality comes from form, not effects.', 'Superficies opacas y lisas, contornos finos. Sin vidrio, brillo, desenfoque ni degradado de fondo: la personalidad viene de la forma, no del efecto.'),
      },
      {
        name: 'Cor', kicker: '02', title: L3('Ardósia e terracota', 'Slate and terracotta', 'Pizarra y terracota'),
        body: L3('Uma ardósia azulada no fundo e no texto, e a terracota da chama só onde é preciso apontar: o indicador, o item ativo, a nota acesa.', 'A bluish slate for backgrounds and text, and the flame’s terracotta only where something needs pointing out: the indicator, the active item, the lit rating.', 'Una pizarra azulada en el fondo y en el texto, y la terracota de la llama solo donde hace falta señalar: el indicador, el elemento activo, la nota encendida.'),
      },
      {
        name: 'Tipografia', kicker: '03', title: L3('Serifa no título, sans no texto', 'Serif for headings, sans for text', 'Serif en el título, sans en el texto'),
        body: L3('Geist Serif dá voz aos títulos; Geist Sans cuida da leitura e da interface; JetBrains Mono fica com o código.', 'Geist Serif gives headings their voice; Geist Sans handles reading and the interface; JetBrains Mono takes the code.', 'Geist Serif da voz a los títulos; Geist Sans se ocupa de la lectura y de la interfaz; JetBrains Mono se queda con el código.'),
      },
      {
        name: 'Temas', kicker: '04', title: L3('Claro e escuro, juntos', 'Light and dark, together', 'Claro y oscuro, juntos'),
        body: L3('Os dois temas nascem dos mesmos tokens e são vistos lado a lado. Cada par de texto e fundo passa no contraste da WCAG nos dois.', 'Both themes come from the same tokens and are shown side by side. Every text and background pair passes WCAG contrast in both.', 'Los dos temas nacen de los mismos tokens y se ven lado a lado. Cada par de texto y fondo pasa el contraste de la WCAG en los dos.'),
      },
    ], 2, inner));

  add(body, await introSection(
    L3('Como ler cada bloco', 'How to read each block', 'Cómo leer cada bloque'),
    null,
    [
      {
        name: 'Cabeçalho', kicker: '01', title: L3('Cabeçalho', 'Header', 'Encabezado'),
        body: L3('A categoria, o nome do componente e para que ele serve, em uma frase.', 'The category, the component’s name, and what it’s for, in one sentence.', 'La categoría, el nombre del componente y para qué sirve, en una frase.'),
      },
      {
        name: 'Variantes', kicker: '02', title: L3('Variantes', 'Variants', 'Variantes'),
        body: L3('Todas as combinações de tamanho, tipo e estado, em uma grade com rótulos.', 'Every combination of size, type, and state, in a labeled grid.', 'Todas las combinaciones de tamaño, tipo y estado, en una cuadrícula con etiquetas.'),
      },
      {
        name: 'Exemplos', kicker: '03', title: L3('Exemplos', 'Examples', 'Ejemplos'),
        body: L3('O componente em uso, montado como aparece nas telas do site.', 'The component in use, put together the way it appears on the site’s screens.', 'El componente en uso, armado como aparece en las pantallas del sitio.'),
      },
      {
        name: 'Temas', kicker: '04', title: both ? L3('Claro e escuro', 'Light and dark', 'Claro y oscuro') : L(LUME.active[0]),
        body: both
          ? L3('No fim, o mesmo exemplo nos dois temas, um ao lado do outro.', 'At the end, the same example in both themes, next to each other.', 'Al final, el mismo ejemplo en los dos temas, uno al lado del otro.')
          : L3('No fim, o mesmo exemplo no tema das variáveis.', 'At the end, the same example in the variables’ theme.', 'Al final, el mismo ejemplo en el tema de las variables.'),
      },
    ], 4, inner));

  // rodapé: onde ver tudo funcionando
  var foot = box('Rodapé', { dir: 'V', gap: 4, pad: [8, 0, 0, 0], w: inner });
  add(foot, await text(L3('Veja funcionando', 'See it working', 'Míralo funcionando'), { style: 'label-md', color: 'color/fg/default', raw: true }));
  add(foot, await text(L3('Em lumeui.dev cada componente está ao vivo, com teclado, acessibilidade e os três idiomas.', 'On lumeui.dev every component is live, with keyboard, accessibility, and all three languages.', 'En lumeui.dev cada componente está en vivo, con teclado, accesibilidad y los tres idiomas.'), { style: 'body-sm', color: 'color/fg/muted', w: 760, raw: true }));
  add(body, foot);

  page.appendChild(frame);
  frame.x = 0;
  // no plano gratuito ela divide a página com Fundamentos: fica acima da primeira linha, sem empurrar nada
  frame.y = own ? 0 : -(frame.height + 200);
  return frame;
}
