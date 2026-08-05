import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/lab/Preloader';
import AmbientBackground from './components/lab/AmbientBackground';
import ParticleField from './components/lab/ParticleField';
import CustomCursor from './components/lab/CustomCursor';

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="font-sans text-text-main bg-base relative">
      <Preloader onComplete={() => setBooted(true)} />
      <AmbientBackground />
      <ParticleField />
      <CustomCursor />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
