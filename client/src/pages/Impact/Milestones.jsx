import { motion } from 'framer-motion';
import { FaStar, FaHeart, FaGraduationCap, FaHome, FaSmile, FaAppleAlt, FaLaptop, FaUserFriends, FaPaintBrush, FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const milestones = [
  { icon: FaHome, milestone: "Safe Residence", goal: "30+ girls", timeline: "Year 1", color: '#E94BA2' },
  { icon: FaGraduationCap, milestone: "100% School Enrollment", goal: "All children in school", timeline: "Year 1", color: '#BC1782' },
  { icon: FaLaptop, milestone: "Digital Literacy", goal: "Tablets + classes", timeline: "Year 1", color: '#7C0C55' },
  { icon: FaSmile, milestone: "Mental Wellness", goal: "Counseling for all girls", timeline: "Ongoing", color: '#FF8EB5' },
  { icon: FaAppleAlt, milestone: "Higher Education", goal: "Career paths for teens", timeline: "Year 3 onwards", color: '#CDB4DB' },
  { icon: FaPaintBrush, milestone: "Holistic Curriculum", goal: "Blended learning & co-curricular", timeline: "Year 1", color: '#A78BFA' },
  { icon: FaUserFriends, milestone: "Aftercare Support", goal: "Skill-building & livelihood", timeline: "Year 1 onwards", color: '#8E44AD' }
];

const supportItems = [
  { icon: FaHome, text: "Residential Facilities: Safe and comfortable living quarters.", color: '#E94BA2' },
  { icon: FaGraduationCap, text: "Educational Support: Schooling, scholarships, and skill-building workshops.", color: '#BC1782' },
  { icon: FaUserFriends, text: "Psychosocial Support: Counseling, mentorship, and emotional well-being programs.", color: '#7C0C55' },
  { icon: FaAppleAlt, text: "Health & Nutrition: Balanced meals, medical care, and fitness programs.", color: '#FF8EB5' },
  { icon: FaPaintBrush, text: "Extracurricular Development: Art, music, sports, and cultural activities.", color: '#CDB4DB' },
  { icon: FaLaptop, text: "Career & Vocational Training: Internship opportunities and skill enhancement programs.", color: '#A78BFA' }
];

const counters = [
  { label: 'Girls Supported', value: 30, icon: FaSmile, color: '#E94BA2' },
  { label: 'Milestones Achieved', value: 7, icon: FaStar, color: '#BC1782' },
  { label: 'Years of Impact', value: 3, icon: FaHeart, color: '#FF8EB5' },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};
const stagger = {
  animate: { transition: { staggerChildren: 0.15 } }
};
const cardHover = {
  hover: { scale: 1.04, boxShadow: '0 8px 32px rgba(233,30,99,0.12)' },
  tap: { scale: 0.97 }
};

function AnimatedCounter({ value, duration = 1.2, ...props }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let increment = end / (duration * 60);
    let current = start;
    const step = () => {
      current += increment;
      if (current < end) {
        setCount(Math.floor(current));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    step();
    // eslint-disable-next-line
  }, [value]);
  return <span {...props}>{count}</span>;
}

export default function Milestones() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white relative overflow-hidden"
      >
        <FaStar className="text-6xl mx-auto mb-4 animate-pulse" />
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Aspirational Milestones</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Every step forward is a star shining brighter. Here’s how we help our Sitaare reach for the sky.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {counters.map((c, i) => (
            <div key={c.label} className="flex flex-col items-center">
              <c.icon className="text-3xl mb-2" style={{ color: c.color }} />
              <span className="text-3xl font-bold">
                <AnimatedCounter value={c.value} />
              </span>
              <span className="text-base mt-1">{c.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* What We Provide - Animated Cards */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-center mb-10"
        >
          What We Provide
        </motion.h2>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {supportItems.map((item, idx) => (
            <motion.div
              key={item.text}
              variants={fadeIn}
              whileHover="hover"
              whileTap="tap"
              className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4 border-l-4"
              style={{ borderColor: item.color }}
            >
              <item.icon className="text-2xl" style={{ color: item.color }} />
              <span className="text-lg font-medium text-gray-700">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Animated Timeline */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Our Journey: Milestones Timeline
        </motion.h2>
        <div className="relative border-l-4 border-pink-200 ml-4">
          {milestones.map((m, idx) => (
            <motion.div
              key={m.milestone}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              className="mb-12 flex items-start gap-6 relative"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg absolute -left-8 top-0 bg-white border-4" style={{ borderColor: m.color }}>
                <m.icon className="text-xl" style={{ color: m.color }} />
              </div>
              <div className="ml-8 bg-white rounded-xl shadow p-6 w-full">
                <h3 className="text-xl font-bold mb-2" style={{ color: m.color }}>{m.milestone}</h3>
                <p className="text-gray-700 mb-1">{m.goal}</p>
                <span className="text-sm text-gray-500">{m.timeline}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Quote & CTA */}
      <section className="max-w-3xl mx-auto py-16 px-4 text-center">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="italic text-2xl text-primaryDark font-semibold mb-8"
        >
          “Every milestone we reach is a step toward a brighter sky for our Sitaare.”
        </motion.blockquote>
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg flex items-center gap-2 mx-auto"
        >
          <FaHeart className="text-xl" />
          Support the Next Milestone
          <FaArrowRight className="text-base" />
        </motion.button>
      </section>
    </div>
  );
}
