import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('applies primary variant styles and defaults type for button elements', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('bg-emerald-500', 'text-neutral-950');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('forwards disabled prop and custom classes', () => {
    render(
      <Button disabled className="custom-class">
        Disabled
      </Button>
    );

    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('custom-class');
  });

  it('supports polymorphic rendering with variant styles', () => {
    render(
      <Button as="a" href="/docs" variant="ghost">
        Docs link
      </Button>
    );

    const link = screen.getByRole('link', { name: /docs link/i });
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/docs');
    expect(link).not.toHaveAttribute('type');
    expect(link).toHaveClass('border', 'hover:bg-neutral-900');
  });
});
