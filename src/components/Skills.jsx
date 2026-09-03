import React from 'react';
import { Server, Layout, Database, Wrench, PenTool } from 'lucide-react';
import Reveal from './Reveal';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Back-End',
      icon: <Server className="text-accent" size={32} />,
      className: 'md:col-span-2',
      skills: ['Java 17', 'Java EE', 'Spring Boot', 'Spring MVC', 'Spring Security (JWT)', 'API REST', 'Hibernate'],
    },
    {
      title: 'Front-End',
      icon: <Layout className="text-accent" size={32} />,
      skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    },
    {
      title: 'BDD',
      icon: <Database className="text-accent" size={32} />,
      skills: ['MySQL', 'SQL', 'Spring Data JPA'],
    },
    {
      title: 'DevOps',
      icon: <Wrench className="text-accent" size={32} />,
      skills: ['Git & GitHub', 'Docker', 'CI/CD', 'Postman', 'Maven', 'Grafana', 'Prometheus', 'Loki', 'Nginx'],
    },
    {
      title: 'Conception',
      icon: <PenTool className="text-accent" size={32} />,
      skills: ['UML', 'Figma', 'Approche Agile', 'C++', 'OOP'],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-2 font-headline">
            Compétences Techniques
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full shadow-[0_0_10px_rgba(255,0,0,0.5)]" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Reveal
              key={index}
              delay={index * 0.05}
              className={`glass-card rounded-[1.5rem] p-8 flex flex-col justify-between group ${category.className ?? ''}`}
            >
              <div className="flex items-center gap-3 text-on-surface group-hover:text-accent transition-colors mb-8">
                {category.icon}
                <h3 className="text-2xl font-bold font-headline">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="tech-chip px-4 py-2 rounded-full text-xs font-semibold shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
