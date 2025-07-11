import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaStar, FaUsers, FaQuoteLeft, FaHandHoldingHeart, FaGraduationCap, FaGlobe } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const FoundersDesk = () => {
  const navigate = useNavigate();
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const milestones = [
    {
      year: "2015",
      title: "The Vision was Born",
      description: "A dream to empower every girl child with education and opportunities",
      icon: <FaStar className="text-2xl text-[#D61A91]" />
    },
    {
      year: "2018",
      title: "First 10 Girls Supported",
      description: "Our journey began with supporting 10 underprivileged girls",
      icon: <FaGraduationCap className="text-2xl text-[#D61A91]" />
    },
    {
      year: "2020",
      title: "Community Expansion",
      description: "Reached 100+ families across multiple communities",
      icon: <FaUsers className="text-2xl text-[#D61A91]" />
    },
    {
      year: "2023",
      title: "Global Impact",
      description: "Expanding our mission to create worldwide change",
      icon: <FaGlobe className="text-2xl text-[#D61A91]" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50">
      {/* Hero Section */}
      <motion.section 
        className="relative pt-20 pb-8 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              From the <span className="text-[#BC1782]">Founder's Desk</span>
            </h1>
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 italic mb-12"
              variants={fadeInUp}
            >
              "Every child deserves a chance to shine like a star"
            </motion.p>
          </motion.div>
          
          {/* Founder Photo with elegant animation */}
          <motion.div
            variants={scaleIn}
            className="relative inline-block"
          >
            <div className="relative w-56 h-36 sm:w-72 sm:h-44 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#BC1782] to-[#D61A91] rounded-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={logo} 
                  alt="Project Sitaare Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Message Section */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              {/* Founder Photo - Left Side */}
              <motion.div 
                className="lg:col-span-1"
                variants={scaleIn}
              >
                <div className="relative">
                  <div className="w-64 sm:w-72 max-w-xs mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#BC1782] to-[#D61A91] rounded-3xl opacity-10"></div>
                    <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border-4 border-[#F8E8F1]">
                      <img
                        src="/founder.jpg"
                        alt="Founder Portrait"
                        className="w-full h-auto object-cover aspect-[579/720]"
                        style={{ aspectRatio: '579/720' }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Message Content - Right Side */}
              <motion.div 
                className="lg:col-span-2"
                variants={staggerContainer}
              >
                <motion.div 
                  className="flex items-center mb-6"
                  variants={fadeInUp}
                >
                  <FaQuoteLeft className="text-3xl text-[#BC1782] mr-4" />
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">A Personal Message</h2>
                </motion.div>

                <motion.div 
                  className="space-y-6 text-gray-700 leading-relaxed"
                  variants={staggerContainer}
                >
                  <motion.p 
                    className="text-lg sm:text-xl"
                    variants={fadeInUp}
                  >
                    <span className="text-5xl float-left text-[#BC1782] font-bold mr-3 mt-1 leading-none">W</span>
                    hen I first envisioned <strong className="text-[#BC1782]">Project Sitaare</strong>, it was born from a simple yet profound belief - that every girl child is a star waiting to shine. Growing up, I witnessed countless brilliant minds dimmed by circumstances beyond their control, dreams deferred by societal barriers, and potential unrealized due to lack of opportunities.
                  </motion.p>

                  <motion.p 
                    className="text-lg sm:text-xl"
                    variants={fadeInUp}
                  >
                    Through <strong className="text-[#BC1782]">House of Humanity</strong>, we've created more than just an organization - we've built a movement of <strong>love</strong>, <strong>hope</strong>, and <strong>empowerment</strong>. Every child we support, every family we uplift, and every community we touch reminds me why this mission is so vital to our collective humanity.
                  </motion.p>

                  <motion.p 
                    className="text-lg sm:text-xl"
                    variants={fadeInUp}
                  >
                    Education is not just about books and classrooms - it's about igniting the spark of possibility within each child. When we invest in a girl's education, we're not just changing her life; we're transforming entire communities and future generations.
                  </motion.p>

                  <motion.p 
                    className="text-lg sm:text-xl"
                    variants={fadeInUp}
                  >
                    I invite you to join us in this beautiful journey of transformation. Together, we can ensure that every star gets its chance to shine brightly in the vast sky of possibilities.
                  </motion.p>
                </motion.div>

                <motion.div 
                  className="mt-8 pt-6 border-t border-[#F8E8F1]"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-bold text-gray-900">Harsh Rao</h3>
                  <p className="text-[#BC1782] font-semibold">Founder & CEO, House of Humanity</p>
                  <p className="text-gray-600 mt-1">Visionary behind Project Sitaare</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Highlights / Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#BC1782]">Journey</span> of Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every milestone represents countless lives touched and dreams fulfilled
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  y: -5, 
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFF0F6] to-[#F8E8F1] rounded-full flex items-center justify-center mb-4">
                    {milestone.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#BC1782] mb-2">{milestone.year}</h3>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#BC1782]">Core Values</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <FaHeart className="text-3xl text-[#BC1782]" />,
                title: "Love",
                description: "Every action we take is rooted in unconditional love and compassion for every child we serve."
              },
              {
                icon: <FaStar className="text-3xl text-[#BC1782]" />,
                title: "Hope",
                description: "We believe in the infinite potential of every child and nurture hope for a brighter future."
              },
              {
                icon: <FaHandHoldingHeart className="text-3xl text-[#BC1782]" />,
                title: "Empowerment",
                description: "We empower communities by providing education, resources, and opportunities for sustainable growth."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFF0F6] to-[#F8E8F1] rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="bg-gradient-to-r from-[#BC1782] to-[#D61A91] rounded-3xl p-8 sm:p-12 text-white"
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-6"
              variants={fadeInUp}
            >
              Join Us in Continuing This Mission
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 opacity-90"
              variants={fadeInUp}
            >
              Together, we can light up more stars and create a brighter future for every child
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
            >
              {[
                {
                  text: "Volunteer With Us",
                  primary: true,
                  onClick: () => navigate('/collaborate/get-involved')
                },
                {
                  text: "Make a Donation",
                  primary: false,
                  onClick: () => navigate('/collaborate/donate-for-a-cause')
                }
              ].map((button, index) => (
                <button
                  key={index}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    button.primary 
                      ? 'bg-white text-[#BC1782] hover:bg-gray-100' 
                      : 'border-2 border-white text-white hover:bg-white hover:text-[#BC1782]'
                  }`}
                  onClick={button.onClick}
                >
                  {button.text}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FoundersDesk;