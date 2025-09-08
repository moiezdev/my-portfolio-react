import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Magnetic from './Magnetic';

const Button = ({ children, onClick, className, primary }) => {
  const btnRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const overlay = overlayRef.current;

    const handleMouseEnter = () => {
      gsap.to(overlay, {
        x: '0%',
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(overlay, {
        x: '-100%',
        duration: 0.4,
        ease: 'power2.inOut',
      });
    };

    btn.addEventListener('mouseenter', handleMouseEnter);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mouseenter', handleMouseEnter);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Magnetic strength={0.2}>
      <button
        ref={btnRef}
        onClick={onClick}
        className={`cursor-pointer cursor-scale-0 relative overflow-hidden px-4 py-2 border ${
          primary ? 'border-primary text-white' : 'border-gray-a text-gray-a'
        } transition ${className}`}
      >
        {/* overlay for mask animation */}
        <span
          ref={overlayRef}
          className={`absolute top-0 left-0 w-full h-full ${
            primary ? 'bg-primary/10' : 'bg-gray-a/20'
          } -translate-x-full pointer-events-none`}
          style={{ zIndex: 0 }}
        ></span>
        <span className="relative z-10">{children}</span>
      </button>
    </Magnetic>
  );
};

export default Button;
