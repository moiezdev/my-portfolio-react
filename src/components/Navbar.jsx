import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SideLinks from './ui/SideLinks';
import Logo from './ui/Logo';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navbtns = [
    { id: 1, name: 'home', link: '/' },
    { id: 2, name: 'works', link: '/works' },
    { id: 3, name: 'about-me', link: '/about' },
    { id: 4, name: 'contact', link: '/contact' },
  ];

  return (
    <nav className="p-4 pb-3 fixed w-full top-0 left-0 z-20 bg-gray-b">
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
          className="md:hidden text-white focus:outline-none"
        >
          {navOpen ? (
            // X icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Mobile Menu Drawer */}
      {navOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-b shadow-lg">
          <ul className="flex flex-col space-y-4 p-4">
            {navbtns.map((btn) => (
              <li key={btn.id}>
                <NavLink
                  to={btn.link}
                  onClick={() => setNavOpen(false)} // close on click
                  className={({ isActive }) =>
                    isActive ? 'text-white block' : 'hover:text-white block'
                  }
                >
                  <span className="text-primary">#</span>
                  {btn.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
