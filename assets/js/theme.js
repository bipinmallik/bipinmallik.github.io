(function () {
  let saved;
  try { saved = localStorage.getItem('bipin-theme'); } catch (_) {}
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = saved === 'dark' || saved === 'light' ? saved : dark ? 'dark' : 'light';
})();
