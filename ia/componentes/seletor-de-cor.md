# Seletor de cor

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/seletor-de-cor

Para escolher uma cor livre ou uma da paleta. Arraste na área, ajuste o matiz, digite o hexadecimal ou clique numa amostra.

Em números: formas: 2 · valor enviado: #rrggbb · amostras: opcionais · papel ARIA: slider.

## Exemplo

```html
<div class="ds-field"><input class="ds-field__input" id="marca" name="marca" type="text"></div>

<script type="module">
  import { createColorField } from 'https://lumeui.dev/v/0.38/lume.js';
  createColorField(document.querySelector('#marca'), {
    value: '#c97b63',
    swatches: [{ value: '#d95c0a', label: 'Pêssego' }, { value: '#2a8ed6', label: 'Azul' }, { value: '#cd5892', label: 'Rosa' }, …],
  });
</script>
```

## Variantes

O campo cabe num formulário e abre o seletor num painel. O seletor solto fica sempre à vista, para telas de configuração.

Campo de cor `createColorField` — A amostra no começo abre o seletor; o texto dá para digitar.

Seletor solto `createColorPicker` — Com as amostras da paleta embaixo.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-field">Cor da marca</label>
<div class="ds-field"><button type="button" class="ds-color-field__swatch" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-colorfield-2-panel" aria-label="Escolher cor, atual #C97B63"></button><input class="ds-field__input" id="cp-field" name="cp-field" type="text" value="#c97b63" autocomplete="off" spellcheck="false" maxlength="7" placeholder="#000000"></div>
</div>
```

## Estados

O campo tem os estados do Campo de texto. Hexadecimal que não é cor mostra o erro ao sair do campo.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-a">Cor da marca</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-a" type="text" placeholder="#000000"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-b">Cor da marca</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-b" type="text" value="#C97B63"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-c">Cor da marca</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-c" type="text" value="#C97B63"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-d">Cor da marca</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-d" type="text" value="#C97B63"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-e">Cor da marca</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-e" type="text" value="#C97B6" aria-invalid="true"></div>
</div>

<p class="ds-form-field__error"><ds-icon name="alert-circle"></ds-icon><span>Use uma cor em hexadecimal, como #C97B63.</span></p>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-f">Cor da marca</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-f" type="text" value="#C97B63" disabled=""></div>
</div>
```

## Código

O formulário recebe o hexadecimal do campo; funciona com `createForm`, como os outros campos.

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="marca">Cor da marca</label>
  <div class="ds-field"><input class="ds-field__input" id="marca" name="marca" type="text"></div>
</div>

<script type="module">
  import { createColorField } from 'https://lumeui.dev/v/0.38/lume.js';

  createColorField(document.querySelector('#marca'), {
    value: '#c97b63',
    swatches: [{ value: '#d95c0a', label: 'Pêssego' }, { value: '#2a8ed6', label: 'Azul' }, { value: '#cd5892', label: 'Rosa' }, …],
    onChange: (hex) => console.log(hex),
  });
</script>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Tudo o que dá para fazer com o mouse dá para fazer com o teclado, e o hexadecimal é a saída para quem prefere digitar.

- Área — ← → ↑ ↓ — É um slider: lê “Saturação 60%, brilho 80%” a cada passo.
- Matiz — ← → Home End — Slider de 0° a 360°. Com Shift, anda de 10 em 10.
- Amostras — Botões com o nome da cor e aria-pressed na escolhida; a marca troca entre preto e branco para ter contraste.
- Painel do campo — ↓ Esc — A amostra diz a cor atual (“Escolher cor, atual #C97B63”). ↓ abre, Esc fecha e devolve o foco ao campo.
- Não dependa só da cor — Se a cor escolhida comunica algo, mostre também o nome ou o valor.

## Tokens usados

Os degradês da área e do matiz são as próprias cores escolhíveis; o resto vem dos tokens.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Painel e anel da alça | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | Contorno da alça e do painel | #3E51664D | #FFFFFF29 |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno da área, do matiz e das amostras | #3E516624 | #FFFFFF0F |
| color.border.focus (`--ds-color-border-focus`) | Foco da alça | #53657A | #C0CAD6 |
| radius.md (`--ds-radius-md`) | Área | 12 px | 12 px |
| radius.full (`--ds-radius-full`) | Alças, matiz e amostras | 9999 px | 9999 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** ofereça a paleta. Amostras com as cores da marca evitam um tom quase igual ao certo.
- **Evite:** cor para dado. Para etiquetar ou classificar, poucas opções fixas (um Controle segmentado ou Seleção) funcionam melhor que uma cor livre.
- **Dica:** Confira o contraste. Se a cor vai para texto ou fundo, avise quando ela não alcançar 4,5:1.
