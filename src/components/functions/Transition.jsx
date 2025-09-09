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
      { opacity: 0, scale: 0.95, filter: 'blur(12px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out' }
    );

    return () => {
      // Animate out on unmount
      // gsap.to(el, {
      //   opacity: 0,
      //   scale: 0.95,
      //   filter: 'blur(12px)',
      //   duration: 0.4,
      //   ease: 'power2.inOut',
      // });
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen" style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
