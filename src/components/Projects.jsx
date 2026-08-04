import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "LogiTrack",
      type: "API REST Logistique",
      description: "API REST centralisant la gestion des clients, produits, commandes et stocks pour le suivi des opérations logistiques.",
      contribution: "Développement du backend complet : architecture en couches, relations JPA, sécurisation par JWT, rôles (RBAC) et statistiques.",
      tech: ["Java 17", "Spring Boot", "Spring Security", "Hibernate", "MySQL"],
      github: "https://github.com/noha20009/projet-logitrack",
      imageClass: "bg-gradient-to-br from-blue-500 to-primary"
    },
    {
      title: "Système de Gestion Médicale",
      type: "Application Spring Boot",
      description: "API robuste simulant la gestion d'une clinique : centralisation des dossiers médicaux, planification des rdv et diagnostics.",
      contribution: "Mise en place de l'architecture en couches, conception des DTOs avec MapStruct, sécurisation via JWT et Docker.",
      tech: ["Spring Boot", "Spring Data JPA", "MapStruct", "Docker", "MySQL"],
      github: "https://github.com/ENAA-School-Student/brief-SystemedeGestionMedicale",
      imageClass: "bg-gradient-to-br from-teal-400 to-green-500"
    },
    {
      title: "FenPay",
      type: "Application Full Stack",
      description: "Application de gestion des paiements et facturation, avec suivi des transactions, commissions et export PDF/Excel.",
      contribution: "Modélisation UML, intégration de la génération automatique de factures PDF (iText) et rapports Excel (Apache POI).",
      tech: ["Java", "JDBC", "MySQL", "iText", "Apache POI"],
      github: "https://github.com/noha20009/projet-fenPay",
      imageClass: "bg-gradient-to-br from-accent to-orange-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Mes Projets</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-shadow">
              <div className={`h-48 ${project.imageClass} flex items-center justify-center p-6 relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-black/10"></div>
                 <h3 className="text-2xl font-bold text-white relative z-10 text-center">{project.title}</h3>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-bold text-accent mb-2 uppercase tracking-wider">{project.type}</div>
                <p className="text-text-main font-medium mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-text-main">Contribution : </span>
                  <span className="text-sm text-text-light">{project.contribution}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-bg-light text-text-light border border-gray-200 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center text-sm font-medium text-text-main hover:text-primary transition-colors"
                  >
                    <FaGithub className="mr-2" size={18} /> Code source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
