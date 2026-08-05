import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { usePointerFine } from '../../hooks/useLabMotion';

const spring = { stiffness: 200, damping: 20, mass: 0.4 };

const TiltCard = ({ children, className = '', maxTilt = 8, glare = true, ...rest }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const pointerFine = usePointerFine();
  const interactive = pointerFine && !reduced;

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), spring);
  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.5), transparent 55%)`
  );

  const handleMove = (e) => {
    if (!interactive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={interactive ? { rotateX, rotateY, transformPerspective: 900 } : undefined}
      className={`relative ${className}`}
      {...rest}
    >
      {children}
      {interactive && glare && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: glareBackground }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
