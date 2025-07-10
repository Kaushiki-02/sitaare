import React from 'react';
import { FaEnvelope, FaRupeeSign, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FloatingActionButton = ({ starCursorEnabled, setStarCursorEnabled }) => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-3 hidden sm:flex">
      {/* Star Cursor Toggle Button */}
      <div className="relative group flex items-center">
        <button
          aria-label={starCursorEnabled ? 'Disable Star Cursor' : 'Enable Star Cursor'}
          title={starCursorEnabled ? 'Disable Star Cursor' : 'Enable Star Cursor'}
          onClick={() => setStarCursorEnabled((prev) => !prev)}
          className={`p-3 rounded-full shadow-lg focus:outline-none flex items-center justify-center transition-all border-2 ${starCursorEnabled ? 'bg-yellow-300 text-yellow-800 border-yellow-400' : 'bg-gray-200 text-gray-400 border-gray-300 hover:bg-yellow-100 hover:text-yellow-600'}`}
          style={{ fontSize: 22 }}
        >
          <FaStar />
        </button>
        <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-90 group-focus-within:opacity-90 transition-opacity pointer-events-none whitespace-nowrap shadow-md select-none">
          Toggle Star Cursor
        </span>
      </div>
      <div className="relative group flex items-center">
        <button
          aria-label="Contact Us"
          onClick={handleContact}
          className="bg-[#1782BC] hover:bg-[#4AD8C7] text-white p-3 rounded-full shadow-lg focus:outline-none flex items-center justify-center"
        >
          <FaEnvelope size={22} />
        </button>
        <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-90 group-focus-within:opacity-90 transition-opacity pointer-events-none whitespace-nowrap shadow-md select-none">
          Contact Us
        </span>
      </div>
      <div className="relative group flex items-center">
        <button
          aria-label="Donate"
          onClick={() => navigate('/donate')}
          className="bg-[#BC1782] hover:bg-[#E94BA2] text-white p-3 rounded-full shadow-lg focus:outline-none flex items-center justify-center"
        >
          <FaRupeeSign size={22} />
        </button>
        <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-90 group-focus-within:opacity-90 transition-opacity pointer-events-none whitespace-nowrap shadow-md select-none">
          Donate
        </span>
      </div>
    </div>
  );
};

export default FloatingActionButton; 