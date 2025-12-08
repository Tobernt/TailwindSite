function createHeader(currentPage = 'home') {
  const navItems = [
    { href: 'index.html', label: 'Hem', key: 'home' },
    { href: '#about', label: 'Om mig', key: 'about', anchor: true },
    { href: '#experience', label: 'Erfarenhet', key: 'experience', anchor: true },
    { href: 'gallery.html', label: 'UI-galleri', key: 'gallery' },
    { href: '#contact', label: 'Kontakt', key: 'contact', anchor: true }
  ];

  const header = document.createElement('header');
  header.className = 'bg-neutral-950 text-neutral-100 border-b border-neutral-800 backdrop-blur sticky top-0 z-20';

  const nav = document.createElement('nav');
  nav.className = 'max-w-6xl mx-auto px-6 py-4 flex items-center justify-between';

  const brand = document.createElement('a');
  brand.href = 'index.html';
  brand.className = 'text-lg font-semibold tracking-tight text-neutral-50 hover:text-emerald-300 transition-colors';
  brand.textContent = 'Tailwind Portfolio';

  const menu = document.createElement('ul');
  menu.className = 'flex items-center gap-6 text-sm';

  navItems.forEach((item) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    const isSamePageAnchor = item.anchor && currentPage === 'home';
    link.href = isSamePageAnchor ? item.href : `${item.href.replace('#', 'index.html#')}`;
    link.className = `text-neutral-300 hover:text-emerald-300 transition-colors ${currentPage === item.key ? 'text-emerald-300 font-semibold' : ''}`;
    link.textContent = item.label;
    li.appendChild(link);
    menu.appendChild(li);
  });

  nav.appendChild(brand);
  nav.appendChild(menu);
  header.appendChild(nav);
  return header;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'bg-neutral-950 text-neutral-300 border-t border-neutral-800';

  footer.innerHTML = `
    <div class="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="text-sm font-semibold text-neutral-100">Tailwind Portfolio</p>
        <p class="text-sm text-neutral-400">Byggd med fokus på tydlighet, responsivitet och tillgänglighet.</p>
      </div>
      <div class="flex items-center gap-4 text-sm">
        <a class="hover:text-emerald-300 transition-colors" href="mailto:contact@example.com">contact@example.com</a>
        <span class="text-neutral-700">|</span>
        <a class="hover:text-emerald-300 transition-colors" href="https://www.linkedin.com" aria-label="LinkedIn">LinkedIn</a>
        <a class="hover:text-emerald-300 transition-colors" href="https://github.com" aria-label="GitHub">GitHub</a>
      </div>
    </div>
  `;
  return footer;
}

function injectLayout() {
  const page = document.body.dataset.page || 'home';
  const headerHost = document.querySelector('[data-site-header]');
  const footerHost = document.querySelector('[data-site-footer]');

  if (headerHost) {
    headerHost.appendChild(createHeader(page));
  }
  if (footerHost) {
    footerHost.appendChild(createFooter());
  }
}

document.addEventListener('DOMContentLoaded', injectLayout);
