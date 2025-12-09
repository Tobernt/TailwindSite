import { useState } from 'react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Navbar } from './components/Navbar';

function CounterPanel() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="grid gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-neutral-400">Stateful demo</p>
          <h3 className="text-2xl font-semibold text-white">Counter & toggle</h3>
        </div>
        <Button variant="ghost" onClick={() => setCount(0)}>
          Reset
        </Button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-4">
          <p className="text-sm text-neutral-300">Counter value</p>
          <p className="text-4xl font-bold text-white">{count}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button onClick={() => setCount((value) => value + 1)}>Increment</Button>
            <Button variant="subtle" onClick={() => setCount((value) => Math.max(0, value - 1))}>
              Decrement
            </Button>
          </div>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-4">
          <p className="text-sm text-neutral-300">Feature toggle</p>
          <p className="text-3xl font-semibold text-white">{isOn ? 'Enabled' : 'Disabled'}</p>
          <div className="mt-4 inline-flex items-center gap-3">
            <label className="inline-flex cursor-pointer items-center gap-3">
              <span className="text-sm text-neutral-200">Toggle</span>
              <span
                role="switch"
                aria-checked={isOn}
                tabIndex={0}
                onClick={() => setIsOn((value) => !value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setIsOn((value) => !value);
                  }
                }}
                className={`${isOn ? 'bg-emerald-500' : 'bg-neutral-700'} relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300`}
              >
                <span
                  className={`${isOn ? 'translate-x-7' : 'translate-x-1'} inline-block h-5 w-5 rounded-full bg-neutral-950 transition-transform`}
                />
              </span>
            </label>
            <Button variant="ghost" onClick={() => setIsOn(true)}>
              Turn on
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar />

      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-10 md:px-6 md:pt-12">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">React + Tailwind</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Starter kit that reuses the site’s Tailwind theme.
            </h1>
            <p className="text-lg text-neutral-300">
              Explore reusable UI primitives, a responsive navbar, and interactive stateful patterns that match the portfolio’s
              design language.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button as="a" href="#components">
                View components
              </Button>
              <Button as="a" href="https://tailwindcss.com/docs" variant="ghost">
                Tailwind docs
              </Button>
            </div>
          </div>
          <Card tone="accent">
            <p className="text-sm text-emerald-100">Design tokens reused</p>
            <p className="text-xl font-semibold text-white">
              Colors, fonts, spacing, and shadows are pulled straight from the root Tailwind config to keep experiences
              consistent.
            </p>
            <p className="mt-3 text-sm text-emerald-50">
              Perfect for building Netlify-friendly demos or feature experiments without duplicating theme setup.
            </p>
          </Card>
        </section>

        <section id="components" className="space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Reusable primitives</p>
            <h2 className="text-3xl font-bold text-white">Buttons and cards</h2>
            <p className="text-neutral-300">Mix and match the variants to cover primary actions, ghost links, or informative cards.</p>
          </div>
          <div className="grid gap-4 card-grid">
            <Card title="Primary CTA" tone="accent">
              <p className="mb-4 text-neutral-100">Use for high-intent actions like save, publish, or proceed.</p>
              <Button>Primary button</Button>
            </Card>
            <Card title="Ghost CTA" tone="default">
              <p className="mb-4 text-neutral-200">Low-emphasis links or secondary actions pair with this ghost style.</p>
              <Button variant="ghost">Ghost button</Button>
            </Card>
            <Card title="Card layout" tone="info">
              <p className="mb-4 text-neutral-100">Cards provide padding, rounded corners, and subtle borders for content.</p>
              <Button variant="subtle">Try the subtle button</Button>
            </Card>
          </div>
        </section>

        <section id="interactions" className="space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Stateful patterns</p>
            <h2 className="text-3xl font-bold text-white">Counter and toggle examples</h2>
            <p className="text-neutral-300">Wire up quick prototypes that showcase client-side state and accessible controls.</p>
          </div>
          <CounterPanel />
        </section>

        <section id="guidance" className="space-y-5">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Implementation notes</p>
            <h2 className="text-3xl font-bold text-white">Netlify-ready build output</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card title="Tailwind reuse" tone="default">
              <p>
                The app imports the root <code>tailwind.config.js</code> so spacing, colors, and fonts stay synchronized with the
                rest of the site.
              </p>
            </Card>
            <Card title="Vite + React" tone="accent">
              <p>
                Run <code>npm run build</code> inside <code>/react-demo</code> to emit production assets to
                <code>/react-demo/dist</code>, ready for Netlify.
              </p>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
