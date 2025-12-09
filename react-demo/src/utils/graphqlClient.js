const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

function formatGraphQLError(errors) {
  if (!errors || !errors.length) return null;
  const messages = errors.map((error) => error.message).filter(Boolean);
  return messages.length ? messages.join('\n') : null;
}

export function createGraphQLClient(endpoint) {
  return async function execute(query, variables = {}) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify({ query, variables }),
    });

    const payload = await response.json().catch(() => ({
      errors: [new Error('Unable to parse response')],
    }));

    if (!response.ok) {
      const message = formatGraphQLError(payload.errors) || 'Request failed';
      throw new Error(`${response.status} ${response.statusText}: ${message}`);
    }

    if (payload.errors?.length) {
      throw new Error(formatGraphQLError(payload.errors));
    }

    return payload.data;
  };
}
