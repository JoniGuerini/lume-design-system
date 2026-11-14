# Link

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/link

Leva a outra página. No meio do texto, sublinhado; solto, no fim de um card ou de uma lista, com uma seta. Quando sai do site, o ícone de link externo avisa antes do clique.

Em números: JavaScript: 0 · formas: 2 · tons: 2 · base: a.

## Exemplo

```html
<a class="ds-link" href="/novidades">Ver todas as versões</a>
```

## Variantes

A forma vem de onde o link está, não da importância dele.

Os componentes usam só tokens semânticos. Veja as cores e a tipografia para entender os papéis.

No texto `ds-link` — Sublinhado, para se destacar das palavras ao redor sem depender só da cor.

Novidades

Divisor, link e progresso circular chegaram na 0.34.

Solto `ds-link--standalone` — No fim de um card ou de uma lista. A seta anda um pouco com o mouse; o sublinhado aparece junto.

Os títulos e o texto do Lume usam a Geist — (abre em nova aba).

Externo `target="_blank"` — O ícone mostra que sai do site, e o texto escondido avisa o leitor de tela que abre em nova aba.

Atualizado em 14 nov · ver histórico

Apagado `ds-link--muted` — Em rodapés e metadados, onde o link não pode competir com o conteúdo.

Marcação dos exemplos desta seção:

```html
<a class="ds-link ds-link--standalone" href="#/novidades">Ver todas as versões<ds-icon name="arrow-right"></ds-icon></a>
```

## Estados

No hover a cor escurece e o sublinhado fica inteiro; o foco usa o anel de todo o Lume.

cores

cores

cores

Marcação dos exemplos desta seção:

```html
<a class="ds-link ds-link--standalone" href="#/novidades">Ver todas as versões<ds-icon name="arrow-right"></ds-icon></a>

<a class="ds-link ds-link--standalone" aria-disabled="true">Ver todas as versões<ds-icon name="arrow-right"></ds-icon></a>
```

## Código

O ícone vem da biblioteca do Lume. Para o externo, o texto escondido também.

```html
<a class="ds-link" href="/cores">cores</a>

<a class="ds-link ds-link--standalone" href="/novidades">
  Ver todas as versões
  <ds-icon name="arrow-right" class="ds-link__icon" data-arrow></ds-icon>
</a>

<a class="ds-link" href="https://vercel.com/font" target="_blank" rel="noopener">
  Geist<ds-icon name="external-link" class="ds-link__icon"></ds-icon>
  <span class="ds-visually-hidden">(abre em nova aba)</span>
</a>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Um link diz para onde vai, mesmo fora do texto.

- Texto que diz o destino — “Ver todas as versões”, não “clique aqui”: leitores de tela listam os links soltos da página.
- Não só cor — No meio do texto, o sublinhado fica sempre: a cor do link tem 4,5:1 com o fundo, mas não com o texto ao lado.
- Nova aba avisada — Com `target="_blank"`, o ícone e o texto escondido avisam antes. Use `rel="noopener"`.
- Teclado — Tab Enter — Tab chega ao link e Enter abre. O ícone tem aria-hidden.

## Tokens usados

Tudo o que o link consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.fg.link (`--ds-color-fg-link`) | Texto | #3E5166 | #DAE0E8 |
| color.fg.link-hover (`--ds-color-fg-link-hover`) | Texto com o mouse | #232F3D | #EEF2F6 |
| color.fg.muted (`--ds-color-fg-muted`) | Tom apagado | #46586E | #CEC8C1 |
| color.fg.disabled (`--ds-color-fg-disabled`) | Desativado | #93A0B0 | #605D59 |
| color.border.focus (`--ds-color-border-focus`) | Foco do teclado | #53657A | #C0CAD6 |
| text.label-md (`--ds-text-label-md`) | Link solto | 14/20 · medium | 14/20 · medium |
| duration.fast (`--ds-duration-fast`) | Troca de cor e seta | 120ms | 120ms |

## Uso

Link ou botão?

- **Faça:** link para ir. Se muda o endereço da página, é link: dá para abrir em outra aba e copiar.
- **Evite:** link que faz uma ação. Salvar, excluir e abrir um modal são botões. Para a ação discreta, use a Ação inline.
- **Dica:** Externo só quando sai. Páginas do mesmo site abrem na mesma aba e sem ícone.
