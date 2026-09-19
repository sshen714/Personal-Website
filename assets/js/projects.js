// Renders project cards, language filter chips and stats.
// Built with DOM APIs and textContent (no innerHTML), so data can never inject markup.
window.Site = window.Site || {};

Site.renderProjects = function () {
  var box = document.getElementById('project-list');
  if (!box) return;

  var cards = [];

  Site.projects.forEach(function (p, index) {
    var card = document.createElement('a');
    card.className = 'card';
    if (index === 0) card.classList.add('card-featured');
    // Only allow absolute web links.
    card.href = /^https?:\/\//.test(p.url) ? p.url : '#';
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('data-lang', p.tags[0]);
    card.setAttribute('data-tags', JSON.stringify(p.tags));

    var title = document.createElement('h3');
    title.textContent = p.name;

    var meta = null;
    if (p.type) {
      meta = document.createElement('span');
      meta.className = 'project-meta';
      meta.setAttribute('data-i18n-obj', JSON.stringify(p.type));
    }

    var desc = document.createElement('p');
    desc.setAttribute('data-i18n-obj', JSON.stringify(p.desc));

    var tags = document.createElement('div');
    tags.className = 'tags';
    p.tags.forEach(function (t, i) {
      var tag = document.createElement('span');
      tag.className = 'tag';
      if (i === 0) tag.setAttribute('data-lang', t);
      tag.textContent = t;
      tags.appendChild(tag);
    });

    if (meta) card.appendChild(meta);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(tags);
    box.appendChild(card);
    cards.push(card);
  });

  // Stats
  var allTags = [];
  Site.projects.forEach(function (p) {
    p.tags.forEach(function (t) { if (allTags.indexOf(t) === -1) allTags.push(t); });
  });
  setText('project-count', Site.projects.length);
  setText('stat-projects', Site.projects.length);
  setText('stat-tech', allTags.length);

  // Filter chips (first "all", then one per tag)
  var filters = document.getElementById('project-filters');
  if (!filters) return;

  function addChip(label, value, i18nKey) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip';
    b.setAttribute('aria-pressed', value === '' ? 'true' : 'false');
    if (i18nKey) b.setAttribute('data-i18n', i18nKey); else b.textContent = label;
    b.addEventListener('click', function () {
      filters.querySelectorAll('.chip').forEach(function (c) {
        c.setAttribute('aria-pressed', c === b ? 'true' : 'false');
      });
      cards.forEach(function (card) {
        var has = value === '' || JSON.parse(card.getAttribute('data-tags')).indexOf(value) !== -1;
        card.hidden = !has;
      });
    });
    filters.appendChild(b);
  }
  addChip('', '', 'home.filter.all');
  allTags.forEach(function (t) { addChip(t, t); });

  function setText(id, v) {
    var el = document.getElementById(id);
    if (el) el.textContent = String(v);
  }
};
