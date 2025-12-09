import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';
import { renderToStaticMarkup } from 'react-dom/server';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

async function ensureDist() {
  await fs.rm(distDir, { recursive: true, force: true });
  await fs.mkdir(distDir, { recursive: true });
}

async function build() {
  const vite = await createServer({
    root: rootDir,
    logLevel: 'info',
    server: { middlewareMode: true },
    appType: 'custom',
  });

  try {
    await ensureDist();
    const { getStaticPages } = await vite.ssrLoadModule('/src/ssg-entry.jsx');
    const pages = await getStaticPages();

    await Promise.all(
      pages.map(async (page) => {
        const html = '<!doctype html>' + renderToStaticMarkup(page.document);
        const filepath = path.join(distDir, page.filename);
        await fs.writeFile(filepath, html, 'utf8');
        console.log(`Generated ${path.relative(rootDir, filepath)}`);
      })
    );
  } finally {
    await vite.close();
  }
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
