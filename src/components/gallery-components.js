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

document.addEventListener('DOMContentLoaded', () => {
  initToggle();
  initSlider();
  initAccordion();
  initModal();
});
