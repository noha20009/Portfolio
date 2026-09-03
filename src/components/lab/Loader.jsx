import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduced) {
      setVisible(false);
      onComplete();
      return;
    }

    const progressTimer = setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 22 + 8, 100));
    }, 140);

    const finishTimer = setTimeout(() => {
      clearInterval(progressTimer);
      setProgress(100);
      setTimeout(() => setVisible(false), 350);
      setTimeout(onComplete, 750);
    }, 1200);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(finishTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center w-full max-w-xs px-6"
          >
            <div className="text-3xl font-extrabold text-on-surface font-headline mb-8 tracking-widest">
              NM<span className="text-accent">.dev</span>
            </div>

            <div className="w-full h-1 bg-glass-border rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-accent rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>

            <div className="h-4 text-xs font-semibold text-on-surface-variant tracking-wide">
              Chargement du portfolio…
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
