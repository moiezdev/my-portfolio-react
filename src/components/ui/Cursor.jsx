import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Cursor = ({ pointerColor = '#FFFF00', normalColor = '#abb2bf', size = 48 }) => {
  const cursorRef = useRef(null);
  const normalRef = useRef(null);
  const pointerRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    gsap.set(cursor, { scale: 1, opacity: 1 });
    gsap.set(normalRef.current, { opacity: 1, scale: 1 });
    gsap.set(pointerRef.current, { opacity: 0, scale: 0 });

    // Smooth follow
    const moveCursor = (e) => {
      gsap.to(cursor, {
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

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', updateCursorType);

    // Hide native cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', updateCursorType);
      document.body.style.cursor = 'default';
    };
  }, []);

  // Animate smooth transition
  useEffect(() => {
    if (isPointer) {
      gsap.to(normalRef.current, { opacity: 0, scale: 0.5, duration: 0.25 });
      gsap.to(pointerRef.current, { opacity: 1, scale: 1, duration: 0.25 });
    } else {
      gsap.to(normalRef.current, { opacity: 1, scale: 1, duration: 0.25 });
      gsap.to(pointerRef.current, { opacity: 0, scale: 0.5, duration: 0.25 });
    }
  }, [isPointer]);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
    >
      {/* Normal cursor */}
      <div
        ref={normalRef}
        style={{
          width: size,
          height: size,
          border: `2px solid ${normalColor}`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          mixBlendMode: 'difference', // Added blend mode
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            backgroundColor: normalColor,
            borderRadius: '50%',
            mixBlendMode: 'difference', // Added blend mode
          }}
        />
      </div>

      {/* Pointer cursor (blend mode yellow circle) */}
      <div
        ref={pointerRef}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: pointerColor,
          mixBlendMode: 'difference', // Ensure blend mode is applied
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default Cursor;
