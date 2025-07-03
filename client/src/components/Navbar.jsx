import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    'Home',
    'Who We Are',
    'Our Aspirations',
    // 'Meet Our Sitaare',
    'Milestones',
    'Partner With Us',
    'Donate',
    'Volunteer & collaborate',
    'Contact Us',
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-lg shadow-md transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Project Sitaare" className="h-10 sm:h-12" />

        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`;
            const isActive = location.pathname === path;
            return (
              <Link
                key={item}
                to={path}
                className={`relative px-2 py-1 transition-all duration-300
                  ${isActive ? 'text-[#BC1782] font-semibold' : 'text-gray-700 hover:text-[#BC1782]'}
                `}
              >
                {item}
                {isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#BC1782] rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#BC1782] hover:bg-[#E94BA2] text-white p-2 rounded-lg shadow-md transition"
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md px-4 py-4 space-y-2 shadow-md">
          {navItems.map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <Link
                key={item}
                to={path}
                className="block text-base font-medium text-gray-800 hover:text-[#BC1782] transition duration-200 py-2 border-b"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
