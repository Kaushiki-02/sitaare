import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Footer, Scroller } from './components';
import AnimatedRoutes from "./navs"; // Use consistent casing (AnimatedRoutes not navs)
import CursorTrail from './components/CursorTrail';
import { useState } from 'react';
import FloatingActionButton from './components/FloatingActionButton';

function App() {
  const [starCursorEnabled, setStarCursorEnabled] = useState(true);
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-pink-50">
      <CursorTrail enabled={starCursorEnabled} />
      <Router>
        <Scroller />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <FloatingActionButton starCursorEnabled={starCursorEnabled} setStarCursorEnabled={setStarCursorEnabled} />
      </Router>
    </div>
  );
}

export default App;
