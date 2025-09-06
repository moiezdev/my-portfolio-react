import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Projects from './pages/Projects';
import Index from './pages/Index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'MoizDev | Portfolio';
  });
  return (
    <Router>
      <div>
        {/* Navbar (optional) */}
        {/* <Navbar /> */}
        <Navbar />
        <div className="relative z-0">
          <Routes>
            <Route path="/" element={<Index />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/works" element={<Projects />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
        <Footer />
        {/* Footer (optional) */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
