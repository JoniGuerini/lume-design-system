# Voz y tono

Sección de Lume: Fundamentos. Página: https://lumeui.dev/#/fundamentos/tom-de-voz

La voz es quién es el producto, y no cambia. El tono es cómo suena esa voz en cada momento: un error no habla como una celebración, y una app de finanzas no habla como un juego.

En números: tonos: 4 · situaciones: 5 · reglas: 6.

## Voz y tono

La voz de Lume tiene tres rasgos. Valen en todos los tonos; el tono solo decide cuánto se nota cada uno.

Clara

Palabras del día a día, una idea por frase.

No es: jerga técnica ni códigos de error.

Directa

Dice qué pasó y qué hacer después.

No es: seca ni brusca.

Amable

Cuida de quien se equivocó y nunca le echa la culpa.

No es: empalagosa ni llena de disculpas.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 19.5C6 15.6 3.5 12.6 3.5 9.3A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8.5 2.3c0 3.3-2.5 6.3-8.5 10.2z"></path></svg>
```

## Tonos

Cuatro tonos listos, con las mismas cinco situaciones escritas a la manera de cada uno. Cambia el tono y compara: los botones casi no cambian, porque un verbo es un verbo en cualquier tono.

Neutro

Claro y directo. Es el tono de Lume y la opción segura cuando no hay motivo para otro.

Combina con — Herramientas, paneles, design systems

- Le habla a la persona de “tú”, sin rodeos
- Frases cortas, con el verbo al principio
- Sin exclamaciones y sin bromas

Éxito

Espera

Error

Eliminación

Vacío

Marcado de los ejemplos de esta sección:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Tono">
<button type="button" class="ds-segmented__item" role="radio" data-value="neutro" aria-checked="true">Neutro</button><button type="button" class="ds-segmented__item" role="radio" data-value="acolhedor" aria-checked="false">Cercano</button><button type="button" class="ds-segmented__item" role="radio" data-value="profissional" aria-checked="false">Profesional</button><button type="button" class="ds-segmented__item" role="radio" data-value="leve" aria-checked="false">Desenfadado</button>
</div>

<div class="ds-toast ds-toast--success" data-open=""><span class="ds-toast__icon"><ds-icon name="check-circle"></ds-icon></span>
<span class="ds-toast__message">Cambios guardados.</span>
</div>

<span class="ds-spinner ds-spinner--sm" aria-hidden="true"></span>

<div class="ds-alert ds-alert--danger">
<span class="ds-alert__icon"><ds-icon name="alert-circle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">No se pudo guardar</p>
<p class="ds-alert__text">Revisa la conexión e inténtalo de nuevo. Lo que escribiste sigue aquí.</p>
<div class="ds-alert__actions"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm"><ds-icon name="refresh"></ds-icon>Reintentar</button></div>
</div>
</div>

<div class="ds-modal ds-modal--inline ds-modal--danger">
<div class="ds-modal__header">
<span class="ds-modal__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<div class="ds-modal__heading"><p class="ds-modal__title">¿Eliminar “Sitio nuevo”?</p></div>
</div>
<div class="ds-modal__body">El proyecto y sus 12 archivos se eliminan para siempre.</div>
<div class="ds-modal__footer">
<button type="button" class="ds-btn ds-btn--secondary">Cancelar</button>
<button type="button" class="ds-btn ds-btn--danger">Eliminar proyecto</button>
</div>
</div>

<div class="ds-empty ds-empty--compact">
<span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
<p class="ds-empty__title">Aún no hay proyectos</p>
<p class="ds-empty__description">Crea el primero para empezar a organizar el trabajo.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary ds-btn--sm"><ds-icon name="plus"></ds-icon>Crear proyecto</button></div>
</div>
```

## Tono por situación

La app tiene un solo tono, pero se ajusta al momento. Lo que puede cambiar y lo que queda igual en cualquier tono:

| Situación | El tono puede | Ningún tono puede |
| --- | --- | --- |
| Éxito | Celebrar poco, o nada cuando la pantalla ya muestra el resultado. | Interrumpir con un modal para decir que salió bien. |
| Error | Cambiar la forma de decirlo: más corta, más tranquila, más formal. | Culpar a la persona, bromear u ocultar qué hacer. |
| Eliminación | Ofrecer una salida más ligera, como archivar. | Suavizar la consecuencia: lo que se va, se va para siempre. |
| Espera | Dar contexto y, si se sabe, cuánto falta. | Prometer un plazo que no se puede cumplir. |
| Vacío | Invitar y mostrar el primer paso. | Dejar la pantalla sin ninguna acción. |

## Reglas de escritura

Seis reglas que valen para cualquier tono y cualquier idioma.

Verbo en el botón

“Guardar”, “Eliminar proyecto”. Nunca “OK” ni “Sí”: el botón dice lo que va a hacer.

Qué pasó y qué hacer

Todo mensaje de problema responde a las dos preguntas, en ese orden.

Sin culpa

“No se pudo guardar”, y no “Escribiste mal”. El sistema asume el problema.

Lo corto primero

La frase principal se basta sola; el detalle viene después, para quien lo necesite.

Misma palabra, misma cosa

Eliminar es siempre eliminar. Cambiar a borrar o quitar en la pantalla siguiente confunde.

Números y fechas por idioma

Formatea con `Intl`, nunca a mano. El mismo valor cambia de forma en cada idioma.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="7" width="18" height="10" rx="3.5"></rect><path d="M8.5 12h7"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V13"></path><path d="M12 16.5h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5l7.5 2.8v5.4c0 4.4-3.1 7.9-7.5 8.8-4.4-.9-7.5-4.4-7.5-8.8V6.3z"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 7V5h14v2M12 5v14M9 19h6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3.5 5v6.2a1.5 1.5 0 0 0 .44 1.06l8 8a1.5 1.5 0 0 0 2.12 0l6.2-6.2a1.5 1.5 0 0 0 0-2.12l-8-8A1.5 1.5 0 0 0 11.2 3.5H5A1.5 1.5 0 0 0 3.5 5z"></path><path d="M8 8h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M3.5 12h17M12 3.5c2.3 2.3 3.5 5.2 3.5 8.5s-1.2 6.2-3.5 8.5c-2.3-2.3-3.5-5.2-3.5-8.5s1.2-6.2 3.5-8.5z"></path></svg>
```

## Mensajes

Los textos más comunes, antes y después. El “después” está en el tono Neutro.

| Situación | Evita | Prefiere |
| --- | --- | --- |
| Confirmación | OK | Eliminar proyecto |
| Falla de red | Erro 503: Service Unavailable | No se pudo conectar. Inténtalo de nuevo en unos segundos. |
| Campo inválido | Entrada inválida. | Escribe un correo con el formato nombre@ejemplo.com. |
| Lista vacía | Sin datos. | Aún no hay pedidos. Los pedidos aparecen aquí en cuanto llegan. |
| Éxito | ¡Operación realizada con éxito! | Pedido enviado. |

## En los tres idiomas

Traducir no basta: cada idioma tiene sus costumbres. El tono sigue igual, pero la forma cambia.

|  | Português | English | Español |
| --- | --- | --- | --- |
| Tratamiento | “você” en todos los tonos | “you” en todos los tonos | “tú”; “usted” en el Profesional |
| Mayúsculas | Solo la primera palabra: “Criar projeto” | También solo la primera: “Create project” | Solo la primera: “Crear proyecto” |
| Puntuación | Comillas curvas “ ” | Comillas curvas “ ” y apóstrofo ’ | ¿ y ¡ abren la pregunta y la exclamación |
| Números y fechas | 12.345,5 · 15/11/2026 · R$ 49,90 | 12,345.5 · 11/15/26 · R$49.90 | 12.345,5 · 15/11/26 · 49,90 R$ |
| Longitud | Hasta un 30% más largo que el inglés | Suele ser el más corto | Hasta un 30% más largo que el inglés |

## Cómo estandarizarlo en tu app

Elige un tono, saca los textos del medio del código y dale la misma guía a quien escribe, personas o IA. Es lo que Lume hace con `messages.js`.

- 1 — Elige la voz y un tono — Tres rasgos de voz y uno de los cuatro tonos, o uno propio. Un tono por app: mezclar tonos de una pantalla a otra parece dos productos.
- 2 — Textos en un archivo, con claves — El código pide la clave, no escribe la frase. Revisar el tono es editar un archivo, y cambiar de tono es cambiar de archivo.
- 3 — La misma guía para la IA — Pega el fragmento de abajo antes de pedir textos. Sigue el tono elegido arriba.

```html
// mensajes/neutro.js
export default {
  'salvar.ok': 'Cambios guardados.',
  'salvar.erro': 'No se pudo guardar',
  'projetos.vazio': 'Aún no hay proyectos',
};

// mensajes/cercano.js
export default {
  'salvar.ok': 'Listo, todo está guardado.',
  'salvar.erro': 'No pudimos guardar ahora',
  'projetos.vazio': 'Tu espacio está listo',
};

// mensajes/index.js: el tono de la app es una sola elección
import neutro from './neutro.js';
import acolhedor from './acolhedor.js';

const TONS = { neutro, acolhedor };
const tom = 'acolhedor';

export const t = (chave) => TONS[tom][chave] ?? TONS.neutro[chave] ?? chave;

// en pantalla
toast(t('salvar.ok'));
```

```html
Escribe los textos de la interfaz en el tono Neutro.
El tono: Claro y directo. Es el tono de Lume y la opción segura cuando no hay motivo para otro.
- Le habla a la persona de “tú”, sin rodeos.
- Frases cortas, con el verbo al principio.
- Sin exclamaciones y sin bromas.
- Los botones empiezan con un verbo y dicen lo que hacen; nunca “OK”.
- Los errores dicen qué pasó y qué hacer, sin culpar a la persona y sin bromas.
- Eliminar deja clara la consecuencia; la espera dice cuánto falta, si se sabe.
- La misma palabra para la misma cosa en todas las pantallas.

Devuelve cada texto con su clave en el archivo de mensajes.
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

El buen tono no llama la atención: la persona solo nota que entendió.

- **Haz:** escribe el tono antes de los textos. Tres rasgos y cinco ejemplos, como en esta página, resuelven más discusiones que cualquier revisión al final.
- **Evita:** un tono por pantalla. Formal en el registro, lleno de bromas en el panel y seco en el error: la persona no sabe con quién habla.
- **Consejo:** Léelo en voz alta. Si la frase sonaría rara dicha por una persona al otro lado del mostrador, reescríbela.
