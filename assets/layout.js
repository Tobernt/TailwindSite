import { applyLanguage, getCurrentLanguage, translate } from './i18n.js';

const NAV_ITEMS = [
  { href: 'index.html', label: 'Home', key: 'home', i18n: 'nav.home' },
  { href: '#about', label: 'About', key: 'about', anchor: true, i18n: 'nav.about' },
  { href: '#experience', label: 'Experience', key: 'experience', anchor: true, i18n: 'nav.experience' },
  { href: 'gallery.html', label: 'UI Gallery', key: 'gallery', i18n: 'nav.gallery' },
  { href: '/react-demo/index.html', label: 'React Demo', key: 'react-demo' },
  { href: '#contact', label: 'Contact', key: 'contact', anchor: true, i18n: 'nav.contact' },
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
  link.dataset.i18n = item.i18n;
  link.className = [
    'inline-flex items-center rounded-full border border-transparent px-3 py-2 text-sm font-medium',
    'text-neutral-300 transition-colors hover:text-white hover:bg-neutral-800/80',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400',
  ].join(' ');

  link.textContent = item.label;
  li.appendChild(link);
  return li;
}

function updateMenuToggleLabels(toggle, isOpen = false) {
  if (!toggle) return;

  const stateKey = isOpen ? 'nav.menu.close' : 'nav.menu.open';
  const label = translate(stateKey) ?? (isOpen ? 'Close navigation menu' : 'Open navigation menu');
  const visibleLabel = toggle.querySelector('[data-menu-visible-label]');
  const openIcon = toggle.querySelector('[data-menu-icon-open]');
  const closeIcon = toggle.querySelector('[data-menu-icon-close]');

  toggle.setAttribute('aria-label', label);
  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

  if (visibleLabel) {
    visibleLabel.textContent = translate('nav.menu.button') ?? label;
  }
  if (openIcon) openIcon.classList.toggle('hidden', isOpen);
  if (closeIcon) closeIcon.classList.toggle('hidden', !isOpen);
}

function setupMenuToggle(header) {
  const toggle = header.querySelector('[data-menu-toggle]');
  const panel = header.querySelector('[data-menu-panel]');
  if (!toggle || !panel) return;

  const applyPanelState = (isOpen) => {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    if (isDesktop) {
      panel.classList.remove('hidden', 'opacity-0');
      panel.classList.add('opacity-100');
      updateMenuToggleLabels(toggle, false);
      return;
    }

    panel.classList.toggle('hidden', !isOpen);
    panel.classList.toggle('opacity-100', isOpen);
    panel.classList.toggle('opacity-0', !isOpen);
    updateMenuToggleLabels(toggle, isOpen);
  };

  applyPanelState(false);

  toggle.addEventListener('click', () => {
    const isOpen = !panel.classList.contains('hidden');
    applyPanelState(!isOpen);
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.matchMedia('(min-width: 1024px)').matches) return;
      applyPanelState(false);
    });
  });

  document.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
      applyPanelState(false);
    }
  });

  const desktopQuery = window.matchMedia('(min-width: 1024px)');
  desktopQuery.addEventListener('change', (event) => {
    if (event.matches) applyPanelState(false);
  });

  document.addEventListener('i18n:languagechange', () => {
    const isOpen = !panel.classList.contains('hidden');
    updateMenuToggleLabels(toggle, isOpen);
  });
}

function createHeader(currentPage = 'home') {
  const header = document.createElement('header');
  header.className = 'bg-neutral-950 text-neutral-100 border-b border-neutral-800 backdrop-blur sticky top-0 z-20';

  const nav = document.createElement('nav');
  nav.className = 'relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4';

  const brand = document.createElement('a');
  brand.href = 'index.html';
  brand.className = [
    'text-lg font-semibold tracking-tight text-neutral-50',
    'hover:text-emerald-300 transition-colors rounded-full focus-visible:outline-none',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400',
  ].join(' ');
  brand.textContent = 'Tobias Berntsson Portfolio';

  const menuToggle = document.createElement('button');
  menuToggle.type = 'button';
  menuToggle.dataset.menuToggle = 'true';
  menuToggle.className = [
    'inline-flex items-center gap-2 rounded-full border border-neutral-800 px-3 py-2 text-sm font-medium text-neutral-100',
    'bg-neutral-900/80 transition hover:border-emerald-400/60 hover:text-white hover:shadow-glow-emerald',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400',
    'lg:hidden',
  ].join(' ');
  menuToggle.innerHTML = `
    <span class="flex items-center gap-2">
      <span data-menu-icon-open class="flex flex-col gap-1" aria-hidden="true">
        <span class="h-0.5 w-5 rounded-full bg-current"></span>
        <span class="h-0.5 w-5 rounded-full bg-current"></span>
        <span class="h-0.5 w-5 rounded-full bg-current"></span>
      </span>
      <span data-menu-icon-close class="hidden text-lg leading-none" aria-hidden="true">&times;</span>
      <span data-menu-visible-label class="text-sm font-semibold">Menu</span>
    </span>
  `;

  const menuPanel = document.createElement('div');
  menuPanel.dataset.menuPanel = 'true';
  menuPanel.className = [
    'hidden absolute left-4 right-4 top-[calc(100%+0.75rem)] z-10 flex-col gap-3 rounded-2xl border border-neutral-800',
    'bg-neutral-900/95 p-4 shadow-2xl backdrop-blur transition-opacity duration-200',
    'lg:static lg:flex lg:flex-1 lg:flex-row lg:items-center lg:justify-end lg:gap-3 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none',
  ].join(' ');

  const menu = document.createElement('ul');
  menu.className = 'flex flex-col gap-2 text-sm lg:flex-row lg:items-center lg:gap-2';

  NAV_ITEMS.forEach((item) => {
    const navItem = buildNavLink(item, currentPage);
    menu.appendChild(navItem);
  });

  const langToggle = document.createElement('button');
  langToggle.type = 'button';
  langToggle.dataset.langToggle = 'true';
  langToggle.className = [
    'w-full rounded-full border border-neutral-700 px-3 py-2 text-sm font-medium text-neutral-200',
    'bg-neutral-900/80 transition hover:border-emerald-400/60 hover:text-white hover:shadow-glow-emerald',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400',
    'lg:w-auto',
  ].join(' ');
  langToggle.setAttribute('aria-pressed', getCurrentLanguage() === 'sv' ? 'true' : 'false');
  langToggle.textContent = translate('lang.toggle') ?? 'Svenska';

  menuPanel.appendChild(menu);
  menuPanel.appendChild(langToggle);

  nav.appendChild(brand);
  nav.appendChild(menuPanel);
  nav.appendChild(menuToggle);
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
        <p class="text-sm font-semibold text-neutral-100" data-i18n="footer.title">Tobias Berntsson Portfolio</p>
        <p class="text-sm text-neutral-400" data-i18n="footer.subtitle">Tailwind portfolio built with clarity, responsiveness, and accessibility in mind.</p>
      </div>
      <div class="flex items-center gap-4 text-sm">
        <a class="hover:text-emerald-300 transition-colors rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400" href="mailto:tobias_berntsson@hotmail.com">tobias_berntsson@hotmail.com</a>
        <span class="text-neutral-700">|</span>
        <a class="hover:text-emerald-300 transition-colors rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400" href="https://www.linkedin.com/in/tobias-berntsson/" aria-label="LinkedIn">LinkedIn</a>
        <a class="hover:text-emerald-300 transition-colors rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400" href="https://github.com/Tobernt/" aria-label="GitHub">GitHub</a>
      </div>
    </div>
  `;
  return footer;
}

function createBackToTopButton() {
  const button = document.createElement('button');
  button.type = 'button';
  button.setAttribute('aria-label', 'Back to top');
  button.className = [
    'fixed bottom-6 right-6 z-30 hidden rounded-full border border-emerald-400/60 bg-emerald-500 text-neutral-950',
    'px-3 py-2 text-sm font-semibold shadow-lg shadow-emerald-500/40 transition hover:-translate-y-0.5 hover:bg-emerald-400',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300',
  ].join(' ');

  button.innerHTML = '<span aria-hidden="true">↑</span><span class="sr-only">Back to top</span>';

  const toggleVisibility = () => {
    const shouldShow = window.scrollY > 240;
    button.classList.toggle('hidden', !shouldShow);
  };

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();

  return button;
}

function injectLayout() {
  const page = document.body.dataset.page || 'home';
  const headerHost = document.querySelector('[data-site-header]');
  const footerHost = document.querySelector('[data-site-footer]');

  if (headerHost) {
    const header = createHeader(page);
    headerHost.appendChild(header);
    setupMenuToggle(header);
    setupNavigationState(header, page);
    applyLanguage(getCurrentLanguage());
  }
  if (footerHost) {
    footerHost.appendChild(createFooter());
  }

  document.body.appendChild(createBackToTopButton());
}

document.addEventListener('DOMContentLoaded', injectLayout);
