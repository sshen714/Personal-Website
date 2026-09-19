// Renders project cards.
// Built with DOM APIs and textContent (no innerHTML), so data can never inject markup.
window.Site = window.Site || {};

Site.renderProjects = function () {
  var box = document.getElementById('project-list');
  if (!box) return;

  Site.projects.forEach(function (p, index) {
    var card = document.createElement('a');
    card.className = 'card';
    if (index === 0) card.classList.add('card-featured');
    // Only allow absolute web links.
    card.href = /^https?:\/\//.test(p.url) ? p.url : '#';
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('data-lang', p.tags[0]);

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
  });
};
