import './App.css';
import Header from './components/Header/Header';

import Intro from './sections/Introduction/Intro';
import Needs from './sections/Needs/Needs';
import ShariaLaw from './sections/Law/ShariaLaw';
import Help from './sections/Help/Help';
import Register from './sections/Register/Register';
import Costs from './sections/Costs/Costs';
import Contact from './sections/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Needs />
        <ShariaLaw />
        <Help />
        <Register />
        <Costs />
        <Contact />
      </main>
    </>
  );
}

export default App;
