import { motion } from 'framer-motion';
import { pageVariants } from '../navs';
import { FaHandsHelping, FaBalanceScale, FaUsers, FaLeaf, FaUniversalAccess, FaTint, FaFemale, FaAppleAlt, FaChild, FaRoad, FaSmile, FaHeartbeat } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const HohLogo = require("../assets/hoh_logo.png")

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

const About = () => {
  useEffect(() => { AOS.init({ once: true, duration: 800 }); }, []);
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-[#F9F9F9] text-[#4B4B4B] px-6 py-16"
    >
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center text-primaryDark mb-12"
      >
        Who We Are
      </motion.h1>

      {/* Section: About Trust */}
      <section className="max-w-5xl mx-auto mb-16" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-[#BC1782] mb-10">
          About House of Humanity Charitable Trust
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Logo */}
          <div className="w-full lg:w-1/3 -mt-8 flex justify-center lg:justify-start">
            <a href="https://houseofhumanity.in/" target="_blank" rel="noopener noreferrer">
              <img
                src={HohLogo}
                alt="HoH Logo"
                className="w-full max-w-xs mx-auto lg:mx-0 drop-shadow-[0_0_24px_#1782bc] hover:drop-shadow-[0_0_36px_#17e3bc] transition duration-300"
              />
            </a>
          </div>
          {/* Text Content */}
          <motion.div
            className="flex-1 space-y-4"
            initial="initial"
            animate="animate"
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {["House of Humanity Charitable Trust is a youth-led, grassroots non-profit organization founded with an unwavering belief in equity, dignity, and collective upliftment. We drive holistic, inclusive, and sustainable development across India by addressing critical social challenges through deeply human-centered solutions.",
              "From humble beginnings as a volunteer group, we've grown into a multi-project movement impacting thousands of lives. Our work spans health, education, nutrition, hygiene, and child protection—fueled by empathy and sustained by a community of changemakers."]
              .map((text, idx) => (
                <motion.p
                  key={idx}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
                  }}
                  className="text-lg leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center my-10">
        <span className="text-2xl text-[#E94BA2] opacity-60 select-none">★ ★ ★</span>
      </div>

      {/* Section: Values */}
      <section className="max-w-5xl mx-auto mb-16" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-[#BC1782] mb-8">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {values.map((v, idx) => (
            <div
              key={v.title}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 border-t-4"
              style={{ borderColor: ['#F472B6', '#60A5FA', '#34D399', '#FBBF24', '#A78BFA'][idx] }}
              data-aos="fade-in"
              data-aos-delay={idx * 120}
            >
              {v.icon}
              <h3 className="text-lg font-bold mt-3 mb-1 text-[#BC1782]">{v.title}</h3>
              <p className="text-gray-600 text-md">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center my-10">
        <span className="text-2xl text-[#E94BA2] opacity-60 select-none">★ ★ ★</span>
      </div>

      {/* Section: Core Initiatives */}
      <section className="max-w-5xl mx-auto mb-16" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-[#BC1782] mb-8">Our Core Initiatives</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {initiatives.map((i, idx) => (
            <div
              key={i.title}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 border-t-4"
              style={{ borderColor: ['#F87171', '#F472B6', '#34D399', '#FBBF24', '#60A5FA', '#F9A8D4', '#F87171'][idx] }}
              data-aos="fade-in"
              data-aos-delay={idx * 120}
            >
              {i.icon}
              <h3 className="text-lg font-bold mt-3 mb-1 text-[#BC1782]">{i.title}</h3>
              <p className="text-gray-600 text-md">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center my-10">
        <span className="text-2xl text-[#E94BA2] opacity-60 select-none">★ ★ ★</span>
      </div>

      {/* Section: Project Sitaare */}
      <section className="max-w-5xl mx-auto mb-20" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-[#BC1782] mb-4">Project <span className="text-[#E94BA2] font-bold">Sitaare</span> – Our Flagship Shelter Home Initiative</h2>
        <p className="text-lg leading-relaxed mb-4">
          Among all our programs, <strong className="text-[#BC1782]">Project Sitaare</strong> stands as a beacon of our core belief: <span className="text-[#E94BA2] font-semibold">empowerment through care</span>.
          It is more than shelter—it's a safe haven where vulnerable girls (ages 6–18) rebuild, learn, and thrive.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Sitaare is designed under the <em>Juvenile Justice (Care and Protection of Children) Act, 2015</em> and follows the
          <em> Integrated Child Protection Scheme (ICPS)</em>, working directly with the <strong className="text-[#BC1782]">DCPU</strong> and <strong className="text-[#BC1782]">CWC</strong>.
        </p>
        <p className="text-lg leading-relaxed">
          With holistic programs—emotional healing, digital literacy, healthcare, art, sports, and leadership training—Sitaare
          is where every girl finds the sky to shine.
        </p>
      </section>

      {/* Signature Quote */}
      <section className="text-center mt-16" data-aos="fade-up">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="italic text-xl text-primaryDark font-medium border-l-4 border-[#E94BA2] pl-4 mx-auto max-w-2xl relative"
        >
          <span className="absolute -left-8 top-0 text-4xl text-[#E94BA2] opacity-30 select-none">“</span>
          Sitaare is not just about shelter—it's about possibility, potential, and purpose.
          <span className="absolute -right-8 bottom-0 text-4xl text-[#E94BA2] opacity-30 select-none">”</span>
        </motion.blockquote>
      </section>
    </motion.div>
  );
};

export default About;
