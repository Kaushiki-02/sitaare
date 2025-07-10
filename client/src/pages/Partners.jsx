import { motion } from 'framer-motion';
import { FaBuilding, FaUniversity, FaHandsHelping, FaGavel, FaStar, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const partnerData = [
  {
    title: "Corporates (CSR)",
    icon: FaBuilding,
    color: "#BC1782",
    points: [
      "Fund infrastructure, digital classrooms, or transport",
      "Support school fees, vocational training, and career mentorship"
    ]
  },
  {
    title: "NGOs & Foundations",
    icon: FaHandsHelping,
    color: "#E94BA2",
    points: [
      "Collaborate on mental health, child rights, and education",
      "Co-design programs to deepen impact in underserved communities"
    ]
  },
  {
    title: "Colleges & Universities",
    icon: FaUniversity,
    color: "#A78BFA",
    points: [
      "Internship programs for students",
      "Peer mentorship and cultural exchange initiatives"
    ]
  },
  {
    title: "Government Bodies",
    icon: FaGavel,
    color: "#BC1782",
    points: [
      "Work with CWC, DCPU, and Women & Child Welfare Department",
      "Strengthen integrated care through policy alignment"
    ]
  }
];

const counters = [
  { label: 'Partners Engaged', value: 24, icon: FaStar, color: '#E94BA2' },
  { label: 'Projects Co-created', value: 12, icon: FaHandsHelping, color: '#BC1782' },
  { label: 'Girls Impacted', value: 300, icon: FaStar, color: '#A78BFA' },
];

const testimonials = [
  {
    name: "Acme Corp",
    text: "Partnering with Sitaare has been a transformative experience for our team and our CSR goals.",
    logo: "https://via.placeholder.com/60x60?text=AC"
  },
  {
    name: "Bright Foundation",
    text: "Together, we've created real, lasting change for girls who need it most.",
    logo: "https://via.placeholder.com/60x60?text=BF"
  },
  {
    name: "Global University",
    text: "Our students gained invaluable experience and made a difference through Sitaare internships.",
    logo: "https://via.placeholder.com/60x60?text=GU"
  }
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

export default function Partners() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx(idx => (idx + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => { AOS.init({ once: true, duration: 800 }); }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white relative overflow-hidden"
        data-aos="fade-up"
      >
        <FaHandsHelping className="text-6xl mx-auto mb-4 animate-pulse" />
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Partner With Us</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Let’s co-create a nurturing ecosystem for every Sitaare. Your partnership can change lives.
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

      {/* Partner Cards */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {partnerData.map((group, idx) => (
            <motion.div
              key={group.title}
              variants={fadeIn}
              whileHover={{ scale: 1.07, rotate: -2, boxShadow: '0 12px 32px rgba(233,30,99,0.18)' }}
              whileTap={{ scale: 0.97, rotate: 1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center border-t-4"
              style={{ borderColor: group.color }}
              data-aos="zoom-in"
              data-aos-delay={idx * 120}
            >
              <group.icon className="text-3xl mb-4" style={{ color: group.color }} />
              <h2 className="text-xl font-bold mb-3" style={{ color: group.color }}>{group.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700 text-left w-full max-w-xs mx-auto">
                {group.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Carousel */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-8 text-center relative"
          data-aos="fade-up"
        >
          <FaQuoteLeft className="text-3xl text-pink-300 absolute left-6 top-6" />
          <img
            src={testimonials[testimonialIdx].logo}
            alt={testimonials[testimonialIdx].name}
            className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-pink-100 object-cover"
          />
          <p className="text-lg italic text-gray-700 mb-4">"{testimonials[testimonialIdx].text}"</p>
          <span className="block text-pink-600 font-bold">{testimonials[testimonialIdx].name}</span>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto py-16 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-8"
          data-aos="fade-up"
        >
          Ready to Make an Impact?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.09, boxShadow: '0 8px 32px rgba(233,30,99,0.18)' }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg flex items-center gap-2 mx-auto"
          data-aos="zoom-in"
        >
          Become a Partner
          <FaArrowRight className="text-base" />
        </motion.button>
      </section>
    </div>
  );
}
