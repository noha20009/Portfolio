import React from 'react';
import { Mail, ArrowRight, Download, ChevronDown, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import TypeWriter from './lab/TypeWriter';

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
      {/* Decorative background blobs */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-red-200/60 rounded-full mix-blend-multiply blur-[80px] opacity-70 pointer-events-none" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-teal-200/60 rounded-full mix-blend-multiply blur-[80px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-40 left-1/3 w-[500px] h-[500px] bg-blue-200/50 rounded-full mix-blend-multiply blur-[100px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center px-4 py-1 rounded-full border border-glass-border bg-tertiary-fixed-dim/20 text-tertiary mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent mr-2" />
              <span className="text-xs font-semibold tracking-wide">Disponible pour de nouvelles opportunités</span>
            </motion.div>

            <motion.h1 variants={item} className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-on-surface mb-4 tracking-tight leading-[1.05] font-headline">
              Nouhayla<br className="hidden sm:block" /> Machkouri.
            </motion.h1>

            <motion.h2 variants={item} className="text-xl md:text-2xl font-semibold text-secondary mb-6 min-h-[2rem]">
              Développeuse&nbsp;
              <TypeWriter
                className="text-accent font-bold"
                words={['Full Stack Java Junior', 'Spring Boot', 'React', 'Java Backend']}
              />
            </motion.h2>

            <motion.p variants={item} className="text-base md:text-lg text-on-surface-variant max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Titulaire d'une Licence en Ingénierie Électronique et formée chez Simplon,
              je conçois des architectures applicatives robustes avec <span className="font-semibold text-on-surface">Spring Boot</span> et <span className="font-semibold text-on-surface">React</span>.
              À la recherche d'une opportunité (Stage, CDI, Freelance).
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-accent text-white font-semibold hover:bg-red-700 transition-colors flex items-center justify-center group shadow-lg hover:shadow-red-500/20 active:scale-95"
              >
                Voir mes projets
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/cv/nouhayla_Machkouri_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-glass-border bg-surface text-secondary font-semibold hover:border-accent hover:text-accent transition-colors flex items-center justify-center group"
              >
                Consulter mon CV
                <Download size={18} className="ml-2" />
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center justify-center lg:justify-start space-x-4">
              <a href="https://www.linkedin.com/in/nouhayla-machkouri-589217255" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-secondary hover:text-accent hover:-translate-y-1 transition-all">
                <FaLinkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/noha20009" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-secondary hover:text-accent hover:-translate-y-1 transition-all">
                <FaGithub size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:machkourinouhayla@gmail.com" className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-secondary hover:text-accent hover:-translate-y-1 transition-all">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 w-full max-w-md mx-auto relative"
          >
            <div className="aspect-square rounded-2xl glass-panel relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100/40 to-surface-container-low" />
              <div className="absolute w-64 h-64 bg-red-200/20 rounded-full blur-3xl -top-10 -right-10" />
              <div className="absolute w-64 h-64 bg-teal-200/30 rounded-full blur-3xl -bottom-10 -left-10" />
              <div className="w-3/4 h-3/4 rounded-full border border-glass-border border-dashed animate-ring-rotate flex items-center justify-center opacity-50">
                <div className="w-3/4 h-3/4 rounded-full border border-glass-border animate-ring-rotate-reverse flex items-center justify-center">
                  <Terminal className="text-tertiary/40" size={56} />
                </div>
              </div>
            </div>

            <div className="absolute -left-6 top-1/4 px-4 py-2 rounded-full glass-panel text-xs font-semibold flex items-center gap-2 animate-float-slow">
              <div className="w-2 h-2 rounded-full bg-accent" /> Java
            </div>
            <div className="absolute -right-4 top-1/2 px-4 py-2 rounded-full glass-panel text-xs font-semibold flex items-center gap-2 animate-float-slower">
              <div className="w-2 h-2 rounded-full bg-secondary" /> Spring Boot
            </div>
            <div className="absolute left-1/4 -bottom-6 px-4 py-2 rounded-full glass-panel text-xs font-semibold flex items-center gap-2 animate-float-slow">
              <div className="w-2 h-2 rounded-full bg-tertiary" /> React
            </div>
            <div className="absolute -right-10 top-[15%] px-4 py-2 rounded-full glass-panel text-xs font-semibold flex items-center gap-2 animate-float-slower">
              <div className="w-2 h-2 rounded-full bg-accent" /> MySQL
            </div>
            <div className="absolute -left-8 bottom-[22%] px-4 py-2 rounded-full glass-panel text-xs font-semibold flex items-center gap-2 animate-float-slow">
              <div className="w-2 h-2 rounded-full bg-secondary" /> Docker
            </div>
            <div className="absolute right-1/4 -top-4 px-4 py-2 rounded-full glass-panel text-xs font-semibold flex items-center gap-2 animate-float-slower">
              <div className="w-2 h-2 rounded-full bg-tertiary" /> Git
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden sm:flex flex-col items-center text-on-surface-variant hover:text-accent transition-colors mx-auto mb-6 mt-4 relative z-10"
        aria-label="Défiler vers le bas"
      >
        <span className="text-xs font-medium mb-1">Découvrir</span>
        <ChevronDown size={20} className="animate-bounce-soft" />
      </motion.a>
    </section>
  );
};

export default Hero;
