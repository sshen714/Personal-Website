// Language handling: picks a language, translates [data-i18n] elements.
window.Site = window.Site || {};

Site.i18n = (function () {
  var DEFAULT = 'en';
  var current = DEFAULT;

  function detect() {
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    if (saved && Site.locales[saved]) return saved;
    return navigator.language.toLowerCase().indexOf('zh') === 0 ? 'zh-Hant' : DEFAULT;
  }

  function t(key) {
    var dict = Site.locales[current] || {};
    var text = dict[key];
    if (text === undefined) return key;
    return text.replace('{year}', new Date().getFullYear());
  }

  // Pick the current language from a {lang: text} object (used by data files).
  function pick(obj) {
    return obj[current] || obj[DEFAULT] || '';
  }

  function apply() {
    document.documentElement.lang = current;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-obj]').forEach(function (el) {
      el.textContent = pick(JSON.parse(el.getAttribute('data-i18n-obj')));
    });
  }

  function toggle() {
    current = current === 'en' ? 'zh-Hant' : 'en';
    try { localStorage.setItem('lang', current); } catch (e) {}
    apply();
  }

  function init() {
    current = detect();
    apply();
  }

  return { init: init, apply: apply, toggle: toggle, t: t, pick: pick };
})();
