import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'; // For "Who We Are"
import WhyJoin from './pages/WhyJoin'; // For "Our Aspirations"
import Provide from './pages/Provide'; // For "Milestones"
import Partners from './pages/Partners'; // For "Partner With Us"
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer'; // For "Volunteer & Collaborate"
import Contact from './pages/Contact';

function Navs() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<About />} />
            <Route path="/our-aspirations" element={<WhyJoin />} />
            <Route path="/milestones" element={<Provide />} />
            <Route path="/partner-with-us" element={<Partners />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/volunteer-&-collaborate" element={<Volunteer />} />
            <Route path="/contact-us" element={<Contact />} />
        </Routes>
    );
}

export default Navs;
