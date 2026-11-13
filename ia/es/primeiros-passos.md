# Primeros pasos

Sección de Lume: Lume. Página: https://lumeui.dev/#/primeiros-passos

Cómo instalar, importar los estilos y usar los tokens en tu proyecto. Sin dependencias y sin build obligatorio: un CSS, los módulos que uses y listo.

En números: dependencias: 0 · archivo de CSS: 1 · tokens: 383 · temas: 2.

## Instalación

Tres pasos, sin terminal. ¿Prefieres tener los archivos en el proyecto? Descarga el zip de la versión y lleva la carpeta a tu proyecto.

- Paso 1: — Carga el CSS — Pega esta línea en el `<head>`: un solo archivo trae las fuentes, los tokens, la base y todos los componentes. El `0.28` en la dirección es la versión; tu proyecto solo cambia cuando cambies ese número. Licencia MIT. — `<link rel="stylesheet" href="https://lumeui.dev/v/0.28/lume.css">`
- Paso 2: — Elige el tema — `light` es el claro y `dark`, el oscuro. Para seguir el sistema (lo predeterminado del sitio), `initTheme()` elige uno de los dos. — `<html lang="es" data-theme="light">`
- Paso 3: — Activa solo el JavaScript que uses — Los componentes visuales funcionan solo con CSS. Para los interactivos, importa de `lume.js` lo que use la pantalla. — `<script type="module"> import { initTooltips, mountSelects } from 'https://lumeui.dev/v/0.28/lume.js'; initTooltips(); mountSelects(document); </script>`

## Tu primera pantalla

Elige un punto de partida, míralo en cada tema y cópialo. El código de abajo es exactamente lo que está en el escenario.

```html
<form class="ds-card" style="display:grid;gap:var(--ds-space-250);width:min(420px,100%)">
  <h2 class="ds-text-heading-md">Crear proyecto</h2>
  <div class="ds-form-field">
    <label class="ds-form-field__label" for="gs-nome">Nombre del proyecto</label>
    <div class="ds-field"><input class="ds-field__input" id="gs-nome" placeholder="Ej.: Portal del cliente"></div>
    <p class="ds-form-field__hint">Aparece en el menú y en las invitaciones.</p>
  </div>
  <label class="ds-switch">
    <input type="checkbox" role="switch" class="ds-switch__input" checked>
    <span class="ds-choice__text"><span class="ds-choice__label">Proyecto privado</span></span>
  </label>
  <div style="display:flex;gap:var(--ds-space-100)">
    <button type="button" class="ds-btn ds-btn--primary">Crear proyecto</button>
    <button type="button" class="ds-btn ds-btn--ghost">Cancelar</button>
  </div>
</form>
```

Marcado de los ejemplos de esta sección:

```html
<form class="ds-card">
<h2 class="ds-text-heading-md">Crear proyecto</h2>
<div class="ds-form-field">
<label class="ds-form-field__label" for="gs-nome">Nombre del proyecto</label>
<div class="ds-field"><input class="ds-field__input" id="gs-nome" placeholder="Ej.: Portal del cliente"></div>
<p class="ds-form-field__hint">Aparece en el menú y en las invitaciones.</p>
</div>
<label class="ds-switch">
<input type="checkbox" role="switch" class="ds-switch__input" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Proyecto privado</span></span>
</label>
<div>
<button type="button" class="ds-btn ds-btn--primary">Crear proyecto</button>
<button type="button" class="ds-btn ds-btn--ghost">Cancelar</button>
</div>
</form>

<button type="button" class="ds-chip" data-control="example" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-7">
<span>Punto de partida</span><span data-label="">Formulario</span>
<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span>
</button>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Usar tokens

En tu CSS, usa siempre un token semántico — nunca un valor suelto. Así el tema, la marca y la densidad cambian sin tocar tu código.

```html
.meu-card {
  padding: var(--ds-space-300);
  border-radius: var(--ds-radius-xl);
  background: var(--ds-color-bg-surface);
  border: 1px solid var(--ds-color-border-subtle);
  color: var(--ds-color-fg-default);
  font: var(--ds-text-body-md);
}
```

- Color — `--ds-color-*` — 96
- Texto — `--ds-text-*` — 19
- Espacio — `--ds-space-*` — 15
- Radio — `--ds-radius-*` — 9
- Sombra — `--ds-shadow-*` — 6
- Movimiento — `--ds-duration-* · --ds-easing-*` — 5
- Layout — `--ds-layout-* · --ds-z-*` — 7

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Módulos de JavaScript

Cada componente interactivo tiene su módulo, sin dependencias entre ellos. Importa solo lo que use la pantalla.

| Módulo | Para qué | Cómo activarlo |  |
| --- | --- | --- | --- |
|  `ds/icons/icons.js`  | Íconos como <ds-icon> y la función icon() |  ``  |  |
|  `ds/js/theme.js`  | Tema oscuro, claro o del sistema |  `initTheme(); setTheme("light")`  |  |
|  `ds/js/tooltip.js`  | Pistas con data-ds-tooltip |  `initTooltips()`  |  |
|  `ds/js/menu.js`  | Menús que se abren desde un disparador |  `createMenu(botao, { options, onChange })`  |  |
|  `ds/js/select.js`  | Selector con lista propia |  `mountSelects(document)`  |  |
|  `ds/js/tabs.js`  | Pestañas con teclado |  `mountTabs(document)`  |  |
|  `ds/js/modal.js`  | Modal y confirmación |  `await confirmModal({ title })`  |  |
|  `ds/js/toast.js`  | Avisos rápidos y copia |  `toast("Salvo"); copyText(valor)`  |  |
|  `ds/js/command-palette.js`  | Búsqueda ⌘K |  `createCommandPalette({ items })`  |  |
|  `ds/js/shell.js`  | App shell con sidebar |  `createShell(document.querySelector(".ds-shell"))`  |  |

## Usa tu marca

Toda la marca sale de un matiz. Cambia un número y el build recrea la paleta, la ajusta a sRGB y vuelve a comprobar el contraste.

- 1 — En `tokens/palettes.json`, cambia el hue (y, si quieres, el chroma) de la paleta `refugio`.
- 2 — Ejecuta `npm run tokens` — o deja `npm run dev` abierto, que lo rehace solo.
- 3 — Mira el informe de contraste en la terminal. Si algo baja de 4,5:1, ajusta el token semántico.

```html
"refugio": { "hue": 253, "chroma": 0.043 }
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Estructura

Dónde vive cada cosa. Tú editas `tokens/`; el resto se consume.

```html
ds/
├─ ds.css              punto de entrada: tokens + base + componentes
├─ tokens.css          generado a partir de tokens/*.json — no lo edites
├─ base.css            reset, tipografía base, foco
├─ components/         un CSS por componente
├─ js/                 un módulo por componente interactivo
└─ icons/icons.js      biblioteca de íconos
tokens/                la fuente de verdad: color, tipografía, espacio…
scripts/build-tokens.mjs genera tokens.css y comprueba el contraste
```

## Siguientes pasos

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5a8.5 8.5 0 0 0 0 17c1.1 0 1.8-.8 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8h2.1a3.8 3.8 0 0 0 3.8-3.8C20.5 6.9 16.7 3.5 12 3.5z"></path><circle cx="7.8" cy="11.2" r="1.1" fill="currentColor" stroke="none"></circle><circle cx="9.6" cy="7.3" r="1.1" fill="currentColor" stroke="none"></circle><circle cx="14.2" cy="6.9" r="1.1" fill="currentColor" stroke="none"></circle><circle cx="17.2" cy="9.6" r="1.1" fill="currentColor" stroke="none"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="7" width="18" height="10" rx="3.5"></rect><path d="M8.5 12h7"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1z"></path><path d="M17 9a3.5 3.5 0 0 1 0 6M8 15.67V19a1.5 1.5 0 0 0 3 0v-1.33"></path></svg>
```
