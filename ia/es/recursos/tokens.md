# Tokens para Figma

Sección de Lume: Recursos. Página: https://lumeui.dev/#/recursos/tokens

Los mismos tokens del código, en Figma y en cualquier herramienta: variables con modo oscuro y claro, estilos de texto y sombra — todo generado desde el JSON, sin copiar valores a mano.

En números: variables en Figma: 337 · modos: 2 · estilos: 31 · formatos: 6.

## De dónde viene

Una sola fuente: los archivos en `tokens/`. El resto se genera — por eso Figma y el código nunca discrepan.

Fuente

- palettes.json · 13 paletas en OKLCH
- foundation.json · espacio, radio, tamaños
- typography.json · 19 estilos
- semantic.json · colores por tema
- effects.json · sombras

Build

- OKLCH → hex dentro de sRGB
- referencias y transparencias resueltas
- contraste verificado · 78/78

Salidas

- ds/tokens.css · los componentes
- ds/tokens.js · esta documentación
- dist/tokens/ · Figma, DTCG y JSON, con npm run tokens:export

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M14 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5z"></path><path d="M14 3.5v5h5M9 13h6M9 16.5h4"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14.3-4.6L4 8.5M4 4v4.5h4.5M4 13a8 8 0 0 0 14.3 4.6l1.7-2.1M20 20v-4.5h-4.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>
```

## Formato

Seis archivos, uno para cada destino. Todo se arma aquí mismo, en el navegador, a partir de los tokens de esta versión — nada sale de tu máquina.

Para generarlos todos de una vez, en la carpeta del proyecto: `npm run tokens:export`. Van a `dist/tokens/`.

## Variables de Figma

Tres colecciones y dos tipos de estilo. Las primitivas guardan los tonos; las semánticas dicen para qué sirve cada color y cambian con el modo.

¿Quieres los componentes también? El Plugin de Figma crea estas mismas variables y, sobre ellas, íconos y componentes con variantes, en bloques de documentación.

Primitivas — 181 colores · 1 modo — Todas las paletas, más blanco y negro. Ocultas de la publicación y sin ámbito: nadie pinta con ellas directamente. — Semânticos — 96 colores · Escuro (oscuro) y Claro (claro) — 161 valores apuntan a una primitiva (alias). Los 31 con transparencia llegan como RGBA. — Dimensões — 60 números · 1 modo — Espacio, radio, trazo, tamaños, layout, breakpoints, desenfoque y opacidad — cada uno con el ámbito correcto. — Estilos — 19 de texto · 12 de sombra — Los 19 estilos de texto y las 6 sombras, una versión por tema — los estilos de Figma no tienen modos.

## Mapa de tokens

Cada token, con el nombre que recibe en Figma y el valor en cada modo. Busca por nombre — en el código o en Figma.

## Reglas de nombre

El nombre es el mismo de los dos lados, solo cambia la puntuación. Quien conoce el token en el código encuentra la variable en Figma.

| En el código | En Figma | Por qué |
| --- | --- | --- |
|  `color.bg.canvas`  |  `color/bg/canvas`  | Los puntos se vuelven barras — y cada barra se vuelve una carpeta en Figma. |
|  `--ds-color-bg-canvas`  |  `var(--ds-color-bg-canvas)`  | Va como “code syntax” (Web): en Dev Mode, quien inspecciona copia la variable CSS correcta. |
|  `color.neutral.925`  |  `Primitivas › color/neutral/925`  | Las primitivas quedan ocultas de la publicación y sin ámbito: solo sirven de alias. |
|  `text.heading-md`  |  `text/heading-md`  | Los estilos de texto usan el mismo nombre del token, sin el prefijo ds. |

### Ámbitos dónde aparece cada variable en el selector

| Tokens | Aparece en |
| --- | --- |
|  `bg.*`  | Relleno de frame y de forma |
|  `fg.*, *.fg, *.on-solid`  | Texto, forma y trazo (íconos) |
|  `border.*, *.border`  | Trazo |
|  `brand, success, warning, danger, info`  | Rellenos y trazo |
|  `chart.*`  | Forma y trazo |
|  `space.*`  | Espaciado (gap) y tamaño |
|  `radius.*`  | Radio de esquina |
|  `size, layout, breakpoint`  | Ancho y alto |
|  `border-width, focus-ring`  | Grosor de trazo |
|  `blur.*`  | Desenfoque de efecto |
|  `opacity.*`  | Opacidad |

## Qué cambia en Figma

Casi todo llega igual. Lo que Figma no representa se vuelve la forma más cercana — y queda registrado aquí.

| En el código | En Figma | Detalle |
| --- | --- | --- |
|  `Color en OKLCH`  | Hex sRGB | El build ya recorta cada tono para que quepa en sRGB; Figma recibe el hex final. El OKLCH queda en la descripción de la variable. |
|  `alpha({cor}, 0.06)`  | RGBA resuelto | Figma no mezcla transparencia con alias. Bordes y fondos translúcidos se vuelven un color con alfa, sin vínculo con la primitiva. |
|  `Tema oscuro y claro`  | Modos Escuro y Claro | Solo la colección Semânticos tiene modos. Cambia el modo en un frame y todo lo que está dentro cambia de tema. |
|  `rem (1rem = 16 px)`  | px | Las dimensiones llegan en píxeles. La opacidad va de 0 a 100, como pide Figma. |
|  `font: 600 16px/28px Geist`  | Estilo de texto | Familia, peso, tamaño, interlineado en px y espaciado en %. text-transform: uppercase se vuelve mayúsculas. |
|  `box-shadow por tema`  | Dos estilos de sombra | Los estilos de Figma no tienen modos: cada sombra se vuelve Escuro/shadow/md y Claro/shadow/md. |

## Paso a paso de importación

Dos caminos. El plugin funciona en cualquier plan y actualiza sin duplicar; la API REST es para crear todo de una vez en un archivo nuevo, en planes Enterprise.

Recomendado — Plugin de desarrollo

- 1 — Genera los archivos — npm run tokens:export — o descarga manifest.json y code.js en esta página, en la misma carpeta.
- 2 — Importa el plugin — En Figma de escritorio: Plugins › Development › Import plugin from manifest… (los nombres siguen el idioma de tu Figma) y elige dist/tokens/figma-plugin/manifest.json.
- 3 — Ejecútalo en el archivo de la biblioteca — Plugins › Development › Lume · importar tokens. Crea las colecciones, los modos, las variables y los estilos.
- 4 — Revisa el mensaje al final — El plugin dice cuántas variables creó o actualizó y si faltó alguna fuente.
- 5 — Para actualizar, ejecútalo de nuevo — Exporta otra vez y ejecuta el mismo plugin: encuentra todo por el nombre y cambia solo los valores.

Enterprise — API REST

Un POST con el archivo `figma-variables.rest.json`. Los ids en el archivo son temporales: Figma los cambia por los definitivos y devuelve el mapa en la respuesta.

```html
# 1. Genera los archivos
npm run tokens:export

# 2. Usa un token personal con el ámbito file_variables:write — nunca en el código
export FIGMA_TOKEN="tu-token-personal"
export FILE_KEY="clave-del-archivo"   # el tramo después de /design/ en la URL

# 3. Envía las variables (crea las tres colecciones)
curl -X POST "https://api.figma.com/v1/files/$FILE_KEY/variables" \
  -H "X-Figma-Token: $FIGMA_TOKEN" \
  -H "Content-Type: application/json" \
  --data @dist/tokens/figma-variables.rest.json
```

El token personal es tuyo. Usa una variable de entorno y nunca escribas el valor en un archivo del proyecto.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Sincronización

El JSON gana. ¿Cambió en Figma? El cambio vuelve como pull request en los tokens — y solo después de revisado llega de nuevo a Figma.

- 01 — Edita el JSON — Todo cambio empieza en tokens/*.json, en un pull request. Ahí ocurre la revisión.
- 02 — Genera y revisa — npm run tokens recrea el CSS y el JS y revisa el contraste (hoy 78/78). Si baja del mínimo, el informe avisa.
- 03 — Exporta — npm run tokens:export escribe dist/tokens/ — los mismos archivos que descarga esta página.
- 04 — Ejecuta el plugin en la biblioteca — En el archivo de la biblioteca de Figma, ejecuta el plugin de nuevo: actualiza por el nombre, sin duplicar.
- 05 — Publica y anota — Publica la biblioteca y registra el cambio en Novedades. Renombrar o quitar un token es versión mayor.

1.0.0 — Renombrar o quitar un token: rompe a quien lo usa. Versión mayor, con el nombre antiguo y el nuevo en Novedades. — 0.1.0 — Token nuevo o valor ajustado: versión menor. — 0.0.1 — Descripción, ámbito o corrección sin cambiar valor: corrección.

Marcado de los ejemplos de esta sección:

```html
<a class="ds-inline-action" href="#/novidades"><ds-icon name="history"></ds-icon>Ver el historial en Novedades<ds-icon name="arrow-right"></ds-icon></a>
```

## Limitaciones

Lo que la exportación no hace — para que nadie lo descubra en medio de una entrega.

- La API REST de variables solo escribe en planes Enterprise — Y el cuerpo solo crea (CREATE): ejecutarlo dos veces en el mismo archivo duplica todo. Para mantenerlo al día, usa el plugin.
- La transparencia no se vuelve alias — 31 valores semánticos con alfa llegan como RGBA. Si la primitiva cambia, estos cambian en la próxima exportación — no solos.
- Los estilos no tienen modos — Las sombras se vuelven dos estilos, uno por tema. El texto no cambia con el tema, así que es un solo estilo.
- Las fuentes tienen que estar instaladas — El plugin salta el estilo de texto cuya fuente falta (Geist Serif, Geist Sans, JetBrains Mono) y avisa cuál fue al final.
- Movimiento, z-index y degradado quedan fuera de Figma — Duraciones, curvas, capas y el degradado del divisor están en el DTCG y en el CSS, pero no se vuelven variables.
- Renombrar es crear — El plugin encuentra cada variable por el nombre. Un token renombrado nace como variable nueva y la antigua sigue en el archivo hasta que alguien la borre.

## Código

El exportador es un módulo puro: las mismas funciones se ejecutan en el navegador (esta página) y en Node (el script).

```html
npm run tokens          # tokens/*.json → ds/tokens.css y ds/tokens.js (+ contraste)
npm run tokens:export   # ds/tokens.js → dist/tokens/ (Figma, DTCG, JSON plano, CSS)
```

### En JavaScript

```html
import data from './ds/tokens.js';
import { figmaVariables, figmaRestPayload, figmaPlugin, toDTCG, toFlat } from './ds/js/token-export.js';

figmaVariables(data);    // colecciones + estilos, formato simple
figmaRestPayload(data);  // cuerpo del POST /v1/files/:file_key/variables
figmaPlugin(data);       // { manifest, code } del plugin de desarrollo
toDTCG(data);            // W3C Design Tokens
toFlat(data);            // { tokens: { 'color.bg.canvas': { dark, light, cssVar } } }
```

### Leyendo el JSON plano

```html
import flat from './dist/tokens/tokens.flat.json' with { type: 'json' };

const canvas = flat.tokens['color.bg.canvas'];
canvas.dark;    // '#1d1b18'
canvas.light;   // '#f9f5f1'
canvas.cssVar;  // '--ds-color-bg-canvas'
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Las variables solo ayudan si todo el mundo pinta con las mismas.

- **Haz:** pinta con las semánticas. color/bg/canvas en el fondo, color/fg/muted en el texto de apoyo. Cambia el modo del frame y toda la pantalla cambia de tema.
- **Evita:** primitivas en el layout. neutral/925 no cambia con el tema y no dice para qué sirve. Por eso las primitivas quedan fuera del selector.
- **Evita:** editar valores en Figma. La próxima exportación lo sobrescribe. ¿Necesitas otro tono? Abre un pull request en tokens/.
