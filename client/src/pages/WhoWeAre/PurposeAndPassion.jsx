import { motion } from 'framer-motion';
import { pageVariants } from '../../navs';
import {
  FaHandsHelping, FaBalanceScale, FaUsers, FaLeaf, FaUniversalAccess, FaTint, FaFemale,
  FaAppleAlt, FaChild, FaRoad, FaSmile, FaHeartbeat, FaHeart, FaStar, FaQuoteLeft
} from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HohLogo from '../../assets/hoh_logo.png';

// Placeholder image component
const ImagePlaceholder = ({ alt = 'Image Placeholder', className = '' }) => (
  <div className="bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-gray-500 text-xs rounded-xl" style={{ minHeight: 180 }}>
    {alt}
  </div>
);

const values = [
  { icon: <FaHandsHelping className="text-pink-500 text-2xl" />, title: 'Empathy First', desc: 'Designing solutions rooted in real-life needs and experiences.' },
  { icon: <FaBalanceScale className="text-blue-500 text-2xl" />, title: 'Accountability', desc: 'We operate transparently with clear, measurable outcomes.' },
  { icon: <FaUsers className="text-green-500 text-2xl" />, title: 'Collaboration', desc: 'We thrive on partnerships—with communities, government, and civil society.' },
  { icon: <FaLeaf className="text-yellow-500 text-2xl" />, title: 'Sustainability', desc: 'Every project is built for long-term, scalable impact.' },
  { icon: <FaUniversalAccess className="text-purple-500 text-2xl" />, title: 'Inclusivity', desc: 'We prioritize the most vulnerable, leaving no one behind.' },
];

const initiatives = [
  { icon: <FaTint className="text-red-500 text-xl" />, title: 'Rakt-Setu', desc: 'Emergency blood donations connecting donors with patients in minutes.' },
  { icon: <FaFemale className="text-pink-500 text-xl" />, title: 'Pad House', desc: 'Promoting menstrual hygiene and distributing affordable sanitary products.' },
  { icon: <FaAppleAlt className="text-green-500 text-xl" />, title: 'Project Poshan', desc: 'Nutritious meals for hospitalized families and underprivileged children.' },
  { icon: <FaChild className="text-yellow-500 text-xl" />, title: 'Project Maya', desc: 'Specialized pediatric nutrition support for malnourished rural children.' },
  { icon: <FaRoad className="text-blue-500 text-xl" />, title: 'Project Raah', desc: 'Mobile learning and education for migrant children.' },
  { icon: <FaSmile className="text-pink-400 text-xl" />, title: 'Project Bachpan', desc: 'Transforming Anganwadi centers with joyful early education and nutrition.' },
  { icon: <FaHeartbeat className="text-red-400 text-xl" />, title: 'Saharaa', desc: 'Emergency medical aid for life-saving surgeries and treatments.' },
];

const PurposeAndPassion = () => {
  useEffect(() => { AOS.init({ once: true, duration: 800 }); }, []);

  // Additional animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardHover = {
    hover: {
      y: -8,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50 text-darkText"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative z-20 w-full text-center py-14 lg:py-20">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-8"
          >
            <FaHeart className="text-6xl text-pink-500 mx-auto mb-4" />
          </motion.div>
          <motion.h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Who We Are
          </motion.h1>
          <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A youth-led movement transforming lives through compassion, innovation, and unwavering commitment to human dignity.
          </motion.p>
        </div>
      </div>

      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* About Section */}
          <motion.section 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="mb-20"
            data-aos="fade-up"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                variants={fadeInUp}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={HohLogo} 
                    alt="House of Humanity Logo" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="space-y-6"
              >
                <div className="inline-block">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    About House of Humanity
                  </h2>
                  <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-24"></div>
                </div>
                
                <p className="text-lg leading-relaxed text-gray-600">
                  House of Humanity Charitable Trust is a youth-led, grassroots non-profit organization founded with an unwavering belief in equity, dignity, and collective upliftment.
                  We drive holistic, inclusive, and sustainable development across India by addressing critical social challenges through deeply human-centered solutions.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-600">
                  From humble beginnings as a volunteer group, we've grown into a multi-project movement impacting thousands of lives.
                  Our work spans health, education, nutrition, hygiene, and child protection—fueled by empathy and sustained by a community of changemakers.
                </p>
                
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-2 text-purple-600">
                    <FaUsers className="text-xl" />
                    <span className="font-semibold">Youth-Led</span>
                  </div>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <div className="flex items-center gap-2 text-pink-600">
                    <FaHeart className="text-xl" />
                    <span className="font-semibold">Grassroots Impact</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Elegant Divider */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center my-16"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-pink-300"></div>
              <div className="flex gap-2">
                <FaStar className="text-pink-400 text-lg" />
                <FaStar className="text-purple-400 text-lg" />
                <FaStar className="text-pink-400 text-lg" />
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-pink-300"></div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.section 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="mb-20" 
            data-aos="fade-up"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
             
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide every action, decision, and initiative we undertake.
              </p>
            </motion.div>
            
            <div className="mb-12">
              <img
                src="/values.jpg"
                alt="Our Core Values"
                width={1000}
                height={500}
               className="w-full max-w-4xl h-64 object-cover rounded-2xl shadow-lg mx-auto"
                style={{ aspectRatio: '1000/500' }}
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  whileHover="hover"
                  className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border-t-4"
                  style={{ borderColor: ['#F472B6', '#60A5FA', '#34D399', '#FBBF24', '#A78BFA'][idx] }}
                  data-aos="fade-in"
                  data-aos-delay={idx * 120}
                >
                  <motion.div variants={cardHover}>
                    <div className="mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Elegant Divider */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center my-16"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-purple-300"></div>
              <div className="flex gap-2">
                <FaStar className="text-purple-400 text-lg" />
                <FaStar className="text-pink-400 text-lg" />
                <FaStar className="text-purple-400 text-lg" />
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-purple-300"></div>
            </div>
          </motion.div>

          {/* Initiatives Section */}
          <motion.section 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="mb-20" 
            data-aos="fade-up"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transforming communities through targeted programs that address real needs with sustainable solutions.
              </p>
            </motion.div>
            
            <div className="mb-12">
              <img
                src="/initiatives.png"
                alt="Initiatives Banner"
                className="w-full max-w-4xl h-64 object-cover rounded-2xl shadow-lg mx-auto"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {initiatives.map((initiative, idx) => (
                <motion.div
                  key={initiative.title}
                  variants={fadeInUp}
                  whileHover="hover"
                  className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border-t-4"
                  style={{ borderColor: ['#F87171', '#F472B6', '#34D399', '#FBBF24', '#60A5FA', '#F9A8D4', '#F87171'][idx] }}
                  data-aos="fade-in"
                  data-aos-delay={idx * 120}
                >
                  <motion.div variants={cardHover}>
                    <div className="mb-6">
                      {initiative.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{initiative.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{initiative.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Elegant Divider */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center my-16"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-pink-300"></div>
              <div className="flex gap-2">
                <FaStar className="text-pink-400 text-lg" />
                <FaStar className="text-purple-400 text-lg" />
                <FaStar className="text-pink-400 text-lg" />
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-pink-300"></div>
            </div>
          </motion.div>

          {/* Project Sitaare Spotlight */}
          <motion.section 
            variants={fadeInUp}
            className="mb-20" 
            data-aos="fade-up"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <FaStar className="text-4xl text-yellow-300 mx-auto mb-4" />
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    Project <span className="text-yellow-300">Sitaare</span>
                  </h2>
                  <p className="text-xl text-purple-100 mb-6">Our Flagship Shelter Home Initiative</p>
                </div>
                
                <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
                  <p>
                    Among all our programs, <strong>Project Sitaare</strong> stands as a beacon of our core belief: <span className="text-yellow-300 font-semibold">empowerment through care</span>.
                    It is more than shelter—it's a safe haven where vulnerable girls (ages 6–18) rebuild, learn, and thrive.
                  </p>
                  
                  <p>
                    Sitaare is designed under the <em>Juvenile Justice (Care and Protection of Children) Act, 2015</em> and follows the
                    <em> Integrated Child Protection Scheme (ICPS)</em>, working directly with the <strong>DCPU</strong> and <strong>CWC</strong>.
                  </p>
                  
                  <p>
                    With holistic programs—emotional healing, digital literacy, healthcare, art, sports, and leadership training—Sitaare is where every girl finds the sky to shine.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Inspirational Quote */}
          <motion.section 
            variants={fadeInUp}
            className="text-center" 
            data-aos="fade-up"
          >
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 lg:p-12 relative">
              <FaQuoteLeft className="text-4xl text-purple-300 absolute top-6 left-6" />
              
              <blockquote className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 italic max-w-3xl mx-auto">
                Sitaare is not just about shelter—it's about possibility, potential, and purpose.
              </blockquote>
              
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>
          </motion.section>

        </div>
      </div>
    </motion.div>
  );
};

export default PurposeAndPassion;