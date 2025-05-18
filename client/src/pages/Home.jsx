import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import starsAnimation from "../assets/stars.json";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#4B4B4B]">
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center py-20 px-4 sm:px-8 bg-gradient-to-br from-[#FFCAF0] via-[#F1E6EE] to-[#E94BA2]"
      >
        {/* Floating Stars */}
        <Lottie
          animationData={starsAnimation}
          loop
          autoplay
          style={{ width: '6rem', height: '6rem' }}
          className="absolute top-4 right-4 w-32 h-32 opacity-60 hidden md:block pointer-events-none"
          speed={0.3}
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#7C0C55] mb-6 drop-shadow-sm">
          A Home Beyond Shelter
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-[#4B4B4B] leading-relaxed">
          Project Sitaare is a nurturing orphanage and shelter home for girls aged 6 to 18,
          committed to providing a safe environment, holistic development, and a path to a brighter future.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/donate">
            <button className="bg-[#BC1782] hover:bg-[#E94BA2] text-white font-semibold px-6 py-2 rounded-md shadow-md transition">
              Sponsor a Child
            </button>
          </Link>
          <Link to="/donate">
            <button className="bg-[#1782BC] hover:bg-[#4AD8C7] text-white font-semibold px-6 py-2 rounded-md shadow-md transition">
              Donate Now
            </button>
          </Link>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#7C0C55] mb-8">
          About Project Sitaare
        </h2>
        <div className="text-lg text-[#4B4B4B] leading-relaxed space-y-6">
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
