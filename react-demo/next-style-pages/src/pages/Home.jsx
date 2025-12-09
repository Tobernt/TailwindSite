import React from 'react';
import Card from '../components/Card.jsx';

export default function HomePage() {
  const highlights = [
    {
      title: 'SEO-ready markup',
      body: 'Each page renders on the server with unique meta tags so search engines and link previews get the right copy.',
    },
    {
      title: 'Shared layout',
      body: 'Headers, navigation, and footers live in one Layout component so updates cascade across all pages.',
    },
    {
      title: 'Plain HTML output',
      body: 'A small build script renders the React tree to static files for zero-JavaScript delivery.',
    },
  ];

  const steps = [
    { title: 'Write React pages', detail: 'Compose sections in JSX, no routing library required.' },
    { title: 'Run the build script', detail: 'The Node task uses Vite to server-render your components.' },
    { title: 'Drop the HTML anywhere', detail: 'Deploy the generated files to any static host with no runtime dependencies.' },
  ];

  return (
    <div className="grid grid--two" style={{ alignItems: 'start' }}>
      <section className="grid grid--two" style={{ gridTemplateColumns: '1fr' }}>
        {highlights.map((item) => (
          <Card key={item.title} title={item.title} eyebrow="Why it works">
            {item.body}
          </Card>
        ))}
      </section>
      <section>
        <h2 className="section-title">From React to static HTML</h2>
        <p className="section-body">
          This mini site mimics a Next.js export: pages are written as React components, rendered to markup at build time,
          and saved directly to <code>index.html</code>, <code>about.html</code>, and <code>components.html</code>.
        </p>
        <ul className="list" aria-label="Build steps">
          {steps.map((step) => (
            <li key={step.title} className="list__item">
              <span className="list__title">{step.title}</span>
              <span>{step.detail}</span>
            </li>
          ))}
        </ul>
        <div className="inline-stack" style={{ marginTop: '1.1rem' }}>
          <span className="pill">Server rendering</span>
          <span className="pill">Metadata per page</span>
          <span className="pill">Portable HTML</span>
        </div>
      </section>
    </div>
  );
}
