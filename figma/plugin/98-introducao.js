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
  for (var c of cards) add(grid, await introCard(c, cw));
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
    'Tokens, componentes e padrões do Lume, os mesmos do site e do código. Cada peça deste arquivo tem o nome, as medidas e as cores que tem em lumeui.dev, então o que se desenha aqui já existe para quem programa.',
    'Lume’s tokens, components, and patterns, the same ones as on the site and in code. Every piece in this file has the name, sizes, and colors it has on lumeui.dev, so what you design here already exists for whoever builds it.',
    'Tokens, componentes y patrones de Lume, los mismos del sitio y del código. Cada pieza de este archivo tiene el nombre, las medidas y los colores que tiene en lumeui.dev, así que lo que se diseña aquí ya existe para quien programa.',
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
      ? L3('Além desta, três páginas, nesta ordem. Fundamentos e Componentes são organizados em linhas por categoria, com os blocos lado a lado.', 'Besides this one, three pages, in this order. Foundations and Components are arranged in rows by category, with the blocks side by side.', 'Además de esta, tres páginas, en este orden. Fundamentos y Componentes están organizados en filas por categoría, con los bloques lado a lado.')
      : L3('Três páginas, nesta ordem. No plano gratuito do Figma esta introdução fica no topo de Fundamentos.', 'Three pages, in this order. On Figma’s free plan this introduction sits at the top of Foundations.', 'Tres páginas, en este orden. En el plan gratuito de Figma esta introducción queda arriba de Fundamentos.'),
    [
      {
        name: 'Fundamentos', kicker: '01', title: L('Lume · Fundamentos'),
        body: L3('Cores, tipografia, espaçamento, raios, sombras, movimento e layout. As variáveis e os estilos do arquivo, vistos de perto e com o nome de cada token.', 'Color, typography, spacing, radii, shadows, motion, and layout. The file’s variables and styles, up close and with each token’s name.', 'Color, tipografía, espaciado, radios, sombras, movimiento y layout. Las variables y los estilos del archivo, de cerca y con el nombre de cada token.'),
        foot: n.fundamentos + L3(' blocos', ' blocks', ' bloques'),
      },
      {
        name: 'Ícones', kicker: '02', title: L('Lume · Ícones'),
        body: L3('A biblioteca inteira, um componente por ícone, em 24 px com traço de 2. Nos componentes, o ícone é uma propriedade da instância: troque sem perder a cor.', 'The whole library, one component per icon, at 24 px with a 2 px stroke. In components, the icon is an instance property: swap it without losing the color.', 'La biblioteca completa, un componente por ícono, en 24 px con trazo de 2. En los componentes, el ícono es una propiedad de la instancia: cámbialo sin perder el color.'),
        foot: n.icons + L3(' ícones', ' icons', ' íconos'),
      },
      {
        name: 'Componentes', kicker: '03', title: L('Lume · Componentes'),
        body: both
          ? L3('Cada bloco é um componente: o conjunto de variantes, exemplos montados com instâncias e o mesmo exemplo nos modos Claro e Escuro.', 'Each block is a component: the variant set, examples built with instances, and the same example in Light and Dark modes.', 'Cada bloque es un componente: el conjunto de variantes, ejemplos armados con instancias y el mismo ejemplo en los modos Claro y Oscuro.')
          : L3('Cada bloco é um componente: o conjunto de variantes, exemplos montados com instâncias e o mesmo exemplo no modo das variáveis.', 'Each block is a component: the variant set, examples built with instances, and the same example in the variables’ mode.', 'Cada bloque es un componente: el conjunto de variantes, ejemplos armados con instancias y el mismo ejemplo en el modo de las variables.'),
        foot: n.componentes + L3(' blocos · ', ' blocks · ', ' bloques · ') + n.variants + L3(' variantes', ' variants', ' variantes'),
      },
    ], 3, inner));

  add(body, await introSection(
    L3('Como usar', 'How to use it', 'Cómo usarlo'),
    null,
    [
      {
        name: 'Variáveis', kicker: L3('VARIÁVEIS', 'VARIABLES', 'VARIABLES'), title: L3('Use as semânticas', 'Use the semantic ones', 'Usa las semánticas'),
        body: L3('A coleção Semânticos diz o papel da cor (fundo, texto, contorno, marca) e muda com o modo. As Primitivas existem para ela; Dimensões guarda espaços, raios e alturas.', 'The Semantic collection says what a color is for (background, text, border, brand) and changes with the mode. Primitives exist to feed it; Dimensions holds spacing, radii, and heights.', 'La colección Semánticos dice para qué es el color (fondo, texto, contorno, marca) y cambia con el modo. Las Primitivas existen para ella; Dimensiones guarda espacios, radios y alturas.'),
      },
      {
        name: 'Modos', kicker: L3('MODOS', 'MODES', 'MODOS'), title: both ? L3('Claro e Escuro', 'Light and Dark', 'Claro y Oscuro') : L(LUME.active[0]),
        body: both
          ? L3('Os dois temas são modos da mesma variável. Para trocar, escolha o modo no frame, em Aparência: tudo que está dentro acompanha.', 'Both themes are modes of the same variable. To switch, pick the mode on the frame, under Appearance: everything inside follows.', 'Los dos temas son modos de la misma variable. Para cambiar, elige el modo en el frame, en Apariencia: todo lo que está dentro lo sigue.')
          : L3('O plano gratuito do Figma aceita um modo por coleção. Num plano pago, rode de novo com Claro e Escuro: o outro modo entra sem duplicar nada.', 'Figma’s free plan allows one mode per collection. On a paid plan, run it again with Light and Dark: the other mode is added without duplicating anything.', 'El plan gratuito de Figma admite un modo por colección. En un plan de pago, ejecútalo de nuevo con Claro y Oscuro: el otro modo entra sin duplicar nada.'),
      },
      {
        name: 'Instâncias', kicker: L3('INSTÂNCIAS', 'INSTANCES', 'INSTANCIAS'), title: L3('Arraste da aba Assets', 'Drag from the Assets tab', 'Arrastra desde la pestaña Assets'),
        body: L3('As propriedades da instância trocam a variante, o texto e o ícone. Evite desanexar: a instância ligada recebe as correções da próxima versão.', 'Instance properties swap the variant, the text, and the icon. Avoid detaching: a linked instance gets the next version’s fixes.', 'Las propiedades de la instancia cambian la variante, el texto y el ícono. Evita desvincular: la instancia vinculada recibe las correcciones de la próxima versión.'),
      },
      {
        name: 'Atualizar', kicker: L3('ATUALIZAR', 'UPDATING', 'ACTUALIZAR'), title: L3('Rode o plugin de novo', 'Run the plugin again', 'Ejecuta el plugin de nuevo'),
        body: L3('Tudo é refeito no lugar, sem duplicar e com os mesmos ids, então as instâncias continuam ligadas. Outro idioma na janela renomeia páginas, componentes e variáveis.', 'Everything is rebuilt in place, without duplicating and with the same ids, so instances stay linked. Another language in the window renames pages, components, and variables.', 'Todo se rehace en el lugar, sin duplicar y con los mismos ids, así que las instancias siguen vinculadas. Otro idioma en la ventana renombra páginas, componentes y variables.'),
      },
    ], 2, inner));

  // rodapé: fontes e onde está o resto
  var foot = box('Rodapé', { dir: 'H', gap: 48, pad: [32, 0, 0, 0], w: inner });
  var fonts = box('Fontes', { dir: 'V', gap: 4 });
  add(fonts, await text(L3('Fontes', 'Fonts', 'Fuentes'), { style: 'label-md', color: 'color/fg/default', raw: true }));
  add(fonts, await text(L3('Geist Serif nos títulos, Geist Sans no texto e JetBrains Mono no código. Instale as três antes de rodar; sem elas, o plugin usa a Inter e avisa.', 'Geist Serif for headings, Geist Sans for text, and JetBrains Mono for code. Install all three before running; without them, the plugin uses Inter and warns you.', 'Geist Serif en los títulos, Geist Sans en el texto y JetBrains Mono en el código. Instala las tres antes de ejecutarlo; sin ellas, el plugin usa Inter y avisa.'), { style: 'body-sm', color: 'color/fg/muted', w: 620, raw: true }));
  add(foot, fonts);
  var site = box('Site', { dir: 'V', gap: 4 });
  add(site, await text(L3('Documentação e código', 'Docs and code', 'Documentación y código'), { style: 'label-md', color: 'color/fg/default', raw: true }));
  add(site, await text(L3('Uso, acessibilidade, React e a API de cada componente em lumeui.dev.', 'Usage, accessibility, React, and each component’s API on lumeui.dev.', 'Uso, accesibilidad, React y la API de cada componente en lumeui.dev.'), { style: 'body-sm', color: 'color/fg/muted', w: 560, raw: true }));
  add(foot, site);
  add(body, foot);

  page.appendChild(frame);
  frame.x = 0;
  // no plano gratuito ela divide a página com Fundamentos: fica acima da primeira linha, sem empurrar nada
  frame.y = own ? 0 : -(frame.height + 200);
  return frame;
}
