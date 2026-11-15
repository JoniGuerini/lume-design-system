# Primeiro uso

Seção do Lume: Padrões. Página: https://lumeui.dev/#/padroes/primeiro-uso

A primeira sessão de alguém: boas-vindas curtas, poucos passos que já são o trabalho de verdade, um vazio que ensina e dados de exemplo para quem quer ver antes de fazer.

Em números: passos: 3–5 · passo já feito: 1 · balões de tour: 0.

## Exemplo ao vivo

A primeira vez num espaço de trabalho novo. O vazio da lista segue o padrão Estados vazios.

### Projetos

### Primeiros passos

- Criar a conta — (concluído) — Feito. Você já está aqui.
- Criar o primeiro projeto — É onde ficam as telas, as notas e as pessoas de um trabalho. — Criar projeto
- Convidar alguém — Projetos andam melhor a dois. — Convidar
- Escolher o tema — Claro ou escuro. Dá para mudar depois em Configurações. — Claro — Escuro

Tudo pronto

Estes passos ficam em Ajuda, se precisar.

- Crie um projeto pelo passo ou pelo vazio: os dois marcam o mesmo ✓.
- “Ver com exemplos” enche a lista com projetos marcados, que saem num clique.
- Escolha o tema no último passo: o palco troca na hora.
- O X esconde os passos, com Desfazer no aviso.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-pu-clear-samples="" hidden=""><ds-icon name="trash"></ds-icon>Apagar exemplos</button>

<div class="ds-empty ds-empty--compact" data-pu-empty="">
<span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
<p class="ds-empty__title">Seus projetos aparecem aqui</p>
<p class="ds-empty__description">Crie o primeiro ou veja como fica com projetos de exemplo.</p>
<div class="ds-empty__actions">
<button type="button" class="ds-btn ds-btn--primary ds-btn--sm" data-pu-do="projeto"><ds-icon name="plus"></ds-icon>Criar projeto</button>
<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-pu-samples="">Ver com exemplos</button>
</div>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-pu-dismiss="" aria-label="Esconder primeiros passos" data-ds-tooltip="Esconder"><ds-icon name="x"></ds-icon></button>

<div class="ds-progress-field">
<div class="ds-progress-field__head"><span id="pu-progress-label">Progresso</span><span data-pu-count="">1 / 4</span></div>
<progress class="ds-progress ds-progress--success" aria-labelledby="pu-progress-label" aria-valuetext="1 de 4" value="1" max="4" data-pu-progress=""></progress>
</div>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-pu-dismiss="">Fechar</button>

<p class="ds-visually-hidden" role="status" data-pu-live=""></p>
```

## Anatomia

Cinco partes, todas ao lado do trabalho, nenhuma na frente dele.

- 1 — Boas-vindas — Uma frase, com o nome da pessoa, dizendo quanto falta. Nada de vídeo ou carrossel antes de deixar entrar.
- 2 — Primeiros passos — Uma lista curta ao lado do trabalho, com o progresso e um X para esconder. Não bloqueia nada.
- 3 — Passo — O que fazer, por que vale a pena e o botão que faz de verdade. Passo feito ganha o ✓ na hora.
- 4 — Vazio que ensina — Diz o que vai aparecer ali e dá o mesmo botão do passo. Veja Estados vazios.
- 5 — Dados de exemplo — Para ver a tela cheia antes de ter conteúdo. Marcados como exemplo e apagados de uma vez.

## Regras

Seis decisões que valem para qualquer primeira vez.

Aprender fazendo

Cada passo é a ação de verdade, não uma explicação dela. Quem cria o projeto pelo passo já tem um projeto.

Poucos passos, já começados

De três a cinco. O primeiro (criar a conta) já vem feito: a barra começa andando, e terminar parece perto.

Dá para dispensar

O X esconde a lista, com Desfazer, e ela volta pela Ajuda. Ninguém é obrigado a terminar para trabalhar.

O vazio ensina

No lugar da lista, o que vai aparecer ali e o botão para começar. Nada de tela em branco esperando adivinhação.

Exemplo fica marcado

Projetos de exemplo levam a etiqueta “Exemplo” e saem num clique. Nunca se misturam com o que a pessoa criou.

Sem tour de balões

Cinco balões apontando para a interface antes de qualquer ação são pulados por quase todo mundo. Explique no lugar, quando a pessoa chegar lá.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4"></rect><path d="m8 12 3 3 5-6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10 6h10M10 12h10M10 18h10M4 4.5l1.5-1V9M3.5 14c.2-.6.8-1 1.5-1 .8 0 1.5.6 1.5 1.4 0 1.4-3 2.1-3 3.6h3"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3.5 13h5l1.5 2.5h4l1.5-2.5h5"></path><path d="M6 4.5h12l2.5 8.5v5.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V13z"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M20.5 15a2 2 0 0 1-2 2H8l-4.5 3.5V5.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z"></path></svg>
```

## Mensagens

Calorosas sem festa. Cada passo diz por que vale a pena, em uma frase.

| Situação | Evite | Prefira |
| --- | --- | --- |
| Boas-vindas | Bem-vindo ao Lume!!! 🎉 | Boas-vindas, Ana. Três passos e o seu espaço fica pronto. |
| Passo | Configure seu workspace | Convide alguém: projetos andam melhor a dois. |
| Fim | Parabéns! Você completou o onboarding! | Tudo pronto. Estes passos ficam em Ajuda, se precisar. |
| Vazio | Nenhum projeto. | Seus projetos aparecem aqui. Crie o primeiro ou veja com exemplos. |

## Acessibilidade

O progresso precisa ser dito, não só desenhado.

- Passo feito, por escrito — O ✓ é decoração; o estado vai num texto escondido (“concluído”) dentro do título do passo.
- Progresso com texto — O `<progress>` tem rótulo e `aria-valuetext` (“2 de 4”), em vez de uma porcentagem solta.
- O foco segue em frente — Ao concluir um passo, o foco vai para o próximo que falta. No último, para o “Tudo pronto”.
- Anúncios curtos — Uma região `role="status"` diz “Projeto criado. 2 de 4 passos.”, sem tirar o foco de onde está.
- Dispensar pelo teclado — O X tem nome (“Esconder primeiros passos”); ao esconder, o foco vai para a lista de projetos, não se perde.

## Código

A lista de passos é marcação com `<progress>`; o comportamento é seu: marcar, mover o foco e esconder com `toast` e Desfazer.

```html
<aside aria-labelledby="passos-titulo">
  <h2 id="passos-titulo">Primeiros passos</h2>
  <button type="button" class="ds-icon-btn ds-icon-btn--sm" aria-label="Esconder primeiros passos">…</button>

  <div class="ds-progress-field">
    <div class="ds-progress-field__head"><span id="progresso">Progresso</span><span>2 / 4</span></div>
    <progress class="ds-progress ds-progress--success" aria-labelledby="progresso" aria-valuetext="2 de 4" value="2" max="4"></progress>
  </div>

  <ol>
    <li data-done>Criar a conta <span class="ds-visually-hidden">(concluído)</span></li>
    <li>
      Convidar alguém
      <p>Projetos andam melhor a dois.</p>
      <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm">Convidar</button>
    </li>
  </ol>
</aside>
```

```html
import { toast } from 'https://lumeui.dev/v/1.7/lume.js';

function concluir(passo) {
  passo.toggleAttribute('data-done', true);
  passo.querySelector('.ds-visually-hidden').textContent = ' (concluído)';
  barra.value = feitos();
  barra.setAttribute('aria-valuetext', `${feitos()} de 4`);
  proximo(passo)?.querySelector('button').focus();   // o foco segue para o próximo passo
}

function esconder() {
  passos.hidden = true;
  toast('Primeiros passos escondidos', {
    action: { label: 'Desfazer', onClick: () => (passos.hidden = false) },
  });
}
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Primeiro uso termina quando a pessoa fez a primeira coisa que importa, não quando viu todas as telas.

- **Faça:** leve ao primeiro resultado. Escolha o passo que faz a pessoa sentir o valor do produto (aqui, ter um projeto) e coloque-o em segundo, logo depois do que já veio feito.
- **Evite:** formulário longo antes de entrar. Cargo, tamanho da empresa, como conheceu: pergunte depois, quando a resposta mudar alguma coisa para a pessoa.
- **Dica:** Passo feito em outro lugar também conta. Quem criou o projeto pelo menu, e não pelo passo, também ganha o ✓. A lista acompanha o que a pessoa fez, não por onde clicou.
