# Conversa e composer

Seção do Lume: Padrões. Página: https://lumeui.dev/#/padroes/conversa

Pergunta em balão, resposta em texto de leitura, resultado em cartão e uma caixa de mensagem que cresce com o texto, aceita anexos e comandos com / .

Em números: tipos de mensagem: 2 · atalhos: 7 · estados: 5 · ponto de cor: 1.

## Ao vivo

Uma conversa de verdade, com respostas simuladas. Envie, digite / , anexe um arquivo, pare uma resposta no meio ou copie o resultado.

Como posso ajudar?

Pergunte em português, anexe um arquivo ou digite / para ver os comandos.

```html
import { createComposer, messageHtml, typingHtml, streamText } from 'https://lumeui.dev/v/1.9/lume.js';

const thread = document.querySelector('.ds-thread');   // role="log" aria-live="polite"

const composer = createComposer(document.querySelector('#composer'), {
  label: 'Mensagem para o Lume',
  placeholder: 'Pergunte algo ou digite / para comandos',
  maxLength: 2000,
  commands: [
    { id: 'roteiro', label: 'Criar roteiro', description: 'Monta um roteiro em cenas', icon: 'list' },
    { id: 'resumir', label: 'Resumir', description: 'Resume um texto em três frases', icon: 'file-text' },
  ],
  async onSend({ text, attachments, command }) {
    thread.insertAdjacentHTML('beforeend', messageHtml({ role: 'user', text, attachments }));
    composer.setBusy(true);                       // enviar vira "parar"; Esc também para
    thread.insertAdjacentHTML('beforeend', messageHtml({ html: typingHtml(), busy: true, actions: false }));
    const body = thread.lastElementChild.querySelector('[data-body]');
    body.innerHTML = '';
    await streamText(body, await pedirResposta(text, command));
    thread.lastElementChild.removeAttribute('aria-busy');
    composer.setBusy(false);
  },
  onStop() { /* cancele a requisição e marque "Resposta interrompida." */ },
});
```

Marcação dos exemplos desta seção:

```html
<span class="ds-message__mark" aria-hidden="true">L</span>

<div class="ds-suggestions">
<button type="button" class="ds-chip ds-chip--sm" data-suggest="Crie um roteiro de 3 cenas" data-command="roteiro"><span class="ds-chip__icon"><ds-icon name="list"></ds-icon></span>Crie um roteiro de 3 cenas</button><button type="button" class="ds-chip ds-chip--sm" data-suggest="Resuma o que é o Lume" data-command="resumir"><span class="ds-chip__icon"><ds-icon name="file-text"></ds-icon></span>Resuma o que é o Lume</button><button type="button" class="ds-chip ds-chip--sm" data-suggest="Por onde começo os tokens?"><span class="ds-chip__icon"><ds-icon name="palette"></ds-icon></span>Por onde começo os tokens?</button>
</div>

<div class="ds-thread" role="log" aria-live="polite" aria-relevant="additions" aria-label="Conversa" data-thread=""></div>

<div class="ds-composer">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-9-input">Mensagem para o Lume</label>
<textarea class="ds-composer__input" id="ds-composer-9-input" rows="1" placeholder="Pergunte algo ou digite / para comandos" aria-autocomplete="list" aria-controls="ds-composer-9-menu" aria-describedby="ds-composer-9-hint"></textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Anexar arquivo" data-ds-tooltip="Anexar arquivo"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Comandos" data-ds-tooltip="Comandos" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden="">0 / 2.000</span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Enviar mensagem" data-ds-tooltip="Enviar" data-ds-tooltip-kbd="↵" aria-disabled="true"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-9-menu" role="listbox" aria-label="Comandos" hidden=""></div>
</div>

<p class="ds-composer__hint" id="ds-composer-9-hint">
<span><kbd class="ds-kbd">Enter</kbd> envia</span>
<span><kbd class="ds-kbd">Shift</kbd> + <kbd class="ds-kbd">Enter</kbd> quebra linha</span>
<span><kbd class="ds-kbd">/</kbd> comandos</span>
</p>

<p class="ds-visually-hidden" aria-live="polite" data-live=""></p>

<p class="ds-visually-hidden" aria-live="polite" data-demo-live=""></p>

<button type="button" class="ds-chip" data-control="reply" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-228">
<span>Resposta</span><span data-label="">Texto e cartão</span>
<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span>
</button>
```

## Anatomia

Nove peças. Só uma tem cor: o enviar. O resto é contorno, superfície e texto.

- 1 — Pergunta — Balão sólido em bg.raised, à direita.
- 2 — Anexo — Pílula com tipo, nome e tamanho.
- 3 — Autor e hora — Marca, nome e hora em eyebrow apagado.
- 4 — Resposta — Texto de leitura, sem balão, até 68 caracteres.
- 5 — Cartão de resultado — O que dá para usar: carimbo, título, conteúdo e ações.
- 6 — Ações — Copiar, gerar de novo e avaliar — no hover e na última resposta.
- 7 — Composer — Campo que cresce, anexos e comandos em cima.
- 8 — Ferramentas — Anexar e comandos, botões de ícone sem fundo.
- 9 — Enviar — O único ponto de cor. Vira parar enquanto responde.

Marcação dos exemplos desta seção:

```html
<div class="ds-composer">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-2-input">Mensagem</label>
<textarea class="ds-composer__input" id="ds-composer-2-input" rows="1" placeholder="Pergunte algo ou digite / para comandos" aria-autocomplete="list" aria-controls="ds-composer-2-menu"></textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Anexar arquivo" data-ds-tooltip="Anexar arquivo"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Comandos" data-ds-tooltip="Comandos" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden=""></span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Enviar mensagem" data-ds-tooltip="Enviar" data-ds-tooltip-kbd="↵" aria-disabled="true"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-2-menu" role="listbox" aria-label="Comandos" hidden=""></div>
</div>
```

## Balões

Quem pergunta ganha balão; quem responde, não. Assim a pergunta se acha de relance e a resposta se lê sem moldura.

Pergunta `ds-message--user` — Balão sólido, à direita. O canto de baixo, mais fechado, aponta quem falou.

Resposta `ds-message` — Sem balão: texto de leitura de até 68 caracteres por linha, com autor e hora em cima.

Com anexos `ds-message__attachments` — Anexos vêm antes do texto, em pílulas com tipo, nome e tamanho.

Lista e código `ds-message__body` — Listas só a partir de três itens. Código curto entra inline.

Divisor e aviso `ds-thread__divider` — O divisor separa dias; o aviso do sistema fica centrado e apagado, sem balão.

Escrevendo `ds-typing` — Três pontos e um texto curto. Com movimento reduzido, os pontos ficam parados.

- Balão: bg.raised · contorno sutil · raio xl, canto xs
- Resposta: text.body-md · 16/28 · até 68 caracteres
- Entre mensagens: space.400 · 32 px
- Ações: botões de ícone de 28 px, sem fundo

Marcação dos exemplos desta seção:

```html
<div class="ds-thread "><article class="ds-message ds-message--user" aria-label="Você disse"><div class="ds-message__body"><p>Monte um roteiro para o lançamento da versão 0.2</p></div><p class="ds-message__meta">Enviada · <time>14:32</time></p></article></div>

<div class="ds-thread "><article class="ds-message" data-latest="" aria-label="Lume respondeu">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span><time>14:32</time></header>
<div class="ds-message__body" data-body=""><p>Montei um roteiro curto, em três cenas. Cada uma cabe em até 20 segundos.</p></div>
<div class="ds-message__actions" role="group" aria-label="Ações da resposta"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="copy" aria-label="Copiar resposta" data-ds-tooltip="Copiar resposta"><ds-icon name="copy"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="retry" aria-label="Gerar de novo" data-ds-tooltip="Gerar de novo"><ds-icon name="refresh"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="like" aria-label="Gostei" data-ds-tooltip="Gostei" aria-pressed="false"><ds-icon name="thumbs-up"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="dislike" aria-label="Não gostei" data-ds-tooltip="Não gostei" aria-pressed="false"><ds-icon name="thumbs-down"></ds-icon></button></div>
</article></div>

<div class="ds-thread "><article class="ds-message ds-message--user" aria-label="Você disse"><div class="ds-message__attachments"><span class="ds-attachment">
<span class="ds-attachment__icon" aria-hidden="true"><ds-icon name="file-text"></ds-icon></span>
<span class="ds-attachment__name">briefing.pdf</span>
<span class="ds-attachment__size">242 KB</span>
</span><span class="ds-attachment">
<span class="ds-attachment__icon" aria-hidden="true"><ds-icon name="image"></ds-icon></span>
<span class="ds-attachment__name">tela-inicial.png</span>
<span class="ds-attachment__size">1,3 MB</span>
</span></div><div class="ds-message__body"><p>Resuma esses dois arquivos</p></div></article></div>

<div class="ds-thread "><article class="ds-message" aria-label="Lume respondeu">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span></header>
<div class="ds-message__body" data-body=""><p>Para trocar a marca:</p><ol><li>Abra <code>tokens/palettes.json</code>.</li><li>Mude o <code>hue</code> de <code>brand</code>.</li><li>Rode <code>npm run tokens</code>.</li></ol></div>
</article></div>

<div class="ds-thread "><p class="ds-thread__divider">Hoje</p><p class="ds-thread__notice">Ana Souza entrou na conversa.</p></div>

<div class="ds-thread "><article class="ds-message" aria-label="Lume respondeu">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span></header>
<div class="ds-message__body" data-body=""><div class="ds-typing"><span class="ds-typing__dots" aria-hidden="true"><i></i><i></i><i></i></span><span>Lume está escrevendo</span></div></div>
</article></div>
```

## Cartão de resultado

Quando a resposta é algo para usar — um roteiro, um resumo, um arquivo —, ela vira cartão: carimbo e tipo, título, conteúdo curto e no máximo duas ações. Conversa comum continua em texto.

Roteiro `ds-result-card` — Seções com carimbo, como no painel. Ação principal com seta.

Resumo `ds-result-card__text` — Texto curto em muted. Uma ação, para levar o resultado adiante.

Arquivo gerado `ds-attachment` — O arquivo é uma pílula de anexo; baixar e ver prévia são ações inline.

Marcação dos exemplos desta seção:

```html
<div class="ds-thread "><article class="ds-message" aria-label="Lume respondeu">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span></header>
<div class="ds-message__body" data-body=""><p>Em três frases:</p></div>
<section class="ds-result-card" aria-label="Resumo em três frases">
<header class="ds-result-card__head">
<div><p class="ds-result-card__eyebrow">Resumo · 3 frases</p><p class="ds-result-card__title">O Lume em poucas palavras</p></div>
<div class="ds-result-card__tools">
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="copy-card" aria-label="Copiar resumo" data-ds-tooltip="Copiar"><ds-icon name="copy"></ds-icon></button>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" aria-label="Mais opções" data-ds-tooltip="Mais opções"><ds-icon name="more-horizontal"></ds-icon></button>
</div>
</header>
<p class="ds-result-card__text">Design system escuro e quente, com tokens em OKLCH. Os componentes só consomem tokens semânticos. Tema claro e escuro, contraste verificado e teclado em tudo.</p>
<div class="ds-result-card__actions">
<button type="button" class="ds-inline-action" data-action="open">Usar como descrição<ds-icon name="arrow-right"></ds-icon></button>
</div>
</section>
</article></div>

<div class="ds-thread "><article class="ds-message" aria-label="Lume respondeu">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span></header>
<div class="ds-message__body" data-body=""><p>Exportei os tokens do tema escuro.</p></div>
<section class="ds-result-card" aria-label="Arquivo gerado">
<header class="ds-result-card__head">
<div><p class="ds-result-card__eyebrow">Arquivo · CSV</p><p class="ds-result-card__title">Tokens de cor, tema escuro</p></div>
<div class="ds-result-card__tools">
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="copy-card" aria-label="Copiar arquivo" data-ds-tooltip="Copiar"><ds-icon name="copy"></ds-icon></button>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" aria-label="Mais opções" data-ds-tooltip="Mais opções"><ds-icon name="more-horizontal"></ds-icon></button>
</div>
</header>
<div><span class="ds-attachment">
<span class="ds-attachment__icon" aria-hidden="true"><ds-icon name="file-text"></ds-icon></span>
<span class="ds-attachment__name">tokens-escuro.csv</span>
<span class="ds-attachment__size">18 KB</span>
</span></div>
<div class="ds-result-card__actions">
<button type="button" class="ds-inline-action"><ds-icon name="download"></ds-icon>Baixar</button>
<button type="button" class="ds-inline-action">Ver prévia<ds-icon name="arrow-right"></ds-icon></button>
</div>
</section>
</article></div>
```

## Composer

A caixa de mensagem: comando e anexos em cima, o campo no meio, ferramentas e o enviar embaixo. Cresce com o texto até 216 px e depois rola.

Vazio

Placeholder diz o que dá para fazer. Enviar fica desligado.

Em foco

Borda e anel da marca. Cresce com o texto até 216 px, depois rola.

Com comando e anexo

O comando vira uma pílula da marca; anexos, pílulas com contorno.

Respondendo

Enviar vira parar (Esc). Dá para ir escrevendo a próxima.

Desativado

Só quando não dá para enviar mesmo (sem conexão, sem permissão) — e diga por quê.

Marcação dos exemplos desta seção:

```html
<div class="ds-composer">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-3-input">Mensagem</label>
<textarea class="ds-composer__input" id="ds-composer-3-input" rows="1" placeholder="Pergunte ou digite /" aria-autocomplete="list" aria-controls="ds-composer-3-menu"></textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Anexar arquivo" data-ds-tooltip="Anexar arquivo"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Comandos" data-ds-tooltip="Comandos" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden=""></span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Enviar mensagem" data-ds-tooltip="Enviar" data-ds-tooltip-kbd="↵" aria-disabled="true"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-3-menu" role="listbox" aria-label="Comandos" hidden=""></div>
</div>

<div class="ds-composer">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-4-input">Mensagem</label>
<textarea class="ds-composer__input" id="ds-composer-4-input" rows="1" placeholder="Escreva uma mensagem ou / para comandos" aria-autocomplete="list" aria-controls="ds-composer-4-menu">Monte um roteiro</textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Anexar arquivo" data-ds-tooltip="Anexar arquivo"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Comandos" data-ds-tooltip="Comandos" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden=""></span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Enviar mensagem" data-ds-tooltip="Enviar" data-ds-tooltip-kbd="↵"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-4-menu" role="listbox" aria-label="Comandos" hidden=""></div>
</div>

<div class="ds-composer" data-busy="">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-6-input">Mensagem</label>
<textarea class="ds-composer__input" id="ds-composer-6-input" rows="1" placeholder="Pergunte ou digite /" aria-autocomplete="list" aria-controls="ds-composer-6-menu"></textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Anexar arquivo" data-ds-tooltip="Anexar arquivo"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Comandos" data-ds-tooltip="Comandos" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden=""></span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Parar resposta" data-ds-tooltip="Parar resposta" data-ds-tooltip-kbd="Esc"><span class="ds-composer__stop" aria-hidden="true"></span></button>
</div>
<div class="ds-composer__menu" id="ds-composer-6-menu" role="listbox" aria-label="Comandos" hidden=""></div>
</div>

<div class="ds-composer" data-disabled="">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-7-input">Mensagem</label>
<textarea class="ds-composer__input" id="ds-composer-7-input" rows="1" placeholder="Sem conexão" aria-autocomplete="list" aria-controls="ds-composer-7-menu" disabled=""></textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Anexar arquivo" data-ds-tooltip="Anexar arquivo"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Comandos" data-ds-tooltip="Comandos" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden=""></span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Enviar mensagem" data-ds-tooltip="Enviar" data-ds-tooltip-kbd="↵" aria-disabled="true"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-7-menu" role="listbox" aria-label="Comandos" hidden=""></div>
</div>
```

## Atalhos com /

Uma barra no começo do campo abre os comandos. O foco não sai do campo: as setas escolhem, Enter confirma, e o comando vira uma pílula antes do texto.

| Comando | O que faz |
| --- | --- |
| `/roteiro` | Monta um roteiro em cenas |
| `/resumir` | Resume um texto em três frases |
| `/traduzir` | Traduz para inglês |
| `/tom` | Reescreve mais direto |

| Tecla | No composer |
| --- | --- |
| Enter | Envia a mensagem |
| Shift — + — Enter | Quebra a linha |
| / | No começo do campo, abre os comandos |
| ↑ — + — ↓ | Percorrem os comandos |
| Enter — ou — Tab | Escolhem o comando |
| Esc | Fecha os comandos; com a resposta chegando, para a resposta |
| Backspace | No começo do campo, remove o comando escolhido |

## Estados

Cada estado diz o que está acontecendo e qual é o próximo passo. Nada some sem aviso.

Como posso ajudar?

Primeira mensagem — Conversa vazia: um convite curto e três sugestões concretas, que ensinam o que dá para pedir.

Respondendo — A resposta chega com os pontos de “escrevendo”. O enviar vira parar.

Erro ao enviar — O texto fica na tela, com o motivo e um jeito de seguir. Nada some.

Resposta interrompida — O que já chegou fica. Uma linha diz que parou; as ações continuam valendo.

Limite de caracteres — A contagem aparece perto do limite. Passou: borda e número em perigo, e o enviar desliga.

Marcação dos exemplos desta seção:

```html
<span class="ds-message__mark" aria-hidden="true">L</span>

<div class="ds-suggestions"><span class="ds-chip ds-chip--sm"><span class="ds-chip__icon"><ds-icon name="list"></ds-icon></span>Crie um roteiro de 3 cenas</span><span class="ds-chip ds-chip--sm"><span class="ds-chip__icon"><ds-icon name="file-text"></ds-icon></span>Resuma o que é o Lume</span><span class="ds-chip ds-chip--sm"><span class="ds-chip__icon"><ds-icon name="palette"></ds-icon></span>Por onde começo os tokens?</span></div>

<div class="ds-thread "><article class="ds-message ds-message--user" aria-label="Você disse"><div class="ds-message__body"><p>Resuma o que é o Lume</p></div><p class="ds-message__meta">Enviada · <time>14:32</time></p></article><article class="ds-message" aria-label="Lume respondeu">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span></header>
<div class="ds-message__body" data-body=""><div class="ds-typing"><span class="ds-typing__dots" aria-hidden="true"><i></i><i></i><i></i></span><span>Lume está escrevendo</span></div></div>
</article></div>

<div class="ds-thread "><article class="ds-message ds-message--user" data-status="error" aria-label="Você disse"><div class="ds-message__body"><p>Resuma o que é o Lume</p></div><p class="ds-message__error"><span><ds-icon name="alert-circle"></ds-icon>Não foi enviada.</span><button type="button" class="ds-inline-action" data-action="resend"><ds-icon name="refresh"></ds-icon>Tentar de novo</button></p></article></div>

<div class="ds-thread "><article class="ds-message" data-latest="" aria-label="Lume respondeu">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span><time>14:33</time></header>
<div class="ds-message__body" data-body=""><p>Eu começaria por três coisas: as cores da marca, a tipografia e</p></div>
<p class="ds-message__meta">Resposta interrompida.</p>
<div class="ds-message__actions" role="group" aria-label="Ações da resposta"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="copy" aria-label="Copiar resposta" data-ds-tooltip="Copiar resposta"><ds-icon name="copy"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="retry" aria-label="Gerar de novo" data-ds-tooltip="Gerar de novo"><ds-icon name="refresh"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="like" aria-label="Gostei" data-ds-tooltip="Gostei" aria-pressed="false"><ds-icon name="thumbs-up"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="dislike" aria-label="Não gostei" data-ds-tooltip="Não gostei" aria-pressed="false"><ds-icon name="thumbs-down"></ds-icon></button></div>
</article></div>

<div class="ds-composer" data-over="">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-1-input">Mensagem</label>
<textarea class="ds-composer__input" id="ds-composer-1-input" rows="2" placeholder="Escreva uma mensagem ou / para comandos" aria-autocomplete="list" aria-controls="ds-composer-1-menu">Texto longo colado de um documento, passando do limite de caracteres da mensagem…</textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Anexar arquivo" data-ds-tooltip="Anexar arquivo"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Comandos" data-ds-tooltip="Comandos" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true">81 / 72</span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Enviar mensagem" data-ds-tooltip="Enviar" data-ds-tooltip-kbd="↵" aria-disabled="true"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-1-menu" role="listbox" aria-label="Comandos" hidden=""></div>
</div>
```

## Escrita

A resposta é interface. Escreva como o resto do produto: curto, direto, em português do Brasil.

Responda primeiro

São três passos: cores, tipografia e componentes.

Ótima pergunta! Vamos explorar juntos esse tema tão interessante…

Frases curtas, voz ativa

Troque o hue da marca e rode o build.

O hue da marca pode ser trocado, e em seguida o build deverá ser executado.

Diga quando não sabe

Não encontrei esse dado no arquivo. Quer que eu procure em outro?

O faturamento foi de R$ 1,2 mi. (sem fonte)

Lista só com três ou mais

Abra o arquivo e mude o hue.

• Abra o arquivo• Mude o hue

Termos da tela

Clique em Exportar tokens.

Acione a funcionalidade de exportação de design tokens.

Um próximo passo, no fim

Quer que eu monte o roteiro?

Posso ajudar com mais alguma coisa? Estou aqui para o que precisar!

## Acessibilidade

A conversa se lê e se usa inteira pelo teclado e por leitor de tela.

- Conversa como log — A lista de mensagens tem `role="log"` e `aria-live="polite"`: respostas novas são lidas sem roubar o foco.
- Resposta lida inteira — Enquanto chega, a resposta fica com `aria-busy="true"`, e o leitor espera terminar em vez de ler palavra por palavra.
- Foco fica no composer — Depois de enviar, o foco continua no campo, pronto para a próxima pergunta.
- Campo com rótulo — O campo tem rótulo (pode ser visualmente oculto) e `aria-describedby` aponta para os atalhos.
- Comandos pelo teclado — / ↑ ↓ Enter — A lista de comandos usa `aria-activedescendant`: o foco não sai do campo e as setas escolhem.
- Parar sem mouse — Esc — Esc para a resposta, e o enviar passa a se chamar “Parar resposta”.
- Ações sempre alcançáveis — As ações de cada resposta aparecem no hover e no foco, e ficam sempre visíveis em telas de toque e na última resposta.
- Movimento reduzido — Com `prefers-reduced-motion`, a resposta aparece de uma vez e os pontos de “escrevendo” param.

## Tokens

Clique no nome para copiar a variável.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Balão da pergunta e composer | #FFFFFF | #2C2A27 |
| color.bg.surface (`--ds-color-bg-surface`) | Cartão de resultado | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno do balão e do cartão | #3E516624 | #FFFFFF0F |
| color.border.control (`--ds-color-border-control`) | Composer e anexos | #3E516633 | #FFFFFF21 |
| color.border.focus (`--ds-color-border-focus`) | Composer em foco | #53657A | #C0CAD6 |
| color.fg.default (`--ds-color-fg-default`) | Texto da conversa | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | Texto do cartão | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Autor, hora, placeholder e atalhos | #53657A | #9C9792 |
| color.brand.solid (`--ds-color-brand-solid`) | Enviar | #3E5166 | #C0CAD6 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Ícone do enviar | #F8FAFD | #1D2734 |
| color.brand.subtle (`--ds-color-brand-subtle`) | Marca do autor e comando escolhido | #EEF2F6 | #C0CAD624 |
| color.brand.fg (`--ds-color-brand-fg`) | Letra da marca e do comando | #3E5166 | #DAE0E8 |
| color.danger.fg (`--ds-color-danger-fg`) | Falha ao enviar e limite passado | #C13834 | #FFB2AA |
| radius.xl (`--ds-radius-xl`) | Balão e cartão | 20 px | 20 px |
| radius.2xl (`--ds-radius-2xl`) | Composer | 28 px | 28 px |
| space.400 (`--ds-space-400`) | Entre mensagens | 32 px | 32 px |

## Código

O CSS vem em `ds/ds.css`; o comportamento, em `ds/js/composer.js`.

```html
<div class="ds-thread" role="log" aria-live="polite" aria-label="Conversa">
  <article class="ds-message ds-message--user">
    <div class="ds-message__body"><p>Monte um roteiro</p></div>
    <p class="ds-message__meta">Enviada · <time>14:32</time></p>
  </article>
  <article class="ds-message">
    <header class="ds-message__head">
      <span class="ds-message__mark" aria-hidden="true">L</span>
      <span class="ds-message__author">Lume</span><time>14:32</time>
    </header>
    <div class="ds-message__body"><p>Montei um roteiro em três cenas.</p></div>
    <section class="ds-result-card">…</section>
    <div class="ds-message__actions">…ds-icon-btn ds-icon-btn--sm…</div>
  </article>
</div>

<div id="composer"></div>
```

```html
import { createComposer } from 'https://lumeui.dev/v/1.9/lume.js';

const composer = createComposer(document.querySelector('#composer'), {
  label: 'Mensagem para o Lume',
  commands: [{ id: 'resumir', label: 'Resumir', description: 'Resume em três frases', icon: 'file-text' }],
  maxLength: 2000,
  onSend({ text, attachments, command }) {
    // envie; devolva false para manter o texto no campo
  },
  onStop() {
    // cancele a resposta em andamento
  },
});

composer.setBusy(true);   // enviar vira "parar"
composer.focus();
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

- **Faça:** Balão só na pergunta. O balão marca quem pergunta; a resposta é texto de leitura, com espaço para respirar.
- **Evite:** Cor em todo balão. Nada de balões coloridos ou degradês. A única cor da conversa é o enviar.
- **Faça:** Cartão para o que dá para usar. Roteiros, resumos e arquivos viram cartão com ações. Conversa comum fica em texto.
- **Evite:** Ações gritando em toda mensagem. Copiar e avaliar aparecem no hover e no foco; ficam fixas só na última resposta e no toque.
- **Dica:** Comece com sugestões. Na conversa vazia, três sugestões concretas ensinam o que dá para pedir.
- **Evite:** Enter que não envia. Enter envia, Shift + Enter quebra linha. Não inverta, e não envie no meio de um acento (IME).
