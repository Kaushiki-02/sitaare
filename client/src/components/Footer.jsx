import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-rose-900 text-sm pt-6 pb-8 px-4 mt-auto shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Copyright */}
        <p className="text-center md:text-left font-medium">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Project Sitaare</span> • All rights reserved
        </p>

        {/* Right: Footer Nav */}
        <div className="flex space-x-4 text-sm font-semibold">
          <Link to="/about" className="hover:text-rose-600 transition-colors duration-200">
            About
          </Link>
          <Link to="/donate" className="hover:text-rose-600 transition-colors duration-200">
            Donate
          </Link>
          <Link to="/contact" className="hover:text-rose-600 transition-colors duration-200">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
