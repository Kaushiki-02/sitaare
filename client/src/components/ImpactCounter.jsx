import React from 'react';
import CountUp from 'react-countup';
import { FaChild, FaHandHoldingHeart, FaUserFriends } from 'react-icons/fa';

const stats = [
  {
    icon: <FaChild className="text-pink-500 text-4xl sm:text-3xl" />,
    label: 'Girls Empowered',
    value: 120,
  },
  {
    icon: <FaHandHoldingHeart className="text-blue-500 text-4xl sm:text-3xl" />,
    label: 'Donations Received',
    value: 350,
  },
  {
    icon: <FaUserFriends className="text-green-500 text-4xl sm:text-3xl" />,
    label: 'Volunteers Joined',
    value: 45,
  },
];

const ImpactCounter = () => (
  <div className="flex flex-col sm:flex-row justify-center items-center gap-y-3 sm:gap-y-0 sm:gap-x-3 py-2">
    {stats.map((stat, idx) => (
      <div
        key={idx}
        className="group bg-white/60 backdrop-blur-md rounded-3xl p-3 w-48 h-32 sm:w-56 sm:h-40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-pink-100 flex flex-col items-center justify-between"
      >
        {stat.icon}
        <span className="text-4xl font-black mt-2 mb-3 text-pink-600 group-hover:scale-110 transition-transform duration-300">
          <CountUp end={stat.value} duration={2} />
        </span>
        <span className="text-gray-600 font-medium uppercase tracking-wider text-sm text-center">{stat.label}</span>
      </div>
    ))}
  </div>
);

export default ImpactCounter; 