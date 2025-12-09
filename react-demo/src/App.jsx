import { useMemo, useState } from 'react';
import Button from './components/Button.jsx';
import Card from './components/Card.jsx';
import Navbar from './components/Navbar.jsx';

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 px-4 py-3 text-center">
      <p className="text-sm text-neutral-400">{label}</p>
      <p className="text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

function CounterCard() {
  const [count, setCount] = useState(0);

  return (
    <Card eyebrow="State" title="Counter demo" className="h-full">
      <p>Click the buttons to update stateful values.</p>
      <div className="mt-4 flex items-center gap-3">
        <Button variant="ghost" onClick={() => setCount((n) => Math.max(0, n - 1))}>
          Decrease
        </Button>
        <Button onClick={() => setCount((n) => n + 1)}>Increase</Button>
        <span className="text-lg font-semibold text-emerald-200">{count}</span>
      </div>
    </Card>
  );
}

function ToggleCard() {
  const [enabled, setEnabled] = useState(true);
  const statusLabel = enabled ? 'Enabled' : 'Disabled';

  return (
    <Card eyebrow="State" title="Toggle demo" className="h-full">
      <p>A simple toggle switch built with utility classes and React state.</p>
      <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-neutral-800 bg-neutral-900/80 px-4 py-3">
        <button
          type="button"
          onClick={() => setEnabled((value) => !value)}
          className={
            'relative h-9 w-16 rounded-full border border-neutral-700 bg-neutral-800 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400'
          }
        >
          <span
            className={`absolute left-1 top-1 h-7 w-7 rounded-full bg-white transition ${
              enabled ? 'translate-x-7 bg-emerald-400 shadow-glow-emerald/70' : ''
            }`}
          />
        </button>
        <span className="text-sm font-medium text-neutral-200">{statusLabel}</span>
      </div>
    </Card>
  );
}

export default function App() {
  const highlights = useMemo(
    () => [
      {
        title: 'Reusable primitives',
        body: 'Buttons and cards share the site Tailwind presets, so updates to the main config cascade here.',
      },
      {
        title: 'Responsive navigation',
        body: 'The navbar collapses into a mobile-friendly panel while keeping keyboard focus styling.',
      },
      {
        title: 'State playground',
        body: 'Counters and toggles demonstrate a simple React + Tailwind flow without extra dependencies.',
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar />
      <main>
        <section id="hero" className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-100">
              React + Tailwind
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Shared design system running in a Vite demo
            </h1>
            <p className="text-lg text-neutral-300">
              This mini app reuses the portfolio Tailwind config so typography, spacing, and colors stay consistent across pages.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button as="a" href="#components">View components</Button>
              <Button as="a" href="#state" variant="secondary">
                Try the playground
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Stat label="Built with" value="Vite" />
              <Stat label="Styling" value="Tailwind" />
              <Stat label="JSX" value="React 18" />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-2xl">
            <div className="absolute inset-0 -z-10 bg-grid-slate bg-[length:22px_22px] opacity-20" />
            <div className="absolute inset-0 -z-10 bg-radial-spot" />
            <div className="space-y-4">
              <Card eyebrow="Tailwind preset" title="Shared tokens">
                <p>
                  The Tailwind config for this demo pulls from <code>../tailwind.config.js</code>, so your design tokens stay in one
                  place.
                </p>
              </Card>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card title="Buttons">
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </Card>
                <Card title="Cards">
                  <p className="text-sm text-neutral-200">
                    Cards wrap content with consistent padding, rounded corners, and subtle shadows.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="components" className="section-shell space-y-6">
          <div className="space-y-2">
            <p className="eyebrow">UI kit</p>
            <h2 className="text-3xl font-bold text-white">Reusable components</h2>
            <p className="text-neutral-300">Drop these Button and Card building blocks into any React page.</p>
          </div>
          <div className="card-grid">
            {highlights.map((item) => (
              <Card key={item.title} title={item.title}>
                <p>{item.body}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="state" className="section-shell space-y-6">
          <div className="space-y-2">
            <p className="eyebrow">Playground</p>
            <h2 className="text-3xl font-bold text-white">Stateful examples</h2>
            <p className="text-neutral-300">Use these examples as a starting point for interactive UI work.</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <CounterCard />
            <ToggleCard />
          </div>
        </section>
      </main>
    </div>
  );
}
