# AGENTS.md

Guidance for coding agents working in this project.

## Project
**Level Up: Making Your First Game** is a one-page website about game development.
- **Audience:** beginners who are curious about game development
- **Content:** a short intro, "How a Game Gets Made" (5 stages), and "Beginner Project Ideas" (filterable cards)
- **Look:** playful and colorful, with a warm cream background, coral, yellow, teal and purple accents, and rounded cards

## Constraints (must follow)
- **Only three site files:** `index.html`, `style.css`, `script.js`. The only other files are docs and config (`README.md`, `AGENTS.md`, `.gitignore`).
- **No dependencies:** no packages, frameworks, build tools, CDNs, external fonts or external images. Use system fonts and emoji or CSS for decoration.
- **Responsive:** must work from ~320px to 1440px+ wide with no horizontal scrolling.
- **Keyboard accessible:** everything usable with Tab, Enter and Space, with a visible `:focus-visible` ring and a skip link.
- **Semantic HTML:** `header`, `main`, labelled `section`s, `footer`, one `h1`, and lists for groups of cards.
- **Progressive enhancement:** without JavaScript, all content stays visible.
- **Stay local:** keep all work inside this project folder. Serve only on `localhost` (`127.0.0.1`).
- **Don't, unless the user asks:** install anything, create accounts, deploy, commit, push, or start a server on the user's behalf.

## Files
- `index.html`: structure and content. Step cards go in an `<ol>` and project cards in a `<ul>`, each with `data-tags`.
- `style.css`: design tokens on `:root`, a mobile-first grid using `repeat(auto-fit, minmax(...))`, focus styles, and `prefers-reduced-motion` support.
- `script.js`: the project filter. It toggles each card's `hidden` attribute, sets `aria-pressed` on the buttons, and updates an `aria-live` status line.

## Adding a project card
Copy an existing `<li class="card project-card">` in `index.html`. Set `data-tags` to one or more of `2d 3d text jam`, separated by spaces, and add a matching `<li class="tag tag-…">` badge for each tag.

## Checking changes
- JS syntax: `node --check script.js`
- Run locally: see `README.md`. Then check the page at 320px, 768px and 1440px widths, and keyboard-only.
