import Hero from '../components/home/Hero.jsx';
import Projects from '../components/home/Projects.jsx';
import Skills from '../components/home/Skills.jsx';
import About from '../components/home/About.jsx';
import Contact from '../components/home/Contact.jsx';

export default function Index() {
  return (
    <div className="bg-[length:100%] bg-[url('/background.png')] md:bg-[url('/background.png')]">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
