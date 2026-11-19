# Divisor

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/divisor

Uma linha fina que separa blocos sem chamar atenção. Na horizontal entre grupos de conteúdo, na vertical entre itens de uma linha e, quando ajuda, com um rótulo no meio.

Em números: JavaScript: 0 · direções: 2 · espessura: 1 px · base: hr.

## Exemplo

```html
<hr class="ds-divider">
```

## Variantes

A linha é sempre a mesma; muda o que ela separa.

Cores

Paletas, papéis e contraste medido nos dois temas.

Tipografia

Geist Serif nos títulos, Geist Sans no texto.

Horizontal `ds-divider` — Entre grupos de um card ou de uma lista, quando o espaço sozinho não basta.

Vertical `ds-divider--vertical` — Entre itens de uma linha: metadados, ações de uma barra. Ocupa a altura da linha.

0.34 Divisor, link e progresso circular

0.33 Avaliação e barra de ferramentas

0.32 Painéis redimensionáveis

Com rótulo no começo `ds-divider--label · --start` — Abre um grupo dentro de uma lista, como um título pequeno.

Carregar lumeui.dev/v/1.14/lume.css

Baixar lume-1.14.zip

Com rótulo no meio `ds-divider--label` — Entre duas alternativas. Uma palavra curta basta.

Esmaecido `ds-divider--fade` — Some nas pontas. É o divisor da sidebar, entre a navegação e o rodapé.

Marcação dos exemplos desta seção:

```html
<hr class="ds-divider">

<span class="ds-divider ds-divider--vertical" role="separator" aria-orientation="vertical"></span>

<div class="ds-divider ds-divider--label ds-divider--start"><span>Versões anteriores</span></div>

<div class="ds-divider ds-divider--label"><span>ou</span></div>

<hr class="ds-divider ds-divider--fade">
```

## Código

Escolha o elemento pelo que ele significa: hr separa, o rótulo é texto.

```html
<!-- horizontal -->
<hr class="ds-divider">

<!-- vertical, dentro de um flex -->
<span class="ds-divider ds-divider--vertical" role="separator" aria-orientation="vertical"></span>

<!-- com rótulo -->
<div class="ds-divider ds-divider--label"><span>ou</span></div>
<div class="ds-divider ds-divider--label ds-divider--start"><span>Versões anteriores</span></div>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Separador é estrutura: só anuncie o que muda a leitura.

- Horizontal — O `hr` já é role="separator". Use-o quando a divisão faz sentido também para quem ouve a página.
- Vertical — Leva role="separator" e aria-orientation="vertical". Se for só enfeite entre metadados, troque por aria-hidden="true".
- Com rótulo — É um div comum: o leitor de tela lê o texto (“ou”, “Versões anteriores”) e as linhas ficam de fora.
- Contraste — A linha é decorativa e fica abaixo de 3:1 de propósito. O rótulo usa texto apagado com 4,5:1.

## Tokens usados

Tudo o que o divisor consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.border.subtle (`--ds-color-border-subtle`) | Linha | #3E516624 | #FFFFFF0F |
| gradient.divider (`--ds-gradient-divider`) | Linha esmaecida | linear-gradient(90deg, var(--ds-color-border-strong) 0%, transparent 100%) | linear-gradient(90deg, var(--ds-color-border-strong) 0%, transparent 100%) |
| color.fg.muted (`--ds-color-fg-muted`) | Rótulo | #46586E | #CEC8C1 |
| text.label-sm (`--ds-text-label-sm`) | Rótulo | 13/18 · medium | 13/18 · medium |
| space.150 (`--ds-space-150`) | Espaço entre o rótulo e as linhas | 12 px | 12 px |

## Uso

Menos divisores, mais espaço.

- **Faça:** separe o que é diferente. Um divisor entre dois assuntos ajuda; entre itens iguais de uma lista, o espaço já basta.
- **Evite:** divisor entre todo par. Linhas demais viram grade e pesam a tela. Para linhas de dados, use a Tabela.
- **Dica:** Rótulo curto. Uma ou duas palavras. Se o rótulo precisa de mais, é um título de seção.
