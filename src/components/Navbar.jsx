import { useState } from 'react';
import { Link } from 'react-router-dom';
import SideLinks from './ui/SideLinks';
import Logo from './ui/Logo';

const Navbar = () => {
  const [navbtns] = useState([
    { id: 1, name: 'home', link: '/' },
    { id: 2, name: 'works', link: '/works' },
    { id: 3, name: 'about-me', link: '/about' },
    { id: 4, name: 'contact', link: '/contact' },
  ]);
  return (
    <nav className="p-4 pb-3 fixed w-full top-0 left-0 z-10 bg-gray-b">
      <SideLinks />
      <div className="app-container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white font-bold flex items-center gap-1">
            <Logo size={35} staticLogo={true} />
            MoizDev
          </span>
        </div>
        <ul className="flex space-x-4">
          {navbtns.map((btn) => (
            <li key={btn.id}>
              <Link to={btn.link} className="hover:text-white">
                <span className="text-primary">#</span>
                {btn.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
