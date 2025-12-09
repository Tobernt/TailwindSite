import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders with primary variant and handles clicks', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-emerald-500');
    expect(button).toHaveAttribute('type', 'button');

    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('supports rendering as a link without setting a type', () => {
    render(
      <Button as="a" href="#" variant="ghost" className="custom">
        Visit link
      </Button>
    );

    const link = screen.getByRole('link', { name: /visit link/i });
    expect(link).toHaveClass('custom');
    expect(link).toHaveClass('border-neutral-700');
    expect(link).not.toHaveAttribute('type');
  });
});
