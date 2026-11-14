# Stepper

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/stepper

Mostra as etapas de um fluxo, quantas faltam e onde a pessoa está. Bom para cadastros e configurações em partes.

Em números: orientações: 2 · estados: 3 · marcador: 28 px · atributo: aria-current.

## Exemplo

```html
<ol class="ds-stepper"></ol>

<script type="module">
  import { createStepper } from 'https://lumeui.dev/v/0.36/lume.js';
  createStepper(document.querySelector('.ds-stepper'), {
    steps: [{ label: 'Conta' }, { label: 'Perfil' }, { label: 'Equipe' }, { label: 'Pronto' }],
    current: 1,
    clickable: true,
  });
</script>
```

## Variantes

Na horizontal cabem poucas etapas com nomes curtos. Com descrições longas ou muitas etapas, use a vertical.

Horizontal `ds-stepper` — Só o nome de cada etapa. No celular, vira uma lista.

Vertical `ds-stepper--vertical` — Com espaço para uma descrição.

Marcação dos exemplos desta seção:

```html
<ol class="ds-stepper" data-demo="plain"><li class="ds-stepper__step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true"><ds-icon name="check"></ds-icon></span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Conta<span class="ds-visually-hidden"> (concluída)</span></span>
</span></div></li><li class="ds-stepper__step" aria-current="step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">2</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Perfil</span>
</span></div></li><li class="ds-stepper__step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">3</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Equipe</span>
</span></div></li></ol>

<ol class="ds-stepper ds-stepper--vertical" data-demo="vertical"><li class="ds-stepper__step"><button type="button" class="ds-stepper__content" data-step="0"><span class="ds-stepper__marker" aria-hidden="true"><ds-icon name="check"></ds-icon></span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Conta<span class="ds-visually-hidden"> (concluída)</span></span>
<span class="ds-stepper__description">E-mail e senha</span>
</span></button></li><li class="ds-stepper__step" aria-current="step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">2</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Perfil</span>
<span class="ds-stepper__description">Nome e foto</span>
</span></div></li><li class="ds-stepper__step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">3</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Equipe</span>
<span class="ds-stepper__description">Convites</span>
</span></div></li></ol>
```

## Estados

Cada etapa recebe `data-state`: feita, atual ou próxima. A diferença vem também do número e da marca, não só da cor.

Marcação dos exemplos desta seção:

```html
<ol class="ds-stepper" data-demo="states"><li class="ds-stepper__step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true"><ds-icon name="check"></ds-icon></span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Feita<span class="ds-visually-hidden"> (concluída)</span></span>
</span></div></li><li class="ds-stepper__step" aria-current="step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">2</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Atual</span>
</span></div></li><li class="ds-stepper__step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">3</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Próxima</span>
</span></div></li></ol>
```

## Código

O conteúdo de cada etapa é seu; o stepper só mostra o caminho.

```html
import { createStepper } from 'https://lumeui.dev/v/0.36/lume.js';

const stepper = createStepper(document.querySelector('.ds-stepper'), {
  steps: [{ label: 'Conta' }, { label: 'Perfil' }, { label: 'Pronto' }],
  clickable: true,
  onChange: (index) => mostrar(index),
});

stepper.next();
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

É uma lista ordenada comum, então o leitor de tela já diz quantas etapas existem.

- Etapa atual — Marcada com aria-current="step".
- Etapas feitas — A marca é desenho; o texto “concluída” é lido junto com o nome.
- Voltar pelo teclado — Tab Enter — Com etapas clicáveis, as já feitas são botões no Tab. As próximas não recebem foco.
- Leve o foco — Ao trocar de etapa, mova o foco para o título da nova etapa.

## Tokens usados

Tudo o que o stepper consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.brand.solid (`--ds-color-brand-solid`) | Marcador feito e atual | #3E5166 | #C0CAD6 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Número e marca | #F8FAFD | #1D2734 |
| color.border.field (`--ds-color-border-field`) | Marcador das próximas | #3E5166AD | #FFFFFF61 |
| color.border.default (`--ds-color-border-default`) | Linha entre etapas | #3E516633 | #FFFFFF1A |
| color.fg.muted (`--ds-color-fg-muted`) | Nome das próximas | #46586E | #CEC8C1 |
| radius.full (`--ds-radius-full`) | Marcador | 9999 px | 9999 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** de 3 a 5 etapas. Etapas com começo e fim claros, em ordem.
- **Evite:** navegação livre. Se a pessoa pode ir a qualquer parte em qualquer ordem, use Abas.
- **Dica:** Guarde o que foi preenchido. Voltar uma etapa nunca deve apagar o que a pessoa já fez.
