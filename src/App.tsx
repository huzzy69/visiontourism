import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { LoadingScreen } from './components/LoadingScreen';

// Lazy load routed pages
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const OneDayTrips = lazy(() => import('./pages/OneDayTrips').then(module => ({ default: module.OneDayTrips })));
const EnglandScotlandTour = lazy(() => import('./pages/EnglandScotlandTour').then(module => ({ default: module.EnglandScotlandTour })));
const FamousSights = lazy(() => import('./pages/FamousSights').then(module => ({ default: module.FamousSights })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Book = lazy(() => import('./pages/Book').then(module => ({ default: module.Book })));

// Component to scroll window to top on location path changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Main Routing and Layout Coordinator
export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Dynamic Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="min-h-screen">
        <Suspense fallback={<LoadingScreen isLoading={true} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/1-day-trips" element={<OneDayTrips />} />
            <Route path="/england-scotland-4-days" element={<EnglandScotlandTour />} />
            <Route path="/famous-sights" element={<FamousSights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Book />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Helpers */}
      <BackToTop />
    </Router>
  );
};
