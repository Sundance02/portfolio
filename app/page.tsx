import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import FloatingAction from './components/FloatingAction';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="ml-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
      </main>
    </>
  );
}
