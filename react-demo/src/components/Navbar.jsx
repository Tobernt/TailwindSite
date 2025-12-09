import { useMemo, useState } from 'react';
import { Button } from '../../../design-system';

const links = [
  { href: '#hero', label: 'Overview' },
  { href: '#components', label: 'Components' },
  { href: '#state', label: 'State Playground' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((current) => !current);

  const menuClasses = useMemo(
    () =>
      `flex flex-col gap-2 mt-4 lg:mt-0 lg:flex-row lg:items-center lg:gap-3 ${
        open ? 'block' : 'hidden lg:flex'
      }`,
    [open]
  );

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-semibold tracking-tight text-white hover:text-emerald-200">
          Tailwind React Demo
        </a>
        <div className="lg:hidden">
          <Button variant="ghost" aria-expanded={open} aria-controls="mobile-menu" onClick={toggle}>
            {open ? 'Close' : 'Menu'}
          </Button>
        </div>
        <nav
          id="mobile-menu"
          className={
            'absolute left-4 right-4 top-[72px] rounded-2xl border border-neutral-800 bg-neutral-900/95 p-4 shadow-2xl lg:static lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ' +
            (open ? 'block' : 'hidden lg:block')
          }
        >
          <ul className={menuClasses}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex w-full items-center justify-between rounded-full px-3 py-2 text-sm font-medium text-neutral-200 transition hover:text-white hover:bg-neutral-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <span aria-hidden="true" className="text-xs text-neutral-500">
                    ↗
                  </span>
                </a>
              </li>
            ))}
            <li className="lg:ml-2">
              <Button variant="primary" className="w-full" href="#components" as="a">
                Explore UI kit
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
