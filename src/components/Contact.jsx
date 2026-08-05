import React from 'react';
import { Mail, MapPin, Download } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Reveal, { StaggerGroup, StaggerItem } from './Reveal';
import GlassPanel from './lab/GlassPanel';
import TiltCard from './lab/TiltCard';
import TransmitButton from './lab/TransmitButton';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-accent/5 blur-3xl lab-beam pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal className="text-center mb-16">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-primary/80 mb-3">
            Terminal de communication
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Contactez-moi</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-text-light">
            Je suis actuellement à l'écoute de nouvelles opportunités. N'hésitez pas à me contacter !
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-8" stagger={0.15}>
          <StaggerItem>
            <TiltCard maxTilt={5} className="group h-full rounded-2xl">
              <GlassPanel className="h-full p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300 lab-scanline">
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 lab-energy-pulse">
                  <Mail size={32} />
                </div>
                <span className="text-[10px] font-mono text-text-light/40 tracking-widest mb-2">CANAL_01 · EMAIL</span>
                <h3 className="text-xl font-bold text-text-main mb-2">Email</h3>
                <p className="text-text-light mb-6">Pour toute demande professionnelle</p>
                <a href="mailto:machkourinouhayla@gmail.com" className="text-primary font-bold hover:underline">
                  machkourinouhayla@gmail.com
                </a>
              </GlassPanel>
            </TiltCard>
          </StaggerItem>

          <StaggerItem>
            <TiltCard maxTilt={5} className="group h-full rounded-2xl">
              <GlassPanel className="h-full p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 lab-energy-pulse">
                  <MapPin size={32} />
                </div>
                <span className="text-[10px] font-mono text-text-light/40 tracking-widest mb-2">CANAL_02 · LOCALISATION</span>
                <h3 className="text-xl font-bold text-text-main mb-2">Localisation</h3>
                <p className="text-text-light mb-2">Béni Mellal, Maroc</p>
                <p className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">Mobilité géographique</p>
              </GlassPanel>
            </TiltCard>
          </StaggerItem>
        </StaggerGroup>

        <Reveal delay={0.2} className="mt-12 text-center flex flex-col md:flex-row items-center justify-center gap-6">
          <TransmitButton
            href="/cv/nouhayla_Machkouri_CV.pdf"
            target="_blank"
            transmittingLabel="Ouverture du dossier…"
            className="px-8 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition-colors shadow-md shadow-accent/20"
          >
            Télécharger mon CV complet
            <Download size={20} className="ml-2" />
          </TransmitButton>

          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/nouhayla-machkouri-589217255" target="_blank" rel="noreferrer" className="p-3 bg-surface-solid/60 border border-primary/15 rounded-full text-text-main hover:text-primary hover:border-primary hover:-translate-y-1 transition-all">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/noha20009" target="_blank" rel="noreferrer" className="p-3 bg-surface-solid/60 border border-primary/15 rounded-full text-text-main hover:text-primary hover:border-primary hover:-translate-y-1 transition-all">
              <FaGithub size={24} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
