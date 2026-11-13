# Voltar ao topo

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/voltar-ao-topo

Em páginas longas, leva de volta ao começo com um clique. Fica escondido até a pessoa ter rolado bastante.

Em números: tamanho: 40 px · aparece depois de: 1 tela · âncora: contêiner · função: 1.

## Exemplo

```html
import { createBackToTop } from 'https://lumeui.dev/v/0.27/lume.js';

createBackToTop(document.querySelector('.painel__rolagem'));
```

## Estados

Hover e foco podem ser forçados com `data-state`. O botão só aparece com `data-visible`.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-back-to-top" data-visible="" aria-label="Voltar ao topo"><ds-icon name="arrow-up"></ds-icon></button>
```

## Código

O botão entra em `parent`, que precisa ter `position`.

```html
import { createBackToTop } from 'https://lumeui.dev/v/0.27/lume.js';

const back = createBackToTop(document.querySelector('.painel__rolagem'), {
  parent: document.querySelector('.painel'),
  threshold: 600, // opcional; o padrão é uma tela da área
});

back.destroy();
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Pensado para quem não usa mouse, e para quem prefere menos movimento.

- Foco no conteúdo — Tab Enter — Ao clicar, o foco vai para o começo do conteúdo. O próximo Tab continua de lá, e não do meio da página.
- Escondido de verdade — Enquanto não aparece, o botão fica fora do Tab e do leitor de tela.
- Menos movimento — Quem pediu menos movimento no sistema volta ao topo sem animação.
- Nome — O ícone tem nome nos três idiomas, e o mesmo texto aparece no tooltip.

## Tokens usados

Tudo o que o botão consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| size.control.md (`--ds-size-control-md`) | Tamanho | 40 px | 40 px |
| color.bg.raised (`--ds-color-bg-raised`) | Fundo | #FFFFFF | #2C2A27 |
| color.border.default (`--ds-color-border-default`) | Contorno | #3E516633 | #FFFFFF1A |
| color.border.strong (`--ds-color-border-strong`) | Contorno no hover | #3E51664D | #FFFFFF29 |
| color.fg.muted (`--ds-color-fg-muted`) | Ícone | #46586E | #CEC8C1 |
| radius.full (`--ds-radius-full`) | Cantos | 9999 px | 9999 px |
| shadow.md (`--ds-shadow-md`) | Separa do conteúdo | 0 2px 4px -1px rgb(45 58 74 / 0.06), 0 8px 20px -4px rgb(45 58 74 / 0.1) | 0 2px 4px -1px rgb(0 0 0 / 0.28), 0 8px 20px -4px rgb(0 0 0 / 0.36) |
| duration.base (`--ds-duration-base`) | Aparecer e sumir | 200ms | 200ms |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** páginas bem longas. Documentação, listas e históricos, em que voltar rolando dá trabalho.
- **Evite:** páginas curtas. Se a página cabe em duas telas, o botão só ocupa espaço.
- **Dica:** Um por área. Mais de uma área rolando na tela? Dê o botão só à principal.
