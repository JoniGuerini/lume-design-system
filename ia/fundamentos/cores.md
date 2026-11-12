# Cores

Seção do Lume: Fundamentos. Página: https://lumeui.dev/#/fundamentos/cores

Uma paleta quente gerada em OKLCH e tokens semânticos que se adaptam ao tema. Os componentes nunca usam cor solta — sempre um token.

Em números: paletas: 15 · cores primitivas: 179 · tokens semânticos: 96 · contrastes WCAG: 78/78.

## Paletas primitivas

A matéria-prima. Cada paleta nasce de um matiz e um croma em OKLCH, com luminosidade perceptualmente uniforme. Clique numa cor para copiar.

50 — #fff4ef — 100 — #ffe7db — 200 — #ffd1ba — 300 — #ffb590 — 400 — #ff945e — 500 — #f57630 — 600 — #d95c0a — 700 — #b74900 — 800 — #923700 — 900 — #712800 — 950 — #451400

25 — #fefaf7 — 50 — #f9f5f1 — 100 — #f3ede5 — 200 — #e5ded7 — 300 — #cec8c1 — 400 — #9c9792 — 500 — #7e7975 — 550 — #6d6a66 — 600 — #605d59 — 650 — #55524f — 700 — #4a4744 — 750 — #3d3b38 — 800 — #33312e — 850 — #2c2a27 — 900 — #24221f — 925 — #1d1b18 — 950 — #151412 — 975 — #0f0e0c

### Paletas de apoio status, dados e ilustração

Areia — hue 78 · croma 0,045 · 11 tons — Argila — hue 52 · croma 0,135 · 11 tons — Ocre — hue 88 · croma 0,085 · 11 tons — Ardósia — hue 225 · croma 0,035 · 11 tons — Vermelho — hue 25 · croma 0,19 · 11 tons — Âmbar — hue 82 · croma 0,165 · 11 tons — Verde — hue 150 · croma 0,14 · 11 tons — Verde-azulado — hue 185 · croma 0,11 · 11 tons — Azul — hue 245 · croma 0,14 · 11 tons — Violeta — hue 295 · croma 0,16 · 11 tons — Rosa — hue 352 · croma 0,16 · 11 tons — Lume · Ardósia fria — hue 253 · croma 0,043 · 18 tons — Terracota — hue 38 · croma 0,104 · 11 tons

Para recriar uma paleta inteira, mude o hue em `tokens/palettes.json`. O build gera os tons, ajusta ao gamut sRGB e verifica o contraste.

```html
// tokens/palettes.json
"brand": { "hue": 50, "chroma": 0.175 }
```

## Tokens semânticos

É isso que os componentes consomem. Cada token aponta para uma primitiva diferente em cada tema — o nome descreve a função, não a cor.

Fundos e camadas de superfície — do app ao painel elevado.

| Token | Lume claro | Lume escuro |  |
| --- | --- | --- | --- |
| bg.app — --ds-color-bg-app — Fundo atrás dos painéis do app shell. | refugio.200 — #DAE0E8 | neutral.975 — #0F0E0C |  |
| bg.canvas — --ds-color-bg-canvas — Fundo do painel de conteúdo. | refugio.100 — #EEF2F6 | neutral.925 — #1D1B18 |  |
| bg.sidebar — --ds-color-bg-sidebar | refugio.25 — #F8FAFD | neutral.900 — #24221F |  |
| bg.surface — --ds-color-bg-surface — Cards e blocos sobre o canvas. | white — #FFFFFF | neutral.900 — #24221F |  |
| bg.raised — --ds-color-bg-raised — Modais, popovers, painéis flutuantes. | white — #FFFFFF | neutral.850 — #2C2A27 |  |
| bg.sunken — --ds-color-bg-sunken — Campos e áreas rebaixadas. | refugio.150 — #E8EDF3 | neutral.950 — #151412 |  |
| bg.muted — --ds-color-bg-muted | refugio.200 — #DAE0E8 | neutral.750 — #3D3B38 |  |
| bg.field — --ds-color-bg-field — Fundo de campos, seleção e chips que abrem menu: o mesmo do menu que eles abrem (raised), para os dois conversarem. | white — #FFFFFF | neutral.850 — #2C2A27 |  |
| bg.field-hover — --ds-color-bg-field-hover | refugio.25 — #F8FAFD | neutral.800 — #33312E |  |
| bg.inverse — --ds-color-bg-inverse | refugio.800 — #2B3847 | neutral.100 — #F3EDE5 |  |
| bg.hover — --ds-color-bg-hover | refugio.700 · 5% — #3E51660D | white · 5% — #FFFFFF0D |  |
| bg.pressed — --ds-color-bg-pressed | refugio.700 · 9% — #3E516617 | white · 8% — #FFFFFF14 |  |
| bg.selected — --ds-color-bg-selected | refugio.700 · 7% — #3E516612 | refugio.300 · 10% — #C0CAD61A |  |
| bg.overlay — --ds-color-bg-overlay | refugio.800 · 35% — #2B384759 | black · 60% — #00000099 |  |

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-chip ds-chip--sm" data-group="bg" aria-pressed="true">Fundo<span>14</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-group="fg" aria-pressed="false">Texto<span>8</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-group="border" aria-pressed="false">Borda<span>7</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-group="brand" aria-pressed="false">Marca<span>9</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-group="success" aria-pressed="false">Sucesso<span>6</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-group="warning" aria-pressed="false">Aviso<span>6</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-group="danger" aria-pressed="false">Perigo<span>6</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-group="info" aria-pressed="false">Informação<span>6</span></button>
```

## Temas

O Lume vem em claro e escuro — a ardósia e a terracota do app Lume — e, por padrão, segue o sistema: claro de dia, escuro se o aparelho estiver no escuro. Como os temas vivem em atributos, dá até para misturar: um bloco escuro dentro de uma tela clara.

Lançamento da versão 0.1

Os mesmos componentes e os mesmos tokens — só o tema muda.

Lançamento da versão 0.1

Os mesmos componentes e os mesmos tokens — só o tema muda.

```html
<html data-theme="light">        <!-- Lume claro · padrão -->
<html data-theme="dark">         <!-- Lume escuro -->
<!-- “Sistema” é resolvido no JS (initTheme): Lume claro ou Lume escuro -->

<section data-theme="dark">  <!-- tema aninhado: só este bloco fica escuro -->
```

Marcação dos exemplos desta seção:

```html
<p class="ds-panel__eyebrow">Exemplo</p>

<span class="ds-icon-btn ds-icon-btn--sm"><ds-icon name="x"></ds-icon></span>

<span class="ds-chip ds-chip--sm"><span class="ds-chip__icon"><ds-icon name="pencil"></ds-icon></span>Tom direto<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></span>

<span class="ds-badge ds-badge--sm ds-badge--success">Pronto</span>

<span class="ds-badge ds-badge--sm ds-badge--warning">Revisar</span>

<span class="ds-btn ds-btn--primary ds-btn--sm">Publicar</span>

<span class="ds-btn ds-btn--secondary ds-btn--sm">Cancelar</span>
```

## Contraste

Toda combinação de texto e fundo usada pelos componentes é verificada no build, nos dois temas, contra o WCAG 2.2. Texto comum pede 4,5:1; texto terciário, 3:1.

| Texto sobre fundo | Lume claro | Lume escuro | Mínimo |
| --- | --- | --- | --- |
| fg.default — sobre bg.canvas | Aa — 10,61:1 — AAA | Aa — 14,77:1 — AAA | 4,5:1 |
| fg.muted — sobre bg.canvas | Aa — 6,48:1 — AA | Aa — 10,36:1 — AAA | 4,5:1 |
| fg.default — sobre bg.sidebar | Aa — 11,42:1 — AAA | Aa — 13,64:1 — AAA | 4,5:1 |
| fg.muted — sobre bg.sidebar | Aa — 6,97:1 — AA | Aa — 9,56:1 — AAA | 4,5:1 |
| fg.subtle — sobre bg.sidebar | Aa — 5,14:1 — AA | Aa — 5,48:1 — AA | 4,5:1 |
| fg.muted — sobre bg.raised | Aa — 7,29:1 — AAA | Aa — 8,62:1 — AAA | 4,5:1 |
| fg.link — sobre bg.canvas | Aa — 7,25:1 — AAA | Aa — 12,93:1 — AAA | 4,5:1 |
| fg.brand — sobre bg.canvas | Aa — 7,25:1 — AAA | Aa — 12,93:1 — AAA | 4,5:1 |
| brand.on-solid — sobre brand.solid | Aa — 7,80:1 — AAA | Aa — 9,09:1 — AAA | 4,5:1 |
| brand.fg — sobre brand.subtle | Aa — 7,25:1 — AAA | Aa — 9,38:1 — AAA | 4,5:1 |
| fg.inverse — sobre bg.inverse | Aa — 11,42:1 — AAA | Aa — 16,59:1 — AAA | 4,5:1 |
| success.fg — sobre success.subtle | Aa — 6,33:1 — AA | Aa — 8,33:1 — AAA | 4,5:1 |
| success.on-solid — sobre success.solid | Aa — 4,66:1 — AA | Aa — 7,41:1 — AAA | 4,5:1 |
| warning.fg — sobre warning.subtle | Aa — 6,43:1 — AA | Aa — 8,99:1 — AAA | 4,5:1 |
| warning.on-solid — sobre warning.solid | Aa — 8,33:1 — AAA | Aa — 8,33:1 — AAA | 4,5:1 |
| danger.fg — sobre danger.subtle | Aa — 5,02:1 — AA | Aa — 7,93:1 — AAA | 4,5:1 |
| danger.on-solid — sobre danger.solid | Aa — 5,41:1 — AA | Aa — 7,13:1 — AAA | 4,5:1 |
| info.fg — sobre info.subtle | Aa — 4,56:1 — AA | Aa — 8,19:1 — AAA | 4,5:1 |
| info.on-solid — sobre info.solid | Aa — 4,89:1 — AA | Aa — 7,31:1 — AAA | 4,5:1 |
| chart.series.1 — sobre bg.surface | Aa — 3,83:1 — AA grande | Aa — 4,14:1 — AA grande | 3:1 |
| chart.series.2 — sobre bg.surface | Aa — 3,54:1 — AA grande | Aa — 4,49:1 — AA grande | 3:1 |
| chart.series.3 — sobre bg.surface | Aa — 3,88:1 — AA grande | Aa — 4,08:1 — AA grande | 3:1 |
| chart.series.4 — sobre bg.surface | Aa — 4,60:1 — AA | Aa — 3,45:1 — AA grande | 3:1 |
| chart.series.5 — sobre bg.surface | Aa — 3,37:1 — AA grande | Aa — 4,70:1 — AA | 3:1 |
| chart.series.6 — sobre bg.surface | Aa — 3,89:1 — AA grande | Aa — 4,07:1 — AA grande | 3:1 |
| chart.series.7 — sobre bg.surface | Aa — 3,79:1 — AA grande | Aa — 4,19:1 — AA grande | 3:1 |
| chart.series.8 — sobre bg.surface | Aa — 3,36:1 — AA grande | Aa — 4,73:1 — AA | 3:1 |
| fg.subtle — sobre bg.canvas | Aa — 4,78:1 — AA | Aa — 5,94:1 — AA | 4,5:1 |
| fg.subtle — sobre bg.surface | Aa — 5,38:1 — AA | Aa — 5,48:1 — AA | 4,5:1 |
| fg.subtle — sobre bg.raised | Aa — 5,38:1 — AA | Aa — 4,94:1 — AA | 4,5:1 |
| fg.subtle — sobre bg.sunken | Aa — 4,57:1 — AA | Aa — 6,36:1 — AA | 4,5:1 |
| border.field — sobre bg.canvas | Aa — 3,35:1 — AA grande | Aa — 3,58:1 — AA grande | 3:1 |
| border.field — sobre bg.surface | Aa — 3,57:1 — AA grande | Aa — 3,50:1 — AA grande | 3:1 |
| border.field — sobre bg.raised | Aa — 3,57:1 — AA grande | Aa — 3,38:1 — AA grande | 3:1 |
| border.field — sobre bg.sunken | Aa — 3,29:1 — AA grande | Aa — 3,57:1 — AA grande | 3:1 |
| fg.muted — sobre bg.sunken | Aa — 6,19:1 — AA | Aa — 11,10:1 — AAA | 4,5:1 |
| fg.muted — sobre bg.field | Aa — 7,29:1 — AAA | Aa — 8,62:1 — AAA | 4,5:1 |
| fg.default — sobre bg.field-hover | Aa — 11,42:1 — AAA | Aa — 11,15:1 — AAA | 4,5:1 |

## Uso

Três regras que mantêm a interface consistente quando o sistema cresce.

- **Faça:** use tokens semânticos. O nome descreve a função. Quando o tema ou a marca mudam, o componente acompanha sozinho.
- **Evite:** cor solta ou primitiva. Hex fixo ou primitiva no componente quebra o tema claro e trava a troca de marca.
- **Dica:** Pêssego com moderação. Reserve a cor da marca para a ação principal e para indicadores. O resto da interface vive nos neutros quentes.
