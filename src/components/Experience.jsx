import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import GlassPanel from './lab/GlassPanel';

const timeline = [
  {
    icon: <Briefcase size={20} />,
    date: '2024 - 2025',
    title: 'Développeuse Full Stack',
    place: 'Simplon Maghreb - Béni Mellal',
    desc: "Formation intensive centrée sur la création d'applications d'entreprise. Apprentissage approfondi de l'écosystème Java/Spring Boot, création d'API REST sécurisées, et développement d'interfaces modernes avec React.",
  },
  {
    icon: <GraduationCap size={20} />,
    date: '2022 - 2023',
    title: 'Licence Ingénierie Électronique et Télécommunications',
    place: 'Faculté des Sciences et Techniques - Béni Mellal',
    desc: 'Acquisition de solides bases scientifiques et techniques, modélisation de systèmes, et première approche de la programmation structurée (C++).',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white/[0.02] relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl lab-beam pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal className="text-center mb-16">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-primary/80 mb-3">
            Journal de laboratoire
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Mon Parcours</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </Reveal>

        <div className="relative">
          <div className="absolute inset-0 ml-5 -translate-x-px md:mx-auto md:translate-x-0 w-0.5 bg-primary/15" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top' }}
            className="absolute inset-0 ml-5 -translate-x-px md:mx-auto md:translate-x-0 w-0.5 bg-gradient-to-b from-primary via-primary to-accent/60"
          />

          <div className="space-y-12 relative">
            {timeline.map((entry, idx) => (
              <Reveal
                key={idx}
                direction={idx % 2 === 0 ? 'right' : 'left'}
                delay={0.1}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 animate-pulse-ring">
                  {entry.icon}
                </div>
                <GlassPanel
                  glow={false}
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-accent font-bold text-sm">{entry.date}</span>
                    <span className="text-[10px] font-mono text-text-light/40 tracking-widest">
                      LOG_{String(idx + 1).padStart(3, '0')}
                    </span>
                  </div>
                  <div className="flex flex-col mb-2">
                    <h3 className="text-lg font-bold text-text-main">{entry.title}</h3>
                    <span className="text-text-light font-medium">{entry.place}</span>
                  </div>
                  <p className="text-text-light text-sm">{entry.desc}</p>
                </GlassPanel>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
