import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { CmsDemoPage } from './CmsDemoPage';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('CmsDemoPage', () => {
  const items = [
    {
      id: '1',
      title: 'Composable UI',
      description: 'Build pages with CMS-driven data.',
      image: '/img/one.jpg',
      category: 'Guides',
      updated: '1 day ago',
      cta: 'Read more',
    },
    {
      id: '2',
      title: 'Content pipeline',
      description: 'Keep marketing copy fresh.',
      image: '/img/two.jpg',
      category: 'Case study',
      updated: '2 days ago',
      cta: 'View details',
    },
  ];

  it('fetches CMS data and renders items on success', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ items }),
    });

    vi.stubGlobal('fetch', fetchMock);

    render(<CmsDemoPage />);

    await waitFor(() => expect(fetchMock).toHaveBeenCalled());
    const [url] = fetchMock.mock.calls[0];
    expect(url).toContain('public/cms/data.json');

    expect(await screen.findByText('Composable UI')).toBeInTheDocument();
    expect(screen.getByText('Content pipeline')).toBeInTheDocument();
    expect(screen.queryByText('Loading content...')).not.toBeInTheDocument();
  });

  it('shows an error message when the fetch fails', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Server error',
      json: () => Promise.resolve({}),
    });

    vi.stubGlobal('fetch', fetchMock);

    render(<CmsDemoPage />);

    expect(await screen.findByText('Unable to load CMS data')).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
