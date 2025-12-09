import React from 'react';
import Layout from './components/Layout.js';
import HomeContent from './pages/home.js';
import AboutContent from './pages/about.js';

export const routes = [
  {
    slug: 'index',
    title: 'Next-style Home',
    description: 'Pre-rendered React pages with a shared layout, navigation, and SEO-ready metadata.',
    navLabel: 'Home',
    Content: HomeContent,
  },
  {
    slug: 'about',
    title: 'About Next-style Pages',
    description: 'Learn how the layout, file-based routing, and static generation work together.',
    navLabel: 'About',
    Content: AboutContent,
  },
];

export function renderPage(route, allRoutes, options = {}) {
  const navigation = allRoutes.map((entry) => ({
    href: entry.slug === 'index' ? 'index.html' : `${entry.slug}.html`,
    label: entry.navLabel,
    active: entry.slug === route.slug,
  }));

  const canonicalBase = options.canonicalBase ? options.canonicalBase.replace(/\/$/, '') : '';
  const filename = route.slug === 'index' ? 'index.html' : `${route.slug}.html`;
  const canonicalUrl = canonicalBase ? `${canonicalBase}/${filename}` : undefined;
  const content = React.createElement(route.Content);

  return React.createElement(
    Layout,
    {
      title: route.title,
      description: route.description,
      navigation,
      canonicalUrl,
    },
    content,
  );
}

export default routes;
