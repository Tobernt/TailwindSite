import PropTypes from 'prop-types';
import clsx from 'clsx';

export function Card({ title, children, tone = 'default', className }) {
  const styles = {
    default: 'border-neutral-800 bg-neutral-900/80',
    accent: 'border-emerald-500/40 bg-emerald-500/10 shadow-glow-emerald',
    info: 'border-blue-400/40 bg-blue-500/10 shadow-glow-blue',
  };

  return (
    <article
      className={clsx(
        'h-full rounded-2xl border p-6 transition hover:-translate-y-0.5 hover:shadow-lg',
        styles[tone],
        className
      )}
    >
      {title && <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>}
      <div className="text-neutral-200 leading-relaxed text-sm sm:text-base">{children}</div>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  tone: PropTypes.oneOf(['default', 'accent', 'info']),
  className: PropTypes.string,
};
