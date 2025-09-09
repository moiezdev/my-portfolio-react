import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading';
import Cursor from './components/ui/Cursor';
import RouteTransition from './components/functions/RouteTransition';
import ScrollToTop from './components/functions/ScrollToTop';

// --- lazy loaded pages ---
const Home = lazy(() => import('./pages/Index'));
const ProjectsPage = lazy(() => import('./pages/Projects'));
const AboutPage = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="relative z-0">
          <Suspense fallback={<Loading />}>
            <ScrollToTop />
            <Routes>
              {/* Wrap all routes inside RouteTransition */}
              {/* <Route element={<RouteTransition />}> */}
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
              {/* </Route> */}
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
