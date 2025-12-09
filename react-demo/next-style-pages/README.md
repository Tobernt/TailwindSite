# Next-style static pages

This folder mirrors a Next.js-style file-based routing approach using React components, a shared layout, and Node-powered static generation.

## Authoring pages
- Add a new file under `next-style-pages/pages`. The file name becomes the route name (for example, `blog.js` would generate `blog.html`).
- Export a React component (no JSX transform required) that returns your page content. Navigation and `<head>` metadata are provided by the shared layout.
- Update `next-style-pages/routes.js` with your new route entry (title, description, slug, and nav label).

## Shared layout
`next-style-pages/components/Layout.js` handles `<head>` tags, meta descriptions, Open Graph tags, and the navigation bar. Every page reuses this shell so titles and SEO metadata stay consistent.

## Building the static HTML
Run the static generator from the `react-demo` package:

```bash
npm run build:next-style-pages
```

The command renders each route to HTML in `react-demo/dist/next-style-pages`. To set a canonical base URL for the `<link rel="canonical">` tag, provide `CANONICAL_BASE` when running the script:

```bash
CANONICAL_BASE="https://example.com/next-style-pages" npm run build:next-style-pages
```

The script is also chained into `npm run build`, so any Vite build in this package will also refresh the static pages.

## Deploying to Netlify
If you want Netlify to serve the generated HTML files, set the build command to run the `react-demo` build and point the publish directory at the generated output:

- **Build command:** `npm --prefix react-demo run build`
- **Publish directory:** `react-demo/dist/next-style-pages`

These settings ensure the pre-rendered HTML pages are produced during the build and deployed as static assets.
