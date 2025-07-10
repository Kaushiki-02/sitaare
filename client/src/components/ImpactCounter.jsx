import React from 'react';
import CountUp from 'react-countup';
import { FaChild, FaHandHoldingHeart, FaUserFriends } from 'react-icons/fa';

const stats = [
  {
    icon: <FaChild className="text-pink-500 text-3xl" />,
    label: 'Girls Empowered',
    value: 120,
  },
  {
    icon: <FaHandHoldingHeart className="text-blue-500 text-3xl" />,
    label: 'Donations Received',
    value: 350,
  },
  {
    icon: <FaUserFriends className="text-green-500 text-3xl" />,
    label: 'Volunteers Joined',
    value: 45,
  },
];

const ImpactCounter = () => (
  <div className="flex flex-col sm:flex-row justify-center items-center gap-8 py-8">
    {stats.map((stat, idx) => (
      <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow-md px-8 py-6 min-w-[180px]">
        {stat.icon}
        <span className="text-4xl font-bold mt-2 text-gray-800">
          <CountUp end={stat.value} duration={2} />
        </span>
        <span className="text-md font-medium text-gray-500 mt-1 text-center">{stat.label}</span>
      </div>
    ))}
  </div>
);

export default ImpactCounter; 