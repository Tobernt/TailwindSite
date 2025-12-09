import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

import { Button } from './Button.jsx';
import { Card } from './Card.jsx';

export function Modal({ open, onClose, title, description, children, className }) {
  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('overflow-hidden');

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-10" role="presentation">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        onClick={() => onClose?.()}
      />
      <Card
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby={description ? 'modal-description' : undefined}
        className={clsx('relative max-w-lg w-full border-emerald-500/30 shadow-emerald-500/20', className)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            {title && (
              <h2 id="modal-title" className="text-xl font-semibold text-white">
                {title}
              </h2>
            )}
            {description && (
              <p id="modal-description" className="text-sm text-neutral-300">
                {description}
              </p>
            )}
          </div>
          <Button size="sm" variant="ghost" aria-label="Close modal" onClick={() => onClose?.()}>
            Close
          </Button>
        </div>
        <div className="mt-4 text-sm text-neutral-100 space-y-3">{children}</div>
      </Card>
    </div>,
    document.body
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
