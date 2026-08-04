import React, { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Parcours', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-base/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-2xl font-bold text-primary">NM<span className="text-accent">.</span></a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-main hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/cv/nouhayla_Machkouri_CV.pdf" 
                target="_blank" 
                className="bg-accent text-white px-4 py-2 rounded-md font-medium hover:bg-accent/90 transition-colors shadow-sm"
              >
                Mon CV
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-main hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-main hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
