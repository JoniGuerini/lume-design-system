# Toast

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/toast

Confirma que algo pasó, sin interrumpir. Aparece abajo, desaparece solo y puede traer una acción corta, como deshacer.

En números: tonos: 5 · duración predeterminada: 2,2 s · en pantalla a la vez: 3 · posiciones: 6.

## Ejemplo

```html
import { toast } from 'https://lumeui.dev/v/0.34/lume.js';

toast('Cambios guardados', {
  tone: 'success',
});
```

## Tonos

El fondo es siempre el invertido — el toast destaca en cualquier pantalla. El tono aparece solo en el ícono, para que el color no grite.

Neutro `—`

El predeterminado: confirmaciones simples de lo que la persona acaba de hacer.

Éxito `tone: 'success'`

Algo que tardó o importaba terminó bien.

Información `tone: 'info'`

Una novedad que no pide acción inmediata.

Aviso `tone: 'warning'`

Atención, sin bloquear. La app sigue funcionando.

Peligro `tone: 'danger'`

Falló, pero se puede intentar de nuevo. Los errores graves quedan en pantalla.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-toast" data-open=""><span class="ds-toast__icon"><ds-icon name="check"></ds-icon></span>
<span class="ds-toast__message">Enlace copiado</span>
</div>

<button type="button" class="ds-inline-action" data-show-tone="neutral"><ds-icon name="play"></ds-icon>Mostrar</button>

<div class="ds-toast ds-toast--success" data-open=""><span class="ds-toast__icon"><ds-icon name="check-circle"></ds-icon></span>
<span class="ds-toast__message">Cambios guardados</span>
</div>

<button type="button" class="ds-inline-action" data-show-tone="success"><ds-icon name="play"></ds-icon>Mostrar</button>

<div class="ds-toast ds-toast--info" data-open=""><span class="ds-toast__icon"><ds-icon name="info"></ds-icon></span>
<span class="ds-toast__message">Nueva versión disponible</span>
</div>

<button type="button" class="ds-inline-action" data-show-tone="info"><ds-icon name="play"></ds-icon>Mostrar</button>

<div class="ds-toast ds-toast--warning" data-open=""><span class="ds-toast__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<span class="ds-toast__message">Estás sin conexión</span>
</div>

<button type="button" class="ds-inline-action" data-show-tone="warning"><ds-icon name="play"></ds-icon>Mostrar</button>
```

## Con acción

Una sola acción, corta y reversible — “Deshacer”, “Ver”, “Intentar de nuevo”. Con acción, el toast queda 5 s.

- Guion de lanzamiento
- Paleta de la campaña
- Notas de la reunión

Todo archivado. Empezar de nuevo

Archiva un archivo y deshazlo desde el toast. — Deshacer en el toast es mejor que pedir confirmación antes: la persona actúa rápido y corrige si se equivoca.

## Comportamiento

Predecible: siempre en el mismo lugar, siempre saliendo solo.

Seis posiciones

Abajo al centro es el predeterminado. Arriba, queda debajo de la barra superior. El más nuevo entra junto al borde y el toast se desliza desde el lado de donde viene.

Como máximo 3 por posición

El cuarto empuja al más antiguo fuera. Cada posición tiene su propia región anunciada.

En el móvil

Por debajo de 768 px, las esquinas pasan al centro del mismo lado — arriba o abajo.

Pausa con el puntero

Si pasas el mouse o llegas con Tab, el tiempo se detiene. Si sales, sigue.

Hasta cerrar

Con `duration: Infinity` gana un ×. Ciérralo desde el código con `.close()`.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="9" rx="2"></rect><rect x="13.5" y="3.5" width="7" height="5" rx="2"></rect><rect x="13.5" y="11.5" width="7" height="9" rx="2"></rect><rect x="3.5" y="15.5" width="7" height="5" rx="2"></rect></svg>

<button type="button" class="ds-inline-action" data-demo="corners"><ds-icon name="play"></ds-icon>Probar los seis</button>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>

<button type="button" class="ds-inline-action" data-demo="burst"><ds-icon name="play"></ds-icon>Mostrar 4 seguidos</button>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="4" width="18" height="12.5" rx="2.5"></rect><path d="M8.5 20.5h7M12 16.5v4"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3 2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>

<button type="button" class="ds-inline-action" data-demo="sticky"><ds-icon name="play"></ds-icon>Mostrar hasta cerrar</button>
```

## Accesibilidad

Avisa sin robarle el foco a nadie.

- Anunciado con educación — La región es `role="status"` con `aria-live="polite"`: el lector de pantalla la lee cuando termina lo que está diciendo.
- No mueve el foco — Tab — La persona sigue donde estaba. La acción del toast se alcanza con Tab.
- Tiempo suficiente — Pausa con hover y foco. Con acción, 5 s; para algo importante, usa “hasta cerrar”.
- No depende del color — Cada tono tiene su propio ícono — éxito, aviso, peligro e información se distinguen sin color.
- Mensaje completo — Escribe lo que pasó, no solo “¡Listo!”. Quien solo oye el anuncio necesita entender.
- El error serio queda en pantalla — Si la persona necesita actuar para resolverlo, muestra el error cerca del problema — no en un aviso que desaparece.

## Tokens usados

Fondo invertido para destacar; tonos solo en el ícono.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.inverse (`--ds-color-bg-inverse`) | Fondo | #2B3847 | #F3EDE5 |
| color.fg.inverse (`--ds-color-fg-inverse`) | Texto y acción | #F8FAFD | #0F0E0C |
| radius.md (`--ds-radius-md`) | Radio | 12 px | 12 px |
| shadow.lg (`--ds-shadow-lg`) | Sombra | 0 4px 8px -2px rgb(45 58 74 / 0.07), 0 16px 36px -8px rgb(45 58 74 / 0.14) | 0 4px 8px -2px rgb(0 0 0 / 0.3), 0 16px 36px -8px rgb(0 0 0 / 0.5) |
| text.label-md (`--ds-text-label-md`) | Mensaje | 14/20 · medium | 14/20 · medium |
| color.success.solid (`--ds-color-success-solid`) | Ícono de éxito | #1E854A | #72CB8B |
| color.warning.solid (`--ds-color-warning-solid`) | Ícono de aviso | #FFB851 | #FFB851 |
| color.danger.solid (`--ds-color-danger-solid`) | Ícono de peligro | #C13834 | #FF9087 |
| color.info.solid (`--ds-color-info-solid`) | Ícono de información | #1776B5 | #6ABCFF |
| duration.base (`--ds-duration-base`) | Entrada y salida | 200ms | 200ms |
| easing.emphasized (`--ds-easing-emphasized`) | Curva de entrada | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| z.toast (`--ds-z-toast`) | Capa | 1500 | 1500 |

## Uso

Para confirmar, no para conversar.

- **Haz:** confirma lo que pasó. Corto, en pasado, diciendo el resultado — abajo, donde no tapa la navegación.
- **Evita:** error importante que desaparece. Si la persona necesita resolverlo, el error queda en pantalla, cerca del campo.
- **Consejo:** Deshacer en vez de confirmar. Para acciones reversibles, actuar directo y ofrecer deshacer es más rápido que un modal.
### Dónde ubicarlo una sola posición para toda la app

| Posición | Cuándo usar |  |
| --- | --- | --- |
| Abajo, al centro — `bottom-center` | Confirmaciones en general. Lejos de la navegación y de las acciones de arriba. Es el predeterminado. | Mostrar |
| Abajo, a la derecha — `bottom-end` | Pantallas con trabajo en el centro — editores, tablas anchas: la esquina no tapa el contenido. | Mostrar |
| Arriba, al centro — `top-center` | Avisos del sistema que valen para toda la pantalla, como conexión o sesión. | Mostrar |
| Arriba, a la derecha — `top-end` | Notificaciones que llegan de fuera (mensajes, invitaciones). Queda debajo de la barra superior, sin tapar sus acciones. | Mostrar |
| Abajo, a la izquierda — `bottom-start` | Evítalo en el app shell: en escritorio tapa el pie de la barra lateral. | Mostrar |
| Arriba, a la izquierda — `top-start` | Raramente: queda sobre la navegación de la barra lateral. | Mostrar |
