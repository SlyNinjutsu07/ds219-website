// ---------- Theme switcher ----------
// One button cycles through three color themes. The CSS does the
// actual recoloring; this only sets data-theme on <html>.
// Without JavaScript the button stays hidden and the default theme is used.

const themes = [
  { id: 'playful', name: 'Playful' },
  { id: 'midnight', name: 'Midnight' },
  { id: 'bubblegum', name: 'Bubblegum' },
];

const themeButton = document.querySelector('#theme-toggle');
const themeName = document.querySelector('#theme-name');
const themeStatus = document.querySelector('#theme-status');

// localStorage can be blocked (e.g. private windows), so never let it break the page.
function loadSavedTheme() {
  try {
    return localStorage.getItem('theme');
  } catch {
    return null;
  }
}

function saveTheme(id) {
  try {
    localStorage.setItem('theme', id);
  } catch {
    // Saving failed; the theme still works until the page is reloaded.
  }
}

// Start from the saved theme, or the first one if nothing valid was saved.
let themeIndex = Math.max(0, themes.findIndex((theme) => theme.id === loadSavedTheme()));

function applyTheme(index) {
  const theme = themes[index];
  document.documentElement.dataset.theme = theme.id;
  themeName.textContent = theme.name;
}

themeButton.addEventListener('click', () => {
  themeIndex = (themeIndex + 1) % themes.length; // wraps back to the first theme
  applyTheme(themeIndex);
  saveTheme(themes[themeIndex].id);
  // The status line is an aria-live region, so screen readers announce the change.
  themeStatus.textContent = `Theme changed to ${themes[themeIndex].name}`;
});

applyTheme(themeIndex);
themeButton.hidden = false;

// ---------- Project filter ----------
// Shows only the project cards that match the chosen type.
// Without JavaScript the filter buttons stay hidden and every card is shown.

const filterGroup = document.querySelector('.filters');
const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');
const status = document.querySelector('#filter-status');

function applyFilter(filter) {
  let shown = 0;

  cards.forEach((card) => {
    const tags = card.dataset.tags.split(' ');
    const matches = filter === 'all' || tags.includes(filter);
    card.hidden = !matches;
    if (matches) shown += 1;
  });

  // Mark which button is active, for both styling and screen readers.
  buttons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
  });

  // The status line is an aria-live region, so screen readers announce this.
  status.textContent = `Showing ${shown} of ${cards.length} items`;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => applyFilter(button.dataset.filter));
});

// JavaScript is running, so the filter can be used: reveal it.
filterGroup.hidden = false;
