# Empty states

Lume section: Patterns. Page: https://lumeui.dev/#/padroes/estados-vazios

When there’s nothing to show — yet, because of a filter, or because of an error — the screen says what happened and offers the next step. Never a blank area.

In numbers: situations: 6 · places: 3 · parts: 4 · next step: always.

## Example

```html
<div class="ds-empty">
  <span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
  <p class="ds-empty__title">No projects yet</p>
  <p class="ds-empty__description">Projects bring together tasks, files, and people. Create the first one and invite the team.</p>
  <div class="ds-empty__actions">
    <button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Create project</button>
    <button type="button" class="ds-inline-action">See an example<ds-icon name="arrow-right" size="14"></ds-icon></button>
  </div>
</div>
```

## First use

The first time is the best moment to teach: say what will show up here and give the button that makes it appear. Click “Create project”.

- A primary action with a verb: “Create project”. A quiet alternative beside it, if there is one.
- After creating, focus moves to the new item — people see the result right away.
- No empty screen with a lone “+” in the corner. The empty state is the invitation itself.

Markup of the examples in this section:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Example theme: first use" data-ds-tooltip="Switch between light and dark">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<div class="ds-empty ds-empty--plain">
<span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
<p class="ds-empty__title">No projects yet</p>
<p class="ds-empty__description">Projects bring together tasks, files, and people. Create the first one and invite the team.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary" data-act="create"><ds-icon name="plus"></ds-icon>Create project</button><button type="button" class="ds-inline-action" data-act="sample">See an example<ds-icon name="arrow-right"></ds-icon></button></div>
</div>
```

## No results

The emptiness was caused by the person — by a search or a filter. Repeat what they asked for, suggest what to try, and keep the controls in view.

No documents

- The title repeats the search in quotes: people can check they typed it right.
- “Clear search” brings back the list and returns focus to the field. The count is announced without stealing focus.
- Don’t hide search or filters in the empty state: they’re precisely the way back.

Markup of the examples in this section:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Example theme: no results" data-ds-tooltip="Switch between light and dark">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<div class="ds-field ds-field--sm"><ds-icon name="search"></ds-icon><input class="ds-field__input" type="search" value="budget 2019" aria-label="Search documents" data-search="" spellcheck="false" autocomplete="off"></div>

<button type="button" class="ds-chip ds-chip--sm" data-kind="all" aria-pressed="false">All</button>

<button type="button" class="ds-chip ds-chip--sm" data-kind="pdf" aria-pressed="true">PDF</button>

<button type="button" class="ds-chip ds-chip--sm" data-kind="planilha" aria-pressed="false">Spreadsheet</button>

<div class="ds-empty ds-empty--compact ds-empty--plain">
<span class="ds-empty__icon"><ds-icon name="search-x"></ds-icon></span>
<p class="ds-empty__title">Nothing found for “budget 2019”</p>
<p class="ds-empty__description">Check the spelling or try another word — or clear the type filter.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary" data-act="clear-search"><ds-icon name="x"></ds-icon>Clear search</button><button type="button" class="ds-inline-action" data-act="clear-filters">Clear filters<ds-icon name="filter"></ds-icon></button></div>
</div>
```

## Error

Something failed on our side. Say what didn’t load, reassure about the data, and offer to try again. Click “Try again”.

- The danger tone on the icon, not the whole screen. The text says the same as the color.
- Code and time in `.ds-empty__meta`: support will thank you, and it doesn’t bother those who don’t need it.
- No blame (“You did something wrong”) and no exclamation marks. A system error belongs to the system.

Markup of the examples in this section:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Example theme: error" data-ds-tooltip="Switch between light and dark">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<div class="ds-empty ds-empty--danger ds-empty--plain">
<span class="ds-empty__icon"><ds-icon name="alert-circle"></ds-icon></span>
<p class="ds-empty__title">We couldn’t load the payments</p>
<p class="ds-empty__description">It may be instability on our side. Your data is safe — try again in a few seconds.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary" data-act="retry"><ds-icon name="refresh"></ds-icon>Try again</button><button type="button" class="ds-inline-action" data-act="status">See service status<ds-icon name="external-link"></ds-icon></button></div>
<p class="ds-empty__meta">Error 503 · 14:32</p>
</div>
```

## No permission

The content exists, but not for this person. Say whose it is and how to request access — without exposing what they can’t see.

- A neutral icon (lock), not an error one: no one made a mistake.
- After requesting, confirm in the same place and say what happens next.
- “Access denied (403)” helps no one get where they need to go.

Markup of the examples in this section:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Example theme: no permission" data-ds-tooltip="Switch between light and dark">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<div class="ds-empty ds-empty--muted ds-empty--plain">
<span class="ds-empty__icon"><ds-icon name="lock"></ds-icon></span>
<p class="ds-empty__title">You don’t have access to this report</p>
<p class="ds-empty__description">It belongs to the Finance team. Ask whoever created it for access — they get a notice.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary" data-act="request"><ds-icon name="mail"></ds-icon>Request access</button><button type="button" class="ds-inline-action" data-act="back">Back to reports<ds-icon name="arrow-left"></ds-icon></button></div>
</div>
```

## Offline

Without internet, show what was already saved with a quiet notice; with nothing saved, an empty state that resolves on its own. This example also follows your real connection.

- Review partnership agreement — Today
- Send budget to Bruno — Tomorrow
- Prepare Q4 presentation — Friday

- With a saved version: a compact alert on top and the content stays legible.
- Come back on your own when the connection returns — and say so with a short toast.
- Don’t wipe what people were already seeing just because the network dropped.

Markup of the examples in this section:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Example theme: offline" data-ds-tooltip="Switch between light and dark">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>
```

## Loading

Up to 1 second, nothing — a flashing spinner hurts more than it helps. Up to 10, a spinner with text. Beyond that, say it’s taking a while and offer to cancel.

- October sales — Updated 2 h ago
- Costs by team — Updated yesterday
- Quarterly churn — Updated 3 days ago

- Text next to the spinner: “Loading the reports…”. A spinning icon alone tells a screen reader nothing.
- Reloading something already on screen? Keep the content dimmed instead of swapping it for an empty state.
- With reduced motion, the icon stops and the text stays.

Markup of the examples in this section:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Example theme: loading" data-ds-tooltip="Switch between light and dark">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>
```

## Anatomy

Four parts — and only the action is required when there’s a way out. Everything centered, in a narrow column.

- Icon. It gives context at a glance. An icon from the library, never an illustration or emoji. Optional inside lists.
- Title. What happened, in up to six words. No period.
- Description. Why it’s empty and what to do. One or two sentences.
- Actions. One primary — the next step — and, if it makes sense, an alternative as an inline action.

Markup of the examples in this section:

```html
<div class="ds-empty">
<span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
<p class="ds-empty__title">No projects yet</p>
<p class="ds-empty__description">Projects bring together tasks, files, and people. Create the first one and invite the team.</p>
<div class="ds-empty__actions"><span class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Create project</span><span class="ds-inline-action">See an example<ds-icon name="arrow-right"></ds-icon></span></div>
</div>
```

## Writing

Say what happened, why (when it helps), and what to do. A calm tone, no blame, no exclamation marks — and always a way out.

| Situation | Avoid | Prefer |
| --- | --- | --- |
| First use | No data. | No projects yet. Create the first one and invite the team. |
| No results | 0 results | Nothing found for “budget 2019”. Check the spelling or clear the filters. |
| Error | An error occurred! | We couldn’t load the payments. Try again in a few seconds. |
| No permission | Access denied (403) | You don’t have access to this report. Ask whoever created it. |
| Offline | Network error | Offline. Showing the last saved version, from 14:32. |
| Loading | Please wait… | Loading the projects… It usually takes a few seconds. |

## Where it appears

The same state changes size depending on the place. A full page has room; inside a panel, it shrinks; in a list, it becomes a row.

Full page `ds-empty` — The whole screen is empty. Large icon, title, description, and action.

Inside a panel `ds-empty--compact` — One block of the screen is empty; the rest keeps working.

Name — Updated

List or table row `ds-empty--inline`

Icon on the left, action on the right. In a table, it goes in a cell with `colspan`.

Markup of the examples in this section:

```html
<div class="ds-empty">
<span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
<p class="ds-empty__title">No projects yet</p>
<p class="ds-empty__description">Projects bring together tasks, files, and people. Create the first one and invite the team.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Create project</button></div>
</div>

<span class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted"><ds-icon name="more-horizontal"></ds-icon></span>

<div class="ds-empty ds-empty--compact" role="status">
<span class="ds-empty__icon"><ds-icon name="search-x"></ds-icon></span>
<p class="ds-empty__title">Nothing found for “budget 2019”</p>
<p class="ds-empty__description">Check the spelling or try another word. Search looks at titles and authors.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary"><ds-icon name="x"></ds-icon>Clear search</button></div>
</div>

<div class="ds-empty ds-empty--inline ds-empty--danger">
<span class="ds-empty__icon"><ds-icon name="alert-circle"></ds-icon></span>
<p class="ds-empty__title">We couldn’t load the payments</p>
<p class="ds-empty__description">Try again in a few seconds.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary"><ds-icon name="refresh"></ds-icon>Try again</button></div>
<p class="ds-empty__meta">Error 503 · 14:32</p>
</div>
```

## Accessibility

An empty state is content too: it needs to be announced, have predictable focus, and never rely on icon or color alone.

- Announce without stealing focus — Empty result and count in `role="status"`: the screen reader says “Nothing found” and the person stays in the search field.
- Alerts only after an action — An error that appears on retry uses `role="alert"`. On page load, no alert — the content is already there.
- Focus that follows the action — Tab Enter — “Clear search” returns focus to the field; a successful “Try again” goes to the content; “Create” goes to the new item.
- Loading with text — The container gets `aria-busy="true"` and the spinner comes with a sentence. A spinning icon alone says nothing.
- Decorative icons — The state icon is `aria-hidden`; the title and description carry the meaning.
- Reduced motion — With `prefers-reduced-motion`, the spinner stops. The text keeps saying what’s happening.
- Controls in view — Search, filters, and navigation stay on screen in the empty state — they’re the way back.

## Code

One base class and modifiers for place and tone. The actions are the usual buttons and inline actions.

```html
<div class="ds-empty ds-empty--danger">
  <span class="ds-empty__icon"><ds-icon name="alert-circle"></ds-icon></span>
  <p class="ds-empty__title">We couldn’t load the payments</p>
  <p class="ds-empty__description">It may be instability on our side. Your data is safe — try again in a few seconds.</p>
  <div class="ds-empty__actions">
    <button type="button" class="ds-btn ds-btn--secondary"><ds-icon name="refresh"></ds-icon>Try again</button>
    <button type="button" class="ds-inline-action">See service status<ds-icon name="external-link" size="14"></ds-icon></button>
  </div>
  <p class="ds-empty__meta">Error 503 · 14:32</p>
</div>
```

| Class | When to use |
| --- | --- |
|  `ds-empty`  | Full page or empty main area. |
|  `ds-empty--compact`  | Inside a panel, card, or column. |
|  `ds-empty--inline`  | A list or table row; icon on the left, action on the right. |
|  `ds-empty--plain`  | No outline or background, when it’s already inside a surface. |
|  `ds-empty--danger`  | Error: icon in the danger tone. |
|  `ds-empty--warning`  | Offline and warning situations. |
|  `ds-empty--muted`  | Neutral, like no permission. |
|  `ds-empty--loading`  | Loading: the icon spins (stops with reduced motion). |
|  `ds-empty__meta`  | Error code, time, version — a small line at the end. |

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Usage

Six rules so the empty state doesn’t become a dead end.

- **Do:** always a next step. Create, clear filters, try again, request access. If there’s nothing to do, say when it will change.
- **Avoid:** “No data”. It explains nothing. People don’t know whether it’s an error, a filter, or that they haven’t started yet.
- **Tip:** Tell the causes apart. First use, no results, and errors call for different text and actions — even with the same layout.
- **Do:** a library icon. An icon gives context and matches the rest. Large illustrations and emoji compete with the message.
- **Avoid:** swapping content for a spinner. When reloading, keep what was already on screen dimmed. Flashing to empty makes it look like everything vanished.
- **Tip:** One primary action. Two primary buttons in an empty state split attention. The alternative goes as an inline action.
