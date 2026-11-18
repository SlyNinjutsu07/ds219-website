// Project filter: shows only the project cards that match the chosen type.
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
  status.textContent = `Showing ${shown} ${shown === 1 ? 'project' : 'projects'}`;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => applyFilter(button.dataset.filter));
});

// JavaScript is running, so the filter can be used: reveal it.
filterGroup.hidden = false;
