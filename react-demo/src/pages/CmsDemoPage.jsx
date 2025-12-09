import { useEffect, useMemo, useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

const buildDataUrl = () => `${import.meta.env.BASE_URL}public/cms/data.json`;

export function CmsDemoPage() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const dataUrl = useMemo(buildDataUrl, []);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setStatus('loading');
      setError('');

      try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
          throw new Error('Unable to load CMS data');
        }
        const payload = await response.json();
        if (!cancelled) {
          setItems(payload.items || []);
          setStatus('success');
        }
      } catch (err) {
        if (!cancelled) {
          setStatus('error');
          setError(err.message);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [dataUrl]);

  return (
    <div className="space-y-10">
      <section className="grid gap-8 rounded-3xl border border-emerald-900/60 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-8 shadow-2xl shadow-emerald-900/30 md:grid-cols-[1.2fr_1fr] md:p-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Headless CMS demo</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Live data powering UI cards.</h1>
          <p className="text-lg text-neutral-200">
            Content is requested at runtime from <code className="rounded bg-neutral-900 px-1.5 py-1 text-sm">{dataUrl}</code>, simulating a headless CMS response that a static site can hydrate without rebuilding.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button as="a" href={dataUrl} target="_blank" rel="noreferrer">
              View JSON feed
            </Button>
            <Button variant="ghost" as="a" href="https://en.wikipedia.org/wiki/Headless_content_management_system">
              What is a headless CMS?
            </Button>
          </div>
        </div>
        <Card tone="info" title="Data flow">
          <ol className="space-y-3 text-sm text-neutral-100">
            <li className="flex items-start gap-3 rounded-xl bg-neutral-900/60 p-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600/80 text-sm font-bold text-white">1</span>
              <div>
                <p className="font-semibold">Headless CMS</p>
                <p className="text-neutral-300">Structured content is authored and saved in the CMS.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-neutral-900/60 p-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/80 text-sm font-bold text-white">2</span>
              <div>
                <p className="font-semibold">API</p>
                <p className="text-neutral-300">The CMS exposes a JSON API at build or request time.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-neutral-900/60 p-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/80 text-sm font-bold text-white">3</span>
              <div>
                <p className="font-semibold">Frontend</p>
                <p className="text-neutral-300">React fetches the feed and renders Tailwind-styled cards.</p>
              </div>
            </li>
          </ol>
          <p className="mt-4 text-sm text-emerald-100">Flow: Headless CMS → API → Frontend</p>
        </Card>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">CMS-driven content</p>
          <h2 className="text-3xl font-bold text-white">Featured items</h2>
          <p className="text-neutral-300">Cards hydrate from the JSON feed, keeping layout and styling consistent while letting non-developers update content.</p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6">
          {status === 'loading' && <p className="text-neutral-300">Loading content...</p>}
          {status === 'error' && <p className="text-red-300">{error || 'Unable to fetch content.'}</p>}
          {status === 'success' && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <article key={item.id} className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-lg shadow-emerald-950/30 transition hover:-translate-y-1 hover:border-emerald-500/70 hover:shadow-emerald-800/40">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">{item.category}</p>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="flex-1 text-neutral-300">{item.description}</p>
                    <div className="flex items-center justify-between text-sm text-neutral-400">
                      <span>Updated {item.updated}</span>
                      <span className="rounded-full bg-emerald-500/15 px-3 py-1 font-semibold text-emerald-200">{item.cta}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default CmsDemoPage;
