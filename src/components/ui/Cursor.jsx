import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Cursor = ({ color = '#FFFF00', size = 48 }) => {
  const cursorPointerRef = useRef(null);
  const cursorFollowerRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const inactivityTimeout = useRef(null);

  useEffect(() => {
    const cursorPointer = cursorPointerRef.current;

    // Start small and visible
    gsap.set(cursorPointer, { scale: 0.4, opacity: 1 });

    // Smooth follow
    const moveCursor = (e) => {
      setIsVisible(true); // Show cursor on mouse move
      resetInactivityTimer(); // Reset inactivity timer

      gsap.to(cursorPointer, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.12,
        ease: 'power3.out',
      });
    };

    // Detect hover state
    const updateCursorType = (e) => {
      let el = e.target;
      while (el && el !== document.body) {
        if (el.tagName === 'BUTTON' || el.tagName === 'A') {
          setIsPointer(true);
          return;
        }
        el = el.parentElement;
      }
      setIsPointer(false);
    };

    const resetInactivityTimer = () => {
      if (inactivityTimeout.current) {
        clearTimeout(inactivityTimeout.current);
      }
      inactivityTimeout.current = setTimeout(() => {
        setIsVisible(false); // Hide cursor after 5 seconds of inactivity
      }, 5000);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', updateCursorType);

    // Hide native cursor
    document.body.style.cursor = 'none';

    // Start inactivity timer
    resetInactivityTimer();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', updateCursorType);
      document.body.style.cursor = 'default';
      if (inactivityTimeout.current) {
        clearTimeout(inactivityTimeout.current);
      }
    };
  }, []);

  // Animate scale on state change
  useEffect(() => {
    if (cursorPointerRef.current) {
      gsap.to(cursorPointerRef.current, {
        scale: isPointer ? 1 : 0.6, // Larger when hovering, smaller when not
        opacity: isVisible ? 1 : 0, // Hide cursor when not visible
        duration: 0.25,
        ease: 'power3.out',
        backgroundColor: isPointer ? color : 'transparent', // Change color on hover
      });
    }
    if (cursorFollowerRef.current) {
      gsap.to(cursorFollowerRef.current, {
        scale: isPointer ? 0.6 : 1, // Smaller inner circle when hovering
        duration: 0.25,
        ease: 'power3.out',
        opacity: isPointer ? 0 : isVisible ? 1 : 0, // Hide follower when cursor is not visible
      });
    }
  }, [color, isPointer, isVisible]);

  return (
    <div
      ref={cursorPointerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: size,
        height: size,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        backgroundColor: color,
        mixBlendMode: isPointer ? 'difference' : 'normal', // subtle color blending
        isolation: 'isolate', // Ensure blend mode works
      }}
    >
      <span
        ref={cursorFollowerRef}
        className="flex items-center justify-center w-full h-full border-[3px] border-white z-[-1]"
      >
        <span className="inline-block bg-white w-[4px] h-[4px]"></span>
      </span>
    </div>
  );
};

export default Cursor;
