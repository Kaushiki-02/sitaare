import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageVariants } from '../navs';
import { motion } from 'framer-motion';
import { Star, Heart, User, Eye, Target, Sparkles, Shield, UserCheck, GraduationCap } from 'lucide-react';
import Lottie from "lottie-react";
import starsAnimation from "../assets/stars.json";
import ImpactCounter from '../components/ImpactCounter';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import BackToTopButton from '../components/BackToTopButton';
import FloatingActionButton from '../components/FloatingActionButton';
import SectionDivider from '../components/SectionDivider';
import Timeline from '../components/Timeline';
import AOS from 'aos';
import 'aos/dist/aos.css';
// PLACEHOLDER IMPORTS (adjust as needed)
import { useRef, useState } from 'react';
// import Play from '...'; // Import your Play icon
// import ImagePlaceholder from '...'; // Import your ImagePlaceholder component

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.15 } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const staggerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 15 } },
};

const buttonVariants = {
  hover: { scale: 1.08, boxShadow: '0px 8px 24px rgba(236, 72, 153, 0.2)' },
  tap: { scale: 0.96 },
};

const Home = () => {
  useEffect(() => { 
    AOS.init({ once: true, duration: 800 }); 
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-rose-50 text-gray-800 px-2 sm:px-0"
    >
      {/* Hero Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative text-center py-16 sm:py-24 px-2 sm:px-6 md:px-12 bg-primaryLight overflow-hidden"
      >
        {/* Background Lottie Animation with Blur & Scale */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.3 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          <Lottie
            animationData={starsAnimation}
            loop
            autoplay
            className="w-full h-full filter blur-sm scale-[1.05] opacity-30"
          />
        </motion.div>

        {/* Sophisticated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-5">
          {/* Geometric shapes */}
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 0.3 }} transition={{ duration: 1, delay: 0.2, type: 'spring' }} className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-30 animate-pulse"></motion.div>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 0.2 }} transition={{ duration: 1, delay: 0.4, type: 'spring' }} className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></motion.div>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 0.25 }} transition={{ duration: 1, delay: 0.6, type: 'spring' }} className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full opacity-25 animate-pulse delay-2000"></motion.div>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 0.3 }} transition={{ duration: 1, delay: 0.8, type: 'spring' }} className="absolute bottom-20 right-16 w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full opacity-30 animate-pulse delay-500"></motion.div>
          
          {/* Subtle floating elements */}
          <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 0.6 }} transition={{ duration: 1, delay: 1.0, type: 'spring' }} className="absolute top-32 left-1/4 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-bounce delay-300"></motion.div>
          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 0.5 }} transition={{ duration: 1, delay: 1.2, type: 'spring' }} className="absolute bottom-48 right-1/4 w-3 h-3 bg-rose-400 rounded-full opacity-50 animate-bounce delay-700"></motion.div>
          <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 0.4 }} transition={{ duration: 1, delay: 1.4, type: 'spring' }} className="absolute top-48 right-1/3 w-2 h-2 bg-pink-300 rounded-full opacity-40 animate-bounce delay-1000"></motion.div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="inline-flex items-center bg-white/80 backdrop-blur-md rounded-full px-8 py-3 mb-8 shadow-lg border border-primaryLight">
            <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
            <span className="text-primaryDark font-semibold text-sm tracking-wide">EMPOWERING YOUNG DREAMS</span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-rose-600 to-primaryDark leading-tight tracking-tight flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <Star size={48} className="inline-block text-primary drop-shadow" />
            Project Sitaare
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-light text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Where Every Star Finds Its Sky
          </motion.p>
          
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-base xs:text-lg sm:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto mb-10 sm:mb-16 px-2 sm:px-0">
            A transformative residential facility for girls aged 6–18, creating safe sanctuaries where dreams flourish and futures are built with purpose, care, and boundless possibilities.
          </motion.p>

          {/* Impact Counter below hero */}
          <ImpactCounter />

          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 w-full">
            <Link to="/collaborate/get-involved" className="group">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group relative bg-primary hover:bg-primaryDark text-white font-semibold px-12 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">Sponsor a Child</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.button>
            </Link>
            <Link to="/collaborate/donate-for-a-cause" className="group">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group relative bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Donate Now</span>
                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Professional About Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 sm:py-24 px-2 sm:px-6 md:px-12 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        {/* Heading and Paragraph Full Width with Image Placeholder */}
        <div className="mb-8 sm:mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="inline-flex items-center bg-primaryLight rounded-full px-6 py-3 mb-8">
              <User size={20} className="mr-2 text-primaryDark" />
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-primaryDark font-semibold text-sm tracking-wide uppercase">Our Foundation</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl lg:text-5xl font-bold text-primaryDark mb-8 leading-tight">
              A Home Beyond <span className="text-primary">Shelter</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg leading-relaxed mb-8 text-gray-600 max-w-4xl">
              Project Sitaare, a flagship initiative by the House of Humanity Charitable Trust, is a transformative residential facility for girls aged 6 to 18 who come from vulnerable backgrounds and require comprehensive care, protection, and empowerment.
              <br /><br />
              More than a shelter, <span className="font-bold text-primary">Sitaare</span> is a <span className="font-bold text-primaryDark">safe space</span> that nurtures healing, growth, and ambition. Our holistic approach encompasses education, emotional well-being, vocational skills, and cultural enrichment, designed to help each girl realize her full potential.
            </motion.p>
          </div>
          {/* About Section Image - Wider on Large Screens */}
          <img
            src="/sitaare about.webp"
            alt="About Project Sitaare"
            className="w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 lg:min-w-[300px] rounded-2xl object-cover shadow-lg"
          />
        </div>
        {/* Two-column grid for the boxes */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {/* What Makes Sitaare Special - First */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }} className="bg-white rounded-2xl p-6 sm:p-10 md:p-12 min-h-[250px] sm:min-h-[350px] shadow-xl flex flex-col">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-4 h-4 bg-pink-500 rounded-full mr-3"></div>
              What Makes Sitaare Special
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 leading-relaxed">Safe, nurturing environment designed for healing and sustainable growth</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 leading-relaxed">Comprehensive development through education, skills, and wellness programs</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 leading-relaxed">Full legal compliance and systematic integration with child protection frameworks</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-rose-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 leading-relaxed">Emphasis on mental health, emotional intelligence, and cultural enrichment</p>
              </div>
            </div>
          </motion.div>
          {/* Located in Vadodara, Gujarat - Second */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="bg-white rounded-2xl p-6 sm:p-10 md:p-12 min-h-[250px] sm:min-h-[350px] shadow-lg border border-pink-100 flex flex-col">
            <h3 className="text-xl font-bold text-pink-700 mb-4 flex items-center">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
              Located in Vadodara, Gujarat
            </h3>
            <p className="text-gray-600 mb-6">
              Operating in full compliance with the Juvenile Justice (Care and Protection of Children) Act, 2015 and governed by the Integrated Child Protection Scheme (ICPS).
            </p>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">We work closely with:</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield size={20} className="text-pink-600" />
                  <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">Child Welfare Committee (CWC)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart size={20} className="text-rose-600" />
                  <span className="bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">District Child Protection Unit (DCPU)</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap size={20} className="text-pink-600" />
                  <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">Women & Child Development</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>            


      {/* Founder's Story Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 sm:py-24 px-2 sm:px-6 md:px-12 bg-primaryLight"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="inline-flex items-center bg-primaryLight rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-primaryDark font-semibold text-sm tracking-wide uppercase">Our Story</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl lg:text-5xl font-bold text-primaryDark mb-8">
              Purpose & Passion Behind <span className="text-primary">Sitaare</span>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 80 }} className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 border border-pink-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <p className="text-lg leading-relaxed mb-8 text-gray-600">
                  The seeds of Project Sitaare were sown through the lived experiences of our founder, <span className="font-bold text-primary">Harsh Rao</span>. During his formative years, Harsh battled a life-threatening illness—an experience that sparked his empathy for vulnerable children and deepened his resolve to create a space of security and opportunity for those in need.
                </p>
                <p className="text-lg leading-relaxed text-gray-600">
                  <span className="font-bold text-rose-600">From this personal journey emerged a passionate vision:</span> to build a nurturing, empowering space where young girls can dream freely, grow holistically, and rebuild their lives with dignity and purpose.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-4 sm:p-8 shadow-lg border border-pink-100">
                <div className="text-center">
                  <div className="w-20 h-20 xs:w-24 xs:h-24 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full mx-auto mb-4 xs:mb-6 flex items-center justify-center shadow-lg">
                    <img
                      src="/founder.jpg"
                      alt="Harsh Rao, Founder"
                      className="w-20 h-20 xs:w-24 xs:h-24 rounded-full object-cover shadow-lg border-4 border-white"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Harsh Rao</h3>
                  <p className="text-primary font-medium">Founder, House of Humanity</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Founder's Quote Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-8 sm:py-12 px-2 sm:px-4 md:px-8 bg-primary text-white relative overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <motion.div initial={{ opacity: 0, scaleY: 0.7 }} whileInView={{ opacity: 1, scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-1 h-12 bg-white/30 mx-auto mb-4"></motion.div>
            <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="text-2xl font-bold mb-4 tracking-wide">From the Founder's Desk</motion.h2>
          </div>
          <motion.blockquote initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="text-base md:text-lg font-light leading-relaxed mb-8 relative">
            <div className="text-5xl text-white/20 absolute -top-4 -left-4 font-serif">"</div>
            <div className="relative z-10 italic">
              Sitaare is more than a home; it is a movement to raise strong, independent girls with dreams that soar. My journey with adversity inspired this vision—to create a space where every child feels valued, supported, and celebrated.
            </div>
            <div className="text-5xl text-white/20 absolute -bottom-4 -right-4 font-serif">"</div>
          </motion.blockquote>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="bg-primaryLight/20 backdrop-blur-md rounded-2xl p-4 inline-block border border-white/30">
            <p className="font-bold text-base mb-1">– Harsh Rao</p>
            <p className="text-primaryLight text-sm">Founder, House of Humanity</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Vision & Mission Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 sm:py-24 px-2 sm:px-6 md:px-12 bg-primaryLight"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="inline-flex items-center bg-primaryLight rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-primaryDark font-semibold text-sm tracking-wide uppercase">Our Direction</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl lg:text-5xl font-bold text-primaryDark mb-8">
              Our Vision & <span className="text-primary">Mission</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
              className="group bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden border border-pink-100 hover:shadow-3xl transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Eye size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-pink-600 mb-6">Vision</h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  To create a world where every girl, regardless of her circumstances, is empowered to dream, learn, and succeed with dignity and confidence.
                                </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
            className="group bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden border border-pink-100 hover:shadow-3xl transition-all duration-500"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full -ml-16 -mb-16 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-rose-600 mb-6">Mission</h3>
              <p className="text-lg leading-relaxed text-gray-600">
                To provide holistic, high-quality residential care that fosters emotional well-being, academic success, life skills, and cultural identity — ensuring each child is prepared for a bright, independent future.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>

    {/* Timeline Section */}
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 sm:py-24 px-2 sm:px-6 md:px-12 bg-primaryLight"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center bg-primaryLight rounded-full px-6 py-3 mb-8"
          >
            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
            <span className="text-primaryDark font-semibold text-sm tracking-wide uppercase">Our Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-primaryDark"
          >
            Milestones & <span className="text-primary">Progress</span>
          </motion.h2>
        </div>
        {/* Responsive grid: Timeline left, Video section right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-12 items-start">
          {/* Timeline */}
          <div>
            <Timeline />
          </div>
          {/* Video Section */}
          <VideoStoriesSection />
        </div>
      </div>
    </motion.section>

    {/* Testimonials */}
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 sm:py-24 px-2 sm:px-6 md:px-12 bg-primaryLight"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center bg-primaryLight rounded-full px-6 py-3 mb-8"
          >
            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
            <span className="text-primaryDark font-semibold text-sm tracking-wide uppercase">Voices of Change</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-primaryDark"
          >
            Stories of <span className="text-primary">Transformation</span>
          </motion.h2>
        </div>
        <TestimonialsCarousel />
      </div>
    </motion.section>

    {/* Divider */}
    <SectionDivider />

    {/* Floating Action Button and Back to Top */}
    <FloatingActionButton />
   
  </motion.div>
);
};

// --- VideoStoriesSection Component ---
function VideoStoriesSection() {
  // Sample data (replace with your real data)
  const stories = [
    {
      title: 'Inspiring Journey',
      summary: 'A short summary of the inspiring journey.',
      videoUrl: '/video1.mp4', // Uses video1.mp4 from public folder
    }
  ];
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  return (
    <div className="space-y-8">
      {stories.map((story, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-2 xs:p-4">
          {/* Video Container */}
          <div className="relative mb-2 xs:mb-4 mx-auto">
            {story.videoUrl ? (
              <div className="relative w-full max-w-[320px] xs:max-w-[420px] mx-auto">
                <video
                  ref={el => { videoRefs.current[index] = el; }}
                  className="w-full h-[320px] xs:h-[420px] object-cover rounded-xl border-2 border-primary shadow-md"
                  controls
                  preload="metadata"
                  style={{ aspectRatio: '9/16' }}
                  onPlay={() => setPlayingIndex(index)}
                  onPause={() => setPlayingIndex(null)}
                >
                  <source src={story.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Custom Play Overlay */}
                {playingIndex !== index && (
                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-xl transition-opacity duration-200 z-10"
                    onClick={() => {
                      const vid = videoRefs.current[index];
                      if (vid) {
                        vid.play();
                      }
                    }}
                    tabIndex={-1}
                    type="button"
                  >
                    {/* <Play className="text-white" size={64} /> */}
                    <span className="text-white text-4xl">▶</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="w-full max-w-[320px] xs:max-w-[420px] mx-auto">
                {/* <ImagePlaceholder 
                  text={story.title} 
                  width="100%" 
                  height="520px" 
                  className="rounded-xl border-2 border-pink-400" 
                /> */}
                <div className="w-full h-[320px] xs:h-[420px] bg-gray-200 flex items-center justify-center rounded-xl border-2 border-pink-400">
                  <span className="text-gray-400">No Video</span>
                </div>
              </div>
            )}
          </div>
          {/* Content */}
          <div className="flex-1 text-center px-2">
            <h3 className="text-lg font-bold text-primary mb-2 leading-tight">
              {story.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {story.summary}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
