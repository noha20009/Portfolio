import React from 'react';
import { GraduationCap, Code2, Bolt, FolderGit2, Terminal, Briefcase } from 'lucide-react';
import Reveal from './Reveal';
import AnimatedCounter from './lab/AnimatedCounter';

const stats = [
  { icon: <FolderGit2 size={22} />, to: 10, suffix: '+', label: 'Projets réalisés' },
  { icon: <Terminal size={22} />, to: 20, suffix: '+', label: 'Compétences techniques' },
  { icon: <Briefcase size={22} />, to: 2, suffix: '', label: 'Années de formation' },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal className="text-center md:text-left mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-2 font-headline">
            À propos de moi
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full shadow-[0_0_10px_rgba(255,0,0,0.5)] mx-auto md:mx-0" />
        </Reveal>

        {/* Animated stats */}
        <Reveal className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-tertiary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-on-surface font-headline leading-none">
                    <AnimatedCounter
                      to={stat.to}
                      suffix={stat.suffix}
                      duration={1600 + idx * 200}
                    />
                  </div>
                  <div className="text-sm text-on-surface-variant mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Licence */}
          <Reveal className="glass-card rounded-[1.5rem] p-8 flex flex-col items-start gap-4 group">
            <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center text-tertiary mb-2 transition-transform duration-300 group-hover:scale-110">
              <GraduationCap size={26} />
            </div>
            <h3 className="text-xl font-bold text-on-surface">Licence Électronique &amp; Télécom</h3>
            <p className="text-on-surface-variant">
              Une base solide en logique et résolution de problèmes complexes, développant ma rigueur analytique essentielle au développement logiciel.
            </p>
          </Reveal>

          {/* Card 2: Formation Full Stack (larger) */}
          <Reveal delay={0.1} className="glass-card rounded-[1.5rem] p-8 flex flex-col items-start gap-4 md:col-span-2 group relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-red-100 rounded-bl-full blur-xl opacity-70" />
            <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary mb-2 transition-transform duration-300 group-hover:scale-110">
              <Code2 size={26} />
            </div>
            <h3 className="text-xl font-bold text-on-surface">Formation Full Stack Java</h3>
            <p className="text-on-surface-variant mb-4">
              Reconversion intensive et certifiante chez Simplon. Maîtrise de l'écosystème Java (Spring Boot), du développement front-end moderne (React), et des pratiques de développement collaboratif (Git, Agile).
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Java', 'Spring Boot', 'SQL', 'React'].map((t) => (
                <span key={t} className="px-3 py-1.5 bg-white/60 border border-glass-border rounded-full text-xs font-semibold text-secondary">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Card 3: Prête pour l'action (full width) */}
          <Reveal delay={0.15} className="glass-card rounded-[1.5rem] p-8 flex flex-col items-center justify-center text-center gap-4 md:col-span-3 group">
            <div className="w-14 h-14 flex items-center justify-center">
              <Bolt className="text-accent" size={42} />
            </div>
            <h3 className="text-2xl font-bold text-on-surface">Prête pour l'action</h3>
            <p className="text-on-surface-variant max-w-2xl">
              Aujourd'hui, je suis prête à mettre mes compétences au service d'une équipe dynamique. Je recherche des défis stimulants où je pourrai contribuer à des projets innovants tout en continuant à apprendre et à grandir professionnellement.
            </p>
            <a
              href="#contact"
              className="mt-2 px-6 py-2.5 bg-accent text-white rounded-lg text-xs font-semibold uppercase tracking-wide hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-500/20 active:scale-95"
            >
              Me contacter
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
