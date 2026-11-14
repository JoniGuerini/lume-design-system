/**
 * Componentes da 0.30 à 0.38: Barra de ferramentas, Seletor de cor, Avaliação, Editor de texto rico, Link,
 * Banner de anúncio, Central de notificações, Progresso circular, Carrossel, Visualizador de imagem,
 * Lista arrastável, Kanban, Painéis redimensionáveis e Divisor.
 * Espelha ds/components/toolbar, color-picker, rating, editor, link, banner, notifications, loading,
 * carousel, image-viewer, sortable, resizable e surfaces.
 */
(function () {
  var C = {};

  /** O mesmo foco de todo o Lume: contorno de 2 px na cor de foco. */
  function ring(node) {
    stroke(node, 'color/border/focus', 'focus-ring/width');
  }

  /** Botão de ícone de 36 px, sem fundo, como os do Roteiro. */
  function iconBtn(name, state, o) {
    o = o || {};
    var size = o.size || 36;
    var b = box(o.label || name, { dir: 'H', align: 'center', cross: 'center', w: size, h: size, radius: 'radius/md' });
    if (state === 'Hover') fill(b, 'color/bg/hover');
    if (state === 'Ligado') fill(b, 'color/bg/selected');
    if (state === 'Foco') ring(b);
    if (state === 'Desativado') num(b, 'opacity', 'opacity/disabled');
    add(b, icon(name, o.icon || 18, state === 'Normal' || !state ? o.color || 'color/fg/muted' : 'color/fg/default'));
    return b;
  }

  function separator(vertical) {
    var w = box('Separador', { dir: 'H', pad: vertical ? [4, 0] : [0, 4] });
    add(w, shape('Linha', vertical ? { w: 18, h: 1, fill: 'color/border/default' } : { w: 1, h: 18, fill: 'color/border/default' }));
    return w;
  }

  /* ───────── Barra de ferramentas ───────── */

  var TB_STATES = ['Normal', 'Hover', 'Ligado', 'Foco', 'Desativado'];

  async function toolButtonSet() {
    if (C.toolBtn && !C.toolBtn.removed) return C.toolBtn;
    C.toolBtn = await variants('barra-ferramentas-botao', 'Barra de ferramentas/Botão', TB_STATES.map(function (st) {
      return {
        props: { Estado: st },
        build: async function (c) {
          var b = iconBtn('bold', st);
          box(c.name, { dir: 'H', align: 'center', cross: 'center', w: 36, h: 36, radius: 'radius/md' }, c);
          b.children.slice().forEach(function (ch) {
            exposes(ch, 'mainComponent', 'Trocar ícone');
            add(c, ch);
          });
          b.remove();
          if (st === 'Hover') fill(c, 'color/bg/hover');
          if (st === 'Ligado') fill(c, 'color/bg/selected');
          if (st === 'Foco') ring(c);
          if (st === 'Desativado') num(c, 'opacity', 'opacity/disabled');
        },
      };
    }), { description: 'Ligado mostra o que vale para a seleção (aria-pressed).', gap: 16, props: { 'Trocar ícone': ['INSTANCE_SWAP', 'bold'] } });
    return C.toolBtn;
  }

  var TB_GROUPS = [['undo', 'redo'], ['bold', 'italic', 'underline'], ['align-left', 'align-center', 'align-right'], ['link']];

  function toolbar(set, plain, vertical) {
    var bar = box('Barra de ferramentas', { dir: vertical ? 'V' : 'H', gap: 2, pad: plain ? 0 : 4, cross: 'center', radius: 'radius/md' });
    if (!plain) {
      fill(bar, 'color/bg/surface');
      stroke(bar, 'color/border/control', 1);
    }
    var groups = vertical ? [['bold', 'italic', 'underline'], ['align-left', 'align-center', 'align-right']] : TB_GROUPS;
    groups.forEach(function (g, gi) {
      if (gi) add(bar, separator(vertical));
      g.forEach(function (name) {
        var on = name === 'bold' || name === 'align-left';
        add(bar, instance(set, { Estado: on ? 'Ligado' : 'Normal' }, { 'Trocar ícone': name }));
      });
    });
    return bar;
  }

  defineBlock({
    id: 'barra-de-ferramentas',
    page: 'Componentes',
    row: 'Ações',
    order: 6,
    group: 'Ações',
    title: 'Barra de ferramentas',
    description: 'Botões de ícone agrupados, com um Tab só para a barra inteira e setas entre os botões. Os que ligam e desligam mostram o estado.',
    build: async function () {
      var set = await toolButtonSet();
      return {
        sections: [
          { title: 'Botão', description: '36 px, sem fundo até receber o mouse.', span: 2, node: set, fill: false },
          { title: 'Com contorno', description: 'Grupos separados por um traço fino.', frame: true, node: function () { return toolbar(set, false); } },
          { title: 'Sem contorno e vertical', description: 'Dentro de um editor, ou de pé ao lado de uma área.', frame: true, node: function () { var r = box('Variações', { dir: 'V', gap: 24, cross: 'start' }); add(r, toolbar(set, true)); add(r, toolbar(set, false, true)); return r; } },
        ].concat(themed('Barra de ferramentas', function () { return toolbar(set, false); })),
      };
    },
  });

  /* ───────── Seletor de cor ───────── */

  var HUE = { r: 1, g: 0.33, b: 0.1 }; // o matiz da terracota, saturado

  function rgb(hex) {
    var c = hexToRgba(hex);
    return { r: c.r, g: c.g, b: c.b, a: 1 };
  }

  function swatch(name, size, token) {
    var s = shape(name, { w: size, h: size, radius: 'radius/sm', fill: token });
    stroke(s, 'color/border/subtle', 1);
    return s;
  }

  function colorArea(w, h) {
    var area = box('Saturação e brilho', { dir: 'none', w: w, h: h, radius: 'radius/md', clip: true });
    var r = shape('Cor', { w: w, h: h });
    r.fills = [
      { type: 'SOLID', color: HUE, opacity: 1, visible: true, blendMode: 'NORMAL' },
      { type: 'GRADIENT_LINEAR', gradientTransform: [[1, 0, 0], [0, 1, 0]], gradientStops: [{ position: 0, color: { r: 1, g: 1, b: 1, a: 1 } }, { position: 1, color: { r: 1, g: 1, b: 1, a: 0 } }], opacity: 1, visible: true, blendMode: 'NORMAL' },
      { type: 'GRADIENT_LINEAR', gradientTransform: [[0, 1, 0], [-1, 0, 1]], gradientStops: [{ position: 0, color: { r: 0, g: 0, b: 0, a: 0 } }, { position: 1, color: { r: 0, g: 0, b: 0, a: 1 } }], opacity: 1, visible: true, blendMode: 'NORMAL' },
    ];
    add(area, r);
    var thumb = shape('Alça', { w: 16, h: 16, ellipse: true });
    stroke(thumb, 'color/neutral/50', 2, { align: 'CENTER' });
    add(area, thumb);
    thumb.x = Math.round(w * 0.62) - 8;
    thumb.y = Math.round(h * 0.22) - 8;
    return area;
  }

  function hueBar(w) {
    var bar = box('Matiz', { dir: 'none', w: w, h: 12, radius: 'radius/full', clip: true });
    var r = shape('Arco-íris', { w: w, h: 12 });
    var stops = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#ff0000'];
    r.fills = [{ type: 'GRADIENT_LINEAR', gradientTransform: [[1, 0, 0], [0, 1, 0]], gradientStops: stops.map(function (hex, i) { return { position: i / 6, color: rgb(hex) }; }), opacity: 1, visible: true, blendMode: 'NORMAL' }];
    add(bar, r);
    var wrap = box('Matiz com alça', { dir: 'none', w: w, h: 16 });
    add(wrap, bar);
    bar.y = 2;
    var thumb = shape('Alça', { w: 16, h: 16, ellipse: true, fill: 'color/neutral/50' });
    stroke(thumb, 'color/border/strong', 1);
    add(wrap, thumb);
    thumb.x = Math.round(w * 0.04);
    return wrap;
  }

  async function pickerPanel() {
    var w = 240;
    var p = box('Seletor de cor', { dir: 'V', gap: 'space/150', pad: 'space/150', radius: 'radius/lg', fill: 'color/bg/raised', stroke: 'color/border/subtle' });
    add(p, colorArea(w, 150));
    add(p, hueBar(w));
    var row = box('Hexadecimal', { dir: 'H', gap: 'space/100', cross: 'center', w: w });
    add(row, swatch('Cor atual', 32, 'color/brand/indicator'));
    var field = box('Campo', { dir: 'H', pad: [0, 'space/150'], cross: 'center', h: 32, radius: 'radius/md', fill: 'color/bg/field', stroke: 'color/border/default' });
    add(field, await text('#c97b63', { style: 'code-sm', color: 'color/fg/default', raw: true }));
    add(row, field, { grow: true });
    add(p, row);
    var sw = box('Amostras', { dir: 'H', gap: 6, w: w });
    for (var i = 1; i <= 8; i++) add(sw, swatch('Amostra ' + i, 24, 'color/chart/series/' + i));
    add(p, sw);
    return p;
  }

  var CF_STATES = ['Vazio', 'Preenchido', 'Foco', 'Desativado'];

  async function colorFieldSet() {
    if (C.colorField && !C.colorField.removed) return C.colorField;
    C.colorField = await variants('campo-cor', 'Campo de cor', CF_STATES.map(function (st) {
      return {
        props: { Estado: st },
        build: async function (c) {
          box(c.name, { dir: 'H', gap: 'space/100', pad: [0, 'space/150', 0, 'space/100'], cross: 'center', w: 220, h: 40, radius: 'radius/md', fill: 'color/bg/field' }, c);
          num(c, 'height', 'size/control/md');
          stroke(c, st === 'Foco' ? 'color/border/focus' : 'color/border/default', st === 'Foco' ? 'focus-ring/width' : 1);
          if (st === 'Desativado') num(c, 'opacity', 'opacity/disabled');
          var empty = st === 'Vazio' || st === 'Desativado';
          var s = swatch('Amostra', 24, empty ? 'color/bg/muted' : 'color/brand/indicator');
          if (empty) stroke(s, 'color/border/default', 1, { dash: [3, 2] });
          add(c, s);
          add(c, await text(empty ? '#rrggbb' : '#c97b63', { style: 'code-sm', color: empty ? 'color/fg/muted' : 'color/fg/default', raw: true }), { grow: true });
        },
      };
    }), { description: 'A amostra no começo abre o seletor; o hexadecimal também se digita.', columns: 2, gap: 24, rowGap: 16 });
    return C.colorField;
  }

  defineBlock({
    id: 'seletor-de-cor',
    page: 'Componentes',
    row: 'Formulário',
    order: 17,
    group: 'Formulário',
    title: 'Seletor de cor',
    description: 'Uma cor livre ou da paleta: área de saturação e brilho, matiz, hexadecimal e amostras. O valor é sempre #rrggbb.',
    build: async function () {
      var set = await colorFieldSet();
      return {
        sections: [
          { title: 'Campo', description: 'A mesma altura e o mesmo contorno dos outros campos.', span: 2, node: set, fill: false },
          { title: 'Seletor', description: 'Os degradês são o próprio controle. As amostras são as cores dos gráficos.', frame: true, node: pickerPanel },
        ].concat(themed('Seletor de cor', pickerPanel)),
      };
    },
  });

  /* ───────── Avaliação ───────── */

  function star(lit, size) {
    var s = box('Estrela', { dir: 'none', w: size, h: size });
    var off = icon('star', size, 'color/border/default');
    add(s, off);
    if (lit > 0) {
      var clip = box('Parte acesa', { dir: 'none', w: Math.max(1, Math.round(size * lit)), h: size, clip: true });
      add(clip, icon('star', size, 'color/brand/indicator'));
      add(s, clip);
    }
    return s;
  }

  function stars(value, size, gap) {
    var r = box('Estrelas', { dir: 'H', gap: gap, cross: 'center' });
    for (var i = 0; i < 5; i++) add(r, star(Math.max(0, Math.min(1, value - i)), size));
    return r;
  }

  var RATING_STATES = ['Normal', 'Prévia', 'Foco', 'Só leitura', 'Desativado'];

  async function ratingSet() {
    if (C.rating && !C.rating.removed) return C.rating;
    var items = [];
    [['P', 16, 1], ['M', 20, 2], ['G', 28, 4]].forEach(function (sz) {
      RATING_STATES.forEach(function (st) {
        items.push({
          props: { Tamanho: sz[0], Estado: st },
          build: async function (c) {
            box(c.name, { dir: 'H', gap: 'space/100', cross: 'center' }, c);
            var value = st === 'Só leitura' ? 3.5 : st === 'Prévia' ? 4 : 3;
            var r = stars(value, sz[1], sz[2]);
            if (st === 'Foco') {
              var focus = r.children[2];
              ring(focus);
              radius(focus, 'radius/sm');
            }
            add(c, r);
            if (st === 'Só leitura') add(c, await text('3,5', { style: 'label-sm', color: 'color/fg/muted' }));
            if (st === 'Desativado') num(c, 'opacity', 'opacity/disabled');
          },
        });
      });
    });
    C.rating = await variants('avaliacao', 'Avaliação', items, { description: 'Estrela acesa na cor do indicador. Só leitura aceita meia estrela.', columns: 5, gap: 24, rowGap: 20 });
    return C.rating;
  }

  defineBlock({
    id: 'avaliacao',
    page: 'Componentes',
    row: 'Formulário',
    order: 18,
    group: 'Formulário',
    title: 'Avaliação',
    description: 'Uma nota de 1 a 5 com estrelas. Por baixo são rádios nativos: o formulário envia e o teclado anda pelas setas.',
    build: async function () {
      var set = await ratingSet();
      return {
        sections: [{ title: 'Tamanhos e estados', description: 'Prévia é o que acende com o mouse em cima, antes de clicar.', span: 2, node: set, fill: false }]
          .concat(themed('Avaliação', function () { return instance(set, { Tamanho: 'G', Estado: 'Normal' }); })),
      };
    },
  });

  /* ───────── Editor de texto rico ───────── */

  var ED_FULL = [['bold', 'italic', 'underline', 'strikethrough'], ['heading', 'list', 'list-ordered', 'quote'], ['link'], ['undo', 'redo']];
  var ED_MIN = [['bold', 'italic', 'underline', 'strikethrough'], ['link']];

  async function bullet(chars, mark) {
    var r = box('Item', { dir: 'H', gap: 'space/100', pad: [0, 0, 0, 'space/100'] });
    add(r, await text(mark, { style: 'body-md', color: 'color/fg/muted', raw: true }));
    add(r, await text(chars, { style: 'body-md', color: 'color/fg/default', w: 360 }));
    return r;
  }

  async function editorBody(w) {
    var body = box('Texto', { dir: 'V', gap: 'space/150', pad: ['space/200', 'space/250'], w: w });
    add(body, await text('Lume 0.37', { style: 'heading-md', color: 'color/fg/default', raw: true }));
    add(body, await text('Mudar a ordem e o lugar das coisas, com o mouse, o toque ou o teclado.', { style: 'body-md', color: 'color/fg/default', w: w - 40 }));
    var list = box('Lista', { dir: 'V', gap: 'space/075' });
    add(list, await bullet('Lista arrastável, com alça ou sem', '•'));
    add(list, await bullet('Kanban, com colunas que trocam cartões', '•'));
    add(body, list);
    var quote = box('Citação', { dir: 'H', gap: 'space/150' });
    add(quote, shape('Fio', { w: 2, h: 22, fill: 'color/border/strong' }));
    add(quote, await text('Cada passo é anunciado para o leitor de tela.', { style: 'body-md', color: 'color/fg/muted', w: 380 }));
    add(body, quote);
    return body;
  }

  var ED_STATES = ['Normal', 'Hover', 'Foco', 'Desativado'];

  async function editorSet() {
    if (C.editor && !C.editor.removed) return C.editor;
    var items = [];
    ['Completa', 'Mínima'].forEach(function (bar) {
      ED_STATES.forEach(function (st) {
        items.push({
          props: { Barra: bar, Estado: st },
          build: async function (c) {
            var w = 456;
            box(c.name, { dir: 'V', gap: 0, w: w, radius: 'radius/lg', fill: 'color/bg/field' }, c);
            stroke(c, st === 'Foco' ? 'color/border/focus' : st === 'Hover' ? 'color/border/strong' : 'color/border/default', st === 'Foco' ? 'focus-ring/width' : 1);
            if (st === 'Desativado') num(c, 'opacity', 'opacity/disabled');
            var tb = box('Barra de ferramentas', { dir: 'H', gap: 2, pad: 'space/075', cross: 'center' });
            stroke(tb, 'color/border/subtle', 1, { align: 'INSIDE' });
            tb.strokeTopWeight = 0;
            tb.strokeLeftWeight = 0;
            tb.strokeRightWeight = 0;
            (bar === 'Completa' ? ED_FULL : ED_MIN).forEach(function (g, gi) {
              if (gi) add(tb, separator());
              g.forEach(function (name) { add(tb, iconBtn(name, name === 'bold' || name === 'heading' ? 'Ligado' : 'Normal', { size: 32, icon: 16 })); });
            });
            add(c, tb, { fillW: true });
            add(c, await editorBody(w));
          },
        });
      });
    });
    C.editor = await variants('editor', 'Editor de texto rico', items, { description: 'O mesmo contorno dos campos; a barra fica dentro, com uma linha embaixo.', columns: 2, gap: 32, rowGap: 32 });
    return C.editor;
  }

  defineBlock({
    id: 'editor-de-texto-rico',
    page: 'Componentes',
    row: 'Formulário',
    order: 19,
    group: 'Formulário',
    title: 'Editor de texto rico',
    description: 'Um campo de texto que formata: títulos, listas, citações, negrito, itálico e links, com a barra de ferramentas do Lume. O HTML que sai é sempre limpo.',
    width: 1180,
    build: async function () {
      var set = await editorSet();
      return {
        sections: [{ title: 'Barras e estados', description: 'Títulos na Geist Serif, como no resto do Lume.', span: 2, node: set, fill: false }]
          .concat(themed('Editor de texto rico', function () { return instance(set, { Barra: 'Completa', Estado: 'Normal' }); }, { pad: 24 })),
      };
    },
  });

  /* ───────── Link ───────── */

  var LINK_TYPES = ['No texto', 'Solto', 'Apagado', 'Externo'];
  var LINK_STATES = ['Normal', 'Hover', 'Foco', 'Desativado'];

  async function linkSet() {
    if (C.link && !C.link.removed) return C.link;
    var items = [];
    LINK_TYPES.forEach(function (type) {
      LINK_STATES.forEach(function (st) {
        items.push({
          props: { Tipo: type, Estado: st },
          build: async function (c) {
            box(c.name, { dir: 'H', gap: 'space/050', cross: 'center', pad: [1, 2], radius: 'radius/xs' }, c);
            var standalone = type === 'Solto';
            var color = st === 'Hover' ? 'color/fg/default' : type === 'Apagado' ? 'color/fg/muted' : 'color/fg/brand';
            if (st === 'Desativado') color = 'color/fg/disabled';
            var t = await text(standalone ? 'Ver todas as versões' : type === 'Externo' ? 'Geist, na Vercel' : 'Novidades', { style: standalone ? 'label-md' : 'body-md', color: color, prop: 'Texto', name: 'Texto' });
            if (!standalone || st === 'Hover') t.textDecoration = 'UNDERLINE';
            add(c, t);
            if (standalone) {
              var arrow = icon('arrow-right', 16, color);
              add(c, arrow);
              if (st === 'Hover') num(c, 'itemSpacing', 6);
            }
            if (type === 'Externo') add(c, icon('external-link', 14, color));
            if (st === 'Foco') ring(c);
          },
        });
      });
    });
    C.link = await variants('link', 'Link', items, { description: 'No texto, sempre sublinhado. Solto, só no hover, com a seta andando 2 px.', columns: 4, gap: 24, rowGap: 20, props: { 'Texto': ['TEXT', 'Novidades'] } });
    return C.link;
  }

  async function linkParagraph(set) {
    var p = box('Parágrafo', { dir: 'H', wrap: true, gap: 4, rowGap: 2, cross: 'center', w: 360 });
    add(p, await text('Tudo o que mudou está em', { style: 'body-md', color: 'color/fg/default' }));
    add(p, instance(set, { Tipo: 'No texto', Estado: 'Normal' }));
    add(p, await text('e o que vem a seguir, no roadmap.', { style: 'body-md', color: 'color/fg/default' }));
    var col = box('Exemplo', { dir: 'V', gap: 'space/200' });
    add(col, p);
    add(col, instance(set, { Tipo: 'Solto', Estado: 'Normal' }, { 'Texto': 'Ver todas as versões' }));
    return col;
  }

  defineBlock({
    id: 'link',
    page: 'Componentes',
    row: 'Navegação',
    order: 11,
    group: 'Navegação',
    title: 'Link',
    description: 'Leva para outro lugar. No meio do texto vai sublinhado; solto, ganha uma seta. Link externo avisa com um ícone e um texto para o leitor de tela.',
    build: async function () {
      var set = await linkSet();
      return {
        sections: [
          { title: 'Tipos e estados', description: 'Desativado não é clicável e some do Tab.', span: 2, node: set, fill: false },
        ].concat(themed('Link', function () { return linkParagraph(set); })),
      };
    },
  });

  /* ───────── Banner de anúncio ───────── */

  var BANNER = {
    Neutro: ['color/bg/surface', 'color/border/default', 'color/fg/muted', 'color/fg/default'],
    Marca: ['color/brand/solid', 'color/brand/solid', 'color/brand/on-solid', 'color/brand/on-solid'],
    'Informação': ['color/info/subtle', 'color/info/border', 'color/info/fg', 'color/fg/default'],
    'Atenção': ['color/warning/subtle', 'color/warning/border', 'color/warning/fg', 'color/fg/default'],
    Perigo: ['color/danger/subtle', 'color/danger/border', 'color/danger/fg', 'color/fg/default'],
  };

  async function bannerSet() {
    if (C.banner && !C.banner.removed) return C.banner;
    C.banner = await variants('banner', 'Banner de anúncio', Object.keys(BANNER).map(function (tone) {
      var t = BANNER[tone];
      return {
        props: { Tom: tone },
        build: async function (c) {
          box(c.name, { dir: 'H', gap: 'space/150', pad: ['space/075', 'space/100', 'space/075', 'space/250'], cross: 'center', w: 400, radius: 'radius/lg', fill: t[0], stroke: t[1] }, c);
          var ic = icon('megaphone', 18, t[2]);
          exposes(ic, 'mainComponent', 'Trocar ícone');
          add(c, ic);
          var line = box('Texto', { dir: 'H', gap: 'space/100', cross: 'center', wrap: true });
          add(line, await text('Lume 0.38 chegou', { style: 'label-md', color: t[3], prop: 'Título', name: 'Título' }));
          add(line, await text('com o editor de texto rico.', { style: 'body-sm', color: t[3], prop: 'Texto', name: 'Texto' }));
          var link = await text('Ver novidades', { style: 'label-sm', color: t[3], prop: 'Link', name: 'Link' });
          link.textDecoration = 'UNDERLINE';
          add(line, link);
          add(c, line, { grow: true });
          add(c, iconBtn('x', 'Normal', { size: 32, icon: 16, color: tone === 'Marca' ? 'color/brand/on-solid' : 'color/fg/muted', label: 'Fechar' }));
        },
      };
    }), { description: 'Neutro para o dia a dia; os tons, quando o recado pede.', columns: 1, gap: 16, props: { 'Título': ['TEXT', 'Lume 0.38 chegou'], 'Texto': ['TEXT', 'com o editor de texto rico.'], 'Link': ['TEXT', 'Ver novidades'], 'Trocar ícone': ['INSTANCE_SWAP', 'megaphone'] } });
    return C.banner;
  }

  defineBlock({
    id: 'banner-de-anuncio',
    page: 'Componentes',
    row: 'Feedback',
    order: 9,
    group: 'Feedback',
    title: 'Banner de anúncio',
    description: 'Um recado para todo mundo, no topo do app ou da página. Quem fecha não vê de novo aquele anúncio.',
    build: async function () {
      var set = await bannerSet();
      return {
        sections: [{ title: 'Tons', description: 'Texto e link quebram a linha quando falta espaço; o botão de fechar fica no fim.', span: 2, node: set, fill: false }]
          .concat(themed('Banner de anúncio', function () { return instance(set, { Tom: 'Neutro' }); }, { pad: 24 })),
      };
    },
  });

  /* ───────── Central de notificações ───────── */

  async function bell(count, state) {
    var b = box('Sino', { dir: 'none', w: 36, h: 36 });
    var btn = iconBtn('bell', state || 'Normal', { label: 'Botão' });
    add(b, btn);
    if (count) {
      var dot = box('Número', { dir: 'H', align: 'center', cross: 'center', pad: [0, 4], h: 16, radius: 'radius/full', fill: 'color/brand/indicator' });
      add(dot, await text(String(count), { style: 'label-sm', color: 'color/brand/on-solid', size: 10, raw: true }));
      add(b, dot);
      dot.x = 20;
      dot.y = 2;
    }
    return b;
  }

  async function bellSet() {
    if (C.bell && !C.bell.removed) return C.bell;
    C.bell = await variants('notificacoes-sino', 'Central de notificações/Sino', [['Sem novas', 'Normal'], ['Com novas', 'Normal'], ['Com novas', 'Hover'], ['Com novas', 'Foco']].map(function (k) {
      return {
        props: { Novas: k[0], Estado: k[1] },
        build: async function (c) {
          box(c.name, { dir: 'H', pad: 4 }, c);
          var b = await bell(k[0] === 'Com novas' ? 3 : 0, k[1]);
          add(c, b);
        },
      };
    }), { description: 'O número usa a cor do indicador; acima de 99, “99+”.', gap: 16 });
    return C.bell;
  }

  var NOTES = [
    ['megaphone', 'color/brand/subtle', 'color/fg/brand', 'Lume 0.38 publicado', 'Chegou o editor de texto rico.', 'agora', true],
    ['check', 'color/success/subtle', 'color/success/fg', 'Plugin do Figma pronto', 'Os blocos novos estão no arquivo.', 'há 2 h', true],
    ['alert-triangle', 'color/warning/subtle', 'color/warning/fg', 'Contraste abaixo do mínimo', 'Um par de cores do tema claro.', 'ontem', false],
  ];

  async function notifyPanel() {
    var w = 360;
    var p = box('Painel', { dir: 'V', gap: 0, w: w, radius: 'radius/lg', fill: 'color/bg/raised', stroke: 'color/border/subtle' });
    shadow(p, 'md');
    var head = box('Cabeçalho', { dir: 'H', align: 'between', cross: 'center', pad: ['space/150', 'space/200'] });
    add(head, await text('Notificações', { style: 'label-md', color: 'color/fg/default' }));
    add(head, await text('Marcar todas como lidas', { style: 'label-sm', color: 'color/fg/brand' }));
    add(p, head, { fillW: true });
    for (var n of NOTES) {
      var row = box('Notificação', { dir: 'H', gap: 'space/150', pad: ['space/150', 'space/200'], cross: 'start' });
      stroke(row, 'color/border/subtle', 1, { align: 'INSIDE' });
      row.strokeBottomWeight = 0;
      row.strokeLeftWeight = 0;
      row.strokeRightWeight = 0;
      var mk = box('Ícone', { dir: 'H', align: 'center', cross: 'center', w: 32, h: 32, radius: 'radius/full', fill: n[1] });
      add(mk, icon(n[0], 16, n[2]));
      add(row, mk);
      var col = box('Conteúdo', { dir: 'V', gap: 2 });
      add(col, await text(n[3], { style: 'label-md', color: n[6] ? 'color/fg/default' : 'color/fg/muted' }));
      add(col, await text(n[4], { style: 'body-sm', color: 'color/fg/subtle', w: 220 }));
      add(col, await text(n[5], { style: 'caption', color: 'color/fg/subtle' }));
      add(row, col, { grow: true });
      add(row, shape(n[6] ? 'Não lida' : 'Lida', { w: 8, h: 8, ellipse: true, fill: n[6] ? 'color/brand/indicator' : null }));
      add(p, row, { fillW: true });
    }
    return p;
  }

  async function notifyExample() {
    var col = box('Central', { dir: 'V', gap: 'space/100', cross: 'end' });
    add(col, await bell(2));
    add(col, await notifyPanel());
    return col;
  }

  defineBlock({
    id: 'central-de-notificacoes',
    page: 'Componentes',
    row: 'Feedback',
    order: 10,
    group: 'Feedback',
    title: 'Central de notificações',
    description: 'O sino com o número de novas e a lista do que aconteceu, lidas e não lidas. O que chega novo é anunciado ao leitor de tela.',
    build: async function () {
      var set = await bellSet();
      return {
        sections: [
          { title: 'Sino', description: 'Um botão de ícone comum, com o número por cima.', node: set, fill: false },
          { title: 'Painel', description: 'Abre como um popover. A bolinha marca o que não foi lido.', frame: true, cross: 'end', node: notifyPanel },
        ].concat(themed('Central de notificações', notifyExample, { cross: 'end' })),
      };
    },
  });

  /* ───────── Progresso circular ───────── */

  var RING_SIZES = { P: [20, 2.5], M: [40, 4], G: [64, 5] };
  var RING_TONES = { Marca: 'color/brand/indicator', Sucesso: 'color/success/solid', 'Atenção': 'color/warning/solid', Perigo: 'color/danger/solid' };

  function arc(name, size, thick, from, to, token) {
    var e = shape(name, { w: size, h: size, ellipse: true, fill: token });
    e.arcData = { startingAngle: from, endingAngle: to, innerRadius: 1 - (2 * thick) / size };
    return e;
  }

  async function ringNode(sizeKey, tone, value) {
    var s = RING_SIZES[sizeKey];
    var r = box('Anel', { dir: 'none', w: s[0], h: s[0] });
    var top = -Math.PI / 2;
    add(r, arc('Trilho', s[0], s[1], 0, Math.PI * 2, 'color/bg/muted'));
    add(r, arc('Progresso', s[0], s[1], top, top + Math.PI * 2 * (value === null ? 0.25 : value), RING_TONES[tone]));
    if (sizeKey !== 'P' && value !== null) {
      var label = box('Valor', { dir: 'H', align: 'center', cross: 'center', w: s[0], h: s[0] });
      add(label, await text(Math.round(value * 100) + '%', { style: sizeKey === 'G' ? 'label-md' : 'label-sm', color: 'color/fg/default', size: sizeKey === 'M' ? 11 : undefined, raw: true }));
      add(r, label);
    }
    return r;
  }

  async function ringSet() {
    if (C.ring && !C.ring.removed) return C.ring;
    var items = [];
    Object.keys(RING_SIZES).forEach(function (sz) {
      Object.keys(RING_TONES).concat(['Indeterminado']).forEach(function (tone) {
        items.push({
          props: { Tamanho: sz, Tom: tone },
          build: async function (c) {
            box(c.name, { dir: 'H' }, c);
            add(c, await ringNode(sz, tone === 'Indeterminado' ? 'Marca' : tone, tone === 'Indeterminado' ? null : 0.68));
          },
        });
      });
    });
    C.ring = await variants('progresso-circular', 'Progresso circular', items, { description: 'Indeterminado gira um quarto do anel. Em 0, o arco some.', columns: 5, gap: 28, rowGap: 24 });
    return C.ring;
  }

  async function ringRow() {
    var r = box('Exemplo', { dir: 'H', gap: 'space/300', cross: 'center' });
    add(r, await ringNode('G', 'Marca', 0.24));
    add(r, await ringNode('G', 'Sucesso', 1));
    var line = box('Enviando', { dir: 'H', gap: 'space/100', cross: 'center' });
    add(line, await ringNode('P', 'Marca', 0.6));
    add(line, await text('Enviando 3 arquivos', { style: 'body-sm', color: 'color/fg/muted' }));
    add(r, line);
    return r;
  }

  defineBlock({
    id: 'progresso-circular',
    page: 'Componentes',
    row: 'Feedback',
    order: 11,
    group: 'Feedback',
    title: 'Progresso circular',
    description: 'O mesmo progresso da barra, num anel: cabe ao lado de um texto, num botão ou num card. Sem valor, gira.',
    build: async function () {
      var set = await ringSet();
      return {
        sections: [{ title: 'Tamanhos e tons', description: '20, 40 e 64 px; o número aparece a partir do médio.', span: 2, node: set, fill: false }]
          .concat(themed('Progresso circular', ringRow)),
      };
    },
  });

  /* ───────── Carrossel ───────── */

  var SLIDES = [['Tokens', '385 tokens em dois temas, gerados de um JSON.'], ['Componentes', '58 componentes, todos com página e exemplo.'], ['Padrões', 'Telas inteiras: app shell, login, busca.']];

  async function slideCard(title, body, w) {
    var s = box('Slide', { dir: 'V', gap: 'space/100', pad: 'space/300', w: w, h: 160, radius: 'radius/xl', fill: 'color/bg/surface', stroke: 'color/border/subtle', align: 'end' });
    add(s, await text(title, { style: 'heading-sm', color: 'color/fg/default' }));
    add(s, await text(body, { style: 'body-sm', color: 'color/fg/muted', w: w - 48 }));
    return s;
  }

  async function carouselBar(index, count) {
    var bar = box('Barra', { dir: 'H', gap: 'space/100', cross: 'center' });
    var dots = box('Pontos', { dir: 'H', gap: 2, cross: 'center' });
    for (var i = 0; i < count; i++) {
      var hit = box('Ponto', { dir: 'H', align: 'center', cross: 'center', w: 20, h: 20 });
      add(hit, shape(i === index ? 'Atual' : 'Ponto', i === index ? { w: 16, h: 6, radius: 'radius/full', fill: 'color/fg/default' } : { w: 6, h: 6, radius: 'radius/full', fill: 'color/border/strong' }));
      add(dots, hit);
    }
    add(bar, dots, { grow: true });
    add(bar, await text((index + 1) + ' / ' + count, { style: 'label-sm', color: 'color/fg/muted', raw: true }));
    add(bar, iconBtn('chevron-left', 'Normal', { label: 'Anterior' }));
    add(bar, iconBtn('chevron-right', 'Normal', { label: 'Próximo' }));
    return bar;
  }

  async function carousel(peek) {
    var w = 400;
    var col = box('Carrossel', { dir: 'V', gap: 'space/150', w: w });
    var view = box('Área', { dir: 'H', gap: 'space/200', w: w, clip: true });
    var slideW = peek ? Math.round(w * 0.8) : w;
    for (var i = 0; i < (peek ? 2 : 1); i++) add(view, await slideCard(SLIDES[i][0], SLIDES[i][1], slideW));
    add(col, view);
    add(col, await carouselBar(0, 3), { fillW: true });
    return col;
  }

  defineBlock({
    id: 'carrossel',
    page: 'Componentes',
    row: 'Dados e conteúdo',
    order: 11,
    group: 'Dados e conteúdo',
    title: 'Carrossel',
    description: 'Uma fila de cartões que passa para o lado, arrastando, pelas setas ou pelos pontos. Passagem automática só com botão de pausa.',
    build: async function () {
      return {
        sections: [
          { title: 'Um por vez', description: 'A barra embaixo: pontos, “1 / 3” e setas sem fundo.', frame: true, node: function () { return carousel(false); } },
          { title: 'Com o próximo à mostra', description: 'Um pedaço do próximo cartão convida a arrastar.', frame: true, node: function () { return carousel(true); } },
        ].concat(themed('Carrossel', function () { return carousel(true); })),
      };
    },
  });

  /* ───────── Visualizador de imagem ───────── */

  async function picture(w, h, label) {
    var p = box(label || 'Imagem', { dir: 'V', gap: 'space/100', align: 'center', cross: 'center', w: w, h: h, radius: 'radius/md', fill: 'color/bg/surface', stroke: 'color/border/subtle' });
    add(p, icon('image', Math.min(32, Math.round(h / 3)), 'color/fg/subtle'));
    return p;
  }

  async function thumbs() {
    var g = box('Miniaturas', { dir: 'H', gap: 'space/150', wrap: true });
    var names = ['Início', 'Cores', 'Botão', 'Gráficos'];
    for (var i = 0; i < names.length; i++) {
      var t = box('Miniatura', { dir: 'V', gap: 'space/075' });
      var pic = await picture(88, 55, names[i]);
      if (i === 0) ring(pic);
      add(t, pic);
      add(t, await text(names[i], { style: 'caption', color: 'color/fg/muted' }));
      add(g, t);
    }
    return g;
  }

  async function viewer() {
    var w = 400;
    var v = box('Visualizador', { dir: 'V', gap: 0, w: w, radius: 'radius/lg', fill: 'color/bg/app', clip: true });
    var top = box('Barra', { dir: 'H', gap: 'space/050', cross: 'center', pad: ['space/100', 'space/150'] });
    add(top, await text('1 / 4', { style: 'label-sm', color: 'color/fg/muted', raw: true }), { grow: true });
    add(top, iconBtn('zoom-out', 'Normal', { label: 'Diminuir' }));
    add(top, await text('100%', { style: 'label-sm', color: 'color/fg/muted', raw: true }));
    add(top, iconBtn('zoom-in', 'Normal', { label: 'Aumentar' }));
    add(top, iconBtn('maximize', 'Normal', { label: 'Caber na tela' }));
    add(top, iconBtn('x', 'Normal', { label: 'Fechar' }));
    add(v, top, { fillW: true });
    var stage = box('Palco', { dir: 'H', gap: 'space/150', cross: 'center', pad: [0, 'space/150'] });
    add(stage, iconBtn('chevron-left', 'Normal', { label: 'Anterior' }));
    add(stage, await picture(w - 2 * 12 - 2 * 36 - 2 * 12, 220, 'Imagem'), { grow: true });
    add(stage, iconBtn('chevron-right', 'Normal', { label: 'Próximo' }));
    add(v, stage, { fillW: true });
    var cap = box('Legenda', { dir: 'H', align: 'center', pad: ['space/150', 'space/200'] });
    add(cap, await text('O Início do Lume, no tema claro.', { style: 'body-sm', color: 'color/fg/muted' }));
    add(v, cap, { fillW: true });
    return v;
  }

  defineBlock({
    id: 'visualizador-de-imagem',
    page: 'Componentes',
    row: 'Dados e conteúdo',
    order: 12,
    group: 'Dados e conteúdo',
    title: 'Visualizador de imagem',
    description: 'A imagem grande por cima da página, com zoom no ponto do cursor, arrastar, pinça no celular e as outras da galeria pelas setas.',
    build: async function () {
      return {
        sections: [
          { title: 'Miniaturas', description: 'Cada miniatura é um link para a imagem grande.', frame: true, node: thumbs },
          { title: 'Aberto', description: 'Fundo opaco do app, sem véu. No site, os exemplos usam capturas do próprio Lume.', frame: true, node: viewer },
        ].concat(themed('Visualizador de imagem', viewer, { pad: 24 })),
      };
    },
  });

  /* ───────── Lista arrastável ───────── */

  var SORT_STATES = ['Normal', 'Hover', 'Foco', 'Pego', 'Encaixe'];

  async function sortItem(c, st, label, meta, w) {
    box(c.name || 'Item', { dir: 'H', gap: 'space/150', pad: ['space/100', 'space/200', 'space/100', 'space/100'], cross: 'center', w: w, radius: 'radius/lg', fill: 'color/bg/surface' }, c);
    num(c, 'minHeight', 40);
    stroke(c, st === 'Foco' ? 'color/border/focus' : st === 'Pego' ? 'color/brand/indicator' : st === 'Encaixe' ? 'color/border/strong' : st === 'Hover' ? 'color/border/default' : 'color/border/subtle', st === 'Foco' ? 'focus-ring/width' : 1, { dash: st === 'Encaixe' ? [4, 3] : undefined });
    if (st === 'Encaixe') fill(c, 'color/bg/muted');
    if (st === 'Pego') {
      fill(c, 'color/bg/raised');
      shadow(c, 'md');
    }
    var grip = box('Alça', { dir: 'H', align: 'center', cross: 'center', w: 24, h: 24, radius: 'radius/sm', fill: st === 'Pego' ? 'color/bg/pressed' : null });
    add(grip, icon('grip-vertical', 16, st === 'Encaixe' ? null : st === 'Hover' || st === 'Pego' ? 'color/fg/default' : 'color/fg/subtle'));
    if (st === 'Encaixe') grip.opacity = 0;
    add(c, grip);
    var t = await text(label, { style: 'body-md', color: 'color/fg/default', prop: 'Rótulo', name: 'Rótulo' });
    if (st === 'Encaixe') t.opacity = 0;
    add(c, t, { grow: true });
    var m = await text(meta, { style: 'caption', color: 'color/fg/subtle', prop: 'Detalhe', name: 'Detalhe' });
    if (st === 'Encaixe') m.opacity = 0;
    add(c, m);
    return c;
  }

  async function sortSet() {
    if (C.sort && !C.sort.removed) return C.sort;
    C.sort = await variants('lista-arrastavel', 'Lista arrastável/Item', SORT_STATES.map(function (st) {
      return {
        props: { Estado: st },
        build: async function (c) { await sortItem(c, st, 'Cores', '8 fundamentos', 280); },
      };
    }), { description: 'Pego é a cópia que segue o ponteiro; Encaixe é onde o item vai cair.', columns: 1, gap: 12, props: { 'Rótulo': ['TEXT', 'Cores'], 'Detalhe': ['TEXT', '8 fundamentos'] } });
    return C.sort;
  }

  async function sortList(set) {
    var wrap = box('Exemplo', { dir: 'none', w: 320, h: 4 * 52 + 12 });
    var list = box('Lista', { dir: 'V', gap: 'space/100', w: 300 });
    [['Normal', 'Tipografia', '19 estilos'], ['Encaixe', 'Cores', '8 fundamentos'], ['Normal', 'Ícones', '154 ícones'], ['Normal', 'Espaçamento', '12 passos']].forEach(function (r) {
      add(list, instance(set, { Estado: r[0] }, { 'Rótulo': r[1], 'Detalhe': r[2] }), { fillW: true });
    });
    add(wrap, list);
    var drag = instance(set, { Estado: 'Pego' }, { 'Rótulo': 'Cores', 'Detalhe': '8 fundamentos' });
    add(wrap, drag);
    drag.x = 16;
    drag.y = 38;
    drag.rotation = 1;
    return wrap;
  }

  defineBlock({
    id: 'lista-arrastavel',
    page: 'Componentes',
    row: 'Dados e conteúdo',
    order: 13,
    group: 'Dados e conteúdo',
    title: 'Lista arrastável',
    description: 'Mudar a ordem com o mouse, o toque ou o teclado. O item deixa um encaixe onde vai cair e os vizinhos abrem espaço.',
    build: async function () {
      var set = await sortSet();
      return {
        sections: [
          { title: 'Item', description: 'Pela alça, ou o item inteiro, quando não há alça.', node: set, fill: false },
          { title: 'Arrastando', description: 'Espaço pega, as setas movem e Esc desfaz.', frame: true, node: function () { return sortList(set); } },
        ].concat(themed('Lista arrastável', function () { return sortList(set); })),
      };
    },
  });

  /* ───────── Kanban ───────── */

  var KANBAN = [
    ['A fazer', [['Lume 1.0', 'Política de versões e revisão visual.', '1.0']]],
    ['Fazendo', [['Plugin do Figma', 'Os blocos da 0.30 à 0.38.', '0.40'], ['Storybook', 'Melhorias pedidas.', '0.41']]],
    ['Feito', []],
  ];

  async function kanbanCard(title, body, meta, w) {
    var c = box('Cartão', { dir: 'V', gap: 'space/075', pad: ['space/150', 'space/200'], w: w, radius: 'radius/lg', fill: 'color/bg/surface', stroke: 'color/border/subtle' });
    add(c, await text(title, { style: 'label-md', color: 'color/fg/default', w: w - 32 }));
    add(c, await text(body, { style: 'body-sm', color: 'color/fg/muted', w: w - 32 }));
    var m = box('Detalhe', { dir: 'H', pad: [2, 8], radius: 'radius/full', stroke: 'color/border/default' });
    add(m, await text(meta, { style: 'caption', color: 'color/fg/subtle', raw: true }));
    add(c, m);
    return c;
  }

  async function kanban(colW, from) {
    colW = colW || 220;
    var board = box('Kanban', { dir: 'H', gap: 'space/200', cross: 'start' });
    for (var col of KANBAN.slice(from || 0)) {
      var c = box(col[0], { dir: 'V', gap: 'space/100', pad: 'space/150', w: colW, radius: 'radius/xl', fill: 'color/bg/sunken' });
      var head = box('Cabeçalho', { dir: 'H', gap: 'space/100', cross: 'center', pad: [0, 'space/050', 'space/050', 'space/050'] });
      add(head, await text(col[0], { style: 'label-md', color: 'color/fg/default' }));
      var n = box('Número', { dir: 'H', pad: [1, 7], radius: 'radius/full', fill: 'color/bg/muted' });
      add(n, await text(String(col[1].length), { style: 'caption', color: 'color/fg/muted', raw: true }));
      add(head, n);
      add(c, head);
      for (var card of col[1]) add(c, await kanbanCard(card[0], card[1], card[2], colW - 24));
      if (!col[1].length) {
        var empty = box('Vazia', { dir: 'H', align: 'center', cross: 'center', h: 72, radius: 'radius/lg' });
        stroke(empty, 'color/border/default', 1, { dash: [4, 3] });
        add(empty, await text('Solte um cartão aqui', { style: 'body-sm', color: 'color/fg/subtle', w: colW - 48, align: 'center' }));
        add(c, empty, { fillW: true });
      }
      add(board, c);
    }
    return board;
  }

  defineBlock({
    id: 'kanban',
    page: 'Componentes',
    row: 'Dados e conteúdo',
    order: 14,
    group: 'Dados e conteúdo',
    title: 'Kanban',
    description: 'A lista arrastável em colunas que trocam cartões. Cada coluna mostra quantos tem; a vazia avisa onde soltar.',
    width: 1180,
    build: async function () {
      return {
        sections: [{ title: 'Quadro', description: 'Colunas no fundo rebaixado, cartões na superfície.', span: 2, frame: true, node: function () { return kanban(); } }]
          .concat(themed('Kanban', function () { return kanban(200, 1); })),
      };
    },
  });

  /* ───────── Painéis redimensionáveis ───────── */

  var HANDLE_STATES = ['Normal', 'Hover', 'Arrastando', 'Foco'];

  async function handleSet() {
    if (C.handle && !C.handle.removed) return C.handle;
    C.handle = await variants('paineis-divisoria', 'Painéis redimensionáveis/Divisória', HANDLE_STATES.map(function (st) {
      return {
        props: { Estado: st },
        build: async function (c) {
          box(c.name, { dir: 'none', w: 9, h: 120 }, c);
          var line = shape('Linha', { w: st === 'Normal' ? 1 : 2, h: 120, fill: st === 'Arrastando' ? 'color/brand/indicator' : st === 'Normal' ? 'color/border/default' : 'color/border/strong' });
          add(c, line);
          line.x = st === 'Normal' ? 4 : 3.5;
          if (st !== 'Normal') {
            var grip = shape('Pega', { w: 6, h: 24, radius: 'radius/full', fill: 'color/bg/raised' });
            stroke(grip, 'color/border/default', 1);
            add(c, grip);
            grip.x = 1.5;
            grip.y = 48;
          }
          if (st === 'Foco') {
            var f = shape('Foco', { w: 9, h: 120, radius: 'radius/xs' });
            stroke(f, 'color/border/focus', 'focus-ring/width');
            add(c, f);
          }
        },
      };
    }), { description: 'A linha tem 1 px; a área de pegar, 9 px.', gap: 24 });
    return C.handle;
  }

  async function panel(title, body, w, h) {
    var p = box(title, { dir: 'V', gap: 'space/075', pad: 'space/200', w: w, h: h });
    add(p, await text(title, { style: 'label-md', color: 'color/fg/default', w: w - 32 }));
    add(p, await text(body, { style: 'body-sm', color: 'color/fg/muted', w: w - 32 }));
    return p;
  }

  async function panels(set) {
    var h = 180;
    var r = box('Painéis', { dir: 'H', w: 400, h: h, radius: 'radius/lg', fill: 'color/bg/surface', stroke: 'color/border/subtle', clip: true });
    add(r, await panel('Arquivos', 'Tokens, componentes e padrões.', 120, h));
    var h1 = instance(set, { Estado: 'Normal' });
    add(r, h1, { fillH: true });
    add(r, await panel('Editor', 'Arraste a divisória para dar mais espaço ao texto.', 142, h), { grow: true });
    var h2 = instance(set, { Estado: 'Arrastando' });
    add(r, h2, { fillH: true });
    add(r, await panel('Prévia', 'Em %, com mínimo e máximo.', 120, h));
    return r;
  }

  defineBlock({
    id: 'paineis-redimensionaveis',
    page: 'Componentes',
    row: 'Dados e conteúdo',
    order: 15,
    group: 'Dados e conteúdo',
    title: 'Painéis redimensionáveis',
    description: 'Áreas lado a lado, ou uma sobre a outra, com divisórias para arrastar. Setas no teclado, duplo clique volta ao início e o tamanho pode ficar salvo.',
    build: async function () {
      var set = await handleSet();
      return {
        sections: [
          { title: 'Divisória', description: 'No hover aparece a pega; arrastando, a linha vai para a cor do indicador.', node: set, fill: false },
          { title: 'Três painéis', description: 'Cada divisória mexe só nos dois vizinhos.', frame: true, node: function () { return panels(set); } },
        ].concat(themed('Painéis redimensionáveis', function () { return panels(set); })),
      };
    },
  });

  /* ───────── Divisor ───────── */

  async function dividerSet() {
    if (C.divider && !C.divider.removed) return C.divider;
    C.divider = await variants('divisor-rotulo', 'Divisor/Com rótulo', ['Meio', 'Começo'].map(function (k) {
      return {
        props: { 'Posição': k },
        build: async function (c) {
          box(c.name, { dir: 'H', gap: 'space/150', cross: 'center', w: 200 }, c);
          if (k === 'Meio') add(c, shape('Linha', { w: 40, h: 1, fill: 'color/border/subtle' }), { grow: true });
          add(c, await text('ou', { style: 'caption', color: 'color/fg/subtle', prop: 'Rótulo', name: 'Rótulo' }));
          add(c, shape('Linha', { w: 40, h: 1, fill: 'color/border/subtle' }), { grow: true });
        },
      };
    }), { description: 'Sem margem: o espaço vem do gap de quem está em volta.', columns: 2, gap: 32, props: { 'Rótulo': ['TEXT', 'ou'] } });
    return C.divider;
  }

  function line(w, h) {
    return shape('Divisor', { w: w, h: h, fill: 'color/border/subtle' });
  }

  async function dividerExample(set) {
    var col = box('Exemplo', { dir: 'V', gap: 'space/200', w: 280 });
    var row = box('Ações', { dir: 'H', gap: 'space/150', cross: 'center' });
    add(row, await text('Editar', { style: 'label-md', color: 'color/fg/default' }));
    add(row, line(1, 24));
    add(row, await text('Duplicar', { style: 'label-md', color: 'color/fg/default' }));
    add(col, row);
    add(col, line(280, 1), { fillW: true });
    add(col, instance(set, { 'Posição': 'Meio' }), { fillW: true });
    return col;
  }

  defineBlock({
    id: 'divisor',
    page: 'Componentes',
    row: 'Dados e conteúdo',
    order: 16,
    group: 'Dados e conteúdo',
    title: 'Divisor',
    description: 'Uma linha fina que separa grupos. Na horizontal, na vertical entre ações ou com um rótulo no meio, como o “ou” de um login.',
    build: async function () {
      var set = await dividerSet();
      return {
        sections: [
          { title: 'Com rótulo', description: 'A linha simples é o Divisor do bloco Painel e cartão. O esmaecido do site não entra: o Figma não liga variáveis às cores de um degradê.', node: set, fill: false },
        ].concat(themed('Divisor', function () { return dividerExample(set); })),
      };
    },
  });
})();
