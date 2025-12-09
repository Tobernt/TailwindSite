import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import clsx from 'clsx';

export function Accordion({ items, allowMultiple = false, defaultOpenIds = [] }) {
  const initialOpen = useMemo(() => new Set(defaultOpenIds), [defaultOpenIds]);
  const [openItems, setOpenItems] = useState(initialOpen);

  const toggleItem = (id) => {
    setOpenItems((current) => {
      const next = new Set(current);
      if (allowMultiple) {
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
      }

      return next.has(id) ? new Set() : new Set([id]);
    });
  };

  return (
    <div className="divide-y divide-neutral-800 rounded-2xl border border-neutral-800 bg-neutral-950/60">
      {items.map(({ id, title, content }) => {
        const isOpen = openItems.has(id);
        return (
          <div key={id}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-neutral-100 transition hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              aria-expanded={isOpen}
              aria-controls={`${id}-content`}
              onClick={() => toggleItem(id)}
            >
              <span>{title}</span>
              <span
                className={clsx(
                  'inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-700 text-xs text-neutral-300 transition',
                  isOpen && 'rotate-45 border-emerald-400 text-emerald-100'
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              id={`${id}-content`}
              className={clsx(
                'grid overflow-hidden px-5 text-sm text-neutral-200 transition-all',
                isOpen ? 'grid-rows-[1fr] py-3' : 'grid-rows-[0fr] py-0'
              )}
            >
              <div className="min-h-0 leading-relaxed text-neutral-300">{content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  allowMultiple: PropTypes.bool,
  defaultOpenIds: PropTypes.arrayOf(PropTypes.string),
};
