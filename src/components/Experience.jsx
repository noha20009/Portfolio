import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Mon Parcours</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
          
          {/* Timeline Item 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Briefcase size={20} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col mb-2">
                <span className="text-accent font-bold text-sm">2024 - 2025</span>
                <h3 className="text-lg font-bold text-text-main">Développeuse Full Stack</h3>
                <span className="text-text-light font-medium">Simplon Maghreb - Béni Mellal</span>
              </div>
              <p className="text-text-light text-sm">
                Formation intensive centrée sur la création d'applications d'entreprise. 
                Apprentissage approfondi de l'écosystème Java/Spring Boot, création d'API REST sécurisées, et développement d'interfaces modernes avec React.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <GraduationCap size={20} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col mb-2">
                <span className="text-accent font-bold text-sm">2022 - 2023</span>
                <h3 className="text-lg font-bold text-text-main">Licence Ingénierie Électronique et Télécommunications</h3>
                <span className="text-text-light font-medium">Faculté des Sciences et Techniques - Béni Mellal</span>
              </div>
              <p className="text-text-light text-sm">
                Acquisition de solides bases scientifiques et techniques, modélisation de systèmes, et première approche de la programmation structurée (C++).
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
