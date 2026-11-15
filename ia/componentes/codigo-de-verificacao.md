# Código de verificação

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/codigo-de-verificacao

Para o código de login em duas etapas. Parece seis casas, mas é um campo só, e por isso colar e o preenchimento automático do celular funcionam sem esforço.

Em números: casas: à escolha · campos reais: 1 · autocomplete: one-time-code · tipos: 2.

## Exemplo

```html
<div class="ds-otp"><input class="ds-otp__input" id="codigo" name="codigo" aria-label="Código de verificação"></div>

<script type="module">
  import { createOtpField } from 'https://lumeui.dev/v/1.3/lume.js';
  createOtpField(document.querySelector('.ds-otp'), {
    length: 6,
    onComplete: (code) => verificar(code),
  });
</script>
```

## Variantes

O número de casas segue o seu serviço de verificação.

Seis dígitos `length: 6` — O mais comum, e só aceita números.

Em dois grupos `group: 3` — Fica mais fácil de ler e memorizar.

Quatro dígitos `length: 4` — Códigos mais curtos, como um PIN.

Letras e números `alphanumeric` — Vira maiúsculas sozinho.

Marcação dos exemplos desta seção:

```html
<div class="ds-otp" data-otp=""><input class="ds-otp__input" id="otp-six" name="otp-six" aria-label="Código de verificação" type="text" maxlength="6" autocomplete="one-time-code" inputmode="numeric" autocapitalize="off" spellcheck="false" pattern="\d{6}"><div class="ds-otp__boxes" aria-hidden="true"><span class="ds-otp__box" data-box="0"></span><span class="ds-otp__box" data-box="1"></span><span class="ds-otp__box" data-box="2"></span><span class="ds-otp__box" data-box="3"></span><span class="ds-otp__box" data-box="4"></span><span class="ds-otp__box" data-box="5"></span></div></div>

<div class="ds-otp" data-otp=""><input class="ds-otp__input" id="otp-group" name="otp-group" aria-label="Código de verificação" type="text" maxlength="6" autocomplete="one-time-code" inputmode="numeric" autocapitalize="off" spellcheck="false" pattern="\d{6}"><div class="ds-otp__boxes" aria-hidden="true"><span class="ds-otp__box" data-box="0"></span><span class="ds-otp__box" data-box="1"></span><span class="ds-otp__box" data-box="2"></span><span class="ds-otp__gap"></span><span class="ds-otp__box" data-box="3"></span><span class="ds-otp__box" data-box="4"></span><span class="ds-otp__box" data-box="5"></span></div></div>

<div class="ds-otp" data-otp=""><input class="ds-otp__input" id="otp-four" name="otp-four" aria-label="Código de verificação" type="text" maxlength="4" autocomplete="one-time-code" inputmode="numeric" autocapitalize="off" spellcheck="false" pattern="\d{4}"><div class="ds-otp__boxes" aria-hidden="true"><span class="ds-otp__box" data-box="0"></span><span class="ds-otp__box" data-box="1"></span><span class="ds-otp__box" data-box="2"></span><span class="ds-otp__box" data-box="3"></span></div></div>

<div class="ds-otp" data-otp=""><input class="ds-otp__input" id="otp-alpha" name="otp-alpha" aria-label="Código de verificação" type="text" maxlength="6" autocomplete="one-time-code" inputmode="text" autocapitalize="characters" spellcheck="false" pattern="[0-9A-Za-z]{6}"><div class="ds-otp__boxes" aria-hidden="true"><span class="ds-otp__box" data-box="0"></span><span class="ds-otp__box" data-box="1"></span><span class="ds-otp__box" data-box="2"></span><span class="ds-otp__box" data-box="3"></span><span class="ds-otp__box" data-box="4"></span><span class="ds-otp__box" data-box="5"></span></div></div>
```

## Estados

Foco e erro podem ser forçados com `data-state` e `data-error`.

Marcação dos exemplos desta seção:

```html
<div class="ds-otp">
<div class="ds-otp__boxes"><span class="ds-otp__box"></span><span class="ds-otp__box"></span><span class="ds-otp__box"></span><span class="ds-otp__box"></span><span class="ds-otp__box"></span><span class="ds-otp__box"></span></div>
</div>

<div class="ds-otp">
<div class="ds-otp__boxes"><span class="ds-otp__box" data-filled="">4</span><span class="ds-otp__box" data-filled="">8</span><span class="ds-otp__box" data-filled="">2</span><span class="ds-otp__box" data-active=""></span><span class="ds-otp__box"></span><span class="ds-otp__box"></span></div>
</div>

<div class="ds-otp">
<div class="ds-otp__boxes"><span class="ds-otp__box" data-filled="">4</span><span class="ds-otp__box" data-filled="">8</span><span class="ds-otp__box" data-filled="">2</span><span class="ds-otp__box" data-filled="">9</span><span class="ds-otp__box" data-filled="">1</span><span class="ds-otp__box" data-filled="">3</span></div>
</div>

<div class="ds-otp" data-error="">
<div class="ds-otp__boxes"><span class="ds-otp__box" data-filled="">4</span><span class="ds-otp__box" data-filled="">8</span><span class="ds-otp__box" data-filled="">2</span><span class="ds-otp__box" data-filled="">9</span><span class="ds-otp__box" data-filled="">1</span><span class="ds-otp__box" data-filled="">3</span></div>
</div>
```

## Numa tela de verificação

Experimente: o código certo aqui é 123456. Errar mostra a mensagem, limpa o campo e devolve o foco, para tentar de novo sem usar o mouse.

Confirme que é você

Enviamos um código de 6 dígitos para ana@lume.dev.

Marcação dos exemplos desta seção:

```html
<div class="ds-otp" data-otp=""><input class="ds-otp__input" id="otp-verify" name="otp-verify" aria-label="Código de verificação" aria-describedby="otp-verify-error" type="text" maxlength="6" autocomplete="one-time-code" inputmode="numeric" autocapitalize="off" spellcheck="false" pattern="\d{6}"><div class="ds-otp__boxes" aria-hidden="true"><span class="ds-otp__box" data-box="0"></span><span class="ds-otp__box" data-box="1"></span><span class="ds-otp__box" data-box="2"></span><span class="ds-otp__box" data-box="3"></span><span class="ds-otp__box" data-box="4"></span><span class="ds-otp__box" data-box="5"></span></div></div>

<p class="ds-form-field__error" data-verify-error="" hidden="" id="otp-verify-error"><ds-icon name="alert-circle"></ds-icon><span>Código incorreto. Confira e tente de novo.</span></p>

<button type="button" class="ds-inline-action" data-resend=""><ds-icon name="refresh"></ds-icon>Enviar outro código</button>
```

## Acessibilidade

Um único input evita os problemas das várias caixas: o leitor de tela lê um campo só, com um nome só.

- Preenchimento automático — Com autocomplete="one-time-code", o celular sugere o código que chegou por SMS.
- Colar — Ctrl V — Colar funciona de qualquer casa, e o que não for dígito é ignorado.
- Teclado numérico — No celular, inputmode="numeric" abre o teclado de números.
- Casas escondidas — As casas têm aria-hidden: são só desenho. Quem usa leitor de tela ouve o campo, não seis caixas.
- Erro com texto — Além do contorno vermelho, escreva o que houve e ligue a mensagem por aria-describedby.

## Tokens usados

Tudo o que o campo consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.field (`--ds-color-bg-field`) | Fundo da casa | #FFFFFF | #2C2A27 |
| color.border.default (`--ds-color-border-default`) | Contorno | #3E516633 | #FFFFFF1A |
| color.border.strong (`--ds-color-border-strong`) | Contorno no hover e divisor do grupo | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Casa ativa | #53657A | #C0CAD6 |
| color.danger.solid (`--ds-color-danger-solid`) | Contorno no erro | #C13834 | #FF9087 |
| color.fg.default (`--ds-color-fg-default`) | Dígito e cursor | #2B3847 | #F3EDE5 |
| radius.md (`--ds-radius-md`) | Cantos da casa | 12 px | 12 px |
| opacity.disabled (`--ds-opacity-disabled`) | Desativado | 0.44 | 0.44 |

## Uso

Quando usar e o que oferecer junto.

- **Faça:** verificar sozinho. Com o código completo, confira sem pedir mais um clique.
- **Evite:** senha ou PIN visível. Os dígitos ficam à mostra, porque o código é de uso único. Para segredos que se repetem, use um campo de senha.
- **Dica:** Sempre um plano B. Ofereça “Enviar outro código” e diga para onde ele foi.
