import React from 'react';

export default function Card({ title, eyebrow, children }) {
  return (
    <article className="card">
      {eyebrow && <span className="badge">{eyebrow}</span>}
      {title && <h3>{title}</h3>}
      <p>{children}</p>
    </article>
  );
}
