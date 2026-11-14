# Tokens for Figma

Lume section: Resources. Page: https://lumeui.dev/#/recursos/tokens

The same tokens as the code, in Figma and in any tool: variables with dark and light modes, text and shadow styles — all generated from the JSON, without copying values by hand.

In numbers: variables in Figma: 337 · modes: 2 · styles: 31 · formats: 6.

## Where it comes from

A single source: the files in `tokens/`. The rest is generated — that’s why Figma and the code never disagree.

Source

- palettes.json · 13 palettes in OKLCH
- foundation.json · space, radius, sizes
- typography.json · 19 styles
- semantic.json · colors per theme
- effects.json · shadows

Build

- OKLCH → hex within sRGB
- references and transparencies resolved
- contrast checked · 78/78

Outputs

- ds/tokens.css · the components
- ds/tokens.js · this documentation
- dist/tokens/ · Figma, DTCG, and JSON, with npm run tokens:export

Markup of the examples in this section:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M14 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5z"></path><path d="M14 3.5v5h5M9 13h6M9 16.5h4"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14.3-4.6L4 8.5M4 4v4.5h4.5M4 13a8 8 0 0 0 14.3 4.6l1.7-2.1M20 20v-4.5h-4.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>
```

## Format

Six files, one for each destination. Everything is assembled right here, in the browser, from this version’s tokens — nothing leaves your machine.

To generate all of them at once, in the project folder: `npm run tokens:export`. They go to `dist/tokens/`.

## Figma variables

Three collections and two kinds of style. Primitives hold the tones; semantics say what each color is for and change with the mode.

Want to see the components too? Lume’s Figma file uses these same variables, with icons and components with variants in documentation blocks.

Primitivas — 181 colors · 1 mode — Every palette, plus white and black. Hidden from publishing and with no scope: no one paints with them directly. — Semânticos — 96 colors · Escuro (dark) and Claro (light) — 161 values point to a primitive (alias). The 31 with transparency arrive as RGBA. — Dimensões — 60 numbers · 1 mode — Space, radius, stroke, sizes, layout, breakpoints, blur, and opacity — each with the right scope. — Styles — 19 text · 12 shadow — The 19 text styles and the 6 shadows, one version per theme — Figma styles have no modes.

## Token map

Every token, with the name it gets in Figma and the value in each mode. Search by name — in code or in Figma.

## Naming rules

The name is the same on both sides; only the punctuation changes. Whoever knows the token in code finds the variable in Figma.

| In code | In Figma | Why |
| --- | --- | --- |
|  `color.bg.canvas`  |  `color/bg/canvas`  | Dots become slashes — and each slash becomes a folder in Figma. |
|  `--ds-color-bg-canvas`  |  `var(--ds-color-bg-canvas)`  | It goes as “code syntax” (Web): in Dev Mode, whoever inspects copies the right CSS variable. |
|  `color.neutral.925`  |  `Primitivas › color/neutral/925`  | Primitives are hidden from publishing and have no scope: they only serve as aliases. |
|  `text.heading-md`  |  `text/heading-md`  | Text styles use the same name as the token, without the ds prefix. |

### Scopes where each variable shows in the picker

| Tokens | Shows in |
| --- | --- |
|  `bg.*`  | Frame and shape fill |
|  `fg.*, *.fg, *.on-solid`  | Text, shape, and stroke (icons) |
|  `border.*, *.border`  | Stroke |
|  `brand, success, warning, danger, info`  | Fills and stroke |
|  `chart.*`  | Shape and stroke |
|  `space.*`  | Spacing (gap) and size |
|  `radius.*`  | Corner radius |
|  `size, layout, breakpoint`  | Width and height |
|  `border-width, focus-ring`  | Stroke width |
|  `blur.*`  | Effect blur |
|  `opacity.*`  | Opacity |

## What changes in Figma

Almost everything arrives the same. What Figma can’t represent becomes the closest form — and it’s recorded here.

| In code | In Figma | Detail |
| --- | --- | --- |
|  `Color in OKLCH`  | sRGB hex | The build already clips each tone to fit sRGB; Figma gets the final hex. The OKLCH value goes in the variable’s description. |
|  `alpha({cor}, 0.06)`  | Resolved RGBA | Figma doesn’t mix transparency with aliases. Translucent borders and backgrounds become a color with alpha, unlinked from the primitive. |
|  `Dark and light theme`  | Escuro and Claro modes | Only the Semânticos collection has modes. Switch the mode on a frame and everything inside changes theme. |
|  `rem (1rem = 16 px)`  | px | Dimensions arrive in pixels. Opacity goes from 0 to 100, as Figma expects. |
|  `font: 600 16px/28px Geist`  | Text style | Family, weight, size, line height in px, and letter spacing in %. text-transform: uppercase becomes uppercase. |
|  `box-shadow per theme`  | Two shadow styles | Figma styles have no modes: each shadow becomes Escuro/shadow/md and Claro/shadow/md. |

## Import step by step

Two paths. The plugin works on any plan and updates without duplicating; the REST API is for creating everything at once in a new file, on Enterprise plans.

Recommended — Development plugin

- 1 — Build the files — npm run tokens:export — or download manifest.json and code.js on this page, into the same folder.
- 2 — Import the plugin — In Figma desktop: Plugins › Development › Import plugin from manifest… and pick dist/tokens/figma-plugin/manifest.json.
- 3 — Run it in the library file — Plugins › Development › Lume · importar tokens. It creates the collections, modes, variables, and styles.
- 4 — Check the message at the end — The plugin says how many variables it created or updated and whether a font was missing.
- 5 — To update, run it again — Export again and run the same plugin: it finds everything by name and changes only the values.

Enterprise — REST API

A POST with the `figma-variables.rest.json` file. The ids in the file are temporary: Figma replaces them with the final ones and returns the map in the response.

```html
# 1. Build the files
npm run tokens:export

# 2. Use a personal token with the file_variables:write scope — never in code
export FIGMA_TOKEN="your-personal-token"
export FILE_KEY="file-key"   # the part after /design/ in the URL

# 3. Send the variables (creates the three collections)
curl -X POST "https://api.figma.com/v1/files/$FILE_KEY/variables" \
  -H "X-Figma-Token: $FIGMA_TOKEN" \
  -H "Content-Type: application/json" \
  --data @dist/tokens/figma-variables.rest.json
```

The personal token is yours. Use an environment variable and never write the value in a project file.

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Sync

The JSON wins. Changed something in Figma? The change comes back as a pull request on the tokens — and only after review does it reach Figma again.

- 01 — Edit the JSON — Every change starts in tokens/*.json, in a pull request. That’s where review happens.
- 02 — Build and check — npm run tokens rebuilds the CSS and the JS and checks contrast (currently 78/78). If it drops below the minimum, the report warns.
- 03 — Export — npm run tokens:export writes dist/tokens/ — the same files this page downloads.
- 04 — Run the plugin in the library — In the Figma library file, run the plugin again: it updates by name, without duplicating.
- 05 — Publish and log it — Publish the library and record the change in What’s new. Renaming or removing a token is a major version.

1.0.0 — Renaming or removing a token: breaks whoever uses it. A major version, with the old and new names in What’s new. — 0.1.0 — New token or adjusted value: minor version. — 0.0.1 — Description, scope, or a fix without changing values: patch.

Markup of the examples in this section:

```html
<a class="ds-inline-action" href="#/novidades"><ds-icon name="history"></ds-icon>See the history in What’s new<ds-icon name="arrow-right"></ds-icon></a>
```

## Limitations

What the export doesn’t do — so no one finds out in the middle of a delivery.

- The variables REST API only writes on Enterprise plans — And the body only creates (CREATE): running it twice on the same file duplicates everything. To keep things current, use the plugin.
- Transparency doesn’t become an alias — 31 semantic values with alpha arrive as RGBA. If the primitive changes, they change on the next export — not on their own.
- Styles have no modes — Shadows become two styles, one per theme. Text doesn’t change with the theme, so it’s a single style.
- Fonts need to be installed — The plugin skips the text style whose font is missing (Geist Serif, Geist Sans, JetBrains Mono) and says which one at the end.
- Motion, z-index, and gradients stay out of Figma — Durations, curves, layers, and the divider gradient are in the DTCG and the CSS, but don’t become variables.
- Renaming is creating — The plugin finds each variable by name. A renamed token is born as a new variable and the old one stays in the file until someone deletes it.

## Code

The exporter is a pure module: the same functions run in the browser (this page) and in Node (the script).

```html
npm run tokens          # tokens/*.json → ds/tokens.css and ds/tokens.js (+ contrast)
npm run tokens:export   # ds/tokens.js → dist/tokens/ (Figma, DTCG, flat JSON, CSS)
```

### In JavaScript

```html
import data from './ds/tokens.js';
import { figmaVariables, figmaRestPayload, figmaPlugin, toDTCG, toFlat } from './ds/js/token-export.js';

figmaVariables(data);    // collections + styles, simple format
figmaRestPayload(data);  // body of POST /v1/files/:file_key/variables
figmaPlugin(data);       // { manifest, code } of the development plugin
toDTCG(data);            // W3C Design Tokens
toFlat(data);            // { tokens: { 'color.bg.canvas': { dark, light, cssVar } } }
```

### Reading the flat JSON

```html
import flat from './dist/tokens/tokens.flat.json' with { type: 'json' };

const canvas = flat.tokens['color.bg.canvas'];
canvas.dark;    // '#1d1b18'
canvas.light;   // '#f9f5f1'
canvas.cssVar;  // '--ds-color-bg-canvas'
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Usage

Variables only help if everyone paints with the same ones.

- **Do:** paint with semantics. color/bg/canvas for the background, color/fg/muted for supporting text. Switch the frame’s mode and the whole screen changes theme.
- **Avoid:** primitives in layouts. neutral/925 doesn’t change with the theme and doesn’t say what it’s for. That’s why primitives stay out of the picker.
- **Avoid:** editing values in Figma. The next export overwrites it. Need another tone? Open a pull request in tokens/.
