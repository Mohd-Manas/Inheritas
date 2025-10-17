import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import LoadingSpinner from './components/Loading/LoadingSpinner';

const Intro = lazy(() => import('./sections/Introduction/Intro'));
const Needs = lazy(() => import('./sections/Needs/Needs'));
const Help = lazy(() => import('./sections/Help/Help'));
const Costs = lazy(() => import('./sections/Costs/Costs'));
const Contact = lazy(() => import('./sections/Contact/Contact'));
const About = lazy(() => import('./sections/About/About'));
const WillsForNonMuslims = lazy(() => import('./sections/WillNonMus/WillsForNonMuslims'));
const ShariaCompliantWills = lazy(() => import('./sections/ShariaCompliantWills/ShariaCompliantWills'));
const Services = lazy(() => import('./sections/Services/Services'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <main>
      <Suspense fallback={<LoadingSpinner size="lg" className="py-20" />}>
        <Intro />
        <Needs />
        <Help />
        <Costs />
      </Suspense>
    </main>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<LoadingSpinner size="lg" className="min-h-screen flex items-center justify-center" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/wills-non-muslims" element={<WillsForNonMuslims />} />
              <Route path="/sharia-wills" element={<ShariaCompliantWills />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
