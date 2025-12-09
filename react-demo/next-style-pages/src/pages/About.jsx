import React from 'react';

export default function AboutPage() {
  const milestones = [
    'Define a layout once and reuse it everywhere.',
    'Render the React tree to HTML through Vite’s server APIs.',
    'Ship zero runtime JavaScript while keeping the authoring experience.',
  ];

  return (
    <div className="columns">
      <section>
        <h2 className="section-title">Why a Next-style demo?</h2>
        <p className="section-body">
          Sometimes you want React’s authoring experience without the client-side runtime. This section explains how the
          build script borrows Vite’s SSR loader to turn each page component into plain markup.
        </p>
        <div className="card">
          <h3>Workflow, distilled</h3>
          <p className="quote">
            “Author with components, deploy with HTML. The shared layout keeps branding aligned while every page carries its
            own metadata for previews and SEO.”
          </p>
        </div>
      </section>
      <aside className="card">
        <span className="badge">Project notes</span>
        <h3>Build highlights</h3>
        <ul className="list">
          {milestones.map((item) => (
            <li key={item} className="list__item">
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="inline-stack" style={{ marginTop: '1rem' }}>
          <span className="pill">Reusable layout</span>
          <span className="pill">Static-friendly</span>
          <span className="pill">Linked pages</span>
        </div>
      </aside>
    </div>
  );
}
