import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PurposeAndPassion from './pages/WhoWeAre/PurposeAndPassion';
import FoundersDesk from './pages/WhoWeAre/FoundersDesk';
import MeetOurSitaare from './pages/MeetOurSitaare';
import OurAspiration from './pages/OurAspiration';
import NewsAndEvents from './pages/NewsAndEvents';
import Milestones from './pages/Impact/Milestones';
import SuccessStories from './pages/Impact/SuccessStories';
import PartnerWithUs from './pages/Collaborate/PartnerWithUs';
import ContributeMaterial from './pages/Collaborate/ContributeMaterial';
import DonateForACause from './pages/Collaborate/DonateForACause';
import GetInvolved from './pages/Collaborate/GetInvolved';
import Partners from './pages/Partners';

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
        <Route path="/" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh', paddingTop: '80px' }}><Home /></motion.div>} />
        <Route path="/who-we-are/purpose-and-passion" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh', paddingTop: '80px' }}><PurposeAndPassion /></motion.div>} />
        <Route path="/who-we-are/founders-desk" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh', paddingTop: '80px' }}><FoundersDesk /></motion.div>} />
        <Route path="/meet-our-sitaare" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh', paddingTop: '80px' }}><MeetOurSitaare /></motion.div>} />
        <Route path="/our-aspiration" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh', paddingTop: '80px' }}><OurAspiration /></motion.div>} />
        <Route path="/news-and-events" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh', paddingTop: '80px' }}><NewsAndEvents /></motion.div>} />
        <Route path="/contact-us" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh', paddingTop: '80px' }}><Contact /></motion.div>} />
        <Route path="/impact/milestones" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh', paddingTop: '80px' }}><Milestones /></motion.div>} />
        <Route path="/impact/success-stories" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh', paddingTop: '80px' }}><SuccessStories /></motion.div>} />
        <Route path="/collaborate/donate-for-a-cause" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh', paddingTop: '80px' }}><DonateForACause /></motion.div>} />
        <Route path="/collaborate/get-involved" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh', paddingTop: '80px' }}><GetInvolved /></motion.div>} />
        <Route path="/collaborate/partner-with-us" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh', paddingTop: '80px' }}><PartnerWithUs /></motion.div>} />
        <Route path="/collaborate/contribute-material" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh', paddingTop: '80px' }}><ContributeMaterial /></motion.div>} />
        <Route path="/partners" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100vh', paddingTop: '80px' }}><Partners /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
