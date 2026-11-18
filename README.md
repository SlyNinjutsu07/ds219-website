# Level Up: Making Your First Game

A one-page website that introduces game development to beginners. It covers the five stages of making a game and offers a filterable list of beginner project ideas.

It's built with plain HTML, CSS and JavaScript. It has no dependencies and no build step.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and all the text content |
| `style.css` | Colors, layout, responsive grid, focus styles |
| `script.js` | The project filter |
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

Another option is to open `index.html` directly in a browser by double-clicking it, since the page doesn't load anything over the network.

## The interaction: project filter

The "Beginner Project Ideas" section has filter buttons labeled **All, 2D, 3D, Text and Jam**.

- Each project card lists its types in a `data-tags` attribute, for example `data-tags="2d jam"`.
- When you click a button, `script.js` hides every card whose tags don't include that type. Pressing Enter or Space on a focused button does the same thing. **All** shows every card again.
- The active button gets `aria-pressed="true"`. That's what highlights it in purple, and it tells screen readers which filter is on.
- A hidden status line (`aria-live="polite"`) announces the result, such as "Showing 3 projects", to screen-reader users.
- If JavaScript is off, the buttons stay hidden and all cards are shown, so no content is lost.
