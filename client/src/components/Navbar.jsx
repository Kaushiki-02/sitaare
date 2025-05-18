import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.jpg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    'Home', 'About', 'Beneficiaries', 'Donate',
    'Partners', 'Volunteer', 'Contact', 'Provide', 'WhyJoin'
  ];

  return (
    <nav className="bg-light text-primaryDark shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo Link */}
        <Link to="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
          <img src={logo} alt="Project Sitaare" className="h-10 sm:h-12" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="hover:text-primary transition-colors duration-200"
            >
              {item.replace('-', ' ')}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-primary hover:bg-primaryLight text-white p-2 rounded-md transition"
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-softBg px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="block py-1 px-2 rounded hover:bg-babyPink hover:text-primaryDark transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.replace('-', ' ')}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
