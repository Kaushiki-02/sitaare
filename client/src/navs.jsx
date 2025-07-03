import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About'; // For "Who We Are"
import WhyJoin from './pages/WhyJoin'; // For "Our Aspirations"
import Provide from './pages/Provide'; // For "Milestones"
import Partners from './pages/Partners'; // For "Partner With Us"
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer'; // For "Volunteer & Collaborate"
import Contact from './pages/Contact';

// Consistent page animation variant
export const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: 'easeIn' } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ minHeight: '100vh' }}
          >
            <Home />
          </motion.div>
        } />
        <Route path="/who-we-are" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh' }}><About /></motion.div>
        } />
        <Route path="/our-aspirations" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh' }}><WhyJoin /></motion.div>
        } />
        <Route path="/milestones" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh' }}><Provide /></motion.div>
        } />
        <Route path="/partner-with-us" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh' }}><Partners /></motion.div>
        } />
        <Route path="/donate" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh' }}><Donate /></motion.div>
        } />
        <Route path="/volunteer-&-collaborate" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh' }}><Volunteer /></motion.div>
        } />
        <Route path="/contact-us" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh' }}><Contact /></motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
