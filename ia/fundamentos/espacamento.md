# Espaçamento

Seção do Lume: Fundamentos. Página: https://lumeui.dev/#/fundamentos/espacamento

Uma escala de 4 em 4 px que dá ritmo à interface. Espaço pequeno junta, espaço grande separa — sempre com um token.

Em números: passos: 15 · base: 4 px · space-100: 8 px · unidade: rem.

## Escala

Cada passo é um múltiplo de 4 px, em rem — acompanha o zoom do navegador. Clique num passo para copiar a variável.

Por que 100 = 8 px? O nome é a fração de 8 px vezes 100. Assim cabem passos novos no meio (025, 075, 150…) sem renomear nada.

```html
gap: var(--ds-space-150);      /* 12 px */
padding: var(--ds-space-300);  /* 24 px */
```

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="8.5" y="8.5" width="12" height="12" rx="2"></rect><path d="M15.5 8.5v-3a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"></path></svg>
```

## Na prática

Um componente usa poucos tokens, cada um com um papel. Troque a densidade para ver a escala trabalhando junta.

Revisei o roteiro de lançamento. Ajustei a abertura e deixei duas opções de chamada para você escolher. — 3 comentários · 1 arquivo

Tokens usados — Padding — Respiro interno do card — space-300 — 24 px — Gap — Entre itens lado a lado — space-150 — 12 px — Pilha — Entre linhas do mesmo grupo — space-100 — 8 px — Entre grupos — Separa blocos diferentes — space-300 — 24 px

Marcação dos exemplos desta seção:

```html
<span class="ds-btn ds-btn--primary ">Aprovar</span>

<span class="ds-btn ds-btn--secondary ">Comentar</span>
```

## Ritmo

Proximidade agrupa. Use espaço pequeno dentro de um grupo e um salto claro entre grupos — o olho entende a estrutura antes de ler.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m9 9 6 6M15 9l-6 6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m8.5 12 2.5 2.5 4.5-5"></path></svg>
```

## Uso

Poucas regras, aplicadas sempre.

- **Faça:** um token por papel. Padding, gap e pilha vêm da escala. Mudar a densidade vira trocar três tokens.
- **Evite:** números mágicos. Valores fora da escala parecem detalhe, mas somam desalinhamentos pela tela toda.
- **Dica:** Dica: dobre para separar. Se dois blocos precisam parecer separados, o espaço entre eles deve ser pelo menos o dobro do espaço interno.
