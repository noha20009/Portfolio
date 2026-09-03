import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import Reveal from './Reveal';

const timeline = [
  {
    icon: <Briefcase size={20} />,
    date: '2024 - 2025',
    title: 'Développeuse Full Stack',
    place: 'Simplon Maghreb - Béni Mellal',
    desc: "Formation intensive centrée sur la création d'applications d'entreprise. Apprentissage approfondi de l'écosystème Java/Spring Boot, création d'API REST sécurisées, et développement d'interfaces modernes avec React.",
    tags: ['Java', 'Spring Boot', 'React'],
  },
  {
    icon: <GraduationCap size={20} />,
    date: '2022 - 2023',
    title: 'Licence Ingénierie Électronique et Télécommunications',
    place: 'Faculté des Sciences et Techniques - Béni Mellal',
    desc: 'Acquisition de solides bases scientifiques et techniques, modélisation de systèmes, et première approche de la programmation structurée (C++).',
    tags: ['Électronique', 'Télécom', 'C++'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-2 font-headline">
            Parcours
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full shadow-[0_0_10px_rgba(255,0,0,0.5)]" />
        </Reveal>

        <div className="relative pl-8 border-l-2 border-glass-border space-y-12 max-w-3xl">
          {timeline.map((entry, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="relative">
              <div
                className={`absolute -left-[45px] top-1 w-4 h-4 rounded-full ring-4 ring-background ${
                  idx === 0 ? 'bg-accent' : 'bg-tertiary'
                }`}
              />
              <div className="glass-card p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold ${idx === 0 ? 'text-accent' : 'text-tertiary'}`}>
                    {entry.date}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-on-surface-variant">
                    {entry.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-surface mb-1">{entry.title}</h3>
                <p className="text-sm font-medium text-on-surface-variant mb-4">{entry.place}</p>
                <p className="text-sm text-on-surface-variant mb-4">{entry.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-teal-100/50 rounded-full text-xs font-semibold text-tertiary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
