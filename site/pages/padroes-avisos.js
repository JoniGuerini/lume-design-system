import { icon } from '../../ds/icons/icons.js';
import { createMenu } from '../../ds/js/menu.js';
import { confirmModal } from '../../ds/js/modal.js';
import { toast } from '../../ds/js/toast.js';
import { mountDocNav } from '../doc-nav.js';
import { mountCodeCopy, codeBlock, a11yList, escapeHtml } from '../component-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/padroes-comum.css', 'site/pages/padroes-avisos.css'];

/* ───────── Exemplo: um relatório em edição ───────── */

const ic = (s) => `<code class="ds-inline-code">${s}</code>`;
const DOC_TITLE = () => L('Relatório de outubro', 'October report', 'Informe de octubre');

const SECTIONS = () => [
  { title: L('Resumo', 'Summary', 'Resumen'), text: L('O tempo de resposta caiu 18% e as pessoas ativas passaram de 2 mil.', 'Response time dropped 18% and active people went past 2 thousand.', 'El tiempo de respuesta bajó un 18% y las personas activas superaron las 2 mil.') },
  { title: '', text: L('A busca nova respondeu por metade das visitas à documentação.', 'The new search accounted for half of the visits to the docs.', 'La búsqueda nueva respondió por la mitad de las visitas a la documentación.') },
  { title: '', text: L('Em novembro, o foco é o primeiro uso e as telas de erro.', 'In November, the focus is first use and the error screens.', 'En noviembre, el foco es el primer uso y las pantallas de error.') },
];

const sectionLabel = (i) => L(`Seção ${i + 1}`, `Section ${i + 1}`, `Sección ${i + 1}`);

function screen() {
  return `<div class="pt-stage" data-av-stage>
    <div class="pt-stage__bar">
      <span class="pt-stage__label">${L('Simular fora do app', 'Simulate outside the app', 'Simular fuera de la app')}</span>
      <label class="ds-switch ds-switch--sm">
        <input type="checkbox" role="switch" class="ds-switch__input" data-av-offline>
        <span class="ds-choice__text"><span class="ds-choice__label">${L('Sem conexão', 'Offline', 'Sin conexión')}</span></span>
      </label>
    </div>
    <div class="pt-screen av-screen">
      <div class="ds-banner ds-banner--warning av-banner" role="region" aria-label="${L('Aviso', 'Notice', 'Aviso')}" data-av-banner hidden>
        <span class="ds-banner__icon">${icon('wifi-off', { size: 18 })}</span>
        <p class="ds-banner__text"><strong>${L('Sem conexão.', 'Offline.', 'Sin conexión.')}</strong> ${L('O que você escrever fica guardado e sobe quando a conexão voltar.', 'What you write is kept and goes up when the connection is back.', 'Lo que escribas queda guardado y se sube cuando vuelva la conexión.')}</p>
        <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-av-retry>${L('Tentar agora', 'Try now', 'Intentar ahora')}</button>
      </div>

      <header class="pt-screen__head">
        <div>
          <h3 class="pt-screen__title av-title">${DOC_TITLE()}<span class="ds-badge ds-badge--sm" data-av-state>${L('Rascunho', 'Draft', 'Borrador')}</span></h3>
          <p class="pt-screen__desc" data-av-meta>${L('3 seções · editado agora', '3 sections · edited just now', '3 secciones · editado ahora')}</p>
        </div>
        <div class="pt-screen__actions">
          <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-av-save>${L('Salvar rascunho', 'Save draft', 'Guardar borrador')}</button>
          <button type="button" class="ds-btn ds-btn--primary ds-btn--sm" data-av-publish>${icon('send', { size: 16 })}${L('Publicar', 'Publish', 'Publicar')}</button>
          <button type="button" class="ds-icon-btn ds-icon-btn--muted" data-av-more aria-label="${L('Mais ações', 'More actions', 'Más acciones')}" data-ds-tooltip="${L('Mais ações', 'More actions', 'Más acciones')}">${icon('more-horizontal', { size: 18 })}</button>
        </div>
      </header>

      <div data-av-alert-slot></div>

      <ol class="av-sections" role="list" data-av-sections>
        ${SECTIONS().map((s, i) => `<li class="av-section">
          <div class="ds-form-field">
            <label class="ds-form-field__label" for="av-title-${i}">${sectionLabel(i)}</label>
            <div class="ds-field ds-field--sm"><input class="ds-field__input" id="av-title-${i}" data-av-title value="${escapeHtml(s.title)}" placeholder="${L('Título da seção', 'Section title', 'Título de la sección')}" spellcheck="false"></div>
          </div>
          <p class="av-section__text">${s.text}</p>
        </li>`).join('')}
      </ol>

      <div class="ds-empty ds-empty--compact ds-empty--plain" data-av-deleted hidden>
        <span class="ds-empty__icon">${icon('trash', { size: 20 })}</span>
        <p class="ds-empty__title">${L('Relatório excluído', 'Report deleted', 'Informe eliminado')}</p>
        <p class="ds-empty__description">${L('No exemplo, dá para trazer de volta.', 'In the example, you can bring it back.', 'En el ejemplo, se puede recuperar.')}</p>
        <div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-av-restore>${L('Recomeçar o exemplo', 'Restart the example', 'Reiniciar el ejemplo')}</button></div>
      </div>
    </div>
  </div>`;
}

/* ───────── Textos da página ───────── */

const MEANS = () => [
  ['toast', L('Toast', 'Toast', 'Toast'), L('O resultado de algo que a pessoa fez, que deu certo ou tem volta.', 'The result of something the person did that worked or can be undone.', 'El resultado de algo que la persona hizo, que salió bien o tiene vuelta atrás.'), L('Sim, em 2 s (5 s com ação)', 'Yes, in 2 s (5 s with an action)', 'Sí, en 2 s (5 s con acción)'), L('Rascunho salvo', 'Draft saved', 'Borrador guardado')],
  ['alert-circle', L('Alerta', 'Alert', 'Alerta'), L('Um problema desta tela, que fica até ser resolvido. Perto de onde aconteceu.', 'A problem on this screen that stays until it’s solved. Close to where it happened.', 'Un problema de esta pantalla, que queda hasta resolverse. Cerca de donde ocurrió.'), L('Não, sai quando resolve', 'No, it leaves once solved', 'No, se va al resolverse'), L('2 seções estão sem título', '2 sections have no title', '2 secciones no tienen título')],
  ['banner', L('Banner', 'Banner', 'Banner'), L('Um estado que vale para o app inteiro: conexão, manutenção, plano.', 'A state that applies to the whole app: connection, maintenance, plan.', 'Un estado que vale para toda la app: conexión, mantenimiento, plan.'), L('Quando o estado acaba', 'When the state ends', 'Cuando termina el estado'), L('Sem conexão', 'Offline', 'Sin conexión')],
  ['dialog', L('Modal', 'Modal', 'Modal'), L('Uma decisão que não volta e precisa de resposta agora.', 'A decision that can’t be undone and needs an answer now.', 'Una decisión que no vuelve y necesita respuesta ahora.'), L('Fecha com a resposta', 'Closes with the answer', 'Se cierra con la respuesta'), L('Excluir o relatório?', 'Delete the report?', '¿Eliminar el informe?')],
];

const RULES = () => [
  ['undo', L('Desfazer vence confirmar', 'Undo beats confirm', 'Deshacer gana a confirmar'), L('Se dá para voltar, faça na hora e ofereça “Desfazer” no toast. Arquivar, mover e remover da lista são assim.', 'If it can be undone, do it right away and offer “Undo” in the toast. Archiving, moving, and removing from a list work this way.', 'Si se puede deshacer, hazlo al instante y ofrece “Deshacer” en el toast. Archivar, mover y quitar de una lista funcionan así.')],
  ['alert-triangle', L('Confirmar só o que não volta', 'Confirm only what can’t be undone', 'Confirmar solo lo que no vuelve'), L('O modal diz o que se perde, com números, e o botão repete o verbo: “Excluir relatório”.', 'The modal says what’s lost, with numbers, and the button repeats the verb: “Delete report”.', 'El modal dice qué se pierde, con números, y el botón repite el verbo: “Eliminar informe”.')],
  ['clock', L('Erro não vai em toast', 'Errors don’t go in a toast', 'El error no va en un toast'), L('O toast some em segundos. O que a pessoa precisa corrigir fica num alerta, até ser corrigido.', 'A toast vanishes in seconds. What people need to fix stays in an alert until it’s fixed.', 'El toast desaparece en segundos. Lo que la persona necesita corregir queda en una alerta hasta que se corrija.')],
  ['target', L('Perto de onde aconteceu', 'Close to where it happened', 'Cerca de donde ocurrió'), L('O alerta fica no topo da área afetada, com links que levam a cada campo. Nada de aviso no canto para um problema no meio.', 'The alert sits at the top of the affected area, with links to each field. No notice in a corner for a problem in the middle.', 'La alerta queda arriba del área afectada, con enlaces a cada campo. Nada de aviso en una esquina para un problema en el medio.')],
  ['layers', L('Um aviso para cada coisa', 'One notice per thing', 'Un aviso por cosa'), L('Não some alerta e toast para o mesmo problema. Um banner por vez; no máximo três toasts.', 'Don’t add an alert and a toast for the same problem. One banner at a time; at most three toasts.', 'No sumes alerta y toast para el mismo problema. Un banner por vez; como máximo tres toasts.')],
  ['eye', L('A cor nunca sozinha', 'Never color alone', 'Nunca solo el color'), L('Ícone e texto dizem o mesmo que o tom. Um alerta amarelo sem palavras não diz nada a quem não distingue a cor.', 'Icon and text say the same as the tone. A yellow alert with no words says nothing to someone who can’t tell the color.', 'Ícono y texto dicen lo mismo que el tono. Una alerta amarilla sin palabras no dice nada a quien no distingue el color.')],
];

const WRITING = () => [
  [L('Deu certo', 'It worked', 'Salió bien'), L('Operação concluída com sucesso!', 'Operation completed successfully!', '¡Operación completada con éxito!'), L('Rascunho salvo', 'Draft saved', 'Borrador guardado')],
  [L('Falta algo', 'Something missing', 'Falta algo'), L('Erro ao processar a solicitação.', 'Error processing the request.', 'Error al procesar la solicitud.'), L('2 seções estão sem título. Dê um título para publicar.', '2 sections have no title. Give them a title to publish.', '2 secciones no tienen título. Dales un título para publicar.')],
  [L('Sem rede', 'No network', 'Sin red'), L('ERR_INTERNET_DISCONNECTED', 'ERR_INTERNET_DISCONNECTED', 'ERR_INTERNET_DISCONNECTED'), L('Sem conexão. O que você escrever fica guardado.', 'Offline. What you write is kept.', 'Sin conexión. Lo que escribas queda guardado.')],
  [L('Excluir', 'Delete', 'Eliminar'), L('Tem certeza que deseja continuar?', 'Are you sure you want to continue?', '¿Seguro que desea continuar?'), L('Excluir o relatório? As 3 seções e os comentários somem.', 'Delete the report? The 3 sections and the comments go away.', '¿Eliminar el informe? Las 3 secciones y los comentarios desaparecen.')],
];

const htmlCode = () => `<!-- ${L('Alerta: no topo da área afetada, com um link para cada campo', 'Alert: at the top of the affected area, with a link to each field', 'Alerta: arriba del área afectada, con un enlace a cada campo')} -->
<div class="ds-alert ds-alert--warning" role="alert" tabindex="-1">
  <span class="ds-alert__icon"><ds-icon name="alert-triangle"></ds-icon></span>
  <div class="ds-alert__body">
    <p class="ds-alert__title">${L('2 seções estão sem título', '2 sections have no title', '2 secciones no tienen título')}</p>
    <ul class="ds-alert__list">
      <li><a href="#${L('secao', 'section', 'seccion')}-2">${L('Seção 2: dê um título.', 'Section 2: give it a title.', 'Sección 2: dale un título.')}</a></li>
      <li><a href="#${L('secao', 'section', 'seccion')}-3">${L('Seção 3: dê um título.', 'Section 3: give it a title.', 'Sección 3: dale un título.')}</a></li>
    </ul>
  </div>
</div>

<!-- ${L('Banner: um estado do app inteiro', 'Banner: a state of the whole app', 'Banner: un estado de toda la app')} -->
<div class="ds-banner ds-banner--warning" role="region" aria-label="${L('Aviso', 'Notice', 'Aviso')}">
  <span class="ds-banner__icon"><ds-icon name="wifi-off"></ds-icon></span>
  <p class="ds-banner__text"><strong>${L('Sem conexão.', 'Offline.', 'Sin conexión.')}</strong> ${L('O que você escrever fica guardado.', 'What you write is kept.', 'Lo que escribas queda guardado.')}</p>
</div>`;

const jsCode = () => `import { toast, confirmModal } from 'https://lumeui.dev/v/1.8/lume.js';

// ${L('Tem volta: faz na hora e oferece Desfazer', 'Can be undone: do it now and offer Undo', 'Tiene vuelta: hazlo ahora y ofrece Deshacer')}
${L('arquivar', 'archive', 'archivar')}(${L('relatorio', 'report', 'informe')});
toast('${L('Relatório arquivado', 'Report archived', 'Informe archivado')}', {
  action: { label: '${L('Desfazer', 'Undo', 'Deshacer')}', onClick: () => ${L('desarquivar', 'unarchive', 'desarchivar')}(${L('relatorio', 'report', 'informe')}) },
});

// ${L('Não tem volta: pergunta, dizendo o que se perde', 'Can’t be undone: ask, saying what’s lost', 'No tiene vuelta: pregunta, diciendo qué se pierde')}
const ok = await confirmModal({
  title: '${L('Excluir o relatório?', 'Delete the report?', '¿Eliminar el informe?')}',
  body: '${L('As 3 seções e os comentários somem. Não dá para desfazer.', 'The 3 sections and the comments go away. It can’t be undone.', 'Las 3 secciones y los comentarios desaparecen. No se puede deshacer.')}',
  confirmLabel: '${L('Excluir relatório', 'Delete report', 'Eliminar informe')}',
  tone: 'danger',   // ${L('o foco começa em Cancelar', 'focus starts on Cancel', 'el foco empieza en Cancelar')}
});`;

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
  ['av-exemplo', L('Exemplo', 'Example', 'Ejemplo')],
  ['av-qual', L('Qual usar', 'Which to use', 'Cuál usar')],
  ['av-regras', L('Regras', 'Rules', 'Reglas')],
  ['av-mensagens', L('Mensagens', 'Messages', 'Mensajes')],
  ['av-acessibilidade', L('Acessibilidade', 'Accessibility', 'Accesibilidad')],
  ['av-codigo', L('Código', 'Code', 'Código')],
  ['av-uso', L('Uso', 'Usage', 'Uso')],
];

export default function renderAvisos(page) {
  return `
  <div class="page doc av-page">
    <header class="doc-header">
      <div>
        <p class="doc-header__eyebrow">${page.group}</p>
        <h1 class="doc-header__title">${page.label}</h1>
        <p class="doc-header__lead">${L('Toast, alerta, banner ou modal: cada um responde a uma pergunta diferente. Quanto custa errar e quanto tempo o aviso precisa durar decidem qual usar.', 'Toast, alert, banner, or modal: each answers a different question. How much a mistake costs and how long the notice needs to last decide which to use.', 'Toast, alerta, banner o modal: cada uno responde a una pregunta distinta. Cuánto cuesta equivocarse y cuánto debe durar el aviso deciden cuál usar.')}</p>
      </div>
      <dl class="doc-stats">
        <div class="doc-stat"><dt class="doc-stat__label">${L('jeitos de avisar', 'ways to notify', 'formas de avisar')}</dt><dd class="doc-stat__value">4</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('banner por vez', 'banner at a time', 'banner a la vez')}</dt><dd class="doc-stat__value">1</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('erro em toast', 'errors in a toast', 'errores en toast')}</dt><dd class="doc-stat__value">0</dd></div>
      </dl>
    </header>

    <nav class="doc-nav" aria-label="${L('Nesta página', 'On this page', 'En esta página')}">
      ${NAV().map(([id, label]) => `<button type="button" class="doc-nav__link" data-target="${id}">${label}</button>`).join('')}
    </nav>

    ${section(
      'av-exemplo',
      L('Exemplo ao vivo', 'Live example', 'Ejemplo en vivo'),
      L('Um relatório em edição. Cada ação responde com o aviso que combina com ela.', 'A report being edited. Each action answers with the notice that fits it.', 'Un informe en edición. Cada acción responde con el aviso que le corresponde.'),
      `${screen()}
      <ul class="pt-tries" role="list">
        <li>${icon('check', { size: 16 })}${L('Salvar rascunho: um toast curto, sem ação. Deu certo e pronto.', 'Save draft: a short toast with no action. It worked, that’s it.', 'Guardar borrador: un toast corto, sin acción. Salió bien y listo.')}</li>
        <li>${icon('alert-circle', { size: 16 })}${L('Publicar: as seções sem título viram um alerta no topo, com links para cada campo.', 'Publish: the untitled sections become an alert at the top, with links to each field.', 'Publicar: las secciones sin título se vuelven una alerta arriba, con enlaces a cada campo.')}</li>
        <li>${icon('undo', { size: 16 })}${L('No ⋯, Arquivar acontece na hora, com Desfazer; Excluir pergunta antes.', 'In the ⋯, Archive happens right away, with Undo; Delete asks first.', 'En el ⋯, Archivar ocurre al instante, con Deshacer; Eliminar pregunta antes.')}</li>
        <li>${icon('wifi-off', { size: 16 })}${L('Ligue “Sem conexão” em cima do palco: o banner fica até a conexão voltar.', 'Turn on “Offline” above the stage: the banner stays until the connection is back.', 'Activa “Sin conexión” arriba del escenario: el banner queda hasta que vuelva la conexión.')}</li>
      </ul>`,
    )}

    ${section(
      'av-qual',
      L('Qual usar', 'Which to use', 'Cuál usar'),
      L('Quatro jeitos de avisar, do mais leve ao que interrompe.', 'Four ways to notify, from the lightest to the one that interrupts.', 'Cuatro formas de avisar, de la más ligera a la que interrumpe.'),
      `<div class="doc-table av-means">
        <div class="doc-table__head" aria-hidden="true"><span>${L('Meio', 'Means', 'Medio')}</span><span>${L('Quando', 'When', 'Cuándo')}</span><span>${L('Some sozinho?', 'Goes away on its own?', '¿Desaparece solo?')}</span><span>${L('Exemplo', 'Example', 'Ejemplo')}</span></div>
        ${MEANS().map(([glyph, name, when, gone, ex]) => `<div class="doc-table__row"><span class="av-means__name">${icon(glyph, { size: 16 })}${name}</span><span class="av-means__text">${when}</span><span class="av-means__muted">${gone}</span><span class="av-means__muted">“${ex}”</span></div>`).join('')}
      </div>`,
    )}

    ${section(
      'av-regras',
      L('Regras', 'Rules', 'Reglas'),
      L('Seis decisões que valem para qualquer aviso.', 'Six decisions that apply to any notice.', 'Seis decisiones que valen para cualquier aviso.'),
      `<div class="pt-rules">${RULES().map(([glyph, title, text]) => `<article class="pt-rule"><span class="pt-rule__icon">${icon(glyph, { size: 18 })}</span><p class="pt-rule__title">${title}</p><p class="pt-rule__text">${text}</p></article>`).join('')}</div>`,
    )}

    ${section(
      'av-mensagens',
      L('Mensagens', 'Messages', 'Mensajes'),
      L('O que aconteceu e o que fazer, nas palavras de quem usa. Código de erro fica no registro, não na tela.', 'What happened and what to do, in the words of the people using it. Error codes go in the log, not on screen.', 'Qué pasó y qué hacer, en palabras de quien usa. El código de error va al registro, no a la pantalla.'),
      `<div class="doc-table pt-writing">
        <div class="doc-table__head" aria-hidden="true"><span>${L('Situação', 'Situation', 'Situación')}</span><span>${L('Evite', 'Avoid', 'Evita')}</span><span>${L('Prefira', 'Prefer', 'Prefiere')}</span></div>
        ${WRITING().map(([s, bad, good]) => `<div class="doc-table__row"><span class="pt-writing__situation">${s}</span><span class="pt-writing__bad">${icon('x-circle', { size: 16 })}<span>${escapeHtml(bad)}</span></span><span class="pt-writing__good">${icon('check-circle', { size: 16 })}<span>${escapeHtml(good)}</span></span></div>`).join('')}
      </div>`,
    )}

    ${section(
      'av-acessibilidade',
      L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
      L('Cada meio fala de um jeito: uns sem tirar o foco, outros levando o foco até eles.', 'Each means speaks its own way: some without moving focus, others bringing focus to them.', 'Cada medio habla a su manera: unos sin mover el foco, otros llevando el foco hasta ellos.'),
      a11yList([
        [L('Toast educado', 'Polite toast', 'Toast discreto'), L(`A região do toast é ${ic('role="status"')}: é anunciado sem interromper. Com ação, dura 5 s e o tempo pausa com o foco ou o ponteiro em cima.`, `The toast region is ${ic('role="status"')}: it’s announced without interrupting. With an action, it lasts 5 s and the timer pauses with focus or pointer on it.`, `La región del toast es ${ic('role="status"')}: se anuncia sin interrumpir. Con acción, dura 5 s y el tiempo se pausa con el foco o el puntero encima.`)],
        [L('Desfazer também em outro lugar', 'Undo elsewhere too', 'Deshacer también en otro lugar'), L('Quem perdeu o toast precisa de outro caminho: o arquivado aparece em Arquivados, com Restaurar.', 'Whoever missed the toast needs another path: the archived item shows up in Archive, with Restore.', 'Quien se perdió el toast necesita otro camino: lo archivado aparece en Archivados, con Restaurar.')],
        [L('Alerta recebe o foco', 'Alert gets focus', 'La alerta recibe el foco'), L(`O alerta que aparece depois de uma ação tem ${ic('role="alert"')} e ${ic('tabindex="-1"')}; o foco vai até ele, e cada link leva ao campo certo.`, `The alert that appears after an action has ${ic('role="alert"')} and ${ic('tabindex="-1"')}; focus moves to it, and each link leads to the right field.`, `La alerta que aparece tras una acción tiene ${ic('role="alert"')} y ${ic('tabindex="-1"')}; el foco va hasta ella y cada enlace lleva al campo correcto.`)],
        [L('Banner não rouba o foco', 'Banners don’t steal focus', 'El banner no roba el foco'), L(`É uma região com nome (${ic('aria-label="Aviso"')}), fácil de achar pelos marcos, e o texto dele é anunciado quando aparece.`, `It’s a named region (${ic('aria-label="Notice"')}), easy to find through landmarks, and its text is announced when it appears.`, `Es una región con nombre (${ic('aria-label="Aviso"')}), fácil de encontrar por los puntos de referencia, y su texto se anuncia cuando aparece.`)],
        [L('Modal de perigo começa no Cancelar', 'Danger modals start on Cancel', 'El modal de peligro empieza en Cancelar'), L('Um Enter apressado não exclui nada. Esc fecha e o foco volta para o ⋯ que abriu o menu.', 'A hasty Enter doesn’t delete anything. Esc closes and focus returns to the ⋯ that opened the menu.', 'Un Enter apresurado no elimina nada. Esc cierra y el foco vuelve al ⋯ que abrió el menú.')],
      ]),
    )}

    ${section(
      'av-codigo',
      L('Código', 'Code', 'Código'),
      L(`Alerta e banner são marcação; ${ic('toast')} e ${ic('confirmModal')} são uma linha cada.`, `Alerts and banners are markup; ${ic('toast')} and ${ic('confirmModal')} are one line each.`, `Alerta y banner son marcado; ${ic('toast')} y ${ic('confirmModal')} son una línea cada uno.`),
      `${codeBlock(htmlCode())}
      ${codeBlock(jsCode())}`,
    )}

    ${section(
      'av-uso',
      L('Uso', 'Usage', 'Uso'),
      L('Na dúvida, o aviso mais leve que ainda dá conta do recado.', 'When in doubt, the lightest notice that still gets the job done.', 'En la duda, el aviso más ligero que aún cumple su función.'),
      `<div class="usage-grid">
        <article class="usage-card usage-card--do">
          <p class="usage-card__head">${icon('check-circle', { size: 20 })}${L('Faça: diga o próximo passo', 'Do: say the next step', 'Haz: di el siguiente paso')}</p>
          <p class="usage-card__text">${L('Todo aviso de problema termina com o que a pessoa pode fazer: tentar de novo, corrigir o campo, esperar a conexão.', 'Every problem notice ends with what people can do: try again, fix the field, wait for the connection.', 'Todo aviso de problema termina con lo que la persona puede hacer: intentar de nuevo, corregir el campo, esperar la conexión.')}</p>
        </article>
        <article class="usage-card usage-card--dont">
          <p class="usage-card__head">${icon('x-circle', { size: 20 })}${L('Evite: modal para dizer que deu certo', 'Avoid: a modal to say it worked', 'Evita: un modal para decir que salió bien')}</p>
          <p class="usage-card__text">${L('Interromper para comemorar obriga a pessoa a fechar algo que não pediu. Sucesso é toast, ou nem isso, quando a tela já mostra.', 'Interrupting to celebrate forces people to close something they didn’t ask for. Success is a toast, or not even that when the screen already shows it.', 'Interrumpir para celebrar obliga a cerrar algo que no se pidió. El éxito es un toast, o ni eso cuando la pantalla ya lo muestra.')}</p>
        </article>
        <article class="usage-card usage-card--tip">
          <p class="usage-card__head">${icon('zap', { size: 20 })}${L('A tela já mostra? Não avise', 'Screen already shows it? Don’t notify', '¿La pantalla ya lo muestra? No avises')}</p>
          <p class="usage-card__text">${L('Um item que aparece na lista ou um switch que muda de posição já são o aviso. Toast é para quando o efeito não está à vista.', 'An item that shows up in the list or a switch that flips is already the notice. Toasts are for when the effect isn’t in view.', 'Un elemento que aparece en la lista o un switch que cambia de posición ya son el aviso. El toast es para cuando el efecto no está a la vista.')}</p>
        </article>
      </div>`,
    )}
  </div>`;
}

/* ───────── Comportamento ───────── */

export function mount(root) {
  const cleanups = [];
  const stage = root.querySelector('[data-av-stage]');
  const banner = stage.querySelector('[data-av-banner]');
  const offline = stage.querySelector('[data-av-offline]');
  const slot = stage.querySelector('[data-av-alert-slot]');
  const stateEl = stage.querySelector('[data-av-state]');
  const sections = stage.querySelector('[data-av-sections]');
  const deleted = stage.querySelector('[data-av-deleted]');
  const head = stage.querySelector('.pt-screen__head');
  const titles = () => [...stage.querySelectorAll('[data-av-title]')];

  let archived = false;

  const setState = (label, tone) => {
    stateEl.textContent = label;
    stateEl.className = `ds-badge ds-badge--sm${tone ? ` ds-badge--${tone}` : ''}`;
  };
  const draft = () => setState(L('Rascunho', 'Draft', 'Borrador'));

  const clearAlert = () => {
    slot.innerHTML = '';
    titles().forEach((el) => el.removeAttribute('aria-invalid'));
  };

  const showAlert = (missing) => {
    const n = missing.length;
    slot.innerHTML = `<div class="ds-alert ds-alert--warning" role="alert" tabindex="-1" data-av-alert>
      <span class="ds-alert__icon">${icon('alert-triangle', { size: 18 })}</span>
      <div class="ds-alert__body">
        <p class="ds-alert__title">${n === 1 ? L('1 seção está sem título', '1 section has no title', '1 sección no tiene título') : L(`${n} seções estão sem título`, `${n} sections have no title`, `${n} secciones no tienen título`)}</p>
        <ul class="ds-alert__list">${missing.map((i) => `<li><a href="#av-title-${i}" data-av-jump="${i}">${L(`${sectionLabel(i)}: dê um título.`, `${sectionLabel(i)}: give it a title.`, `${sectionLabel(i)}: dale un título.`)}</a></li>`).join('')}</ul>
      </div>
    </div>`;
    missing.forEach((i) => stage.querySelector(`#av-title-${i}`).setAttribute('aria-invalid', 'true'));
    slot.querySelector('[data-av-alert]').focus({ preventScroll: true });
  };

  const publish = () => {
    const missing = titles().map((el, i) => (el.value.trim() ? -1 : i)).filter((i) => i >= 0);
    if (missing.length) return showAlert(missing);
    clearAlert();
    setState(L('Publicado', 'Published', 'Publicado'), 'success');
    toast(L('Relatório publicado', 'Report published', 'Informe publicado'), { tone: 'success' });
  };

  const archive = () => {
    archived = true;
    setState(L('Arquivado', 'Archived', 'Archivado'));
    toast(L('Relatório arquivado', 'Report archived', 'Informe archivado'), {
      icon: 'folder',
      action: {
        label: L('Desfazer', 'Undo', 'Deshacer'),
        onClick: () => {
          archived = false;
          draft();
        },
      },
    });
  };

  const remove = async () => {
    const ok = await confirmModal({
      title: L('Excluir o relatório?', 'Delete the report?', '¿Eliminar el informe?'),
      body: L(`“${DOC_TITLE()}”, as 3 seções e os comentários somem. Não dá para desfazer.`, `“${DOC_TITLE()}”, its 3 sections, and the comments go away. It can’t be undone.`, `“${DOC_TITLE()}”, sus 3 secciones y los comentarios desaparecen. No se puede deshacer.`),
      confirmLabel: L('Excluir relatório', 'Delete report', 'Eliminar informe'),
      tone: 'danger',
    });
    if (!ok || !stage.isConnected) return;
    clearAlert();
    head.hidden = true;
    sections.hidden = true;
    deleted.hidden = false;
    deleted.querySelector('[data-av-restore]').focus();
  };

  const restore = () => {
    head.hidden = false;
    sections.hidden = false;
    deleted.hidden = true;
    archived = false;
    draft();
    SECTIONS().forEach((s, i) => (stage.querySelector(`#av-title-${i}`).value = s.title));
    stage.querySelector('[data-av-more]').focus();
  };

  const setOffline = (on) => {
    banner.hidden = !on;
    offline.checked = on;
  };

  const menu = createMenu(stage.querySelector('[data-av-more]'), {
    mode: 'action',
    options: [
      { value: 'archive', label: L('Arquivar', 'Archive', 'Archivar'), icon: 'folder' },
      { type: 'separator' },
      { value: 'delete', label: L('Excluir…', 'Delete…', 'Eliminar…'), icon: 'trash', tone: 'danger' },
    ],
    onChange: (value) => {
      if (value === 'archive') {
        if (archived) return toast(L('Já está arquivado', 'It’s already archived', 'Ya está archivado'));
        archive();
      }
      if (value === 'delete') remove();
    },
  });

  const onClick = (event) => {
    const t = event.target;
    if (t.closest('[data-av-save]')) return toast(L('Rascunho salvo', 'Draft saved', 'Borrador guardado'));
    if (t.closest('[data-av-publish]')) return publish();
    if (t.closest('[data-av-restore]')) return restore();
    if (t.closest('[data-av-retry]')) {
      setOffline(false);
      return toast(L('Conexão de volta. Tudo salvo.', 'Back online. Everything saved.', 'Conexión de vuelta. Todo guardado.'), { icon: 'check' });
    }
    const jump = t.closest('[data-av-jump]');
    if (jump) {
      event.preventDefault();
      stage.querySelector(`#av-title-${jump.dataset.avJump}`).focus();
    }
  };
  const onInput = (event) => {
    if (!event.target.matches('[data-av-title]')) return;
    if (event.target.value.trim()) event.target.removeAttribute('aria-invalid');
    const alert = slot.querySelector('[data-av-alert]');
    if (!alert) return;
    const missing = titles().map((el, i) => (el.value.trim() ? -1 : i)).filter((i) => i >= 0);
    if (!missing.length) clearAlert();
    else {
      alert.querySelector('.ds-alert__list').innerHTML = missing.map((i) => `<li><a href="#av-title-${i}" data-av-jump="${i}">${L(`${sectionLabel(i)}: dê um título.`, `${sectionLabel(i)}: give it a title.`, `${sectionLabel(i)}: dale un título.`)}</a></li>`).join('');
      alert.querySelector('.ds-alert__title').textContent = missing.length === 1 ? L('1 seção está sem título', '1 section has no title', '1 sección no tiene título') : L(`${missing.length} seções estão sem título`, `${missing.length} sections have no title`, `${missing.length} secciones no tienen título`);
    }
  };
  const onChange = (event) => {
    if (event.target === offline) setOffline(offline.checked);
  };

  stage.addEventListener('click', onClick);
  stage.addEventListener('input', onInput);
  stage.addEventListener('change', onChange);

  cleanups.push(
    () => stage.removeEventListener('click', onClick),
    () => stage.removeEventListener('input', onInput),
    () => stage.removeEventListener('change', onChange),
    () => menu.destroy(),
    mountDocNav(root),
    mountCodeCopy(root),
  );
  return () => cleanups.forEach((fn) => fn?.());
}
