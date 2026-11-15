# Lista arrastável

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/lista-arrastavel

Mudar a ordem de uma lista arrastando, com o mouse, o toque ou o teclado. O item deixa um encaixe vazio onde vai cair, e cada passo é anunciado para o leitor de tela.

Em números: formas de arrastar: 3 · direções: 2 · atalhos: 7 · dependências: 0.

## Exemplo

```html
<ul class="ds-sortable" role="list" aria-label="Ordem dos fundamentos na sidebar">
  <li class="ds-sortable__item" data-id="cores">
    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>
    <span class="ds-sortable__label">Cores</span>
  </li>
  <li class="ds-sortable__item" data-id="tipografia">
    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>
    <span class="ds-sortable__label">Tipografia</span>
  </li>
  <li class="ds-sortable__item" data-id="icones">
    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>
    <span class="ds-sortable__label">Ícones</span>
  </li>
</ul>

<script type="module">
  import { createSortable } from 'https://lumeui.dev/v/1.1/lume.js';
  createSortable(document.querySelector('.ds-sortable'), { onChange: (e) => console.log(e.id, e.newIndex) });
</script>
```

## Variantes

Caixas soltas, linhas dentro de um card ou itens lado a lado.

Com alça `ds-sortable__handle` — O padrão. Só a alça arrasta: o resto do item continua clicável e a página rola normalmente no toque.

Em linhas `ds-sortable--plain` — Dentro de um card, sem caixa em cada item: um traço separa as linhas.

Lado a lado `aria-orientation="horizontal"`

Sem alça, o item inteiro arrasta e recebe o foco. As setas `←` `→` movem. No toque, segure um instante antes de arrastar.

Marcação dos exemplos desta seção:

```html
<ul class="ds-sortable" role="list" aria-label="Ordem dos fundamentos na sidebar" data-sortable=""><li class="ds-sortable__item" data-id="cores"><button type="button" class="ds-sortable__handle" data-auto-label="" aria-label="Mover “Cores”" aria-describedby="ds-sortable-help" aria-pressed="false"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Cores</span><span class="ds-sortable__meta">15 paletas</span></li><li class="ds-sortable__item" data-id="tipografia"><button type="button" class="ds-sortable__handle" data-auto-label="" aria-label="Mover “Tipografia”" aria-describedby="ds-sortable-help" aria-pressed="false"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Tipografia</span><span class="ds-sortable__meta">Geist</span></li><li class="ds-sortable__item" data-id="icones"><button type="button" class="ds-sortable__handle" data-auto-label="" aria-label="Mover “Ícones”" aria-describedby="ds-sortable-help" aria-pressed="false"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Ícones</span><span class="ds-sortable__meta">154 ícones</span></li><li class="ds-sortable__item" data-id="espacamento"><button type="button" class="ds-sortable__handle" data-auto-label="" aria-label="Mover “Espaçamento”" aria-describedby="ds-sortable-help" aria-pressed="false"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Espaçamento</span><span class="ds-sortable__meta">base 8</span></li></ul>

<span class="ds-visually-hidden" aria-live="assertive"></span>

<ul class="ds-sortable" role="list" aria-orientation="horizontal" aria-label="Ordem das séries do gráfico" data-sortable="">
<li class="ds-sortable__item" data-id="serie-1" data-label="Pêssego" aria-describedby="ds-sortable-help"><span></span>Pêssego</li><li class="ds-sortable__item" data-id="serie-2" data-label="Azul" aria-describedby="ds-sortable-help"><span></span>Azul</li><li class="ds-sortable__item" data-id="serie-3" data-label="Rosa" aria-describedby="ds-sortable-help"><span></span>Rosa</li><li class="ds-sortable__item" data-id="serie-4" data-label="Âmbar" aria-describedby="ds-sortable-help"><span></span>Âmbar</li><li class="ds-sortable__item" data-id="serie-5" data-label="Verde-água" aria-describedby="ds-sortable-help"><span></span>Verde-água</li>
</ul>
```

## Estados

Enquanto arrasta, o item vira um encaixe tracejado e uma cópia elevada segue o ponteiro. Pego pelo teclado, ele ganha o contorno da marca.

Marcação dos exemplos desta seção:

```html
<ul class="ds-sortable" role="list"><li class="ds-sortable__item" data-id="cores"><button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Cores</span><span class="ds-sortable__meta">15 paletas</span></li></ul>

<ul class="ds-sortable" role="list"><li class="ds-sortable__item"><button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Cores</span><span class="ds-sortable__meta">15 paletas</span></li></ul>

<ul class="ds-sortable" role="list"><li class="ds-sortable__item" data-id="cores" data-grabbed=""><button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Cores</span><span class="ds-sortable__meta">15 paletas</span></li></ul>

<ul class="ds-sortable" role="list"><li class="ds-sortable__item" data-id="cores" data-ghost=""><button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Cores</span><span class="ds-sortable__meta">15 paletas</span></li></ul>

<ul class="ds-sortable" role="list"><li class="ds-sortable__item ds-sortable__item--drag"><button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Cores</span><span class="ds-sortable__meta">15 paletas</span></li></ul>
```

## Código

O `data-id` de cada item é o que `toArray()` devolve e o que você salva.

```html
<ul class="ds-sortable" role="list" aria-label="Ordem dos fundamentos na sidebar">
  <li class="ds-sortable__item" data-id="cores">
    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>
    <span class="ds-sortable__label">Cores</span>
  </li>
  <li class="ds-sortable__item" data-id="tipografia">
    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>
    <span class="ds-sortable__label">Tipografia</span>
  </li>
</ul>

<script type="module">
  import { createSortable } from 'https://lumeui.dev/v/1.1/lume.js';

  const sortable = createSortable(document.querySelector('.ds-sortable'), {
    onChange: () => salvar(sortable.toArray()), // ['tipografia', 'cores']
  });
</script>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Arrastar não pode ser o único jeito: tudo o que o mouse faz, o teclado também faz.

- Pegar e soltar — Espaço Enter — A alça é um botão com o nome “Mover …”. Espaço ou Enter pega; de novo, solta. Sair com Tab também solta.
- Mover — ↑ ↓ Home End — As setas andam uma posição; Home e End vão às pontas. Numa lista lado a lado, as setas são as laterais.
- Desfazer — Esc — Esc devolve o item para onde estava, também no meio de um arrasto com o mouse.
- Anúncios — Cada passo é dito numa região viva: ““Cores” pego. Posição 1 de 5.”, depois a nova posição, e onde caiu.
- Instruções — A alça descreve como usar: “Espaço para pegar e soltar. Setas para mover, Esc para desfazer.”
- Movimento reduzido — Os vizinhos trocam de lugar sem deslizar e a cópia não inclina.

## Tokens usados

Superfície, encaixe e a cópia elevada.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Fundo do item | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno do item | #3E516624 | #FFFFFF0F |
| color.bg.muted (`--ds-color-bg-muted`) | Fundo do encaixe | #DAE0E8 | #3D3B38 |
| color.border.strong (`--ds-color-border-strong`) | Contorno tracejado do encaixe | #3E51664D | #FFFFFF29 |
| color.bg.raised (`--ds-color-bg-raised`) | Cópia que segue o ponteiro | #FFFFFF | #2C2A27 |
| shadow.lg (`--ds-shadow-lg`) | Elevação da cópia | 0 4px 8px -2px rgb(45 58 74 / 0.07), 0 16px 36px -8px rgb(45 58 74 / 0.14) | 0 4px 8px -2px rgb(0 0 0 / 0.3), 0 16px 36px -8px rgb(0 0 0 / 0.5) |
| color.brand.indicator (`--ds-color-brand-indicator`) | Item pego pelo teclado | #C97B63 | #DE9680 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Alça | #5C6C7F | #9C9792 |

## Uso

Quando a ordem é da pessoa.

- **Faça:** ordem que a pessoa escolhe. Prioridades, a ordem de um menu, as séries de um gráfico. A ordem salva é a que ela deixou.
- **Evite:** ordem que tem regra. Data, nome, valor: isso é ordenar a Tabela. Arrastar não deve brigar com uma ordem automática.
- **Dica:** Coisas que mudam de grupo. Listas com o mesmo group trocam itens. Para colunas de cartões, use o Kanban.
