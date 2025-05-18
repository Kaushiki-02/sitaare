import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Beneficiaries from './pages/Beneficiaries';
import Donate from './pages/Donate';
import Partners from './pages/Partners';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-pink-50">
      <Router>
        <Navbar />
        
        {/* Main Content Wrapper */}
        <main className="flex-grow px-4 sm:px-8 md:px-16 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/beneficiaries" element={<Beneficiaries />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
