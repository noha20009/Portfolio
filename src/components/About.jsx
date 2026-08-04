import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">À propos de moi</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-lg text-text-light leading-relaxed text-center">
          <p className="mb-6">
            Titulaire d'une <strong>Licence en Ingénierie Électronique et Télécommunications</strong> de la Faculté des sciences et techniques de Béni Mellal, et formée en développement Full Stack chez Simplon Maghreb.
          </p>
          <p className="mb-6">
            Je suis passionnée par la conception d'architectures applicatives robustes et la gestion de bases de données complexes. Mon parcours hybride entre l'électronique et le logiciel me dote d'une forte rigueur analytique.
          </p>
          <p>
            Maîtrisant l'écosystème <strong>Java / Spring Boot</strong> ainsi que <strong>React</strong> pour le frontend, je souhaite aujourd'hui mettre mes compétences au service de projets ambitieux, notamment dans la conception d'API performantes et d'interfaces modernes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
