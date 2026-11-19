import { icon } from '../../ds/icons/icons.js';
import { createSegmented } from '../../ds/js/segmented.js';
import { createModal, confirmModal } from '../../ds/js/modal.js';
import { toast } from '../../ds/js/toast.js';
import { mountDocNav } from '../doc-nav.js';
import { mountCodeCopy, codeBlock, a11yList, escapeHtml } from '../component-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/padroes-comum.css', 'site/pages/padroes-configuracoes.css'];

/* ───────── Dados de exemplo ───────── */

const ic = (s) => `<code class="ds-inline-code">${s}</code>`;
const WORKSPACE = 'Lume';
const PROFILE = () => ({ nome: 'Ana Lima', email: 'ana@lume.app', sobre: L('Cuido do design do Lume.', 'I look after Lume’s design.', 'Me ocupo del diseño de Lume.') });

const SECTIONS = () => [
  { group: L('Você', 'You', 'Tú'), items: [
    ['perfil', 'user', L('Perfil', 'Profile', 'Perfil')],
    ['notificacoes', 'bell', L('Notificações', 'Notifications', 'Notificaciones')],
    ['aparencia', 'palette', L('Aparência', 'Appearance', 'Apariencia')],
  ] },
  { group: L('Espaço de trabalho', 'Workspace', 'Espacio de trabajo'), items: [
    ['perigo', 'alert-triangle', L('Zona de perigo', 'Danger zone', 'Zona de peligro')],
  ] },
];

const NOTIFY = () => [
  ['mencoes', true, L('Menções e respostas', 'Mentions and replies', 'Menciones y respuestas'), L('Quando alguém fala com você num comentário.', 'When someone talks to you in a comment.', 'Cuando alguien te habla en un comentario.')],
  ['convites', true, L('Convites aceitos', 'Accepted invites', 'Invitaciones aceptadas'), L('Quando uma pessoa que você convidou entra.', 'When someone you invited joins.', 'Cuando entra una persona que invitaste.')],
  ['novidades', false, L('Novidades do Lume', 'Lume news', 'Novedades de Lume'), L('Uma vez por mês, no máximo.', 'Once a month, at most.', 'Una vez al mes, como máximo.')],
];

const field = (id, label, value, { type = 'text', autocomplete, hint } = {}) => `<div class="ds-form-field">
    <label class="ds-form-field__label" for="${id}">${label}</label>
    <div class="ds-field"><input class="ds-field__input" id="${id}" name="${id}" type="${type}" value="${escapeHtml(value)}"${autocomplete ? ` autocomplete="${autocomplete}"` : ''}${hint ? ` aria-describedby="${id}-hint"` : ''} spellcheck="false" data-cf-input></div>
    <div class="ds-form-field__footer"${hint ? '' : ' hidden'}>${hint ? `<p class="ds-form-field__hint" id="${id}-hint">${hint}</p>` : ''}</div>
  </div>`;

const panelHead = (id, title, desc, saved = true) => `<header class="cf-panel__head">
    <div>
      <h4 class="cf-panel__title" id="cf-${id}-title" tabindex="-1">${title}</h4>
      <p class="cf-panel__desc">${desc}</p>
    </div>
    ${saved ? `<p class="cf-saved" role="status" data-cf-saved></p>` : ''}
  </header>`;

const switchRow = ([id, on, label, desc]) => `<div class="cf-row">
    <label class="ds-switch ds-switch--end">
      <input type="checkbox" role="switch" class="ds-switch__input" data-cf-instant="${id}"${on ? ' checked' : ''}>
      <span class="ds-choice__text"><span class="ds-choice__label">${label}</span><span class="ds-choice__description">${desc}</span></span>
    </label>
  </div>`;

const segmented = (id, label, options, checked) => `<div class="ds-segmented" role="radiogroup" aria-labelledby="${id}-label" data-cf-segmented="${id}">
    ${options.map(([v, t]) => `<button type="button" class="ds-segmented__item" role="radio" data-value="${v}" aria-checked="${v === checked}">${t}</button>`).join('')}
  </div>`;

const choiceRow = (id, label, desc, control) => `<div class="cf-row cf-row--split">
    <div class="ds-choice__text"><span class="ds-choice__label" id="${id}-label">${label}</span><span class="ds-choice__description">${desc}</span></div>
    ${control}
  </div>`;

function screen() {
  const p = PROFILE();
  return `<div class="pt-stage" data-cf-stage>
    <div class="pt-screen cf-screen">
      <header class="pt-screen__head">
        <div>
          <h3 class="pt-screen__title">${L('Configurações', 'Settings', 'Configuración')}</h3>
          <p class="pt-screen__desc">${L('Do seu perfil e deste espaço de trabalho.', 'For your profile and this workspace.', 'De tu perfil y de este espacio de trabajo.')}</p>
        </div>
      </header>

      <div class="cf-layout">
        <nav class="cf-nav" aria-label="${L('Seções das configurações', 'Settings sections', 'Secciones de la configuración')}">
          ${SECTIONS().map(({ group, items }) => `<p class="cf-nav__group">${group}</p>
          <ul class="cf-nav__list" role="list">
            ${items.map(([id, glyph, label]) => `<li><button type="button" class="cf-nav__item${id === 'perigo' ? ' cf-nav__item--danger' : ''}" data-cf-go="${id}"${id === 'perfil' ? ' aria-current="true"' : ''}>${icon(glyph, { size: 16 })}${label}</button></li>`).join('')}
          </ul>`).join('')}
        </nav>

        <div class="cf-panels">
          <section class="cf-panel" data-cf-panel="perfil" aria-labelledby="cf-perfil-title">
            ${panelHead('perfil', L('Perfil', 'Profile', 'Perfil'), L('Como as pessoas veem você no espaço de trabalho.', 'How people see you in the workspace.', 'Cómo te ven las personas en el espacio de trabajo.'), false)}
            <form class="cf-form" data-cf-form novalidate>
              ${field('cf-nome', L('Nome', 'Name', 'Nombre'), p.nome, { autocomplete: 'name' })}
              ${field('cf-email', L('E-mail', 'Email', 'Correo'), p.email, { type: 'email', autocomplete: 'email', hint: L('Se mudar, enviamos um link para confirmar. Até lá, vale o e-mail atual.', 'If you change it, we send a link to confirm. Until then, the current email stays.', 'Si lo cambias, enviamos un enlace para confirmar. Hasta entonces, vale el correo actual.') })}
              <div class="ds-form-field">
                <label class="ds-form-field__label" for="cf-sobre">${L('Sobre você', 'About you', 'Sobre ti')}</label>
                <div class="ds-field ds-field--multiline"><textarea class="ds-field__input" id="cf-sobre" name="cf-sobre" rows="3" data-cf-input>${escapeHtml(p.sobre)}</textarea></div>
              </div>
              <div class="cf-savebar">
                <p class="cf-savebar__status" data-cf-dirty aria-live="polite">${L('Tudo salvo', 'All saved', 'Todo guardado')}</p>
                <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-cf-discard disabled>${L('Descartar', 'Discard', 'Descartar')}</button>
                <button type="submit" class="ds-btn ds-btn--primary ds-btn--sm" data-cf-save disabled>${L('Salvar', 'Save', 'Guardar')}</button>
              </div>
            </form>
          </section>

          <section class="cf-panel" data-cf-panel="notificacoes" aria-labelledby="cf-notificacoes-title" hidden>
            ${panelHead('notificacoes', L('Notificações', 'Notifications', 'Notificaciones'), L('Cada ajuste vale assim que você toca nele.', 'Each setting applies as soon as you touch it.', 'Cada ajuste vale en cuanto lo tocas.'))}
            <div class="cf-rows">
              ${NOTIFY().map(switchRow).join('')}
              ${choiceRow('cf-resumo', L('Resumo por e-mail', 'Email digest', 'Resumen por correo'), L('O que aconteceu nos seus projetos, num e-mail só.', 'What happened in your projects, in a single email.', 'Lo que pasó en tus proyectos, en un solo correo.'), segmented('cf-resumo', '', [['diario', L('Diário', 'Daily', 'Diario')], ['semanal', L('Semanal', 'Weekly', 'Semanal')], ['nunca', L('Nunca', 'Never', 'Nunca')]], 'semanal'))}
            </div>
          </section>

          <section class="cf-panel" data-cf-panel="aparencia" aria-labelledby="cf-aparencia-title" hidden>
            ${panelHead('aparencia', L('Aparência', 'Appearance', 'Apariencia'), L('Você vê o efeito na hora: é a própria confirmação.', 'You see the effect right away: that is the confirmation.', 'Ves el efecto al instante: esa es la confirmación.'))}
            <div class="cf-rows">
              ${choiceRow('cf-tema', L('Tema', 'Theme', 'Tema'), L('Sistema acompanha o aparelho.', 'System follows your device.', 'Sistema sigue al dispositivo.'), segmented('cf-tema', '', [['sistema', L('Sistema', 'System', 'Sistema')], ['light', L('Claro', 'Light', 'Claro')], ['dark', L('Escuro', 'Dark', 'Oscuro')]], 'sistema'))}
              ${switchRow(['animacoes', false, L('Reduzir animações', 'Reduce motion', 'Reducir animaciones'), L('Troca deslizes e esmaecimentos por mudanças diretas.', 'Swaps slides and fades for direct changes.', 'Cambia deslizamientos y fundidos por cambios directos.')])}
            </div>
          </section>

          <section class="cf-panel" data-cf-panel="perigo" aria-labelledby="cf-perigo-title" hidden>
            ${panelHead('perigo', L('Zona de perigo', 'Danger zone', 'Zona de peligro'), L('Ações que afetam o espaço de trabalho inteiro.', 'Actions that affect the whole workspace.', 'Acciones que afectan a todo el espacio de trabajo.'), false)}
            <div class="cf-danger">
              <div class="cf-row cf-row--split">
                <div class="ds-choice__text"><span class="ds-choice__label">${L('Sair dos outros aparelhos', 'Sign out of other devices', 'Cerrar sesión en otros dispositivos')}</span><span class="ds-choice__description">${L('Encerra as sessões em outros aparelhos. Este continua conectado.', 'Ends the sessions on other devices. This one stays signed in.', 'Cierra las sesiones en otros dispositivos. Este sigue conectado.')}</span></div>
                <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-cf-signout>${icon('log-out', { size: 16 })}${L('Sair dos outros', 'Sign out others', 'Cerrar los otros')}</button>
              </div>
              <div class="cf-row cf-row--split">
                <div class="ds-choice__text"><span class="ds-choice__label">${L('Excluir espaço de trabalho', 'Delete workspace', 'Eliminar espacio de trabajo')}</span><span class="ds-choice__description">${L('Apaga projetos, arquivos e o acesso de todas as pessoas. Não dá para desfazer.', 'Deletes projects, files, and everyone’s access. It can’t be undone.', 'Borra proyectos, archivos y el acceso de todas las personas. No se puede deshacer.')}</span></div>
                <button type="button" class="ds-btn ds-btn--danger ds-btn--sm" data-cf-delete>${icon('trash', { size: 16 })}${L('Excluir…', 'Delete…', 'Eliminar…')}</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>`;
}

/* ───────── Textos da página ───────── */

const DECIDE = () => [
  [L('Liga e desliga', 'On and off', 'Encender y apagar'), L('Na hora, com “Salvo”', 'Right away, with “Saved”', 'Al instante, con “Guardado”'), L('É um clique, e outro clique volta atrás. Um botão Salvar só daria chance de esquecer.', 'It’s one click, and another click undoes it. A Save button would only give a chance to forget.', 'Es un clic, y otro clic lo deshace. Un botón Guardar solo daría la ocasión de olvidarlo.')],
  [L('Poucas opções', 'A few options', 'Pocas opciones'), L('Na hora', 'Right away', 'Al instante'), L('Tema, idioma, frequência: ver o efeito é a melhor confirmação.', 'Theme, language, frequency: seeing the effect is the best confirmation.', 'Tema, idioma, frecuencia: ver el efecto es la mejor confirmación.')],
  [L('Texto', 'Text', 'Texto'), L('No botão Salvar', 'On the Save button', 'En el botón Guardar'), L('Salvar a cada letra grava pela metade e mostra erro antes da hora.', 'Saving on every keystroke stores half-written values and shows errors too early.', 'Guardar con cada letra graba a medias y muestra errores antes de tiempo.')],
  [L('O que não volta', 'What can’t be undone', 'Lo que no vuelve'), L('Com confirmação', 'With confirmation', 'Con confirmación'), L('Excluir, trocar de plano, transferir: a única hora em que perguntar protege de verdade.', 'Deleting, changing plans, transferring: the only time asking really protects.', 'Eliminar, cambiar de plan, transferir: el único momento en que preguntar protege de verdad.')],
];

const PARTS = () => [
  [L('Navegação das seções', 'Section navigation', 'Navegación de secciones'), L('À esquerda, agrupada por quem é afetado: você ou o espaço de trabalho. A zona de perigo é sempre a última.', 'On the left, grouped by who’s affected: you or the workspace. The danger zone is always last.', 'A la izquierda, agrupada por a quién afecta: a ti o al espacio de trabajo. La zona de peligro siempre va al final.')],
  [L('Linha de ajuste', 'Setting row', 'Fila de ajuste'), L('Nome, uma frase do efeito e o controle à direita. A frase diz o que muda, não repete o nome.', 'Name, one sentence about the effect, and the control on the right. The sentence says what changes; it doesn’t repeat the name.', 'Nombre, una frase del efecto y el control a la derecha. La frase dice qué cambia, no repite el nombre.')],
  [L('Aviso de salvo', 'Saved notice', 'Aviso de guardado'), L('Um “Salvo” discreto ao lado do título da seção, que some sozinho. Nada de toast para cada switch.', 'A discreet “Saved” next to the section title that fades on its own. No toast for every switch.', 'Un “Guardado” discreto junto al título de la sección, que desaparece solo. Nada de toast para cada switch.')],
  [L('Barra de salvar', 'Save bar', 'Barra de guardar'), L('Só nos campos de texto: o estado (“Alterações não salvas”), Descartar e Salvar, que só funcionam quando algo mudou.', 'Only for text fields: the state (“Unsaved changes”), Discard, and Save, which only work when something changed.', 'Solo en los campos de texto: el estado (“Cambios sin guardar”), Descartar y Guardar, que solo funcionan cuando algo cambió.')],
  [L('Zona de perigo', 'Danger zone', 'Zona de peligro'), L('Contorno no tom de perigo, cada ação na sua linha e o botão dizendo o que faz.', 'A border in the danger tone, each action on its own row, and the button saying what it does.', 'Contorno en el tono de peligro, cada acción en su fila y el botón diciendo lo que hace.')],
];

const RULES = () => [
  ['toggle', L('Liga e desliga vale na hora', 'On and off applies right away', 'Encender y apagar vale al instante'), L('Switch é efeito imediato por definição. Se precisa de Salvar, o controle certo é um checkbox num formulário.', 'A switch is an immediate effect by definition. If it needs Save, the right control is a checkbox in a form.', 'El switch es efecto inmediato por definición. Si necesita Guardar, el control correcto es un checkbox en un formulario.')],
  ['pencil', L('Texto espera o Salvar', 'Text waits for Save', 'El texto espera a Guardar'), L('E o Salvar só funciona quando algo mudou. Ao lado, o estado em palavras: “Tudo salvo” ou “Alterações não salvas”.', 'And Save only works when something changed. Next to it, the state in words: “All saved” or “Unsaved changes”.', 'Y Guardar solo funciona cuando algo cambió. Al lado, el estado en palabras: “Todo guardado” o “Cambios sin guardar”.')],
  ['alert-circle', L('Sair sem salvar pergunta', 'Leaving unsaved asks', 'Salir sin guardar pregunta'), L('Trocar de seção com o perfil pela metade pergunta se é para descartar. É o que se perderia sem aviso.', 'Switching sections with the profile half-edited asks whether to discard. It’s what would be lost without warning.', 'Cambiar de sección con el perfil a medias pregunta si descartar. Es lo que se perdería sin aviso.')],
  ['shield', L('Perigo fica no fim e à parte', 'Danger goes last and apart', 'El peligro va al final y aparte'), L('Numa seção própria, com contorno no tom de perigo. Ninguém deve chegar lá por engano, rolando.', 'In its own section, with a border in the danger tone. Nobody should land there by accident while scrolling.', 'En una sección propia, con contorno en el tono de peligro. Nadie debería llegar ahí por error, desplazándose.')],
  ['type', L('Confirmar exige ler', 'Confirming takes reading', 'Confirmar exige leer'), L('Para o que não volta, a pessoa digita o nome do espaço. O botão diz “Excluir espaço de trabalho”, nunca “OK”.', 'For what can’t be undone, people type the workspace name. The button says “Delete workspace”, never “OK”.', 'Para lo que no vuelve, la persona escribe el nombre del espacio. El botón dice “Eliminar espacio de trabajo”, nunca “OK”.')],
  ['link', L('Cada seção tem endereço', 'Each section has an address', 'Cada sección tiene dirección'), L('No app, cada item é um link (/configuracoes/notificacoes). Dá para mandar para alguém e o Voltar funciona.', 'In the app, each item is a link (/settings/notifications). You can send it to someone and Back works.', 'En la app, cada ítem es un enlace (/configuracion/notificaciones). Se puede enviar a alguien y Volver funciona.')],
];

const WRITING = () => [
  [L('Salvo na hora', 'Saved instantly', 'Guardado al instante'), L('Suas preferências foram atualizadas com sucesso!', 'Your preferences were updated successfully!', '¡Tus preferencias se actualizaron con éxito!'), L('Salvo', 'Saved', 'Guardado')],
  [L('Sair sem salvar', 'Leaving unsaved', 'Salir sin guardar'), L('Tem certeza?', 'Are you sure?', '¿Estás seguro?'), L('Descartar as alterações do perfil?', 'Discard the profile changes?', '¿Descartar los cambios del perfil?')],
  [L('Excluir', 'Delete', 'Eliminar'), L('Esta ação é irreversível. Deseja continuar?', 'This action is irreversible. Do you wish to continue?', 'Esta acción es irreversible. ¿Desea continuar?'), L('Isso apaga 12 projetos, 48 arquivos e o acesso de 22 pessoas.', 'This deletes 12 projects, 48 files, and the access of 22 people.', 'Esto borra 12 proyectos, 48 archivos y el acceso de 22 personas.')],
  [L('Botão de confirmar', 'Confirm button', 'Botón de confirmar'), L('OK', 'OK', 'OK'), L('Excluir espaço de trabalho', 'Delete workspace', 'Eliminar espacio de trabajo')],
];

const htmlCode = () => `<section aria-labelledby="${L('notificacoes', 'notifications', 'notificaciones')}-titulo">
  <header>
    <h2 id="${L('notificacoes', 'notifications', 'notificaciones')}-titulo" tabindex="-1">${L('Notificações', 'Notifications', 'Notificaciones')}</h2>
    <p role="status" id="${L('salvo', 'saved', 'guardado')}"></p>   <!-- ${L('“Salvo” aparece aqui', '“Saved” shows up here', '“Guardado” aparece aquí')} -->
  </header>

  <label class="ds-switch ds-switch--end">
    <input type="checkbox" role="switch" class="ds-switch__input" name="${L('mencoes', 'mentions', 'menciones')}" checked>
    <span class="ds-choice__text">
      <span class="ds-choice__label">${L('Menções e respostas', 'Mentions and replies', 'Menciones y respuestas')}</span>
      <span class="ds-choice__description">${L('Quando alguém fala com você num comentário.', 'When someone talks to you in a comment.', 'Cuando alguien te habla en un comentario.')}</span>
    </span>
  </label>
</section>`;

const jsCode = () => `import { createModal, toast } from 'https://lumeui.dev/v/1.11/lume.js';

// ${L('Liga e desliga: grava na hora e avisa sem tirar o foco', 'On and off: store right away and announce without moving focus', 'Encender y apagar: guarda al instante y avisa sin mover el foco')}
${L('secao', 'section', 'seccion')}.addEventListener('change', async (e) => {
  await ${L('salvar', 'save', 'guardar')}({ [e.target.name]: e.target.checked });
  ${L('salvo', 'saved', 'guardado')}.textContent = '${L('Salvo', 'Saved', 'Guardado')}';
  setTimeout(() => (${L('salvo', 'saved', 'guardado')}.textContent = ''), 2000);
});

// ${L('Excluir: só confirma quem digitou o nome', 'Delete: only confirms once the name is typed', 'Eliminar: solo confirma quien escribió el nombre')}
const modal = createModal({
  title: '${L('Excluir “Lume”?', 'Delete “Lume”?', '¿Eliminar “Lume”?')}', tone: 'danger', size: 'sm', body: ${L('corpo', 'body', 'cuerpo')},
  actions: [
    { label: '${L('Cancelar', 'Cancel', 'Cancelar')}', value: 'cancel' },
    { label: '${L('Excluir espaço de trabalho', 'Delete workspace', 'Eliminar espacio de trabajo')}', value: 'confirm', variant: 'danger' },
  ],
});
const ${L('excluir', 'confirm', 'eliminar')} = modal.el.querySelector('[data-ds-modal-close="confirm"]');
${L('excluir', 'confirm', 'eliminar')}.disabled = true;
${L('campo', 'input', 'campo')}.addEventListener('input', () => (${L('excluir', 'confirm', 'eliminar')}.disabled = ${L('campo', 'input', 'campo')}.value.trim() !== 'Lume'));
if ((await modal.open()) === 'confirm') ${L('excluirEspaco', 'deleteWorkspace', 'eliminarEspacio')}();
modal.destroy();`;

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
  ['cf-exemplo', L('Exemplo', 'Example', 'Ejemplo')],
  ['cf-salvar', L('Quando salvar', 'When to save', 'Cuándo guardar')],
  ['cf-anatomia', L('Anatomia', 'Anatomy', 'Anatomía')],
  ['cf-regras', L('Regras', 'Rules', 'Reglas')],
  ['cf-mensagens', L('Mensagens', 'Messages', 'Mensajes')],
  ['cf-acessibilidade', L('Acessibilidade', 'Accessibility', 'Accesibilidad')],
  ['cf-codigo', L('Código', 'Code', 'Código')],
  ['cf-uso', L('Uso', 'Usage', 'Uso')],
];

const table = (cls, head, rows) => `<div class="doc-table ${cls}">
    <div class="doc-table__head" aria-hidden="true">${head.map((h) => `<span>${h}</span>`).join('')}</div>
    ${rows}
  </div>`;

export default function renderConfiguracoes(page) {
  return `
  <div class="page doc cf-page">
    <header class="doc-header">
      <div>
        <p class="doc-header__eyebrow">${page.group}</p>
        <h1 class="doc-header__title">${page.label}</h1>
        <p class="doc-header__lead">${L('Onde a pessoa ajusta o perfil, os avisos e a aparência, e de vez em quando faz algo sério. O que é leve vale na hora; texto espera o Salvar; o que não volta pede confirmação.', 'Where people adjust their profile, notifications, and appearance, and now and then do something serious. Light things apply right away; text waits for Save; what can’t be undone asks for confirmation.', 'Donde la persona ajusta su perfil, los avisos y la apariencia, y de vez en cuando hace algo serio. Lo ligero vale al instante; el texto espera a Guardar; lo que no vuelve pide confirmación.')}</p>
      </div>
      <dl class="doc-stats">
        <div class="doc-stat"><dt class="doc-stat__label">${L('seções', 'sections', 'secciones')}</dt><dd class="doc-stat__value">4</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('botão Salvar', 'Save button', 'botón Guardar')}</dt><dd class="doc-stat__value">1</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('confirmações', 'confirmations', 'confirmaciones')}</dt><dd class="doc-stat__value">2</dd></div>
      </dl>
    </header>

    <nav class="doc-nav" aria-label="${L('Nesta página', 'On this page', 'En esta página')}">
      ${NAV().map(([id, label]) => `<button type="button" class="doc-nav__link" data-target="${id}">${label}</button>`).join('')}
    </nav>

    ${section(
      'cf-exemplo',
      L('Exemplo ao vivo', 'Live example', 'Ejemplo en vivo'),
      L('As configurações de uma conta no Lume. Mexa nos ajustes, edite o perfil e tente trocar de seção sem salvar.', 'The settings of a Lume account. Change the settings, edit the profile, and try switching sections without saving.', 'La configuración de una cuenta en Lume. Cambia los ajustes, edita el perfil e intenta cambiar de sección sin guardar.'),
      `${screen()}
      <ul class="pt-tries" role="list">
        <li>${icon('pencil', { size: 16 })}${L('Mude o nome e vá para Notificações: o Lume pergunta se é para descartar.', 'Change the name and go to Notifications: Lume asks whether to discard.', 'Cambia el nombre y ve a Notificaciones: Lume pregunta si descartar.')}</li>
        <li>${icon('toggle', { size: 16 })}${L('Ligue um switch: “Salvo” aparece ao lado do título, sem botão.', 'Turn on a switch: “Saved” shows next to the title, with no button.', 'Activa un switch: “Guardado” aparece junto al título, sin botón.')}</li>
        <li>${icon('moon', { size: 16 })}${L('Em Aparência, escolha Escuro: o palco inteiro troca de tema.', 'In Appearance, choose Dark: the whole stage switches theme.', 'En Apariencia, elige Oscuro: todo el escenario cambia de tema.')}</li>
        <li>${icon('trash', { size: 16 })}${L(`Em Zona de perigo, Excluir só libera depois de digitar “${WORKSPACE}”.`, `In Danger zone, Delete only unlocks after typing “${WORKSPACE}”.`, `En Zona de peligro, Eliminar solo se habilita tras escribir “${WORKSPACE}”.`)}</li>
      </ul>`,
    )}

    ${section(
      'cf-salvar',
      L('Na hora, no botão ou com confirmação', 'Right away, on the button, or with confirmation', 'Al instante, en el botón o con confirmación'),
      L('A decisão central do padrão: quanto custa errar decide quando o ajuste vale.', 'The core decision of the pattern: how much a mistake costs decides when the setting applies.', 'La decisión central del patrón: cuánto cuesta equivocarse decide cuándo vale el ajuste.'),
      table('cf-decide', [L('Ajuste', 'Setting', 'Ajuste'), L('Vale', 'Applies', 'Vale'), L('Por quê', 'Why', 'Por qué')], DECIDE().map(([a, b, c]) => `<div class="doc-table__row"><span class="pt-writing__situation">${a}</span><span class="cf-decide__when">${b}</span><span class="cf-decide__why">${c}</span></div>`).join('')),
    )}

    ${section(
      'cf-anatomia',
      L('Anatomia', 'Anatomy', 'Anatomía'),
      L('Cinco partes. A barra de salvar só aparece onde há texto.', 'Five parts. The save bar only shows up where there’s text.', 'Cinco partes. La barra de guardar solo aparece donde hay texto.'),
      `<ol class="pt-parts" role="list">${PARTS().map(([name, text], i) => `<li><span class="pt-parts__num">${i + 1}</span><div><p class="pt-parts__name">${name}</p><p class="pt-parts__text">${text}</p></div></li>`).join('')}</ol>`,
    )}

    ${section(
      'cf-regras',
      L('Regras', 'Rules', 'Reglas'),
      L('Seis decisões que valem para qualquer tela de configurações.', 'Six decisions that apply to any settings screen.', 'Seis decisiones que valen para cualquier pantalla de configuración.'),
      `<div class="pt-rules">${RULES().map(([glyph, title, text]) => `<article class="pt-rule"><span class="pt-rule__icon">${icon(glyph, { size: 18 })}</span><p class="pt-rule__title">${title}</p><p class="pt-rule__text">${text}</p></article>`).join('')}</div>`,
    )}

    ${section(
      'cf-mensagens',
      L('Mensagens', 'Messages', 'Mensajes'),
      L('O que é leve, em uma palavra. O que é sério, com números e o nome do que se perde.', 'Light things, in one word. Serious things, with numbers and the name of what’s lost.', 'Lo ligero, en una palabra. Lo serio, con números y el nombre de lo que se pierde.'),
      table('pt-writing', [L('Situação', 'Situation', 'Situación'), L('Evite', 'Avoid', 'Evita'), L('Prefira', 'Prefer', 'Prefiere')], WRITING().map(([s, bad, good]) => `<div class="doc-table__row"><span class="pt-writing__situation">${s}</span><span class="pt-writing__bad">${icon('x-circle', { size: 16 })}<span>${escapeHtml(bad)}</span></span><span class="pt-writing__good">${icon('check-circle', { size: 16 })}<span>${escapeHtml(good)}</span></span></div>`).join('')),
    )}

    ${section(
      'cf-acessibilidade',
      L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
      L('Salvar na hora não pode ser silencioso para quem não vê a tela.', 'Saving right away can’t be silent for people who can’t see the screen.', 'Guardar al instante no puede ser silencioso para quien no ve la pantalla.'),
      a11yList([
        [L('Seção atual marcada', 'Current section marked', 'Sección actual marcada'), L(`A navegação tem nome e ${ic('aria-current')} na seção aberta. Ao trocar, o foco vai para o título da seção (${ic('tabindex="-1"')}), e o leitor de tela diz onde a pessoa chegou.`, `The navigation has a name and ${ic('aria-current')} on the open section. When switching, focus goes to the section title (${ic('tabindex="-1"')}), and the screen reader says where the person landed.`, `La navegación tiene nombre y ${ic('aria-current')} en la sección abierta. Al cambiar, el foco va al título de la sección (${ic('tabindex="-1"')}) y el lector de pantalla dice adónde llegó la persona.`)],
        [L('Switch com nome e efeito', 'Switches with name and effect', 'Switch con nombre y efecto'), L(`${ic('role="switch"')} dentro do ${ic('&lt;label&gt;')}, com o nome e a descrição: o leitor de tela diz “Menções e respostas, ligado” e a frase do efeito.`, `${ic('role="switch"')} inside the ${ic('&lt;label&gt;')}, with name and description: the screen reader says “Mentions and replies, on” and the effect sentence.`, `${ic('role="switch"')} dentro del ${ic('&lt;label&gt;')}, con nombre y descripción: el lector de pantalla dice “Menciones y respuestas, activado” y la frase del efecto.`)],
        [L('“Salvo” anunciado', '“Saved” announced', '“Guardado” anunciado'), L(`O aviso fica numa região ${ic('role="status"')}: é dito sem tirar o foco do controle.`, `The notice sits in a ${ic('role="status"')} region: it’s announced without taking focus off the control.`, `El aviso está en una región ${ic('role="status"')}: se anuncia sin quitar el foco del control.`)],
        [L('Estado da barra em palavras', 'Save bar state in words', 'Estado de la barra en palabras'), L(`“Alterações não salvas” fica em ${ic('aria-live')}; Salvar desativado tem o motivo ao lado, à vista.`, `“Unsaved changes” sits in ${ic('aria-live')}; a disabled Save has the reason right next to it, in view.`, `“Cambios sin guardar” está en ${ic('aria-live')}; Guardar desactivado tiene el motivo al lado, a la vista.`)],
        [L('Exclusão pelo teclado', 'Deleting by keyboard', 'Eliminar con el teclado'), L('O modal abre com o foco no campo do nome. Enter confirma só quando o nome confere; Esc cancela e o foco volta ao botão Excluir.', 'The modal opens with focus on the name field. Enter confirms only when the name matches; Esc cancels and focus returns to the Delete button.', 'El modal se abre con el foco en el campo del nombre. Enter confirma solo cuando el nombre coincide; Esc cancela y el foco vuelve al botón Eliminar.')],
      ]),
    )}

    ${section(
      'cf-codigo',
      L('Código', 'Code', 'Código'),
      L(`Switches e ${ic('createSegmented')} gravam na hora; o perfil é um ${ic('&lt;form&gt;')} comum; a exclusão usa ${ic('createModal')} para travar o botão até o nome conferir.`, `Switches and ${ic('createSegmented')} store right away; the profile is a plain ${ic('&lt;form&gt;')}; deletion uses ${ic('createModal')} to lock the button until the name matches.`, `Los switches y ${ic('createSegmented')} guardan al instante; el perfil es un ${ic('&lt;form&gt;')} común; la eliminación usa ${ic('createModal')} para bloquear el botón hasta que el nombre coincida.`),
      `${codeBlock(htmlCode())}
      ${codeBlock(jsCode())}`,
    )}

    ${section(
      'cf-uso',
      L('Uso', 'Usage', 'Uso'),
      L('Configurações são para o que a pessoa muda de vez em quando. O que ela muda todo dia mora na própria tela.', 'Settings are for what people change now and then. What they change every day lives on the screen itself.', 'La configuración es para lo que la persona cambia de vez en cuando. Lo que cambia todos los días vive en la propia pantalla.'),
      `<div class="usage-grid">
        <article class="usage-card usage-card--do">
          <p class="usage-card__head">${icon('check-circle', { size: 20 })}${L('Faça: agrupe por quem é afetado', 'Do: group by who’s affected', 'Haz: agrupa por a quién afecta')}</p>
          <p class="usage-card__text">${L('“Você” e “Espaço de trabalho” deixam claro se a mudança é só sua ou de todo mundo, antes mesmo de abrir a seção.', '“You” and “Workspace” make it clear whether the change is just yours or everyone’s, before even opening the section.', '“Tú” y “Espacio de trabajo” dejan claro si el cambio es solo tuyo o de todos, antes incluso de abrir la sección.')}</p>
        </article>
        <article class="usage-card usage-card--dont">
          <p class="usage-card__head">${icon('x-circle', { size: 20 })}${L('Evite: um Salvar para a página toda', 'Avoid: one Save for the whole page', 'Evita: un Guardar para toda la página')}</p>
          <p class="usage-card__text">${L('Misturar switches, tema e texto num Salvar só faz a pessoa sair achando que ligou algo que não ligou.', 'Mixing switches, theme, and text under one Save makes people leave thinking they turned on something they didn’t.', 'Mezclar switches, tema y texto en un solo Guardar hace que la persona se vaya creyendo que activó algo que no activó.')}</p>
        </article>
        <article class="usage-card usage-card--tip">
          <p class="usage-card__head">${icon('zap', { size: 20 })}${L('Ajuste com muitos níveis vira página', 'A setting with many levels becomes a page', 'Un ajuste con muchos niveles se vuelve página')}</p>
          <p class="usage-card__text">${L('Permissões por projeto, regras de cobrança: quando a linha precisa de uma tabela, ela leva para uma página própria.', 'Per-project permissions, billing rules: when the row needs a table, it leads to a page of its own.', 'Permisos por proyecto, reglas de cobro: cuando la fila necesita una tabla, lleva a una página propia.')}</p>
        </article>
      </div>`,
    )}
  </div>`;
}

/* ───────── Comportamento ───────── */

function deleteBody() {
  const body = document.createElement('div');
  body.className = 'cf-delete';
  body.innerHTML = `<p>${L('Isso apaga 12 projetos, 48 arquivos e o acesso de 22 pessoas. Não dá para desfazer.', 'This deletes 12 projects, 48 files, and the access of 22 people. It can’t be undone.', 'Esto borra 12 proyectos, 48 archivos y el acceso de 22 personas. No se puede deshacer.')}</p>
    <div class="ds-form-field">
      <label class="ds-form-field__label" for="cf-confirm-name"><span>${L(`Digite <strong>${WORKSPACE}</strong> para confirmar`, `Type <strong>${WORKSPACE}</strong> to confirm`, `Escribe <strong>${WORKSPACE}</strong> para confirmar`)}</span></label>
      <div class="ds-field"><input class="ds-field__input" id="cf-confirm-name" autocomplete="off" spellcheck="false" autocapitalize="none"></div>
    </div>`;
  return body;
}

export function mount(root) {
  const cleanups = [];
  const stage = root.querySelector('[data-cf-stage]');
  const form = stage.querySelector('[data-cf-form]');
  const dirtyEl = stage.querySelector('[data-cf-dirty]');
  const saveBtn = stage.querySelector('[data-cf-save]');
  const discardBtn = stage.querySelector('[data-cf-discard]');
  const inputs = () => [...form.querySelectorAll('[data-cf-input]')];

  let saved = Object.fromEntries(inputs().map((el) => [el.id, el.value]));
  let current = 'perfil';
  const timers = new Map();

  const isDirty = () => inputs().some((el) => el.value !== saved[el.id]);
  const syncDirty = () => {
    const dirty = isDirty();
    saveBtn.disabled = !dirty;
    discardBtn.disabled = !dirty;
    dirtyEl.textContent = dirty ? L('Alterações não salvas', 'Unsaved changes', 'Cambios sin guardar') : L('Tudo salvo', 'All saved', 'Todo guardado');
    dirtyEl.toggleAttribute('data-dirty', dirty);
  };

  const setError = (input, text) => {
    const footer = input.closest('.ds-form-field').querySelector('.ds-form-field__footer');
    footer.querySelector('.ds-form-field__error')?.remove();
    const hint = footer.querySelector('.ds-form-field__hint');
    const ids = [hint?.id, text && `${input.id}-error`].filter(Boolean).join(' ');
    if (ids) input.setAttribute('aria-describedby', ids);
    else input.removeAttribute('aria-describedby');
    if (!text) {
      input.removeAttribute('aria-invalid');
      footer.hidden = !hint;
      return;
    }
    input.setAttribute('aria-invalid', 'true');
    footer.hidden = false;
    footer.insertAdjacentHTML('afterbegin', `<p class="ds-form-field__error" id="${input.id}-error">${icon('alert-circle', { size: 14 })}${text}</p>`);
  };

  const discard = () => {
    inputs().forEach((el) => {
      el.value = saved[el.id];
      setError(el, '');
    });
    syncDirty();
  };

  const flashSaved = (panel) => {
    const el = panel.querySelector('[data-cf-saved]');
    if (!el) return;
    el.innerHTML = `${icon('check', { size: 14 })}${L('Salvo', 'Saved', 'Guardado')}`;
    clearTimeout(timers.get(el));
    timers.set(el, setTimeout(() => (el.textContent = ''), 2000));
  };

  const show = (id) => {
    current = id;
    stage.querySelectorAll('[data-cf-go]').forEach((b) => (b.dataset.cfGo === id ? b.setAttribute('aria-current', 'true') : b.removeAttribute('aria-current')));
    stage.querySelectorAll('[data-cf-panel]').forEach((p) => (p.hidden = p.dataset.cfPanel !== id));
    stage.querySelector(`#cf-${id}-title`).focus({ preventScroll: true });
  };

  const go = async (id) => {
    if (id === current) return;
    if (current === 'perfil' && isDirty()) {
      const ok = await confirmModal({
        title: L('Descartar as alterações do perfil?', 'Discard the profile changes?', '¿Descartar los cambios del perfil?'),
        body: L('O que você mudou ainda não foi salvo.', 'What you changed hasn’t been saved yet.', 'Lo que cambiaste aún no se guardó.'),
        confirmLabel: L('Descartar', 'Discard', 'Descartar'),
        cancelLabel: L('Continuar editando', 'Keep editing', 'Seguir editando'),
        tone: 'danger',
      });
      if (!ok) return;
      discard();
    }
    show(id);
  };

  const save = async (event) => {
    event.preventDefault();
    const nome = form.querySelector('#cf-nome');
    const email = form.querySelector('#cf-email');
    const nameErr = nome.value.trim() ? '' : L('Escreva seu nome.', 'Write your name.', 'Escribe tu nombre.');
    const emailErr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()) ? '' : L('Confira o e-mail: falta o @ ou o domínio.', 'Check the email: the @ or the domain is missing.', 'Revisa el correo: falta la @ o el dominio.');
    setError(nome, nameErr);
    setError(email, emailErr);
    if (nameErr || emailErr) return (nameErr ? nome : email).focus();
    const emailChanged = email.value.trim() !== saved['cf-email'];
    saveBtn.setAttribute('aria-busy', 'true');
    saveBtn.innerHTML = `<span class="ds-spinner ds-spinner--sm" aria-hidden="true"></span>${L('Salvando', 'Saving', 'Guardando')}`;
    await new Promise((r) => setTimeout(r, 600));
    if (!stage.isConnected) return;
    saveBtn.removeAttribute('aria-busy');
    saveBtn.textContent = L('Salvar', 'Save', 'Guardar');
    saved = Object.fromEntries(inputs().map((el) => [el.id, el.value]));
    syncDirty();
    toast(
      emailChanged
        ? L(`Perfil salvo. Enviamos um link para ${email.value.trim()}.`, `Profile saved. We sent a link to ${email.value.trim()}.`, `Perfil guardado. Enviamos un enlace a ${email.value.trim()}.`)
        : L('Perfil salvo.', 'Profile saved.', 'Perfil guardado.'),
      { tone: 'success' },
    );
  };

  const deleteWorkspace = async () => {
    const modal = createModal({
      title: L(`Excluir “${WORKSPACE}”?`, `Delete “${WORKSPACE}”?`, `¿Eliminar “${WORKSPACE}”?`),
      tone: 'danger',
      size: 'sm',
      body: deleteBody(),
      actions: [
        { label: L('Cancelar', 'Cancel', 'Cancelar'), value: 'cancel' },
        { label: L('Excluir espaço de trabalho', 'Delete workspace', 'Eliminar espacio de trabajo'), value: 'confirm', variant: 'danger' },
      ],
    });
    const confirm = modal.el.querySelector('[data-ds-modal-close="confirm"]');
    const input = modal.el.querySelector('#cf-confirm-name');
    const matches = () => input.value.trim() === WORKSPACE;
    confirm.disabled = true;
    input.addEventListener('input', () => (confirm.disabled = !matches()));
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && matches()) modal.close('confirm');
    });
    const choice = await modal.open();
    modal.destroy();
    if (choice === 'confirm') toast(L(`“${WORKSPACE}” foi excluído. (No exemplo, nada se perde.)`, `“${WORKSPACE}” was deleted. (In the example, nothing is lost.)`, `“${WORKSPACE}” se eliminó. (En el ejemplo, nada se pierde.)`), { icon: 'trash' });
  };

  const onClick = (event) => {
    const t = event.target;
    const nav = t.closest('[data-cf-go]');
    if (nav) return go(nav.dataset.cfGo);
    if (t.closest('[data-cf-discard]')) return discard();
    if (t.closest('[data-cf-signout]')) return toast(L('Você saiu de 3 outros aparelhos.', 'You signed out of 3 other devices.', 'Cerraste sesión en otros 3 dispositivos.'), { icon: 'log-out' });
    if (t.closest('[data-cf-delete]')) return deleteWorkspace();
  };
  const onInput = (event) => {
    if (!event.target.matches('[data-cf-input]')) return;
    if (event.target.hasAttribute('aria-invalid')) setError(event.target, '');
    syncDirty();
  };
  const onChange = (event) => {
    if (event.target.matches('[data-cf-instant]')) flashSaved(event.target.closest('[data-cf-panel]'));
  };

  const groups = [...stage.querySelectorAll('[data-cf-segmented]')].map((el) =>
    createSegmented(el, {
      onChange: (value) => {
        if (el.dataset.cfSegmented === 'cf-tema') {
          if (value === 'sistema') stage.removeAttribute('data-theme');
          else stage.dataset.theme = value;
        }
        flashSaved(el.closest('[data-cf-panel]'));
      },
    }),
  );

  stage.addEventListener('click', onClick);
  stage.addEventListener('input', onInput);
  stage.addEventListener('change', onChange);
  form.addEventListener('submit', save);
  syncDirty();

  cleanups.push(
    () => stage.removeEventListener('click', onClick),
    () => stage.removeEventListener('input', onInput),
    () => stage.removeEventListener('change', onChange),
    () => form.removeEventListener('submit', save),
    () => timers.forEach((id) => clearTimeout(id)),
    () => groups.forEach((g) => g.destroy()),
    mountDocNav(root),
    mountCodeCopy(root),
  );
  return () => cleanups.forEach((fn) => fn?.());
}
