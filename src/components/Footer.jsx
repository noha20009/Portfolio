import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-text-main text-white py-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-bold">NM<span className="text-primary">.</span></span>
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Nouhayla Machkouri. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
