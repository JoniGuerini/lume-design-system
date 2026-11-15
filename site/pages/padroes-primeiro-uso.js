import { icon } from '../../ds/icons/icons.js';
import { createModal } from '../../ds/js/modal.js';
import { createSegmented } from '../../ds/js/segmented.js';
import { toast } from '../../ds/js/toast.js';
import { mountDocNav } from '../doc-nav.js';
import { mountCodeCopy, codeBlock, a11yList, escapeHtml } from '../component-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/padroes-comum.css', 'site/pages/padroes-primeiro-uso.css'];

/* ───────── Exemplo: a primeira sessão num espaço de trabalho novo ───────── */

const ic = (s) => `<code class="ds-inline-code">${s}</code>`;

const STEPS = () => [
  { id: 'conta', title: L('Criar a conta', 'Create the account', 'Crear la cuenta'), why: L('Feito. Você já está aqui.', 'Done. You’re already here.', 'Hecho. Ya estás aquí.') },
  { id: 'projeto', title: L('Criar o primeiro projeto', 'Create the first project', 'Crear el primer proyecto'), why: L('É onde ficam as telas, as notas e as pessoas de um trabalho.', 'It’s where the screens, notes, and people of a piece of work live.', 'Es donde viven las pantallas, las notas y las personas de un trabajo.'), action: L('Criar projeto', 'Create project', 'Crear proyecto') },
  { id: 'convite', title: L('Convidar alguém', 'Invite someone', 'Invitar a alguien'), why: L('Projetos andam melhor a dois.', 'Projects move better with two.', 'Los proyectos avanzan mejor de a dos.'), action: L('Convidar', 'Invite', 'Invitar') },
  { id: 'tema', title: L('Escolher o tema', 'Choose the theme', 'Elegir el tema'), why: L('Claro ou escuro. Dá para mudar depois em Configurações.', 'Light or dark. You can change it later in Settings.', 'Claro u oscuro. Se puede cambiar después en Configuración.') },
];

const SAMPLES = () => [
  [L('Site novo', 'New website', 'Sitio nuevo'), L('6 telas · 2 pessoas', '6 screens · 2 people', '6 pantallas · 2 personas')],
  [L('App de agendamento', 'Scheduling app', 'App de agenda'), L('11 telas · 3 pessoas', '11 screens · 3 people', '11 pantallas · 3 personas')],
  [L('Relatório anual', 'Annual report', 'Informe anual'), L('4 telas · 1 pessoa', '4 screens · 1 person', '4 pantallas · 1 persona')],
];

const stepHtml = (s, i) => `<li class="pu-step" data-pu-step="${s.id}"${i === 0 ? ' data-done' : ''}>
    <span class="pu-step__mark" aria-hidden="true">${icon('check', { size: 12 })}</span>
    <div class="pu-step__body">
      <p class="pu-step__title">${s.title}<span class="ds-visually-hidden" data-pu-state>${i === 0 ? L(' (concluído)', ' (done)', ' (hecho)') : ''}</span></p>
      <p class="pu-step__why">${s.why}</p>
      ${s.action ? `<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm pu-step__action" data-pu-do="${s.id}">${s.action}</button>` : ''}
      ${s.id === 'tema' ? `<div class="ds-segmented pu-step__action" role="radiogroup" aria-label="${s.title}" data-pu-theme>
        <button type="button" class="ds-segmented__item" role="radio" data-value="light" aria-checked="false">${L('Claro', 'Light', 'Claro')}</button>
        <button type="button" class="ds-segmented__item" role="radio" data-value="dark" aria-checked="false">${L('Escuro', 'Dark', 'Oscuro')}</button>
      </div>` : ''}
    </div>
  </li>`;

function screen() {
  const steps = STEPS();
  return `<div class="pt-stage" data-pu-stage>
    <div class="pt-screen pu-screen">
      <header class="pt-screen__head">
        <div>
          <h3 class="pt-screen__title">${L('Boas-vindas, Ana', 'Welcome, Ana', 'Te damos la bienvenida, Ana')}</h3>
          <p class="pt-screen__desc">${L('Três passos e o seu espaço fica pronto. Pode fazer em qualquer ordem.', 'Three steps and your space is ready. Do them in any order.', 'Tres pasos y tu espacio queda listo. Puedes hacerlos en cualquier orden.')}</p>
        </div>
      </header>

      <div class="pu-layout">
        <section class="pu-projects" aria-labelledby="pu-projects-title">
          <div class="pu-projects__head">
            <h4 class="pu-subtitle" id="pu-projects-title" tabindex="-1">${L('Projetos', 'Projects', 'Proyectos')}</h4>
            <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-pu-clear-samples hidden>${icon('trash', { size: 14 })}${L('Apagar exemplos', 'Delete examples', 'Borrar ejemplos')}</button>
          </div>
          <div class="ds-empty ds-empty--compact" data-pu-empty>
            <span class="ds-empty__icon">${icon('folder', { size: 20 })}</span>
            <p class="ds-empty__title">${L('Seus projetos aparecem aqui', 'Your projects show up here', 'Tus proyectos aparecen aquí')}</p>
            <p class="ds-empty__description">${L('Crie o primeiro ou veja como fica com projetos de exemplo.', 'Create the first one or see how it looks with sample projects.', 'Crea el primero o mira cómo queda con proyectos de ejemplo.')}</p>
            <div class="ds-empty__actions">
              <button type="button" class="ds-btn ds-btn--primary ds-btn--sm" data-pu-do="projeto">${icon('plus', { size: 16 })}${L('Criar projeto', 'Create project', 'Crear proyecto')}</button>
              <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-pu-samples>${L('Ver com exemplos', 'See with examples', 'Ver con ejemplos')}</button>
            </div>
          </div>
          <ul class="pu-list" role="list" data-pu-list hidden></ul>
        </section>

        <aside class="pu-steps" aria-labelledby="pu-steps-title" data-pu-steps>
          <div class="pu-steps__head">
            <h4 class="pu-subtitle" id="pu-steps-title">${L('Primeiros passos', 'First steps', 'Primeros pasos')}</h4>
            <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-pu-dismiss aria-label="${L('Esconder primeiros passos', 'Hide first steps', 'Ocultar primeros pasos')}" data-ds-tooltip="${L('Esconder', 'Hide', 'Ocultar')}">${icon('x', { size: 16 })}</button>
          </div>
          <div class="ds-progress-field">
            <div class="ds-progress-field__head"><span id="pu-progress-label">${L('Progresso', 'Progress', 'Progreso')}</span><span data-pu-count>1 / ${steps.length}</span></div>
            <progress class="ds-progress ds-progress--success" aria-labelledby="pu-progress-label" aria-valuetext="${L(`1 de ${steps.length}`, `1 of ${steps.length}`, `1 de ${steps.length}`)}" value="1" max="${steps.length}" data-pu-progress></progress>
          </div>
          <ol class="pu-steps__list" role="list">${steps.map(stepHtml).join('')}</ol>
          <div class="pu-done" data-pu-done hidden tabindex="-1">
            <p class="pu-done__title">${icon('check-circle', { size: 18 })}${L('Tudo pronto', 'All set', 'Todo listo')}</p>
            <p class="pu-done__text">${L('Estes passos ficam em Ajuda, se precisar.', 'These steps stay in Help, if you need them.', 'Estos pasos quedan en Ayuda, si los necesitas.')}</p>
            <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-pu-dismiss>${L('Fechar', 'Close', 'Cerrar')}</button>
          </div>
        </aside>
      </div>
      <p class="ds-visually-hidden" role="status" data-pu-live></p>
    </div>
  </div>`;
}

/* ───────── Textos da página ───────── */

const PARTS = () => [
  [L('Boas-vindas', 'Welcome', 'Bienvenida'), L('Uma frase, com o nome da pessoa, dizendo quanto falta. Nada de vídeo ou carrossel antes de deixar entrar.', 'One sentence, with the person’s name, saying how much is left. No video or carousel before letting them in.', 'Una frase, con el nombre de la persona, diciendo cuánto falta. Nada de video o carrusel antes de dejar entrar.')],
  [L('Primeiros passos', 'First steps', 'Primeros pasos'), L('Uma lista curta ao lado do trabalho, com o progresso e um X para esconder. Não bloqueia nada.', 'A short list beside the work, with the progress and an X to hide it. It doesn’t block anything.', 'Una lista corta junto al trabajo, con el progreso y una X para ocultarla. No bloquea nada.')],
  [L('Passo', 'Step', 'Paso'), L('O que fazer, por que vale a pena e o botão que faz de verdade. Passo feito ganha o ✓ na hora.', 'What to do, why it’s worth it, and the button that really does it. A done step gets its ✓ right away.', 'Qué hacer, por qué vale la pena y el botón que lo hace de verdad. Un paso hecho recibe su ✓ al instante.')],
  [L('Vazio que ensina', 'Empty state that teaches', 'Vacío que enseña'), L('Diz o que vai aparecer ali e dá o mesmo botão do passo. Veja Estados vazios.', 'Says what will show up there and gives the same button as the step. See Empty states.', 'Dice qué va a aparecer ahí y da el mismo botón del paso. Mira Estados vacíos.')],
  [L('Dados de exemplo', 'Sample data', 'Datos de ejemplo'), L('Para ver a tela cheia antes de ter conteúdo. Marcados como exemplo e apagados de uma vez.', 'To see the screen full before having content. Marked as examples and deleted all at once.', 'Para ver la pantalla llena antes de tener contenido. Marcados como ejemplo y borrados de una vez.')],
];

const RULES = () => [
  ['check-square', L('Aprender fazendo', 'Learn by doing', 'Aprender haciendo'), L('Cada passo é a ação de verdade, não uma explicação dela. Quem cria o projeto pelo passo já tem um projeto.', 'Each step is the real action, not an explanation of it. Whoever creates the project from the step already has a project.', 'Cada paso es la acción de verdad, no una explicación de ella. Quien crea el proyecto desde el paso ya tiene un proyecto.')],
  ['list-ordered', L('Poucos passos, já começados', 'Few steps, already started', 'Pocos pasos, ya empezados'), L('De três a cinco. O primeiro (criar a conta) já vem feito: a barra começa andando, e terminar parece perto.', 'Three to five. The first one (creating the account) comes done: the bar starts moving, and finishing feels close.', 'De tres a cinco. El primero (crear la cuenta) ya viene hecho: la barra empieza avanzando y terminar parece cerca.')],
  ['x', L('Dá para dispensar', 'It can be dismissed', 'Se puede descartar'), L('O X esconde a lista, com Desfazer, e ela volta pela Ajuda. Ninguém é obrigado a terminar para trabalhar.', 'The X hides the list, with Undo, and it comes back through Help. Nobody has to finish in order to work.', 'La X oculta la lista, con Deshacer, y vuelve por la Ayuda. Nadie está obligado a terminar para trabajar.')],
  ['inbox', L('O vazio ensina', 'The empty state teaches', 'El vacío enseña'), L('No lugar da lista, o que vai aparecer ali e o botão para começar. Nada de tela em branco esperando adivinhação.', 'In place of the list, what will show up there and the button to start. No blank screen waiting for guesses.', 'En lugar de la lista, lo que va a aparecer ahí y el botón para empezar. Nada de pantalla en blanco esperando adivinanzas.')],
  ['layers', L('Exemplo fica marcado', 'Examples stay marked', 'El ejemplo queda marcado'), L('Projetos de exemplo levam a etiqueta “Exemplo” e saem num clique. Nunca se misturam com o que a pessoa criou.', 'Sample projects carry the “Example” tag and go away in one click. They never mix with what the person created.', 'Los proyectos de ejemplo llevan la etiqueta “Ejemplo” y se van con un clic. Nunca se mezclan con lo que la persona creó.')],
  ['message-square', L('Sem tour de balões', 'No balloon tour', 'Sin tour de globos'), L('Cinco balões apontando para a interface antes de qualquer ação são pulados por quase todo mundo. Explique no lugar, quando a pessoa chegar lá.', 'Five balloons pointing at the interface before any action get skipped by almost everyone. Explain in place, when the person gets there.', 'Cinco globos señalando la interfaz antes de cualquier acción los salta casi todo el mundo. Explica en el lugar, cuando la persona llegue ahí.')],
];

const WRITING = () => [
  [L('Boas-vindas', 'Welcome', 'Bienvenida'), L('Bem-vindo ao Lume!!! 🎉', 'Welcome to Lume!!! 🎉', '¡¡¡Bienvenido a Lume!!! 🎉'), L('Boas-vindas, Ana. Três passos e o seu espaço fica pronto.', 'Welcome, Ana. Three steps and your space is ready.', 'Te damos la bienvenida, Ana. Tres pasos y tu espacio queda listo.')],
  [L('Passo', 'Step', 'Paso'), L('Configure seu workspace', 'Configure your workspace', 'Configura tu workspace'), L('Convide alguém: projetos andam melhor a dois.', 'Invite someone: projects move better with two.', 'Invita a alguien: los proyectos avanzan mejor de a dos.')],
  [L('Fim', 'End', 'Fin'), L('Parabéns! Você completou o onboarding!', 'Congratulations! You completed the onboarding!', '¡Felicidades! ¡Completaste el onboarding!'), L('Tudo pronto. Estes passos ficam em Ajuda, se precisar.', 'All set. These steps stay in Help, if you need them.', 'Todo listo. Estos pasos quedan en Ayuda, si los necesitas.')],
  [L('Vazio', 'Empty', 'Vacío'), L('Nenhum projeto.', 'No projects.', 'Ningún proyecto.'), L('Seus projetos aparecem aqui. Crie o primeiro ou veja com exemplos.', 'Your projects show up here. Create the first one or see with examples.', 'Tus proyectos aparecen aquí. Crea el primero o mira con ejemplos.')],
];

const htmlCode = () => `<aside aria-labelledby="${L('passos', 'steps', 'pasos')}-titulo">
  <h2 id="${L('passos', 'steps', 'pasos')}-titulo">${L('Primeiros passos', 'First steps', 'Primeros pasos')}</h2>
  <button type="button" class="ds-icon-btn ds-icon-btn--sm" aria-label="${L('Esconder primeiros passos', 'Hide first steps', 'Ocultar primeros pasos')}">…</button>

  <div class="ds-progress-field">
    <div class="ds-progress-field__head"><span id="${L('progresso', 'progress', 'progreso')}">${L('Progresso', 'Progress', 'Progreso')}</span><span>2 / 4</span></div>
    <progress class="ds-progress ds-progress--success" aria-labelledby="${L('progresso', 'progress', 'progreso')}" aria-valuetext="${L('2 de 4', '2 of 4', '2 de 4')}" value="2" max="4"></progress>
  </div>

  <ol>
    <li data-done>${L('Criar a conta', 'Create the account', 'Crear la cuenta')} <span class="ds-visually-hidden">(${L('concluído', 'done', 'hecho')})</span></li>
    <li>
      ${L('Convidar alguém', 'Invite someone', 'Invitar a alguien')}
      <p>${L('Projetos andam melhor a dois.', 'Projects move better with two.', 'Los proyectos avanzan mejor de a dos.')}</p>
      <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm">${L('Convidar', 'Invite', 'Invitar')}</button>
    </li>
  </ol>
</aside>`;

const jsCode = () => `import { toast } from 'https://lumeui.dev/v/1.6/lume.js';

function ${L('concluir', 'complete', 'completar')}(${L('passo', 'step', 'paso')}) {
  ${L('passo', 'step', 'paso')}.toggleAttribute('data-done', true);
  ${L('passo', 'step', 'paso')}.querySelector('.ds-visually-hidden').textContent = ' (${L('concluído', 'done', 'hecho')})';
  ${L('barra', 'bar', 'barra')}.value = ${L('feitos', 'done', 'hechos')}();
  ${L('barra', 'bar', 'barra')}.setAttribute('aria-valuetext', \`\${${L('feitos', 'done', 'hechos')}()} ${L('de', 'of', 'de')} 4\`);
  ${L('proximo', 'next', 'siguiente')}(${L('passo', 'step', 'paso')})?.querySelector('button').focus();   // ${L('o foco segue para o próximo passo', 'focus moves on to the next step', 'el foco sigue al siguiente paso')}
}

function ${L('esconder', 'hide', 'ocultar')}() {
  ${L('passos', 'steps', 'pasos')}.hidden = true;
  toast('${L('Primeiros passos escondidos', 'First steps hidden', 'Primeros pasos ocultos')}', {
    action: { label: '${L('Desfazer', 'Undo', 'Deshacer')}', onClick: () => (${L('passos', 'steps', 'pasos')}.hidden = false) },
  });
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
  ['pu-exemplo', L('Exemplo', 'Example', 'Ejemplo')],
  ['pu-anatomia', L('Anatomia', 'Anatomy', 'Anatomía')],
  ['pu-regras', L('Regras', 'Rules', 'Reglas')],
  ['pu-mensagens', L('Mensagens', 'Messages', 'Mensajes')],
  ['pu-acessibilidade', L('Acessibilidade', 'Accessibility', 'Accesibilidad')],
  ['pu-codigo', L('Código', 'Code', 'Código')],
  ['pu-uso', L('Uso', 'Usage', 'Uso')],
];

export default function renderPrimeiroUso(page) {
  return `
  <div class="page doc pu-page">
    <header class="doc-header">
      <div>
        <p class="doc-header__eyebrow">${page.group}</p>
        <h1 class="doc-header__title">${page.label}</h1>
        <p class="doc-header__lead">${L('A primeira sessão de alguém: boas-vindas curtas, poucos passos que já são o trabalho de verdade, um vazio que ensina e dados de exemplo para quem quer ver antes de fazer.', 'Someone’s first session: a short welcome, a few steps that are already the real work, an empty state that teaches, and sample data for those who want to see before doing.', 'La primera sesión de alguien: bienvenida corta, pocos pasos que ya son el trabajo de verdad, un vacío que enseña y datos de ejemplo para quien quiere ver antes de hacer.')}</p>
      </div>
      <dl class="doc-stats">
        <div class="doc-stat"><dt class="doc-stat__label">${L('passos', 'steps', 'pasos')}</dt><dd class="doc-stat__value">3–5</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('passo já feito', 'step already done', 'paso ya hecho')}</dt><dd class="doc-stat__value">1</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('balões de tour', 'tour balloons', 'globos de tour')}</dt><dd class="doc-stat__value">0</dd></div>
      </dl>
    </header>

    <nav class="doc-nav" aria-label="${L('Nesta página', 'On this page', 'En esta página')}">
      ${NAV().map(([id, label]) => `<button type="button" class="doc-nav__link" data-target="${id}">${label}</button>`).join('')}
    </nav>

    ${section(
      'pu-exemplo',
      L('Exemplo ao vivo', 'Live example', 'Ejemplo en vivo'),
      L(`A primeira vez num espaço de trabalho novo. O vazio da lista segue o padrão <a class="ds-link" href="#/padroes/estados-vazios">Estados vazios</a>.`, `The first time in a new workspace. The list’s empty state follows the <a class="ds-link" href="#/padroes/estados-vazios">Empty states</a> pattern.`, `La primera vez en un espacio de trabajo nuevo. El vacío de la lista sigue el patrón <a class="ds-link" href="#/padroes/estados-vazios">Estados vacíos</a>.`),
      `${screen()}
      <ul class="pt-tries" role="list">
        <li>${icon('folder', { size: 16 })}${L('Crie um projeto pelo passo ou pelo vazio: os dois marcam o mesmo ✓.', 'Create a project from the step or from the empty state: both check the same ✓.', 'Crea un proyecto desde el paso o desde el vacío: los dos marcan el mismo ✓.')}</li>
        <li>${icon('layers', { size: 16 })}${L('“Ver com exemplos” enche a lista com projetos marcados, que saem num clique.', '“See with examples” fills the list with marked projects that go away in one click.', '“Ver con ejemplos” llena la lista con proyectos marcados, que se van con un clic.')}</li>
        <li>${icon('moon', { size: 16 })}${L('Escolha o tema no último passo: o palco troca na hora.', 'Choose the theme in the last step: the stage switches right away.', 'Elige el tema en el último paso: el escenario cambia al instante.')}</li>
        <li>${icon('x', { size: 16 })}${L('O X esconde os passos, com Desfazer no aviso.', 'The X hides the steps, with Undo in the notice.', 'La X oculta los pasos, con Deshacer en el aviso.')}</li>
      </ul>`,
    )}

    ${section(
      'pu-anatomia',
      L('Anatomia', 'Anatomy', 'Anatomía'),
      L('Cinco partes, todas ao lado do trabalho, nenhuma na frente dele.', 'Five parts, all beside the work, none in front of it.', 'Cinco partes, todas junto al trabajo, ninguna delante de él.'),
      `<ol class="pt-parts" role="list">${PARTS().map(([name, text], i) => `<li><span class="pt-parts__num">${i + 1}</span><div><p class="pt-parts__name">${name}</p><p class="pt-parts__text">${text}</p></div></li>`).join('')}</ol>`,
    )}

    ${section(
      'pu-regras',
      L('Regras', 'Rules', 'Reglas'),
      L('Seis decisões que valem para qualquer primeira vez.', 'Six decisions that apply to any first time.', 'Seis decisiones que valen para cualquier primera vez.'),
      `<div class="pt-rules">${RULES().map(([glyph, title, text]) => `<article class="pt-rule"><span class="pt-rule__icon">${icon(glyph, { size: 18 })}</span><p class="pt-rule__title">${title}</p><p class="pt-rule__text">${text}</p></article>`).join('')}</div>`,
    )}

    ${section(
      'pu-mensagens',
      L('Mensagens', 'Messages', 'Mensajes'),
      L('Calorosas sem festa. Cada passo diz por que vale a pena, em uma frase.', 'Warm without a party. Each step says why it’s worth it, in one sentence.', 'Cálidas sin fiesta. Cada paso dice por qué vale la pena, en una frase.'),
      `<div class="doc-table pt-writing">
        <div class="doc-table__head" aria-hidden="true"><span>${L('Situação', 'Situation', 'Situación')}</span><span>${L('Evite', 'Avoid', 'Evita')}</span><span>${L('Prefira', 'Prefer', 'Prefiere')}</span></div>
        ${WRITING().map(([s, bad, good]) => `<div class="doc-table__row"><span class="pt-writing__situation">${s}</span><span class="pt-writing__bad">${icon('x-circle', { size: 16 })}<span>${escapeHtml(bad)}</span></span><span class="pt-writing__good">${icon('check-circle', { size: 16 })}<span>${escapeHtml(good)}</span></span></div>`).join('')}
      </div>`,
    )}

    ${section(
      'pu-acessibilidade',
      L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
      L('O progresso precisa ser dito, não só desenhado.', 'Progress needs to be said, not just drawn.', 'El progreso necesita decirse, no solo dibujarse.'),
      a11yList([
        [L('Passo feito, por escrito', 'Done steps, in writing', 'Paso hecho, por escrito'), L(`O ✓ é decoração; o estado vai num texto escondido (“concluído”) dentro do título do passo.`, `The ✓ is decoration; the state goes in hidden text (“done”) inside the step title.`, `El ✓ es decoración; el estado va en un texto oculto (“hecho”) dentro del título del paso.`)],
        [L('Progresso com texto', 'Progress with text', 'Progreso con texto'), L(`O ${ic('&lt;progress&gt;')} tem rótulo e ${ic('aria-valuetext')} (“2 de 4”), em vez de uma porcentagem solta.`, `The ${ic('&lt;progress&gt;')} has a label and ${ic('aria-valuetext')} (“2 of 4”), instead of a bare percentage.`, `El ${ic('&lt;progress&gt;')} tiene etiqueta y ${ic('aria-valuetext')} (“2 de 4”), en lugar de un porcentaje suelto.`)],
        [L('O foco segue em frente', 'Focus moves forward', 'El foco sigue adelante'), L('Ao concluir um passo, o foco vai para o próximo que falta. No último, para o “Tudo pronto”.', 'On finishing a step, focus goes to the next missing one. On the last, to “All set”.', 'Al completar un paso, el foco va al siguiente que falta. En el último, al “Todo listo”.')],
        [L('Anúncios curtos', 'Short announcements', 'Anuncios cortos'), L(`Uma região ${ic('role="status"')} diz “Projeto criado. 2 de 4 passos.”, sem tirar o foco de onde está.`, `A ${ic('role="status"')} region says “Project created. 2 of 4 steps.”, without moving focus from where it is.`, `Una región ${ic('role="status"')} dice “Proyecto creado. 2 de 4 pasos.”, sin mover el foco de donde está.`)],
        [L('Dispensar pelo teclado', 'Dismiss by keyboard', 'Descartar con el teclado'), L('O X tem nome (“Esconder primeiros passos”); ao esconder, o foco vai para a lista de projetos, não se perde.', 'The X has a name (“Hide first steps”); when hiding, focus goes to the project list instead of getting lost.', 'La X tiene nombre (“Ocultar primeros pasos”); al ocultar, el foco va a la lista de proyectos, no se pierde.')],
      ]),
    )}

    ${section(
      'pu-codigo',
      L('Código', 'Code', 'Código'),
      L(`A lista de passos é marcação com ${ic('&lt;progress&gt;')}; o comportamento é seu: marcar, mover o foco e esconder com ${ic('toast')} e Desfazer.`, `The step list is markup with ${ic('&lt;progress&gt;')}; the behavior is yours: check off, move focus, and hide with ${ic('toast')} and Undo.`, `La lista de pasos es marcado con ${ic('&lt;progress&gt;')}; el comportamiento es tuyo: marcar, mover el foco y ocultar con ${ic('toast')} y Deshacer.`),
      `${codeBlock(htmlCode())}
      ${codeBlock(jsCode())}`,
    )}

    ${section(
      'pu-uso',
      L('Uso', 'Usage', 'Uso'),
      L('Primeiro uso termina quando a pessoa fez a primeira coisa que importa, não quando viu todas as telas.', 'First use ends when the person has done the first thing that matters, not when they’ve seen every screen.', 'El primer uso termina cuando la persona hizo lo primero que importa, no cuando vio todas las pantallas.'),
      `<div class="usage-grid">
        <article class="usage-card usage-card--do">
          <p class="usage-card__head">${icon('check-circle', { size: 20 })}${L('Faça: leve ao primeiro resultado', 'Do: lead to the first result', 'Haz: lleva al primer resultado')}</p>
          <p class="usage-card__text">${L('Escolha o passo que faz a pessoa sentir o valor do produto (aqui, ter um projeto) e coloque-o em segundo, logo depois do que já veio feito.', 'Pick the step that makes people feel the product’s value (here, having a project) and put it second, right after the one already done.', 'Elige el paso que hace sentir el valor del producto (aquí, tener un proyecto) y ponlo segundo, justo después del que ya vino hecho.')}</p>
        </article>
        <article class="usage-card usage-card--dont">
          <p class="usage-card__head">${icon('x-circle', { size: 20 })}${L('Evite: formulário longo antes de entrar', 'Avoid: a long form before getting in', 'Evita: un formulario largo antes de entrar')}</p>
          <p class="usage-card__text">${L('Cargo, tamanho da empresa, como conheceu: pergunte depois, quando a resposta mudar alguma coisa para a pessoa.', 'Job title, company size, how they found you: ask later, when the answer changes something for the person.', 'Cargo, tamaño de la empresa, cómo nos conoció: pregunta después, cuando la respuesta cambie algo para la persona.')}</p>
        </article>
        <article class="usage-card usage-card--tip">
          <p class="usage-card__head">${icon('zap', { size: 20 })}${L('Passo feito em outro lugar também conta', 'Steps done elsewhere count too', 'Un paso hecho en otro lugar también cuenta')}</p>
          <p class="usage-card__text">${L('Quem criou o projeto pelo menu, e não pelo passo, também ganha o ✓. A lista acompanha o que a pessoa fez, não por onde clicou.', 'Whoever created the project from the menu, not from the step, also gets the ✓. The list follows what the person did, not where they clicked.', 'Quien creó el proyecto desde el menú, y no desde el paso, también recibe el ✓. La lista sigue lo que la persona hizo, no dónde hizo clic.')}</p>
        </article>
      </div>`,
    )}
  </div>`;
}

/* ───────── Comportamento ───────── */

function inviteBody() {
  const body = document.createElement('div');
  body.className = 'pu-invite';
  body.innerHTML = `<div class="ds-form-field">
      <label class="ds-form-field__label" for="pu-invite-email">${L('E-mail', 'Email', 'Correo')}</label>
      <div class="ds-field"><input class="ds-field__input" id="pu-invite-email" type="email" inputmode="email" autocapitalize="none" spellcheck="false" placeholder="nome@empresa.com" value="bruno@lume.app"></div>
    </div>`;
  return body;
}

export function mount(root) {
  const cleanups = [];
  const stage = root.querySelector('[data-pu-stage]');
  const $ = (sel) => stage.querySelector(sel);
  const stepsBox = $('[data-pu-steps]');
  const list = $('[data-pu-list]');
  const empty = $('[data-pu-empty]');
  const live = $('[data-pu-live]');
  const progress = $('[data-pu-progress]');
  const total = STEPS().length;
  const projects = [];

  const doneCount = () => stage.querySelectorAll('[data-pu-step][data-done]').length;

  const renderProjects = () => {
    const has = projects.length > 0;
    empty.hidden = has;
    list.hidden = !has;
    $('[data-pu-clear-samples]').hidden = !projects.some((p) => p.sample);
    list.innerHTML = projects
      .map((p) => `<li class="pu-project">
        <span class="pu-project__icon">${icon('folder', { size: 16 })}</span>
        <span class="pu-project__text"><span class="pu-project__name">${escapeHtml(p.name)}</span><span class="pu-project__meta">${escapeHtml(p.meta)}</span></span>
        ${p.sample ? `<span class="ds-badge ds-badge--sm">${L('Exemplo', 'Example', 'Ejemplo')}</span>` : ''}
      </li>`)
      .join('');
  };

  const complete = (id, message) => {
    const step = stage.querySelector(`[data-pu-step="${id}"]`);
    if (!step || step.hasAttribute('data-done')) return;
    step.setAttribute('data-done', '');
    step.querySelector('[data-pu-state]').textContent = L(' (concluído)', ' (done)', ' (hecho)');
    const n = doneCount();
    progress.value = n;
    progress.setAttribute('aria-valuetext', L(`${n} de ${total}`, `${n} of ${total}`, `${n} de ${total}`));
    $('[data-pu-count]').textContent = `${n} / ${total}`;
    live.textContent = `${message} ${L(`${n} de ${total} passos.`, `${n} of ${total} steps.`, `${n} de ${total} pasos.`)}`;
    if (n === total) {
      $('[data-pu-done]').hidden = false;
      $('[data-pu-done]').focus({ preventScroll: true });
      return;
    }
    const next = [...stage.querySelectorAll('[data-pu-step]:not([data-done])')][0];
    next?.querySelector('button')?.focus({ preventScroll: true });
  };

  const createProject = () => {
    projects.unshift({ name: L('Meu primeiro projeto', 'My first project', 'Mi primer proyecto'), meta: L('Criado agora · só você', 'Created just now · only you', 'Creado ahora · solo tú') });
    renderProjects();
    complete('projeto', L('Projeto criado.', 'Project created.', 'Proyecto creado.'));
  };

  const invite = async () => {
    const modal = createModal({
      title: L('Convidar alguém', 'Invite someone', 'Invitar a alguien'),
      size: 'sm',
      body: inviteBody(),
      actions: [
        { label: L('Cancelar', 'Cancel', 'Cancelar'), value: 'cancel' },
        { label: L('Enviar convite', 'Send invite', 'Enviar invitación'), value: 'send', variant: 'primary' },
      ],
    });
    const input = modal.el.querySelector('input');
    input.addEventListener('keydown', (e) => e.key === 'Enter' && modal.close('send'));
    const choice = await modal.open();
    const email = input.value.trim();
    modal.destroy();
    if (choice !== 'send' || !stage.isConnected) return;
    toast(L(`Convite enviado para ${email || 'bruno@lume.app'}`, `Invite sent to ${email || 'bruno@lume.app'}`, `Invitación enviada a ${email || 'bruno@lume.app'}`), { icon: 'mail' });
    complete('convite', L('Convite enviado.', 'Invite sent.', 'Invitación enviada.'));
  };

  const hideSteps = () => {
    stepsBox.hidden = true;
    stage.querySelector('.pu-layout').toggleAttribute('data-solo', true);
    (list.hidden ? empty.querySelector('button') : $('#pu-projects-title'))?.focus?.({ preventScroll: true });
    toast(L('Primeiros passos escondidos. Ficam em Ajuda.', 'First steps hidden. They stay in Help.', 'Primeros pasos ocultos. Quedan en Ayuda.'), {
      action: {
        label: L('Desfazer', 'Undo', 'Deshacer'),
        onClick: () => {
          stepsBox.hidden = false;
          stage.querySelector('.pu-layout').removeAttribute('data-solo');
        },
      },
    });
  };

  const theme = createSegmented($('[data-pu-theme]'), {
    onChange: (value) => {
      stage.dataset.theme = value;
      complete('tema', L('Tema escolhido.', 'Theme chosen.', 'Tema elegido.'));
    },
  });

  const onClick = (event) => {
    const t = event.target;
    const act = t.closest('[data-pu-do]');
    if (act?.dataset.puDo === 'projeto') return createProject();
    if (act?.dataset.puDo === 'convite') return invite();
    if (t.closest('[data-pu-samples]')) {
      SAMPLES().forEach(([name, meta]) => projects.push({ name, meta, sample: true }));
      renderProjects();
      return;
    }
    if (t.closest('[data-pu-clear-samples]')) {
      for (let i = projects.length - 1; i >= 0; i--) if (projects[i].sample) projects.splice(i, 1);
      renderProjects();
      live.textContent = L('Exemplos apagados.', 'Examples deleted.', 'Ejemplos borrados.');
      (list.hidden ? empty.querySelector('button') : $('#pu-projects-title')).focus?.({ preventScroll: true });
      return;
    }
    if (t.closest('[data-pu-dismiss]')) return hideSteps();
  };

  stage.addEventListener('click', onClick);
  renderProjects();

  cleanups.push(
    () => stage.removeEventListener('click', onClick),
    () => theme.destroy(),
    mountDocNav(root),
    mountCodeCopy(root),
  );
  return () => cleanups.forEach((fn) => fn?.());
}
