import PropTypes from 'prop-types';
import clsx from 'clsx';
import { forwardRef } from 'react';

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  primary: 'bg-emerald-500 text-neutral-950 shadow-glow-emerald hover:bg-emerald-400 focus-visible:outline-emerald-200',
  secondary:
    'bg-blue-500/10 text-blue-50 border border-blue-400/50 hover:bg-blue-500/20 focus-visible:outline-blue-200',
  ghost:
    'bg-neutral-900 border border-neutral-800 text-neutral-100 hover:border-emerald-300 hover:text-emerald-100 focus-visible:outline-emerald-200',
  outline:
    'border border-neutral-700 text-neutral-100 hover:border-emerald-300 hover:text-emerald-100 focus-visible:outline-neutral-200',
};

const sizes = {
  sm: 'px-3 py-1.5',
  md: 'px-4 py-2',
  lg: 'px-5 py-3 text-base',
};

export const Button = forwardRef(function Button(
  { children, variant = 'primary', size = 'md', className, as = 'button', ...props },
  ref
) {
  const Component = as;
  return (
    <Component ref={ref} className={clsx(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Component>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
};
