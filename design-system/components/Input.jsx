import PropTypes from 'prop-types';
import clsx from 'clsx';
import { forwardRef, useId } from 'react';

const baseInput =
  'block w-full rounded-xl border bg-neutral-950 px-4 py-3 text-sm text-neutral-50 shadow-inner shadow-black/30 placeholder:text-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400';

export const Input = forwardRef(function Input(
  { label, helperText, error, className, inputClassName, id: providedId, ...props },
  ref
) {
  const generatedId = useId();
  const id = providedId || generatedId;
  const describedBy = helperText || error ? `${id}-description` : undefined;

  return (
    <label className={clsx('space-y-2 text-sm text-neutral-100', className)} htmlFor={id}>
      {label && <span className="block font-semibold text-neutral-50">{label}</span>}
      <input
        id={id}
        ref={ref}
        className={clsx(baseInput, error && 'border-red-500/50 text-red-50 placeholder:text-red-200/80', inputClassName)}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        {...props}
      />
      {(helperText || error) && (
        <p
          id={describedBy}
          className={clsx('text-xs', error ? 'text-red-200' : 'text-neutral-400')}
        >
          {error || helperText}
        </p>
      )}
    </label>
  );
});

Input.propTypes = {
  label: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  id: PropTypes.string,
};
