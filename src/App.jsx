import './App.css';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Education from './components/EducationSec/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import MyProjects from './components/MyProjects';
import Particle from './Particle';
function App() {
  return (
    <div className='bg-gradient-to-r from-black to-purple-800 text-white font-["Oswald", sans-serif] h-fit'>
      <Particle id="particles" />
      <Header />
      <Hero />
      <AboutMe />
      <Education/>
      <MyProjects/>
      <Skills/>
      <ContactMe />
      <Footer/>
    </div>
  );
}

export default App;
