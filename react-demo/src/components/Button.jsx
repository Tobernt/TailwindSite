import PropTypes from 'prop-types';
import clsx from 'clsx';

const baseStyles =
  'inline-flex items-center justify-center rounded-full text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed';

const variants = {
  primary:
    'bg-emerald-500 text-neutral-950 shadow-glow-emerald hover:bg-emerald-400 focus-visible:outline-emerald-300',
  secondary:
    'bg-blue-500/10 text-blue-100 border border-blue-400/40 hover:bg-blue-500/20 focus-visible:outline-blue-200',
  ghost:
    'bg-neutral-900 border border-neutral-800 text-neutral-100 hover:border-emerald-300 hover:text-emerald-100',
};

const sizes = {
  sm: 'px-3 py-1.5',
  md: 'px-4 py-2',
  lg: 'px-5 py-3 text-base',
};

export default function Button({ children, variant = 'primary', size = 'md', className, as = 'button', ...props }) {
  const Component = as;
  return (
    <Component className={clsx(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
};
