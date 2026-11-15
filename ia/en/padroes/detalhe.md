# Detail and editing

Lume section: Patterns. Page: https://lumeui.dev/#/padroes/detalhe

The page for a single thing: who or what it is, its details, and what changed. Each field is edited in place, and each change goes into the history.

In numbers: field edited at a time: 1 · tabs, at most: 5 · page “Edit” mode: 0.

## Live example

The page of a person from the Data list. Edit the fields with the pencil and check the history.

- Edit the team and save with Enter: the value changes and Activity gets a new line.
- “Add phone” is the empty state that is already the button.
- Clear the name and try to save: the error stays right there, on the row. Esc gives up.

Markup of the examples in this section:

```html
<nav class="ds-breadcrumb" aria-label="You are here"><ol>
<li><a href="#/padroes/listagem">People</a></li>
<li><ds-icon name="chevron-right"></ds-icon><span aria-current="page" data-de-crumb="">Amanda Ribeiro</span></li>
</ol></nav>
```

## Anatomy

Six parts. The header stays the same on every tab.

- 1 — Path — The breadcrumb goes back to the list, with the filters the person had. It’s the “Back” that never misses.
- 2 — Header — Who or what it is, its state, and the actions for that thing. It stays the same on every tab.
- 3 — Tabs — Overview first. Activity with the number of events. Five tabs at most.
- 4 — Properties — Label and value, one per row. Whoever can change it sees the pencil; the rest is read-only.
- 5 — Summary — On the side, the facts that can’t be edited: when they joined, last active, how many projects.
- 6 — History — Who changed what and when, newest first. Each edit lands here right away.

## Rules

Six decisions that apply to any detail page.

Edit in place, one field at a time

To change the team, nobody needs a form page. The field opens right there, with Save and Cancel.

The pencil doesn’t hide

It stays visible, not only on hover. And it only shows where the person can really edit.

Enter saves, Esc gives up

When done, focus returns to that row’s pencil, not to the top of the page.

The screen is the confirmation

The new value in place and the new line in the history already say it saved. A toast here would be repetition.

Every change has an author and a time

“Ana Lima changed the team from Product to Design”: the before, the after, and who did it.

Empty is an invitation

“Add phone” instead of a dash. It says what’s missing and is already the button to fill it in.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M16 4.5a2.12 2.12 0 0 1 3 3L8 18.5l-4 1 1-4z"></path><path d="m14 6.5 3 3"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="2.5" y="6" width="19" height="12" rx="2.5"></rect><path d="M6 10h.01M9.3 10h.01M12.6 10h.01M15.9 10h.01M18 10h.01M7 14h10"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1L3.5 8.5M3.5 4v4.5H8M12 7.5V12l3 2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>
```

## Messages

The history tells a story: who, what, from where to where.

| Situation | Avoid | Prefer |
| --- | --- | --- |
| No value | — or N/A | Add phone |
| History | Record updated. | You changed the team from Design to Product |
| Error | Invalid field. | Write the name. |
| Date | 2026-11-14 09:12:33 | Nov 14, 9:12 AM |

## Accessibility

Editing in place only works if focus knows where to go.

- Pencils with full names — “Edit team”, not just “Edit”: in a list of identical buttons, the name is what tells them apart.
- Focus to the field and back — On opening, focus goes to the field, with the text selected. On saving or canceling, it returns to the same row’s pencil.
- Saved, said out loud — A hidden `role="status"` region says “Team saved”: people who can’t see the screen aren’t left wondering.
- Error tied to the field — `aria-invalid` and `aria-describedby` tie the message to the field; focus stays on it.
- Structure you can read — A breadcrumb with `aria-current`, tabs in the ARIA pattern, and properties in a `<dl>`: the screen reader says “Team, Design”.

## Code

Properties are a `ds-dl`; editing swaps the `<dd>` for a small form. Tabs come from `mountTabs`.

```html
<dl class="ds-dl ds-dl--lines">
  <div class="ds-dl__row">
    <dt>Team</dt>
    <dd>
      <span>Design</span>
      <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" aria-label="Edit team">…</button>
    </dd>
  </div>
</dl>

<!-- clicking the pencil turns the dd into: -->
<form>
  <div class="ds-field ds-field--sm"><input class="ds-field__input" aria-label="Team" value="Design"></div>
  <button type="submit" class="ds-btn ds-btn--primary ds-btn--sm">Save</button>
  <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm">Cancel</button>
</form>
<p class="ds-visually-hidden" role="status"></p>   <!-- “Team saved” -->
```

```html
import { mountTabs } from 'https://lumeui.dev/v/1.6/lume.js';

mountTabs(page);

function edit(row) {
  const pencil = row.querySelector('button');
  row.dd.replaceChildren(form);
  form.querySelector('input').select();

  form.onsubmit = async (e) => {
    e.preventDefault();
    await save(row.id, form.input.value);
    show(row);                          // the new value is the confirmation
    status.textContent = 'Team saved';
    pencil.focus();
  };
  form.onkeydown = (e) => e.key === 'Escape' && (show(row), pencil.focus());
}
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Usage

Detail is for a single thing. To compare several, go back to the list.

- **Do:** identity always in view. Name, state, and actions stay in the header, above the tabs. Switching tabs can’t make people forget where they are.
- **Avoid:** one Edit button for the whole page. Turning everything into a form to change one field makes people hunt for the field again and save what they didn’t touch.
- **Tip:** Fields that go together, edit together. Address, billing: when a field makes no sense without the others, open a panel or modal with the whole group.
