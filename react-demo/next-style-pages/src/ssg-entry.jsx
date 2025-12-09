import React from 'react';
import Document from './Document.jsx';
import Layout from './Layout.jsx';
import HomePage from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import ComponentsPage from './pages/Components.jsx';

const navLinks = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About' },
  { href: 'components.html', label: 'Components' },
];

const pageDescriptors = [
  {
    title: 'Home',
    description: 'Static React pages exported with a shared layout and linked navigation.',
    filename: 'index.html',
    component: HomePage,
  },
  {
    title: 'About',
    description: 'Learn how the build script renders each page to HTML using Vite and React.',
    filename: 'about.html',
    component: AboutPage,
  },
  {
    title: 'Components',
    description: 'See the small component set that powers every static page in this demo.',
    filename: 'components.html',
    component: ComponentsPage,
  },
];

export function getStaticPages() {
  return pageDescriptors.map(({ component: Component, ...meta }) => ({
    ...meta,
    document: (
      <Document title={meta.title} description={meta.description}>
        <Layout title={meta.title} description={meta.description} navLinks={navLinks} currentPath={meta.filename}>
          <Component />
        </Layout>
      </Document>
    ),
  }));
}
