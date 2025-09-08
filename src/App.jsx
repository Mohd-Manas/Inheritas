import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import Intro from './sections/Introduction/Intro';
import Needs from './sections/Needs/Needs';
import Help from './sections/Help/Help';
import Costs from './sections/Costs/Costs';
import Contact from './sections/Contact/Contact';
import About from './sections/About/About';
import WillsForNonMuslims from './sections/WillNonMus/WillsForNonMuslims';
import ShariaCompliantWills from './sections/ShariaCompliantWills/ShariaCompliantWills';
import Services from "./sections/Services/Services";
import Footer from './components/Header/Footer/Footer';

function HomePage() {
  return (
    <main>
      <Intro />
      <Needs />
      <Help />
      <Costs />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wills-non-muslims" element={<WillsForNonMuslims />} />
        <Route path="/sharia-wills" element={<ShariaCompliantWills />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
