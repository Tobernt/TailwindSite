import PropTypes from 'prop-types';
import clsx from 'clsx';

const baseStyles =
  'inline-flex items-center justify-center rounded-full px-4 py-2 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

const variants = {
  primary:
    'bg-emerald-500 text-neutral-950 shadow-glow-emerald hover:bg-emerald-400 focus-visible:outline-emerald-300',
  ghost:
    'border border-neutral-700 text-neutral-100 hover:border-emerald-300 hover:text-emerald-50 hover:bg-neutral-900 focus-visible:outline-emerald-300',
  subtle:
    'bg-neutral-900 text-neutral-100 border border-neutral-800 hover:border-emerald-400/50 focus-visible:outline-emerald-300',
};

export function Button({ children, variant = 'primary', className, as: Component = 'button', ...props }) {
  const classes = clsx(baseStyles, variants[variant], className);
  const componentProps = { ...props };

  if (Component === 'button' && !componentProps.type) {
    componentProps.type = 'button';
  }

  return (
    <Component className={classes} {...componentProps}>
      {children}
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'ghost', 'subtle']),
  className: PropTypes.string,
  as: PropTypes.elementType,
};
