import React from 'react';
import { Mail, ArrowRight, Download, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import MagneticButton from './lab/MagneticButton';
import LabChamber from './lab/LabChamber';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* Holographic grid floor */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 lab-grid-floor opacity-40"
        style={{
          transform: 'perspective(600px) rotateX(62deg)',
          transformOrigin: 'bottom',
          maskImage: 'linear-gradient(to top, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to top, black, transparent)',
        }}
        aria-hidden="true"
      />

      {/* Volumetric light beams */}
      <div className="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-glow/10 blur-3xl animate-float-slow lab-beam" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-float-slower lab-beam" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={item} className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-glow mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">Disponibilité immédiate</span>
            </motion.div>

            <motion.h1 variants={item} className="text-5xl md:text-6xl xl:text-7xl font-bold text-text-main mb-4 tracking-tight leading-[1.05]">
              Bonjour, je suis <br className="hidden sm:block" />
              <span className="text-gradient">Nouhayla Machkouri.</span>
            </motion.h1>

            <motion.h2 variants={item} className="text-xl md:text-2xl font-medium text-text-light mb-6">
              Développeuse Full Stack Java Junior
            </motion.h2>

            <motion.p variants={item} className="text-base md:text-lg text-text-light max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Titulaire d'une Licence en Ingénierie Électronique et formée chez Simplon,
              je conçois des architectures applicatives robustes avec <span className="font-semibold text-primary">Spring Boot</span> et <span className="font-semibold text-primary">React</span>.
              À la recherche d'une opportunité (Stage, CDI, Freelance).
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <MagneticButton
                as="a"
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center group shadow-[0_0_30px_rgba(212,31,38,0.4)]"
              >
                Voir mes projets
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              <MagneticButton
                as="a"
                href="/cv/nouhayla_Machkouri_CV.pdf"
                target="_blank"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-primary/40 text-primary font-semibold hover:border-primary hover:bg-primary/10 transition-colors flex items-center justify-center group"
              >
                Consulter mon CV
                <Download size={18} className="ml-2" />
              </MagneticButton>
            </motion.div>

            <motion.div variants={item} className="flex items-center justify-center lg:justify-start space-x-4">
              <a href="https://www.linkedin.com/in/nouhayla-machkouri-589217255" target="_blank" rel="noreferrer" className="text-text-light hover:text-primary hover:-translate-y-1 transition-all p-3 bg-surface-solid/60 border border-primary/15 rounded-full hover:border-primary/40">
                <FaLinkedin size={22} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/noha20009" target="_blank" rel="noreferrer" className="text-text-light hover:text-primary hover:-translate-y-1 transition-all p-3 bg-surface-solid/60 border border-primary/15 rounded-full hover:border-primary/40">
                <FaGithub size={22} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:machkourinouhayla@gmail.com" className="text-text-light hover:text-primary hover:-translate-y-1 transition-all p-3 bg-surface-solid/60 border border-primary/15 rounded-full hover:border-primary/40">
                <Mail size={22} />
                <span className="sr-only">Email</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Containment chamber */}
          <div className="order-1 lg:order-2 w-full flex justify-center">
            <LabChamber />
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden sm:flex flex-col items-center text-text-light hover:text-primary transition-colors mx-auto mb-6 mt-4 relative z-10"
        aria-label="Défiler vers le bas"
      >
        <span className="text-xs font-medium mb-1">Découvrir</span>
        <ChevronDown size={20} className="animate-bounce-soft" />
      </motion.a>
    </section>
  );
};

export default Hero;
