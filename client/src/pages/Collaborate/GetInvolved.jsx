import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, HeartHandshake } from 'lucide-react';

const GetInvolved = () => {
  const [form, setForm] = useState({ name: '', email: '', interest: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✨ Thank you for your interest in volunteering with Project Sitaare!');
    setForm({ name: '', email: '', interest: '' });
  };

  return (
    <div className=" bg-gradient-to-br from-[#FBE6F3] to-[#FFF7FA] py-20 px-6 text-[#4B4B4B]">
      <motion.div
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-primaryDark">Volunteer & Collaborate</h1>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Bring your time, talents, and heart to help our Sitaare shine brighter. Whether it’s coding, music, mentoring, or self-defense — you can make a difference.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6 border border-[#F2D0EA]"
      >
        {/* Name */}
        <div>
          <label className=" font-medium mb-1 flex items-center gap-2 text-primaryDark">
            <User className="w-5 h-5" /> Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BC1782]"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label className=" font-medium mb-1 flex items-center gap-2 text-primaryDark">
            <Mail className="w-5 h-5" /> Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BC1782]"
            placeholder="Your email address"
          />
        </div>

        {/* Interest */}
        <div>
          <label className=" font-medium mb-1 flex items-center gap-2 text-primaryDark">
            <HeartHandshake className="w-5 h-5" /> Your Area of Interest
          </label>
          <textarea
            name="interest"
            value={form.interest}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Ex: Dance classes, mentoring teens, conducting workshops..."
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-[#BC1782]"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#BC1782] hover:bg-[#A90C6F] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
          >
            Submit & Connect
          </button>
        </div>
      </motion.form>

      {/* Inspiration Quote */}


      <motion.blockquote
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="italic text-xl text-[#7C0C55] text-center mt-12 font-medium border-l-4 border-[#E94BA2] pl-4 mx-auto max-w-2xl"
      >
        “Even a single star can light the dark sky — come help them shine.”
      </motion.blockquote>
    </div>
  );
};

export default GetInvolved;
