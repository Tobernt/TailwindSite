import React from 'react';
import Card from '../components/Card.jsx';

const libraryItems = [
  {
    title: 'Layout',
    detail: 'Wraps the page content with a consistent hero, navigation, and footer block.',
  },
  {
    title: 'Document',
    detail: 'Applies meta tags, fonts, and shared CSS to every exported HTML file.',
  },
  {
    title: 'Card',
    detail: 'Reusable container with an optional badge for highlighting important notes.',
  },
];

const callouts = [
  {
    heading: 'Server rendering',
    body: 'React components are passed through renderToStaticMarkup so the output is pure HTML.',
  },
  {
    heading: 'Linked exports',
    body: 'Navigation uses normal anchor tags that point at the generated pages, keeping things static-host friendly.',
  },
  {
    heading: 'One build command',
    body: 'A small Node script drives the Vite server in middleware mode and writes each page into dist/.',
  },
];

export default function ComponentsPage() {
  return (
    <div className="grid grid--two">
      <section>
        <h2 className="section-title">Component inventory</h2>
        <p className="section-body">
          Reusable building blocks keep the pages consistent. Add more sections and the build script will render them to
          HTML alongside these examples.
        </p>
        <div className="grid grid--three">
          {libraryItems.map((item) => (
            <Card key={item.title} title={item.title} eyebrow="Building block">
              {item.detail}
            </Card>
          ))}
        </div>
      </section>
      <section className="grid grid--two" style={{ gridTemplateColumns: '1fr' }}>
        {callouts.map((item) => (
          <div key={item.heading} className="card">
            <span className="badge">How it works</span>
            <h3>{item.heading}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
