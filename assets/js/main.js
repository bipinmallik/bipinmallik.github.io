'use strict';
const themeButton = document.getElementById('theme-toggle');
const preference = window.matchMedia('(prefers-color-scheme: dark)');
let explicitChoice = false;
try { explicitChoice = ['dark', 'light'].includes(localStorage.getItem('bipin-theme')); } catch (_) {}
function updateThemeLabel() {
  const dark = document.documentElement.dataset.theme === 'dark';
  const label = dark ? 'Switch to light mode' : 'Switch to dark mode';
  themeButton.setAttribute('aria-label', label);
  themeButton.title = label;
  themeButton.querySelector('.tooltip').textContent = dark ? 'Light mode' : 'Dark mode';
}
themeButton.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  explicitChoice = true;
  try { localStorage.setItem('bipin-theme', next); } catch (_) {}
  updateThemeLabel();
});
preference.addEventListener('change', event => {
  if (!explicitChoice) {
    document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
    updateThemeLabel();
  }
});
updateThemeLabel();
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.05 });
  document.documentElement.classList.add('motion');
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
