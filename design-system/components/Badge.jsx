import PropTypes from 'prop-types';
import clsx from 'clsx';

const styles = {
  neutral: 'bg-neutral-800 text-neutral-100 border border-neutral-700',
  success: 'bg-emerald-500/15 text-emerald-100 border border-emerald-400/40',
  warning: 'bg-amber-500/15 text-amber-50 border border-amber-400/50',
  info: 'bg-blue-500/15 text-blue-50 border border-blue-400/50',
};

export function Badge({ children, variant = 'neutral', className }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['neutral', 'success', 'warning', 'info']),
  className: PropTypes.string,
};
