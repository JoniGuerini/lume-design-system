# Campo de senha

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/campo-de-senha

O campo de texto para senhas, com o botão de mostrar e esconder. Mostrar evita erro de digitação sem pedir a senha duas vezes.

Em números: botão: aria-pressed · foco: no campo · preenchimento: autocomplete · tamanhos: 3.

## Exemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="senha">Senha</label>
  <div class="ds-field"><input class="ds-field__input" id="senha" name="senha" type="password" autocomplete="current-password"></div>
</div>

<script type="module">
  import { createPasswordField } from 'https://lumeui.dev/v/1.11/lume.js';
  createPasswordField(document.querySelector('#senha'));
</script>
```

## Entrar e criar

A diferença está no `autocomplete`: ele diz ao navegador e ao gerenciador de senhas se é para preencher a senha salva ou sugerir uma nova.

Entrar `current-password` — Preenche a senha salva.

Criar conta `new-password` — O gerenciador sugere uma senha forte. Diga os requisitos na dica, à vista.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="pw-current">Senha</label>
<div class="ds-field"><input class="ds-field__input" id="pw-current" type="password" autocomplete="current-password" value="lume2026"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action" aria-pressed="false" aria-label="Mostrar senha"><ds-icon name="eye"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pw-new">Nova senha</label>
<div class="ds-field"><input class="ds-field__input" id="pw-new" type="password" autocomplete="new-password" value="lume2026" aria-describedby="pw-new-hint"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action" aria-pressed="false" aria-label="Mostrar senha"><ds-icon name="eye"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="pw-new-hint">Pelo menos 8 caracteres.</p></div>
</div>
```

## Estados

Os mesmos do Campo de texto. O olho cortado diz que a senha está à vista.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<span class="ds-form-field__label">Senha</span>
<div class="ds-field"><input class="ds-field__input" type="password" value="lume2026" aria-label="Senha"><span class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action"><ds-icon name="eye"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Senha</span>
<div class="ds-field"><input class="ds-field__input" type="text" value="lume2026" aria-label="Senha"><span class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action"><ds-icon name="eye-off"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Senha</span>
<div class="ds-field"><input class="ds-field__input" type="password" value="lume2026" aria-label="Senha" disabled=""><span class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action"><ds-icon name="eye"></ds-icon></span></div>
</div>
```

## Código

Ao enviar o formulário, a senha volta a ficar escondida, para o navegador oferecer salvá-la.

```html
<div class="ds-field">
  <input class="ds-field__input" id="senha" name="senha" type="password" autocomplete="current-password">
</div>

<script type="module">
  import { createPasswordField } from 'https://lumeui.dev/v/1.11/lume.js';
  const senha = createPasswordField(document.querySelector('#senha'));
  // senha.visible · senha.show() · senha.hide() · senha.toggle()
</script>

// React
<Field label="Senha">
  <PasswordField name="senha" autoComplete="new-password" />
</Field>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

O botão é um interruptor: o nome não muda, o estado sim.

- Nome fixo, estado em aria-pressed — O leitor de tela ouve “Mostrar senha, botão, pressionado” quando a senha está à vista.
- O cursor não sai — Clicar no olho não tira o foco do campo: dá para mostrar, conferir e continuar digitando.
- Pelo teclado — Tab Espaço — Tab chega ao botão depois do campo; Espaço ou Enter alternam.

## Tokens usados

Além dos tokens do Campo de texto.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.fg.muted (`--ds-color-fg-muted`) | Ícone do olho | #46586E | #CEC8C1 |
| color.bg.hover (`--ds-color-bg-hover`) | Botão no hover | #3E51660D | #FFFFFF0D |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** um campo só. Com o olho, “confirmar senha” sobra: a pessoa confere vendo.
- **Evite:** bloquear colar. Quem usa gerenciador de senhas cola a senha. Bloquear colar só atrapalha.
- **Dica:** Requisitos à vista. Diga as regras antes do erro, na dica. O padrão Login e cadastro marca cada uma enquanto a pessoa digita.
