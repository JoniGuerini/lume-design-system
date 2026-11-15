import { icon } from '../../ds/icons/icons.js';
import { createSegmented } from '../../ds/js/segmented.js';
import { toast } from '../../ds/js/toast.js';
import { mountDocNav } from '../doc-nav.js';
import { mountCodeCopy, codeBlock, a11yList, escapeHtml } from '../component-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/padroes-comum.css', 'site/pages/padroes-carregamento.css'];

/* ───────── Exemplo: a página de um projeto, do carregamento aos erros ───────── */

const ic = (s) => `<code class="ds-inline-code">${s}</code>`;

const SCENARIOS = () => [
  ['carregando', L('Carregando', 'Loading', 'Cargando')],
  ['lento', L('Lento', 'Slow', 'Lento')],
  ['parte', L('Parte falhou', 'Part failed', 'Falló una parte')],
  ['salvar', L('Erro ao salvar', 'Save error', 'Error al guardar')],
  ['404', L('Não encontrada', 'Not found', 'No encontrada')],
];

const SCREENS = () => [
  [L('Início', 'Home', 'Inicio'), L('Editada ontem', 'Edited yesterday', 'Editada ayer')],
  [L('Preços', 'Pricing', 'Precios'), L('Editada há 3 dias', 'Edited 3 days ago', 'Editada hace 3 días')],
  [L('Contato', 'Contact', 'Contacto'), L('Editada há 1 semana', 'Edited 1 week ago', 'Editada hace 1 semana')],
];

const COMMENTS = () => [
  ['Bruno', L('O botão de preços pode subir um pouco?', 'Can the pricing button move up a bit?', '¿El botón de precios puede subir un poco?')],
  ['Ana', L('Feito, e troquei o texto do contato.', 'Done, and I changed the contact copy.', 'Hecho, y cambié el texto del contacto.')],
];

const sk = (w, h, cls = '') => `<span class="ds-skeleton${cls}" style="--w:${w};${h ? `--h:${h}` : ''}"></span>`;

const screensHtml = () => `<ul class="lo-list" role="list">${SCREENS().map(([n, m]) => `<li><span class="lo-list__icon">${icon('layout', { size: 16 })}</span><span><span class="lo-list__name">${n}</span><span class="lo-list__meta">${m}</span></span></li>`).join('')}</ul>`;
const commentsHtml = () => `<ul class="lo-list" role="list">${COMMENTS().map(([who, text]) => `<li><span class="ds-avatar ds-avatar--xs" aria-hidden="true"><span>${who[0]}</span></span><span><span class="lo-list__name">${who}</span><span class="lo-list__meta">${escapeHtml(text)}</span></span></li>`).join('')}</ul>`;
const listSkeleton = (n) => `<div class="lo-skel-list">${Array.from({ length: n }, (_, i) => `<div class="lo-skel-row">${sk('32px', '32px')}<span class="lo-skel-lines">${sk(i % 2 ? '45%' : '60%', '', ' ds-skeleton--text')}${sk(i % 2 ? '70%' : '35%', '', ' ds-skeleton--text')}</span></div>`).join('')}</div>`;

const partError = () => `<div class="lo-part-error">
    <p class="lo-part-error__text">${icon('alert-circle', { size: 16 })}${L('Não conseguimos carregar os comentários. O resto da página funciona.', 'We couldn’t load the comments. The rest of the page works.', 'No pudimos cargar los comentarios. El resto de la página funciona.')}</p>
    <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-lo-retry-part>${icon('refresh', { size: 14 })}${L('Tentar de novo', 'Try again', 'Intentar de nuevo')}</button>
  </div>`;

function pageHtml() {
  return `<div class="lo-page" data-lo-page>
      <header class="pt-screen__head">
        <div>
          <h3 class="pt-screen__title">${L('Site novo', 'New website', 'Sitio nuevo')}</h3>
          <p class="pt-screen__desc">${L('3 telas · 2 pessoas', '3 screens · 2 people', '3 pantallas · 2 personas')}</p>
        </div>
      </header>
      <p class="lo-slow" data-lo-slow role="status" hidden></p>
      <div class="lo-grid">
        <section class="lo-card" aria-labelledby="lo-screens-title">
          <h4 class="lo-card__title" id="lo-screens-title">${L('Telas', 'Screens', 'Pantallas')}</h4>
          <div data-lo-screens aria-live="polite"></div>
        </section>
        <section class="lo-card" aria-labelledby="lo-comments-title">
          <h4 class="lo-card__title" id="lo-comments-title">${L('Comentários', 'Comments', 'Comentarios')}</h4>
          <div data-lo-comments aria-live="polite"></div>
        </section>
      </div>
      <form class="lo-notes" data-lo-form novalidate>
        <div data-lo-save-alert></div>
        <div class="ds-form-field">
          <label class="ds-form-field__label" for="lo-notes">${L('Notas do projeto', 'Project notes', 'Notas del proyecto')}</label>
          <div class="ds-field ds-field--multiline"><textarea class="ds-field__input" id="lo-notes" rows="2">${L('Revisar o contraste do rodapé antes de publicar.', 'Review the footer contrast before publishing.', 'Revisar el contraste del pie antes de publicar.')}</textarea></div>
        </div>
        <div class="lo-notes__actions"><button type="submit" class="ds-btn ds-btn--primary ds-btn--sm" data-lo-save>${L('Salvar notas', 'Save notes', 'Guardar notas')}</button></div>
      </form>
    </div>`;
}

const notFoundHtml = () => `<div class="ds-empty lo-404" data-lo-404 tabindex="-1">
    <span class="ds-empty__icon">${icon('compass', { size: 20 })}</span>
    <p class="ds-empty__title">${L('Esta página não existe mais', 'This page no longer exists', 'Esta página ya no existe')}</p>
    <p class="ds-empty__description">${L('O projeto pode ter sido apagado, ou o link chegou incompleto. Os seus outros projetos continuam lá.', 'The project may have been deleted, or the link arrived incomplete. Your other projects are still there.', 'El proyecto puede haber sido borrado, o el enlace llegó incompleto. Tus otros proyectos siguen ahí.')}</p>
    <div class="ds-empty__actions">
      <button type="button" class="ds-btn ds-btn--primary ds-btn--sm" data-lo-home>${L('Ver projetos', 'See projects', 'Ver proyectos')}</button>
      <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-lo-home>${L('Voltar', 'Go back', 'Volver')}</button>
    </div>
  </div>`;

function screen() {
  return `<div class="pt-stage" data-lo-stage>
    <div class="pt-stage__bar">
      <span class="pt-stage__label" id="lo-sim-label">${L('Simular', 'Simulate', 'Simular')}</span>
      <div class="lo-sim">
        <div class="ds-segmented" role="radiogroup" aria-labelledby="lo-sim-label" data-lo-sim>
          ${SCENARIOS().map(([v, t], i) => `<button type="button" class="ds-segmented__item" role="radio" data-value="${v}" aria-checked="${i === 0}">${t}</button>`).join('')}
        </div>
        <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-lo-replay aria-label="${L('Recomeçar a simulação', 'Restart the simulation', 'Reiniciar la simulación')}" data-ds-tooltip="${L('Recomeçar', 'Restart', 'Reiniciar')}">${icon('refresh', { size: 16 })}</button>
      </div>
    </div>
    <div class="pt-screen lo-screen" data-lo-screen></div>
  </div>`;
}

/* ───────── Textos da página ───────── */

const TIMES = () => [
  [L('Até 1 s', 'Up to 1 s', 'Hasta 1 s'), L('Nada. Um indicador que pisca e some atrapalha mais que ajuda.', 'Nothing. An indicator that flashes and vanishes hurts more than it helps.', 'Nada. Un indicador que parpadea y desaparece estorba más que ayuda.')],
  [L('1 a 3 s', '1 to 3 s', '1 a 3 s'), L('Esqueleto com a forma da página que vai chegar, para nada pular quando chegar.', 'A skeleton shaped like the page that’s coming, so nothing jumps when it arrives.', 'Esqueleto con la forma de la página que va a llegar, para que nada salte cuando llegue.')],
  [L('Mais de 3 s', 'Over 3 s', 'Más de 3 s'), L('O esqueleto continua e uma frase diz que está demorando, com Cancelar.', 'The skeleton stays and a sentence says it’s taking a while, with Cancel.', 'El esqueleto sigue y una frase dice que está tardando, con Cancelar.')],
  [L('Falhou', 'Failed', 'Falló'), L('Só a parte que falhou mostra o erro, com Tentar de novo. O resto da página continua.', 'Only the part that failed shows the error, with Try again. The rest of the page carries on.', 'Solo la parte que falló muestra el error, con Intentar de nuevo. El resto de la página sigue.')],
];

const RULES = () => [
  ['layout', L('Esqueleto com a forma certa', 'Skeletons with the right shape', 'Esqueleto con la forma correcta'), L('As formas cinza ocupam o lugar exato do que vem: título, linhas, avatar. Quando o conteúdo chega, nada pula.', 'The gray shapes take the exact place of what’s coming: title, lines, avatar. When the content arrives, nothing jumps.', 'Las formas grises ocupan el lugar exacto de lo que viene: título, líneas, avatar. Cuando llega el contenido, nada salta.')],
  ['clock', L('Demorou, diga', 'Taking long? Say so', '¿Tarda? Dilo'), L('Passou de 3 segundos, uma frase avisa e oferece cancelar. Esqueleto infinito parece travado.', 'Past 3 seconds, a sentence warns and offers to cancel. An endless skeleton looks frozen.', 'Pasados 3 segundos, una frase avisa y ofrece cancelar. Un esqueleto infinito parece colgado.')],
  ['grid', L('O erro fica onde falhou', 'Errors stay where they failed', 'El error queda donde falló'), L('Se só os comentários falharam, só o cartão dos comentários mostra o erro. Derrubar a página inteira por uma parte é perder o resto.', 'If only the comments failed, only the comments card shows the error. Taking down the whole page for one part loses the rest.', 'Si solo fallaron los comentarios, solo la tarjeta de comentarios muestra el error. Tirar toda la página por una parte es perder el resto.')],
  ['shield', L('O que a pessoa escreveu fica', 'What people wrote stays', 'Lo que la persona escribió se queda'), L('Salvar falhou? O texto continua no campo, o aviso diz isso e Tentar de novo usa o mesmo conteúdo.', 'Save failed? The text stays in the field, the notice says so, and Try again uses the same content.', '¿Falló al guardar? El texto sigue en el campo, el aviso lo dice e Intentar de nuevo usa el mismo contenido.')],
  ['refresh', L('Sempre uma saída', 'Always a way out', 'Siempre una salida'), L('Todo erro tem uma ação: tentar de novo, voltar, ver os outros projetos. Erro sem botão é beco sem saída.', 'Every error has an action: try again, go back, see the other projects. An error with no button is a dead end.', 'Todo error tiene una acción: intentar de nuevo, volver, ver los otros proyectos. Error sin botón es callejón sin salida.')],
  ['type', L('Sem código na tela', 'No codes on screen', 'Sin códigos en pantalla'), L('“Erro 500” não ajuda ninguém. Diga o que não carregou e o que fazer; o código vai para o registro.', '“Error 500” helps nobody. Say what didn’t load and what to do; the code goes to the log.', '“Error 500” no ayuda a nadie. Di qué no cargó y qué hacer; el código va al registro.')],
];

const WRITING = () => [
  [L('Demorando', 'Slow', 'Tardando'), L('Aguarde…', 'Please wait…', 'Espere…'), L('Está demorando mais que o normal. Cancelar', 'This is taking longer than usual. Cancel', 'Está tardando más de lo normal. Cancelar')],
  [L('Parte falhou', 'Part failed', 'Falló una parte'), L('Erro 500: Internal Server Error', 'Error 500: Internal Server Error', 'Error 500: Internal Server Error'), L('Não conseguimos carregar os comentários. O resto da página funciona.', 'We couldn’t load the comments. The rest of the page works.', 'No pudimos cargar los comentarios. El resto de la página funciona.')],
  [L('Salvar falhou', 'Save failed', 'Falló al guardar'), L('Falha na operação.', 'Operation failed.', 'Falló la operación.'), L('Não conseguimos salvar. O que você escreveu continua aqui.', 'We couldn’t save. What you wrote is still here.', 'No pudimos guardar. Lo que escribiste sigue aquí.')],
  [L('Não encontrada', 'Not found', 'No encontrada'), L('404 Not Found', '404 Not Found', '404 Not Found'), L('Esta página não existe mais. Ver projetos', 'This page no longer exists. See projects', 'Esta página ya no existe. Ver proyectos')],
];

const htmlCode = () => `<!-- ${L('carregando: a forma do que vem', 'loading: the shape of what’s coming', 'cargando: la forma de lo que viene')} -->
<div aria-busy="true" aria-label="${L('Carregando telas', 'Loading screens', 'Cargando pantallas')}">
  <span class="ds-skeleton" style="--w:32px; --h:32px"></span>
  <span class="ds-skeleton ds-skeleton--text" style="--w:60%"></span>
</div>

<!-- ${L('uma parte falhou: o erro fica no cartão', 'one part failed: the error stays in the card', 'una parte falló: el error queda en la tarjeta')} -->
<section aria-labelledby="${L('comentarios', 'comments', 'comentarios')}">
  <h2 id="${L('comentarios', 'comments', 'comentarios')}">${L('Comentários', 'Comments', 'Comentarios')}</h2>
  <p>${L('Não conseguimos carregar os comentários. O resto da página funciona.', 'We couldn’t load the comments. The rest of the page works.', 'No pudimos cargar los comentarios. El resto de la página funciona.')}</p>
  <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm">${L('Tentar de novo', 'Try again', 'Intentar de nuevo')}</button>
</section>`;

const jsCode = () => `import { toast } from 'https://lumeui.dev/v/1.7/lume.js';

// ${L('esqueleto só depois de 1 s; aviso de demora depois de 3 s', 'skeleton only after 1 s; slow notice after 3 s', 'esqueleto solo después de 1 s; aviso de demora después de 3 s')}
const ${L('esqueleto', 'skeleton', 'esqueleto')} = setTimeout(() => ${L('mostrarEsqueleto', 'showSkeleton', 'mostrarEsqueleto')}(), 1000);
const ${L('demora', 'slow', 'demora')} = setTimeout(() => ${L('avisarDemora', 'warnSlow', 'avisarDemora')}(), 3000);
try {
  ${L('mostrar', 'render', 'mostrar')}(await fetch('/api/${L('projetos', 'projects', 'proyectos')}/12').then((r) => r.json()));
} catch {
  ${L('mostrarErro', 'showError', 'mostrarError')}(${L('cartao', 'card', 'tarjeta')});   // ${L('só a parte que falhou', 'only the part that failed', 'solo la parte que falló')}
} finally {
  clearTimeout(${L('esqueleto', 'skeleton', 'esqueleto')}); clearTimeout(${L('demora', 'slow', 'demora')});
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
  ['lo-exemplo', L('Exemplo', 'Example', 'Ejemplo')],
  ['lo-tempo', L('Quanto tempo', 'How long', 'Cuánto tiempo')],
  ['lo-regras', L('Regras', 'Rules', 'Reglas')],
  ['lo-mensagens', L('Mensagens', 'Messages', 'Mensajes')],
  ['lo-acessibilidade', L('Acessibilidade', 'Accessibility', 'Accesibilidad')],
  ['lo-codigo', L('Código', 'Code', 'Código')],
  ['lo-uso', L('Uso', 'Usage', 'Uso')],
];

export default function renderCarregamento(page) {
  return `
  <div class="page doc lo-page-doc">
    <header class="doc-header">
      <div>
        <p class="doc-header__eyebrow">${page.group}</p>
        <h1 class="doc-header__title">${page.label}</h1>
        <p class="doc-header__lead">${L('O caminho de uma página do clique até o conteúdo, e o que fazer quando ele dá errado: esqueleto com a forma certa, aviso quando demora, erro só na parte que falhou e nada do que a pessoa escreveu perdido.', 'A page’s path from the click to the content, and what to do when it goes wrong: skeletons with the right shape, a notice when it’s slow, errors only in the part that failed, and nothing the person wrote lost.', 'El camino de una página desde el clic hasta el contenido, y qué hacer cuando sale mal: esqueleto con la forma correcta, aviso cuando tarda, error solo en la parte que falló y nada de lo que la persona escribió perdido.')}</p>
      </div>
      <dl class="doc-stats">
        <div class="doc-stat"><dt class="doc-stat__label">${L('sem indicador', 'with no indicator', 'sin indicador')}</dt><dd class="doc-stat__value">&lt; 1 s</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('avisar demora', 'warn it’s slow', 'avisar demora')}</dt><dd class="doc-stat__value">3 s</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('erro sem saída', 'errors with no way out', 'error sin salida')}</dt><dd class="doc-stat__value">0</dd></div>
      </dl>
    </header>

    <nav class="doc-nav" aria-label="${L('Nesta página', 'On this page', 'En esta página')}">
      ${NAV().map(([id, label]) => `<button type="button" class="doc-nav__link" data-target="${id}">${label}</button>`).join('')}
    </nav>

    ${section(
      'lo-exemplo',
      L('Exemplo ao vivo', 'Live example', 'Ejemplo en vivo'),
      L(`A página de um projeto. Escolha o que simular em cima do palco. Os estados dentro de um cartão seguem <a class="ds-link" href="#/padroes/estados-vazios">Estados vazios</a>.`, `A project page. Choose what to simulate above the stage. States inside a card follow <a class="ds-link" href="#/padroes/estados-vazios">Empty states</a>.`, `La página de un proyecto. Elige qué simular arriba del escenario. Los estados dentro de una tarjeta siguen <a class="ds-link" href="#/padroes/estados-vazios">Estados vacíos</a>.`),
      `${screen()}
      <ul class="pt-tries" role="list">
        <li>${icon('layout', { size: 16 })}${L('Carregando: o esqueleto tem a forma das telas e dos comentários, e nada pula quando eles chegam.', 'Loading: the skeleton has the shape of the screens and comments, and nothing jumps when they arrive.', 'Cargando: el esqueleto tiene la forma de las pantallas y los comentarios, y nada salta cuando llegan.')}</li>
        <li>${icon('clock', { size: 16 })}${L('Lento: depois de 3 segundos aparece o aviso, com Cancelar.', 'Slow: after 3 seconds the notice shows up, with Cancel.', 'Lento: después de 3 segundos aparece el aviso, con Cancelar.')}</li>
        <li>${icon('alert-circle', { size: 16 })}${L('Erro ao salvar: clique em Salvar notas. O texto fica, e Tentar de novo resolve.', 'Save error: click Save notes. The text stays, and Try again fixes it.', 'Error al guardar: haz clic en Guardar notas. El texto queda e Intentar de nuevo lo resuelve.')}</li>
      </ul>`,
    )}

    ${section(
      'lo-tempo',
      L('Quanto tempo, qual resposta', 'How long, which response', 'Cuánto tiempo, qué respuesta'),
      L('A espera decide o que mostrar. Os números são da percepção de quem usa, não do servidor.', 'The wait decides what to show. The numbers are about the person’s perception, not the server.', 'La espera decide qué mostrar. Los números son de la percepción de quien usa, no del servidor.'),
      `<div class="doc-table lo-times">
        <div class="doc-table__head" aria-hidden="true"><span>${L('Espera', 'Wait', 'Espera')}</span><span>${L('O que mostrar', 'What to show', 'Qué mostrar')}</span></div>
        ${TIMES().map(([a, b]) => `<div class="doc-table__row"><span class="pt-writing__situation">${a}</span><span class="lo-times__text">${b}</span></div>`).join('')}
      </div>`,
    )}

    ${section(
      'lo-regras',
      L('Regras', 'Rules', 'Reglas'),
      L('Seis decisões que valem para qualquer espera ou falha.', 'Six decisions that apply to any wait or failure.', 'Seis decisiones que valen para cualquier espera o falla.'),
      `<div class="pt-rules">${RULES().map(([glyph, title, text]) => `<article class="pt-rule"><span class="pt-rule__icon">${icon(glyph, { size: 18 })}</span><p class="pt-rule__title">${title}</p><p class="pt-rule__text">${text}</p></article>`).join('')}</div>`,
    )}

    ${section(
      'lo-mensagens',
      L('Mensagens', 'Messages', 'Mensajes'),
      L('O que não funcionou, o que continua funcionando e o que fazer agora.', 'What didn’t work, what still works, and what to do now.', 'Qué no funcionó, qué sigue funcionando y qué hacer ahora.'),
      `<div class="doc-table pt-writing">
        <div class="doc-table__head" aria-hidden="true"><span>${L('Situação', 'Situation', 'Situación')}</span><span>${L('Evite', 'Avoid', 'Evita')}</span><span>${L('Prefira', 'Prefer', 'Prefiere')}</span></div>
        ${WRITING().map(([s, bad, good]) => `<div class="doc-table__row"><span class="pt-writing__situation">${s}</span><span class="pt-writing__bad">${icon('x-circle', { size: 16 })}<span>${escapeHtml(bad)}</span></span><span class="pt-writing__good">${icon('check-circle', { size: 16 })}<span>${escapeHtml(good)}</span></span></div>`).join('')}
      </div>`,
    )}

    ${section(
      'lo-acessibilidade',
      L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
      L('Quem não vê o esqueleto precisa saber que algo está vindo, e quando chegou.', 'People who can’t see the skeleton need to know something is coming, and when it arrived.', 'Quien no ve el esqueleto necesita saber que algo viene, y cuándo llegó.'),
      a11yList([
        [L('Carregando, dito', 'Loading, said', 'Cargando, dicho'), L(`A área que espera tem ${ic('aria-busy="true"')} e um nome (“Carregando telas”); as formas do esqueleto não são lidas.`, `The waiting area has ${ic('aria-busy="true"')} and a name (“Loading screens”); the skeleton shapes aren’t read.`, `El área que espera tiene ${ic('aria-busy="true"')} y un nombre (“Cargando pantallas”); las formas del esqueleto no se leen.`)],
        [L('Chegou, sem roubar o foco', 'Arrived, without stealing focus', 'Llegó, sin robar el foco'), L(`Quando o conteúdo chega, ${ic('aria-busy')} sai e a região ${ic('aria-live="polite"')} lê o que entrou. O foco fica onde estava.`, `When the content arrives, ${ic('aria-busy')} goes away and the ${ic('aria-live="polite"')} region reads what came in. Focus stays where it was.`, `Cuando llega el contenido, ${ic('aria-busy')} se va y la región ${ic('aria-live="polite"')} lee lo que entró. El foco queda donde estaba.`)],
        [L('Demora anunciada', 'Slowness announced', 'Demora anunciada'), L(`O aviso de demora é ${ic('role="status"')}; Cancelar é um botão de verdade, alcançável pelo teclado.`, `The slow notice is ${ic('role="status"')}; Cancel is a real button, reachable by keyboard.`, `El aviso de demora es ${ic('role="status"')}; Cancelar es un botón de verdad, alcanzable con el teclado.`)],
        [L('Erro ao salvar recebe o foco', 'Save errors get focus', 'El error al guardar recibe el foco'), L(`O alerta tem ${ic('role="alert"')} e recebe o foco; Tentar de novo é o primeiro botão depois dele.`, `The alert has ${ic('role="alert"')} and receives focus; Try again is the first button after it.`, `La alerta tiene ${ic('role="alert"')} y recibe el foco; Intentar de nuevo es el primer botón después de ella.`)],
        [L('Movimento reduzido', 'Reduced motion', 'Movimiento reducido'), L(`O pulso do esqueleto e o giro do spinner param com ${ic('prefers-reduced-motion')}; a forma continua dizendo que está carregando.`, `The skeleton pulse and spinner rotation stop with ${ic('prefers-reduced-motion')}; the shape still says it’s loading.`, `El pulso del esqueleto y el giro del spinner se detienen con ${ic('prefers-reduced-motion')}; la forma sigue diciendo que está cargando.`)],
      ]),
    )}

    ${section(
      'lo-codigo',
      L('Código', 'Code', 'Código'),
      L(`Esqueleto e spinner são CSS (${ic('ds-skeleton')}, ${ic('ds-spinner')}); os tempos e o erro por parte são do seu código.`, `Skeleton and spinner are CSS (${ic('ds-skeleton')}, ${ic('ds-spinner')}); the timings and per-part errors are your code.`, `Esqueleto y spinner son CSS (${ic('ds-skeleton')}, ${ic('ds-spinner')}); los tiempos y el error por parte son de tu código.`),
      `${codeBlock(htmlCode())}
      ${codeBlock(jsCode())}`,
    )}

    ${section(
      'lo-uso',
      L('Uso', 'Usage', 'Uso'),
      L('Esqueleto para o que tem forma conhecida; spinner para o que não tem (um botão, uma ação).', 'Skeletons for things with a known shape; spinners for things without one (a button, an action).', 'Esqueleto para lo que tiene forma conocida; spinner para lo que no la tiene (un botón, una acción).'),
      `<div class="usage-grid">
        <article class="usage-card usage-card--do">
          <p class="usage-card__head">${icon('check-circle', { size: 20 })}${L('Faça: carregue por partes', 'Do: load in parts', 'Haz: carga por partes')}</p>
          <p class="usage-card__text">${L('O cabeçalho e o que já se sabe aparecem primeiro; o que depende de outra busca chega depois, cada um no seu cartão.', 'The header and what’s already known show up first; what depends on another request comes later, each in its own card.', 'El encabezado y lo que ya se sabe aparecen primero; lo que depende de otra búsqueda llega después, cada uno en su tarjeta.')}</p>
        </article>
        <article class="usage-card usage-card--dont">
          <p class="usage-card__head">${icon('x-circle', { size: 20 })}${L('Evite: spinner no meio de uma página vazia', 'Avoid: a spinner in the middle of an empty page', 'Evita: un spinner en medio de una página vacía')}</p>
          <p class="usage-card__text">${L('Não diz o que vem nem quanto falta, e quando o conteúdo chega tudo pula de lugar.', 'It doesn’t say what’s coming or how much is left, and when the content arrives everything jumps.', 'No dice qué viene ni cuánto falta, y cuando llega el contenido todo salta de lugar.')}</p>
        </article>
        <article class="usage-card usage-card--tip">
          <p class="usage-card__head">${icon('zap', { size: 20 })}${L('Tente de novo sozinho, uma vez', 'Retry on your own, once', 'Reintenta solo, una vez')}</p>
          <p class="usage-card__text">${L('Falha de rede costuma ser passageira. Uma nova tentativa automática antes de mostrar o erro poupa a pessoa de muita coisa.', 'Network failures are usually brief. One automatic retry before showing the error spares people a lot.', 'Las fallas de red suelen ser pasajeras. Un reintento automático antes de mostrar el error le ahorra mucho a la persona.')}</p>
        </article>
      </div>`,
    )}
  </div>`;
}

/* ───────── Comportamento ───────── */

export function mount(root) {
  const cleanups = [];
  const stage = root.querySelector('[data-lo-stage]');
  const host = stage.querySelector('[data-lo-screen]');
  let timers = [];
  let scenario = 'carregando';
  let saveFailed = false;

  const later = (ms, fn) => timers.push(setTimeout(() => stage.isConnected && fn(), ms));
  const clear = () => {
    timers.forEach(clearTimeout);
    timers = [];
  };
  const $ = (sel) => host.querySelector(sel);

  const busy = (el, label, n) => {
    el.setAttribute('aria-busy', 'true');
    el.setAttribute('aria-label', label);
    el.innerHTML = listSkeleton(n);
  };
  const fill = (el, html) => {
    el.removeAttribute('aria-busy');
    el.removeAttribute('aria-label');
    el.innerHTML = html;
  };

  function run() {
    clear();
    saveFailed = false;
    if (scenario === '404') {
      host.innerHTML = notFoundHtml();
      return;
    }
    host.innerHTML = pageHtml();
    const screens = $('[data-lo-screens]');
    const comments = $('[data-lo-comments]');
    if (scenario === 'salvar') {
      fill(screens, screensHtml());
      fill(comments, commentsHtml());
      return;
    }
    busy(screens, L('Carregando telas', 'Loading screens', 'Cargando pantallas'), 3);
    busy(comments, L('Carregando comentários', 'Loading comments', 'Cargando comentarios'), 2);
    if (scenario === 'carregando') {
      later(1400, () => fill(screens, screensHtml()));
      later(1900, () => fill(comments, commentsHtml()));
    } else if (scenario === 'lento') {
      later(3000, () => {
        const slow = $('[data-lo-slow]');
        slow.hidden = false;
        slow.innerHTML = `${icon('clock', { size: 16 })}<span>${L('Está demorando mais que o normal.', 'This is taking longer than usual.', 'Está tardando más de lo normal.')}</span><button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-lo-cancel>${L('Cancelar', 'Cancel', 'Cancelar')}</button>`;
      });
      later(6500, () => {
        $('[data-lo-slow]').hidden = true;
        fill(screens, screensHtml());
        fill(comments, commentsHtml());
      });
    } else if (scenario === 'parte') {
      later(1200, () => fill(screens, screensHtml()));
      later(1700, () => fill(comments, partError()));
    }
  }

  const cancel = () => {
    clear();
    const slow = $('[data-lo-slow]');
    slow.innerHTML = `${icon('x-circle', { size: 16 })}<span>${L('Carregamento cancelado.', 'Loading canceled.', 'Carga cancelada.')}</span><button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-lo-replay>${L('Tentar de novo', 'Try again', 'Intentar de nuevo')}</button>`;
    slow.querySelector('button').focus();
    ['[data-lo-screens]', '[data-lo-comments]'].forEach((sel) => fill($(sel), ''));
  };

  const retryPart = () => {
    const comments = $('[data-lo-comments]');
    busy(comments, L('Carregando comentários', 'Loading comments', 'Cargando comentarios'), 2);
    later(900, () => fill(comments, commentsHtml()));
  };

  const save = async (event) => {
    event.preventDefault();
    const btn = $('[data-lo-save]');
    const slot = $('[data-lo-save-alert]');
    btn.setAttribute('aria-busy', 'true');
    btn.innerHTML = `<span class="ds-spinner ds-spinner--sm" aria-hidden="true"></span>${L('Salvando', 'Saving', 'Guardando')}`;
    await new Promise((r) => later(800, r));
    if (!btn.isConnected) return;
    btn.removeAttribute('aria-busy');
    btn.textContent = L('Salvar notas', 'Save notes', 'Guardar notas');
    const fails = scenario === 'salvar' && !saveFailed;
    if (fails) {
      saveFailed = true;
      slot.innerHTML = `<div class="ds-alert ds-alert--danger" role="alert" tabindex="-1">
        <span class="ds-alert__icon">${icon('alert-circle', { size: 18 })}</span>
        <div class="ds-alert__body">
          <p class="ds-alert__title">${L('Não conseguimos salvar', 'We couldn’t save', 'No pudimos guardar')}</p>
          <p class="ds-alert__text">${L('O que você escreveu continua aqui. Tente de novo em alguns segundos.', 'What you wrote is still here. Try again in a few seconds.', 'Lo que escribiste sigue aquí. Intenta de nuevo en unos segundos.')}</p>
          <div class="ds-alert__actions"><button type="submit" class="ds-btn ds-btn--secondary ds-btn--sm">${icon('refresh', { size: 14 })}${L('Tentar de novo', 'Try again', 'Intentar de nuevo')}</button></div>
        </div>
      </div>`;
      slot.firstElementChild.focus({ preventScroll: true });
      return;
    }
    slot.innerHTML = '';
    toast(L('Notas salvas', 'Notes saved', 'Notas guardadas'), { tone: 'success' });
  };

  const sim = createSegmented(stage.querySelector('[data-lo-sim]'), {
    onChange: (value) => {
      scenario = value;
      run();
    },
  });

  const onClick = (event) => {
    const t = event.target;
    if (t.closest('[data-lo-replay]')) return run();
    if (t.closest('[data-lo-cancel]')) return cancel();
    if (t.closest('[data-lo-retry-part]')) return retryPart();
    if (t.closest('[data-lo-home]')) {
      scenario = 'carregando';
      sim.setValue('carregando');
      return run();
    }
  };
  const onSubmit = (event) => {
    if (event.target.matches('[data-lo-form]')) save(event);
  };

  stage.addEventListener('click', onClick);
  stage.addEventListener('submit', onSubmit);
  run();

  cleanups.push(
    () => stage.removeEventListener('click', onClick),
    () => stage.removeEventListener('submit', onSubmit),
    clear,
    () => sim.destroy(),
    mountDocNav(root),
    mountCodeCopy(root),
  );
  return () => cleanups.forEach((fn) => fn?.());
}
