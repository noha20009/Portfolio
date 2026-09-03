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
import Loader from './components/lab/Loader';

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="font-sans text-on-surface min-h-screen relative overflow-x-hidden">
      <Loader onComplete={() => setBooted(true)} />

      {/* Decorative background blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 bg-red-200/60 rounded-full mix-blend-multiply blur-[80px] opacity-70" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-teal-200/60 rounded-full mix-blend-multiply blur-[80px] opacity-70" />
        <div className="absolute bottom-40 left-1/3 w-[500px] h-[500px] bg-blue-200/50 rounded-full mix-blend-multiply blur-[100px] opacity-60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: booted ? 1 : 0, y: booted ? 0 : 16 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <Navbar />
        <main className="pt-16">
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
