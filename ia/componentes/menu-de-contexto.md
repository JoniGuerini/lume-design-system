# Menu de contexto

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/menu-de-contexto

As ações de um item, ali onde a pessoa está: botão direito, tecla de menu ou toque longo. É um atalho, nunca o único caminho.

Em números: formas de abrir: 3 · papel ARIA: menu · toque longo: 500 ms · superfície: a do Menu.

## Exemplo

```html
<ul id="arquivos" role="list">
  <li data-arquivo tabindex="0">Proposta.pdf</li>
</ul>

<script type="module">
  import { createContextMenu } from 'https://lumeui.dev/v/1.10/lume.js';
  createContextMenu(document.querySelector('#arquivos'), {
    selector: '[data-arquivo]',
    options: [
      { value: 'open', label: 'Abrir', icon: 'external-link' },
      { type: 'separator' },
      { value: 'delete', label: 'Excluir', icon: 'trash', tone: 'danger' },
    ],
    onSelect: (value, alvo) => agir(value, alvo),
  });
</script>
```

## Código

Com `selector`, um único menu atende a todas as linhas; `options` pode mudar conforme o item.

```html
import { createContextMenu } from 'https://lumeui.dev/v/1.10/lume.js';

createContextMenu(document.querySelector('#arquivos'), {
  selector: '[data-arquivo]',
  label: 'Ações do arquivo',
  options: [
    { value: 'open', label: 'Abrir', icon: 'external-link' },
    { type: 'separator' },
    { value: 'delete', label: 'Excluir', icon: 'trash', tone: 'danger' },
  ],
  onSelect: (value, alvo) => agir(value, alvo),
});
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Funciona como o Menu quando está aberto, mas ninguém descobre sozinho: por isso é sempre um atalho.

- Abrir pelo teclado — Shift F10 — O item precisa receber foco. A tecla de menu ou Shift+F10 abrem junto dele.
- Andar e escolher — ↑ ↓ Enter — ↑/↓, Home/End e letras andam; Enter escolhe.
- Fechar — Esc — Esc fecha e devolve o foco ao item.
- Outro caminho — Ofereça as mesmas ações num botão visível: o botão direito não é óbvio nem existe em toda parte.

## Tokens usados

Os mesmos do Menu.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fundo | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | Contorno | #3E51664D | #FFFFFF29 |
| shadow.xl (`--ds-shadow-xl`) | Sombra | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| color.bg.hover (`--ds-color-bg-hover`) | Item ativo | #3E51660D | #FFFFFF0D |
| color.danger.fg (`--ds-color-danger-fg`) | Ação de perigo | #C13834 | #FFB2AA |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** atalho em listas. Arquivos, linhas de tabela e cartões, em que a pessoa repete ações.
- **Evite:** ação escondida. Se a ação só existe no botão direito, boa parte das pessoas nunca vai achá-la.
- **Dica:** Curto e na ordem de uso. As mais comuns em cima; as destrutivas no fim, depois de um separador.
