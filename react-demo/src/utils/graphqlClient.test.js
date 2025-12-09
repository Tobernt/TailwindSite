import { afterEach, describe, expect, it, vi } from 'vitest';
import { createGraphQLClient } from './graphqlClient';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('createGraphQLClient', () => {
  it('posts the query and returns parsed data', async () => {
    const payload = { data: { posts: [{ id: 1, title: 'Demo' }] } };
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: () => Promise.resolve(payload),
    });

    vi.stubGlobal('fetch', fetchMock);

    const client = createGraphQLClient('/cms');
    const data = await client('query Test', { first: 5 });

    expect(fetchMock).toHaveBeenCalledWith('/cms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query: 'query Test', variables: { first: 5 } }),
    });
    expect(data).toEqual(payload.data);
  });

  it('throws an error when the response is not ok', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
      json: () => Promise.resolve({ errors: [{ message: 'Boom' }] }),
    });

    vi.stubGlobal('fetch', fetchMock);

    const client = createGraphQLClient('/cms');
    await expect(client('query')).rejects.toThrow('500 Internal Server Error: Boom');
  });
});
