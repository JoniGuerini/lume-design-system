/**
 * Padrões de tela da 1.1 à 1.7: Listagem de dados, Configurações, Avisos e confirmações, Detalhe e edição,
 * Painel de indicadores e Carregamento e erros. Espelham o exemplo ao vivo de cada página
 * (site/pages/padroes-*.js): a mesma tela, parada no estado que mais ensina.
 */
(function () {
  var S = {};
  var SCREEN_W = 960;

  /* ───────── Peças locais ───────── */

  async function btn(label, variant, iconName, size) {
    var props = { Variante: variant || 'Secundário', Tamanho: size || 'P', Estado: 'Normal' };
    var over = { 'Rótulo': label };
    if (iconName) { over['Ícone'] = true; over['Trocar ícone'] = iconName; }
    return instance(await buttonSet(), props, over);
  }

  async function status(tone, label) {
    if (!LUME.lib.badge) return text(label, { style: 'caption', color: 'color/fg/muted' });
    return LUME.lib.badge(await LUME.lib.badgeSet(), tone, label, { dot: true, size: 'P' });
  }

  function screen(name, o) {
    o = o || {};
    return box(name, { dir: 'V', gap: o.gap === undefined ? 'space/250' : o.gap, pad: o.pad === undefined ? 'space/300' : o.pad, w: o.w || SCREEN_W, fill: 'color/bg/surface', stroke: 'color/border/subtle', radius: 'radius/xl' });
  }

  async function title(t, sub, w) {
    var head = box('Título', { dir: 'V', gap: 'space/050' });
    add(head, await text(t, { style: 'heading-lg', color: 'color/fg/default' }));
    if (sub) add(head, await text(sub, { style: 'body-sm', color: 'color/fg/muted', w: w }));
    return head;
  }

  function checkbox(on) {
    var c = box('Checkbox', { dir: 'H', align: 'center', cross: 'center', w: 18, h: 18, radius: 'radius/xs', fill: on ? 'color/brand/solid' : 'color/bg/field', stroke: on ? null : 'color/border/field' });
    if (on) add(c, icon('check', 14, 'color/brand/on-solid'));
    return c;
  }

  async function avatar(initials, size) {
    var s = size || 32;
    var a = box('Avatar', { dir: 'H', align: 'center', cross: 'center', w: s, h: s, radius: 'radius/full', fill: 'color/bg/selected', stroke: 'color/border/subtle' });
    add(a, await text(initials, { style: s > 40 ? 'label-lg' : 'caption', weight: 'Semi Bold', color: 'color/fg/muted', raw: true }));
    return a;
  }

  async function selectChip(label) {
    var c = box('Seletor · ' + label, { dir: 'H', gap: 'space/075', cross: 'center', pad: [0, 10, 0, 14], h: 36, radius: 'radius/full', fill: 'color/bg/field', stroke: 'color/border/default' });
    add(c, await text(label, { style: 'label-sm', weight: 'Semi Bold', color: 'color/fg/default' }));
    add(c, icon('chevron-down', 14, 'color/fg/subtle'));
    return c;
  }

  async function field(value, o) {
    o = o || {};
    var f = box('Campo', { dir: 'H', gap: 'space/100', cross: o.multiline ? 'start' : 'center', pad: o.multiline ? [10, 'space/150'] : [0, 'space/150'], h: o.multiline ? 88 : 40, w: o.w || 360, radius: o.pill ? 'radius/full' : 'radius/md', fill: 'color/bg/field', stroke: o.focus ? 'color/border/focus' : o.error ? 'color/danger/border' : 'color/border/default' });
    if (o.icon) add(f, icon(o.icon, 16, 'color/fg/subtle'));
    add(f, await text(value, { style: 'body-sm', color: o.placeholder ? 'color/fg/muted' : 'color/fg/default', raw: !o.placeholder && !o.translate }), { grow: true });
    return f;
  }

  async function labeled(label, value, o) {
    o = o || {};
    var col = box(label, { dir: 'V', gap: 'space/075' });
    add(col, await text(label, { style: 'label-sm', color: 'color/fg/default' }));
    add(col, await field(value, o));
    if (o.hint) add(col, await text(o.hint, { style: 'caption', color: o.error ? 'color/danger/fg' : 'color/fg/subtle', w: o.w || 360 }));
    return col;
  }

  function divider(w) {
    var d = shape('Divisor', { w: w || 100, h: 1, fill: 'color/border/subtle' });
    return d;
  }

  async function iconBtn(name) {
    var b = box('Botão de ícone · ' + name, { dir: 'H', align: 'center', cross: 'center', w: 32, h: 32, radius: 'radius/sm' });
    add(b, icon(name, 16, 'color/fg/muted'));
    return b;
  }

  async function rules(list, w) {
    var col = box('Regras', { dir: 'V', gap: 10 });
    for (var r of list) {
      var row = box(r[1], { dir: 'H', gap: 10, cross: 'start' });
      add(row, icon(r[0] ? 'check' : 'x', 16, r[0] ? 'color/success/fg' : 'color/danger/fg'));
      add(row, await text(r[1], { style: 'body-sm', color: 'color/fg/default', w: (w || 480) - 26 }));
      add(col, row);
    }
    return col;
  }

  async function tabs(list, current) {
    var t = box('Abas', { dir: 'H', gap: 'space/050', cross: 'center' });
    for (var i = 0; i < list.length; i++) {
      var on = i === current;
      var tab = box('Aba · ' + list[i][0], { dir: 'H', gap: 'space/075', cross: 'center', pad: [0, 'space/150'], h: 36, radius: 'radius/md', fill: on ? 'color/bg/selected' : null });
      add(tab, await text(list[i][0], { style: 'label-sm', color: on ? 'color/fg/default' : 'color/fg/muted' }));
      if (list[i][1]) {
        var n = box('Contagem', { dir: 'H', align: 'center', cross: 'center', pad: [0, 6], h: 18, radius: 'radius/full', fill: 'color/bg/muted' });
        add(n, await text(list[i][1], { style: 'caption', color: 'color/fg/muted', raw: true }));
        add(tab, n);
      }
      add(t, tab);
    }
    return t;
  }

  /* ───────── 1.1 Listagem de dados ───────── */

  var PEOPLE = [
    ['AR', 'Amanda Ribeiro', 'amanda.ribeiro@lume.app', 'Admin', ['Sucesso', 'Ativo'], '14 de nov.', true],
    ['BN', 'Beatriz Nogueira', 'beatriz.nogueira@lume.app', 'Editor', ['Sucesso', 'Ativo'], '7 de nov.', true],
    ['CF', 'Caio Fernandes', 'caio.fernandes@lume.app', 'Editor', ['Sucesso', 'Ativo'], '31 de out.', false],
    ['DM', 'Daniela Moura', 'daniela.moura@lume.app', 'Leitor', ['Info', 'Convidado'], '—', false],
    ['GP', 'Gustavo Pacheco', 'gustavo.pacheco@lume.app', 'Leitor', ['Neutro', 'Desativado'], '12 de nov.', false],
  ];
  var COLS = [['', 36], ['Pessoa', 320], ['Função', 120], ['Status', 140], ['Último acesso', 180], ['', 40]];

  async function cell(i, node) {
    var c = box('Célula', { dir: 'H', cross: 'center', gap: 'space/100', pad: [0, 'space/100'], w: COLS[i][1], h: 52 });
    if (node) add(c, node);
    return c;
  }

  async function tableRow(p, selecting) {
    var row = box('Pessoa', { dir: 'H', cross: 'center', pad: [0, 'space/100'], fill: selecting && p[6] ? 'color/bg/selected' : null });
    stroke(row, 'color/border/subtle', 0);
    row.strokeTopWeight = 1;
    add(row, await cell(0, checkbox(selecting && p[6])));
    var who = box('Pessoa', { dir: 'H', gap: 10, cross: 'center' });
    add(who, await avatar(p[0]));
    var names = box('Nome e e-mail', { dir: 'V', gap: 0 });
    add(names, await text(p[1], { style: 'label-sm', color: 'color/fg/default', raw: true }));
    add(names, await text(p[2], { style: 'caption', color: 'color/fg/subtle', raw: true }));
    add(who, names);
    add(row, await cell(1, who));
    add(row, await cell(2, await text(p[3], { style: 'body-sm', color: 'color/fg/default' })));
    add(row, await cell(3, await status(p[4][0], p[4][1])));
    add(row, await cell(4, await text(p[5], { style: 'body-sm', color: 'color/fg/muted' })));
    add(row, await cell(5, icon('more-horizontal', 16, 'color/fg/muted')));
    return row;
  }

  async function listingSet() {
    if (S.list && !S.list.removed) return S.list;
    S.list = await variants('padrao-listagem', 'Listagem de dados', ['Normal', 'Seleção'].map(function (st) {
      var selecting = st === 'Seleção';
      return {
        props: { Estado: st },
        build: async function (c) {
          box(c.name, { dir: 'V', gap: 'space/250', pad: 'space/300', w: SCREEN_W, fill: 'color/bg/surface', stroke: 'color/border/subtle', radius: 'radius/xl' }, c);
          var top = box('Cabeçalho', { dir: 'H', align: 'between', cross: 'start' });
          add(top, await title('Pessoas', 'Quem tem acesso a este espaço de trabalho.'));
          var actions = box('Ações', { dir: 'H', gap: 'space/100' });
          add(actions, await btn('Exportar', 'Secundário', 'download'));
          add(actions, await btn('Convidar', 'Primário', 'plus'));
          add(top, actions);
          add(c, top, { fillW: true });

          var bar = box(selecting ? 'Barra de lote' : 'Filtros', { dir: 'H', gap: 'space/100', cross: 'center', h: 40 });
          if (selecting) {
            add(bar, await text('2 selecionadas', { style: 'label-md', color: 'color/fg/default' }));
            add(bar, await btn('Mudar função', 'Secundário'));
            add(bar, await btn('Remover', 'Secundário', 'trash'));
            var spacer = box('Espaço', { dir: 'H' });
            add(bar, spacer, { grow: true });
            add(bar, await btn('Cancelar', 'Ghost'));
          } else {
            add(bar, await field('Buscar por nome ou e-mail', { placeholder: true, icon: 'search', pill: true, w: 340 }));
            add(bar, await selectChip('Função'));
            add(bar, await selectChip('Status'));
          }
          add(c, bar, { fillW: true });

          add(c, await text('22 pessoas', { style: 'caption', color: 'color/fg/subtle' }));
          var table = box('Tabela', { dir: 'V', gap: 0, radius: 'radius/lg', stroke: 'color/border/subtle', clip: true });
          var head = box('Cabeçalho da tabela', { dir: 'H', cross: 'center', pad: [0, 'space/100'] });
          for (var i = 0; i < COLS.length; i++) {
            var h = box('Coluna', { dir: 'H', gap: 'space/050', cross: 'center', pad: [0, 'space/100'], w: COLS[i][1], h: 44 });
            if (i === 0) add(h, checkbox(false));
            else if (COLS[i][0]) {
              add(h, await text(COLS[i][0], { style: 'label-sm', color: i === 1 ? 'color/fg/default' : 'color/fg/muted' }));
              if (i === 1) add(h, icon('arrow-up', 12, 'color/fg/default'));
              if (i === 4) add(h, icon('chevrons-up-down', 12, 'color/fg/subtle'));
            }
            add(head, h);
          }
          add(table, head, { fillW: true });
          for (var p of PEOPLE) add(table, await tableRow(p, selecting), { fillW: true });
          add(c, table, { fillW: true });

          var foot = box('Rodapé', { dir: 'H', align: 'between', cross: 'center' });
          add(foot, await text('1–5 de 22', { style: 'caption', color: 'color/fg/subtle' }));
          var pages = box('Paginação', { dir: 'H', gap: 'space/050', cross: 'center' });
          add(pages, icon('chevron-left', 16, 'color/fg/subtle'));
          for (var n of ['1', '2', '3', '4', '5']) {
            var pg = box('Página ' + n, { dir: 'H', align: 'center', cross: 'center', w: 32, h: 32, radius: 'radius/sm', fill: n === '1' ? 'color/bg/selected' : null, stroke: n === '1' ? 'color/border/subtle' : null });
            add(pg, await text(n, { style: 'label-sm', color: n === '1' ? 'color/fg/default' : 'color/fg/muted', raw: true }));
            add(pages, pg);
          }
          add(pages, icon('chevron-right', 16, 'color/fg/muted'));
          add(foot, pages);
          add(c, foot, { fillW: true });
        },
      };
    }), {
      description: 'Busca, filtros, tabela e paginação. Com seleção, a barra de lote toma o lugar dos filtros, com a contagem.',
      columns: 1,
      gap: 32,
    });
    return S.list;
  }

  defineBlock({
    id: 'padrao-listagem',
    page: 'Componentes',
    row: 'Padrões',
    order: 8,
    group: 'Padrões',
    title: 'Listagem de dados',
    description: 'A tela que todo produto tem: uma lista que a pessoa busca, filtra, ordena e trata em lote. Tudo à vista, nada perdido ao voltar e qualquer ação com volta.',
    tags: ['Padrão', 'Claro · Escuro'],
    build: async function () {
      var set = await listingSet();
      var rulesNode = await rules([
        [true, 'Uma ação principal no topo; o resto vai para o menu da linha.'],
        [true, 'Filtros numa linha só, com a contagem logo abaixo.'],
        [true, 'Remover em lote com Desfazer no aviso, sem “tem certeza?”.'],
        [false, 'Esconder a busca atrás de um ícone.'],
      ], 1000);
      return {
        sections: [{ title: 'Normal e com seleção', description: 'As duas variantes do conjunto.', node: set, span: 2 }, { title: 'Regras', node: rulesNode, span: 2, fill: false }]
          .concat(themed('Listagem de dados', function () { return instance(set, { Estado: 'Normal' }); }, { pad: 24 }).map(function (s) { return Object.assign(s, { span: 2 }); })),
      };
    },
  });

  /* ───────── 1.2 Configurações ───────── */

  async function navItem(label, iconName, on, danger) {
    var it = box(label, { dir: 'H', gap: 'space/100', cross: 'center', pad: [0, 10], h: 36, w: 200, radius: 'radius/md', fill: on ? 'color/bg/selected' : null });
    add(it, icon(iconName, 16, danger ? 'color/danger/fg' : on ? 'color/fg/default' : 'color/fg/muted'));
    add(it, await text(label, { style: 'label-sm', color: danger ? 'color/danger/fg' : on ? 'color/fg/default' : 'color/fg/muted' }));
    return it;
  }

  async function settingsScreen() {
    if (S.settings && !S.settings.removed) return S.settings;
    S.settings = await component('padrao-configuracoes', 'Configurações', async function (c) {
      box(c.name, { dir: 'V', gap: 'space/300', pad: 'space/300', w: SCREEN_W, fill: 'color/bg/surface', stroke: 'color/border/subtle', radius: 'radius/xl' }, c);
      add(c, await title('Configurações', 'Do seu perfil e deste espaço de trabalho.'));
      var cols = box('Colunas', { dir: 'H', gap: 'space/400' });
      var nav = box('Seções', { dir: 'V', gap: 'space/025' });
      add(nav, await text('VOCÊ', { style: 'overline', color: 'color/fg/subtle' }));
      add(nav, await navItem('Perfil', 'user', true));
      add(nav, await navItem('Notificações', 'bell'));
      add(nav, await navItem('Aparência', 'sun'));
      var gap = box('Espaço', { dir: 'V', h: 12 });
      add(nav, gap);
      add(nav, await text('ESPAÇO DE TRABALHO', { style: 'overline', color: 'color/fg/subtle' }));
      add(nav, await navItem('Zona de perigo', 'alert-triangle', false, true));
      add(cols, nav);

      var panel = box('Perfil', { dir: 'V', gap: 'space/250' });
      var head = box('Título da seção', { dir: 'H', gap: 'space/150', cross: 'center' });
      add(head, await text('Perfil', { style: 'heading-sm', color: 'color/fg/default' }));
      add(panel, head);
      add(panel, await text('Como as pessoas veem você no espaço de trabalho.', { style: 'body-sm', color: 'color/fg/muted' }));
      add(panel, await labeled('Nome', 'Ana Lima Duarte', { focus: true }));
      add(panel, await labeled('E-mail', 'ana@lume.app', { hint: 'Se mudar, enviamos um link para confirmar. Até lá, vale o e-mail atual.' }));
      add(panel, await labeled('Sobre você', 'Cuido do design do Lume.', { multiline: true, translate: true }));
      var foot = box('Rodapé', { dir: 'H', gap: 'space/100', cross: 'center', w: 560, pad: ['space/200', 0, 0, 0] });
      stroke(foot, 'color/border/subtle', 0);
      foot.strokeTopWeight = 1;
      add(foot, await text('Alterações não salvas', { style: 'caption', color: 'color/warning/fg' }), { grow: true });
      add(foot, await btn('Descartar', 'Ghost'));
      add(foot, await btn('Salvar', 'Primário'));
      add(panel, foot);
      add(cols, panel);
      add(c, cols);
    }, { description: 'Seções à esquerda, uma por vez à direita. Campos de texto salvam no botão; switches e escolhas salvam na hora.' });
    return S.settings;
  }

  async function dangerZone() {
    if (S.danger && !S.danger.removed) return S.danger;
    S.danger = await component('padrao-zona-perigo', 'Configurações/Zona de perigo', async function (c) {
      box(c.name, { dir: 'H', gap: 'space/200', cross: 'center', pad: 'space/250', w: 480, radius: 'radius/lg', stroke: 'color/danger/border' }, c);
      var t = box('Texto', { dir: 'V', gap: 'space/050' });
      add(t, await text('Excluir espaço de trabalho', { style: 'label-md', color: 'color/fg/default' }));
      add(t, await text('Apaga projetos, arquivos e pessoas. Não tem volta.', { style: 'body-sm', color: 'color/fg/muted', w: 280 }));
      add(c, t, { grow: true });
      add(c, await btn('Excluir…', 'Perigo'));
    }, { description: 'O que não tem volta fica separado, com contorno de perigo. Excluir só libera depois de digitar o nome.' });
    return S.danger;
  }

  async function savedSwitch() {
    if (S.sw && !S.sw.removed) return S.sw;
    S.sw = await component('padrao-salvo-na-hora', 'Configurações/Salvo na hora', async function (c) {
      box(c.name, { dir: 'H', gap: 'space/200', cross: 'center', pad: [0, 0], w: 420 }, c);
      var t = box('Texto', { dir: 'V', gap: 'space/025' });
      var line = box('Rótulo', { dir: 'H', gap: 'space/100', cross: 'center' });
      add(line, await text('Resumo semanal', { style: 'label-md', color: 'color/fg/default' }));
      var ok = box('Salvo', { dir: 'H', gap: 'space/050', cross: 'center' });
      add(ok, icon('check', 14, 'color/success/fg'));
      add(ok, await text('Salvo', { style: 'caption', color: 'color/success/fg' }));
      add(line, ok);
      add(t, line);
      add(t, await text('Toda segunda, às 9h.', { style: 'body-sm', color: 'color/fg/muted' }));
      add(c, t, { grow: true });
      var sw = box('Switch', { dir: 'H', align: 'end', cross: 'center', pad: [0, 2], w: 36, h: 20, radius: 'radius/full', fill: 'color/brand/solid' });
      add(sw, shape('Alça', { ellipse: true, w: 16, h: 16, fill: 'color/brand/on-solid' }));
      add(c, sw);
    }, { description: 'Switch salva na hora e diz “Salvo” ao lado do título, sem botão.' });
    return S.sw;
  }

  defineBlock({
    id: 'padrao-configuracoes',
    page: 'Componentes',
    row: 'Padrões',
    order: 9,
    group: 'Padrões',
    title: 'Configurações',
    description: 'Onde a pessoa ajusta o produto do jeito dela. Seções curtas, o que salva na hora diz que salvou, e o que não tem volta fica separado.',
    tags: ['Padrão', 'Claro · Escuro'],
    build: async function () {
      var main = await settingsScreen();
      var sw = await savedSwitch();
      var danger = await dangerZone();
      return {
        sections: [
          { title: 'Salvo na hora', description: 'Escolhas que valem na hora não pedem botão.', node: sw, fill: false },
          { title: 'Zona de perigo', description: 'No fim da lista, longe do resto.', node: danger, fill: false },
        ].concat(themed('Configurações', function () { return main.createInstance(); }, { pad: 24 }).map(function (s) { return Object.assign(s, { span: 2 }); })),
      };
    },
  });

  /* ───────── 1.3 Avisos e confirmações ───────── */

  async function toastNode(msgText, action) {
    var t = box('Toast', { dir: 'H', gap: 'space/150', cross: 'center', pad: [10, 'space/200'], w: 360, radius: 'radius/lg', fill: 'color/bg/raised', stroke: 'color/border/default' });
    shadow(t, 'md');
    add(t, icon('check-circle', 18, 'color/success/fg'));
    add(t, await text(msgText, { style: 'body-sm', color: 'color/fg/default' }), { grow: true });
    if (action) add(t, await text(action, { style: 'label-sm', color: 'color/fg/brand' }));
    return t;
  }

  async function noticeSet() {
    if (S.notice && !S.notice.removed) return S.notice;
    S.notice = await variants('padrao-avisos', 'Avisos', ['Toast', 'Alerta', 'Banner', 'Modal'].map(function (kind) {
      return {
        props: { Tipo: kind },
        build: async function (c) {
          if (kind === 'Toast') {
            box(c.name, { dir: 'V', gap: 'space/100', w: 400 }, c);
            add(c, await toastNode('Rascunho salvo.'));
            add(c, await toastNode('3 itens arquivados.', 'Desfazer'));
          } else if (kind === 'Alerta') {
            box(c.name, { dir: 'H', gap: 'space/150', pad: 'space/200', w: 400, radius: 'radius/lg', fill: 'color/danger/subtle', stroke: 'color/danger/border' }, c);
            add(c, icon('alert-circle', 18, 'color/danger/fg'));
            var col = box('Texto', { dir: 'V', gap: 'space/050' });
            add(col, await text('Não dá para publicar ainda', { style: 'label-md', color: 'color/fg/default' }));
            add(col, await text('2 seções estão sem título. Dê um título a elas e publique de novo.', { style: 'body-sm', color: 'color/fg/muted', w: 320 }));
            add(c, col, { grow: true });
          } else if (kind === 'Banner') {
            box(c.name, { dir: 'H', gap: 'space/150', cross: 'center', pad: [10, 'space/200'], w: 400, radius: 'radius/md', fill: 'color/warning/subtle', stroke: 'color/warning/border' }, c);
            add(c, icon('wifi-off', 18, 'color/warning/fg'));
            add(c, await text('Sem conexão. O que você fizer fica salvo aqui e sobe quando a conexão voltar.', { style: 'body-sm', color: 'color/fg/default', w: 330 }), { grow: true });
          } else {
            box(c.name, { dir: 'V', gap: 'space/250', pad: 'space/300', w: 400, radius: 'radius/2xl', fill: 'color/bg/raised', stroke: 'color/border/default' }, c);
            shadow(c, 'md');
            var t = box('Texto', { dir: 'V', gap: 'space/075' });
            add(t, await text('Excluir “Relatório de outubro”?', { style: 'heading-sm', color: 'color/fg/default', w: 336 }));
            add(t, await text('As 3 seções e os comentários somem para todo mundo. Não tem como desfazer.', { style: 'body-sm', color: 'color/fg/muted', w: 336 }));
            add(c, t, { fillW: true });
            var actions = box('Ações', { dir: 'H', gap: 'space/100', align: 'end' });
            add(actions, await btn('Cancelar', 'Secundário', null, 'M'));
            add(actions, await btn('Excluir', 'Perigo', null, 'M'));
            add(c, actions, { fillW: true });
          }
        },
      };
    }), {
      description: 'Do mais leve ao que interrompe: toast passa, alerta fica perto do problema, banner vale para a tela inteira, modal só para o que não tem volta.',
      columns: 2,
      gap: 32,
    });
    return S.notice;
  }

  defineBlock({
    id: 'padrao-avisos',
    page: 'Componentes',
    row: 'Padrões',
    order: 10,
    group: 'Padrões',
    title: 'Avisos e confirmações',
    description: 'Cada aviso no lugar certo: o que passa some sozinho, o que bloqueia fica perto do problema, e o que tem volta não pergunta “tem certeza?”, oferece Desfazer.',
    tags: ['Padrão', 'Claro · Escuro'],
    build: async function () {
      var set = await noticeSet();
      var rulesNode = await rules([
        [true, 'Toast para o que deu certo; com Desfazer quando a ação tem volta.'],
        [true, 'Alerta perto do que precisa de conserto, dizendo como consertar.'],
        [true, 'Modal só para o que não tem volta, com o nome do que some no título.'],
        [false, '“Tem certeza?” para arquivar, mover ou qualquer coisa que dá para desfazer.'],
      ], 1000);
      return {
        sections: [{ title: 'Regras', node: rulesNode, span: 2, fill: false }]
          .concat(themed('Avisos', function () { return set; }, { pad: 24 }).map(function (s) {
            return Object.assign(s, { span: 2, node: function () { var row = box('Avisos', { dir: 'H', gap: 24, wrap: true, rowGap: 24, w: 960 }); ['Toast', 'Alerta', 'Banner', 'Modal'].forEach(function (k) { add(row, instance(set, { Tipo: k })); }); return row; } });
          })),
      };
    },
  });

  /* ───────── 1.4 Detalhe e edição ───────── */

  var PROPS = [
    ['Nome', 'Amanda Ribeiro', true, true],
    ['Função', 'Admin', true, false],
    ['Equipe', 'Design', true, false],
    ['Telefone', null, false, false],
    ['E-mail', 'amanda.ribeiro@lume.app', false, true],
  ];

  async function detailRow(p, editing, w) {
    var row = box(p[0], { dir: 'H', cross: 'center', h: 48, w: w || 560 });
    stroke(row, 'color/border/subtle', 0);
    row.strokeBottomWeight = 1;
    var l = box('Rótulo', { dir: 'H', w: w ? 110 : 160 });
    add(l, await text(p[0], { style: 'body-sm', color: 'color/fg/muted' }));
    add(row, l);
    if (editing) {
      var ed = box('Edição', { dir: 'H', gap: 'space/100', cross: 'center' });
      add(ed, await field(p[1], { focus: true, w: w ? 150 : 220, translate: !p[3] }));
      add(ed, await btn('Salvar', 'Primário'));
      add(ed, await btn('Cancelar', 'Ghost'));
      add(row, ed, { grow: true });
      return row;
    }
    if (p[1] === null) {
      var addLink = box('Adicionar', { dir: 'H', gap: 'space/075', cross: 'center' });
      add(addLink, icon('plus', 14, 'color/fg/subtle'));
      add(addLink, await text('Adicionar telefone', { style: 'body-sm', color: 'color/fg/subtle' }));
      add(row, addLink, { grow: true });
    } else {
      add(row, await text(p[1], { style: 'body-sm', color: 'color/fg/default', raw: p[3] }), { grow: true });
    }
    if (p[2]) add(row, icon('pencil', 14, 'color/fg/subtle'));
    return row;
  }

  async function detailScreen() {
    if (S.detail && !S.detail.removed) return S.detail;
    S.detail = await component('padrao-detalhe', 'Detalhe e edição', async function (c) {
      box(c.name, { dir: 'V', gap: 'space/250', pad: 'space/300', w: SCREEN_W, fill: 'color/bg/surface', stroke: 'color/border/subtle', radius: 'radius/xl' }, c);
      var crumbs = box('Trilha', { dir: 'H', gap: 'space/075', cross: 'center' });
      add(crumbs, await text('Pessoas', { style: 'body-sm', color: 'color/fg/muted' }));
      add(crumbs, icon('chevron-right', 14, 'color/fg/subtle'));
      add(crumbs, await text('Amanda Ribeiro', { style: 'body-sm', color: 'color/fg/default', raw: true }));
      add(c, crumbs);

      var head = box('Cabeçalho', { dir: 'H', gap: 'space/200', cross: 'center' });
      add(head, await avatar('AR', 56));
      var who = box('Quem', { dir: 'V', gap: 'space/050' });
      var line = box('Nome e status', { dir: 'H', gap: 10, cross: 'center' });
      add(line, await text('Amanda Ribeiro', { style: 'heading-lg', color: 'color/fg/default', raw: true }));
      add(line, await status('Sucesso', 'Ativo'));
      add(who, line);
      add(who, await text('amanda.ribeiro@lume.app · Admin', { style: 'body-sm', color: 'color/fg/muted', raw: true }));
      add(head, who, { grow: true });
      add(head, await btn('Copiar link', 'Secundário', 'link'));
      add(head, await iconBtn('more-horizontal'));
      add(c, head, { fillW: true });

      var t = await tabs([['Visão geral'], ['Atividade', '4'], ['Acesso']], 0);
      add(c, t);
      add(c, divider(SCREEN_W - 48), { fillW: true });

      var cols = box('Colunas', { dir: 'H', gap: 'space/500' });
      var list = box('Detalhes', { dir: 'V', gap: 0 });
      add(list, await text('DETALHES', { style: 'overline', color: 'color/fg/subtle' }));
      for (var p of PROPS) add(list, await detailRow(p, false));
      add(cols, list);
      var aside = box('Resumo', { dir: 'V', gap: 'space/150' });
      add(aside, await text('RESUMO', { style: 'overline', color: 'color/fg/subtle' }));
      for (var s of [['Entrou', '1 de novembro de 2026'], ['Último acesso', '14 de nov., 09:12'], ['Projetos', '4']]) {
        var item = box(s[0], { dir: 'V', gap: 'space/025' });
        add(item, await text(s[0], { style: 'caption', color: 'color/fg/subtle' }));
        add(item, await text(s[1], { style: 'label-sm', color: 'color/fg/default' }));
        add(aside, item);
      }
      add(cols, aside);
      add(c, cols);
    }, { description: 'Cabeçalho com quem é e o que dá para fazer, abas para o que é muito, e cada valor editável no próprio lugar (lápis).' });
    return S.detail;
  }

  async function inlineEdit() {
    if (S.edit && !S.edit.removed) return S.edit;
    S.edit = await component('padrao-edicao-no-lugar', 'Detalhe e edição/Edição no lugar', async function (c) {
      box(c.name, { dir: 'V', gap: 0, w: 480 }, c);
      add(c, await detailRow(['Equipe', 'Design', true, false], true, 480));
      add(c, await detailRow(['Telefone', null, false, false], false, 480));
    }, { description: 'Clique no valor: vira campo com Salvar e Cancelar. Enter salva, Esc desiste. Valor vazio é o próprio botão de adicionar.' });
    return S.edit;
  }

  defineBlock({
    id: 'padrao-detalhe',
    page: 'Componentes',
    row: 'Padrões',
    order: 11,
    group: 'Padrões',
    title: 'Detalhe e edição',
    description: 'A página de um item: quem é, o que dá para fazer e o histórico. Editar acontece no lugar, um valor por vez, sem trocar de tela.',
    tags: ['Padrão', 'Claro · Escuro'],
    build: async function () {
      var main = await detailScreen();
      var edit = await inlineEdit();
      var rulesNode = await rules([
        [true, 'Um valor por vez, no próprio lugar; o resto da página continua igual.'],
        [true, 'Erro na própria linha, com o valor digitado ainda lá.'],
        [false, 'Um botão “Editar” que transforma a página inteira num formulário.'],
      ], 480);
      return {
        sections: [
          { title: 'Edição no lugar', description: 'A linha em edição e um valor vazio.', node: edit, fill: false },
          { title: 'Regras', node: rulesNode, fill: false },
        ].concat(themed('Detalhe e edição', function () { return main.createInstance(); }, { pad: 24 }).map(function (s) { return Object.assign(s, { span: 2 }); })),
      };
    },
  });

  /* ───────── 1.5 Painel de indicadores ───────── */

  var KPIS = [
    ['Visitas', '28.981', '+4,5%', true],
    ['Pessoas', '12.213', '+4,3%', true],
    ['Código copiado', '3.310', '+2,9%', true],
    ['Buscas sem resultado', '209', '−6,3%', true],
  ];
  var TOP = [['Botão', 4057], ['Cores', 3188], ['Tabela', 2318], ['Modal', 1884], ['Ícones', 1739]];

  async function kpi(k, w) {
    var t = box(k[0], { dir: 'V', gap: 'space/075', pad: 'space/200', w: w, radius: 'radius/lg', fill: 'color/bg/surface', stroke: 'color/border/subtle' });
    add(t, await text(k[0], { style: 'caption', color: 'color/fg/muted' }));
    add(t, await text(k[1], { style: 'heading-lg', weight: 'Semi Bold', color: 'color/fg/default', raw: LANG === 'pt-BR', name: 'Valor' }));
    var d = box('Variação', { dir: 'H', gap: 'space/050', cross: 'center' });
    var down = k[2].charAt(0) === '−';
    add(d, icon(down ? 'trending-down' : 'trending-up', 14, k[3] ? 'color/success/fg' : 'color/danger/fg'));
    add(d, await text(k[2], { style: 'caption', weight: 'Semi Bold', color: k[3] ? 'color/success/fg' : 'color/danger/fg', raw: LANG === 'pt-BR', name: 'Variação' }));
    add(t, d);
    add(t, await text('vs. 30 dias anteriores', { style: 'caption', color: 'color/fg/subtle' }));
    return t;
  }

  async function dashboardScreen() {
    if (S.dash && !S.dash.removed) return S.dash;
    S.dash = await component('padrao-painel', 'Painel de indicadores', async function (c) {
      box(c.name, { dir: 'V', gap: 'space/250', pad: 'space/300', w: SCREEN_W, fill: 'color/bg/canvas', stroke: 'color/border/subtle', radius: 'radius/xl' }, c);
      var top = box('Cabeçalho', { dir: 'H', align: 'between', cross: 'end' });
      var h = box('Título', { dir: 'V', gap: 'space/050' });
      add(h, await text('Como a documentação está sendo usada', { style: 'heading-lg', color: 'color/fg/default' }));
      var upd = box('Atualização', { dir: 'H', gap: 'space/075', cross: 'center' });
      add(upd, await text('Atualizado às 09:40', { style: 'caption', color: 'color/fg/subtle' }));
      add(upd, icon('refresh', 14, 'color/fg/subtle'));
      add(h, upd);
      add(top, h);
      var seg = box('Período', { dir: 'H', gap: 2, pad: 2, radius: 'radius/full', fill: 'color/bg/muted' });
      for (var p of ['7 dias', '30 dias', '90 dias']) {
        var on = p === '30 dias';
        var o = box(p, { dir: 'H', align: 'center', cross: 'center', pad: [0, 'space/150'], h: 30, radius: 'radius/full', fill: on ? 'color/bg/raised' : null, stroke: on ? 'color/border/subtle' : null });
        add(o, await text(p, { style: 'label-sm', color: on ? 'color/fg/default' : 'color/fg/muted' }));
        add(seg, o);
      }
      add(top, seg);
      add(c, top, { fillW: true });

      var row = box('Indicadores', { dir: 'H', gap: 'space/150' });
      for (var k of KPIS) add(row, await kpi(k, 216));
      add(c, row, { fillW: true });

      var bottom = box('Gráfico e atenção', { dir: 'H', gap: 'space/150' });
      var chart = box('Páginas mais vistas', { dir: 'V', gap: 'space/150', pad: 'space/250', w: 540, radius: 'radius/lg', fill: 'color/bg/surface', stroke: 'color/border/subtle' });
      var ch = box('Título do gráfico', { dir: 'V', gap: 'space/025' });
      add(ch, await text('Páginas mais vistas', { style: 'label-md', color: 'color/fg/default' }));
      add(ch, await text('30 dias', { style: 'caption', color: 'color/fg/subtle' }));
      add(chart, ch);
      var max = TOP[0][1];
      for (var t of TOP) {
        var bar = box(t[0], { dir: 'H', gap: 'space/100', cross: 'center' });
        var lab = box('Rótulo', { dir: 'H', align: 'end', w: 64 });
        add(lab, await text(t[0], { style: 'caption', color: 'color/fg/muted' }));
        add(bar, lab);
        add(bar, shape('Barra', { w: Math.round(360 * t[1] / max), h: 16, radius: 'radius/xs', fill: 'color/chart/series/1' }));
        add(bar, await text(LANG === 'pt-BR' ? t[1].toLocaleString('pt-BR') : String(t[1]).replace(/\B(?=(\d{3})+$)/g, LANG === 'en' ? ',' : '.'), { style: 'caption', weight: 'Semi Bold', color: 'color/fg/default', raw: true }));
        add(chart, bar);
      }
      add(bottom, chart);

      var att = box('Pede atenção', { dir: 'V', gap: 'space/200', pad: 'space/250', radius: 'radius/lg', fill: 'color/bg/surface', stroke: 'color/border/subtle' });
      add(att, await text('Pede atenção', { style: 'label-md', color: 'color/fg/default' }));
      for (var a of [['search', '“datepicker” buscado 38 vezes sem resultado', 'A página se chama Seletor de data. Um sinônimo na busca resolve.', 'Ver buscas'], ['trending-down', 'Tokens perdeu 24% das visitas', 'Desde que saiu do menu Recursos.', 'Abrir a página']]) {
        var item = box(a[1], { dir: 'H', gap: 'space/150' });
        var ic = box('Ícone', { dir: 'H', align: 'center', cross: 'center', w: 28, h: 28, radius: 'radius/full', fill: 'color/bg/muted' });
        add(ic, icon(a[0], 14, 'color/fg/muted'));
        add(item, ic);
        var tx = box('Texto', { dir: 'V', gap: 'space/050' });
        add(tx, await text(a[1], { style: 'label-sm', color: 'color/fg/default', w: 260 }));
        add(tx, await text(a[2], { style: 'caption', color: 'color/fg/muted', w: 260 }));
        var link = box('Link', { dir: 'H', gap: 'space/050', cross: 'center' });
        add(link, await text(a[3], { style: 'label-sm', color: 'color/fg/default' }));
        add(link, icon('arrow-right', 12, 'color/fg/default'));
        add(tx, link);
        add(item, tx);
        add(att, item);
      }
      add(bottom, att, { grow: true });
      add(c, bottom, { fillW: true });
    }, { description: 'Uma pergunta no título, quatro números comparados com o período anterior, um gráfico principal e a lista do que pede atenção.' });
    return S.dash;
  }

  defineBlock({
    id: 'padrao-painel',
    page: 'Componentes',
    row: 'Padrões',
    order: 12,
    group: 'Padrões',
    title: 'Painel de indicadores',
    description: 'Um painel responde a uma pergunta. Poucos números, sempre comparados, um gráfico que conta a história e a lista do que precisa de alguém.',
    tags: ['Padrão', 'Claro · Escuro'],
    build: async function () {
      var main = await dashboardScreen();
      var rulesNode = await rules([
        [true, 'No máximo quatro indicadores, cada um com a comparação.'],
        [true, 'Verde é o que melhorou: menos buscas sem resultado também é verde.'],
        [true, 'Trocar o período muda números e gráficos juntos.'],
        [false, 'Doze cartões do mesmo tamanho, sem dizer o que importa.'],
      ], 1000);
      return {
        sections: [{ title: 'Regras', node: rulesNode, span: 2, fill: false }]
          .concat(themed('Painel de indicadores', function () { return main.createInstance(); }, { pad: 24 }).map(function (s) { return Object.assign(s, { span: 2 }); })),
      };
    },
  });

  /* ───────── 1.7 Carregamento e erros ───────── */

  function skel(w, h, r) {
    return shape('Esqueleto', { w: w, h: h || 12, radius: r || 'radius/xs', fill: 'color/bg/muted' });
  }

  async function loadingSet() {
    if (S.load && !S.load.removed) return S.load;
    S.load = await variants('padrao-carregamento', 'Carregamento e erros', ['Carregando', 'Parte falhou', 'Erro ao salvar', 'Não encontrada'].map(function (st) {
      return {
        props: { Estado: st },
        build: async function (c) {
          box(c.name, { dir: 'V', gap: 'space/200', pad: 'space/300', w: 460, h: 340, fill: 'color/bg/surface', stroke: 'color/border/subtle', radius: 'radius/xl' }, c);
          if (st === 'Não encontrada') {
            c.primaryAxisAlignItems = 'CENTER';
            c.counterAxisAlignItems = 'CENTER';
            var ic = box('Ícone', { dir: 'H', align: 'center', cross: 'center', w: 48, h: 48, radius: 'radius/full', fill: 'color/bg/muted' });
            add(ic, icon('search-x', 22, 'color/fg/muted'));
            add(c, ic);
            add(c, await text('Página não encontrada', { style: 'heading-sm', color: 'color/fg/default', align: 'center' }));
            add(c, await text('O endereço pode ter mudado ou o projeto foi excluído.', { style: 'body-sm', color: 'color/fg/muted', align: 'center', w: 300 }));
            add(c, await btn('Voltar ao início', 'Secundário', 'home'));
            return;
          }
          add(c, await title('Site novo', '3 telas · 2 pessoas'));
          var card = box('Comentários', { dir: 'V', gap: 'space/150', pad: 'space/200', radius: 'radius/lg', stroke: 'color/border/subtle' });
          add(card, await text('COMENTÁRIOS', { style: 'overline', color: 'color/fg/subtle' }));
          if (st === 'Carregando') {
            for (var i = 0; i < 2; i++) {
              var r = box('Linha', { dir: 'H', gap: 'space/150', cross: 'center' });
              add(r, shape('Esqueleto', { ellipse: true, w: 28, h: 28, fill: 'color/bg/muted' }));
              var col = box('Texto', { dir: 'V', gap: 'space/075' });
              add(col, skel(90));
              add(col, skel(i ? 180 : 240));
              add(r, col);
              add(card, r);
            }
          } else if (st === 'Parte falhou') {
            var err = box('Erro', { dir: 'V', gap: 'space/100', cross: 'start' });
            add(err, await text('Não foi possível carregar os comentários.', { style: 'body-sm', color: 'color/fg/default' }));
            add(err, await btn('Tentar de novo', 'Secundário', 'refresh'));
            add(card, err);
          } else {
            for (var cm of [['B', 'Bruno', 'O botão de preços pode subir um pouco?'], ['A', 'Ana', 'Feito, e troquei o texto do contato.']]) {
              var rr = box('Comentário', { dir: 'H', gap: 'space/150', cross: 'center' });
              add(rr, await avatar(cm[0], 28));
              var cc = box('Texto', { dir: 'V', gap: 0 });
              add(cc, await text(cm[1], { style: 'label-sm', color: 'color/fg/default', raw: true }));
              add(cc, await text(cm[2], { style: 'caption', color: 'color/fg/muted' }));
              add(rr, cc);
              add(card, rr);
            }
          }
          add(c, card, { fillW: true });
          if (st === 'Erro ao salvar') {
            var al = box('Alerta', { dir: 'H', gap: 'space/100', cross: 'center', pad: ['space/100', 'space/150'], radius: 'radius/md', fill: 'color/danger/subtle', stroke: 'color/danger/border' });
            add(al, icon('alert-circle', 16, 'color/danger/fg'));
            add(al, await text('Não salvou. Seu texto continua aqui.', { style: 'body-sm', color: 'color/fg/default' }), { grow: true });
            add(al, await text('Tentar de novo', { style: 'label-sm', color: 'color/fg/default' }));
            add(c, al, { fillW: true });
          }
          var foot = box('Rodapé', { dir: 'H', align: 'end' });
          add(foot, await btn('Salvar notas', 'Primário'));
          add(c, foot, { fillW: true });
        },
      };
    }), {
      description: 'Esqueleto com a forma do que vem; erro só na parte que falhou; falha ao salvar sem perder o texto; página não encontrada com um caminho de volta.',
      columns: 2,
      gap: 32,
    });
    return S.load;
  }

  defineBlock({
    id: 'padrao-carregamento',
    page: 'Componentes',
    row: 'Padrões',
    order: 13,
    group: 'Padrões',
    title: 'Carregamento e erros',
    description: 'O que a pessoa vê enquanto espera e quando algo dá errado. A tela não pula, o erro fica na parte que falhou e nada do que ela escreveu se perde.',
    tags: ['Padrão', 'Claro · Escuro'],
    build: async function () {
      var set = await loadingSet();
      var rulesNode = await rules([
        [true, 'Esqueleto com a forma do conteúdo, para nada pular quando ele chega.'],
        [true, 'Depois de alguns segundos, diga que está demorando e ofereça cancelar.'],
        [true, 'Erro por parte: o resto da tela continua funcionando.'],
        [false, 'Uma tela inteira de erro porque um cartão não carregou.'],
      ], 1000);
      return {
        sections: [{ title: 'Regras', node: rulesNode, span: 2, fill: false }]
          .concat(themed('Carregamento e erros', function () { var row = box('Estados', { dir: 'H', gap: 24, wrap: true, rowGap: 24, w: 960 }); ['Carregando', 'Parte falhou', 'Erro ao salvar', 'Não encontrada'].forEach(function (k) { add(row, instance(set, { Estado: k })); }); return row; }, { pad: 24 }).map(function (s) { return Object.assign(s, { span: 2 }); })),
      };
    },
  });
})();
