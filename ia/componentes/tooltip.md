# Tooltip

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/tooltip

Uma dica curta que aparece no hover ou no foco. Nomeia ícones e mostra atalhos — nunca guarda informação que a pessoa precisa para seguir.

Em números: posições: 4 · espera: 450 ms · largura máxima: 240 px · JavaScript: 0 linhas.

## Exemplo

```html
<button type="button" class="ds-icon-btn" aria-label="Buscar"
  data-ds-tooltip="Buscar"
  data-ds-tooltip-kbd="Ctrl K">
  <ds-icon name="search"></ds-icon>
</button>
```

## Posições

Em cima é o padrão. Escolha outra quando a dica cobriria algo importante ou quando o gatilho está numa borda — perto do limite da tela, ela se ajusta sozinha.

Passe o mouse

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Dica em cima" data-ds-tooltip="Em cima" data-ds-tooltip-placement="top"><ds-icon name="arrow-up"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Dica à direita" data-ds-tooltip="À direita" data-ds-tooltip-placement="right"><ds-icon name="arrow-right"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Dica embaixo" data-ds-tooltip="Embaixo" data-ds-tooltip-placement="bottom"><ds-icon name="chevron-down"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Dica à esquerda" data-ds-tooltip="À esquerda" data-ds-tooltip-placement="left"><ds-icon name="arrow-left"></ds-icon></button>
```

## Com atalho

O melhor lugar para ensinar um atalho é a dica da ação. Use `data-ds-tooltip-kbd`.

Buscar `Ctrl K`

Recolher menu `Ctrl B`

Fechar `Esc`

Marcação dos exemplos desta seção:

```html
<span class="ds-tooltip" data-open="">Buscar<kbd class="ds-kbd">Ctrl K</kbd></span>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Buscar" data-ds-tooltip="Buscar" data-ds-tooltip-placement="top" data-ds-tooltip-kbd="Ctrl K"><ds-icon name="search"></ds-icon></button>

<span class="ds-tooltip" data-open="">Recolher menu<kbd class="ds-kbd">Ctrl B</kbd></span>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Recolher menu" data-ds-tooltip="Recolher menu" data-ds-tooltip-placement="top" data-ds-tooltip-kbd="Ctrl B"><ds-icon name="panel-left"></ds-icon></button>

<span class="ds-tooltip" data-open="">Fechar<kbd class="ds-kbd">Esc</kbd></span>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Fechar" data-ds-tooltip="Fechar" data-ds-tooltip-placement="top" data-ds-tooltip-kbd="Esc"><ds-icon name="x"></ds-icon></button>
```

## Comportamento

Uma espera curta evita dicas piscando quando o ponteiro só passa. Depois da primeira, as próximas aparecem na hora.

Experimente: pare no primeiro e deslize para os outros.

- No foco por teclado aparece na hora, sem espera.
- Some ao sair, clicar, rolar a página ou apertar Esc.
- No toque não aparece — por isso nada essencial pode depender dela.
- Um tooltip por vez: há um só elemento na página, reposicionado a cada gatilho.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn" aria-label="Início" data-ds-tooltip="Início" data-ds-tooltip-placement="bottom"><ds-icon name="home"></ds-icon></button>

<button type="button" class="ds-icon-btn" aria-label="Buscar" data-ds-tooltip="Buscar" data-ds-tooltip-placement="bottom"><ds-icon name="search"></ds-icon></button>

<button type="button" class="ds-icon-btn" aria-label="Notificações" data-ds-tooltip="Notificações" data-ds-tooltip-placement="bottom"><ds-icon name="bell"></ds-icon></button>

<button type="button" class="ds-icon-btn" aria-label="Calendário" data-ds-tooltip="Calendário" data-ds-tooltip-placement="bottom"><ds-icon name="calendar"></ds-icon></button>

<button type="button" class="ds-icon-btn" aria-label="Configurações" data-ds-tooltip="Configurações" data-ds-tooltip-placement="bottom"><ds-icon name="settings"></ds-icon></button>

<button type="button" class="ds-icon-btn" aria-label="Sua conta" data-ds-tooltip="Sua conta" data-ds-tooltip-placement="bottom"><ds-icon name="user-circle"></ds-icon></button>
```

## Quando não usar

Se a pessoa precisa da informação para continuar, ela não pode ficar escondida.

Informação essencial — Regras de senha, prazos, preços: escreva na tela, perto do campo.

Conteúdo interativo — Links ou botões dentro da dica não são alcançáveis. Use um menu ou um painel.

Texto longo — Mais de uma linha curta vira leitura. Até ~240 px; passou disso, é texto da página.

Elemento desativado — Botão desativado não recebe foco nem hover — a dica nunca aparece. Explique o motivo ao lado.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>
```

## Acessibilidade

A dica complementa — o nome acessível vem sempre do próprio elemento.

- Nome no elemento — Botão de ícone leva `aria-label` com o mesmo texto da dica. O tooltip em si é `aria-hidden`, para não ser lido duas vezes.
- Teclado — Tab Esc — Aparece no foco visível e some com Esc, sem mover o foco.
- Persistente — Fica visível enquanto o ponteiro está no gatilho ou ele tem foco.
- Termos no texto — Um termo com dica precisa de `tabindex="0"` para ser alcançável pelo teclado.
- Contraste — Texto padrão sobre a superfície elevada: acima de 4,5:1 nos dois temas.
- Desligar por região — Use `data-ds-tooltips="off"` num ancestral quando o rótulo já está visível — como na sidebar expandida.

## Tokens usados

Uma superfície pequena, elevada e acima de tudo.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fundo | #FFFFFF | #2C2A27 |
| color.border.default (`--ds-color-border-default`) | Borda | #3E516633 | #FFFFFF1A |
| color.fg.default (`--ds-color-fg-default`) | Texto | #2B3847 | #F3EDE5 |
| shadow.lg (`--ds-shadow-lg`) | Sombra | 0 4px 8px -2px rgb(45 58 74 / 0.07), 0 16px 36px -8px rgb(45 58 74 / 0.14) | 0 4px 8px -2px rgb(0 0 0 / 0.3), 0 16px 36px -8px rgb(0 0 0 / 0.5) |
| radius.sm (`--ds-radius-sm`) | Raio | 8 px | 8 px |
| text.label-sm (`--ds-text-label-sm`) | Texto | 13/18 · medium | 13/18 · medium |
| duration.fast (`--ds-duration-fast`) | Entrada e saída | 120ms | 120ms |
| z.tooltip (`--ds-z-tooltip`) | Camada (a mais alta) | 1600 | 1600 |

## Uso

Curta, útil e só quando o elemento não fala por si.

- **Faça:** nomeie ícones. Duas ou três palavras dizendo o que o botão faz.
- **Evite:** repetir o rótulo. Se o texto já está visível, a dica só atrapalha.
- **Dica:** Mostre o atalho. Num botão com rótulo, a dica vale a pena quando ensina algo novo — como o atalho.
