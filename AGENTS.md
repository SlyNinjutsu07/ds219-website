# AGENTS.md

Guidance for coding agents working in this project.

## Project
**Level Up: Making Your First Game** is a one-page website about game development.
- **Audience:** beginners who are curious about game development
- **Content:** a short intro, "How a Game Gets Made" (5 stages), "Beginner Projects & Game Jams" (filterable cards, including 4 real jams), and "Creators to Learn From" (link cards to YouTube channels)
- **Look:** playful and colorful with rounded cards. One header button cycles 3 themes: Playful (cream, the default), Midnight (dark) and Bubblegum (pink and lilac).

## Constraints (must follow)
- **Only three site files:** `index.html`, `style.css`, `script.js`. The only other files are docs and config (`README.md`, `AGENTS.md`, `.gitignore`).
- **No dependencies:** no packages, frameworks, build tools, CDNs, external fonts or external images. Use system fonts and emoji or CSS for decoration. Plain outbound links, such as the YouTube channel links, are fine.
- **Responsive:** must work from ~320px to 1440px+ wide with no horizontal scrolling.
- **Keyboard accessible:** everything usable with Tab, Enter and Space, with a visible `:focus-visible` ring and a skip link.
- **Semantic HTML:** `header`, `main`, labelled `section`s, `footer`, one `h1`, and lists for groups of cards.
- **Progressive enhancement:** without JavaScript, all content stays visible.
- **Stay local:** keep all work inside this project folder. Serve only on `localhost` (`127.0.0.1`).
- **Don't, unless the user asks:** install anything, create accounts, deploy, commit, push, or start a server on the user's behalf.

## Files
- `index.html`: structure and content. Step cards go in an `<ol>`, project and jam cards in a `<ul>` with `data-tags`, and creator cards in a `<ul class="creator-list">`.
- `style.css`: all colors are tokens. `:root` holds the Playful theme, and `:root[data-theme="midnight"]` and `:root[data-theme="bubblegum"]` override them. Never hard-code a color in a component rule; add a token to all 3 theme blocks instead. Also holds the mobile-first grid, focus styles and `prefers-reduced-motion` support.
- `script.js`: the theme switcher and the project filter.
  - The theme switcher cycles a `themes` array, sets `data-theme` on `<html>`, and saves the choice in `localStorage` inside `try/catch`.
  - The filter toggles each card's `hidden` attribute, sets `aria-pressed` on the buttons, and updates an `aria-live` status line.

## Adding a project card
Copy an existing `<li class="card project-card">` in `index.html`. Set `data-tags` to one or more of `2d 3d text jam`, separated by spaces, and add a matching `<li class="tag tag-…">` badge for each tag.

## Adding a creator
Copy an existing `<li>` in the `creator-list`. Update the link's `href` (the YouTube channel URL), the initials in the `avatar` span, the `<h3>` name and the description. Keep `target="_blank" rel="noopener noreferrer"` and the visually hidden "(opens in a new tab)" text. Avatar colors cycle through `avatar-1` to `avatar-5`.

## Checking changes
- JS syntax: `node --check script.js`
- Run locally: see `README.md`. Then check the page at 320px, 768px and 1440px widths, keyboard-only, and in all 3 themes.
- Text contrast must meet WCAG AA (4.5:1) in every theme.
