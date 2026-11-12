# Checkbox e radio

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/checkbox-radio

Checkbox para marcar itens independentes; radio para escolher um só entre poucas opções. Os dois com rótulo clicável.

Em números: controles: 2 · estados: 7 · tamanho: 18 px · área de clique: rótulo.

## Exemplo

```html
<label class="ds-checkbox">
  <input type="checkbox" class="ds-checkbox__input" checked>
  <span class="ds-choice__text">
    <span class="ds-choice__label">Receber novidades</span>
    <span class="ds-choice__description">Uma vez por mês, sem spam.</span>
  </span>
</label>
```

## Checkbox ou radio?

A pergunta é uma só: dá para marcar mais de uma opção?

Checkbox `ds-checkbox` — Várias, nenhuma ou todas. Cada uma vale sozinha.

Radio `ds-radio` — Exatamente uma. Escolher outra desmarca a anterior.

Marcação dos exemplos desta seção:

```html
<fieldset class="ds-choice-group">
<legend class="ds-choice-group__legend">Avisar por</legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-q-email" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">E-mail</span></span>
</label>
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-q-push" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Notificação no celular</span></span>
</label>
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-q-sms">
<span class="ds-choice__text"><span class="ds-choice__label">SMS</span></span>
</label>
</div>
</fieldset>

<fieldset class="ds-choice-group">
<legend class="ds-choice-group__legend">Plano</legend>
<div class="ds-choice-group__items">
<label class="ds-radio">
<input type="radio" class="ds-radio__input" id="cr-q-mensal" name="cr-plano" value="mensal">
<span class="ds-choice__text"><span class="ds-choice__label">Mensal</span><span class="ds-choice__description">R$&nbsp;49 por mês</span></span>
</label>
<label class="ds-radio">
<input type="radio" class="ds-radio__input" id="cr-q-anual" name="cr-plano" value="anual" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Anual</span><span class="ds-choice__description">R$&nbsp;490 por ano — dois meses grátis</span></span>
</label>
</div>
</fieldset>
```

## Estados

Marcado usa a cor da marca; o contorno desmarcado tem contraste de 3:1 para ser visto sem depender do rótulo. Hover e foco podem ser forçados com `data-state`.

Marcação dos exemplos desta seção:

```html
<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-1"></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-2" checked=""></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-3" data-indeterminate=""></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-4"></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-5"></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-6" disabled=""></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-7" aria-invalid="true"></span>

<span class="ds-radio"><input type="radio" class="ds-radio__input" id="cr-8"></span>
```

## Grupos

Opções relacionadas ficam num `<fieldset>` com `<legend>`: o leitor de tela anuncia a pergunta antes das respostas.

Vertical `padrão` — Uma opção por linha — mais fácil de ler e de clicar.

Em linha `ds-choice-group--inline` — Para duas ou três opções curtas.

Com erro

Mensagem abaixo do grupo, ligada por `aria-describedby`.

Marcação dos exemplos desta seção:

```html
<fieldset class="ds-choice-group" aria-describedby="cr-g1-hint">
<legend class="ds-choice-group__legend">Mostrar no painel</legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-14" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Visitas</span></span>
</label>
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-15" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Conversões</span></span>
</label>
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-16">
<span class="ds-choice__text"><span class="ds-choice__label">Receita</span></span>
</label>
</div>
<p class="ds-choice-group__hint" id="cr-g1-hint">Escolha até três métricas.</p>
</fieldset>

<fieldset class="ds-choice-group ds-choice-group--inline">
<legend class="ds-choice-group__legend">Tema</legend>
<div class="ds-choice-group__items">
<label class="ds-radio">
<input type="radio" class="ds-radio__input" id="cr-17" name="cr-g2" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Escuro</span></span>
</label>
<label class="ds-radio">
<input type="radio" class="ds-radio__input" id="cr-18" name="cr-g2">
<span class="ds-choice__text"><span class="ds-choice__label">Claro</span></span>
</label>
<label class="ds-radio">
<input type="radio" class="ds-radio__input" id="cr-19" name="cr-g2">
<span class="ds-choice__text"><span class="ds-choice__label">Sistema</span></span>
</label>
</div>
</fieldset>

<fieldset class="ds-choice-group" aria-describedby="cr-g3-error">
<legend class="ds-choice-group__legend">Termos</legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-20" aria-invalid="true" aria-describedby="cr-g3-error">
<span class="ds-choice__text"><span class="ds-choice__label">Li e aceito os termos de uso</span></span>
</label>
</div>
<p class="ds-choice-group__error" id="cr-g3-error"><ds-icon name="alert-circle"></ds-icon><span>Aceite os termos para criar a conta.</span></p>
</fieldset>
```

## Selecionar todos

O estado indeterminado só faz sentido num checkbox que resume outros: alguns marcados, outros não.

```html
const marcados = filhos.filter((c) => c.checked).length;
pai.checked = marcados === filhos.length;
pai.indeterminate = marcados > 0 && marcados < filhos.length;
```

Marcação dos exemplos desta seção:

```html
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-all" data-parent="" aria-controls="cr-all-list">
<span class="ds-choice__text"><span class="ds-choice__label">Toda a equipe</span><span class="ds-choice__description">3 pessoas</span></span>
</label>

<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-all-0" checked="" data-child="">
<span class="ds-choice__text"><span class="ds-choice__label">Ana Souza</span></span>
</label>

<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-all-1" data-child="">
<span class="ds-choice__text"><span class="ds-choice__label">Bruno Lima</span></span>
</label>

<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-all-2" data-child="">
<span class="ds-choice__text"><span class="ds-choice__label">Carla Dias</span></span>
</label>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Por baixo são inputs nativos — teclado e leitor de tela já funcionam.

- Rótulo envolve o input — O `<label>` inteiro é área de clique, e o nome do controle vem do texto.
- Checkbox: Espaço marca — Tab Espaço — Tab vai de um checkbox ao próximo; Espaço marca e desmarca.
- Radio: setas escolhem — Tab ↑ ↓ — O grupo é uma parada de Tab só; as setas mudam a opção escolhida.
- Pergunta anunciada — Com `<fieldset>` e `<legend>`, o leitor diz “Plano, grupo” antes das opções.
- Indeterminado = “misto” — A propriedade `indeterminate` é anunciada como parcialmente marcada.
- Contraste do contorno — O contorno desmarcado usa `fg.subtle`: pelo menos 3:1 contra o fundo nos dois temas.

## Tokens usados

Tudo o que checkbox e radio consomem.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.fg.subtle (`--ds-color-fg-subtle`) | Contorno desmarcado | #5C6C7F | #9C9792 |
| color.fg.muted (`--ds-color-fg-muted`) | Contorno no hover | #46586E | #CEC8C1 |
| color.brand.solid (`--ds-color-brand-solid`) | Fundo marcado (checkbox) e ponto (radio) | #3E5166 | #C0CAD6 |
| color.brand.solid-hover (`--ds-color-brand-solid-hover`) | Marcado no hover | #2B3847 | #DAE0E8 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Marca de seleção | #F8FAFD | #1D2734 |
| color.border.focus (`--ds-color-border-focus`) | Anel de foco | #53657A | #C0CAD6 |
| color.danger.solid (`--ds-color-danger-solid`) | Contorno inválido | #C13834 | #FF9087 |
| color.danger.fg (`--ds-color-danger-fg`) | Mensagem de erro | #C13834 | #FFB2AA |
| radius.xs (`--ds-radius-xs`) | Raio do checkbox | 6 px | 6 px |
| radius.full (`--ds-radius-full`) | Radio | 9999 px | 9999 px |
| text.label-md (`--ds-text-label-md`) | Rótulo | 14/20 · medium | 14/20 · medium |
| text.body-sm (`--ds-text-body-sm`) | Descrição | 14/22 · regular | 14/22 · regular |
| space.150 (`--ds-space-150`) | Controle → texto e entre opções | 12 px | 12 px |
| duration.fast (`--ds-duration-fast`) | Marca aparecendo | 120ms | 120ms |

## Uso

Três regras para escolhas claras.

- **Faça:** rótulo que se lê sozinho. Marcado ou não, a frase continua fazendo sentido.
- **Evite:** negação no rótulo. Marcar um “não” exige parar e pensar duas vezes.
- **Dica:** Efeito imediato? Use switch. Checkbox vale ao enviar o formulário. Se a mudança acontece na hora (ligar notificações), o switch comunica melhor.
