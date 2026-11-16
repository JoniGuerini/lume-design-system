/**
 * Lume para Figma — orquestração: variáveis → fontes → páginas → blocos → arrumação na página.
 * A UI (ui.html) escolhe o que gerar; sem UI (testes), gera tudo.
 */

/** Ordem das linhas em cada página: cada linha é uma categoria, com os blocos lado a lado. */
var ROWS = {
  Fundamentos: ['Fundamentos'],
  'Ícones': ['Ícones'],
  // 'Gráficos' fica aqui para o plano gratuito, em que não há página própria
  Componentes: ['Ações', 'Formulário', 'Navegação', 'Camadas', 'Feedback', 'Dados e conteúdo', 'Gráficos', 'Padrões'],
  'Gráficos': ['Gráficos', 'Indicadores'],
};

/**
 * Blocos com `charts` (gráficos e indicadores) vão para a página Gráficos quando ela existe (plano pago);
 * sem ela, ficam em Componentes, na linha de origem. O quadro de cada bloco é reaproveitado, então mudar de
 * página não troca o id (os links “Ver no Figma” do site continuam valendo).
 */
function placeBlocks() {
  var own = !!LUME.pages['Gráficos'];
  BLOCKS.forEach(function (d) {
    if (!d.charts) return;
    if (!d.home) d.home = { page: d.page, row: d.row, order: d.order };
    d.page = own ? 'Gráficos' : d.home.page;
    d.row = own ? d.charts.row : d.home.row;
    d.order = own ? d.charts.order : d.home.order;
  });
}

var GAP_X = 96;
var GAP_Y = 200;

function say(msg) {
  LUME.progress(msg);
}

/** Fundo escuro da página, como uma mesa de trabalho (primitiva fixa: páginas não usam variáveis). */
function pageBackground(page) {
  var hex = null;
  DATA.collections.forEach(function (c) {
    if (c.name !== 'Primitivas') return;
    c.variables.forEach(function (v) { if (v.name === 'color/neutral/975') hex = v.values[c.modes[0]]; });
  });
  if (!hex) return;
  var rgb = hexToRgba(hex);
  page.backgrounds = [{ type: 'SOLID', color: { r: rgb.r, g: rgb.g, b: rgb.b }, opacity: 1, visible: true, blendMode: 'NORMAL' }];
}

/** Título de linha no canvas (fora dos blocos), recriado a cada execução. */
async function rowTitle(page, key, label, count) {
  var old = live(key);
  if (old) old.remove();
  var t = box('Categoria · ' + label, { dir: 'V', gap: 6 });
  t.setPluginData(KEY, key);
  LUME.registry[key] = t;
  add(t, await text(label, { style: 'display-sm', color: 'color/neutral/300' }));
  add(t, await text(count + (count === 1 ? L3(' bloco', ' block', ' bloque') : L3(' blocos', ' blocks', ' bloques')), { style: 'body-md', color: 'color/neutral/600', raw: true }));
  page.appendChild(t);
  return t;
}

/** Data de geração dos tokens no formato de cada idioma. */
function generatedOn() {
  var p = META.generatedAt.slice(0, 10).split('-');
  var months = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
  return LANG === 'en' ? months[Number(p[1]) - 1] + ' ' + Number(p[2]) + ', ' + p[0] : p[2] + '/' + p[1] + '/' + p[0];
}

/** Capa da página Componentes: o que é, versão, como usar. */
async function cover(page, id) {
  var key = 'cover/' + id;
  // versões anteriores guardavam a capa pelo nome da página
  [key, 'cover/' + PAGES[id]].forEach(function (k) {
    var old = live(k);
    if (old) old.remove();
  });
  var c = box('Lume · Capa', { dir: 'V', gap: 20, pad: [56, 64], w: 1120, fill: 'color/refugio/800', radius: 36 });
  c.setPluginData(KEY, key);
  LUME.registry[key] = c;
  add(c, await text('LUME DESIGN SYSTEM · ' + META.version, { style: 'overline', color: 'color/terracotta/400', raw: true }));
  add(c, await text(id, { style: 'display-md', color: 'color/refugio/25' }));
  var modes = LUME.active.length > 1
    ? L3('nos modos Claro e Escuro', 'in Light and Dark modes', 'en los modos Claro y Oscuro')
    : L3('no modo ', 'in ', 'en el modo ') + L(LUME.active[0]) + L3('', ' mode', '');
  var intro = L3(
    'Cada bloco é um componente: o conjunto de variantes, exemplos montados com instâncias e o mesmo exemplo {modos}. Cores, medidas e textos vêm das variáveis e dos estilos do arquivo.',
    'Each block is a component: the variant set, examples built with instances, and the same example {modos}. Colors, sizes, and text come from the file’s variables and styles.',
    'Cada bloque es un componente: el conjunto de variantes, ejemplos armados con instancias y el mismo ejemplo {modos}. Colores, medidas y textos vienen de las variables y los estilos del archivo.',
  );
  add(c, await text(intro.replace('{modos}', modes), { style: 'body-lg', color: 'color/refugio/200', w: 880, raw: true }));
  var facts = box('Fatos', { dir: 'H', gap: 40, pad: [12, 0, 0, 0] });
  // contado na própria página: vale também quando os blocos foram gerados em partes
  var sets = page.findAll(function (n) { return n.type === 'COMPONENT_SET'; });
  var variantCount = sets.reduce(function (a, st) { return a + st.children.length; }, 0);
  var loose = page.findAll(function (n) { return n.type === 'COMPONENT' && n.parent && n.parent.type !== 'COMPONENT_SET'; }).length;
  var stats = [
    [String(sets.length + loose), 'componentes e conjuntos'],
    [String(variantCount), 'variantes'],
    [String(META.iconCount || ICONS.length), 'ícones'],
    [generatedOn(), 'gerado em'],
  ];
  for (var s of stats) {
    var f = box('Fato', { dir: 'V', gap: 2 });
    add(f, await text(s[0], { style: 'heading-lg', color: 'color/refugio/25', raw: true }));
    add(f, await text(s[1], { style: 'caption', color: 'color/refugio/300' }));
    add(facts, f);
  }
  add(c, facts);
  page.appendChild(c);
  return c;
}

/**
 * Altura que o bloco ocupa de fato. Com conteúdo vazando pela borda (o Figma não corta quando clipsContent é falso),
 * vale o que se vê, não a moldura: é o que evita um bloco invadir o de baixo.
 */
function occupiedHeight(n) {
  var h = n.height;
  try {
    var rb = n.absoluteRenderBounds;
    var t = n.absoluteTransform;
    if (rb && t) h = Math.max(h, rb.y + rb.height - t[1][2]);
  } catch (e) { /* sem medida visual: fica a altura */ }
  return Math.ceil(h);
}

/** Blocos desta página por linha, na ordem: lidos da própria página, não só do que esta execução gerou. */
function pageBlocks(page, row) {
  return page.children
    .filter(function (n) { return (n.getPluginData(KEY) || '').indexOf('block/') === 0 && n.getPluginData('orbita-row') === row; })
    .sort(function (a, b) { return Number(a.getPluginData('orbita-order') || 0) - Number(b.getPluginData('orbita-order') || 0); });
}

/**
 * Empilha capa, títulos e blocos pela altura que cada um tem agora. Só move: roda de novo no fim da execução,
 * depois que o Figma termina de recalcular o auto layout, e corrige o que cresceu no caminho.
 */
function restack(page, pageId) {
  var y = 0;
  var cv = live('cover/' + pageId);
  if (cv && cv.parent === page) {
    cv.x = 0;
    cv.y = 0;
    y = occupiedHeight(cv) + GAP_Y;
  }
  for (var row of ROWS[pageId]) {
    var blocks = pageBlocks(page, row);
    var title = live('row/' + pageId + '/' + row);
    if (!blocks.length) {
      if (title) title.remove();
      continue;
    }
    if (title) {
      title.x = 0;
      title.y = y;
      y += occupiedHeight(title) + 48;
    }
    var x = 0;
    var tallest = 0;
    blocks.forEach(function (b) {
      b.x = x;
      b.y = y;
      x += b.width + GAP_X;
      tallest = Math.max(tallest, occupiedHeight(b));
    });
    y += tallest + GAP_Y;
  }
  // componentes principais que os blocos só usam como instância ficam juntos, numa área com título, no fim
  var parts = live('parts/' + pageId, 'FRAME');
  if (parts && parts.parent === page) {
    parts.x = 0;
    parts.y = y;
  }
}

function pageOf(n) {
  for (var p = n; p; p = p.parent) if (p.type === 'PAGE') return p;
  return null;
}

/** Componentes soltos na página: os principais que os blocos usam só como instância (Calendário, App shell…). */
function looseComponents(page) {
  return page.children.filter(function (n) {
    var k = n.getPluginData(KEY) || '';
    return (n.type === 'COMPONENT' || n.type === 'COMPONENT_SET') && k && k.indexOf('icon/') !== 0;
  });
}

/**
 * Junta os componentes principais soltos numa área própria (“Componentes de apoio”), no modo Claro, em grade.
 * Cópias velhas da mesma chave (de execuções antigas) que nada usa saem: eram as peças escuras perdidas no fim da página.
 */
async function tidyParts(page, pageId) {
  var key = 'parts/' + pageId;
  var parts = live(key, 'FRAME');
  // os de dentro da área, achados pela chave (o nome da moldura muda com o idioma)
  var inside = parts ? parts.findAll(function (n) { return (n.type === 'COMPONENT' || n.type === 'COMPONENT_SET') && !!n.getPluginData(KEY) && n.parent && n.parent.type !== 'COMPONENT_SET'; }) : [];
  var loose = looseComponents(page).concat(inside);
  var keep = [];
  for (var n of loose) {
    var k = n.getPluginData(KEY) || '';
    var insts = typeof n.getInstancesAsync === 'function' && n.type === 'COMPONENT' ? await n.getInstancesAsync() : null;
    if (!k || live(k) === n) {
      // usado só em outra página (ex.: o componente de um gráfico): vai para as peças de lá
      var where = insts && insts.length ? insts.map(pageOf).filter(function (p, i, a) { return p && a.indexOf(p) === i; }) : [];
      if (where.length === 1 && where[0] !== page) where[0].appendChild(n);
      else keep.push(n);
      continue;
    }
    // cópia de uma chave que já tem dono: só sai se nenhuma instância depende dela
    var used = insts ? insts.length : 1;
    if (used) keep.push(n);
    else n.remove();
  }
  if (!keep.length) {
    if (parts) {
      keep.forEach(function (n) { page.appendChild(n); });
      parts.remove();
    }
    return;
  }
  // a moldura é refeita, mas os componentes passam para a nova antes: os ids deles não mudam
  keep.forEach(function (n) { page.appendChild(n); });
  if (parts) parts.remove();
  parts = box('Lume · Componentes de apoio', { dir: 'V', gap: 32, pad: 48, w: BLOCK_W, fill: 'color/bg/app', radius: 36 });
  parts.setPluginData(KEY, key);
  LUME.registry[key] = parts;
  setMode(parts, 'Claro');
  var head = box('Cabeçalho', { dir: 'V', gap: 6 });
  add(head, await text('Componentes de apoio', { style: 'heading-lg', color: 'color/fg/default' }));
  add(head, await text('Os componentes principais que os blocos acima usam como instância. Edite aqui e os blocos acompanham.', { style: 'body-sm', color: 'color/fg/subtle', w: BLOCK_W - 96 }));
  add(parts, head);
  var grid = box('Peças', { dir: 'H', wrap: true, gap: 48, rowGap: 48, w: BLOCK_W - 96 });
  add(parts, grid);
  keep.sort(function (a, b) { return a.name.localeCompare(b.name); }).forEach(function (n) { add(grid, n); });
  page.appendChild(parts);
}

/** Arruma blocos e títulos: uma linha por categoria, blocos alinhados pelo topo. */
async function arrange(page, pageId, built) {
  if (pageId === 'Componentes' || pageId === 'Gráficos') await cover(page, pageId);
  // bloco de uma versão antiga que não existe mais (saiu ou mudou de id) ficaria parado por cima dos novos
  var home = {};
  BLOCKS.forEach(function (d) { home['block/' + d.id] = d.page; });
  page.children.slice().forEach(function (n) {
    var k = n.getPluginData(KEY) || '';
    if (k.indexOf('block/') !== 0 || home[k] === pageId) return;
    // bloco que agora mora em outra página (os gráficos): muda inteiro, com o mesmo id, mesmo que a montagem dele tenha falhado
    if (home[k] && LUME.pages[home[k]]) {
      LUME.pages[home[k]].appendChild(n);
      return;
    }
    if (!home[k]) {
      // os componentes de dentro sobrevivem (instâncias em outros blocos continuam ligadas) e vão para baixo
      n.findAll(function (c) { return (c.type === 'COMPONENT_SET' || c.type === 'COMPONENT') && !!c.getPluginData(KEY) && c.parent && c.parent.type !== 'COMPONENT_SET'; })
        .forEach(function (c) { page.appendChild(c); });
      n.remove();
    }
  });
  for (var row of ROWS[pageId]) {
    var count = pageBlocks(page, row).length;
    if (count) await rowTitle(page, 'row/' + pageId + '/' + row, row, count);
  }
  await tidyParts(page, pageId);
  restack(page, pageId);
}

async function main(options) {
  options = options || {};
  setLang(options.locale || 'pt-BR');
  var wanted = options.pages || ['Fundamentos', 'Ícones', 'Componentes'];
  var chosen = options.modes && options.modes.length ? options.modes : ['Claro', 'Escuro'];
  LUME.active = ['Claro', 'Escuro'].filter(function (m) { return chosen.indexOf(m) >= 0; });

  say(L3('Lendo o arquivo…', 'Reading the file…', 'Leyendo el archivo…'));
  await loadRegistry();

  say(L3('Variáveis e estilos…', 'Variables and styles…', 'Variables y estilos…'));
  await importTokens();
  await loadFonts();

  // a página de ícones vem primeiro: os outros componentes usam os ícones
  for (var k of MAIN_PAGES) await ensurePage(k);
  // Gráficos acompanha Componentes; vem antes dela, para os blocos saírem de lá antes da arrumação
  if (wanted.indexOf('Componentes') >= 0) {
    await optionalPage('Gráficos');
    wanted = wanted.concat('Gráficos');
  }
  placeBlocks();

  var order = ['Ícones', 'Fundamentos', 'Gráficos', 'Componentes'];
  var arranged = [];
  for (var pageId of order) {
    if (wanted.indexOf(pageId) < 0 && pageId !== 'Ícones') continue;
    var page = LUME.pages[pageId];
    if (!page) continue;
    await figma.setCurrentPageAsync(page);
    pageBackground(page);
    if (pageId === 'Ícones' && wanted.indexOf('Ícones') < 0) {
      // sem gerar a página de ícones, os componentes de ícone ainda precisam existir
      ICONS.forEach(function (i) { iconComponent(i.name); });
      continue;
    }
    var defs = BLOCKS.filter(function (b) { return b.page === pageId; });
    var built = [];
    for (var def of defs) {
      say(L(pageId) + ' · ' + L(def.title) + '…');
      LUME.block = def.id;
      try {
        var content = await def.build({ page: page });
        var node = await docBlock(def, content);
        page.appendChild(node);
        built.push({ def: def, node: node });
      } catch (err) {
        warn(L3('Bloco “', 'Block “', 'Bloque “') + L(def.title) + L3('” falhou: ', '” failed: ', '” falló: ') + (err && err.message ? err.message : err));
        if (options.strict) throw err;
      }
    }
    LUME.block = 'arrumação';
    await arrange(page, pageId, built);
    arranged.push(pageId);
  }

  // ícones que esta execução não tocou (geração em partes) também vão para o idioma ativo
  ICONS.forEach(function (i) {
    var ic = live('icon/' + i.name, 'COMPONENT');
    if (ic && ic.getPluginData('orbita-lang') !== LANG) nameIcon(ic, i);
  });

  // segunda passada: o Figma pode terminar de recalcular o auto layout (instâncias, textos) depois da primeira
  await new Promise(function (r) { setTimeout(r, 0); });
  // as peças de novo: um componente pode ter mudado de página na arrumação de outra
  for (var pid of arranged) {
    await tidyParts(LUME.pages[pid], pid);
    restack(LUME.pages[pid], pid);
  }

  say(L3('Introdução…', 'Introduction…', 'Introducción…'));
  LUME.block = 'introdução';
  var intro = await introduction();
  // termina na Introdução (página própria ou topo de Fundamentos): é o começo do arquivo
  var first = intro ? intro.parent : LUME.pages.Componentes;
  await figma.setCurrentPageAsync(first);
  if (intro && figma.viewport) figma.viewport.scrollAndZoomIntoView([intro]);
  var r = LUME.report;
  var counts = L3(
    r.blocos + ' blocos, ' + r.componentes + ' componentes (' + r.variantes + ' variantes), ' + r.icones + ' ícones, ' + r.variaveis + ' variáveis',
    r.blocos + ' blocks, ' + r.componentes + ' components (' + r.variantes + ' variants), ' + r.icones + ' icons, ' + r.variaveis + ' variables',
    r.blocos + ' bloques, ' + r.componentes + ' componentes (' + r.variantes + ' variantes), ' + r.icones + ' íconos, ' + r.variaveis + ' variables',
  );
  var only = L3(', só no modo ', ', ', ', solo en el modo ') + L(LUME.active[0]) + L3('.', ' mode only.', '.');
  return 'Lume: ' + counts + (LUME.active.length > 1 ? '.' : only) +
    (r.avisos.length ? L3(' Avisos: ', ' Warnings: ', ' Avisos: ') + r.avisos.join(' · ') : '');
}

/* ───────── Links do site ───────── */

/** Id de cada bloco no arquivo, para o rodapé das páginas do site abrir o Figma direto no componente (site/figma-links.js). */
function blockLinks() {
  var map = {};
  Object.keys(LUME.registry).sort().forEach(function (key) {
    if (key.indexOf('block/') !== 0) return;
    var n = live(key);
    if (n) map[key.slice(6)] = n.id;
  });
  return Object.keys(map).length ? 'lume-figma-links ' + JSON.stringify(map) : '';
}

/* ───────── Entrada ───────── */

if (typeof __LUME_TEST__ === 'undefined') {
  if (typeof __html__ !== 'undefined') {
    figma.showUI(__html__, { width: 760, height: 520, themeColors: true });
    LUME.progress = function (msg) { figma.ui.postMessage({ type: 'progress', message: msg }); };
    // modos e idioma ficam guardados neste computador: num arquivo de plano gratuito, não precisa escolher toda vez
    Promise.all([figma.clientStorage.getAsync('orbita-modes'), figma.clientStorage.getAsync('orbita-locale')]).then(function (saved) {
      figma.ui.postMessage({ type: 'init', modes: saved[0] || null, locale: saved[1] || 'system' });
    });
    figma.ui.onmessage = function (msg) {
      if (msg.type === 'cancel') return figma.closePlugin();
      // a janela mede o próprio conteúdo (muda com o idioma) e pede a altura certa
      if (msg.type === 'resize') return figma.ui.resize(msg.width || 760, Math.max(320, Math.min(900, Math.ceil(msg.height))));
      if (msg.type === 'locale') return figma.clientStorage.setAsync('orbita-locale', msg.preference);
      if (msg.type !== 'run') return;
      figma.clientStorage.setAsync('orbita-modes', msg.modes);
      main({ pages: msg.pages, modes: msg.modes, locale: msg.locale }).then(function (summary) {
        figma.ui.postMessage({ type: 'done', message: summary, links: blockLinks() });
        figma.notify(summary, { timeout: 8000 });
      }).catch(function (err) {
        figma.ui.postMessage({ type: 'error', message: String(err && err.message ? err.message : err) });
      });
    };
  } else {
    main({}).then(function (summary) { figma.closePlugin(summary); }).catch(function (err) { figma.closePlugin(L3('Lume: erro — ', 'Lume: error — ', 'Lume: error — ') + err.message); });
  }
}
