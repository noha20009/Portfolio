import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import MagneticButton from './MagneticButton';

const TransmitButton = ({ children, transmittingLabel = 'Connexion…', className = '', ...rest }) => {
  const [transmitting, setTransmitting] = useState(false);
  const timeoutRef = useRef(null);

  const handleClick = () => {
    setTransmitting(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setTransmitting(false), 900);
  };

  return (
    <MagneticButton as="a" onClick={handleClick} className={className} {...rest}>
      <AnimatePresence mode="wait" initial={false}>
        {transmitting ? (
          <motion.span
            key="transmitting"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="inline-flex items-center"
          >
            <Loader2 size={18} className="mr-2 animate-spin" />
            {transmittingLabel}
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="inline-flex items-center"
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </MagneticButton>
  );
};

export default TransmitButton;
