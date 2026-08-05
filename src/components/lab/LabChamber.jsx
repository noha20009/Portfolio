import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaJava, FaReact, FaDocker } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

const RUNGS = 22;

// Tech nodes sit in front of the helix, keeping their real brand colours
const nodes = [
  { top: '13%', Icon: FaJava, color: '#E8763B', label: 'Java' },
  { top: '37%', Icon: SiSpringboot, color: '#6DB33F', label: 'Spring Boot' },
  { top: '61%', Icon: FaReact, color: '#61DAFB', label: 'React' },
  { top: '85%', Icon: FaDocker, color: '#2496ED', label: 'Docker' },
];

const bubbles = [
  { left: '30%', delay: '0s', dur: '6s' },
  { left: '58%', delay: '1.6s', dur: '7s' },
  { left: '44%', delay: '3.1s', dur: '6.5s' },
  { left: '68%', delay: '4.2s', dur: '8s' },
  { left: '38%', delay: '2.4s', dur: '7.5s' },
];

const HudPanel = ({ className = '', children, delay = 0, connectorTop = '50%' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, x: 10 }}
    animate={{ opacity: 1, y: 0, x: 0 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`absolute z-30 clip-hud border border-primary/30 bg-[#0a1310]/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] ${className}`}
  >
    {/* Holographic data-link connector reaching toward the chamber node */}
    <span
      aria-hidden="true"
      className="hidden lg:block absolute h-px w-12 -left-12 -translate-y-1/2 bg-gradient-to-l from-primary to-primary/0"
      style={{ top: connectorTop }}
    />
    <motion.span
      aria-hidden="true"
      className="hidden lg:block absolute -left-[52px] -translate-y-1/2 w-2 h-2 rounded-full bg-glow shadow-[0_0_10px_2px_rgba(52,229,160,0.8)]"
      style={{ top: connectorTop }}
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay }}
    />
    {children}
  </motion.div>
);

const LabChamber = () => {
  return (
    <div className="relative w-full max-w-[480px] mx-auto h-[600px] select-none">
      {/* Circuit backdrop */}
      <div className="absolute inset-0 lab-circuit opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_center,rgba(52,229,160,0.14),transparent_60%)]" aria-hidden="true" />

      {/* Chamber */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 lg:left-[38%] top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          {/* Tube cap */}
          <div className="relative z-20 mx-auto w-[236px] h-[34px] rounded-[50%] bg-gradient-to-b from-[#2b3a33] to-[#0d1512] border border-primary/20 shadow-[inset_0_2px_6px_rgba(255,255,255,0.12)]" />
          <div className="relative z-20 mx-auto -mt-4 w-[236px] h-5 bg-gradient-to-b from-[#141d19] to-[#0b120f] border-x border-primary/15" />

          {/* Glass tube body */}
          <div className="relative -mt-2 mx-auto w-[220px] h-[420px] rounded-[26px] border border-primary/25 overflow-hidden tube-glass shadow-[0_0_60px_rgba(52,229,160,0.18),inset_0_0_40px_rgba(52,229,160,0.08)]">
            {/* inner bottom glow */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_bottom,rgba(52,229,160,0.55),transparent_70%)]" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 h-2 bg-glow/80 blur-[2px]" aria-hidden="true" />

            {/* DNA helix */}
            <div className="absolute inset-0 flex items-center justify-center py-6">
              <div className="dna h-[360px]" aria-hidden="true">
                {Array.from({ length: RUNGS }).map((_, i) => (
                  <div
                    key={i}
                    className="dna-rung"
                    style={{
                      top: `${(i / (RUNGS - 1)) * 100}%`,
                      animationDelay: `${-(i * (4 / RUNGS))}s`,
                    }}
                  >
                    <span className="dna-node" />
                    <span className="dna-node accent" />
                  </div>
                ))}
              </div>
            </div>

            {/* Tech nodes */}
            {nodes.map(({ top, Icon, color, label }) => (
              <motion.div
                key={label}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ top }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: Math.random() }}
              >
                <div className="w-14 h-14 rounded-full bg-[#0a120f]/90 border border-primary/30 backdrop-blur-sm flex items-center justify-center shadow-[0_0_18px_rgba(52,229,160,0.35)]">
                  <Icon size={26} style={{ color }} />
                </div>
              </motion.div>
            ))}

            {/* rising bubbles */}
            {bubbles.map((b, i) => (
              <span
                key={i}
                className="absolute bottom-6 w-1.5 h-1.5 rounded-full bg-glow/80"
                style={{ left: b.left, animation: `bubble-rise ${b.dur} ease-in ${b.delay} infinite` }}
                aria-hidden="true"
              />
            ))}

            {/* glass vertical highlights */}
            <div className="absolute top-0 bottom-0 left-3 w-6 bg-gradient-to-b from-white/20 to-transparent blur-[2px]" aria-hidden="true" />
            <div className="absolute top-0 bottom-0 right-4 w-3 bg-gradient-to-b from-white/15 to-transparent blur-[1px]" aria-hidden="true" />
          </div>

          {/* Base platform */}
          <div className="relative z-20 -mt-3">
            <div className="mx-auto w-[248px] h-9 rounded-[50%] bg-gradient-to-b from-[#1a2620] to-[#0a110e] border border-primary/20 shadow-[0_10px_30px_rgba(0,0,0,0.6)]" />
            <div className="mx-auto -mt-4 w-[280px] h-11 rounded-[50%] bg-gradient-to-b from-[#141d19] to-[#080d0b] border border-primary/15 flex items-center justify-center">
              <div className="w-[220px] h-1.5 rounded-full bg-glow/60 blur-[1px]" />
            </div>
            <div className="mx-auto -mt-5 w-[320px] h-12 rounded-[50%] bg-gradient-to-b from-[#0f1613] to-[#060a09] border border-primary/10" />
            {/* rotating glow ring */}
            <div className="absolute left-1/2 top-6 -translate-x-1/2 w-[300px] h-[70px] animate-ring-rotate opacity-70" aria-hidden="true">
              <div className="absolute inset-0 rounded-[50%] border-t-2 border-glow/50 blur-[1px]" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* HUD: Spring Boot mastery card */}
      <HudPanel delay={0.5} connectorTop="72%" className="top-[14%] right-0 w-[208px] p-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-primary font-bold text-sm">Spring Boot</h4>
          <span className="w-1.5 h-1.5 rounded-full bg-glow animate-pulse" />
        </div>
        <p className="text-text-light text-[11px] leading-relaxed mb-3">
          Framework Java pour des applications robustes et évolutives.
        </p>
        <div className="flex items-center justify-between text-[11px] mb-1">
          <span className="text-text-light">Maîtrise</span>
          <span className="text-text-main font-semibold">90%</span>
        </div>
        <div className="h-1.5 rounded-full bg-primary/15 overflow-hidden mb-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '90%' }}
            transition={{ duration: 1.1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-primary to-glow"
          />
        </div>
        <a
          href="#skills"
          className="inline-flex items-center gap-1 text-[11px] font-medium text-primary border border-primary/30 rounded-md px-2.5 py-1.5 hover:bg-primary hover:text-[#04110B] transition-colors"
        >
          En savoir plus <ArrowRight size={12} />
        </a>
      </HudPanel>

      {/* HUD: system status */}
      <HudPanel delay={0.7} connectorTop="28%" className="bottom-[8%] right-0 w-[198px] p-4">
        <span className="text-[10px] font-mono tracking-widest text-text-light/70">SYSTÈME</span>
        <div className="mt-2 space-y-1 text-[11px]">
          <div className="flex justify-between">
            <span className="text-text-light">État :</span>
            <span className="text-glow font-semibold">Optimal</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-light">Charge :</span>
            <span className="text-text-main">32%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-light">Expériences :</span>
            <span className="text-text-main">12+</span>
          </div>
        </div>
        <svg viewBox="0 0 160 40" className="w-full h-8 mt-2" aria-hidden="true">
          <polyline
            points="0,30 20,26 40,32 60,18 80,24 100,10 120,20 140,8 160,16"
            fill="none"
            stroke="var(--color-glow)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="300"
            style={{ animation: 'sparkline-draw 2s ease-out forwards' }}
          />
        </svg>
      </HudPanel>
    </div>
  );
};

export default LabChamber;
