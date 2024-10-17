import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Header.tsx
import Loading from './components/Loading'; // A loading component to show while lazy loading pages
import ErrorBoundary from './components/ErrorBoundary'; // To handle errors during lazy loading

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NoteFound')); // Page for 404 errors

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
