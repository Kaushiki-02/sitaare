import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaHandsHelping, 
  FaBalanceScale, 
  FaUsers, 
  FaGraduationCap,
  FaHeart,
  FaPaintBrush,
  FaUserShield,
  FaArrowRight,
  FaHome,
  FaLaptopCode,
  FaHandHoldingHeart,
  FaStar
} from 'react-icons/fa';

const OurAspiration = () => {
  const navigate = useNavigate();
  
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7 }
    }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7 }
    }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardHover = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Core features data
  const coreFeatures = [
    {
      icon: FaHome,
      title: 'A Nurturing Home',
      description: 'Safe, family-like environment for 30+ girls where they are loved, respected, and encouraged to flourish.',
      color: '#E94BA2',
      bgGradient: 'from-pink-100 to-pink-50'
    },
    {
      icon: FaGraduationCap,
      title: 'Academic & Digital Support',
      description: 'Personalized academic coaching with access to digital learning tools and STEM exposure.',
      color: '#BC1782',
      bgGradient: 'from-purple-100 to-purple-50'
    },
    {
      icon: FaLaptopCode,
      title: 'Life Skills & Vocational Training',
      description: 'Structured life skills, financial literacy, computer training, and hands-on vocational workshops.',
      color: '#7C0C55',
      bgGradient: 'from-indigo-100 to-indigo-50'
    },
    {
      icon: FaHeart,
      title: 'Emotional & Mental Wellness',
      description: 'Emotional resilience through regular therapy, group counseling, and mindfulness practices.',
      color: '#FF8EB5',
      bgGradient: 'from-rose-100 to-rose-50'
    },
    {
      icon: FaPaintBrush,
      title: 'Sports, Arts & Culture',
      description: 'From football to classical dance, building confidence, leadership, and joy through extracurriculars.',
      color: '#CDB4DB',
      bgGradient: 'from-violet-100 to-violet-50'
    },
    {
      icon: FaUserShield,
      title: 'Reintegration & Aftercare',
      description: 'Mentorship, career guidance, and transitional housing support as they step into adulthood.',
      color: '#8E44AD',
      bgGradient: 'from-slate-100 to-slate-50'
    }
  ];

  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50 text-darkText"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/90 z-10 w-full h-full"></div>
        <div className="relative z-20 w-full text-center py-14 lg:py-20">
            <motion.div variants={fadeIn} className="mb-5">
              <FaStar className="text-5xl text-primaryLight mx-auto mb-5" />
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light mb-5 leading-tight">
              Our Aspiration
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl lg:text-2xl text-primaryLight mb-6 max-w-4xl mx-auto leading-relaxed">
              Project Sitaare is built on four core pillars—protection, education, health, and empowerment. Together, these form the foundation of every girl's journey toward a bright, self-reliant future.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-primaryLight">
                <FaUsers className="text-2xl" />
                <span className="text-lg font-semibold">30+ Girls Supported</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-primaryLight"></div>
              <div className="flex items-center gap-2 text-primaryLight">
                <FaBalanceScale className="text-2xl" />
                <span className="text-lg font-semibold">Government Partnership</span>
              </div>
            </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Mission Statement Card */}
          <motion.div
            variants={slideInLeft}
            whileHover={{ scale: 1.01 }}
            className="bg-white text-darkText rounded-2xl p-8 lg:p-12 mb-16 shadow-xl border border-gray-100"
          >
            <div className="relative z-10">
              <motion.h2
                variants={fadeIn}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-center leading-tight text-primary"
              >
                PASSION BEHIND <br className="md:hidden" /> PROJECT SiTAARE
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-primary rounded-full mb-8 mx-auto max-w-md"
              ></motion.div>
              <motion.p
                variants={fadeIn}
                className="text-lg lg:text-xl leading-relaxed text-center max-w-4xl mx-auto"
              >
                Every child deserves a safe and nurturing environment to dream, grow, and thrive. However,
                orphaned and abandoned girls face severe social, emotional, and economic hardships that hinder
                their ability to build a better future. Project Sitaare is our heartfelt initiative to provide a safe haven
                exclusively for orphaned girls aged 6 to 18 years, ensuring they have access to the best possible
                care, education, and opportunities.
                <br /><br />
                This will be the second registered orphanage in Vadodara dedicated to girls, but it will be much more
                than just a shelter. It will be a home, a learning center, a skill development hub, and a foundation for
                building confident and empowered young women who will go on to create their own success stories.
              </motion.p>
            </div>
          </motion.div>

          {/* Core Features Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl lg:text-4xl font-bold text-center mb-12 text-primary"
            >
              Our Core Pillars
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeIn}
                  whileHover="hover"
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                >
                  <motion.div variants={cardHover} className="text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg bg-primary">
                      <feature.icon className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnership Section */}
          <motion.div
            variants={slideInRight}
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl mb-16 border border-gray-100"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Partnership and collaboration"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-primary">
                  In Partnership with the Government
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We collaborate with the <strong>Child Welfare Committee (CWC)</strong> and{' '}
                  <strong>District Child Protection Unit (DCPU)</strong>, and operate in compliance with the{' '}
                  <em>Juvenile Justice Act</em> and <em>ICPS</em> norms.
                </p>
                <div className="flex items-center gap-4 text-primary">
                  <FaBalanceScale className="text-2xl" />
                  <span className="font-semibold">Legally Compliant & Transparent</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Inspirational Quote */}
          <motion.div
            variants={fadeIn}
            className="text-center mb-16"
          >
            <div className="bg-softBg rounded-2xl p-8 lg:p-12 shadow-lg">
              <blockquote className="text-2xl lg:text-3xl font-bold text-primary mb-4 italic">
                "We don't just protect dreams—we prepare them to fly."
              </blockquote>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeIn}
            className="text-center"
          >
            <div className="bg-primary rounded-2xl p-8 lg:p-12 shadow-xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Join Us in Creating Bright Futures
              </h3>
              <p className="text-xl text-primaryLight mb-8 max-w-2xl mx-auto">
                Every contribution, no matter how small, helps us build a foundation for these girls to thrive and succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/collaborate/donate-for-a-cause')}
                  className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaHandsHelping className="text-xl" />
                  Support Our Mission
                  <FaArrowRight className="text-sm" />
                </motion.button>
                
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default OurAspiration;