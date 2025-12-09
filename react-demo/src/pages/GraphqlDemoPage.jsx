import { useMemo, useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { createGraphQLClient } from '../utils/graphqlClient';

const defaultQuery = `# Query countries by continent
query CountriesByContinent($code: ID!) {
  continent(code: $code) {
    name
    countries {
      code
      name
      capital
      emoji
    }
  }
}`;

const client = createGraphQLClient('https://countries.trevorblades.com/');

export default function GraphqlDemoPage() {
  const [query, setQuery] = useState(defaultQuery);
  const [variables, setVariables] = useState('{"code": "EU"}');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const parsedVariables = useMemo(() => {
    try {
      return JSON.parse(variables || '{}');
    } catch (parseError) {
      return null;
    }
  }, [variables]);

  const runQuery = async () => {
    setIsLoading(true);
    setError('');
    setResult('');

    if (!parsedVariables) {
      setError('Variables must be valid JSON.');
      setIsLoading(false);
      return;
    }

    try {
      const data = await client(query, parsedVariables);
      setResult(JSON.stringify(data, null, 2));
    } catch (requestError) {
      setError(requestError.message || 'Unexpected error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">GraphQL playground</p>
        <h1 className="text-4xl font-bold text-white">Query public country data</h1>
        <p className="max-w-3xl text-neutral-300">
          Interact with the Countries GraphQL API using an in-browser client. Update the query or variables, execute the request,
          and inspect the JSON response without leaving the page.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card tone="default" className="h-full border-neutral-800/80 bg-neutral-950/70">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-neutral-400">GraphQL query</p>
                <h2 className="text-xl font-semibold text-white">Editable operation</h2>
              </div>
              <Button variant="ghost" onClick={() => setQuery(defaultQuery)}>
                Reset to default
              </Button>
            </div>
            <label className="block space-y-2">
              <span className="text-sm text-neutral-300">Query</span>
              <textarea
                className="min-h-[220px] w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 font-mono text-sm text-neutral-100 shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <label className="block space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm text-neutral-300">Variables (JSON)</span>
                {!parsedVariables && <span className="text-xs font-medium text-red-400">Invalid JSON</span>}
              </div>
              <textarea
                className="min-h-[100px] w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 font-mono text-sm text-neutral-100 shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                value={variables}
                onChange={(event) => setVariables(event.target.value)}
              />
            </label>
            <div className="flex flex-wrap items-center gap-3">
              <Button onClick={runQuery} disabled={isLoading || !parsedVariables}>
                {isLoading ? 'Running...' : 'Run query'}
              </Button>
              <p className="text-xs text-neutral-400">Endpoint: https://countries.trevorblades.com/</p>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          <Card tone="accent" className="h-full border-emerald-500/60 bg-emerald-500/10">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-emerald-100">Response viewer</p>
                <h2 className="text-xl font-semibold text-white">Results</h2>
              </div>
              <Button variant="ghost" onClick={() => setResult('')}>
                Clear
              </Button>
            </div>
            {error && (
              <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-100">
                {error}
              </div>
            )}
            <pre className="max-h-[420px] overflow-auto rounded-xl border border-emerald-500/20 bg-neutral-950/80 p-4 text-sm text-emerald-50 shadow-inner">
              {result || 'Run a query to see results here.'}
            </pre>
          </Card>

          <Card tone="info" className="border-blue-400/50 bg-blue-500/10">
            <h2 className="mb-1 text-lg font-semibold text-white">Tips</h2>
            <ul className="list-disc space-y-1 pl-5 text-sm text-blue-50">
              <li>Swap the continent code (e.g., "AF", "AS", "NA") to explore different regions.</li>
              <li>Query single countries: {`{ country(code: "BR") { name currency languages { name } } }`}</li>
              <li>Errors from the API or invalid JSON variables will be shown above the results.</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
