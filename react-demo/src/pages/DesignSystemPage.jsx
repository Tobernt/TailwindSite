import { useState } from 'react';
import { Accordion, Badge, Button, Card, Input, Modal } from 'design-system';

function ComponentShowcase({ title, description, code, notes, children }) {
  return (
    <section className="grid gap-4 rounded-3xl border border-neutral-800 bg-neutral-950/70 p-6 shadow-2xl shadow-black/30">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Design system</p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        <p className="text-sm text-neutral-300">{description}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-3 rounded-2xl border border-neutral-800 bg-neutral-900/80 p-4">{children}</div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Code sample</p>
          <pre className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 text-xs text-emerald-50 shadow-inner shadow-black/30">
            <code className="whitespace-pre-wrap break-words font-mono leading-relaxed">{code}</code>
          </pre>
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Accessibility</p>
        <ul className="mt-2 space-y-1 text-sm text-neutral-100 list-disc list-inside">
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function DesignSystemPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const accordionItems = [
    {
      id: 'a11y',
      title: 'Focusable buttons',
      content: 'Each toggle uses aria-expanded to communicate state and preserves focus outlines for keyboard navigation.',
    },
    {
      id: 'feedback',
      title: 'Animated content',
      content: 'Panels animate height changes while keeping text legible with balanced contrast and spacing.',
    },
    {
      id: 'layout',
      title: 'Layered surface',
      content: 'Borders and subtle backgrounds separate items without removing the shared container semantics.',
    },
  ];

  return (
    <div className="space-y-8">
      <header className="grid gap-4 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-neutral-950 via-neutral-950 to-emerald-900/20 p-8 shadow-2xl shadow-emerald-800/40">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">UI toolkit</p>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Reusable design-system components</h1>
        <p className="text-lg text-neutral-200 sm:max-w-3xl">
          Explore the shared Tailwind components that power the site. Each example shows the live UI, the JSX you can copy, and notes on accessibility roles and focus states.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button as="a" href="/react-demo/" variant="outline">
            Back to React demo
          </Button>
          <Button as="a" href="https://github.com/" variant="ghost" className="border border-neutral-800">
            View repo structure
          </Button>
        </div>
      </header>

      <ComponentShowcase
        title="Buttons"
        description="Primary, secondary, ghost, and outline treatments with consistent padding and focus rings."
        code={`<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="outline" size="sm">Outline</Button>`}
        notes={[
          'Native button role preserved; focus-visible outlines use brand emerald color.',
          'Hover and active states rely on color contrast that passes WCAG AA on dark surfaces.',
          'Disabled state reduces opacity and cursor to signal non-interactive status.',
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline" size="sm">
            Outline sm
          </Button>
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="Badges"
        description="Compact status indicators for metadata or quick labels."
        code={`<Badge>Neutral</Badge>\n<Badge variant="success">Success</Badge>\n<Badge variant="warning">Warning</Badge>\n<Badge variant="info">Info</Badge>`}
        notes={[
          'Rendered as inline text with readable contrast and padding for touch targets.',
          'Uppercase styling aids scannability; variants rely on semantic color cues.',
          'Screen readers announce badge text naturally as part of the surrounding content.',
        ]}
      >
        <div className="flex flex-wrap gap-2">
          <Badge>Neutral</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="Cards"
        description="Framed content blocks with optional eyebrow, title, and footer slots."
        code={`<Card eyebrow="Overview" title="Layered surfaces" footer="Footer actions here">\n  Content goes here with natural spacing and neutral tones.\n</Card>`}
        notes={[
          'Semantic div container keeps headings and paragraph structure intact for screen readers.',
          'Borders and shadows separate cards while preserving readable color contrast.',
          'Padding ensures tap-friendly spacing for interactive children placed inside.',
        ]}
      >
        <Card eyebrow="Overview" title="Layered surfaces" footer={<span className="text-neutral-200">Footer actions here</span>}>
          Content goes here with natural spacing and neutral tones. Combine text, links, or buttons for rich layouts.
        </Card>
      </ComponentShowcase>

      <ComponentShowcase
        title="Inputs"
        description="Labeled text fields with helper and error messaging baked in."
        code={`<Input label="Email" type="email" placeholder="you@example.com" helperText="We\'ll never share your email." />\n<Input label="API key" type="text" placeholder="sk-..." error="Key is required" />`}
        notes={[
          'Label wraps the input so clicking text or helper associates focus correctly.',
          'aria-invalid and aria-describedby convey validation state and helper copy.',
          'Focus outlines use 2px emerald ring with offset for clear keyboard navigation.',
        ]}
      >
        <div className="grid gap-3">
          <Input label="Email" type="email" placeholder="you@example.com" helperText="We\'ll never share your email." />
          <Input label="API key" type="text" placeholder="sk-..." error="Key is required" />
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="Modal"
        description="Accessible dialog with portal rendering, escape-to-close, and overlay click support."
        code={`const [open, setOpen] = useState(false);\n\n<Button onClick={() => setOpen(true)}>Open modal</Button>\n<Modal\n  open={open}\n  onClose={() => setOpen(false)}\n  title="Dialog title"\n  description="Short helper copy."\n>\n  Modal body content.\n</Modal>`}
        notes={[
          'Renders with role="dialog" and aria-modal="true" on the Card wrapper.',
          'Escape key and overlay clicks call onClose; close button includes aria-label.',
          'Document body locking prevents background scroll when open, and focus outlines are preserved.',
        ]}
      >
        <div className="space-y-3">
          <Button onClick={() => setModalOpen(true)}>Open modal</Button>
          <p className="text-sm text-neutral-300">Modal renders into a portal anchored to document.body.</p>
        </div>
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Productivity boost"
          description="Keep focus within the dialog and close with Escape."
        >
          <p>
            This dialog reuses Card styling for depth and includes a built-in close button with focusable controls.
          </p>
        </Modal>
      </ComponentShowcase>

      <ComponentShowcase
        title="Accordion"
        description="Collapsible panels with animated height transitions and clear affordances."
        code={`<Accordion\n  items={[\n    { id: 'one', title: 'First', content: 'Details for the first item.' },\n    { id: 'two', title: 'Second', content: 'More descriptive copy.' },\n  ]}\n/>`}
        notes={[
          'Each trigger is a button with aria-expanded and aria-controls linking to its panel.',
          'Focus-visible rings highlight the active toggle; plus icon rotates to indicate state.',
          'Content region stays in the document flow for screen readers even while visually collapsed.',
        ]}
      >
        <Accordion items={accordionItems} defaultOpenIds={[accordionItems[0].id]} />
      </ComponentShowcase>
    </div>
  );
}
