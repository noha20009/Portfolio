import React from 'react';
import { Mail, MapPin, Download } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Contactez-moi</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-text-light">
            Je suis actuellement à l'écoute de nouvelles opportunités. N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-bg-light p-8 rounded-2xl flex flex-col items-center justify-center text-center border border-gray-100">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold text-text-main mb-2">Email</h3>
            <p className="text-text-light mb-6">Pour toute demande professionnelle</p>
            <a href="mailto:machkourinouhayla@gmail.com" className="text-primary font-bold hover:underline">
              machkourinouhayla@gmail.com
            </a>
          </div>

          <div className="bg-bg-light p-8 rounded-2xl flex flex-col items-center justify-center text-center border border-gray-100">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold text-text-main mb-2">Localisation</h3>
            <p className="text-text-light mb-2">Béni Mellal, Maroc</p>
            <p className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">Mobilité géographique</p>
          </div>

        </div>

        <div className="mt-12 text-center flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="/cv/nouhayla_Machkouri_CV.pdf" 
            target="_blank"
            className="px-8 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition-colors flex items-center shadow-md shadow-accent/20"
          >
            Télécharger mon CV complet
            <Download size={20} className="ml-2" />
          </a>
          
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/nouhayla-machkouri-589217255" target="_blank" rel="noreferrer" className="p-3 bg-white border border-gray-200 rounded-full text-text-main hover:text-primary hover:border-primary transition-colors shadow-sm">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/noha20009" target="_blank" rel="noreferrer" className="p-3 bg-white border border-gray-200 rounded-full text-text-main hover:text-primary hover:border-primary transition-colors shadow-sm">
              <FaGithub size={24} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
