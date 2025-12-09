import React from 'react';

export default function Layout({ children, navLinks, currentPath, title, description }) {
  return (
    <div className="page">
      <header className="hero">
        <div className="container hero__content">
          <div>
            <p className="eyebrow">Static React pages</p>
            <h1>{title}</h1>
            <p className="lead">{description}</p>
            <nav className="nav" aria-label="Primary">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav__link ${currentPath === link.href ? 'nav__link--active' : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="container">{children}</main>

      <footer className="footer container">
        Built with React server rendering and saved as plain HTML files. Every page shares the same layout and
        navigation so you can hop between <a href="index.html">home</a>, <a href="about.html">about</a>, and{' '}
        <a href="components.html">components</a>.
      </footer>
    </div>
  );
}
