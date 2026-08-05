import React from 'react';
import { Server, Layout, Database, Wrench, PenTool } from 'lucide-react';
import Reveal, { StaggerGroup, StaggerItem } from './Reveal';
import GlassPanel from './lab/GlassPanel';
import TiltCard from './lab/TiltCard';
import DnaStrand from './lab/DnaStrand';

const Skills = () => {
  const skillCategories = [
    {
      title: "Back-End",
      icon: <Server className="text-primary" size={28} />,
      skills: ["Java 17", "Java EE", "Spring Boot", "Spring MVC", "Spring Security (JWT)", "API REST", "Hibernate"]
    },
    {
      title: "Front-End",
      icon: <Layout className="text-primary" size={28} />,
      skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Bootstrap"]
    },
    {
      title: "Bases de données",
      icon: <Database className="text-primary" size={28} />,
      skills: ["MySQL", "SQL", "Spring Data JPA"]
    },
    {
      title: "DevOps & Outils",
      icon: <Wrench className="text-primary" size={28} />,
      skills: ["Git & GitHub", "Docker", "CI/CD", "Postman", "Maven"]
    },
    {
      title: "Conception & Autre",
      icon: <PenTool className="text-primary" size={28} />,
      skills: ["UML", "Figma", "Approche Agile", "C++", "OOP"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white/[0.02] relative overflow-hidden">
      <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-primary/5 blur-3xl lab-beam pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal className="text-center mb-16">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-primary/80 mb-3">
            Séquençage génétique
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Mes Compétences</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.1}>
          {skillCategories.map((category, index) => (
            <StaggerItem key={index}>
              <TiltCard maxTilt={5} glare={false} className="group h-full rounded-xl">
                <GlassPanel className="h-full rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {category.icon}
                    </div>
                    <span className="text-[10px] font-mono text-text-light/50 tracking-widest">
                      ÉCH. {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-main mb-3">{category.title}</h3>
                  <DnaStrand skills={category.skills} />
                </GlassPanel>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};

export default Skills;
