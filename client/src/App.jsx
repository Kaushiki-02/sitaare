import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Footer, Scroller } from './components';
import Navs from "./navs"; // Use consistent casing (Navs not navs)

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-pink-50">
      <Router>
        <Scroller />
        <Navbar />
        <Navs />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
