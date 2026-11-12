# Motion

Lume section: Foundations. Page: https://lumeui.dev/#/fundamentos/movimento

Motion explains what changed and where it came from. Few durations, few curves, and always the same pair for the same kind of change.

In numbers: durations: 5 · curves: 5 · recipes: 4 · reduced motion: .

## Durations

The bigger the surface and the distance traveled, the longer the duration. Play one at a time or all together to compare — all with the standard curve.

| Token | Value | Demo |  |
| --- | --- | --- | --- |
| instant — --ds-duration-instant — Change with no transition — an immediate state swap. | 0 ms |  |  |
| fast — --ds-duration-fast — Hover, focus, and color. Most interactions. | 120 ms |  |  |
| base — --ds-duration-base — Menus, tooltips, chevrons, and popovers. | 200 ms |  |  |
| slow — --ds-duration-slow — Sidebar, drawer, menu groups, and page entrance. | 320 ms |  |  |
| slower — --ds-duration-slower — Reserved for large, rare transitions. | 480 ms |  |  |

## Curves

The curve sets the rhythm. The graphs use each token’s four real numbers; the demos run at 480 ms (duration.slower) so there’s time to notice the difference.

The default for almost everything: leaves fast and settles softly.

Surfaces that move: menus, sidebar, drawer.

Entrances: the element arrives and slows down.

Exits: the element speeds up as it leaves.

Progress and continuous loops, with no acceleration.

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-play-row="" aria-label="Play standard"><ds-icon name="play"></ds-icon></button>

<button type="button" class="ds-inline-action" data-copy="cubic-bezier(0.2, 0, 0, 1)"><ds-icon name="code"></ds-icon>cubic-bezier(0.2, 0, 0, 1)</button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-play-row="" aria-label="Play emphasized"><ds-icon name="play"></ds-icon></button>

<button type="button" class="ds-inline-action" data-copy="cubic-bezier(0.32, 0.72, 0, 1)"><ds-icon name="code"></ds-icon>cubic-bezier(0.32, 0.72, 0, 1)</button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-play-row="" aria-label="Play decelerate"><ds-icon name="play"></ds-icon></button>

<button type="button" class="ds-inline-action" data-copy="cubic-bezier(0, 0, 0, 1)"><ds-icon name="code"></ds-icon>cubic-bezier(0, 0, 0, 1)</button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-play-row="" aria-label="Play accelerate"><ds-icon name="play"></ds-icon></button>

<button type="button" class="ds-inline-action" data-copy="cubic-bezier(0.3, 0, 1, 1)"><ds-icon name="code"></ds-icon>cubic-bezier(0.3, 0, 1, 1)</button>
```

## Recipes

The combinations the components actually use. Each demo below runs on the same CSS as the components.

Buttons, chips, navigation items, fields, and inline actions.

```html
transition: background-color var(--ds-duration-fast) var(--ds-easing-standard);
```

Chip menus, the rotating chevron, and ⌘K search. Opacity uses fast + standard.

```html
transition:
  opacity var(--ds-duration-fast) var(--ds-easing-standard),
  transform var(--ds-duration-base) var(--ds-easing-emphasized);
```

Collapsing the sidebar (⌘B), the mobile drawer, and opening menu groups.

```html
transition: width var(--ds-duration-slow) var(--ds-easing-emphasized);
```

Motion

Every page change on the site: the content rises 6 px and appears.

```html
animation: page-enter var(--ds-duration-slow) var(--ds-easing-decelerate) both;
```

Markup of the examples in this section:

```html
<button type="button" class="ds-btn ds-btn--secondary">Button</button>

<button type="button" class="ds-chip">Chip<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<a class="ds-inline-action" href="#/fundamentos/movimento" data-noop=""><ds-icon name="file-text"></ds-icon>Inline action</a>

<button type="button" class="ds-inline-action" data-copy="transition: background-color var(--ds-duration-fast) var(--ds-easing-standard);"><ds-icon name="copy"></ds-icon>Copy transition</button>

<button type="button" class="ds-chip" data-toggle-pop="" aria-expanded="false">Theme<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10.5 3.5a7.5 7.5 0 0 0 10 10A8.5 8.5 0 1 1 10.5 3.5z"></path></svg>

<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"></path></svg>
```

## Reduced motion

People who ask the operating system for less motion get the same interface, with instant state changes. Nothing depends on animation to work.

With the simulation on, every demo on this page changes state without animating. Also in reduced motion: the theme switches without a transition and in-page navigation scrolls without smoothing.

```html
/* ds/base.css */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Markup of the examples in this section:

```html
<span class="ds-badge" data-system-pref="">No restriction</span>

<button type="button" class="ds-chip ds-chip--sm" data-simulate="" aria-pressed="false"><ds-icon name="motion"></ds-icon><span data-simulate-label="">Off</span></button>
```

## Usage

Good motion goes unnoticed. Three rules to keep it that way.

- **Do:** use the token pairs. Duration and curve always from the tokens, in the right recipe’s pair. Prefer animating opacity and transform.
- **Avoid:** loose values. Numbers and curves made up on the spot give each component a different rhythm.
- **Tip:** Frequent interaction, short motion. What happens all the time (hover, focus) stays at fast. Long durations only for big, rare changes.
