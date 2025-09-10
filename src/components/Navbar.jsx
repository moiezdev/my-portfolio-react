import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import SideLinks from './ui/SideLinks';
import Logo from './ui/Logo';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const navbtns = [
    { id: 1, name: 'home', link: '/' },
    { id: 2, name: 'works', link: '/works' },
    { id: 3, name: 'about-me', link: '/about' },
    { id: 4, name: 'contact', link: '/contact' },
  ];

  // Swipe detection
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].clientX;
      const deltaX = touchStartX.current - touchEndX.current;

      if (deltaX > 50) {
        // swipe left → open menu
        setNavOpen(true);
      }
      if (deltaX < -50) {
        // swipe right → close menu
        setNavOpen(false);
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <nav className="p-4 pb-3 fixed w-full top-0 left-0 z-30 bg-gray-b">
      <SideLinks />
      <div className="app-container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white font-bold flex items-center gap-1">
            <Logo size={35} staticLogo={true} />
            MoizDev
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navbtns.map((btn) => (
            <li key={btn.id}>
              <NavLink
                to={btn.link}
                className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-white')}
              >
                <span className="text-primary">#</span>
                {btn.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="md:hidden text-white focus:outline-none z-40"
        >
          {navOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Overlay background */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          navOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setNavOpen(false)}
      />

      {/* SideNav */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-b shadow-lg transform transition-transform duration-500 ease-in-out ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col p-6 space-y-6 text-lg mt-7">
          {navbtns.map((btn) => (
            <li key={btn.id}>
              <NavLink
                to={btn.link}
                onClick={() => setNavOpen(false)} // close on click
                className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-white')}
              >
                <span className="text-primary">#</span>
                {btn.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
