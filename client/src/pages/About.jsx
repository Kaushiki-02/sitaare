import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-yellow-800 mb-10"
      >
        About Project Sitaare
      </motion.h1>

      {/* Vision & Mission */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-yellow-700 mb-4">🌟 Vision</h2>
        <p className="text-lg mb-6 leading-relaxed">
          To nurture, protect, and empower vulnerable girls in India — giving them not just shelter, but a home of hope, care, and opportunity. Project Sitaare envisions a future where every girl can thrive and shine as a confident, educated, and self-reliant woman.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-700 mb-4">🎯 Mission</h2>
        <p className="text-lg leading-relaxed">
          We are committed to providing long-term residential care, education, healthcare, emotional support, and life skills to underprivileged girls. Through structured programs, loving care, and community engagement, we aim to raise strong, capable, and independent women who break the cycle of poverty.
        </p>
      </section>

      {/* Why Project Sitaare */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-yellow-700 mb-6 text-center">
          Why Project Sitaare?
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 leading-loose">
          <li>Girls-first approach focused on holistic development</li>
          <li>Safe, nurturing residential environment</li>
          <li>Access to quality education and life skills</li>
          <li>Healthcare, mental wellness, and emotional support</li>
          <li>Mentorship, career guidance, and future planning</li>
        </ul>
      </section>

      {/* Signature Quote */}
      <section className="text-center mt-12">
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="italic text-xl text-yellow-800 font-medium border-l-4 border-yellow-500 pl-4 mx-auto max-w-2xl"
        >
          “Raising strong girls, building bright futures.”
        </motion.blockquote>
      </section>
    </div>
  );
};

export default About;
