import React, { useState, useEffect } from 'react';
import { FaHandshake, FaUsers, FaRegLightbulb, FaRegCalendarCheck, FaStar, FaHeart, FaLeaf, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';
import starsAnimation from '../../assets/stars.json';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
const staggerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
};
const cardHover = {
  hover: { 
    scale: 1.04, 
    boxShadow: '0 8px 32px rgba(233,30,99,0.12)',
    rotateY: 5,
    rotateX: 5,
    transition: { type: 'spring', stiffness: 300 }
  },
  tap: { scale: 0.97 },
};

const iconHover = {
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: { type: 'spring', stiffness: 400 }
  }
};

const cardContentHover = {
  hover: {
    y: -5,
    transition: { type: 'spring', stiffness: 300 }
  }
};

// Animated Counter Component
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
  }, [value, duration]);
  return <span {...props}>{count}</span>;
}

const testimonials = [
  {
    quote: "Partnering with Sitaare has been a transformative experience for our team. Together, we've touched countless lives and grown as a community.",
    name: 'Partner Organization',
    role: 'CSR Lead',
  },
  {
    quote: "Sitaare's dedication and professionalism made our collaboration seamless and impactful.",
    name: 'NGO Collaborator',
    role: 'Program Manager',
  },
  {
    quote: "As an individual ambassador, I found purpose and a supportive network with Sitaare.",
    name: 'Community Champion',
    role: 'Volunteer',
  },
];

const partnerTypes = [
  {
    icon: <FaHandshake className="text-4xl text-primary mb-2" />,
    title: 'Corporate Partnerships',
    desc: 'Engage your company in CSR initiatives, employee volunteering, or sponsorships that make a difference.',
  },
  {
    icon: <FaUsers className="text-4xl text-primary mb-2" />,
    title: 'NGO & Community Collaborations',
    desc: 'Join forces to expand our reach, share resources, and co-create impactful programs.',
  },
  {
    icon: <FaRegLightbulb className="text-4xl text-primary mb-2" />,
    title: 'Individual Champions',
    desc: 'Become an ambassador, volunteer, or advocate for our cause in your community.',
  },
  {
    icon: <FaRegCalendarCheck className="text-4xl text-primary mb-2" />,
    title: 'Event & Campaign Partners',
    desc: 'Collaborate on events, awareness drives, or fundraising campaigns to maximize impact.',
  },
];

const PartnerWithUs = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Autoplay for testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx(idx => (idx + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => setTestimonialIdx((testimonialIdx + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerVariants}
      className="min-h-screen bg-softBg relative overflow-hidden"
    >
      {/* Hero Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative h-72 flex items-center justify-center mb-12 overflow-hidden"
      >
        {/* Lottie Stars Background */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.4 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <Lottie
            animationData={starsAnimation}
            loop
            autoplay
            className="w-full h-full scale-[1.05] opacity-40"
          />
        </motion.div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 0.4 }} 
            transition={{ duration: 1, delay: 0.2, type: 'spring' }} 
            className="absolute top-20 left-10 w-32 h-32 rounded-full blur-sm" 
            style={{ background: 'linear-gradient(135deg, #FFB6C1, #FF69B4)', filter: 'blur(8px)' }}
          />
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 0.3 }} 
            transition={{ duration: 1, delay: 0.4, type: 'spring' }} 
            className="absolute top-40 right-20 w-24 h-24 rounded-full blur-sm" 
            style={{ background: 'linear-gradient(135deg, #DDA0DD, #9370DB)', filter: 'blur(6px)' }}
          />
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 0.35 }} 
            transition={{ duration: 1, delay: 0.6, type: 'spring' }} 
            className="absolute bottom-32 left-32 w-40 h-40 rounded-full blur-sm" 
            style={{ background: 'linear-gradient(135deg, #87CEEB, #4682B4)', filter: 'blur(10px)' }}
          />
        </div>

        <div className="absolute inset-0 rounded-b-3xl bg-primaryLight opacity-40" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-400 to-primaryDark drop-shadow mb-4"
          >
            Partner With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl text-darkText font-medium mb-6"
          >
            Empower. Inspire. Uplift. Together, we create brighter futures.
          </motion.p>
          <motion.a
            href="#cta"
            className="inline-block bg-primary text-light px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-primaryDark transition"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
          >
            Become a Partner
          </motion.a>
        </div>
      </motion.section>

      {/* Why Partner Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto px-4 mb-16 animate-fade-in relative"
      >
        {/* Soft background accent */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-primaryLight opacity-30 rounded-full blur-2xl z-0" />
        <h2 className="text-3xl font-bold text-center text-primary mb-10 relative z-10">Why Partner With Sitaare?</h2>
        <div className="flex justify-center relative z-10">
          {/* Stepper/Timeline */}
          <motion.ol
            className="w-full max-w-2xl relative border-l-4 border-primaryLight pl-8 space-y-8"
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[{
              icon: <FaStar />, title: 'Transformative Impact', desc: 'Your partnership directly empowers girls from vulnerable backgrounds, helping them reclaim their dreams and build a future filled with hope and opportunity.'
            }, {
              icon: <FaHeart />, title: 'Holistic Approach', desc: 'We go beyond basic care—providing emotional support, education, life skills, and cultural enrichment to nurture every aspect of a child\'s growth.'
            }, {
              icon: <FaLightbulb />, title: 'Transparent & Accountable', desc: 'We operate with integrity, transparency, and measurable outcomes, ensuring every contribution creates real, lasting change.'
            }, {
              icon: <FaUsers />, title: 'Collaborative Spirit', desc: 'We believe in the power of community and co-creation. By joining hands, we amplify our collective impact and reach.'
            }, {
              icon: <FaLeaf />, title: 'Sustainable Change', desc: 'Our programs are designed for long-term, scalable impact—uplifting not just individuals, but entire communities.'
            }, {
              icon: <FaHandsHelping />, title: 'A Movement of Love & Empowerment', desc: 'At Sitaare, every action is rooted in compassion, dignity, and the unwavering belief that every child is a star waiting to shine.'
            }].map((item, idx) => (
              <motion.li
                key={item.title}
                className="flex items-start gap-4"
                variants={itemVariants}
                whileHover={{ scale: 1.03, boxShadow: '0 4px 16px rgba(233,30,99,0.10)' }}
              >
                <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-light text-2xl shadow-lg">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">{item.title}</h3>
                  <p className="text-darkText">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
        {/* Highlighted quote/stat */}
        <motion.div
          className="mt-10 bg-primaryLight rounded-2xl p-6 text-center shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <blockquote className="text-xl font-semibold text-primary italic mb-2">"Even a single star can light the dark sky — come help them shine."</blockquote>
          <div className="text-primaryDark font-bold">
            Join <AnimatedCounter value={20} />+ partners already making a difference!
          </div>
        </motion.div>
      </motion.section>

      {/* Partnership Types */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto px-4 mb-16"
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Ways to Partner</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {partnerTypes.map((type, idx) => (
            <motion.div
              key={type.title}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border border-primaryLight perspective-1000 group cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <motion.div
                variants={iconHover}
                className="mb-4 group-hover:drop-shadow-lg transition-all duration-300"
              >
                {type.icon}
              </motion.div>
              <motion.div variants={cardContentHover}>
                <h3 className="font-semibold text-lg mb-2 text-primary group-hover:text-primaryDark transition-colors duration-300">{type.title}</h3>
                <p className="text-grayText text-base group-hover:text-darkText transition-colors duration-300">{type.desc}</p>
              </motion.div>
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-primaryDark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Testimonial Carousel */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-2xl mx-auto px-4 mb-16"
      >
        <h2 className="text-2xl font-bold text-center text-primary mb-4">What Our Partners Say</h2>
        <motion.div
          className="relative bg-primaryLight rounded-xl shadow-lg p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-primaryDark hover:text-primary text-2xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >&#8592;</motion.button>
          <motion.blockquote
            className="italic text-lg text-darkText mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            "{testimonials[testimonialIdx].quote}"
          </motion.blockquote>
          <div className="font-semibold text-primary">{testimonials[testimonialIdx].name}</div>
          <div className="text-sm text-grayText">{testimonials[testimonialIdx].role}</div>
          <motion.button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-primaryDark hover:text-primary text-2xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >&#8594;</motion.button>
        </motion.div>
      </motion.section>

      {/* CTA Banner */}
      <motion.section
        id="cta"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-gradient-to-r from-primary to-primaryDark py-12 px-4 text-center rounded-3xl max-w-4xl mx-auto mb-16 shadow-2xl relative overflow-hidden"
      >
        {/* Particle Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => {
            const size = 8 + Math.random() * 6; // 8-14px
            const color = ["#FFD700", "#ffe066", "#fffbe7"][Math.floor(Math.random() * 3)];
            return (
              <motion.svg
                key={i}
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute"
                style={{
                  left: `${Math.random() * 95}%`,
                  top: `${Math.random() * 80}%`,
                  zIndex: 1,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0.7, 1, 0], scale: [0, 1, 0.8, 1, 0] }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                <polygon
                  points="12,2 14.09,8.26 20.97,8.27 15.45,12.14 17.54,18.4 12,14.53 6.46,18.4 8.55,12.14 3.03,8.27 9.91,8.26"
                  fill={color}
                  stroke="#FFD700"
                  strokeWidth="0.7"
                  style={{ filter: 'drop-shadow(0 0 4px #FFD700)' }}
                />
              </motion.svg>
            );
          })}
        </div>

        <motion.h2
          className="text-3xl font-extrabold text-light mb-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Ready to Make a Difference?
        </motion.h2>
        <motion.p
          className="text-lg text-primaryLight mb-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Let's start a conversation! Reach out to explore partnership opportunities and become a catalyst for change.
        </motion.p>
        <motion.a
          href="/contact-us"
          className="inline-block bg-light text-primary px-8 py-3 rounded-full font-bold shadow hover:bg-primaryLight transition relative z-10"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.96 }}
        >
          Contact Us
        </motion.a>
      </motion.section>
    </motion.div>
  );
};

export default PartnerWithUs; 

// Animations (add to your global CSS or Tailwind config if not present):
// .animate-fade-in { animation: fadeIn 1s ease both; }
// @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } } 