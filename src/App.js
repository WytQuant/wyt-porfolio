import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Project from './components/Project/Project';
import Skill from './components/Skill/Skill';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    duration: 1500,
    easing: 'ease',
    anchorPlacement: 'bottom-bottom',
    once: true,
  });

  return (
    <div>
      <Navbar />
      <Main />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
