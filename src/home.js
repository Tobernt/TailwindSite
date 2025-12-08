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

function initPage() {
  initLocalClock();
}

document.addEventListener('DOMContentLoaded', initPage);
