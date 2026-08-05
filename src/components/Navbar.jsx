import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './lab/MagneticButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Parcours', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 h-16 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? 'bg-base/85 shadow-[0_1px_0_0_rgba(150,218,190,0.4)] border-b border-primary/20'
          : 'bg-base/50 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="#home" className="text-2xl font-bold text-primary">
              NM<span className="text-accent">.</span>
            </a>
            <span className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-text-light/70 pl-3 border-l border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-glow animate-pulse" />
              Système en ligne
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-text-main hover:text-primary transition-colors px-3 py-2 text-sm font-medium group"
                >
                  {link.name}
                  <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
              <MagneticButton
                as="a"
                href="/cv/nouhayla_Machkouri_CV.pdf"
                target="_blank"
                className="ml-2 inline-block bg-primary text-[#04110B] px-4 py-2 rounded-md font-semibold hover:bg-glow transition-colors shadow-[0_0_20px_rgba(52,229,160,0.3)]"
              >
                Mon CV
              </MagneticButton>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-main hover:text-primary focus:outline-none p-2"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-base/95 backdrop-blur-md border-t border-primary/15 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-main hover:text-primary hover:bg-primary/10 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/cv/nouhayla_Machkouri_CV.pdf"
                target="_blank"
                className="w-full text-left block text-accent font-bold px-3 py-2 text-base"
              >
                Télécharger le CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
