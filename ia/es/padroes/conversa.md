# Conversación y composer

Sección de Lume: Patrones. Página: https://lumeui.dev/#/padroes/conversa

Pregunta en burbuja, respuesta en texto de lectura, resultado en tarjeta y una caja de mensaje que crece con el texto y acepta adjuntos y comandos con / .

En números: tipos de mensaje: 2 · atajos: 7 · estados: 5 · punto de color: 1.

## En vivo

Una conversación de verdad, con respuestas simuladas. Envía, escribe / , adjunta un archivo, detén una respuesta a la mitad o copia el resultado.

¿Cómo puedo ayudar?

Pregunta en español, adjunta un archivo o escribe / para ver los comandos.

```html
import { createComposer, messageHtml, typingHtml, streamText } from 'https://lumeui.dev/v/0.29/lume.js';

const thread = document.querySelector('.ds-thread');   // role="log" aria-live="polite"

const composer = createComposer(document.querySelector('#composer'), {
  label: 'Mensaje para Lume',
  placeholder: 'Pregunta algo o escribe / para comandos',
  maxLength: 2000,
  commands: [
    { id: 'guion', label: 'Crear guion', description: 'Arma un guion en escenas', icon: 'list' },
    { id: 'resumir', label: 'Resumir', description: 'Resume un texto en tres frases', icon: 'file-text' },
  ],
  async onSend({ text, attachments, command }) {
    thread.insertAdjacentHTML('beforeend', messageHtml({ role: 'user', text, attachments }));
    composer.setBusy(true);                       // enviar se vuelve "detener"; Esc también detiene
    thread.insertAdjacentHTML('beforeend', messageHtml({ html: typingHtml(), busy: true, actions: false }));
    const body = thread.lastElementChild.querySelector('[data-body]');
    body.innerHTML = '';
    await streamText(body, await pedirRespuesta(text, command));
    thread.lastElementChild.removeAttribute('aria-busy');
    composer.setBusy(false);
  },
  onStop() { /* cancela la solicitud y marca "Respuesta interrumpida." */ },
});
```

Marcado de los ejemplos de esta sección:

```html
<span class="ds-message__mark" aria-hidden="true">L</span>

<div class="ds-suggestions">
<button type="button" class="ds-chip ds-chip--sm" data-suggest="Crea un guion de 3 escenas" data-command="guion"><span class="ds-chip__icon"><ds-icon name="list"></ds-icon></span>Crea un guion de 3 escenas</button><button type="button" class="ds-chip ds-chip--sm" data-suggest="Resume qué es Lume" data-command="resumir"><span class="ds-chip__icon"><ds-icon name="file-text"></ds-icon></span>Resume qué es Lume</button><button type="button" class="ds-chip ds-chip--sm" data-suggest="¿Por dónde empiezo los tokens?"><span class="ds-chip__icon"><ds-icon name="palette"></ds-icon></span>¿Por dónde empiezo los tokens?</button>
</div>

<div class="ds-thread" role="log" aria-live="polite" aria-relevant="additions" aria-label="Conversación" data-thread=""></div>

<div class="ds-composer">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-9-input">Mensaje para Lume</label>
<textarea class="ds-composer__input" id="ds-composer-9-input" rows="1" placeholder="Pregunta algo o escribe / para comandos" aria-autocomplete="list" aria-controls="ds-composer-9-menu" aria-describedby="ds-composer-9-hint"></textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Adjuntar archivo" data-ds-tooltip="Adjuntar archivo"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Comandos" data-ds-tooltip="Comandos" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden="">0 / 2000</span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Enviar mensaje" data-ds-tooltip="Enviar" data-ds-tooltip-kbd="↵" aria-disabled="true"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-9-menu" role="listbox" aria-label="Comandos" hidden=""></div>
</div>

<p class="ds-composer__hint" id="ds-composer-9-hint">
<span><kbd class="ds-kbd">Enter</kbd> envía</span>
<span><kbd class="ds-kbd">Shift</kbd> + <kbd class="ds-kbd">Enter</kbd> nueva línea</span>
<span><kbd class="ds-kbd">/</kbd> comandos</span>
</p>

<p class="ds-visually-hidden" aria-live="polite" data-live=""></p>

<p class="ds-visually-hidden" aria-live="polite" data-demo-live=""></p>

<button type="button" class="ds-chip" data-control="reply" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-183">
<span>Respuesta</span><span data-label="">Texto y tarjeta</span>
<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span>
</button>
```

## Anatomía

Nueve piezas. Solo una tiene color: enviar. El resto es contorno, superficie y texto.

- 1 — Pregunta — Burbuja sólida en bg.raised, a la derecha.
- 2 — Adjunto — Píldora con tipo, nombre y tamaño.
- 3 — Autor y hora — Marca, nombre y hora en eyebrow atenuado.
- 4 — Respuesta — Texto de lectura, sin burbuja, hasta 68 caracteres.
- 5 — Tarjeta de resultado — Lo que se puede usar: sello, título, contenido y acciones.
- 6 — Acciones — Copiar, generar de nuevo y valorar — con hover y en la última respuesta.
- 7 — Composer — Campo que crece, adjuntos y comandos arriba.
- 8 — Herramientas — Adjuntar y comandos, botones de ícono sin fondo.
- 9 — Enviar — El único punto de color. Se vuelve detener mientras responde.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-composer">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-2-input">Mensaje</label>
<textarea class="ds-composer__input" id="ds-composer-2-input" rows="1" placeholder="Pregunta algo o escribe / para comandos" aria-autocomplete="list" aria-controls="ds-composer-2-menu"></textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Adjuntar archivo" data-ds-tooltip="Adjuntar archivo"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Comandos" data-ds-tooltip="Comandos" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden=""></span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Enviar mensaje" data-ds-tooltip="Enviar" data-ds-tooltip-kbd="↵" aria-disabled="true"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-2-menu" role="listbox" aria-label="Comandos" hidden=""></div>
</div>
```

## Burbujas

Quien pregunta recibe burbuja; quien responde, no. Así la pregunta se encuentra de un vistazo y la respuesta se lee sin marco.

Pregunta `ds-message--user` — Burbuja sólida, a la derecha. La esquina de abajo, más cerrada, señala quién habló.

Respuesta `ds-message` — Sin burbuja: texto de lectura de hasta 68 caracteres por línea, con autor y hora arriba.

Con adjuntos `ds-message__attachments` — Los adjuntos vienen antes del texto, en píldoras con tipo, nombre y tamaño.

Lista y código `ds-message__body` — Listas solo a partir de tres elementos. El código corto va en línea.

Divisor y aviso `ds-thread__divider` — El divisor separa días; el aviso del sistema queda centrado y atenuado, sin burbuja.

Escribiendo `ds-typing` — Tres puntos y un texto corto. Con movimiento reducido, los puntos quedan quietos.

- Burbuja: bg.raised · contorno sutil · radio xl, esquina xs
- Respuesta: text.body-md · 16/28 · hasta 68 caracteres
- Entre mensajes: space.400 · 32 px
- Acciones: botones de ícono de 28 px, sin fondo

Marcado de los ejemplos de esta sección:

```html
<div class="ds-thread "><article class="ds-message ds-message--user" aria-label="Dijiste"><div class="ds-message__body"><p>Arma un guion para el lanzamiento de la versión 0.2</p></div><p class="ds-message__meta">Enviado · <time>14:32</time></p></article></div>

<div class="ds-thread "><article class="ds-message" data-latest="" aria-label="Lume respondió">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span><time>14:32</time></header>
<div class="ds-message__body" data-body=""><p>Armé un guion corto, en tres escenas. Cada una cabe en hasta 20 segundos.</p></div>
<div class="ds-message__actions" role="group" aria-label="Acciones de la respuesta"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="copy" aria-label="Copiar respuesta" data-ds-tooltip="Copiar respuesta"><ds-icon name="copy"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="retry" aria-label="Generar de nuevo" data-ds-tooltip="Generar de nuevo"><ds-icon name="refresh"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="like" aria-label="Me gusta" data-ds-tooltip="Me gusta" aria-pressed="false"><ds-icon name="thumbs-up"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="dislike" aria-label="No me gusta" data-ds-tooltip="No me gusta" aria-pressed="false"><ds-icon name="thumbs-down"></ds-icon></button></div>
</article></div>

<div class="ds-thread "><article class="ds-message ds-message--user" aria-label="Dijiste"><div class="ds-message__attachments"><span class="ds-attachment">
<span class="ds-attachment__icon" aria-hidden="true"><ds-icon name="file-text"></ds-icon></span>
<span class="ds-attachment__name">briefing.pdf</span>
<span class="ds-attachment__size">242 KB</span>
</span><span class="ds-attachment">
<span class="ds-attachment__icon" aria-hidden="true"><ds-icon name="image"></ds-icon></span>
<span class="ds-attachment__name">pantalla-inicial.png</span>
<span class="ds-attachment__size">1,3 MB</span>
</span></div><div class="ds-message__body"><p>Resume estos dos archivos</p></div></article></div>

<div class="ds-thread "><article class="ds-message" aria-label="Lume respondió">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span></header>
<div class="ds-message__body" data-body=""><p>Para cambiar la marca:</p><ol><li>Abre <code>tokens/palettes.json</code>.</li><li>Cambia el <code>hue</code> de <code>brand</code>.</li><li>Ejecuta <code>npm run tokens</code>.</li></ol></div>
</article></div>

<div class="ds-thread "><p class="ds-thread__divider">Hoy</p><p class="ds-thread__notice">Ana Souza se unió a la conversación.</p></div>

<div class="ds-thread "><article class="ds-message" aria-label="Lume respondió">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span></header>
<div class="ds-message__body" data-body=""><div class="ds-typing"><span class="ds-typing__dots" aria-hidden="true"><i></i><i></i><i></i></span><span>Lume está escribiendo</span></div></div>
</article></div>
```

## Tarjeta de resultado

Cuando la respuesta es algo para usar — un guion, un resumen, un archivo —, se vuelve tarjeta: sello y tipo, título, contenido corto y como máximo dos acciones. La conversación común sigue en texto.

Guion `ds-result-card` — Secciones con sello, como en el panel. Acción principal con flecha.

Resumen `ds-result-card__text` — Texto corto en muted. Una acción, para llevar el resultado adelante.

Archivo generado `ds-attachment` — El archivo es una píldora de adjunto; descargar y ver vista previa son acciones en línea.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-thread "><article class="ds-message" aria-label="Lume respondió">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span></header>
<div class="ds-message__body" data-body=""><p>En tres frases:</p></div>
<section class="ds-result-card" aria-label="Resumen en tres frases">
<header class="ds-result-card__head">
<div><p class="ds-result-card__eyebrow">Resumen · 3 frases</p><p class="ds-result-card__title">Lume en pocas palabras</p></div>
<div class="ds-result-card__tools">
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="copy-card" aria-label="Copiar resumen" data-ds-tooltip="Copiar"><ds-icon name="copy"></ds-icon></button>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" aria-label="Más opciones" data-ds-tooltip="Más opciones"><ds-icon name="more-horizontal"></ds-icon></button>
</div>
</header>
<p class="ds-result-card__text">Design system oscuro y cálido, con tokens en OKLCH. Los componentes solo consumen tokens semánticos. Tema claro y oscuro, contraste verificado y teclado en todo.</p>
<div class="ds-result-card__actions">
<button type="button" class="ds-inline-action" data-action="open">Usar como descripción<ds-icon name="arrow-right"></ds-icon></button>
</div>
</section>
</article></div>

<div class="ds-thread "><article class="ds-message" aria-label="Lume respondió">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span></header>
<div class="ds-message__body" data-body=""><p>Exporté los tokens del tema oscuro.</p></div>
<section class="ds-result-card" aria-label="Archivo generado">
<header class="ds-result-card__head">
<div><p class="ds-result-card__eyebrow">Archivo · CSV</p><p class="ds-result-card__title">Tokens de color, tema oscuro</p></div>
<div class="ds-result-card__tools">
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="copy-card" aria-label="Copiar archivo" data-ds-tooltip="Copiar"><ds-icon name="copy"></ds-icon></button>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" aria-label="Más opciones" data-ds-tooltip="Más opciones"><ds-icon name="more-horizontal"></ds-icon></button>
</div>
</header>
<div><span class="ds-attachment">
<span class="ds-attachment__icon" aria-hidden="true"><ds-icon name="file-text"></ds-icon></span>
<span class="ds-attachment__name">tokens-oscuro.csv</span>
<span class="ds-attachment__size">18 KB</span>
</span></div>
<div class="ds-result-card__actions">
<button type="button" class="ds-inline-action"><ds-icon name="download"></ds-icon>Descargar</button>
<button type="button" class="ds-inline-action">Ver vista previa<ds-icon name="arrow-right"></ds-icon></button>
</div>
</section>
</article></div>
```

## Composer

La caja de mensaje: comando y adjuntos arriba, el campo en el medio, herramientas y enviar abajo. Crece con el texto hasta 216 px y después se desplaza.

Vacío

El placeholder dice qué se puede hacer. Enviar queda desactivado.

Con foco

Borde y anillo de la marca. Crece con el texto hasta 216 px, después se desplaza.

Con comando y adjunto

El comando se vuelve una píldora de la marca; los adjuntos, píldoras con contorno.

Respondiendo

Enviar se vuelve detener (Esc). Se puede ir escribiendo la siguiente.

Desactivado

Solo cuando de verdad no se puede enviar (sin conexión, sin permiso) — y di por qué.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-composer">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-3-input">Mensaje</label>
<textarea class="ds-composer__input" id="ds-composer-3-input" rows="1" placeholder="Pregunta o escribe /" aria-autocomplete="list" aria-controls="ds-composer-3-menu"></textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Adjuntar archivo" data-ds-tooltip="Adjuntar archivo"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Comandos" data-ds-tooltip="Comandos" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden=""></span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Enviar mensaje" data-ds-tooltip="Enviar" data-ds-tooltip-kbd="↵" aria-disabled="true"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-3-menu" role="listbox" aria-label="Comandos" hidden=""></div>
</div>

<div class="ds-composer">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-4-input">Mensaje</label>
<textarea class="ds-composer__input" id="ds-composer-4-input" rows="1" placeholder="Escribe un mensaje o / para comandos" aria-autocomplete="list" aria-controls="ds-composer-4-menu">Arma un guion</textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Adjuntar archivo" data-ds-tooltip="Adjuntar archivo"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Comandos" data-ds-tooltip="Comandos" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden=""></span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Enviar mensaje" data-ds-tooltip="Enviar" data-ds-tooltip-kbd="↵"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-4-menu" role="listbox" aria-label="Comandos" hidden=""></div>
</div>

<div class="ds-composer" data-busy="">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-6-input">Mensaje</label>
<textarea class="ds-composer__input" id="ds-composer-6-input" rows="1" placeholder="Pregunta o escribe /" aria-autocomplete="list" aria-controls="ds-composer-6-menu"></textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Adjuntar archivo" data-ds-tooltip="Adjuntar archivo"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Comandos" data-ds-tooltip="Comandos" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden=""></span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Detener respuesta" data-ds-tooltip="Detener respuesta" data-ds-tooltip-kbd="Esc"><span class="ds-composer__stop" aria-hidden="true"></span></button>
</div>
<div class="ds-composer__menu" id="ds-composer-6-menu" role="listbox" aria-label="Comandos" hidden=""></div>
</div>

<div class="ds-composer" data-disabled="">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-7-input">Mensaje</label>
<textarea class="ds-composer__input" id="ds-composer-7-input" rows="1" placeholder="Sin conexión" aria-autocomplete="list" aria-controls="ds-composer-7-menu" disabled=""></textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Adjuntar archivo" data-ds-tooltip="Adjuntar archivo"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Comandos" data-ds-tooltip="Comandos" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden=""></span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Enviar mensaje" data-ds-tooltip="Enviar" data-ds-tooltip-kbd="↵" aria-disabled="true"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-7-menu" role="listbox" aria-label="Comandos" hidden=""></div>
</div>
```

## Atajos con /

Una barra al principio del campo abre los comandos. El foco no sale del campo: las flechas eligen, Enter confirma y el comando se vuelve una píldora antes del texto.

| Comando | Qué hace |
| --- | --- |
| `/guion` | Arma un guion en escenas |
| `/resumir` | Resume un texto en tres frases |
| `/traducir` | Traduce al inglés |
| `/tono` | Lo reescribe más directo |

| Tecla | En el composer |
| --- | --- |
| Enter | Envía el mensaje |
| Shift — + — Enter | Salto de línea |
| / | Al principio del campo, abre los comandos |
| ↑ — + — ↓ | Recorren los comandos |
| Enter — o — Tab | Eligen el comando |
| Esc | Cierra los comandos; con la respuesta llegando, detiene la respuesta |
| Backspace | Al principio del campo, quita el comando elegido |

## Estados

Cada estado dice qué está pasando y cuál es el siguiente paso. Nada desaparece sin aviso.

¿Cómo puedo ayudar?

Primer mensaje — Conversación vacía: una invitación corta y tres sugerencias concretas, que enseñan qué se puede pedir.

Respondiendo — La respuesta llega con los puntos de “escribiendo”. Enviar se vuelve detener.

Error al enviar — El texto queda en pantalla, con el motivo y una forma de seguir. Nada desaparece.

Respuesta interrumpida — Lo que ya llegó queda. Una línea dice que se detuvo; las acciones siguen valiendo.

Límite de caracteres — El conteo aparece cerca del límite. Si pasa: borde y número en peligro, y enviar se desactiva.

Marcado de los ejemplos de esta sección:

```html
<span class="ds-message__mark" aria-hidden="true">L</span>

<div class="ds-suggestions"><span class="ds-chip ds-chip--sm"><span class="ds-chip__icon"><ds-icon name="list"></ds-icon></span>Crea un guion de 3 escenas</span><span class="ds-chip ds-chip--sm"><span class="ds-chip__icon"><ds-icon name="file-text"></ds-icon></span>Resume qué es Lume</span><span class="ds-chip ds-chip--sm"><span class="ds-chip__icon"><ds-icon name="palette"></ds-icon></span>¿Por dónde empiezo los tokens?</span></div>

<div class="ds-thread "><article class="ds-message ds-message--user" aria-label="Dijiste"><div class="ds-message__body"><p>Resume qué es Lume</p></div><p class="ds-message__meta">Enviado · <time>14:32</time></p></article><article class="ds-message" aria-label="Lume respondió">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span></header>
<div class="ds-message__body" data-body=""><div class="ds-typing"><span class="ds-typing__dots" aria-hidden="true"><i></i><i></i><i></i></span><span>Lume está escribiendo</span></div></div>
</article></div>

<div class="ds-thread "><article class="ds-message ds-message--user" data-status="error" aria-label="Dijiste"><div class="ds-message__body"><p>Resume qué es Lume</p></div><p class="ds-message__error"><span><ds-icon name="alert-circle"></ds-icon>No se envió.</span><button type="button" class="ds-inline-action" data-action="resend"><ds-icon name="refresh"></ds-icon>Intentar de nuevo</button></p></article></div>

<div class="ds-thread "><article class="ds-message" data-latest="" aria-label="Lume respondió">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span><time>14:33</time></header>
<div class="ds-message__body" data-body=""><p>Empezaría por tres cosas: los colores de la marca, la tipografía y</p></div>
<p class="ds-message__meta">Respuesta interrumpida.</p>
<div class="ds-message__actions" role="group" aria-label="Acciones de la respuesta"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="copy" aria-label="Copiar respuesta" data-ds-tooltip="Copiar respuesta"><ds-icon name="copy"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="retry" aria-label="Generar de nuevo" data-ds-tooltip="Generar de nuevo"><ds-icon name="refresh"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="like" aria-label="Me gusta" data-ds-tooltip="Me gusta" aria-pressed="false"><ds-icon name="thumbs-up"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="dislike" aria-label="No me gusta" data-ds-tooltip="No me gusta" aria-pressed="false"><ds-icon name="thumbs-down"></ds-icon></button></div>
</article></div>

<div class="ds-composer" data-over="">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-1-input">Mensaje</label>
<textarea class="ds-composer__input" id="ds-composer-1-input" rows="2" placeholder="Escribe un mensaje o / para comandos" aria-autocomplete="list" aria-controls="ds-composer-1-menu">Texto largo pegado de un documento, pasando el límite de caracteres del mensaje…</textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Adjuntar archivo" data-ds-tooltip="Adjuntar archivo"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Comandos" data-ds-tooltip="Comandos" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true">80 / 72</span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Enviar mensaje" data-ds-tooltip="Enviar" data-ds-tooltip-kbd="↵" aria-disabled="true"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-1-menu" role="listbox" aria-label="Comandos" hidden=""></div>
</div>
```

## Escritura

La respuesta es interfaz. Escribe como el resto del producto: corto, directo, en lenguaje claro.

Responde primero

Son tres pasos: colores, tipografía y componentes.

¡Excelente pregunta! Exploremos juntos este tema tan interesante…

Frases cortas, voz activa

Cambia el hue de la marca y ejecuta el build.

El hue de la marca puede ser cambiado, y a continuación el build deberá ser ejecutado.

Di cuando no sabes

No encontré ese dato en el archivo. ¿Quieres que busque en otro?

La facturación fue de 1,2 M R$. (sin fuente)

Lista solo con tres o más

Abre el archivo y cambia el hue.

• Abre el archivo• Cambia el hue

Términos de la pantalla

Haz clic en Exportar tokens.

Accione la funcionalidad de exportación de design tokens.

Un siguiente paso, al final

¿Quieres que arme el guion?

¿Puedo ayudar con algo más? ¡Estoy aquí para lo que necesites!

## Accesibilidad

La conversación se lee y se usa entera con el teclado y el lector de pantalla.

- Conversación como log — La lista de mensajes tiene `role="log"` y `aria-live="polite"`: las respuestas nuevas se leen sin robar el foco.
- Respuesta leída entera — Mientras llega, la respuesta queda con `aria-busy="true"`, y el lector espera a que termine en vez de leer palabra por palabra.
- El foco queda en el composer — Después de enviar, el foco sigue en el campo, listo para la siguiente pregunta.
- Campo con etiqueta — El campo tiene etiqueta (puede estar visualmente oculta) y `aria-describedby` apunta a los atajos.
- Comandos con el teclado — / ↑ ↓ Enter — La lista de comandos usa `aria-activedescendant`: el foco no sale del campo y las flechas eligen.
- Detener sin mouse — Esc — Esc detiene la respuesta, y enviar pasa a llamarse “Detener respuesta”.
- Acciones siempre alcanzables — Las acciones de cada respuesta aparecen con hover y foco, y quedan siempre visibles en pantallas táctiles y en la última respuesta.
- Movimiento reducido — Con `prefers-reduced-motion`, la respuesta aparece de una vez y los puntos de “escribiendo” se detienen.

## Tokens

Haz clic en el nombre para copiar la variable.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Burbuja de la pregunta y composer | #FFFFFF | #2C2A27 |
| color.bg.surface (`--ds-color-bg-surface`) | Tarjeta de resultado | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno de la burbuja y de la tarjeta | #3E516624 | #FFFFFF0F |
| color.border.control (`--ds-color-border-control`) | Composer y adjuntos | #3E516633 | #FFFFFF21 |
| color.border.focus (`--ds-color-border-focus`) | Composer con foco | #53657A | #C0CAD6 |
| color.fg.default (`--ds-color-fg-default`) | Texto de la conversación | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | Texto de la tarjeta | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Autor, hora, placeholder y atajos | #5C6C7F | #9C9792 |
| color.brand.solid (`--ds-color-brand-solid`) | Enviar | #3E5166 | #C0CAD6 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Ícono de enviar | #F8FAFD | #1D2734 |
| color.brand.subtle (`--ds-color-brand-subtle`) | Marca del autor y comando elegido | #EEF2F6 | #C0CAD624 |
| color.brand.fg (`--ds-color-brand-fg`) | Letra de la marca y del comando | #3E5166 | #DAE0E8 |
| color.danger.fg (`--ds-color-danger-fg`) | Fallo al enviar y límite superado | #C13834 | #FFB2AA |
| radius.xl (`--ds-radius-xl`) | Burbuja y tarjeta | 20 px | 20 px |
| radius.2xl (`--ds-radius-2xl`) | Composer | 28 px | 28 px |
| space.400 (`--ds-space-400`) | Entre mensajes | 32 px | 32 px |

## Código

El CSS viene en `ds/ds.css`; el comportamiento, en `ds/js/composer.js`.

```html
<div class="ds-thread" role="log" aria-live="polite" aria-label="Conversación">
  <article class="ds-message ds-message--user">
    <div class="ds-message__body"><p>Arma un guion</p></div>
    <p class="ds-message__meta">Enviado · <time>14:32</time></p>
  </article>
  <article class="ds-message">
    <header class="ds-message__head">
      <span class="ds-message__mark" aria-hidden="true">L</span>
      <span class="ds-message__author">Lume</span><time>14:32</time>
    </header>
    <div class="ds-message__body"><p>Armé un guion en tres escenas.</p></div>
    <section class="ds-result-card">…</section>
    <div class="ds-message__actions">…ds-icon-btn ds-icon-btn--sm…</div>
  </article>
</div>

<div id="composer"></div>
```

```html
import { createComposer } from 'https://lumeui.dev/v/0.29/lume.js';

const composer = createComposer(document.querySelector('#composer'), {
  label: 'Mensaje para Lume',
  commands: [{ id: 'resumir', label: 'Resumir', description: 'Resume en tres frases', icon: 'file-text' }],
  maxLength: 2000,
  onSend({ text, attachments, command }) {
    // envía; devuelve false para mantener el texto en el campo
  },
  onStop() {
    // cancela la respuesta en curso
  },
});

composer.setBusy(true);   // enviar se vuelve "detener"
composer.focus();
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

- **Haz:** Burbuja solo en la pregunta. La burbuja marca quién pregunta; la respuesta es texto de lectura, con espacio para respirar.
- **Evita:** Color en cada burbuja. Nada de burbujas de colores ni degradados. El único color de la conversación es enviar.
- **Haz:** Tarjeta para lo que se puede usar. Guiones, resúmenes y archivos se vuelven tarjeta con acciones. La conversación común queda en texto.
- **Evita:** Acciones gritando en cada mensaje. Copiar y valorar aparecen con hover y foco; quedan fijas solo en la última respuesta y en pantallas táctiles.
- **Consejo:** Empieza con sugerencias. En la conversación vacía, tres sugerencias concretas enseñan qué se puede pedir.
- **Evita:** Enter que no envía. Enter envía, Shift + Enter hace salto de línea. No los inviertas, y no envíes en medio de un acento (IME).
