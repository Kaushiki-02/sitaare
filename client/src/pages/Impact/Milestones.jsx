import { motion } from 'framer-motion';

const milestones = [
  { milestone: "Safe Residence", goal: "30+ girls", timeline: "Year 1" },
  { milestone: "100% School Enrollment", goal: "All children in school", timeline: "Year 1" },
  { milestone: "Digital Literacy", goal: "Tablets + classes", timeline: "Year 1" },
  { milestone: "Mental Wellness", goal: "Counseling for all girls", timeline: "Ongoing" },
  { milestone: "Higher Education", goal: "Career paths for teens", timeline: "Year 3 onwards" },
  { milestone: "Holistic Curriculum", goal: "Blended learning & co-curricular", timeline: "Year 1" },
  { milestone: "Aftercare Support", goal: "Skill-building & livelihood", timeline: "Year 1 onwards" }
];

const supportItems = [
  "Residential Facilities: Safe and comfortable living quarters.",
  "Educational Support: Schooling, scholarships, and skill-building workshops.",
  "Psychosocial Support: Counseling, mentorship, and emotional well-being programs.",
  "Health & Nutrition: Balanced meals, medical care, and fitness programs.",
  "Extracurricular Development: Art, music, sports, and cultural activities.",
  "Career & Vocational Training: Internship opportunities and skill enhancement programs."
];

const Milestones = () => {
  return (
    <div className="min-h-screen bg-softBg text-darkText px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold  text-primaryDark mb-6 text-center"
        >
          What We Provide
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-center text-grayText mb-12 max-w-3xl mx-auto"
        >
          Project Sitaare is a holistic ecosystem designed to empower orphaned girls through safety, support, and opportunity. Here’s how we help them shine:
        </motion.p>

        {/* What We Provide - Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {supportItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-5 rounded-xl shadow border-l-4 border-primaryLight"
            >
              <p className="text-lg">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Milestones */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-primaryDark mb-6">Impact Milestones We Aim to Achieve</h2>
          <p className="text-grayText text-lg max-w-2xl mx-auto mb-8">
            These goals guide our progress and keep us accountable to every child and supporter.
          </p>
        </div>

        <div className="overflow-x-auto">
          <motion.table
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-w-full border-collapse bg-white rounded-lg shadow overflow-hidden text-left"
          >
            <thead>
              <tr className="bg-primary text-white text-sm sm:text-base">
                <th className="px-6 py-4">Milestone</th>
                <th className="px-6 py-4">Goal</th>
                <th className="px-6 py-4">Timeline</th>
              </tr>
            </thead>
            <tbody>
              {milestones.map((item, idx) => (
                <tr
                  key={idx}
                  className={`border-b text-darkText ${idx % 2 === 0 ? 'bg-[#FCF7FB]' : 'bg-white'}`}
                >
                  <td className="px-6 py-4 font-medium">{item.milestone}</td>
                  <td className="px-6 py-4">{item.goal}</td>
                  <td className="px-6 py-4">{item.timeline}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>

        {/* Final Quote */}

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="italic mt-16 text-xl text-primaryDark text-center font-medium border-l-4 border-[#E94BA2] pl-4 mx-auto max-w-2xl"
        >
          “Every milestone we reach is a step toward a brighter sky for our Sitaare.”

        </motion.blockquote>
      </div>
    </div>
  );
};

export default Milestones;
