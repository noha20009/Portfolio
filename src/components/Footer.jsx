import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/50 backdrop-blur-lg text-on-surface-variant py-12 border-t border-white/40 mt-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-on-surface font-headline">
              NM<span className="text-accent">.dev</span>
            </span>
          </a>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/nouhayla-machkouri-589217255"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-on-surface-variant hover:text-accent transition-colors text-sm font-medium"
            >
              <FaLinkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/noha20009"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-on-surface-variant hover:text-accent transition-colors text-sm font-medium"
            >
              <FaGithub size={16} /> GitHub
            </a>
            <a
              href="mailto:machkourinouhayla@gmail.com"
              className="flex items-center gap-1.5 text-on-surface-variant hover:text-accent transition-colors text-sm font-medium"
            >
              <Mail size={16} /> Mail
            </a>
          </div>

          <div className="text-sm text-center md:text-right">
            © {new Date().getFullYear()} Nouhayla Machkouri. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
