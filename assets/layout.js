const NAV_ITEMS = [
  { href: 'index.html', label: 'Hem', key: 'home' },
  { href: '#about', label: 'Om mig', key: 'about', anchor: true },
  { href: '#experience', label: 'Erfarenhet', key: 'experience', anchor: true },
  { href: 'gallery.html', label: 'UI-galleri', key: 'gallery' },
  { href: '#contact', label: 'Kontakt', key: 'contact', anchor: true },
];

function applyActiveState(links, activeKey) {
  links.forEach((link) => {
    const isActive = link.dataset.navKey === activeKey;
    link.classList.toggle('text-emerald-100', isActive);
    link.classList.toggle('bg-emerald-500/10', isActive);
    link.classList.toggle('border-emerald-400/50', isActive);
    link.classList.toggle('shadow-[0_0_0_1px_rgba(52,211,153,0.25)]', isActive);
    link.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
}

function enableMenuKeyboardNavigation(menu) {
  if (!menu) return;
  const focusableLinks = Array.from(menu.querySelectorAll('a'));

  menu.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();

    const currentIndex = focusableLinks.indexOf(document.activeElement);
    if (currentIndex === -1) return;

    if (event.key === 'Home') {
      focusableLinks[0].focus();
      return;
    }

    if (event.key === 'End') {
      focusableLinks[focusableLinks.length - 1].focus();
      return;
    }

    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (currentIndex + direction + focusableLinks.length) % focusableLinks.length;
    focusableLinks[nextIndex].focus();
  });
}

function buildNavLink(item, currentPage) {
  const li = document.createElement('li');
  const link = document.createElement('a');
  const isSamePageAnchor = item.anchor && currentPage === 'home';

  link.href = isSamePageAnchor ? item.href : `${item.href.replace('#', 'index.html#')}`;
  link.dataset.navKey = item.key;
  link.className = [
    'inline-flex items-center rounded-full border border-transparent px-3 py-2 text-sm font-medium',
    'text-neutral-300 transition-colors hover:text-white hover:bg-neutral-800/80',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400',
  ].join(' ');

  link.textContent = item.label;
  li.appendChild(link);
  return li;
}

function createHeader(currentPage = 'home') {
  const header = document.createElement('header');
  header.className = 'bg-neutral-950 text-neutral-100 border-b border-neutral-800 backdrop-blur sticky top-0 z-20';

  const nav = document.createElement('nav');
  nav.className = 'max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4';

  const brand = document.createElement('a');
  brand.href = 'index.html';
  brand.className = [
    'text-lg font-semibold tracking-tight text-neutral-50',
    'hover:text-emerald-300 transition-colors rounded-full',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400',
  ].join(' ');
  brand.textContent = 'Tailwind Portfolio';

  const menu = document.createElement('ul');
  menu.className = 'flex items-center gap-2 text-sm';

  NAV_ITEMS.forEach((item) => {
    const navItem = buildNavLink(item, currentPage);
    menu.appendChild(navItem);
  });

  nav.appendChild(brand);
  nav.appendChild(menu);
  header.appendChild(nav);
  return header;
}

function setupNavigationState(header, currentPage) {
  const links = header.querySelectorAll('[data-nav-key]');
  enableMenuKeyboardNavigation(header.querySelector('ul'));

  if (currentPage !== 'home') {
    applyActiveState(links, currentPage);
    return;
  }

  const anchorKeys = NAV_ITEMS.filter((item) => item.anchor);
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry?.target?.id) {
        applyActiveState(links, visibleEntry.target.id);
      }
    },
    {
      rootMargin: '-45% 0px -45% 0px',
      threshold: [0.25, 0.5, 0.75],
    },
  );

  anchorKeys.forEach((item) => {
    const section = document.getElementById(item.href.replace('#', ''));
    if (section) observer.observe(section);
  });

  applyActiveState(links, 'home');
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
        <a class="hover:text-emerald-300 transition-colors rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400" href="mailto:contact@example.com">contact@example.com</a>
        <span class="text-neutral-700">|</span>
        <a class="hover:text-emerald-300 transition-colors rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400" href="https://www.linkedin.com" aria-label="LinkedIn">LinkedIn</a>
        <a class="hover:text-emerald-300 transition-colors rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400" href="https://github.com" aria-label="GitHub">GitHub</a>
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
    const header = createHeader(page);
    headerHost.appendChild(header);
    setupNavigationState(header, page);
  }
  if (footerHost) {
    footerHost.appendChild(createFooter());
  }
}

document.addEventListener('DOMContentLoaded', injectLayout);
