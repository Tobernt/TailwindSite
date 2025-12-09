export const baseStyles = `
  :root {
    color-scheme: dark;
    --bg: #0b1221;
    --panel: #111a2e;
    --muted: #9fb3c8;
    --card: #142039;
    --border: #1f2c4a;
    --accent: #38bdf8;
    --accent-strong: #22d3ee;
    --glow: 0 10px 50px rgba(56, 189, 248, 0.25);
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.05), transparent 35%),
      radial-gradient(circle at 80% 10%, rgba(56, 189, 248, 0.05), transparent 40%),
      var(--bg);
    color: #e2e8f0;
    min-height: 100vh;
  }

  a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
  }

  a:hover {
    color: var(--accent-strong);
    text-decoration: underline;
  }

  .page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .container {
    width: min(1120px, 100% - 2.5rem);
    margin: 0 auto;
  }

  header.hero {
    background: linear-gradient(135deg, rgba(34, 211, 238, 0.12), rgba(37, 99, 235, 0.08));
    border-bottom: 1px solid var(--border);
    box-shadow: var(--glow);
  }

  .hero__content {
    padding: 3.5rem 0 2.5rem;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.35rem 0.75rem;
    border-radius: 9999px;
    border: 1px solid rgba(56, 189, 248, 0.4);
    background: rgba(56, 189, 248, 0.08);
    color: var(--accent);
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  h1 {
    margin: 0.5rem 0;
    font-size: clamp(2rem, 3vw + 1.2rem, 3rem);
    letter-spacing: -0.02em;
  }

  .lead {
    margin: 0;
    color: var(--muted);
    font-size: 1.05rem;
    max-width: 720px;
    line-height: 1.6;
  }

  nav.nav {
    margin-top: 1.5rem;
    display: inline-flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    padding: 0.5rem;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid var(--border);
  }

  .nav__link {
    padding: 0.6rem 0.95rem;
    border-radius: 999px;
    font-weight: 700;
    color: #e2e8f0;
    border: 1px solid transparent;
    transition: border-color 150ms ease, background 150ms ease, color 150ms ease;
  }

  .nav__link:hover {
    background: rgba(56, 189, 248, 0.08);
    border-color: rgba(56, 189, 248, 0.3);
  }

  .nav__link--active {
    background: rgba(56, 189, 248, 0.18);
    border-color: rgba(56, 189, 248, 0.8);
    color: white;
  }

  main {
    flex: 1;
    padding: 3rem 0 2.5rem;
  }

  .grid {
    display: grid;
    gap: 1.25rem;
  }

  @media (min-width: 860px) {
    .grid--two {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .grid--three {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .card {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0));
    border-radius: 18px;
    border: 1px solid var(--border);
    padding: 1.25rem 1.35rem;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.35);
  }

  .card h3 {
    margin: 0 0 0.35rem;
    font-size: 1.25rem;
  }

  .card p {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    background: rgba(56, 189, 248, 0.12);
    color: #cffafe;
    font-weight: 700;
    border: 1px solid rgba(56, 189, 248, 0.35);
    font-size: 0.85rem;
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.65rem;
  }

  .list__item {
    display: grid;
    gap: 0.25rem;
    padding: 0.75rem 1rem;
    border-radius: 14px;
    background: rgba(20, 32, 57, 0.7);
    border: 1px solid var(--border);
  }

  .list__title {
    font-weight: 700;
  }

  .footer {
    border-top: 1px solid var(--border);
    padding: 1.75rem 0 2rem;
    color: var(--muted);
    font-size: 0.95rem;
  }

  .inline-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.4rem 0.75rem;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.02);
    color: #dbeafe;
    font-weight: 600;
  }

  .section-title {
    margin: 0 0 0.35rem;
    font-size: 1.5rem;
  }

  .section-body {
    margin: 0 0 1.25rem;
    color: var(--muted);
    max-width: 760px;
  }

  .columns {
    display: grid;
    gap: 1rem;
  }

  @media (min-width: 900px) {
    .columns {
      grid-template-columns: 2fr 1.2fr;
    }
  }

  .quote {
    border-left: 4px solid var(--accent);
    padding-left: 1rem;
    color: var(--muted);
    font-style: italic;
  }
`;
