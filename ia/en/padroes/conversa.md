# Chat and composer

Lume section: Patterns. Page: https://lumeui.dev/#/padroes/conversa

The question in a bubble, the reply as reading text, the result in a card, and a message box that grows with the text and accepts attachments and / commands.

In numbers: message types: 2 · shortcuts: 7 · states: 5 · spot of color: 1.

## Live

A real conversation, with simulated replies. Send, type / , attach a file, stop a reply midway, or copy the result.

How can I help?

Ask in English, attach a file, or type / to see the commands.

```html
import { createComposer, messageHtml, typingHtml, streamText } from 'https://lumeui.dev/v/0.36/lume.js';

const thread = document.querySelector('.ds-thread');   // role="log" aria-live="polite"

const composer = createComposer(document.querySelector('#composer'), {
  label: 'Message to Lume',
  placeholder: 'Ask something or type / for commands',
  maxLength: 2000,
  commands: [
    { id: 'script', label: 'Write a script', description: 'Builds a script in scenes', icon: 'list' },
    { id: 'summarize', label: 'Summarize', description: 'Sums up a text in three sentences', icon: 'file-text' },
  ],
  async onSend({ text, attachments, command }) {
    thread.insertAdjacentHTML('beforeend', messageHtml({ role: 'user', text, attachments }));
    composer.setBusy(true);                       // send becomes "stop"; Esc stops too
    thread.insertAdjacentHTML('beforeend', messageHtml({ html: typingHtml(), busy: true, actions: false }));
    const body = thread.lastElementChild.querySelector('[data-body]');
    body.innerHTML = '';
    await streamText(body, await fetchReply(text, command));
    thread.lastElementChild.removeAttribute('aria-busy');
    composer.setBusy(false);
  },
  onStop() { /* cancel the request and mark "Reply interrupted." */ },
});
```

Markup of the examples in this section:

```html
<span class="ds-message__mark" aria-hidden="true">L</span>

<div class="ds-suggestions">
<button type="button" class="ds-chip ds-chip--sm" data-suggest="Write a 3-scene script" data-command="script"><span class="ds-chip__icon"><ds-icon name="list"></ds-icon></span>Write a 3-scene script</button><button type="button" class="ds-chip ds-chip--sm" data-suggest="Sum up what Lume is" data-command="summarize"><span class="ds-chip__icon"><ds-icon name="file-text"></ds-icon></span>Sum up what Lume is</button><button type="button" class="ds-chip ds-chip--sm" data-suggest="Where do I start with tokens?"><span class="ds-chip__icon"><ds-icon name="palette"></ds-icon></span>Where do I start with tokens?</button>
</div>

<div class="ds-thread" role="log" aria-live="polite" aria-relevant="additions" aria-label="Conversation" data-thread=""></div>

<div class="ds-composer">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-9-input">Message to Lume</label>
<textarea class="ds-composer__input" id="ds-composer-9-input" rows="1" placeholder="Ask something or type / for commands" aria-autocomplete="list" aria-controls="ds-composer-9-menu" aria-describedby="ds-composer-9-hint"></textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Attach file" data-ds-tooltip="Attach file"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Commands" data-ds-tooltip="Commands" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden="">0 / 2,000</span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Send message" data-ds-tooltip="Send" data-ds-tooltip-kbd="↵" aria-disabled="true"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-9-menu" role="listbox" aria-label="Commands" hidden=""></div>
</div>

<p class="ds-composer__hint" id="ds-composer-9-hint">
<span><kbd class="ds-kbd">Enter</kbd> sends</span>
<span><kbd class="ds-kbd">Shift</kbd> + <kbd class="ds-kbd">Enter</kbd> new line</span>
<span><kbd class="ds-kbd">/</kbd> commands</span>
</p>

<p class="ds-visually-hidden" aria-live="polite" data-live=""></p>

<p class="ds-visually-hidden" aria-live="polite" data-demo-live=""></p>

<button type="button" class="ds-chip" data-control="reply" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-211">
<span>Reply</span><span data-label="">Text and card</span>
<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span>
</button>
```

## Anatomy

Nine pieces. Only one has color: send. The rest is outline, surface, and text.

- 1 — Question — A solid bubble in bg.raised, on the right.
- 2 — Attachment — A pill with type, name, and size.
- 3 — Author and time — Mark, name, and time in a muted eyebrow.
- 4 — Reply — Reading text, no bubble, up to 68 characters.
- 5 — Result card — What you can use: stamp, title, content, and actions.
- 6 — Actions — Copy, regenerate, and rate — on hover and on the latest reply.
- 7 — Composer — A growing field, with attachments and commands above.
- 8 — Tools — Attach and commands, icon buttons with no background.
- 9 — Send — The only spot of color. It becomes stop while replying.

Markup of the examples in this section:

```html
<div class="ds-composer">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-2-input">Message</label>
<textarea class="ds-composer__input" id="ds-composer-2-input" rows="1" placeholder="Ask something or type / for commands" aria-autocomplete="list" aria-controls="ds-composer-2-menu"></textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Attach file" data-ds-tooltip="Attach file"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Commands" data-ds-tooltip="Commands" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden=""></span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Send message" data-ds-tooltip="Send" data-ds-tooltip-kbd="↵" aria-disabled="true"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-2-menu" role="listbox" aria-label="Commands" hidden=""></div>
</div>
```

## Bubbles

Whoever asks gets a bubble; whoever replies doesn’t. That way the question is found at a glance and the reply reads without a frame.

Question `ds-message--user` — A solid bubble, on the right. The tighter bottom corner points to who spoke.

Reply `ds-message` — No bubble: reading text of up to 68 characters per line, with author and time above.

With attachments `ds-message__attachments` — Attachments come before the text, in pills with type, name, and size.

List and code `ds-message__body` — Lists only from three items. Short code goes inline.

Divider and notice `ds-thread__divider` — The divider separates days; the system notice is centered and muted, with no bubble.

Typing `ds-typing` — Three dots and a short text. With reduced motion, the dots stay still.

- Bubble: bg.raised · subtle outline · xl radius, xs corner
- Reply: text.body-md · 16/28 · up to 68 characters
- Between messages: space.400 · 32 px
- Actions: 28 px icon buttons, no background

Markup of the examples in this section:

```html
<div class="ds-thread "><article class="ds-message ds-message--user" aria-label="You said"><div class="ds-message__body"><p>Write a script for the version 0.2 launch</p></div><p class="ds-message__meta">Sent · <time>14:32</time></p></article></div>

<div class="ds-thread "><article class="ds-message" data-latest="" aria-label="Lume replied">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span><time>14:32</time></header>
<div class="ds-message__body" data-body=""><p>I put together a short script in three scenes. Each fits in up to 20 seconds.</p></div>
<div class="ds-message__actions" role="group" aria-label="Response actions"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="copy" aria-label="Copy response" data-ds-tooltip="Copy response"><ds-icon name="copy"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="retry" aria-label="Regenerate" data-ds-tooltip="Regenerate"><ds-icon name="refresh"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="like" aria-label="Good response" data-ds-tooltip="Good response" aria-pressed="false"><ds-icon name="thumbs-up"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="dislike" aria-label="Bad response" data-ds-tooltip="Bad response" aria-pressed="false"><ds-icon name="thumbs-down"></ds-icon></button></div>
</article></div>

<div class="ds-thread "><article class="ds-message ds-message--user" aria-label="You said"><div class="ds-message__attachments"><span class="ds-attachment">
<span class="ds-attachment__icon" aria-hidden="true"><ds-icon name="file-text"></ds-icon></span>
<span class="ds-attachment__name">briefing.pdf</span>
<span class="ds-attachment__size">242 KB</span>
</span><span class="ds-attachment">
<span class="ds-attachment__icon" aria-hidden="true"><ds-icon name="image"></ds-icon></span>
<span class="ds-attachment__name">home-screen.png</span>
<span class="ds-attachment__size">1,3 MB</span>
</span></div><div class="ds-message__body"><p>Summarize these two files</p></div></article></div>

<div class="ds-thread "><article class="ds-message" aria-label="Lume replied">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span></header>
<div class="ds-message__body" data-body=""><p>To change the brand:</p><ol><li>Open <code>tokens/palettes.json</code>.</li><li>Change the <code>hue</code> of <code>brand</code>.</li><li>Run <code>npm run tokens</code>.</li></ol></div>
</article></div>

<div class="ds-thread "><p class="ds-thread__divider">Today</p><p class="ds-thread__notice">Ana Souza joined the conversation.</p></div>

<div class="ds-thread "><article class="ds-message" aria-label="Lume replied">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span></header>
<div class="ds-message__body" data-body=""><div class="ds-typing"><span class="ds-typing__dots" aria-hidden="true"><i></i><i></i><i></i></span><span>Lume is typing</span></div></div>
</article></div>
```

## Result card

When the reply is something to use — a script, a summary, a file — it becomes a card: stamp and type, title, short content, and at most two actions. Regular conversation stays as text.

Script `ds-result-card` — Stamped sections, like in the panel. Main action with an arrow.

Summary `ds-result-card__text` — Short muted text. One action, to take the result forward.

Generated file `ds-attachment` — The file is an attachment pill; download and preview are inline actions.

Markup of the examples in this section:

```html
<div class="ds-thread "><article class="ds-message" aria-label="Lume replied">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span></header>
<div class="ds-message__body" data-body=""><p>In three sentences:</p></div>
<section class="ds-result-card" aria-label="Three-sentence summary">
<header class="ds-result-card__head">
<div><p class="ds-result-card__eyebrow">Summary · 3 sentences</p><p class="ds-result-card__title">Lume in a few words</p></div>
<div class="ds-result-card__tools">
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="copy-card" aria-label="Copy summary" data-ds-tooltip="Copy"><ds-icon name="copy"></ds-icon></button>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" aria-label="More options" data-ds-tooltip="More options"><ds-icon name="more-horizontal"></ds-icon></button>
</div>
</header>
<p class="ds-result-card__text">A dark, warm design system with OKLCH tokens. Components only consume semantic tokens. Light and dark themes, checked contrast, and keyboard support everywhere.</p>
<div class="ds-result-card__actions">
<button type="button" class="ds-inline-action" data-action="open">Use as description<ds-icon name="arrow-right"></ds-icon></button>
</div>
</section>
</article></div>

<div class="ds-thread "><article class="ds-message" aria-label="Lume replied">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span></header>
<div class="ds-message__body" data-body=""><p>I exported the dark theme tokens.</p></div>
<section class="ds-result-card" aria-label="Generated file">
<header class="ds-result-card__head">
<div><p class="ds-result-card__eyebrow">File · CSV</p><p class="ds-result-card__title">Color tokens, dark theme</p></div>
<div class="ds-result-card__tools">
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="copy-card" aria-label="Copy file" data-ds-tooltip="Copy"><ds-icon name="copy"></ds-icon></button>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" aria-label="More options" data-ds-tooltip="More options"><ds-icon name="more-horizontal"></ds-icon></button>
</div>
</header>
<div><span class="ds-attachment">
<span class="ds-attachment__icon" aria-hidden="true"><ds-icon name="file-text"></ds-icon></span>
<span class="ds-attachment__name">tokens-dark.csv</span>
<span class="ds-attachment__size">18 KB</span>
</span></div>
<div class="ds-result-card__actions">
<button type="button" class="ds-inline-action"><ds-icon name="download"></ds-icon>Download</button>
<button type="button" class="ds-inline-action">Preview<ds-icon name="arrow-right"></ds-icon></button>
</div>
</section>
</article></div>
```

## Composer

The message box: command and attachments on top, the field in the middle, tools and send at the bottom. It grows with the text up to 216 px and then scrolls.

Empty

The placeholder says what you can do. Send stays off.

Focused

Brand border and ring. Grows with the text up to 216 px, then scrolls.

With command and attachment

The command becomes a brand pill; attachments, outlined pills.

Replying

Send becomes stop (Esc). You can keep writing the next one.

Disabled

Only when sending truly isn’t possible (offline, no permission) — and say why.

Markup of the examples in this section:

```html
<div class="ds-composer">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-3-input">Message</label>
<textarea class="ds-composer__input" id="ds-composer-3-input" rows="1" placeholder="Ask or type /" aria-autocomplete="list" aria-controls="ds-composer-3-menu"></textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Attach file" data-ds-tooltip="Attach file"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Commands" data-ds-tooltip="Commands" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden=""></span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Send message" data-ds-tooltip="Send" data-ds-tooltip-kbd="↵" aria-disabled="true"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-3-menu" role="listbox" aria-label="Commands" hidden=""></div>
</div>

<div class="ds-composer">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-4-input">Message</label>
<textarea class="ds-composer__input" id="ds-composer-4-input" rows="1" placeholder="Write a message or / for commands" aria-autocomplete="list" aria-controls="ds-composer-4-menu">Write a script</textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Attach file" data-ds-tooltip="Attach file"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Commands" data-ds-tooltip="Commands" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden=""></span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Send message" data-ds-tooltip="Send" data-ds-tooltip-kbd="↵"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-4-menu" role="listbox" aria-label="Commands" hidden=""></div>
</div>

<div class="ds-composer" data-busy="">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-6-input">Message</label>
<textarea class="ds-composer__input" id="ds-composer-6-input" rows="1" placeholder="Ask or type /" aria-autocomplete="list" aria-controls="ds-composer-6-menu"></textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Attach file" data-ds-tooltip="Attach file"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Commands" data-ds-tooltip="Commands" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden=""></span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Stop response" data-ds-tooltip="Stop response" data-ds-tooltip-kbd="Esc"><span class="ds-composer__stop" aria-hidden="true"></span></button>
</div>
<div class="ds-composer__menu" id="ds-composer-6-menu" role="listbox" aria-label="Commands" hidden=""></div>
</div>

<div class="ds-composer" data-disabled="">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-7-input">Message</label>
<textarea class="ds-composer__input" id="ds-composer-7-input" rows="1" placeholder="Offline" aria-autocomplete="list" aria-controls="ds-composer-7-menu" disabled=""></textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Attach file" data-ds-tooltip="Attach file"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Commands" data-ds-tooltip="Commands" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true" hidden=""></span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Send message" data-ds-tooltip="Send" data-ds-tooltip-kbd="↵" aria-disabled="true"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-7-menu" role="listbox" aria-label="Commands" hidden=""></div>
</div>
```

## / shortcuts

A slash at the start of the field opens the commands. Focus doesn’t leave the field: the arrows choose, Enter confirms, and the command becomes a pill before the text.

| Command | What it does |
| --- | --- |
| `/script` | Builds a script in scenes |
| `/summarize` | Sums up a text in three sentences |
| `/translate` | Translates into Portuguese |
| `/tone` | Rewrites it more directly |

| Key | In the composer |
| --- | --- |
| Enter | Sends the message |
| Shift — + — Enter | Adds a line break |
| / | At the start of the field, opens the commands |
| ↑ — + — ↓ | Move through the commands |
| Enter — or — Tab | Pick the command |
| Esc | Closes the commands; while a reply is arriving, stops the reply |
| Backspace | At the start of the field, removes the chosen command |

## States

Each state says what’s happening and what the next step is. Nothing disappears without notice.

How can I help?

First message — An empty conversation: a short invitation and three concrete suggestions that teach what you can ask for.

Replying — The reply arrives with the “typing” dots. Send becomes stop.

Send error — The text stays on screen, with the reason and a way forward. Nothing disappears.

Interrupted reply — What already arrived stays. A line says it stopped; the actions still work.

Character limit — The count appears near the limit. Over it: border and number in danger, and send turns off.

Markup of the examples in this section:

```html
<span class="ds-message__mark" aria-hidden="true">L</span>

<div class="ds-suggestions"><span class="ds-chip ds-chip--sm"><span class="ds-chip__icon"><ds-icon name="list"></ds-icon></span>Write a 3-scene script</span><span class="ds-chip ds-chip--sm"><span class="ds-chip__icon"><ds-icon name="file-text"></ds-icon></span>Sum up what Lume is</span><span class="ds-chip ds-chip--sm"><span class="ds-chip__icon"><ds-icon name="palette"></ds-icon></span>Where do I start with tokens?</span></div>

<div class="ds-thread "><article class="ds-message ds-message--user" aria-label="You said"><div class="ds-message__body"><p>Sum up what Lume is</p></div><p class="ds-message__meta">Sent · <time>14:32</time></p></article><article class="ds-message" aria-label="Lume replied">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span></header>
<div class="ds-message__body" data-body=""><div class="ds-typing"><span class="ds-typing__dots" aria-hidden="true"><i></i><i></i><i></i></span><span>Lume is typing</span></div></div>
</article></div>

<div class="ds-thread "><article class="ds-message ds-message--user" data-status="error" aria-label="You said"><div class="ds-message__body"><p>Sum up what Lume is</p></div><p class="ds-message__error"><span><ds-icon name="alert-circle"></ds-icon>Not sent.</span><button type="button" class="ds-inline-action" data-action="resend"><ds-icon name="refresh"></ds-icon>Try again</button></p></article></div>

<div class="ds-thread "><article class="ds-message" data-latest="" aria-label="Lume replied">
<header class="ds-message__head"><span class="ds-message__mark" aria-hidden="true">L</span><span class="ds-message__author">Lume</span><time>14:33</time></header>
<div class="ds-message__body" data-body=""><p>I’d start with three things: the brand colors, the typography, and</p></div>
<p class="ds-message__meta">Reply interrupted.</p>
<div class="ds-message__actions" role="group" aria-label="Response actions"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="copy" aria-label="Copy response" data-ds-tooltip="Copy response"><ds-icon name="copy"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="retry" aria-label="Regenerate" data-ds-tooltip="Regenerate"><ds-icon name="refresh"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="like" aria-label="Good response" data-ds-tooltip="Good response" aria-pressed="false"><ds-icon name="thumbs-up"></ds-icon></button><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-action="dislike" aria-label="Bad response" data-ds-tooltip="Bad response" aria-pressed="false"><ds-icon name="thumbs-down"></ds-icon></button></div>
</article></div>

<div class="ds-composer" data-over="">
<div class="ds-composer__tokens" data-tokens="" hidden=""></div>
<label class="ds-visually-hidden" for="ds-composer-1-input">Message</label>
<textarea class="ds-composer__input" id="ds-composer-1-input" rows="2" placeholder="Write a message or / for commands" aria-autocomplete="list" aria-controls="ds-composer-1-menu">Long text pasted from a document, going past the message character limit…</textarea>
<div class="ds-composer__bar">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-attach="" aria-label="Attach file" data-ds-tooltip="Attach file"><ds-icon name="paperclip"></ds-icon></button>
<input type="file" multiple="" hidden="" data-file="">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-commands="" aria-label="Commands" data-ds-tooltip="Commands" data-ds-tooltip-kbd="/"><ds-icon name="slash"></ds-icon></button>
<span class="ds-composer__spacer"></span>
<span class="ds-composer__count" data-count="" aria-hidden="true">73 / 72</span>
<button type="button" class="ds-composer__send" data-send="" aria-label="Send message" data-ds-tooltip="Send" data-ds-tooltip-kbd="↵" aria-disabled="true"><ds-icon name="arrow-up"></ds-icon></button>
</div>
<div class="ds-composer__menu" id="ds-composer-1-menu" role="listbox" aria-label="Commands" hidden=""></div>
</div>
```

## Writing

The reply is interface. Write like the rest of the product: short, direct, in plain language.

Answer first

There are three steps: color, typography, and components.

Great question! Let’s explore this fascinating topic together…

Short sentences, active voice

Change the brand hue and run the build.

The brand hue can be changed, after which the build should be run.

Say when you don’t know

I didn’t find that figure in the file. Want me to look in another one?

Revenue was R$1.2M. (no source)

Lists only with three or more

Open the file and change the hue.

• Open the file• Change the hue

Use the screen’s terms

Click Export tokens.

Trigger the design token export functionality.

One next step, at the end

Want me to put the script together?

Can I help with anything else? I’m here for whatever you need!

## Accessibility

The whole conversation can be read and used by keyboard and screen reader.

- Conversation as a log — The message list has `role="log"` and `aria-live="polite"`: new replies are read without stealing focus.
- The reply read in full — While it arrives, the reply has `aria-busy="true"`, and the reader waits for it to finish instead of reading word by word.
- Focus stays in the composer — After sending, focus stays in the field, ready for the next question.
- A labeled field — The field has a label (it can be visually hidden) and `aria-describedby` points to the shortcuts.
- Commands by keyboard — / ↑ ↓ Enter — The command list uses `aria-activedescendant`: focus doesn’t leave the field and the arrows choose.
- Stop without a mouse — Esc — Esc stops the reply, and send is renamed “Stop reply”.
- Actions always reachable — Each reply’s actions appear on hover and focus, and are always visible on touch screens and on the latest reply.
- Reduced motion — With `prefers-reduced-motion`, the reply appears all at once and the “typing” dots stop.

## Tokens

Click the name to copy the variable.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Question bubble and composer | #FFFFFF | #2C2A27 |
| color.bg.surface (`--ds-color-bg-surface`) | Result card | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Bubble and card outline | #3E516624 | #FFFFFF0F |
| color.border.control (`--ds-color-border-control`) | Composer and attachments | #3E516633 | #FFFFFF21 |
| color.border.focus (`--ds-color-border-focus`) | Focused composer | #53657A | #C0CAD6 |
| color.fg.default (`--ds-color-fg-default`) | Conversation text | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | Card text | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Author, time, placeholder, and shortcuts | #5C6C7F | #9C9792 |
| color.brand.solid (`--ds-color-brand-solid`) | Send | #3E5166 | #C0CAD6 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Send icon | #F8FAFD | #1D2734 |
| color.brand.subtle (`--ds-color-brand-subtle`) | Author mark and chosen command | #EEF2F6 | #C0CAD624 |
| color.brand.fg (`--ds-color-brand-fg`) | Mark and command lettering | #3E5166 | #DAE0E8 |
| color.danger.fg (`--ds-color-danger-fg`) | Send failure and limit exceeded | #C13834 | #FFB2AA |
| radius.xl (`--ds-radius-xl`) | Bubble and card | 20 px | 20 px |
| radius.2xl (`--ds-radius-2xl`) | Composer | 28 px | 28 px |
| space.400 (`--ds-space-400`) | Between messages | 32 px | 32 px |

## Code

The CSS comes in `ds/ds.css`; the behavior, in `ds/js/composer.js`.

```html
<div class="ds-thread" role="log" aria-live="polite" aria-label="Conversation">
  <article class="ds-message ds-message--user">
    <div class="ds-message__body"><p>Write a script</p></div>
    <p class="ds-message__meta">Sent · <time>14:32</time></p>
  </article>
  <article class="ds-message">
    <header class="ds-message__head">
      <span class="ds-message__mark" aria-hidden="true">L</span>
      <span class="ds-message__author">Lume</span><time>14:32</time>
    </header>
    <div class="ds-message__body"><p>I put together a script in three scenes.</p></div>
    <section class="ds-result-card">…</section>
    <div class="ds-message__actions">…ds-icon-btn ds-icon-btn--sm…</div>
  </article>
</div>

<div id="composer"></div>
```

```html
import { createComposer } from 'https://lumeui.dev/v/0.36/lume.js';

const composer = createComposer(document.querySelector('#composer'), {
  label: 'Message to Lume',
  commands: [{ id: 'summarize', label: 'Summarize', description: 'Sums up in three sentences', icon: 'file-text' }],
  maxLength: 2000,
  onSend({ text, attachments, command }) {
    // send it; return false to keep the text in the field
  },
  onStop() {
    // cancel the reply in progress
  },
});

composer.setBusy(true);   // send becomes "stop"
composer.focus();
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Usage

- **Do:** Bubbles only on the question. The bubble marks who asks; the reply is reading text, with room to breathe.
- **Avoid:** Color on every bubble. No colored bubbles or gradients. The only color in the conversation is send.
- **Do:** Cards for what can be used. Scripts, summaries, and files become cards with actions. Regular conversation stays as text.
- **Avoid:** Actions shouting on every message. Copy and rate appear on hover and focus; they stay fixed only on the latest reply and on touch.
- **Tip:** Start with suggestions. In an empty conversation, three concrete suggestions teach what you can ask for.
- **Avoid:** Enter that doesn’t send. Enter sends, Shift + Enter breaks the line. Don’t swap them, and don’t send in the middle of an accent (IME).
