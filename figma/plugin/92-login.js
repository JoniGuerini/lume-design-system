/**
 * Padrão de Login e cadastro: as três telas (Entrar, Criar conta, Recuperar senha) no palco de acesso.
 * Espelha site/pages/padroes-login.js: sem “confirmar senha”, requisitos à vista.
 */
(function () {
  var C = {};

  async function labeled(label, value, o) {
    o = o || {};
    var f = box(label, { dir: 'V', gap: 'space/075' });
    add(f, await text(label, { style: 'label-sm', color: 'color/fg/default' }));
    var field = box('Campo', { dir: 'H', align: 'between', cross: 'center', pad: [0, 'space/150', 0, 13], h: 40, radius: 'radius/md', fill: 'color/bg/field', stroke: 'color/border/default' });
    num(field, 'height', 'size/control/md');
    add(field, await text(value, { style: 'body-sm', color: o.placeholder ? 'color/fg/muted' : 'color/fg/default', raw: !o.placeholder }));
    if (o.eye) add(field, icon('eye', 18, 'color/fg/subtle'));
    add(f, field, { fillW: true });
    return f;
  }

  async function primary(label) {
    var b = box(label, { dir: 'H', align: 'center', cross: 'center', pad: [0, 'space/200'], h: 40, radius: 'radius/md', fill: 'color/brand/solid' });
    num(b, 'height', 'size/control/md');
    add(b, await text(label, { style: 'label-md', color: 'color/brand/on-solid' }));
    return b;
  }

  async function screen(key) {
    var card = box('Cartão de acesso', { dir: 'V', gap: 'space/250', pad: 'space/300', w: 300, radius: 'radius/2xl', fill: 'color/bg/surface', stroke: 'color/border/subtle' });
    var titles = { entrar: ['Entrar', 'Use seu e-mail e sua senha.'], criar: ['Criar conta', 'Leva menos de um minuto.'], recuperar: ['Recuperar senha', 'Enviamos um link para o seu e-mail.'] };
    var head = box('Título', { dir: 'V', gap: 'space/050' });
    add(head, await text(titles[key][0], { style: 'heading-lg', color: 'color/fg/default', w: 252 }));
    add(head, await text(titles[key][1], { style: 'body-sm', color: 'color/fg/muted', w: 252 }));
    add(card, head, { fillW: true });
    if (key === 'criar') add(card, await labeled('Nome', 'Ana Lima'), { fillW: true });
    add(card, await labeled('E-mail', 'ana@lume.app'), { fillW: true });
    if (key !== 'recuperar') add(card, await labeled('Senha', '••••••••', { eye: true }), { fillW: true });
    if (key === 'criar') {
      var reqs = box('Requisitos', { dir: 'V', gap: 'space/050' });
      for (var r of [['Pelo menos 8 caracteres', true], ['Uma letra e um número', false]]) {
        var line = box('Requisito', { dir: 'H', gap: 'space/075', cross: 'center' });
        add(line, icon(r[1] ? 'check-circle' : 'stop-circle', 16, r[1] ? 'color/success/fg' : 'color/fg/subtle'));
        add(line, await text(r[0], { style: 'caption', color: r[1] ? 'color/fg/default' : 'color/fg/subtle' }));
        add(reqs, line);
      }
      add(card, reqs, { fillW: true });
    }
    add(card, await primary(key === 'entrar' ? 'Entrar' : key === 'criar' ? 'Criar conta' : 'Enviar link'), { fillW: true });
    return card;
  }

  async function screens() {
    if (C.cmp && !C.cmp.removed) return C.cmp;
    C.cmp = await component('login', 'Login e cadastro', async function (c) {
      box(c.name, { dir: 'H', gap: 'space/300', cross: 'start', pad: 'space/400' }, c);
      add(c, await screen('entrar'));
      add(c, await screen('criar'));
      add(c, await screen('recuperar'));
    }, { description: 'Entrar, Criar conta e Recuperar senha. Sem “confirmar senha”: quem digita pode ver o que digitou.' });
    return C.cmp;
  }

  defineBlock({
    id: 'login',
    page: 'Componentes',
    row: 'Padrões',
    order: 7,
    group: 'Padrões',
    title: 'Login e cadastro',
    description: 'A primeira tela do produto, e a que mais gente abandona. Peça só o necessário, deixe ver a senha e explique o erro sem entregar quem tem conta.',
    tags: ['Padrão', 'Claro · Escuro'],
    build: async function () {
      var cmp = await screens();
      return { sections: themed('Login e cadastro', function () { return cmp.createInstance(); }, { pad: 0, fillChildren: true }).map(function (s) { return Object.assign(s, { span: 2 }); }) };
    },
  });
})();
