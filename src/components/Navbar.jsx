import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Accueil', href: '#home', id: 'home' },
  { name: 'À propos', href: '#about', id: 'about' },
  { name: 'Compétences', href: '#skills', id: 'skills' },
  { name: 'Projets', href: '#projects', id: 'projects' },
  { name: 'Parcours', href: '#experience', id: 'experience' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks
        .map((l) => l.id)
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      const offset = 120;
      let current = 'home';
      for (const section of sections) {
        if (section.offsetTop - offset <= window.scrollY) {
          current = section.id;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 h-16 transition-all duration-300 ${
        scrolled
          ? 'bg-secondary/95 shadow-[0_8px_30px_rgba(187,213,218,0.6)] backdrop-blur-xl'
          : 'bg-secondary/80 backdrop-blur-md border-b border-glass-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0 flex items-center gap-3">
            <button
              className="md:hidden text-white p-2 -ml-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href="#home" className="flex items-center gap-2 group cursor-pointer">
              <Terminal className="text-white/90" size={22} />
              <span className="text-xl font-bold text-white font-headline">
                NM<span className="text-accent">.dev</span>
              </span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = active === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative font-medium text-sm transition-colors ${
                      isActive ? 'text-accent font-bold' : 'text-white/85 hover:text-accent'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-accent transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </a>
                );
              })}
              <a
                href="/cv/nouhayla_Machkouri_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-accent text-white px-6 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30 active:scale-95"
              >
                Mon CV
                <Download size={14} />
              </a>
            </div>
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
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-glass-border overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                const isActive = active === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? 'text-accent bg-secondary-tint/40 font-bold'
                        : 'text-on-surface hover:text-accent hover:bg-secondary-tint/40'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="/cv/nouhayla_Machkouri_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full flex justify-center items-center gap-2 text-accent font-bold px-3 py-2 text-base"
              >
                <Download size={16} /> Télécharger le CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
