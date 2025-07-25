import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaUniversity, FaHandsHelping, FaGavel, FaStar, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  { label: 'Partners Engaged', value: 5, icon: FaStar, color: '#E94BA2' },
  { label: 'Projects Co-created', value: 12, icon: FaHandsHelping, color: '#BC1782' },
  { label: 'Girls Impacted', value: 25, icon: FaStar, color: '#A78BFA' },
];

const testimonials = [
  {
    name: "Acme Corp",
    text: "Partnering with Sitaare has been a transformative experience for our team and our CSR goals.",
  },
  {
    name: "Bright Foundation",
    text: "Together, we've created real, lasting change for girls who need it most.",
  },
  {
    name: "Global University",
    text: "Our students gained invaluable experience and made a difference through Sitaare internships.",
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};
const stagger = {
  animate: { transition: { staggerChildren: 0.15 } }
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
  const navigate = useNavigate();
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
        <FaStar className="text-5xl text-primaryLight mx-auto mb-5" />
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

      {/* Redesigned Testimonials Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold text-primaryDark mb-4"
            data-aos="fade-up"
          >
            What Our Partners Say
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Hear from organizations that have joined us on our mission.
          </motion.p>
          <div className="relative h-48 sm:h-32" data-aos="fade-up" data-aos-delay="200">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full absolute inset-0"
              >
                <FaQuoteLeft className="text-6xl text-pink-100/80 absolute -top-6 left-1/2 -translate-x-1/2 -z-1" />
                <p className="text-xl italic text-gray-700 mb-6 relative z-10">
                  {testimonials[testimonialIdx].text}
                </p>
                <span className="block text-lg font-bold text-primary">
                  - {testimonials[testimonialIdx].name} -
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTestimonialIdx(idx)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${testimonialIdx === idx ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
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
          onClick={() => navigate('/collaborate/partner-with-us')}
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
