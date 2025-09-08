import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Component } from 'react';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading';
import Cursor from './components/ui/Cursor';

// --- import pages with lazy loading ---

const Home = lazy(() => import('./pages/Index'));
const ProjectsPage = lazy(() => import('./pages/Projects'));
const AboutPage = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
import ScrollToTop from './components/functions/ScrollToTop';

// Component of the pages

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="relative z-0">
          <Suspense fallback={<Loading />}>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
      <Cursor size={25} />
    </Router>
  );
}

export default App;
