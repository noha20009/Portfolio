import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal, { StaggerGroup, StaggerItem } from './Reveal';
import GlassPanel from './lab/GlassPanel';
import TiltCard from './lab/TiltCard';

const chamberVariants = {
  rest: {},
  hover: { transition: { staggerChildren: 0.06 } },
};

const tagVariants = {
  rest: { opacity: 0.85, y: 0 },
  hover: { opacity: 1, y: -2, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
};

const wisps = [
  { left: '18%', delay: '0s' },
  { left: '42%', delay: '0.4s' },
  { left: '65%', delay: '0.2s' },
  { left: '82%', delay: '0.6s' },
];

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
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -mr-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl lab-beam pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal className="text-center mb-16">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-primary/80 mb-3">
            Chambres d'expérimentation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Mes Projets</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.12}>
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <TiltCard maxTilt={6} className="rounded-xl h-full">
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={chamberVariants}
                  className="group"
                >
                  <GlassPanel className="rounded-xl overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500">
                    <div className={`h-48 ${project.imageClass} flex items-center justify-center p-6 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-500" />

                      {/* HUD corner brackets */}
                      {[
                        'top-3 left-3 border-t border-l',
                        'top-3 right-3 border-t border-r',
                        'bottom-3 left-3 border-b border-l',
                        'bottom-3 right-3 border-b border-r',
                      ].map((pos) => (
                        <span
                          key={pos}
                          className={`absolute ${pos} w-4 h-4 border-white/40 group-hover:border-white/80 transition-colors duration-500`}
                          aria-hidden="true"
                        />
                      ))}

                      {/* Escaping particle wisps */}
                      {wisps.map((w, i) => (
                        <span
                          key={i}
                          className="absolute bottom-4 w-1 h-1 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 group-hover:[animation:wisp-rise_1.6s_ease-in-out_infinite]"
                          style={{ left: w.left, animationDelay: w.delay }}
                          aria-hidden="true"
                        />
                      ))}

                      {/* Glass sweep reflection */}
                      <div
                        className="absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-[120%] group-hover:translate-x-[420%] transition-transform duration-[1100ms] ease-out"
                        aria-hidden="true"
                      />

                      <span className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest text-white/70">
                        Exp. Nº {String(index + 1).padStart(2, '0')}
                      </span>

                      <h3 className="text-2xl font-bold text-white relative z-10 text-center transition-transform duration-500 group-hover:scale-105">
                        {project.title}
                      </h3>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute top-3 right-3 z-10 bg-white/90 text-text-main rounded-full p-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                        aria-label="Voir sur GitHub"
                      >
                        <ArrowUpRight size={16} />
                      </a>
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
                          <motion.span
                            key={idx}
                            variants={tagVariants}
                            className="px-2 py-1 bg-primary/5 text-text-light border border-primary/20 rounded text-xs font-medium hover:border-primary hover:text-primary transition-colors"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 pt-4 border-t border-primary/10">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center text-sm font-medium text-text-main hover:text-primary transition-colors group/link"
                        >
                          <FaGithub className="mr-2" size={18} /> Code source
                          <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                        </a>
                      </div>
                    </div>
                  </GlassPanel>
                </motion.div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};

export default Projects;
