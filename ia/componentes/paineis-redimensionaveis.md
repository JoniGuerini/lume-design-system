# Painéis redimensionáveis

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/paineis-redimensionaveis

Divide uma área em partes que a pessoa ajusta arrastando a divisória. Use quando cada um lê de um jeito: uma lista ao lado do conteúdo, a prévia sobre o código.

Em números: direções: 2 · linha: 1 px · área de pegar: 9 px · teclas: 5.

## Exemplo

```html
<div class="ds-resizable" aria-label="Editor">
  <div class="ds-resizable__panel" data-size="30" data-min="20">…</div>
  <div class="ds-resizable__panel" data-min="30">…</div>
</div>

<script type="module">
  import { createResizable } from 'https://lumeui.dev/v/1.0/lume.js';
  createResizable(document.querySelector('.ds-resizable'), {
    storageKey: 'editor', // guarda o tamanho no navegador
  });
</script>
```

## Variantes

Lado a lado ou um sobre o outro, com `data-direction`. Um painel pode ter outros dentro.

Lado a lado `ds-resizable` — A lista com tamanho mínimo; o conteúdo fica com o resto.

Um sobre o outro `data-direction="vertical"` — A prévia em cima e o código embaixo.

Aninhado, com alça e fechável `ds-resizable--grip · data-collapsible` — A lista fecha ao arrastar até o fim ou com Enter na divisória. A alça à vista ajuda quando arrastar não é óbvio.

Marcação dos exemplos desta seção:

```html
<div class="ds-resizable" data-demo="horizontal" aria-label="Componentes e prévia" data-direction="horizontal"><div class="ds-resizable__panel" data-size="32" data-min="22" data-max="50" id="ds-resizable-panel-2"><div>
<p>00 · Componentes</p>
<ul role="list"><li>Botão</li><li>Campo</li><li>Seleção</li><li>Carrossel</li><li>Seletor de cor</li><li>Painéis</li></ul>
</div></div><div class="ds-resizable__handle" role="separator" aria-orientation="vertical" aria-controls="ds-resizable-panel-2" data-index="0" aria-valuenow="32" aria-valuemin="22" aria-valuemax="50" aria-label="Redimensionar painéis"><span class="ds-resizable__grip" aria-hidden="true"></span></div><div class="ds-resizable__panel" data-min="35"><div>
<p>01 · Prévia</p>
<div>
<button type="button" class="ds-btn ds-btn--primary">Salvar</button>
<button type="button" class="ds-btn ds-btn--secondary">Cancelar</button>
</div>
</div></div></div>

<div class="ds-resizable" data-direction="vertical" data-demo="vertical" aria-label="Prévia e código"><div class="ds-resizable__panel" data-min="30" id="ds-resizable-panel-3"><div>
<p>01 · Prévia</p>
<div>
<button type="button" class="ds-btn ds-btn--primary">Salvar</button>
<button type="button" class="ds-btn ds-btn--secondary">Cancelar</button>
</div>
</div></div><div class="ds-resizable__handle" role="separator" aria-orientation="horizontal" aria-controls="ds-resizable-panel-3" data-index="0" aria-valuenow="55" aria-valuemin="30" aria-valuemax="75" aria-label="Redimensionar painéis"><span class="ds-resizable__grip" aria-hidden="true"></span></div><div class="ds-resizable__panel" data-size="45" data-min="25"><div>
<p>02 · Código</p>
<pre>&lt;button class="ds-btn ds-btn--primary"&gt; Salvar &lt;/button&gt;</pre>
</div></div></div>
```

## Estados

A linha engrossa com o mouse e fica na cor do indicador enquanto arrasta. O foco do teclado contorna a área de pegar inteira.

Marcação dos exemplos desta seção:

```html
<div class="ds-resizable" data-direction="horizontal">
<div class="ds-resizable__panel"></div>
<div class="ds-resizable__handle" role="separator" aria-orientation="vertical" aria-valuenow="40"><span class="ds-resizable__grip" aria-hidden="true"></span></div>
<div class="ds-resizable__panel"></div>
</div>
```

## Código

Os painéis são seus; o JavaScript põe as divisórias entre eles. Limites em % (`data-min="20"`) ou em px (`data-min="240px"`).

```html
<div class="ds-resizable" aria-label="Editor">
  <div class="ds-resizable__panel" data-size="30" data-min="20" data-collapsible>…</div>
  <div class="ds-resizable__panel" data-min="30">…</div>
</div>

<script type="module">
  import { createResizable } from 'https://lumeui.dev/v/1.0/lume.js';
  createResizable(document.querySelector('.ds-resizable'), {
    storageKey: 'editor', // guarda o tamanho no navegador
  });
</script>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Segue o padrão de divisória que se move da ARIA (window splitter).

- Nome e papel — Cada divisória é um separator com foco, que diz o tamanho do painel de antes em porcentagem.
- Teclado — ← → Home End Enter — As setas mudam o tamanho (com Shift, mais rápido), Home e End vão aos limites e Enter fecha e abre o painel que pode fechar.
- Painel fechado — Fica inert: o Tab não cai no que não está à vista.
- Área de pegar — A linha tem 1 px, mas a área de pegar tem 9 px, para o mouse e o dedo acertarem.

## Tokens usados

Tudo o que os painéis consomem.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.border.default (`--ds-color-border-default`) | Linha da divisória e contorno da alça | #3E516633 | #FFFFFF1A |
| color.border.strong (`--ds-color-border-strong`) | Linha com o mouse | #3E51664D | #FFFFFF29 |
| color.brand.indicator (`--ds-color-brand-indicator`) | Linha enquanto arrasta | #C97B63 | #DE9680 |
| color.border.focus (`--ds-color-border-focus`) | Foco do teclado | #53657A | #C0CAD6 |
| color.bg.raised (`--ds-color-bg-raised`) | Fundo da alça | #FFFFFF | #2C2A27 |
| radius.sm (`--ds-radius-sm`) | Cantos do foco | 8 px | 8 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** tamanho mínimo sempre. Sem mínimo, um painel vira uma fresta que ninguém consegue usar.
- **Evite:** no celular. Em tela estreita, empilhe as partes ou use abas: arrastar uma linha fina com o dedo é difícil.
- **Dica:** Guarde o tamanho. Com storageKey, a pessoa ajusta uma vez e encontra igual na próxima visita.
