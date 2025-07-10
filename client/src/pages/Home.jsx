import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageVariants } from '../navs';
import Lottie from "lottie-react";
import starsAnimation from "../assets/stars.json";
import ImpactCounter from '../components/ImpactCounter';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import BackToTopButton from '../components/BackToTopButton';
import FloatingActionButton from '../components/FloatingActionButton';
import SectionDivider from '../components/SectionDivider';
import Timeline from '../components/Timeline';
import { FaShieldAlt, FaHeart, FaUserGraduate } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => { AOS.init({ once: true, duration: 800 }); }, []);
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-[#F9F9F9] text-[#4B4B4B]"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center py-24 px-6 sm:px-12 bg-gradient-to-br from-[#FFCAF0] via-[#F1E6EE] to-[#E94BA2] overflow-hidden"
      >
        {/* Background Lottie Animation with Blur & Scale */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.7 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          <Lottie
            animationData={starsAnimation}
            loop
            autoplay
            className="w-full h-full filter blur-sm scale-[1.05] opacity-70"
          />
        </motion.div>
        {/* Content Container */}
        <motion.div
          className="relative z-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: 'spring', stiffness: 60 }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#7C0C55] via-[#BC1782] to-[#E94BA2] drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, type: 'spring', stiffness: 60 }}
            data-aos="fade-down"
          >
            Project Sitaare – Where Every Star Finds Its Sky
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-[#4B4B4B] leading-relaxed max-w-3xl mx-auto mb-12 px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, type: 'spring', stiffness: 60 }}
          >
            A transformative home for girls aged 6–18, creating safe spaces where dreams take flight.
          </motion.p>
          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial="initial"
            animate="animate"
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.div
              variants={{
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120 } },
              }}
            >
              <Link to="/donate" className="group">
                <button
                  className="bg-[#BC1782] hover:bg-[#E94BA2] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  aria-label="Sponsor a Child"
                >
                  Sponsor a Child
                </button>
              </Link>
            </motion.div>
            <motion.div
              variants={{
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120 } },
              }}
            >
              <Link to="/donate" className="group">
                <button
                  className="bg-[#1782BC] hover:bg-[#4AD8C7] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  aria-label="Donate Now"
                >
                  Donate Now
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Impact Counter below hero */}
        <ImpactCounter />
      </motion.section>
      {/* 1.1 A Home Beyond Shelter */}
      <section className="py-16 px-4 sm:px-8 max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-primaryDark mb-6">A Home Beyond Shelter</h2>
        <p className="text-lg leading-relaxed mb-4">
          Project Sitaare, a flagship initiative by the House of Humanity Charitable Trust, is a transformative residential home for girls aged 6 to 18
          who come from vulnerable backgrounds and are in need of care, protection, and an empowering environment.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          More than a shelter, <span className="font-bold text-[#BC1782]">Sitaare</span> is a <span className="font-bold text-[#1782BC]">safe space</span> that nurtures healing, growth, and ambition.
          With a focus on <span className="font-bold text-[#E94BA2]">holistic development</span>—including education, emotional well-being, vocational skills, and cultural exposure—
          Sitaare is designed to help each girl realize her true potential.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Located in Vadodara, Gujarat, the facility functions in line with the Juvenile Justice (Care and Protection of Children) Act, 2015
          and is governed by the Integrated Child Protection Scheme (ICPS).
        </p>
        <p className="text-lg leading-relaxed">
          We work closely with:
          <ul className="list-disc pl-6 mt-2 text-[#4B4B4B]">
            <li className="flex items-center gap-2"><FaShieldAlt className="text-[#1782BC]" />Child Welfare Committee (CWC)</li>
            <li className="flex items-center gap-2"><FaHeart className="text-[#E94BA2]" />District Child Protection Unit (DCPU)</li>
            <li className="flex items-center gap-2"><FaUserGraduate className="text-[#BC1782]" />Women & Child Development Department</li>
          </ul>
          This ensures legal compliance and systemic integration for holistic child rehabilitation.
        </p>
      </section>
      {/* 1.2 Purpose & Passion */}
      <section className="py-16 px-4 sm:px-8 max-w-5xl mx-auto bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8" data-aos="fade-up">
        {/* Founder photo (placeholder) */}
        <img src="/assets/hoh_logo.png" alt="Founder Harsh Rao" className="w-32 h-32 rounded-full object-cover border-4 border-[#E94BA2] shadow-md mb-6 md:mb-0" />
        <div>
          <h2 className="text-3xl font-bold text-primaryDark mb-6">Purpose & Passion Behind Sitaare</h2>
          <p className="text-lg leading-relaxed mb-4">
            The seeds of Project Sitaare were sown through the lived experiences of our founder, <span className="font-bold text-[#BC1782]">Harsh Rao</span>.
            During his formative years, Harsh battled a life-threatening illness—an experience that sparked his empathy for vulnerable children and deepened his resolve
            to create a space of security and opportunity for those in need.
          </p>
          <p className="text-lg leading-relaxed">
            <span className="font-bold text-[#1782BC]">From this personal journey emerged a passionate vision:</span> to build a nurturing, empowering space where young girls can dream freely,
            grow holistically, and rebuild their lives with dignity.
          </p>
        </div>
      </section>
      {/* 1.3 From the Founder's Desk */}
      <section className="py-16 px-4 sm:px-8 max-w-3xl mx-auto text-center relative" data-aos="fade-up">
        <span className="absolute left-4 top-4 text-6xl text-[#E94BA2] opacity-20 select-none">“</span>
        <blockquote className="italic text-xl text-[#BC1782] leading-relaxed relative z-10">
          "Sitaare is more than a home; it is a movement to raise strong, independent girls with dreams that soar.
          My journey with adversity inspired this vision—to create a space where every child feels valued, supported, and celebrated."
        </blockquote>
        <span className="absolute right-4 bottom-4 text-6xl text-[#E94BA2] opacity-20 select-none">”</span>
        <p className="mt-4 font-semibold text-lg">– Harsh Rao, Founder, House of Humanity</p>
      </section>
      {/* 1.4 Vision & Mission */}
      <section className="py-16 px-4 sm:px-8 max-w-5xl mx-auto bg-[#FFF6FB] rounded-xl shadow-md mb-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-primaryDark mb-6 text-center">Our Vision & Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#BC1782] mb-2">Vision</h3>
            <p className="text-lg leading-relaxed text-center">
              To create a world where every girl, regardless of her circumstances, is empowered to dream, learn, and succeed.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#BC1782] mb-2">Mission</h3>
            <p className="text-lg leading-relaxed mb-2 text-center">
              To provide girls in need of care and protection with a safe, loving, and enabling environment that supports holistic development through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#4B4B4B] text-left w-full">
              <li>Quality education</li>
              <li>Comprehensive healthcare</li>
              <li>Life skills training</li>
              <li>Mental health and emotional well-being</li>
              <li>Arts, sports, and leadership opportunities</li>
            </ul>
          </div>
        </div>
        {/* Timeline below Vision & Mission */}
        <Timeline />
      </section>
      {/* Testimonials Carousel */}
      <TestimonialsCarousel />
      <BackToTopButton />
      <FloatingActionButton />
    </motion.div>
  );
};

export default Home;
