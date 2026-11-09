/**
 * Camadas (Popover, Gaveta lateral, Menu de contexto) e carregamento (Barra de progresso, Spinner, Skeleton).
 * Espelha ds/components/layers.css e loading.css.
 */
(function () {
  var C = {};

  function layer(name, o) {
    var p = box(name, Object.assign({ dir: 'V', radius: 'radius/lg', fill: 'color/bg/raised', stroke: 'color/border/strong' }, o));
    shadow(p, 'xl');
    return p;
  }

  /* ───────── Popover ───────── */

  async function popover() {
    var p = layer('Popover', { gap: 'space/100', pad: 'space/200', w: 280 });
    var head = box('Cabeçalho', { dir: 'H', align: 'between', cross: 'center', gap: 'space/200' });
    add(head, await text('Compartilhar', { style: 'label-md', color: 'color/fg/default' }));
    add(head, icon('x', 16, 'color/fg/subtle'));
    add(p, head, { fillW: true });
    add(p, await text('Quem tiver o link pode ver este projeto.', { style: 'body-sm', color: 'color/fg/muted', w: 248 }));
    return p;
  }

  async function popoverComponent() {
    if (C.pop && !C.pop.removed) return C.pop;
    C.pop = await component('popover', 'Popover', async function (c) {
      box(c.name, { dir: 'V' }, c);
      add(c, await popover());
    }, { description: 'Abre com um clique, perto do que o abriu, e fecha com Esc ou clicando fora.' });
    return C.pop;
  }

  defineBlock({
    id: 'popover',
    page: 'Componentes',
    row: 'Camadas',
    order: 3,
    group: 'Camadas',
    title: 'Popover',
    description: 'Um painel leve, ligado a um botão. Bom para ajuda, filtros e pequenos formulários, quando um Tooltip é pouco e um Modal é demais.',
    build: async function () {
      var cmp = await popoverComponent();
      return { sections: themed('Popover', function () { return cmp.createInstance(); }, { pad: 32 }) };
    },
  });

  /* ───────── Gaveta lateral ───────── */

  async function drawerSet() {
    if (C.drawer && !C.drawer.removed) return C.drawer;
    C.drawer = await variants('gaveta', 'Gaveta lateral', [['P', 360], ['M', 480]].map(function (s) {
      return {
        props: { Tamanho: s[0] },
        build: async function (c) {
          box(c.name, { dir: 'V', w: s[1], h: 420, radius: 'radius/xl', fill: 'color/bg/raised' }, c);
          shadow(c, 'xl');
          var head = box('Cabeçalho', { dir: 'H', align: 'between', cross: 'center', pad: ['space/300', 'space/300', 'space/200', 'space/400'] });
          add(head, await text('Detalhes do pedido', { style: 'heading-lg', color: 'color/fg/default' }));
          add(head, icon('x', 20, 'color/fg/muted'));
          add(c, head, { fillW: true });
          var body = box('Corpo', { dir: 'V', pad: [0, 'space/400'] });
          add(body, await text('O conteúdo rola por dentro, e a página atrás fica parada.', { style: 'body-md', color: 'color/fg/muted', w: s[1] - 80 }));
          add(c, body, { fillW: true, grow: true });
          var foot = box('Rodapé', { dir: 'H', align: 'end', gap: 'space/100', pad: ['space/250', 'space/400'] });
          stroke(foot, 'color/border/subtle', 1, { align: 'INSIDE' });
          foot.strokeBottomWeight = 0;
          foot.strokeLeftWeight = 0;
          foot.strokeRightWeight = 0;
          var cancel = box('Cancelar', { dir: 'H', align: 'center', cross: 'center', pad: [0, 'space/200'], h: 40, radius: 'radius/md', stroke: 'color/border/control' });
          add(cancel, await text('Cancelar', { style: 'label-md', color: 'color/fg/default' }));
          add(foot, cancel);
          var ok = box('Salvar', { dir: 'H', align: 'center', cross: 'center', pad: [0, 'space/200'], h: 40, radius: 'radius/md', fill: 'color/brand/solid' });
          add(ok, await text('Salvar', { style: 'label-md', color: 'color/brand/on-solid' }));
          add(foot, ok);
          add(c, foot, { fillW: true });
        },
      };
    }), { description: 'Desliza pela borda da tela, à direita, à esquerda ou embaixo. No celular ocupa a tela toda.', columns: 2, gap: 24, rowGap: 16 });
    return C.drawer;
  }

  defineBlock({
    id: 'gaveta',
    page: 'Componentes',
    row: 'Camadas',
    order: 4,
    group: 'Camadas',
    title: 'Gaveta lateral',
    description: 'Um painel que desliza pela borda para ver ou editar algo sem sair da página. Usa as mesmas partes do Modal.',
    build: async function () {
      var set = await drawerSet();
      return {
        sections: [{ title: 'Tamanhos', description: '360 e 480 px; há também 640 px e a versão de baixo.', span: 2, node: set, fill: false }]
          .concat(themed('Gaveta lateral', function () { return instance(set, { Tamanho: 'P' }); }, { pad: 24 })),
      };
    },
  });

  /* ───────── Menu de contexto ───────── */

  async function contextMenu() {
    var m = layer('Menu de contexto', { pad: 6, w: 220 });
    var rows = [['copy', 'Copiar', 'Ctrl C'], ['pencil', 'Renomear', 'F2'], null, ['trash', 'Excluir', null, true]];
    for (var r of rows) {
      if (!r) {
        var sep = box('Separador', { dir: 'V', pad: [6, 0] });
        add(sep, shape('Linha', { w: 208, h: 1, fill: 'color/border/subtle' }));
        add(m, sep, { fillW: true });
        continue;
      }
      var fg = r[3] ? 'color/danger/fg' : 'color/fg/default';
      var it = box(r[1], { dir: 'H', gap: 'space/100', pad: [0, 'space/100'], cross: 'center', h: 36, radius: 'radius/sm' });
      num(it, 'height', 'size/control/compact');
      add(it, icon(r[0], 18, r[3] ? fg : 'color/fg/muted'));
      add(it, await text(r[1], { style: 'body-sm', color: fg }), { grow: true });
      if (r[2]) add(it, await text(r[2], { style: 'caption', color: 'color/fg/subtle', raw: true }));
      add(m, it, { fillW: true });
    }
    return m;
  }

  async function contextComponent() {
    if (C.ctx && !C.ctx.removed) return C.ctx;
    C.ctx = await component('menu-contexto', 'Menu de contexto', async function (c) {
      box(c.name, { dir: 'V' }, c);
      add(c, await contextMenu());
    }, { description: 'Abre com o botão direito ou com um toque longo, no lugar do ponteiro.' });
    return C.ctx;
  }

  defineBlock({
    id: 'menu-contexto',
    page: 'Componentes',
    row: 'Camadas',
    order: 5,
    group: 'Camadas',
    title: 'Menu de contexto',
    description: 'Ações do item sob o ponteiro: botão direito, toque longo ou Shift + F10. É um atalho: as ações também precisam existir em outro lugar.',
    build: async function () {
      var cmp = await contextComponent();
      return { sections: themed('Menu de contexto', function () { return cmp.createInstance(); }, { pad: 32 }) };
    },
  });

  /* ───────── Barra de progresso ───────── */

  async function progressSet() {
    if (C.progress && !C.progress.removed) return C.progress;
    var tones = [['Marca', 'color/brand/solid'], ['Sucesso', 'color/success/solid'], ['Atenção', 'color/warning/solid'], ['Perigo', 'color/danger/solid']];
    var items = [];
    tones.forEach(function (t) {
      [['P', 4], ['G', 8]].forEach(function (s) {
        items.push({
          props: { Tom: t[0], Tamanho: s[0] },
          build: async function (c) {
            box(c.name, { dir: 'H', w: 240, h: s[1], radius: 'radius/full', fill: 'color/bg/muted', clip: true }, c);
            add(c, shape('Preenchido', { w: 144, h: s[1], fill: t[1], radius: 'radius/full' }));
          },
        });
      });
    });
    C.progress = await variants('progresso', 'Barra de progresso', items, { description: 'Para esperas com duração conhecida. Sem porcentagem, use a versão indeterminada.', columns: 2, gap: 24, rowGap: 20 });
    return C.progress;
  }

  defineBlock({
    id: 'progresso',
    page: 'Componentes',
    row: 'Feedback',
    order: 6,
    group: 'Feedback',
    title: 'Barra de progresso',
    description: 'Mostra quanto falta. O elemento é o nativo do navegador, e o leitor de tela lê o valor.',
    build: async function () {
      var set = await progressSet();
      return {
        sections: [{ title: 'Tons e tamanhos', description: '4 e 8 px de altura.', span: 2, node: set, fill: false }]
          .concat(themed('Barra de progresso', function () { return instance(set, { Tom: 'Marca', Tamanho: 'P' }); })),
      };
    },
  });

  /* ───────── Spinner ───────── */

  async function spinnerSet() {
    if (C.spin && !C.spin.removed) return C.spin;
    C.spin = await variants('spinner', 'Spinner', [['P', 16], ['M', 20], ['G', 32]].map(function (s) {
      return {
        props: { Tamanho: s[0] },
        build: async function (c) {
          box(c.name, { dir: 'H', align: 'center', cross: 'center', w: s[1], h: s[1] }, c);
          add(c, icon('loader', s[1], 'color/fg/muted'));
        },
      };
    }), { description: 'Para esperas curtas, sem duração conhecida. No Figma é parado; no site, gira.', columns: 3, gap: 24, rowGap: 12 });
    return C.spin;
  }

  defineBlock({
    id: 'spinner',
    page: 'Componentes',
    row: 'Feedback',
    order: 7,
    group: 'Feedback',
    title: 'Spinner',
    description: 'Avisa que algo está carregando, em 16, 20 e 32 px. Herda a cor do texto, então funciona dentro de botões.',
    build: async function () {
      var set = await spinnerSet();
      return {
        sections: [{ title: 'Tamanhos', description: 'Com menos movimento pedido no sistema, ele gira bem devagar.', node: set, fill: false }]
          .concat(themed('Spinner', function () { return instance(set, { Tamanho: 'M' }); })),
      };
    },
  });

  /* ───────── Skeleton ───────── */

  function bar(w, h, r) {
    return shape('Bloco', { w: w, h: h, radius: r || 'radius/xs', fill: 'color/bg/muted' });
  }

  async function skeletonCard() {
    var s = box('Skeleton', { dir: 'V', gap: 'space/150', pad: 'space/250', w: 300, radius: 'radius/xl', fill: 'color/bg/surface', stroke: 'color/border/subtle' });
    var row = box('Pessoa', { dir: 'H', gap: 'space/150', cross: 'center' });
    add(row, shape('Avatar', { w: 40, h: 40, ellipse: true, fill: 'color/bg/muted' }));
    var col = box('Nome', { dir: 'V', gap: 'space/075' });
    add(col, bar(140, 12));
    add(col, bar(90, 10));
    add(row, col);
    add(s, row);
    add(s, bar(252, 72, 'radius/md'));
    add(s, bar(252, 10));
    add(s, bar(180, 10));
    return s;
  }

  async function skeletonComponent() {
    if (C.skel && !C.skel.removed) return C.skel;
    C.skel = await component('skeleton', 'Skeleton', async function (c) {
      box(c.name, { dir: 'V' }, c);
      add(c, await skeletonCard());
    }, { description: 'Monte com a forma do conteúdo que vai chegar: texto, círculo e blocos.' });
    return C.skel;
  }

  defineBlock({
    id: 'skeleton',
    page: 'Componentes',
    row: 'Feedback',
    order: 8,
    group: 'Feedback',
    title: 'Skeleton',
    description: 'Reserva o lugar do conteúdo enquanto ele carrega, para a página não pular. Com menos movimento pedido no sistema, não pulsa.',
    build: async function () {
      var cmp = await skeletonComponent();
      return { sections: themed('Skeleton', function () { return cmp.createInstance(); }, { pad: 24 }) };
    },
  });
})();
