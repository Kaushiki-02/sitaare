import { motion } from 'framer-motion';

const WhyJoin = () => {
  return (
    <div className="min-h-screen bg-light text-darkText px-6 py-16">
      <div className="max-w-5xl mx-auto">


        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-primaryDark mb-6 text-center"
        >
          Our Aspirations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-center text-grayText mb-10 max-w-3xl mx-auto"
        >
          Project Sitaare is built on four core pillars—protection, education, health, and empowerment. Together, these form the foundation of every girl’s journey toward a bright, self-reliant future.
        </motion.p>

        {/* Top Card: Passion Behind Project Sitaare */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#BC1782] text-white rounded-2xl p-8 mb-14 shadow-lg"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center tracking-wide">
            PASSION BEHIND <br className="md:hidden" /> PROJECT SiTAARE
          </h2>

          {/* Animated Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1 }}
            className="h-1 bg-white rounded-full mb-6"
          ></motion.div>

          {/* Description */}
          <p className="text-lg leading-relaxed text-center">
            Every child deserves a safe and nurturing environment to dream, grow, and thrive. However,
            orphaned and abandoned girls face severe social, emotional, and economic hardships that hinder
            their ability to build a better future. Project Sitaare is our heartfelt initiative to provide a safe haven
            exclusively for orphaned girls aged 6 to 18 years, ensuring they have access to the best possible
            care, education, and opportunities.
            <br /><br />
            This will be the second registered orphanage in Vadodara dedicated to girls, but it will be much more
            than just a shelter. It will be a home, a learning center, a skill development hub, and a foundation for
            building confident and empowered young women who will go on to create their own success stories.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="space-y-8 text-lg leading-relaxed">
          {[
            {
              title: 'A Nurturing Home',
              color: '#E94BA2',
              text: 'We provide a safe, family-like environment for 30+ girls where they are loved, respected, and encouraged to flourish.',
            },
            {
              title: 'Academic & Digital Support',
              color: '#BC1782',
              text: 'Each child receives personalized academic coaching along with access to digital learning tools and STEM exposure.',
            },
            {
              title: 'Life Skills & Vocational Training',
              color: '#7C0C55',
              text: 'Our curriculum includes structured life skills, financial literacy, computer training, and hands-on vocational workshops.',
            },
            {
              title: 'Emotional & Mental Wellness',
              color: '#FF8EB5',
              text: 'We prioritize emotional resilience through regular therapy, group counseling, and mindfulness practices.',
            },
            {
              title: 'Sports, Arts & Culture',
              color: '#CDB4DB',
              text: 'From football to classical dance, girls participate in extracurriculars that build confidence, leadership, and joy.',
            },
            {
              title: 'Reintegration & Aftercare',
              color: '#8E44AD',
              text: 'Older girls receive mentorship, career guidance, and transitional housing support as they step into adulthood.',
            },
            {
              title: 'In Partnership with the Government',
              color: '#4A148C',
              text: (
                <>
                  We collaborate with the <strong>Child Welfare Committee (CWC)</strong> and{' '}
                  <strong>District Child Protection Unit (DCPU)</strong>, and operate in compliance with the{' '}
                  <em>Juvenile Justice Act</em> and <em>ICPS</em> norms.
                </>
              ),
            },
          ].map(({ title, color, text }) => (
            <div key={title} className={`bg-white shadow-md rounded-xl p-6 border-l-4`} style={{ borderColor: color }}>
              <h2 className="text-xl font-semibold mb-2" style={{ color }}>
                {title}
              </h2>
              <p>{text}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="italic mt-16 text-xl text-primaryDark text-center font-medium border-l-4 border-[#E94BA2] pl-4 mx-auto max-w-2xl"
        >
          “We don’t just protect dreams—we prepare them to fly.”
        </motion.blockquote>
      </div>
    </div>
  );
};

export default WhyJoin;
