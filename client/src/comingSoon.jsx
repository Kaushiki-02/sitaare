import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import starsAnimation from './assets/stars.json';
import logo from './assets/logo.png';

const ComingSoon = () => {
    return (
        <div className="min-h-screen bg-softBg text-darkText font-sans flex items-center justify-center px-4 py-10 sm:py-16 relative overflow-hidden">
            {/* Stars animation background */}
            <div className="absolute inset-0 z-40 opacity-80 pointer-events-none">
                <Lottie
                    animationData={starsAnimation}
                    loop
                    autoplay
                    className="w-full h-full"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 max-w-2xl w-full text-center bg-white p-6 sm:p-10 pt-20 sm:pt-24 rounded-3xl shadow-xl"
            >
                {/* Logo */}
                <div className="flex justify-center mb-6 sm:mb-8 -mt-10">
                    <img
                        src={logo}
                        alt="Sitaare Logo"
                        className="w-36 sm:w-52 object-contain"
                    />
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-semibold text-primaryDark mb-4">
                    Coming Soon
                </h2>

                {/* Description */}
                <p className="text-base sm:text-lg text-darkText mb-6 leading-relaxed">
                    We’re working hard to build something beautiful and meaningful.
                    Stay tuned to witness the impact.
                </p>

                {/* Email Form */}
                <form className="flex flex-col sm:flex-row gap-3 justify-center w-full px-2 sm:px-0">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 border border-gray-300 rounded-full w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                        type="submit"
                        className="bg-primary hover:bg-primaryDark text-white px-6 py-2 rounded-full font-semibold transition shadow-md"
                    >
                        Notify Me
                    </button>
                </form>

                {/* Footer */}
                <p className="text-sm sm:text-base text-grayText mt-8">
                    An initiative by <span className="text-primaryDark font-semibold">House of Humanity</span>
                </p>
                <p className="text-xs text-grayText mt-2">&copy; 2025 House of Humanity. All rights reserved.</p>
            </motion.div>
        </div>
    );
};

export default ComingSoon;
