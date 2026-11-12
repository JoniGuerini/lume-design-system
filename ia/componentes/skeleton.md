# Skeleton

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/skeleton

Mostra a forma do conteúdo antes de ele chegar. A tela não pula quando os dados carregam, e a espera parece menor.

Em números: JavaScript: 0 · formas: 3 · pulso: 1,4 s · brilho: nenhum.

## Exemplo

```html
<div aria-busy="true" role="status" aria-label="Carregando">
  <div class="fc-skel-row">
  <span class="ds-skeleton ds-skeleton--circle">
  </span>
  <div class="fc-skel-lines">
  <span class="ds-skeleton ds-skeleton--text" style="--w:55%">
  </span>
  <span class="ds-skeleton ds-skeleton--text" style="--w:80%">
  </span>
  </div>
  </div>
</div>
```

## Variantes

Monte a forma com três peças: linha, círculo e bloco.

Pessoa `ds-skeleton--circle` — Avatar e duas linhas.

Cartão `ds-skeleton` — Um bloco e o texto embaixo.

Texto `ds-skeleton--text` — Larguras diferentes, como um parágrafo de verdade.

Marcação dos exemplos desta seção:

```html
<span class="ds-skeleton ds-skeleton--circle"></span>

<span class="ds-skeleton ds-skeleton--text"></span>

<span class="ds-skeleton"></span>
```

## Acessibilidade

As formas não dizem nada ao leitor de tela: quem avisa é o contêiner.

- Avise que carrega — No contêiner, `aria-busy="true"` e um nome. Quando os dados chegarem, tire o atributo.
- Sem foco — Formas não são interativas e ficam fora do Tab.
- Movimento reduzido — O pulso para, e a forma fica parada.

## Tokens usados

Tudo o que o skeleton consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.muted (`--ds-color-bg-muted`) | Formas | #DAE0E8 | #3D3B38 |
| radius.md (`--ds-radius-md`) | Bloco | 12 px | 12 px |
| radius.xs (`--ds-radius-xs`) | Linha | 6 px | 6 px |
| radius.full (`--ds-radius-full`) | Círculo | 9999 px | 9999 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** a forma real. Copie o tamanho do conteúdo final, para nada pular quando ele chegar.
- **Evite:** esperas longas. Se passa de 10 segundos, diga o que acontece: use a Barra de progresso.
- **Dica:** Não invente o que não vem. Se a lista pode vir vazia, passe logo ao Estado vazio ao terminar.
