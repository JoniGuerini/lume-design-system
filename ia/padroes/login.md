# Login e cadastro

Seção do Lume: Padrões. Página: https://lumeui.dev/#/padroes/login

A primeira tela do produto — e a que mais gente abandona. Peça só o necessário, deixe ver a senha, explique o erro sem entregar quem tem conta e nunca prenda a pessoa do lado de fora.

Em números: campos para entrar: 2 · campos para criar conta: 3 · ação principal: 1 · “confirmar senha”: 0.

## Exemplo ao vivo

Três telas que se ligam: entrar, criar conta e recuperar a senha. A conta de teste aceita qualquer e-mail com a senha `lume2026`; `ana@lume.app` já tem cadastro.

Lume

### Confira seu e-mail

- Entre com outra senha: o erro não diz qual dos dois está errado.
- O olho mostra a senha; os requisitos do cadastro marcam enquanto você digita.
- Na recuperação, a resposta é a mesma exista a conta ou não.

Marcação dos exemplos desta seção:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Tela do exemplo" data-lc-views="">
<button type="button" class="ds-segmented__item" role="radio" data-lc-view-option="login" aria-checked="true">Entrar</button><button type="button" class="ds-segmented__item" role="radio" data-lc-view-option="signup" aria-checked="false">Criar conta</button><button type="button" class="ds-segmented__item" role="radio" data-lc-view-option="recover" aria-checked="false">Recuperar senha</button>
</div>

<button type="button" class="ds-theme-toggle" data-lc-theme="dark" aria-pressed="false" aria-label="Tema do exemplo" data-ds-tooltip="Alternar claro e escuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<form class="ds-form" data-lc-view="login" id="lc-login" aria-labelledby="lc-login-title" novalidate="">
<header>
<p><img src="assets/favicon.svg" alt="" width="24" height="24">Lume</p>
<h3><span id="lc-login-title">Entrar no Lume</span></h3>
</header>
<div data-lc-alert=""></div>
<div class="ds-form-field">
<label class="ds-form-field__label" for="lc-login-email">E-mail</label>
<div class="ds-field"><input class="ds-field__input" id="lc-login-email" name="email" type="email" required="" autocomplete="username" inputmode="email" autocapitalize="none" spellcheck="false" data-error-required="Informe o e-mail da conta."></div>
</div>
<div>
<div class="ds-form-field">
<label class="ds-form-field__label" for="lc-login-senha">Senha</label>
<div class="ds-field"><input class="ds-field__input" id="lc-login-senha" name="senha" type="password" required="" autocomplete="current-password" spellcheck="false" data-error-required="Informe a senha."><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action" data-lc-reveal="" aria-pressed="false" aria-label="Mostrar senha" data-ds-tooltip="Mostrar senha"><ds-icon name="eye"></ds-icon></button></div>
</div>
<button type="button" class="ds-inline-action" data-lc-go="recover">Esqueci a senha</button>
</div>
<button type="submit" class="ds-btn ds-btn--primary" data-lc-submit="">Entrar</button>
<p>Não tem conta? <button type="button" data-lc-go="signup">Criar conta</button></p>
</form>

<form class="ds-form" id="lc-recover" aria-labelledby="lc-recover-title" novalidate="">
<header>
<p><img src="assets/favicon.svg" alt="" width="24" height="24">Lume</p>
<h3><span id="lc-recover-title">Recuperar a senha</span></h3>
<p>Mandamos um link para criar uma senha nova.</p>
</header>
<div class="ds-form-field">
<label class="ds-form-field__label" for="lc-recover-email">E-mail</label>
<div class="ds-field"><input class="ds-field__input" id="lc-recover-email" name="email" type="email" required="" autocomplete="username" inputmode="email" autocapitalize="none" spellcheck="false" data-error-required="Informe o e-mail da conta."></div>
</div>
<button type="submit" class="ds-btn ds-btn--primary" data-lc-submit="">Enviar link</button>
<p><button type="button" data-lc-go="login"><ds-icon name="arrow-left"></ds-icon>Voltar para entrar</button></p>
</form>

<svg class="ds-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"></rect><path d="m3.5 7.5 8.5 6 8.5-6"></path></svg>

<button type="button" class="ds-btn ds-btn--secondary" data-lc-go="login">Voltar para entrar</button>
```

## Regras

Seis decisões que valem para qualquer tela de acesso.

Só o necessário

Entrar pede e-mail e senha. Criar conta pede nome, e-mail e senha. O resto — foto, empresa, cargo — fica para depois, dentro do produto.

Mostrar a senha

Um botão dentro do campo (`.ds-field__action`) mostra o que foi digitado. É ele que evita o erro de digitação — não um segundo campo.

Sem “confirmar senha”

Nem “confirmar e-mail”. Repetir o campo dobra o trabalho e não pega o erro que importa. Quem errou o e-mail recupera pelo link.

Requisitos à vista

As regras da senha aparecem antes de digitar e vão sendo marcadas enquanto a pessoa escreve — não depois de um erro.

O erro não entrega quem tem conta

No login, “e-mail ou senha incorretos” — nunca qual dos dois. Na recuperação, a mesma resposta exista a conta ou não.

Deixe colar e preencher

Nada de bloquear colar. Com `autocomplete` certo, o gerenciador de senhas preenche o login e sugere uma senha forte no cadastro.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M14 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5z"></path><path d="M14 3.5v5h5M9 13h6M9 16.5h4"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m9 9 6 6M15 9l-6 6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m8.5 12 2.5 2.5 4.5-5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5l7.5 2.8v5.4c0 4.4-3.1 7.9-7.5 8.8-4.4-.9-7.5-4.4-7.5-8.8V6.3z"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="2.5"></rect><path d="M8 10.5v-3a4 4 0 0 1 8 0v3"></path></svg>
```

## Mensagens

Toda mensagem diz o que fazer em seguida. No acesso, ela também não pode ajudar quem tenta adivinhar contas alheias.

| Situação | Evite | Prefira |
| --- | --- | --- |
| Senha errada | Senha inválida para este usuário | E-mail ou senha incorretos. Confira e tente de novo, ou redefina a senha. |
| Muitas tentativas | Conta bloqueada! | Muitas tentativas seguidas. Tente de novo em 5 minutos ou redefina a senha. |
| E-mail já usado | Erro 409: conflito | Já existe uma conta com esse e-mail. Quer entrar? |
| Senha fraca | Senha não atende à política | Use pelo menos 8 caracteres, com uma letra e um número. |
| Link enviado | E-mail enviado com sucesso! | Se houver uma conta com esse e-mail, o link chega em alguns minutos. |
| Link vencido | Token inválido | Esse link venceu — ele vale por 1 hora. Peça um novo. |

## Acessibilidade

Entrar não pode depender de memória, visão perfeita ou pressa. A WCAG 2.2 tem um critério só para isso: autenticação acessível (3.3.8).

- autocomplete certo — `username` e `current-password` no login, `email` e `new-password` no cadastro. O gerenciador de senhas preenche e sugere — ninguém precisa decorar nada.
- Colar sempre funciona — Bloquear colar empurra para senhas fracas e quebra os gerenciadores. Nem no e-mail, nem na senha.
- Mostrar senha com estado — O botão tem nome fixo (“Mostrar senha”) e `aria-pressed` diz se está ligado. O foco não sai do lugar.
- Requisitos ligados ao campo — A lista entra no `aria-describedby` da senha; cada item diz em texto se já foi atendido — não só pela cor do ✓.
- Erro de acesso em alerta — “E-mail ou senha incorretos.” aparece num `.ds-alert` com `role="alert"`; a senha é apagada e recebe o foco para a próxima tentativa.
- Sem teste de memória — Nada de CAPTCHA de imagem ou pergunta secreta como única saída. Se precisar barrar robôs, ofereça um caminho que não dependa de decifrar letras.

## Código

O login é um formulário comum com `createForm`: os campos, o botão de mostrar senha e a resposta do servidor num alerta.

```html
<form class="ds-form" id="entrar" novalidate>
  <div class="ds-form-field">
    <label class="ds-form-field__label" for="email">E-mail</label>
    <div class="ds-field">
      <input class="ds-field__input" id="email" name="email" type="email" required
        autocomplete="username" inputmode="email" autocapitalize="none" spellcheck="false">
    </div>
  </div>
  <div class="ds-form-field">
    <label class="ds-form-field__label" for="senha">Senha</label>
    <div class="ds-field">
      <input class="ds-field__input" id="senha" name="senha" type="password" required
        autocomplete="current-password">
      <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action"
        aria-pressed="false" aria-label="Mostrar senha" data-mostrar-senha>
        <ds-icon name="eye" size="16"></ds-icon>
      </button>
    </div>
  </div>
  <button type="submit" class="ds-btn ds-btn--primary">Entrar</button>
</form>
```

```html
import { createForm } from 'https://lumeui.dev/v/1.0/lume.js';

// mostrar senha: troca o tipo do campo e marca o botão
document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-mostrar-senha]');
  if (!button) return;
  const input = button.closest('.ds-field').querySelector('input');
  const show = input.type === 'password';
  input.type = show ? 'text' : 'password';
  button.setAttribute('aria-pressed', String(show));
});

createForm(document.querySelector('#entrar'), {
  summary: false, // dois campos: o erro aparece em cada um
  async onSubmit(dados) {
    const ok = await entrar(dados.email, dados.senha);
    if (!ok) mostrarAlerta('E-mail ou senha incorretos.'); // nunca diga qual dos dois
  },
});
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

A tela de acesso fica fora do app: sem sidebar, sem navegação — só a marca e o formulário.

- **Faça:** entre direto depois do cadastro. Quem acabou de criar a conta já está dentro. Pedir para entrar de novo, com os mesmos dados, é perder gente na porta.
- **Evite:** regras de senha escondidas. Descobrir a regra só depois do erro — “precisa de um caractere especial” — faz a pessoa adivinhar duas vezes. Mostre antes, marque enquanto digita.
- **Dica:** Um caminho de volta em cada tela. Entrar leva a criar conta e a recuperar a senha; as duas voltam para entrar. Ninguém fica preso num beco.
