import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-6 bg-yellow-100"
      >
        <h1 className="text-5xl font-bold text-yellow-800 mb-4">
          A Home Beyond Shelter
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          Project Sitaare is a nurturing orphanage and shelter home for girls aged 6 to 18,
          committed to providing a safe environment, holistic development, and a path to a brighter future.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/donate">
            <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-700 transition">
              Sponsor a Child
            </button>
          </Link>
          <Link to="/donate">
            <button className="border border-yellow-600 text-yellow-800 px-6 py-3 rounded-lg hover:bg-yellow-200 transition">
              Donate Now
            </button>
          </Link>
        </div>
      </motion.div>

      {/* About Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-yellow-800 mb-6">
          About Project Sitaare
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Driven by the belief that every child deserves love, dignity, and opportunity,
          Project Sitaare serves as a long-term home and growth hub for underprivileged girls.
          With structured care, education, health, nutrition, and emotional support, Sitaare aims to raise future-ready, confident, and empowered women.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Your support helps us fulfill dreams, provide quality education, and build a strong foundation for these shining stars. Be a part of their journey from survival to success.
        </p>
      </section>
    </div>
  );
};

export default Home;
