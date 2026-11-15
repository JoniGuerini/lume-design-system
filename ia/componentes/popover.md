# Popover

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/popover

Conteúdo que abre ao clicar, preso ao gatilho, sem bloquear a tela. Fica entre o Tooltip, que só dá uma dica, e o Modal, que interrompe.

Em números: lados: 4 · alinhamentos: 3 · largura máxima: 340 px · papel ARIA: dialog.

## Exemplo

```html
<button type="button" class="ds-btn ds-btn--secondary" id="detalhes">Abrir popover</button>

<script type="module">
  import { createPopover } from 'https://lumeui.dev/v/1.1/lume.js';
  createPopover(document.querySelector('#detalhes'), {
    title: 'Detalhes',
    content: '<p>Conteúdo livre, que fica aberto até a pessoa sair.</p>',
    placement: 'bottom',
    align: 'start',
  });
</script>
```

## Variantes

Pode ser só um texto, ter título e botão de fechar, ou levar controles.

Só texto `content` — Uma explicação maior do que caberia num tooltip.

Com título `title` — O título dá nome ao painel e traz o botão de fechar.

Com controles `Element` — Ao abrir, o foco vai para o primeiro controle.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-demo="text" aria-label="O que é isso?" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-popover-2"><ds-icon name="help-circle"></ds-icon></button>

<button type="button" class="ds-btn ds-btn--secondary" data-demo="title" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-popover-3">Detalhes</button>

<button type="button" class="ds-btn ds-btn--secondary" data-demo="form" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-popover-4"><ds-icon name="link"></ds-icon>Compartilhar</button>
```

## Código

Com `data-popover-close`, um botão de dentro também fecha o painel.

```html
import { createPopover } from 'https://lumeui.dev/v/1.1/lume.js';

const popover = createPopover(document.querySelector('#detalhes'), {
  title: 'Detalhes',
  content: '<p>Conteúdo livre, que fica aberto até a pessoa sair.</p>',
  placement: 'bottom',
  align: 'start',
});
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Um diálogo que não prende o foco: a pessoa pode sair com Tab.

- Abrir — Enter Espaço — O gatilho é um botão comum, com aria-expanded. O foco entra no painel.
- Fechar — Esc Tab — Esc fecha e devolve o foco ao gatilho. Clicar fora ou sair com Tab também fecham.
- Com nome — Sem título, passe `label` para o leitor de tela saber o que abriu.

## Tokens usados

Mesma superfície do Menu.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fundo | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | Contorno | #3E51664D | #FFFFFF29 |
| shadow.xl (`--ds-shadow-xl`) | Sombra | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| radius.lg (`--ds-radius-lg`) | Cantos | 16 px | 16 px |
| color.fg.muted (`--ds-color-fg-muted`) | Texto | #46586E | #CEC8C1 |

## Uso

Qual camada escolher.

- **Faça:** conteúdo curto sob demanda. Um detalhe, um link para copiar ou um filtro rápido.
- **Evite:** tarefas longas. Para um formulário inteiro, use a Gaveta lateral ou o Modal.
- **Dica:** Dica só de passar o mouse?. Se não precisa de clique e cabe numa frase, é Tooltip.
