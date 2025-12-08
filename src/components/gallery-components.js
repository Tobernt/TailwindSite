function initToggle() {
  const toggle = document.querySelector('[data-toggle]');
  if (!toggle) return;

  const knob = toggle.querySelector('[data-toggle-knob]');
  const label = toggle.querySelector('[data-toggle-label]');

  const updateState = (isOn) => {
    toggle.setAttribute('aria-pressed', String(isOn));
    toggle.classList.toggle('bg-emerald-500/20', isOn);
    toggle.classList.toggle('border-emerald-300', isOn);
    knob?.classList.toggle('translate-x-9', isOn);
    knob?.classList.toggle('bg-emerald-300', isOn);
    knob?.classList.toggle('text-neutral-900', isOn);
    if (knob) {
      knob.textContent = isOn ? 'På' : 'Av';
    }
    if (label) {
      label.textContent = isOn ? 'Aktiverad' : 'Av';
    }
  };

  toggle.addEventListener('click', () => {
    const isOn = toggle.getAttribute('aria-pressed') === 'true';
    updateState(!isOn);
  });
}

function initSlider() {
  const slider = document.querySelector('[data-slider]');
  const output = document.querySelector('[data-slider-value]');
  if (!slider || !output) return;

  const sync = () => {
    const value = slider.value;
    output.textContent = `${value}%`;
    slider.setAttribute('aria-valuetext', `${value} procent`);
  };

  slider.addEventListener('input', sync);
  sync();
}

function initAccordion() {
  const button = document.querySelector('[data-accordion-button]');
  const panel = document.querySelector('[data-accordion-panel]');
  if (!button || !panel) return;

  const toggleAccordion = () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const next = !expanded;
    button.setAttribute('aria-expanded', String(next));
    panel.classList.toggle('grid-rows-[0fr]', !next);
    panel.classList.toggle('grid-rows-[1fr]', next);
    panel.setAttribute('aria-hidden', String(!next));
  };

  button.addEventListener('click', toggleAccordion);
}

function initGradient() {
  const toggle = document.querySelector('[data-gradient-toggle]');
  const card = document.querySelector('[data-gradient-card]');
  if (!toggle || !card) return;

  const gradientClasses = [
    'bg-gradient-to-r',
    'from-emerald-500/15',
    'via-blue-500/15',
    'to-purple-500/15',
    'border-emerald-400/60',
    'shadow-glow-blue',
    'animate-shimmer',
  ];

  const updateState = (isActive) => {
    toggle.setAttribute('aria-pressed', String(isActive));
    toggle.textContent = isActive ? 'Stäng gradient' : 'Aktivera gradient';
    card.classList.toggle('bg-neutral-900/70', !isActive);
    gradientClasses.forEach((cls) => card.classList.toggle(cls, isActive));
  };

  toggle.addEventListener('click', () => {
    const active = toggle.getAttribute('aria-pressed') === 'true';
    updateState(!active);
  });

  updateState(false);
}

function initModal() {
  const openBtn = document.querySelector('[data-open-modal]');
  const closeBtn = document.querySelector('[data-close-modal]');
  const overlay = document.querySelector('[data-modal-overlay]');
  const dialog = document.querySelector('[data-modal-dialog]');
  if (!openBtn || !closeBtn || !overlay || !dialog) return;

  let lastFocused = null;

  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'textarea',
    'input',
    'select'
  ];

  const getFocusable = () =>
    Array.from(dialog.querySelectorAll(focusableSelectors.join(',')));

  const trapFocus = (event) => {
    if (event.key !== 'Tab') return;
    const focusable = getFocusable();
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const closeModal = () => {
    overlay.classList.add('hidden');
    dialog.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', handleKeydown);
    lastFocused?.focus();
  };

  const handleKeydown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    } else {
      trapFocus(event);
    }
  };

  const openModal = () => {
    lastFocused = document.activeElement;
    overlay.classList.remove('hidden');
    dialog.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
    document.addEventListener('keydown', handleKeydown);
  };

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeModal();
  });
}

function initTabs() {
  const tabList = document.querySelector('[data-tab-list]');
  if (!tabList) return;

  const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));
  const panels = Array.from(document.querySelectorAll('[data-tab-panel]'));

  const setActive = (id) => {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.tab === id;
      tab.setAttribute('aria-selected', String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
      tab.classList.toggle('bg-neutral-800/70', isActive);
      tab.classList.toggle('border-emerald-400/60', isActive);
    });

    panels.forEach((panel) => {
      const shouldShow = panel.id === `tab-${id}`;
      panel.classList.toggle('hidden', !shouldShow);
      panel.setAttribute('aria-hidden', String(!shouldShow));
    });
  };

  tabList.addEventListener('click', (event) => {
    const target = event.target.closest('[role="tab"]');
    if (!target) return;
    setActive(target.dataset.tab);
  });

  tabList.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const currentIndex = tabs.indexOf(document.activeElement);
    if (currentIndex === -1) return;

    if (event.key === 'Home') {
      tabs[0].focus();
      setActive(tabs[0].dataset.tab);
      return;
    }

    if (event.key === 'End') {
      const last = tabs[tabs.length - 1];
      last.focus();
      setActive(last.dataset.tab);
      return;
    }

    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (currentIndex + direction + tabs.length) % tabs.length;
    tabs[nextIndex].focus();
    setActive(tabs[nextIndex].dataset.tab);
  });

  setActive('one');
}

function validateField(field) {
  const isValid = field.checkValidity();
  field.classList.toggle('border-red-500', !isValid);
  field.classList.toggle('border-neutral-700', isValid);
  return isValid;
}

function initDemoForm() {
  const form = document.querySelector('[data-demo-form]');
  const feedback = form?.querySelector('[data-form-feedback]');
  if (!form || !feedback) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = Array.from(form.querySelectorAll('input, select'));
    const allValid = fields.every((field) => validateField(field));

    if (!allValid) {
      feedback.textContent = 'Kontrollera e-post och roll innan du fortsätter.';
      feedback.classList.add('text-amber-300');
      feedback.classList.remove('text-emerald-200');
      fields.find((f) => !f.checkValidity())?.focus();
      return;
    }

    feedback.textContent = 'Allt ser bra ut! Formuläret är redo att skickas.';
    feedback.classList.add('text-emerald-200');
    feedback.classList.remove('text-amber-300');
  });
}

function initCopyCode() {
  const copyButtons = document.querySelectorAll('[data-copy-code]');
  if (!copyButtons.length) return;

  copyButtons.forEach((button) => {
    const targetId = button.dataset.codeTarget;
    const status = document.querySelector('[data-copy-status]');
    const target = document.getElementById(targetId);
    if (!target || !status) return;

    button.addEventListener('click', async () => {
      const text = target.textContent || '';
      if (!text.trim()) return;

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        status.textContent = 'Kopierat till urklipp.';
      } else {
        status.textContent = 'Kopiering stöds inte i denna miljö.';
      }
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.querySelector('[data-form-status]');
  if (!form || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = Array.from(form.querySelectorAll('input, textarea'));
    const allValid = fields.every((field) => validateField(field));

    if (!allValid) {
      status.textContent = 'Fyll i alla fält för att skicka.';
      status.classList.add('text-amber-300');
      status.classList.remove('text-emerald-200');
      fields.find((f) => !f.checkValidity())?.focus();
      return;
    }

    status.textContent = 'Tack! Jag återkommer inom 24h med ett förslag.';
    status.classList.add('text-emerald-200');
    status.classList.remove('text-amber-300');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initToggle();
  initSlider();
  initAccordion();
  initGradient();
  initModal();
  initTabs();
  initDemoForm();
  initCopyCode();
  initContactForm();
});
