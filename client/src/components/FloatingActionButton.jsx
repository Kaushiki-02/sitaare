import React from 'react';
import { FaEnvelope, FaRupeeSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FloatingActionButton = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-3">
      <button
        aria-label="Contact Us"
        onClick={handleContact}
        className="bg-[#1782BC] hover:bg-[#4AD8C7] text-white p-3 rounded-full shadow-lg focus:outline-none flex items-center justify-center"
      >
        <FaEnvelope size={22} />
      </button>
      <button
        aria-label="Donate"
        onClick={() => navigate('/donate')}
        className="bg-[#BC1782] hover:bg-[#E94BA2] text-white p-3 rounded-full shadow-lg focus:outline-none flex items-center justify-center"
      >
        <FaRupeeSign size={22} />
      </button>
    </div>
  );
};

export default FloatingActionButton; 