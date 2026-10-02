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
    { key: 'story', href: 'our-story.html', label: 'Our story' },
    { key: 'academy', href: 'academy.html', label: 'Academy' },
    { key: 'take', href: 'take-action.html', label: 'Take action' },
    { key: 'media', href: 'media.html', label: 'In the media' },
    { key: 'updates', href: 'updates.html', label: 'Updates' },
    { key: 'team', href: 'team.html', label: 'Team' },
    { key: 'contact', href: 'contact.html', label: 'Contact' },
  ];
  // Donate is not in this list on purpose: the "Support us" button in the header already
  // goes to donate.html, and the footer links it too.

  function headerHTML(activeKey) {
    var links = NAV_ITEMS.map(function (item) {
      var cls = 'nav-link' + (item.key === activeKey ? ' active' : '');
      return '<a class="' + cls + '" href="' + item.href + '">' + item.label + '</a>';
    }).join('\n          ');

    return (
      '<div class="message-bar">Against dictatorship · For sustainable democracy through education</div>\n\n' +
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
      '          <p>A student-led movement against dictatorship and for sustainable democracy in Myanmar, through education, advocacy and peaceful action.</p>\n' +
      '        </div>\n' +
      '        <div>\n' +
      '          <h4>Explore</h4>\n' +
      '          <div class="footer-links">\n' +
      '            <a href="index.html#why">Why we exist</a>\n' +
      '            <a href="index.html#stand">Our stand</a>\n' +
      '            <a href="our-story.html">Our story</a>\n' +
      '            <a href="academy.html">Academy</a>\n' +
      '            <a href="take-action.html">Take action</a>\n' +
      '            <a href="media.html">In the media</a>\n' +
      '            <a href="updates.html">Updates</a>\n' +
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
      '            <a href="https://www.instagram.com/worldwideburmesestudents/" target="_blank" rel="noopener">Instagram</a>\n' +
      '            <a href="https://www.facebook.com/worldwideburmesestudents" target="_blank" rel="noopener">Facebook</a>\n' +
      '            <a href="https://discord.gg/jc8YbtjE" target="_blank" rel="noopener">Discord</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="bottom-bar">\n' +
      '        <div class="container">\n' +
      '          <span>© ' + new Date().getFullYear() + ' Worldwide Burmese Students · KvK 84002298 · EU Transparency Register 429191247367-40</span>\n' +
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
