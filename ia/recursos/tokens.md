# Tokens para Figma

Seção do Lume: Recursos. Página: https://lumeui.dev/#/recursos/tokens

Os mesmos tokens do código, no Figma e em qualquer ferramenta: variáveis com modo escuro e claro, estilos de texto e sombra — tudo gerado do JSON, sem copiar valor à mão.

Em números: variáveis no Figma: 337 · modos: 2 · estilos: 31 · formatos: 6.

## De onde vem

Uma fonte só: os arquivos em `tokens/`. O resto é gerado — por isso o Figma e o código nunca discordam.

Fonte

- palettes.json · 13 paletas em OKLCH
- foundation.json · espaço, raio, tamanhos
- typography.json · 19 estilos
- semantic.json · cores por tema
- effects.json · sombras

Build

- OKLCH → hex dentro do sRGB
- referências e transparências resolvidas
- contraste conferido · 78/78

Saídas

- ds/tokens.css · os componentes
- ds/tokens.js · esta documentação
- dist/tokens/ · Figma, DTCG e JSON, com npm run tokens:export

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M14 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5z"></path><path d="M14 3.5v5h5M9 13h6M9 16.5h4"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14.3-4.6L4 8.5M4 4v4.5h4.5M4 13a8 8 0 0 0 14.3 4.6l1.7-2.1M20 20v-4.5h-4.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>
```

## Formato

Seis arquivos, um para cada destino. Tudo é montado aqui mesmo, no navegador, a partir dos tokens desta versão — nada sai da sua máquina.

Para gerar todos de uma vez, na pasta do projeto: `npm run tokens:export`. Eles vão para `dist/tokens/`.

## Variáveis do Figma

Três coleções e dois tipos de estilo. As primitivas guardam os tons; as semânticas dizem para que serve cada cor e mudam com o modo.

Quer os componentes também? O Plugin do Figma cria estas mesmas variáveis e, por cima delas, ícones e componentes com variantes, em blocos de documentação.

Primitivas — 181 cores · 1 modo — Todas as paletas, mais branco e preto. Escondidas da publicação e sem escopo: ninguém pinta com elas direto. — Semânticos — 96 cores · Escuro e Claro — 161 valores apontam para uma primitiva (alias). Os 31 com transparência chegam como RGBA. — Dimensões — 60 números · 1 modo — Espaço, raio, traço, tamanhos, layout, breakpoints, desfoque e opacidade — cada um com o escopo certo. — Estilos — 19 de texto · 12 de sombra — Os 19 estilos de texto e as 6 sombras, uma versão por tema — estilos do Figma não têm modos.

## Mapa de tokens

Cada token, com o nome que ele ganha no Figma e o valor em cada modo. Procure por nome — no código ou no Figma.

## Regras de nome

O nome é o mesmo dos dois lados, só muda a pontuação. Quem conhece o token no código acha a variável no Figma.

| No código | No Figma | Por quê |
| --- | --- | --- |
|  `color.bg.canvas`  |  `color/bg/canvas`  | Pontos viram barras — e cada barra vira uma pasta no Figma. |
|  `--ds-color-bg-canvas`  |  `var(--ds-color-bg-canvas)`  | Vai como “code syntax” (Web): no Dev Mode, quem inspeciona copia a variável CSS certa. |
|  `color.neutral.925`  |  `Primitivas › color/neutral/925`  | Primitivas ficam escondidas da publicação e sem escopo: servem só de alias. |
|  `text.heading-md`  |  `text/heading-md`  | Estilos de texto usam o mesmo nome do token, sem o prefixo ds. |

### Escopos onde cada variável aparece no seletor

| Tokens | Aparece em |
| --- | --- |
|  `bg.*`  | Preenchimento de frame e de forma |
|  `fg.*, *.fg, *.on-solid`  | Texto, forma e traço (ícones) |
|  `border.*, *.border`  | Traço |
|  `brand, success, warning, danger, info`  | Preenchimentos e traço |
|  `chart.*`  | Forma e traço |
|  `space.*`  | Espaçamento (gap) e tamanho |
|  `radius.*`  | Raio de canto |
|  `size, layout, breakpoint`  | Largura e altura |
|  `border-width, focus-ring`  | Espessura de traço |
|  `blur.*`  | Desfoque de efeito |
|  `opacity.*`  | Opacidade |

## O que muda no Figma

Quase tudo chega igual. O que o Figma não representa vira a forma mais próxima — e fica registrado aqui.

| No código | No Figma | Detalhe |
| --- | --- | --- |
|  `Cor em OKLCH`  | Hex sRGB | O build já recorta cada tom para caber no sRGB; o Figma recebe o hex final. O OKLCH fica na descrição da variável. |
|  `alpha({cor}, 0.06)`  | RGBA resolvida | O Figma não mistura transparência com alias. Bordas e fundos translúcidos viram uma cor com alfa, sem vínculo com a primitiva. |
|  `Tema escuro e claro`  | Modos Escuro e Claro | Só a coleção Semânticos tem modos. Troque o modo num frame e tudo dentro dele muda de tema. |
|  `rem (1rem = 16 px)`  | px | Dimensões chegam em pixels. Opacidade vai de 0 a 100, como o Figma pede. |
|  `font: 600 16px/28px Geist`  | Estilo de texto | Família, peso, tamanho, entrelinha em px e espaçamento em %. text-transform: uppercase vira maiúsculas. |
|  `box-shadow por tema`  | Dois estilos de sombra | Estilos do Figma não têm modos: cada sombra vira Escuro/shadow/md e Claro/shadow/md. |

## Passo a passo de importação

Dois caminhos. O plugin funciona em qualquer plano e atualiza sem duplicar; a API REST é para criar tudo de uma vez num arquivo novo, em planos Enterprise.

Recomendado — Plugin de desenvolvimento

- 1 — Gere os arquivos — npm run tokens:export — ou baixe manifest.json e code.js nesta página, na mesma pasta.
- 2 — Importe o plugin — No Figma desktop: Plugins › Desenvolvimento › Importar plugin do manifesto… e escolha dist/tokens/figma-plugin/manifest.json.
- 3 — Rode no arquivo da biblioteca — Plugins › Desenvolvimento › Lume · importar tokens. Ele cria as coleções, os modos, as variáveis e os estilos.
- 4 — Confira o recado no fim — O plugin diz quantas variáveis criou ou atualizou e se faltou alguma fonte.
- 5 — Para atualizar, rode de novo — Exporte outra vez e rode o mesmo plugin: ele acha tudo pelo nome e troca só os valores.

Enterprise — API REST

Um POST com o arquivo `figma-variables.rest.json`. Os ids no arquivo são temporários: o Figma troca pelos definitivos e devolve o mapa na resposta.

```html
# 1. Gere os arquivos
npm run tokens:export

# 2. Use um token pessoal com escopo file_variables:write — nunca no código
export FIGMA_TOKEN="seu-token-pessoal"
export FILE_KEY="chave-do-arquivo"   # o trecho depois de /design/ na URL

# 3. Envie as variáveis (cria as três coleções)
curl -X POST "https://api.figma.com/v1/files/$FILE_KEY/variables" \
  -H "X-Figma-Token: $FIGMA_TOKEN" \
  -H "Content-Type: application/json" \
  --data @dist/tokens/figma-variables.rest.json
```

O token pessoal é seu. Use variável de ambiente e nunca escreva o valor em arquivo do projeto.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Sincronização

O JSON ganha. Mudou no Figma? A mudança volta como pull request nos tokens — e só depois de revisada chega de novo ao Figma.

- 01 — Edite o JSON — Toda mudança começa em tokens/*.json, num pull request. É ali que a revisão acontece.
- 02 — Gere e confira — npm run tokens recria o CSS e o JS e confere o contraste (hoje 78/78). Se cair abaixo do mínimo, o relatório avisa.
- 03 — Exporte — npm run tokens:export escreve dist/tokens/ — os mesmos arquivos que esta página baixa.
- 04 — Rode o plugin na biblioteca — No arquivo da biblioteca do Figma, rode o plugin de novo: ele atualiza pelo nome, sem duplicar.
- 05 — Publique e anote — Publique a biblioteca e registre a mudança em Novidades. Renomear ou remover token é versão maior.

1.0.0 — Renomear ou remover token: quebra quem usa. Versão maior, com o nome antigo e o novo nas Novidades. — 0.1.0 — Token novo ou valor ajustado: versão menor. — 0.0.1 — Descrição, escopo ou correção sem mudar valor: correção.

Marcação dos exemplos desta seção:

```html
<a class="ds-inline-action" href="#/novidades"><ds-icon name="history"></ds-icon>Ver o histórico em Novidades<ds-icon name="arrow-right"></ds-icon></a>
```

## Limitações

O que a exportação não faz — para ninguém descobrir no meio de uma entrega.

- A API REST de variáveis só escreve em planos Enterprise — E o corpo só cria (CREATE): rodar duas vezes no mesmo arquivo duplica tudo. Para manter em dia, use o plugin.
- Transparência não vira alias — 31 valores semânticos com alfa chegam como RGBA. Se a primitiva mudar, esses mudam na próxima exportação — não sozinhos.
- Estilos não têm modos — Sombras viram dois estilos, um por tema. Texto não muda com o tema, então é um estilo só.
- Fontes precisam estar instaladas — O plugin pula o estilo de texto cuja fonte falta (Geist Serif, Geist Sans, JetBrains Mono) e avisa qual foi no fim.
- Movimento, z-index e degradê ficam fora do Figma — Durações, curvas, camadas e o degradê do divisor estão no DTCG e no CSS, mas não viram variáveis.
- Renomear é criar — O plugin acha cada variável pelo nome. Um token renomeado nasce como variável nova e a antiga continua no arquivo até alguém apagar.

## Código

O exportador é um módulo puro: as mesmas funções rodam no navegador (esta página) e no Node (o script).

```html
npm run tokens          # tokens/*.json → ds/tokens.css e ds/tokens.js (+ contraste)
npm run tokens:export   # ds/tokens.js → dist/tokens/ (Figma, DTCG, JSON plano, CSS)
```

### No JavaScript

```html
import data from './ds/tokens.js';
import { figmaVariables, figmaRestPayload, figmaPlugin, toDTCG, toFlat } from './ds/js/token-export.js';

figmaVariables(data);    // coleções + estilos, formato simples
figmaRestPayload(data);  // corpo do POST /v1/files/:file_key/variables
figmaPlugin(data);       // { manifest, code } do plugin de desenvolvimento
toDTCG(data);            // W3C Design Tokens
toFlat(data);            // { tokens: { 'color.bg.canvas': { dark, light, cssVar } } }
```

### Lendo o JSON plano

```html
import flat from './dist/tokens/tokens.flat.json' with { type: 'json' };

const canvas = flat.tokens['color.bg.canvas'];
canvas.dark;    // '#1d1b18'
canvas.light;   // '#f9f5f1'
canvas.cssVar;  // '--ds-color-bg-canvas'
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Variáveis só ajudam se todo mundo pinta com as mesmas.

- **Faça:** pinte com as semânticas. color/bg/canvas no fundo, color/fg/muted no texto de apoio. Troque o modo do frame e a tela inteira muda de tema.
- **Evite:** primitivas no layout. neutral/925 não muda com o tema e não diz para que serve. Por isso as primitivas ficam fora do seletor.
- **Evite:** editar valor no Figma. A próxima exportação sobrescreve. Precisa de outro tom? Abra um pull request em tokens/.
