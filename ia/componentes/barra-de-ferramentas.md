# Barra de ferramentas

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/barra-de-ferramentas

Agrupa botões de ícone de uma mesma área, como os de formatação de um editor. A barra inteira é uma parada só do Tab; as setas andam entre os botões.

Em números: paradas do Tab: 1 · teclas: 4 · altura: 36 px · papel ARIA: toolbar.

## Exemplo

```html
<div class="ds-toolbar" aria-label="Formatação">
  <div class="ds-toolbar__group">
    <button type="button" class="ds-icon-btn" aria-label="Negrito" aria-pressed="false">…</button>
    <button type="button" class="ds-icon-btn" aria-label="Itálico" aria-pressed="false">…</button>
  </div>
  <div class="ds-toolbar__separator"></div>
  <div class="ds-toolbar__group" data-exclusive>
    <button type="button" class="ds-icon-btn" aria-label="Alinhar à esquerda" aria-pressed="true">…</button>
    <button type="button" class="ds-icon-btn" aria-label="Centralizar" aria-pressed="false">…</button>
  </div>
</div>

<script type="module">
  import { createToolbar } from 'https://lumeui.dev/v/1.4/lume.js';
  createToolbar(document.querySelector('.ds-toolbar'), {
    onToggle: (button, pressed) => console.log(button.ariaLabel, pressed),
  });
</script>
```

## Variantes

Com contorno, para a barra que fica sobre o conteúdo; `ds-toolbar--plain` quando ela já está dentro de uma superfície, como o cabeçalho de um card.

Formatação `ds-toolbar` — Grupos separados por linha: estilo, alinhamento (um por vez), listas e desfazer.

Vertical `aria-orientation="vertical"` — Na lateral de uma área; as setas para cima e para baixo andam.

Sem contorno `ds-toolbar--plain` — Ações de um bloco de código, no canto dele.

Marcação dos exemplos desta seção:

```html
<div class="ds-toolbar ds-toolbar--plain" aria-label="Ações do código" data-demo="plain" role="toolbar"><button type="button" class="ds-icon-btn" aria-label="Copiar" data-ds-tooltip="Copiar" data-value="copy"><ds-icon name="copy"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Baixar" data-ds-tooltip="Baixar" data-value="download"><ds-icon name="download"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Copiar link" data-ds-tooltip="Copiar link" data-value="link"><ds-icon name="link"></ds-icon></button><div class="ds-toolbar__separator" role="separator" aria-orientation="vertical"></div><button type="button" class="ds-icon-btn" aria-label="Mais ações" data-ds-tooltip="Mais ações" data-value="more-horizontal"><ds-icon name="more-horizontal"></ds-icon></button></div>
```

## Estados

O botão apertado ganha o fundo de selecionado, que continua com o mouse em cima. Desativado fica de fora das setas.

Marcação dos exemplos desta seção:

```html
<div class="ds-toolbar" aria-label="Exemplo"><div class="ds-toolbar__group"><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Negrito" data-value="bold"><ds-icon name="bold"></ds-icon></button><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Itálico" data-value="italic"><ds-icon name="italic"></ds-icon></button><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Sublinhado" data-value="underline"><ds-icon name="underline"></ds-icon></button></div></div>

<div class="ds-toolbar" aria-label="Exemplo"><div class="ds-toolbar__group"><button type="button" class="ds-icon-btn" aria-pressed="true" aria-label="Negrito" data-value="bold"><ds-icon name="bold"></ds-icon></button><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Itálico" data-value="italic"><ds-icon name="italic"></ds-icon></button><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Sublinhado" data-value="underline"><ds-icon name="underline"></ds-icon></button></div></div>

<div class="ds-toolbar" aria-label="Exemplo"><div class="ds-toolbar__group"><button type="button" class="ds-icon-btn" aria-label="Desfazer" data-value="undo"><ds-icon name="undo"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Refazer" data-value="redo" disabled=""><ds-icon name="redo"></ds-icon></button></div></div>
```

## Código

Os botões são seus; a barra cuida do Tab, das setas e do `aria-pressed`.

```html
<div class="ds-toolbar" aria-label="Formatação">
  <div class="ds-toolbar__group">
    <button type="button" class="ds-icon-btn" aria-label="Negrito" aria-pressed="false">…</button>
    <button type="button" class="ds-icon-btn" aria-label="Itálico" aria-pressed="false">…</button>
  </div>
  <div class="ds-toolbar__separator"></div>
  <div class="ds-toolbar__group" data-exclusive>
    <button type="button" class="ds-icon-btn" aria-label="Alinhar à esquerda" aria-pressed="true">…</button>
    <button type="button" class="ds-icon-btn" aria-label="Centralizar" aria-pressed="false">…</button>
  </div>
</div>

<script type="module">
  import { createToolbar } from 'https://lumeui.dev/v/1.4/lume.js';
  createToolbar(document.querySelector('.ds-toolbar'), {
    onToggle: (button, pressed) => console.log(button.ariaLabel, pressed),
  });
</script>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Segue o padrão de toolbar da ARIA. Dê um nome à barra com aria-label.

- Uma parada do Tab — Tab entra na barra no último botão usado e sai dela no próximo Tab: quem navega pelo teclado não passa por dez botões.
- Teclado — ← → Home End — As setas andam e dão a volta; Home e End vão às pontas. Na vertical, as setas para cima e para baixo.
- Liga e desliga — Botão com aria-pressed diz “apertado” ou não; num grupo com data-exclusive, só um fica apertado.
- Nome de cada botão — Botão só de ícone precisa de aria-label; a dica (data-ds-tooltip) mostra o mesmo nome para quem usa o mouse.

## Tokens usados

Tudo o que a barra consome, além do botão de ícone.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Fundo da barra | #FFFFFF | #24221F |
| color.border.control (`--ds-color-border-control`) | Contorno da barra | #3E516633 | #FFFFFF21 |
| color.border.default (`--ds-color-border-default`) | Separador | #3E516633 | #FFFFFF1A |
| color.bg.selected (`--ds-color-bg-selected`) | Botão apertado | #3E516612 | #C0CAD61A |
| space.050 (`--ds-space-050`) | Respiro da barra e do separador | 4 px | 4 px |
| radius.md (`--ds-radius-md`) | Cantos da barra | 12 px | 12 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** agrupe pelo que fazem. Estilo com estilo, alinhamento com alinhamento. O separador mostra onde um grupo acaba.
- **Evite:** dois ou três botões soltos. Sem grupo nem teclado próprio, botões de ícone lado a lado bastam.
- **Dica:** Dica em todo ícone. Ícone de formatação parece óbvio até alguém não reconhecer. A dica custa pouco.
