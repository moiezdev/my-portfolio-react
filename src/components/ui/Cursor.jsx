import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Cursor = ({ color = '#FFFF00', size = 48 }) => {
  const cursorPointerRef = useRef(null);
  const cursorFollowerRef = useRef(null);
  const isPointerRef = useRef(false);
  const isVisibleRef = useRef(true);
  const inactivityTimeout = useRef(null);
  const colorRef = useRef(color);
  const scaleRef = useRef(1);

  useEffect(() => {
    const cursorPointer = cursorPointerRef.current;
    const cursorFollower = cursorFollowerRef.current;

    // Initial state
    gsap.set(cursorPointer, { scale: 0.6, opacity: 1 });
    gsap.set(cursorFollower, { scale: 1, opacity: 1 });

    const moveCursor = (e) => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        updateCursorStyle(isPointerRef.current); // ← Reapply visible styles if it was hidden
      }

      resetInactivityTimer();

      gsap.to(cursorPointer, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.12,
        ease: 'power3.out',
      });
    };

    const updateCursorStyle = (hovering) => {
      const newScale = hovering ? scaleRef.current : 0.6;
      const followerScale = hovering ? 0.6 : scaleRef.current;
      const newColor = hovering ? colorRef.current : 'transparent';
      const newOpacity = isVisibleRef.current ? 1 : 0;

      gsap.to(cursorPointer, {
        scale: newScale,
        backgroundColor: newColor,
        opacity: newOpacity,
        duration: 0.25,
        ease: 'power3.out',
      });

      gsap.to(cursorFollower, {
        scale: followerScale,
        opacity: hovering ? 0 : newOpacity,
        duration: 0.25,
        ease: 'power3.out',
      });
    };

    const updateCursorType = (e) => {
      let el = e.target;
      let hovering = false;
      scaleRef.current = 1; // reset to default scale

      while (el && el !== document.body) {
        if (el.tagName === 'A' || el.classList.contains('cursor-pointer')) {
          // hover size

          let scaleClass = Array.from(el.classList).find((c) => c.startsWith('cursor-scale-'));
          if (scaleClass) {
            const newScale = parseFloat(scaleClass.replace('cursor-scale-', ''), 10);
            if (!isNaN(newScale) && newScale >= 0) {
              scaleRef.current = newScale;
            }
          }
          if (el.classList.contains('cursor-white')) {
            colorRef.current = getComputedStyle(document.documentElement).getPropertyValue(
              '--color-white'
            );
          } else if (el.classList.contains('cursor-primary')) {
            colorRef.current = getComputedStyle(document.documentElement).getPropertyValue(
              '--color-primary'
            );
          } else {
            colorRef.current = '#FFFF00';
          }
          hovering = true;
          break;
        }
        el = el.parentElement;
      }

      if (hovering !== isPointerRef.current) {
        isPointerRef.current = hovering;

        updateCursorStyle(hovering, colorRef.current);
        isVisibleRef.current = true;
      }
    };

    const resetInactivityTimer = () => {
      if (inactivityTimeout.current) {
        isVisibleRef.current = true;
        clearTimeout(inactivityTimeout.current);
      }

      inactivityTimeout.current = setTimeout(() => {
        isVisibleRef.current = false;
        gsap.to(cursorPointer, { opacity: 0, duration: 0.3 });
        gsap.to(cursorFollower, { opacity: 0, duration: 0.3 });
      }, 5000);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', updateCursorType);
    window.addEventListener('scroll', () => {
      isVisibleRef.current = false;
      gsap.to(cursorPointer, { opacity: 0, duration: 0.3 });
      gsap.to(cursorFollower, { opacity: 0, duration: 0.3 });
    });
    document.body.style.cursor = 'none';
    resetInactivityTimer();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', updateCursorType);
      window.removeEventListener('scroll', () => {});
      document.body.style.cursor = 'default';
      clearTimeout(inactivityTimeout.current);
    };
  }, [color]);

  return (
    <div
      ref={cursorPointerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: size,
        height: size,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        backgroundColor: 'transparent',
        mixBlendMode: 'difference',
        isolation: 'isolate',
      }}
    >
      <span
        ref={cursorFollowerRef}
        className="flex items-center justify-center w-full h-full border-[3px] border-white z-[-1]"
      >
        <span className="inline-block bg-white w-[4px] h-[4px] rounded-full"></span>
      </span>
    </div>
  );
};

export default Cursor;
