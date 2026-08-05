import React from 'react';
import { GraduationCap, Code2, Rocket } from 'lucide-react';
import Reveal, { StaggerGroup, StaggerItem } from './Reveal';
import GlassPanel from './lab/GlassPanel';
import TiltCard from './lab/TiltCard';

const stats = [
  {
    icon: <GraduationCap className="text-primary" size={28} />,
    title: 'Licence Électronique & Télécom',
    desc: 'Faculté des Sciences et Techniques, Béni Mellal',
  },
  {
    icon: <Code2 className="text-primary" size={28} />,
    title: 'Full Stack Java / Spring Boot',
    desc: 'Formation intensive chez Simplon Maghreb',
  },
  {
    icon: <Rocket className="text-primary" size={28} />,
    title: "Prête pour l'action",
    desc: 'Stage, CDI ou Freelance — disponibilité immédiate',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute -top-24 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl lab-beam pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal className="text-center mb-4">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-primary/80 mb-3">
            Salle de recherche
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">À propos de moi</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </Reveal>

        <Reveal delay={0.1} className="max-w-3xl mx-auto mb-14 mt-12">
          <GlassPanel className="rounded-2xl p-8 md:p-10 text-lg text-text-light leading-relaxed text-center">
            <p className="mb-6">
              Titulaire d'une <strong className="text-text-main">Licence en Ingénierie Électronique et Télécommunications</strong> de la Faculté des sciences et techniques de Béni Mellal, et formée en développement Full Stack chez Simplon Maghreb.
            </p>
            <p className="mb-6">
              Je suis passionnée par la conception d'architectures applicatives robustes et la gestion de bases de données complexes. Mon parcours hybride entre l'électronique et le logiciel me dote d'une forte rigueur analytique.
            </p>
            <p>
              Maîtrisant l'écosystème <strong className="text-text-main">Java / Spring Boot</strong> ainsi que <strong className="text-text-main">React</strong> pour le frontend, je souhaite aujourd'hui mettre mes compétences au service de projets ambitieux, notamment dans la conception d'API performantes et d'interfaces modernes.
            </p>
          </GlassPanel>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <StaggerItem key={idx}>
              <TiltCard maxTilt={7} className="group h-full rounded-xl">
                <GlassPanel glow={false} className="h-full rounded-xl p-6 text-center hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                    {stat.icon}
                  </div>
                  <h3 className="font-bold text-text-main mb-1">{stat.title}</h3>
                  <p className="text-sm text-text-light">{stat.desc}</p>
                </GlassPanel>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};

export default About;
