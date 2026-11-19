# Loading and errors

Lume section: Patterns. Page: https://lumeui.dev/#/padroes/carregamento

A page’s path from the click to the content, and what to do when it goes wrong: skeletons with the right shape, a notice when it’s slow, errors only in the part that failed, and nothing the person wrote lost.

In numbers: with no indicator: < 1 s · warn it’s slow: 3 s · errors with no way out: 0.

## Live example

A project page. Choose what to simulate above the stage. States inside a card follow Empty states.

### Screens

### Comments

- Loading: the skeleton has the shape of the screens and comments, and nothing jumps when they arrive.
- Slow: after 3 seconds the notice shows up, with Cancel.
- Save error: click Save notes. The text stays, and Try again fixes it.

Markup of the examples in this section:

```html
<div class="ds-segmented" role="radiogroup" aria-labelledby="lo-sim-label" data-lo-sim="">
<button type="button" class="ds-segmented__item" role="radio" data-value="carregando" aria-checked="true">Loading</button><button type="button" class="ds-segmented__item" role="radio" data-value="lento" aria-checked="false">Slow</button><button type="button" class="ds-segmented__item" role="radio" data-value="parte" aria-checked="false">Part failed</button><button type="button" class="ds-segmented__item" role="radio" data-value="salvar" aria-checked="false">Save error</button><button type="button" class="ds-segmented__item" role="radio" data-value="404" aria-checked="false">Not found</button>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-lo-replay="" aria-label="Restart the simulation" data-ds-tooltip="Restart"><ds-icon name="refresh"></ds-icon></button>

<span class="ds-skeleton"></span>

<span class="ds-skeleton ds-skeleton--text"></span>

<div class="ds-form-field">
<label class="ds-form-field__label" for="lo-notes">Project notes</label>
<div class="ds-field ds-field--multiline"><textarea class="ds-field__input" id="lo-notes" rows="2">Review the footer contrast before publishing.</textarea></div>
</div>

<button type="submit" class="ds-btn ds-btn--primary ds-btn--sm" data-lo-save="">Save notes</button>
```

## How long, which response

The wait decides what to show. The numbers are about the person’s perception, not the server.

| Wait | What to show |
| --- | --- |
| Up to 1 s | Nothing. An indicator that flashes and vanishes hurts more than it helps. |
| 1 to 3 s | A skeleton shaped like the page that’s coming, so nothing jumps when it arrives. |
| Over 3 s | The skeleton stays and a sentence says it’s taking a while, with Cancel. |
| Failed | Only the part that failed shows the error, with Try again. The rest of the page carries on. |

## Rules

Six decisions that apply to any wait or failure.

Skeletons with the right shape

The gray shapes take the exact place of what’s coming: title, lines, avatar. When the content arrives, nothing jumps.

Taking long? Say so

Past 3 seconds, a sentence warns and offers to cancel. An endless skeleton looks frozen.

Errors stay where they failed

If only the comments failed, only the comments card shows the error. Taking down the whole page for one part loses the rest.

What people wrote stays

Save failed? The text stays in the field, the notice says so, and Try again uses the same content.

Always a way out

Every error has an action: try again, go back, see the other projects. An error with no button is a dead end.

No codes on screen

“Error 500” helps nobody. Say what didn’t load and what to do; the code goes to the log.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="9" rx="2"></rect><rect x="13.5" y="3.5" width="7" height="5" rx="2"></rect><rect x="13.5" y="11.5" width="7" height="9" rx="2"></rect><rect x="3.5" y="15.5" width="7" height="5" rx="2"></rect></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3 2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="4" y="4" width="6.5" height="6.5" rx="2"></rect><rect x="13.5" y="4" width="6.5" height="6.5" rx="2"></rect><rect x="4" y="13.5" width="6.5" height="6.5" rx="2"></rect><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="2"></rect></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5l7.5 2.8v5.4c0 4.4-3.1 7.9-7.5 8.8-4.4-.9-7.5-4.4-7.5-8.8V6.3z"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14.3-4.6L4 8.5M4 4v4.5h4.5M4 13a8 8 0 0 0 14.3 4.6l1.7-2.1M20 20v-4.5h-4.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 7V5h14v2M12 5v14M9 19h6"></path></svg>
```

## Messages

What didn’t work, what still works, and what to do now.

| Situation | Avoid | Prefer |
| --- | --- | --- |
| Slow | Please wait… | This is taking longer than usual. Cancel |
| Part failed | Error 500: Internal Server Error | We couldn’t load the comments. The rest of the page works. |
| Save failed | Operation failed. | We couldn’t save. What you wrote is still here. |
| Not found | 404 Not Found | This page no longer exists. See projects |

## Accessibility

People who can’t see the skeleton need to know something is coming, and when it arrived.

- Loading, said — The waiting area has `aria-busy="true"` and a name (“Loading screens”); the skeleton shapes aren’t read.
- Arrived, without stealing focus — When the content arrives, `aria-busy` goes away and the `aria-live="polite"` region reads what came in. Focus stays where it was.
- Slowness announced — The slow notice is `role="status"`; Cancel is a real button, reachable by keyboard.
- Save errors get focus — The alert has `role="alert"` and receives focus; Try again is the first button after it.
- Reduced motion — The skeleton pulse and spinner rotation stop with `prefers-reduced-motion`; the shape still says it’s loading.

## Code

Skeleton and spinner are CSS (`ds-skeleton`, `ds-spinner`); the timings and per-part errors are your code.

```html
<!-- loading: the shape of what’s coming -->
<div aria-busy="true" aria-label="Loading screens">
  <span class="ds-skeleton" style="--w:32px; --h:32px"></span>
  <span class="ds-skeleton ds-skeleton--text" style="--w:60%"></span>
</div>

<!-- one part failed: the error stays in the card -->
<section aria-labelledby="comments">
  <h2 id="comments">Comments</h2>
  <p>We couldn’t load the comments. The rest of the page works.</p>
  <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm">Try again</button>
</section>
```

```html
import { toast } from 'https://lumeui.dev/v/1.14/lume.js';

// skeleton only after 1 s; slow notice after 3 s
const skeleton = setTimeout(() => showSkeleton(), 1000);
const slow = setTimeout(() => warnSlow(), 3000);
try {
  render(await fetch('/api/projects/12').then((r) => r.json()));
} catch {
  showError(card);   // only the part that failed
} finally {
  clearTimeout(skeleton); clearTimeout(slow);
}
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Usage

Skeletons for things with a known shape; spinners for things without one (a button, an action).

- **Do:** load in parts. The header and what’s already known show up first; what depends on another request comes later, each in its own card.
- **Avoid:** a spinner in the middle of an empty page. It doesn’t say what’s coming or how much is left, and when the content arrives everything jumps.
- **Tip:** Retry on your own, once. Network failures are usually brief. One automatic retry before showing the error spares people a lot.
