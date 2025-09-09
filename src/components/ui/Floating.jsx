import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Floating = ({
  children,
  y = 12, // float distance
  duration = 2, // base duration
  delay, // allow per-card random or fixed delay
  className = '',
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // If no delay provided, randomize for uniqueness
    const randomDelay = delay ?? Math.random() * 2;
    const randomDuration = duration + Math.random(); // small variation

    gsap.to(ref.current, {
      y: `+=${y}`,
      duration: randomDuration,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: randomDelay,
    });
  }, [y, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Floating;
