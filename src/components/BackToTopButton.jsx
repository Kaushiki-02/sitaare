import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <button
      aria-label="Back to top"
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-[#BC1782] hover:bg-[#E94BA2] text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none"
    >
      <FaArrowUp size={22} />
    </button>
  ) : null;
};

export default BackToTopButton; 