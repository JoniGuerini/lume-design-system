import { icon } from '../../ds/icons/icons.js';
import { createSegmented } from '../../ds/js/segmented.js';
import { toastContent, toastClasses } from '../../ds/js/toast.js';
import { mountDocNav } from '../doc-nav.js';
import { mountCodeCopy, codeBlock, escapeHtml } from '../component-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/padroes-comum.css', 'site/pages/tom-de-voz.css'];

const ic = (s) => `<code class="ds-inline-code">${s}</code>`;

/* ───────── Os tons ───────── */

/** Cada tom escreve as mesmas cinco situações. Os botões quase não mudam: verbo é verbo em qualquer tom. */
const TONES = () => [
  {
    id: 'neutro',
    name: L('Neutro', 'Neutral', 'Neutro'),
    desc: L('Claro e direto. É o tom do Lume e a escolha segura quando não há motivo para outro.', 'Clear and direct. It’s Lume’s tone and the safe choice when there’s no reason for another.', 'Claro y directo. Es el tono de Lume y la opción segura cuando no hay motivo para otro.'),
    apps: L('Ferramentas, painéis, design systems', 'Tools, dashboards, design systems', 'Herramientas, paneles, design systems'),
    traits: [
      L('Fala com a pessoa por “você”, sem rodeio', 'Talks to people as “you”, no detours', 'Le habla a la persona de “tú”, sin rodeos'),
      L('Frases curtas, com o verbo no começo', 'Short sentences, verb first', 'Frases cortas, con el verbo al principio'),
      L('Sem exclamação e sem piada', 'No exclamation marks, no jokes', 'Sin exclamaciones y sin bromas'),
    ],
    success: L('Alterações salvas.', 'Changes saved.', 'Cambios guardados.'),
    error: [L('Não foi possível salvar', 'Couldn’t save', 'No se pudo guardar'), L('Confira a conexão e tente de novo. O que você escreveu continua aqui.', 'Check your connection and try again. What you wrote is still here.', 'Revisa la conexión e inténtalo de nuevo. Lo que escribiste sigue aquí.'), L('Tentar de novo', 'Try again', 'Reintentar')],
    empty: [L('Nenhum projeto ainda', 'No projects yet', 'Aún no hay proyectos'), L('Crie o primeiro para começar a organizar o trabalho.', 'Create the first one to start organizing your work.', 'Crea el primero para empezar a organizar el trabajo.'), L('Criar projeto', 'Create project', 'Crear proyecto')],
    destroy: [L('Excluir “Site novo”?', 'Delete “New site”?', '¿Eliminar “Sitio nuevo”?'), L('O projeto e os 12 arquivos dele saem para sempre.', 'The project and its 12 files are removed for good.', 'El proyecto y sus 12 archivos se eliminan para siempre.'), L('Excluir projeto', 'Delete project', 'Eliminar proyecto')],
    wait: L('Gerando o relatório…', 'Generating the report…', 'Generando el informe…'),
  },
  {
    id: 'acolhedor',
    name: L('Acolhedor', 'Warm', 'Cercano'),
    desc: L('Próximo e calmo. Tira o peso das situações difíceis e lembra que nada se perdeu.', 'Close and calm. It takes the weight off hard moments and reminds people nothing was lost.', 'Cercano y tranquilo. Le quita peso a los momentos difíciles y recuerda que nada se perdió.'),
    apps: L('Saúde, bem-estar, cuidado, educação', 'Health, well-being, care, education', 'Salud, bienestar, cuidado, educación'),
    traits: [
      L('Quando o app age, fala em “a gente” ou “nós”', 'When the app acts, it says “we”', 'Cuando la app actúa, habla en “nosotros”'),
      L('Tranquiliza antes de pedir alguma coisa', 'Reassures before asking for anything', 'Tranquiliza antes de pedir algo'),
      L('Não infantiliza nem exagera no carinho', 'Never patronizing, never syrupy', 'No infantiliza ni exagera el cariño'),
    ],
    success: L('Pronto, está tudo salvo.', 'All set, everything’s saved.', 'Listo, todo está guardado.'),
    error: [L('Não conseguimos salvar agora', 'We couldn’t save just now', 'No pudimos guardar ahora'), L('Nada se perdeu: o que você escreveu continua aqui. Confira a conexão e tente de novo quando quiser.', 'Nothing is lost: what you wrote is still here. Check your connection and try again whenever you’re ready.', 'No se perdió nada: lo que escribiste sigue aquí. Revisa la conexión e inténtalo de nuevo cuando quieras.'), L('Tentar de novo', 'Try again', 'Reintentar')],
    empty: [L('Seu espaço está pronto', 'Your space is ready', 'Tu espacio está listo'), L('Quando quiser, crie o primeiro projeto. A gente mostra o caminho.', 'Whenever you like, create your first project. We’ll show you the way.', 'Cuando quieras, crea tu primer proyecto. Te mostramos el camino.'), L('Criar meu primeiro projeto', 'Create my first project', 'Crear mi primer proyecto')],
    destroy: [L('Excluir “Site novo”?', 'Delete “New site”?', '¿Eliminar “Sitio nuevo”?'), L('O projeto e os 12 arquivos vão embora de vez. Se só quer tirar da frente, dá para arquivar.', 'The project and its 12 files will be gone for good. If you just want it out of the way, you can archive it.', 'El proyecto y sus 12 archivos se irán para siempre. Si solo quieres quitarlo de en medio, puedes archivarlo.'), L('Excluir projeto', 'Delete project', 'Eliminar proyecto')],
    wait: L('Estamos preparando o seu relatório…', 'We’re putting your report together…', 'Estamos preparando tu informe…'),
  },
  {
    id: 'profissional',
    name: L('Profissional', 'Professional', 'Profesional'),
    desc: L('Formal e preciso. Diz exatamente o que aconteceu, com os termos do negócio.', 'Formal and precise. It says exactly what happened, in the terms of the business.', 'Formal y preciso. Dice exactamente qué pasó, con los términos del negocio.'),
    apps: L('Finanças, jurídico, B2B, governo', 'Finance, legal, B2B, government', 'Finanzas, legal, B2B, gobierno'),
    traits: [
      L('Frases completas, sem gíria', 'Complete sentences, no slang', 'Frases completas, sin jerga'),
      L('Termos do domínio: cadastrar, vincular, conta', 'Domain terms: register, link, account', 'Términos del dominio: registrar, vincular, cuenta'),
      L('No espanhol, trata por “usted”', 'In Spanish, it uses “usted”', 'En español, trata de “usted”'),
    ],
    success: L('As alterações foram salvas.', 'Your changes have been saved.', 'Los cambios se guardaron correctamente.'),
    error: [L('Não foi possível salvar as alterações', 'Your changes could not be saved', 'No se pudieron guardar los cambios'), L('Verifique a conexão e tente novamente. Os dados digitados foram mantidos.', 'Check your connection and try again. The data you entered has been kept.', 'Verifique su conexión e inténtelo nuevamente. Los datos ingresados se conservaron.'), L('Tentar novamente', 'Try again', 'Reintentar')],
    empty: [L('Nenhum projeto cadastrado', 'No projects registered', 'No hay proyectos registrados'), L('Cadastre um projeto para acompanhar prazos, custos e responsáveis.', 'Register a project to track deadlines, costs, and owners.', 'Registre un proyecto para seguir plazos, costos y responsables.'), L('Cadastrar projeto', 'Register project', 'Registrar proyecto')],
    destroy: [L('Excluir o projeto “Site novo”?', 'Delete the “New site” project?', '¿Eliminar el proyecto “Sitio nuevo”?'), L('Esta ação remove o projeto e os 12 arquivos vinculados de forma permanente e não pode ser desfeita.', 'This permanently removes the project and its 12 linked files. It can’t be undone.', 'Esta acción elimina de forma permanente el proyecto y sus 12 archivos vinculados, y no se puede deshacer.'), L('Excluir projeto', 'Delete project', 'Eliminar proyecto')],
    wait: L('Gerando relatório. Isso pode levar até 1 minuto.', 'Generating the report. This may take up to 1 minute.', 'Generando el informe. Esto puede tardar hasta 1 minuto.'),
  },
  {
    id: 'leve',
    name: L('Leve', 'Playful', 'Desenfadado'),
    desc: L('Descontraído e rápido. Tem humor nos momentos bons e fica sério quando algo dá errado.', 'Relaxed and quick. It has humor in the good moments and turns serious when something goes wrong.', 'Relajado y rápido. Tiene humor en los buenos momentos y se pone serio cuando algo sale mal.'),
    apps: L('Consumo, jogos, redes, comunidade', 'Consumer apps, games, social, community', 'Consumo, juegos, redes, comunidad'),
    traits: [
      L('Exclamação nos acertos, com moderação', 'Exclamation marks for wins, in moderation', 'Exclamaciones en los aciertos, con moderación'),
      L('Expressões do dia a dia', 'Everyday expressions', 'Expresiones del día a día'),
      L('Humor nunca no erro nem na exclusão', 'Never humor in errors or deletions', 'Nunca humor en el error ni al eliminar'),
    ],
    success: L('Feito! Tudo salvo.', 'Done! All saved.', '¡Hecho! Todo guardado.'),
    error: [L('Não deu para salvar', 'That didn’t save', 'No se pudo guardar'), L('A conexão caiu no meio do caminho. O que você escreveu está aqui: é só tentar de novo.', 'The connection dropped along the way. What you wrote is still here, just try again.', 'La conexión se cayó a mitad de camino. Lo que escribiste sigue aquí: solo inténtalo de nuevo.'), L('Tentar de novo', 'Try again', 'Reintentar')],
    empty: [L('Por aqui, tudo vazio', 'Nothing here yet', 'Por aquí, todo vacío'), L('Que tal começar o primeiro projeto?', 'How about starting your first project?', '¿Qué tal empezar el primer proyecto?'), L('Começar um projeto', 'Start a project', 'Empezar un proyecto')],
    destroy: [L('Excluir “Site novo”?', 'Delete “New site”?', '¿Eliminar “Sitio nuevo”?'), L('Os 12 arquivos vão junto, e não tem volta.', 'Its 12 files go with it, and there’s no going back.', 'Sus 12 archivos se van con él, y no hay vuelta atrás.'), L('Excluir projeto', 'Delete project', 'Eliminar proyecto')],
    wait: L('Juntando os números…', 'Crunching the numbers…', 'Juntando los números…'),
  },
];

const SITUATIONS = () => [
  ['success', L('Sucesso', 'Success', 'Éxito')],
  ['error', L('Erro', 'Error', 'Error')],
  ['empty', L('Vazio', 'Empty', 'Vacío')],
  ['destroy', L('Exclusão', 'Deletion', 'Eliminación')],
  ['wait', L('Espera', 'Waiting', 'Espera')],
];

/* ───────── Exemplo: as cinco situações num tom ───────── */

function specimen(t) {
  const label = (key) => `<p class="vt-spec__label">${SITUATIONS().find(([k]) => k === key)[1]}</p>`;
  return `
    <div class="vt-spec">
      ${label('success')}
      <div class="${toastClasses({ tone: 'success' })} vt-toast" data-open inert>${toastContent(t.success, { tone: 'success' })}</div>
    </div>
    <div class="vt-spec">
      ${label('wait')}
      <div class="vt-wait"><span class="ds-spinner ds-spinner--sm" aria-hidden="true"></span><span>${escapeHtml(t.wait)}</span></div>
    </div>
    <div class="vt-spec">
      ${label('error')}
      <div class="ds-alert ds-alert--danger">
        <span class="ds-alert__icon">${icon('alert-circle', { size: 18 })}</span>
        <div class="ds-alert__body">
          <p class="ds-alert__title">${escapeHtml(t.error[0])}</p>
          <p class="ds-alert__text">${escapeHtml(t.error[1])}</p>
          <div class="ds-alert__actions"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" tabindex="-1">${icon('refresh', { size: 16 })}${escapeHtml(t.error[2])}</button></div>
        </div>
      </div>
    </div>
    <div class="vt-spec">
      ${label('destroy')}
      <div class="ds-modal ds-modal--inline ds-modal--danger vt-modal">
        <div class="ds-modal__header">
          <span class="ds-modal__icon">${icon('alert-triangle', { size: 20 })}</span>
          <div class="ds-modal__heading"><p class="ds-modal__title">${escapeHtml(t.destroy[0])}</p></div>
        </div>
        <div class="ds-modal__body">${escapeHtml(t.destroy[1])}</div>
        <div class="ds-modal__footer">
          <button type="button" class="ds-btn ds-btn--secondary" tabindex="-1">${L('Cancelar', 'Cancel', 'Cancelar')}</button>
          <button type="button" class="ds-btn ds-btn--danger" tabindex="-1">${escapeHtml(t.destroy[2])}</button>
        </div>
      </div>
    </div>
    <div class="vt-spec vt-spec--wide">
      ${label('empty')}
      <div class="ds-empty ds-empty--compact">
        <span class="ds-empty__icon">${icon('folder', { size: 20 })}</span>
        <p class="ds-empty__title">${escapeHtml(t.empty[0])}</p>
        <p class="ds-empty__description">${escapeHtml(t.empty[1])}</p>
        <div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary ds-btn--sm" tabindex="-1">${icon('plus', { size: 16 })}${escapeHtml(t.empty[2])}</button></div>
      </div>
    </div>`;
}

function toneCard(t) {
  return `
    <p class="vt-tone__name">${t.name}</p>
    <p class="vt-tone__desc">${t.desc}</p>
    <p class="vt-tone__apps"><span>${L('Combina com', 'Fits', 'Combina con')}</span>${t.apps}</p>
    <ul class="vt-tone__traits" role="list">${t.traits.map((x) => `<li>${icon('check', { size: 16 })}<span>${x}</span></li>`).join('')}</ul>`;
}

/* ───────── O resto da página ───────── */

const VOICE = () => [
  ['eye', L('Clara', 'Clear', 'Clara'), L('Palavras do dia a dia, uma ideia por frase.', 'Everyday words, one idea per sentence.', 'Palabras del día a día, una idea por frase.'), L('Não é: jargão técnico nem código de erro.', 'It isn’t: tech jargon or error codes.', 'No es: jerga técnica ni códigos de error.')],
  ['arrow-right', L('Direta', 'Direct', 'Directa'), L('Diz o que aconteceu e o que fazer em seguida.', 'Says what happened and what to do next.', 'Dice qué pasó y qué hacer después.'), L('Não é: seca nem ríspida.', 'It isn’t: curt or harsh.', 'No es: seca ni brusca.')],
  ['heart', L('Gentil', 'Kind', 'Amable'), L('Cuida de quem errou e nunca põe a culpa na pessoa.', 'Takes care of whoever made a mistake and never blames them.', 'Cuida de quien se equivocó y nunca le echa la culpa.'), L('Não é: melosa nem cheia de desculpas.', 'It isn’t: syrupy or over-apologetic.', 'No es: empalagosa ni llena de disculpas.')],
];

const BY_SITUATION = () => [
  [L('Sucesso', 'Success', 'Éxito'), L('Comemorar pouco, ou nada quando a tela já mostra o resultado.', 'Celebrate a little, or not at all when the screen already shows the result.', 'Celebrar poco, o nada cuando la pantalla ya muestra el resultado.'), L('Interromper com um modal para dizer que deu certo.', 'Interrupt with a modal to say it worked.', 'Interrumpir con un modal para decir que salió bien.')],
  [L('Erro', 'Error', 'Error'), L('Mudar o jeito de dizer: mais curto, mais calmo, mais formal.', 'Change how it’s said: shorter, calmer, more formal.', 'Cambiar la forma de decirlo: más corta, más tranquila, más formal.'), L('Culpar a pessoa, fazer piada ou esconder o que fazer.', 'Blame the person, make a joke, or hide what to do.', 'Culpar a la persona, bromear u ocultar qué hacer.')],
  [L('Exclusão', 'Deletion', 'Eliminación'), L('Oferecer uma saída mais leve, como arquivar.', 'Offer a lighter way out, like archiving.', 'Ofrecer una salida más ligera, como archivar.'), L('Suavizar a consequência: o que sai, sai para sempre.', 'Soften the consequence: what goes, goes for good.', 'Suavizar la consecuencia: lo que se va, se va para siempre.')],
  [L('Espera', 'Waiting', 'Espera'), L('Dar contexto e, quando souber, quanto tempo falta.', 'Give context and, when known, how long is left.', 'Dar contexto y, si se sabe, cuánto falta.'), L('Prometer um prazo que não dá para cumprir.', 'Promise a time it can’t keep.', 'Prometer un plazo que no se puede cumplir.')],
  [L('Vazio', 'Empty', 'Vacío'), L('Convidar e mostrar o primeiro passo.', 'Invite and show the first step.', 'Invitar y mostrar el primer paso.'), L('Deixar a tela sem nenhuma ação.', 'Leave the screen with no action at all.', 'Dejar la pantalla sin ninguna acción.')],
];

const RULES = () => [
  ['button', L('Verbo no botão', 'A verb on the button', 'Verbo en el botón'), L('“Salvar”, “Excluir projeto”. Nunca “OK” ou “Sim”: o botão diz o que vai fazer.', '“Save”, “Delete project”. Never “OK” or “Yes”: the button says what it will do.', '“Guardar”, “Eliminar proyecto”. Nunca “OK” ni “Sí”: el botón dice lo que va a hacer.')],
  ['alert-circle', L('O que houve e o que fazer', 'What happened, what to do', 'Qué pasó y qué hacer'), L('Toda mensagem de problema responde às duas perguntas, nessa ordem.', 'Every problem message answers both questions, in that order.', 'Todo mensaje de problema responde a las dos preguntas, en ese orden.')],
  ['shield', L('Sem culpa', 'No blame', 'Sin culpa'), L('“Não foi possível salvar”, e não “Você digitou errado”. O sistema assume o problema.', '“Couldn’t save”, not “You typed it wrong”. The system owns the problem.', '“No se pudo guardar”, y no “Escribiste mal”. El sistema asume el problema.')],
  ['type', L('Curto primeiro', 'Short first', 'Lo corto primero'), L('A frase principal resolve sozinha; o detalhe vem depois, para quem precisar.', 'The main sentence works on its own; detail comes after, for whoever needs it.', 'La frase principal se basta sola; el detalle viene después, para quien lo necesite.')],
  ['tag', L('Mesma palavra, mesma coisa', 'Same word, same thing', 'Misma palabra, misma cosa'), L('Excluir é sempre excluir. Trocar por apagar ou remover na tela seguinte confunde.', 'Delete is always delete. Switching to remove or erase on the next screen confuses people.', 'Eliminar es siempre eliminar. Cambiar a borrar o quitar en la pantalla siguiente confunde.')],
  ['globe', L('Números e datas pelo idioma', 'Numbers and dates by locale', 'Números y fechas por idioma'), L(`Formate com ${ic('Intl')}, nunca à mão. O mesmo valor muda de forma em cada idioma.`, `Format with ${ic('Intl')}, never by hand. The same value changes shape in each language.`, `Formatea con ${ic('Intl')}, nunca a mano. El mismo valor cambia de forma en cada idioma.`)],
];

const WRITING = () => [
  [L('Confirmação', 'Confirmation', 'Confirmación'), 'OK', L('Excluir projeto', 'Delete project', 'Eliminar proyecto')],
  [L('Falha de rede', 'Network failure', 'Falla de red'), 'Erro 503: Service Unavailable', L('Não foi possível conectar. Tente de novo em alguns segundos.', 'Couldn’t connect. Try again in a few seconds.', 'No se pudo conectar. Inténtalo de nuevo en unos segundos.')],
  [L('Campo inválido', 'Invalid field', 'Campo inválido'), L('Entrada inválida.', 'Invalid input.', 'Entrada inválida.'), L('Digite um e-mail no formato nome@exemplo.com.', 'Enter an email like name@example.com.', 'Escribe un correo con el formato nombre@ejemplo.com.')],
  [L('Lista vazia', 'Empty list', 'Lista vacía'), L('Sem dados.', 'No data.', 'Sin datos.'), L('Nenhum pedido ainda. Os pedidos aparecem aqui assim que chegarem.', 'No orders yet. Orders show up here as soon as they arrive.', 'Aún no hay pedidos. Los pedidos aparecen aquí en cuanto llegan.')],
  [L('Sucesso', 'Success', 'Éxito'), L('Operação realizada com sucesso!', 'Operation completed successfully!', '¡Operación realizada con éxito!'), L('Pedido enviado.', 'Order sent.', 'Pedido enviado.')],
];

/** Os números e as datas saem do próprio Intl, em cada idioma: é a prova da regra. */
function sample(loc) {
  const n = new Intl.NumberFormat(loc).format(12345.5);
  const d = new Intl.DateTimeFormat(loc, { dateStyle: 'short', timeZone: 'UTC' }).format(new Date(Date.UTC(2026, 10, 15)));
  const m = new Intl.NumberFormat(loc, { style: 'currency', currency: 'BRL', currencyDisplay: 'narrowSymbol' }).format(49.9);
  return `${n} · ${d} · ${m}`;
}

const LANGS = () => [
  [L('Tratamento', 'Form of address', 'Tratamiento'), L('“Você” em todos os tons', '“você” in every tone', '“você” en todos los tonos'), L('“you” em todos os tons', '“you” in every tone', '“you” en todos los tonos'), L('“tú”; “usted” no Profissional', '“tú”; “usted” in Professional', '“tú”; “usted” en el Profesional')],
  [L('Maiúsculas', 'Capitalization', 'Mayúsculas'), L('Só a primeira palavra: “Criar projeto”', 'Only the first word: “Criar projeto”', 'Solo la primera palabra: “Criar projeto”'), L('Também só a primeira: “Create project”', 'Only the first too: “Create project”', 'También solo la primera: “Create project”'), L('Só a primeira: “Crear proyecto”', 'Only the first: “Crear proyecto”', 'Solo la primera: “Crear proyecto”')],
  [L('Pontuação', 'Punctuation', 'Puntuación'), L('Aspas curvas “ ”', 'Curly quotes “ ”', 'Comillas curvas “ ”'), L('Aspas curvas “ ” e apóstrofo ’', 'Curly quotes “ ” and apostrophe ’', 'Comillas curvas “ ” y apóstrofo ’'), L('¿ e ¡ abrem a pergunta e a exclamação', '¿ and ¡ open questions and exclamations', '¿ y ¡ abren la pregunta y la exclamación')],
  [L('Números e datas', 'Numbers and dates', 'Números y fechas'), sample('pt-BR'), sample('en'), sample('es')],
  [L('Comprimento', 'Length', 'Longitud'), L('Até 30% mais longo que o inglês', 'Up to 30% longer than English', 'Hasta un 30% más largo que el inglés'), L('Costuma ser o mais curto', 'Usually the shortest', 'Suele ser el más corto'), L('Até 30% mais longo que o inglês', 'Up to 30% longer than English', 'Hasta un 30% más largo que el inglés')],
];

function messagesCode() {
  const t = TONES();
  const [neutral, warm] = t;
  const q = (s) => `'${s.replace(/'/g, '’')}'`;
  return `// ${L('mensagens/neutro.js', 'messages/neutral.js', 'mensajes/neutro.js')}
export default {
  'salvar.ok': ${q(neutral.success)},
  'salvar.erro': ${q(neutral.error[0])},
  'projetos.vazio': ${q(neutral.empty[0])},
};

// ${L('mensagens/acolhedor.js', 'messages/warm.js', 'mensajes/cercano.js')}
export default {
  'salvar.ok': ${q(warm.success)},
  'salvar.erro': ${q(warm.error[0])},
  'projetos.vazio': ${q(warm.empty[0])},
};

// ${L('mensagens/index.js: o tom do app é uma escolha só', 'messages/index.js: the app’s tone is a single choice', 'mensajes/index.js: el tono de la app es una sola elección')}
import neutro from './neutro.js';
import acolhedor from './acolhedor.js';

const TONS = { neutro, acolhedor };
const tom = 'acolhedor';

export const t = (chave) => TONS[tom][chave] ?? TONS.neutro[chave] ?? chave;

// ${L('na tela', 'on screen', 'en pantalla')}
toast(t('salvar.ok'));`;
}

function promptText(t) {
  return [
    L(`Escreva os textos da interface no tom ${t.name}.`, `Write the interface copy in the ${t.name} tone.`, `Escribe los textos de la interfaz en el tono ${t.name}.`),
    `${L('O tom', 'The tone', 'El tono')}: ${t.desc}`,
    ...t.traits.map((x) => `- ${x}.`),
    `- ${L('Botões começam com verbo e dizem o que fazem; nunca “OK”.', 'Buttons start with a verb and say what they do; never “OK”.', 'Los botones empiezan con un verbo y dicen lo que hacen; nunca “OK”.')}`,
    `- ${L('Erros dizem o que aconteceu e o que fazer, sem culpar a pessoa e sem piada.', 'Errors say what happened and what to do, without blaming the person and without jokes.', 'Los errores dicen qué pasó y qué hacer, sin culpar a la persona y sin bromas.')}`,
    `- ${L('Exclusão deixa a consequência clara; espera diz quanto tempo falta, quando der.', 'Deletion makes the consequence clear; waiting says how long is left, when known.', 'Eliminar deja clara la consecuencia; la espera dice cuánto falta, si se sabe.')}`,
    `- ${L('Mesma palavra para a mesma coisa em todas as telas.', 'The same word for the same thing on every screen.', 'La misma palabra para la misma cosa en todas las pantallas.')}`,
    '',
    L('Devolva cada texto com a chave dele no arquivo de mensagens.', 'Return each text with its key in the messages file.', 'Devuelve cada texto con su clave en el archivo de mensajes.'),
  ].join('\n');
}

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
  ['vt-voz', L('Voz e tom', 'Voice and tone', 'Voz y tono')],
  ['vt-tons', L('Tons', 'Tones', 'Tonos')],
  ['vt-situacoes', L('Por situação', 'By situation', 'Por situación')],
  ['vt-regras', L('Regras', 'Rules', 'Reglas')],
  ['vt-mensagens', L('Mensagens', 'Messages', 'Mensajes')],
  ['vt-idiomas', L('Idiomas', 'Languages', 'Idiomas')],
  ['vt-app', L('No seu app', 'In your app', 'En tu app')],
  ['vt-uso', L('Uso', 'Usage', 'Uso')],
];

export default function renderTomDeVoz(page) {
  const tones = TONES();
  const first = tones[0];
  return `
  <div class="page doc vt-page">
    <header class="doc-header">
      <div>
        <p class="doc-header__eyebrow">${page.group}</p>
        <h1 class="doc-header__title">${page.label}</h1>
        <p class="doc-header__lead">${L('A voz é quem o produto é, e não muda. O tom é como essa voz soa em cada momento: um aviso de erro não fala como uma comemoração, e um app de finanças não fala como um jogo.', 'The voice is who the product is, and it doesn’t change. The tone is how that voice sounds in each moment: an error doesn’t speak like a celebration, and a finance app doesn’t speak like a game.', 'La voz es quién es el producto, y no cambia. El tono es cómo suena esa voz en cada momento: un error no habla como una celebración, y una app de finanzas no habla como un juego.')}</p>
      </div>
      <dl class="doc-stats">
        <div class="doc-stat"><dt class="doc-stat__label">${L('tons', 'tones', 'tonos')}</dt><dd class="doc-stat__value">${tones.length}</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('situações', 'situations', 'situaciones')}</dt><dd class="doc-stat__value">${SITUATIONS().length}</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('regras', 'rules', 'reglas')}</dt><dd class="doc-stat__value">${RULES().length}</dd></div>
      </dl>
    </header>

    <nav class="doc-nav" aria-label="${L('Nesta página', 'On this page', 'En esta página')}">
      ${NAV().map(([id, label]) => `<button type="button" class="doc-nav__link" data-target="${id}">${label}</button>`).join('')}
    </nav>

    ${section(
      'vt-voz',
      L('Voz e tom', 'Voice and tone', 'Voz y tono'),
      L('A voz do Lume tem três traços. Eles valem em todos os tons; o tom só decide quanto de cada um aparece.', 'Lume’s voice has three traits. They hold in every tone; the tone only decides how much of each shows.', 'La voz de Lume tiene tres rasgos. Valen en todos los tonos; el tono solo decide cuánto se nota cada uno.'),
      `<div class="pt-rules vt-voice">${VOICE().map(([glyph, title, is, isnt]) => `<article class="pt-rule"><span class="pt-rule__icon">${icon(glyph, { size: 18 })}</span><p class="pt-rule__title">${title}</p><p class="pt-rule__text">${is}</p><p class="vt-voice__not">${isnt}</p></article>`).join('')}</div>`,
    )}

    ${section(
      'vt-tons',
      L('Tons', 'Tones', 'Tonos'),
      L('Quatro tons prontos, com as mesmas cinco situações escritas do jeito de cada um. Troque o tom e compare: os botões quase não mudam, porque verbo é verbo em qualquer tom.', 'Four ready-made tones, with the same five situations written each one’s way. Switch the tone and compare: buttons barely change, because a verb is a verb in any tone.', 'Cuatro tonos listos, con las mismas cinco situaciones escritas a la manera de cada uno. Cambia el tono y compara: los botones casi no cambian, porque un verbo es un verbo en cualquier tono.'),
      `<div class="vt-tones" data-vt-tones>
        <div class="ds-segmented vt-tones__switch" role="radiogroup" aria-label="${L('Tom', 'Tone', 'Tono')}">
          ${tones.map((t, i) => `<button type="button" class="ds-segmented__item" role="radio" data-value="${t.id}" aria-checked="${i === 0}">${t.name}</button>`).join('')}
        </div>
        <div class="vt-tones__body">
          <div class="vt-tone" data-vt-card>${toneCard(first)}</div>
          <div class="vt-specs" data-vt-specs>${specimen(first)}</div>
        </div>
      </div>`,
    )}

    ${section(
      'vt-situacoes',
      L('Tom por situação', 'Tone by situation', 'Tono por situación'),
      L('O tom do app é um só, mas ele se ajusta ao momento. O que ele pode mudar e o que fica igual em qualquer tom:', 'The app has a single tone, but it adjusts to the moment. What it can change and what stays the same in any tone:', 'La app tiene un solo tono, pero se ajusta al momento. Lo que puede cambiar y lo que queda igual en cualquier tono:'),
      `<div class="doc-table vt-situations">
        <div class="doc-table__head" aria-hidden="true"><span>${L('Situação', 'Situation', 'Situación')}</span><span>${L('O tom pode', 'The tone can', 'El tono puede')}</span><span>${L('Nenhum tom pode', 'No tone can', 'Ningún tono puede')}</span></div>
        ${BY_SITUATION().map(([s, can, cant]) => `<div class="doc-table__row"><span class="pt-writing__situation">${s}</span><span class="pt-writing__good">${icon('check-circle', { size: 16 })}<span>${can}</span></span><span class="pt-writing__bad">${icon('x-circle', { size: 16 })}<span>${cant}</span></span></div>`).join('')}
      </div>`,
    )}

    ${section(
      'vt-regras',
      L('Regras de escrita', 'Writing rules', 'Reglas de escritura'),
      L('Seis regras que valem para qualquer tom e qualquer idioma.', 'Six rules that hold for any tone and any language.', 'Seis reglas que valen para cualquier tono y cualquier idioma.'),
      `<div class="pt-rules">${RULES().map(([glyph, title, text]) => `<article class="pt-rule"><span class="pt-rule__icon">${icon(glyph, { size: 18 })}</span><p class="pt-rule__title">${title}</p><p class="pt-rule__text">${text}</p></article>`).join('')}</div>`,
    )}

    ${section(
      'vt-mensagens',
      L('Mensagens', 'Messages', 'Mensajes'),
      L('Os textos que mais aparecem, antes e depois. O “depois” está no tom Neutro.', 'The most common texts, before and after. The “after” is in the Neutral tone.', 'Los textos más comunes, antes y después. El “después” está en el tono Neutro.'),
      `<div class="doc-table pt-writing">
        <div class="doc-table__head" aria-hidden="true"><span>${L('Situação', 'Situation', 'Situación')}</span><span>${L('Evite', 'Avoid', 'Evita')}</span><span>${L('Prefira', 'Prefer', 'Prefiere')}</span></div>
        ${WRITING().map(([s, bad, good]) => `<div class="doc-table__row"><span class="pt-writing__situation">${s}</span><span class="pt-writing__bad">${icon('x-circle', { size: 16 })}<span>${escapeHtml(bad)}</span></span><span class="pt-writing__good">${icon('check-circle', { size: 16 })}<span>${escapeHtml(good)}</span></span></div>`).join('')}
      </div>`,
    )}

    ${section(
      'vt-idiomas',
      L('Nos três idiomas', 'In the three languages', 'En los tres idiomas'),
      L('Traduzir não basta: cada idioma tem os costumes dele. O tom continua o mesmo, mas a forma muda.', 'Translating isn’t enough: each language has its own habits. The tone stays the same, but the form changes.', 'Traducir no basta: cada idioma tiene sus costumbres. El tono sigue igual, pero la forma cambia.'),
      `<div class="doc-table vt-langs">
        <div class="doc-table__head" aria-hidden="true"><span></span><span>Português</span><span>English</span><span>Español</span></div>
        ${LANGS().map(([what, pt, en, es]) => `<div class="doc-table__row"><span class="pt-writing__situation">${what}</span><span lang="pt-BR">${pt}</span><span lang="en">${en}</span><span lang="es">${es}</span></div>`).join('')}
      </div>`,
    )}

    ${section(
      'vt-app',
      L('Como padronizar no seu app', 'How to standardize it in your app', 'Cómo estandarizarlo en tu app'),
      L(`Escolha um tom, tire os textos do meio do código e dê o mesmo guia a quem escreve, gente ou IA. É o que o Lume faz com o ${ic('messages.js')}.`, `Pick a tone, pull the texts out of the code, and give the same guide to whoever writes, people or AI. It’s what Lume does with ${ic('messages.js')}.`, `Elige un tono, saca los textos del medio del código y dale la misma guía a quien escribe, personas o IA. Es lo que Lume hace con ${ic('messages.js')}.`),
      `<ol class="vt-steps" role="list">
        <li><span class="pt-parts__num">1</span><div><p class="pt-parts__name">${L('Escolha a voz e um tom', 'Pick the voice and one tone', 'Elige la voz y un tono')}</p><p class="pt-parts__text">${L('Três traços de voz e um dos quatro tons, ou um seu. Um tom por app: misturar tons de uma tela para outra parece dois produtos.', 'Three voice traits and one of the four tones, or your own. One tone per app: mixing tones from screen to screen feels like two products.', 'Tres rasgos de voz y uno de los cuatro tonos, o uno propio. Un tono por app: mezclar tonos de una pantalla a otra parece dos productos.')}</p></div></li>
        <li><span class="pt-parts__num">2</span><div><p class="pt-parts__name">${L('Textos num arquivo, com chaves', 'Texts in a file, with keys', 'Textos en un archivo, con claves')}</p><p class="pt-parts__text">${L('O código pede a chave, não escreve a frase. Revisar o tom vira editar um arquivo, e trocar de tom vira trocar de arquivo.', 'The code asks for the key, it doesn’t write the sentence. Reviewing the tone becomes editing one file, and switching tones becomes switching files.', 'El código pide la clave, no escribe la frase. Revisar el tono es editar un archivo, y cambiar de tono es cambiar de archivo.')}</p></div></li>
        <li><span class="pt-parts__num">3</span><div><p class="pt-parts__name">${L('O mesmo guia para a IA', 'The same guide for AI', 'La misma guía para la IA')}</p><p class="pt-parts__text">${L('Cole o trecho abaixo antes de pedir textos. Ele segue o tom escolhido lá em cima.', 'Paste the snippet below before asking for copy. It follows the tone picked above.', 'Pega el fragmento de abajo antes de pedir textos. Sigue el tono elegido arriba.')}</p></div></li>
      </ol>
      ${codeBlock(messagesCode())}
      <div data-vt-prompt>${codeBlock(promptText(first))}</div>`,
    )}

    ${section(
      'vt-uso',
      L('Uso', 'Usage', 'Uso'),
      L('Tom bom não chama atenção para si: a pessoa só percebe que entendeu.', 'Good tone doesn’t draw attention to itself: people just notice they understood.', 'El buen tono no llama la atención: la persona solo nota que entendió.'),
      `<div class="usage-grid">
        <article class="usage-card usage-card--do">
          <p class="usage-card__head">${icon('check-circle', { size: 20 })}${L('Faça: escreva o tom antes dos textos', 'Do: write the tone before the copy', 'Haz: escribe el tono antes de los textos')}</p>
          <p class="usage-card__text">${L('Três traços e cinco exemplos, como nesta página, resolvem mais discussão do que qualquer revisão no fim.', 'Three traits and five examples, as on this page, settle more debates than any review at the end.', 'Tres rasgos y cinco ejemplos, como en esta página, resuelven más discusiones que cualquier revisión al final.')}</p>
        </article>
        <article class="usage-card usage-card--dont">
          <p class="usage-card__head">${icon('x-circle', { size: 20 })}${L('Evite: um tom por tela', 'Avoid: a tone per screen', 'Evita: un tono por pantalla')}</p>
          <p class="usage-card__text">${L('Formal no cadastro, cheio de piada no painel e seco no erro: a pessoa não sabe com quem está falando.', 'Formal at sign-up, full of jokes on the dashboard, curt on errors: people don’t know who they’re talking to.', 'Formal en el registro, lleno de bromas en el panel y seco en el error: la persona no sabe con quién habla.')}</p>
        </article>
        <article class="usage-card usage-card--tip">
          <p class="usage-card__head">${icon('mic', { size: 20 })}${L('Leia em voz alta', 'Read it out loud', 'Léelo en voz alta')}</p>
          <p class="usage-card__text">${L('Se a frase soaria estranha dita por uma pessoa do outro lado do balcão, reescreva.', 'If the sentence would sound odd coming from a person across the counter, rewrite it.', 'Si la frase sonaría rara dicha por una persona al otro lado del mostrador, reescríbela.')}</p>
        </article>
      </div>`,
    )}
  </div>`;
}

/* ───────── Comportamento ───────── */

export function mount(root) {
  const box = root.querySelector('[data-vt-tones]');
  const card = box.querySelector('[data-vt-card]');
  const specs = box.querySelector('[data-vt-specs]');
  const prompt = root.querySelector('[data-vt-prompt]');
  const group = createSegmented(box.querySelector('.ds-segmented'), {
    onChange: (id) => {
      const t = TONES().find((x) => x.id === id);
      if (!t) return;
      card.innerHTML = toneCard(t);
      specs.innerHTML = specimen(t);
      prompt.innerHTML = codeBlock(promptText(t));
    },
  });
  const unCopy = mountCodeCopy(root);
  const unNav = mountDocNav(root);
  return () => {
    group.destroy();
    unCopy?.();
    unNav();
  };
}

