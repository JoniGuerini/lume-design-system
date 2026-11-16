/**
 * Sidebar e Navbar (páginas próprias da 1.8, Componentes › Navegação).
 * Espelha ds/components/shell.css: item da sidebar (principal e de grupo), título do grupo,
 * a sidebar aberta (288 px) e recolhida (76 px), o botão da navbar e a barra nos três passos de espaço.
 */
(function () {
  var C = {};

  /** A chama do Lume (assets/favicon.svg): cores fixas, é logotipo. */
  function flame(size) {
    var f = figma.createNodeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 24 24">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248z" fill="#c97b63"/>' +
      '<path d="M15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1.001a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.717z" fill="#ffffff" fill-opacity="0.28"/></svg>');
    f.name = L('Chama');
    return f;
  }

  function dot() {
    return shape('Novidade', { ellipse: true, w: 6, h: 6, fill: 'color/brand/indicator' });
  }

  /** Marca da sidebar: chama de 24 px e o nome de 28 px (fonte de títulos). */
  async function brand() {
    var b = box('Marca', { dir: 'H', gap: 'space/150', cross: 'center' });
    add(b, flame(24));
    add(b, await text('Lume', { style: 'heading-lg', size: 28, color: 'color/fg/default', raw: true }));
    return b;
  }

  async function searchField(o) {
    o = o || {};
    var s = box('Busca', { dir: 'H', gap: 10, pad: o.iconOnly ? 0 : [0, 12], align: o.iconOnly ? 'center' : 'start', cross: 'center', w: o.w, h: 40, radius: 'radius/md', stroke: 'color/border/control' });
    add(s, icon('search', 20, 'color/fg/subtle'));
    if (o.iconOnly) return s;
    add(s, await text('Buscar no Lume', { style: 'body-sm', color: 'color/fg/subtle' }), { grow: true });
    var kbd = box('Atalho', { dir: 'H', pad: [1, 6], radius: 'radius/xs', stroke: 'color/border/default' });
    add(kbd, await text('⌘K', { style: 'caption', color: 'color/fg/subtle', raw: true }));
    add(s, kbd);
    return s;
  }

  /* ───────── Sidebar: item ───────── */

  var ITEM_STATES = ['Normal', 'Hover', 'Foco', 'Atual', 'Com novidade'];
  var ITEM_W = 200; // na sidebar, a instância estica até 262 (288 − 13 de cada lado)

  async function itemSet() {
    if (C.item && !C.item.removed) return C.item;
    var items = [];
    ITEM_STATES.forEach(function (st) {
      ['Principal', 'Grupo'].forEach(function (kind) {
        items.push({
          props: { Tipo: kind, Estado: st },
          build: async function (c) {
            var lg = kind === 'Principal';
            var on = st === 'Hover' || st === 'Atual';
            box(c.name, { dir: 'H', gap: lg ? 14 : 12, pad: [0, 12, 0, 13], cross: 'center', w: ITEM_W, radius: 'radius/md', fill: st === 'Hover' ? 'color/bg/hover' : st === 'Atual' ? 'color/bg/selected' : null }, c);
            num(c, 'height', lg ? 'size/control/lg' : 'size/control/md');
            if (st === 'Atual') stroke(c, 'color/border/subtle', 1);
            if (st === 'Foco') stroke(c, 'color/border/focus', 'focus-ring/width', { align: 'INSIDE' });
            var fg = lg || on ? 'color/fg/default' : 'color/fg/muted';
            var ic = icon(st === 'Com novidade' ? 'megaphone' : lg ? 'home' : 'palette', 20, fg);
            exposes(ic, 'mainComponent', 'Ícone');
            add(c, ic);
            var label = st === 'Com novidade' ? 'Novidades' : lg ? 'Início' : 'Cores';
            add(c, await text(label, { style: lg ? 'label-lg' : 'label-md', color: fg, prop: 'Rótulo', name: 'Rótulo', truncate: true }), { grow: true });
            if (st === 'Com novidade') {
              var d = dot();
              add(c, d);
            }
          },
        });
      });
    });
    C.item = await variants('sidebar-item', 'Sidebar/Item', items, {
      description: 'Ícone de 20 px, rótulo e, se for o caso, a bolinha. Principal com 48 px; item de grupo com 40.',
      columns: 2,
      gap: 24,
      rowGap: 8,
      props: {
        'Rótulo': ['TEXT', 'Cores'],
        'Ícone': ['INSTANCE_SWAP', 'palette', ['palette', 'home', 'megaphone', 'type', 'shapes', 'zap', 'layers', 'layout', 'component', 'compass', 'target', 'package']],
      },
    });
    return C.item;
  }

  /* ───────── Sidebar: título do grupo ───────── */

  async function groupSet() {
    if (C.group && !C.group.removed) return C.group;
    C.group = await variants('sidebar-grupo', 'Sidebar/Título do grupo', ['Aberto', 'Fechado', 'Hover', 'Foco'].map(function (st) {
      return {
        props: { Estado: st },
        build: async function (c) {
          box(c.name, { dir: 'H', align: 'between', cross: 'center', pad: [0, 6, 0, 13], w: ITEM_W, radius: 'radius/md' }, c);
          num(c, 'height', 'size/control/md');
          if (st === 'Foco') stroke(c, 'color/border/focus', 'focus-ring/width', { align: 'INSIDE' });
          add(c, await text('Fundamentos', { style: 'heading-xs', color: 'color/fg/default', prop: 'Rótulo', name: 'Rótulo' }));
          var t = box('Seta', { dir: 'H', align: 'center', cross: 'center', w: 28, h: 28, radius: 'radius/sm', fill: st === 'Hover' ? 'color/bg/muted' : 'color/bg/selected' });
          add(t, icon(st === 'Fechado' ? 'chevron-right' : 'chevron-down', 16, st === 'Hover' ? 'color/fg/default' : 'color/fg/subtle'));
          add(c, t);
        },
      };
    }), { description: 'Recolhe e abre o grupo; fechado, a seta gira para o lado.', columns: 2, gap: 24, rowGap: 8, props: { 'Rótulo': ['TEXT', 'Fundamentos'] } });
    return C.group;
  }

  /* ───────── Sidebar aberta e recolhida ───────── */

  var SIDE_H = 680;

  function sidebarPanel(name, w, c) {
    return box(name, { dir: 'V', gap: 0, w: w, h: SIDE_H, fill: 'color/bg/sidebar', stroke: 'color/border/subtle', radius: 'radius/xl', clip: true }, c);
  }

  async function accountCard(collapsed) {
    var a = box('Rodapé', { dir: 'H', gap: 12, pad: collapsed ? [0, 3] : [0, 14, 0, 11], cross: 'center', h: 64, radius: 'radius/lg', fill: collapsed ? null : 'color/bg/muted', stroke: collapsed ? null : 'color/border/subtle' });
    var av = box('Avatar', { dir: 'H', align: 'center', cross: 'center', w: 40, h: 40, radius: 'radius/full', fill: 'color/bg/sunken', stroke: 'color/border/default' });
    add(av, icon('package', 20, 'color/fg/muted'));
    add(a, av);
    if (collapsed) return a;
    var tx = box('Versão', { dir: 'V', gap: 0 });
    add(tx, await text('Lume ' + META.version.split('.').slice(0, 2).join('.'), { style: 'heading-xs', color: 'color/fg/default', raw: true }));
    add(tx, await text('Ver o que há de novo', { style: 'caption', color: 'color/fg/subtle' }));
    add(a, tx, { grow: true });
    add(a, icon('chevron-right', 16, 'color/fg/subtle'));
    return a;
  }

  async function openSidebar() {
    if (C.open && !C.open.removed) return C.open;
    var item = await itemSet();
    var group = await groupSet();
    C.open = await component('sidebar-aberta', 'Sidebar/Aberta', async function (c) {
      sidebarPanel(c.name, 288, c);
      var head = box('Cabeçalho', { dir: 'H', cross: 'center', h: 76, pad: [0, 25] });
      add(head, await brand());
      add(c, head, { fillW: true });
      var search = box('Área da busca', { dir: 'V', pad: [0, 13, 8, 13] });
      add(search, await searchField(), { fillW: true });
      add(c, search, { fillW: true });
      var nav = box('Navegação', { dir: 'V', gap: 2, pad: [4, 13, 0, 13] });
      add(nav, instance(item, { Tipo: 'Principal', Estado: 'Normal' }, { 'Rótulo': 'Início', 'Ícone': 'home' }), { fillW: true });
      add(nav, instance(item, { Tipo: 'Principal', Estado: 'Com novidade' }, { 'Rótulo': 'Novidades', 'Ícone': 'megaphone' }), { fillW: true });
      add(nav, instance(item, { Tipo: 'Principal', Estado: 'Normal' }, { 'Rótulo': 'Roadmap', 'Ícone': 'compass' }), { fillW: true });
      add(nav, box('Espaço', { dir: 'V', w: 1, h: 8 }));
      add(nav, instance(group, { Estado: 'Aberto' }, { 'Rótulo': 'Fundamentos' }), { fillW: true });
      add(nav, instance(item, { Tipo: 'Grupo', Estado: 'Normal' }, { 'Rótulo': 'Cores', 'Ícone': 'palette' }), { fillW: true });
      add(nav, instance(item, { Tipo: 'Grupo', Estado: 'Normal' }, { 'Rótulo': 'Tipografia', 'Ícone': 'type' }), { fillW: true });
      add(nav, instance(item, { Tipo: 'Grupo', Estado: 'Normal' }, { 'Rótulo': 'Ícones', 'Ícone': 'shapes' }), { fillW: true });
      add(nav, box('Espaço', { dir: 'V', w: 1, h: 8 }));
      add(nav, instance(group, { Estado: 'Aberto' }, { 'Rótulo': 'Componentes' }), { fillW: true });
      add(nav, instance(item, { Tipo: 'Grupo', Estado: 'Atual' }, { 'Rótulo': 'Sidebar', 'Ícone': 'layout' }), { fillW: true });
      add(nav, instance(item, { Tipo: 'Grupo', Estado: 'Normal' }, { 'Rótulo': 'Navbar', 'Ícone': 'layers' }), { fillW: true });
      add(nav, box('Espaço', { dir: 'V', w: 1, h: 8 }));
      add(nav, instance(group, { Estado: 'Fechado' }, { 'Rótulo': 'Padrões' }), { fillW: true });
      add(c, nav, { fillW: true });
      add(c, box('Espaço', { dir: 'V', w: 1 }), { grow: true });
      var foot = box('Área do rodapé', { dir: 'V', pad: [8, 13, 13, 13] });
      add(foot, await accountCard(false), { fillW: true });
      add(c, foot, { fillW: true });
    }, { description: 'Marca, busca, a navegação principal, grupos que recolhem e o rodapé preso no pé do painel.' });
    return C.open;
  }

  /** Recolhida: os ícones ficam na mesma coluna (centro em x = 38), os rótulos somem e o título do grupo vira um fio. */
  async function collapsedSidebar() {
    if (C.closed && !C.closed.removed) return C.closed;
    C.closed = await component('sidebar-recolhida', 'Sidebar/Recolhida', async function (c) {
      sidebarPanel(c.name, 76, c);
      var head = box('Cabeçalho', { dir: 'H', cross: 'center', h: 76, pad: [0, 14] });
      var tog = box('Expandir', { dir: 'H', align: 'center', cross: 'center', w: 48, h: 48, radius: 'radius/md' });
      add(tog, flame(28));
      add(head, tog);
      add(c, head, { fillW: true });
      var search = box('Área da busca', { dir: 'V', pad: [0, 13, 8, 13] });
      add(search, await searchField({ iconOnly: true }), { fillW: true });
      add(c, search, { fillW: true });
      var nav = box('Navegação', { dir: 'V', gap: 2, pad: [4, 13, 0, 13] });
      var cell = function (glyph, lg, state, hasDot) {
        var it = box('Item', { dir: 'H', pad: [0, 0, 0, 13], cross: 'center', h: lg ? 48 : 40, radius: 'radius/md', fill: state === 'Atual' ? 'color/bg/selected' : null, stroke: state === 'Atual' ? 'color/border/subtle' : null });
        add(it, icon(glyph, 20, lg || state === 'Atual' ? 'color/fg/default' : 'color/fg/muted'));
        if (hasDot) add(it, dot(), { absolute: true, x: 30, y: 9 });
        return it;
      };
      var rule = function () {
        var r = box('Grupo', { dir: 'V', align: 'center', pad: [0, 14], h: 40 });
        add(r, shape('Fio', { w: 22, h: 1, fill: 'color/border/default' }), { fillW: true });
        return r;
      };
      add(nav, cell('home', true), { fillW: true });
      add(nav, cell('megaphone', true, null, true), { fillW: true });
      add(nav, cell('compass', true), { fillW: true });
      add(nav, box('Espaço', { dir: 'V', w: 1, h: 8 }));
      add(nav, rule(), { fillW: true });
      add(nav, cell('palette'), { fillW: true });
      add(nav, cell('type'), { fillW: true });
      add(nav, cell('shapes'), { fillW: true });
      add(nav, box('Espaço', { dir: 'V', w: 1, h: 8 }));
      add(nav, rule(), { fillW: true });
      add(nav, cell('layout', false, 'Atual'), { fillW: true });
      add(nav, cell('layers'), { fillW: true });
      add(nav, box('Espaço', { dir: 'V', w: 1, h: 8 }));
      add(nav, rule(), { fillW: true });
      add(c, nav, { fillW: true });
      add(c, box('Espaço', { dir: 'V', w: 1 }), { grow: true });
      var foot = box('Área do rodapé', { dir: 'V', pad: [8, 13, 13, 13] });
      add(foot, await accountCard(true), { fillW: true });
      add(c, foot, { fillW: true });
    }, { description: 'Só os ícones, na mesma coluna da aberta. A chama fica no lugar do botão e vira o ícone de expandir com o mouse ou o foco.' });
    return C.closed;
  }

  /** A aba de recolher: 24 px, presa na borda direita na altura da marca. */
  async function edgeTab() {
    var t = box('Aba de recolher', { dir: 'H', align: 'center', cross: 'center', w: 24, h: 24, radius: 'radius/full', fill: 'color/bg/raised', stroke: 'color/border/control' });
    add(t, icon('chevron-left', 16, 'color/fg/muted'));
    return t;
  }

  async function bothStates() {
    var open = await openSidebar();
    var closed = await collapsedSidebar();
    var row = box('Aberta e recolhida', { dir: 'H', gap: 48, cross: 'start' });
    var a = box('Aberta', { dir: 'V', gap: 12 });
    var wrap = box('Com a aba', { dir: 'none', w: 300, h: SIDE_H });
    var inst = open.createInstance();
    add(wrap, inst);
    var tab = await edgeTab();
    add(wrap, tab);
    tab.x = 288 - 12;
    tab.y = 38 - 12;
    add(a, wrap);
    add(a, await text('Aberta · 288 px. A aba aparece com o mouse sobre a sidebar ou com o foco.', { style: 'caption', color: 'color/fg/subtle', w: 288 }));
    add(row, a);
    var b = box('Recolhida', { dir: 'V', gap: 12 });
    add(b, closed.createInstance());
    add(b, await text('Recolhida · 76 px', { style: 'caption', color: 'color/fg/subtle', w: 160 }));
    add(row, b);
    return row;
  }

  defineBlock({
    id: 'sidebar',
    page: 'Componentes',
    row: 'Navegação',
    order: 11,
    group: 'Navegação',
    title: 'Sidebar',
    description: 'A navegação na lateral: marca, busca, os lugares de todo dia e grupos que recolhem. No desktop, encolhe até ficar só com os ícones; no celular, vira gaveta.',
    build: async function () {
      var item = await itemSet();
      var group = await groupSet();
      var open = await openSidebar();
      return {
        sections: [
          { title: 'Item', description: 'Principal (48 px, rótulo maior e mais escuro) e de grupo (40 px). Atual: fundo selecionado e contorno fino.', node: item, fill: false },
          { title: 'Título do grupo', description: 'heading-xs. Recolhida, a sidebar troca o título por um fio curto.', node: group, fill: false },
          { title: 'Aberta e recolhida', description: 'No desktop, a sidebar recolhe para 76 px. Os ícones ficam na mesma coluna nos dois estados, por isso nada pula na animação.', span: 2, frame: true, pad: 32, node: bothStates },
        ].concat(themed('Sidebar', function () { return open.createInstance(); }, { pad: 24 })),
      };
    },
  });

  /* ───────── Navbar: botão ───────── */

  var NAV_ITEMS = [
    ['Link', 'Normal'], ['Link', 'Hover'], ['Link', 'Atual'],
    ['Grupo', 'Normal'], ['Grupo', 'Hover'], ['Grupo', 'Aberto'], ['Grupo', 'Atual'], ['Grupo', 'Com novidade'],
  ];

  async function navSet() {
    if (C.nav && !C.nav.removed) return C.nav;
    C.nav = await variants('navbar-item', 'Navbar/Item', NAV_ITEMS.map(function (p) {
      return {
        props: { Tipo: p[0], Estado: p[1] },
        build: async function (c) {
          var st = p[1];
          var on = st !== 'Normal' && st !== 'Com novidade';
          box(c.name, { dir: 'H', gap: 'space/050', pad: [0, 'space/150'], cross: 'center', radius: 'radius/md', fill: st === 'Hover' || st === 'Aberto' ? 'color/bg/hover' : st === 'Atual' ? 'color/bg/selected' : null }, c);
          num(c, 'height', 'size/control/compact');
          add(c, await text(p[0] === 'Link' ? 'Novidades' : 'Componentes', { style: 'label-md', color: on ? 'color/fg/default' : 'color/fg/muted', prop: 'Rótulo', name: 'Rótulo' }));
          if (st === 'Com novidade') add(c, dot());
          if (p[0] === 'Grupo') add(c, icon(st === 'Aberto' ? 'chevron-up' : 'chevron-down', 16, 'color/fg/subtle'));
        },
      };
    }), { description: 'Links diretos e botões de grupo, de 36 px. O grupo abre um menu com as páginas, e a seta gira.', columns: 5, gap: 16, rowGap: 12, props: { 'Rótulo': ['TEXT', 'Componentes'] } });
    return C.nav;
  }

  /* ───────── Navbar: a barra nos três passos ───────── */

  async function navbar(set, step, w) {
    var bar = box('Navbar', { dir: 'H', gap: 'space/100', pad: [0, 'space/150'], cross: 'center', w: w, h: 64, fill: 'color/bg/sidebar', stroke: 'color/border/subtle', radius: 'radius/xl', clip: true });
    var b = await brand();
    var bw = box('Marca', { dir: 'H', pad: [0, 'space/250', 0, 13], cross: 'center' });
    add(bw, b);
    add(bar, bw);
    var nav = box('Navegação', { dir: 'H', gap: 2, cross: 'center' });
    add(nav, instance(set, { Tipo: 'Link', Estado: 'Normal' }, { 'Rótulo': 'Novidades' }));
    add(nav, instance(set, { Tipo: 'Link', Estado: 'Normal' }, { 'Rótulo': 'Roadmap' }));
    add(nav, instance(set, { Tipo: 'Grupo', Estado: 'Normal' }, { 'Rótulo': 'Fundamentos' }));
    if (step < 3) {
      add(nav, instance(set, { Tipo: 'Grupo', Estado: 'Atual' }, { 'Rótulo': 'Componentes' }));
      add(nav, instance(set, { Tipo: 'Grupo', Estado: 'Normal' }, { 'Rótulo': 'Padrões' }));
    } else {
      // a página atual foi para o Mais: é o Mais que fica selecionado
      add(nav, instance(set, { Tipo: 'Grupo', Estado: 'Atual' }, { 'Rótulo': 'Mais' }));
    }
    add(bar, nav, { grow: true });
    add(bar, await searchField(step === 1 ? { w: 240 } : { iconOnly: true, w: 40 }));
    return bar;
  }

  async function steps(set) {
    var col = box('Passos', { dir: 'V', gap: 20 });
    var STEPS = [[1, 'Tudo cabe: links, grupos e a busca inteira, com o atalho.', 964], [2, 'A busca encolhe: fica só a lupa, do tamanho de um botão.', 780], [3, 'Os últimos vão para o Mais, um por vez, até caber.', 620]];
    for (var s of STEPS) {
      var r = box('Passo ' + s[0], { dir: 'V', gap: 8 });
      add(r, await text(s[0] + ' · ' + L(s[1]), { style: 'caption', color: 'color/fg/subtle', raw: true }));
      add(r, await navbar(set, s[0], s[2]));
      add(col, r);
    }
    return col;
  }

  defineBlock({
    id: 'navbar',
    page: 'Componentes',
    row: 'Navegação',
    order: 12,
    group: 'Navegação',
    title: 'Navbar',
    description: 'A alternativa à sidebar: o mesmo painel flutuante, deitado no topo. Links diretos, um menu por grupo e a busca; no celular, vira a mesma gaveta.',
    build: async function () {
      var set = await navSet();
      return {
        sections: [
          { title: 'Item', description: 'Link, botão de grupo, aberto, atual e com novidade.', span: 2, node: set, fill: false },
          { title: 'Quando falta espaço', description: 'Medido na própria barra, não na janela: primeiro a busca vira só o ícone, depois os últimos itens vão para o Mais.', span: 2, frame: true, pad: 24, node: function () { return steps(set); } },
        ].concat(themed('Navbar', function () { return navbar(set, 1, 964); }, { pad: 24 }).map(function (s) { return Object.assign(s, { span: 2 }); })),
      };
    },
  });
})();
