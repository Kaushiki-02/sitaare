import { motion } from 'framer-motion';
import { pageVariants } from '../navs';
const HohLogo = require("../assets/hoh_logo.png")
const About = () => {
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
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-[#BC1782] mb-10">
          About House of Humanity Charitable Trust
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
            className="w-full lg:w-1/3 -mt-8"
          >
            <img
              src={HohLogo}
              alt="HoH Logo"
              className="w-full max-w-xs mx-auto lg:mx-0"
            />
          </motion.div>
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

      {/* Section: Values */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-[#BC1782] mb-4">Our Values</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
          <li><strong>Empathy First:</strong> Designing solutions rooted in real-life needs and experiences.</li>
          <li><strong>Accountability:</strong> We operate transparently with clear, measurable outcomes.</li>
          <li><strong>Collaboration:</strong> We thrive on partnerships—with communities, government, and civil society.</li>
          <li><strong>Sustainability:</strong> Every project is built for long-term, scalable impact.</li>
          <li><strong>Inclusivity:</strong> We prioritize the most vulnerable, leaving no one behind.</li>
        </ul>
      </section>

      {/* Section: Core Initiatives */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-[#BC1782] mb-4">Our Core Initiatives</h2>
        <ul className="list-disc pl-6 space-y-4 text-lg leading-relaxed">
          <li><strong>Rakt-Setu:</strong> Emergency blood donations connecting donors with patients in minutes.</li>
          <li><strong>Pad House:</strong> Promoting menstrual hygiene and distributing affordable sanitary products.</li>
          <li><strong>Project Poshan:</strong> Nutritious meals for hospitalized families and underprivileged children.</li>
          <li><strong>Project Maya:</strong> Specialized pediatric nutrition support for malnourished rural children.</li>
          <li><strong>Project Raah:</strong> Mobile learning and education for migrant children.</li>
          <li><strong>Project Bachpan:</strong> Transforming Anganwadi centers with joyful early education and nutrition.</li>
          <li><strong>Saharaa:</strong> Emergency medical aid for life-saving surgeries and treatments.</li>
        </ul>
      </section>

      {/* Section: Project Sitaare */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold text-[#BC1782] mb-4">Project Sitaare – Our Flagship Shelter Home Initiative</h2>
        <p className="text-lg leading-relaxed mb-4">
          Among all our programs, <strong>Project Sitaare</strong> stands as a beacon of our core belief: empowerment through care.
          It is more than shelter—it's a safe haven where vulnerable girls (ages 6–18) rebuild, learn, and thrive.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Sitaare is designed under the <em>Juvenile Justice (Care and Protection of Children) Act, 2015</em> and follows the
          <em> Integrated Child Protection Scheme (ICPS)</em>, working directly with the <strong>DCPU</strong> and <strong>CWC</strong>.
        </p>
        <p className="text-lg leading-relaxed">
          With holistic programs—emotional healing, digital literacy, healthcare, art, sports, and leadership training—Sitaare
          is where every girl finds the sky to shine.
        </p>
      </section>

      {/* Signature Quote */}
      <section className="text-center mt-16">
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="italic text-xl text-primaryDark font-medium border-l-4 border-[#E94BA2] pl-4 mx-auto max-w-2xl"
        >
          “Sitaare is not just about shelter—it's about possibility, potential, and purpose.”
        </motion.blockquote>
      </section>
    </motion.div>
  );
};

export default About;
