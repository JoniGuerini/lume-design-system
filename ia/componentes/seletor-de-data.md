# Seletor de data

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/seletor-de-data

Para escolher um dia ou um período. Dá para digitar a data ou abrir o calendário, e as duas formas levam ao mesmo valor.

Em números: modos: 2 · idiomas: 3 · valor enviado: ISO · papel ARIA: dialog.

## Exemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="entrega">Data de entrega</label>
  <div class="ds-field"><input class="ds-field__input" id="entrega" name="entrega" type="text"></div>
</div>

<script type="module">
  import { createDatePicker } from 'https://lumeui.dev/v/1.13/lume.js';
  createDatePicker(document.querySelector('#entrega'), {
  });
</script>
```

## Variantes

Um dia é o padrão. Com `mode: 'range'`, o primeiro clique marca o início e o segundo, o fim.

Um dia `mode: 'single'` — Escolher um dia fecha o painel.

Período `mode: 'range'` — Dois meses lado a lado quando há espaço, com prévia ao passar o mouse.

Com limites `min · max` — Só os próximos 30 dias. Os demais ficam desativados, e digitar fora do limite mostra o erro.

Já preenchido `value` — Aparece no formato do idioma atual e o painel abre naquele mês.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-one">Data de entrega</label>
<div class="ds-field"><input class="ds-field__input" id="dp-one" type="text" autocomplete="off" placeholder="dd/mm/aaaa"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-datepicker-4" aria-label="Abrir calendário"><ds-icon name="calendar"></ds-icon></button><input type="hidden" name="dp-one" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-range">Período</label>
<div class="ds-field"><input class="ds-field__input" id="dp-range" type="text" autocomplete="off" placeholder="dd/mm/aaaa – dd/mm/aaaa"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-datepicker-5" aria-label="Abrir calendário"><ds-icon name="calendar"></ds-icon></button><input type="hidden" name="dp-range" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-limits">Agendar para</label>
<div class="ds-field"><input class="ds-field__input" id="dp-limits" type="text" autocomplete="off" placeholder="dd/mm/aaaa"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-datepicker-6" aria-label="Abrir calendário"><ds-icon name="calendar"></ds-icon></button><input type="hidden" name="dp-limits" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-filled">Data de entrega</label>
<div class="ds-field"><input class="ds-field__input" id="dp-filled" type="text" autocomplete="off" placeholder="dd/mm/aaaa"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-datepicker-7" aria-label="Abrir calendário"><ds-icon name="calendar"></ds-icon></button><input type="hidden" name="dp-filled" value="2026-11-22"></div>
</div>
```

## Formato

O campo mostra a data como cada idioma escreve, mas o formulário recebe sempre o mesmo formato, para o servidor não precisar adivinhar.

Idioma — Na tela — No formulário — Português — 08/11/2026 — 2026-11-08 — English — 11/08/2026 — 2026-11-08 — Español — 08/11/2026 — 2026-11-08

## Estados

O campo segue os estados do Campo de texto. Hover e foco podem ser forçados com `data-state`.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-a">Data de entrega</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-a" type="text" placeholder="dd/mm/aaaa"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-b">Data de entrega</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-b" type="text" value="28/11/2026"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-c">Data de entrega</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-c" type="text" value="28/11/2026"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-d">Data de entrega</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-d" type="text" value="28/11/2026"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-e">Data de entrega</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-e" type="text" value="31/02/2026" aria-invalid="true"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>

<p class="ds-form-field__error"><ds-icon name="alert-circle"></ds-icon><span>Use uma data como 28/11/2026.</span></p>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-f">Data de entrega</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-f" type="text" value="28/11/2026" disabled=""><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>
```

## Em formulários

Funciona com `createForm`: `required` e os erros de formato aparecem como nos outros campos. O valor em ISO vai num input oculto, com o `name` do campo.

```html
import { createDatePicker } from 'https://lumeui.dev/v/1.13/lume.js';

const picker = createDatePicker(document.querySelector('#entrega'), {
  min: new Date(),
  onChange: (value) => console.log(value), // Date
});

// no envio: entrega=2026-11-08
// período: viagem=2026-11-08/2026-11-15
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Digitar é sempre possível, e o calendário funciona inteiro pelo teclado.

- Abrir — ↓ — ↓ no campo abre o calendário, com o foco no dia escolhido ou em hoje.
- Andar pelos dias — ← → ↑ ↓ Home End — Setas andam um dia ou uma semana; Home e End vão ao começo e ao fim da semana.
- Trocar de mês e de ano — PageUp PageDown Shift — PageUp e PageDown trocam de mês; com Shift, de ano. Para uma data distante, digitar é mais rápido.
- Fechar — Esc — Esc fecha e devolve o foco ao botão do calendário.
- Dias com nome completo — Cada dia é anunciado com dia da semana, número, mês e ano. Hoje é marcado com aria-current.
- Erro que explica — Uma data que não existe mostra um exemplo do formato certo, ligado ao campo por aria-describedby.

## Tokens usados

Além dos tokens do Campo de texto.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fundo do painel | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | Contorno do painel | #3E51664D | #FFFFFF29 |
| shadow.xl (`--ds-shadow-xl`) | Sombra do painel | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| color.brand.solid (`--ds-color-brand-solid`) | Dia escolhido | #3E5166 | #C0CAD6 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Número no dia escolhido | #F8FAFD | #1D2734 |
| color.brand.subtle (`--ds-color-brand-subtle`) | Meio do período | #EEF2F6 | #C0CAD624 |
| color.bg.hover (`--ds-color-bg-hover`) | Dia no hover | #3E51660D | #FFFFFF0D |
| color.fg.disabled (`--ds-color-fg-disabled`) | Dia fora do limite | #93A0B0 | #605D59 |
| radius.lg (`--ds-radius-lg`) | Cantos do painel | 16 px | 16 px |
| radius.sm (`--ds-radius-sm`) | Cantos dos dias | 8 px | 8 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** datas próximas. Agendamentos, prazos e reservas, em que ver o mês ajuda a escolher.
- **Evite:** data de nascimento. Ninguém quer voltar décadas no calendário. Use um campo de texto com o formato na dica.
- **Dica:** Limites visíveis. Se há um limite, diga na dica. Dias desativados, sozinhos, não explicam o motivo.
