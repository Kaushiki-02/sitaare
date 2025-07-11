import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.png';
import hohLogo from '../assets/hoh_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Who we Are',
      sub: [
        { label: 'Purpose and Passion', path: '/who-we-are/purpose-and-passion' },
        { label: 'Founders Desk', path: '/who-we-are/founders-desk' },
      ],
     
    },
    {
      label: 'Meet Our Sitaare',
      path: '/meet-our-sitaare',
    },
    {
      label: 'Our Aspiration',
      path: '/our-aspiration',
    },
    {
      label: 'News & Events',
      path: '/news-and-events',
    },
    {
      label: 'Impact',
      sub: [
        { label: 'Milestones', path: '/impact/milestones' },
        { label: 'Success stories', path: '/impact/success-stories' },
      ],
     
    },
    {
      label: 'Partners',
      path: '/partners',
    },
    {
      label: 'Contact Us',
      path: '/contact-us',
    },
    {
      label: 'Collaborate',
      sub: [
        { label: 'Donate for a Cause', path: '/collaborate/donate-for-a-cause' },
        { label: 'Get Involved', path: '/collaborate/get-involved' },
        { label: 'Partner With us', path: '/collaborate/partner-with-us' },
        { label: 'Contribute Material', path: '/collaborate/contribute-material' },
      ],
      
    },
  ];

  return (
    <nav className="relative z-50 bg-softBg/90 backdrop-blur-lg shadow-md transition-all overflow-x-hidden">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-1 xs:px-2 sm:px-2 md:px-6 py-1.5 sm:py-2 md:py-3">
          {/* Logo */}
          <div className="flex items-center space-x-0.5 xs:space-x-1 sm:space-x-1.5 md:space-x-2">
            <a href="https://houseofhumanity.in/" target="_blank" rel="noopener noreferrer">
              <img src={hohLogo} alt="House of Humanity" className="h-6 xs:h-7 sm:h-8 md:h-10 transition duration-200 hover:drop-shadow-[0_0_12px_#FFD700]" />
            </a>
            <div className="h-5 xs:h-6 sm:h-7 md:h-8 border-l-2 border-gray-300 mx-0.5 xs:mx-1 sm:mx-1.5"></div>
            <Link to="/">
              <img src={logo} alt="Project Sitaare" className="h-6 xs:h-7 sm:h-8 md:h-10 transition duration-200 hover:drop-shadow-[0_0_12px_#e91e63]" />
            </Link>
          </div>
          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-x-1 xs:gap-x-1.5 sm:gap-x-2 lg:gap-x-4 text-[10px] xs:text-xs sm:text-sm md:text-base font-medium ml-0.5 xs:ml-2 sm:ml-3 md:ml-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.sub && item.sub.some(sub => location.pathname === sub.path));
              return (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.path}
                    className={`relative px-1 xs:px-2 sm:px-2 md:px-3 py-0.5 xs:py-1 sm:py-1 md:py-1.5 rounded-lg flex items-center gap-1 transition-all duration-300 ${isActive ? 'text-primary font-bold bg-primaryLight border-b-2 border-primary' : 'text-primary hover:text-primaryDark hover:bg-primaryLight'}`}
                    tabIndex={0}
                  >
                    {item.label}
                    {item.sub && (
                      <svg className="ml-1 w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    )}
                  </Link>
                  {item.sub && (
                    <div className="absolute left-0 mt-2 w-36 xs:w-40 sm:w-44 md:w-48 bg-white border border-primaryLight rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50">
                      {item.sub.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className={`block px-3 sm:px-4 py-2 text-primary hover:text-primaryDark hover:bg-primaryLight transition-all duration-200 ${location.pathname === sub.path ? 'font-bold bg-primaryLight' : ''}`}
                          tabIndex={0}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {/* Mobile Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-primary hover:bg-primaryDark text-white p-2 rounded-lg shadow-md transition w-9 h-9 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-softBg/95 backdrop-blur-md px-2 xs:px-3 py-4 space-y-2 shadow-2xl border-t border-primaryLight z-50 overflow-y-auto">
          <div className="max-w-md mx-auto">
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary hover:text-primaryDark p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Close menu"
              >
                <HiX className="h-7 w-7" />
              </button>
            </div>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.sub && item.sub.some(sub => location.pathname === sub.path));
              return (
                <div key={item.label}>
                  <Link
                    to={item.path}
                    className={`block text-sm xs:text-base font-medium py-2 border-b flex items-center gap-1 transition duration-200 ${isActive ? 'text-primary font-bold border-primary' : 'text-primary hover:text-primaryDark'}`}
                    onClick={() => setIsOpen(false)}
                    tabIndex={0}
                  >
                    {item.label}
                    {item.sub && (
                      <svg className="ml-1 w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    )}
                  </Link>
                  {item.sub && (
                    <div className="pl-4">
                      {item.sub.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className={`block text-xs xs:text-sm py-1 border-b transition duration-200 ${location.pathname === sub.path ? 'text-primary font-bold border-primary' : 'text-primary hover:text-primaryDark'}`}
                          onClick={() => setIsOpen(false)}
                          tabIndex={0}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
