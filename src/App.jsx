import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
import ParallaxBackground from './components/ui/ParallaxBackground';

// --- import pages with lazy loading ---

const Home = lazy(() => import('./pages/Index'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ProjectDetail = lazy(() => import('./pages/ProjectsDetails'));

// Component of the pages

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <Navbar />
        <div className="relative z-0 overflow-hidden">
          <ParallaxBackground imageUrl={'/background.png'} />
          <Suspense fallback={<Loading />}>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Projects />} />
              <Route path="/works/:id" element={<ProjectDetail />} />
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
