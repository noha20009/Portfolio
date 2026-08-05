import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const LOG_LINES = [
  'Initialisation du laboratoire…',
  'Calibration des interfaces holographiques…',
  'Connexion aux systèmes Full Stack…',
  'Laboratoire prêt.',
];

const SESSION_KEY = 'lab-booted';

const Preloader = ({ onComplete }) => {
  const reduced = useReducedMotion();
  const [skip] = useState(() => {
    try {
      return sessionStorage.getItem(SESSION_KEY) === '1';
    } catch {
      return false;
    }
  });
  const [visible, setVisible] = useState(!skip);
  const [lineIndex, setLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (skip) {
      onComplete();
      return;
    }

    if (reduced) {
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        /* private browsing may block storage */
      }
      setVisible(false);
      onComplete();
      return;
    }

    const lineTimer = setInterval(() => {
      setLineIndex((i) => Math.min(i + 1, LOG_LINES.length - 1));
    }, 420);

    const progressTimer = setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 18 + 6, 100));
    }, 180);

    const finishTimer = setTimeout(() => {
      clearInterval(lineTimer);
      clearInterval(progressTimer);
      setProgress(100);
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        /* private browsing may block storage */
      }
      setTimeout(() => setVisible(false), 380);
      setTimeout(onComplete, 780);
    }, 1900);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progressTimer);
      clearTimeout(finishTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-bg-light"
        >
          <div className="absolute inset-0 text-primary/10 bg-dot-grid" />
          <div className="relative flex flex-col items-center px-6 w-full max-w-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl font-bold text-primary mb-8 tracking-widest"
            >
              NM<span className="text-accent">.</span>
            </motion.div>

            <div className="w-full h-1 bg-primary/15 rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent/70 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>

            <div className="h-5 text-xs font-mono text-text-light tracking-wide">
              <AnimatePresence mode="wait">
                <motion.span
                  key={lineIndex}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  {LOG_LINES[lineIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
