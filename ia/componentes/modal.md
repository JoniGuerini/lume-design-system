# Modal

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/modal

Interrompe o fluxo para uma decisão ou uma tarefa curta. Use pouco: tudo o que pode ficar na página, fica na página.

Em números: tamanhos: 3 · tons: 2 · fecha com: Esc · base: <dialog>.

## Exemplo

```html
import { openModal } from 'https://lumeui.dev/v/1.4/lume.js';

const escolha = await openModal({
  eyebrow: 'Projeto',
  title: 'Publicar alterações?',
  body: 'As mudanças ficam visíveis para toda a equipe assim que você publicar.',
  actions: [
    { label: 'Cancelar', value: 'cancel' },
    { label: 'Publicar', value: 'confirm', variant: 'primary' },
  ],
});

// escolha → valor da ação, ou undefined se fechou pelo ×, Esc ou clique fora
```

## Anatomia

Cinco partes. Título e ao menos uma saída são obrigatórios; o resto depende da decisão.

- 1 — Cabeçalho — Rótulo opcional e título em `text.heading-lg`. O título é a pergunta: “Publicar alterações?”.
- 2 — Fechar — Botão de ícone com `aria-label`. Some quando o modal exige uma escolha (`dismissible: false`).
- 3 — Corpo — Texto em `text.body-md` e cor secundária. Se crescer, só o corpo rola — cabeçalho e ações ficam no lugar.
- 4 — Rodapé — Ações à direita, a principal por último. No celular elas empilham, com a principal em cima.
- 5 — Fundo — `color.bg.overlay`, chapado e sem desfoque. A página continua visível — e fica inerte até o modal fechar.

Marcação dos exemplos desta seção:

```html
<div class="ds-modal ds-modal--inline" role="presentation">
<header class="ds-modal__header">
<div class="ds-modal__heading">
<p class="ds-modal__eyebrow">Projeto</p>
<h2 class="ds-modal__title" id="md-prev-title">Publicar alterações?</h2>
</div>
<button type="button" class="ds-icon-btn ds-icon-btn--muted ds-modal__close" data-ds-modal-close="" aria-label="Fechar"><ds-icon name="x"></ds-icon></button>
</header>
<div class="ds-modal__body" id="md-prev-body">As mudanças ficam visíveis para toda a equipe assim que você publicar.</div>
<footer class="ds-modal__footer"><button type="button" class="ds-btn ds-btn--secondary" data-ds-modal-close="cancel">Cancelar</button><button type="button" class="ds-btn ds-btn--primary" data-ds-modal-close="confirm">Publicar</button></footer></div>
```

## Tamanhos

A largura acompanha o conteúdo, nunca a tela. No celular todos ocupam a largura disponível.

Pequeno `size: 'sm'`

Confirmações e avisos de uma frase.

Médio — padrão — `—`

O padrão: decisões com contexto e formulários curtos.

Grande `size: 'lg'`

Conteúdo maior, como uma prévia ou uma lista para revisar.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-open-size="sm"><ds-icon name="arrow-up-right"></ds-icon>Abrir</button>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-open-size="md"><ds-icon name="arrow-up-right"></ds-icon>Abrir</button>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-open-size="lg"><ds-icon name="arrow-up-right"></ds-icon>Abrir</button>
```

## Confirmação destrutiva

Para o que não tem volta. O tom de perigo muda o ícone e a ação — e o foco começa em “Cancelar”.

- Título com o objeto: “Excluir ‘Lançamento 0.1’?”, nunca “Tem certeza?”.
- O corpo diz a consequência e se dá para desfazer.
- O botão repete o verbo: “Excluir projeto”, não “Sim”.
- Foco inicial na saída segura, para Enter não apagar nada por engano.

```html
const ok = await confirmModal({
  title: 'Excluir “Lançamento 0.1”?',
  body: 'O projeto e os 12 arquivos dele serão apagados.',
  confirmLabel: 'Excluir projeto',
  tone: 'danger',
}); // → true ou false
```

Marcação dos exemplos desta seção:

```html
<div class="ds-modal ds-modal--sm ds-modal--danger ds-modal--inline" role="presentation">
<header class="ds-modal__header">
<span class="ds-modal__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<div class="ds-modal__heading">
<h2 class="ds-modal__title" id="md-prev-title">Excluir “Lançamento 0.1”?</h2>
</div>
<button type="button" class="ds-icon-btn ds-icon-btn--muted ds-modal__close" data-ds-modal-close="" aria-label="Fechar"><ds-icon name="x"></ds-icon></button>
</header>
<div class="ds-modal__body" id="md-prev-body">O projeto e os 12 arquivos dele serão apagados. Não dá para desfazer.</div>
<footer class="ds-modal__footer"><button type="button" class="ds-btn ds-btn--secondary" data-ds-modal-close="cancel">Cancelar</button><button type="button" class="ds-btn ds-btn--danger" data-ds-modal-close="confirm">Excluir projeto</button></footer></div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>

<button type="button" class="ds-btn ds-btn--danger" data-open-confirm=""><ds-icon name="trash"></ds-icon>Excluir projeto…</button>
```

## Comportamento

O <dialog> nativo resolve foco e camadas. O componente cuida do resto.

Foco inicial

Vai para o primeiro campo do corpo; sem campos, para a ação principal (ou para “Cancelar”, no tom de perigo).

Três saídas

Esc, clique fora e o botão ×. Com `dismissible: false`, só as ações fecham.

Foco devolvido

Ao fechar, o foco volta para quem abriu o modal — a pessoa continua de onde estava.

Conteúdo longo

O modal nunca passa da altura da tela: o corpo rola, cabeçalho e rodapé ficam fixos.

Movimento

Entra em `duration.base` + emphasized e sai em `duration.fast` + accelerate. Com movimento reduzido, aparece direto.

Uma camada só

Nada de modal sobre modal. Se a tarefa pede um segundo passo, ele acontece dentro do mesmo modal.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M13 2.5 4.5 13.5H12l-1 8 8.5-11H12z"></path></svg>

<button type="button" class="ds-inline-action" data-open-demo="form"><ds-icon name="arrow-up-right"></ds-icon>Abrir com formulário</button>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11"></path><path d="M4.5 6h.01"></path><path d="M4.5 12h.01"></path><path d="M4.5 18h.01"></path></svg>

<button type="button" class="ds-inline-action" data-open-demo="long"><ds-icon name="arrow-up-right"></ds-icon>Abrir com texto longo</button>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3 12h4l2.5-6 5 12L17 12h4"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>
```

## Acessibilidade

Por ser um <dialog> aberto com showModal, o navegador já anuncia, prende o foco e deixa o resto da página inerte.

- Nome e descrição — O título vira `aria-labelledby` e o corpo, `aria-describedby` — o leitor de tela lê os dois ao abrir.
- Teclado — Tab Shift Tab Esc — Tab circula só dentro do modal; Esc fecha (quando permitido).
- Foco preso e devolvido — Ninguém se perde atrás do fundo. Ao fechar, o foco volta ao gatilho.
- Fechar com nome — O × tem `aria-label="Fechar"`. Troque com `closeLabel` se o contexto pedir.
- Sem armadilha — Todo modal tem uma saída por teclado. Sem rodapé, o × é obrigatório.
- Movimento reduzido — Com `prefers-reduced-motion`, o modal aparece e some sem animação.

## Tokens usados

Superfície elevada, fundo chapado e movimento curto.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fundo do modal | #FFFFFF | #2C2A27 |
| color.border.subtle (`--ds-color-border-subtle`) | Borda | #3E516624 | #FFFFFF0F |
| radius.2xl (`--ds-radius-2xl`) | Raio | 28 px | 28 px |
| shadow.2xl (`--ds-shadow-2xl`) | Sombra | 0 12px 24px -6px rgb(45 58 74 / 0.1), 0 48px 96px -24px rgb(45 58 74 / 0.24) | 0 12px 24px -6px rgb(0 0 0 / 0.36), 0 48px 96px -24px rgb(0 0 0 / 0.72) |
| color.bg.overlay (`--ds-color-bg-overlay`) | Fundo da página por trás | #2B384759 | #00000099 |
| text.heading-lg (`--ds-text-heading-lg`) | Título | 26/32 · regular | 26/32 · regular |
| text.body-md (`--ds-text-body-md`) | Corpo | 16/28 · regular | 16/28 · regular |
| color.fg.muted (`--ds-color-fg-muted`) | Cor do corpo | #46586E | #CEC8C1 |
| color.danger.subtle (`--ds-color-danger-subtle`) | Ícone no tom de perigo | #FFF4F3 | #FF908721 |
| space.400 (`--ds-space-400`) | Respiro interno | 32 px | 32 px |
| duration.base (`--ds-duration-base`) | Entrada | 200ms | 200ms |
| easing.emphasized (`--ds-easing-emphasized`) | Curva da entrada | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| duration.fast (`--ds-duration-fast`) | Saída | 120ms | 120ms |
| easing.accelerate (`--ds-easing-accelerate`) | Curva da saída | cubic-bezier(0.3, 0, 1, 1) | cubic-bezier(0.3, 0, 1, 1) |

## Uso

Antes de abrir um modal, pergunte se a página não resolve.

- **Faça:** decisões que bloqueiam. Confirmar algo irreversível, escolher antes de seguir, uma tarefa de um passo só.
- **Evite:** modal para avisar. “Salvo com sucesso” não precisa parar ninguém — use um toast. E nunca abra um modal sobre outro.
- **Dica:** Título pergunta, botão responde. “Excluir projeto?” → “Excluir projeto”. Dá para decidir lendo só o título e o botão.
