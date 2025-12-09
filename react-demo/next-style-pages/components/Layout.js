import React from 'react';

const styles = `
  :root {
    color-scheme: light;
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: radial-gradient(circle at top left, #f5f7ff, #fefefe 55%);
    color: #111827;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .site-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: #0f172a;
    color: #f8fafc;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.2);
  }
  .brand {
    font-weight: 700;
    letter-spacing: 0.02em;
  }
  .site-nav {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
  .nav-link {
    color: #cbd5e1;
    text-decoration: none;
    padding: 0.4rem 0.75rem;
    border-radius: 999px;
    transition: background 0.2s, color 0.2s, transform 0.2s;
  }
  .nav-link:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #e2e8f0;
    transform: translateY(-1px);
  }
  .nav-link.active {
    background: linear-gradient(120deg, #6366f1, #22d3ee);
    color: #0f172a;
    font-weight: 700;
    box-shadow: 0 10px 20px rgba(79, 70, 229, 0.35);
  }
  .site-content {
    flex: 1;
    max-width: 960px;
    margin: 2rem auto;
    padding: 0 1.5rem 3rem;
  }
  .hero {
    background: white;
    border-radius: 24px;
    padding: 2rem;
    box-shadow: 0 30px 60px rgba(15, 23, 42, 0.07);
    border: 1px solid #e2e8f0;
  }
  .hero h1 {
    margin: 0 0 0.75rem;
    font-size: clamp(1.75rem, 3vw, 2.5rem);
  }
  .hero p {
    margin: 0;
    color: #475569;
    line-height: 1.6;
  }
  .grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    margin-top: 1.5rem;
  }
  .card {
    background: white;
    border-radius: 18px;
    padding: 1.25rem;
    border: 1px solid #e2e8f0;
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
  }
  .card h2 {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
  }
  .card p {
    margin: 0;
    color: #475569;
    line-height: 1.6;
  }
  .footer {
    padding: 1.5rem;
    text-align: center;
    background: #0f172a;
    color: #cbd5e1;
    margin-top: auto;
  }
  @media (max-width: 640px) {
    .site-header {
      flex-direction: column;
      gap: 0.75rem;
      align-items: flex-start;
    }
    .site-nav {
      flex-wrap: wrap;
    }
  }
`;

export default function Layout({ title, description, canonicalUrl, navigation = [], children }) {
  const pageTitle = title ? `${title} | Next-Style Pages` : 'Next-Style Pages';
  const metaNodes = [
    React.createElement('meta', { charSet: 'utf-8', key: 'charset' }),
    React.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', key: 'viewport' }),
    description ? React.createElement('meta', { name: 'description', content: description, key: 'description' }) : null,
    React.createElement('title', { key: 'title' }, pageTitle),
    React.createElement('meta', { property: 'og:title', content: pageTitle, key: 'og:title' }),
    description ? React.createElement('meta', { property: 'og:description', content: description, key: 'og:description' }) : null,
    canonicalUrl ? React.createElement('link', { rel: 'canonical', href: canonicalUrl, key: 'canonical' }) : null,
    React.createElement('style', { key: 'styles', dangerouslySetInnerHTML: { __html: styles } }),
  ].filter(Boolean);

  const navigationLinks = navigation.map((link) =>
    React.createElement(
      'a',
      {
        key: link.href,
        href: link.href,
        className: `nav-link${link.active ? ' active' : ''}`,
      },
      link.label,
    ),
  );

  return React.createElement(
    'html',
    { lang: 'en' },
    [
      React.createElement('head', { key: 'head' }, metaNodes),
      React.createElement(
        'body',
        { key: 'body' },
        [
          React.createElement(
            'header',
            { key: 'header', className: 'site-header' },
            [
              React.createElement('div', { key: 'brand', className: 'brand' }, 'Next-Style Pages'),
              React.createElement('nav', { key: 'nav', className: 'site-nav' }, navigationLinks),
            ],
          ),
          React.createElement('main', { key: 'main', className: 'site-content' }, children),
          React.createElement(
            'footer',
            { key: 'footer', className: 'footer' },
            'Pre-rendered with Node for SEO-friendly delivery.',
          ),
        ],
      ),
    ],
  );
}
