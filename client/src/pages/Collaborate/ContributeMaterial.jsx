import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaBox, FaTruck, FaHandsHelping, FaHeart, FaStar, FaGift, FaUsers, FaSmile, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Lottie from 'lottie-react';
import starsAnimation from '../../assets/stars.json';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const cardHover = {
  hover: { 
    scale: 1.05, 
    rotateY: 10,
    rotateX: 5,
    boxShadow: '0 20px 40px rgba(233,30,99,0.3)',
    transition: { type: 'spring', stiffness: 300 }
  },
  tap: { scale: 0.95 }
};

const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Material categories with icons and descriptions
const materialCategories = [
  {
    icon: <FaBox className="text-4xl" />,
    title: "Educational Supplies",
    items: ["Books & Stationery", "Art Materials", "Science Kits", "Digital Devices"],
    color: "from-blue-400 to-purple-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: <FaGift className="text-4xl" />,
    title: "Personal Care Items",
    items: ["Hygiene Products", "Clothing", "Shoes", "Accessories"],
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50"
  },
  {
    icon: <FaHeart className="text-4xl" />,
    title: "Health & Wellness",
    items: ["Medical Supplies", "Vitamins", "First Aid Kits", "Fitness Equipment"],
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50"
  },
  {
    icon: <FaStar className="text-4xl" />,
    title: "Recreational Items",
    items: ["Toys & Games", "Sports Equipment", "Musical Instruments", "Craft Supplies"],
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50"
  }
];

// Impact statistics
const impactStats = [
  { number: 500, label: "Items Donated", icon: <FaBox />, color: "#3B82F6" },
  { number: 150, label: "Families Helped", icon: <FaUsers />, color: "#EC4899" },
  { number: 25, label: "Partners", icon: <FaHandsHelping />, color: "#10B981" },
  { number: 1000, label: "Smiles Created", icon: <FaSmile />, color: "#F59E0B" }
];

// Animated Counter Component
function AnimatedCounter({ value, duration = 2, ...props }) {
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
  return <span {...props}>{count}+</span>;
}

const ContributeMaterial = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50 relative overflow-hidden"
    >
      {/* Background Lottie Animation */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 0.3 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Lottie
          animationData={starsAnimation}
          loop
          autoplay
          className="w-full h-full scale-[1.05] opacity-30"
        />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        variants={itemVariants}
        className="relative z-10 text-center py-20 px-4"
      >
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          className="mb-8"
        >
          <FaGift className="text-8xl mx-auto text-primary animate-pulse" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-blue-600"
        >
          Contribute Material
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Your material donations create tangible impact. Every item you contribute helps our Sitaare girls thrive and dream bigger.
        </motion.p>

        <motion.button
          onClick={() => setIsFormVisible(true)}
          className="bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Contributing <FaArrowRight className="inline ml-2" />
        </motion.button>
      </motion.section>

      {/* Impact Statistics */}
      <motion.section
        variants={itemVariants}
        className="relative z-10 max-w-6xl mx-auto px-4 py-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Our Impact Through Your Contributions
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="bg-white rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: stat.color }}>
                <AnimatedCounter value={stat.number} />
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Material Categories */}
      <motion.section
        variants={itemVariants}
        className="relative z-10 max-w-6xl mx-auto px-4 py-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          What We Need Most
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {materialCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={cardHover}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${category.bgColor} rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-gray-200`}
              onClick={() => setSelectedCategory(category)}
            >
              <div className={`mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{category.title}</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                {category.items.map((item, itemIdx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIdx * 0.1 }}
                    className="flex items-center justify-center"
                  >
                    <FaCheckCircle className="text-green-500 mr-2 text-xs" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        variants={itemVariants}
        className="relative z-10 max-w-4xl mx-auto px-4 py-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          How Your Contribution Works
        </motion.h2>
        
        <div className="space-y-8">
          {[
            { step: 1, title: "Choose What to Give", desc: "Select from our needed items or suggest something special", icon: <FaGift /> },
            { step: 2, title: "Contact Us", desc: "Reach out to coordinate pickup or drop-off arrangements", icon: <FaHandsHelping /> },
            { step: 3, title: "We Deliver", desc: "Your items are safely delivered to our Sitaare girls", icon: <FaTruck /> },
            { step: 4, title: "See Impact", desc: "Receive updates on how your contribution made a difference", icon: <FaHeart /> }
          ].map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex items-center space-x-6 bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {step.step}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
              <div className="text-3xl text-primary">
                {step.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        variants={itemVariants}
        className="relative z-10 max-w-4xl mx-auto px-4 py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Every item you contribute brings us one step closer to our mission of empowering every Sitaare girl.
          </p>
          <motion.button
            onClick={() => setIsFormVisible(true)}
            className="bg-white text-primary px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Contributing Today <FaArrowRight className="inline ml-2" />
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isFormVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsFormVisible(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Contribute Materials
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="What would you like to contribute?"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <motion.button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primaryDark transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Contribution Request
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContributeMaterial; 