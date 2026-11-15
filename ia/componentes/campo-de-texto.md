# Campo de texto

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/campo-de-texto

Para a pessoa escrever. Rótulo sempre visível, dica antes do erro e mensagens que dizem como resolver.

Em números: tamanhos: 3 · estados: 6 · formatos: 2 · altura padrão: 40 px.

## Exemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="nome-projeto">Nome do projeto</label>
  <div class="ds-field">
    <input class="ds-field__input" id="nome-projeto" type="text" placeholder="Ex.: Lume" aria-describedby="nome-projeto-dica">
  </div>
  <div class="ds-form-field__footer">
    <p class="ds-form-field__hint" id="nome-projeto-dica">Aparece no menu e na busca.</p>
  </div>
</div>
```

## Anatomia

Seis partes; só rótulo e contêiner são obrigatórios.

- 1 — Rótulo — Sempre visível, acima do campo, em `text.label-md`. Marque o que é opcional — não o obrigatório.
- 2 — Contêiner — Altura `size.control.*`, contorno `border.control`, raio `radius.md`.
- 3 — Ícone — Opcional. Só quando ajuda a reconhecer o tipo de dado — busca, e-mail, data.
- 4 — Texto e placeholder — O placeholder dá um exemplo do formato; nunca substitui o rótulo.
- 5 — Dica ou erro — Uma linha logo abaixo. O erro ocupa o lugar da dica e diz como resolver.
- 6 — Contador — Só quando existe limite. Fica vermelho ao passar do máximo.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<span class="ds-form-field__label">E-mail de trabalho</span>
<div class="ds-field">
<span><ds-icon name="mail"></ds-icon></span>
<span class="ds-field__placeholder">nome@empresa.com</span>
</div>
<div class="ds-form-field__footer">
<span class="ds-form-field__hint">Vamos usar para avisos da conta.</span>
<span class="ds-form-field__counter">0/40</span>
</div>
</div>
```

## Tamanhos

Dentro de um `.ds-form-field` o padrão é o médio. Use o mesmo tamanho dos botões ao lado.

Pequeno `ds-field--sm` — 32 px · Filtros e barras densas.

Médio `padrão` — 40 px · Padrão de formulário.

Grande `ds-field--lg` — 48 px · Telas de toque e formulários curtos de destaque.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-size-sm">Pequeno</label>
<div class="ds-field ds-field--sm"><ds-icon name="search"></ds-icon><input class="ds-field__input" id="tf-size-sm" type="text" placeholder="Buscar"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-size-md">Médio</label>
<div class="ds-field"><ds-icon name="search"></ds-icon><input class="ds-field__input" id="tf-size-md" type="text" placeholder="Buscar"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-size-lg">Grande</label>
<div class="ds-field ds-field--lg"><ds-icon name="search"></ds-icon><input class="ds-field__input" id="tf-size-lg" type="text" placeholder="Buscar"></div>
</div>
```

## Estados

Hover e foco também podem ser forçados com `data-state` no `.ds-field`, para documentar e testar.

Padrão — Contorno discreto; o rótulo identifica o campo.

Hover — O contorno fica mais forte.

Foco — Contorno na cor de foco e um halo suave.

Somente leitura — Fundo rebaixado: dá para ler e copiar, não para editar.

Desativado — Opacidade reduzida e fora da ordem de foco.

Inválido — Contorno e mensagem de perigo, ligados por aria-describedby.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-default">Slug do projeto</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-default" type="text" placeholder="lume-ds"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-hover">Slug do projeto</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-hover" type="text" placeholder="lume-ds"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-focus">Slug do projeto</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-focus" type="text" placeholder="lume-ds"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-readonly">Slug do projeto</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-readonly" type="text" placeholder="lume-ds" value="lume-design-system" readonly=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-disabled">Slug do projeto</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-disabled" type="text" placeholder="lume-ds" disabled=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-invalid">Slug do projeto</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-invalid" type="text" placeholder="lume-ds" value="Lume DS!" aria-invalid="true" aria-describedby="tf-state-invalid-error"></div>
<div class="ds-form-field__footer">
<p class="ds-form-field__error" id="tf-state-invalid-error"><ds-icon name="alert-circle"></ds-icon><span>Use só letras, números e hífen.</span></p>
</div>
</div>
```

## Multilinha

Para textos de mais de uma frase. Mesmo contêiner, com `.ds-field--multiline` e um `<textarea>` que cresce na vertical.

```html
<div class="ds-field ds-field--multiline">
  <textarea class="ds-field__input" id="descricao" rows="4"></textarea>
</div>
```

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-bio">Descrição do projeto<span class="ds-form-field__optional">opcional</span></label>
<div class="ds-field ds-field--multiline">
<textarea class="ds-field__input" id="tf-bio" rows="4" maxlength="200" aria-describedby="tf-bio-hint" placeholder="Conte em poucas linhas para que serve.">Um design system plano e calmo, com tokens em OKLCH.</textarea>
</div>
<div class="ds-form-field__footer">
<p class="ds-form-field__hint" id="tf-bio-hint">Aparece no topo da página do projeto.</p>
<span class="ds-form-field__counter" data-counter-for="tf-bio">52/200</span>
</div>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Validação

Valide quando a pessoa sai do campo ou envia — nunca a cada tecla. A mensagem troca a dica e diz o que fazer.

Evite

“E-mail inválido.”

Prefira

“Use um e-mail completo, como nome@empresa.com.”

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-email">E-mail de trabalho</label>
<div class="ds-field"><ds-icon name="mail"></ds-icon><input class="ds-field__input" id="tf-email" type="email" autocomplete="email" placeholder="nome@empresa.com" aria-describedby="tf-email-msg"></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="tf-email-msg" data-msg="">Vamos usar para avisos da conta.</p></div>
</div>

<button type="submit" class="ds-btn ds-btn--primary">Continuar</button>

<button type="reset" class="ds-btn ds-btn--ghost">Limpar</button>
```

## Acessibilidade

O que garante que todo mundo consiga preencher.

- Rótulo de verdade — `<label for>` ligado ao `id` do campo. Clicar no rótulo foca o campo; o leitor de tela anuncia o nome.
- Placeholder não é rótulo — Some ao digitar e tem contraste menor. Use só como exemplo de formato.
- Dica e erro anunciados — `aria-describedby` aponta para a dica ou para o erro, e o campo inválido ganha `aria-invalid="true"`.
- Erro não depende só da cor — A mensagem tem ícone e texto, além do contorno vermelho.
- Teclado — Tab Shift + Tab — Tab entra, Shift + Tab volta; nada prende o foco dentro do campo.
- Preenchimento automático — Use `type` e `autocomplete` certos (email, name, tel) para o navegador e os gerenciadores ajudarem.

## Tokens usados

Tudo o que o campo consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| size.control.md (`--ds-size-control-md`) | Altura (médio) | 40 px | 40 px |
| radius.md (`--ds-radius-md`) | Raio | 12 px | 12 px |
| text.label-md (`--ds-text-label-md`) | Rótulo | 14/20 · medium | 14/20 · medium |
| text.body-sm (`--ds-text-body-sm`) | Texto digitado, dica e erro | 14/22 · regular | 14/22 · regular |
| space.075 (`--ds-space-075`) | Rótulo → campo → dica | 6 px | 6 px |
| color.border.control (`--ds-color-border-control`) | Contorno | #3E516633 | #FFFFFF21 |
| color.border.strong (`--ds-color-border-strong`) | Contorno no hover | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Contorno e halo no foco | #53657A | #C0CAD6 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Placeholder, ícone e dica | #53657A | #9C9792 |
| color.bg.sunken (`--ds-color-bg-sunken`) | Fundo somente leitura | #E8EDF3 | #151412 |
| color.danger.solid (`--ds-color-danger-solid`) | Contorno inválido | #C13834 | #FF9087 |
| color.danger.fg (`--ds-color-danger-fg`) | Mensagem de erro | #C13834 | #FFB2AA |
| duration.fast (`--ds-duration-fast`) | Transição do contorno | 120ms | 120ms |
| opacity.disabled (`--ds-opacity-disabled`) | Desativado | 0.44 | 0.44 |

## Uso

Três regras para formulários que não dão trabalho.

- **Faça:** rótulo em cima, dica embaixo. A pessoa sabe o que escrever antes de começar.
- **Evite:** placeholder no lugar do rótulo. Ao digitar, o “rótulo” some — e com ele, o contexto.
- **Dica:** Tamanho conta o que cabe. Um CEP curto num campo curto já explica o formato.
