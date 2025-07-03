import { motion } from 'framer-motion';
import Foto from "../components/foto"

const donateOptions = [
  {
    title: "Sponsor Education",
    amount: 3500,
    description: "₹3,500/month ensures a girl receives quality education, books & supplies.",
  },
  {
    title: "Support Daily Nutrition",
    amount: 2000,
    description: "₹2,000/month covers daily meals to keep her healthy and energized.",
  },
  {
    title: "Adopt a Sitaare for a Month",
    amount: 11551,
    description: "₹11,551 provides full care including housing, education & health.",
  },
  {
    title: "One-Time Meal (All Sitaare)",
    amount: 4000,
    description: "₹4,000 sponsors a wholesome meal for all our girls.",
  },
  {
    title: "Meal for 2 Girls (Full Day)",
    amount: 8000,
    description: "₹8,000 feeds two girls for an entire day with nutritious meals.",
  },
  {
    title: "Sponsor a Celebration",
    amount: 15000,
    description: "₹15,000 funds a joyful birthday or festival celebration.",
  },
  {
    title: "Mental Health & Development",
    amount: 0,
    description: "Contribute a custom amount to help girls heal and grow holistically.",
    custom: true,
  }
];

const Donate = () => {
  const handleDonate = async (amount) => {
    if (!amount || amount < 1) return alert("Please enter a valid donation amount");

  };

  return (
    <div className="bg-[#F9F9F9] text-[#4B4B4B] px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center text-primaryDark mb-6"
      >
        Donate for a Cause
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-center max-w-3xl mx-auto mb-10 leading-relaxed"
      >
        Your generosity helps us provide care, education, nutrition, and emotional support to every Sitaare girl. Choose your impact below.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {donateOptions.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
          >
            <h3 className="text-xl font-bold text-[#BC1782] mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700 mb-4">{item.description}</p>
            {item.custom ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const amount = parseInt(e.target.amount.value);
                  handleDonate(amount);
                }}
                className="flex flex-col items-center gap-3"
              >
                <input
                  name="amount"
                  type="number"
                  placeholder="Enter Amount (INR)"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  min="100"
                />
                <button
                  type="submit"
                  className="bg-[#BC1782] hover:bg-[#E94BA2] text-white font-semibold px-5 py-2 rounded-md shadow-md"
                >
                  Donate Custom
                </button>
              </form>
            ) : (
              <button
                onClick={() => handleDonate(item.amount)}
                className="bg-[#BC1782] hover:bg-[#E94BA2] text-white font-semibold px-6 py-2 rounded-md shadow-md transition"
              >
                Donate ₹{item.amount.toLocaleString()}
              </button>
            )}
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-[#A1A1A1] text-center mt-12">
        All donations are eligible for 80G tax exemption.
      </p>
    </div>
  );
};

export default Donate;
