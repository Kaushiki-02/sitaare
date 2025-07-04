import { motion } from 'framer-motion';
import { pageVariants } from '../navs';

const partnerData = [
  {
    title: "Corporates (CSR)",
    color: "text-[#BC1782]",
    points: [
      "Fund infrastructure, digital classrooms, or transport",
      "Support school fees, vocational training, and career mentorship"
    ]
  },
  {
    title: "NGOs & Foundations",
    color: "text-primaryDark",
    points: [
      "Collaborate on mental health, child rights, and education",
      "Co-design programs to deepen impact in underserved communities"
    ]
  },
  {
    title: "Colleges & Universities",
    color: "text-[#E94BA2]",
    points: [
      "Internship programs for students",
      "Peer mentorship and cultural exchange initiatives"
    ]
  },
  {
    title: "Government Bodies",
    color: "text-[#BC1782]",
    points: [
      "Work with CWC, DCPU, and Women & Child Welfare Department",
      "Strengthen integrated care through policy alignment"
    ]
  }
];

const Partners = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-[#F1E6EE] py-16 px-6 text-[#4B4B4B]"
    >
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold  text-center text-primaryDark mb-6"
      >
        Partner With Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg max-w-3xl mx-auto text-center mb-12 text-[#4B4B4B]"
      >
        We welcome partnerships across sectors to co-create a nurturing ecosystem for orphaned girls—where safety, learning, and empowerment thrive.
      </motion.p>

      {/* Partner Types */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12"
        initial="initial"
        animate="animate"
        variants={{
          initial: {},
          animate: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {partnerData.map((group, idx) => (
          <motion.div
            key={idx}
            variants={{
              initial: { opacity: 0, y: 30, scale: 0.95 },
              animate: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } },
            }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className={`text-xl font-bold mb-3 ${group.color}`}>{group.title}</h2>
            <ul className="list-disc list-inside space-y-2 text-base">
              {group.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Quote */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="italic text-xl text-primaryDark text-center font-medium border-l-4 border-[#E94BA2] pl-4 mx-auto max-w-2xl"
      >
        “The stars are waiting to shine — will you help them find their sky?”
      </motion.blockquote>
    </motion.div>
  );
};

export default Partners;
