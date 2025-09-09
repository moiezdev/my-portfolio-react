import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Component } from 'react';
import { Suspense, lazy } from 'react';

// --- import Components ----

import Index from './pages/Index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Cursor from './components/ui/Cursor';
import ScrollToTop from './components/functions/ScrollToTop';

// --- import pages with lazy loading ---

const Home = lazy(() => import('./pages/Index'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
              <Route path="/works" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
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
