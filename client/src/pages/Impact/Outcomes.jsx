import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const outcomes = [
  {
    title: "Safe Home for 30+ Girls",
    description:
      "Creating a fortress of love and security where every girl feels cherished and protected.",
    icon: "🏠",
    details: [
      "Fortified living quarters with round-the-clock protection",
      "Advanced CCTV surveillance & biometric security systems",
      "State-of-the-art fire safety and emergency response protocols",
      "Dedicated security personnel ensuring absolute safety",
    ],
    impact: "Unbreakable foundation of safety and belonging",
  },
  {
    title: "Educational Excellence",
    description:
      "Unleashing boundless potential through premium education, scholarships, and transformative learning experiences.",
    icon: "📚",
    details: [
      "Premium school & college transportation services",
      "Elite tutoring and personalized academic mentoring",
      "Complete educational materials and resources",
      "Expert evening study support and guidance",
    ],
    impact: "Academic brilliance and intellectual empowerment",
  },
  {
    title: "Digital Renaissance",
    description:
      "Pioneering the future with revolutionary learning technologies and unlimited digital possibilities.",
    icon: "💻",
    details: [
      "Ultra-modern smart classrooms with interactive displays",
      "Premium computer laboratory with high-speed connectivity",
      "Personalized tablets and advanced learning platforms",
      "Unlimited Wi-Fi access and world-class online resources",
    ],
    impact: "Digital mastery and technological leadership",
  },
  {
    title: "Skills Mastery",
    description:
      "Forging unstoppable futures through transformative vocational training and entrepreneurial excellence.",
    icon: "🛠️",
    details: [
      "Professional-grade training in beauty, arts, and craftsmanship",
      "Exclusive internship programs with industry leaders",
      "Intensive career development and business mentorship",
      "Direct access to skilled professionals and experts",
    ],
    impact: "Financial independence and entrepreneurial success",
  },
  {
    title: "Health & Vitality",
    description:
      "Nurturing radiant health and unstoppable energy through premium nutrition and comprehensive wellness programs.",
    icon: "🏥",
    details: [
      "Gourmet nutritious meals with organic fresh produce",
      "VIP medical care with preventive health monitoring",
      "Expert mental health counseling and emotional support",
      "Premium personal care and hygiene essentials",
    ],
    impact: "Vibrant health and unshakeable well-being",
  },
  {
    title: "Creative Brilliance",
    description:
      "Igniting extraordinary talents through world-class artistic expression and unlimited creative exploration.",
    icon: "🎨",
    details: [
      "Professional art studios with premium equipment",
      "Exclusive music, dance, and performing arts programs",
      "Spectacular playground with championship-grade facilities",
      "Grand cultural celebrations and showcase events",
    ],
    impact: "Artistic mastery and creative leadership",
  },
  {
    title: "STEM Innovation Hub",
    description:
      "Building tomorrow's leaders through groundbreaking science, technology, and engineering excellence.",
    icon: "🔬",
    details: [
      "State-of-the-art STEM laboratory facilities",
      "Immersive hands-on experimentation and discovery",
      "Advanced robotics and coding programs",
      "Innovation incubator for breakthrough projects",
    ],
    impact: "Scientific excellence and technological innovation",
  },
  {
    title: "Support Ecosystem",
    description:
      "Cultivating unbreakable confidence and emotional resilience through expert guidance and unwavering support.",
    icon: "💝",
    details: [
      "Dedicated Child Welfare Officers for personalized care",
      "Expert psychological counseling and therapy services",
      "Inspirational mentorship from successful role models",
      "Comprehensive emotional intelligence development",
    ],
    impact: "Unshakeable confidence and emotional mastery",
  },
  {
    title: "Eco-Living Paradise",
    description:
      "Creating a sustainable utopia where environmental consciousness meets luxurious living and infinite possibilities.",
    icon: "🌱",
    details: [
      "Cutting-edge 8kW renewable solar energy system",
      "High-capacity solar water heating technology",
      "Breathtaking landscaped gardens and green spaces",
      "Sustainable architecture with zero carbon footprint",
    ],
    impact: "Environmental stewardship and sustainable future",
  },
];

const stats = [
  {
    number: "30+",
    label: "Future Leaders",
    sublabel: "Ages 6-18 years",
    color: "from-pink-500 to-rose-500",
  },
  {
    number: "₹11,551",
    label: "Monthly Investment",
    sublabel: "Per child transformation",
    color: "from-rose-500 to-pink-600",
  },
  {
    number: "₹37.2L",
    label: "Infrastructure",
    sublabel: "World-class facilities",
    color: "from-pink-600 to-rose-600",
  },
  {
    number: "₹1.02Cr",
    label: "Annual Budget",
    sublabel: "Premium operations",
    color: "from-rose-600 to-pink-700",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Outcomes() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50 text-gray-700 pb-12">
      {/* Hero Section */}
      <div className="relative z-20 py-20 lg:py-32 bg-gradient-to-r from-purple-900/90 to-pink-900/90">
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 -translate-y-8 text-4xl"
          >
            <FaStar className="text-pink-100 w-18 " />
          </motion.div>

          <motion.h1
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Revolutionary Outcomes of Project Sitaare
          </motion.h1>

          <motion.p
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-xl lg:text-2xl text-pink-100 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Orchestrating miraculous transformations through revolutionary
            safety protocols, world-class education, and unlimited empowerment —
            igniting extraordinary destinies, one precious star at a time.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto py-16 px-4">
        {/* Header Section */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Project Sitaare Revolution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
            Guaranteed Outcomes & Impact
          </h2>
          <p className="text-lg text-pink-600 max-w-3xl mx-auto leading-relaxed">
            A revolutionary shelter for orphaned girls aged 6-18, guaranteeing
            world-class care, premium education, and unlimited opportunities.
          </p>
        </div>

        {/* Statistics Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-gradient-to-r ${stat.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-center relative z-10">
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-75">{stat.sublabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outcomes Grid */}
        <div className="md:max-w-4xl mx-auto px-4 pt-16">
          <motion.h1
            className="text-4xl sm:text-5xl text-center font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Comprehensive Care & Development
          </motion.h1>
          <motion.p
            className="text-center font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            At Project Sitaare, comprehensive care means nurturing every aspect
            of a girl's growth—physical, emotional, educational, and social.
            From safe shelter and nutritious meals to mental wellness, life
            skills, and academic support, each element is intentionally designed
            to empower the whole child. Our approach ensures that every girl
            doesn’t just survive, but truly thrives with confidence and dignity.
          </motion.p>
        </div>

        <div
          className={`grid gap-8 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="group flex flex-col justify-evenly bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-pink-100 hover:border-pink-300 cursor-pointer transform hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div
                    className={`text-3xl mr-4 bg-gradient-to-r from-pink-100 to-rose-100 p-3 rounded-full transition-all duration-500 group-hover:scale-110 ${
                      hoveredCard === index
                        ? "bg-gradient-to-r from-pink-200 to-rose-200 shadow-lg"
                        : ""
                    }`}
                  >
                    {outcome.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                    {outcome.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {outcome.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-pink-600 mb-2 group-hover:text-pink-700 transition-colors duration-300">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {outcome.details.slice(0, 2).map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-start transition-all duration-300 group-hover:text-gray-700"
                      >
                        <span className="text-pink-400 mr-2 mt-1 group-hover:text-pink-500 transition-colors duration-300">
                          •
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`mt-4 p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-100 transition-all duration-500 group-hover:shadow-md min-h-20 flex flex-col justify-center ${
                    hoveredCard === index
                      ? "bg-gradient-to-r from-pink-100 to-rose-100 border-pink-200 transform scale-[1.02]"
                      : ""
                  }`}
                >
                  <div className="text-xs font-semibold text-pink-600 mb-1 group-hover:text-pink-700 transition-colors duration-300">
                    GUARANTEED IMPACT
                  </div>
                  <div className="text-sm font-medium text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    {outcome.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div
          className={`mt-16 grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3 text-3xl">🎯</span>
                Our Vision
              </h3>
              <p className="text-lg opacity-90 leading-relaxed">
                To create India's most extraordinary shelter for girls,
                transcending every standard to nurture unlimited success and
                infinite possibilities.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3 text-3xl">💝</span>
                Our Mission
              </h3>
              <p className="text-lg opacity-90 leading-relaxed">
                Delivering unconditional love and revolutionary development,
                ensuring every girl receives premium care and extraordinary
                opportunities.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          whileHover={{ scale: 1.01, y: -5 }}
          className={`mt-16 bg-gradient-to-r from-purple-900/90 to-pink-900/90 backdrop-blur-sm rounded-2xl p-12 text-center border border-white/20 shadow-xl transition-all duration-1000 delay-900 hover:shadow-2xl hover:border-white/30 group relative overflow-hidden ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50/10 to-rose-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-white">
              "The stars are waiting to shine - will you help them find their
              sky?"
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Project Sitaare is a launchpad for extraordinary dreams. Unite
              with us to transform this vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/donate-for-a-cause")}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Support Their Dreams
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/get-involved")}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
