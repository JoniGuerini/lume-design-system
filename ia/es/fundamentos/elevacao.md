# Elevación

Sección de Lume: Fundamentos. Página: https://lumeui.dev/#/fundamentos/elevacao

En Lume, la profundidad viene primero del color de la superficie y solo después de la sombra. Capas claras, sombras suaves y un orden de apilamiento sin sorpresas.

En números: capas de superficie: 5 · sombras: 6 · niveles de z-index: 9.

## Capas de superficie

Cada escalón es una superficie un poco más alta. En los temas oscuros, subir es aclarar; en los claros, la capa más alta es el blanco.

app — #DAE0E8 — sunken — #E8EDF3 — canvas — #EEF2F6 — surface — #FFFFFF — raised — #FFFFFF

app — #0F0E0C — sunken — #151412 — canvas — #1D1B18 — surface — #24221F — raised — #2C2A27

- 01 — bg.app — Detrás de los paneles del app shell.
- 02 — bg.sunken — Campos y áreas hundidas.
- 03 — bg.canvas — Fondo del panel de contenido.
- 04 — bg.surface — Tarjetas y bloques. La sidebar usa el mismo color.
- 05 — bg.raised — Paneles, menús y modales.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
```

## Sombras

Seis sombras en dos capas — una corta y definida, otra larga y difusa. En el oscuro son negras y densas; en Lume claro, una pizarra muy suave. Haz clic en una sombra para copiarla.

xs — Detalles mínimos. — sm — Controles levemente destacados. — md — Tarjetas destacadas. — lg — Paneles, sidebar, tooltip y toast. — xl — Menús y popovers. — 2xl — ⌘K y el cajón del móvil.

xs — Detalles mínimos. — sm — Controles levemente destacados. — md — Tarjetas destacadas. — lg — Paneles, sidebar, tooltip y toast. — xl — Menús y popovers. — 2xl — ⌘K y el cajón del móvil.

### Valores mismo token, valor distinto en cada tema

| Token | Lume claro | Lume oscuro |  |
| --- | --- | --- | --- |
| shadow.xs — --ds-shadow-xs |  `0 1px 2px 0 rgb(45 58 74 / 0.06)`  |  `0 1px 2px 0 rgb(0 0 0 / 0.32)`  |  |
| shadow.sm — --ds-shadow-sm |  `0 1px 2px 0 rgb(45 58 74 / 0.06), 0 2px 6px -1px rgb(45 58 74 / 0.06)`  |  `0 1px 2px 0 rgb(0 0 0 / 0.3), 0 2px 6px -1px rgb(0 0 0 / 0.24)`  |  |
| shadow.md — --ds-shadow-md |  `0 2px 4px -1px rgb(45 58 74 / 0.06), 0 8px 20px -4px rgb(45 58 74 / 0.1)`  |  `0 2px 4px -1px rgb(0 0 0 / 0.28), 0 8px 20px -4px rgb(0 0 0 / 0.36)`  |  |
| shadow.lg — --ds-shadow-lg |  `0 4px 8px -2px rgb(45 58 74 / 0.07), 0 16px 36px -8px rgb(45 58 74 / 0.14)`  |  `0 4px 8px -2px rgb(0 0 0 / 0.3), 0 16px 36px -8px rgb(0 0 0 / 0.5)`  |  |
| shadow.xl — --ds-shadow-xl |  `0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18)`  |  `0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6)`  |  |
| shadow.2xl — --ds-shadow-2xl |  `0 12px 24px -6px rgb(45 58 74 / 0.1), 0 48px 96px -24px rgb(45 58 74 / 0.24)`  |  `0 12px 24px -6px rgb(0 0 0 / 0.36), 0 48px 96px -24px rgb(0 0 0 / 0.72)`  |  |

## Cuándo elevar

Lo que queda en el flujo usa solo color de superficie. La sombra es para lo que se separa de la página; la sombra fuerte, solo para lo que flota por encima de todo.

| Componente | Superficie | Sombra | Capa |
| --- | --- | --- | --- |
| Tarjeta — Bloque de contenido sobre el canvas. | bg.surface | — | — |
| Panel — La superficie principal, como el panel “Guion”. | bg.raised | shadow.lg | — |
| Sidebar y área principal — Los dos paneles del app shell. | bg.surface | shadow.lg | — |
| Barra superior — Queda fija arriba al desplazarse. | bg.canvas | — | z.sticky |
| Menú — Se abre desde un chip o un botón. | bg.raised | shadow.xl | z.popover |
| Tooltip — Pista sobre cualquier elemento. | bg.raised | shadow.lg | z.tooltip |
| Toast — Aviso corto y pasajero. | bg.inverse | shadow.lg | z.toast |
| Paleta ⌘K — Diálogo modal sobre el fondo oscurecido. | bg.raised | shadow.2xl | z.modal |
| Cajón del móvil — La sidebar en pantallas pequeñas. | bg.surface | shadow.2xl | z.overlay |

## Apilamiento

El orden de quién queda encima. Usa siempre el token: los intervalos de 100 dejan espacio para casos especiales sin pelea de números.

- 1600 — tooltip — Tooltip — siempre por encima de todo.
- 1500 — toast — Toast.
- 1400 — popover — Menús y popovers.
- 1300 — modal — Modales (el ⌘K usa la capa nativa del <dialog>).
- 1200 — overlay — Fondo oscurecido y cajón del móvil.
- 1100 — sticky — Barra superior.
- 1000 — dropdown — Listas desplegables en el flujo.
- 1 — raised — Algo que necesita pasar por delante de sus vecinos.
- 0 — base — Flujo normal de la página.

## Uso

Menos sombra, más intención.

- **Haz:** primero la capa de color. Una tarjeta sobre el canvas solo necesita la superficie y un borde sutil.
- **Evita:** sombra fuerte en el flujo. Una sombra grande en algo que no flota crea ruido y le roba la jerarquía a menús y modales.
- **Consejo:** z-index solo con tokens. Los números sueltos se vuelven una carrera (999, 9999…). Los tokens ya dicen quién queda encima.
