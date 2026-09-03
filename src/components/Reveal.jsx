import React from 'react';
import { motion } from 'framer-motion';

const directions = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { y: 0, x: 40 },
  right: { y: 0, x: -40 },
  none: { y: 0, x: 0 },
};

const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance = 40,
  blur = 6,
  scale = 1,
  className = '',
  once = true,
  amount = 0.15,
}) => {
  const base = directions[direction] ?? directions.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: base.y * (distance / 40), x: base.x * (distance / 40), filter: `blur(${blur}px)`, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)', scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerGroup = ({ children, className = '', stagger = 0.12, once = true, amount = 0.15 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once, amount }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: stagger } },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = '', direction = 'up' }) => {
  const offset = directions[direction] ?? directions.up;
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: offset.y, x: offset.x, filter: 'blur(6px)' },
        show: { opacity: 1, y: 0, x: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
