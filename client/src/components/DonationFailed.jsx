import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};

const DonationFailed = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50 flex items-center justify-center px-4"
    >
      <div className="max-w-md mx-auto p-8 bg-white rounded-3xl shadow-xl text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-red-600" />
        </div>
        <h2 className="text-3xl font-bold text-[#BC1782] mb-4">
          Payment Failed
        </h2>
        <p className="text-gray-700 mb-6">
          Something went wrong with your payment. Please try again or contact
          support.
        </p>
        <button
          onClick={() => navigate("/collaborate/donate-for-a-cause")}
          className="bg-[#BC1782] text-white px-6 py-3 rounded-full font-bold hover:bg-[#E94BA2] transition-all duration-300"
        >
          Try Again
        </button>
      </div>
    </motion.div>
  );
};

export default DonationFailed;
