# Voice and tone

Lume section: Foundations. Page: https://lumeui.dev/#/fundamentos/tom-de-voz

The voice is who the product is, and it doesn’t change. The tone is how that voice sounds in each moment: an error doesn’t speak like a celebration, and a finance app doesn’t speak like a game.

In numbers: tones: 4 · situations: 5 · rules: 6.

## Voice and tone

Lume’s voice has three traits. They hold in every tone; the tone only decides how much of each shows.

Clear

Everyday words, one idea per sentence.

It isn’t: tech jargon or error codes.

Direct

Says what happened and what to do next.

It isn’t: curt or harsh.

Kind

Takes care of whoever made a mistake and never blames them.

It isn’t: syrupy or over-apologetic.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 19.5C6 15.6 3.5 12.6 3.5 9.3A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8.5 2.3c0 3.3-2.5 6.3-8.5 10.2z"></path></svg>
```

## Tones

Four ready-made tones, with the same five situations written each one’s way. Switch the tone and compare: buttons barely change, because a verb is a verb in any tone.

Neutral

Clear and direct. It’s Lume’s tone and the safe choice when there’s no reason for another.

Fits — Tools, dashboards, design systems

- Talks to people as “you”, no detours
- Short sentences, verb first
- No exclamation marks, no jokes

Success

Waiting

Error

Deletion

Empty

Markup of the examples in this section:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Tone">
<button type="button" class="ds-segmented__item" role="radio" data-value="neutro" aria-checked="true">Neutral</button><button type="button" class="ds-segmented__item" role="radio" data-value="acolhedor" aria-checked="false">Warm</button><button type="button" class="ds-segmented__item" role="radio" data-value="profissional" aria-checked="false">Professional</button><button type="button" class="ds-segmented__item" role="radio" data-value="leve" aria-checked="false">Playful</button>
</div>

<div class="ds-toast ds-toast--success" data-open=""><span class="ds-toast__icon"><ds-icon name="check-circle"></ds-icon></span>
<span class="ds-toast__message">Changes saved.</span>
</div>

<span class="ds-spinner ds-spinner--sm" aria-hidden="true"></span>

<div class="ds-alert ds-alert--danger">
<span class="ds-alert__icon"><ds-icon name="alert-circle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Couldn’t save</p>
<p class="ds-alert__text">Check your connection and try again. What you wrote is still here.</p>
<div class="ds-alert__actions"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm"><ds-icon name="refresh"></ds-icon>Try again</button></div>
</div>
</div>

<div class="ds-modal ds-modal--inline ds-modal--danger">
<div class="ds-modal__header">
<span class="ds-modal__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<div class="ds-modal__heading"><p class="ds-modal__title">Delete “New site”?</p></div>
</div>
<div class="ds-modal__body">The project and its 12 files are removed for good.</div>
<div class="ds-modal__footer">
<button type="button" class="ds-btn ds-btn--secondary">Cancel</button>
<button type="button" class="ds-btn ds-btn--danger">Delete project</button>
</div>
</div>

<div class="ds-empty ds-empty--compact">
<span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
<p class="ds-empty__title">No projects yet</p>
<p class="ds-empty__description">Create the first one to start organizing your work.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary ds-btn--sm"><ds-icon name="plus"></ds-icon>Create project</button></div>
</div>
```

## Tone by situation

The app has a single tone, but it adjusts to the moment. What it can change and what stays the same in any tone:

| Situation | The tone can | No tone can |
| --- | --- | --- |
| Success | Celebrate a little, or not at all when the screen already shows the result. | Interrupt with a modal to say it worked. |
| Error | Change how it’s said: shorter, calmer, more formal. | Blame the person, make a joke, or hide what to do. |
| Deletion | Offer a lighter way out, like archiving. | Soften the consequence: what goes, goes for good. |
| Waiting | Give context and, when known, how long is left. | Promise a time it can’t keep. |
| Empty | Invite and show the first step. | Leave the screen with no action at all. |

## Writing rules

Six rules that hold for any tone and any language.

A verb on the button

“Save”, “Delete project”. Never “OK” or “Yes”: the button says what it will do.

What happened, what to do

Every problem message answers both questions, in that order.

No blame

“Couldn’t save”, not “You typed it wrong”. The system owns the problem.

Short first

The main sentence works on its own; detail comes after, for whoever needs it.

Same word, same thing

Delete is always delete. Switching to remove or erase on the next screen confuses people.

Numbers and dates by locale

Format with `Intl`, never by hand. The same value changes shape in each language.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="7" width="18" height="10" rx="3.5"></rect><path d="M8.5 12h7"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V13"></path><path d="M12 16.5h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5l7.5 2.8v5.4c0 4.4-3.1 7.9-7.5 8.8-4.4-.9-7.5-4.4-7.5-8.8V6.3z"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 7V5h14v2M12 5v14M9 19h6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3.5 5v6.2a1.5 1.5 0 0 0 .44 1.06l8 8a1.5 1.5 0 0 0 2.12 0l6.2-6.2a1.5 1.5 0 0 0 0-2.12l-8-8A1.5 1.5 0 0 0 11.2 3.5H5A1.5 1.5 0 0 0 3.5 5z"></path><path d="M8 8h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M3.5 12h17M12 3.5c2.3 2.3 3.5 5.2 3.5 8.5s-1.2 6.2-3.5 8.5c-2.3-2.3-3.5-5.2-3.5-8.5s1.2-6.2 3.5-8.5z"></path></svg>
```

## Messages

The most common texts, before and after. The “after” is in the Neutral tone.

| Situation | Avoid | Prefer |
| --- | --- | --- |
| Confirmation | OK | Delete project |
| Network failure | Erro 503: Service Unavailable | Couldn’t connect. Try again in a few seconds. |
| Invalid field | Invalid input. | Enter an email like name@example.com. |
| Empty list | No data. | No orders yet. Orders show up here as soon as they arrive. |
| Success | Operation completed successfully! | Order sent. |

## In the three languages

Translating isn’t enough: each language has its own habits. The tone stays the same, but the form changes.

|  | Português | English | Español |
| --- | --- | --- | --- |
| Form of address | “você” in every tone | “you” in every tone | “tú”; “usted” in Professional |
| Capitalization | Only the first word: “Criar projeto” | Only the first too: “Create project” | Only the first: “Crear proyecto” |
| Punctuation | Curly quotes “ ” | Curly quotes “ ” and apostrophe ’ | ¿ and ¡ open questions and exclamations |
| Numbers and dates | 12.345,5 · 15/11/2026 · R$ 49,90 | 12,345.5 · 11/15/26 · R$49.90 | 12.345,5 · 15/11/26 · 49,90 R$ |
| Length | Up to 30% longer than English | Usually the shortest | Up to 30% longer than English |

## How to standardize it in your app

Pick a tone, pull the texts out of the code, and give the same guide to whoever writes, people or AI. It’s what Lume does with `messages.js`.

- 1 — Pick the voice and one tone — Three voice traits and one of the four tones, or your own. One tone per app: mixing tones from screen to screen feels like two products.
- 2 — Texts in a file, with keys — The code asks for the key, it doesn’t write the sentence. Reviewing the tone becomes editing one file, and switching tones becomes switching files.
- 3 — The same guide for AI — Paste the snippet below before asking for copy. It follows the tone picked above.

```html
// messages/neutral.js
export default {
  'salvar.ok': 'Changes saved.',
  'salvar.erro': 'Couldn’t save',
  'projetos.vazio': 'No projects yet',
};

// messages/warm.js
export default {
  'salvar.ok': 'All set, everything’s saved.',
  'salvar.erro': 'We couldn’t save just now',
  'projetos.vazio': 'Your space is ready',
};

// messages/index.js: the app’s tone is a single choice
import neutro from './neutro.js';
import acolhedor from './acolhedor.js';

const TONS = { neutro, acolhedor };
const tom = 'acolhedor';

export const t = (chave) => TONS[tom][chave] ?? TONS.neutro[chave] ?? chave;

// on screen
toast(t('salvar.ok'));
```

```html
Write the interface copy in the Neutral tone.
The tone: Clear and direct. It’s Lume’s tone and the safe choice when there’s no reason for another.
- Talks to people as “you”, no detours.
- Short sentences, verb first.
- No exclamation marks, no jokes.
- Buttons start with a verb and say what they do; never “OK”.
- Errors say what happened and what to do, without blaming the person and without jokes.
- Deletion makes the consequence clear; waiting says how long is left, when known.
- The same word for the same thing on every screen.

Return each text with its key in the messages file.
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Usage

Good tone doesn’t draw attention to itself: people just notice they understood.

- **Do:** write the tone before the copy. Three traits and five examples, as on this page, settle more debates than any review at the end.
- **Avoid:** a tone per screen. Formal at sign-up, full of jokes on the dashboard, curt on errors: people don’t know who they’re talking to.
- **Tip:** Read it out loud. If the sentence would sound odd coming from a person across the counter, rewrite it.
