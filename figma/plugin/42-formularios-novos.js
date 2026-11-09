/**
 * Formulários da 0.14: Seletor de data, Seletor de horário, Campo numérico, Slider, Campo de tags,
 * Upload de arquivo e Código de verificação. Espelha ds/components/picker, number-field, slider, tags, upload e otp.
 */
(function () {
  var C = {};

  /** O contêiner de campo: fundo igual ao do menu que abre, contorno fino. */
  function shell(c, name, state, w, o) {
    o = o || {};
    box(name, { dir: 'H', gap: o.gap || 'space/150', pad: o.pad || [0, 'space/150', 0, 13], cross: 'center', w: w, h: o.h || 40, radius: o.radius || 'radius/md', fill: 'color/bg/field' }, c);
    if (!o.free) num(c, 'height', o.token || 'size/control/md');
    stroke(c, state === 'Foco' ? 'color/border/focus' : state === 'Erro' ? 'color/danger/solid' : state === 'Hover' ? 'color/border/strong' : 'color/border/default', state === 'Foco' ? 'focus-ring/width' : 1);
    if (state === 'Desativado') num(c, 'opacity', 'opacity/disabled');
  }

  /* ───────── Seletor de data ───────── */

  var DATE_STATES = ['Vazio', 'Preenchido', 'Foco', 'Erro', 'Desativado'];

  async function dateSet() {
    if (C.date && !C.date.removed) return C.date;
    C.date = await variants('seletor-data', 'Seletor de data', DATE_STATES.map(function (st) {
      return {
        props: { Estado: st },
        build: async function (c) {
          shell(c, c.name, st, 240);
          add(c, await text(st === 'Vazio' || st === 'Desativado' ? 'dd/mm/aaaa' : '08/11/2026', { style: 'body-sm', color: st === 'Vazio' || st === 'Desativado' ? 'color/fg/muted' : 'color/fg/default', raw: true }), { grow: true });
          add(c, icon('calendar', 18, 'color/fg/subtle'));
        },
      };
    }), { description: 'Aceita digitar ou escolher no calendário.', columns: 2, gap: 24, rowGap: 16 });
    return C.date;
  }

  /** Painel do mês. selected: dia escolhido; range: [início, fim] */
  async function monthPanel(o) {
    o = o || {};
    var p = box('Calendário', { dir: 'V', gap: 'space/100', pad: 'space/150', radius: 'radius/lg', fill: 'color/bg/raised', stroke: 'color/border/strong' });
    shadow(p, 'xl');
    var head = box('Mês', { dir: 'H', align: 'between', cross: 'center', h: 32 });
    add(head, icon('chevron-left', 16, 'color/fg/muted'));
    add(head, await text('Novembro de 2026', { style: 'label-md', color: 'color/fg/default' }));
    add(head, icon('chevron-right', 16, 'color/fg/muted'));
    add(p, head, { fillW: true });
    var week = box('Semana', { dir: 'H' });
    for (var d of ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']) {
      var th = box('Dia da semana', { dir: 'H', align: 'center', cross: 'center', w: 36, h: 28 });
      add(th, await text(d, { style: 'caption', color: 'color/fg/subtle', raw: true }));
      add(week, th);
    }
    add(p, week);
    var day = 1;
    for (var r = 0; r < 5; r++) {
      var row = box('Linha', { dir: 'H' });
      for (var i = 0; i < 7; i++, day++) {
        var inRange = o.range && day >= o.range[0] && day <= o.range[1];
        var isEnd = o.range && (day === o.range[0] || day === o.range[1]);
        var isSel = day === o.selected || isEnd;
        var td = box('Célula', { dir: 'H', align: 'center', cross: 'center', w: 36, h: 36, fill: inRange ? 'color/brand/subtle' : null });
        if (day <= 30) {
          var btn = box('Dia', { dir: 'H', align: 'center', cross: 'center', w: 36, h: 36, radius: 'radius/sm', fill: isSel ? 'color/brand/solid' : null });
          add(btn, await text(String(day), { style: 'body-sm', color: isSel ? 'color/brand/on-solid' : 'color/fg/default', raw: true }));
          add(td, btn);
        }
        add(row, td);
      }
      add(p, row);
    }
    return p;
  }

  defineBlock({
    id: 'seletor-data',
    page: 'Componentes',
    row: 'Formulário',
    order: 10,
    group: 'Formulário',
    title: 'Seletor de data',
    description: 'Uma data ou um período, digitando ou no calendário. A semana começa no dia certo de cada idioma.',
    build: async function () {
      var set = await dateSet();
      return {
        sections: [
          { title: 'Estados', description: 'O campo mostra o formato do idioma e guarda a data num campo oculto.', span: 2, node: set, fill: false },
          { title: 'Uma data', description: 'Dia escolhido no tom da marca.', frame: true, node: function () { return monthPanel({ selected: 8 }); } },
          { title: 'Período', description: 'As pontas no tom forte; o meio, no suave.', frame: true, node: function () { return monthPanel({ range: [8, 13] }); } },
        ].concat(themed('Seletor de data', function () { return monthPanel({ selected: 18 }); }, { pad: 24 })),
      };
    },
  });

  /* ───────── Seletor de horário ───────── */

  async function timeSet() {
    if (C.time && !C.time.removed) return C.time;
    C.time = await variants('seletor-horario', 'Seletor de horário', DATE_STATES.map(function (st) {
      return {
        props: { Estado: st },
        build: async function (c) {
          shell(c, c.name, st, 180);
          add(c, await text(st === 'Vazio' || st === 'Desativado' ? '--:--' : '14:30', { style: 'body-sm', color: st === 'Vazio' || st === 'Desativado' ? 'color/fg/muted' : 'color/fg/default', raw: true }), { grow: true });
          add(c, icon('clock', 18, 'color/fg/subtle'));
        },
      };
    }), { description: 'Digite o horário ou escolha na lista.', columns: 2, gap: 24, rowGap: 16 });
    return C.time;
  }

  async function timeList() {
    var p = box('Horários', { dir: 'V', pad: 6, w: 180, radius: 'radius/lg', fill: 'color/bg/raised', stroke: 'color/border/strong' });
    shadow(p, 'xl');
    for (var t of ['14:00', '14:15', '14:30', '14:45', '15:00']) {
      var active = t === '14:30';
      var o = box('Opção', { dir: 'H', align: 'between', cross: 'center', pad: [0, 'space/150'], h: 36, radius: 'radius/sm', fill: active ? 'color/bg/hover' : null });
      num(o, 'height', 'size/control/compact');
      add(o, await text(t, { style: 'body-sm', color: 'color/fg/default', raw: true }));
      if (active) add(o, icon('check', 16, 'color/fg/brand'));
      add(p, o, { fillW: true });
    }
    return p;
  }

  defineBlock({
    id: 'seletor-horario',
    page: 'Componentes',
    row: 'Formulário',
    order: 11,
    group: 'Formulário',
    title: 'Seletor de horário',
    description: 'Um horário, digitado ou escolhido numa lista com o intervalo que fizer sentido. 12 ou 24 horas, conforme o idioma.',
    build: async function () {
      var set = await timeSet();
      return {
        sections: [
          { title: 'Estados', description: 'Mesma aparência dos outros campos.', node: set, fill: false },
          { title: 'Lista', description: 'Abre sob o campo, de 15 em 15 minutos por padrão.', frame: true, node: timeList },
        ].concat(themed('Seletor de horário', timeList, { pad: 24 })),
      };
    },
  });

  /* ───────── Campo numérico ───────── */

  var NUM_SIZES = [
    ['P', { token: 'size/control/sm', btn: 26, inset: 3, radius: 'radius/sm' }],
    ['M', { token: 'size/control/md', btn: 30, inset: 5, radius: 'radius/md' }],
    ['G', { token: 'size/control/lg', btn: 36, inset: 6, radius: 'radius/md' }],
  ];

  async function numberSet() {
    if (C.num && !C.num.removed) return C.num;
    var items = [];
    NUM_SIZES.forEach(function (sz) {
      ['Normal', 'Foco', 'Desativado'].forEach(function (st) {
        items.push({
          props: { Tamanho: sz[0], Estado: st },
          build: async function (c) {
            shell(c, c.name, st, 160, { token: sz[1].token, gap: 'space/050', pad: [0, sz[1].inset], radius: sz[1].radius });
            var minus = box('Menos', { dir: 'H', align: 'center', cross: 'center', w: sz[1].btn, h: sz[1].btn, radius: 'radius/sm' });
            add(minus, icon('minus', 16, 'color/fg/muted'));
            add(c, minus);
            var v = box('Valor', { dir: 'H', align: 'center', cross: 'center' });
            add(v, await text('12', { style: 'body-sm', color: 'color/fg/default', raw: true }));
            add(c, v, { grow: true });
            var plus = box('Mais', { dir: 'H', align: 'center', cross: 'center', w: sz[1].btn, h: sz[1].btn, radius: 'radius/sm' });
            add(plus, icon('plus', 16, 'color/fg/muted'));
            add(c, plus);
          },
        });
      });
    });
    C.num = await variants('campo-numerico', 'Campo numérico', items, { description: 'Digite ou use os botões. Moeda e porcentagem seguem o idioma.', columns: 3, gap: 16, rowGap: 16 });
    return C.num;
  }

  defineBlock({
    id: 'campo-numerico',
    page: 'Componentes',
    row: 'Formulário',
    order: 12,
    group: 'Formulário',
    title: 'Campo numérico',
    description: 'Para quantidades e valores, com limites e passo. Os botões − e + ficam fora do Tab; o teclado usa as setas.',
    build: async function () {
      var set = await numberSet();
      return {
        sections: [{ title: 'Tamanhos e estados', description: '32, 40 e 48 px, como os outros campos.', span: 2, node: set, fill: false }]
          .concat(themed('Campo numérico', function () { return instance(set, { Tamanho: 'M', Estado: 'Normal' }); })),
      };
    },
  });

  /* ───────── Slider ───────── */

  function sliderTrack(w, from, to, st) {
    var root = box('Slider', { dir: 'none', w: w, h: 18 });
    var thumb = st === 'Hover' ? 'color/brand/solid-hover' : 'color/brand/solid';
    var rail = shape('Trilha', { w: w, h: 4, radius: 'radius/full', fill: 'color/border/field' });
    root.appendChild(rail);
    rail.x = 0;
    rail.y = 7;
    var part = shape('Preenchido', { w: Math.max(1, (to - from) * w), h: 4, radius: 'radius/full', fill: thumb });
    root.appendChild(part);
    part.x = from * w;
    part.y = 7;
    (from > 0 ? [from, to] : [to]).forEach(function (t) {
      var x = Math.round(t * (w - 18));
      if (st === 'Foco') {
        var ring = shape('Foco', { w: 26, h: 26, ellipse: true });
        stroke(ring, 'color/border/focus', 'focus-ring/width');
        root.appendChild(ring);
        ring.x = x - 4;
        ring.y = -4;
      }
      var k = shape('Polegar', { w: 18, h: 18, ellipse: true, fill: thumb });
      root.appendChild(k);
      k.x = x;
      k.y = 0;
    });
    root.clipsContent = false;
    return root;
  }

  async function sliderSet() {
    if (C.slider && !C.slider.removed) return C.slider;
    var items = [];
    [['Um valor', 0, 0.6], ['Intervalo', 0.25, 0.75]].forEach(function (k) {
      ['Normal', 'Hover', 'Foco', 'Desativado'].forEach(function (st) {
        items.push({
          props: { Tipo: k[0], Estado: st },
          build: async function (c) {
            box(c.name, { dir: 'V', pad: [4, 4], w: 228 }, c);
            c.clipsContent = false;
            if (st === 'Desativado') num(c, 'opacity', 'opacity/disabled');
            add(c, sliderTrack(220, k[1], k[2], st));
          },
        });
      });
    });
    C.slider = await variants('slider', 'Slider', items, { description: 'Escolhe um valor ou um intervalo numa faixa.', columns: 2, gap: 24, rowGap: 24 });
    return C.slider;
  }

  defineBlock({
    id: 'slider',
    page: 'Componentes',
    row: 'Formulário',
    order: 13,
    group: 'Formulário',
    title: 'Slider',
    description: 'Um valor ou um intervalo numa faixa, com marcas opcionais. Bom quando o valor exato importa menos que a proporção.',
    build: async function () {
      var set = await sliderSet();
      return {
        sections: [{ title: 'Tipos e estados', description: 'Trilha de 4 px e polegar de 18 px.', span: 2, node: set, fill: false }]
          .concat(themed('Slider', function () { return instance(set, { Tipo: 'Intervalo', Estado: 'Normal' }); })),
      };
    },
  });

  /* ───────── Campo de tags ───────── */

  async function tag(label) {
    var t = box('Tag', { dir: 'H', gap: 2, pad: [0, 4, 0, 'space/150'], cross: 'center', h: 30, radius: 'radius/full', stroke: 'color/border/control' });
    add(t, await text(label, { style: 'label-sm', color: 'color/fg/default' }));
    var r = box('Remover', { dir: 'H', align: 'center', cross: 'center', w: 22, h: 22, radius: 'radius/full' });
    add(r, icon('x', 14, 'color/fg/subtle'));
    add(t, r);
    return t;
  }

  async function tagSet() {
    if (C.tags && !C.tags.removed) return C.tags;
    C.tags = await variants('campo-tags', 'Campo de tags', ['Vazio', 'Com tags', 'Foco', 'Erro', 'Desativado'].map(function (st) {
      return {
        props: { Estado: st },
        build: async function (c) {
          shell(c, c.name, st, 300, { free: true, h: 40, gap: 'space/050', pad: [4, 6] });
          c.counterAxisSizingMode = 'AUTO';
          if (st !== 'Vazio') {
            add(c, await tag('Design'));
            add(c, await tag('Tokens'));
          } else {
            var ph = box('Entrada', { dir: 'H', pad: [0, 6], cross: 'center', h: 30 });
            add(ph, await text('Adicione um assunto', { style: 'body-sm', color: 'color/fg/muted' }));
            add(c, ph);
          }
        },
      };
    }), { description: 'Enter ou vírgula cria a tag; Backspace remove a última.', columns: 2, gap: 24, rowGap: 16 });
    return C.tags;
  }

  defineBlock({
    id: 'campo-tags',
    page: 'Componentes',
    row: 'Formulário',
    order: 14,
    group: 'Formulário',
    title: 'Campo de tags',
    description: 'Vários valores curtos num campo só. Pode ter sugestões, limite e valores permitidos.',
    build: async function () {
      var set = await tagSet();
      return {
        sections: [{ title: 'Estados', description: 'As tags têm a mesma cara do Chip removível.', span: 2, node: set, fill: false }]
          .concat(themed('Campo de tags', function () { return instance(set, { Estado: 'Com tags' }); })),
      };
    },
  });

  /* ───────── Upload ───────── */

  async function zoneSet() {
    if (C.zone && !C.zone.removed) return C.zone;
    C.zone = await variants('upload', 'Upload de arquivo', ['Normal', 'Arrastando', 'Foco', 'Desativado'].map(function (st) {
      return {
        props: { Estado: st },
        build: async function (c) {
          box(c.name, { dir: 'V', gap: 'space/050', align: 'center', cross: 'center', pad: 'space/300', w: 240, h: 136, radius: 'radius/lg', fill: st === 'Arrastando' ? 'color/brand/subtle' : 'color/bg/field' }, c);
          stroke(c, st === 'Foco' ? 'color/border/focus' : 'color/border/strong', st === 'Foco' ? 'focus-ring/width' : 1, { dash: st === 'Foco' ? undefined : [4, 4] });
          if (st === 'Desativado') num(c, 'opacity', 'opacity/disabled');
          add(c, icon('upload', 20, 'color/fg/subtle'));
          add(c, await text('Arraste ou escolha um arquivo', { style: 'label-md', color: 'color/fg/default', align: 'center' }));
          add(c, await text('PDF ou PNG, até 5 MB', { style: 'body-sm', color: 'color/fg/subtle', align: 'center' }));
        },
      };
    }), { description: 'A área de soltar, com o que é aceito à vista.', columns: 2, gap: 16, rowGap: 16 });
    return C.zone;
  }

  async function fileItem(name, status, tone, barValue) {
    var it = box('Arquivo', { dir: 'H', gap: 'space/150', pad: ['space/100', 'space/100', 'space/100', 'space/150'], cross: 'center', w: 320, radius: 'radius/md', stroke: 'color/border/subtle' });
    add(it, icon(tone === 'danger' ? 'alert-circle' : tone === 'success' ? 'check-circle' : 'file-text', 18, tone === 'danger' ? 'color/danger/fg' : tone === 'success' ? 'color/success/fg' : 'color/fg/subtle'));
    var meta = box('Dados', { dir: 'V', gap: 2 });
    add(meta, await text(name, { style: 'label-sm', color: 'color/fg/default', raw: true }));
    add(meta, await text(status, { style: 'caption', color: tone === 'danger' ? 'color/danger/fg' : 'color/fg/subtle' }));
    if (barValue) {
      var bar = box('Progresso', { dir: 'H', w: 200, h: 4, radius: 'radius/full', fill: 'color/bg/muted', clip: true });
      add(bar, shape('Preenchido', { w: 200 * barValue, h: 4, fill: 'color/brand/solid' }));
      add(meta, bar);
    }
    add(it, meta, { grow: true });
    var x = box('Remover', { dir: 'H', align: 'center', cross: 'center', w: 28, h: 28, radius: 'radius/xs' });
    add(x, icon('x', 16, 'color/fg/subtle'));
    add(it, x);
    return it;
  }

  async function fileList() {
    var l = box('Arquivos', { dir: 'V', gap: 'space/050' });
    add(l, await fileItem('contrato.pdf', '1,2 MB', 'success'));
    add(l, await fileItem('capa.png', 'Enviando… 60%', null, 0.6));
    add(l, await fileItem('planilha.xls', 'Formato não aceito', 'danger'));
    return l;
  }

  defineBlock({
    id: 'upload',
    page: 'Componentes',
    row: 'Formulário',
    order: 15,
    group: 'Formulário',
    title: 'Upload de arquivo',
    description: 'Arrastar ou escolher, com a lista dos arquivos e o estado de cada um. Quem envia de verdade é o seu código.',
    build: async function () {
      var zone = await zoneSet();
      return {
        sections: [
          { title: 'Área de soltar', description: 'Contorno tracejado de 136 px de altura.', span: 2, node: zone, fill: false },
          { title: 'Arquivos', description: 'Concluído, enviando e com erro.', frame: true, node: fileList },
        ].concat(themed('Upload', fileList, { pad: 24 })),
      };
    },
  });

  /* ───────── Código de verificação ───────── */

  var OTP_STATES = [['Vazio', ''], ['Digitando', '48'], ['Completo', '482913'], ['Erro', '482913'], ['Desativado', '']];

  async function otpSet() {
    if (C.otp && !C.otp.removed) return C.otp;
    C.otp = await variants('codigo-verificacao', 'Código de verificação', OTP_STATES.map(function (s) {
      return {
        props: { Estado: s[0] },
        build: async function (c) {
          box(c.name, { dir: 'H', gap: 'space/100', cross: 'center' }, c);
          if (s[0] === 'Desativado') num(c, 'opacity', 'opacity/disabled');
          for (var i = 0; i < 6; i++) {
            var active = s[0] === 'Digitando' && i === s[1].length;
            var b = box('Casa', { dir: 'H', align: 'center', cross: 'center', w: 44, h: 48, radius: 'radius/md', fill: 'color/bg/field' });
            num(b, 'height', 'size/control/lg');
            stroke(b, s[0] === 'Erro' ? 'color/danger/solid' : active ? 'color/border/focus' : 'color/border/default', active ? 'focus-ring/width' : 1);
            if (s[1][i]) add(b, await text(s[1][i], { style: 'heading-sm', color: 'color/fg/default', raw: true }));
            else if (active) add(b, shape('Cursor', { w: 1, h: 22, fill: 'color/fg/default' }));
            add(c, b);
          }
        },
      };
    }), { description: 'Uma casa por dígito, sobre um campo só: colar e o preenchimento automático funcionam.', columns: 2, gap: 24, rowGap: 16 });
    return C.otp;
  }

  defineBlock({
    id: 'codigo-verificacao',
    page: 'Componentes',
    row: 'Formulário',
    order: 16,
    group: 'Formulário',
    title: 'Código de verificação',
    description: 'O código de uso único enviado por e-mail ou SMS. Aceita colar o código inteiro, e o foco anda sozinho.',
    build: async function () {
      var set = await otpSet();
      return {
        sections: [{ title: 'Estados', description: 'Casas de 44 × 48 px.', span: 2, node: set, fill: false }]
          .concat(themed('Código de verificação', function () { return instance(set, { Estado: 'Digitando' }); })),
      };
    },
  });
})();
