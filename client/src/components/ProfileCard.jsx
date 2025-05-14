// ProfileCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProfileCard = ({ profile }) => (
  <motion.div 
    className="bg-white shadow-lg rounded-lg p-4 m-2"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <img src={profile.photo} alt={profile.name} className="rounded-md mb-3 w-full h-48 object-cover" />
    <h3 className="text-xl font-semibold">{profile.name}</h3>
    <p className="text-gray-600">{profile.bio}</p>
    <p className={`mt-2 text-sm ${profile.status === 'Adopted' ? 'text-green-600' : 'text-yellow-600'}`}>{profile.status}</p>
  </motion.div>
);

export default ProfileCard;
