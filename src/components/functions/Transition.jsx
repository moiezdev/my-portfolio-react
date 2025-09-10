// components/Transition.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Transition({ children }) {
  const containerRef = useRef();

  useEffect(() => {
    const el = containerRef.current;

    // Animate in on mount
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.98, filter: 'blur(12px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.3, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen" style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
