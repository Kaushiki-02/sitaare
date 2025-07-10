import React, { useEffect } from 'react';
import { FaStar, FaHome, FaHeart, FaBook, FaUserFriends, FaChalkboardTeacher, FaSmile, FaAppleAlt, FaPaintBrush, FaLaptop, FaHeartbeat } from 'react-icons/fa';
import beneficiaries from './beneficiariesData';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const facilities = [
  { icon: <FaHome className="text-pink-500 text-2xl" />, title: 'Safe Residential Facilities', desc: 'Comfortable, secure living quarters designed for well-being.' },
  { icon: <FaBook className="text-purple-500 text-2xl" />, title: 'Educational Support', desc: 'Schooling, scholarships, and skill-building workshops.' },
  { icon: <FaUserFriends className="text-green-500 text-2xl" />, title: 'Psychosocial Care', desc: 'Counseling, mentorship, and emotional well-being programs.' },
  { icon: <FaAppleAlt className="text-yellow-500 text-2xl" />, title: 'Health & Nutrition', desc: 'Balanced meals, medical care, and fitness programs.' },
  { icon: <FaPaintBrush className="text-pink-400 text-2xl" />, title: 'Extracurricular Development', desc: 'Art, music, sports, and cultural activities.' },
  { icon: <FaChalkboardTeacher className="text-blue-500 text-2xl" />, title: 'Career & Vocational Training', desc: 'Internships and skill enhancement for future readiness.' },
  { icon: <FaLaptop className="text-purple-400 text-2xl" />, title: 'Digital Learning', desc: 'Smart rooms, computer labs, and online resources.' },
  { icon: <FaHeartbeat className="text-red-400 text-2xl" />, title: 'Holistic Well-being', desc: 'Routine check-ups, mental health, and personal growth.' },
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};
const cardHover = {
  hover: { scale: 1.04, rotate: -2, boxShadow: '0 8px 32px rgba(233,30,99,0.12)' },
  tap: { scale: 0.97, rotate: 1 },
};

const MeetOurSitaare = () => {
  useEffect(() => { AOS.init({ once: true, duration: 800 }); }, []);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50 text-gray-700 px-4 py-12"
    >
      {/* Hero Section */}
      <motion.div
        variants={fadeInUp}
        className="max-w-4xl mx-auto text-center mb-16"
        data-aos="fade-up"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mb-4"
        >
          <FaStar className="text-5xl text-yellow-400 mx-auto animate-pulse" />
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Meet Our Sitaare
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Project Sitaare is more than a shelter—it's a home, a school, a playground, and a launchpad for dreams. Here, orphaned and vulnerable girls (ages 6–18) find safety, care, and the opportunity to shine.
        </motion.p>
      </motion.div>

      {/* What is Sitaare? Section */}
      <motion.section
        variants={fadeInUp}
        className="max-w-5xl mx-auto mb-20 bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative overflow-hidden"
        data-aos="fade-up"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-100 rounded-full -ml-12 -mb-12"></div>
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">What is Project Sitaare?</h2>
            <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-20 mb-6"></div>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold text-pink-600">Project Sitaare</span> is House of Humanity’s heartfelt initiative to provide a safe haven exclusively for orphaned girls aged 6 to 18 years, ensuring they have access to the best possible care, education, and opportunities. It’s not just a shelter—it’s a nurturing environment where every girl is empowered to dream, grow, and thrive.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our philosophy is rooted in unconditional care, holistic development, and future readiness. Sitaare is designed to go beyond the basics—offering love, education, and career opportunities so every girl can reach for the stars.
            </p>
            <p className="text-lg text-gray-700">
              As the second registered orphanage for girls in Vadodara, Sitaare aims to set a new standard for excellence, compassion, and empowerment.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Facilities & Unique Aspects Section */}
      <motion.section
        variants={stagger}
        initial="initial"
        animate="animate"
        className="max-w-6xl mx-auto mb-20"
        data-aos="fade-up"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Facilities, Care, and Unique Aspects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sitaare provides a holistic environment where every need is met—physical, emotional, educational, and aspirational.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {facilities.map((facility, idx) => (
            <motion.div
              key={facility.title}
              variants={fadeInUp}
              data-aos="zoom-in"
              data-aos-delay={idx * 120}
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={cardHover}
                className="bg-white rounded-2xl shadow-lg p-6 text-center border-t-4 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                style={{ borderColor: '#E91E63' }}
              >
                <div className="mb-4 flex justify-center">{facility.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{facility.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">{facility.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Meet Our Sitaare (Beneficiaries) */}
      <motion.section
        variants={stagger}
        initial="initial"
        animate="animate"
        className="max-w-6xl mx-auto mb-20"
        data-aos="fade-up"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Meet Our Sitaare</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every girl at Sitaare has a unique story of hope, courage, and transformation.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {beneficiaries.map((b, idx) => (
            <motion.div
              key={b.name}
              variants={fadeInUp}
              data-aos="zoom-in"
              data-aos-delay={idx * 120}
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={cardHover}
                className="bg-white rounded-2xl shadow-lg p-6 text-center border-t-4 border-pink-400 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <motion.img
                  src={b.image}
                  alt={b.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-pink-200"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, type: 'spring' }}
                />
                <h3 className="text-lg font-bold mb-1 text-gray-800">{b.name}, <span className="text-sm text-gray-500">{b.age} yrs</span></h3>
                <p className="italic text-pink-600 mb-2">"{b.quote}"</p>
                <p className="text-gray-600 text-sm flex-grow">{b.story}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Inspirational Quote */}
      <motion.section
        variants={fadeInUp}
        className="max-w-3xl mx-auto text-center mt-16"
        data-aos="fade-up"
      >
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 lg:p-12 relative">
          <FaStar className="text-4xl text-yellow-300 mx-auto mb-4" />
          <blockquote className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 italic max-w-2xl mx-auto">
            Sitaare is not just about shelter—it's about possibility, potential, and purpose.
          </blockquote>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
  </div>
      </motion.section>
    </motion.div>
);
};

export default MeetOurSitaare; 