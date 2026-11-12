# Cómo contribuir

Sección de Lume: Recursos. Página: https://lumeui.dev/#/recursos/contribuir

Lume crece con lo que los equipos necesitan. Este es el camino de una idea hasta convertirse en versión — con las reglas de la casa, el checklist de la revisión y cómo publicar.

En números: etapas: 5 · ítems en la revisión: 17 · dependencias: 0 · versión actual: 0.24.0.

## El camino de un cambio

Cinco etapas, siempre en este orden. Una corrección pequeña puede saltarse la propuesta; una pieza nueva, nunca.

- 01 — Idea — Un problema que aparece en más de una pantalla — o una pieza que tres equipos ya diseñaron cada uno a su manera. — Quién — Cualquier persona del equipo — Sale de aquí — Una nota con ejemplos reales
- 02 — Propuesta — La plantilla completa: el problema, quién lo usa, lo que ya existe y el impacto en tokens y accesibilidad. — Quién — Quien tuvo la idea + alguien de Lume — Sale de aquí — Aceptada, ajustada o rechazada con motivo
- 03 — Borrador — Tokens, CSS, JS y la página con playground. Estados forzados con data-state, en los dos temas. — Quién — Quien lo va a construir — Sale de aquí — Pull request en borrador
- 04 — Revisión — Una persona mira el diseño, otra el código. Los dos pasan por el mismo checklist. — Quién — Dos personas, diseño y código — Sale de aquí — Aprobado o pedidos de ajuste
- 05 — Publicado — Entra en Novedades con una versión nueva. El puntito de la sidebar avisa a todo el mundo. — Quién — Quien mantiene Lume — Sale de aquí — Versión nueva — hoy, 0.24.0

## Proponer

Antes del código, la pregunta: ¿qué tipo de cambio es este? Cuanto más pequeño, más rápido sale.

### Token

Cambia solo un valor — un color, un espacio, un radio — y vale para todo el sistema.

Ejemplo — color.chart.status.critical nació porque el rojo de peligro se parecía al durazno en el oscuro.

### Variante

El mismo componente con otro peso, tamaño o tono. Misma anatomía, mismo teclado.

Ejemplo — ds-btn--danger es un botón; solo cambia la intención.

### Patrón

Una combinación de piezas que ya existen, con reglas de uso. No crea CSS nuevo — o crea poco.

Ejemplo — Formularios: campos + validación + resumen de errores.

### Componente

Una pieza nueva, con anatomía, estados y accesibilidad propios.

Ejemplo — ds-alert entró en la 0.3 porque ningún componente daba un aviso inline.

### ¿Esto es del design system? cuatro preguntas, como máximo

### Plantilla de propuesta copia y completa

Una buena propuesta cabe en una pantalla. Trae capturas de dónde aparece el problema — convencen más que cualquier párrafo.

```html
## Propuesta: <nombre de la pieza>

### Problema
Qué pasa hoy y dónde. Enlaces o capturas de al menos dos pantallas.

### Quién lo usa
Equipos, productos y con qué frecuencia.

### Lo que ya existe
Componentes, patrones o tokens de Lume que se acercan — y por qué no alcanzan.

### Propuesta
Anatomía, variantes y estados (normal, hover, presionado, foco, desactivado, error).

### Alternativas
Qué más se consideró y por qué quedó fuera.

### Impacto en tokens
Tokens nuevos o modificados. Contraste en los dos temas.

### Accesibilidad
Rol ARIA, teclado, foco, lector de pantalla y movimiento reducido.

### Fuera de alcance
Lo que esta propuesta no resuelve.
```

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5c3 3.5 5.5 6.6 5.5 10a5.5 5.5 0 0 1-11 0c0-3.4 2.5-6.5 5.5-10z"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M7.5 3.5 11.5 10.5h-8z"></path><rect x="13" y="3.5" width="7.5" height="7" rx="2"></rect><circle cx="12" cy="17" r="3.5"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 2.5 15 5.5 12 8.5 9 5.5zM5.5 9 8.5 12 5.5 15 2.5 12zM18.5 9l3 3-3 3-3-3zM12 15.5l3 3-3 3-3-3z"></path></svg>

<fieldset class="ds-choice-group" data-question="repete">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">01</span>¿Aparece en más de una pantalla o producto?</legend>
<p>O va a aparecer pronto — no solo "algún día, quizás".</p>
<div>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-repete" value="sim"><span class="ds-choice__text"><span class="ds-choice__label">Sí</span></span></label>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-repete" value="nao"><span class="ds-choice__text"><span class="ds-choice__label">No</span></span></label>
</div>
</fieldset>

<fieldset class="ds-choice-group" data-question="valor" hidden="">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">02</span>¿La diferencia es solo un valor — un color, un espacio, un radio?</legend>
<div>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-valor" value="sim"><span class="ds-choice__text"><span class="ds-choice__label">Sí</span></span></label>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-valor" value="nao"><span class="ds-choice__text"><span class="ds-choice__label">No</span></span></label>
</div>
</fieldset>

<fieldset class="ds-choice-group" data-question="mesmo" hidden="">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">03</span>¿Es un componente que ya existe, con otro peso, tamaño o tono?</legend>
<div>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-mesmo" value="sim"><span class="ds-choice__text"><span class="ds-choice__label">Sí</span></span></label>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-mesmo" value="nao"><span class="ds-choice__text"><span class="ds-choice__label">No</span></span></label>
</div>
</fieldset>

<fieldset class="ds-choice-group" data-question="monta" hidden="">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">04</span>¿Se puede armar con piezas que ya existen?</legend>
<div>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-monta" value="sim"><span class="ds-choice__text"><span class="ds-choice__label">Sí</span></span></label>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-monta" value="nao"><span class="ds-choice__text"><span class="ds-choice__label">No</span></span></label>
</div>
</fieldset>
```

## Construir

Las reglas de la casa y el paso a paso de una pieza nueva, con los archivos reales de este repositorio.

- Cero dependencias — HTML, CSS y JavaScript nativos. Nada de `npm install` para usarlo — los scripts de Node solo generan tokens y sirven el sitio.
- Solo tokens semánticos — Los componentes leen `var(--ds-color-fg-muted)`, nunca un hex ni una paleta cruda como `--ds-color-neutral-400`.
- Nombres ds-bloque__parte--variación — `.ds-panel__header`, `.ds-btn--primary`. El prefijo `ds-` es del sistema; las páginas de la documentación usan su propio prefijo.
- Estados forzados con data-state — `data-state="hover|pressed|focus"` dibuja el estado sin interacción — para documentar y probar.
- Patrones ARIA de verdad — combobox y listbox en el Selector, menu en el Menú, tablist en las Pestañas, dialog en el Modal, status en el Toast.
- Todo lo que se enciende, se apaga — Los módulos devuelven `destroy()` o una función de limpieza: listeners, timers y observadores se van junto.

### Paso a paso de la carpeta tokens/ hasta la página

- Paso 1: — Token, si falta — Edita el JSON en tokens/ y corre el build. Nunca edites ds/tokens.css ni ds/tokens.js — se generan y el servidor de desarrollo los rehace con cada cambio. — `// tokens/semantic.json — la fuente de la verdad "chart": { "grid": { "dark": "{color.neutral.800}", "light": "{color.neutral.200}" } } // y, si es color de marca o de texto, la verificación de contraste: "$checks": [["color.chart.series.1", "color.bg.surface", 3]]` — `npm run tokens # ✓ tokens: … tokens, 13 paletas → ds/tokens.css, ds/tokens.js # contraste: …/… combinações atingem o mínimo`
- Paso 2: — El CSS — Un archivo por componente en ds/components/, con el markup en el comentario de arriba, y una línea de import en ds/ds.css. — `/* * Alerta — mensaje inline con tono, ícono, título, texto y acciones. * * <div class="ds-alert ds-alert--danger" role="alert">…</div> * * Tonos: neutro (predeterminado) · --info · --success · --warning · --danger. */ .ds-alert { padding: var(--ds-space-200) var(--ds-space-250); border-radius: var(--ds-radius-xl); background: var(--ds-color-bg-surface); border: 1px solid var(--ds-color-border-subtle); } /* y en el punto de entrada, ds/ds.css */ @import url("./components/alert.css");`
- Paso 3: — El JavaScript, si es interactivo — Un módulo en ds/js/ que enciende el comportamiento y devuelve cómo apagarlo. — `// ds/js/mi-componente.js export function createMiComponente(el, { onChange } = {}) { const onClick = (event) => { /* … */ onChange?.(); }; el.addEventListener('click', onClick); return { destroy() { el.removeEventListener('click', onClick); }, }; }`
- Paso 4: — Íconos nuevos — Entran en la lista de ds/icons/icons.js, con las palabras clave en inglés y español en site/icon-keywords.js, y ya aparecen en la búsqueda de Íconos. — `// ds/icons/icons.js — cuadrícula de 24, trazo 1,5, puntas redondas, currentColor // [nombre, categoría, palabras clave en portugués, dibujo] ['send', 'acoes', 'enviar mensagem avião', path('M20.5 3.5 10 14M20.5 3.5 14 20.5l-4-6.5-6.5-4z')], // site/icon-keywords.js — las palabras clave en inglés y español send: ['send message plane', 'enviar mensaje avión'],`
- Paso 5: — La página — Los componentes siguen la página del Botón: playground con código, variantes, tamaños, estados, anatomía, accesibilidad, tokens y uso. Todo texto va en los tres idiomas. — `// site/pages/mi-componente.js import { mountDocNav } from '../doc-nav.js'; import { mountCodeCopy } from '../component-doc.js'; import { L } from '../i18n.js'; export const styles = ['site/component-doc.css', 'site/pages/mi-componente.css']; export default function render(page) { return `<div class="page doc"> <h1 class="doc-header__title">${page.label}</h1> <p>${L('Olá', 'Hello', 'Hola')}</p> </div>`; } export function mount(root) { const offNav = mountDocNav(root); const offCopy = mountCodeCopy(root); return () => { offNav(); offCopy(); }; }` — `// site/nav.js — textos en T(pt-BR, en, es) { label: T('Meu componente', 'My component', 'Mi componente'), icon: 'component', path: '/componentes/mi-componente', load: () => import('./pages/mi-componente.js'), description: T('Uma frase sobre para que serve.', 'One sentence on what it’s for.', 'Una frase sobre para qué sirve.'), }`

## Revisar

Quien revisa marca; quien construyó ya pasó por aquí antes. Para los detalles de contraste, teclado y lectores de pantalla, mira Accesibilidad.

### Lo que bloquea

- Cualquier ✗ en el informe de contraste del build
- Color, espacio o radio fijo en el CSS en vez de token
- Una dependencia nueva
- Algo que solo funciona con mouse
- Página sin playground o sin la sección de accesibilidad
- Error en la consola o id duplicado

### Cómo comentar

- Señala el lugar. “El foco del ítem 3 del menú desaparece en el claro” ayuda más que “el foco está raro”.
- Di si bloquea. Separa lo que impide la publicación de lo que es sugerencia para después.
- Propón. Si puedes, muestra el token o el fragmento que lo resuelve.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-meter" role="progressbar" aria-label="Ítems revisados" aria-valuemin="0" aria-valuemax="17" aria-valuenow="0" data-rc-meter="" aria-valuetext="0 de 17 ítems revisados">
<div class="ds-meter__head">
<span class="ds-meter__label">Ítems revisados</span>
<span class="ds-meter__value"><strong data-rc-count="">0</strong><span> de 17</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill" data-rc-fill=""></span></div>
</div>

<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-rc-clear=""><ds-icon name="refresh"></ds-icon>Desmarcar todo</button>

<fieldset class="ds-choice-group">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">01</span>Visual<span data-rc-group-count="visual">0/4</span></legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="visual" name="rc-visual-0">
<span class="ds-choice__text"><span class="ds-choice__label">Plano</span><span class="ds-choice__description">Sin degradado, vidrio, brillo, blur ni imagen de fondo.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="visual" name="rc-visual-1">
<span class="ds-choice__text"><span class="ds-choice__label">Solo tokens</span><span class="ds-choice__description">Ningún hex, color fijo ni paleta cruda en el CSS del componente.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="visual" name="rc-visual-2">
<span class="ds-choice__text"><span class="ds-choice__label">Dos temas</span><span class="ds-choice__description">Revisado en el oscuro y en el claro, incluso con tema anidado.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="visual" name="rc-visual-3">
<span class="ds-choice__text"><span class="ds-choice__label">Todos los estados</span><span class="ds-choice__description">Normal, hover, presionado, foco, desactivado y error — con data-state.</span></span>
</label>
</div>
</fieldset>

<fieldset class="ds-choice-group">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">02</span>Accesibilidad<span data-rc-group-count="a11y">0/4</span></legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="a11y" name="rc-a11y-0">
<span class="ds-choice__text"><span class="ds-choice__label">Contraste</span><span class="ds-choice__description">Texto ≥ 4,5:1 y contornos e íconos ≥ 3:1, en los dos temas.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="a11y" name="rc-a11y-1">
<span class="ds-choice__text"><span class="ds-choice__label">Teclado</span><span class="ds-choice__description">Todo alcanzable con Tab; flechas, Enter, Espacio y Esc donde el patrón ARIA lo pide.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="a11y" name="rc-a11y-2">
<span class="ds-choice__text"><span class="ds-choice__label">Nombres</span><span class="ds-choice__description">Botones de ícono con aria-label; campos con etiqueta de verdad.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="a11y" name="rc-a11y-3">
<span class="ds-choice__text"><span class="ds-choice__label">Movimiento</span><span class="ds-choice__description">prefers-reduced-motion respetado; nada parpadea ni se anima sin motivo.</span></span>
</label>
</div>
</fieldset>

<fieldset class="ds-choice-group">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">03</span>Código<span data-rc-group-count="codigo">0/4</span></legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="codigo" name="rc-codigo-0">
<span class="ds-choice__text"><span class="ds-choice__label">Sin dependencias</span><span class="ds-choice__description">Nada nuevo en package.json, ningún script de terceros.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="codigo" name="rc-codigo-1">
<span class="ds-choice__text"><span class="ds-choice__label">Limpieza</span><span class="ds-choice__description">destroy() o la función de mount quita listeners, timers y observadores.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="codigo" name="rc-codigo-2">
<span class="ds-choice__text"><span class="ds-choice__label">Ids únicos</span><span class="ds-choice__description">Ningún id repetido en la página, ni chocando con los de la app.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="codigo" name="rc-codigo-3">
<span class="ds-choice__text"><span class="ds-choice__label">Consola limpia</span><span class="ds-choice__description">Ningún error ni aviso en el navegador.</span></span>
</label>
</div>
</fieldset>
```

## Publicar

Toda versión sale de un solo archivo: `site/changelog.js`. Alimenta Novedades, el roadmap del Inicio, el puntito de la sidebar y la tarjeta de la versión.

1.0.0 — Mayor — Cambia algo que usas: un nombre de clase, un token eliminado. Viene con guía de migración. — 0.3.0 — Menor — Cosas nuevas sin romper nada: una sección, un componente, tokens nuevos. — 0.3.1 — Parche — Ajustes y bugs. Nadie necesita cambiar nada.

Mientras estemos en 0.x, una versión menor todavía puede traer un cambio que rompe — siempre avisado en Novedades. Cada entrega grande se convierte en una versión menor: 0.1 Primera versión, 0.2 Gráficos, 0.3 Patrones, 0.4 Recursos, 0.4.1 Contraste al día, 0.5 Plugin de Figma, 0.6 Plugin completo, 0.6.1 Plugin en el plan gratuito, 0.7 Idiomas, 0.8 Lume, 0.9 Refúgio, 0.10 Tema Lume, 0.11 Inicio de sesión y registro, 0.11.1 Aviso de versión nueva, 0.12 Calendario, 0.13 Roadmap, 0.13.1 Fuentes actualizadas, 0.14 Formularios completos, 0.14.1 Barra superior en el móvil, 0.14.2 Novedades solo para quien vuelve, 0.14.3 Última versión en el Inicio, 0.14.4 Claro y oscuro, 0.14.5 Botón de tema, 0.14.6 Tarjeta con altura fija, 0.15 Navegación y estructura, 0.16 Capas, 0.17 Feedback y carga, 0.18 Contenido, 0.19 Refinamiento, 0.19.1 Ícono de megáfono, 0.19.2 Revisión de íconos, 0.20 Barra de desplazamiento, 0.21 Volver arriba, 0.21.1 Navbar en ventanas más pequeñas, 0.22 Plugin de Figma, 0.22.1 Números del plugin en el sitio, 0.22.2 Conteo de visitas, 0.23 Lume para IA, 0.23.1 IA en tres idiomas, 0.24 Pruebas y API.

### Una entrada en Novedades

Algo que no existía: componente, página, token, ícono.

Algo que existía y mejoró, sin cambiar cómo se usa.

Algo que estaba mal y ahora está bien.

```html
// site/changelog.js
export const CURRENT_VERSION = '0.5.0';   // ← la versión nueva

const RELEASES = [
  {
    version: '0.5.0',
    date: '2026-12-01',
    title: T('Nome curto da entrega', 'Short name for the release', 'Nombre corto de la entrega'),
    summary: T('Uma frase sobre o que muda para quem usa.', 'One sentence on what changes for users.', 'Una frase sobre lo que cambia para quien lo usa.'),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          // [tipo, texto, enlace]
          ['novo', T(
            'Alerta inline com tons e ações',
            'Inline alert with tones and actions',
            'Alerta inline con tonos y acciones',
          ), '/padroes/formularios'],
          ['correcao', T(
            'A busca de ícones encontra “calendário”',
            'Icon search finds “calendar”',
            'La búsqueda de íconos encuentra “calendario”',
          ), '/fundamentos/icones'],
        ],
      },
    ],
  },
  // …versiones anteriores, de la más nueva a la más antigua
];
```

### Después de publicar sin paso manual

- El puntito de Novedades vuelve a la sidebar para quien todavía no vio la versión.
- La tarjeta de la cuenta muestra la versión nueva — hoy, Lume 0.24.
- La tarjeta de roadmap del Inicio lee los mismos archivos que Novedades y Roadmap; no hay otro lugar que actualizar.

Sin calendario fijo: una versión menor sale cuando una entrega está lista; las correcciones salen en cuanto están revisadas.

Marcado de los ejemplos de esta sección:

```html
<span class="ds-badge ds-badge--sm ds-badge--brand">Nuevo</span>

<span class="ds-badge ds-badge--sm ds-badge--info">Mejora</span>

<span class="ds-badge ds-badge--sm ds-badge--success">Corrección</span>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Definición de listo

Una pieza solo entra en una versión cuando todo esto es verdad.

- Resuelve un problema real — Aparece en al menos dos pantallas, con ejemplos.
- Funciona sin el mouse — Teclado, foco visible y lector de pantalla revisados.
- Vive de tokens — Cambia junto cuando cambian la marca o el tema.
- Está documentado — Página con playground, estados, accesibilidad y uso, en los tres idiomas.
- Pasó la revisión — Diseño y código, con todo el checklist marcado.
- Está en Novedades — Con versión, fecha y enlace a la página.

## Preguntas frecuentes

¿Listo para empezar? — Mira lo que cambió en las últimas versiones o arma tu primera pantalla con Lume — 44 componentes y 6 patrones esperando.

Marcado de los ejemplos de esta sección:

```html
<details class="ds-disclosure">
<summary class="ds-inline-action"><span>¿Necesito pedir permiso para usar algo que no está en Lume?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>No. Constrúyelo en tu producto con los tokens y componentes que existen. La propuesta llega cuando la pieza se repite.</p></div>
</details>

<details class="ds-disclosure">
<summary class="ds-inline-action"><span>¿Y si mi caso es distinto de todo?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>Empieza por la conversación, no por el código: trae los ejemplos. A veces es una variante; a veces, un patrón con piezas que ya existen.</p></div>
</details>

<details class="ds-disclosure">
<summary class="ds-inline-action"><span>¿Puedo crear un token solo para mi componente?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>Solo si tiene un rol que otros componentes también puedan tener. Los tokens nombran roles (fg.muted, border.focus), no lugares.</p></div>
</details>

<details class="ds-disclosure">
<summary class="ds-inline-action"><span>¿Cuánto tarda una revisión?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>Depende del tamaño. Una corrección o un token pasa rápido; un componente nuevo tarda más, porque pasa por diseño y por código — y por la página con playground.</p></div>
</details>

<details class="ds-disclosure">
<summary class="ds-inline-action"><span>¿Se puede cambiar el nombre de una clase?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>Sí, pero es un cambio que rompe: solo en una versión mayor, con guía de migración. Mientras tanto, mantén funcionando el nombre antiguo.</p></div>
</details>

<details class="ds-disclosure">
<summary class="ds-inline-action"><span>¿Dónde quedan las decisiones ya tomadas?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>En las páginas: cada componente dice cuándo usarlo y cuándo no. Lo que cambió, y por qué, queda en Novedades.</p></div>
</details>

<a class="ds-btn ds-btn--secondary" href="#/novidades"><ds-icon name="megaphone"></ds-icon>Ver Novedades</a>

<a class="ds-btn ds-btn--primary" href="#/primeiros-passos">Primeros pasos<ds-icon name="arrow-right"></ds-icon></a>
```
