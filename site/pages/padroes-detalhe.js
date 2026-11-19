import { icon } from '../../ds/icons/icons.js';
import { mountTabs } from '../../ds/js/tabs.js';
import { createMenu } from '../../ds/js/menu.js';
import { toast, copyText } from '../../ds/js/toast.js';
import { dateFormat } from '../../ds/js/i18n.js';
import { mountDocNav } from '../doc-nav.js';
import { mountCodeCopy, codeBlock, a11yList, escapeHtml } from '../component-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/padroes-comum.css', 'site/pages/padroes-detalhe.css'];

/* ───────── Exemplo: a página de uma pessoa (a mesma da Listagem de dados) ───────── */

const ic = (s) => `<code class="ds-inline-code">${s}</code>`;
const PERSON = { name: 'Amanda Ribeiro', email: 'amanda.ribeiro@lume.app' };

const ROLES = () => [
  ['admin', L('Admin', 'Admin', 'Admin')],
  ['editor', L('Editor', 'Editor', 'Editor')],
  ['leitor', L('Leitor', 'Viewer', 'Lector')],
];

/* Propriedades: id, rótulo, valor inicial, tipo de edição (null = só leitura) */
const PROPS = () => [
  { id: 'nome', label: L('Nome', 'Name', 'Nombre'), value: PERSON.name, edit: 'text', required: true },
  { id: 'funcao', label: L('Função', 'Role', 'Función'), value: 'admin', edit: 'role' },
  { id: 'equipe', label: L('Equipe', 'Team', 'Equipo'), value: L('Design', 'Design', 'Diseño'), edit: 'text' },
  { id: 'telefone', label: L('Telefone', 'Phone', 'Teléfono'), value: '', edit: 'tel', empty: L('Adicionar telefone', 'Add phone', 'Añadir teléfono') },
  { id: 'email', label: L('E-mail', 'Email', 'Correo'), value: PERSON.email, edit: null },
];

const D = (day, h, m) => new Date(2026, 10, day, h, m);
const HISTORY = () => [
  { when: D(14, 9, 12), tone: null, glyph: 'log-out', title: L('Entrou pelo celular', 'Signed in on mobile', 'Inició sesión desde el móvil'), text: L('São Paulo', 'São Paulo', 'São Paulo') },
  { when: D(12, 16, 40), tone: 'brand', glyph: 'pencil', title: L('Ana Lima mudou a equipe de Produto para Design', 'Ana Lima changed the team from Product to Design', 'Ana Lima cambió el equipo de Producto a Diseño'), text: '' },
  { when: D(3, 11, 5), tone: 'success', glyph: 'check', title: L('Virou Admin', 'Became Admin', 'Pasó a ser Admin'), text: L('Por Ana Lima', 'By Ana Lima', 'Por Ana Lima') },
  { when: D(1, 10, 0), tone: null, glyph: 'user', title: L('Aceitou o convite', 'Accepted the invite', 'Aceptó la invitación'), text: L('Convidada por Ana Lima', 'Invited by Ana Lima', 'Invitada por Ana Lima') },
];

const ACCESS = () => [
  ['Lume', L('Admin', 'Admin', 'Admin')],
  [L('Site', 'Website', 'Sitio'), L('Editor', 'Editor', 'Editor')],
  ['Storybook', L('Editor', 'Editor', 'Editor')],
  [L('Relatórios', 'Reports', 'Informes'), L('Leitor', 'Viewer', 'Lector')],
];

const roleLabel = (v) => ROLES().find(([id]) => id === v)?.[1] ?? v;
const display = (p, value) => (p.edit === 'role' ? roleLabel(value) : value);
const editLabel = (p) => L(`Editar ${p.label.toLowerCase()}`, `Edit ${p.label.toLowerCase()}`, `Editar ${p.label.toLowerCase()}`);

function valueHtml(p, value) {
  if (!value && p.empty) return `<button type="button" class="de-add" data-de-edit="${p.id}">${icon('plus', { size: 14 })}${p.empty}</button>`;
  return `<span class="de-value">${escapeHtml(display(p, value))}</span>${p.edit ? `<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted de-pencil" data-de-edit="${p.id}" aria-label="${escapeHtml(editLabel(p))}" data-ds-tooltip="${escapeHtml(editLabel(p))}">${icon('pencil', { size: 14 })}</button>` : ''}`;
}

function editorHtml(p, value) {
  const id = `de-field-${p.id}`;
  const control =
    p.edit === 'role'
      ? `<div class="ds-segmented de-roles" role="radiogroup" aria-label="${p.label}">${ROLES().map(([v, t]) => `<button type="button" class="ds-segmented__item" role="radio" data-value="${v}" aria-checked="${v === value}" tabindex="${v === value ? 0 : -1}">${t}</button>`).join('')}</div>`
      : `<div class="ds-field ds-field--sm"><input class="ds-field__input" id="${id}" type="${p.edit === 'tel' ? 'tel' : 'text'}" value="${escapeHtml(value)}" aria-label="${p.label}" spellcheck="false"${p.edit === 'tel' ? ' inputmode="tel" placeholder="(11) 90000-0000"' : ''}></div>`;
  return `<form class="de-edit" data-de-form="${p.id}" novalidate>
    ${control}
    <div class="de-edit__actions">
      <button type="submit" class="ds-btn ds-btn--primary ds-btn--sm">${L('Salvar', 'Save', 'Guardar')}</button>
      <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-de-cancel>${L('Cancelar', 'Cancel', 'Cancelar')}</button>
    </div>
    <p class="ds-form-field__error de-edit__error" id="${id}-error" hidden></p>
  </form>`;
}

const timelineItem = (h, fmt) => `<li class="ds-timeline__item"${h.tone ? ` data-tone="${h.tone}"` : ''}>
    <span class="ds-timeline__marker">${icon(h.glyph, { size: 14 })}</span>
    <div class="ds-timeline__content">
      <p class="ds-timeline__title">${escapeHtml(h.title)}</p>
      ${h.text ? `<p class="ds-timeline__text">${escapeHtml(h.text)}</p>` : ''}
      <time class="ds-timeline__time" datetime="${h.when.toISOString()}">${h.now ? L('Agora', 'Just now', 'Ahora') : fmt.format(h.when)}</time>
    </div>
  </li>`;

function screen(fmt) {
  const sep = icon('chevron-right', { size: 14 });
  return `<div class="pt-stage" data-de-stage>
    <div class="pt-screen de-screen">
      <nav class="ds-breadcrumb" aria-label="${L('Você está em', 'You are here', 'Estás en')}"><ol>
        <li><a href="#/padroes/listagem">${L('Pessoas', 'People', 'Personas')}</a></li>
        <li>${sep}<span aria-current="page" data-de-crumb>${PERSON.name}</span></li>
      </ol></nav>

      <header class="de-head">
        <span class="ds-avatar ds-avatar--xl" aria-hidden="true"><span data-de-initials>AR</span></span>
        <div class="de-head__text">
          <h3 class="pt-screen__title de-head__title"><span data-de-name>${PERSON.name}</span><span class="ds-badge ds-badge--sm ds-badge--success" data-de-status><span class="ds-badge__dot"></span>${L('Ativo', 'Active', 'Activo')}</span></h3>
          <p class="pt-screen__desc">${PERSON.email} · <span data-de-role>${roleLabel('admin')}</span></p>
        </div>
        <div class="pt-screen__actions">
          <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-de-copy>${icon('link', { size: 16 })}${L('Copiar link', 'Copy link', 'Copiar enlace')}</button>
          <button type="button" class="ds-icon-btn ds-icon-btn--muted" data-de-more aria-label="${L(`Mais ações para ${PERSON.name}`, `More actions for ${PERSON.name}`, `Más acciones para ${PERSON.name}`)}" data-ds-tooltip="${L('Mais ações', 'More actions', 'Más acciones')}">${icon('more-horizontal', { size: 18 })}</button>
        </div>
      </header>

      <div class="ds-tabs ds-tabs--sm" data-ds-tabs>
        <div class="ds-tabs__list" role="tablist" aria-label="${L(`Sobre ${PERSON.name}`, `About ${PERSON.name}`, `Sobre ${PERSON.name}`)}">
          <button type="button" class="ds-tabs__tab" role="tab" id="de-tab-geral" aria-controls="de-panel-geral" aria-selected="true">${L('Visão geral', 'Overview', 'Resumen')}</button>
          <button type="button" class="ds-tabs__tab" role="tab" id="de-tab-atividade" aria-controls="de-panel-atividade" aria-selected="false" tabindex="-1">${L('Atividade', 'Activity', 'Actividad')}<span class="ds-badge ds-badge--sm ds-badge--count" data-de-count>${HISTORY().length}</span></button>
          <button type="button" class="ds-tabs__tab" role="tab" id="de-tab-acesso" aria-controls="de-panel-acesso" aria-selected="false" tabindex="-1">${L('Acesso', 'Access', 'Acceso')}</button>
        </div>

        <div class="ds-tabs__panel" role="tabpanel" id="de-panel-geral" aria-labelledby="de-tab-geral" tabindex="0">
          <div class="de-overview">
            <section aria-labelledby="de-props-title">
              <h4 class="de-subtitle" id="de-props-title">${L('Detalhes', 'Details', 'Detalles')}</h4>
              <dl class="ds-dl ds-dl--lines de-props">
                ${PROPS().map((p) => `<div class="ds-dl__row" data-de-row="${p.id}"><dt id="de-dt-${p.id}">${p.label}</dt><dd data-de-dd="${p.id}">${valueHtml(p, p.value)}</dd></div>`).join('')}
              </dl>
              <p class="ds-visually-hidden" role="status" data-de-live></p>
            </section>
            <aside class="de-aside" aria-labelledby="de-aside-title">
              <h4 class="de-subtitle" id="de-aside-title">${L('Resumo', 'Summary', 'Resumen')}</h4>
              <dl class="ds-dl ds-dl--stacked">
                <div class="ds-dl__row"><dt>${L('Entrou em', 'Joined', 'Se unió el')}</dt><dd>${dateFormat({ day: 'numeric', month: 'long', year: 'numeric' }).format(D(1, 10, 0))}</dd></div>
                <div class="ds-dl__row"><dt>${L('Último acesso', 'Last active', 'Último acceso')}</dt><dd>${fmt.format(D(14, 9, 12))}</dd></div>
                <div class="ds-dl__row"><dt>${L('Projetos', 'Projects', 'Proyectos')}</dt><dd>${ACCESS().length}</dd></div>
              </dl>
            </aside>
          </div>
        </div>

        <div class="ds-tabs__panel" role="tabpanel" id="de-panel-atividade" aria-labelledby="de-tab-atividade" tabindex="0" hidden>
          <ol class="ds-timeline de-timeline" data-de-history>${HISTORY().map((h) => timelineItem(h, fmt)).join('')}</ol>
        </div>

        <div class="ds-tabs__panel" role="tabpanel" id="de-panel-acesso" aria-labelledby="de-tab-acesso" tabindex="0" hidden>
          <dl class="ds-dl ds-dl--lines de-access">
            ${ACCESS().map(([proj, role]) => `<div class="ds-dl__row"><dt>${proj}</dt><dd>${role}</dd></div>`).join('')}
          </dl>
        </div>
      </div>
    </div>
  </div>`;
}

/* ───────── Textos da página ───────── */

const PARTS = () => [
  [L('Caminho', 'Path', 'Ruta'), L('O breadcrumb volta para a lista, com os filtros que a pessoa tinha. É o “Voltar” que nunca erra.', 'The breadcrumb goes back to the list, with the filters the person had. It’s the “Back” that never misses.', 'El breadcrumb vuelve a la lista, con los filtros que la persona tenía. Es el “Volver” que nunca falla.')],
  [L('Cabeçalho', 'Header', 'Encabezado'), L('Quem ou o que é, o estado e as ações daquela coisa. Fica igual em todas as abas.', 'Who or what it is, its state, and the actions for that thing. It stays the same on every tab.', 'Quién o qué es, el estado y las acciones de esa cosa. Queda igual en todas las pestañas.')],
  [L('Abas', 'Tabs', 'Pestañas'), L('Visão geral primeiro. Atividade com o número de eventos. No máximo cinco abas.', 'Overview first. Activity with the number of events. Five tabs at most.', 'Resumen primero. Actividad con el número de eventos. Cinco pestañas como máximo.')],
  [L('Propriedades', 'Properties', 'Propiedades'), L('Rótulo e valor, um por linha. Quem pode mudar vê o lápis; o resto é só leitura.', 'Label and value, one per row. Whoever can change it sees the pencil; the rest is read-only.', 'Etiqueta y valor, uno por fila. Quien puede cambiarlo ve el lápiz; el resto es solo lectura.')],
  [L('Resumo', 'Summary', 'Resumen'), L('Ao lado, os fatos que não se editam: quando entrou, último acesso, quantos projetos.', 'On the side, the facts that can’t be edited: when they joined, last active, how many projects.', 'Al lado, los hechos que no se editan: cuándo entró, último acceso, cuántos proyectos.')],
  [L('Histórico', 'History', 'Historial'), L('Quem mudou o quê e quando, do mais novo para o mais antigo. Cada edição entra aqui na hora.', 'Who changed what and when, newest first. Each edit lands here right away.', 'Quién cambió qué y cuándo, del más nuevo al más antiguo. Cada edición entra aquí al instante.')],
];

const RULES = () => [
  ['pencil', L('Editar no lugar, um campo por vez', 'Edit in place, one field at a time', 'Editar en el lugar, un campo a la vez'), L('Para mudar a equipe, ninguém precisa de uma página de formulário. O campo abre ali mesmo, com Salvar e Cancelar.', 'To change the team, nobody needs a form page. The field opens right there, with Save and Cancel.', 'Para cambiar el equipo, nadie necesita una página de formulario. El campo se abre ahí mismo, con Guardar y Cancelar.')],
  ['eye', L('O lápis não se esconde', 'The pencil doesn’t hide', 'El lápiz no se esconde'), L('Fica à vista, não só com o mouse por cima. E só aparece onde a pessoa pode mesmo editar.', 'It stays visible, not only on hover. And it only shows where the person can really edit.', 'Queda a la vista, no solo al pasar el mouse. Y solo aparece donde la persona realmente puede editar.')],
  ['keyboard', L('Enter salva, Esc desiste', 'Enter saves, Esc gives up', 'Enter guarda, Esc desiste'), L('Ao terminar, o foco volta para o lápis daquela linha, e não para o topo da página.', 'When done, focus returns to that row’s pencil, not to the top of the page.', 'Al terminar, el foco vuelve al lápiz de esa fila, no al principio de la página.')],
  ['check', L('A tela é a confirmação', 'The screen is the confirmation', 'La pantalla es la confirmación'), L('O valor novo no lugar e a linha nova no histórico já dizem que salvou. Toast aqui seria repetir.', 'The new value in place and the new line in the history already say it saved. A toast here would be repetition.', 'El valor nuevo en su lugar y la fila nueva en el historial ya dicen que se guardó. Un toast aquí sería repetir.')],
  ['history', L('Toda mudança tem autor e hora', 'Every change has an author and a time', 'Todo cambio tiene autor y hora'), L('“Ana Lima mudou a equipe de Produto para Design”: o antes, o depois e quem fez.', '“Ana Lima changed the team from Product to Design”: the before, the after, and who did it.', '“Ana Lima cambió el equipo de Producto a Diseño”: el antes, el después y quién lo hizo.')],
  ['plus', L('Vazio é convite', 'Empty is an invitation', 'Vacío es invitación'), L('“Adicionar telefone” no lugar de um traço. Diz o que falta e já é o botão para preencher.', '“Add phone” instead of a dash. It says what’s missing and is already the button to fill it in.', '“Añadir teléfono” en lugar de un guion. Dice qué falta y ya es el botón para completarlo.')],
];

const WRITING = () => [
  [L('Sem valor', 'No value', 'Sin valor'), L('— ou N/A', '— or N/A', '— o N/A'), L('Adicionar telefone', 'Add phone', 'Añadir teléfono')],
  [L('Histórico', 'History', 'Historial'), L('Registro atualizado.', 'Record updated.', 'Registro actualizado.'), L('Você mudou a equipe de Design para Produto', 'You changed the team from Design to Product', 'Cambiaste el equipo de Diseño a Producto')],
  [L('Erro', 'Error', 'Error'), L('Campo inválido.', 'Invalid field.', 'Campo inválido.'), L('Escreva o nome.', 'Write the name.', 'Escribe el nombre.')],
  [L('Data', 'Date', 'Fecha'), L('2026-11-14 09:12:33', '2026-11-14 09:12:33', '2026-11-14 09:12:33'), L('14 de nov., 09:12', 'Nov 14, 9:12 AM', '14 nov, 09:12')],
];

const htmlCode = () => `<dl class="ds-dl ds-dl--lines">
  <div class="ds-dl__row">
    <dt>${L('Equipe', 'Team', 'Equipo')}</dt>
    <dd>
      <span>${L('Design', 'Design', 'Diseño')}</span>
      <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" aria-label="${L('Editar equipe', 'Edit team', 'Editar equipo')}">…</button>
    </dd>
  </div>
</dl>

<!-- ${L('ao clicar no lápis, o dd vira:', 'clicking the pencil turns the dd into:', 'al hacer clic en el lápiz, el dd se vuelve:')} -->
<form>
  <div class="ds-field ds-field--sm"><input class="ds-field__input" aria-label="${L('Equipe', 'Team', 'Equipo')}" value="${L('Design', 'Design', 'Diseño')}"></div>
  <button type="submit" class="ds-btn ds-btn--primary ds-btn--sm">${L('Salvar', 'Save', 'Guardar')}</button>
  <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm">${L('Cancelar', 'Cancel', 'Cancelar')}</button>
</form>
<p class="ds-visually-hidden" role="status"></p>   <!-- “${L('Equipe salva', 'Team saved', 'Equipo guardado')}” -->`;

const jsCode = () => `import { mountTabs } from 'https://lumeui.dev/v/1.14/lume.js';

mountTabs(${L('pagina', 'page', 'pagina')});

function ${L('editar', 'edit', 'editar')}(${L('linha', 'row', 'fila')}) {
  const ${L('lapis', 'pencil', 'lapiz')} = ${L('linha', 'row', 'fila')}.querySelector('button');
  ${L('linha', 'row', 'fila')}.dd.replaceChildren(${L('formulario', 'form', 'formulario')});
  ${L('formulario', 'form', 'formulario')}.querySelector('input').select();

  ${L('formulario', 'form', 'formulario')}.onsubmit = async (e) => {
    e.preventDefault();
    await ${L('salvar', 'save', 'guardar')}(${L('linha', 'row', 'fila')}.id, ${L('formulario', 'form', 'formulario')}.input.value);
    ${L('mostrar', 'show', 'mostrar')}(${L('linha', 'row', 'fila')});                          // ${L('o valor novo já é a confirmação', 'the new value is the confirmation', 'el valor nuevo ya es la confirmación')}
    status.textContent = '${L('Equipe salva', 'Team saved', 'Equipo guardado')}';
    ${L('lapis', 'pencil', 'lapiz')}.focus();
  };
  ${L('formulario', 'form', 'formulario')}.onkeydown = (e) => e.key === 'Escape' && (${L('mostrar', 'show', 'mostrar')}(${L('linha', 'row', 'fila')}), ${L('lapis', 'pencil', 'lapiz')}.focus());
}`;

/* ───────── Página ───────── */

const section = (id, title, desc, body) => `
  <section class="doc-section" id="${id}" aria-labelledby="${id}-title">
    <header class="doc-section__header">
      <div>
        <h2 class="doc-section__title" id="${id}-title">${title}</h2>
        <p class="doc-section__desc">${desc}</p>
      </div>
    </header>
    ${body}
  </section>`;

const NAV = () => [
  ['de-exemplo', L('Exemplo', 'Example', 'Ejemplo')],
  ['de-anatomia', L('Anatomia', 'Anatomy', 'Anatomía')],
  ['de-regras', L('Regras', 'Rules', 'Reglas')],
  ['de-mensagens', L('Mensagens', 'Messages', 'Mensajes')],
  ['de-acessibilidade', L('Acessibilidade', 'Accessibility', 'Accesibilidad')],
  ['de-codigo', L('Código', 'Code', 'Código')],
  ['de-uso', L('Uso', 'Usage', 'Uso')],
];

const fmtShort = () => dateFormat({ day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

export default function renderDetalhe(page) {
  return `
  <div class="page doc de-page">
    <header class="doc-header">
      <div>
        <p class="doc-header__eyebrow">${page.group}</p>
        <h1 class="doc-header__title">${page.label}</h1>
        <p class="doc-header__lead">${L('A página de uma coisa só: quem ou o que é, os detalhes e o que mudou. Cada campo se edita no lugar, e cada mudança entra no histórico.', 'The page for a single thing: who or what it is, its details, and what changed. Each field is edited in place, and each change goes into the history.', 'La página de una sola cosa: quién o qué es, los detalles y lo que cambió. Cada campo se edita en el lugar y cada cambio entra en el historial.')}</p>
      </div>
      <dl class="doc-stats">
        <div class="doc-stat"><dt class="doc-stat__label">${L('campo editado por vez', 'field edited at a time', 'campo editado a la vez')}</dt><dd class="doc-stat__value">1</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('abas, no máximo', 'tabs, at most', 'pestañas, como máximo')}</dt><dd class="doc-stat__value">5</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('modo “Editar” da página', 'page “Edit” mode', 'modo “Editar” de la página')}</dt><dd class="doc-stat__value">0</dd></div>
      </dl>
    </header>

    <nav class="doc-nav" aria-label="${L('Nesta página', 'On this page', 'En esta página')}">
      ${NAV().map(([id, label]) => `<button type="button" class="doc-nav__link" data-target="${id}">${label}</button>`).join('')}
    </nav>

    ${section(
      'de-exemplo',
      L('Exemplo ao vivo', 'Live example', 'Ejemplo en vivo'),
      L('A página de uma pessoa da Listagem de dados. Edite os campos com o lápis e veja o histórico.', 'The page of a person from the Data list. Edit the fields with the pencil and check the history.', 'La página de una persona del Listado de datos. Edita los campos con el lápiz y mira el historial.'),
      `${screen(fmtShort())}
      <ul class="pt-tries" role="list">
        <li>${icon('pencil', { size: 16 })}${L('Edite a equipe e salve com Enter: o valor muda e Atividade ganha uma linha.', 'Edit the team and save with Enter: the value changes and Activity gets a new line.', 'Edita el equipo y guarda con Enter: el valor cambia y Actividad gana una fila.')}</li>
        <li>${icon('plus', { size: 16 })}${L('“Adicionar telefone” é o vazio que já é o botão.', '“Add phone” is the empty state that is already the button.', '“Añadir teléfono” es el vacío que ya es el botón.')}</li>
        <li>${icon('keyboard', { size: 16 })}${L('Apague o nome e tente salvar: o erro fica ali, na linha. Esc desiste.', 'Clear the name and try to save: the error stays right there, on the row. Esc gives up.', 'Borra el nombre e intenta guardar: el error queda ahí, en la fila. Esc desiste.')}</li>
      </ul>`,
    )}

    ${section(
      'de-anatomia',
      L('Anatomia', 'Anatomy', 'Anatomía'),
      L('Seis partes. O cabeçalho fica igual em todas as abas.', 'Six parts. The header stays the same on every tab.', 'Seis partes. El encabezado queda igual en todas las pestañas.'),
      `<ol class="pt-parts" role="list">${PARTS().map(([name, text], i) => `<li><span class="pt-parts__num">${i + 1}</span><div><p class="pt-parts__name">${name}</p><p class="pt-parts__text">${text}</p></div></li>`).join('')}</ol>`,
    )}

    ${section(
      'de-regras',
      L('Regras', 'Rules', 'Reglas'),
      L('Seis decisões que valem para qualquer página de detalhe.', 'Six decisions that apply to any detail page.', 'Seis decisiones que valen para cualquier página de detalle.'),
      `<div class="pt-rules">${RULES().map(([glyph, title, text]) => `<article class="pt-rule"><span class="pt-rule__icon">${icon(glyph, { size: 18 })}</span><p class="pt-rule__title">${title}</p><p class="pt-rule__text">${text}</p></article>`).join('')}</div>`,
    )}

    ${section(
      'de-mensagens',
      L('Mensagens', 'Messages', 'Mensajes'),
      L('O histórico conta uma história: quem, o quê, de onde para onde.', 'The history tells a story: who, what, from where to where.', 'El historial cuenta una historia: quién, qué, de dónde a dónde.'),
      `<div class="doc-table pt-writing">
        <div class="doc-table__head" aria-hidden="true"><span>${L('Situação', 'Situation', 'Situación')}</span><span>${L('Evite', 'Avoid', 'Evita')}</span><span>${L('Prefira', 'Prefer', 'Prefiere')}</span></div>
        ${WRITING().map(([s, bad, good]) => `<div class="doc-table__row"><span class="pt-writing__situation">${s}</span><span class="pt-writing__bad">${icon('x-circle', { size: 16 })}<span>${escapeHtml(bad)}</span></span><span class="pt-writing__good">${icon('check-circle', { size: 16 })}<span>${escapeHtml(good)}</span></span></div>`).join('')}
      </div>`,
    )}

    ${section(
      'de-acessibilidade',
      L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
      L('Editar no lugar só funciona se o foco souber para onde ir.', 'Editing in place only works if focus knows where to go.', 'Editar en el lugar solo funciona si el foco sabe adónde ir.'),
      a11yList([
        [L('Lápis com nome completo', 'Pencils with full names', 'Lápiz con nombre completo'), L('“Editar equipe”, não só “Editar”: numa lista de botões iguais, o nome é o que diferencia.', '“Edit team”, not just “Edit”: in a list of identical buttons, the name is what tells them apart.', '“Editar equipo”, no solo “Editar”: en una lista de botones iguales, el nombre es lo que los distingue.')],
        [L('Foco no campo e de volta', 'Focus to the field and back', 'Foco al campo y de vuelta'), L('Ao abrir, o foco vai para o campo, com o texto selecionado. Ao salvar ou cancelar, volta para o lápis da mesma linha.', 'On opening, focus goes to the field, with the text selected. On saving or canceling, it returns to the same row’s pencil.', 'Al abrir, el foco va al campo, con el texto seleccionado. Al guardar o cancelar, vuelve al lápiz de la misma fila.')],
        [L('Salvo, dito em voz alta', 'Saved, said out loud', 'Guardado, dicho en voz alta'), L(`Uma região ${ic('role="status"')} escondida diz “Equipe salva”: quem não vê a tela não fica na dúvida.`, `A hidden ${ic('role="status"')} region says “Team saved”: people who can’t see the screen aren’t left wondering.`, `Una región ${ic('role="status"')} oculta dice “Equipo guardado”: quien no ve la pantalla no queda con la duda.`)],
        [L('Erro preso ao campo', 'Error tied to the field', 'Error atado al campo'), L(`${ic('aria-invalid')} e ${ic('aria-describedby')} ligam a mensagem ao campo; o foco continua nele.`, `${ic('aria-invalid')} and ${ic('aria-describedby')} tie the message to the field; focus stays on it.`, `${ic('aria-invalid')} y ${ic('aria-describedby')} unen el mensaje al campo; el foco sigue en él.`)],
        [L('Estrutura que se lê', 'Structure you can read', 'Estructura que se lee'), L(`Breadcrumb com ${ic('aria-current')}, abas no padrão ARIA e propriedades em ${ic('&lt;dl&gt;')}: o leitor de tela diz “Equipe, Design”.`, `A breadcrumb with ${ic('aria-current')}, tabs in the ARIA pattern, and properties in a ${ic('&lt;dl&gt;')}: the screen reader says “Team, Design”.`, `Breadcrumb con ${ic('aria-current')}, pestañas en el patrón ARIA y propiedades en ${ic('&lt;dl&gt;')}: el lector de pantalla dice “Equipo, Diseño”.`)],
      ]),
    )}

    ${section(
      'de-codigo',
      L('Código', 'Code', 'Código'),
      L(`As propriedades são uma ${ic('ds-dl')}; a edição troca o ${ic('&lt;dd&gt;')} por um formulário pequeno. As abas vêm de ${ic('mountTabs')}.`, `Properties are a ${ic('ds-dl')}; editing swaps the ${ic('&lt;dd&gt;')} for a small form. Tabs come from ${ic('mountTabs')}.`, `Las propiedades son una ${ic('ds-dl')}; la edición cambia el ${ic('&lt;dd&gt;')} por un formulario pequeño. Las pestañas vienen de ${ic('mountTabs')}.`),
      `${codeBlock(htmlCode())}
      ${codeBlock(jsCode())}`,
    )}

    ${section(
      'de-uso',
      L('Uso', 'Usage', 'Uso'),
      L('Detalhe é para uma coisa só. Para comparar várias, volte para a lista.', 'Detail is for a single thing. To compare several, go back to the list.', 'El detalle es para una sola cosa. Para comparar varias, vuelve a la lista.'),
      `<div class="usage-grid">
        <article class="usage-card usage-card--do">
          <p class="usage-card__head">${icon('check-circle', { size: 20 })}${L('Faça: identidade sempre à vista', 'Do: identity always in view', 'Haz: identidad siempre a la vista')}</p>
          <p class="usage-card__text">${L('Nome, estado e ações ficam no cabeçalho, acima das abas. Trocar de aba não pode fazer a pessoa esquecer onde está.', 'Name, state, and actions stay in the header, above the tabs. Switching tabs can’t make people forget where they are.', 'Nombre, estado y acciones quedan en el encabezado, encima de las pestañas. Cambiar de pestaña no puede hacer olvidar dónde se está.')}</p>
        </article>
        <article class="usage-card usage-card--dont">
          <p class="usage-card__head">${icon('x-circle', { size: 20 })}${L('Evite: um botão Editar para a página toda', 'Avoid: one Edit button for the whole page', 'Evita: un botón Editar para toda la página')}</p>
          <p class="usage-card__text">${L('Transformar tudo em formulário para mudar um campo faz a pessoa procurar o campo de novo e salvar o que não mexeu.', 'Turning everything into a form to change one field makes people hunt for the field again and save what they didn’t touch.', 'Convertir todo en formulario para cambiar un campo obliga a buscar el campo de nuevo y guardar lo que no se tocó.')}</p>
        </article>
        <article class="usage-card usage-card--tip">
          <p class="usage-card__head">${icon('zap', { size: 20 })}${L('Campos que andam juntos, edite juntos', 'Fields that go together, edit together', 'Campos que van juntos, edítalos juntos')}</p>
          <p class="usage-card__text">${L('Endereço, cobrança: quando um campo não faz sentido sem os outros, abra um painel ou modal com o grupo inteiro.', 'Address, billing: when a field makes no sense without the others, open a panel or modal with the whole group.', 'Dirección, cobro: cuando un campo no tiene sentido sin los otros, abre un panel o modal con el grupo entero.')}</p>
        </article>
      </div>`,
    )}
  </div>`;
}

/* ───────── Comportamento ───────── */

export function mount(root) {
  const cleanups = [];
  const stage = root.querySelector('[data-de-stage]');
  const live = stage.querySelector('[data-de-live]');
  const history = stage.querySelector('[data-de-history]');
  const count = stage.querySelector('[data-de-count]');
  const fmt = fmtShort();
  const props = PROPS();
  const values = Object.fromEntries(props.map((p) => [p.id, p.value]));
  const events = HISTORY();
  let editing = null;

  const dd = (id) => stage.querySelector(`[data-de-dd="${id}"]`);
  const propOf = (id) => props.find((p) => p.id === id);

  const show = (id, focus) => {
    const p = propOf(id);
    dd(id).innerHTML = valueHtml(p, values[id]);
    dd(id).classList.remove('de-editing');
    if (editing === id) editing = null;
    if (focus) dd(id).querySelector('[data-de-edit]')?.focus();
  };

  const edit = (id) => {
    if (editing && editing !== id) show(editing);
    editing = id;
    const p = propOf(id);
    const cell = dd(id);
    cell.classList.add('de-editing');
    cell.innerHTML = editorHtml(p, values[id]);
    const input = cell.querySelector('input');
    if (input) {
      input.focus();
      input.select();
    } else cell.querySelector('[aria-checked="true"]').focus();
  };

  const addHistory = (title) => {
    events.unshift({ when: new Date(), now: true, tone: 'brand', glyph: 'pencil', title, text: '' });
    history.innerHTML = events.map((h) => timelineItem(h, fmt)).join('');
    count.textContent = events.length;
  };

  const save = (id, form) => {
    const p = propOf(id);
    const input = form.querySelector('input');
    const next = input ? input.value.trim() : form.querySelector('[aria-checked="true"]').dataset.value;
    const error = form.querySelector('.de-edit__error');
    if (p.required && !next) {
      error.hidden = false;
      error.innerHTML = `${icon('alert-circle', { size: 14 })}${L('Escreva o nome.', 'Write the name.', 'Escribe el nombre.')}`;
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', error.id);
      input.focus();
      return;
    }
    const before = values[id];
    if (next !== before) {
      values[id] = next;
      const from = display(p, before);
      const to = display(p, next);
      const name = p.label.toLowerCase();
      addHistory(
        !before
          ? L(`Você adicionou o ${name}`, `You added the ${name}`, `Agregaste el ${name}`)
          : !next
            ? L(`Você tirou o ${name}`, `You removed the ${name}`, `Quitaste el ${name}`)
            : L(`Você mudou ${p.id === 'equipe' || p.id === 'funcao' ? 'a' : 'o'} ${name} de ${from} para ${to}`, `You changed the ${name} from ${from} to ${to}`, `Cambiaste ${p.id === 'funcao' ? 'la' : 'el'} ${name} de ${from} a ${to}`),
      );
      if (id === 'nome') {
        stage.querySelector('[data-de-name]').textContent = next;
        stage.querySelector('[data-de-crumb]').textContent = next;
        stage.querySelector('[data-de-initials]').textContent = next.split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
      }
      if (id === 'funcao') stage.querySelector('[data-de-role]').textContent = to;
      live.textContent = L(`${p.label} salvo`, `${p.label} saved`, `${p.label} guardado`);
    }
    show(id, true);
  };

  const menu = createMenu(stage.querySelector('[data-de-more]'), {
    mode: 'action',
    options: [
      { value: 'off', label: L('Desativar', 'Deactivate', 'Desactivar'), icon: 'pause' },
      { type: 'separator' },
      { value: 'remove', label: L('Remover do espaço', 'Remove from workspace', 'Quitar del espacio'), icon: 'trash', tone: 'danger' },
    ],
    onChange: (value) => {
      const badge = stage.querySelector('[data-de-status]');
      if (value === 'off') {
        const prev = badge.outerHTML;
        badge.outerHTML = `<span class="ds-badge ds-badge--sm" data-de-status><span class="ds-badge__dot"></span>${L('Desativado', 'Deactivated', 'Desactivado')}</span>`;
        addHistory(L('Você desativou o acesso', 'You deactivated the access', 'Desactivaste el acceso'));
        toast(L(`${values.nome} desativada`, `${values.nome} deactivated`, `${values.nome} desactivada`), {
          action: { label: L('Desfazer', 'Undo', 'Deshacer'), onClick: () => (stage.querySelector('[data-de-status]').outerHTML = prev) },
        });
      }
      if (value === 'remove') toast(L('No app, você voltaria para a lista com Desfazer no aviso.', 'In the app, you’d go back to the list with Undo in the notice.', 'En la app, volverías a la lista con Deshacer en el aviso.'), { icon: 'trash' });
    },
  });

  const onClick = (event) => {
    const t = event.target;
    const btn = t.closest('[data-de-edit]');
    if (btn) return edit(btn.dataset.deEdit);
    const cancel = t.closest('[data-de-cancel]');
    if (cancel) return show(cancel.closest('[data-de-form]').dataset.deForm, true);
    const radio = t.closest('.de-roles [role="radio"]');
    if (radio) {
      radio.parentElement.querySelectorAll('[role="radio"]').forEach((r) => {
        r.setAttribute('aria-checked', String(r === radio));
        r.tabIndex = r === radio ? 0 : -1;
      });
      return;
    }
    if (t.closest('[data-de-copy]')) return copyText(`https://lume.app/pessoas/amanda-ribeiro`);
  };
  const onSubmit = (event) => {
    const form = event.target.closest('[data-de-form]');
    if (!form) return;
    event.preventDefault();
    save(form.dataset.deForm, form);
  };
  const onKeydown = (event) => {
    const form = event.target.closest('[data-de-form]');
    if (!form) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      show(form.dataset.deForm, true);
      return;
    }
    const radio = event.target.closest('.de-roles [role="radio"]');
    if (radio && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      const all = [...radio.parentElement.querySelectorAll('[role="radio"]')];
      const step = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1;
      const next = all[(all.indexOf(radio) + step + all.length) % all.length];
      next.click();
      next.focus();
    } else if (radio && event.key === 'Enter') {
      event.preventDefault();
      save(form.dataset.deForm, form);
    }
  };
  const onInput = (event) => {
    if (!event.target.matches('[data-de-form] input')) return;
    const error = event.target.closest('form').querySelector('.de-edit__error');
    error.hidden = true;
    event.target.removeAttribute('aria-invalid');
    event.target.removeAttribute('aria-describedby');
  };

  stage.addEventListener('click', onClick);
  stage.addEventListener('submit', onSubmit);
  stage.addEventListener('keydown', onKeydown);
  stage.addEventListener('input', onInput);

  cleanups.push(
    () => stage.removeEventListener('click', onClick),
    () => stage.removeEventListener('submit', onSubmit),
    () => stage.removeEventListener('keydown', onKeydown),
    () => stage.removeEventListener('input', onInput),
    () => menu.destroy(),
    mountTabs(stage),
    mountDocNav(root),
    mountCodeCopy(root),
  );
  return () => cleanups.forEach((fn) => fn?.());
}
