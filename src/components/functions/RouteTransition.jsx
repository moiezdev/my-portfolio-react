// components/RouteTransition.jsx
import { useEffect, useRef, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { gsap } from 'gsap';

export default function RouteTransition() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const contentRef = useRef();

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      const tl = gsap.timeline({
        onComplete: () => setDisplayLocation(location), // swap after anim
      });

      // Fade + blur + scale out (old page)
      tl.set(contentRef.current, {
        opacity: 0,
        scale: 0.98,
        filter: 'blur(12px)',
        ease: 'power2.inOut',
      })
        // Instantly reset for new page
        .to(contentRef.current, {
          opacity: 0,
          scale: 0.98,
          duration: 0.5,
          filter: 'blur(12px)',
        })
        // Fade + scale in (new page)
        .to(contentRef.current, {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.5,
          ease: 'power2.out',
        });
    }
  }, [location, displayLocation]);

  return (
    <div className="relative overflow-hidden">
      {/* Page content */}
      <div ref={contentRef} key={displayLocation.pathname}>
        <Outlet context={{ location: displayLocation }} />
      </div>
    </div>
  );
}
