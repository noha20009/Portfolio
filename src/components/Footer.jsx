import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#04080699] text-text-main py-8 border-t border-primary/25 overflow-hidden">
      <div className="absolute inset-0 text-primary/[0.04] bg-dot-grid pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="mb-4 md:mb-0 flex items-center gap-3">
          <a href="#home" className="text-2xl font-bold hover:text-primary transition-colors">NM<span className="text-primary">.</span></a>
          <span className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-gray-500">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Fin de transmission
          </span>
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Nouhayla Machkouri. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
