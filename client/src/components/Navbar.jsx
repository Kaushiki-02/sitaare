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
      label: 'Who we Are',
      sub: [
        { label: 'Purpose and Passion', path: '/who-we-are/purpose-and-passion' },
        { label: 'Founders Desk', path: '/who-we-are/founders-desk' },
      ],
     
    },
    {
      label: 'Meet Out Sitaare',
      path: '/meet-out-sitaare',
    },
    {
      label: 'Our Aspiration',
      path: '/our-aspiration',
    },
    {
      label: 'News and Events',
      sub: [
        { label: 'Media', path: '/news-and-events/media' },
        { label: 'Events', path: '/news-and-events/events' },
      ],
     
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
    <nav className="sticky top-0 z-50 bg-primaryLight/90 backdrop-blur-lg shadow-md transition-all">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="https://houseofhumanity.in/" target="_blank" rel="noopener noreferrer">
              <img src={hohLogo} alt="House of Humanity" className="h-14 sm:h-16 transition duration-200 hover:drop-shadow-[0_0_12px_#FFD700]" />
            </a>
            <div className="h-8 border-l-2 border-gray-300 mx-2"></div>
            <Link to="/">
              <img src={logo} alt="Project Sitaare" className="h-14 sm:h-16 transition duration-200 hover:drop-shadow-[0_0_12px_#e91e63]" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-5 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.sub && item.sub.some(sub => location.pathname === sub.path));
              return (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.path}
                    className={`relative px-3 py-1 rounded-lg flex items-center gap-1 transition-all duration-300 ${isActive ? 'text-primary font-bold bg-primaryLight border-b-2 border-primary' : 'text-primary hover:text-primaryDark hover:bg-primaryLight'}`}
                  >
                    {item.label}
                    {item.sub && (
                      <svg className="ml-1 w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    )}
                  </Link>
                  {item.sub && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-primaryLight rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50">
                      {item.sub.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className={`block px-4 py-2 text-primary hover:text-primaryDark hover:bg-primaryLight transition-all duration-200 ${location.pathname === sub.path ? 'font-bold bg-primaryLight' : ''}`}
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
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-primary hover:bg-primaryDark text-white p-2 rounded-lg shadow-md transition"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden bg-primaryLight/95 backdrop-blur-md px-4 py-4 space-y-2 shadow-md">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.sub && item.sub.some(sub => location.pathname === sub.path));
            return (
              <div key={item.label}>
                <Link
                  to={item.path}
                  className={`block text-base font-medium py-2 border-b flex items-center gap-1 transition duration-200 ${isActive ? 'text-primary font-bold border-primary' : 'text-primary hover:text-primaryDark'}`}
                  onClick={() => setIsOpen(false)}
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
                        className={`block text-sm py-1 border-b transition duration-200 ${location.pathname === sub.path ? 'text-primary font-bold border-primary' : 'text-primary hover:text-primaryDark'}`}
                        onClick={() => setIsOpen(false)}
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
      )}
    </nav>
  );
};

export default Navbar;
