import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { usePointerFine } from '../../hooks/useLabMotion';

const CustomCursor = () => {
  const reduced = useReducedMotion();
  const pointerFine = usePointerFine();
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 });

  const active = pointerFine && !reduced;

  useEffect(() => {
    if (!active) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e) => {
      setHovering(!!e.target.closest('a, button, [data-cursor-hover]'));
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', onOver);
    };
  }, [active, x, y, visible]);

  if (!active) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full mix-blend-screen"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        width: hovering ? 46 : 22,
        height: hovering ? 46 : 22,
        opacity: visible ? (hovering ? 0.55 : 0.4) : 0,
        background: 'radial-gradient(circle, rgba(52,229,160,0.9), rgba(52,229,160,0) 70%)',
        transition: 'width 0.25s ease, height 0.25s ease, opacity 0.25s ease',
      }}
    />
  );
};

export default CustomCursor;
