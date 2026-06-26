(function() {
  var storageKey = 'site-theme';
  var root = document.documentElement;
  var mediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function storedTheme() {
    try {
      var value = localStorage.getItem(storageKey);
      return value === 'dark' || value === 'light' ? value : null;
    } catch (error) {
      return null;
    }
  }

  function systemTheme() {
    return mediaQuery && mediaQuery.matches ? 'dark' : 'light';
  }

  function activeTheme() {
    return storedTheme() || systemTheme();
  }

  function clearStoredTheme() {
    try {
      localStorage.removeItem(storageKey);
    } catch (error) {}
  }

  function setStoredTheme(theme) {
    try {
      if (theme === systemTheme()) {
        localStorage.removeItem(storageKey);
      } else {
        localStorage.setItem(storageKey, theme);
      }
    } catch (error) {}
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
  }

  function updateToggle() {
    var theme = activeTheme();
    var toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    toggle.setAttribute('data-active-theme', theme);
    toggle.setAttribute('aria-pressed', storedTheme() ? 'true' : 'false');
    toggle.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function syncTheme() {
    applyTheme(activeTheme());
    updateToggle();
  }

  document.addEventListener('DOMContentLoaded', function() {
    if (storedTheme() === systemTheme()) {
      clearStoredTheme();
    }

    syncTheme();

    var toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function() {
      var nextTheme = activeTheme() === 'dark' ? 'light' : 'dark';
      setStoredTheme(nextTheme);
      syncTheme();
    });
  });

  if (mediaQuery && mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', function() {
      if (!storedTheme()) syncTheme();
    });
  }
})();
