# Botão dividido

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/botao-dividido

A ação mais comum e, colada nela, a seta com as alternativas. Um clique resolve o caso de sempre; a seta guarda os outros sem ocupar a barra.

Em números: partes: 2 · variantes: 4 · tamanhos: 3 · menu: createMenu.

## Exemplo

```html
<div class="ds-split-button">
  <button type="button" class="ds-btn ds-btn--primary" id="nova">
    <ds-icon name="plus"></ds-icon>
    Nova sessão
  </button>
  <button type="button" class="ds-btn ds-btn--primary ds-split-button__menu" id="nova-mais" aria-label="Mais opções">
    <ds-icon name="chevron-down"></ds-icon>
  </button>
</div>

<script type="module">
  import { createMenu } from 'https://lumeui.dev/v/1.12/lume.js';
  createMenu(document.querySelector('#nova-mais'), {
    mode: 'action',
    label: 'Mais opções',
    hideLabel: true,
    options: [
      { value: 'recorrente', label: 'Sessão recorrente', icon: 'refresh' },
      { value: 'bloqueio', label: 'Bloquear horário', icon: 'lock' },
      { type: 'separator' },
      { value: 'importar', label: 'Importar agenda', icon: 'upload' },
    ],
    onChange: (value) => …,
  });
</script>
```

## Variantes

As duas metades levam a mesma variante e o mesmo tamanho. Nas preenchidas, um fio da cor do fundo separa as duas; nas de contorno, o próprio contorno. Ghost não entra: sem contorno, as duas metades não se leem como uma peça.

Primário `ds-btn--primary` — A ação principal da tela, com as variações dela.

Secundário `ds-btn--secondary` — Numa barra, ao lado de uma primária.

Sutil `ds-btn--subtle` — Apoio com um pouco de presença.

Perigo `ds-btn--danger` — Excluir e as formas de excluir. Sempre com confirmação.

Marcação dos exemplos desta seção:

```html
<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Nova sessão</button>
<button type="button" class="ds-btn ds-btn--primary ds-split-button__menu" aria-label="Mais opções" data-split-menu="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-20"><ds-icon name="chevron-down"></ds-icon></button>
</div>

<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--secondary"><ds-icon name="download"></ds-icon>Exportar</button>
<button type="button" class="ds-btn ds-btn--secondary ds-split-button__menu" aria-label="Mais opções" data-split-menu="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-21"><ds-icon name="chevron-down"></ds-icon></button>
</div>

<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--subtle"><ds-icon name="copy"></ds-icon>Duplicar</button>
<button type="button" class="ds-btn ds-btn--subtle ds-split-button__menu" aria-label="Mais opções" data-split-menu="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-22"><ds-icon name="chevron-down"></ds-icon></button>
</div>

<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--danger"><ds-icon name="trash"></ds-icon>Excluir</button>
<button type="button" class="ds-btn ds-btn--danger ds-split-button__menu" aria-label="Mais opções" data-split-menu="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-23"><ds-icon name="chevron-down"></ds-icon></button>
</div>
```

## Estados

Cada metade reage sozinha. Com o menu aberto, a seta gira.

Marcação dos exemplos desta seção:

```html
<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Nova sessão</button>
<button type="button" class="ds-btn ds-btn--primary ds-split-button__menu" aria-label="Mais opções" data-split-menu=""><ds-icon name="chevron-down"></ds-icon></button>
</div>

<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--primary" disabled=""><ds-icon name="plus"></ds-icon>Nova sessão</button>
<button type="button" class="ds-btn ds-btn--primary ds-split-button__menu" aria-label="Mais opções" data-split-menu="" disabled=""><ds-icon name="chevron-down"></ds-icon></button>
</div>
```

## Código

Só CSS mais o Menu: a seta é um `createMenu` no modo ação, com o nome só para o leitor de tela.

```html
<div class="ds-split-button">
  <button type="button" class="ds-btn ds-btn--primary" id="nova">
    <ds-icon name="plus"></ds-icon>
    Nova sessão
  </button>
  <button type="button" class="ds-btn ds-btn--primary ds-split-button__menu" id="nova-mais" aria-label="Mais opções">
    <ds-icon name="chevron-down"></ds-icon>
  </button>
</div>

<script type="module">
  import { createMenu } from 'https://lumeui.dev/v/1.12/lume.js';
  createMenu(document.querySelector('#nova-mais'), {
    mode: 'action',
    label: 'Mais opções',
    hideLabel: true,
    options: [
      { value: 'recorrente', label: 'Sessão recorrente', icon: 'refresh' },
      { value: 'bloqueio', label: 'Bloquear horário', icon: 'lock' },
      { type: 'separator' },
      { value: 'importar', label: 'Importar agenda', icon: 'upload' },
    ],
    onChange: (value) => …,
  });
</script>

// React
<SplitButton
  label="Nova sessão"
  icon="plus"
  onClick={novaSessao}
  options={opcoes}
  onSelect={(value) => …}
/>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Dois botões de verdade, cada um no Tab.

- Dois pontos no Tab — Tab — O primeiro faz a ação; o segundo abre o menu. Nada fica escondido do teclado.
- A seta tem nome — ↓ Enter — “Mais opções”, com `aria-haspopup="menu"` e `aria-expanded` que o Menu liga.
- A principal fica fora do menu — Repetir a ação principal no menu faz o leitor de tela ouvir a mesma coisa duas vezes.

## Tokens usados

Os mesmos do Botão.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| size.control.md (`--ds-size-control-md`) | Altura e largura da seta | 40 px | 40 px |
| duration.base (`--ds-duration-base`) | Giro da seta | 200ms | 200ms |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** uma ação e suas variações. “Nova sessão” e “Sessão recorrente”: o mesmo verbo, jeitos diferentes.
- **Evite:** ações sem relação. Se o menu junta coisas que não têm a ver com a principal, use um botão de ícone com Menu.
- **Dica:** Uma por tela. Como o primário, o botão dividido chama atenção. Mais de um vira ruído.
