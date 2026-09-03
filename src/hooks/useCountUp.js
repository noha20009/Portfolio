import { useEffect, useState } from 'react';

const useCountUp = (target, { duration = 1600, start = 0, active = true } = {}) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!active) {
      setValue(start);
      return;
    }
    let rafId;
    let startTime;

    const step = (now) => {
      if (startTime === undefined) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(start + (target - start) * eased);
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, start, active]);

  return value;
};

export default useCountUp;
