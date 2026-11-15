# Campo de tags

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/campo-de-tags

Para vários valores livres dentro de um campo só, como assuntos, destinatários ou palavras-chave. Se as opções são uma lista fechada, use a Seleção múltipla.

Em números: criar tag: Enter · , · colar lista: sim · repetidas: recusadas · valor enviado: a,b,c.

## Exemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="assuntos">Assuntos</label>
  <div class="ds-field ds-tags"><input class="ds-field__input" id="assuntos" name="assuntos" type="text" placeholder="Digite e tecle Enter"></div>
</div>

<script type="module">
  import { createTagField } from 'https://lumeui.dev/v/1.6/lume.js';
  createTagField(document.querySelector('#assuntos'), {
    value: ['design', 'tokens'],
  });
</script>
```

## Variantes

O campo cresce em linhas conforme as tags entram. Regras próprias explicam por que uma tag não entrou.

Livre `createTagField` — Qualquer texto vira tag, sem repetir.

Com limite `max` — Passou de 3, o campo avisa e a tag não entra.

Com regra `validate` — Só aceita e-mail, e a mensagem diz o que faltou.

Muitas tags `várias linhas` — O campo cresce em vez de esconder valores.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-free">Assuntos</label>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag">
<span class="ds-tags__text">design</span>
<button type="button" class="ds-tags__remove" data-remove="0" aria-label="Remover design"><ds-icon name="x"></ds-icon></button>
</li><li class="ds-tags__tag">
<span class="ds-tags__text">tokens</span>
<button type="button" class="ds-tags__remove" data-remove="1" aria-label="Remover tokens"><ds-icon name="x"></ds-icon></button>
</li></ul><input class="ds-field__input" id="tf-free" type="text" autocomplete="off" data-ds-filled="design,tokens"><input type="hidden" name="tf-free" value="design,tokens"></div><span class="ds-visually-hidden" role="status"></span>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-max">Palavras-chave</label>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag">
<span class="ds-tags__text">design</span>
<button type="button" class="ds-tags__remove" data-remove="0" aria-label="Remover design"><ds-icon name="x"></ds-icon></button>
</li><li class="ds-tags__tag">
<span class="ds-tags__text">tokens</span>
<button type="button" class="ds-tags__remove" data-remove="1" aria-label="Remover tokens"><ds-icon name="x"></ds-icon></button>
</li></ul><input class="ds-field__input" id="tf-max" type="text" autocomplete="off" data-ds-filled="design,tokens"><input type="hidden" name="tf-max" value="design,tokens"></div><span class="ds-visually-hidden" role="status"></span>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="tf-max-hint">Até 3 palavras-chave.</p></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-email">Convidar</label>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag">
<span class="ds-tags__text">ana@lume.dev</span>
<button type="button" class="ds-tags__remove" data-remove="0" aria-label="Remover ana@lume.dev"><ds-icon name="x"></ds-icon></button>
</li></ul><input class="ds-field__input" id="tf-email" type="text" autocomplete="off" data-ds-filled="ana@lume.dev"><input type="hidden" name="tf-email" value="ana@lume.dev"></div><span class="ds-visually-hidden" role="status"></span>
</div>
```

## Estados

Hover e foco seguem o Campo de texto e podem ser forçados com `data-state`.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<span class="ds-form-field__label">Assuntos</span>
<div class="ds-field ds-tags"><input class="ds-field__input" type="text" aria-label="Assuntos" placeholder="Digite e tecle Enter"></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Assuntos</span>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag"><span class="ds-tags__text">design</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li><li class="ds-tags__tag"><span class="ds-tags__text">tokens</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li></ul><input class="ds-field__input" type="text" aria-label="Assuntos"></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Assuntos</span>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag"><span class="ds-tags__text">design</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li><li class="ds-tags__tag" data-armed=""><span class="ds-tags__text">tokens</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li></ul><input class="ds-field__input" type="text" aria-label="Assuntos"></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Assuntos</span>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag"><span class="ds-tags__text">design</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li><li class="ds-tags__tag"><span class="ds-tags__text">tokens</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li></ul><input class="ds-field__input" type="text" aria-label="Assuntos" aria-invalid="true"></div>
<p class="ds-form-field__error"><ds-icon name="alert-circle"></ds-icon><span>“tokens” já está na lista.</span></p>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Assuntos</span>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag"><span class="ds-tags__text">design</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li><li class="ds-tags__tag"><span class="ds-tags__text">tokens</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li></ul><input class="ds-field__input" type="text" aria-label="Assuntos" disabled=""></div>
</div>
```

## Código

Funciona com `createForm`: com `required`, ter pelo menos uma tag já basta.

```html
import { createTagField } from 'https://lumeui.dev/v/1.6/lume.js';

const tags = createTagField(document.querySelector('#assuntos'), {
  value: ['design', 'tokens'],
  max: 5,
  validate: (text) => (text.length > 20 ? 'Use até 20 caracteres.' : null),
  onChange: (values) => console.log(values),
});

// no envio: assuntos=design,tokens
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Dá para fazer tudo pelo teclado, e cada mudança é anunciada.

- Criar — Enter , — Enter ou vírgula criam a tag. Sair do campo também cria a que estava sendo digitada, para nada se perder.
- Apagar sem susto — Backspace — Backspace com o campo vazio primeiro marca a última tag; só o segundo apaga.
- Botão com nome — Tab — Cada × é um botão no Tab, com o nome da tag: “Remover design”.
- Mudanças anunciadas — Uma região role="status" avisa o que entrou e o que saiu.

## Tokens usados

Além dos tokens do Campo de texto.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.border.control (`--ds-color-border-control`) | Contorno da tag | #3E516633 | #FFFFFF21 |
| color.border.strong (`--ds-color-border-strong`) | Tag marcada | #3E51664D | #FFFFFF29 |
| color.bg.selected (`--ds-color-bg-selected`) | Fundo da tag marcada | #3E516612 | #C0CAD61A |
| color.fg.subtle (`--ds-color-fg-subtle`) | Ícone × | #5C6C7F | #9C9792 |
| color.bg.hover (`--ds-color-bg-hover`) | × no hover | #3E51660D | #FFFFFF0D |
| radius.full (`--ds-radius-full`) | Tag | 9999 px | 9999 px |
| text.label-sm (`--ds-text-label-sm`) | Texto da tag | 13/18 · medium | 13/18 · medium |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** valores abertos. Assuntos, e-mails para convidar, palavras-chave: o que a pessoa escreve, não o que escolhe.
- **Evite:** lista fechada. Se as opções já são conhecidas, a Seleção múltipla evita erro de digitação.
- **Dica:** Ensine a criar. Um placeholder como “Digite e tecle Enter” resolve na primeira vez.
