import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import CmsDemoPage from './pages/CmsDemoPage';
import GraphqlDemoPage from './pages/GraphqlDemoPage';
import HomePage from './pages/HomePage';

function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-10 md:px-6 md:pt-12">{children}</main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/react-demo">
      <AppLayout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="cms-demo" element={<CmsDemoPage />} />
          <Route path="graphql-demo" element={<GraphqlDemoPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
