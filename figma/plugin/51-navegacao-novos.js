/**
 * Navegação da 0.15 em diante: Paginação, Stepper, Acordeão, Árvore, Barra de rolagem e Voltar ao topo.
 * Espelha ds/components/navigation.css e scrollbar.css.
 */
(function () {
  var C = {};

  function focusRing(c, st) {
    if (st === 'Foco') stroke(c, 'color/border/focus', 'focus-ring/width', { align: 'OUTSIDE' });
  }

  /* ───────── Paginação ───────── */

  async function pageSet() {
    if (C.page && !C.page.removed) return C.page;
    C.page = await variants('pagina', 'Paginação/Página', ['Normal', 'Hover', 'Foco', 'Atual', 'Desativado'].map(function (st) {
      return {
        props: { Estado: st },
        build: async function (c) {
          box(c.name, { dir: 'H', align: 'center', cross: 'center', pad: [0, 'space/075'], w: 36, h: 36, radius: 'radius/sm', fill: st === 'Hover' ? 'color/bg/hover' : st === 'Atual' ? 'color/bg/selected' : null }, c);
          num(c, 'height', 'size/control/compact');
          focusRing(c, st);
          add(c, await text('3', { style: 'body-sm', color: st === 'Desativado' ? 'color/fg/disabled' : st === 'Atual' || st === 'Hover' ? 'color/fg/default' : 'color/fg/muted', raw: true, prop: 'Número', name: 'Número' }));
        },
      };
    }), { description: 'O botão de cada página, de 36 px.', columns: 5, gap: 12, rowGap: 12, props: { 'Número': ['TEXT', '3'] } });
    return C.page;
  }

  async function pagination(set) {
    var r = box('Paginação', { dir: 'H', align: 'between', cross: 'center', gap: 'space/200', w: 410 });
    add(r, await text('1–10 de 248', { style: 'body-sm', color: 'color/fg/muted' }));
    var list = box('Páginas', { dir: 'H', gap: 2, cross: 'center' });
    var arrow = function (n) { var a = box('Seta', { dir: 'H', align: 'center', cross: 'center', w: 36, h: 36 }); add(a, icon(n, 18, 'color/fg/muted')); return a; };
    add(list, arrow('chevron-left'));
    add(list, instance(set, { Estado: 'Atual' }, { 'Número': '1' }));
    add(list, instance(set, { Estado: 'Normal' }, { 'Número': '2' }));
    add(list, instance(set, { Estado: 'Normal' }, { 'Número': '3' }));
    var gap = box('Reticências', { dir: 'H', align: 'center', cross: 'center', w: 28, h: 36 });
    add(gap, await text('…', { style: 'body-sm', color: 'color/fg/subtle', raw: true }));
    add(list, gap);
    add(list, instance(set, { Estado: 'Normal' }, { 'Número': '25' }));
    add(list, arrow('chevron-right'));
    add(r, list);
    return r;
  }

  defineBlock({
    id: 'paginacao',
    page: 'Componentes',
    row: 'Navegação',
    order: 5,
    group: 'Navegação',
    title: 'Paginação',
    description: 'Divide listas longas em páginas. Mostra a posição e, se fizer sentido, a escolha de itens por página.',
    build: async function () {
      var set = await pageSet();
      return {
        sections: [
          { title: 'Estados', description: 'A atual tem fundo de seleção; desativado vale para as setas nas pontas.', node: set, fill: false },
          { title: 'Montada', description: 'As reticências ocupam sempre o mesmo espaço, para os botões não pularem.', frame: true, node: function () { return pagination(set); } },
        ].concat(themed('Paginação', function () { return pagination(set); }, { pad: 24 })),
      };
    },
  });

  /* ───────── Stepper ───────── */

  var STEP_STATES = ['Concluída', 'Atual', 'Pendente'];

  async function stepSet() {
    if (C.step && !C.step.removed) return C.step;
    C.step = await variants('etapa', 'Stepper/Etapa', STEP_STATES.map(function (st) {
      return {
        props: { Estado: st },
        build: async function (c) {
          box(c.name, { dir: 'H', gap: 'space/100', cross: 'center' }, c);
          var done = st !== 'Pendente';
          var m = box('Marcador', { dir: 'H', align: 'center', cross: 'center', w: 28, h: 28, radius: 'radius/full', fill: st === 'Concluída' ? 'color/brand/solid' : 'color/bg/field', stroke: done ? 'color/brand/solid' : 'color/border/field' });
          if (st === 'Concluída') add(m, icon('check', 16, 'color/brand/on-solid'));
          else add(m, await text('2', { style: 'label-sm', color: st === 'Atual' ? 'color/fg/default' : 'color/fg/muted', raw: true }));
          add(c, m);
          add(c, await text('Pagamento', { style: 'label-sm', color: done ? 'color/fg/default' : 'color/fg/muted', prop: 'Rótulo', name: 'Rótulo' }));
        },
      };
    }), { description: 'Concluída, atual e pendente. O número continua à vista na atual.', columns: 3, gap: 24, rowGap: 12, props: { 'Rótulo': ['TEXT', 'Pagamento'] } });
    return C.step;
  }

  async function stepper(set) {
    var r = box('Stepper', { dir: 'H', gap: 'space/200', cross: 'center', w: 410 });
    var steps = [['Concluída', 'Dados'], ['Atual', 'Pagamento'], ['Pendente', 'Revisão']];
    steps.forEach(function (s, i) {
      add(r, instance(set, { Estado: s[0] }, { 'Rótulo': L(s[1]) }));
      if (i < steps.length - 1) add(r, shape('Ligação', { w: 16, h: 1, fill: i === 0 ? 'color/brand/solid' : 'color/border/default' }), { grow: true });
    });
    return r;
  }

  defineBlock({
    id: 'stepper',
    page: 'Componentes',
    row: 'Navegação',
    order: 6,
    group: 'Navegação',
    title: 'Stepper',
    description: 'Mostra em que etapa de um processo a pessoa está. Na horizontal ou na vertical; no celular, as etapas se empilham.',
    build: async function () {
      var set = await stepSet();
      return {
        sections: [
          { title: 'Etapas', description: 'Marcador de 28 px.', node: set, fill: false },
          { title: 'Montado', description: 'A ligação fica no tom da marca até onde a pessoa já foi.', frame: true, node: function () { return stepper(set); } },
        ].concat(themed('Stepper', function () { return stepper(set); }, { pad: 24 })),
      };
    },
  });

  /* ───────── Acordeão ───────── */

  async function accordionSet() {
    if (C.acc && !C.acc.removed) return C.acc;
    var items = [];
    ['Com linhas', 'Em cartão'].forEach(function (look) {
      [['Fechado', false], ['Aberto', true]].forEach(function (open) {
        items.push({
          props: { 'Aparência': look, Estado: open[0] },
          build: async function (c) {
            var card = look === 'Em cartão';
            box(c.name, { dir: 'V', w: 320, fill: card ? 'color/bg/surface' : null, radius: card ? 'radius/lg' : undefined }, c);
            if (card) stroke(c, 'color/border/subtle', 1);
            var px = card ? 'space/250' : 'space/050';
            var head = box('Cabeçalho', { dir: 'H', align: 'between', cross: 'center', gap: 'space/200', pad: ['space/150', px], h: 52 });
            add(head, await text('O que está incluído?', { style: 'label-md', color: 'color/fg/default' }));
            add(head, icon(open[1] ? 'chevron-up' : 'chevron-down', 18, 'color/fg/subtle'));
            add(c, head, { fillW: true });
            if (open[1]) {
              var body = box('Corpo', { dir: 'V', pad: [0, px, 'space/250', px] });
              add(body, await text('Todos os componentes, os tokens e as atualizações.', { style: 'body-sm', color: 'color/fg/muted', w: card ? 280 : 300 }));
              add(c, body, { fillW: true });
            }
            if (!card) add(c, shape('Linha', { w: 320, h: 1, fill: 'color/border/subtle' }));
          },
        });
      });
    });
    C.acc = await variants('acordeao', 'Acordeão', items, { description: 'Com linhas para o meio de uma página; em cartão para listas soltas.', columns: 2, gap: 24, rowGap: 16 });
    return C.acc;
  }

  defineBlock({
    id: 'acordeao',
    page: 'Componentes',
    row: 'Navegação',
    order: 7,
    group: 'Navegação',
    title: 'Acordeão',
    description: 'Seções que abrem e fecham. Sobre o elemento nativo do navegador: teclado, leitor de tela e busca da página já funcionam.',
    build: async function () {
      var set = await accordionSet();
      return {
        sections: [{ title: 'Aparências', description: 'Altura mínima de 52 px no cabeçalho.', span: 2, node: set, fill: false }]
          .concat(themed('Acordeão', function () { return instance(set, { 'Aparência': 'Com linhas', Estado: 'Aberto' }); })),
      };
    },
  });

  /* ───────── Árvore ───────── */

  var TREE_STATES = ['Normal', 'Hover', 'Foco', 'Selecionado', 'Desativado'];

  async function treeSet() {
    if (C.tree && !C.tree.removed) return C.tree;
    C.tree = await variants('arvore-linha', 'Árvore/Linha', TREE_STATES.map(function (st) {
      return {
        props: { Estado: st },
        build: async function (c) {
          box(c.name, { dir: 'H', gap: 'space/075', cross: 'center', pad: [0, 'space/100', 0, 4], w: 240, h: 36, radius: 'radius/sm', fill: st === 'Hover' ? 'color/bg/hover' : st === 'Selecionado' ? 'color/bg/selected' : null }, c);
          num(c, 'height', 'size/control/compact');
          focusRing(c, st);
          var fg = st === 'Desativado' ? 'color/fg/disabled' : st === 'Normal' ? 'color/fg/muted' : 'color/fg/default';
          add(c, icon('chevron-right', 16, 'color/fg/subtle'));
          add(c, icon('folder', 18, 'color/fg/subtle'));
          add(c, await text('Documentos', { style: 'body-sm', color: fg, prop: 'Rótulo', name: 'Rótulo' }), { grow: true });
        },
      };
    }), { description: 'Uma linha da árvore: seta, ícone e rótulo.', columns: 2, gap: 16, rowGap: 8, props: { 'Rótulo': ['TEXT', 'Documentos'] } });
    return C.tree;
  }

  async function tree(set) {
    var t = box('Árvore', { dir: 'V', gap: 2, w: 280 });
    var row = function (label, st, indent) {
      var w = box('Nível', { dir: 'H', pad: [0, 0, 0, indent] });
      add(w, instance(set, { Estado: st }, { 'Rótulo': L(label) }));
      return w;
    };
    add(t, row('Documentos', 'Normal', 0));
    add(t, row('Contratos', 'Selecionado', 20));
    add(t, row('Notas', 'Normal', 20));
    add(t, row('Fotos', 'Normal', 0));
    return t;
  }

  defineBlock({
    id: 'arvore',
    page: 'Componentes',
    row: 'Navegação',
    order: 8,
    group: 'Navegação',
    title: 'Árvore',
    description: 'Hierarquias que abrem e fecham, como pastas. Cada nível recua 20 px. As setas do teclado navegam e abrem.',
    build: async function () {
      var set = await treeSet();
      return {
        sections: [
          { title: 'Estados', description: 'Linha de 36 px.', span: 2, node: set, fill: false },
          { title: 'Montada', description: 'Dois níveis, com um item selecionado.', frame: true, node: function () { return tree(set); } },
        ].concat(themed('Árvore', function () { return tree(set); }, { pad: 24 })),
      };
    },
  });

  /* ───────── Barra de rolagem ───────── */

  async function scrollSet() {
    if (C.scroll && !C.scroll.removed) return C.scroll;
    C.scroll = await variants('barra-rolagem', 'Barra de rolagem', [['Visível', 6, 'color/border/field'], ['Hover', 8, 'color/fg/subtle'], ['Arrastando', 8, 'color/fg/subtle']].map(function (s) {
      return {
        props: { Estado: s[0] },
        build: async function (c) {
          box(c.name, { dir: 'H', align: 'end', pad: [8, 3, 8, 8], w: 120, h: 112, radius: 'radius/md', fill: 'color/bg/surface', stroke: 'color/border/subtle' }, c);
          add(c, shape('Barra', { w: s[1], h: 48, radius: 'radius/full', fill: s[2] }));
        },
      };
    }), { description: 'Só a barra, sem trilho nem setas. Fica mais grossa com o ponteiro em cima.', columns: 3, gap: 16, rowGap: 16 });
    return C.scroll;
  }

  defineBlock({
    id: 'barra-rolagem',
    page: 'Componentes',
    row: 'Navegação',
    order: 9,
    group: 'Navegação',
    title: 'Barra de rolagem',
    description: 'Uma barra só, igual em qualquer sistema. Aparece enquanto a pessoa rola, some cerca de um segundo depois e não ocupa espaço no layout.',
    build: async function () {
      var set = await scrollSet();
      return {
        sections: [{ title: 'Estados', description: 'Espessura de 6 px, ou 8 px com o ponteiro em cima; a área de pegar tem 12 px.', span: 2, node: set, fill: false }]
          .concat(themed('Barra de rolagem', function () { return instance(set, { Estado: 'Visível' }); })),
      };
    },
  });

  /* ───────── Voltar ao topo ───────── */

  async function backSet() {
    if (C.back && !C.back.removed) return C.back;
    C.back = await variants('voltar-topo', 'Voltar ao topo', ['Normal', 'Hover', 'Foco'].map(function (st) {
      return {
        props: { Estado: st },
        build: async function (c) {
          box(c.name, { dir: 'H', align: 'center', cross: 'center', w: 40, h: 40, radius: 'radius/full', fill: 'color/bg/raised' }, c);
          num(c, 'width', 'size/control/md');
          num(c, 'height', 'size/control/md');
          stroke(c, st === 'Foco' ? 'color/border/focus' : st === 'Hover' ? 'color/border/strong' : 'color/border/default', st === 'Foco' ? 'focus-ring/width' : 1);
          shadow(c, 'md');
          add(c, icon('arrow-up', 20, st === 'Normal' ? 'color/fg/muted' : 'color/fg/default'));
        },
      };
    }), { description: 'Aparece depois de uma tela de rolagem, no canto inferior do painel.', columns: 3, gap: 24, rowGap: 12 });
    return C.back;
  }

  defineBlock({
    id: 'voltar-topo',
    page: 'Componentes',
    row: 'Navegação',
    order: 10,
    group: 'Navegação',
    title: 'Voltar ao topo',
    description: 'Em páginas longas, leva de volta ao começo com um clique. O foco vai para o conteúdo, e quem pede menos movimento volta sem animação.',
    build: async function () {
      var set = await backSet();
      return {
        sections: [{ title: 'Estados', description: 'Redondo, de 40 px, ancorado no contêiner e não na janela.', span: 2, node: set, fill: false }]
          .concat(themed('Voltar ao topo', function () { return instance(set, { Estado: 'Normal' }); })),
      };
    },
  });
})();
