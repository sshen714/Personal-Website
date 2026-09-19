// Shared header and footer, injected into every page so they live in one place.
window.Site = window.Site || {};

Site.layout = {
  // Add pages here as they are built.
  // (and add the matching 'nav.*' key to each file in locales/).
  nav: [
    { page: 'projects', href: 'index.html#projects', key: 'nav.projects' }
  ],

  render: function () {
    var active = document.body.getAttribute('data-page');

    var header = document.getElementById('site-header');
    if (header) {
      var outer = document.createElement('div');
      outer.className = 'site-header-bar';
      var bar = document.createElement('header');
      bar.className = 'site-header';

      var brand = document.createElement('a');
      brand.className = 'brand';
      brand.href = 'index.html';
      brand.textContent = 'wei';

      var nav = document.createElement('nav');
      nav.className = 'site-nav';
      this.nav.forEach(function (item) {
        var a = document.createElement('a');
        a.href = item.href;
        a.setAttribute('data-i18n', item.key);
        if (item.page === active) a.className = 'active';
        nav.appendChild(a);
      });

      var btn = document.createElement('button');
      btn.className = 'btn btn-lang';
      btn.type = 'button';
      btn.textContent = 'EN / 中';
      btn.addEventListener('click', Site.i18n.toggle);

      bar.appendChild(brand);
      bar.appendChild(nav);
      bar.appendChild(btn);
      outer.appendChild(bar);
      header.appendChild(outer);
    }

    var footer = document.getElementById('site-footer');
    if (footer) {
      var f = document.createElement('footer');
      f.className = 'site-footer';
      f.setAttribute('data-i18n', 'footer.copy');
      footer.appendChild(f);
    }
  }
};
