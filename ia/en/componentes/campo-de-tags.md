# Tag field

Lume section: Components. Page: https://lumeui.dev/#/componentes/campo-de-tags

For several free values inside one field, like topics, recipients, or keywords. If the options are a closed list, use the multiple Select.

In numbers: create a tag: Enter · , · paste a list: yes · duplicates: refused · value sent: a,b,c.

## Example

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="assuntos">Topics</label>
  <div class="ds-field ds-tags"><input class="ds-field__input" id="assuntos" name="assuntos" type="text" placeholder="Type and press Enter"></div>
</div>

<script type="module">
  import { createTagField } from 'https://lumeui.dev/v/1.2/lume.js';
  createTagField(document.querySelector('#assuntos'), {
    value: ['design', 'tokens'],
  });
</script>
```

## Variants

The field grows in lines as tags come in. Custom rules explain why a tag didn’t get in.

Free `createTagField` — Any text becomes a tag, without duplicates.

With a limit `max` — Past 3, the field warns and the tag doesn’t get in.

With a rule `validate` — It only accepts emails, and the message says what’s missing.

Many tags `multiple lines` — The field grows instead of hiding values.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-free">Topics</label>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag">
<span class="ds-tags__text">design</span>
<button type="button" class="ds-tags__remove" data-remove="0" aria-label="Remove design"><ds-icon name="x"></ds-icon></button>
</li><li class="ds-tags__tag">
<span class="ds-tags__text">tokens</span>
<button type="button" class="ds-tags__remove" data-remove="1" aria-label="Remove tokens"><ds-icon name="x"></ds-icon></button>
</li></ul><input class="ds-field__input" id="tf-free" type="text" autocomplete="off" data-ds-filled="design,tokens"><input type="hidden" name="tf-free" value="design,tokens"></div><span class="ds-visually-hidden" role="status"></span>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-max">Keywords</label>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag">
<span class="ds-tags__text">design</span>
<button type="button" class="ds-tags__remove" data-remove="0" aria-label="Remove design"><ds-icon name="x"></ds-icon></button>
</li><li class="ds-tags__tag">
<span class="ds-tags__text">tokens</span>
<button type="button" class="ds-tags__remove" data-remove="1" aria-label="Remove tokens"><ds-icon name="x"></ds-icon></button>
</li></ul><input class="ds-field__input" id="tf-max" type="text" autocomplete="off" data-ds-filled="design,tokens"><input type="hidden" name="tf-max" value="design,tokens"></div><span class="ds-visually-hidden" role="status"></span>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="tf-max-hint">Up to 3 keywords.</p></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-email">Invite</label>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag">
<span class="ds-tags__text">ana@lume.dev</span>
<button type="button" class="ds-tags__remove" data-remove="0" aria-label="Remove ana@lume.dev"><ds-icon name="x"></ds-icon></button>
</li></ul><input class="ds-field__input" id="tf-email" type="text" autocomplete="off" data-ds-filled="ana@lume.dev"><input type="hidden" name="tf-email" value="ana@lume.dev"></div><span class="ds-visually-hidden" role="status"></span>
</div>
```

## States

Hover and focus follow the Text field and can be forced with `data-state`.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<span class="ds-form-field__label">Topics</span>
<div class="ds-field ds-tags"><input class="ds-field__input" type="text" aria-label="Topics" placeholder="Type and press Enter"></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Topics</span>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag"><span class="ds-tags__text">design</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li><li class="ds-tags__tag"><span class="ds-tags__text">tokens</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li></ul><input class="ds-field__input" type="text" aria-label="Topics"></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Topics</span>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag"><span class="ds-tags__text">design</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li><li class="ds-tags__tag" data-armed=""><span class="ds-tags__text">tokens</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li></ul><input class="ds-field__input" type="text" aria-label="Topics"></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Topics</span>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag"><span class="ds-tags__text">design</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li><li class="ds-tags__tag"><span class="ds-tags__text">tokens</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li></ul><input class="ds-field__input" type="text" aria-label="Topics" aria-invalid="true"></div>
<p class="ds-form-field__error"><ds-icon name="alert-circle"></ds-icon><span>“tokens” is already on the list.</span></p>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Topics</span>
<div class="ds-field ds-tags"><ul class="ds-tags__list" role="list"><li class="ds-tags__tag"><span class="ds-tags__text">design</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li><li class="ds-tags__tag"><span class="ds-tags__text">tokens</span><span class="ds-tags__remove"><ds-icon name="x"></ds-icon></span></li></ul><input class="ds-field__input" type="text" aria-label="Topics" disabled=""></div>
</div>
```

## Code

It works with `createForm`: with `required`, having at least one tag is enough.

```html
import { createTagField } from 'https://lumeui.dev/v/1.2/lume.js';

const tags = createTagField(document.querySelector('#assuntos'), {
  value: ['design', 'tokens'],
  max: 5,
  validate: (text) => (text.length > 20 ? 'Use up to 20 characters.' : null),
  onChange: (values) => console.log(values),
});

// on submit: assuntos=design,tokens
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

Everything can be done from the keyboard, and each change is announced.

- Create — Enter , — Enter or comma create the tag. Leaving the field also creates the one being typed, so nothing gets lost.
- Delete without surprises — Backspace — Backspace with the field empty first marks the last tag; only the second press deletes it.
- Named buttons — Tab — Each × is a button in Tab order, with the tag’s name: “Remove design”.
- Announced changes — A role="status" region says what came in and what went out.

## Tokens used

On top of the Text field tokens.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.border.control (`--ds-color-border-control`) | Tag outline | #3E516633 | #FFFFFF21 |
| color.border.strong (`--ds-color-border-strong`) | Marked tag | #3E51664D | #FFFFFF29 |
| color.bg.selected (`--ds-color-bg-selected`) | Marked tag background | #3E516612 | #C0CAD61A |
| color.fg.subtle (`--ds-color-fg-subtle`) | × icon | #5C6C7F | #9C9792 |
| color.bg.hover (`--ds-color-bg-hover`) | × on hover | #3E51660D | #FFFFFF0D |
| radius.full (`--ds-radius-full`) | Tag | 9999 px | 9999 px |
| text.label-sm (`--ds-text-label-sm`) | Tag text | 13/18 · medium | 13/18 · medium |

## Usage

When to use it and when to prefer something else.

- **Do:** open values. Topics, emails to invite, keywords: what people write, not what they pick.
- **Avoid:** a closed list. If the options are already known, the multiple Select avoids typos.
- **Tip:** Teach how to create. A placeholder like “Type and press Enter” solves it the first time.
