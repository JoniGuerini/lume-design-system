# Movimiento

Sección de Lume: Fundamentos. Página: https://lumeui.dev/#/fundamentos/movimento

El movimiento explica qué cambió y de dónde vino. Pocas duraciones, pocas curvas y siempre el mismo par para el mismo tipo de cambio.

En números: duraciones: 5 · curvas: 5 · recetas: 4 · movimiento reducido: .

## Duraciones

Cuanto mayor la superficie y la distancia recorrida, mayor la duración. Reproduce una por vez o todas juntas para comparar — todas con la curva standard.

| Token | Valor | Demostración |  |
| --- | --- | --- | --- |
| instant — --ds-duration-instant — Cambio sin transición — cambio de estado inmediato. | 0 ms |  |  |
| fast — --ds-duration-fast — Hover, foco y color. La mayoría de las interacciones. | 120 ms |  |  |
| base — --ds-duration-base — Menús, tooltips, chevrons y popovers. | 200 ms |  |  |
| slow — --ds-duration-slow — Sidebar, cajón, grupos del menú y entrada de página. | 320 ms |  |  |
| slower — --ds-duration-slower — Reservada para transiciones grandes y poco frecuentes. | 480 ms |  |  |

## Curvas

La curva define el ritmo. Los gráficos usan los cuatro números reales de cada token; las demostraciones corren a 480 ms (duration.slower) para dar tiempo a notar la diferencia.

La predeterminada para casi todo: sale rápido y se asienta suave.

Superficies que se desplazan: menús, sidebar, cajón.

Entradas: el elemento llega y desacelera.

Salidas: el elemento gana velocidad al salir.

Progreso y bucles continuos, sin aceleración.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-play-row="" aria-label="Reproducir standard"><ds-icon name="play"></ds-icon></button>

<button type="button" class="ds-inline-action" data-copy="cubic-bezier(0.2, 0, 0, 1)"><ds-icon name="code"></ds-icon>cubic-bezier(0.2, 0, 0, 1)</button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-play-row="" aria-label="Reproducir emphasized"><ds-icon name="play"></ds-icon></button>

<button type="button" class="ds-inline-action" data-copy="cubic-bezier(0.32, 0.72, 0, 1)"><ds-icon name="code"></ds-icon>cubic-bezier(0.32, 0.72, 0, 1)</button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-play-row="" aria-label="Reproducir decelerate"><ds-icon name="play"></ds-icon></button>

<button type="button" class="ds-inline-action" data-copy="cubic-bezier(0, 0, 0, 1)"><ds-icon name="code"></ds-icon>cubic-bezier(0, 0, 0, 1)</button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-play-row="" aria-label="Reproducir accelerate"><ds-icon name="play"></ds-icon></button>

<button type="button" class="ds-inline-action" data-copy="cubic-bezier(0.3, 0, 1, 1)"><ds-icon name="code"></ds-icon>cubic-bezier(0.3, 0, 1, 1)</button>
```

## Recetas

Las combinaciones que los componentes usan de verdad. Cada demostración de abajo corre con el mismo CSS de los componentes.

Botones, chips, elementos de navegación, campos y acciones en línea.

```html
transition: background-color var(--ds-duration-fast) var(--ds-easing-standard);
```

El menú de los chips, el chevron que gira y la búsqueda Ctrl K. La opacidad usa fast + standard.

```html
transition:
  opacity var(--ds-duration-fast) var(--ds-easing-standard),
  transform var(--ds-duration-base) var(--ds-easing-emphasized);
```

Contraer la sidebar (Ctrl B), el cajón en el móvil y abrir los grupos del menú.

```html
transition: width var(--ds-duration-slow) var(--ds-easing-emphasized);
```

Movimiento

Cada cambio de página del sitio: el contenido sube 6 px y aparece.

```html
animation: page-enter var(--ds-duration-slow) var(--ds-easing-decelerate) both;
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-btn ds-btn--secondary">Botón</button>

<button type="button" class="ds-chip">Chip<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<a class="ds-inline-action" href="#/fundamentos/movimento" data-noop=""><ds-icon name="file-text"></ds-icon>Acción en línea</a>

<button type="button" class="ds-inline-action" data-copy="transition: background-color var(--ds-duration-fast) var(--ds-easing-standard);"><ds-icon name="copy"></ds-icon>Copiar transición</button>

<button type="button" class="ds-chip" data-toggle-pop="" aria-expanded="false">Tema<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10.5 3.5a7.5 7.5 0 0 0 10 10A8.5 8.5 0 1 1 10.5 3.5z"></path></svg>

<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"></path></svg>
```

## Movimiento reducido

Quien pide menos movimiento en el sistema operativo recibe la misma interfaz, con los cambios de estado instantáneos. Nada depende de la animación para funcionar.

Con la simulación activada, todas las demostraciones de esta página cambian de estado sin animar. También con movimiento reducido: el tema cambia sin transición y la navegación de la página se desplaza sin suavizado.

```html
/* ds/base.css */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Marcado de los ejemplos de esta sección:

```html
<span class="ds-badge" data-system-pref="">Sin restricción</span>

<button type="button" class="ds-chip ds-chip--sm" data-simulate="" aria-pressed="false"><ds-icon name="motion"></ds-icon><span data-simulate-label="">Desactivado</span></button>
```

## Uso

El buen movimiento pasa desapercibido. Tres reglas para mantenerlo así.

- **Haz:** usa los pares de tokens. Duración y curva siempre de los tokens, en el par de la receta correcta. Prefiere animar opacity y transform.
- **Evita:** valores sueltos. Los números y curvas inventados en el momento dejan a cada componente con un ritmo distinto.
- **Consejo:** Interacción frecuente, movimiento corto. Lo que pasa todo el tiempo (hover, foco) queda en fast. Duraciones largas solo para cambios grandes y poco frecuentes.
