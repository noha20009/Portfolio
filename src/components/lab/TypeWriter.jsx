import React, { useEffect, useState, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

const TypeWriter = ({ words = [], className = '', typeSpeed = 70, deleteSpeed = 40, pause = 1600 }) => {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (reduced || words.length === 0) {
      setText(words[0] ?? '');
      return;
    }

    const current = words[index % words.length];
    clearTimeout(timeoutRef.current);

    if (!deleting) {
      if (text.length < current.length) {
        timeoutRef.current = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (text.length > 0) {
        timeoutRef.current = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause, reduced]);

  return (
    <span className={className}>
      {text}
      {!reduced && <span className="inline-block w-[2px] ml-0.5 h-[1em] -mb-[0.1em] bg-accent animate-pulse" />}
    </span>
  );
};

export default TypeWriter;
