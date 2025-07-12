import React from "react";
import { motion } from "framer-motion";
import {
  FaQuoteRight,
  FaStar,
  FaHeart,
  FaHandsHelping,
  FaHandHoldingHeart,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Rani, 13",
    role: "Beneficiary",
    quote:
      "Before Sitaare, I didn't even know what a classroom looked like. Now I not only go to school but I also want to become a teacher one day to help others like me.",
    category: "Beneficiary Girls",
    avatarColor: "bg-pink-100",
    icon: <FaHeart className="text-3xl text-pink-600" />,
    headingColor: "text-pink-600",
    underlineColor: "bg-pink-600",
    borderColor: "border-pink-600",
  },
  {
    name: "Meena, 15",
    role: "Beneficiary",
    quote:
      "Sitaare gave me more than just a home. They gave me dreams, and now, I believe I can achieve them.",
    category: "Beneficiary Girls",
    avatarColor: "bg-pink-100",
    icon: <FaHeart className="text-3xl text-pink-600" />,
    headingColor: "text-pink-600",
    underlineColor: "bg-pink-600",
    borderColor: "border-pink-600",
  },
  {
    name: "Ananya Patel",
    role: "Volunteer Career Mentor",
    quote:
      "Volunteering at Sitaare has been life-changing. These girls are so full of potential, and all they need is someone to believe in them.",
    category: "Volunteers",
    avatarColor: "bg-purple-200",
    icon: <FaHandsHelping className="text-3xl text-purple-600" />,
    headingColor: "text-purple-600",
    underlineColor: "bg-purple-600",
    borderColor: "border-purple-600",
  },
  {
    name: "Raghav Sharma",
    role: "Volunteer Trainer",
    quote:
      "Mentoring the girls in digital skills and self-defense taught me how resilient and curious they are. I'm proud to be a small part of their big journey.",
    category: "Volunteers",
    avatarColor: "bg-purple-200",
    icon: <FaHandsHelping className="text-3xl text-purple-600" />,
    headingColor: "text-purple-600",
    underlineColor: "bg-purple-600",
    borderColor: "border-purple-600",
  },
  {
    name: "Kavita Desai",
    role: "Philanthropist",
    quote:
      "As a donor, I've never felt more connected to a cause. The transparency, the commitment, and the outcomes at Sitaare are deeply inspiring.",
    category: "Donors",
    avatarColor: "bg-indigo-200",
    icon: <FaHandHoldingHeart className="text-3xl text-indigo-600" />,
    headingColor: "text-indigo-600",
    underlineColor: "bg-indigo-600",
    borderColor: "border-indigo-600",
  },
  {
    name: "CSR Head, TechNova Solutions Pvt. Ltd.",
    role: "Corporate Donor",
    quote:
      "Supporting Sitaare through our CSR has not only impacted the lives of these girls but also uplifted the morale of our employees who actively volunteer.",
    category: "Donors",
    avatarColor: "bg-indigo-200",
    icon: <FaHandHoldingHeart className="text-3xl text-indigo-600" />,
    headingColor: "text-indigo-600",
    underlineColor: "bg-indigo-600",
    borderColor: "border-indigo-600",
  },
];

// Animation variants
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
};

const cardVariants = {
  initial: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardHover = {
  scale: 1.03,
  y: -5,
  transition: {
    duration: 0.3,
    ease: "easeOut"
  }
};

const avatarVariants = {
  initial: { scale: 0, rotate: -180 },
  animate: { 
    scale: 1, 
    rotate: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
      ease: "easeOut"
    }
  }
};

const quoteVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: "easeOut"
    }
  }
};

// Group testimonials by category
const groupedTestimonials = {
  "Beneficiary Girls": testimonials.filter(
    (t) => t.category === "Beneficiary Girls"
  ),
  Volunteers: testimonials.filter((t) => t.category === "Volunteers"),
  Donors: testimonials.filter((t) => t.category === "Donors"),
};

export default function Testimonials() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeIn}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50 text-gray-800"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/90 z-10 w-full h-full"></div>
        <div className="relative z-20 w-full text-center py-14 lg:py-20">
          <motion.div
            animate={{
              y: [-10, 10],
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              },
            }}
            className="mb-5"
          >
            <FaStar className="text-5xl text-pink-100 mx-auto" />
          </motion.div>
          <motion.h1
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
          >
            Empowering Dreams, Transforming Lives
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-xl lg:text-2xl text-pink-50 mb-6 max-w-4xl mx-auto leading-relaxed"
          >
            Hear the inspiring stories of girls, volunteers, and supporters who
            are part of Project Sitaare's transformative journey.
          </motion.p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="p-8 sm:p-12 max-w-7xl mx-auto">
        <motion.h2
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 text-center text-pink-800"
        >
          Voices of Sitaare
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-pink-600 rounded-full mb-16 mx-auto max-w-md"
        ></motion.div>

        {Object.keys(groupedTestimonials).map((category) => (
          <div key={category} className="mb-16">
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              className="flex items-center gap-3 mb-2"
            >
              {groupedTestimonials[category][0].icon}
              <h3
                className={`text-2xl lg:text-3xl font-bold ${groupedTestimonials[category][0].headingColor}`}
              >
                {category}
              </h3>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`h-0.5 ${groupedTestimonials[category][0].underlineColor} rounded-full mb-8 max-w-xs`}
            ></motion.div>
            <div className="grid gap-6 sm:gap-8 lg:gap-10 xl:gap-12 grid-cols-1 lg:grid-cols-2">
              {groupedTestimonials[category].map((t, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  whileHover={cardHover}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-rose-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 ${t.borderColor} flex flex-col h-[16rem] w-full relative cursor-pointer`}
                >
                  <div className="flex-1">
                    <motion.div
                      variants={quoteVariants}
                      initial="initial"
                      animate="animate"
                      className="absolute top-4 right-4"
                    >
                      <FaQuoteRight
                        className={`text-2xl ${t.headingColor}`}
                      />
                    </motion.div>
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        variants={avatarVariants}
                        initial="initial"
                        animate="animate"
                        className={`w-12 h-12 rounded-full ${t.avatarColor} flex items-center justify-center text-gray-800 font-bold text-lg`}
                      >
                        {t.name[0]}
                      </motion.div>
                    </div>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          duration: 0.5, 
                          delay: 0.4 
                        }
                      }}
                      className="text-base lg:text-lg italic text-gray-700 mb-4 leading-relaxed"
                    >
                      "{t.quote}"
                    </motion.p>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.4, 
                        delay: 0.6 
                      }
                    }}
                    className="text-right pt-3 border-t border-gray-200 mt-auto"
                  >
                    <p className={`font-semibold ${t.headingColor} text-sm`}>
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}