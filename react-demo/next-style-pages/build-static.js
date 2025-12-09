import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderToStaticMarkup } from 'react-dom/server';
import routes, { renderPage } from './routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve(__dirname, '../dist/next-style-pages');
const canonicalBase = process.env.CANONICAL_BASE || '';

fs.mkdirSync(outputDir, { recursive: true });

routes.forEach((route) => {
  const markup = renderPage(route, routes, { canonicalBase });
  const html = `<!doctype html>${renderToStaticMarkup(markup)}`;
  const filename = route.slug === 'index' ? 'index.html' : `${route.slug}.html`;
  const targetPath = path.join(outputDir, filename);

  fs.writeFileSync(targetPath, html, 'utf8');
  console.log(`Generated ${path.relative(path.resolve(__dirname, '..'), targetPath)}`);
});
