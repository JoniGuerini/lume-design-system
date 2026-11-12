# Radios

Sección de Lume: Fundamentos. Página: https://lumeui.dev/#/fundamentos/raios

Las esquinas generosas dan el tono tranquilo de Lume. Una escala corta — del detalle a la píldora — y una regla simple para esquinas dentro de esquinas.

En números: tokens de radio: 9 · px, de xs a 3xl: 6–36 · px en el botón: 12 · para píldoras: full.

## Escala

Nueve pasos. Cuanto más grande la superficie, mayor el radio. Haz clic en un radio para copiar la variable.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="8.5" y="8.5" width="12" height="12" rx="2"></rect><path d="M15.5 8.5v-3a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"></path></svg>
```

## Radios anidados

Cuando una superficie redondeada queda dentro de otra, el radio interno es el externo menos el espaciado. Así las curvas quedan paralelas.

20 — − — 8 — = — 12 px — `radius.md`

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-chip ds-chip--sm" data-outer="lg" aria-pressed="false">lg · 16</button>

<button type="button" class="ds-chip ds-chip--sm" data-outer="xl" aria-pressed="true">xl · 20</button>

<button type="button" class="ds-chip ds-chip--sm" data-outer="2xl" aria-pressed="false">2xl · 28</button>

<button type="button" class="ds-chip ds-chip--sm" data-outer="3xl" aria-pressed="false">3xl · 36</button>

<button type="button" class="ds-chip ds-chip--sm" data-pad="050" aria-pressed="false">4 px</button>

<button type="button" class="ds-chip ds-chip--sm" data-pad="100" aria-pressed="true">8 px</button>

<button type="button" class="ds-chip ds-chip--sm" data-pad="150" aria-pressed="false">12 px</button>

<button type="button" class="ds-chip ds-chip--sm" data-pad="200" aria-pressed="false">16 px</button>
```

## Dónde usar

Cada componente ya viene con el radio correcto. Los ejemplos de abajo son los componentes reales.

| Radio | Componentes | Ejemplo |
| --- | --- | --- |
| full — píldora | Chip, insignia, control segmentado, avatar. |  |
| xs — 6 px | Kbd, código en línea, foco de la acción en línea. |  |
| sm — 8 px | Botón pequeño, botón de ícono. |  |
| md — 12 px | Botón, campo, toast, elemento del ⌘K. |  |
| lg — 16 px | Menú, bloque de código, tarjeta de la cuenta. |  |
| xl — 20 px | Tarjeta; panel en el móvil. |  |
| 2xl — 28 px | Panel, ⌘K, sidebar y área principal. |  |

## Uso

El radio también es jerarquía: esquinas más pequeñas para lo pequeño, más grandes para lo que contiene.

- **Haz:** usa la escala. El radio por token mantiene todo coherente — y cambia junto si cambia la escala.
- **Evita:** radio suelto o repetido. Un valor fijo se sale de la escala; el mismo radio dentro y fuera deja la curva interna “gorda”.
- **Consejo:** Píldora solo en lo compacto. Chips, insignias, avatares y el selector de tema. Botones y campos quedan en md.
