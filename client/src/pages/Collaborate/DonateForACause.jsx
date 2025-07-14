import { motion } from 'framer-motion';
import { pageVariants } from '../../navs';
import Foto from "../../components/foto";
import Lottie from 'lottie-react';
import starsAnimation from '../../assets/stars.json';
import { FaBook, FaApple, FaAppleAlt, FaBirthdayCake, FaSmile, FaHeart, FaHandHoldingHeart, FaStar, FaUtensils, FaUserFriends, FaBrain, FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config/config';
import Confetti from 'react-confetti';
import { useRef } from 'react';
import starSuccessAnimation from '../../assets/Star Success.json';

const donateOptions = [
  {
    title: "Sponsor",
    amount: 3500,
    description:
      "₹3,500/month ensures a girl receives quality education, books & supplies.",
    icon: FaBook,
    color: "#BC1782",
  },
  {
    title: "Support Daily Nutrition",
    amount: 2000,
    description:
      "₹2,000/month covers daily meals to keep her healthy and energized.",
    icon: FaApple,
    color: "#E94BA2",
  },
  {
    title: "Adopt a Sitaare for a Month",
    amount: 11551,
    description:
      "₹11,551 provides full care including housing, education & health.",
    icon: FaHandHoldingHeart,
    color: "#FFD700",
    highlight: true,
  },
  {
    title: "One-Time Meal (All Sitaare)",
    amount: 4000,
    description: "₹4,000 sponsors a wholesome meal for all our girls.",
    icon: FaUtensils,
    color: "#A78BFA",
  },
  {
    title: "Meal for 2 Girls (Full Day)",
    amount: 8000,
    description:
      "₹8,000 feeds two girls for an entire day with nutritious meals.",
    icon: FaUserFriends,
    color: "#7C0C55",
  },
  {
    title: "Sponsor a Celebration",
    amount: 15000,
    description: "₹15,000 funds a joyful birthday or festival celebration.",
    icon: FaBirthdayCake,
    color: "#FF8EB5",
  },
  {
    title: "Custom Donation",
    amount: null, // Indicates custom amount
    description: "Choose your own amount to support our mission.",
    icon: FaStar,
    color: "#D61A91",
    custom: true,
  },
];

const impactStats = [
  {
    icon: <FaSmile className="text-pink-500 text-4xl impact-icon" />,
    label: "Girls Empowered",
    value: 120,
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
    // ... (other stats remain unchanged)
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
  useState(() => {
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
  }, [value]);
  return <span>{count}</span>;
}

const DonateForACause = () => {
  const navigate = useNavigate();
  const [donateSuccess, setDonateSuccess] = useState(false);
  const [loadingIdx, setLoadingIdx] = useState(null); // for preset buttons
  const [loadingCustom, setLoadingCustom] = useState(false); // for custom form
  const [error, setError] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);
  const confettiTimeout = useRef(null);

  // Add formData and handleInputChange if not defined
  const [formData, setFormData] = useState({ amount: '', donorName: '', donorEmail: '', donorPhone: '', description: '', anonymous: false });
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // idx is only provided for preset buttons, isCustom is true for custom form
  const handleDonate = async (amount, idx = null, isCustom = false) => {
    triggerCelebration();
    if (!amount || amount < 1) {
      setError("Please enter a valid donation amount");
      return;
    }

    if (isCustom) {
      setLoadingCustom(true);
    } else {
      setLoadingIdx(idx);
    }
    setError('');
    setDonateSuccess(false);

    try {
      console.log('Creating order for amount:', amount);
      console.log('API URL:', `${config.API_BASE_URL}${config.API_ENDPOINTS.CREATE_ORDER}`);
      // Step 1: Create order on backend
      const orderResponse = await fetch(`${config.API_BASE_URL}${config.API_ENDPOINTS.CREATE_ORDER}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          donorName: 'Anonymous Donor',
          donorEmail: '',
          donorPhone: '',
          description: `Donation for Project Sitaare - ₹${amount}`,
          anonymous: true
        }),
      });

      console.log('Order response status:', orderResponse.status);
      if (!orderResponse.ok) {
        throw new Error(`HTTP error! status: ${orderResponse.status}`);
      }

      const orderData = await orderResponse.json();
      console.log('Order data:', orderData);

      if (!orderData.success) {
        throw new Error(orderData.error || 'Failed to create order');
      }

      // Step 2: Initialize Razorpay payment
      const options = {
        key: orderData.key_id,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: config.RAZORPAY.NAME,
        description: `Donation for Project Sitaare - ₹${amount}`,
        order_id: orderData.order.id,
        handler: async function (response) {
          try {
            console.log('Payment response:', response);
            // Step 3: Verify payment on backend
            const verifyResponse = await fetch(`${config.API_BASE_URL}${config.API_ENDPOINTS.VERIFY_PAYMENT}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                donationId: orderData.donationId
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              setDonateSuccess(true);
              setTimeout(() => setDonateSuccess(false), 3000);
            } else {
              setError('Payment verification failed. Please contact support.');
            }
          } catch (verifyError) {
            console.error('Payment verification error:', verifyError);
            setError('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: '',
          email: '',
          contact: '',
        },
        theme: {
          color: config.RAZORPAY.THEME_COLOR,
        },
        modal: {
          ondismiss: function() {
            if (isCustom) {
              setLoadingCustom(false);
            } else {
              setLoadingIdx(null);
            }
          }
        }
      };

      console.log('Razorpay options:', options);
      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error('Donation error:', error);
      setError(`Connection failed: ${error.message}. Please check if the backend server is running on ${config.API_BASE_URL}`);
    } finally {
      if (isCustom) {
        setLoadingCustom(false);
      } else {
        setLoadingIdx(null);
      }
    }
  };

  // Show celebration as soon as donate is clicked
  const triggerCelebration = () => {
    setShowCelebration(true);
    if (confettiTimeout.current) clearTimeout(confettiTimeout.current);
    confettiTimeout.current = setTimeout(() => {
      setShowCelebration(false);
    }, 3500);
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
              <h2 className="text-2xl font-bold text-[#BC1782] mb-2 text-center">Thank You for Your Generosity!</h2>
              <p className="text-lg text-gray-700 text-center mb-4">Your donation is making a real difference. Together, we help every Sitaare shine brighter!</p>
              <button
                onClick={() => setShowCelebration(false)}
                className="mt-2 px-6 py-2 bg-[#BC1782] text-white rounded-full font-semibold shadow hover:bg-[#E94BA2] transition"
              >
                Close
              </button>
            </motion.div>
          </div>
        </>
      )}
      {/* Error Display */}
      {error && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded shadow-lg max-w-md">
          {error}
          <button 
            onClick={() => setError('')} 
            className="ml-2 text-red-700 hover:text-red-900 font-bold"
          >
            ×
          </button>
        </div>
      )}

      {/* Success Display */}
      {donateSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-lg max-w-md">
          Thank you for your donation! Payment successful. 🎉
        </div>
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
          Your donation transforms lives—providing safety, education, nutrition,
          and hope for every Sitaare girl. Choose your impact below and help a
          star shine bright.
        </motion.p>
        {/* Donor Details Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative z-10 bg-white p-6 rounded-3xl shadow-xl border border-pink-100 max-w-2xl w-full mx-auto mb-8"
        >
          <h3 className="text-lg sm:text-xl font-bold text-[#BC1782] mb-4 text-center">
            Your Details
          </h3>
          {error && (
            <div className="text-red-500 text-center mb-4 text-sm">{error}</div>
          )}
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-200 text-sm"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email address"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-200 text-sm"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Your phone number"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-200 text-sm"
            />
          </div>
        </motion.div>
        {/* Inspiring Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 italic text-base xs:text-lg sm:text-xl text-[#BC1782] text-center mt-4 font-semibold border-l-4 border-[#E94BA2] pl-4 mx-auto max-w-2xl px-2"
        >
          “Even a single star can light the dark sky — your kindness helps them
          shine.”
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
        {donateOptions.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
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
              className={`bg-white p-4 xs:p-6 md:p-8 rounded-3xl shadow-xl transition text-center relative border-2 ${item.highlight ? 'border-yellow-300' : 'border-pink-100'} overflow-hidden w-full max-w-xs mx-auto flex flex-col h-full`} // <-- add h-full and flex-col
            >
              {item.highlight && (
                <div className="absolute top-4 right-4 bg-yellow-300 text-yellow-900 font-bold px-3 py-1 rounded-full text-xs shadow-md animate-pulse z-20">
                  Most Impactful
                </div>
              )}
              <div className="flex flex-col flex-grow justify-between h-full">
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-center mb-4">
                    <Icon className="text-3xl xs:text-4xl" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#BC1782] mb-2 break-words">{item.title}</h3>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-700 mb-4 min-h-[36px] sm:min-h-[48px] break-words" style={{ minHeight: '48px' }}>{item.description}</p>
                </div>
                <div className="mt-auto">
                  {item.custom ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const amount = parseInt(e.target.amount.value);
                        handleDonate(amount, null, true);
                      }}
                      className="flex flex-col items-center gap-2 xs:gap-3"
                    >
                      <input
                        name="amount"
                        type="number"
                        placeholder="Enter Amount (INR)"
                        className="border border-gray-300 rounded px-2 py-2 w-full focus:ring-2 focus:ring-pink-200 text-sm"
                        min="100"
                      />
                      <button
                        type="submit"
                        disabled={loadingCustom}
                        className={`bg-[#BC1782] hover:bg-[#E94BA2] text-white font-semibold px-4 py-2 rounded-md shadow-md transition relative overflow-hidden text-sm xs:text-base ${loadingCustom ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loadingCustom ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          <>
                            Donate Custom
                            {donateSuccess && (
                              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce text-xl">🎉</span>
                            )}
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <button
                      onClick={() => handleDonate(item.amount, idx, false)}
                      disabled={loadingIdx === idx}
                      className={`bg-[#BC1782] hover:bg-[#E94BA2] text-white font-semibold px-4 py-2 rounded-md shadow-md transition relative overflow-hidden text-sm xs:text-base ${loadingIdx === idx ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {loadingIdx === idx ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <>
                          Donate ₹{item.amount.toLocaleString()}
                          {donateSuccess && (
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce text-xl">🎉</span>
                          )}
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
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
              Visit our main website to explore more donation options and learn
              about our comprehensive programs at House of Humanity.
            </motion.p>
            <motion.a
              href="https://hoh-demo-website.web.app/"
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
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
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

// Simple testimonial carousel
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
        “{testimonials[idx].text}”
      </motion.p>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#BC1782] font-bold">
          {testimonials[idx].name}
        </span>
        <span className="text-xs text-gray-400">
          ({testimonials[idx].role})
        </span>
      </div>
      <div className="flex gap-2 mt-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-3 h-3 rounded-full ${
              i === idx ? "bg-[#BC1782]" : "bg-gray-300"
            } transition`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default DonateForACause;
