import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Floating = ({
  children,
  y = 12, // how high it floats
  duration = 2, // speed of float
  delay = 0, // start delay
  className = '',
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: `+=${y}`,
      duration,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay,
    });
  }, [y, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Floating;
