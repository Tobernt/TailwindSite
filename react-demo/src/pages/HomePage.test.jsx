import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from './HomePage';

describe('CounterPanel toggle behavior', () => {
  it('toggles on and off through the switch and reset button', async () => {
    const user = userEvent.setup();

    render(<HomePage />);

    const statusLabel = () => screen.getByText(/enabled|disabled/i);
    expect(statusLabel().textContent).toBe('Enabled');

    const toggle = screen.getByRole('switch', { name: /toggle/i });
    await user.click(toggle);
    expect(statusLabel().textContent).toBe('Disabled');

    const turnOnButton = screen.getByRole('button', { name: /turn on/i });
    await user.click(turnOnButton);
    expect(statusLabel().textContent).toBe('Enabled');
  });
});
