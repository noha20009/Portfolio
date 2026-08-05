import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

const PRIMARY = [150, 218, 190];
const ACCENT = [212, 31, 38];

const ParticleField = () => {
  const canvasRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height, particles, rafId;
    let running = true;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const buildParticles = () => {
      const area = width * height;
      const count = Math.min(55, Math.max(18, Math.floor(area / 28000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.6,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -Math.random() * 0.18 - 0.04,
        alpha: Math.random() * 0.35 + 0.1,
        color: Math.random() < 0.08 ? ACCENT : PRIMARY,
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
    };

    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const [r, g, b] = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.alpha})`;
        ctx.fill();
      }
      rafId = requestAnimationFrame(tick);
    };

    const handleVisibility = () => {
      running = !document.hidden;
      if (running) rafId = requestAnimationFrame(tick);
      else cancelAnimationFrame(rafId);
    };

    resize();
    rafId = requestAnimationFrame(tick);
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default ParticleField;
