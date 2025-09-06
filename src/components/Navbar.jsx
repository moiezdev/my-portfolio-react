import { useState } from 'react';

const Navbar = () => {
  const [navbtns] = useState([
    { id: 1, name: 'home', link: '/' },
    { id: 2, name: 'works', link: '/projects' },
    { id: 3, name: 'about-me', link: '/about' },
    { id: 4, name: 'contact', link: '/contact' },
  ]);
  return (
    <nav className="p-4 pb-3 fixed w-full top-0 left-0 z-10 bg-gray-b shadow-xl shadow-gray-b">
      <div className="app-container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white font-bold">MoizDev</span>
        </div>
        <ul className="flex space-x-4">
          {navbtns.map((btn) => (
            <li key={btn.id}>
              <a href={btn.link} className="hover:text-white">
                <span className="text-primary">#</span>
                {btn.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
