import PropTypes from 'prop-types';
import clsx from 'clsx';

const baseClasses = 'rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-xl shadow-black/20';

export default function Card({ title, eyebrow, children, className }) {
  return (
    <div className={clsx(baseClasses, className)}>
      {eyebrow && <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-2">{eyebrow}</p>}
      {title && <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>}
      <div className="text-sm text-neutral-200 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  eyebrow: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
