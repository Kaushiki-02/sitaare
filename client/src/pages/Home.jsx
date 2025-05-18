import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import starsAnimation from "../assets/stars.json";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-4 sm:px-8 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100"
      >
        {/* Floating Stars */}
        <Lottie
          animationData={starsAnimation}
          loop
           autoplay
           style={{
              width: '6rem', // ~96px
              height: '6rem',
            }}
          className="absolute top-4 right-4 w-32 h-32 opacity-60 hidden md:block pointer-events-none"
          speed={0.3}
        />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-800 mb-6 drop-shadow-sm">
          A Home Beyond Shelter
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-700 leading-relaxed">
          Project Sitaare is a nurturing orphanage and shelter home for girls aged 6 to 18,
          committed to providing a safe environment, holistic development, and a path to a brighter future.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/donate">
            <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-700 transition duration-200">
              Sponsor a Child
            </button>
          </Link>
          <Link to="/donate">
            <button className="border border-yellow-600 text-yellow-800 px-6 py-3 rounded-lg hover:bg-yellow-200 transition duration-200">
              Donate Now
            </button>
          </Link>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-800 mb-8">
          About Project Sitaare
        </h2>
        <div className="text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            Driven by the belief that every child deserves love, dignity, and opportunity,
            Project Sitaare serves as a long-term home and growth hub for underprivileged girls.
            With structured care, education, health, nutrition, and emotional support, Sitaare aims to raise future-ready, confident, and empowered women.
          </p>
          <p>
            Your support helps us fulfill dreams, provide quality education, and build a strong foundation for these shining stars.
            Be a part of their journey from survival to success.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
