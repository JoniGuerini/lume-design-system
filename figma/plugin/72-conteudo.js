/**
 * Conteúdo: Card, Calendário, Linha do tempo, Lista de definições e Tecla.
 * Espelha ds/components/content.css, surfaces.css, calendar.css e chip.css.
 */
(function () {
  var C = {};

  /* ───────── Card ───────── */

  async function cardSet() {
    if (C.card && !C.card.removed) return C.card;
    C.card = await variants('card', 'Card', [['Simples', 'Normal'], ['Clicável', 'Normal'], ['Clicável', 'Hover'], ['Clicável', 'Foco']].map(function (k) {
      return {
        props: { Tipo: k[0], Estado: k[1] },
        build: async function (c) {
          box(c.name, { dir: 'V', gap: 'space/075', pad: 'space/300', w: 240, radius: 'radius/xl', fill: 'color/bg/surface' }, c);
          stroke(c, k[1] === 'Foco' ? 'color/border/focus' : k[1] === 'Hover' ? 'color/border/strong' : 'color/border/subtle', k[1] === 'Foco' ? 'focus-ring/width' : 1);
          add(c, await text('Relatório mensal', { style: 'heading-sm', color: 'color/fg/default', prop: 'Título', name: 'Título' }));
          add(c, await text('Receita, novos clientes e o que mudou desde o mês passado.', { style: 'body-sm', color: 'color/fg/muted', w: 192, prop: 'Texto', name: 'Texto' }));
        },
      };
    }), { description: 'Só um contêiner; o clicável é um link inteiro.', columns: 2, gap: 16, rowGap: 16, props: { 'Título': ['TEXT', 'Relatório mensal'], 'Texto': ['TEXT', 'Receita, novos clientes e o que mudou desde o mês passado.'] } });
    return C.card;
  }

  defineBlock({
    id: 'card',
    page: 'Componentes',
    row: 'Dados e conteúdo',
    order: 6,
    group: 'Dados e conteúdo',
    title: 'Card',
    description: 'A superfície básica para agrupar conteúdo. Separa uma coisa da outra com fundo e contorno finos, sem sombra.',
    build: async function () {
      var set = await cardSet();
      return {
        sections: [{ title: 'Tipos e estados', description: 'Cantos de 20 px e respiro de 24 px.', span: 2, node: set, fill: false }]
          .concat(themed('Card', function () { return instance(set, { Tipo: 'Simples', Estado: 'Normal' }); })),
      };
    },
  });

  /* ───────── Linha do tempo ───────── */

  var TONES = {
    Neutro: ['color/bg/muted', 'color/fg/muted'],
    Marca: ['color/brand/solid', 'color/brand/on-solid'],
    Sucesso: ['color/success/subtle', 'color/success/fg'],
    'Atenção': ['color/warning/subtle', 'color/warning/fg'],
    Perigo: ['color/danger/subtle', 'color/danger/fg'],
  };

  async function eventSet() {
    if (C.event && !C.event.removed) return C.event;
    var items = [];
    Object.keys(TONES).forEach(function (tone) {
      [['Com ícone', 'check'], ['Com ponto', null]].forEach(function (m) {
        items.push({
          props: { Tom: tone, Marcador: m[0] },
          build: async function (c) {
            box(c.name, { dir: 'H', gap: 'space/150', w: 240 }, c);
            var mk = box('Marcador', { dir: 'H', align: 'center', cross: 'center', w: 24, h: 24, radius: 'radius/full', fill: TONES[tone][0] });
            if (m[1]) add(mk, icon(m[1], 14, TONES[tone][1]));
            else add(mk, shape('Ponto', { w: 8, h: 8, ellipse: true, fill: TONES[tone][1] }));
            add(c, mk);
            var col = box('Conteúdo', { dir: 'V', gap: 2, pad: [2, 0, 0, 0] });
            add(col, await text('Pedido entregue', { style: 'label-md', color: 'color/fg/default', prop: 'Título', name: 'Título' }));
            add(col, await text('Recebido por Ana', { style: 'body-sm', color: 'color/fg/muted', prop: 'Texto', name: 'Texto' }));
            add(col, await text('8 de nov, 14:20', { style: 'caption', color: 'color/fg/subtle', prop: 'Data', name: 'Data' }));
            add(c, col, { grow: true });
          },
        });
      });
    });
    C.event = await variants('evento', 'Linha do tempo/Evento', items, { description: 'Um evento. O tom reforça; o sentido está no título.', columns: 2, gap: 24, rowGap: 16, props: { 'Título': ['TEXT', 'Pedido entregue'], 'Texto': ['TEXT', 'Recebido por Ana'], 'Data': ['TEXT', '8 de nov, 14:20'] } });
    return C.event;
  }

  async function timeline(set) {
    var t = box('Linha do tempo', { dir: 'V', gap: 0, w: 280 });
    var rows = [['Sucesso', 'Pedido entregue', 'Recebido por Ana', '8 de nov, 14:20'], ['Marca', 'Saiu para entrega', 'Previsão para hoje', '8 de nov, 08:05'], ['Neutro', 'Pedido criado', 'Por Bruno', '7 de nov, 09:30']];
    rows.forEach(function (r, i) {
      add(t, instance(set, { Tom: r[0], Marcador: 'Com ícone' }, { 'Título': L(r[1]), 'Texto': L(r[2]), 'Data': L(r[3]) }));
      if (i < rows.length - 1) {
        var wire = box('Fio', { dir: 'H', pad: [4, 0, 4, 12], h: 24 });
        add(wire, shape('Linha', { w: 1, h: 16, fill: 'color/border/default' }));
        add(t, wire);
      }
    });
    return t;
  }

  defineBlock({
    id: 'linha-do-tempo',
    page: 'Componentes',
    row: 'Dados e conteúdo',
    order: 7,
    group: 'Dados e conteúdo',
    title: 'Linha do tempo',
    description: 'Eventos em ordem, como o histórico de um pedido ou a atividade de um projeto. Mostra o que aconteceu, quando e quem fez.',
    build: async function () {
      var set = await eventSet();
      return {
        sections: [
          { title: 'Tons e marcadores', description: 'Reserve a cor para o que merece destaque.', span: 2, node: set, fill: false },
          { title: 'Montada', description: 'Um fio liga os eventos, do mais novo para o mais antigo.', frame: true, node: function () { return timeline(set); } },
        ].concat(themed('Linha do tempo', function () { return timeline(set); }, { pad: 24 })),
      };
    },
  });

  /* ───────── Lista de definições ───────── */

  var DL = [['Cliente', 'Ana Lima'], ['E-mail', 'ana@lume.dev'], ['Plano', 'Equipe'], ['Criado em', '8 de novembro']];

  async function dlSet() {
    if (C.dl && !C.dl.removed) return C.dl;
    C.dl = await variants('lista-definicoes', 'Lista de definições', ['Simples', 'Com linhas', 'Em colunas'].map(function (k) {
      return {
        props: { 'Disposição': k },
        build: async function (c) {
          var stacked = k === 'Em colunas';
          box(c.name, stacked ? { dir: 'H', wrap: true, gap: 'space/200', rowGap: 'space/200', w: 300 } : { dir: 'V', gap: k === 'Simples' ? 'space/100' : 0, w: 300 }, c);
          for (var r of DL) {
            var row = box('Par', stacked ? { dir: 'V', gap: 2, w: 140 } : { dir: 'H', gap: 'space/200', cross: 'center', pad: k === 'Com linhas' ? ['space/150', 0] : undefined });
            if (k === 'Com linhas') {
              stroke(row, 'color/border/subtle', 1, { align: 'INSIDE' });
              row.strokeTopWeight = 0;
              row.strokeLeftWeight = 0;
              row.strokeRightWeight = 0;
            }
            add(row, await text(r[0], { style: 'body-sm', color: 'color/fg/subtle', w: stacked ? undefined : 100 }));
            add(row, await text(r[1], { style: 'body-sm', color: 'color/fg/default', raw: r[1].indexOf('@') > 0 || r[1] === 'Ana Lima' }));
            add(c, row, stacked ? undefined : { fillW: true });
          }
        },
      };
    }), { description: 'Rótulo ao lado do valor, com ou sem linhas, ou em cima, para caber em colunas.', columns: 2, gap: 32, rowGap: 24 });
    return C.dl;
  }

  defineBlock({
    id: 'lista-definicoes',
    page: 'Componentes',
    row: 'Dados e conteúdo',
    order: 8,
    group: 'Dados e conteúdo',
    title: 'Lista de definições',
    description: 'Pares de rótulo e valor, como numa ficha de detalhes. Mais leve que uma tabela quando só há um registro para mostrar.',
    build: async function () {
      var set = await dlSet();
      return {
        sections: [{ title: 'Disposições', description: 'Em contêiner estreito, o rótulo sobe para cima do valor.', span: 2, node: set, fill: false }]
          .concat(themed('Lista de definições', function () { return instance(set, { 'Disposição': 'Com linhas' }); })),
      };
    },
  });

  /* ───────── Tecla ───────── */

  async function kbdComponent() {
    if (C.kbd && !C.kbd.removed) return C.kbd;
    C.kbd = await component('tecla', 'Tecla', async function (c) {
      box(c.name, { dir: 'H', align: 'center', cross: 'center', pad: [0, 5], h: 20, radius: 'radius/xs', fill: 'color/bg/hover', stroke: 'color/border/default' }, c);
      c.minWidth = 20;
      var t = await text('Esc', { style: 'label-sm', color: 'color/fg/subtle', raw: true, size: 11, name: 'Tecla' });
      add(c, t);
      c.addComponentProperty(Lg('Tecla'), 'TEXT', 'Esc');
      var prop = Object.keys(c.componentPropertyDefinitions)[0];
      t.componentPropertyReferences = { characters: prop };
    }, { description: 'Uma tecla por etiqueta: um atalho de duas teclas são duas etiquetas.' });
    return C.kbd;
  }

  async function keys(cmp, list) {
    var r = box('Atalho', { dir: 'H', gap: 'space/050', cross: 'center' });
    list.forEach(function (k) {
      var i = cmp.createInstance();
      var prop = Object.keys(i.componentProperties)[0];
      if (prop) i.setProperties({ [prop]: k });
      add(r, i);
    });
    return r;
  }

  defineBlock({
    id: 'tecla',
    page: 'Componentes',
    row: 'Dados e conteúdo',
    order: 9,
    group: 'Dados e conteúdo',
    title: 'Tecla',
    description: 'Mostra uma tecla ou um atalho no meio do texto, em menus e em tooltips. É uma etiqueta, não um botão.',
    build: async function () {
      var cmp = await kbdComponent();
      return {
        sections: [
          {
            title: 'Exemplos',
            description: 'No Mac é ⌘; no Windows e no Linux, Ctrl.',
            frame: true,
            node: async function () {
              var r = box('Exemplos', { dir: 'H', gap: 'space/300', cross: 'center' });
              add(r, await keys(cmp, ['Esc']));
              add(r, await keys(cmp, ['⌘', 'K']));
              add(r, await keys(cmp, ['Shift', 'F10']));
              return r;
            },
          },
        ].concat(themed('Tecla', function () { return keys(cmp, ['⌘', 'K']); })),
      };
    },
  });

  /* ───────── Calendário ───────── */

  var EVENTS = { 3: ['info', 'Reunião', '09:00'], 8: ['brand', 'Lançamento', '14:00'], 12: ['success', 'Pagamento', '10:30'], 18: ['warning', 'Revisão', '16:00'], 24: ['danger', 'Prazo', '18:00'] };
  var TONE = { brand: 'color/brand/solid', info: 'color/info/solid', success: 'color/success/solid', warning: 'color/warning/solid', danger: 'color/danger/solid' };

  async function calendarComponent() {
    if (C.cal && !C.cal.removed) return C.cal;
    C.cal = await component('calendario', 'Calendário', async function (c) {
      box(c.name, { dir: 'V', w: 952, radius: 'radius/xl', fill: 'color/bg/surface', stroke: 'color/border/subtle', clip: true }, c);
      var head = box('Cabeçalho', { dir: 'H', align: 'between', cross: 'center', pad: ['space/150', 'space/200'] });
      add(head, await text('Novembro de 2026', { style: 'heading-sm', color: 'color/fg/default' }));
      var seg = box('Visões', { dir: 'H', gap: 2, pad: 3, radius: 'radius/full', fill: 'color/bg/sunken', stroke: 'color/border/subtle' });
      for (var v of [['Mês', true], ['Semana', false], ['Dia', false]]) {
        var it = box(v[0], { dir: 'H', align: 'center', cross: 'center', pad: [0, 'space/150'], h: 28, radius: 'radius/full', fill: v[1] ? 'color/bg/muted' : null });
        add(it, await text(v[0], { style: 'label-sm', color: v[1] ? 'color/fg/default' : 'color/fg/subtle' }));
        add(seg, it);
      }
      add(head, seg);
      add(c, head, { fillW: true });
      var week = box('Dias da semana', { dir: 'H' });
      for (var d of ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']) {
        var th = box('Dia', { dir: 'H', pad: [6, 'space/100'], w: 136 });
        add(th, await text(d, { style: 'caption', color: 'color/fg/subtle' }));
        add(week, th);
      }
      add(c, week);
      var day = 1;
      for (var r = 0; r < 5; r++) {
        var row = box('Semana', { dir: 'H' });
        for (var i = 0; i < 7; i++, day++) {
          var cell = box('Célula', { dir: 'V', gap: 4, pad: 'space/100', w: 136, h: 84, stroke: 'color/border/subtle' });
          if (day <= 30) {
            add(cell, await text(String(day), { style: 'label-sm', color: 'color/fg/muted', raw: true }));
            var e = EVENTS[day];
            if (e) {
              var ev = box('Evento', { dir: 'H', gap: 6, cross: 'center' });
              add(ev, shape('Tom', { w: 6, h: 6, ellipse: true, fill: TONE[e[0]] }));
              add(ev, await text(e[2], { style: 'caption', color: 'color/fg/subtle', raw: true }));
              add(ev, await text(e[1], { style: 'caption', color: 'color/fg/default', w: 66, truncate: true }));
              add(cell, ev);
            }
          }
          add(row, cell);
        }
        add(c, row);
      }
    }, { description: 'Mês, semana e dia. No mês, evento com horário é uma linha; o dia todo é uma barra preenchida.' });
    return C.cal;
  }

  defineBlock({
    id: 'calendario',
    page: 'Componentes',
    row: 'Dados e conteúdo',
    order: 10,
    group: 'Dados e conteúdo',
    title: 'Calendário',
    description: 'Eventos em visões de mês, semana e dia. Os tons são os de status, e o primeiro dia da semana vem do idioma.',
    build: async function () {
      var cmp = await calendarComponent();
      return { sections: themed('Calendário', function () { return cmp.createInstance(); }, { pad: 24 }).map(function (s) { return Object.assign(s, { span: 2 }); }) };
    },
  });
})();
