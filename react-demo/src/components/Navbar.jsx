import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

const links = [
  { href: '/', label: 'Home' },
  { href: '/cms-demo', label: 'CMS Demo' },
  { href: '/graphql-demo', label: 'GraphQL Demo' },
  { href: '/#components', label: 'Components' },
  { href: '/#interactions', label: 'Interactions' },
  { href: '/#guidance', label: 'Guidance' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keyup', handler);
    return () => document.removeEventListener('keyup', handler);
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link className="text-lg font-semibold text-white" to="/" aria-label="Back to portfolio home" onClick={() => setIsOpen(false)}>
          Tailwind React Demo
        </Link>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-3 py-2 text-sm font-semibold text-neutral-200 hover:border-emerald-400/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span aria-hidden="true" className="text-xl leading-none">
            {isOpen ? '×' : '≡'}
          </span>
          Menu
        </button>

        <ul
          id="nav-menu"
          className={`${isOpen ? 'flex' : 'hidden'} flex-col gap-2 rounded-2xl border border-neutral-800 bg-neutral-900/90 p-4 text-sm lg:flex lg:flex-row lg:items-center lg:gap-3 lg:border-0 lg:bg-transparent lg:p-0`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className="inline-flex items-center rounded-full px-3 py-2 text-neutral-200 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                to={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="lg:ml-2">
            <Button as="a" href="https://vitejs.dev" variant="primary" className="shadow-none" target="_blank" rel="noreferrer">
              Vite Docs
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
