# Level Up: Making Your First Game

A one-page website that introduces game development to beginners. It covers the five stages of making a game, a filterable list of beginner projects and well-known game jams, and a list of YouTube creators to learn from. A theme button switches between three color themes.

It's built with plain HTML, CSS and JavaScript. It has no dependencies and no build step.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and all the text content |
| `style.css` | The three color themes, layout, responsive grid, focus styles |
| `script.js` | The theme switcher and the project filter |
| `AGENTS.md` | Project constraints and plan for coding agents |

## Run it locally

You need Python 3, which is already installed on most Linux and WSL systems. Check it with `python3 --version`.

1. Open a terminal in the project folder:

   ```bash
   cd ~/ds219-website
   ```

2. Start a local web server that only accepts connections from this computer:

   ```bash
   python3 -m http.server 8000 --bind 127.0.0.1
   ```

3. Open <http://localhost:8000> in your browser.
   On WSL, a Windows browser can open this address too.

4. To stop the server, press `Ctrl+C` in the terminal.

If port 8000 is busy, use another port number, such as `8080`, in both step 2 and step 3.

Another option is to open `index.html` directly in a browser by double-clicking it, since the page doesn't load anything over the network. The only outside links are the creator cards, which open YouTube when clicked.

## Interaction 1: theme switch

The **🎨 Theme** button in the header cycles through three themes on each click: **Playful → Midnight → Bubblegum → Playful**.

- Every color in `style.css` is a CSS variable (a "design token") on `:root`. Each theme is a block such as `:root[data-theme="midnight"]` that swaps those values.
- When you click the button, `script.js` moves to the next theme in its `themes` list and sets `data-theme` on the `<html>` element. The button label updates to show the current theme.
- Your choice is saved in the browser's `localStorage`, so it's still there after a reload. If storage is blocked, the switch still works but resets on reload.
- A hidden status line announces "Theme changed to Midnight" to screen-reader users.
- If JavaScript is off, the button stays hidden and the Playful theme is shown.

## Interaction 2: project filter

The "Beginner Projects & Game Jams" section has filter buttons labeled **All, 2D, 3D, Text and Jam**.

- Each project card lists its types in a `data-tags` attribute, for example `data-tags="2d"`. The four game jam cards are tagged `jam`.
- When you click a button, `script.js` hides every card whose tags don't include that type. Pressing Enter or Space on a focused button does the same thing. **All** shows every card again.
- The active button gets `aria-pressed="true"`. That's what highlights it, and it tells screen readers which filter is on.
- A hidden status line (`aria-live="polite"`) announces the result, such as "Showing 4 of 11 items", to screen-reader users.
- If JavaScript is off, the buttons stay hidden and all cards are shown, so no content is lost.

## Creators section

"Creators to Learn From" is a top-down list of wide cards. Each whole card is one link to the creator's YouTube channel, so it's a single Tab stop and opens with Enter. Links open in a new tab, and screen readers hear "(opens in a new tab)". The profile icons are initials in colored circles drawn with CSS, because the project doesn't use external images.
