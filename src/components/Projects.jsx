import React from 'react';
import { ArrowRight, ArrowUpRight, Boxes, TrendingUp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Reveal from './Reveal';

const TechChip = ({ label }) => (
  <span className="tech-chip px-3 py-1 rounded-full text-xs font-semibold">{label}</span>
);

const Projects = () => {
  const featured = {
    title: 'LogiTrack',
    type: 'Gestion logistique (API REST + Frontend)',
    icon: <Boxes className="text-accent" size={20} />,
    description:
      "Application de gestion logistique : API REST sécurisée (Spring Boot + Spring Security + JWT) et frontend React 19. Gestion des clients, produits, commandes et utilisateurs avec contrôle d'accès par rôles (ADMIN, MANAGER, AGENT), tableau de bord adapté et observabilité complète.",
    tech: [
      'Java 17',
      'Spring Boot 3',
      'Spring Security (JWT)',
      'Spring Data JPA',
      'MapStruct',
      'MySQL',
      'Swagger',
      'React 19',
      'Vite',
      'React Router',
      'Axios',
      'React Hook Form',
      'Yup',
      'MUI',
      'Docker',
      'Nginx',
      'Prometheus',
      'Grafana',
      'OpenFeign',
      'Resilience4j',
    ],
    github: 'https://github.com/noha20009/projet-logitrack',
    image: '/photo/logitrack.png',
  };

  const projects = [
    {
      title: 'Système Gestion Médicale',
      type: 'Application Spring Boot',
      description:
        'API robuste simulant la gestion d\'une clinique : dossiers médicaux, planification des rendez-vous et diagnostics.',
      tech: ['Spring Boot', 'Spring Data JPA', 'MapStruct', 'Docker', 'MySQL', 'JWT'],
      github: 'https://github.com/ENAA-School-Student/brief-SystemedeGestionMedicale',
      image: '/photo/healthCare.png',
    },
    {
      title: 'FenPay',
      type: 'Application Full Stack',
      description:
        'Application de gestion des paiements et facturation : suivi des transactions, commissions et export PDF/Excel.',
      tech: ['Java', 'JDBC', 'MySQL', 'iText', 'Apache POI', 'UML'],
      github: 'https://github.com/noha20009/projet-fenPay',
      image: '/photo/fenPay.png',
    },
    {
      title: 'XTrade',
      type: 'Plateforme de Trading & Finance',
      icon: <TrendingUp className="text-accent" size={14} />,
      description:
        'Plateforme de trading temps réel : cotations WebSocket, ordres conditionnels, portefeuille, graphiques et exports.',
      tech: [
        'Java 17',
        'Spring Boot',
        'Spring Security (JWT)',
        'Spring Data JPA',
        'WebSocket',
        'MySQL',
        'React',
        'TypeScript',
        'Recharts',
        'Axios',
        'Apache POI',
      ],
      github: 'https://github.com/noha20009/XTrade',
      image: '/photo/XTrade.png',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-2 font-headline">
            Projets Récents
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full shadow-[0_0_10px_rgba(255,0,0,0.5)]" />
        </Reveal>

        {/* Featured project: LogiTrack (full width, like at the start) */}
        <Reveal>
          <article className="glass-card card-shine rounded-[2rem] overflow-hidden flex flex-col md:flex-row group mb-8">
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto overflow-hidden relative bg-white/40">
              <img
                src={featured.image}
                alt={`${featured.title} Image`}
                className="w-full h-full object-contain p-8 transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-10 w-full md:w-1/2 flex flex-col justify-center border-l border-white/20">
              <div className="flex items-center gap-2 mb-4">
                {featured.icon}
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">{featured.type}</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-4 font-headline">{featured.title}</h3>
              <p className="text-sm text-on-surface-variant mb-6">{featured.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {featured.tech.map((t) => (
                  <TechChip key={t} label={t} />
                ))}
              </div>
              <div className="mt-auto flex items-center gap-6">
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:text-red-700 transition-colors"
                >
                  Voir le code
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-on-surface-variant hover:text-accent transition-colors"
                >
                  <FaGithub size={16} /> GitHub
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Remaining 3 projects on the same line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article className="glass-card card-shine rounded-[2rem] overflow-hidden flex flex-col group h-full">
                <div className="w-full aspect-video overflow-hidden relative bg-white/40 border-b border-white/20">
                  <img
                    src={project.image}
                    alt={`${project.title} Image`}
                    className="w-full h-full object-contain p-5 transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  {project.icon ? (
                    <div className="flex items-center gap-2 mb-2">
                      {project.icon}
                      <span className="text-[11px] font-semibold text-accent uppercase tracking-widest">{project.type}</span>
                    </div>
                  ) : (
                    <span className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-2">{project.type}</span>
                  )}
                  <h3 className="text-xl font-bold text-on-surface mb-2 font-headline">{project.title}</h3>
                  <p className="text-sm text-on-surface-variant mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <TechChip key={t} label={t} />
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-white/20">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-on-surface hover:text-accent transition-colors"
                    >
                      Détails <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
