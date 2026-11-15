# Rich text editor

Lume section: Components. Page: https://lumeui.dev/#/componentes/editor-de-texto-rico

A text field that formats: headings, lists, quotes, bold, italic, and links, with Lume’s toolbar. No dependencies, built on the browser’s contenteditable, and the HTML it produces is always clean.

In numbers: tools: 14 · Markdown shortcuts: 5 · HTML tags: 15 · dependencies: 0.

## Example

```html
<h2>Lume 0.37</h2><p>Change the order and place of things, with the <strong>mouse</strong>, <strong>touch</strong>, or <strong>keyboard</strong>.</p><ul><li>Sortable list, with or without a handle</li><li>Kanban, with columns that exchange cards</li></ul><blockquote>Each step is announced to screen readers.</blockquote><p>See everything in <a href="#/novidades">What’s new</a>.</p>
```

## Variants

The toolbar shows the groups you ask for in `tools`, in order.

Minimal `tools: ['marks', 'link']` — For a comment or a short description: just bold, italic, underline, strikethrough, and link.

Borderless `ds-editor--borderless` — When the editor is the page itself, like a note or a document: no box around it.

## States

The border and focus are the Field’s. In the toolbar, the pressed button shows the formatting where the cursor is.

Markup of the examples in this section:

```html
<div class="ds-editor"><div class="ds-toolbar ds-toolbar--plain ds-editor__toolbar"><div class="ds-toolbar__group"><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="true"><ds-icon name="bold"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="italic"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="link"></ds-icon></span></div></div><div class="ds-editor__content" data-placeholder="Write the release note…">The <strong>latest version</strong> card on Home reads the changelog summary.</div></div>

<div class="ds-editor"><div class="ds-toolbar ds-toolbar--plain ds-editor__toolbar"><div class="ds-toolbar__group"><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="true"><ds-icon name="bold"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="italic"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="link"></ds-icon></span></div></div><div class="ds-editor__content" data-placeholder="Write the release note…"><p><br></p></div></div>

<div class="ds-editor" data-disabled=""><div class="ds-toolbar ds-toolbar--plain ds-editor__toolbar"><div class="ds-toolbar__group"><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="true"><ds-icon name="bold"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="italic"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="link"></ds-icon></span></div></div><div class="ds-editor__content" data-placeholder="Write the release note…">The <strong>latest version</strong> card on Home reads the changelog summary.</div></div>
```

## Code

With `name`, the editor creates a hidden field with the HTML, and the form sends it like any other field.

```html
<form>
  <div class="ds-editor">
    <div class="ds-editor__content" aria-label="Release note"><p>…</p></div>
  </div>
</form>

<script type="module">
  import { createEditor } from 'https://lumeui.dev/v/1.8/lume.js';

  const editor = createEditor(document.querySelector('.ds-editor'), {
    tools: ['history', 'marks', 'blocks', 'align', 'link'],
    placeholder: 'Write the release note…',
    name: 'nota', // <input type="hidden" name="nota" value="<h2>…</h2>">
    onChange: (html) => console.log(html),
  });

  editor.value; // clean HTML, or "" when empty
  editor.getText();
</script>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

A named text field and a toolbar that states each button’s state.

- Named field — The text is role="textbox" with aria-multiline. Give it a name with aria-label or a label linked by aria-labelledby.
- Toolbar — Tab ← → — It’s the Toolbar: a single Tab stop, arrows between buttons, and aria-pressed says whether bold, the list, or the alignment is on where the cursor is. Clicking it doesn’t take focus from the text.
- Shortcuts — Ctrl B Ctrl I Ctrl U Ctrl K — Bold, italic, and underline as in any editor; Ctrl/⌘ + K opens the link; buttons announce their shortcut with aria-keyshortcuts.
- Markdown — At the start of a paragraph, `#`, `##`, `-`, `1.`, and `>` become a heading, subheading, list, numbered list, and quote. Ctrl/⌘ + Z undoes it.
- Link — Enter Esc — Opens a row with the address field right below the toolbar; Enter applies and Esc returns to the text, with the selection intact.
- Clean paste — Content from another site, Google Docs, or Word loses fonts, colors, and scripts: only the structure and the marks the editor has remain.

## Tokens used

The Field’s, plus the reading typography.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.field (`--ds-color-bg-field`) | Background | #FFFFFF | #2C2A27 |
| color.border.default (`--ds-color-border-default`) | Border | #3E516633 | #FFFFFF1A |
| color.border.focus (`--ds-color-border-focus`) | Focus border | #53657A | #C0CAD6 |
| color.border.subtle (`--ds-color-border-subtle`) | Line below the toolbar | #3E516624 | #FFFFFF0F |
| color.bg.selected (`--ds-color-bg-selected`) | Pressed button | #3E516612 | #C0CAD61A |
| color.border.strong (`--ds-color-border-strong`) | Quote rule | #3E51664D | #FFFFFF29 |
| text.heading-md (`--ds-text-heading-md`) | Heading | 21/28 · regular | 21/28 · regular |
| text.body-md (`--ds-text-body-md`) | Text | 16/28 · regular | 16/28 · regular |

## Usage

When formatting helps whoever will read it.

- **Do:** text someone else reads. Release notes, descriptions, long comments: headings and lists make reading quick.
- **Avoid:** a field that only needs text. A name, a subject, one sentence: use the Field or the text area. A toolbar there just gets in the way.
- **Tip:** Ask only for what you’ll use. A comment doesn’t need alignment. With tools, the toolbar keeps only the groups that make sense.
