import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#4B4B4B] px-6 py-16">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-[#7C0C55] mb-10"
      >
        About Project Sitaare
      </motion.h1>

      {/* Vision & Mission */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-[#BC1782] mb-4">Vision</h2>
        <p className="text-lg mb-6 leading-relaxed">
          To create a world where every girl has the opportunity to dream, learn, and succeed—regardless of her past.
        </p>

        <h2 className="text-2xl font-semibold text-[#BC1782] mb-4">Mission</h2>
        <p className="text-lg leading-relaxed">
          To empower orphaned girls with the tools they need to become strong, independent women who contribute positively to society.
        </p>
        <ul className="list-disc pl-6 text-lg text-[#4B4B4B] leading-loose mt-4">
          <li>Provide a safe, loving home for 30+ girls</li>
          <li>Ensure 100% education and career readiness</li>
          <li>Equip girls with lifelong skills for financial independence</li>
          <li>Build a support system that fosters self-belief and success</li>
        </ul>
      </section>

      {/* Why Project Sitaare */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-[#BC1782] mb-6 text-center">
          Why Project Sitaare?
        </h2>
        <dl className="space-y-4">
          <div>
            <dt className="text-lg font-semibold text-[#E94BA2]">1. Education first</dt>
            <dd className="text-[#4B4B4B]">Full school support, digital literacy, and career guidance</dd>
          </div>
          <div>
            <dt className="text-lg font-semibold text-[#E94BA2]">2. More than a shelter</dt>
            <dd className="text-[#4B4B4B]">A nurturing home where girls thrive, not just survive</dd>
          </div>
          <div>
            <dt className="text-lg font-semibold text-[#E94BA2]">3. Health & well-being</dt>
            <dd className="text-[#4B4B4B]">Nutritious meals, medical care, and emotional wellness programs</dd>
          </div>
          <div>
            <dt className="text-lg font-semibold text-[#E94BA2]">4. Life skills & self-confidence</dt>
            <dd className="text-[#4B4B4B]">Leadership training, vocational skills, sports, and self-defense</dd>
          </div>
        </dl>
      </section>

      {/* Signature Quote */}
      <section className="text-center mt-12">
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="italic text-xl text-[#7C0C55] font-medium border-l-4 border-[#E94BA2] pl-4 mx-auto max-w-2xl"
        >
          “Raising strong girls, building bright futures.”
        </motion.blockquote>
      </section>
    </div>
  );
};

export default About;
