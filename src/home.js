function initLocalClock() {
  const clock = document.querySelector('[data-local-time]');
  const status = document.querySelector('[data-clock-status]');
  const refresh = document.querySelector('[data-refresh-clock]');
  if (!clock || !status) return;

  let timerId;
  let previousStyles = {
    color: clock.style.color,
  };

  const formatTime = (date) =>
    new Intl.DateTimeFormat([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    }).format(date);

  const setStatus = (message) => {
    status.textContent = message;
  };

  const updateClock = () => {
    const now = new Date();
    clock.textContent = formatTime(now);
    setStatus(`Updated at ${now.toLocaleTimeString()}`);
  };

  const start = () => {
    updateClock();
    timerId = window.setInterval(updateClock, 1000);
  };

  const refreshHandler = () => {
    clock.style.color = '#a7f3d0';
    updateClock();
    window.setTimeout(() => {
      clock.style.color = previousStyles.color;
    }, 250);
  };

  start();

  refresh?.addEventListener('click', refreshHandler);
  window.addEventListener('beforeunload', () => clearInterval(timerId));
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = form?.querySelector('[data-form-status]');
  if (!form || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const allFilled = Array.from(formData.values()).every((value) => Boolean(value));

    if (!allFilled) {
      status.textContent = 'Fill in all fields to send.';
      status.classList.add('text-amber-300');
      status.classList.remove('text-emerald-200');
      return;
    }

    status.textContent = 'Thanks! I will reply within 24h with a proposal.';
    status.classList.add('text-emerald-200');
    status.classList.remove('text-amber-300');
  });
}

function initPage() {
  initLocalClock();
  initContactForm();
}

document.addEventListener('DOMContentLoaded', initPage);
