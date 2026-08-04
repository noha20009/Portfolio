import React from 'react';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-bg-light relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">Disponibilité immédiate</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-text-main mb-4 tracking-tight">
              Bonjour, je suis <span className="text-primary">Nouhayla Machkouri</span>
            </h1>
            
            <h2 className="text-xl md:text-3xl font-medium text-text-light mb-6">
              Développeuse Full Stack Java Junior
            </h2>
            
            <p className="text-lg text-text-light max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed">
              Titulaire d'une Licence en Ingénierie Électronique et formée chez Simplon, 
              je conçois des architectures applicatives robustes avec <span className="font-semibold text-text-main">Spring Boot</span> et <span className="font-semibold text-text-main">React</span>.
              À la recherche d'une opportunité (Stage, CDI, Freelance).
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
              <a 
                href="#projects" 
                className="w-full sm:w-auto px-8 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition-colors flex items-center justify-center group shadow-md shadow-accent/20"
              >
                Voir mes projets
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/cv/nouhayla_Machkouri_CV.pdf" 
                target="_blank"
                className="w-full sm:w-auto px-8 py-3 rounded-md border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors flex items-center justify-center group"
              >
                Consulter mon CV
                <Download size={18} className="ml-2" />
              </a>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-6">
              <a href="https://www.linkedin.com/in/nouhayla-machkouri-589217255" target="_blank" rel="noreferrer" className="text-text-light hover:text-primary transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md">
                <FaLinkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/noha20009" target="_blank" rel="noreferrer" className="text-text-light hover:text-primary transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md">
                <FaGithub size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:machkourinouhayla@gmail.com" className="text-text-light hover:text-primary transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md">
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md hidden md:block">
            {/* Si aucune photo n'est fournie, on peut utiliser un motif géométrique ou une illustration avec les couleurs */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl transform translate-x-4 translate-y-4"></div>
              <div className="relative aspect-square bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-6">
                    <span className="text-4xl font-bold">&lt;/&gt;</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-main mb-2">Code & Data</h3>
                  <p className="text-text-light">Construire des solutions logicielles performantes et fiables.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
