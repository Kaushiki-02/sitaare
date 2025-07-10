import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.png';
import hohLogo from '../assets/hoh_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    'Home',
    'Who We Are',
    'Our Aspirations',
    'Milestones',
    'Partner With Us',
    'Donate',
    'Volunteer & collaborate',
    'Contact Us',
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-lg shadow-md transition-all">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="https://houseofhumanity.in/" target="_blank" rel="noopener noreferrer">
              <img src={hohLogo} alt="House of Humanity" className="h-14 sm:h-16 transition duration-200 hover:drop-shadow-[0_0_12px_#FFD700]" />
            </a>
            <div className="h-8 border-l-2 border-gray-300 mx-2"></div>
            <Link to="/">
              <img src={logo} alt="Project Sitaare" className="h-14 sm:h-16 transition duration-200 hover:drop-shadow-[0_0_12px_#BC1782]" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-5 text-sm font-medium">
            {navItems.map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`;
              const isActive = location.pathname === path;
              return (
                <Link
                  key={item}
                  to={path}
                  className={`relative px-3 py-1 rounded-lg transition-all duration-300
                  ${isActive ? 'text-[#BC1782] font-bold bg-pink-50' : 'text-gray-700 hover:text-[#BC1782] hover:bg-pink-50'}
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
