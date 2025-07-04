import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Footer, Scroller } from './components';
import AnimatedRoutes from "./navs"; // Use consistent casing (AnimatedRoutes not navs)
import CursorTrail from './components/CursorTrail';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-pink-50">
      <CursorTrail />
      <Router>
        <Scroller />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
