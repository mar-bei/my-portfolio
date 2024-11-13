import './App.css';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import MyProjects from './components/MyProjects';
import Skills from './components/Skills';


function App() {
  return (
    <div className='bg-gradient-to-b from-[#0F2027] to-[#2C5364] text-white font-["Oswald", sans-serif] h-fit'>
      <Header />
      <Hero />
      <AboutMe />
      <MyProjects />
      <Skills/>
      <ContactMe />
      <Footer/>
    </div>
  );
}

export default App;
