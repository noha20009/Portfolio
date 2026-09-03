import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import useCountUp from '../../hooks/useCountUp';

const AnimatedCounter = ({ to, duration = 1600, prefix = '', suffix = '', className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const value = useCountUp(to, { duration, active: inView });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(value)}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
