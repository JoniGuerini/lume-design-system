# Controle segmentado

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/controle-segmentado

Poucas opções lado a lado, sempre visíveis, com uma escolhida. A troca vale na hora, como nos seletores de layout e de visão do calendário.

Em números: altura: 36 px · opções: 2 – 4 · tamanhos: 3 · papel ARIA: radiogroup.

## Exemplo

```html
<div class="ds-segmented" role="radiogroup" aria-label="Visão">
  <button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="true">Mês</button>
  <button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="false">Semana</button>
  <button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false">Dia</button>
</div>

<script type="module">
  import { createSegmented } from 'https://lumeui.dev/v/1.14/lume.js';
  createSegmented(document.querySelector('.ds-segmented'), {
    onChange: (value) => trocar(value),
  });
</script>
```

## Variantes

Com texto, ou só com ícones quando o sentido é conhecido. Ícone sozinho precisa de nome e tooltip.

Com texto `ds-segmented` — O mais claro, para até quatro opções curtas.

Com ícones `aria-label` — Compacto, com o nome no tooltip e para o leitor de tela.

Marcação dos exemplos desta seção:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Visão" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="true">Mês</button><button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="false">Semana</button><button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false">Dia</button>
</div>

<div class="ds-segmented" role="radiogroup" aria-label="Exibição" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="lista" aria-checked="true" aria-label="Lista" data-ds-tooltip="Lista"><ds-icon name="list"></ds-icon></button><button type="button" class="ds-segmented__item" role="radio" data-value="grade" aria-checked="false" aria-label="Grade" data-ds-tooltip="Grade"><ds-icon name="grid"></ds-icon></button>
</div>
```

## Tamanhos e largura

Médio é o padrão, na altura do Chip e das abas. O pequeno serve a barras densas; o grande alinha com campos e botões médios num formulário. Em painéis estreitos, a largura toda divide o espaço por igual.

Pequeno `ds-segmented--sm` — 32 px

Médio `ds-segmented` — 36 px, o padrão

Grande `ds-segmented--lg` — 40 px, ao lado de campos

Largura toda `ds-segmented--fill` — As opções dividem a largura do contêiner.

Marcação dos exemplos desta seção:

```html
<div class="ds-segmented ds-segmented--sm" role="radiogroup" aria-label="Visão" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="true">Mês</button><button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="false">Semana</button><button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false">Dia</button>
</div>

<div class="ds-segmented" role="radiogroup" aria-label="Visão" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="true">Mês</button><button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="false">Semana</button><button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false">Dia</button>
</div>

<div class="ds-segmented ds-segmented--lg" role="radiogroup" aria-label="Visão" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="true">Mês</button><button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="false">Semana</button><button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false">Dia</button>
</div>

<div class="ds-segmented ds-segmented--fill" role="radiogroup" aria-label="Visão" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="false">Mês</button><button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="true">Semana</button><button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false">Dia</button>
</div>
```

## Estados

A opção escolhida sobe com o fundo dos campos; as outras ficam apagadas.

Marcação dos exemplos desta seção:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Visão" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="true">Mês</button><button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="false">Semana</button><button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false">Dia</button>
</div>

<div class="ds-segmented" role="radiogroup" aria-label="Visão" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="false">Mês</button><button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="true">Semana</button><button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false">Dia</button>
</div>

<div class="ds-segmented" role="radiogroup" aria-label="Visão" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="true" disabled="">Mês</button><button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="false" disabled="">Semana</button><button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false" disabled="">Dia</button>
</div>
```

## Acessibilidade

Funciona como um grupo de botões de rádio.

- Um ponto no Tab — Tab — O Tab entra na opção escolhida e sai do grupo.
- Setas trocam — ← → — As setas passam de uma opção a outra, dando a volta, e a escolha vale na hora.
- Nome do grupo — O aria-label do grupo diz o que está sendo escolhido.
- Ícone com nome — Sem texto, cada opção precisa de aria-label.

## Tokens usados

Tudo o que o controle consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.sunken (`--ds-color-bg-sunken`) | Trilho | #E8EDF3 | #151412 |
| color.bg.field (`--ds-color-bg-field`) | Opção escolhida | #FFFFFF | #2C2A27 |
| color.border.default (`--ds-color-border-default`) | Contornos | #3E516633 | #FFFFFF1A |
| color.fg.default (`--ds-color-fg-default`) | Texto escolhido | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | Outras opções | #46586E | #CEC8C1 |
| radius.full (`--ds-radius-full`) | Cantos | 9999 px | 9999 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** de 2 a 4 opções. Trocar a visão do mesmo conteúdo: mês ou semana, lista ou grade.
- **Evite:** muitas opções. Com cinco ou mais, ou textos longos, use a Seleção.
- **Dica:** Abas ou segmentado?. Abas trocam de conteúdo; o segmentado troca a forma de ver o mesmo conteúdo.
