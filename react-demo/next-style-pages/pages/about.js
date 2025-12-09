import React from 'react';

export default function AboutContent() {
  const milestones = [
    {
      title: 'Shared layout',
      detail: 'A single component manages <head> tags, meta data, navigation, and page chrome so content stays focused.',
    },
    {
      title: 'File-based routes',
      detail: 'Each file in the pages directory maps to a generated HTML output for predictable URLs.',
    },
    {
      title: 'Static generation',
      detail: 'Node renders React components into HTML ahead of deploy time—no client-side router required.',
    },
  ];

  const timeline = milestones.map((item, index) =>
    React.createElement(
      'article',
      { key: item.title, className: 'card' },
      [
        React.createElement('p', { key: 'step', style: { margin: 0, color: '#6366f1', fontWeight: 700 } }, `Step ${index + 1}`),
        React.createElement('h2', { key: 'title' }, item.title),
        React.createElement('p', { key: 'detail' }, item.detail),
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
          React.createElement('p', { key: 'eyebrow', style: { color: '#22d3ee', fontWeight: 700 } }, 'About this demo'),
          React.createElement('h1', { key: 'title' }, 'Layout-driven, Next-inspired pages'),
          React.createElement(
            'p',
            { key: 'lede' },
            'Every route uses the same chrome, navigation, and SEO metadata pipeline so you can drop in new content without rebuilding the shell.',
          ),
        ],
      ),
      React.createElement('section', { key: 'timeline', className: 'grid' }, timeline),
    ],
  );
}
