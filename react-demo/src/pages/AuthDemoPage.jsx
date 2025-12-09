import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

function TokenBadge({ token }) {
  if (!token) return null;

  const preview = `${token.slice(0, 12)}…${token.slice(-6)}`;

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-100">
      <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
      {preview}
    </span>
  );
}

TokenBadge.propTypes = {
  token: PropTypes.string,
};

export default function AuthDemoPage() {
  const [token, setToken] = useState('');
  const [status, setStatus] = useState('loggedOut');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('mockJwt');
    if (stored) {
      setToken(stored);
      setStatus('authenticated');
      setMessage('Loaded session from localStorage.');
    }
  }, []);

  const handleLogin = () => {
    setStatus('redirecting');
    setMessage('Sending you to Google...');

    setTimeout(() => {
      setStatus('exchanging');
      setMessage('Back from Google! Exchanging code for token...');

      setTimeout(() => {
        const newToken = `mock-jwt-${crypto.randomUUID()}`;
        localStorage.setItem('mockJwt', newToken);
        setToken(newToken);
        setStatus('authenticated');
        setMessage('Signed in with a simulated JWT.');
      }, 700);
    }, 800);
  };

  const handleLogout = () => {
    localStorage.removeItem('mockJwt');
    setToken('');
    setStatus('loggedOut');
    setMessage('Session cleared.');
  };

  const steps = useMemo(
    () => [
      {
        title: 'Step 1: Trigger OAuth',
        description:
          'Click “Login with Google” to kick off the simulated redirect flow. We show the redirect status instantly so you know what is happening.',
        active: status === 'loggedOut' || status === 'redirecting',
      },
      {
        title: 'Step 2: Simulated callback',
        description:
          'After a short pause we mimic the identity provider redirecting back with an auth code, then “exchange” it for a token.',
        active: status === 'exchanging',
      },
      {
        title: 'Step 3: Store the JWT',
        description:
          'The mock token is written to localStorage for persistence so protected UI can read it on reload.',
        active: status === 'authenticated',
      },
    ],
    [status]
  );

  return (
    <div className="grid gap-10">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Auth simulation</p>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Login with Google demo</h1>
        <p className="max-w-3xl text-lg text-neutral-300">
          This page fakes a Google OAuth redirect, stores a mock JWT in localStorage, and gates content based on whether that token exists.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <Card tone="accent" title="Interactive flow" className="h-full">
          <div className="space-y-4">
            <p className="text-neutral-100">Current status: <span className="font-semibold text-white">{status.replace(/^[a-z]/, (letter) => letter.toUpperCase())}</span></p>
            {token && <TokenBadge token={token} />}
            {message && <p className="text-sm text-neutral-200">{message}</p>}

            <div className="flex flex-wrap gap-3">
              <Button onClick={handleLogin} disabled={status !== 'loggedOut'}>
                Login with Google
              </Button>
              <Button variant="ghost" onClick={handleLogout} disabled={!token && status !== 'loggedOut'}>
                Clear session
              </Button>
            </div>

            <div className="grid gap-3 rounded-xl border border-neutral-800 bg-neutral-950/70 p-4 text-sm text-neutral-200">
              <p className="text-neutral-400">What we store</p>
              <div className="flex items-center justify-between gap-3 rounded-lg border border-neutral-800 bg-neutral-900/60 p-3">
                <span className="text-neutral-100">localStorage key</span>
                <code className="rounded bg-neutral-950 px-3 py-1 text-xs text-emerald-200">mockJwt</code>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-3">
                <p className="text-neutral-400">Value</p>
                <code className="block break-all rounded bg-neutral-950 px-3 py-2 text-xs text-emerald-100">
                  {token || 'No token stored yet'}
                </code>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid gap-4">
          {steps.map((step) => (
            <Card
              key={step.title}
              title={step.title}
              tone={step.active ? 'accent' : 'default'}
              className={step.active ? 'border-emerald-400/60 shadow-glow-emerald' : ''}
            >
              <p className="text-neutral-200">{step.description}</p>
            </Card>
          ))}

          <Card title="Protected content" tone={token ? 'info' : 'default'}>
            {token ? (
              <div className="space-y-3">
                <p className="text-emerald-50">You have a token in localStorage, so this block is unlocked.</p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-100">
                  <li>Show customer data, dashboards, or account settings.</li>
                  <li>Call APIs with the mock JWT to demonstrate fetch flows.</li>
                  <li>Simulate logout by clearing localStorage and hiding this area.</li>
                </ul>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-neutral-200">No token detected. Click the Google button to see how we protect this panel.</p>
                <Button variant="subtle" onClick={handleLogin} disabled={status !== 'loggedOut'}>
                  Login to unlock
                </Button>
              </div>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
}
