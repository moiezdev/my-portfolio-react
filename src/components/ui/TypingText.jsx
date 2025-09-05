import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TypingText = ({ text }) => {
  const el = useRef(null);

  useEffect(() => {
    const chars = text.split('');
    let display = '';
    const timeline = gsap.timeline(); // no repeat

    chars.forEach((char) => {
      timeline.to(el.current, {
        duration: 0.2,
        textContent: display + char,
        onUpdate: () => {
          el.current.textContent = display + char;
        },
        onComplete: () => {
          display += char;
        },
      });
    });
    return () => timeline.kill();
  }, [text]);

  return <span ref={el}></span>;
};

export default TypingText;
