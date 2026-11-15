# Primer uso

Sección de Lume: Patrones. Página: https://lumeui.dev/#/padroes/primeiro-uso

La primera sesión de alguien: bienvenida corta, pocos pasos que ya son el trabajo de verdad, un vacío que enseña y datos de ejemplo para quien quiere ver antes de hacer.

En números: pasos: 3–5 · paso ya hecho: 1 · globos de tour: 0.

## Ejemplo en vivo

La primera vez en un espacio de trabajo nuevo. El vacío de la lista sigue el patrón Estados vacíos.

### Proyectos

### Primeros pasos

- Crear la cuenta — (hecho) — Hecho. Ya estás aquí.
- Crear el primer proyecto — Es donde viven las pantallas, las notas y las personas de un trabajo. — Crear proyecto
- Invitar a alguien — Los proyectos avanzan mejor de a dos. — Invitar
- Elegir el tema — Claro u oscuro. Se puede cambiar después en Configuración. — Claro — Oscuro

Todo listo

Estos pasos quedan en Ayuda, si los necesitas.

- Crea un proyecto desde el paso o desde el vacío: los dos marcan el mismo ✓.
- “Ver con ejemplos” llena la lista con proyectos marcados, que se van con un clic.
- Elige el tema en el último paso: el escenario cambia al instante.
- La X oculta los pasos, con Deshacer en el aviso.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-pu-clear-samples="" hidden=""><ds-icon name="trash"></ds-icon>Borrar ejemplos</button>

<div class="ds-empty ds-empty--compact" data-pu-empty="">
<span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
<p class="ds-empty__title">Tus proyectos aparecen aquí</p>
<p class="ds-empty__description">Crea el primero o mira cómo queda con proyectos de ejemplo.</p>
<div class="ds-empty__actions">
<button type="button" class="ds-btn ds-btn--primary ds-btn--sm" data-pu-do="projeto"><ds-icon name="plus"></ds-icon>Crear proyecto</button>
<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-pu-samples="">Ver con ejemplos</button>
</div>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-pu-dismiss="" aria-label="Ocultar primeros pasos" data-ds-tooltip="Ocultar"><ds-icon name="x"></ds-icon></button>

<div class="ds-progress-field">
<div class="ds-progress-field__head"><span id="pu-progress-label">Progreso</span><span data-pu-count="">1 / 4</span></div>
<progress class="ds-progress ds-progress--success" aria-labelledby="pu-progress-label" aria-valuetext="1 de 4" value="1" max="4" data-pu-progress=""></progress>
</div>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-pu-dismiss="">Cerrar</button>

<p class="ds-visually-hidden" role="status" data-pu-live=""></p>
```

## Anatomía

Cinco partes, todas junto al trabajo, ninguna delante de él.

- 1 — Bienvenida — Una frase, con el nombre de la persona, diciendo cuánto falta. Nada de video o carrusel antes de dejar entrar.
- 2 — Primeros pasos — Una lista corta junto al trabajo, con el progreso y una X para ocultarla. No bloquea nada.
- 3 — Paso — Qué hacer, por qué vale la pena y el botón que lo hace de verdad. Un paso hecho recibe su ✓ al instante.
- 4 — Vacío que enseña — Dice qué va a aparecer ahí y da el mismo botón del paso. Mira Estados vacíos.
- 5 — Datos de ejemplo — Para ver la pantalla llena antes de tener contenido. Marcados como ejemplo y borrados de una vez.

## Reglas

Seis decisiones que valen para cualquier primera vez.

Aprender haciendo

Cada paso es la acción de verdad, no una explicación de ella. Quien crea el proyecto desde el paso ya tiene un proyecto.

Pocos pasos, ya empezados

De tres a cinco. El primero (crear la cuenta) ya viene hecho: la barra empieza avanzando y terminar parece cerca.

Se puede descartar

La X oculta la lista, con Deshacer, y vuelve por la Ayuda. Nadie está obligado a terminar para trabajar.

El vacío enseña

En lugar de la lista, lo que va a aparecer ahí y el botón para empezar. Nada de pantalla en blanco esperando adivinanzas.

El ejemplo queda marcado

Los proyectos de ejemplo llevan la etiqueta “Ejemplo” y se van con un clic. Nunca se mezclan con lo que la persona creó.

Sin tour de globos

Cinco globos señalando la interfaz antes de cualquier acción los salta casi todo el mundo. Explica en el lugar, cuando la persona llegue ahí.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4"></rect><path d="m8 12 3 3 5-6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10 6h10M10 12h10M10 18h10M4 4.5l1.5-1V9M3.5 14c.2-.6.8-1 1.5-1 .8 0 1.5.6 1.5 1.4 0 1.4-3 2.1-3 3.6h3"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3.5 13h5l1.5 2.5h4l1.5-2.5h5"></path><path d="M6 4.5h12l2.5 8.5v5.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V13z"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M20.5 15a2 2 0 0 1-2 2H8l-4.5 3.5V5.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z"></path></svg>
```

## Mensajes

Cálidas sin fiesta. Cada paso dice por qué vale la pena, en una frase.

| Situación | Evita | Prefiere |
| --- | --- | --- |
| Bienvenida | ¡¡¡Bienvenido a Lume!!! 🎉 | Te damos la bienvenida, Ana. Tres pasos y tu espacio queda listo. |
| Paso | Configura tu workspace | Invita a alguien: los proyectos avanzan mejor de a dos. |
| Fin | ¡Felicidades! ¡Completaste el onboarding! | Todo listo. Estos pasos quedan en Ayuda, si los necesitas. |
| Vacío | Ningún proyecto. | Tus proyectos aparecen aquí. Crea el primero o mira con ejemplos. |

## Accesibilidad

El progreso necesita decirse, no solo dibujarse.

- Paso hecho, por escrito — El ✓ es decoración; el estado va en un texto oculto (“hecho”) dentro del título del paso.
- Progreso con texto — El `<progress>` tiene etiqueta y `aria-valuetext` (“2 de 4”), en lugar de un porcentaje suelto.
- El foco sigue adelante — Al completar un paso, el foco va al siguiente que falta. En el último, al “Todo listo”.
- Anuncios cortos — Una región `role="status"` dice “Proyecto creado. 2 de 4 pasos.”, sin mover el foco de donde está.
- Descartar con el teclado — La X tiene nombre (“Ocultar primeros pasos”); al ocultar, el foco va a la lista de proyectos, no se pierde.

## Código

La lista de pasos es marcado con `<progress>`; el comportamiento es tuyo: marcar, mover el foco y ocultar con `toast` y Deshacer.

```html
<aside aria-labelledby="pasos-titulo">
  <h2 id="pasos-titulo">Primeros pasos</h2>
  <button type="button" class="ds-icon-btn ds-icon-btn--sm" aria-label="Ocultar primeros pasos">…</button>

  <div class="ds-progress-field">
    <div class="ds-progress-field__head"><span id="progreso">Progreso</span><span>2 / 4</span></div>
    <progress class="ds-progress ds-progress--success" aria-labelledby="progreso" aria-valuetext="2 de 4" value="2" max="4"></progress>
  </div>

  <ol>
    <li data-done>Crear la cuenta <span class="ds-visually-hidden">(hecho)</span></li>
    <li>
      Invitar a alguien
      <p>Los proyectos avanzan mejor de a dos.</p>
      <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm">Invitar</button>
    </li>
  </ol>
</aside>
```

```html
import { toast } from 'https://lumeui.dev/v/1.6/lume.js';

function completar(paso) {
  paso.toggleAttribute('data-done', true);
  paso.querySelector('.ds-visually-hidden').textContent = ' (hecho)';
  barra.value = hechos();
  barra.setAttribute('aria-valuetext', `${hechos()} de 4`);
  siguiente(paso)?.querySelector('button').focus();   // el foco sigue al siguiente paso
}

function ocultar() {
  pasos.hidden = true;
  toast('Primeros pasos ocultos', {
    action: { label: 'Deshacer', onClick: () => (pasos.hidden = false) },
  });
}
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

El primer uso termina cuando la persona hizo lo primero que importa, no cuando vio todas las pantallas.

- **Haz:** lleva al primer resultado. Elige el paso que hace sentir el valor del producto (aquí, tener un proyecto) y ponlo segundo, justo después del que ya vino hecho.
- **Evita:** un formulario largo antes de entrar. Cargo, tamaño de la empresa, cómo nos conoció: pregunta después, cuando la respuesta cambie algo para la persona.
- **Consejo:** Un paso hecho en otro lugar también cuenta. Quien creó el proyecto desde el menú, y no desde el paso, también recibe el ✓. La lista sigue lo que la persona hizo, no dónde hizo clic.
