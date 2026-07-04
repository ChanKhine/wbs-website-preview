// Single source of truth for the site header and footer, shared across every page.
// Usage:
//   <div id="site-header"></div>
//   <script>WBSPartials.mountHeader('academy');</script>
//   ...
//   <div id="site-footer"></div>
//   <script>WBSPartials.mountFooter();</script>
//
// Mounting happens synchronously and inline (not on DOMContentLoaded) so the
// header/nav markup exists in the DOM before script.js runs and binds the
// mobile menu toggle.

(function () {
  var NAV_ITEMS = [
    { key: 'home', href: 'index.html', label: 'Home' },
    { key: 'academy', href: 'academy.html', label: 'Academy' },
    { key: 'team', href: 'team.html', label: 'Team' },
    { key: 'donate', href: 'donate.html', label: 'Donate' },
    { key: 'contact', href: 'contact.html', label: 'Contact' },
  ];

  function headerHTML(activeKey) {
    var links = NAV_ITEMS.map(function (item) {
      var cls = 'nav-link' + (item.key === activeKey ? ' active' : '');
      return '<a class="' + cls + '" href="' + item.href + '">' + item.label + '</a>';
    }).join('\n          ');

    return (
      '<div class="message-bar">By young people, for young people</div>\n\n' +
      '    <header class="site-header">\n' +
      '      <div class="container">\n' +
      '        <a class="brand" href="index.html">\n' +
      '          <img src="Logo/WSB_NEW_LOGO.png" alt="WBS" class="brand-logo" />\n' +
      '          <span class="brand-text">\n' +
      '            <span class="brand-name">WBS</span>\n' +
      '            <span class="brand-subtitle">Worldwide Burmese Students</span>\n' +
      '          </span>\n' +
      '        </a>\n' +
      '        <button class="menu-toggle" aria-label="Toggle menu">☰</button>\n' +
      '        <nav class="nav-links" aria-label="Primary navigation">\n' +
      '          ' + links + '\n' +
      '        </nav>\n' +
      '        <a class="pill-button support-cta" href="donate.html">Support us</a>\n' +
      '      </div>\n' +
      '    </header>'
    );
  }

  function footerHTML() {
    return (
      '<footer class="footer">\n' +
      '      <div class="container footer-grid">\n' +
      '        <div>\n' +
      '          <div class="brand" style="margin-bottom: 16px; color: var(--paper);">\n' +
      '            <img src="Logo/WSB_NEW_LOGO.png" alt="WBS" class="brand-logo" />\n' +
      '            <span class="brand-text">\n' +
      '              <span class="brand-name" style="color: var(--paper);">WBS</span>\n' +
      '              <span class="brand-subtitle" style="color: var(--text-on-navy);">Worldwide Burmese Students</span>\n' +
      '            </span>\n' +
      '          </div>\n' +
      '          <p>By young people, for young people. A community of young people standing with Myanmar, learning, organizing and speaking up together.</p>\n' +
      '        </div>\n' +
      '        <div>\n' +
      '          <h4>Explore</h4>\n' +
      '          <div class="footer-links">\n' +
      '            <a href="index.html#mission">Our mission</a>\n' +
      '            <a href="academy.html">Academy</a>\n' +
      '            <a href="team.html">Team</a>\n' +
      '            <a href="donate.html">Donate</a>\n' +
      '            <a href="contact.html">Contact</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div>\n' +
      '          <h4>Contact</h4>\n' +
      '          <div class="footer-links">\n' +
      '            <a href="mailto:contact@worldwideburmesestudents.org" style="font-weight: 700; color: var(--paper);">contact@worldwideburmesestudents.org</a>\n' +
      '            <span style="display: block; font-weight: 700; color: var(--paper); font-size: 14px; margin-top: 8px;">Amsterdam</span>\n' +
      '            <span style="font-size: 13px;">Raamgracht 8, 1011 KK Amsterdam</span>\n' +
      '            <span style="display: block; font-weight: 700; color: var(--paper); font-size: 14px; margin-top: 8px;">The Hague</span>\n' +
      '            <span style="font-size: 13px;">Saturnusstraat 95, 2516 AG The Hague</span>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div>\n' +
      '          <h4>Follow</h4>\n' +
      '          <div class="footer-links">\n' +
      '            <a href="#">Instagram</a>\n' +
      '            <a href="#">Facebook</a>\n' +
      '            <a href="#">YouTube</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="bottom-bar">\n' +
      '        <div class="container">\n' +
      '          <span>© 2023 Worldwide Burmese Students · KvK 84002298 · EU Transparency Register 429191247367-40</span>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </footer>'
    );
  }

  window.WBSPartials = {
    mountHeader: function (activeKey) {
      var mount = document.getElementById('site-header');
      if (mount) mount.outerHTML = headerHTML(activeKey);
    },
    mountFooter: function () {
      var mount = document.getElementById('site-footer');
      if (mount) mount.outerHTML = footerHTML();
    },
  };
})();
