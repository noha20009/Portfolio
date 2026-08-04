import React from 'react';
import { Server, Layout, Database, Wrench, PenTool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Back-End",
      icon: <Server className="text-primary mb-4" size={32} />,
      skills: ["Java 17", "Java EE", "Spring Boot", "Spring MVC", "Spring Security (JWT)", "API REST", "Hibernate"]
    },
    {
      title: "Front-End",
      icon: <Layout className="text-primary mb-4" size={32} />,
      skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Bootstrap"]
    },
    {
      title: "Bases de données",
      icon: <Database className="text-primary mb-4" size={32} />,
      skills: ["MySQL", "SQL", "Spring Data JPA"]
    },
    {
      title: "DevOps & Outils",
      icon: <Wrench className="text-primary mb-4" size={32} />,
      skills: ["Git & GitHub", "Docker", "CI/CD", "Postman", "Maven"]
    },
    {
      title: "Conception & Autre",
      icon: <PenTool className="text-primary mb-4" size={32} />,
      skills: ["UML", "Figma", "Approche Agile", "C++", "OOP"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Mes Compétences</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                {category.icon}
                <h3 className="text-xl font-bold text-text-main mb-4">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
