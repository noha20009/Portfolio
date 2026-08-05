import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { usePointerFine } from '../../hooks/useLabMotion';

const spring = { stiffness: 250, damping: 18, mass: 0.3 };

const MagneticButton = ({ as: Tag = 'a', children, className = '', strength = 0.35, ...rest }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const pointerFine = usePointerFine();
  const interactive = pointerFine && !reduced;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  const handleMove = (e) => {
    if (!interactive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = motion[Tag] ?? motion.a;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={interactive ? { x: springX, y: springY } : undefined}
      whileTap={{ scale: 0.95 }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default MagneticButton;
