# Verification code

Lume section: Components. Page: https://lumeui.dev/#/componentes/codigo-de-verificacao

For the two-step sign-in code. It looks like six boxes, but it’s a single field, which is why pasting and the phone’s autofill just work.

In numbers: boxes: your choice · real fields: 1 · autocomplete: one-time-code · types: 2.

## Example

```html
<div class="ds-otp"><input class="ds-otp__input" id="codigo" name="codigo" aria-label="Verification code"></div>

<script type="module">
  import { createOtpField } from 'https://lumeui.dev/v/0.37/lume.js';
  createOtpField(document.querySelector('.ds-otp'), {
    length: 6,
    onComplete: (code) => verificar(code),
  });
</script>
```

## Variants

The number of boxes follows your verification service.

Six digits `length: 6` — The most common, and it only accepts numbers.

In two groups `group: 3` — Easier to read and memorize.

Four digits `length: 4` — Shorter codes, like a PIN.

Letters and numbers `alphanumeric` — It turns uppercase on its own.

Markup of the examples in this section:

```html
<div class="ds-otp" data-otp=""><input class="ds-otp__input" id="otp-six" name="otp-six" aria-label="Verification code" type="text" maxlength="6" autocomplete="one-time-code" inputmode="numeric" autocapitalize="off" spellcheck="false" pattern="\d{6}"><div class="ds-otp__boxes" aria-hidden="true"><span class="ds-otp__box" data-box="0"></span><span class="ds-otp__box" data-box="1"></span><span class="ds-otp__box" data-box="2"></span><span class="ds-otp__box" data-box="3"></span><span class="ds-otp__box" data-box="4"></span><span class="ds-otp__box" data-box="5"></span></div></div>

<div class="ds-otp" data-otp=""><input class="ds-otp__input" id="otp-group" name="otp-group" aria-label="Verification code" type="text" maxlength="6" autocomplete="one-time-code" inputmode="numeric" autocapitalize="off" spellcheck="false" pattern="\d{6}"><div class="ds-otp__boxes" aria-hidden="true"><span class="ds-otp__box" data-box="0"></span><span class="ds-otp__box" data-box="1"></span><span class="ds-otp__box" data-box="2"></span><span class="ds-otp__gap"></span><span class="ds-otp__box" data-box="3"></span><span class="ds-otp__box" data-box="4"></span><span class="ds-otp__box" data-box="5"></span></div></div>

<div class="ds-otp" data-otp=""><input class="ds-otp__input" id="otp-four" name="otp-four" aria-label="Verification code" type="text" maxlength="4" autocomplete="one-time-code" inputmode="numeric" autocapitalize="off" spellcheck="false" pattern="\d{4}"><div class="ds-otp__boxes" aria-hidden="true"><span class="ds-otp__box" data-box="0"></span><span class="ds-otp__box" data-box="1"></span><span class="ds-otp__box" data-box="2"></span><span class="ds-otp__box" data-box="3"></span></div></div>

<div class="ds-otp" data-otp=""><input class="ds-otp__input" id="otp-alpha" name="otp-alpha" aria-label="Verification code" type="text" maxlength="6" autocomplete="one-time-code" inputmode="text" autocapitalize="characters" spellcheck="false" pattern="[0-9A-Za-z]{6}"><div class="ds-otp__boxes" aria-hidden="true"><span class="ds-otp__box" data-box="0"></span><span class="ds-otp__box" data-box="1"></span><span class="ds-otp__box" data-box="2"></span><span class="ds-otp__box" data-box="3"></span><span class="ds-otp__box" data-box="4"></span><span class="ds-otp__box" data-box="5"></span></div></div>
```

## States

Focus and error can be forced with `data-state` and `data-error`.

Markup of the examples in this section:

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

## On a verification screen

Try it: the right code here is 123456. A wrong one shows the message, clears the field, and returns focus, so you can try again without the mouse.

Confirm it’s you

We sent a 6-digit code to ana@lume.dev.

Markup of the examples in this section:

```html
<div class="ds-otp" data-otp=""><input class="ds-otp__input" id="otp-verify" name="otp-verify" aria-label="Verification code" aria-describedby="otp-verify-error" type="text" maxlength="6" autocomplete="one-time-code" inputmode="numeric" autocapitalize="off" spellcheck="false" pattern="\d{6}"><div class="ds-otp__boxes" aria-hidden="true"><span class="ds-otp__box" data-box="0"></span><span class="ds-otp__box" data-box="1"></span><span class="ds-otp__box" data-box="2"></span><span class="ds-otp__box" data-box="3"></span><span class="ds-otp__box" data-box="4"></span><span class="ds-otp__box" data-box="5"></span></div></div>

<p class="ds-form-field__error" data-verify-error="" hidden="" id="otp-verify-error"><ds-icon name="alert-circle"></ds-icon><span>Wrong code. Check it and try again.</span></p>

<button type="button" class="ds-inline-action" data-resend=""><ds-icon name="refresh"></ds-icon>Send another code</button>
```

## Accessibility

A single input avoids the problems of multiple boxes: the screen reader reads one field, with one name.

- Autofill — With autocomplete="one-time-code", the phone suggests the code that arrived by SMS.
- Paste — Ctrl V — Pasting works from any box, and anything that isn’t a digit is ignored.
- Number keypad — On phones, inputmode="numeric" opens the number keypad.
- Hidden boxes — The boxes have aria-hidden: they’re only a drawing. Screen reader users hear the field, not six boxes.
- Error with text — Besides the red outline, write what happened and link the message with aria-describedby.

## Tokens used

Everything the field consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.field (`--ds-color-bg-field`) | Box background | #FFFFFF | #2C2A27 |
| color.border.default (`--ds-color-border-default`) | Outline | #3E516633 | #FFFFFF1A |
| color.border.strong (`--ds-color-border-strong`) | Outline on hover and group divider | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Active box | #53657A | #C0CAD6 |
| color.danger.solid (`--ds-color-danger-solid`) | Outline on error | #C13834 | #FF9087 |
| color.fg.default (`--ds-color-fg-default`) | Digit and caret | #2B3847 | #F3EDE5 |
| radius.md (`--ds-radius-md`) | Box corners | 12 px | 12 px |
| opacity.disabled (`--ds-opacity-disabled`) | Disabled | 0.44 | 0.44 |

## Usage

When to use it and what to offer with it.

- **Do:** verify on its own. Once the code is complete, check it without asking for another click.
- **Avoid:** visible passwords or PINs. Digits stay visible because the code is single-use. For secrets that repeat, use a password field.
- **Tip:** Always a plan B. Offer “Send another code” and say where it went.
