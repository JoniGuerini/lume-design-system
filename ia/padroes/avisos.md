# Avisos e confirmações

Seção do Lume: Padrões. Página: https://lumeui.dev/#/padroes/avisos

Toast, alerta, banner ou modal: cada um responde a uma pergunta diferente. Quanto custa errar e quanto tempo o aviso precisa durar decidem qual usar.

Em números: jeitos de avisar: 4 · banner por vez: 1 · erro em toast: 0.

## Exemplo ao vivo

Um relatório em edição. Cada ação responde com o aviso que combina com ela.

- Seção 1 — O tempo de resposta caiu 18% e as pessoas ativas passaram de 2 mil.
- Seção 2 — A busca nova respondeu por metade das visitas à documentação.
- Seção 3 — Em novembro, o foco é o primeiro uso e as telas de erro.

- Salvar rascunho: um toast curto, sem ação. Deu certo e pronto.
- Publicar: as seções sem título viram um alerta no topo, com links para cada campo.
- No ⋯, Arquivar acontece na hora, com Desfazer; Excluir pergunta antes.
- Ligue “Sem conexão” em cima do palco: o banner fica até a conexão voltar.

Marcação dos exemplos desta seção:

```html
<label class="ds-switch ds-switch--sm">
<input type="checkbox" role="switch" class="ds-switch__input" data-av-offline="">
<span class="ds-choice__text"><span class="ds-choice__label">Sem conexão</span></span>
</label>

<div class="ds-banner ds-banner--warning" role="region" aria-label="Aviso" data-av-banner="" hidden="">
<span class="ds-banner__icon"><ds-icon name="wifi-off"></ds-icon></span>
<p class="ds-banner__text"><strong>Sem conexão.</strong> O que você escrever fica guardado e sobe quando a conexão voltar.</p>
<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-av-retry="">Tentar agora</button>
</div>

<div class="ds-empty ds-empty--compact ds-empty--plain" data-av-deleted="" hidden="">
<span class="ds-empty__icon"><ds-icon name="trash"></ds-icon></span>
<p class="ds-empty__title">Relatório excluído</p>
<p class="ds-empty__description">No exemplo, dá para trazer de volta.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-av-restore="">Recomeçar o exemplo</button></div>
</div>
```

## Qual usar

Quatro jeitos de avisar, do mais leve ao que interrompe.

| Meio | Quando | Some sozinho? | Exemplo |
| --- | --- | --- | --- |
| Toast | O resultado de algo que a pessoa fez, que deu certo ou tem volta. | Sim, em 2 s (5 s com ação) | “Rascunho salvo” |
| Alerta | Um problema desta tela, que fica até ser resolvido. Perto de onde aconteceu. | Não, sai quando resolve | “2 seções estão sem título” |
| Banner | Um estado que vale para o app inteiro: conexão, manutenção, plano. | Quando o estado acaba | “Sem conexão” |
| Modal | Uma decisão que não volta e precisa de resposta agora. | Fecha com a resposta | “Excluir o relatório?” |

## Regras

Seis decisões que valem para qualquer aviso.

Desfazer vence confirmar

Se dá para voltar, faça na hora e ofereça “Desfazer” no toast. Arquivar, mover e remover da lista são assim.

Confirmar só o que não volta

O modal diz o que se perde, com números, e o botão repete o verbo: “Excluir relatório”.

Erro não vai em toast

O toast some em segundos. O que a pessoa precisa corrigir fica num alerta, até ser corrigido.

Perto de onde aconteceu

O alerta fica no topo da área afetada, com links que levam a cada campo. Nada de aviso no canto para um problema no meio.

Um aviso para cada coisa

Não some alerta e toast para o mesmo problema. Um banner por vez; no máximo três toasts.

A cor nunca sozinha

Ícone e texto dizem o mesmo que o tom. Um alerta amarelo sem palavras não diz nada a quem não distingue a cor.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M9 13.5 4.5 9 9 4.5M4.5 9h10a5 5 0 0 1 0 10H11"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10.3 4.2 2.9 17.5A2 2 0 0 0 4.6 20.5h14.8a2 2 0 0 0 1.7-3L13.7 4.2a2 2 0 0 0-3.4 0z"></path><path d="M12 9.5v4"></path><path d="M12 17h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3 2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1.5"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>
```

## Mensagens

O que aconteceu e o que fazer, nas palavras de quem usa. Código de erro fica no registro, não na tela.

| Situação | Evite | Prefira |
| --- | --- | --- |
| Deu certo | Operação concluída com sucesso! | Rascunho salvo |
| Falta algo | Erro ao processar a solicitação. | 2 seções estão sem título. Dê um título para publicar. |
| Sem rede | ERR_INTERNET_DISCONNECTED | Sem conexão. O que você escrever fica guardado. |
| Excluir | Tem certeza que deseja continuar? | Excluir o relatório? As 3 seções e os comentários somem. |

## Acessibilidade

Cada meio fala de um jeito: uns sem tirar o foco, outros levando o foco até eles.

- Toast educado — A região do toast é `role="status"`: é anunciado sem interromper. Com ação, dura 5 s e o tempo pausa com o foco ou o ponteiro em cima.
- Desfazer também em outro lugar — Quem perdeu o toast precisa de outro caminho: o arquivado aparece em Arquivados, com Restaurar.
- Alerta recebe o foco — O alerta que aparece depois de uma ação tem `role="alert"` e `tabindex="-1"`; o foco vai até ele, e cada link leva ao campo certo.
- Banner não rouba o foco — É uma região com nome (`aria-label="Aviso"`), fácil de achar pelos marcos, e o texto dele é anunciado quando aparece.
- Modal de perigo começa no Cancelar — Um Enter apressado não exclui nada. Esc fecha e o foco volta para o ⋯ que abriu o menu.

## Código

Alerta e banner são marcação; `toast` e `confirmModal` são uma linha cada.

```html
<!-- Alerta: no topo da área afetada, com um link para cada campo -->
<div class="ds-alert ds-alert--warning" role="alert" tabindex="-1">
  <span class="ds-alert__icon"><ds-icon name="alert-triangle"></ds-icon></span>
  <div class="ds-alert__body">
    <p class="ds-alert__title">2 seções estão sem título</p>
    <ul class="ds-alert__list">
      <li><a href="#secao-2">Seção 2: dê um título.</a></li>
      <li><a href="#secao-3">Seção 3: dê um título.</a></li>
    </ul>
  </div>
</div>

<!-- Banner: um estado do app inteiro -->
<div class="ds-banner ds-banner--warning" role="region" aria-label="Aviso">
  <span class="ds-banner__icon"><ds-icon name="wifi-off"></ds-icon></span>
  <p class="ds-banner__text"><strong>Sem conexão.</strong> O que você escrever fica guardado.</p>
</div>
```

```html
import { toast, confirmModal } from 'https://lumeui.dev/v/1.4/lume.js';

// Tem volta: faz na hora e oferece Desfazer
arquivar(relatorio);
toast('Relatório arquivado', {
  action: { label: 'Desfazer', onClick: () => desarquivar(relatorio) },
});

// Não tem volta: pergunta, dizendo o que se perde
const ok = await confirmModal({
  title: 'Excluir o relatório?',
  body: 'As 3 seções e os comentários somem. Não dá para desfazer.',
  confirmLabel: 'Excluir relatório',
  tone: 'danger',   // o foco começa em Cancelar
});
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Na dúvida, o aviso mais leve que ainda dá conta do recado.

- **Faça:** diga o próximo passo. Todo aviso de problema termina com o que a pessoa pode fazer: tentar de novo, corrigir o campo, esperar a conexão.
- **Evite:** modal para dizer que deu certo. Interromper para comemorar obriga a pessoa a fechar algo que não pediu. Sucesso é toast, ou nem isso, quando a tela já mostra.
- **Dica:** A tela já mostra? Não avise. Um item que aparece na lista ou um switch que muda de posição já são o aviso. Toast é para quando o efeito não está à vista.
