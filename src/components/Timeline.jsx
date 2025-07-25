import React from 'react';
import { FaSeedling, FaHome, FaStar, FaUsers } from 'react-icons/fa';

const milestones = [
  {
    icon: <FaSeedling className="text-green-500 text-xl" />,
    title: 'Vision Conceived',
    // date: '2018',
    desc: 'The idea for Sitaare was born from a personal journey.'
  },
  {
    icon: <FaHome className="text-blue-500 text-xl" />,
    title: 'Home Established',
    // date: '2020',
    desc: 'First girls welcomed into the Sitaare home.'
  },
  {
    icon: <FaStar className="text-pink-500 text-xl" />,
    title: 'Milestone Achieved',
    // date: '2022',
    desc: 'Over 25 girls empowered through holistic care.'
  },
  {
    icon: <FaUsers className="text-yellow-500 text-xl" />,
    title: 'Community Grows',
    // date: '2024',
    desc: 'Volunteer and donor community expands.'
  },
];

const Timeline = () => (
  <div className="max-w-2xl mx-auto py-8">
    <div className="relative pl-12 sm:pl-8">
      {/* Mobile vertical bar */}
      <div className="absolute top-0 left-2 w-1 h-full bg-[#E94BA2] rounded block sm:hidden" style={{ zIndex: 0 }}></div>
      {/* Desktop vertical bar */}
      <div className="absolute top-0 sm:-left-10 w-1 h-full bg-[#E94BA2] rounded hidden sm:block" style={{ zIndex: 0 }}></div>
      {milestones.map((m, idx) => (
        <div key={idx} className="mb-10 last:mb-0 flex items-start">
          <div
            className="absolute left-2 sm:-left-10 bg-white rounded-full p-2 shadow-md"
            data-aos="zoom-in"
            data-aos-delay={idx * 200}
            data-aos-duration="700"
          >
            {m.icon}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay={idx * 200 + 100}
            data-aos-duration="700"
          >
            <h4 className="text-lg font-bold text-[#BC1782]">{m.title}</h4>
            <p className="text-md text-gray-700 mt-1">{m.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Timeline; 