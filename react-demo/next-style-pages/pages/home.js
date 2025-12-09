import React from 'react';

export default function HomeContent() {
  const featureCards = [
    {
      title: 'SEO-first markup',
      copy: 'Pre-rendered with descriptive meta tags and canonical URLs to make crawlers happy.',
    },
    {
      title: 'Navigation baked in',
      copy: 'A minimal router experience keeps links working whether served statically or behind a CDN.',
    },
    {
      title: 'Next-style structure',
      copy: 'File-based routes map directly to generated HTML for predictable deployments.',
    },
  ];

  const cards = featureCards.map((card) =>
    React.createElement(
      'article',
      { key: card.title, className: 'card' },
      [
        React.createElement('h2', { key: 'title' }, card.title),
        React.createElement('p', { key: 'copy' }, card.copy),
      ],
    ),
  );

  return React.createElement(
    React.Fragment,
    null,
    [
      React.createElement(
        'section',
        { key: 'hero', className: 'hero' },
        [
          React.createElement('p', { key: 'eyebrow', style: { color: '#6366f1', fontWeight: 700 } }, 'Welcome'),
          React.createElement('h1', { key: 'title' }, 'Next-style static pages, powered by React'),
          React.createElement(
            'p',
            { key: 'lede' },
            'A compact example that mirrors Next.js patterns without a framework runtime. Everything renders ahead of time so hosting can stay static and fast.',
          ),
        ],
      ),
      React.createElement('section', { key: 'features', className: 'grid' }, cards),
    ],
  );
}
