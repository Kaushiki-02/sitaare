import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PurposeAndPassion from "./pages/WhoWeAre/PurposeAndPassion";
import FoundersDesk from "./pages/WhoWeAre/FoundersDesk";
import MeetOurSitaare from "./pages/MeetOurSitaare";
import OurAspiration from "./pages/OurAspiration";
import NewsAndEvents from "./pages/NewsAndEvents";
import Milestones from "./pages/Impact/Milestones";
import Outcomes from "./pages/Impact/Outcomes";
import Testimonials from "./pages/Impact/Testimonials";
import PartnerWithUs from "./pages/Collaborate/PartnerWithUs";
import ContributeMaterial from "./pages/Collaborate/ContributeMaterial";
import DonateForACause from "./pages/Collaborate/DonateForACause";
import GetInvolved from "./pages/Collaborate/GetInvolved";
import Partners from "./pages/Partners";
import TestDonation from "./pages/TestDonation";

// Consistent page animation variant
export const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: "easeIn" } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: "100vh" }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/who-we-are/purpose-and-passion"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: "100vh" }}
            >
              <PurposeAndPassion />
            </motion.div>
          }
        />
        <Route
          path="/who-we-are/founders-desk"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: "100vh" }}
            >
              <FoundersDesk />
            </motion.div>
          }
        />
        <Route
          path="/meet-our-sitaare"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: "100vh" }}
            >
              <MeetOurSitaare />
            </motion.div>
          }
        />
        <Route
          path="/our-aspiration"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: "100vh" }}
            >
              <OurAspiration />
            </motion.div>
          }
        />

        <Route
          path="/news-and-events"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: "100vh" }}
            >
              <NewsAndEvents />
            </motion.div>
          }
        />
        <Route
          path="/contact-us"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: "100vh" }}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/impact/milestones"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: "100vh" }}
            >
              <Milestones />
            </motion.div>
          }
        />
        <Route
          path="/impact/success-stories/testimonials"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: "100vh" }}
            >
              <Testimonials />
            </motion.div>
          }
        />
        <Route
          path="/impact/success-stories/outcomes"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: "100vh" }}
            >
              <Outcomes />
            </motion.div>
          }
        />
        <Route
          path="/collaborate/donate-for-a-cause"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: "100vh" }}
            >
              <DonateForACause />
            </motion.div>
          }
        />
        <Route
          path="/collaborate/get-involved"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: "100vh" }}
            >
              <GetInvolved />
            </motion.div>
          }
        />
        <Route
          path="/collaborate/partner-with-us"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: "100vh" }}
            >
              <PartnerWithUs />
            </motion.div>
          }
        />
        <Route
          path="/collaborate/contribute-material"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: "100vh" }}
            >
              <ContributeMaterial />
            </motion.div>
          }
        />
        <Route
          path="/partners"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: "100vh" }}
            >
              <Partners />
            </motion.div>
          }
        />
        <Route
          path="/test-donation"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: "100vh" }}
            >
              <TestDonation />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
