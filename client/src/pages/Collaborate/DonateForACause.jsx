import { motion } from "framer-motion";
import { pageVariants } from "../../navs";
import Lottie from "lottie-react";
import starsAnimation from "../../assets/stars.json";
import {
  FaBook,
  FaApple,
  FaBirthdayCake,
  FaSmile,
  FaHeart,
  FaHandHoldingHeart,
  FaUtensils,
  FaUserFriends,
  FaArrowUp,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useRef } from "react";
import starSuccessAnimation from "../../assets/Star Success.json";
import config from "../../config/config";

const donateOptions = [
  {
    id: "1",
    name: "Sponsor",
    purpose: "Sitaare Sponsor",
    description: "₹3,500/month ensures a girl receives quality education, books & supplies.",
    amount: 3500,
    icon: FaBook,
    color: "#BC1782",
  },
  {
    id: "2",
    name: "Support Daily Nutrition",
    purpose: "Sitaare Nutrition",
    description: "₹2,000/month covers daily meals to keep her healthy and energized.",
    amount: 2000,
    icon: FaApple,
    color: "#E94BA2",
  },
  {
    id: "3",
    name: "Adopt a Sitaare for a Month",
    purpose: "Sitaare Full Care",
    description: "₹11,551 provides full care including housing, education & health.",
    amount: 11551,
    icon: FaHandHoldingHeart,
    color: "#FFD700",
    highlight: true,
  },
  {
    id: "4",
    name: "One-Time Meal (All Sitaare)",
    purpose: "Sitaare One-Time Meal",
    description: "₹4,000 sponsors a wholesome meal for all our girls.",
    amount: 4000,
    icon: FaUtensils,
    color: "#A78BFA",
  },
  {
    id: "5",
    name: "Meal for 2 Girls (Full Day)",
    purpose: "Sitaare Meal for Two",
    description: "₹8,000 feeds two girls for an entire day with nutritious meals.",
    amount: 8000,
    icon: FaUserFriends,
    color: "#7C0C55",
  },
  {
    id: "6",
    name: "Sponsor a Celebration",
    purpose: "Sitaare Celebration",
    description: "₹15,000 funds a joyful birthday or festival celebration.",
    amount: 15000,
    icon: FaBirthdayCake,
    color: "#FF8EB5",
  },
  {
    id: "7",
    name: "Custom Donation",
    purpose: "General Donation",
    description: "Choose your amount to support our mission.",
    amount: undefined,
    icon: FaApple,
    color: "#D61A91",
    custom: true,
  },
];

const impactStats = [
  {
    icon: <FaSmile className="text-pink-500 text-4xl impact-icon" />,
    label: "Girls Empowered",
    value: 25,
    bg: "from-pink-100 to-pink-50",
    border: "border-pink-300",
    story: "Each girl is now dreaming bigger.",
    badge: "Milestone!",
    animation: {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    },
    iconAnim: "impact-pulse",
    offset: "md:mt-8",
  },
  {
    icon: <FaHeart className="text-blue-500 text-4xl impact-icon" />,
    label: "Donations Received",
    value: 350,
    bg: "from-blue-100 to-blue-50",
    border: "border-blue-300",
    story: "Every rupee brings hope.",
    animation: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
    },
    iconAnim: "impact-beat",
    offset: "md:mt-0",
  },
  {
    icon: <FaUserFriends className="text-green-500 text-4xl impact-icon" />,
    label: "Volunteers Joined",
    value: 45,
    bg: "from-green-100 to-green-50",
    border: "border-green-300",
    story: "A growing family of changemakers.",
    animation: {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
    },
    iconAnim: "impact-wave",
    offset: "md:-mt-8",
  },
];

const testimonials = [
  {
    text: "Sitaare gave me a new family and the courage to dream big. I am forever grateful!",
    name: "Priya",
    role: "Beneficiary",
  },
  {
    text: "Supporting Sitaare is the best decision I made. The impact is real and visible.",
    name: "Neha",
    role: "Donor",
  },
  {
    text: "Volunteering here changed my life. The girls inspire me every day.",
    name: "Amit",
    role: "Volunteer",
  },
];

function AnimatedCounter({ value, duration = 2 }) {
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

  return <span>{count}</span>;
}

function TestimonialCarousel({ testimonials }) {
  const [idx, setIdx] = useState(0);
  return (
    <div className="relative flex flex-col items-center">
      <motion.p
        key={testimonials[idx].text}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-lg text-gray-700 italic mb-4 text-center min-h-[60px]"
      >
        "{testimonials[idx].text}"
      </motion.p>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#BC1782] font-bold">{testimonials[idx].name}</span>
        <span className="text-xs text-gray-400">({testimonials[idx].role})</span>
      </div>
      <div className="flex gap-2 mt-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-3 h-3 rounded-full ${i === idx ? "bg-[#BC1782]" : "bg-gray-300"} transition`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const DonateForACause = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const confettiTimeout = useRef(null);

  const triggerCelebration = () => {
    setShowCelebration(true);
    if (confettiTimeout.current) clearTimeout(confettiTimeout.current);
    confettiTimeout.current = setTimeout(() => {
      setShowCelebration(false);
    }, 5000);
  };

  const handleDonateClick = (donationOption) => {
    setSelectedDonation(donationOption);
    triggerCelebration();
  };

  const handleRedirectToDonate = () => {
    // let url = `${config.HOH_BASE_URL}/donate-for-a-cause`;
    let url = `/contact-us`;
    if (selectedDonation) {
      const queryParams = new URLSearchParams({
        amount: selectedDonation.amount ? selectedDonation.amount.toString() : "",
        purpose: encodeURIComponent(selectedDonation.purpose),
      });
      url = `${url}?${queryParams.toString()}`;
    }
    console.log("Redirecting to donation URL:", url);
    window.open(url, "_blank");
    setShowCelebration(false);
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 to-pink-50 text-[#4B4B4B] px-2 sm:px-4 md:px-8 pb-24 overflow-x-hidden"
    >
      {/* Celebration Confetti and Modal */}
      {showCelebration && (
        <>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={350}
            recycle={false}
            gravity={0.25}
            className="fixed top-0 left-0 w-screen h-screen z-[1000] pointer-events-none"
          />
          <div className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/40">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center max-w-md mx-auto border-4 border-pink-200"
            >
              <div className="w-32 h-32 mb-4">
                <Lottie animationData={starSuccessAnimation} loop={false} autoplay={true} />
              </div>
              <h2 className="text-2xl font-bold text-[#BC1782] mb-2 text-center">
                Thank You for Your Generosity!
              </h2>
              <p className="text-lg text-gray-700 text-center mb-4">
                Your donation is making a real difference. Together, we help every Sitaare shine brighter!
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleRedirectToDonate}
                  className="px-6 py-3 bg-[#BC1782] text-white rounded-full font-semibold shadow hover:bg-[#E94BA2] transition flex items-center gap-2"
                >
                  <FaHeart />
                  Donate Now
                </button>
                <button
                  onClick={() => setShowCelebration(false)}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-semibold shadow hover:bg-gray-300 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}

      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center py-10 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Lottie
            animationData={starsAnimation}
            loop
            autoplay
            className="w-full h-full opacity-60 blur-sm scale-110"
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-center text-[#BC1782] drop-shadow mb-4 px-2"
        >
          Every Gift is a New Beginning
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 text-base xs:text-lg sm:text-xl text-center max-w-2xl mx-auto mb-6 text-[#7C0C55] font-medium px-2"
        >
          Your donation transforms lives—providing safety, education, nutrition, and hope for every Sitaare girl. Choose your impact below and help a star shine bright.
        </motion.p>

        {/* Inspiring Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 italic text-base xs:text-lg sm:text-xl text-[#BC1782] text-center mt-4 font-semibold border-l-4 border-[#E94BA2] pl-4 mx-auto max-w-2xl px-2"
        >
          "Even a single star can light the dark sky — your kindness helps them shine."
        </motion.blockquote>
      </div>

      {/* Donation Options Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 md:gap-8 max-w-6xl mx-auto w-full"
        initial="initial"
        animate="animate"
        variants={{
          initial: {},
          animate: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {donateOptions.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              initial: { opacity: 0, y: 30, scale: 0.95 },
              animate: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 100 },
              },
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px rgba(233,30,99,0.12)",
            }}
            whileTap={{ scale: 0.97 }}
            className={`bg-white p-4 xs:p-6 md:p-8 rounded-3xl shadow-xl transition text-center relative border-2 ${
              item.highlight ? "border-yellow-300" : "border-pink-100"
            } overflow-hidden w-full max-w-xs mx-auto flex flex-col h-full cursor-pointer`}
            onClick={() => handleDonateClick(item)}
          >
            {item.highlight && (
              <div className="absolute top-4 right-4 bg-yellow-300 text-yellow-900 font-bold px-3 py-1 rounded-full text-xs shadow-md animate-pulse z-20">
                Most Impactful
              </div>
            )}
            <div className="flex flex-col flex-grow justify-between h-full">
              <div className="flex flex-col flex-grow">
                <div className="flex justify-center mb-4">
                  <item.icon className="text-3xl xs:text-4xl" style={{ color: item.color }} />
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#BC1782] mb-2 break-words">
                  {item.name}
                </h3>
                <p
                  className="text-xs xs:text-sm sm:text-base text-gray-700 mb-4 min-h-[36px] sm:min-h-[48px] break-words"
                  style={{ minHeight: "48px" }}
                >
                  {item.description}
                </p>
              </div>
              <div className="mt-auto">
                <button
                  onClick={() => handleDonateClick(item)}
                  className="bg-[#BC1782] hover:bg-[#E94BA2] text-white font-semibold px-4 py-2 rounded-md shadow-md transition text-sm xs:text-base w-full"
                >
                  {item.custom ? "Donate Custom" : `Donate ₹${item.amount ? item.amount.toLocaleString() : "Custom"}`}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Impact Counter Section */}
      <div className="relative z-10 max-w-4xl mx-auto mt-16 mb-12 px-2">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-8 py-8 w-full">
          {impactStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={stat.animation.initial}
              animate={stat.animation.animate}
              className={`group bg-gradient-to-br ${stat.bg} ${stat.border} border-2 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-between w-full md:w-[340px] h-[280px] relative`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {stat.badge && (
                <div className="absolute top-4 left-4 bg-yellow-300 text-yellow-900 font-bold px-3 py-1 rounded-full text-xs shadow-md animate-pulse z-20">
                  {stat.badge}
                </div>
              )}
              <span className={`mb-2 ${stat.iconAnim}`}>{stat.icon}</span>
              <span className="text-2xl xs:text-3xl sm:text-4xl font-black mt-2 mb-1 text-pink-600 group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="text-gray-700 font-bold uppercase tracking-wider text-xs xs:text-sm sm:text-base text-center mb-1">
                {stat.label}
              </span>
              <span className="text-gray-500 text-xs xs:text-sm text-center italic">
                {stat.story}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative z-10 max-w-2xl mx-auto mb-20 px-2">
        <div className="bg-white/80 rounded-3xl shadow-xl p-4 xs:p-6 md:p-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-lg xs:text-xl sm:text-2xl font-bold text-[#BC1782] mb-6 text-center"
          >
            What Our Supporters Say
          </motion.h2>
          <div className="relative">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </div>

      {/* HOH Website Donation Link */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10 max-w-4xl mx-auto mb-16 px-2"
      >
        <div className="bg-gradient-to-br from-[#BC1782] to-[#E94BA2] rounded-3xl shadow-2xl p-6 xs:p-8 md:p-10 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4"
            >
              Ready to Make a Difference?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-base xs:text-lg mb-6 text-white/90 max-w-2xl mx-auto"
            >
              Visit our main website to explore more donation options and learn about our comprehensive programs at House of Humanity.
            </motion.p>
            <motion.a
              href={`${config.HOH_BASE_URL}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-[#BC1782] font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base xs:text-lg"
            >
              <FaHeart className="text-[#BC1782]" />
              Visit House of Humanity
              <FaArrowUp className="text-[#BC1782] transform rotate-45" />
            </motion.a>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-sm text-white/70 mt-4"
            >
              Your support helps us create more safe spaces for girls in need
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Sticky Donate CTA for mobile */}
      <div className="fixed bottom-2 left-0 w-full flex justify-center z-50 sm:hidden pointer-events-none px-2">
        <button
          onClick={handleRedirectToDonate}
          className="pointer-events-auto bg-gradient-to-r from-[#BC1782] to-[#E94BA2] text-white font-bold px-4 py-2 rounded-full shadow-lg animate-pulse text-base border-2 border-white w-full max-w-xs"
        >
          Donate Now →
        </button>
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#BC1782]/10 to-transparent rounded-full -ml-16 -mt-16 z-0"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#D61A91]/10 to-transparent rounded-full -mr-12 -mb-12 z-0"></div>
    </motion.div>
  );
};

export default DonateForACause;