# TailwindSite

Static, multi-page Tailwind site with a home page and UI gallery.

## Stack choice
- **Static + Tailwind CLI build**: simple HTML served from the repo root.
- Tailwind builds are handled via npm scripts so you can generate a local CSS bundle instead of relying solely on the CDN helper.

## Getting started
1. Install dependencies (Tailwind CLI, PostCSS, Autoprefixer):
   ```bash
   npm install
   ```
2. Start the Tailwind watcher to rebuild `assets/styles.css` on change:
   ```bash
   npm run dev
   ```
   Open `index.html` or `gallery.html` in a local server (e.g., `python -m http.server 3000`).
3. Create a production CSS build (this also builds the React demo bundle to `react-demo/dist`):
   ```bash
   npm run build
   ```

## Deployment
- The repo includes a `netlify.toml` configured to run `npm run build` and publish the repository root. Connect the repo in Netlify and trigger a deploy.
- Any static host (Vercel/GitHub Pages/etc.) can serve the built files from the repo root after running `npm run build`.

## Navigation updates
- Header navigation now highlights the active page/section, supports hover and focus states, and offers left/right/Home/End keyboard navigation between links.
- Gallery and home pages include reciprocal links in the shared navigation for easy switching.
