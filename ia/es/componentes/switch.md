# Switch

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/switch

Enciende o apaga algo al instante, sin botón de guardar. Si el cambio solo vale al enviar, usa un checkbox.

En números: tamaños: 2 · estados: 5 · transición: 200 ms · rol ARIA: switch.

## Ejemplo

```html
<label class="ds-switch">
  <input type="checkbox" role="switch" class="ds-switch__input" checked>
  <span class="ds-choice__text">
    <span class="ds-choice__label">Avisar sobre comentarios</span>
    <span class="ds-choice__description">Te avisamos cuando alguien comente.</span>
  </span>
</label>
```

## ¿Switch o checkbox?

Los dos guardan un sí/no. La diferencia es cuándo la elección empieza a valer.

Encendido ahora

Switch `ds-switch` — Efecto inmediato. No necesita botón de guardar.

Checkbox `ds-checkbox` — Forma parte de un formulario y vale al enviar.

Marcado de los ejemplos de esta sección:

```html
<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-q-dark" checked="" data-live=""><span class="ds-choice__text"><span class="ds-choice__label">Modo foco</span><span class="ds-choice__description">Oculta las notificaciones mientras esté encendido.</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" checked=""><span class="ds-choice__text"><span class="ds-choice__label">Recibir el contrato por correo</span><span class="ds-choice__description">Vale cuando envíes el formulario.</span></span></label>

<button type="button" class="ds-btn ds-btn--primary ds-btn--sm" aria-hidden="true">Enviar</button>
```

## Tamaños

Mediano es el predeterminado. El pequeño cabe en filas de tabla y barras densas.

Mediano `predeterminado` — 36 × 20 px

Pequeño `ds-switch--sm` — 28 × 16 px

Marcado de los ejemplos de esta sección:

```html
<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-1" checked=""><span class="ds-choice__text"><span class="ds-choice__label">Encendido</span></span></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-2"><span class="ds-choice__text"><span class="ds-choice__label">Apagado</span></span></label>

<label class="ds-switch ds-switch--sm"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-3" checked=""><span class="ds-choice__text"><span class="ds-choice__label">Encendido</span></span></label>

<label class="ds-switch ds-switch--sm"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-4"><span class="ds-choice__text"><span class="ds-choice__label">Apagado</span></span></label>
```

## Estados

Encendido gana el color de la marca y el pulgar va a la derecha — la posición también comunica, no solo el color.

Marcado de los ejemplos de esta sección:

```html
<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-5"></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-6" checked=""></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-7"></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-8"></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-9" disabled=""></label>
```

## Lista de ajustes

El uso más común: etiqueta y descripción a la izquierda, switch a la derecha con `.ds-switch--end`. Cada cambio vale al instante.

Notificaciones

- Resumen por correo — Todos los lunes, con lo que cambió en la semana.
- Notificaciones en el móvil — Menciones y respuestas, al instante.
- Sonido al recibir mensajes — Solo cuando la pestaña está abierta.
- Funciones en prueba — Puede cambiar sin aviso.

## Movimiento

El pulgar se mueve en `duration.base` (200 ms) con `easing.emphasized`: sale rápido y se asienta suave. Con movimiento reducido, el cambio es instantáneo.

```html
.ds-switch__input::before {
  transition: translate var(--ds-duration-base) var(--ds-easing-emphasized);
}

@media (prefers-reduced-motion: reduce) {
  .ds-switch__input::before { transition: none; }
}
```

Marcado de los ejemplos de esta sección:

```html
<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-motion" aria-label="Ejemplo de movimiento"></label>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-motion-play=""><ds-icon name="play"></ds-icon>Alternar</button>

<button type="button" class="ds-chip ds-chip--sm" data-motion-reduce="" aria-pressed="false"><ds-icon name="motion"></ds-icon>Simular movimiento reducido</button>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Un checkbox nativo por debajo, anunciado como interruptor.

- role="switch" — El lector de pantalla anuncia “interruptor, activado” en vez de “casilla, marcada”.
- Teclado — Tab Espacio — Tab lleva el foco; Espacio enciende y apaga.
- La etiqueta describe qué enciende — “Notificaciones por correo”, no “Encendido”. El control ya anuncia el estado.
- No depende solo del color — La posición del pulgar cambia junto con el color — funciona para quien no distingue el melocotón.
- Efecto visible — Si el cambio pasa fuera de la pantalla, confírmalo con un aviso corto (toast) para quien no ve el resultado.
- Movimiento reducido — Con `prefers-reduced-motion`, el pulgar cambia de lado sin animar.

## Tokens usados

Todo lo que consume el switch.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.muted (`--ds-color-bg-muted`) | Riel apagado | #DAE0E8 | #3D3B38 |
| color.fg.muted (`--ds-color-fg-muted`) | Pulgar apagado | #46586E | #CEC8C1 |
| color.brand.solid (`--ds-color-brand-solid`) | Riel encendido | #3E5166 | #C0CAD6 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Pulgar encendido | #F8FAFD | #1D2734 |
| color.border.default (`--ds-color-border-default`) | Contorno del riel | #3E516633 | #FFFFFF1A |
| color.border.strong (`--ds-color-border-strong`) | Contorno en hover | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Anillo de foco | #53657A | #C0CAD6 |
| radius.full (`--ds-radius-full`) | Riel y pulgar | 9999 px | 9999 px |
| duration.base (`--ds-duration-base`) | Pulgar y color | 200ms | 200ms |
| easing.emphasized (`--ds-easing-emphasized`) | Curva del pulgar | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| text.label-md (`--ds-text-label-md`) | Etiqueta | 14/20 · medium | 14/20 · medium |
| text.body-sm (`--ds-text-body-sm`) | Descripción | 14/22 · regular | 14/22 · regular |
| opacity.disabled (`--ds-opacity-disabled`) | Desactivado | 0.44 | 0.44 |

## Uso

Tres reglas para no confundir.

- **Haz:** efecto al instante. Lo enciendes y la interfaz cambia. Ningún “guardar” después.
- **Evita:** switch con botón de enviar. Si necesita confirmación, es checkbox. El switch promete efecto inmediato.
- **Consejo:** Etiqueta sin “encender/apagar”. “Modo oscuro” basta. “Encender modo oscuro” suena raro cuando ya está encendido.
