import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Magnetic = ({ children, strength = 0.03, duration = 0.5 }, className) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const card = wrapperRef.current;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const offsetX = (e.clientX - (rect.left + rect.width / 2)) * strength;
      const offsetY = (e.clientY - (rect.top + rect.height / 2)) * strength;

      gsap.to(card, {
        x: offsetX,
        y: offsetY,
        duration,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        x: 0,
        y: 0,
        duration,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, duration]);

  return (
    <div
      className={`${className}`}
      ref={wrapperRef}
      style={{ display: 'inline-block', willChange: 'transform' }}
    >
      {children}
    </div>
  );
};

export default Magnetic;
