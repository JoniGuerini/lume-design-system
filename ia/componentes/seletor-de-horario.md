# Seletor de horário

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/seletor-de-horario

Para escolher horas e minutos. Digite do jeito que preferir ou escolha na lista, que aparece no formato do idioma.

Em números: passo padrão: 15 min · formatos: 12 · 24 h · valor enviado: HH:MM · papel ARIA: combobox.

## Exemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="inicio">Horário</label>
  <div class="ds-field"><input class="ds-field__input" id="inicio" name="inicio" type="text"></div>
</div>

<script type="module">
  import { createTimePicker } from 'https://lumeui.dev/v/0.34/lume.js';
  createTimePicker(document.querySelector('#inicio'), {
    step: 15,
  });
</script>
```

## Variantes

O passo define as opções da lista, mas qualquer minuto pode ser digitado.

A cada 15 minutos `step: 15` — O padrão, bom para compromissos.

A cada 30 minutos `step: 30` — Menos opções, quando a precisão não importa tanto.

Com limites `min · max` — Só o horário comercial. Digitar fora dele mostra o erro.

Já preenchido `value` — Sempre em HH:MM no código; a tela mostra o formato do idioma.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-15">Início</label>
<div class="ds-field"><input class="ds-field__input" id="tp-15" type="text" autocomplete="off" role="combobox" aria-autocomplete="none" aria-expanded="false" aria-controls="ds-timepicker-2" placeholder="--:--"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-label="Abrir lista de horários"><ds-icon name="clock"></ds-icon></button><input type="hidden" name="tp-15" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-30">Reunião</label>
<div class="ds-field"><input class="ds-field__input" id="tp-30" type="text" autocomplete="off" role="combobox" aria-autocomplete="none" aria-expanded="false" aria-controls="ds-timepicker-3" placeholder="--:--"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-label="Abrir lista de horários"><ds-icon name="clock"></ds-icon></button><input type="hidden" name="tp-30" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-limits">Atendimento</label>
<div class="ds-field"><input class="ds-field__input" id="tp-limits" type="text" autocomplete="off" role="combobox" aria-autocomplete="none" aria-expanded="false" aria-controls="ds-timepicker-4" placeholder="--:--"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-label="Abrir lista de horários"><ds-icon name="clock"></ds-icon></button><input type="hidden" name="tp-limits" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-filled">Lembrete</label>
<div class="ds-field"><input class="ds-field__input" id="tp-filled" type="text" autocomplete="off" role="combobox" aria-autocomplete="none" aria-expanded="false" aria-controls="ds-timepicker-5" placeholder="--:--"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-label="Abrir lista de horários"><ds-icon name="clock"></ds-icon></button><input type="hidden" name="tp-filled" value="09:30"></div>
</div>
```

## Formato

Cada idioma lê o horário do seu jeito, e o formulário recebe sempre 24 horas.

Idioma — Na tela — No formulário — Português — 14:30 — 14:30 — English — 02:30 PM — 14:30 — Español — 14:30 — 14:30

## Estados

Os mesmos do Campo de texto.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-a">Horário</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-a" type="text" placeholder="--:--"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-b">Horário</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-b" type="text" value="14:30"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-c">Horário</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-c" type="text" value="14:30"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-d">Horário</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-d" type="text" value="14:30"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-e">Horário</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-e" type="text" value="25:00" aria-invalid="true"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>

<p class="ds-form-field__error"><ds-icon name="alert-circle"></ds-icon><span>Use um horário como 14:30.</span></p>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-f">Horário</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-f" type="text" value="14:30" disabled=""><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>
```

## Código

Funciona com `createForm`, como os outros campos.

```html
import { createTimePicker } from 'https://lumeui.dev/v/0.34/lume.js';

const picker = createTimePicker(document.querySelector('#inicio'), {
  value: '09:00',
  step: 30,
  min: '08:00',
  max: '18:00',
  onChange: (value) => console.log(value), // '09:30'
});
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

O foco fica sempre no campo. As setas só indicam a opção da lista, seguindo o padrão ARIA de combobox.

- Abrir e andar — ↓ ↑ — ↓ e ↑ abrem a lista e andam entre as opções; a opção é anunciada por aria-activedescendant.
- Andar uma hora — PageUp PageDown Home End — PageUp e PageDown pulam uma hora; Home e End vão ao começo e ao fim da lista.
- Escolher e fechar — Enter Esc — Enter escolhe; Esc fecha sem mudar nada.
- Botão fora do Tab — O botão do relógio é um atalho para o mouse e o toque. Pelo teclado, as setas fazem o mesmo.

## Tokens usados

Além dos tokens do Campo de texto.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fundo da lista | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | Contorno da lista | #3E51664D | #FFFFFF29 |
| shadow.xl (`--ds-shadow-xl`) | Sombra da lista | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| color.bg.hover (`--ds-color-bg-hover`) | Opção ativa | #3E51660D | #FFFFFF0D |
| color.fg.brand (`--ds-color-fg-brand`) | Marca da opção escolhida | #3E5166 | #DAE0E8 |
| text.body-sm (`--ds-text-body-sm`) | Texto das opções | 14/22 · regular | 14/22 · regular |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** horário do dia. Início de reunião, lembretes e janelas de atendimento.
- **Evite:** duração. “45 minutos” não é um horário. Use o Campo numérico com a unidade ao lado.
- **Dica:** Fuso horário. Se a pessoa pode estar em outro fuso, diga na dica qual vale.
